import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Checklist Trasloco Verona | Lista Completa da Seguire",
  description:
    "Checklist completa per organizzare un trasloco a Verona senza stress: cosa fare prima, durante e dopo il trasferimento, con consigli pratici e preventivo gratuito.",
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
      "Una guida pratica per organizzare il trasloco a Verona: tempistiche, imballaggio, gestione documenti e consigli per ridurre stress e imprevisti.",
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
      title: "2-3 settimane prima",
      items: [
        "Fai una lista dei mobili e degli oggetti da trasferire.",
        "Decidi cosa tenere, cosa vendere e cosa eliminare.",
        "Richiedi il preventivo per il trasloco a Verona con anticipo.",
      ],
    },
    {
      title: "1 settimana prima",
      items: [
        "Prepara scatole etichettate stanza per stanza.",
        "Proteggi gli oggetti fragili con materiali adatti.",
        "Tieni separati documenti, chiavi e oggetti di valore.",
      ],
    },
    {
      title: "Il giorno del trasloco",
      items: [
        "Lascia libero il passaggio per il carico e lo scarico.",
        "Verifica insieme alla squadra mobili, scatole e priorità.",
        "Controlla che la nuova destinazione sia pronta a ricevere il materiale.",
      ],
    },
    {
      title: "Dopo il trasloco",
      items: [
        "Inizia dalle stanze essenziali: cucina, bagno, camera.",
        "Controlla mobili e scatole una volta consegnati.",
        "Conserva la lista finale per verificare che sia arrivato tutto.",
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
                Una guida concreta e facile da condividere con clienti, partner, agenzie immobiliari e siti locali.
                Più è utile, più ha probabilità di ricevere link naturali nel tempo.
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