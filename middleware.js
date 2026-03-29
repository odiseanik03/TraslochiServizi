import { NextResponse } from "next/server";

// ─── LAYER 2: Known malicious bot / scraper blocking ───
const BLOCKED_BOTS = [
  // Malicious crawlers & scrapers
  "semrushbot", "ahrefsbot", "dotbot", "mj12bot", "blexbot",
  "seznambot", "megaindex", "ltx71", "sogou", "yandexbot",
  "purebot", "linguee", "webmeup", "backlinkcrawler",
  // Vulnerability scanners & attack tools
  "sqlmap", "nmap", "nikto", "masscan", "zgrab",
  "dirbuster", "gobuster", "nuclei", "httpx",
  // Spam / ad-injection bots
  "spambot", "barkrowler", "dataforseo", "serpstatbot",
  "bytespider", "petalbot",
  // Generic bad patterns
  "python-requests", "go-http-client", "curl/", "wget/",
  "scrapy", "httpclient", "java/", "libwww",
  // Additional aggressive bots
  "censysinspect", "shodan", "zoomeye", "netcraft",
  "clickagy", "brandwatch", "tweetmeme", "paperlibot",
  "proximic", "changedetection", "seekport", "turnitinbot",
];

// ─── LAYER 2b: Suspicious path patterns (attack probes) ───
const BLOCKED_PATHS = [
  // WordPress / CMS probes
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/wp-content/i,
  /\/wp-includes/i,
  /\/xmlrpc\.php/i,
  // Admin panel probes (attackers looking for dashboards to hijack)
  /\/admin/i,
  /\/login/i,
  /\/signin/i,
  /\/signup/i,
  /\/register/i,
  /\/dashboard/i,
  /\/panel/i,
  /\/cms/i,
  /\/cpanel/i,
  /\/webmail/i,
  /\/administrator/i,
  /\/user\/login/i,
  /\/auth/i,
  /\/oauth/i,
  /\/account/i,
  /\/filemanager/i,
  /\/editor/i,
  /\/tinymce/i,
  /\/ckeditor/i,
  /\/elfinder/i,
  // Sensitive files
  /\/\.env/i,
  /\/\.git/i,
  /\/\.svn/i,
  /\/\.htaccess/i,
  /\/\.htpasswd/i,
  /\/\.DS_Store/i,
  /\/\.aws/i,
  /\/\.docker/i,
  /\/\.sql/i,
  /\/\.bak/i,
  /\/\.old/i,
  /\/\.orig/i,
  /\/\.swp/i,
  /\/\.zip$/i,
  /\/\.tar/i,
  /\/\.gz$/i,
  /\/\.rar$/i,
  // PHP/server probes
  /\/phpmyadmin/i,
  /\/admin\.php/i,
  /\/config\.php/i,
  /\/setup\.php/i,
  /\/install\.php/i,
  /\/cgi-bin/i,
  /\/eval-stdin/i,
  /\/vendor\//i,
  /\/telescope/i,
  /\/debug/i,
  /\/actuator/i,
  /\/solr/i,
  /\/console/i,
  /\/manager/i,
  /\/shell/i,
  /\/backup/i,
  /\/dump/i,
  /\/database/i,
  /\/db\./i,
  /\/etc\/passwd/i,
  /\/proc\/self/i,
  /\/boot\.ini/i,
  /\/api\/v[0-9]/i,
  /\/graphql/i,
  /\/node_modules/i,
  // Upload & injection vectors
  /\/upload/i,
  /\/uploads/i,
  /\/files/i,
  /\/tmp/i,
  /\/temp/i,
  /\/cache/i,
  /\/wp-json/i,
  /\/rest\/api/i,
  /\/jsonp/i,
  /\/callback/i,
  /\/redirect/i,
];

// ─── LAYER 2c: Block SQL injection / XSS patterns in query strings ───
const ATTACK_PATTERNS = [
  /(\bunion\b.*\bselect\b)/i,     // SQL injection
  /(\bselect\b.*\bfrom\b)/i,      // SQL injection
  /(\bdrop\b.*\btable\b)/i,       // SQL injection
  /(\binsert\b.*\binto\b)/i,      // SQL injection
  /(\/\*|\*\/|--|;--)/,            // SQL comments
  /(<script[\s>])/i,              // XSS
  /(javascript\s*:)/i,            // XSS
  /(on\w+\s*=\s*["'])/i,          // XSS event handlers
  /(\balert\s*\()/i,              // XSS
  /(document\.(cookie|location|write))/i, // XSS
  /(eval\s*\()/i,                 // Code injection
  /(\.\.\/)+(etc|proc|var)/i,     // Path traversal
  /%00/,                          // Null byte injection
  /%3Cscript/i,                   // Encoded XSS  /(<iframe[\s>])/i,              // iframe injection
  /(<embed[\s>])/i,               // embed injection
  /(<object[\s>])/i,              // object injection
  /(<img[^>]+onerror)/i,          // img XSS
  /(src\s*=\s*["']?javascript)/i, // javascript src
  /(data\s*:\s*text\/html)/i,     // data URI injection
  /(\bfetch\s*\()/i,              // fetch injection
  /(\bXMLHttpRequest)/i,          // XHR injection
];

// ─── LAYER 2d: Block porn / gambling / ad-injection spam ───
const SPAM_KEYWORDS = [
  // ── PORN / ADULT (100+) ──
  "porn", "porno", "pornhub", "porntube", "pornstar",
  "xxx", "xxxx", "xxxvideo", "xxxporn",
  "sex", "sexy", "sexcam", "sexchat", "sexdate", "sextube", "sexvideo",
  "adult", "adultfriend", "adultwork", "adultvideo",
  "nude", "nudes", "nudist", "naked", "topless",
  "camgirl", "camshow", "webcam-girl", "livecam", "livesex",
  "onlyfans", "fansly", "manyvids", "justforfans", "loyalfans",
  "livejasmin", "chaturbate", "stripchat", "bongacams", "myfreecams",
  "cam4", "camsoda", "flirt4free", "streamate", "imlive",
  "xvideos", "xhamster", "xnxx", "xtubes", "xtube",
  "pornhub", "redtube", "youporn", "tube8", "spankbang",
  "brazzers", "realitykings", "bangbros", "naughtyamerica",
  "hentai", "hentaihaven", "nhentai", "rule34", "e-hentai",
  "escort", "escorts", "escort-service", "call-girl", "callgirl",
  "erotic", "erotica", "fetish", "bdsm", "bondage", "kink",
  "milf", "milfs", "anal", "blowjob", "creampie", "gangbang", "threesome",
  "dildo", "vibrator", "sextoy", "fleshlight",
  "hooker", "prostitut", "brothel", "massage-happy",
  "dick-pic", "dickpic", "nudes-leak", "leaked-nudes",
  "deepfake-porn", "deepnude", "undress-ai",
  "barely-legal", "teen-porn", "lolita",
  "cuckold", "swinger", "orgy", "dogging",
  "boobs", "tits", "pussy", "cock", "cumshot",

  // ── GAMBLING / BETTING (100+) ──
  "casino", "casinos", "online-casino", "live-casino",
  "poker", "pokerstar", "pokerstars", "texas-holdem",
  "slot", "slots", "slot-machine", "slotgame", "megaslot",
  "blackjack", "roulette", "baccarat", "craps", "keno",
  "betting", "bet-online", "sport-bet", "sportbet", "sportsbet",
  "scommesse", "scommessa", "gioco-d-azzardo", "azzardo",
  "1xbet", "bet365", "pinnacle", "betway", "betfair",
  "bwin", "william-hill", "williamhill", "paddy-power", "paddypower",
  "888casino", "888sport", "888poker",
  "unibet", "ladbrokes", "coral", "betfred", "skybet",
  "bovada", "mybookie", "betonline", "intertops",
  "stake", "stake-com", "rollbit", "roobet", "duelbits",
  "jackpot", "mega-jackpot", "progressive-jackpot",
  "spin-win", "free-spins", "free-spin", "no-deposit",
  "bonus-casino", "welcome-bonus", "deposit-bonus",
  "win-real-money", "win-big", "win-cash",
  "lotto", "lottery", "mega-millions", "powerball",
  "scratch-card", "scratchcard", "instant-win",
  "bookmaker", "bookie", "odds-bet", "accumulator",
  "tipster", "fixed-match", "fixed-matches", "sure-bet",
  "gambling", "gamble", "gambler", "wager",
  "gg-bet", "ggbet", "melbet", "mostbet", "linebet",
  "parimatch", "marathon-bet", "vulkan-bet", "vulkanbet",
  "fairspin", "fortunejack", "bitstarz", "cloudbet",

  // ── CRYPTO / FOREX SCAM (60+) ──
  "crypto-profit", "bitcoin-profit", "bitcoin-era", "bitcoin-code",
  "bitcoin-revolution", "bitcoin-trader", "bitcoin-loophole",
  "bitcoin-circuit", "bitcoin-prime", "bitcoin-up",
  "crypto-engine", "crypto-revolt", "crypto-cash",
  "ethereum-code", "ethereum-trader",
  "forex-signal", "forex-robot", "forex-ea", "forex-profit",
  "binary-option", "binary-trading", "binary-robot",
  "iq-option", "olymptrade", "expert-option", "pocket-option",
  "get-rich", "get-rich-quick", "get-rich-fast",
  "make-money", "make-money-online", "make-money-fast",
  "easy-money", "fast-money", "quick-money", "free-money",
  "passive-income-hack", "income-hack", "money-glitch",
  "pump-and-dump", "rug-pull", "airdrop-free",
  "nft-profit", "nft-free", "crypto-airdrop",
  "trading-bot", "auto-trading", "copy-trading-scam",
  "ponzi", "pyramid-scheme", "mlm-scam", "network-marketing-scam",
  "double-your-money", "guaranteed-return", "risk-free-profit",
  "financial-freedom-hack", "quit-your-job",
  "elon-musk-bitcoin", "celebrity-crypto",

  // ── PHARMA SPAM (40+) ──
  "viagra", "cialis", "levitra", "kamagra", "sildenafil",
  "tadalafil", "vardenafil", "generic-viagra", "buy-viagra",
  "cheap-viagra", "viagra-online", "cialis-online",
  "pharmacy", "online-pharmacy", "canadian-pharmacy",
  "pharmacy-discount", "cheap-pills", "buy-pills",
  "pills", "diet-pills", "weight-loss-pills", "slimming-pills",
  "xanax", "valium", "tramadol", "oxycodone", "hydrocodone",
  "adderall", "modafinil", "ambien", "soma-pills",
  "buy-steroids", "anabolic", "testosterone-boost",
  "cbd-gummies", "thc-gummies", "weed-delivery",
  "hair-loss", "penis-enlargement", "male-enhancement",
  "breast-enlargement", "skin-whitening",
  "miracle-cure", "wonder-drug", "detox-scam",

  // ── AD INJECTION / SPAM / SCAM (60+) ──
  "click-here", "click-now", "click-this",
  "free-download", "free-software", "free-gift",
  "you-won", "you-have-won", "winner-selected",
  "congratulations", "congrats-winner",
  "claim-prize", "claim-reward", "claim-now",
  "act-now", "limited-time", "expires-today", "last-chance",
  "buy-now", "order-now", "subscribe-now",
  "cheap-followers", "buy-followers", "buy-likes", "buy-views",
  "instagram-followers", "tiktok-followers", "youtube-subscribers",
  "seo-service", "link-building", "guest-post", "backlink-service",
  "earn-from-home", "work-from-home-scam",
  "survey-money", "paid-surveys", "cash-surveys",
  "gift-card-free", "free-iphone", "free-samsung",
  "amazon-gift", "walmart-gift", "free-voucher",
  "weight-loss-fast", "lose-weight-quick", "belly-fat",
  "anti-aging", "wrinkle-free", "look-younger",
  "nigerian-prince", "inheritance-fund", "unclaimed-fund",
  "wire-transfer", "western-union-scam",
  "tech-support-scam", "microsoft-scam", "apple-scam",
  "virus-detected", "your-computer-infected",
  "ransomware", "malware-download", "trojan-free",
  "spy-app", "spyware", "keylogger", "hack-tool",
  "ddos-service", "booter", "stresser",
  "fake-id", "fake-passport", "fake-diploma",
  "counterfeit", "replica-watch", "fake-rolex",
];

// ─── LAYER 2e: Block suspicious referrers (spam/ad/porn referrer injection) ───
const BLOCKED_REFERRERS = [
  // Porn
  /porn/i, /xxx/i, /sex/i, /adult/i, /nude/i, /hentai/i,
  /escort/i, /camgirl/i, /onlyfans/i, /chaturbate/i,
  /xvideos/i, /xhamster/i, /xnxx/i, /redtube/i, /youporn/i,
  /livejasmin/i, /stripchat/i, /bongacams/i,
  // Gambling
  /casino/i, /poker/i, /gambling/i, /betting/i,
  /1xbet/i, /bet365/i, /slots/i, /scommesse/i,
  /betway/i, /bwin/i, /unibet/i, /stake\.com/i,
  /mostbet/i, /melbet/i, /ggbet/i, /vulkanbet/i,
  // Pharma
  /viagra/i, /cialis/i, /pharmacy/i, /kamagra/i,
  // Scam / ad spam
  /click-here/i, /free-download/i, /you-won/i,
  /make-money/i, /get-rich/i, /crypto-profit/i,
  /bitcoin-profit/i, /binary-option/i,
  // Known referrer spam domains
  /semalt\.com/i, /buttons-for-website/i, /darodar\.com/i,
  /social-buttons/i, /ilovevitaly/i, /hulfingtonpost/i,
  /econom\.co/i, /o-o-6-o-o\.com/i,
  /best-seo/i, /get-free-traffic/i, /buy-cheap/i,
  /event-tracking/i, /free-social-buttons/i,
  /trafficmonetize/i, /webmonetizer/i, /floating-share/i,];

// ─── LAYER 3: Rate limiter ───
const rateMap = new Map();
const RATE_LIMIT = 80;          // max requests per window
const RATE_WINDOW_MS = 60_000;  // 60 seconds

// Aggressive rate limit for IPs that hit blocked paths (honeypot trap)
const suspiciousMap = new Map();
const SUSPICIOUS_LIMIT = 5;
const SUSPICIOUS_BAN_MS = 600_000; // 10-minute ban after 5 suspicious hits

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateMap.get(ip);

  if (!record || now > record.resetTime) {
    rateMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }

  record.count++;
  if (record.count > RATE_LIMIT) return true;
  return false;
}

function markSuspicious(ip) {
  const now = Date.now();
  const record = suspiciousMap.get(ip);

  if (!record || now > record.banUntil) {
    suspiciousMap.set(ip, { hits: 1, banUntil: 0 });
    return false;
  }

  if (record.banUntil > now) return true; // still banned

  record.hits++;
  if (record.hits >= SUSPICIOUS_LIMIT) {
    record.banUntil = now + SUSPICIOUS_BAN_MS;
    return true;
  }
  return false;
}

function isBanned(ip) {
  const record = suspiciousMap.get(ip);
  return record && record.banUntil > Date.now();
}

// Cleanup stale entries every 5 minutes
if (typeof globalThis.__rateLimitCleanup === "undefined") {
  globalThis.__rateLimitCleanup = setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateMap) {
      if (now > record.resetTime) rateMap.delete(ip);
    }
    for (const [ip, record] of suspiciousMap) {
      if (now > record.banUntil && record.banUntil > 0) suspiciousMap.delete(ip);
    }
  }, 300_000);
}

// ─── LAYER 4: Allowed HTTP methods ───
// Site is fully static (no server forms) — only GET/HEAD/OPTIONS needed
const ALLOWED_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

export function middleware(request) {
  // Skip all security checks in development — they break LAN testing
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // ── Layer 4: Block unusual HTTP methods (PUT, DELETE, PATCH, TRACE) ──
  if (!ALLOWED_METHODS.has(request.method)) {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  // ── Check if IP is banned from previous suspicious activity ──
  if (isBanned(ip)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── Layer 2: Block malicious bots ──
  const isBlockedBot = BLOCKED_BOTS.some((bot) => ua.includes(bot));
  if (isBlockedBot) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Block empty user-agents (almost always bots/scanners)
  if (!ua || ua.length < 5) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── Layer 2b: Block attack path probes ──
  const isBlockedPath = BLOCKED_PATHS.some(
    (pattern) => pattern && pattern.test(pathname)
  );
  if (isBlockedPath) {
    markSuspicious(ip); // track this IP as suspicious
    return new NextResponse("Not Found", { status: 404 });
  }

  // ── Layer 2c: Block SQL injection / XSS in query strings ──
  const fullUrl = pathname + search;
  let decodedUrl;
  try {
    decodedUrl = decodeURIComponent(fullUrl);
  } catch {
    // Malformed URL encoding — likely an attack
    markSuspicious(ip);
    return new NextResponse("Bad Request", { status: 400 });
  }
  const hasAttackPattern = ATTACK_PATTERNS.some((pattern) =>
    pattern.test(decodedUrl)
  );
  if (hasAttackPattern) {
    markSuspicious(ip);
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── Layer 2d: Block porn/gambling/ad-spam keywords in URL ──
  const lowerUrl = decodedUrl.toLowerCase();
  const hasSpamKeyword = SPAM_KEYWORDS.some((kw) => lowerUrl.includes(kw));
  if (hasSpamKeyword) {
    markSuspicious(ip);
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── Layer 2e: Block suspicious referrers (porn/gambling/ad referrer spam) ──
  const referer = (request.headers.get("referer") || "").toLowerCase();
  if (referer) {
    const isBadReferrer = BLOCKED_REFERRERS.some((pattern) => pattern.test(referer));
    if (isBadReferrer) {
      markSuspicious(ip);
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  // ── Layer 3: Rate limiting ──
  if (isRateLimited(ip)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: { "Retry-After": "60" },
    });
  }

  // All clear — continue
  return NextResponse.next();
}

// Only run middleware on page routes & API, skip static assets
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images|animations|robots\\.txt|sitemap\\.xml).*)",
  ],
};
