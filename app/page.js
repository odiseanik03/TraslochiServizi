const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Traslochi Servizi Verona | Traslochi e Sgomberi a Verona",
  description:
    "Traslochi Servizi Verona offre servizi di traslochi, sgomberi e svuotamenti a Verona e provincia. Preventivi gratuiti, interventi rapidi 7 giorni su 7 per case, uffici, cantine, garage e magazzini.",
  keywords: [
    "traslochi servizi verona",
    "traslochi verona",
    "sgomberi verona",
    "traslochi e sgomberi verona",
    "servizi verona traslochi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Traslochi Servizi Verona | Traslochi e Sgomberi a Verona",
    description:
      "Traslochi Servizi Verona: traslochi, sgomberi e svuotamenti professionali a Verona e provincia. Preventivi gratuiti e interventi rapidi.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Traslochi Servizi Verona | Traslochi e Sgomberi a Verona",
    description:
      "Traslochi Servizi Verona: servizi di traslochi, sgomberi e svuotamenti a Verona e provincia con preventivi gratuiti.",
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
      "Traslochi Servizi Verona offre traslochi, sgomberi e svuotamenti professionali per case, uffici, cantine, garage e magazzini a Verona e provincia.",
    url: SITE_URL,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      <HomeClientOnly />
    </>
  );
}

