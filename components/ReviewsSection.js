"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const STAR = "★";
const STAR_EMPTY = "☆";

function Stars({ count = 5 }) {
  return (
    <span style={{ color: "#e0c48a", fontSize: 18, letterSpacing: 2, display: "block", marginBottom: 6 }}>
      {STAR.repeat(count)}{STAR_EMPTY.repeat(5 - count)}
    </span>
  );
}

function useIsMobile(breakpoint = 640) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setMobile(mq.matches);
    const handler = (e) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return mobile;
}

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();

  const whatsappPrefill = encodeURIComponent(
    "Ciao Traslochi Servizi, ho visto il sito e vorrei informazioni e un preventivo. Zona: Verona e limitrofi. Grazie!"
  );

  const reviews = [
    {
      name: "Marco Benedetti",
      title: "Veloci e organizzati",
      text: "Servizio puntuale, comunicazione chiara e lavoro svolto con attenzione. Consigliati.",
      stars: 5,
    },
    {
      name: "Giulia Martinelli",
      title: "Sgombero senza stress",
      text: "Hanno svuotato cantina e garage in modo ordinato e rapido. Preventivo chiaro e nessuna sorpresa.",
      stars: 5,
    },
    {
      name: "Alessandro Zanetti",
      title: "Professionalità",
      text: "Gentili, disponibili e molto concreti. Ottimo supporto anche per piccoli lavori collegati al trasloco.",
      stars: 5,
    },
    {
      name: "Francesca Colombo",
      title: "Trasloco perfetto",
      text: "Trasloco completato in mezza giornata, tutto imballato con cura. Prezzo onesto e zero danni. Super consigliati!",
      stars: 5,
    },
    {
      name: "Lorenzo Pellegrini",
      title: "Svuotamento garage impeccabile",
      text: "Garage pieno di roba accumulata in 20 anni, svuotato e pulito in poche ore. Squadra seria e rispettosa.",
      stars: 5,
    },
    {
      name: "Elena Fontana",
      title: "Finalmente qualcuno affidabile",
      text: "Dopo brutte esperienze con altre ditte, finalmente un servizio serio. Puntuali, prezzi chiari, lavoro pulito.",
      stars: 5,
    },
    {
      name: "Stefano Moretti",
      title: "Trasloco ufficio velocissimo",
      text: "Hanno traslocato il nostro ufficio in un weekend. Tutto organizzato nei minimi dettagli, nulla rotto o perso.",
      stars: 5,
    },
    {
      name: "Paola Rinaldi",
      title: "Cantina svuotata in 2 ore",
      text: "Cantina piena fino al soffitto, svuotata e spazzata in meno di due ore. Ragazzi seri e veloci.",
      stars: 5,
    },
    {
      name: "Roberto Marchetti",
      title: "Prezzo giusto, lavoro eccellente",
      text: "Il preventivo era chiaro e il prezzo finale corrispondeva esattamente. Nessun costo nascosto. Bravi!",
      stars: 5,
    },
    {
      name: "Chiara Galli",
      title: "Consigliati da un'amica",
      text: "Me li ha consigliati la vicina e confermo: gentili, precisi e attenti ai mobili. Li richiamerò sicuramente.",
      stars: 5,
    },
    {
      name: "Davide Ferri",
      title: "Soffitta svuotata senza problemi",
      text: "Soffitta al terzo piano senza ascensore, hanno portato giù tutto senza un graffio. Grande squadra.",
      stars: 5,
    },
    {
      name: "Monica Bianchi",
      title: "Servizio impeccabile",
      text: "Dal primo contatto WhatsApp fino alla fine del lavoro, tutto perfetto. Comunicazione rapida e trasparente.",
      stars: 5,
    },
  ];

  return (
    <section id="recensioni" className="section">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Recensioni</div>
          <motion.h2
            className="title titleGradient"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Cosa dicono i clienti
          </motion.h2>
          <p className="subtitle">
            Un servizio premium si vede dai dettagli: puntualità, ordine, chiarezza e rispetto degli ambienti.
          </p>
        </div>

        <div className="grid grid3">
          {(expanded ? reviews : reviews.slice(0, isMobile ? 1 : 3)).map((r, idx) => (
            <motion.div
              key={r.title}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
            >
              <Stars count={r.stars} />
              <h3 className="cardTitle">{r.title}</h3>
              <p className="cardText">&ldquo;{r.text}&rdquo;</p>
              <p style={{ marginTop: 10, fontSize: 13, color: "#b08d57", fontWeight: 600 }}>{r.name}</p>
            </motion.div>
          ))}
        </div>

        {!expanded && (
          <div style={{ textAlign: "center", marginTop: 18 }}>
            <button
              onClick={() => setExpanded(true)}
              className="btn btnSecondary"
              style={{ minWidth: 200 }}
            >
              Vedi tutte le recensioni ({reviews.length})
            </button>
          </div>
        )}

        <div style={{ marginTop: 18 }} className="btnRow">
          <a
            className="btn btnWhatsApp"
            href={`https://wa.me/393926900003?text=${whatsappPrefill}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Scrivici su WhatsApp
          </a>
          <a className="btn btnPrimary" href="#contatti">
            Richiedi un preventivo
          </a>
        </div>
      </div>
    </section>
  );
}
