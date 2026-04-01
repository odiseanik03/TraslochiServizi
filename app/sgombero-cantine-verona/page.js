import ServicePage from "./ServicePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Sgombero Cantine a Verona | Svuotamento Rapido e Ordinato",
  description:
    "Sgombero cantine Verona e provincia con svuotamento rapido e ordinato. Rimozione di mobili vecchi, materiali ingombranti e oggetti accumulati, anche in spazi difficili. Preventivi gratuiti.",
  keywords: [
    "sgombero cantine verona",
    "sgombero cantine verona provincia",
    "svuotamento cantine verona",
    "sgombero cantina verona",
  ],
  alternates: {
    canonical: "/sgombero-cantine-verona",
  },
  openGraph: {
    title: "Sgombero Cantine a Verona – Traslochi Servizi",
    description:
      "Sgombero cantine Verona e provincia con rimozione ingombranti in spazi difficili, gestione ordinata e preventivi gratuiti.",
    url: `${SITE_URL}/sgombero-cantine-verona`,
  },
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/sgombero-cantine-verona#service`,
    name: "Sgombero Cantine a Verona",
    description: metadata.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    serviceType: "Sgombero cantine",
    url: `${SITE_URL}/sgombero-cantine-verona`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Riuscite a lavorare in cantine con scale strette?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, siamo attrezzati per lavorare in cantine con scale strette, soffitti bassi e accessi limitati. Valutiamo lo spazio prima dell'intervento per organizzare il lavoro in sicurezza.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto costa sgomberare una cantina a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo varia in base alla quantità di materiale e alla difficoltà degli accessi. Contattaci per un preventivo gratuito e senza impegno.",
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
