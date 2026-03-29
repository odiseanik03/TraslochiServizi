"use client";

import { motion } from "framer-motion";

export default function CertificateSection() {
  return (
    <section id="certificato" className="section certSection" aria-label="Certificato esperienza">
      <div className="container">
        <motion.div
          className="certCard"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Floating sparkles */}
          <span className="certSparkle certSparkle1" aria-hidden="true">✦</span>
          <span className="certSparkle certSparkle2" aria-hidden="true">✦</span>
          <span className="certSparkle certSparkle3" aria-hidden="true">✧</span>
          <span className="certSparkle certSparkle4" aria-hidden="true">✦</span>
          <span className="certSparkle certSparkle5" aria-hidden="true">✧</span>

          {/* Ribbon top-left */}
          <span className="certRibbonLeft" aria-hidden="true" />
          <span className="certRibbonRight" aria-hidden="true" />

          {/* Gold seal */}
          <div className="certSeal" aria-hidden="true">
            <span className="certSealInner">★</span>
          </div>

          <div className="certContent">
            <p className="certEyebrow">Certificato di Eccellenza</p>
            <h2 className="certTitle">35 Anni di Esperienza</h2>
            <div className="certDivider" aria-hidden="true" />
            <p className="certBody">
              Dal 1991, al servizio delle famiglie e delle aziende in Belgio, Germania e Grecia.
              Oggi portiamo la nostra esperienza anche in Italia, con la stessa qualità, precisione
              e affidabilità in ogni intervento: dal trasloco allo sgombero, dalla ristrutturazione alla manutenzione.
            </p>
            <p className="certQuote">
              &ldquo;La prima volta con noi sarà per sempre.&rdquo;
            </p>
            <div className="certDivider" aria-hidden="true" />
            <p className="certFooter">
              Traslochi Servizi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
