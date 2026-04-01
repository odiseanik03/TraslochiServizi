"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ServicePage() {
  return (
    <ServicePageLayout
      slug="sgomberi-verona"
      title="Sgomberi a Verona e Provincia"
      subtitle="Sgomberi professionali"
      description="Servizio completo di sgomberi a Verona e in tutta la provincia. Sgomberiamo appartamenti, cantine, soffitte, garage, magazzini e locali commerciali con interventi rapidi, organizzati e trasparenti."
      whatsappText="Ciao, vorrei un preventivo per uno sgombero a Verona o zone limitrofe. Grazie!"
      introText="Cerchi una <strong>ditta di sgomberi a Verona</strong> seria e affidabile? Traslochi Servizi è il punto di riferimento per lo sgombero di ogni tipo di spazio nella città di Verona e in tutta la provincia. Che si tratti di uno <a href='/sgomberi-appartamenti-verona' style='color:var(--primary);font-weight:700'>sgombero appartamenti</a>, una cantina piena di oggetti accumulati, un <a href='/svuotamento-garage-verona' style='color:var(--primary);font-weight:700'>garage ingombro</a> o un <a href='/svuotamento-magazzini-verona' style='color:var(--primary);font-weight:700'>magazzino commerciale</a>, ci occupiamo di tutto con metodo e professionalità. Se stai cercando <strong>sgomberi Verona gratis</strong>, sappi che con noi hai sempre <strong>PREVENTIVO GRATUITO</strong> e senza impegno, con valutazione chiara del lavoro prima dell'intervento. Hai bisogno anche di un <a href='/traslochi-verona' style='color:var(--primary);font-weight:700'>trasloco a Verona</a>? Gestiamo anche quello."
      details={[
        {
          title: "Sgombero appartamenti a Verona",
          text: "Svuotamento completo di appartamenti per vendita, affitto, ristrutturazione o eredità. Rimozione di mobili, arredi e oggetti con pulizia finale dello spazio.",
        },
        {
          title: "Sgombero cantine e soffitte",
          text: "Svuotamento di cantine e soffitte anche con accessi difficili, scale strette e soffitti bassi. Rimozione ingombranti e riordino completo.",
        },
        {
          title: "Svuotamento garage e box auto",
          text: "Rimozione rapida di attrezzi, vecchi mobili, materiale edile e pneumatici dal garage. Interventi organizzati per liberare lo spazio in poche ore.",
        },
        {
          title: "Sgombero magazzini e depositi",
          text: "Sgombero di locali commerciali, depositi aziendali e magazzini di ogni dimensione. Servizio studiato per ridurre i tempi di fermo dell'attività.",
        },
        {
          title: "Gestione e smaltimento materiali",
          text: "Dopo lo sgombero, ci occupiamo della gestione dei materiali rimossi: separazione, trasporto e smaltimento quando necessario. Tutto in regola e con trasparenza.",
        },
        {
          title: "Preventivo gratuito in giornata",
          text: "Contattaci telefonicamente o su WhatsApp per ricevere un preventivo chiaro e dettagliato. Rispondiamo rapidamente e senza impegno.",
        },
      ]}
      faq={[
        {
          q: "Che tipi di sgomberi fate a Verona?",
          a: "Ci occupiamo di sgomberi di appartamenti, cantine, soffitte, garage, magazzini e locali commerciali in tutta la provincia di Verona.",
        },
        {
          q: "Quanto costa uno sgombero a Verona?",
          a: "Il prezzo dipende dal tipo di locale, dalla quantità di materiale e dalla difficoltà degli accessi. Offriamo preventivi gratuiti e senza impegno.",
        },
        {
          q: "Offrite anche sgomberi Verona gratis?",
          a: "Lo sgombero viene sempre valutato in base al lavoro richiesto, ma con Traslochi Servizi hai sempre un PREVENTIVO GRATUITO e senza impegno prima di decidere.",
        },
        {
          q: "Siete disponibili anche nel weekend per gli sgomberi?",
          a: "Sì, operiamo 7 giorni su 7, anche nel weekend e nei festivi, su appuntamento.",
        },
      ]}
    />
  );
}
