"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "393926900003";
const WHATSAPP_PREFILL_QUICK = encodeURIComponent(
  "Ciao Traslochi Servizi, vorrei un preventivo. Zona: Verona e limitrofi. Servizio: (trasloco/sgombero/svuotamento). Quando: (data/periodo). Grazie!"
);

export default function ContactSection() {
  const serviceOptions = useMemo(
    () => [
      "Trasloco",
      "Sgombero",
      "Svuotamento appartamento",
      "Cantina / soffitta / garage",
      "Magazzino",
      "Smaltimento mobili",
      "Piccoli lavori edili",
      "Altro",
    ],
    []
  );

  const [form, setForm] = useState({
    nome: "",
    telefono: "",
    servizio: serviceOptions[0],
    messaggio: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text =
      `Ciao, sono ${form.nome || ""}. ` +
      (form.telefono ? `Telefono: ${form.telefono}. ` : "") +
      `Richiedo un preventivo per: ${form.servizio}. ` +
      (form.messaggio ? `Dettagli: ${form.messaggio}` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contatti" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Contatti</div>
          <motion.h2
            className="title titleGradient"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Richiedi un preventivo in pochi secondi
          </motion.h2>
          <p className="subtitle">
            Operativi a Verona e zone limitrofe. Per urgenze, la via più veloce è la chiamata o WhatsApp.
          </p>
        </div>

        <div className="grid" style={{ alignItems: "start", gridTemplateColumns: "1fr" }}>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="cardTitle">Contatto rapido</h3>
            <p className="cardText" style={{ marginBottom: 14 }}>
              Telefono diretto: <a href="tel:+393926900003" style={{ fontWeight: 900 }}>+393926900003</a>
              <br />
              Zona: Verona e comuni limitrofi.
            </p>
            <div className="btnRow">
              <a className="btn btnPrimary" href="tel:+393926900003">
                Chiama ora
              </a>
              <a
                className="btn btnWhatsApp"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL_QUICK}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            style={{}}
          >
            <h3 className="cardTitle">Modulo preventivo</h3>
            <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Nome</span>
                <input
                  name="nome"
                  value={form.nome}
                  onChange={onChange}
                  required
                  placeholder="Il tuo nome"
                  style={inputStyle}
                />
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Telefono</span>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={onChange}
                  placeholder="Facoltativo"
                  style={inputStyle}
                />
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Servizio</span>
                <select name="servizio" value={form.servizio} onChange={onChange} style={inputStyle}>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Dettagli</span>
                <textarea
                  name="messaggio"
                  value={form.messaggio}
                  onChange={onChange}
                  rows={4}
                  placeholder="Es: piano, ascensore, indirizzo (zona), cosa va spostato/svuotato, tempistiche…"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </label>

              <div className="btnRow" style={{ marginTop: 6 }}>
                <button type="submit" className="btn btnWhatsApp">
                  Invia su WhatsApp
                </button>
                <a className="btn btnSecondary" href="tel:+393926900003">
                  Preferisco chiamare
                </a>
              </div>
              <p style={{ margin: "2px 0 0 0", color: "var(--muted)", fontSize: "0.92rem" }}>
                Il modulo apre WhatsApp con un messaggio precompilato (nessun dato viene salvato sul sito).
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  borderRadius: 14,
  padding: "12px 12px",
  border: "1px solid rgba(2, 6, 23, 0.12)",
  background: "rgba(255, 255, 255, 0.85)",
  boxShadow: "0 10px 22px rgba(2, 6, 23, 0.06)",
  outline: "none",
};
