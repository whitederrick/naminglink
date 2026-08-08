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
            "p": "Naming-Link aiuta a **scegliere e comprendere i nomi coreani** — il hanja dietro il nome di un bambino, un nome coreano da usare all'estero, la trascrizione in Hangul del tuo nome e souvenir come un sigillo o un rapporto stampato."
          },
          {
            "p": "Visualizzare i risultati è **gratuito e non richiede un account.** Gli articoli a pagamento non rivendono ciò che è già stato mostrato sullo schermo: aprono più candidati, aggiungono analisi scritte o trasformano il risultato in qualcosa che puoi conservare."
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
            "p": "Le spiegazioni scritte sono prodotte da AI. Per evitare che **inventi cose**, il modello riceve solo il tuo input e i nostri dati di riferimento, e viene istruito a rimanere all'interno di essi. Le guide spiegano questo in dettaglio."
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
            "p": "Il servizio è disponibile in 23 lingue. I PDF a pagamento sono emessi in inglese per arabo e khmer — il renderer PDF non supporta quei caratteri — e lo diciamo sullo schermo prima di pagare."
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
            "p": "La tabella dei hanja per nomi non decide solo quali caratteri possono essere usati. **Fissa anche come ciascun carattere viene letto quando appare in un nome.** Quella lettura fissa è ciò su cui si basa la registrazione."
          },
          {
            "p": "La maggior parte dei hanja ha diverse letture possibili. Un nome, però, è scritto su documenti e pronunciato ad alta voce, quindi ha bisogno di una sola lettura. La tabella assegna quindi a ciascun carattere la sua lettura per l'uso nei nomi, e nessun'altra lettura può essere registrata."
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
            "p": "Per quanto buono possa essere un significato, un carattere la cui lettura non corrisponde non può essere usato per quel nome. Non cambiamo mai il suono di un nome per adattarlo a un carattere — un nome viene pronunciato per tutta la vita, e il suono viene fissato prima, con l'hanja che segue."
          }
        ]
      },
      {
        "title": "I cognomi sono al di fuori di questa tabella",
        "blocks": [
          {
            "p": "Questo è spesso frainteso. **La tabella governa il nome di battesimo, non il cognome.** Un cognome segue ciò che è già registrato nel registro di famiglia, quindi alcune persone usano caratteri che non sono nella tabella dei hanja per nomi."
          },
          {
            "p": "Ecco perché Naming-Link tratta gli hanja dei cognomi in modo diverso. Aiutiamo solo a trovare un cognome, e lasciamo un campo per inserire direttamente uno, per le persone il cui carattere è al di fuori della tabella. I cognomi bisillabici come Namgung e Seonwoo vengono inseriti allo stesso modo."
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
            "p": "Questo servizio scrive **il tuo nome** in Hangul. Non ti dà un nome coreano. Michael diventa 마이클 — lo stesso nome, scritto in modo che i coreani possano leggerlo e pronunciarlo. Non lo scambiamo con un nome coreano che per caso significa qualcosa di simile."
          },
          {
            "p": "Se un nome coreano è ciò che desideri, **quello è un servizio diverso.** Uno mantiene il tuo nome e cambia solo la scrittura; l'altro propone un nuovo nome."
          }
        ]
      },
      {
        "title": "Suoni che il coreano non ha",
        "blocks": [
          {
            "p": "Ogni lingua ha suoni che il coreano non possiede — f, v, z, th e distinzioni vocaliche che il coreano non fa. Per quelli scriviamo ciò che **un parlante coreano dice effettivamente** quando legge il tuo nome ad alta voce, piuttosto che trascrivere la fonetica originale simbolo per simbolo. L'obiettivo è la scrittura che verrà utilizzata, non quella più tecnicamente fedele."
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
            "p": "Non esiste una sola risposta giusta. La scrittura più vicina al suono originale, quella più comunemente usata in Corea e quella più facile da scrivere sono spesso tre cose diverse. Quindi le mostriamo insieme e diciamo cosa le separa."
          },
          {
            "p": "Se nessuna di esse sembra giusta, puoi aggiungere un suggerimento sul suono che desideri e ripetere l'analisi — ad esempio, che una particolare sillaba dovrebbe essere scritta diversamente."
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
            "p": "Se il tuo cognome si allinea con uno reale coreano per suono — Wang con 왕, Ye con 예 — lo mettiamo per primo. Mantenere un legame con il tuo nome originale vale più di un cognome scelto a caso."
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
            "p": "Un nome per la documentazione universitaria non è lo stesso di un nome che gli amici grideranno attraverso una stanza, o di un soprannome che userai online. Chiediamo come intendi usarlo e ne teniamo conto."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Questa non è una traslitterazione",
        "blocks": [
          {
            "p": "Qui proponiamo un **nuovo nome coreano**. Se desideri che il tuo nome esistente venga scritto in Hangul — Michael come 마이클 — consulta la [guida alla traslitterazione in Hangul](/guide/how-hangul-transliteration)."
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
              "**Pagamenti e rimborsi** — se un documento non è mai stato prodotto, o l'importo addebitato differisce dal tuo ordine, rimborsiamo completamente. Consulta la [politica di rimborso](/refund-policy).",
              "**Privacy** — richieste di accesso, correzione o cancellazione dei tuoi dati. Consulta la [politica sulla privacy](/privacy).",
              "**Correzioni** — se un significato, una lettura o un calcolo di hanja sembra errato, faccelo sapere. Indicare quale schermo e cosa hai inserito aiuta molto.",
              "**Altro** — le partnership e la stampa vanno allo stesso indirizzo."
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
  },
  "guide/avoid": {
    "eyebrow": "Usanze",
    "title": "Caratteri Tradizionalmente Evitati",
    "summary": "Non è vietato dalla legge ma è una consuetudine. Abbiamo scritto su cosa è stato evitato e perché, e come lo gestiamo.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Caratteri Legalmente Accettabili",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} caratteri",
                "label": "Caratteri Evitati Compilati"
              },
              {
                "value": "{avoidCommonlyUsed} caratteri",
                "label": "Tra questi, caratteri ancora comunemente usati"
              }
            ]
          },
          {
            "p": "Ci sono caratteri che sono inclusi nell'elenco dei caratteri per nomi e **sono legalmente accettabili**, ma sono considerati inappropriati per i nomi."
          },
          {
            "p": "Il pensiero sottostante è che **\"un significato eccessivo è in realtà indesiderabile.\"** Questo include caratteri considerati troppo preziosi (珍·寶), caratteri visti come aventi una presenza troppo forte (王·帝), e quelli considerati troppo grandiosi per una persona da incarnare, come il cielo o le divinità. Questo riflette un antico senso di moderazione, credendo che un nome possa oscurare la persona."
          },
          {
            "p": "**Tuttavia, questi caratteri non sono inutilizzabili.** Non è un divieto legale ma una consuetudine, e le consuetudini variano per regione, famiglia e generazione, e possono cambiare nel tempo."
          },
          {
            "p": "Infatti, tra i {avoidTotal} caratteri che abbiamo compilato, {avoidCommonlyUsed} sono ancora comunemente usati nei nomi. Il fatto che siano noti per essere evitati ma ancora ampiamente usati indica che questa consuetudine non è assoluta."
          }
        ]
      },
      {
        "title": "Quali Categorie Esistono?",
        "blocks": [
          {
            "p": "I caratteri attualmente compilati sono divisi in sette categorie."
          },
          {
            "ul": [
              "**Tesori e Oggetti** — Caratteri che si riferiscono direttamente alla ricchezza o agli oggetti",
              "**Cielo e Natura** — Cose come il sole, la luna e il cielo che sono considerate troppo grandiose per una persona da incarnare",
              "**Re e Nobiltà** — Caratteri che significano status, come re o imperatore",
              "**Essere Divini** — Caratteri che si riferiscono a regni sacri, come dèi o spiriti",
              "**Stagioni e Altro** — Caratteri legati a tempi o stati specifici",
              "**Animali** — Animali considerati avere una forte energia, come draghi o tigri",
              "**Eccesso** — Caratteri visti come aventi significati eccessivamente grandi o traboccanti"
            ]
          }
        ]
      },
      {
        "title": "Puoi Aggiungere o Rimuovere Caratteri Tu Stesso",
        "blocks": [
          {
            "p": "Non eliminiamo arbitrariamente questi caratteri. **Abbiamo fornito due opzioni sulla schermata di input per consentire al nominatore di scegliere come gestirli.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opzioni Disponibili sulla Schermata di Input",
        "blocks": [
          {
            "p": "**Escludere Caratteri Evitati dai Candidati** — Se abilitato, vengono completamente esclusi. Se disabilitato, rimangono nei risultati con un'etichetta \"Tradizionalmente Evitati\" e il motivo allegato."
          },
          {
            "p": "**Escludere Anche Caratteri Comunemente Usati** — Questo esclude caratteri che sono sulla lista di evitamento ma sono effettivamente ampiamente usati (圭·琳·玲·元·太·星·海, ecc.). Se abilitato, i candidati saranno significativamente ridotti."
          },
          {
            "p": "Il valore predefinito è **non escludere ma solo visualizzare**. Se vengono rimossi silenziosamente dall'elenco, potrebbe sembrare a chi desidera utilizzare quel carattere che non esista."
          }
        ]
      },
      {
        "title": "Assicurarsi che le Opzioni Non Scompaiano",
        "blocks": [
          {
            "p": "Se non ci sono caratteri utilizzabili rimasti per quella sillaba, solleveremo l'esclusione per quella sillaba e mostreremo i candidati. Crediamo sia meglio che non avere opzioni affatto."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Fondamento del Servizio",
    "title": "Qual è il Fondamento per la Conversione dei Nomi Globali?",
    "summary": "Forniamo candidati da cinque prospettive, mantenendo i sistemi di scrittura di ciascuna lingua e utilizzando solo nomi esistenti.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "I Candidati Sono Forniti da Cinque Prospettive",
        "blocks": [
          {
            "p": "Non esiste un solo modo per tradurre un nome in un'altra lingua. A seconda di se preservare il suono o il significato, scegliere un nome naturale nel contesto locale o dare priorità all'individualità, le risposte differiranno. Pertanto, invece di presentare un'opzione, forniamo **una da ciascuna delle cinque diverse prospettive**."
          },
          {
            "ul": [
              "**Opzione di Preservazione del Suono** — Preserva il suono originale del nome il più possibile",
              "**Opzione di Traduzione del Significato** — Traduce il significato contenuto nel nome nel nome di quella lingua",
              "**Opzione di Compromesso tra Suono e Significato** — Prende metà da ciascuno",
              "**Opzione Autentica Locale** — Sceglie nomi che sono effettivamente comunemente usati in quel contesto culturale",
              "**Opzione di Individualità e Branding** — Dà priorità a nomi che sono memorabili e distintivi"
            ]
          },
          {
            "p": "Cinque opzioni sono garantite per essere fornite. Poiché le preferenze variano da persona a persona, crediamo sia meglio consentire scelte piuttosto che presentare una come risposta corretta."
          }
        ]
      },
      {
        "title": "Ogni Lingua Ha Regole Diverse per i Sistemi di Scrittura",
        "blocks": [
          {
            "p": "Quando si traduce in una lingua che non utilizza lettere romane, deve essere scritto nel sistema di scrittura di quella lingua. Per il giapponese, sarebbero kana e kanji; per il russo, il mongolo e il kazako, sarebbe il cirillico; per l'arabo, sarebbe la scrittura araba; e per il tailandese, il khmer e l'hindi, sarebbe i rispettivi script. Se lo scrivi in lettere romane e lo chiami un \"nome giapponese\", non può essere usato in quel paese."
          },
          {
            "p": "Pertanto, abbiamo regole separate per il sistema di scrittura di ciascuna lingua, e il server controlla ancora una volta per garantire che i risultati siano in quel sistema di scrittura. Errori come l'omissione dei cognomi o la mescolanza di Hangul vengono filtrati qui."
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          }
        ]
      },
      {
        "kind": "note",
        "title": "",
        "blocks": [
          {
            "p": "Inizialmente, abbiamo creato i cinque punti di vista separatamente. Era più veloce, ma **il numero di candidati variava ogni volta.** Poiché ciascuna persona selezionava i candidati, c'erano sovrapposizioni o discrepanze, e se uno falliva, quel candidato scompariva completamente, risultando in solo due o tre invece di cinque."
          },
          {
            "p": "Ora, poiché determiniamo il set di candidati e la distribuzione dei punti di vista in una sola volta, **il numero è fisso.** Anche se una descrizione fallisce, i candidati rimangono e vengono presentati con informazioni brevi. Crediamo sia meglio avere costantemente lo stesso numero, anche se richiede un po' più di tempo."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "",
    "product": "",
    "policy": "",
    "support": ""
  },
  "intro": "",
  "empty": {
    "title": "",
    "body": ""
  },
  "effective": "Ha effetto dal {date}",
  "pager": {
    "label": "",
    "newer": "",
    "older": ""
  },
  "items": {
    "2026-08-02-contact": {
      "title": "",
      "body": [
        "",
        ""
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "",
      "body": [
        "",
        "",
        ""
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "",
      "body": [
        "",
        ""
      ]
    }
  }
} satisfies NoticeCopy;
