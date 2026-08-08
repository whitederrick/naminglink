import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Italiano — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const IT_DOCS = {
  "about": {
    "eyebrow": "Informazioni",
    "title": "Informazioni su Naming-Link",
    "summary": "Siamo un servizio che aiuta a scegliere e comprendere i nomi coreani. Qui spieghiamo su cosa basiamo i nostri risultati e cosa non facciamo deliberatamente.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "Cosa facciamo",
        "blocks": [
          {
            "p": "Naming-Link aiuta a **scegliere e comprendere i nomi coreani** — il hanja dietro il nome di un bambino, un nome coreano da usare all'estero, una traslitterazione in Hangul del tuo nome, e souvenir come un sigillo o un rapporto stampato."
          },
          {
            "p": "Visualizzare i tuoi risultati è **gratuito e non richiede un account.** Gli articoli a pagamento non rivendono ciò che lo schermo ti ha già mostrato: aprono più candidati, aggiungono analisi scritte o trasformano il risultato in qualcosa che puoi conservare."
          }
        ]
      },
      {
        "title": "Su cosa si basano le nostre risposte",
        "blocks": [
          {
            "p": "Il hanja proviene dalla **tabella ufficiale dei hanja per nomi della Corte Suprema della Corea.** Ogni carattere ha una lettura fissa per l'uso nei nomi, e i caratteri al di fuori della tabella non possono essere registrati. Non aggiungiamo a quell'elenco né scegliamo preferiti."
          },
          {
            "p": "Saju e figure dei cinque elementi sono calcolati dall'**almanacco lunisolare coreano**, con l'orario di nascita corretto all'ora solare vera per il luogo di nascita. La lettura è un riferimento tradizionale, non una previsione."
          },
          {
            "p": "Le spiegazioni scritte sono prodotte da AI. Per evitare che **inventi cose**, il modello riceve solo il tuo input e i nostri dati di riferimento, e gli viene detto di rimanere all'interno di essi. Le guide spiegano questo in dettaglio."
          }
        ]
      },
      {
        "title": "Cosa non facciamo",
        "blocks": [
          {
            "ul": [
              "**Non facciamo previsioni.** Nulla qui promette fortuna, ricchezza o protezione.",
              "**Non memorizziamo il tuo nome.** I risultati gratuiti non vengono mai scritti sui nostri server, e i documenti a pagamento vengono consegnati senza mantenere una copia del file.",
              "**Pagare non compra una risposta migliore.** Sbloccare con un annuncio e sbloccare con un pagamento forniscono esattamente lo stesso contenuto."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il servizio è disponibile in 23 lingue. I PDF a pagamento sono emessi in inglese per arabo e khmer — il renderer PDF non supporta quegli script — e lo diciamo sullo schermo prima di pagare."
          }
        ]
      },
      {
        "title": "Contatti",
        "blocks": [
          {
            "p": "I dettagli dell'azienda e come contattarci sono sulla [pagina di contatto](/contact), inclusi rimborsi, richieste di privacy e segnalazioni di errori."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Letture",
    "title": "Letture fisse — una pronuncia per carattere",
    "summary": "La tabella ufficiale non elenca solo i caratteri. Fissa anche come ciascuno di essi viene letto quando usato in un nome.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Una lettura fissa per ogni carattere",
        "blocks": [
          {
            "p": "La tabella dei hanja per nomi non decide solo quali caratteri possono essere usati. **Fissa anche come ciascun carattere viene letto quando appare in un nome.** Quella lettura fissa è quella su cui si basa la registrazione."
          },
          {
            "p": "La maggior parte dei hanja ha diverse letture possibili. Un nome, però, è scritto su documenti e pronunciato ad alta voce, quindi ha bisogno di esattamente una lettura. La tabella quindi assegna a ciascun carattere la sua lettura per l'uso nei nomi, e nessun'altra lettura può essere registrata."
          }
        ]
      },
      {
        "title": "Quindi il suono viene prima",
        "blocks": [
          {
            "p": "Ecco perché Naming-Link fissa il suono prima di cercare hanja. Se il nome è \"지은\", il significato può essere scelto solo tra i caratteri assegnati alla lettura **지** e i caratteri assegnati alla lettura **은**."
          },
          {
            "p": "Per quanto buono possa essere un significato, un carattere la cui lettura non corrisponde non può essere usato per quel nome. Inoltre, non cambiamo mai il suono di un nome per adattarlo a un carattere — un nome viene pronunciato per tutta la vita, e il suono è fissato prima, con l'hanja che segue."
          }
        ]
      },
      {
        "title": "I cognomi sono al di fuori di questa tabella",
        "blocks": [
          {
            "p": "Questo è spesso frainteso. **La tabella governa il nome di battesimo, non il cognome.** Un cognome segue ciò che è già registrato nel registro familiare, quindi alcune persone usano caratteri che non sono nella tabella dei hanja per nomi."
          },
          {
            "p": "Ecco perché Naming-Link tratta gli hanja dei cognomi in modo diverso. Aiutiamo solo a trovare un cognome, e lasciamo uno spazio per inserire direttamente uno, per le persone il cui carattere è al di fuori della tabella. I cognomi di due sillabe come Namgung e Seonwoo vengono inseriti allo stesso modo."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Come funziona",
    "title": "Come scriviamo il tuo nome in Hangul",
    "summary": "Come scegliamo i suoni quando scriviamo un nome straniero in Hangul, e perché non attacchiamo hanja.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Trasferiamo il suono, non il significato",
        "blocks": [
          {
            "p": "Questo servizio scrive **il tuo nome** in Hangul. Non ti dà un nome coreano. Michael diventa 마이클 — lo stesso nome, scritto affinché i coreani possano leggerlo e pronunciarlo. Non lo scambiamo con un nome coreano che ha un significato simile."
          },
          {
            "p": "Se desideri un nome coreano, **questo è un servizio diverso.** Uno mantiene il tuo nome e cambia solo la scrittura; l'altro propone un nuovo nome."
          }
        ]
      },
      {
        "title": "Come trattiamo i suoni che non esistono in coreano",
        "blocks": [
          {
            "p": "Ogni lingua ha suoni che il coreano non ha — f, v, z, th e distinzioni vocaliche che il coreano non fa. Per quelli scriviamo ciò che **un parlante coreano dice effettivamente** quando legge il tuo nome ad alta voce, piuttosto che trascrivere la fonetica originale simbolo per simbolo. L'obiettivo è la scrittura che verrà utilizzata, non quella più tecnicamente fedele."
          },
          {
            "p": "La stessa scrittura può differire a seconda da dove proviene un nome, quindi chiediamo la tua lingua e il tuo paese e lavoriamo da quella pronuncia."
          }
        ]
      },
      {
        "title": "Diverse scritture, affiancate",
        "blocks": [
          {
            "p": "Non esiste una risposta giusta unica. La scrittura più vicina al suono originale, quella più comunemente usata in Corea e quella più facile da scrivere sono spesso tre cose diverse. Quindi le mostriamo insieme e diciamo cosa le separa."
          },
          {
            "p": "Se nessuna di esse ti sembra giusta, puoi aggiungere un suggerimento sul suono che desideri e ripetere l'analisi — ad esempio, che una particolare sillaba dovrebbe essere scritta diversamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Niente hanja qui",
        "blocks": [
          {
            "p": "Non attacchiamo hanja a una traslitterazione. Gli hanja portano significato, e questo flusso riguarda il suono. Abbinare i caratteri solo al suono può portarti a un significato che non hai mai richiesto."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Come funziona",
    "title": "Come costruiamo un nome coreano",
    "summary": "Scegliamo tra i cognomi esistenti, valutiamo quanto sia facile pronunciare e scrivere il nome e chiediamo a cosa serve il nome.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Iniziamo con il cognome",
        "blocks": [
          {
            "p": "In Corea il cognome viene prima, e a differenza dei nomi di battesimo non è liberamente inventato — lo erediti. Quindi suggeriamo solo cognomi che le persone coreane hanno effettivamente. Il nostro pool predefinito è composto dai **20 cognomi più comuni**, che coprono insieme circa l'80% della popolazione."
          },
          {
            "p": "Se il tuo cognome si allinea con uno coreano reale per suono — Wang con 왕, Ye con 예 — lo mettiamo per primo. Mantenere un legame con il tuo nome originale vale più di un cognome scelto a caso."
          },
          {
            "p": "Puoi scegliere un cognome tu stesso o lasciarci raccomandarne uno. In entrambi i casi sarà **un cognome che esiste**."
          }
        ]
      },
      {
        "title": "Facile da pronunciare, facile da scrivere",
        "blocks": [
          {
            "p": "Questo è un nome che le persone in Corea ti chiameranno effettivamente, quindi la prima cosa che controlliamo è se un coreano può sentirlo una volta e scriverlo. Un nome che richiede di essere spiegato ogni volta è un peso che porti, non noi."
          },
          {
            "p": "Anche il significato è importante. I nomi di battesimo coreani di solito portano uno, quindi ti diciamo come viene letto il nome e perché lo abbiamo scelto — non solo il nome stesso."
          }
        ]
      },
      {
        "title": "Chiediamo a cosa serve il nome",
        "blocks": [
          {
            "p": "Un nome per documenti universitari non è lo stesso di un nome che gli amici grideranno attraverso una stanza, o di un soprannome che userai online. Chiediamo come intendi usarlo e teniamo conto di ciò."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Questa non è una traslitterazione",
        "blocks": [
          {
            "p": "Qui proponiamo un **nuovo nome coreano**. Se desideri che il tuo nome esistente sia scritto in Hangul — Michael come 마이클 — consulta la [guida alla traslitterazione in Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avvisi",
    "title": "Avvisi",
    "summary": "Dove annunciamo cambiamenti che influenzano il modo in cui utilizzi il servizio.",
    "backLabel": "Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contatti",
    "title": "Contattaci",
    "summary": "Come contattarci per domande, rimborsi, richieste di privacy e segnalazioni di errori, con i dettagli della nostra azienda.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "Scrivici via email",
        "blocks": [
          {
            "p": "Scrivi a **{email}**. Rispondiamo entro due giorni lavorativi. Per qualsiasi cosa riguardante un ordine — pagamento, rimborso, un file che non hai ricevuto — ti preghiamo di includere il tuo **numero d'ordine o l'email con cui hai pagato**."
          },
          {
            "p": "Richieste telefoniche: {customerCenter} (orari lavorativi coreani)."
          }
        ]
      },
      {
        "title": "Cosa inviare qui",
        "blocks": [
          {
            "ul": [
              "**Pagamenti e rimborsi** — se un documento non è mai stato prodotto, o l'importo addebitato differisce dal tuo ordine, rimborseremo completamente. Vedi la [politica di rimborso](/refund-policy).",
              "**Privacy** — richieste di accesso, correzione o cancellazione dei tuoi dati. Vedi la [politica sulla privacy](/privacy).",
              "**Correzioni** — se un significato, una lettura o un calcolo del hanja sembrano errati, faccelo sapere. Menzionare quale schermo e cosa hai inserito aiuta molto.",
              "**Altro** — partnership e stampa vanno allo stesso indirizzo."
            ]
          }
        ]
      },
      {
        "title": "Dettagli aziendali",
        "blocks": [
          {
            "ul": [
              "**Entità legale** — {companyName}",
              "**Rappresentante** — {representative}",
              "**Numero di registrazione aziendale** — {businessNumber}",
              "**Numero di registrazione per vendite per corrispondenza** — {mailOrderNumber}",
              "**Indirizzo** — {address}",
              "**Servizio clienti** — {customerCenter}",
              "**Email** — {email}",
              "**Responsabile della privacy** — {privacyOfficer}",
              "**Fornitore di hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Non è necessario includere un nome o una data di nascita nel tuo messaggio. I risultati gratuiti non vengono mai memorizzati sui nostri server, quindi non possiamo recuperarli di nuovo — un numero d'ordine è sufficiente."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "Servizio",
    "product": "Prodotti",
    "policy": "Politica",
    "support": "Supporto"
  },
  "intro": "Cambiamenti ai tuoi termini di utilizzo — prezzi, politiche — sono pubblicati qui prima che entrino in vigore. I miglioramenti interni non sono elencati: ciò che appare qui è ciò che devi sapere.",
  "empty": {
    "title": "Nessun avviso ancora",
    "body": "Quando qualcosa cambia, apparirà qui."
  },
  "effective": "Entrerà in vigore il {date}",
  "pager": {
    "label": "Pagine di avviso",
    "newer": "← Più recente",
    "older": "Più vecchio →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Le pagine di contatto e informazioni sono ora aperte",
      "body": [
        "Domande, rimborsi, richieste di privacy e segnalazioni di errori ora hanno un unico luogo dove andare. La pagina di contatto nel piè di pagina elenca la nostra email e i dettagli aziendali.",
        "Cosa basiamo le nostre risposte e cosa non facciamo deliberatamente è scritto sulla pagina informativa."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "I rapporti PDF sono emessi in inglese per arabo e khmer",
      "body": [
        "Se stai utilizzando il servizio in arabo o khmer, il PDF che acquisti è prodotto in inglese. Lo strumento che impagina i nostri documenti non può ancora impostare paragrafi in quegli script.",
        "Lo schermo rimane nella tua lingua e il tuo nome è stampato nel tuo script all'interno del documento.",
        "La stessa nota appare prima del pagamento. Quando lo strumento supporta questi script, lo diremo qui."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "I pagamenti non sono ancora aperti",
      "body": [
        "Creare un nome e leggere il risultato è gratuito oggi, e non è necessario alcun account.",
        "Gli articoli a pagamento non sono ancora in vendita. Gli importi mostrati nella pagina dei prezzi sono quelli che si applicheranno una volta aperte le vendite."
      ]
    }
  }
} satisfies NoticeCopy;
