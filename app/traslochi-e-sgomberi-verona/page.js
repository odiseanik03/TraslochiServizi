import ServicePage from "./ServicePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Traslochi e Sgomberi a Verona | Impresa Professionale",
  description:
    "Ditta di traslochi e sgomberi a Verona e provincia. Traslochi residenziali e commerciali, sgomberi appartamenti, cantine, garage e magazzini. Preventivi gratuiti, interventi 7/7.",
  alternates: {
    canonical: "/traslochi-e-sgomberi-verona",
  },
  openGraph: {
    title: "Traslochi e Sgomberi Professionali a Verona – Traslochi Servizi",
    description:
      "Impresa di traslochi e sgomberi a Verona e provincia. Un unico referente per traslochi, sgomberi e svuotamenti. Preventivi gratuiti 7/7.",
    url: `${SITE_URL}/traslochi-e-sgomberi-verona`,
  },
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/traslochi-e-sgomberi-verona#service`,
    name: "Traslochi e Sgomberi a Verona e Provincia",
    description: metadata.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    serviceType: ["Traslochi", "Sgomberi"],
    url: `${SITE_URL}/traslochi-e-sgomberi-verona`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Traslochi e Sgomberi",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Traslochi a Verona",
            url: `${SITE_URL}/traslochi-verona`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sgomberi a Verona",
            url: `${SITE_URL}/sgomberi-verona`,
          },
        },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "La vostra ditta fa sia traslochi che sgomberi a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, Traslochi Servizi è un'impresa specializzata sia in traslochi residenziali e commerciali, sia in sgomberi di appartamenti, cantine, garage e magazzini a Verona e in tutta la provincia.",
        },
      },
      {
        "@type": "Question",
        name: "Posso richiedere trasloco e sgombero insieme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Certamente. Molti clienti ci affidano sia il trasloco che lo sgombero del vecchio immobile. Organizziamo entrambi i servizi in modo coordinato per risparmiare tempo e costi.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto costa un servizio di traslochi e sgomberi a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dal tipo di intervento, dai volumi e dalle difficoltà logistiche. Offriamo preventivi gratuiti e personalizzati. Contattaci per una valutazione senza impegno.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicePage />
    </>
  );
}
