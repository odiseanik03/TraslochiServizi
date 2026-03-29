import ServicePage from "./ServicePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Svuotamento Magazzini a Verona | Sgombero Depositi",
  description:
    "Svuotamento magazzini e depositi a Verona e provincia. Sgombero per attività commerciali e privati con gestione ordinata, smaltimento incluso e preventivi gratuiti.",
  alternates: {
    canonical: "/svuotamento-magazzini-verona",
  },
  openGraph: {
    title: "Svuotamento Magazzini a Verona – Traslochi Servizi",
    description:
      "Sgombero magazzini e depositi a Verona e provincia. Per aziende e privati, gestione rapida e preventivi trasparenti.",
    url: `${SITE_URL}/svuotamento-magazzini-verona`,
  },
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/svuotamento-magazzini-verona#service`,
    name: "Svuotamento Magazzini a Verona",
    description: metadata.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    serviceType: "Svuotamento magazzini",
    url: `${SITE_URL}/svuotamento-magazzini-verona`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Svuotate anche magazzini di grandi dimensioni?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, gestiamo magazzini di qualsiasi dimensione: da piccoli depositi a grandi locali commerciali. Organizziamo il lavoro in base ai tempi e alle esigenze.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche per aziende e negozi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Certamente. Serviamo aziende, negozi, artigiani e privati. Gestiamo il ritiro di merce, scaffalature e allestimenti con ordine e puntualità.",
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
