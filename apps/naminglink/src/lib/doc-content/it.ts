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
            "p": "Vedere i tuoi risultati è **gratuito e non richiede un account.** Gli elementi a pagamento non rivendono mai ciò che lo schermo ha già mostrato: aprono più candidati, aggiungono analisi scritte o trasformano il risultato in qualcosa che puoi tenere."
          }
        ]
      },
      {
        "title": "Per chi è ciascun servizio",
        "blocks": [
          {
            "p": "Ci sono due tipi di servizio qui: uno per le persone che **hanno già un nome coreano**, e uno per le persone che **ne hanno bisogno**. Richiedono cose diverse da te, quindi sono offerti in lingue diverse."
          },
          {
            "ul": [
              "**Offerto nella tua lingua** — scrivere il tuo nome in Hangul e costruire un nome coreano. Questi sono per le persone senza un nome coreano, quindi seguono la lingua in cui arrivi.",
              "**Offerto solo in coreano** — trovare il nome-hanja per un bambino e trasformare un nome coreano in uno da usare all'estero. Entrambi necessitano di un **nome Hangul esistente** da cui partire, quindi gli schermi e le loro guide rimangono in coreano."
            ]
          }
        ]
      },
      {
        "title": "Su cosa si basano le nostre risposte",
        "blocks": [
          {
            "p": "Il hanja proviene dalla **tabella ufficiale dei nomi-hanja della Corte Suprema della Corea.** Ogni carattere ha una lettura fissa per l'uso nei nomi, e i caratteri al di fuori della tabella non possono essere registrati. Non aggiungiamo a quell'elenco né scegliamo preferiti."
          },
          {
            "p": "I calcoli di saju e delle figure dei cinque elementi sono effettuati dal **calendario lunisolare coreano**, con l'orario di nascita corretto all'ora solare vera per il luogo di nascita. La lettura è un riferimento tradizionale, non una previsione."
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
            "p": "Il servizio è disponibile in 23 lingue. I PDF a pagamento sono emessi in inglese per arabo e khmer — il renderer PDF non supporta quegli script — e lo diciamo sullo schermo prima di pagare."
          }
        ]
      },
      {
        "title": "Contatto",
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
    "summary": "Come scegliamo un cognome coreano, cosa controlliamo prima di suggerire un nome, e come scriviamo il tuo nome in Hangul — con le parti che lasciamo deliberatamente fuori.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "caratteri nome-hanja"
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
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Le guide qui sotto coprono i servizi offerti nella tua lingua. Naming-Link ha anche due servizi per le persone che **hanno già un nome coreano** — trovare il nome-hanja per un bambino e trasformare un nome coreano in uno da usare all'estero. Questi necessitano di un nome Hangul esistente, quindi sia i servizi che le loro guide sono in coreano."
          },
          {
            "p": "[Informazioni](/about) spiega quale servizio è per chi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Come funziona",
    "title": "Come scriviamo il tuo nome in Hangul",
    "summary": "Come scegliamo i suoni quando scriviamo un nome straniero in Hangul, e perché non attacchiamo il hanja.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Portiamo il suono, non il significato",
        "blocks": [
          {
            "p": "Questo servizio scrive **il tuo nome** in Hangul. Non ti dà un nome coreano. Michael diventa 마이클 — lo stesso nome, scritto in modo che i coreani possano leggerlo e dirlo. Non lo scambiamo con un nome coreano che ha un significato simile."
          },
          {
            "p": "Se un nome coreano è ciò che desideri, **quello è un servizio diverso**. Uno mantiene il tuo nome e cambia solo la scrittura; l'altro propone un nuovo nome."
          }
        ]
      },
      {
        "title": "Suoni che il coreano non ha",
        "blocks": [
          {
            "p": "Ogni lingua ha suoni che il coreano non ha — f, v, z, th, e distinzioni vocaliche che il coreano non fa. Per quelli scriviamo ciò che **un parlante coreano dice realmente** quando legge il tuo nome ad alta voce, piuttosto che trascrivere la fonetica originale simbolo per simbolo. L'obiettivo è la scrittura che sarà utilizzata, non la più tecnicamente fedele."
          },
          {
            "p": "La stessa scrittura può differire a seconda di da dove proviene un nome, quindi chiediamo la tua lingua e paese e lavoriamo da quella pronuncia."
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
            "p": "Se nessuna di esse ti sembra giusta, puoi aggiungere un suggerimento sul suono che desideri e riprovare — ad esempio, che una particolare sillaba dovrebbe essere scritta diversamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nessun hanja qui",
        "blocks": [
          {
            "p": "Non attacchiamo hanja a una traslitterazione. Gli hanja portano significato, e questo flusso riguarda il suono. Abbinare i caratteri al suono da solo può portarti a un significato che non hai mai richiesto."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Come funziona",
    "title": "Come costruiamo un nome coreano",
    "summary": "Scegliamo tra i cognomi esistenti, valutiamo quanto facilmente il nome è pronunciato e scritto, e chiediamo a cosa serve il nome.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Iniziamo con il cognome",
        "blocks": [
          {
            "p": "In Corea il cognome viene prima, e a differenza dei nomi di battesimo non è liberamente inventato — lo erediti. Quindi suggeriamo solo cognomi che le persone coreane hanno realmente. Il nostro pool predefinito è composto dai **20 cognomi più comuni**, che coprono insieme circa l'80% della popolazione."
          },
          {
            "p": "Se il tuo cognome si allinea con uno reale coreano per suono — Wang con 왕, Ye con 예 — mettiamo quello per primo. Mantenere un legame con il tuo nome originale vale di più di un cognome scelto a caso."
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
            "p": "Questo è un nome che le persone in Corea ti chiameranno effettivamente, quindi la prima cosa che controlliamo è se un coreano può sentirlo una volta e scriverlo. Un nome che deve essere scritto ogni volta è un peso che porti, non noi."
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
            "p": "Un nome per la documentazione universitaria non è lo stesso di un nome che gli amici grideranno attraverso una stanza, o di un nome che utilizzerai online. Chiediamo come intendi usarlo e teniamo conto di questo."
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
        "title": "Scrivici",
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
              "**Pagamenti e rimborsi** — se un documento non è mai stato prodotto, o l'importo addebitato differisce dal tuo ordine, rimborseremo completamente. Consulta la [politica di rimborso](/refund-policy).",
              "**Privacy** — richieste per accedere, correggere o eliminare i tuoi dati. Consulta la [politica sulla privacy](/privacy).",
              "**Correzioni** — se un significato, una lettura o un calcolo di hanja sembra errato, faccelo sapere. Menzionare quale schermo e cosa hai inserito aiuta molto.",
              "**Altro** — partnership e comunicati stampa vanno allo stesso indirizzo."
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
              "**Numero di vendita per corrispondenza** — {mailOrderNumber}",
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
    "eyebrow": "I nostri standard",
    "title": "Cosa non utilizziamo",
    "summary": "Non assegniamo fortuna totale o punteggi numerici, né utilizziamo conteggi dei tratti. I cinque elementi sono usati solo come asse supplementare. Ecco le ragioni.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Motivi per non assegnare fortuna totale o punteggi numerici",
        "blocks": [
          {
            "p": "Esistono metodi che assegnano fortuna totale o punteggi numerici ai nomi per valutarli. Naming-Link non fornisce quei numeri. Le ragioni sono quattro."
          },
          {
            "p": "**Prima di tutto, non esiste un solo standard.** I metodi per calcolare la fortuna variano a seconda della scuola, e lo stesso nome può essere valutato positivamente da uno standard e negativamente da un altro. Non abbiamo basi per decidere quale sia corretto. È disonesto presentare uno come se fosse la risposta."
          },
          {
            "p": "**In secondo luogo, questi calcoli si basano sui conteggi dei tratti.** Tuttavia, i dati della Corte Suprema non includono affatto i conteggi dei tratti. Inoltre, i conteggi dei tratti possono variare a seconda che siano conteggiati come caratteri regolari o semplificati e come vengono conteggiati i radicali. Poiché i numeri fondamentali non sono definitivi, i punteggi costruiti su di essi non possono essere definitivi."
          },
          {
            "p": "**In terzo luogo, i numeri appaiono più solidi della realtà.** Quando si dice \"87 punti\", sembra un valore misurato piuttosto che un'interpretazione convenzionale. Quei nomi possono sentirsi sotto pressione a causa di quel numero, mettendo da parte ciò che è veramente importante (È piacevole da chiamare? Il significato è adatto? Contiene i desideri desiderati?)."
          },
          {
            "p": "**In quarto luogo, non c'è modo di verificare.** La relazione tra un nome e la vita di una persona non può essere verificata. Convertire qualcosa che non può essere definito giusto o sbagliato in un punteggio porta a un numero che non può essere confermato, anche se non può essere sbagliato."
          },
          {
            "p": "Utilizziamo solo ciò che può essere **sostenuto.** La tabella ufficiale degli hanja della Corte Suprema, le letture designate per ciascun carattere e i significati elencati nella tabella. Invece, forniamo motivazioni per cui questo candidato è stato selezionato e perché alcuni caratteri sono stati esclusi, mostrando **ragioni invece di punteggi**."
          }
        ]
      },
      {
        "title": "Non utilizziamo i conteggi dei tratti",
        "blocks": [
          {
            "p": "I dati ufficiali sugli hanja forniti dalla Corte Suprema non includono conteggi dei tratti. Tra i {characterTotal} caratteri che abbiamo ricevuto, **non c'è un singolo carattere con conteggi dei tratti.**"
          },
          {
            "p": "Per utilizzare i conteggi dei tratti, dovremmo ottenere numeri da qualche altra parte, ma se non possiamo chiarire da dove provengano quei numeri e quali criteri siano stati utilizzati per contarli, significherebbe giudicare i nomi basandosi su numeri infondati. Abbiamo deciso di non valutare i nomi basandoci su valori che non possono essere sostenuti."
          }
        ]
      },
      {
        "title": "Utilizziamo i cinque elementi solo come riferimento",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "I cinque elementi disposti in un cerchio: la generazione avviene tra i vicini, il controllo salta uno",
              "wood": "legno",
              "fire": "fuoco",
              "earth": "terra",
              "metal": "metallo",
              "water": "acqua",
              "saeng": "Generazione — ciascuno dà origine al suo vicino",
              "geuk": "Controllo — ciascuno frena quello che salta"
            },
            "caption": "Le relazioni tra i cinque elementi. Muoversi lungo il cerchio rappresenta la generazione reciproca (相生), mentre saltare uno e premere rappresenta la restrizione reciproca (相剋). Utilizziamo questa relazione solo come asse supplementare per confrontare i candidati."
          },
          {
            "p": "Se hai inserito il tuo mese di nascita, utilizziamo un riferimento semplificato dei cinque elementi basato su quel mese come asse supplementare per confrontare i candidati. Tuttavia, questa non è un'analisi saju precisa, e **non affermiamo che i nomi determinino il destino o il carattere di una persona.**"
          },
          {
            "p": "Nella selezione finale, ciò che priorizziamo sono i suoni, le combinazioni di significati, i valori che la famiglia desidera trasmettere e se può effettivamente essere registrato. Se non hai inserito il tuo mese di nascita, escludiamo completamente il riferimento ai cinque elementi dall'analisi — non facciamo assunzioni arbitrarie su informazioni sconosciute."
          },
          {
            "p": "Se desideri un'analisi precisa basata sul saju, ne trattiamo in un rapporto dettagliato separato. Il motivo per cui non priorizziamo i cinque elementi nel matching gratuito degli hanja è che non vogliamo presentare giudizi basati sui cinque elementi derivati da una data e ora di nascita incompleta come se fossero definitivi."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Prodotti a pagamento",
    "title": "Cosa è incluso nei prodotti a pagamento?",
    "summary": "Chiarifichiamo quanto è visibile gratuitamente e quali funzionalità aggiuntive sono disponibili con il pagamento per ciascun prodotto. I prezzi sono recuperati dalle impostazioni reali del prodotto.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Cosa è visibile gratuitamente?",
        "blocks": [
          {
            "p": "Creare un nome e visualizzare i risultati è **gratuito**. Non è necessaria la registrazione come membro. Puoi vedere i significati corrispondenti degli hanja, creare nomi coreani, conversione di nomi globali e notazione della pronuncia in Hangul, insieme ai risultati raccomandati e alle loro giustificazioni sullo schermo."
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
            "p": "I risultati raccomandati sono strutturati per aprire i candidati uno alla volta. Quando si visualizzano annunci, uno si apre alla volta, mentre questo prodotto **apre tutti i candidati rimanenti contemporaneamente**."
          },
          {
            "p": "Se non hai fretta, non devi acquistare. I **risultati dall'apertura tramite annunci e quelli dal pagamento sono completamente gli stessi** — è solo una questione di attesa, e pagare non porta a candidati migliori."
          }
        ]
      },
      {
        "title": "Dettagli sugli Hanja — Tre Fasi",
        "blocks": [
          {
            "p": "Ci sono tre prodotti dettagliati nel flusso di selezione degli hanja da allegare a un nome in Hangul."
          },
          {
            "ul": [
              "**Massimo 5 candidati hanja dettagliati** — {priceFiveDetail}. Puoi espandere le spiegazioni per un massimo di cinque candidati sullo schermo. Non c'è PDF.",
              "**Massimo 10 candidati hanja dettagliati in PDF esteso** — {priceTenDetail}. Il numero di candidati aumenta a dieci, e un documento PDF è incluso.",
              "**Massimo 10 candidati hanja, rapporto completo su saju e i cinque elementi** — {priceTenSaju}. Oltre a quanto sopra, include il grafico saju derivato dalla data di nascita e le forze dei cinque elementi, esaminando perché un particolare hanja si adatta a quel nome dalla prospettiva dei cinque elementi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gli Hanja stessi sono informazioni pubblicamente disponibili",
        "blocks": [
          {
            "p": "Gli hanja utilizzabili e i loro significati provengono dalla tabella ufficiale degli hanja stabilita dalla Corte Suprema della Corea, e tutti sono pubblicamente disponibili nei documenti di guida del servizio. Ciò che i prodotti a pagamento vendono non è l'informazione sugli hanja ma **l'atto di selezionare e spiegarlo in base al nome**."
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
              "**Rapporto Premium sul Nome Coreano** — 3 pagine. Include una copertina calligrafica, il significato del nome e il motivo per cui è stato scelto, e interpretazione del saju e dei cinque elementi.",
              "**Arte del Nome in Hangul** — 2 pagine. Include una copertina calligrafica e una guida alla pronuncia. Contiene come scrivere il nome in Hangul e come pronunciarlo."
            ]
          }
        ]
      },
      {
        "title": "Timbro del Nome",
        "blocks": [
          {
            "p": "Incidiamo il nome creato sullo schermo in un timbro fisico e te lo inviamo. I prezzi variano a seconda del modello — timbro rotondo {priceStampRound}, timbro quadrato {priceStampSquare}, timbro in ebano {priceStampEbony}. È disponibile anche la spedizione internazionale."
          },
          {
            "p": "**Da qui, i prodotti includono la spedizione.** A differenza degli articoli precedenti, produzione e spedizione richiedono tempo, e è necessaria un'indirizzo di ricezione. Le informazioni sulla spedizione sono utilizzate solo per l'elaborazione degli ordini e la conservazione legale, e una volta completata l'elaborazione, saranno distrutte dopo il periodo specificato nella politica."
          }
        ]
      },
      {
        "title": "Cose da sapere prima di acquistare",
        "blocks": [
          {
            "p": "**I prodotti digitali sono forniti immediatamente dopo il pagamento.** Puoi annullare e ricevere un rimborso completo in qualsiasi momento prima che inizi il download, ma una volta completato il download, il recesso per semplice cambio di opinione è limitato (Articolo 17, Paragrafo 2 della Legge sul Commercio Elettronico). Questa condizione è concordata separatamente nella schermata di pagamento."
          },
          {
            "p": "**I reclami sul contenuto dei risultati non sono motivo di rimborso.** Tuttavia, se il documento non è stato creato, il file non può essere aperto, o l'importo del pagamento differisce dall'ordine, sarà elaborato come una riemissione o rimborso completo."
          },
          {
            "p": "Le condizioni dettagliate sono delineate nella [Politica di Rimborso](/refund-policy) e nella [Guida ai Prezzi](/pricing). Questo testo serve come guida a ciò che è incluso, e le condizioni legali sono prioritarie in quei due documenti."
          }
        ]
      }
    ]
  }
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
      "title": "Le pagine di contatto e informazioni sono ora aperte",
      "body": [
        "Domande, rimborsi, richieste di privacy e segnalazioni di errori ora hanno un unico luogo dove andare. La pagina di contatto nel piè di pagina elenca la nostra email e i dettagli dell'azienda.",
        "Su cosa si basano le nostre risposte e cosa non facciamo deliberatamente è scritto nella pagina informativa."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "I rapporti PDF sono emessi in inglese per arabo e khmer",
      "body": [
        "Se stai utilizzando il servizio in arabo o khmer, il PDF che acquisti è prodotto in inglese. Lo strumento che imposta i nostri documenti non può ancora impostare paragrafi in quei due script.",
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
