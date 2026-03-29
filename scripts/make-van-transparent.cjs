const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const projectRoot = path.resolve(__dirname, '..');
const inputPath = path.join(projectRoot, 'public', 'images', 'van.png');
const backupPath = path.join(projectRoot, 'public', 'images', 'van-source.png');

function colorDistSq(a, b) {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;
  return dr * dr + dg * dg + db * db;
}

function getPixel(png, x, y) {
  const idx = (png.width * y + x) << 2;
  return {
    r: png.data[idx],
    g: png.data[idx + 1],
    b: png.data[idx + 2],
    a: png.data[idx + 3],
    idx,
  };
}

function setAlpha(png, idx, a) {
  png.data[idx + 3] = a;
}

function pickTwoColors(samples) {
  const c1 = samples[0];
  let maxD = -1;
  let c2 = samples[0];
  for (const s of samples) {
    const d = colorDistSq(s, c1);
    if (d > maxD) {
      maxD = d;
      c2 = s;
    }
  }
  return { c1, c2 };
}

async function main() {
  if (!fs.existsSync(inputPath)) {
    console.error(`Missing: ${inputPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
  }

  const buf = fs.readFileSync(inputPath);
  const png = PNG.sync.read(buf);

  // Gather edge samples to detect background colors.
  const step = Math.max(1, Math.floor(Math.min(png.width, png.height) / 36));
  const samples = [];

  for (let x = 0; x < png.width; x += step) {
    samples.push(getPixel(png, x, 0));
    samples.push(getPixel(png, x, png.height - 1));
  }
  for (let y = 0; y < png.height; y += step) {
    samples.push(getPixel(png, 0, y));
    samples.push(getPixel(png, png.width - 1, y));
  }

  // Reduce to just RGB.
  const rgbSamples = samples.map((p) => ({ r: p.r, g: p.g, b: p.b }));
  const { c1, c2 } = pickTwoColors(rgbSamples);

  // Tolerance tuned for typical exported checkerboard/solid backgrounds.
  // Increase if background isn't being fully removed.
  const tol = 26;
  const tolSq = tol * tol;

  const visited = new Uint8Array(png.width * png.height);
  const queueX = [];
  const queueY = [];

  function enqueue(x, y) {
    queueX.push(x);
    queueY.push(y);
  }

  // Seed BFS with the entire border.
  for (let x = 0; x < png.width; x++) {
    enqueue(x, 0);
    enqueue(x, png.height - 1);
  }
  for (let y = 0; y < png.height; y++) {
    enqueue(0, y);
    enqueue(png.width - 1, y);
  }

  let removed = 0;

  while (queueX.length) {
    const x = queueX.pop();
    const y = queueY.pop();
    const vIdx = png.width * y + x;
    if (visited[vIdx]) continue;
    visited[vIdx] = 1;

    const p = getPixel(png, x, y);
    const rgb = { r: p.r, g: p.g, b: p.b };

    const isBg = colorDistSq(rgb, c1) <= tolSq || colorDistSq(rgb, c2) <= tolSq;
    if (!isBg) continue;

    if (p.a !== 0) {
      setAlpha(png, p.idx, 0);
      removed++;
    }

    // 8-connected neighbors (important for checkerboard diagonal connectivity)
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= png.width || ny >= png.height) continue;
        const nVIdx = png.width * ny + nx;
        if (!visited[nVIdx]) enqueue(nx, ny);
      }
    }
  }

  // Write out with alpha.
  const out = PNG.sync.write(png);
  fs.writeFileSync(inputPath, out);

  console.log(
    JSON.stringify(
      {
        input: path.relative(projectRoot, inputPath),
        backup: path.relative(projectRoot, backupPath),
        width: png.width,
        height: png.height,
        removedPixels: removed,
        backgroundColors: { c1, c2 },
        tolerance: tol,
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
