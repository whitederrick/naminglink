import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

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
            "p": "Naming-Link ti aiuta a **scegliere e comprendere i nomi coreani** — il hanja dietro il nome di un bambino, un nome coreano da usare all'estero, una traslitterazione in Hangul del tuo nome, e souvenir come un sigillo o un rapporto stampato."
          },
          {
            "p": "Visualizzare i tuoi risultati è **gratuito e non richiede un account.** Gli articoli a pagamento non rivendono mai ciò che lo schermo ha già mostrato: aprono più candidati, aggiungono analisi scritte o trasformano il risultato in qualcosa che puoi tenere."
          }
        ]
      },
      {
        "title": "Su cosa si basano le nostre risposte",
        "blocks": [
          {
            "p": "Il hanja proviene dalla **tabella ufficiale di hanja per nomi della Corte Suprema della Corea.** Ogni carattere ha una lettura fissa per l'uso nei nomi, e i caratteri al di fuori della tabella non possono essere registrati. Non aggiungiamo a quell'elenco né scegliamo preferiti."
          },
          {
            "p": "Le figure di saju e dei cinque elementi sono calcolate dall'**almanacco lunisolare coreano**, con l'orario di nascita corretto all'ora solare vera per il luogo di nascita. La lettura è un riferimento tradizionale, non una previsione."
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
            "p": "La tabella di hanja per nomi non decide solo quali caratteri possono essere usati. **Fissa anche come ciascun carattere viene letto quando appare in un nome.** Quella lettura fissa è ciò su cui si basa la registrazione."
          },
          {
            "p": "La maggior parte dei hanja ha diverse letture possibili. Un nome, però, è scritto su documenti e pronunciato ad alta voce, quindi ha bisogno di esattamente una. La tabella quindi assegna a ciascun carattere la sua lettura per l'uso nei nomi, e nessun'altra lettura può essere registrata."
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
            "p": "Per quanto buono possa essere un significato, un carattere la cui lettura non corrisponde non può essere usato per quel nome. Inoltre, non cambiamo mai il suono di un nome per adattarlo a un carattere — un nome viene pronunciato per tutta la vita, e il suono è fissato prima, con il hanja che segue."
          }
        ]
      },
      {
        "title": "I nomi di famiglia sono al di fuori di questa tabella",
        "blocks": [
          {
            "p": "Questo è spesso frainteso. **La tabella governa il nome di battesimo, non il nome di famiglia.** Un nome di famiglia segue ciò che è già registrato nel registro familiare, quindi alcune persone usano caratteri che non sono nella tabella di hanja per nomi."
          },
          {
            "p": "Ecco perché Naming-Link tratta il hanja del cognome in modo diverso. Ti aiutiamo solo a trovare un cognome, e lasciamo un campo per inserire uno direttamente, per le persone il cui carattere è al di fuori della tabella. I cognomi di due sillabe come Namgung e Seonwoo vengono inseriti allo stesso modo."
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
            "p": "Questo servizio scrive **il tuo nome** in Hangul. Non ti dà un nome coreano. Michael diventa 마이클 — lo stesso nome, scritto affinché i coreani possano leggerlo e pronunciarlo. Non lo scambiamo con un nome coreano che per caso significa qualcosa di simile."
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
            "p": "Ogni lingua ha suoni che il coreano non ha — f, v, z, th e distinzioni vocaliche che il coreano non fa. Per quelli scriviamo ciò che **un parlante coreano dice realmente** quando legge il tuo nome ad alta voce, piuttosto che trascrivere la fonetica originale simbolo per simbolo. L'obiettivo è la scrittura che verrà utilizzata, non quella più tecnicamente fedele."
          },
          {
            "p": "La stessa scrittura può differire a seconda di dove proviene un nome, quindi chiediamo la tua lingua e il tuo paese e lavoriamo da quella pronuncia."
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
            "p": "Se nessuna di esse sembra giusta, puoi aggiungere un suggerimento sul suono che desideri e riprovare — ad esempio, che una particolare sillaba dovrebbe essere scritta diversamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Niente hanja qui",
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
        "title": "Iniziamo con il nome di famiglia",
        "blocks": [
          {
            "p": "In Corea il nome di famiglia viene prima, e a differenza dei nomi di battesimo non è liberamente inventato — lo erediti. Quindi suggeriamo solo cognomi che le persone coreane hanno realmente. Il nostro pool predefinito è composto dai **20 cognomi più comuni**, che insieme coprono circa l'80% della popolazione."
          },
          {
            "p": "Se il tuo cognome si allinea con uno reale coreano per suono — Wang con 왕, Ye con 예 — mettiamo quello per primo. Mantenere un legame con il tuo nome originale vale più di un cognome scelto a caso."
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
            "p": "Questo è un nome che le persone in Corea ti chiameranno realmente, quindi la prima cosa che controlliamo è se un coreano può sentirlo una volta e scriverlo. Un nome che deve essere scritto ogni volta è un peso che porti, non noi."
          },
          {
            "p": "Anche il significato è importante. I nomi di battesimo coreani di solito ne portano uno, quindi ti diciamo come si legge il nome e perché lo abbiamo scelto — non solo il nome stesso."
          }
        ]
      },
      {
        "title": "Chiediamo a cosa serve il nome",
        "blocks": [
          {
            "p": "Un nome per la documentazione universitaria non è lo stesso di un nome che gli amici grideranno attraverso una stanza, o di un soprannome che userai online. Chiediamo come intendi usarlo e teniamo conto di questo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Questo non è una traslitterazione",
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
    "eyebrow": "Contatti",
    "title": "Contattaci",
    "summary": "Come contattarci per domande, rimborsi, richieste di privacy e segnalazioni di errori, con i dettagli della nostra azienda.",
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
              "**Privacy** — richieste di accesso, correzione o cancellazione dei tuoi dati. Consulta la [politica sulla privacy](/privacy).",
              "**Correzioni** — se un significato di hanja, lettura o calcolo sembra errato, faccelo sapere. Menzionare quale schermo e cosa hai inserito aiuta molto.",
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
  "guide/avoid": {
    "eyebrow": "Usanze",
    "title": "Caratteri Tradizionalmente Evitati",
    "summary": "Non è vietato dalla legge ma è una consuetudine. Abbiamo scritto su cosa è stato evitato e perché, e come lo gestiamo.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Caratteri Che Sono Legalmente Accettabili",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} caratteri",
                "label": "Caratteri Evitati Compilati"
              },
              {
                "value": "{avoidCommonlyUsed} caratteri",
                "label": "Tra essi, caratteri ancora comunemente usati"
              }
            ]
          },
          {
            "p": "Ci sono caratteri che sono inclusi nell'elenco dei caratteri per nomi personali e **sono legalmente accettabili**, ma sono considerati inappropriati per i nomi."
          },
          {
            "p": "Il pensiero sottostante è che **\"un significato eccessivo è in realtà indesiderabile.\"** Questo include caratteri considerati troppo preziosi (珍·寶), caratteri visti come aventi una presenza troppo forte (王·帝), e quelli considerati troppo grandiosi per una persona da incarnare, come il cielo o le divinità. Questo riflette un antico senso di moderazione, credendo che un nome possa oscurare la persona."
          },
          {
            "p": "**Tuttavia, questi caratteri non sono inutilizzabili.** Non è una proibizione legale ma una consuetudine, e le consuetudini variano per regione, famiglia e generazione, e possono cambiare nel tempo."
          },
          {
            "p": "Infatti, tra i {avoidTotal} caratteri che abbiamo compilato, {avoidCommonlyUsed} sono ancora comunemente usati nei nomi. Il fatto che siano noti per essere evitati ma siano ancora ampiamente usati indica che questa consuetudine non è assoluta."
          }
        ]
      },
      {
        "title": "Quali Categorie Ci Sono?",
        "blocks": [
          {
            "p": "I caratteri attualmente compilati sono divisi in sette categorie."
          },
          {
            "ul": [
              "**Tesori e Oggetti** — Caratteri che si riferiscono direttamente alla ricchezza o agli oggetti",
              "**Cielo e Natura** — Cose come il sole, la luna e il cielo che sono considerate troppo grandiose per una persona da incarnare",
              "**Re e Nobiltà** — Caratteri che significano status, come re o imperatore",
              "**Essere Divini** — Caratteri che si riferiscono a regni sacri, come dei o spiriti",
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
            "p": "Non eliminiamo arbitrariamente questi caratteri. **Abbiamo fornito due opzioni sulla schermata di input per il nominatore per scegliere come gestirli.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opzioni Disponibili sulla Schermata di Input",
        "blocks": [
          {
            "p": "**Escludere i Caratteri Evitati dai Candidati** — Se abilitato, vengono completamente esclusi. Se disabilitato, rimangono nei risultati con un'etichetta \"Tradizionalmente Evitati\" e il motivo allegato."
          },
          {
            "p": "**Escludere Anche Caratteri Comunemente Usati** — Questo esclude caratteri che sono sulla lista di evitamento ma sono effettivamente ampiamente usati (圭·琳·玲·元·太·星·海, ecc.). Se abilitato, i candidati saranno significativamente ridotti."
          },
          {
            "p": "Il predefinito è **non escludere ma solo visualizzarli**. Se vengono rimossi silenziosamente dall'elenco, potrebbe sembrare a chi vuole usare quel carattere che non esista."
          }
        ]
      },
      {
        "title": "Assicurare che le Opzioni Non Scompaiano",
        "blocks": [
          {
            "p": "Se non ci sono caratteri utilizzabili rimasti per quella sillaba, solleveremo l'esclusione per quella sillaba e mostreremo i candidati. Crediamo sia meglio che non avere opzioni affatto."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base del Servizio",
    "title": "Qual è la Base per la Conversione dei Nomi Globali?",
    "summary": "Forniamo candidati da cinque prospettive, mantenendo i sistemi di scrittura di ciascuna lingua e utilizzando solo nomi esistenti.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "I Candidati Sono Forniti da Cinque Prospettive",
        "blocks": [
          {
            "p": "Non c'è solo un modo per tradurre un nome in un'altra lingua. A seconda che si voglia preservare il suono o il significato, scegliere un nome naturale nel contesto locale o dare priorità all'individualità, le risposte differiranno. Pertanto, invece di presentare un'opzione, forniamo **una da ciascuna delle cinque diverse prospettive**."
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
            "p": "Cinque opzioni sono garantite per essere fornite. Poiché le preferenze variano da persona a persona, crediamo sia meglio consentire scelte piuttosto che presentare una come la risposta corretta."
          }
        ]
      },
      {
        "title": "Ogni Lingua Ha Regole Diverse per i Sistemi di Scrittura",
        "blocks": [
          {
            "p": "Quando si traduce in una lingua che non utilizza lettere romane, deve essere scritto nel sistema di scrittura di quella lingua. Per il giapponese, sarebbero kana e kanji; per il russo, mongolo e kazako, sarebbe cirillico; per l'arabo, sarebbe in scrittura araba; e per il tailandese, khmer e hindi, sarebbero i rispettivi script. Se lo scrivi in lettere romane e lo chiami un \"nome giapponese\", non può essere usato in quel paese."
          },
          {
            "p": "Pertanto, abbiamo regole separate per il sistema di scrittura di ciascuna lingua, e il server controlla ancora una volta per garantire che i risultati siano in quel sistema di scrittura. Errori come l'omissione dei cognomi o la mescolanza di Hangul vengono filtrati qui."
          }
        ]
      },
      {
        "title": "Utilizziamo Nomi Che Sono Effettivamente Usati",
        "blocks": [
          {
            "p": "Per evitare di creare nomi che suonano plausibili ma non esistono in quel paese, basiamo le nostre opzioni su nomi esistenti. I nomi sono usati in documenti e presentazioni, quindi se una persona locale pensa \"non esiste un nome del genere\", non può essere usato."
          }
        ]
      },
      {
        "title": "Separiamo Selezione e Descrizione",
        "blocks": [
          {
            "p": "Gestiamo il compito di determinare cinque candidati separatamente dal compito di descrivere ciascun candidato in dettaglio. Poiché la descrizione richiede molto tempo, separiamo quella parte per crearla simultaneamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perché È Stato Cambiato?",
        "blocks": [
          {
            "p": "Inizialmente, abbiamo creato le cinque prospettive separatamente. Era più veloce, ma **il numero di candidati variava ogni volta.** Man mano che ciascuna persona selezionava i candidati, c'erano sovrapposizioni o discrepanze, e se uno falliva, quel candidato scompariva completamente, risultando in solo due o tre invece di cinque."
          },
          {
            "p": "Ora, poiché determiniamo il set di candidati e la distribuzione delle prospettive in una sola volta, **il numero è fisso.** Anche se una descrizione fallisce, i candidati rimangono e vengono presentati con informazioni brevi. Crediamo sia meglio avere sempre lo stesso numero, anche se richiede un po' più di tempo."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Base del Servizio",
    "title": "Qual è la base per abbinare i significati degli hanja?",
    "summary": "Per prima cosa, i suoni sono fissati, e solo gli hanja che possono essere registrati con quel suono vengono raccolti, e il significato è visto come una combinazione piuttosto che un singolo carattere.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Prima, fissa i suoni",
        "blocks": [
          {
            "p": "Se hai deciso su \"지은\", allora **지** e **은** non cambiano. Non alteriamo il suono del nome per adattarlo all'hanja. Un nome è qualcosa che viene chiamato per tutta la vita, e crediamo che l'ordine sia che il suono sia fissato prima, seguito dall'hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Questo è l'ordine in cui i candidati vengono ristretti. Non si tratta di scegliere prima gli hanja e abbinare i suoni, ma piuttosto che i suoni vengono prima, e solo i caratteri designati per essere letti con quel suono diventano candidati."
          }
        ]
      },
      {
        "title": "Raccogli solo hanja che possono essere registrati con quel suono",
        "blocks": [
          {
            "p": "La tabella ufficiale di hanja per nomi ha una lettura designata per ogni carattere quando usato nei nomi. Solo i caratteri designati per essere letti come **지** e **은** diventano candidati. Non importa quanto sia buono il significato, se la lettura non corrisponde, non può essere l'hanja per quel nome."
          },
          {
            "p": "L'ampiezza per selezionare i candidati è di {characterTotal} caratteri dalla tabella della Corte Suprema. I caratteri non presenti in questa tabella non vengono presentati affatto — anche se mostrati, non possono essere registrati."
          },
          {
            "p": "Il numero di caratteri nella tabella pubblicata dalla Corte Suprema è leggermente superiore a questo. La tabella include anche **caratteri senza codici carattere standard**, che non possono essere visualizzati correttamente su schermi e documenti, quindi quei caratteri sono stati esclusi dai candidati. Devi verificare con l'autorità competente se puoi registrarti con quei caratteri."
          }
        ]
      },
      {
        "title": "Il significato è visto come una combinazione, non un singolo carattere",
        "blocks": [
          {
            "p": "Il significato di ciascun carattere individuale essere buono e il significato letto quando due caratteri sono combinati essere buono sono diversi. I nomi sono letti come combinazioni, quindi consideriamo le combinazioni insieme. Se hai significati specifici che desideri includere o evitare, questi vengono presi in considerazione."
          },
          {
            "p": "Se stai usando un carattere generazionale, quel carattere è fisso, e le combinazioni vengono cercate dalle posizioni rimanenti. Il nome di famiglia (성) non è vincolato dalla tabella ufficiale di hanja per nomi, quindi viene trattato separatamente."
          }
        ]
      },
      {
        "title": "Indichiamo le consuetudini di evitamento senza rimuoverle",
        "blocks": [
          {
            "p": "Se un carattere tradizionalmente considerato evitato è incluso nei candidati, non lo rimuoviamo ma mostriamo il motivo insieme ad esso. Questa è una questione di consuetudine, non di legge, e puoi scegliere di escluderlo completamente dalla schermata di input. Per ulteriori dettagli, consulta [Hanja Tradizionalmente Evitati](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Ti informiamo anche sui motivi di esclusione",
        "blocks": [
          {
            "p": "Mostriamo perché alcuni caratteri sono stati esclusi dai candidati. Se mostriamo solo ciò che è stato scelto, non puoi sapere \"perché questo?\" Se non ci sono caratteri utilizzabili rimasti per quella sillaba, solleveremo l'esclusione per quella sillaba e mostreremo i candidati."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Come leggere i risultati",
        "blocks": [
          {
            "p": "I candidati sono **prospettive, non classifiche**. Il primo non significa che sia il nome migliore; sono selezionati da diverse prospettive. Quelli che danno priorità alla combinazione di significati, quelli che scelgono caratteri poco comuni e quelli che enfatizzano la neutralità vengono presentati affiancati. La risposta varia a seconda di quale prospettiva valorizzi."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "I Nostri Standard",
    "title": "Cosa Non Utilizziamo",
    "summary": "Non assegniamo fortuna totale o punteggi numerici, né utilizziamo conteggi di tratti. I cinque elementi sono usati solo come asse supplementare. Ecco le ragioni.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Ragioni per non assegnare fortuna totale o punteggi numerici",
        "blocks": [
          {
            "p": "Ci sono metodi che assegnano fortuna totale o punteggi numerici ai nomi per valutarli. Naming-Link non fornisce quei numeri. Le ragioni sono quattro."
          },
          {
            "p": "**Primo, non c'è solo uno standard.** I metodi per calcolare la fortuna variano a seconda della scuola, e lo stesso nome può essere valutato positivamente da uno standard e negativamente da un altro. Non abbiamo basi per decidere quale sia corretto. È disonesto presentare uno come se fosse la risposta."
          },
          {
            "p": "**Secondo, quei calcoli si basano sui conteggi di tratti.** Tuttavia, i dati della Corte Suprema non includono affatto i conteggi di tratti. Inoltre, i conteggi di tratti possono variare a seconda che siano conteggi come caratteri regolari o semplificati e come vengono conteggiati i radicali. Poiché i numeri fondamentali non sono definitivi, i punteggi costruiti su di essi non possono essere definitivi."
          },
          {
            "p": "**Terzo, i numeri appaiono più solidi della realtà.** Quando dice \"87 punti\", sembra un valore misurato piuttosto che un'interpretazione convenzionale. Quei nomi possono sentirsi sotto pressione a causa di quel numero, mettendo da parte ciò che è veramente importante (È piacevole da chiamare? Il significato si adatta? Contiene i desideri desiderati?)."
          },
          {
            "p": "**Quarto, non c'è modo di verificare.** La relazione tra un nome e la vita di una persona non può essere verificata. Convertire qualcosa che non può essere detto giusto o sbagliato in un punteggio risulta in un numero che non può essere confermato, anche se non può essere sbagliato."
          },
          {
            "p": "Utilizziamo solo ciò che può essere **sostenuto.** La tabella ufficiale di hanja della Corte Suprema, le letture designate per ciascun carattere e i significati elencati nella tabella. Invece, forniamo motivi per cui questo candidato è stato selezionato e perché alcuni caratteri sono stati esclusi, mostrando **ragioni invece di punteggi**."
          }
        ]
      },
      {
        "title": "Non utilizziamo conteggi di tratti",
        "blocks": [
          {
            "p": "I dati ufficiali di hanja forniti dalla Corte Suprema non includono conteggi di tratti. Tra i {characterTotal} caratteri che abbiamo ricevuto, **non un singolo carattere ha conteggi di tratti.**"
          },
          {
            "p": "Per utilizzare i conteggi di tratti, dovremmo ottenere numeri da qualche altra parte, ma se non possiamo chiarire da dove provengono quei numeri e quali criteri sono stati usati per contarli, significherebbe giudicare i nomi basandosi su numeri infondati. Abbiamo deciso di non valutare i nomi in base a valori che non possono essere sostenuti."
          }
        ]
      },
      {
        "title": "Utilizziamo i cinque elementi solo come riferimento",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Le relazioni tra i cinque elementi. Muoversi lungo il cerchio rappresenta generazione reciproca (相生), mentre saltare uno e premere giù rappresenta restrizione reciproca (相剋). Utilizziamo questa relazione solo come asse supplementare per confrontare i candidati."
          },
          {
            "p": "Se hai inserito il tuo mese di nascita, utilizziamo un riferimento semplificato dei cinque elementi basato su quel mese come asse supplementare per confrontare i candidati. Tuttavia, questa non è un'analisi precisa di saju, e **non affermiamo che i nomi determinino il destino o il carattere di una persona.**"
          },
          {
            "p": "Nella selezione finale, ciò che diamo priorità sono i suoni, le combinazioni di significati, i valori che la famiglia desidera trasmettere e se può essere effettivamente registrato. Se non hai inserito il tuo mese di nascita, escludiamo completamente il riferimento ai cinque elementi dall'analisi — non facciamo assunzioni arbitrarie su informazioni sconosciute."
          },
          {
            "p": "Se desideri un'analisi precisa basata su saju, la trattiamo in un rapporto dettagliato separato. Il motivo per cui non diamo priorità ai cinque elementi nella corrispondenza gratuita degli hanja è che non vogliamo presentare giudizi basati sui cinque elementi derivati da una data e ora di nascita incompleta come se fossero definitivi."
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
  "intro": "I cambiamenti ai tuoi termini di utilizzo — prezzi, politiche — sono pubblicati qui prima che entrino in vigore. I miglioramenti interni non sono elencati: ciò che appare qui è ciò che devi sapere.",
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
        "Domande, rimborsi, richieste di privacy e segnalazioni di errori ora hanno un posto dove andare. La pagina di contatto nel piè di pagina elenca la nostra email e i dettagli aziendali.",
        "Ciò su cui si basano le nostre risposte e ciò che non facciamo deliberatamente è scritto sulla pagina informativa."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "I rapporti PDF sono emessi in inglese per arabo e khmer",
      "body": [
        "Se stai utilizzando il servizio in arabo o khmer, il PDF che acquisti è prodotto in inglese. Lo strumento che imposta i nostri documenti non può ancora impostare paragrafi in quegli script.",
        "Lo schermo rimane nella tua lingua, e il tuo nome è stampato nel tuo script all'interno del documento.",
        "La stessa nota appare prima del pagamento. Quando lo strumento supporterà questi script, lo diremo qui."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "I pagamenti non sono ancora aperti",
      "body": [
        "Creare un nome e leggere il risultato è gratuito oggi, e non è necessario alcun account.",
        "Gli articoli a pagamento non sono ancora in vendita. Gli importi mostrati sulla pagina dei prezzi sono quelli che si applicheranno una volta aperte le vendite."
      ]
    }
  }
} satisfies NoticeCopy;
