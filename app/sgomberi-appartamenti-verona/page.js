import ServicePage from "./ServicePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Sgombero Appartamenti a Verona | Svuotamento Completo",
  description:
    "Sgombero appartamenti a Verona e provincia. Svuotamento completo di locali, rimozione mobili e arredi. Preventivi gratuiti, interventi rapidi e gestione ordinata.",
  alternates: {
    canonical: "/sgomberi-appartamenti-verona",
  },
  openGraph: {
    title: "Sgombero Appartamenti a Verona – Traslochi Servizi",
    description:
      "Sgombero rapido e completo di appartamenti a Verona e provincia. Gestione ordinata dei materiali, preventivi gratuiti.",
    url: `${SITE_URL}/sgomberi-appartamenti-verona`,
  },
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/sgomberi-appartamenti-verona#service`,
    name: "Sgombero Appartamenti a Verona",
    description: metadata.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    serviceType: "Sgombero appartamenti",
    url: `${SITE_URL}/sgomberi-appartamenti-verona`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo serve per sgomberare un appartamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dipende dalle dimensioni e dalla quantità di materiale. Un appartamento medio viene sgomberato in mezza giornata. Per una stima precisa, contattaci per un preventivo gratuito.",
        },
      },
      {
        "@type": "Question",
        name: "Vi occupate anche dello smaltimento dei materiali?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, gestiamo la separazione e il trasporto dei materiali. Ti consigliamo la soluzione migliore per ogni tipo di oggetto.",
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
