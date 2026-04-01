const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Traslochi Servizi Verona | Traslochi, Sgomberi e Svuotamenti a Verona",
  description:
    "Preventivo gratuito per traslochi, sgomberi e svuotamenti a Verona e provincia. Traslochi Servizi Verona offre traslochi casa e ufficio, sgombero appartamenti, cantine, garage e magazzini con interventi rapidi 7 giorni su 7.",
  keywords: [
    "traslochi servizi verona",
    "traslochi sgomberi servizi verona",
    "traslochi verona",
    "sgomberi verona",
    "traslochi",
    "sgomberi",
    "traslochi sgomberi",
    "traslochi e sgomberi verona",
    "servizi verona traslochi",
    "ditta traslochi verona",
    "ditta sgomberi verona",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Traslochi Servizi Verona | Traslochi, Sgomberi e Svuotamenti a Verona",
    description:
      "Preventivo gratuito per traslochi, sgomberi e svuotamenti a Verona e provincia. Servizi per case, uffici, appartamenti, cantine, garage e magazzini.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Traslochi Servizi Verona | Traslochi, Sgomberi e Svuotamenti a Verona",
    description:
      "Preventivo gratuito per traslochi, sgomberi e svuotamenti a Verona e provincia con interventi rapidi.",
  },
};

import HomeClientOnly from "@/components/HomeClientOnly";

export default function Home() {
  const homeServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#home-service`,
    name: "Traslochi Servizi Verona",
    serviceType: ["Traslochi", "Sgomberi", "Svuotamenti"],
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    description:
      "Traslochi Servizi Verona offre traslochi, sgomberi e svuotamenti professionali per case, uffici, appartamenti, cantine, garage e magazzini a Verona e provincia.",
    url: SITE_URL,
  };

  const homeWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name: "Traslochi Servizi Verona",
    url: SITE_URL,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: [
      "Traslochi servizi Verona",
      "Traslochi sgomberi servizi Verona",
      "Traslochi Verona",
      "Sgomberi Verona",
      "Traslochi sgomberi",
    ],
    description:
      "Homepage di Traslochi Servizi Verona con servizi di traslochi, sgomberi e svuotamenti a Verona e provincia per case, uffici, appartamenti, cantine, garage e magazzini.",
    keywords: "traslochi servizi verona, traslochi sgomberi servizi verona, traslochi verona, sgomberi verona, traslochi, sgomberi, traslochi sgomberi",
  };

  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quali servizi offre Traslochi Servizi Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traslochi Servizi Verona offre traslochi, sgomberi e svuotamenti professionali a Verona e provincia per case, uffici, appartamenti, cantine, garage e magazzini.",
        },
      },
      {
        "@type": "Question",
        name: "Operate solo a Verona città o anche in provincia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Operiamo a Verona città e nei comuni limitrofi della provincia di Verona, con interventi rapidi e preventivi gratuiti su appuntamento.",
        },
      },
      {
        "@type": "Question",
        name: "Si possono richiedere insieme trasloco e sgombero?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, organizziamo anche servizi combinati di trasloco e sgombero a Verona, con un unico referente e una gestione coordinata dell'intervento.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      <HomeClientOnly />
    </>
  );
}

