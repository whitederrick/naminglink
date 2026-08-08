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
            "p": "Naming-Link ti aiuta a **scegliere e comprendere i nomi coreani** — il hanja dietro il nome di un bambino, un nome coreano da usare all'estero, una scrittura in Hangul del tuo nome, e souvenir come un sigillo o un rapporto stampato."
          },
          {
            "p": "Vedere i tuoi risultati è **gratuito e non richiede un account.** Gli articoli a pagamento non rivendono mai ciò che lo schermo ha già mostrato: aprono più candidati, aggiungono analisi scritte, o trasformano il risultato in qualcosa che puoi tenere."
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
            "p": "Le figure di saju e dei cinque elementi sono calcolate dal **calendario lunisolare coreano**, con l'orario di nascita corretto all'ora solare vera per il luogo di nascita. La lettura è un riferimento tradizionale, non una previsione."
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
            "p": "Il servizio è disponibile in 23 lingue. I PDF a pagamento sono emessi in inglese per arabo e khmer — il renderer PDF non supporta quegli script — e lo diciamo sullo schermo prima che tu paghi."
          }
        ]
      },
      {
        "title": "Contatti",
        "blocks": [
          {
            "p": "I dettagli dell'azienda e come contattarci sono nella [pagina di contatto](/contact), inclusi rimborsi, richieste di privacy e segnalazioni di errori."
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
            "p": "La maggior parte degli hanja ha diverse letture possibili. Un nome, però, è scritto su documenti e pronunciato ad alta voce, quindi ha bisogno di esattamente una lettura. La tabella quindi assegna a ciascun carattere la sua lettura per l'uso nei nomi, e nessun'altra lettura può essere registrata."
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
            "p": "Per quanto buono possa essere un significato, un carattere la cui lettura non corrisponde non può essere usato per quel nome. Inoltre, non cambiamo mai il suono di un nome per adattarlo a un carattere — un nome viene pronunciato per tutta la vita, e il suono è stabilito prima, con l'hanja che segue."
          }
        ]
      },
      {
        "title": "I nomi di famiglia sono al di fuori di questa tabella",
        "blocks": [
          {
            "p": "Questo è spesso frainteso. **La tabella governa il nome proprio, non il cognome.** Un cognome segue ciò che è già registrato nel registro di famiglia, quindi alcune persone usano caratteri che non sono nella tabella di hanja per nomi."
          },
          {
            "p": "Ecco perché Naming-Link tratta gli hanja dei cognomi in modo diverso. Ti aiutiamo solo a trovare un cognome, e lasciamo un campo per inserire direttamente uno, per le persone il cui carattere è al di fuori della tabella. I cognomi di due sillabe come Namgung e Seonwoo vengono inseriti allo stesso modo."
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
            "p": "Questo servizio scrive **il tuo nome** in Hangul. Non ti dà un nome coreano. Michael diventa 마이클 — lo stesso nome, scritto in modo che i coreani possano leggerlo e pronunciarlo. Non lo scambiamo con un nome coreano che per caso significa qualcosa di simile."
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
            "p": "Ogni lingua ha suoni che il coreano non ha — f, v, z, th, e distinzioni vocaliche che il coreano non fa. Per quelli scriviamo ciò che **un parlante coreano dice effettivamente** quando legge il tuo nome ad alta voce, piuttosto che trascrivere la fonetica originale simbolo per simbolo. L'obiettivo è la scrittura che verrà utilizzata, non quella più tecnicamente fedele."
          },
          {
            "p": "La stessa scrittura può differire a seconda di dove proviene un nome, quindi chiediamo la tua lingua e paese e lavoriamo da quella pronuncia."
          }
        ]
      },
      {
        "title": "Diverse scritture, affiancate",
        "blocks": [
          {
            "p": "Non c'è una risposta giusta unica. La scrittura più vicina al suono originale, quella più comunemente usata in Corea, e quella più facile da scrivere sono spesso tre cose diverse. Quindi le mostriamo insieme e diciamo cosa le separa."
          },
          {
            "p": "Se nessuna di esse sembra giusta, puoi aggiungere un suggerimento sul suono che desideri e riprovare — ad esempio, che una particolare sillaba dovrebbe essere scritta diversamente."
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
    "summary": "Scegliamo tra i cognomi esistenti, valutiamo quanto facilmente il nome viene pronunciato e scritto, e chiediamo a cosa serve il nome.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Iniziamo con il cognome",
        "blocks": [
          {
            "p": "In Corea il cognome viene prima, e a differenza dei nomi di battesimo non è liberamente inventato — lo erediti. Quindi suggeriamo solo cognomi che le persone coreane hanno realmente. Il nostro pool predefinito è composto dai **20 cognomi più comuni**, che coprono insieme circa l'80% della popolazione."
          },
          {
            "p": "Se il tuo cognome coincide con uno reale coreano per suono — Wang con 왕, Ye con 예 — lo mettiamo per primo. Mantenere un legame con il tuo nome originale vale più di un cognome scelto a caso."
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
            "p": "Questo è un nome che le persone in Corea ti chiameranno realmente, quindi la prima cosa che controlliamo è se un coreano può sentirlo una volta e scriverlo. Un nome che deve essere letterato ogni volta è un peso che porti tu, non noi."
          },
          {
            "p": "Anche il significato è importante. I nomi di battesimo coreani di solito portano un significato, quindi ti diciamo come si legge il nome e perché lo abbiamo scelto — non solo il nome stesso."
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
              "**Privacy** — richieste per accedere, correggere o eliminare i tuoi dati. Consulta la [politica sulla privacy](/privacy).",
              "**Correzioni** — se un significato, una lettura o un calcolo di hanja sembra errato, faccelo sapere. Menzionare quale schermo e cosa hai inserito aiuta molto.",
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
            "p": "Ci sono caratteri che sono inclusi nell'elenco dei caratteri per nomi personali e **sono legalmente accettabili**, ma sono considerati inappropriati per i nomi."
          },
          {
            "p": "Il pensiero sottostante è che **\"un significato eccessivo è in realtà indesiderabile.\"** Questo include caratteri considerati troppo preziosi (珍·寶), caratteri visti come aventi una presenza troppo forte (王·帝), e quelli considerati troppo grandiosi per una persona da incarnare, come il cielo o le divinità. Questo riflette un antico senso di moderazione, credendo che un nome possa oscurare la persona."
          },
          {
            "p": "**Tuttavia, questi caratteri non sono inutilizzabili.** Non è un divieto legale ma una consuetudine, e le consuetudini variano per regione, famiglia e generazione, e possono cambiare nel tempo."
          },
          {
            "p": "In effetti, tra i {avoidTotal} caratteri che abbiamo compilato, {avoidCommonlyUsed} sono ancora comunemente usati nei nomi. Il fatto che siano noti per essere evitati ma ancora ampiamente utilizzati indica che questa consuetudine non è assoluta."
          }
        ]
      },
      {
        "title": "Quali categorie ci sono?",
        "blocks": [
          {
            "p": "I caratteri attualmente compilati sono suddivisi in sette categorie."
          },
          {
            "ul": [
              "**Tesori e Oggetti** — Caratteri che si riferiscono direttamente alla ricchezza o agli oggetti",
              "**Cielo e Natura** — Cose come il sole, la luna e il cielo che sono considerate troppo grandiose per essere incarnate da una persona",
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
        "title": "Puoi aggiungere o rimuovere caratteri da solo",
        "blocks": [
          {
            "p": "Non eliminiamo arbitrariamente questi caratteri. **Abbiamo fornito due opzioni nella schermata di input per il nominatore per scegliere come gestirli.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opzioni disponibili nella schermata di input",
        "blocks": [
          {
            "p": "**Escludi i caratteri evitati dai candidati** — Se abilitato, vengono completamente esclusi. Se disabilitato, rimangono nei risultati con un'etichetta \"Tradizionalmente Evitato\" e il motivo allegato."
          },
          {
            "p": "**Escludi anche i caratteri comunemente usati** — Questo esclude i caratteri che sono sulla lista di evitamento ma sono effettivamente ampiamente utilizzati (圭·琳·玲·元·太·星·海, ecc.). Se abilitato, i candidati saranno significativamente ridotti."
          },
          {
            "p": "Il predefinito è **non escludere ma solo visualizzare**. Se vengono rimossi silenziosamente dalla lista, potrebbe sembrare a chi vuole usare quel carattere che non esista."
          }
        ]
      },
      {
        "title": "Garantire che le opzioni non scompaiano",
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
    "title": "Qual è la base per la conversione dei nomi globali?",
    "summary": "Forniamo candidati da cinque prospettive, mantenendo i sistemi di scrittura di ciascuna lingua e utilizzando solo nomi esistenti.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "I candidati sono forniti da cinque prospettive",
        "blocks": [
          {
            "p": "Non c'è solo un modo per tradurre un nome in un'altra lingua. A seconda che si desideri preservare il suono o il significato, scegliere un nome naturale nel contesto locale o dare priorità all'individualità, le risposte differiranno. Pertanto, invece di presentare un'opzione, forniamo **una da ciascuna delle cinque diverse prospettive**."
          },
          {
            "ul": [
              "**Opzione di Preservazione del Suono** — Preserva il suono originale del nome il più possibile",
              "**Opzione di Traduzione del Significato** — Traduce il significato contenuto nel nome nel nome di quella lingua",
              "**Opzione di Compromesso tra Suono e Significato** — Prende metà da ciascuno",
              "**Opzione Locale Autentica** — Sceglie nomi che sono effettivamente comunemente usati in quel contesto culturale",
              "**Opzione di Individualità e Branding** — Dà priorità a nomi che sono memorabili e distintivi"
            ]
          },
          {
            "p": "Cinque opzioni sono garantite per essere fornite. Poiché le preferenze variano da persona a persona, crediamo sia meglio consentire scelte piuttosto che presentare una come risposta corretta."
          }
        ]
      },
      {
        "title": "Ogni lingua ha regole diverse per i sistemi di scrittura",
        "blocks": [
          {
            "p": "Quando si traduce in una lingua che non utilizza lettere romane, deve essere scritto nel sistema di scrittura di quella lingua. Per il giapponese, sarebbero kana e kanji; per il russo, mongolo e kazako, sarebbe cirillico; per l'arabo, sarebbe in scrittura araba; e per il tailandese, khmer e hindi, sarebbe nei rispettivi script. Se lo scrivi in lettere romane e lo chiami un \"nome giapponese\", non può essere usato in quel paese."
          },
          {
            "p": "Pertanto, abbiamo regole separate per il sistema di scrittura di ciascuna lingua, e il server controlla ancora una volta per garantire che i risultati siano in quel sistema di scrittura. Errori come l'omissione dei cognomi o la mescolanza con Hangul vengono filtrati qui."
          }
        ]
      },
      {
        "title": "Utilizziamo nomi che sono effettivamente usati",
        "blocks": [
          {
            "p": "Per evitare di creare nomi che suonano plausibili ma non esistono in quel paese, basiamo le nostre opzioni su nomi esistenti. I nomi sono usati in documenti e presentazioni, quindi se una persona locale pensa \"non esiste un nome del genere\", non può essere usato."
          }
        ]
      },
      {
        "title": "Separiamo selezione e descrizione",
        "blocks": [
          {
            "p": "Gestiamo il compito di determinare cinque candidati separatamente dal compito di descrivere ciascun candidato in dettaglio. Poiché la descrizione richiede molto tempo, separiamo quella parte per crearla simultaneamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perché è stato cambiato?",
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
    "title": "Qual è la base per abbinare i significati dei hanja?",
    "summary": "Prima, i suoni sono fissi, e solo i hanja che possono essere registrati con quel suono vengono raccolti, e il significato è visto come una combinazione piuttosto che un singolo carattere.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Prima, fissa i suoni",
        "blocks": [
          {
            "p": "Se hai deciso su \"지은\", allora **지** e **은** non cambiano. Non alteriamo il suono del nome per adattarlo ai hanja. Un nome è qualcosa che viene chiamato per tutta la vita, e crediamo che l'ordine sia che il suono sia fissato prima, seguito dai hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Questo è l'ordine in cui i candidati vengono ristretti. Non si tratta di scegliere i hanja per primi e abbinare i suoni, ma piuttosto che i suoni vengono prima, e solo i caratteri designati per essere letti con quel suono diventano candidati."
          }
        ]
      },
      {
        "title": "Raccogli solo hanja che possono essere registrati con quel suono",
        "blocks": [
          {
            "p": "La tabella ufficiale degli hanja per i nomi ha una lettura designata per ciascun carattere quando usato nei nomi. Solo i caratteri designati per essere letti come **지** e **은** diventano candidati. Non importa quanto sia buono il significato, se la lettura non corrisponde, non può essere il hanja per quel nome."
          },
          {
            "p": "L'intervallo per la selezione dei candidati è di {characterTotal} caratteri dalla tabella della Corte Suprema. I caratteri non presenti in questa tabella non vengono presentati affatto — anche se mostrati, non possono essere registrati."
          },
          {
            "p": "Il numero di caratteri nella tabella pubblicata dalla Corte Suprema è leggermente superiore a questo. La tabella include anche **caratteri senza codici carattere standard**, che non possono essere visualizzati correttamente su schermi e documenti, quindi quei caratteri sono stati esclusi dai candidati. Devi verificare con l'autorità competente se puoi registrarti con quei caratteri."
          }
        ]
      },
      {
        "title": "Il significato è visto come una combinazione, non come un singolo carattere",
        "blocks": [
          {
            "p": "Il significato di ciascun carattere individuale che è buono e il significato letto quando due caratteri sono combinati che è buono sono diversi. I nomi sono letti come combinazioni, quindi consideriamo le combinazioni insieme. Se hai significati specifici che desideri includere o evitare, questi vengono presi in considerazione."
          },
          {
            "p": "Se stai usando un carattere generazionale, quel carattere è fisso e si cercano combinazioni dalle posizioni rimanenti. Il cognome (성) non è vincolato dalla tabella ufficiale degli hanja, quindi viene trattato separatamente."
          }
        ]
      },
      {
        "title": "Indichiamo le consuetudini di evitamento senza rimuoverle",
        "blocks": [
          {
            "p": "Se un carattere tradizionalmente considerato da evitare è incluso nei candidati, non lo rimuoviamo ma mostriamo il motivo insieme ad esso. Questa è una questione di consuetudine, non di legge, e puoi scegliere di escluderlo completamente dalla schermata di input. Per ulteriori dettagli, vedere [Hanja Tradizionalmente Evitati](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Ti informiamo anche sui motivi per l'esclusione",
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
            "p": "I candidati sono **prospettive, non classifiche**. Il primo non significa che sia il miglior nome; sono selezionati da diverse prospettive. Quelli che danno priorità alla combinazione di significati, quelli che scelgono caratteri poco comuni e quelli che enfatizzano la neutralità sono presentati fianco a fianco. La risposta varia a seconda della prospettiva che valorizzi."
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
            "p": "Esistono metodi che assegnano fortuna totale o punteggi numerici ai nomi per classificarli. Naming-Link non fornisce quei numeri. I motivi sono quattro."
          },
          {
            "p": "**Primo, non esiste un solo standard.** I metodi per calcolare la fortuna variano a seconda della scuola, e lo stesso nome può essere valutato positivamente da uno standard e negativamente da un altro. Non abbiamo basi per decidere quale sia corretto. È disonesto presentare uno come se fosse la risposta."
          },
          {
            "p": "**Secondo, quei calcoli si basano sui conteggi di tratti.** Tuttavia, i dati della Corte Suprema non includono affatto i conteggi di tratti. Inoltre, i conteggi di tratti possono variare a seconda che siano conteggiati come caratteri regolari o semplificati e come vengono conteggiati i radicali. Poiché i numeri fondamentali non sono definitivi, i punteggi costruiti su di essi non possono essere definitivi."
          },
          {
            "p": "**Terzo, i numeri appaiono più solidi della realtà.** Quando si dice \"87 punti\", sembra un valore misurato piuttosto che un'interpretazione convenzionale. Quei nomi possono sentirsi sotto pressione a causa di quel numero, mettendo da parte ciò che è veramente importante (È piacevole da chiamare? Il significato si adatta? Contiene i desideri desiderati?)."
          },
          {
            "p": "**Quarto, non c'è modo di verificare.** La relazione tra un nome e la vita di una persona non può essere verificata. Convertire qualcosa che non può essere detto giusto o sbagliato in un punteggio porta a un numero che non può essere confermato, anche se non può essere sbagliato."
          },
          {
            "p": "Utilizziamo solo ciò che può essere **sostenuto.** La tabella ufficiale degli hanja della Corte Suprema, le letture designate per ciascun carattere e i significati elencati nella tabella. Invece, forniamo motivi per cui questo candidato è stato selezionato e perché alcuni caratteri sono stati esclusi, mostrando **motivi invece di punteggi**."
          }
        ]
      },
      {
        "title": "Non utilizziamo conteggi di tratti",
        "blocks": [
          {
            "p": "I dati ufficiali degli hanja forniti dalla Corte Suprema non includono conteggi di tratti. Tra i {characterTotal} caratteri che abbiamo ricevuto, **non c'è un singolo carattere con conteggi di tratti.**"
          },
          {
            "p": "Per utilizzare i conteggi di tratti, dovremmo ottenere numeri da qualche altra parte, ma se non possiamo chiarire da dove provengano quei numeri e quali criteri siano stati utilizzati per contarli, significherebbe giudicare i nomi basandosi su numeri infondati. Abbiamo deciso di non valutare i nomi basandoci su valori che non possono essere sostenuti."
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
            "p": "Se hai inserito il tuo mese di nascita, utilizziamo un riferimento semplificato dei cinque elementi basato su quel mese come asse supplementare per confrontare i candidati. Tuttavia, questa non è un'analisi saju precisa, e **non affermiamo che i nomi determinino il destino o il carattere di una persona.**"
          },
          {
            "p": "Nella selezione finale, ciò che priorizziamo sono i suoni, le combinazioni di significati, i valori che la famiglia desidera trasmettere e se può effettivamente essere registrato. Se non hai inserito il tuo mese di nascita, escludiamo completamente il riferimento ai cinque elementi dall'analisi — non facciamo assunzioni arbitrarie su informazioni sconosciute."
          },
          {
            "p": "Se desideri un'analisi precisa basata sul saju, trattiamo questo in un rapporto dettagliato separato. Il motivo per cui non priorizziamo i cinque elementi nel matching gratuito degli hanja è che non vogliamo presentare giudizi basati sui cinque elementi derivati da una data e ora di nascita incompleta come se fossero definitivi."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Prodotti a Pagamento",
    "title": "Cosa è incluso nei prodotti a pagamento?",
    "summary": "Chiarifichiamo quanto è visibile gratuitamente e quali funzionalità aggiuntive vengono fornite con il pagamento per ciascun prodotto. I prezzi sono recuperati dalle impostazioni reali del prodotto.",
    "backLabel": "Guida all'Uso",
    "sections": [
      {
        "title": "Cosa è visibile gratuitamente?",
        "blocks": [
          {
            "p": "Creare un nome e visualizzare i risultati è **gratuito**. Non è necessaria la registrazione per l'adesione. Puoi vedere i significati corrispondenti degli hanja, creare nomi coreani, conversione di nomi globali e notazione della pronuncia in Hangul, insieme ai risultati raccomandati e alle loro giustificazioni sullo schermo."
          },
          {
            "p": "I prodotti a pagamento non **rivendono ciò che è già stato mostrato sullo schermo.** Aprono più candidati, aggiungono più spiegazioni o creano un formato che può essere memorizzato o trasmesso."
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
            "p": "Se non hai fretta, non devi acquistare. I **risultati dall'apertura tramite annunci e quelli dal pagamento sono completamente gli stessi** — è solo una questione di attesa, e pagare non produce candidati migliori."
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
              "**Massimo 10 candidati hanja rapporto completo saju e cinque elementi** — {priceTenSaju}. Oltre a quanto sopra, include il grafico saju derivato dalla data di nascita e le forze dei cinque elementi, esaminando perché un particolare hanja si adatta a quel nome dalla prospettiva dei cinque elementi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "L'hanja stesso è informazione pubblicamente disponibile",
        "blocks": [
          {
            "p": "Gli hanja utilizzabili e i loro significati provengono dalla tabella ufficiale degli hanja stabilita dalla Corte Suprema della Corea, e tutti sono pubblicamente disponibili nei documenti di guida del servizio. Ciò che i prodotti a pagamento vendono non è informazione sugli hanja ma **l'atto di selezionare e spiegarlo secondo il nome**."
          }
        ]
      },
      {
        "title": "PDF per Utenti Globali",
        "blocks": [
          {
            "p": "Documenti disponibili per convertire nomi stranieri in nomi coreani o scrivere nomi in Hangul. I prezzi seguono gli importi visualizzati nella schermata di pagamento."
          },
          {
            "ul": [
              "**Rapporto Premium sul Nome Coreano** — 3 pagine. Include una copertina in calligrafia, il significato del nome e il motivo per cui è stato scelto, e interpretazione del saju e dei cinque elementi.",
              "**Arte del Nome in Hangul** — 2 pagine. Include una copertina in calligrafia e una guida alla pronuncia. Contiene come scrivere il nome in Hangul e come pronunciarlo."
            ]
          }
        ]
      },
      {
        "title": "Timbro del Nome",
        "blocks": [
          {
            "p": "Incidiamo il nome creato sullo schermo in un timbro fisico e te lo inviamo. I prezzi variano a seconda del modello: sigillo rotondo {priceStampRound}, sigillo quadrato {priceStampSquare}, sigillo in ebano {priceStampEbony}. È disponibile anche la spedizione internazionale."
          },
          {
            "p": "**Da qui, i prodotti includono la spedizione.** A differenza degli articoli precedenti, la produzione e la spedizione richiedono tempo, ed è necessaria un'indirizzo di ricezione. Le informazioni sulla spedizione vengono utilizzate solo per l'elaborazione degli ordini e la conservazione legale, e una volta completata l'elaborazione, verranno distrutte dopo il periodo specificato nella politica."
          }
        ]
      },
      {
        "title": "Cose da Sapere Prima di Comprare",
        "blocks": [
          {
            "p": "**I prodotti digitali vengono forniti immediatamente dopo il pagamento.** Puoi annullare e ricevere un rimborso completo in qualsiasi momento prima dell'inizio del download, ma una volta completato il download, il ritiro a causa di un semplice ripensamento è limitato (Articolo 17, Paragrafo 2 della Legge sul Commercio Elettronico). Questa condizione è concordata separatamente nella schermata di pagamento."
          },
          {
            "p": "**I reclami sul contenuto dei risultati non sono motivo di rimborso.** Tuttavia, se il documento non è stato creato, il file non può essere aperto, o l'importo del pagamento differisce dall'ordine, verrà elaborato come una riemissione o un rimborso completo."
          },
          {
            "p": "Le condizioni dettagliate sono delineate nella [Politica di Rimborso](/refund-policy) e nella [Guida ai Prezzi](/pricing). Questo testo serve come guida a ciò che è incluso, e le condizioni legali sono prioritarie in quei due documenti."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistema",
    "title": "Cos'è l'ufficiale nome-hanja?",
    "summary": "L'hanja che può essere utilizzato per i nomi dei bambini è stato stabilito dalla Corte Suprema in una tabella. Questo riassume cosa è la tabella e perché è stata impostata.",
    "backLabel": "Guida all'Uso",
    "sections": [
      {
        "title": "Cos'è l'ufficiale nome-hanja?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} caratteri",
                "label": "Nome-hanja ufficiale"
              },
              {
                "value": "{syllableCount} sillabe",
                "label": "Sillabe Hangul incluse"
              },
              {
                "value": "{effectiveDate}",
                "label": "Data di riferimento della tabella"
              }
            ]
          },
          {
            "p": "Non puoi usare qualsiasi carattere per il nome di un bambino. **L'hanja che può essere utilizzato per la registrazione alla nascita è stato stabilito dalla Corte Suprema in una tabella, e solo i caratteri in quella tabella possono essere registrati come hanja per i nomi.** Questo è chiamato nome-hanja ufficiale."
          }
        ]
      },
      {
        "title": "Perché è stato stabilito?",
        "blocks": [
          {
            "p": "Ci sono decine di migliaia di hanja. Tra di essi, alcuni hanno significati sgradevoli, alcuni non sono più utilizzati e non hanno letture conosciute, e alcuni non possono essere visualizzati affatto sui computer. Se tali caratteri sono inclusi in un nome, la persona che alla fine sopporta il peso è quella che utilizzerà quel nome per tutta la vita. I nomi possono essere rotti o letti in modo diverso in vari luoghi come registrazione dei residenti, passaporti, banche e scuole, richiedendo all'individuo di spiegare il proprio nome."
          },
          {
            "p": "Pertanto, è stato scelto un metodo per predefinire l'intervallo di hanja che possono essere utilizzati nei nomi. Piuttosto che essere una regolazione restrittiva, è più un meccanismo per garantire che i nomi possano essere utilizzati senza problemi per tutta la vita di una persona."
          }
        ]
      },
      {
        "title": "Qual è la base per le definizioni?",
        "blocks": [
          {
            "p": "La Corte Suprema stabilisce la tabella ufficiale nome-hanja, che viene revisionata secondo necessità, e i caratteri vengono aggiunti."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Materiali utilizzati in questo schermo",
        "blocks": [
          {
            "p": "Dati ufficiali nome-hanja di {publisher} · A partire dal {effectiveDate}"
          },
          {
            "p": "{characterTotal} caratteri coprono {syllableCount} sillabe Hangul. Anche il valore hash del file originale è memorizzato, quindi se la tabella cambia, può essere controllato quando e cosa è cambiato."
          }
        ]
      },
      {
        "title": "Il numero di caratteri annunciato dalla Corte Suprema differisce da quello che mostriamo",
        "blocks": [
          {
            "p": "**L'ufficiale nome-hanja annunciato dalla Corte Suprema è {announcedTotal} caratteri, mentre ciò che presentiamo come candidati è {characterTotal} caratteri.** Non c'è motivo di nascondere questa differenza, quindi lo dichiariamo chiaramente."
          },
          {
            "p": "Se controlli i dati di richiesta della Corte Suprema, contiene {listedTotal} caratteri. Tra di essi, **{excludedNoStandardCode} caratteri** sono **caratteri che non hanno un posto nel codice carattere comune globale (Unicode).** Il sistema della Corte Suprema tratta tali caratteri con numeri che funzionano solo all'interno del proprio sistema, e vengono visualizzati come **immagini** piuttosto che caratteri sullo schermo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aggiungere più font non risolverà il problema",
        "blocks": [
          {
            "p": "Affinché un carattere appaia sullo schermo, deve avere un **numero concordato dal mondo**, e il font contiene l'immagine corrispondente a quel numero. I caratteri che non hanno un numero non possono essere inclusi in alcun font. Non importa quanti font aggiungiamo, questi caratteri appariranno come quadrati vuoti."
          }
        ]
      },
      {
        "title": "Pertanto, sono stati rimossi dai candidati",
        "blocks": [
          {
            "p": "**Riempire l'elenco con caratteri che non possono essere visualizzati non è utile.** La maggior parte dei significati di questi caratteri è anche vuota nei nostri dati, il che non si allinea con il metodo del servizio di scelta dei nomi basato sui significati."
          },
          {
            "p": "**La ragione più importante riguarda la persona che utilizzerà il nome.** Un nome è un valore che verrà inserito in vari luoghi per tutta la vita di una persona. I caratteri senza codici carattere potrebbero non essere in grado di essere inseriti o stampati nei sistemi per banche, scuole, ospedali o passaporti, anche dopo aver completato la registrazione alla nascita. Pertanto, non possiamo raccomandare tali caratteri."
          },
          {
            "p": "Tuttavia, **non determiniamo se quei caratteri possono essere utilizzati o meno.** Poiché sono caratteri nella tabella della Corte Suprema, la registrazione stessa potrebbe essere possibile. Se desideri davvero utilizzare quel carattere, controlla direttamente nel sistema elettronico di registrazione della famiglia della Corte Suprema e **richiedi all'autorità competente riguardo alla reale utilizzabilità.**"
          }
        ]
      },
      {
        "title": "Se desideri utilizzare hanja non presente nella tabella",
        "blocks": [
          {
            "p": "Non puoi usarli. Per essere precisi, quei caratteri non saranno registrati come hanja per il nome, e il nome sarà registrato solo in Hangul. Se desideri utilizzare hanja insieme, devi scegliere dalla tabella."
          },
          {
            "p": "Pertanto, non presentiamo caratteri che non sono nella tabella come candidati. Tutti gli hanja visibili sullo schermo sono caratteri che possono effettivamente essere utilizzati per la registrazione alla nascita. L'elenco completo è disponibile nella [Lista Completa di Nome-Hanja Ufficiale](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Elenco",
    "title": "Lista Completa di Nome Hanja Ufficiale",
    "summary": "Abbiamo organizzato gli hanja che possono essere utilizzati per la registrazione alla nascita per consonante iniziale. Puoi vedere la lettura designata e il significato per ogni carattere quando utilizzato nei nomi.",
    "backLabel": "Guida all'Uso",
    "sections": [
      {
        "title": "Cerca per Consonante Iniziale",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Questo include tutti i {characterTotal} caratteri dalla tabella ufficiale nome-hanja della Corte Suprema. Ogni carattere include la **lettura quando utilizzato nei nomi** e il suo significato. I caratteri non inclusi nella tabella non possono essere registrati come hanja per i nomi, quindi dovresti scegliere tra i caratteri elencati qui."
          },
          {
            "p": "I due numeri sul pulsante qui sotto rappresentano il **numero di caratteri con quella consonante iniziale** e il **numero di sillabe coperte**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se il carattere che stai cercando non è nell'elenco",
        "blocks": [
          {
            "p": "Il numero di caratteri annunciato dalla Corte Suprema è {announcedTotal}, ma questo elenco contiene {characterTotal} caratteri. **La differenza di {excludedNoStandardCode} caratteri sono quelli che non possono essere visualizzati in alcun font a causa della mancanza di un posto nel codice carattere universale.** Il sistema della Corte Suprema mostra quei caratteri come immagini."
          },
          {
            "p": "Abbiamo dettagliato le ragioni di questo e perché non raccomandiamo quei caratteri in [Cos'è l'Hanja Ufficiale?](/guide/hanja-basics). Dovresti controllare con l'autorità competente per la reale utilizzabilità di quei caratteri."
          }
        ]
      },
      {
        "title": "Consonanti Iniziali con Pochi Caratteri",
        "slot": "piccolo",
        "blocks": [
          {
            "p": "Le consonanti iniziali qui sotto hanno molto pochi hanja ufficiali per i nomi, quindi le abbiamo visualizzate qui senza una pagina separata."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Come Leggere Questa Lista",
        "blocks": [
          {
            "p": "Per **伽 · 가 · 절**, quando si utilizza \"伽\" in un nome, si legge come **가** e significa \"tempio\". Anche per lo stesso hanja, la lettura quando utilizzata nei nomi è fissata dalla tabella, e non può essere utilizzata in alcun altro modo."
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
  "intro": "Le modifiche ai tuoi termini di utilizzo — prezzi, politiche — vengono pubblicate qui prima che entrino in vigore. I miglioramenti interni non sono elencati: ciò che appare qui è ciò che devi sapere.",
  "empty": {
    "title": "Nessuna notifica ancora",
    "body": "Quando qualcosa cambia, apparirà qui."
  },
  "effective": "Entrerà in vigore il {date}",
  "pager": {
    "label": "Pagine di notifica",
    "newer": "← Più recente",
    "older": "Più vecchio →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Le pagine di Contatto e Informazioni sono ora aperte",
      "body": [
        "Domande, rimborsi, richieste di privacy e segnalazioni di errori ora hanno un unico luogo dove andare. La pagina di contatto nel piè di pagina elenca la nostra email e i dettagli dell'azienda.",
        "Su cosa si basano le nostre risposte, e cosa non facciamo deliberatamente, è scritto nella pagina informativa."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "I rapporti PDF sono emessi in inglese per arabo e khmer",
      "body": [
        "Se stai utilizzando il servizio in arabo o khmer, il PDF che acquisti è prodotto in inglese. Lo strumento che impagina i nostri documenti non può ancora impostare paragrafi in quei due script.",
        "Lo schermo rimane nella tua lingua, e il tuo nome è stampato nel tuo script all'interno del documento.",
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
