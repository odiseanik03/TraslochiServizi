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
};

import HomeClientOnly from "@/components/HomeClientOnly";

export default function Home() {
  return <HomeClientOnly />;
}

