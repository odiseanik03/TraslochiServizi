"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ServicePage() {
  return (
    <ServicePageLayout
      slug="traslochi-e-sgomberi-verona"
      title="Traslochi e Sgomberi a Verona e Provincia"
      subtitle="Traslochi e sgomberi professionali"
      description="Un unico referente per traslochi e sgomberi a Verona. Ci occupiamo di traslochi residenziali e commerciali, sgomberi di appartamenti, cantine, garage, soffitte e magazzini con professionalità e preventivi trasparenti."
      whatsappText="Ciao, vorrei un preventivo per un trasloco e/o sgombero a Verona o zone limitrofe. Grazie!"
      introText="Cerchi un'<strong>impresa di traslochi e sgomberi a Verona</strong> seria e affidabile? Traslochi Servizi è la ditta di riferimento per chi ha bisogno di un servizio completo: dal trasloco di casa o ufficio allo sgombero di appartamenti, cantine, garage e magazzini. Operiamo a Verona e in tutta la provincia con un team organizzato, interventi rapidi e <strong>preventivi gratuiti</strong>. Affidati a un unico interlocutore per entrambi i servizi: risparmi tempo, costi e stress."
      details={[
        {
          title: "Traslochi residenziali e commerciali",
          text: "Organizziamo traslochi di case, appartamenti, uffici e negozi a Verona e provincia. Ogni trasloco viene pianificato nei dettagli: imballaggio, protezione arredi, smontaggio e rimontaggio mobili.",
        },
        {
          title: "Sgomberi di ogni tipo di spazio",
          text: "Sgomberiamo appartamenti, cantine, soffitte, garage, magazzini e locali commerciali. Rimuoviamo tutto con ordine, gestendo anche la separazione e il trasporto dei materiali.",
        },
        {
          title: "Trasloco e sgombero combinati",
          text: "Devi trasferirti e liberare il vecchio immobile? Gestiamo trasloco e sgombero in un unico intervento coordinato: un solo preventivo, un solo team, massima efficienza.",
        },
        {
          title: "Svuotamento cantine, garage e magazzini",
          text: "Interventi dedicati per svuotare cantine con accessi difficili, garage ingombri e magazzini aziendali. Lavoriamo anche in spazi stretti e con materiali voluminosi.",
        },
        {
          title: "Gestione completa dei materiali",
          text: "Al termine del lavoro ci occupiamo della gestione dei materiali rimossi: separazione, trasporto e smaltimento quando necessario. Tutto in modo trasparente e regolare.",
        },
        {
          title: "Preventivo unico e gratuito",
          text: "Contattaci per un preventivo che copra sia il trasloco che lo sgombero. Il prezzo è chiaro, dettagliato e senza sorprese. Operiamo 7 giorni su 7.",
        },
      ]}
      faq={[
        {
          q: "La vostra ditta fa sia traslochi che sgomberi a Verona?",
          a: "Sì, Traslochi Servizi è un'impresa specializzata sia in traslochi residenziali e commerciali, sia in sgomberi di appartamenti, cantine, garage e magazzini a Verona e in tutta la provincia.",
        },
        {
          q: "Posso richiedere trasloco e sgombero insieme?",
          a: "Certamente. Molti clienti ci affidano sia il trasloco che lo sgombero del vecchio immobile. Organizziamo entrambi i servizi in modo coordinato per risparmiare tempo e costi.",
        },
        {
          q: "Quanto costa un servizio di traslochi e sgomberi a Verona?",
          a: "Il costo dipende dal tipo di intervento, dai volumi e dalle difficoltà logistiche. Offriamo preventivi gratuiti e personalizzati. Contattaci per una valutazione senza impegno.",
        },
      ]}
    />
  );
}
