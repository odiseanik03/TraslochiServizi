"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="section">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Chi siamo</div>
          <motion.h2
            className="title titleGradient"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Un servizio concreto, ordinato e professionale
          </motion.h2>
          <p className="subtitle">
            Traslochi Servizi opera a Verona e zone limitrofe con un approccio pratico: sopralluogo quando serve, pianificazione
            chiara e intervento pulito.
          </p>
        </div>

        <div className="grid grid3">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="cardTitle">Metodo</h3>
            <p className="cardText">
              Ogni lavoro parte da una valutazione rapida: cosa va spostato, cosa va sgomberato, accessi e tempi. Ti diciamo
              subito cosa aspettarti.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <h3 className="cardTitle">Cura</h3>
            <p className="cardText">
              Protezioni, imballaggi quando necessari e attenzione agli ambienti. L’obiettivo è un trasloco senza danni e senza
              stress.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="cardTitle">Affidabilità</h3>
            <p className="cardText">
              Comunicazione chiara, tempi rispettati e lavoro pulito. Siamo operativi 7 giorni su 7, su appuntamento.
            </p>
          </motion.div>
        </div>

        <div className="btnRow" style={{ marginTop: 18 }}>
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
