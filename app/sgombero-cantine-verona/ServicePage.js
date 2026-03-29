"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ServicePage() {
  return (
    <ServicePageLayout
      slug="sgombero-cantine-verona"
      title="Sgombero Cantine a Verona e Provincia"
      subtitle="Svuotamento cantine"
      description="Svuotamento e sgombero cantine a Verona e nei comuni limitrofi. Rimozione di materiali ingombranti, vecchi mobili e oggetti accumulati nel tempo, anche in spazi con accessi difficili."
      whatsappText="Ciao, vorrei un preventivo per uno sgombero cantina a Verona o zone limitrofe. Grazie!"
      introText="La cantina è spesso il luogo dove si accumulano anni di oggetti inutilizzati. Se hai bisogno di <strong>sgomberare una cantina a Verona</strong>, ci pensiamo noi. Lavoriamo anche in spazi con accessi limitati, scale strette e soffitti bassi. Il risultato? Una cantina libera, pulita e riutilizzabile. Servizio disponibile a Verona città e in tutti i comuni della provincia. Offriamo anche <a href='/sgomberi-verona' style='color:var(--primary);font-weight:700'>sgomberi completi a Verona</a> e <a href='/traslochi-verona' style='color:var(--primary);font-weight:700'>traslochi professionali</a>."
      details={[
        {
          title: "Accessi difficili e spazi stretti",
          text: "Lavoriamo in cantine con scale strette, soffitti bassi e accessi limitati. Valutiamo lo spazio in anticipo e ci organizziamo per operare in sicurezza senza danneggiare le strutture.",
        },
        {
          title: "Rimozione ingombranti dalla cantina",
          text: "Portiamo via mobili vecchi, elettrodomestici, scatoloni e materiali accumulati nel tempo. Tutto con ordine e attenzione agli ambienti circostanti.",
        },
        {
          title: "Pulizia e riordino finale",
          text: "Al termine dello svuotamento, lo spazio è libero e riordinato. Ideale prima di una vendita immobiliare, una ristrutturazione, o semplicemente per recuperare spazio utile.",
        },
        {
          title: "Sgombero cantina per vendita immobiliare",
          text: "Devi vendere casa e la cantina è piena? Ci occupiamo di liberarla completamente per rendere l'immobile pronto alla consegna, nei tempi che ti servono.",
        },
        {
          title: "Trasporto e smaltimento materiali",
          text: "Dopo la rimozione, ci occupiamo del trasporto dei materiali. Ti consigliamo la soluzione più pratica e trasparente per ogni tipo di oggetto.",
        },
        {
          title: "Preventivo gratuito e intervento rapido",
          text: "Contattaci per un sopralluogo o una valutazione telefonica. Il preventivo è gratuito, chiaro e senza impegno.",
        },
      ]}
      faq={[
        {
          q: "Riuscite a lavorare in cantine con scale strette?",
          a: "Sì, siamo attrezzati per lavorare in cantine con scale strette, soffitti bassi e accessi limitati. Valutiamo lo spazio prima dell'intervento per organizzare il lavoro in sicurezza.",
        },
        {
          q: "Quanto costa sgomberare una cantina a Verona?",
          a: "Il costo varia in base alla quantità di materiale e alla difficoltà degli accessi. Contattaci per un preventivo gratuito e senza impegno.",
        },
      ]}
    />
  );
}
