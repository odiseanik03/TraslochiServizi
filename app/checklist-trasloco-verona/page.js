import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Checklist Trasloco Verona | Lista Completa da Seguire",
  description:
    "Checklist utile per organizzare un trasloco a Verona in modo chiaro: verifica iniziale, sopralluogo, definizione del lavoro e consigli pratici dopo il trasferimento.",
  keywords: [
    "checklist trasloco verona",
    "guida trasloco verona",
    "come organizzare un trasloco verona",
    "trasloco verona consigli",
  ],
  alternates: {
    canonical: "/checklist-trasloco-verona",
  },
  openGraph: {
    title: "Checklist Trasloco Verona | Lista Completa da Seguire",
    description:
      "Una guida pratica per organizzare il trasloco a Verona: verifica iniziale, sopralluogo, definizione del lavoro e consigli utili per gestire il trasferimento con chiarezza.",
    url: `${SITE_URL}/checklist-trasloco-verona`,
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Checklist trasloco Verona: cosa fare prima, durante e dopo",
    description: metadata.description,
    inLanguage: "it-IT",
    mainEntityOfPage: `${SITE_URL}/checklist-trasloco-verona`,
    author: {
      "@type": "Organization",
      name: "Traslochi Servizi",
    },
    publisher: {
      "@type": "Organization",
      name: "Traslochi Servizi",
      url: SITE_URL,
    },
  };

  const sections = [
    {
      title: "Prima di definire il trasloco",
      items: [
        "Prepara un quadro chiaro dei mobili, degli oggetti e degli ambienti coinvolti.",
        "Segnala fin da subito eventuali esigenze particolari, accessi difficili o materiali delicati.",
        "Richiedi un primo contatto per fissare la verifica del lavoro con il responsabile.",
      ],
    },
    {
      title: "Dopo il sopralluogo o la verifica",
      items: [
        "Definisci insieme al referente cosa va trasportato, cosa va smontato e cosa richiede più attenzione.",
        "Organizza documenti, chiavi, effetti personali e oggetti di valore in modo separato.",
        "Conferma solo dopo la verifica i dettagli davvero importanti per il proprietario e per il lavoro da svolgere.",
      ],
    },
    {
      title: "Quando il lavoro viene confermato",
      items: [
        "Lascia indicazioni chiare su accessi, priorità e ambienti da trattare con maggiore cura.",
        "Verifica con la squadra i punti principali del lavoro già concordato con il responsabile.",
        "Accertati che la destinazione finale sia pronta a ricevere mobili e materiali.",
      ],
    },
    {
      title: "A lavoro concluso",
      items: [
        "Controlla insieme al referente che quanto concordato sia stato eseguito correttamente.",
        "Verifica mobili, scatole e materiali una volta completata la consegna.",
        "Tieni nota di eventuali esigenze residue o interventi collegati, come sgomberi o smaltimenti.",
      ],
    },
  ];

  const cardStyle = {
    background: "#fff",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: 24,
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
    padding: "clamp(20px, 3vw, 30px)",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: "clamp(42px, 7vw, 84px)" }}>
          <div className="container" style={{ display: "grid", gap: 24 }}>
            <div style={{ maxWidth: 860 }}>
              <div className="eyebrow">Risorsa utile</div>
              <h1 className="title titleGradient" style={{ marginBottom: 14 }}>
                Checklist trasloco Verona: la lista da seguire senza stress
              </h1>
              <p className="subtitle" style={{ maxWidth: 760 }}>
                Una guida concreta per capire come impostare correttamente un trasloco a Verona,
                senza date standard o promesse generiche: i dettagli reali vengono sempre definiti dopo la verifica del responsabile.
              </p>
            </div>

            <div style={{ ...cardStyle, display: "grid", gap: 18 }}>
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="cardTitle" style={{ marginTop: 0 }}>{section.title}</h2>
                  <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "var(--muted)" }}>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ ...cardStyle, display: "grid", gap: 12 }}>
              <h2 className="cardTitle" style={{ margin: 0 }}>Consiglio pratico</h2>
              <p className="cardText" style={{ marginBottom: 0 }}>
                Se il trasloco comprende anche mobili da eliminare o locali da liberare, conviene pianificare insieme
                trasloco e sgombero: si risparmia tempo, si riducono passaggi inutili e si ha un unico referente operativo.
                Anche in questo caso, la soluzione corretta si definisce solo dopo che la persona responsabile ha verificato il lavoro.
              </p>
            </div>

            <div style={{ ...cardStyle, display: "grid", gap: 14 }}>
              <h2 className="cardTitle" style={{ margin: 0 }}>Approfondimenti utili</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Link className="btn btnPrimary" href="/traslochi-verona">Richiedi il servizio traslochi</Link>
                <Link className="btn btnSecondary" href="/traslochi-verona-prezzi">Guida prezzi traslochi Verona</Link>
                <Link className="btn btnSecondary" href="/traslochi-e-sgomberi-verona">Traslochi e sgomberi combinati</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}