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
            "p": "Naming-Link ti aiuta a **scegliere e comprendere i nomi coreani** — il hanja dietro il nome di un bambino, un nome coreano da usare all'estero, una traslitterazione in Hangul del tuo nome, e souvenir come un sigillo o un rapporto stampato."
          },
          {
            "p": "Vedere i tuoi risultati è **gratuito e non richiede un account.** Gli elementi a pagamento non rivendono ciò che lo schermo ha già mostrato: aprono più candidati, aggiungono analisi scritte o trasformano il risultato in qualcosa che puoi tenere."
          }
        ]
      },
      {
        "title": "A chi è destinato ciascun servizio",
        "blocks": [
          {
            "p": "Ci sono due tipi di servizio qui: uno per le persone che **hanno già un nome coreano**, e uno per le persone che **ne hanno bisogno**. Richiedono cose diverse da te, quindi sono offerti in lingue diverse."
          },
          {
            "ul": [
              "**Offerto nella tua lingua** — scrivere il proprio nome in Hangul e costruire un nome coreano. Questi sono per persone senza un nome coreano, quindi seguono la lingua in cui arrivi.",
              "**Offerto solo in coreano** — trovare il nome-hanja per un bambino e trasformare un nome coreano in uno da usare all'estero. Entrambi necessitano di un **nome Hangul esistente** da cui partire, quindi gli schermi e le loro guide rimangono in coreano."
            ]
          }
        ]
      },
      {
        "title": "Su cosa si basano le nostre risposte",
        "blocks": [
          {
            "p": "Il hanja proviene dalla **tabella ufficiale dei nomi-hanja della Corte Suprema di Corea.** Ogni carattere ha una lettura fissa per l'uso nei nomi, e i caratteri al di fuori della tabella non possono essere registrati. Non aggiungiamo a quell'elenco né scegliamo preferiti."
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
        "title": "Dove si trovano i nostri dati e traduzioni",
        "blocks": [
          {
            "p": "**Preferiamo dirlo chiaramente.** Dirti cosa ha controllato una persona e cosa nessuno ha controllato è più utile che affermare che tutto è stato esaminato."
          },
          {
            "ul": [
              "**Dati sui nomi-hanja** — la tabella dei nomi-hanja di {publisher}, a partire da {effectiveDate}. Manteniamo un hash del file sorgente, quindi se la tabella cambia possiamo dire cosa è cambiato.",
              "**Compilato da** Platforest. I caratteri, le letture e i significati sono trasferiti dalla tabella così come sono; non aggiungiamo né rimuoviamo.",
              "**Traduzione** — scritta prima in coreano, poi in inglese, poi nelle altre lingue. **Queste sono traduzioni automatiche, controllate automaticamente** — per frasi mancanti, terminologia coerente e i valori inseriti che rimangono intatti. Non sono state esaminate da parlanti nativi.",
              "**Spiegazioni scritte** sono prodotte da AI, limitate al tuo input e ai nostri dati di riferimento in modo che non inventi fatti."
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
    "summary": "Come scegliamo un cognome coreano, cosa controlliamo prima di suggerire un nome di battesimo e come scriviamo il tuo nome in Hangul — con le parti che lasciamo deliberatamente fuori.",
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
    "summary": "Come scegliamo i suoni quando scriviamo un nome straniero in Hangul e perché non attacchiamo hanja.",
    "backLabel": "Guida",
    "sections": [
      {
        "title": "Portiamo il suono, non il significato",
        "blocks": [
          {
            "p": "Questo servizio scrive **il tuo nome** in Hangul. Non ti dà un nome coreano. Michael diventa 마이클 — lo stesso nome, scritto in modo che i coreani possano leggerlo e pronunciarlo. Non lo scambiamo con un nome coreano che ha un significato simile."
          },
          {
            "p": "Se un nome coreano è ciò che desideri, **questo è un servizio diverso**. Uno mantiene il tuo nome e cambia solo la scrittura; l'altro propone un nuovo nome."
          }
        ]
      },
      {
        "title": "I suoni che il coreano non ha",
        "blocks": [
          {
            "p": "Ogni lingua ha suoni che il coreano non possiede — f, v, z, th, e distinzioni vocaliche che il coreano non fa. Per questi scriviamo ciò che **un parlante coreano dice realmente** quando legge il tuo nome ad alta voce, piuttosto che trascrivere la fonetica originale simbolo per simbolo. L'obiettivo è la scrittura che verrà utilizzata, non quella più tecnicamente fedele."
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
            "p": "Non attacchiamo hanja a una traslitterazione. Gli hanja portano significato, e questo flusso riguarda il suono. Abbinare i caratteri al suono da solo può portarti a un significato che non hai mai richiesto."
          }
        ]
      },
      {
        "title": "Questo funziona in direzione opposta alla romanizzazione del passaporto",
        "blocks": [
          {
            "p": "Questi due sono facili da confondere, quindi ecco la differenza: **funzionano in direzioni opposte.**"
          },
          {
            "ul": [
              "**La romanizzazione** prende il nome in Hangul di una persona coreana e lo scrive nell'alfabeto latino. È fissata quando viene emesso un passaporto, e da quel momento in poi biglietti, visti e conti bancari seguono tutti quella scrittura. 김민준 diventa Kim Minjun.",
              "**La traslitterazione in Hangul** — ciò che fa questo servizio — funziona al contrario. Prende un nome scritto nell'alfabeto latino e scrive come suona in Hangul. Daniel diventa 대니얼."
            ]
          },
          {
            "p": "Quindi ciò che ottieni qui **non cambia la scrittura nel tuo passaporto.** Quella romanizzazione è già fissata; questo è quel nome scritto di nuovo in Hangul. I due non sempre si convertono esattamente l'uno nell'altro — scrivere un suono che il coreano non ha perde un po' di informazioni lungo il cammino."
          }
        ]
      },
      {
        "title": "Dove utilizzeresti questa scrittura",
        "blocks": [
          {
            "p": "Una scrittura in Hangul è solitamente necessaria in luoghi come questi."
          },
          {
            "ul": [
              "**Presentarsi** — mostrare il proprio nome in Hangul, o dirlo in coreano",
              "**Un campo per il nome in Hangul su un modulo** — registrazioni e domande che chiedono il tuo nome in Hangul. Nota che **l'istituzione decide cosa va su un documento ufficiale** — ciò che ottieni qui non sostituisce quello",
              "**Un timbro per il nome o un souvenir** — la scrittura da incidere"
            ]
          },
          {
            "p": "**È normale che più di una scrittura sia difendibile.** Quando un nome può essere scritto in diversi modi in Hangul, li mostriamo affiancati e lasciamo a te la scelta."
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
        "title": "Ci sono ventisei cognomi tra cui scegliere",
        "blocks": [
          {
            "p": "Abbiamo mantenuto la lista ristretta di proposito. **I cognomi coreani sono davvero concentrati** — Kim, Lee e Park da soli rappresentano circa il 45% della popolazione, e i primi venti circa l'80%. Aggiungere cognomi rari allargerebbe il menu, ma produrrebbe anche nomi che i coreani non sentono come nomi."
          },
          {
            "ul": [
              "**I venti più comuni** (circa l'80% della popolazione) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Cognomi reali aggiunti per mantenere un legame di suono** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Il secondo gruppo esiste affinché **il tuo cognome possa essere trasmesso per suono**. Wang, Jin, Baek, Ma, Na e Yoo sono cognomi che i coreani hanno già, quindi dire il tuo nome mantiene un legame con quello da cui sei partito. Tutti e ventisei sono cognomi in uso reale — nessuno di essi è una nostra invenzione."
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
            "p": "Anche il significato è importante. I nomi di battesimo coreani di solito portano uno, quindi ti diciamo come si legge il nome e perché lo abbiamo scelto — non solo il nome stesso."
          }
        ]
      },
      {
        "title": "Chiediamo a cosa serve il nome",
        "blocks": [
          {
            "p": "Un nome per documenti universitari non è lo stesso di un nome che gli amici grideranno attraverso una stanza, o di un soprannome che utilizzerai online. Chiediamo come intendi usarlo e ne teniamo conto."
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
    "summary": "Dove annunciamo cambiamenti che influenzano il modo in cui utilizzi il servizio.",
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
              "**Pagamenti e rimborsi** — se un documento non è mai stato prodotto, o l'importo addebitato differisce dal tuo ordine, rimborsiamo completamente. Vedi la [politica di rimborso](/refund-policy).",
              "**Privacy** — richieste per accedere, correggere o eliminare i tuoi dati. Vedi la [politica sulla privacy](/privacy).",
              "**Correzioni** — se un significato, una lettura o un calcolo del hanja sembrano errati, faccelo sapere. Menzionare quale schermo e cosa hai inserito aiuta molto.",
              "**Altro** — collaborazioni e stampa vanno allo stesso indirizzo."
            ]
          }
        ]
      },
      {
        "title": "Dettagli dell'azienda",
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
    "summary": "Non assegniamo fortuna totale o punteggi numerici, né utilizziamo conteggi dei tratti. I cinque elementi sono utilizzati solo come asse supplementare. Ecco le ragioni.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Ragioni per non assegnare fortuna totale o punteggi numerici",
        "blocks": [
          {
            "p": "Esistono metodi che assegnano fortuna totale o punteggi numerici ai nomi per valutarli. Naming-Link non fornisce quei numeri. Le ragioni sono quattro."
          },
          {
            "p": "**Primo, non esiste un solo standard.** I metodi per calcolare la fortuna variano a seconda della scuola, e lo stesso nome può essere valutato positivamente da uno standard e negativamente da un altro. Non abbiamo alcuna base per decidere quale sia corretto. È disonesto presentare uno come se fosse la risposta."
          },
          {
            "p": "**Secondo, quei calcoli si basano sui conteggi dei tratti.** Tuttavia, i dati della Corte Suprema non includono affatto i conteggi dei tratti. Inoltre, i conteggi dei tratti possono variare a seconda che siano conteggiati come caratteri regolari o semplificati e come vengono conteggiati i radicali. Poiché i numeri fondamentali non sono definitivi, i punteggi costruiti su di essi non possono essere definitivi."
          },
          {
            "p": "**Terzo, i numeri appaiono più solidi della realtà.** Quando si dice \"87 punti\", sembra un valore misurato piuttosto che un'interpretazione convenzionale. Quei nomi potrebbero sentirsi sotto pressione a causa di quel numero, mettendo da parte ciò che è veramente importante (È piacevole da chiamare? Il significato è adatto? Contiene i desideri desiderati?)."
          },
          {
            "p": "**Quarto, non c'è modo di verificare.** La relazione tra un nome e la vita di una persona non può essere verificata. Convertire qualcosa che non può essere detto giusto o sbagliato in un punteggio risulta in un numero che non può essere confermato, anche se non può essere sbagliato."
          },
          {
            "p": "Utilizziamo solo ciò che può essere **sostenuto.** La tabella ufficiale dei hanja della Corte Suprema, le letture designate per ciascun carattere e i significati elencati nella tabella. Invece, forniamo ragioni per cui questo candidato è stato selezionato e perché alcuni caratteri sono stati esclusi, mostrando **ragioni invece di punteggi**."
          }
        ]
      },
      {
        "title": "Non utilizziamo conteggi dei tratti",
        "blocks": [
          {
            "p": "I dati ufficiali del hanja forniti dalla Corte Suprema non includono conteggi dei tratti. Tra i {characterTotal} caratteri che abbiamo ricevuto, **non c'è un singolo carattere con conteggi dei tratti.**"
          },
          {
            "p": "Per utilizzare i conteggi dei tratti, dovremmo ottenere numeri da qualche altra parte, ma se non possiamo chiarire da dove provengono quei numeri e quali criteri sono stati utilizzati per contarli, significherebbe giudicare i nomi in base a numeri infondati. Abbiamo deciso di non valutare i nomi in base a valori che non possono essere sostenuti."
          }
        ]
      },
      {
        "title": "Utilizziamo i cinque elementi solo come riferimento",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "I cinque elementi disposti in un cerchio: la generazione corre tra i vicini, il controllo salta uno",
              "wood": "legno",
              "fire": "fuoco",
              "earth": "terra",
              "metal": "metallo",
              "water": "acqua",
              "saeng": "Generazione — ciascuno dà origine al suo vicino",
              "geuk": "Controllo — ciascuno frena quello che salta"
            },
            "caption": "Le relazioni tra i cinque elementi. Muoversi lungo il cerchio rappresenta una generazione reciproca (相生), mentre saltare uno e premere giù rappresenta una reciproca restrizione (相剋). Utilizziamo questa relazione solo come asse supplementare per confrontare i candidati."
          },
          {
            "p": "Se hai inserito il tuo mese di nascita, utilizziamo un riferimento semplificato dei cinque elementi basato su quel mese come asse supplementare per confrontare i candidati. Tuttavia, questa non è un'analisi saju precisa, e **non affermiamo che i nomi determinano il destino o il carattere di una persona.**"
          },
          {
            "p": "Nella selezione finale, ciò che priorizziamo sono i suoni, le combinazioni di significati, i valori che la famiglia desidera trasmettere e se può effettivamente essere registrato. Se non hai inserito il tuo mese di nascita, escludiamo completamente il riferimento ai cinque elementi dall'analisi — non facciamo assunzioni arbitrarie su informazioni sconosciute."
          },
          {
            "p": "Se desideri un'analisi precisa basata sul saju, la trattiamo in un rapporto dettagliato separato. Il motivo per cui non priorizziamo i cinque elementi nel corrispondenza gratuita del hanja è che non vogliamo presentare giudizi basati sui cinque elementi derivati da una data e ora di nascita incompleta come se fossero definitivi."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Prodotti a pagamento",
    "title": "Cosa è incluso nei prodotti a pagamento?",
    "summary": "Chiarifichiamo quanto è visibile gratuitamente e quali funzionalità aggiuntive vengono fornite con il pagamento per ciascun prodotto. I prezzi sono recuperati dalle impostazioni reali del prodotto.",
    "backLabel": "Guida all'uso",
    "sections": [
      {
        "title": "Cosa è visibile gratuitamente?",
        "blocks": [
          {
            "p": "Creare un nome e visualizzare i risultati è **gratuito**. Non è necessaria la registrazione per l'iscrizione. Puoi vedere i significati corrispondenti del hanja, creare nomi coreani, conversione di nomi globali e notazione della pronuncia in Hangul, insieme ai risultati raccomandati e le loro giustificazioni sullo schermo."
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
            "p": "I risultati raccomandati sono strutturati per aprire i candidati uno alla volta. Quando si visualizzano gli annunci, si apre uno alla volta, mentre questo prodotto **apre tutti i candidati rimanenti contemporaneamente**."
          },
          {
            "p": "Se non hai fretta, non è necessario acquistare. I **risultati dall'apertura tramite annunci e quelli dal pagamento sono completamente gli stessi** — è solo una questione di attesa, e pagare non produce candidati migliori."
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
              "**Massimo 10 candidati hanja PDF dettagliato esteso** — {priceTenDetail}. Il numero di candidati aumenta a dieci, e un documento PDF è incluso.",
              "**Massimo 10 candidati hanja rapporto completo saju e i cinque elementi** — {priceTenSaju}. Oltre a quanto sopra, include il grafico saju derivato dalla data di nascita e le forze dei cinque elementi, esaminando perché un particolare hanja si adatta a quel nome dalla prospettiva dei cinque elementi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "L'hanja stesso è informazione pubblicamente disponibile",
        "blocks": [
          {
            "p": "Gli hanja utilizzabili e i loro significati provengono dall'ufficiale tabella degli hanja per nomi stabilita dalla Corte Suprema della Corea, e tutti sono pubblicamente disponibili nei documenti di guida del servizio. Ciò che i prodotti a pagamento vendono non è informazione hanja ma **l'atto di selezionare e spiegarlo secondo il nome**."
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
              "**Rapporto Premium Nome Coreano** — 3 pagine. Include una copertina calligrafica, il significato del nome e il motivo per cui è stato scelto, e interpretazione del saju e dei cinque elementi.",
              "**Arte del Nome in Hangul** — 2 pagine. Include una copertina calligrafica e una guida alla pronuncia. Contiene come scrivere il nome in Hangul e come pronunciarlo."
            ]
          }
        ]
      },
      {
        "title": "Timbro del Nome",
        "blocks": [
          {
            "p": "Incidiamo il nome creato sullo schermo in un timbro fisico e te lo inviamo. I prezzi variano in base al modello — timbro rotondo {priceStampRound}, timbro quadrato {priceStampSquare}, timbro in ebano {priceStampEbony}. La spedizione internazionale è disponibile."
          },
          {
            "p": "**Da qui, i prodotti includono la spedizione.** A differenza degli articoli precedenti, produzione e spedizione richiedono tempo, e è necessaria un'indirizzo di ricezione. Le informazioni sulla spedizione vengono utilizzate solo per l'elaborazione degli ordini e la conservazione legale, e una volta completata l'elaborazione, verranno distrutte dopo il periodo specificato nella politica."
          }
        ]
      },
      {
        "title": "Cose da Sapere Prima di Comprare",
        "blocks": [
          {
            "p": "**I prodotti digitali vengono forniti immediatamente dopo il pagamento.** Puoi annullare e ricevere un rimborso completo in qualsiasi momento prima che inizi il download, ma una volta completato il download, il recesso per semplice cambio di idea è limitato (Articolo 17, Paragrafo 2 della Legge sul Commercio Elettronico). Questa condizione è concordata separatamente nella schermata di pagamento."
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
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "Servizio",
    "product": "Prodotti",
    "policy": "Politica",
    "support": "Supporto"
  },
  "intro": "Le modifiche ai tuoi termini di utilizzo — prezzi, politiche — vengono pubblicate qui prima che entrino in vigore. I miglioramenti interni non sono elencati: ciò che appare qui è ciò che devi sapere.",
  "empty": {
    "title": "Nessun avviso ancora",
    "body": "Quando qualcosa cambia, apparirà qui."
  },
  "effective": "Entrerà in vigore {date}",
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
        "Su cosa si basano le nostre risposte, e cosa non facciamo deliberatamente, è scritto nella pagina di informazioni."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "I rapporti PDF sono emessi in inglese per arabo e khmer",
      "body": [
        "Se stai utilizzando il servizio in arabo o khmer, il PDF che acquisti è prodotto in inglese. Lo strumento che impagina i nostri documenti non può ancora impostare paragrafi in quei due script.",
        "Lo schermo rimane nella tua lingua, e il tuo nome è stampato nel tuo script all'interno del documento.",
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
