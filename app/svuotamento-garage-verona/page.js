import ServicePage from "./ServicePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Svuotamento Garage a Verona | Sgombero Rapido",
  description:
    "Svuotamento garage e box auto a Verona e provincia. Rimozione rapida di ingombri, attrezzi e vecchi arredi. Preventivi gratuiti e interventi organizzati 7 giorni su 7.",
  alternates: {
    canonical: "/svuotamento-garage-verona",
  },
  openGraph: {
    title: "Svuotamento Garage a Verona – Traslochi Servizi",
    description:
      "Svuotamento garage a Verona e provincia. Rimozione rapida di tutti gli ingombri, preventivi gratuiti.",
    url: `${SITE_URL}/svuotamento-garage-verona`,
  },
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/svuotamento-garage-verona#service`,
    name: "Svuotamento Garage a Verona",
    description: metadata.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    serviceType: "Svuotamento garage",
    url: `${SITE_URL}/svuotamento-garage-verona`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "In quanto tempo svuotate un garage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un garage standard viene svuotato in poche ore. Per garage molto pieni o con materiali particolari, potrebbe servire una mezza giornata. Contattaci per un preventivo.",
        },
      },
      {
        "@type": "Question",
        name: "Rimuovete anche pneumatici e materiale edile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, rimuoviamo qualsiasi tipo di ingombro: pneumatici, attrezzi, materiale edile, vecchi mobili e altro. Ci occupiamo di tutto.",
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
