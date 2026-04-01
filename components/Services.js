"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTruckMoving,
  FaPeopleCarryBox,
  FaBoxOpen,
  FaWarehouse,
  FaHammer,
  FaCouch,
} from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      icon: <FaTruckMoving aria-hidden="true" focusable={false} />,
      title: "Traslochi",
      description: "Traslochi residenziali e commerciali a Verona e provincia: case, uffici e piccoli spostamenti con organizzazione e cura.",
      href: "/traslochi-verona",
      linkText: "Scopri il servizio traslochi a Verona",
    },
    {
      icon: <FaPeopleCarryBox aria-hidden="true" focusable={false} />,
      title: "Sgomberi",
      description: "Sgombero professionale di appartamenti, locali e spazi a Verona. Gestione ordinata del lavoro e dei materiali.",
      href: "/sgomberi-verona",
      linkText: "Scopri il servizio sgomberi a Verona",
    },
    {
      icon: <FaTruckMoving aria-hidden="true" focusable={false} />,
      title: "Traslochi e Sgomberi",
      description: "Servizio combinato di traslochi e sgomberi a Verona. Un unico referente per trasferimenti e svuotamenti completi.",
      href: "/traslochi-e-sgomberi-verona",
      linkText: "Traslochi e sgomberi professionali a Verona",
    },
    {
      icon: <FaPeopleCarryBox aria-hidden="true" focusable={false} />,
      title: "Sgomberi appartamenti",
      description: "Svuotamento completo di appartamenti per vendita, affitto o ristrutturazione a Verona e provincia.",
      href: "/sgomberi-appartamenti-verona",
      linkText: "Sgombero appartamenti a Verona",
    },
    {
      icon: <FaBoxOpen aria-hidden="true" focusable={false} />,
      title: "Svuotamento cantine",
      description: "Svuotamento e riordino cantine con rimozione e trasporto in sicurezza, anche in spazi con accessi difficili.",
      href: "/sgombero-cantine-verona",
      linkText: "Sgombero cantine a Verona",
    },
    {
      icon: <FaWarehouse aria-hidden="true" focusable={false} />,
      title: "Svuotamento garage",
      description: "Rimozione di ingombri e materiali dal garage con gestione rapida. Ideale per liberare spazio subito.",
      href: "/svuotamento-garage-verona",
      linkText: "Svuotamento garage a Verona",
    },
    {
      icon: <FaWarehouse aria-hidden="true" focusable={false} />,
      title: "Svuotamento magazzini",
      description: "Sgombero e riordino di magazzini e depositi per attività commerciali, artigiani e privati.",
      href: "/svuotamento-magazzini-verona",
      linkText: "Svuotamento magazzini a Verona",
    },
    {
      icon: <FaCouch aria-hidden="true" focusable={false} />,
      title: "Smaltimento mobili",
      description: "Ritiro e gestione di mobili da dismettere con massima attenzione e trasparenza del servizio.",
    },
    {
      icon: <FaHammer aria-hidden="true" focusable={false} />,
      title: "Piccoli lavori edili",
      description: "Interventi mirati e pratici per completare un trasloco o uno sgombero senza stress.",
    },
  ];

  return (
    <section
      id="services"
      className="section sectionAlt"
    >
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">I nostri servizi</div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title titleGradient"
          >
            Traslochi, sgomberi e svuotamenti a Verona
          </motion.h2>
          <p className="subtitle">
            Interventi professionali per privati e attività a Verona e in tutta la provincia. Ti guidiamo dalla prima chiamata al completamento del lavoro.
          </p>
        </div>

        <div className="grid grid4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                <h3 className="cardTitle">
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 14,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(139, 30, 63, 0.14), rgba(176, 141, 87, 0.14))",
                      border: "1px solid rgba(2, 6, 23, 0.08)",
                      color: "var(--primary)",
                      flex: "0 0 auto",
                    }}
                  >
                    {service.icon}
                  </span>
                  {service.title}
                </h3>
              </div>
              <p className="cardText">{service.description}</p>
              {service.href && (
                <Link
                  href={service.href}
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  {service.linkText || `Scopri di più: ${service.title.toLowerCase()}`} &rarr;
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <Link className="btn btnPrimary" href="#contatti">
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
