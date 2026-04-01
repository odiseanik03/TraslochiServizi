import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import AppEffects from "../components/AppEffects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Traslochi Servizi Verona | Traslochi e Sgomberi a Verona",
    template: "%s | Traslochi Servizi Verona",
  },
  description:
    "Traslochi Servizi Verona offre traslochi, sgomberi e svuotamenti professionali a Verona e provincia. Cantine, garage, soffitte e magazzini. Preventivi gratuiti, interventi rapidi 7 giorni su 7.",
  keywords: [
    "traslochi servizi verona",
    "traslochi verona",
    "sgomberi verona",
    "traslochi e sgomberi verona",
    "servizi traslochi verona",
    "ditta traslochi verona",
  ],
  applicationName: "Traslochi Servizi",
  alternates: {
    canonical: "/",
    languages: { it: "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Traslochi Servizi",
    title: "Traslochi Servizi Verona | Traslochi e Sgomberi Professionali",
    description:
      "Traslochi Servizi Verona: traslochi, sgomberi e svuotamenti professionali a Verona e comuni limitrofi. Preventivi gratuiti, interventi rapidi, 7 giorni su 7.",
    url: SITE_URL,
    images: [
      {
        url: "/images/hero-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Furgone Traslochi Servizi per traslochi e sgomberi a Verona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traslochi Servizi Verona | Traslochi e Sgomberi a Verona",
    description:
      "Traslochi Servizi Verona: traslochi, sgomberi e svuotamenti professionali a Verona e provincia. Preventivi gratuiti.",
    images: ["/images/hero-image.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/images/traslochilogo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/traslochilogo.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export default function RootLayout({ children }) {
  const siteUrl = SITE_URL;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#organization`,
    name: "Traslochi Servizi",
    alternateName: "Traslochi Servizi Verona",
    description:
      "Traslochi Servizi Verona offre traslochi, sgomberi e svuotamenti professionali a Verona e provincia. Oltre 35 anni di esperienza al servizio di privati e aziende.",
    url: siteUrl,
    telephone: "+393926900003",
    logo: `${siteUrl}/images/hero-image.jpeg`,
    image: [`${siteUrl}/images/hero-image.jpeg`],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Contanti, Bonifico bancario",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Verona",
      addressRegion: "Veneto",
      postalCode: "37100",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.4384,
      longitude: 10.9917,
    },
    areaServed: [
      { "@type": "City", name: "Verona" },
      { "@type": "City", name: "San Giovanni Lupatoto" },
      { "@type": "City", name: "Villafranca di Verona" },
      { "@type": "City", name: "Bussolengo" },
      { "@type": "City", name: "Sommacampagna" },
      { "@type": "City", name: "Castel d'Azzano" },
      { "@type": "City", name: "Pescantina" },
      { "@type": "City", name: "Negrar" },
      { "@type": "AdministrativeArea", name: "Provincia di Verona" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+393926900003",
        availableLanguage: ["Italian"],
        areaServed: { "@type": "AdministrativeArea", name: "Provincia di Verona" },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi di traslochi e sgomberi",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Traslochi a Verona", description: "Traslochi residenziali e commerciali a Verona e provincia", url: `${siteUrl}/traslochi-verona` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sgomberi a Verona", description: "Sgomberi professionali di appartamenti, cantine, garage e magazzini a Verona e provincia", url: `${siteUrl}/sgomberi-verona` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Traslochi e Sgomberi a Verona", description: "Servizio combinato di traslochi e sgomberi a Verona e provincia", url: `${siteUrl}/traslochi-e-sgomberi-verona` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sgomberi appartamenti a Verona", url: `${siteUrl}/sgomberi-appartamenti-verona` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sgombero cantine a Verona", url: `${siteUrl}/sgombero-cantine-verona` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Svuotamento garage a Verona", url: `${siteUrl}/svuotamento-garage-verona` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Svuotamento magazzini a Verona", url: `${siteUrl}/svuotamento-magazzini-verona` } },
      ],
    },
    additionalType: [
      "https://schema.org/MovingCompany",
    ],
    knowsAbout: [
      "Traslochi Servizi Verona",
      "Traslochi",
      "Sgomberi",
      "Servizi di trasloco a Verona",
      "Traslochi e sgomberi a Verona",
      "Svuotamento cantine",
      "Svuotamento garage",
      "Svuotamento magazzini",
      "Sgombero appartamenti",
    ],
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Traslochi Servizi",
    alternateName: "Traslochi Servizi Verona",
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "it-IT",
    about: [
      "Traslochi servizi Verona",
      "Traslochi a Verona",
      "Sgomberi a Verona",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="it">
      <head>
        <link rel="preload" href="/images/hero-image.jpeg" as="image" type="image/jpeg" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`} style={{ position: "relative" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <AppEffects>{children}</AppEffects>
      </body>
    </html>
  );
}



