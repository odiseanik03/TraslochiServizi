"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTruckMoving, FaPeopleCarryBox } from "react-icons/fa6";

const DualServiceSection = () => {
  return (
    <section id="servizi-principali" className="section">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">I nostri servizi principali</div>
          <motion.h2
            className="title titleGradient"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Traslochi e sgomberi professionali a Verona
          </motion.h2>
          <p className="subtitle">
            Traslochi Servizi e la ditta di riferimento a Verona e provincia per traslochi
            residenziali e commerciali, sgomberi di ogni tipo di spazio e svuotamenti professionali.
            Servizi completi di traslochi e sgomberi a Verona con un unico interlocutore per ogni esigenza.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {/* Traslochi Block */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ borderLeft: "4px solid var(--primary)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, rgba(139, 30, 63, 0.14), rgba(176, 141, 87, 0.14))",
                  border: "1px solid rgba(2, 6, 23, 0.08)",
                  color: "var(--primary)",
                  fontSize: "1.3rem",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <FaTruckMoving />
              </span>
              <h3 className="cardTitle" style={{ margin: 0 }}>Traslochi a Verona</h3>
            </div>
            <p className="cardText" style={{ lineHeight: 1.7 }}>
              Organizziamo <strong>traslochi residenziali e commerciali</strong> a Verona e in tutta
              la provincia. Trasloco casa, ufficio, piccoli spostamenti: pianificazione chiara,
              protezione arredi, smontaggio e rimontaggio mobili. Preventivi gratuiti e interventi
              rapidi 7 giorni su 7.
            </p>
            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Link
                href="/traslochi-verona"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                }}
              >
                Servizio traslochi a Verona &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Sgomberi Block */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            style={{ borderLeft: "4px solid var(--accent)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, rgba(176, 141, 87, 0.14), rgba(139, 30, 63, 0.14))",
                  border: "1px solid rgba(2, 6, 23, 0.08)",
                  color: "var(--accent)",
                  fontSize: "1.3rem",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <FaPeopleCarryBox />
              </span>
              <h3 className="cardTitle" style={{ margin: 0 }}>Sgomberi a Verona</h3>
            </div>
            <p className="cardText" style={{ lineHeight: 1.7 }}>
              <strong>PREVENTIVO GRATUITO</strong> per traslochi e sgomberi professionali a Verona
              e provincia: traslochi di case, uffici e piccoli spostamenti, oltre a sgombero
              appartamenti, cantine, soffitte, garage e magazzini. Servizio completo con gestione
              dei materiali, protezione degli arredi, pulizia finale e organizzazione rapida,
              anche in giornata.
            </p>
            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Link
                href="/sgomberi-verona"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                }}
              >
                Servizio sgomberi a Verona &rarr;
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Sub-services quick links */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          style={{ marginTop: 24 }}
        >
          <h3 className="cardTitle">Tutti i nostri servizi di sgombero e svuotamento</h3>
          <p className="cardText" style={{ lineHeight: 1.7, marginBottom: 14 }}>
            Oltre ai traslochi, offriamo servizi mirati di sgombero e svuotamento per ogni tipo di
            spazio a Verona e provincia:
          </p>
          <nav aria-label="Servizi di sgombero specifici">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <li>
                <Link className="btn btnSecondary" href="/sgomberi-appartamenti-verona">
                  Sgombero appartamenti a Verona
                </Link>
              </li>
              <li>
                <Link className="btn btnSecondary" href="/sgombero-cantine-verona">
                  Sgombero cantine a Verona
                </Link>
              </li>
              <li>
                <Link className="btn btnSecondary" href="/svuotamento-garage-verona">
                  Svuotamento garage a Verona
                </Link>
              </li>
              <li>
                <Link className="btn btnSecondary" href="/svuotamento-magazzini-verona">
                  Svuotamento magazzini a Verona
                </Link>
              </li>
              <li>
                <Link className="btn btnSecondary" href="/traslochi-e-sgomberi-verona">
                  Traslochi e sgomberi combinati
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>

        <div className="btnRow" style={{ marginTop: 20 }}>
          <a className="btn btnPrimary" href="tel:+393926900003">
            Chiama per un preventivo gratuito
          </a>
          <Link className="btn btnSecondary" href="#contatti">
            Richiedi un preventivo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DualServiceSection;
