import ServicePage from "./ServicePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Traslochi a Verona e Provincia | Ditta Traslochi Professionali",
  description:
    "Ditta di traslochi professionali a Verona e provincia. Traslochi economici per casa, ufficio e attività. Preventivi gratuiti, protezione arredi, 7 giorni su 7. Anche servizio sgomberi.",
  alternates: {
    canonical: "/traslochi-verona",
  },
  openGraph: {
    title: "Traslochi a Verona e Provincia – Ditta Traslochi Servizi",
    description:
      "Traslochi professionali ed economici a Verona e provincia: casa, ufficio, piccoli spostamenti. Ditta traslochi con preventivi gratuiti e interventi rapidi 7/7.",
    url: `${SITE_URL}/traslochi-verona`,
  },
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/traslochi-verona#service`,
    name: "Traslochi a Verona e Provincia",
    description: metadata.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    serviceType: "Traslochi",
    url: `${SITE_URL}/traslochi-verona`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costa un trasloco a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo dipende dalla quantità di mobili, dalla distanza e dal piano. Offriamo preventivi gratuiti e senza impegno. Contattaci per un preventivo personalizzato.",
        },
      },
      {
        "@type": "Question",
        name: "Fate traslochi anche nel weekend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, siamo operativi 7 giorni su 7, anche nel weekend e nei giorni festivi, su appuntamento.",
        },
      },
      {
        "@type": "Question",
        name: "Proteggete i mobili durante il trasloco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Assolutamente sì. Utilizziamo imballaggi protettivi, coperte e materiali adeguati per proteggere mobili, elettrodomestici ed effetti personali durante il trasporto.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ServicePage />
    </>
  );
}
