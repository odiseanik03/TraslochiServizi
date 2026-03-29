"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function CountUp({ to, suffix }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    const durationMs = 900;
    const start = performance.now();

    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, to]);

  return (
    <span ref={ref} style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
      {inView ? value : to}
      {suffix}
    </span>
  );
}

export default function WhyChooseUsSection() {
  const points = useMemo(
    () => [
      {
        title: "Rapidità",
        text: "Organizzazione e tempi chiari: ci muoviamo in modo efficiente e senza improvvisazioni.",
      },
      {
        title: "Preventivi chiari",
        text: "Spieghiamo cosa è incluso e cosa no: niente giri di parole, niente confusione.",
      },
      {
        title: "Servizio su misura",
        text: "Dal piccolo sgombero al trasloco completo: scegliamo insieme la soluzione più adatta.",
      },
      {
        title: "Operativi a Verona e dintorni",
        text: "Interveniamo in città e nelle zone limitrofe, con disponibilità 7 giorni su 7.",
      },
    ],
    []
  );

  return (
    <section id="perche" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Perché sceglierci</div>
          <motion.h2
            className="title titleGradient"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Un’esperienza premium, semplice e veloce
          </motion.h2>
          <p className="subtitle">
            L’obiettivo è uno solo: farti concludere il lavoro senza stress, con un servizio ordinato e professionale.
          </p>
        </div>

        <div className="grid grid3" style={{ marginBottom: 18 }}>
          <motion.div className="card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5 }}>
            <h3 className="cardTitle">Disponibilità</h3>
            <p className="cardText">
              <CountUp to={7} /> giorni su 7, su appuntamento.
            </p>
          </motion.div>
          <motion.div className="card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: 0.05 }}>
            <h3 className="cardTitle">Zona operativa</h3>
            <p className="cardText">
              Verona + comuni limitrofi.
            </p>
          </motion.div>
          <motion.div className="card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="cardTitle">Gestione semplice</h3>
            <p className="cardText">Una chiamata, un preventivo chiaro, un intervento ordinato.</p>
          </motion.div>
        </div>

        <div className="grid grid4">
          {points.map((p, idx) => (
            <motion.div
              key={p.title}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
            >
              <h3 className="cardTitle">{p.title}</h3>
              <p className="cardText">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 18 }} className="btnRow">
          <a className="btn btnPrimary" href="tel:+393926900003">
            Chiama ora
          </a>
          <a className="btn btnSecondary" href="#contatti">
            Richiedi un preventivo
          </a>
        </div>
      </div>
    </section>
  );
}
