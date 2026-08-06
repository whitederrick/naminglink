// 드림링크 화면 사전의 Italian (Italiano)(it) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const it: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Il sogno di oggi, interpretato attraverso i simboli tradizionali coreani",
  "currentLanguage": "Lingua attuale",
  "moreLanguages": "Altro",
  "closeLanguages": "Chiudi",
  "dream": {
    "title": "Interpretazione dei sogni",
    "subtitle": "Scrivi il sogno che hai avuto e lo cercheremo in un dizionario dei simboli tradizionali coreani.",
    "textLabel": "Di cosa hai sognato?",
    "textPlaceholder": "Scrivilo come lo ricordi. Ad esempio: un carpa è saltata fuori da acqua limpida",
    "moodLabel": "Come ti sei sentito al risveglio",
    "moods": {
      "good": "Bene",
      "scary": "Spaventoso",
      "strange": "Strano",
      "sad": "Triste",
      "unsure": "Non sicuro"
    },
    "recurringLabel": "Faccio questo sogno di nuovo e di nuovo",
    "submit": "Leggi il mio sogno",
    "submitting": "Sto cercando…",
    "errorEmpty": "Per favore, scrivi un po' di più sul sogno.",
    "errorGeneric": "Non siamo riusciti a caricare la lettura. Per favore, riprova tra un momento.",
    "resultTitle": "Interpretazione del sogno",
    "symbolsHeading": "Simboli trovati nel tuo sogno",
    "noSymbols": "Nessun simbolo tradizionale del nostro dizionario è apparso in questo sogno. Lo lasciamo vuoto piuttosto che inventare un significato.",
    "themesHeading": "Cosa indicano insieme",
    "conceptionNotice": "I simboli tradizionalmente letti come segni di concezione appaiono qui. Questo non determina la gravidanza.",
    "disclaimer": "Questo è materiale di riferimento da una prospettiva di interpretazione tradizionale dei sogni, non un consiglio medico, finanziario o legale. Non memorizziamo il sogno che hai scritto.",
    "again": "Leggi un altro sogno"
  },
  "landing": {
    "title": "Leggi il tuo sogno\nnel modo tradizionale",
    "subtitle": "Cerchiamo i simboli nel tuo sogno in un dizionario della tradizione coreana dei sogni.\nNessuna data di nascita, nessuna registrazione.",
    "howTitle": "Come funziona",
    "steps": [
      "Scrivi il sogno come lo ricordi. Una frase o due sono sufficienti.",
      "Cerchiamo in un dizionario di simboli tradizionali coreani per ciò che è apparso. Se un simbolo non è presente, lo diciamo.",
      "Vedi cosa ogni simbolo è stato tradizionalmente interpretato e cosa indicano insieme."
    ],
    "privacyTitle": "Il sogno che scrivi non viene memorizzato",
    "privacyBody": "Ciò che scrivi viene utilizzato solo mentre si elabora la lettura e non viene mai registrato.\nNon è necessario alcun account e nulla rimane sul server una volta completata la lettura.",
    "disclaimer": "Questo è materiale di riferimento da una prospettiva di tradizionale 해몽. Non è una previsione di ciò che deve venire, né un consiglio medico o finanziario."
  },
  "ads": {
    "label": "Pubblicità"
  },
  "selfAds": {
    "label": "Servizi correlati",
    "comingSoon": "In arrivo",
    "purposes": {
      "naminglink": "Nomi coreani e hanja scelti per significato e conteggio dei tratti",
      "inyeonlink": "Come due persone si adattano, letto dai loro quattro pilastri e segni zodiacali",
      "sajulink": "I tuoi quattro pilastri e come oggi si incontra con essi",
      "dreamslink": "Interpretazioni dei sogni tratte da un dizionario di simboli",
      "placelink": "Luoghi da visitare per un appuntamento in Corea, condivisi e raccomandati"
    }
  },
  "analyzing": {
    "title": "Cercando i simboli nel tuo sogno",
    "quotes": [
      "Un sogno tende a riflettere gli ultimi giorni più che i giorni a venire.",
      "Lo stesso simbolo è stato interpretato in modo diverso a seconda di chi lo ha sognato.",
      "La tradizionale lettura dei sogni non è una chiave di risposta. È un insieme di storie accumulate nel tempo.",
      "Un sogno spaventoso non è necessariamente un sogno cattivo. Può essere il segno lasciato da una mente spaventata.",
      "Va bene se ricordi solo un frammento. Un simbolo è sufficiente per iniziare.",
      "Un sogno che continua a tornare di solito arriva con qualcosa di incompiuto.",
      "Quanto era chiara l'acqua e di che colore era, è ciò che i lettori antichi osservavano più da vicino.",
      "Come ti sei sentito al risveglio persiste tanto quanto ciò che hai effettivamente visto.",
      "Buon sogno o meno, è meglio non lasciare che decida la tua giornata.",
      "Una lettura non è una parola su ciò che accadrà. È un secondo sguardo su ciò che già è."
    ],
    "watching": "Riproduzione dell'annuncio",
    "remaining": "Il risultato si apre tra {seconds} s"
  },
  "dreamCard": {
    "title": "Conserva questo sogno come una carta",
    "body": "Abbiamo messo il sogno che hai scritto e i simboli che abbiamo trovato in un'unica immagine. È **un file immagine, non un PDF**, quindi puoi salvarlo o inviarlo così com'è.",
    "buyButton": "Ottienilo per {price}",
    "preparing": "Preparazione in corso",
    "ordering": "Creazione dell'ordine…",
    "paying": "Elaborazione del pagamento…",
    "issuing": "Creazione della carta…",
    "done": "Fatto. Usa il pulsante qui sotto per scaricarlo di nuovo.",
    "failed": "Il pagamento o il download non sono riusciti. Per favore riprova tra un momento.",
    "retry": "Scarica di nuovo",
    "contents": [
      "I simboli trovati nel tuo sogno e cosa significano tradizionalmente",
      "Cosa indicano insieme quei simboli",
      "La data del sogno e la versione del dizionario"
    ],
    "consentLabel": "Questo è un contenuto digitale fornito immediatamente dopo il pagamento. Comprendo che **una volta completato il download, il diritto di recesso per ripensamento è limitato**.",
    "consentRequired": "Devi accettare i termini di recesso prima di pagare.",
    "productInfoTitle": "Informazioni sul prodotto",
    "productInfo": [
      [
        "Fornitore",
        "{brand}"
      ],
      [
        "Formato",
        "1 file immagine (PNG), scaricato su questo schermo subito dopo il pagamento. Non è un documento PDF."
      ],
      [
        "Requisiti",
        "Qualsiasi dispositivo in grado di aprire un'immagine. Nessuna installazione e nessun account."
      ],
      [
        "Disponibilità",
        "Nessun limite di tempo. Il file scaricato è tuo da tenere."
      ],
      [
        "Scarica di nuovo",
        "Fino a 5 volte con lo stesso ordine. Non conserviamo il file, quindi non può essere creato di nuovo una volta che esci dalla schermata dei risultati."
      ],
      [
        "Ritiro",
        "Rimborso completo prima che il download sia completato. Successivamente, il ritiro per ripensamento è limitato (Legge coreana sul commercio elettronico art. 17(2))."
      ],
      [
        "Costi di restituzione",
        "Nessuno. I contenuti digitali non vengono spediti."
      ]
    ],
    "refundContact": "Per rimborsi o domande, contatta il servizio di supporto o l'indirizzo email qui sotto. Se il file non è mai stato prodotto, o l'importo addebitato è diverso dall'ordine, lo rimborsiamo completamente.",
    "pdfLanguageNotice": "Il testo sulla scheda appare nella stessa lingua di questa schermata."
  },
  "conceptionReport": {
    "title": "Conserva la lettura del sogno di concezione come PDF",
    "body": "Quando i simboli tradizionalmente letti come presagi di concezione appaiono, un PDF di 4 pagine espone cosa è apparso, cosa ha significato tradizionalmente e da dove proviene quella lettura. Non determina la gravidanza o il sesso di un bambino.",
    "buyButton": "Ottienilo per {price}",
    "preparing": "Preparazione in corso",
    "ordering": "Creazione dell'ordine…",
    "paying": "Elaborazione del pagamento…",
    "issuing": "Creazione del report…",
    "done": "Fatto. Usa il pulsante qui sotto per scaricarlo di nuovo.",
    "failed": "Il pagamento o il download non sono riusciti. Per favore riprova tra un momento.",
    "retry": "Scarica di nuovo",
    "contents": [
      "Pagina 1 — il sogno che hai scritto e ciò che è stato trovato in esso",
      "Pagina 2 — ogni simbolo e cosa ha significato tradizionalmente",
      "Pagina 3 — perché questi sono letti come presagi di concezione",
      "Pagina 4 — una pagina da conservare (la data e le note legali)"
    ],
    "consentLabel": "Questo è contenuto digitale fornito immediatamente dopo il pagamento. Comprendo che **una volta completato il download, il diritto di recesso per ripensamento è limitato**.",
    "consentRequired": "Devi accettare i termini di recesso prima di pagare.",
    "productInfoTitle": "Informazioni sul prodotto",
    "productInfo": [
      [
        "Fornitore",
        "{brand}"
      ],
      [
        "Formato",
        "1 documento PDF (4 pagine), scaricato su questo schermo subito dopo il pagamento."
      ],
      [
        "Requisiti",
        "Qualsiasi dispositivo che può aprire un PDF. Nessuna installazione e nessun account."
      ],
      [
        "Disponibilità",
        "Nessun limite di tempo. Il file scaricato è tuo da tenere."
      ],
      [
        "Scarica di nuovo",
        "Fino a 5 volte con lo stesso ordine. Non conserviamo il file, quindi non può essere ricreato una volta che lasci la schermata dei risultati."
      ],
      [
        "Ritiro",
        "Rimborso completo prima del completamento del download. Dopo, il ritiro per ripensamento è limitato (Legge sul commercio elettronico coreano art. 17(2))."
      ],
      [
        "Costi di restituzione",
        "Nessuno. I contenuti digitali non vengono spediti."
      ]
    ],
    "refundContact": "Per rimborsi o domande, contatta il servizio di supporto o l'indirizzo email qui sotto. Se il documento non è mai stato prodotto, o l'importo addebitato differisce dall'ordine, lo rimborseremo completamente.",
    "pdfLanguageNotice": "Il PDF viene generato nella stessa lingua di questa schermata."
  },
  "footer": {
    "privacy": "Privacy",
    "terms": "Termini",
    "refund": "Rimborsi",
    "pricing": "Prezzi",
    "legalEntity": "Società",
    "representative": "Rappresentante",
    "businessNumber": "Registro",
    "mailOrderNumber": "Vendita online",
    "address": "Indirizzo",
    "customerCenter": "Servizio clienti",
    "email": "Email",
    "privacyOfficer": "Responsabile privacy",
    "hostingProvider": "Hosting",
    "providedBy": "Fornito da",
    "effective": "In vigore dal",
    "backHome": "Torna alla home"
  }
};
