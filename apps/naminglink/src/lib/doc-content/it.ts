import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Italiano — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const IT_DOCS = {
  "about": {
    "eyebrow": "Informazioni",
    "title": "Informazioni su Naming-Link",
    "summary": "Ti aiutiamo a scegliere e comprendere i nomi coreani. Ecco su cosa basiamo i nostri risultati e cosa non facciamo deliberatamente.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "Cosa facciamo",
        "blocks": [
          {
            "p": "Naming-Link ti aiuta a **scegliere e comprendere i nomi coreani** — il hanja dietro il nome di un bambino, un nome coreano da usare all'estero, una scrittura in Hangul del tuo nome, e souvenir come un sigillo o un rapporto stampato."
          },
          {
            "p": "Vedere i tuoi risultati è **gratuito e non richiede un account.** Gli articoli a pagamento non rivendono mai ciò che lo schermo ti ha già mostrato: aprono più candidati, aggiungono analisi scritte, o trasformano il risultato in qualcosa che puoi tenere."
          }
        ]
      },
      {
        "title": "Su cosa si basano le nostre risposte",
        "blocks": [
          {
            "p": "I hanja provengono dalla **tabella ufficiale di hanja per nomi della Corte Suprema della Corea.** Ogni carattere ha una lettura fissa per l'uso nei nomi, e i caratteri al di fuori della tabella non possono essere registrati. Non aggiungiamo a quell'elenco né scegliamo preferiti."
          },
          {
            "p": "I calcoli di saju e delle figure dei cinque elementi sono effettuati secondo il **calendario lunisolare coreano**, con l'orario di nascita corretto all'ora solare vera per il luogo di nascita. La lettura è un riferimento tradizionale, non una previsione."
          },
          {
            "p": "Le spiegazioni scritte sono prodotte da AI. Per evitare che **inventi cose**, il modello riceve solo il tuo input e i nostri dati di riferimento, ed è istruito a rimanere all'interno di essi. Le guide spiegano questo in dettaglio."
          }
        ]
      },
      {
        "title": "Cosa non facciamo",
        "blocks": [
          {
            "ul": [
              "**Non facciamo previsioni.** Niente qui promette fortuna, ricchezza o protezione.",
              "**Non memorizziamo il tuo nome.** I risultati gratuiti non vengono mai scritti sui nostri server, e i documenti a pagamento vengono consegnati senza mantenere una copia del file.",
              "**Pagare non compra una risposta migliore.** Sbloccare con un annuncio e sbloccare con un pagamento danno esattamente lo stesso contenuto."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il servizio è disponibile in 23 lingue. I PDF a pagamento sono emessi in inglese per arabo e khmer — il renderer PDF non supporta quegli script — e lo diciamo sullo schermo prima che tu paghi."
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
  "guide": {
    "eyebrow": "Come funziona Naming-Link",
    "title": "Su cosa basiamo il tuo nome",
    "summary": "Come scegliamo un cognome coreano, cosa controlliamo prima di suggerire un nome proprio, e come scriviamo il tuo nome in Hangul — con le parti che lasciamo deliberatamente fuori.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "caratteri hanja per nome"
              },
              {
                "value": "{syllableCount}",
                "label": "sillabe Hangul coperte"
              },
              {
                "value": "{effectiveDate}",
                "label": "data di efficacia della tabella"
              },
              {
                "value": "{avoidTotal}",
                "label": "caratteri tradizionalmente evitati"
              }
            ]
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
        "title": "Portiamo il suono, non il significato",
        "blocks": [
          {
            "p": "Questo servizio scrive **il tuo nome** in Hangul. Non ti dà un nome coreano. Michael diventa 마이클 — lo stesso nome, scritto in modo che i coreani possano leggerlo e dirlo. Non lo scambiamo con un nome coreano che ha un significato simile."
          },
          {
            "p": "Se un nome coreano è ciò che desideri, **questo è un servizio diverso**. Uno mantiene il tuo nome e cambia solo la scrittura; l'altro propone un nuovo nome."
          }
        ]
      },
      {
        "title": "Suoni che il coreano non ha",
        "blocks": [
          {
            "p": "Ogni lingua ha suoni che il coreano non possiede — f, v, z, th, e distinzioni vocaliche che il coreano non fa. Per quelli scriviamo ciò che **un parlante coreano dice realmente** quando legge il tuo nome ad alta voce, piuttosto che trascrivere la fonetica originale simbolo per simbolo. L'obiettivo è la scrittura che verrà utilizzata, non la più tecnicamente fedele."
          },
          {
            "p": "La stessa scrittura può variare a seconda di dove proviene un nome, quindi chiediamo la tua lingua e il tuo paese e lavoriamo a partire da quella pronuncia."
          }
        ]
      },
      {
        "title": "Diverse scritture, affiancate",
        "blocks": [
          {
            "p": "Non esiste una risposta giusta unica. La scrittura più vicina al suono originale, quella più comunemente usata in Corea, e quella più facile da scrivere sono spesso tre cose diverse. Quindi le mostriamo insieme e diciamo cosa le separa."
          },
          {
            "p": "Se nessuna di esse ti sembra giusta, puoi aggiungere un suggerimento sul suono che desideri e riprovare — per esempio, che una particolare sillaba dovrebbe essere scritta diversamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nessun hanja qui",
        "blocks": [
          {
            "p": "Non attacchiamo hanja a una traslitterazione. Gli hanja portano significato, e questo flusso riguarda il suono. Abbinare caratteri al suono da solo può portarti a un significato che non hai mai richiesto."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Come funziona",
    "title": "Come costruiamo un nome coreano",
    "summary": "Scegliamo tra i cognomi esistenti, valutiamo quanto sia facile pronunciare e scrivere il nome, e chiediamo a cosa serve il nome.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Iniziamo con il cognome",
        "blocks": [
          {
            "p": "In Corea il cognome viene prima, e a differenza dei nomi di battesimo non è liberamente inventato — lo erediti. Quindi suggeriamo solo cognomi che le persone coreane hanno realmente. Il nostro pool predefinito è composto dai **20 cognomi più comuni**, che coprono insieme circa l'80% della popolazione."
          },
          {
            "p": "Se il tuo cognome si allinea con uno coreano reale per suono — Wang con 왕, Ye con 예 — mettiamo quello per primo. Mantenere un legame con il tuo nome originale vale più di un cognome scelto a caso."
          },
          {
            "p": "Puoi scegliere un cognome tu stesso o lasciarci raccomandarne uno. In entrambi i casi sarà **un cognome che esiste**."
          }
        ]
      },
      {
        "title": "Facile da dire, facile da scrivere",
        "blocks": [
          {
            "p": "Questo è un nome che le persone in Corea ti chiameranno realmente, quindi la prima cosa che controlliamo è se un coreano può sentirlo una volta e scriverlo. Un nome che deve essere letteralmente ogni volta è un peso che porti, non noi."
          },
          {
            "p": "Anche il significato è importante. I nomi di battesimo coreani di solito portano uno, quindi ti diciamo come si legge il nome e perché lo abbiamo scelto — non solo il nome stesso."
          }
        ]
      },
      {
        "title": "Chiediamo a cosa serve il nome",
        "blocks": [
          {
            "p": "Un nome per la documentazione universitaria non è lo stesso di un nome che gli amici grideranno attraverso una stanza, o di un nome che utilizzerai online. Chiediamo come intendi usarlo e ne teniamo conto."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Questa non è una traslitterazione",
        "blocks": [
          {
            "p": "Qui proponiamo un **nuovo nome coreano**. Se desideri che il tuo nome esistente sia scritto in Hangul — Michael come 마이클 — consulta la [guida alla scrittura in Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avvisi",
    "title": "Avvisi",
    "summary": "Dove annunciamo cambiamenti che influenzano come utilizzi il servizio.",
    "backLabel": "Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contatto",
    "title": "Contattaci",
    "summary": "Come raggiungerci per domande, rimborsi, richieste di privacy e segnalazioni di errori, con i dettagli della nostra azienda.",
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
              "**Pagamenti e rimborsi** — se un documento non è mai stato prodotto, o l'importo addebitato differisce dal tuo ordine, rimborsiamo completamente. Consulta la [politica di rimborso](/refund-policy).",
              "**Privacy** — richieste di accesso, correzione o cancellazione dei tuoi dati. Consulta la [politica sulla privacy](/privacy).",
              "**Correzioni** — se un significato, una lettura o un calcolo di hanja sembrano errati, faccelo sapere. Menzionare quale schermo e cosa hai inserito aiuta molto.",
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
              "**Numero di vendite per corrispondenza** — {mailOrderNumber}",
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
  },
  "guide/what-we-dont-use": {
    "eyebrow": "I Nostri Standard",
    "title": "Cosa Non Utilizziamo",
    "summary": "Non assegniamo fortuna totale o punteggi numerici, né utilizziamo conteggi di tratti. I cinque elementi sono utilizzati solo come asse supplementare. Ecco i motivi.",
    "backLabel": "Guida all'Uso",
    "sections": [
      {
        "title": "Motivi per non assegnare fortuna totale o punteggi numerici",
        "blocks": [
          {
            "p": "Esistono metodi che assegnano fortuna totale o punteggi numerici ai nomi per valutarli. Naming-Link non fornisce quei numeri. I motivi sono quattro."
          },
          {
            "p": "**Primo, non esiste un solo standard.** I metodi per calcolare la fortuna variano a seconda della scuola, e lo stesso nome può essere valutato positivamente da uno standard e negativamente da un altro. Non abbiamo basi per decidere quale sia corretto. È disonesto presentare uno come se fosse la risposta."
          },
          {
            "p": "**Secondo, quei calcoli si basano sui conteggi di tratti.** Tuttavia, i dati della Corte Suprema non includono affatto i conteggi di tratti. Inoltre, i conteggi di tratti possono variare a seconda che siano conteggi come caratteri regolari o semplificati e come vengono conteggiati i radicali. Poiché i numeri fondamentali non sono definitivi, i punteggi costruiti su di essi non possono essere definitivi."
          },
          {
            "p": "**Terzo, i numeri appaiono più solidi della realtà.** Quando dice \"87 punti\", sembra un valore misurato piuttosto che un'interpretazione convenzionale. Quelli che nominano possono sentirsi sotto pressione a causa di quel numero, mettendo da parte ciò che è veramente importante (È piacevole da chiamare? Il significato si adatta? Contiene i desideri desiderati?)."
          },
          {
            "p": "**Quarto, non c'è modo di verificare.** La relazione tra un nome e la vita di una persona non può essere verificata. Convertire qualcosa che non può essere detto giusto o sbagliato in un punteggio porta a un numero che non può essere confermato, anche se non può essere sbagliato."
          },
          {
            "p": "Utilizziamo solo ciò che può essere **sostenuto.** Il tavolo ufficiale degli hanja della Corte Suprema, le letture designate per ciascun carattere e i significati elencati nel tavolo. Invece, forniamo motivi per cui questo candidato è stato selezionato e perché alcuni caratteri sono stati esclusi, mostrando **motivi invece di punteggi**."
          }
        ]
      },
      {
        "title": "Non utilizziamo i conteggi di tratti",
        "blocks": [
          {
            "p": "I dati ufficiali degli hanja per i nomi forniti dalla Corte Suprema non includono conteggi di tratti. Tra i {characterTotal} caratteri ricevuti, **non c'è un singolo carattere con conteggi di tratti.**"
          },
          {
            "p": "Per utilizzare i conteggi di tratti, dovremmo ottenere numeri da qualche altra parte, ma se non possiamo chiarire da dove provengono quei numeri e quali criteri sono stati utilizzati per contarli, significherebbe giudicare i nomi basandosi su numeri infondati. Abbiamo deciso di non valutare i nomi basandoci su valori che non possono essere sostenuti."
          }
        ]
      },
      {
        "title": "Utilizziamo i cinque elementi solo come riferimento",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "I cinque elementi disposti in un cerchio: la generazione scorre tra i vicini, il controllo salta uno",
              "wood": "legno",
              "fire": "fuoco",
              "earth": "terra",
              "metal": "metallo",
              "water": "acqua",
              "saeng": "Generazione — ognuna dà origine al suo vicino",
              "geuk": "Controllo — ognuna frena quella che salta"
            },
            "caption": "Le relazioni tra i cinque elementi. Muoversi lungo il cerchio rappresenta la generazione reciproca (相生), mentre saltarne uno e premere giù rappresenta la restrizione reciproca (相剋). Utilizziamo questa relazione solo come asse supplementare per confrontare i candidati."
          },
          {
            "p": "Se hai inserito il tuo mese di nascita, utilizziamo un riferimento semplificato dei cinque elementi basato su quel mese come asse supplementare per confrontare i candidati. Tuttavia, questa non è un'analisi precisa di saju, e **non affermiamo che i nomi determinino il destino o il carattere di una persona.**"
          },
          {
            "p": "Nella selezione finale, ciò che priorizziamo sono i suoni, le combinazioni di significati, i valori che la famiglia desidera trasmettere e se può effettivamente essere registrato. Se non hai inserito il tuo mese di nascita, escludiamo completamente il riferimento ai cinque elementi dall'analisi — non facciamo assunzioni arbitrarie su informazioni sconosciute."
          },
          {
            "p": "Se desideri un'analisi precisa basata su saju, la trattiamo in un rapporto dettagliato separato. Il motivo per cui non priorizziamo i cinque elementi nel matching gratuito di hanja è che non vogliamo presentare giudizi basati sui cinque elementi derivati da una data e ora di nascita incompleta come se fossero definitivi."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Prodotti a pagamento",
    "title": "Cosa è incluso nei prodotti a pagamento?",
    "summary": "Chiarifichiamo quanto è visibile gratuitamente e quali funzionalità aggiuntive vengono con il pagamento per ciascun prodotto. I prezzi sono recuperati dalle impostazioni reali del prodotto.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Cosa è visibile gratuitamente?",
        "blocks": [
          {
            "p": "Creare un nome e visualizzare i risultati è **gratuito**. Non è necessaria la registrazione come membro. Puoi vedere i significati corrispondenti degli hanja, creare nomi coreani, conversione di nomi globali e notazione di pronuncia in Hangul, insieme ai risultati raccomandati e alle loro giustificazioni sullo schermo."
          },
          {
            "p": "I prodotti a pagamento non **rivendono ciò che è già stato mostrato sullo schermo.** Aprono più candidati, aggiungono ulteriori spiegazioni o creano un formato che può essere memorizzato o trasmesso."
          }
        ]
      },
      {
        "title": "Divulgazione completa di tutti i candidati — {priceUnlock}",
        "blocks": [
          {
            "p": "I risultati raccomandati sono strutturati per aprire i candidati uno per uno. Quando si visualizzano gli annunci, uno si apre alla volta, mentre questo prodotto **apre tutti i candidati rimanenti contemporaneamente**."
          },
          {
            "p": "Se non hai fretta, non devi acquistare. I **risultati dall'apertura tramite annunci e quelli dal pagamento sono completamente gli stessi** — è solo una questione di attesa, e pagare non produce candidati migliori."
          }
        ]
      },
      {
        "title": "Dettagli Hanja — Tre Fasi",
        "blocks": [
          {
            "p": "Ci sono tre prodotti dettagliati nel flusso di selezione degli hanja da allegare a un nome in Hangul."
          },
          {
            "ul": [
              "**Massimo 5 candidati hanja dettagliati** — {priceFiveDetail}. Puoi espandere le spiegazioni per un massimo di cinque candidati sullo schermo. Non c'è PDF.",
              "**Massimo 10 candidati hanja dettagliati in PDF esteso** — {priceTenDetail}. Il numero di candidati aumenta a dieci, e un documento PDF è incluso.",
              "**Massimo 10 candidati hanja, rapporto completo su saju e i cinque elementi** — {priceTenSaju}. Oltre a quanto sopra, include il grafico di saju derivato dalla data di nascita e le forze dei cinque elementi, esaminando perché un particolare hanja si adatta a quel nome dalla prospettiva dei cinque elementi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "L'hanja stesso è informazione pubblicamente disponibile",
        "blocks": [
          {
            "p": "Gli hanja utilizzabili e i loro significati provengono dall'ufficiale tabella di hanja per nomi stabilita dalla Corte Suprema della Corea, e tutti sono pubblicamente disponibili nei documenti di guida del servizio. Ciò che i prodotti a pagamento vendono non è informazione sugli hanja ma **l'atto di selezionare e spiegarlo secondo il nome**."
          }
        ]
      },
      {
        "title": "PDF per utenti globali",
        "blocks": [
          {
            "p": "Documenti disponibili per convertire nomi stranieri in nomi coreani o scrivere nomi in Hangul. I prezzi seguono gli importi visualizzati nella schermata di pagamento."
          },
          {
            "ul": [
              "**Rapporto Premium sul Nome Coreano** — 3 pagine. Include una copertina in calligrafia, il significato del nome e il motivo per cui è stato scelto, e interpretazione di saju e dei cinque elementi.",
              "**Arte del Nome in Hangul** — 2 pagine. Include una copertina in calligrafia e una guida alla pronuncia. Contiene come scrivere il nome in Hangul e come pronunciarlo."
            ]
          }
        ]
      },
      {
        "title": "Timbro del Nome",
        "blocks": [
          {
            "p": "Incidiamo il nome creato sullo schermo in un timbro fisico e te lo inviamo. I prezzi variano in base al modello — timbro rotondo {priceStampRound}, timbro quadrato {priceStampSquare}, timbro in ebano {priceStampEbony}. È disponibile anche la spedizione internazionale."
          },
          {
            "p": "**Da qui, i prodotti includono la spedizione.** A differenza degli articoli precedenti, produzione e spedizione richiedono tempo, e è necessaria un'indirizzo di ricezione. Le informazioni sulla spedizione vengono utilizzate solo per l'elaborazione degli ordini e la conservazione legale, e una volta completata l'elaborazione, verranno distrutte dopo il periodo specificato nella politica."
          }
        ]
      },
      {
        "title": "Cose da sapere prima di acquistare",
        "blocks": [
          {
            "p": "**I prodotti digitali sono forniti immediatamente dopo il pagamento.** Puoi annullare e ricevere un rimborso completo in qualsiasi momento prima dell'inizio del download, ma una volta completato il download, il recesso a causa di un semplice cambio di idea è limitato (Articolo 17, Paragrafo 2 della Legge sul Commercio Elettronico). Questa condizione è concordata separatamente nella schermata di pagamento."
          },
          {
            "p": "**I reclami sul contenuto dei risultati non sono motivo di rimborso.** Tuttavia, se il documento non è stato creato, il file non può essere aperto, o l'importo del pagamento differisce dall'ordine, verrà elaborato come una riemissione o rimborso completo."
          },
          {
            "p": "Le condizioni dettagliate sono delineate nella [Politica di Rimborso](/refund-policy) e nella [Guida ai Prezzi](/pricing). Questo testo serve come guida a ciò che è incluso, e le condizioni legali sono prioritarie in quei due documenti."
          }
        ]
      }
    ]
  },
} satisfies Record<GlobalDocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "Servizio",
    "product": "Prodotti",
    "policy": "Politica",
    "support": "Supporto"
  },
  "intro": "Le modifiche ai tuoi termini di utilizzo — prezzi, politiche — sono pubblicate qui prima che entrino in vigore. I miglioramenti interni non sono elencati: ciò che appare qui è ciò che devi sapere.",
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
      "title": "Le pagine di Contatto e Informazioni sono ora aperte",
      "body": [
        "Domande, rimborsi, richieste di privacy e segnalazioni di errori ora hanno un unico luogo dove andare. La pagina di contatto nel piè di pagina elenca la nostra email e i dettagli dell'azienda.",
        "Cosa si basa sulle nostre risposte e cosa non facciamo deliberatamente è scritto nella pagina 'Chi siamo'."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "I rapporti PDF sono emessi in inglese per arabo e khmer",
      "body": [
        "Se stai utilizzando il servizio in arabo o khmer, il PDF che acquisti è prodotto in inglese. Lo strumento che imposta i nostri documenti non può ancora formattare i paragrafi in quegli due script.",
        "Lo schermo rimane nella tua lingua e il tuo nome è stampato nel tuo script all'interno del documento.",
        "La stessa nota appare prima del pagamento. Quando lo strumento supporterà questi script, lo diremo qui."
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
