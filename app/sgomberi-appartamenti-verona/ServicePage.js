"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ServicePage() {
  return (
    <ServicePageLayout
      slug="sgomberi-appartamenti-verona"
      title="Sgombero Appartamenti a Verona e Provincia"
      subtitle="Sgomberi appartamenti"
      description="Sgombero completo di appartamenti a Verona e nei comuni limitrofi. Rimozione ordinata di mobili, arredi e materiali con pulizia finale dello spazio e gestione trasparente."
      whatsappText="Ciao, vorrei un preventivo per uno sgombero appartamento a Verona o zone limitrofe. Grazie!"
      introText="Hai bisogno di <strong>sgomberare un appartamento a Verona</strong>? Che si tratti di un immobile ereditato, di un alloggio da preparare per la vendita o per l'affitto, o semplicemente di uno spazio da liberare, ci occupiamo di tutto noi. Lavoriamo con metodo: valutiamo lo spazio, organizziamo il lavoro e portiamo via tutto in tempi rapidi e con la massima cura per gli ambienti. Scopri anche tutti i nostri <a href='/sgomberi-verona' style='color:var(--primary);font-weight:700'>servizi di sgombero a Verona</a> e il nostro <a href='/traslochi-verona' style='color:var(--primary);font-weight:700'>servizio traslochi</a>."
      details={[
        {
          title: "Svuotamento completo dell'appartamento",
          text: "Rimozione di tutti i mobili, arredi ed oggetti. Lavoriamo con ordine, proteggendo pavimenti e pareti durante lo sgombero per riconsegnare l'appartamento in condizioni ottimali.",
        },
        {
          title: "Gestione e separazione materiali",
          text: "Separiamo ciò che può essere recuperato da ciò che va smaltito. Ti consigliamo la soluzione migliore per gestire ogni tipo di materiale in modo trasparente.",
        },
        {
          title: "Sgombero rapido per vendita o affitto",
          text: "Organizziamo lo sgombero in tempi brevi, ideale per chi deve liberare un appartamento per vendita, affitto o ristrutturazione. Interventi anche in giornata.",
        },
        {
          title: "Sgombero appartamenti ereditati",
          text: "Ci occupiamo con rispetto e discrezione dello svuotamento di appartamenti ereditati. Gestiamo oggetti personali e arredi con la massima attenzione.",
        },
        {
          title: "Pulizia finale garantita",
          text: "Al termine dello sgombero, lo spazio è libero, pulito e pronto per essere utilizzato. Un servizio completo dalla A alla Z.",
        },
        {
          title: "Preventivo gratuito senza impegno",
          text: "Valutiamo lo spazio e ti forniamo un preventivo chiaro e dettagliato prima di iniziare. Nessun costo nascosto, nessuna sorpresa.",
        },
      ]}
      faq={[
        {
          q: "Quanto tempo serve per sgomberare un appartamento?",
          a: "Dipende dalle dimensioni e dalla quantità di materiale. Un appartamento medio viene sgomberato in mezza giornata. Per una stima precisa, contattaci per un preventivo gratuito.",
        },
        {
          q: "Vi occupate anche dello smaltimento dei materiali?",
          a: "Sì, gestiamo la separazione e il trasporto dei materiali. Ti consigliamo la soluzione migliore per ogni tipo di oggetto.",
        },
      ]}
    />
  );
}
