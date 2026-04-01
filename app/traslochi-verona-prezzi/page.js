import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it";

export const metadata = {
  title: "Traslochi Verona Prezzi | Guida Costi e Preventivo Gratuito",
  description:
    "Guida ai prezzi dei traslochi a Verona e provincia: fattori che incidono sui costi e come ottenere un PREVENTIVO GRATUITO chiaro, rapido e senza stime fuorvianti.",
  keywords: [
    "traslochi verona prezzi",
    "prezzi traslochi verona",
    "costo trasloco verona",
    "preventivo trasloco verona",
    "piccoli traslochi verona prezzi",
  ],
  alternates: {
    canonical: "/traslochi-verona-prezzi",
  },
  openGraph: {
    title: "Traslochi Verona Prezzi | Guida Costi e Preventivo Gratuito",
    description:
      "Scopri cosa incide sui prezzi dei traslochi a Verona e come richiedere un PREVENTIVO GRATUITO senza sorprese e senza stime standardizzate.",
    url: `${SITE_URL}/traslochi-verona-prezzi`,
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Traslochi Verona prezzi: guida ai costi e al preventivo",
    description: metadata.description,
    inLanguage: "it-IT",
    mainEntityOfPage: `${SITE_URL}/traslochi-verona-prezzi`,
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costano i traslochi a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il costo di un trasloco a Verona dipende soprattutto da volume da trasportare, piano dell'immobile, presenza di ascensore, distanza, montaggio mobili e materiali da imballaggio. Per questo il modo corretto per avere un prezzo preciso resta sempre il preventivo gratuito.",
        },
      },
      {
        "@type": "Question",
        name: "Fate anche piccoli traslochi a Verona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, organizziamo anche piccoli traslochi a Verona per mobili singoli, scatoloni, elettrodomestici o trasferimenti rapidi in città e provincia.",
        },
      },
      {
        "@type": "Question",
        name: "Il sopralluogo o il preventivo sono a pagamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, con Traslochi Servizi il preventivo è gratuito e senza impegno, così puoi valutare tempi, organizzazione e costi con chiarezza prima di decidere.",
        },
      },
      {
        "@type": "Question",
        name: "Come posso ricevere velocemente un preventivo per i prezzi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per i prezzi del tuo trasloco a Verona puoi contattarci direttamente su WhatsApp. Rispondiamo in massimo 10 minuti e ti aiutiamo a capire subito quali informazioni servono per un preventivo gratuito e preciso.",
        },
      },
    ],
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: "clamp(42px, 7vw, 84px)" }}>
          <div className="container" style={{ display: "grid", gap: 24 }}>
            <div style={{ maxWidth: 840 }}>
              <div className="eyebrow">Guida utile</div>
              <h1 className="title titleGradient" style={{ marginBottom: 14 }}>
                Traslochi Verona prezzi: guida pratica ai costi
              </h1>
              <p className="subtitle" style={{ maxWidth: 760 }}>
                Una pagina pensata per essere davvero utile: spiega da cosa dipende il costo di un trasloco,
                quali differenze ci sono tra piccoli e grandi interventi e come ottenere un <strong style={{ textTransform: "uppercase" }}>preventivo gratuito</strong>
                {" "}
                senza pubblicare prezzi standard che potrebbero non riflettere il lavoro reale a Verona e provincia.
              </p>
            </div>

            <div style={{ ...cardStyle, display: "grid", gap: 12, background: "linear-gradient(135deg, rgba(139, 30, 63, 0.08), rgba(176, 141, 87, 0.12))" }}>
              <h2 className="cardTitle" style={{ margin: 0 }}>PREVENTIVO GRATUITO in modo rapido</h2>
              <p className="cardText" style={{ marginBottom: 0 }}>
                Per i prezzi contattaci su WhatsApp al <strong>+39 392 690 0003</strong>: rispondiamo in massimo 10 minuti
                e ti aiutiamo a capire subito le informazioni utili per un preventivo corretto, senza cifre casuali.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <a className="btn btnPrimary" href="https://wa.me/393926900003?text=Ciao%2C%20vorrei%20un%20preventivo%20gratuito%20per%20un%20trasloco%20a%20Verona." target="_blank" rel="noreferrer">Scrivici su WhatsApp</a>
                <a className="btn btnSecondary" href="tel:+393926900003">Chiama ora</a>
              </div>
            </div>

            <div style={{ ...cardStyle, display: "grid", gap: 16 }}>
              <h2 className="cardTitle" style={{ margin: 0 }}>Cosa incide sul prezzo di un trasloco a Verona</h2>
              <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "var(--muted)" }}>
                <li>Volume di mobili, scatole ed elettrodomestici da trasportare.</li>
                <li>Piano dell'immobile, presenza o assenza di ascensore e facilità di accesso.</li>
                <li>Distanza tra partenza e destinazione, dentro Verona o verso la provincia.</li>
                <li>Smontaggio e rimontaggio mobili, imballaggio e protezione degli arredi.</li>
                <li>Eventuali servizi aggiuntivi come sgombero, smaltimento o deposito temporaneo.</li>
              </ul>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
              <div style={cardStyle}>
                <h2 className="cardTitle" style={{ marginTop: 0 }}>Piccoli traslochi</h2>
                <p className="cardText" style={{ marginBottom: 10 }}>
                  Per singoli mobili, pochi scatoloni o spostamenti rapidi in città, il costo è in genere più semplice da gestire,
                  ma cambia comunque in base ad accessi, tempi e organizzazione richiesta.
                </p>
                <p style={{ fontWeight: 800, color: "var(--primary)", margin: 0 }}>Valutazione su richiesta</p>
              </div>
              <div style={cardStyle}>
                <h2 className="cardTitle" style={{ marginTop: 0 }}>Trasloco appartamento</h2>
                <p className="cardText" style={{ marginBottom: 10 }}>
                  Per un appartamento completo a Verona e provincia il prezzo varia in base a volume, accessi,
                  presenza di ascensore, distanza e servizi richiesti.
                </p>
                <p style={{ fontWeight: 800, color: "var(--primary)", margin: 0 }}>Preventivo personalizzato</p>
              </div>
              <div style={cardStyle}>
                <h2 className="cardTitle" style={{ marginTop: 0 }}>Uffici e attività</h2>
                <p className="cardText" style={{ marginBottom: 10 }}>
                  I traslochi professionali per uffici e negozi richiedono quasi sempre una valutazione dedicata.
                </p>
                <p style={{ fontWeight: 800, color: "var(--primary)", margin: 0 }}>Preventivo personalizzato</p>
              </div>
            </div>

            <div style={cardStyle}>
              <h2 className="cardTitle" style={{ marginTop: 0 }}>Nota importante sui prezzi</h2>
              <p className="cardText" style={{ marginBottom: 0 }}>
                Ogni trasloco ha variabili diverse e il proprietario può dare importanza a dettagli specifici che cambiano
                l'organizzazione del lavoro. Per questo non pubblichiamo cifre standard: il modo corretto per avere un costo reale
                è richiedere un <strong style={{ textTransform: "uppercase" }}>preventivo gratuito</strong>, fare un sopralluogo o descrivere con precisione il lavoro. In questo modo ricevi un costo chiaro,
                coerente e adatto al tuo caso specifico.
              </p>
            </div>

            <div style={{ ...cardStyle, display: "grid", gap: 14 }}>
              <h2 className="cardTitle" style={{ margin: 0 }}>Pagine utili correlate</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Link className="btn btnPrimary" href="/traslochi-verona">Servizio traslochi a Verona</Link>
                <Link className="btn btnSecondary" href="/checklist-trasloco-verona">Checklist trasloco Verona</Link>
                <Link className="btn btnSecondary" href="/sgomberi-verona">Sgomberi a Verona</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}