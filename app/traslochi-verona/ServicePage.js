"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ServicePage() {
  return (
    <ServicePageLayout
      slug="traslochi-verona"
      title="Traslochi a Verona e Provincia"
      subtitle="Traslochi professionali"
      description="Organizziamo traslochi per case, uffici e attività commerciali a Verona e provincia. Servizio chiaro, rapido e organizzato per traslochi Verona e provincia."
      whatsappText="Ciao, vorrei un preventivo per un trasloco a Verona o zone limitrofe. Grazie!"
      introText="Cerchi una <strong>ditta di traslochi a Verona</strong> affidabile e organizzata? Traslochi Servizi si occupa di <strong>traslochi Verona e provincia</strong> per case, uffici e attività nella città di Verona e in tutta la provincia: da San Giovanni Lupatoto a Villafranca, da Bussolengo a Negrar. Siamo un'impresa di <strong>traslochi professionali</strong> che pianifica ogni trasferimento nei dettagli per ridurre i tempi, proteggere i tuoi beni e rendere tutto il più semplice possibile. Offriamo <strong>preventivi gratuiti</strong>, <strong>traslochi economici Verona</strong>, prezzi chiari e anche <strong>piccoli traslochi Verona</strong> per chi ha bisogno di uno spostamento rapido e organizzato. Hai bisogno anche di <a href='/sgomberi-verona' style='color:var(--primary);font-weight:700'>sgomberi a Verona</a>? Ci occupiamo anche di quello."
      details={[
        {
          title: "Trasloco casa a Verona",
          text: "Spostamento completo di mobili, elettrodomestici ed effetti personali con protezioni adeguate. Organizziamo il lavoro stanza per stanza per ridurre i tempi e lo stress del trasferimento.",
        },
        {
          title: "Trasloco ufficio e attività",
          text: "Trasloco di uffici, studi professionali e negozi con attenzione a documenti, attrezzature e arredi. Interventi anche nel weekend per ridurre i tempi di fermo della tua attività.",
        },
        {
          title: "Piccoli traslochi e consegne",
          text: "Gestiamo piccoli traslochi a Verona, spostamento di singoli mobili, elettrodomestici o materiali vari. Ideale per chi ha bisogno di un intervento rapido e mirato senza un trasloco completo.",
        },
        {
          title: "Imballaggio e protezione",
          text: "Utilizziamo coperte protettive, pluriball e scatole resistenti per garantire che ogni oggetto arrivi a destinazione senza danni. Anche per oggetti fragili e di valore.",
        },
        {
          title: "Smontaggio e rimontaggio mobili",
          text: "Ci occupiamo dello smontaggio dei mobili nel punto di partenza e del rimontaggio nella nuova sede. Servizio incluso nel preventivo quando necessario.",
        },
        {
          title: "Preventivo gratuito e trasparente",
          text: "Prima di ogni trasloco forniamo un preventivo chiaro e dettagliato, con prezzi trasparenti e senza costi nascosti. Quello che concordiamo è quello che paghi, senza sorprese.",
        },
      ]}
      faq={[
        {
          q: "Quanto costa un trasloco a Verona?",
          a: "Il costo dipende dalla quantità di mobili, dalla distanza e dal piano. Offriamo preventivi gratuiti, prezzi chiari e senza impegno. Contattaci per un preventivo personalizzato.",
        },
        {
          q: "Fate anche piccoli traslochi a Verona?",
          a: "Sì, realizziamo anche piccoli traslochi a Verona e provincia per singoli mobili, elettrodomestici, scatoloni o piccoli trasferimenti domestici e professionali.",
        },
        {
          q: "Fate traslochi anche nel weekend?",
          a: "Sì, siamo operativi 7 giorni su 7, anche nel weekend e nei giorni festivi, su appuntamento.",
        },
        {
          q: "Proteggete i mobili durante il trasloco?",
          a: "Assolutamente sì. Utilizziamo imballaggi protettivi, coperte e materiali adeguati per proteggere mobili, elettrodomestici ed effetti personali durante il trasporto.",
        },
      ]}
    />
  );
}
