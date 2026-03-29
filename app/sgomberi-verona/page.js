import ServicePage from "./ServicePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Sgomberi a Verona e Provincia | Ditta Sgomberi Professionale",
  description:
    "Ditta di sgomberi professionali a Verona e provincia: sgombero appartamenti, cantine, soffitte, garage e magazzini. Preventivi gratuiti, interventi rapidi e gestione completa. Anche servizio traslochi.",
  alternates: {
    canonical: "/sgomberi-verona",
  },
  openGraph: {
    title: "Sgomberi a Verona e Provincia – Ditta Sgomberi e Traslochi Servizi",
    description:
      "Sgomberi professionali a Verona: sgombero appartamenti, cantine, garage, soffitte, magazzini. Ditta sgomberi con preventivi gratuiti 7/7.",
    url: `${SITE_URL}/sgomberi-verona`,
  },
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/sgomberi-verona#service`,
    name: "Sgomberi a Verona e Provincia",
    description: metadata.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    serviceType: "Sgomberi",
    url: `${SITE_URL}/sgomberi-verona`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Che tipi di sgomberi fate a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ci occupiamo di sgomberi di appartamenti, cantine, soffitte, garage, magazzini e locali commerciali in tutta la provincia di Verona.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto costa uno sgombero a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il prezzo dipende dal tipo di locale, dalla quantità di materiale e dalla difficoltà degli accessi. Offriamo preventivi gratuiti e senza impegno.",
        },
      },
      {
        "@type": "Question",
        name: "Siete disponibili anche nel weekend per gli sgomberi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, operiamo 7 giorni su 7, anche nel weekend e nei festivi, su appuntamento.",
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
