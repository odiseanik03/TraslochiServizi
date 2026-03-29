"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ServicePage() {
  return (
    <ServicePageLayout
      slug="svuotamento-magazzini-verona"
      title="Svuotamento Magazzini e Depositi a Verona"
      subtitle="Svuotamento magazzini"
      description="Sgombero e svuotamento di magazzini, depositi e locali commerciali a Verona e provincia. Interventi organizzati per attività commerciali e privati che devono liberare spazio."
      whatsappText="Ciao, vorrei un preventivo per uno svuotamento magazzino a Verona o zone limitrofe. Grazie!"
      introText="Hai un magazzino o un deposito da svuotare a Verona? Che si tratti di un locale commerciale, di un deposito aziendale o di un magazzino privato, il nostro team si occupa dello <strong>svuotamento completo</strong> con metodo e puntualità. Lavoriamo a Verona e in tutti i comuni della provincia, offrendo preventivi gratuiti e trasparenti. Offriamo anche <a href='/sgomberi-verona' style='color:var(--primary);font-weight:700'>sgomberi completi a Verona</a> e <a href='/traslochi-verona' style='color:var(--primary);font-weight:700'>traslochi professionali</a>."
      details={[
        {
          title: "Sgombero magazzini di ogni dimensione",
          text: "Sgomberiamo magazzini di qualsiasi dimensione: da piccoli depositi personali a grandi locali commerciali. Organizziamo il lavoro in base ai tempi e alle esigenze dell'attività.",
        },
        {
          title: "Servizio per aziende e privati",
          text: "Serviamo aziende, negozi, artigiani e privati. Gestiamo il ritiro di merce, scaffalature, materiale di allestimento e attrezzature con ordine e puntualità.",
        },
        {
          title: "Smaltimento e trasporto incluso",
          text: "Quando necessario, ci occupiamo anche della gestione e del trasporto dei materiali da smaltire. Tutto con trasparenza e preventivi chiari.",
        },
        {
          title: "Svuotamento depositi commerciali",
          text: "Chiusura attività, cambio sede o riorganizzazione? Svuotiamo il locale e gestiamo merce, scaffalature e arredi con la massima efficienza.",
        },
        {
          title: "Interventi programmati o urgenti",
          text: "Pianifichiamo lo sgombero secondo le tue tempistiche. Per urgenze siamo disponibili anche con preavviso ridotto.",
        },
        {
          title: "Preventivo gratuito e senza impegno",
          text: "Contattaci per una valutazione gratuita del tuo magazzino. Il preventivo è chiaro, trasparente e senza sorprese.",
        },
      ]}
      faq={[
        {
          q: "Svuotate anche magazzini di grandi dimensioni?",
          a: "Sì, gestiamo magazzini di qualsiasi dimensione: da piccoli depositi a grandi locali commerciali. Organizziamo il lavoro in base ai tempi e alle esigenze.",
        },
        {
          q: "Lavorate anche per aziende e negozi?",
          a: "Certamente. Serviamo aziende, negozi, artigiani e privati. Gestiamo il ritiro di merce, scaffalature e allestimenti con ordine e puntualità.",
        },
      ]}
    />
  );
}
