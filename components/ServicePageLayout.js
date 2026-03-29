"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "393926900003";

const traslochiServices = [
  { href: "/traslochi-verona", label: "Servizio di traslochi a Verona" },
];

const sgomberiServices = [
  { href: "/sgomberi-verona", label: "Servizio di sgomberi a Verona" },
  { href: "/sgomberi-appartamenti-verona", label: "Sgombero appartamenti a Verona" },
  { href: "/sgombero-cantine-verona", label: "Sgombero cantine a Verona" },
  { href: "/svuotamento-garage-verona", label: "Svuotamento garage a Verona" },
  { href: "/svuotamento-magazzini-verona", label: "Svuotamento magazzini a Verona" },
];

const combinedServices = [
  { href: "/traslochi-e-sgomberi-verona", label: "Traslochi e sgomberi professionali a Verona" },
];

const allServices = [
  ...traslochiServices,
  ...sgomberiServices,
  ...combinedServices,
];

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  details,
  whatsappText,
  introText,
  faq,
  slug,
}) {
  const prefill = encodeURIComponent(
    whatsappText ||
      "Ciao Traslochi Servizi, vorrei un preventivo. Zona: Verona e limitrofi. Grazie!"
  );

  const otherServices = allServices.filter((s) => s.href !== `/${slug}`);

  return (
    <>
      <Navbar />
      <main>
        <article>
          <section className="section" style={{ paddingTop: "clamp(40px, 6vw, 72px)" }}>
            <div className="container">
              <Breadcrumbs
                items={[
                  { name: "Home", href: "/" },
                  { name: "Servizi", href: "/#services" },
                  { name: title },
                ]}
              />

              <div className="sectionHeader" style={{ marginTop: 16 }}>
                <div className="eyebrow">{subtitle}</div>
                <motion.h1
                  className="title titleGradient"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {title}
                </motion.h1>
                <p className="subtitle">{description}</p>
              </div>

              {introText && (
                <div
                  className="card"
                  style={{ marginBottom: 28, maxWidth: 800 }}
                >
                  <div
                    className="cardText"
                    style={{ lineHeight: 1.7, fontSize: "1rem" }}
                    dangerouslySetInnerHTML={{ __html: introText }}
                  />
                </div>
              )}

              <div className="grid grid3">
                {details.map((detail, idx) => (
                  <motion.div
                    key={detail.title}
                    className="card"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                  >
                    <h2 className="cardTitle">{detail.title}</h2>
                    <p className="cardText">{detail.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="card" style={{ marginTop: 28, maxWidth: 700 }}>
                <h2 className="cardTitle">Zona operativa</h2>
                <p className="cardText">
                  Operiamo a <strong>Verona</strong> e nei comuni limitrofi: San Giovanni
                  Lupatoto, Villafranca di Verona, Bussolengo, Sommacampagna, Castel
                  d&apos;Azzano, Pescantina, Negrar e altri comuni della provincia.
                  Contattaci per verificare la disponibilità nella tua zona.
                </p>
              </div>

              {/* CTA Section */}
              <div className="btnRow" style={{ marginTop: 24 }}>
                <a className="btn btnPrimary" href="tel:+393926900003">
                  Chiama ora
                </a>
                <a
                  className="btn btnWhatsApp"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${prefill}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Scrivici su WhatsApp
                </a>
                <Link className="btn btnSecondary" href="/#contatti">
                  Richiedi un preventivo gratuito
                </Link>
              </div>

              {/* FAQ Section */}
              {faq && faq.length > 0 && (
                <section style={{ marginTop: 40 }}>
                  <h2 className="title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>
                    Domande frequenti
                  </h2>
                  <div style={{ display: "grid", gap: 12 }}>
                    {faq.map((item) => (
                      <div key={item.q} className="card">
                        <h3
                          className="cardTitle"
                          style={{ fontSize: "1.05rem" }}
                        >
                          {item.q}
                        </h3>
                        <p className="cardText">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Cross-promotion paragraph */}
              {slug && (
                <div className="card" style={{ marginTop: 28, maxWidth: 800 }}>
                  {(slug === "traslochi-verona") && (
                    <>
                      <h2 className="cardTitle">Hai bisogno anche di uno sgombero?</h2>
                      <p className="cardText" style={{ lineHeight: 1.7 }}>
                        Oltre ai traslochi, ci occupiamo anche di <Link href="/sgomberi-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>sgomberi professionali a Verona</Link>: svuotamento di appartamenti, cantine, garage e magazzini.
                        Se devi trasferirti e liberare il vecchio immobile, possiamo organizzare <Link href="/traslochi-e-sgomberi-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>trasloco e sgombero insieme</Link> con un unico preventivo.
                      </p>
                    </>
                  )}
                  {(slug === "sgomberi-verona" || slug === "sgomberi-appartamenti-verona" || slug === "sgombero-cantine-verona" || slug === "svuotamento-garage-verona" || slug === "svuotamento-magazzini-verona") && (
                    <>
                      <h2 className="cardTitle">Devi anche traslocare?</h2>
                      <p className="cardText" style={{ lineHeight: 1.7 }}>
                        Oltre agli sgomberi, ci occupiamo anche di <Link href="/traslochi-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>traslochi professionali a Verona</Link>: traslochi di case, uffici e attività in tutta la provincia.
                        Se devi liberare lo spazio e trasferirti, possiamo organizzare <Link href="/traslochi-e-sgomberi-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>sgombero e trasloco combinati</Link> con un unico preventivo.
                      </p>
                    </>
                  )}
                  {(slug === "traslochi-e-sgomberi-verona") && (
                    <>
                      <h2 className="cardTitle">Scopri i servizi nel dettaglio</h2>
                      <p className="cardText" style={{ lineHeight: 1.7 }}>
                        Visita le pagine dedicate per maggiori dettagli: <Link href="/traslochi-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>servizio traslochi a Verona</Link> oppure <Link href="/sgomberi-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>servizio sgomberi a Verona</Link>.
                        Per sgomberi specifici: <Link href="/sgomberi-appartamenti-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>sgombero appartamenti</Link>, <Link href="/sgombero-cantine-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>sgombero cantine</Link>, <Link href="/svuotamento-garage-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>svuotamento garage</Link>, <Link href="/svuotamento-magazzini-verona" style={{ color: "var(--primary)", fontWeight: 700 }}>svuotamento magazzini</Link>.
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Internal Links to other services */}
              <nav aria-label="Altri servizi" style={{ marginTop: 40 }}>
                <h2
                  className="title"
                  style={{ fontSize: "1.2rem", marginBottom: 12 }}
                >
                  Scopri tutti i nostri servizi a Verona
                </h2>
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
                  {otherServices.map((s) => (
                    <li key={s.href}>
                      <Link className="btn btnSecondary" href={s.href}>
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link className="btn btnSecondary" href="/">
                      ← Torna alla home
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
