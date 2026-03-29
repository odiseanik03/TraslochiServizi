"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ServicePage() {
  return (
    <ServicePageLayout
      slug="svuotamento-garage-verona"
      title="Svuotamento Garage a Verona e Provincia"
      subtitle="Svuotamento garage"
      description="Svuotiamo garage e box auto a Verona e nei comuni della provincia. Rimozione di ingombri, attrezzi, materiali accumulati e vecchi arredi con gestione rapida e organizzata."
      whatsappText="Ciao, vorrei un preventivo per uno svuotamento garage a Verona o zone limitrofe. Grazie!"
      introText="Il garage diventa spesso un deposito di oggetti inutilizzati: vecchi attrezzi, materiale edile, pneumatici, mobili rotti. Se cerchi un servizio di <strong>svuotamento garage a Verona</strong> rapido e affidabile, siamo la soluzione giusta. Liberiamo il tuo garage in poche ore, lasciandolo pulito e pronto all'uso. Operiamo a Verona città e in tutta la provincia. Scopri anche gli altri nostri <a href='/sgomberi-verona' style='color:var(--primary);font-weight:700'>servizi di sgombero a Verona</a> e il nostro <a href='/traslochi-verona' style='color:var(--primary);font-weight:700'>servizio traslochi</a>."
      details={[
        {
          title: "Rimozione completa di tutti gli ingombri",
          text: "Portiamo via tutto: vecchi mobili, attrezzi, pneumatici, materiale edile e qualsiasi tipo di ingombro. Tu ci indichi cosa va tolto, noi facciamo il resto.",
        },
        {
          title: "Intervento rapido e organizzato",
          text: "Organizziamo lo svuotamento per liberare il garage nel minor tempo possibile. Ideale prima di una ristrutturazione, un trasloco o semplicemente per recuperare spazio.",
        },
        {
          title: "Garage libero e pulito",
          text: "Al termine del lavoro il garage è completamente sgombero e pronto per essere utilizzato. Gestiamo anche lo smaltimento quando necessario.",
        },
        {
          title: "Box auto e garage condominiali",
          text: "Interveniamo anche su box auto singoli e garage condominiali. Ci adattiamo agli spazi e agli accessi disponibili.",
        },
        {
          title: "Smaltimento materiali incluso",
          text: "Quando necessario, ci occupiamo del trasporto e della gestione dei materiali rimossi. Tutto con trasparenza e preventivi chiari.",
        },
        {
          title: "Preventivo gratuito",
          text: "Contattaci per una valutazione gratuita. Ti forniamo un preventivo chiaro prima di iniziare: nessun costo nascosto.",
        },
      ]}
      faq={[
        {
          q: "In quanto tempo svuotate un garage?",
          a: "Un garage standard viene svuotato in poche ore. Per garage molto pieni o con materiali particolari, potrebbe servire una mezza giornata. Contattaci per un preventivo.",
        },
        {
          q: "Rimuovete anche pneumatici e materiale edile?",
          a: "Sì, rimuoviamo qualsiasi tipo di ingombro: pneumatici, attrezzi, materiale edile, vecchi mobili e altro. Ci occupiamo di tutto.",
        },
      ]}
    />
  );
}
