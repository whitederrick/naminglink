import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Versione italiana. Traduzione del testo coreano originale (ko.ts), che è quello con
// valore legale. Se cambia l'originale, va rivisto anche questo file.

export const it: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Informazioni sul prodotto",
    info: [
      ["Fornitore", "Naming-Link"],
      ["Formato", "Contenuto digitale (risultato a schermo o documento PDF). Viene fornito immediatamente dopo il pagamento."],
      ["Requisiti", "Un browser internet o un qualsiasi dispositivo in grado di aprire un PDF. Non è necessaria alcuna installazione."],
      ["Durata d'uso", "Senza limiti. Il file scaricato resta in possesso dell'utente."],
      ["Recesso", "Rimborso integrale prima dell'inizio della fornitura. Una volta iniziata, il recesso per semplice ripensamento è limitato (art. 17, comma 2, della legge coreana sul commercio elettronico)."],
      ["Costi di cambio o reso", "Nessuno. Trattandosi di contenuto digitale, non è prevista alcuna spedizione."],
    ],
    consent:
      "Confermo che questo prodotto è un contenuto digitale fornito immediatamente dopo il pagamento e che **una volta iniziata la fornitura il recesso per semplice ripensamento è limitato**.",
    required: "Per poter pagare è necessario accettare le limitazioni al diritto di recesso.",
    refund:
      "Per rimborsi o domande, rivolgersi al servizio clienti o all'indirizzo e-mail indicati in basso. Se un errore di sistema ha impedito la fornitura del prodotto, o se l'importo addebitato è diverso da quello dell'ordine, rimborsiamo l'intero importo.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Informazioni sul prodotto",
    info: [
      ["Fornitore", "Naming-Link"],
      ["Formato", "Sigillo fisico (dojang) inciso singolarmente con il testo indicato nell'ordine."],
      ["Modalità di realizzazione", "Ricevuto l'ordine, verifichiamo il testo e il carattere e diamo inizio all'incisione."],
      ["Spedizione", "Spedito al termine dell'incisione. Corriere nazionale in Corea, spedizione internazionale all'estero."],
      ["Recesso", "**Prima dell'inizio dell'incisione**, rimborso integrale. Una volta iniziata, il recesso è limitato: si tratta di un bene prodotto singolarmente su ordinazione e non rivendibile (art. 17, comma 2, della legge coreana sul commercio elettronico)."],
      ["Cambio e reso", "Se l'articolo risulta danneggiato, inciso in modo errato o diverso dall'ordine, provvediamo gratuitamente a rifarlo oppure rimborsiamo l'intero importo."],
      ["Costi di reso", "Gratuiti nei casi sopra indicati. In caso di semplice ripensamento è possibile annullare solo prima dell'inizio dell'incisione."],
    ],
    consent:
      "Confermo che questo sigillo è un **prodotto realizzato su ordinazione, inciso con il testo da me indicato, e che una volta iniziata l'incisione il recesso per semplice ripensamento è limitato**.",
    required: "Per poter pagare è necessario accettare le limitazioni al diritto di recesso.",
    refund:
      "Per rimborsi o domande, rivolgersi al servizio clienti o all'indirizzo e-mail indicati in basso. In caso di articolo danneggiato, inciso in modo errato o diverso dall'ordine, lo rifacciamo gratuitamente oppure rimborsiamo l'intero importo.",
  },
};
