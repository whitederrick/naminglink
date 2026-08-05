// 사주링크 화면 사전의 Italian (Italiano)(it) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const it: Dictionary = {
  "brand": "SajuLink",
  "tagline": "I tuoi Quattro Pilastri, letti da una data di nascita",
  "currentLanguage": "Lingua attuale",
  "moreLanguages": "Altro",
  "closeLanguages": "Chiudi",
  "landing": {
    "title": "Gli otto caratteri\ncon cui sei nato",
    "subtitle": "Tutto ciò di cui hai bisogno è una data di nascita.\nCostruiamo il tuo grafico Saju (Quattro Pilastri), pesiamo i cinque elementi e leggiamo la forza del tuo giorno maestro.",
    "cta": "Guarda il mio Saju",
    "howTitle": "Come funziona",
    "steps": [
      "Inserisci la tua data di nascita. L'ora di nascita è facoltativa.",
      "L'anno, il mese, il giorno e l'ora della tua nascita diventano otto caratteri — il tuo grafico natale. Da questi leggiamo il peso di ciascun elemento e la forza del tuo giorno maestro.",
      "Il pilastro di oggi è sovrapposto a quel grafico per darti anche la fortuna di oggi."
    ],
    "privacyTitle": "Nulla di ciò che inserisci viene conservato",
    "privacyBody": "Le date di nascita servono solo durante il calcolo del risultato e non vengono mai registrate. Non serve alcun account. Nulla di ciò che il link del risultato contiene viene inviato al server.",
    "disclaimer": "Questo è un lettura tradizionale di Saju offerta per riferimento. Non è una previsione scientifica o un verdetto sul futuro di qualcuno."
  },
  "form": {
    "title": "La tua data di nascita",
    "description": "Conoscere l'ora di nascita rende la lettura più precisa, ma non è obbligatorio.",
    "meLegend": "Informazioni su di te",
    "nickname": "Come chiamarla",
    "nicknamePlaceholder": "es. Io",
    "nicknameHint": "Compare solo nella schermata del risultato. Non viene usato nel calcolo.",
    "gender": "Genere",
    "male": "Uomo",
    "female": "Donna",
    "genderUnspecified": "Preferisco non dirlo",
    "genderHint": "La lettura tradizionale del Saju considera le posizioni del coniuge e dei figli in modo diverso a seconda del genere. Se salti questo, quei fattori verranno esclusi dal calcolo.",
    "birthplace": "Luogo di nascita",
    "birthplaceHint": "Il pilastro dell'ora viene calcolato dal tempo solare reale nel tuo luogo di nascita. Se il tuo luogo di nascita non è elencato, scegli la città più vicina.\nAll'interno della Corea continentale, la differenza tra le città è inferiore a due minuti. Anche l'ora legale e i cambiamenti storici dei fusi orari sono riflessi.",
    "calendar": "Calendario",
    "solar": "Solare",
    "lunar": "Lunare",
    "leapMonth": "Mese intercalare",
    "birthDate": "Data di nascita",
    "year": "Anno",
    "month": "Mese",
    "day": "Giorno",
    "birthTime": "Ora di nascita",
    "unknownTime": "Non conosco l'ora",
    "hour": "Ore",
    "minute": "Minuti",
    "submit": "Guarda l'annuncio e vedi il mio Saju",
    "submitNoAd": "Vedi il mio Saju",
    "submitting": "Calcolo in corso…",
    "errorInvalidDate": "Controlla la data di nascita. Per le date lunari verifica anche se cade in un mese intercalare.",
    "errorGeneric": "Il calcolo non è riuscito. Riprova tra un momento."
  },
  "reading": {
    "chartTitle": "Il tuo tema natale",
    "chartHint": "Il Saju rappresenta l'anno, il mese, il giorno e l'ora di nascita come due caratteri ciascuno. Tutto ciò che segue è interpretato a partire da questi otto caratteri.",
    "pillarYear": "Anno",
    "pillarMonth": "Mese",
    "pillarDay": "Giorno",
    "pillarHour": "Ora",
    "pillarHourUnknown": "Ora di nascita assente",
    "dayMasterLabel": "Padrone del giorno",
    "animalLabel": "Segno zodiacale",
    "seasonLabel": "Stagione di nascita",
    "elementsTitle": "Forza degli elementi",
    "strongest": "Il più forte",
    "scarcest": "Il più scarso",
    "strengthTitle": "Cosa hai ricevuto alla nascita",
    "cautionTitle": "A cosa fare attenzione",
    "bodyStrengthTitle": "Forza del padrone del giorno",
    "favorableLabel": "Ciò di cui hai bisogno ora"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Padrone del giorno forte",
      "body": "Gli elementi che sostengono il tuo padrone del giorno sono abbondanti. Questo ti dà uno slancio tutto tuo, ma ti fa anche sbilanciare facilmente da un lato: tendi ad assestarti quando qualcosa drena l'eccesso."
    },
    "BALANCED": {
      "name": "Padrone del giorno equilibrato",
      "body": "Ciò che sostiene il tuo padrone del giorno e ciò che lo drena quasi si equivalgono. Troppo vicini per decidere in un senso o nell'altro, perciò qui leggiamo come necessario ciò che è più sottile."
    },
    "WEAK": {
      "name": "Padrone del giorno debole",
      "body": "Gli elementi che sostengono il tuo padrone del giorno sono scarsi. Sai attingere bene alla forza di chi ti sta intorno, ma ti logori a resistere da solo: dai il meglio quando qualcosa ti sostiene."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Compagno (比肩)",
      "body": "L'energia che sta spalla a spalla con te. Spessa, ti dà la forza di mantenere la tua posizione e di reclamare prima la tua parte."
    },
    "GEOPJAE": {
      "name": "Rivale (劫財)",
      "body": "Energia che ti somiglia ma lavora in modo diverso. Dona forza a una spinta, ma in eccesso ciò che possiedi tende a disperdersi."
    },
    "SIKSIN": {
      "name": "Espressione (食神)",
      "body": "L'energia che trae ciò che è in te nel mondo. L'espressione e il semplice piacere di vivere provengono da qui; dove si trova, c'è facilità."
    },
    "SANGGWAN": {
      "name": "Perturbatore (傷官)",
      "body": "L'energia che destabilizza un quadro fisso. Dona talento e un bordo affilato, ma in eccesso collide con regole e gerarchie."
    },
    "PYEONJAE": {
      "name": "Fortuna inattesa (偏財)",
      "body": "Energia di ricchezza di tipo ampio. Attiva e libera con ciò che ha, porta opportunità da fonti inaspettate."
    },
    "JEONGJAE": {
      "name": "Ricchezza stabile (正財)",
      "body": "Energia di ricchezza di tipo stabile, raccolta pezzo per pezzo. La tradizionale Saju la legge anche come posizione del coniuge per un uomo."
    },
    "PYEONGWAN": {
      "name": "Sfidante (偏官)",
      "body": "L'energia che ti tiene in tensione e dritto. Cresci forte sotto pressione, anche se in eccesso ti lascia sempre con la sensazione di essere inseguito."
    },
    "JEONGGWAN": {
      "name": "Autorità (正官)",
      "body": "L'energia dell'ordine che ti raddrizza. Mantiene il tuo nome e la tua posizione; la tradizionale Saju la legge anche come posizione del coniuge per una donna."
    },
    "PYEONIN": {
      "name": "Sostegno non convenzionale (偏印)",
      "body": "Energia che ti sostiene attraverso una strada insolita. Dona il potere di scavare in profondità, ma in eccesso il pensiero corre avanti alla mano."
    },
    "JEONGIN": {
      "name": "Nutrimento (正印)",
      "body": "L'energia che ti tiene e ti cresce. Dona apprendimento e qualcosa su cui fare affidamento; in eccesso, partire da solo arriva tardi."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Legno Yang (甲)",
      "trait": "Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi."
    },
    "乙": {
      "name": "Legno Yin (乙)",
      "trait": "Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza."
    },
    "丙": {
      "name": "Fuoco Yang (丙)",
      "trait": "Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale."
    },
    "丁": {
      "name": "Fuoco Yin (丁)",
      "trait": "La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini."
    },
    "戊": {
      "name": "Terra Yang (戊)",
      "trait": "Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa."
    },
    "己": {
      "name": "Terra Yin (己)",
      "trait": "Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri."
    },
    "庚": {
      "name": "Metallo Yang (庚)",
      "trait": "Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso."
    },
    "辛": {
      "name": "Metallo Yin (辛)",
      "trait": "Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare."
    },
    "壬": {
      "name": "Acqua Yang (壬)",
      "trait": "Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono."
    },
    "癸": {
      "name": "Acqua Yin (癸)",
      "trait": "Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Dice ciò che pensa anche al primo incontro.",
      "Cambia di rado un piano o una promessa una volta fissati.",
      "Rifiuta senza giri di parole, il che può suonare brusco."
    ],
    "乙": [
      "Aggira il confronto e prende un'altra strada.",
      "Sembra remissivo, eppure finisce dove voleva arrivare.",
      "Osserva l'ambiente prima di unirsi a un gruppo."
    ],
    "丙": [
      "Parla per primo con chi ha appena conosciuto.",
      "Ciò che gli piace e ciò che non gli piace si legge in faccia.",
      "Finisce al centro di una riunione senza nemmeno provarci."
    ],
    "丁": [
      "Silenzioso all'inizio, premuroso quando c'è confidenza.",
      "Preferisce una lunga chiacchierata con una o due persone a una folla.",
      "Ricorda un'osservazione detta di sfuggita e la riprende più tardi."
    ],
    "戊": [
      "Parla poco; alza di rado la voce anche quando le cose stringono.",
      "È quello che alla fine chiude la questione, mentre gli altri rimandano la decisione.",
      "Un no, una volta detto, resta no a lungo."
    ],
    "己": [
      "Ascolta più a lungo di quanto parli.",
      "Fatica a rifiutare, così il lavoro gli si accumula addosso.",
      "Ciò di cui si è occupato in silenzio emerge solo più tardi."
    ],
    "庚": [
      "Decide in fretta e lo dice subito.",
      "Non addolcisce le cose, il che può sembrare freddezza.",
      "Diventa visibilmente insofferente quando qualcosa va per le lunghe."
    ],
    "辛": [
      "Ha criteri chiari sui vestiti e sulle cose che sceglie.",
      "Non riesce a lasciar passare un lavoro fatto a metà senza farlo notare.",
      "Avaro di lodi, ma inequivocabile quando le fa sul serio."
    ],
    "壬": [
      "Si mescola con facilità a ogni tipo di persona.",
      "Tira fuori ciò che verrà dopo prima di ciò che ha davanti.",
      "Mal sopporta di restare legato a lungo a un solo posto."
    ],
    "癸": [
      "Parla poco ma ha letto la situazione con esattezza.",
      "È il primo ad accorgersi quando cambia l'atmosfera.",
      "Tiene per sé la propria interiorità, così serve tempo per conoscerlo."
    ]
  },
  "animalTraits": {
    "rat": "Nota in fretta e in fretta si assicura ciò che conta. Il primo a muoversi in una crisi.",
    "ox": "Sembra lento ma porta a termine. Ciò che prende in carico non lo molla.",
    "tiger": "Senza paura e in prima linea. Non riesce a lasciar correre un'ingiustizia.",
    "rabbit": "Gentile e perspicace. Sa aggirare invece di scontrarsi.",
    "dragon": "Di animo grande e con ideali alti. Di rado si accontenta dell'ordinario.",
    "snake": "Tiene per sé i propri pensieri e riflette a fondo. Giudica con precisione.",
    "horse": "Brillante e irrequieto. Sentirsi chiuso in un recinto è la cosa più dura.",
    "goat": "Caloroso e premuroso. Si tiene dentro a lungo le parole dure.",
    "monkey": "Pieno di risorse e rapido ad adattarsi. La ripetizione lo annoia.",
    "rooster": "Diligente ed esigente. Non riesce a lasciare nulla fuori posto.",
    "dog": "Leale fino in fondo una volta data la fiducia. Il tradimento lo ferisce in modo particolare.",
    "pig": "Generoso e schietto. Si fida facilmente, a volte a caro prezzo."
  },
  "result": {
    "title": "La tua lettura di Saju",
    "recalculate": "Ricomincia",
    "copyLink": "Copia il link del risultato",
    "copied": "Copiato",
    "missingInput": "Non è stato possibile leggere questo risultato. Inserisci di nuovo le date.",
    "partialTime": "Non è stata indicata l'ora di nascita, quindi il pilastro dell'ora è stato escluso. Aggiungerla rende la lettura più precisa.",
    "engineVersion": "Calcolato con",
    "disclaimer": "Questa è una lettura tradizionale di Saju offerta come riferimento. Non è una previsione scientifica né un verdetto sul tuo futuro."
  },
  "today": {
    "menu": "La fortuna di oggi",
    "title": "La fortuna di oggi",
    "pillarLabel": "Il pilastro di oggi",
    "scoreLabel": "Il punteggio di oggi",
    "grades": {
      "DAEGIL": {
        "name": "Molto propizio",
        "body": "L'energia di oggi incontra il tuo grafico nel suo angolo migliore. È un buon giorno per riprendere ciò che hai rimandato."
      },
      "GIL": {
        "name": "Propizio",
        "body": "Il flusso ti accompagna oggi. Ciò che fai normalmente va più facilmente del solito."
      },
      "PYEONG": {
        "name": "Neutro",
        "body": "Niente ti spinge e niente ti blocca. Fai come fai di solito e otterrai ciò che ottieni di solito."
      },
      "JUUI": {
        "name": "Fai attenzione",
        "body": "Parte dell'energia di oggi è in contrasto con il tuo grafico. È meglio dedicarsi a finire le cose piuttosto che iniziarle."
      },
      "JOSIM": {
        "name": "Fai attenzione",
        "body": "L'energia di oggi preme sul tuo grafico. Se una decisione può aspettare, lasciala aspettare."
      }
    },
    "categories": {
      "wealth": "Denaro",
      "love": "Amore",
      "career": "Lavoro",
      "health": "Salute"
    },
    "luckyTitle": "Tieni questi vicino oggi",
    "luckyElement": "Elemento",
    "luckyColor": "Colore",
    "luckyDirection": "Direzione",
    "luckyTime": "Ore",
    "luckyNumber": "Numeri",
    "luckyColors": {
      "TEAL": "verde acqua",
      "GREEN": "verde",
      "RED": "rosso",
      "ORANGE": "arancione",
      "YELLOW": "giallo",
      "OCHRE": "ocra",
      "WHITE": "bianco",
      "GOLD": "oro",
      "BLACK": "nero",
      "NAVY": "blu navy"
    },
    "luckyDirections": {
      "EAST": "Est",
      "SOUTH": "Sud",
      "CENTER": "Centro",
      "WEST": "Ovest",
      "NORTH": "Nord"
    },
    "basisTitle": "Da dove proviene questo punteggio",
    "factors": {
      "TODAY_IS_YONGSIN": "L'elemento di oggi è quello di cui il tuo grafico ha bisogno",
      "TODAY_GENERATES_YONGSIN": "L'elemento di oggi nutre quello di cui il tuo grafico ha bisogno",
      "TODAY_IS_GISIN": "L'elemento di oggi spinge ulteriormente il lato che è già pieno",
      "TODAY_CONTROLS_YONGSIN": "L'elemento di oggi tiene giù quello di cui il tuo grafico ha bisogno",
      "TODAY_GENERATES_SELF": "L'elemento di oggi supporta il tuo giorno maestro",
      "TODAY_SAME_ELEMENT": "L'elemento di oggi è lo stesso del tuo giorno maestro",
      "SELF_GENERATES_TODAY": "Il tuo giorno maestro fluisce nell'elemento di oggi",
      "TODAY_CONTROLS_SELF": "L'elemento di oggi tiene giù il tuo giorno maestro",
      "SELF_CONTROLS_TODAY": "Il tuo giorno maestro tiene giù l'elemento di oggi",
      "WEAK_HELPED": "Un giorno maestro debole riceve forza oggi",
      "STRONG_OVERFED": "Un giorno maestro forte diventa più pesante oggi",
      "STRONG_DRAINED": "Un giorno maestro forte viene alleggerito oggi",
      "WEAK_BURDENED": "Un giorno maestro debole riceve un peso maggiore oggi",
      "BRANCH_SAMHAP": "Il ramo di oggi forma un trigono completo con il tuo grafico",
      "BRANCH_BANHAP": "Il ramo di oggi forma un mezzo trigono con il tuo grafico",
      "BRANCH_YUKHAP": "Il ramo di oggi forma una sei armonie con il tuo grafico",
      "BRANCH_SAME": "Il ramo di oggi è lo stesso di uno nel tuo grafico",
      "BRANCH_NEUTRAL": "Il ramo di oggi non ha legami particolari con il tuo grafico",
      "BRANCH_WONJIN": "Il ramo di oggi è in quieto disaccordo con il tuo grafico",
      "BRANCH_CHUNG": "Il ramo di oggi è in conflitto con il tuo grafico"
    },
    "bookmarkHint": "Non memorizziamo la tua data di nascita, quindi deve essere inserita di nuovo ogni volta. **Aggiungi questo link ai segnalibri** e si aprirà la fortuna di quel giorno ogni giorno.",
    "disclaimer": "La fortuna di oggi trasforma la relazione tra il pilastro del giorno e il tuo grafico in un punteggio. È una nota su come trascorrere la giornata, non una profezia."
  },
  "ads": {
    "label": "Pubblicità"
  },
  "analyzing": {
    "title": "Costruendo il tuo grafico",
    "quotes": [
      "Il Saju non è una risposta fissa. È un linguaggio per comprendere te stesso.",
      "Conoscere ciò con cui sei nato e viverlo sono due cose diverse.",
      "Una posizione forte è una questione di utilizzo; una sottile, una questione di riempimento.",
      "Gli stessi otto caratteri fanno un giorno diverso a seconda di come li leggi.",
      "Meglio che aspettare un giorno buono è sapere come usare quello che hai.",
      "La posizione che le persone chiamano debolezza è di solito dove avviene la maggior parte della crescita.",
      "Alcune energie sono spinte dalla stagione; alcune devi crearle tu stesso.",
      "Ciò che conta più del punteggio è come lo leggi.",
      "L'odierna fortuna è il tempo di un giorno, non il clima in cui vivi.",
      "Conoscere il tuo Saju significa vedere te stesso, non guardare avanti."
    ],
    "watching": "Riproduzione dell'annuncio",
    "remaining": "Il risultato si apre tra {seconds} s"
  },
  "reportDetail": {
    "depthTitle": "Uno sguardo più ravvicinato al tuo grafico",
    "vitalityTitle": "Ciò che la stagione spinge avanti",
    "vitalityHint": "Le barre indicano quanto c'è di un elemento; questa tabella indica se il mese di nascita lo spinge in alto. La stessa quantità ha una forza diversa in wang rispetto a sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "al suo massimo"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "successivo in forza"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "a riposo dopo il suo turno"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "trattenuto, difficile da muovere"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "al minimo"
      }
    },
    "rawLabel": "Prima della stagione",
    "strengthLabel": "Dopo la stagione",
    "earthSeasonNote": "Nato in un mese di transizione (辰未戌丑), quindi la terra è anche considerata come wang.",
    "allyRatioLabel": "Rapporto alleato",
    "allyRatioHint": "La quota detenuta dalle stelle risorsa e compagno combinate. Sopra il 45% è forte, sotto il 35% è debole. Il numero è stampato così puoi vedere quanto era vicina la sentenza.",
    "stemGodsTitle": "Cosa rappresenta ogni pilastro per te",
    "stemGodsHint": "Misurato dal tuo giorno maestro, ogni stelo rimanente prende uno dei nomi dei dieci dei. Quali di essi sono più forti dice molto sul temperamento.",
    "pillarColumn": "Pilastro",
    "tenGodColumn": "Dieci dei",
    "meaningColumn": "Cosa significa",
    "yearOutlookTitle": "Prospettiva di quest'anno",
    "domainsTitle": "Quattro aree della vita",
    "factorsTitle": "Da dove proviene il punteggio di oggi",
    "factorsHint": "Lo schermo nomina i fattori; qui ciascuno è stampato con i punti che ha aggiunto o rimosso.",
    "deltaColumn": "Punti",
    "appendixTitle": "Come è stato costruito questo grafico",
    "timeCorrectionLabel": "Ora di nascita",
    "timeCorrectionApplied": "Corretta all'ora solare vera e letta come {time}.",
    "timeCorrectionNone": "Nessun orario di nascita è stato fornito, quindi il pilastro dell'ora è stato omesso.",
    "timeCorrectionDateShift": "La correzione ha spostato la data a {date}, quindi è stato usato il pilastro di quel giorno.",
    "calendarLabel": "Data da cui è stato tratto il tema",
    "solarLabel": "Solare",
    "lunarLabel": "Lunare",
    "lunarUnavailable": "Questa data non è nella tabella dell'almanacco, quindi non è mostrata alcuna data lunare."
  },
  "report": {
    "title": "Conserva la tua lettura della vita come PDF",
    "body": "Trasformiamo questa lettura in un PDF — il tuo grafico natale, il peso dei cinque elementi, la forza del tuo giorno maestro e ciò di cui ha bisogno ora, e la fortuna di oggi, tutto su una pagina.",
    "buyButton": "Paga {price} e scarica",
    "preparing": "Non ancora disponibile",
    "ordering": "Creazione dell'ordine…",
    "paying": "Elaborazione del pagamento…",
    "issuing": "Preparazione del report…",
    "done": "Scaricato. Usa il pulsante qui sotto per scaricarlo di nuovo.",
    "failed": "Il pagamento o il download non è riuscito. Riprova tra un momento.",
    "retry": "Scarica di nuovo",
    "contents": [
      "Il tuo giorno maestro e temperamento — un riepilogo, punti di forza e precauzioni",
      "Il tuo grafico natale — gli otto caratteri dei quattro pilastri",
      "Il peso dei cinque elementi, il più spesso e il più sottile",
      "La forza del tuo giorno maestro, e l'energia di cui ha bisogno ora",
      "La fortuna di oggi e i quattro ambiti (denaro, amore, lavoro, salute)"
    ],
    "consentLabel": "Ho compreso che si tratta di contenuto digitale fornito immediatamente al momento del pagamento e che **il recesso per semplice ripensamento è limitato una volta completato il download**.",
    "consentRequired": "Conferma le condizioni di recesso prima di pagare.",
    "productInfoTitle": "Informazioni sul prodotto",
    "productInfo": [
      [
        "Fornitore",
        "{brand}"
      ],
      [
        "Formato",
        "Un documento PDF (5 pagine A4), scaricato sullo schermo subito dopo il pagamento."
      ],
      [
        "Requisiti",
        "Qualsiasi dispositivo in grado di aprire un PDF. Non servono installazioni né account."
      ],
      [
        "Durata d'uso",
        "Nessun limite. Il file scaricato resta tuo."
      ],
      [
        "Nuovo download",
        "Fino a cinque volte per lo stesso ordine. Non ne conserviamo alcuna copia, quindi non può essere rigenerato una volta usciti dalla schermata del risultato."
      ],
      [
        "Recesso",
        "Rimborso totale prima che il download inizi. A download completato, il recesso per ripensamento è limitato (art. 17, comma 2, della legge coreana sul commercio elettronico)."
      ],
      [
        "Costi di reso",
        "Nessuno: è contenuto digitale, non viene spedito nulla."
      ]
    ],
    "refundContact": "Per rimborsi o domande, contatta il servizio clienti o l'indirizzo email indicato qui sotto. Se il documento non è stato prodotto, o se l'importo addebitato differisce dall'ordine, rimborsiamo per intero.",
    "pdfLanguageNotice": "Il PDF viene prodotto nella stessa lingua di questa schermata."
  },
  "premiumReport": {
    "title": "Conserva la tua lettura premium come PDF",
    "body": "Tutto nella lettura della vita, più **i numeri dietro di essa che non appaiono mai sullo schermo** — il rapporto degli alleati che ha deciso se forte o debole, quanto il mese di nascita ha spinto ogni elemento verso l'alto, e la correzione del tempo solare applicata alla tua ora di nascita.",
    "buyButton": "Paga {price} e scarica",
    "preparing": "Non disponibile ancora",
    "ordering": "Creando il tuo ordine…",
    "paying": "Elaborando il pagamento…",
    "issuing": "Preparando il tuo rapporto…",
    "done": "Scaricato. Usa il pulsante qui sotto per scaricarlo di nuovo.",
    "failed": "Il pagamento o il download non sono riusciti. Riprova tra un momento.",
    "retry": "Scarica di nuovo",
    "contents": [
      "Il tuo giorno maestro e temperamento — un riepilogo, punti di forza e avvertenze",
      "Il tuo grafico natale — gli otto caratteri dei quattro pilastri",
      "I cinque elementi, la forza del tuo giorno maestro e ciò di cui ha bisogno",
      "La fortuna di oggi e i quattro domini (denaro, amore, lavoro, salute)",
      "Cosa rappresenta ogni pilastro per te — i dieci dei letti dal tuo grafico",
      "Posizione stagionale e rapporto degli alleati — i numeri dietro il verdetto",
      "Prospettive di quest'anno, fattori di punteggio di oggi e la correzione temporale"
    ],
    "consentLabel": "Comprendo che questo è contenuto digitale fornito immediatamente al pagamento, e che **il recesso per un semplice cambio di idea è limitato una volta completato il download**.",
    "consentRequired": "Si prega di confermare i termini di recesso prima di pagare.",
    "productInfoTitle": "Informazioni sul prodotto",
    "productInfo": [
      [
        "Fornitore",
        "{brand}"
      ],
      [
        "Formato",
        "Un documento PDF (7 pagine A4), scaricato sullo schermo subito dopo il pagamento."
      ],
      [
        "Requisiti",
        "Qualsiasi dispositivo che apre un PDF. Nessuna installazione o account necessario."
      ],
      [
        "Termine di utilizzo",
        "Nessun limite. Conservi il file che scarica."
      ],
      [
        "Riscatto",
        "Fino a cinque volte con lo stesso ordine. Non conserviamo copie, quindi non può essere prodotto di nuovo una volta che lasci la schermata dei risultati."
      ],
      [
        "Recesso",
        "Rimborso completo prima dell'inizio del download. Dopo il completamento, il recesso per un cambio di idea è limitato (Art. 17(2), Legge sul commercio elettronico coreano)."
      ],
      [
        "Costi di restituzione",
        "Nessuno — contenuto digitale, nulla viene spedito."
      ]
    ],
    "refundContact": "Per rimborsi o domande, contatta il centro assistenza clienti o l'email qui sotto. Se il documento non può essere prodotto, o l'importo addebitato differisce dall'ordine, rimborseremo completamente.",
    "pdfLanguageNotice": "Il PDF è prodotto nella stessa lingua di questo schermo."
  },
  "fallbackReport": {
    "summary": "Un {dayMaster} giorno maestro nato nell'energia di {season}. In tutto il grafico, {strongest} è il più spesso e {scarcest} è il più sottile. Tutto ciò che segue deriva da questi otto caratteri — ogni numero e ogni pilastro qui è calcolato, non scelto.",
    "personality": "Il tuo giorno maestro è {dayMaster} — energia {element} — e questo grafico si legge come {strengthName}. Quale lato è più spesso, ciò che supporta il giorno maestro o ciò che ne trae vantaggio, è ciò che forma il carattere, e nella vita quotidiana si manifesta in questo modo.",
    "cautions": {
      "STRONG": [
        "Spingi così forte che spesso noti l'inclinazione solo dopo che è successo.",
        "Anche dove l'aiuto è disponibile, finisci per gestirlo da solo, il che rende il lavoro più grande.",
        "Le cose si sistemano quando lasci spazio a ciò che sottrae l'eccesso."
      ],
      "BALANCED": [
        "Niente ti inclina da nessuna parte, quindi una decisione rinviata rimane semplicemente rinviata.",
        "Ti adatti bene alla situazione, il che può offuscare dove si trova la tua linea.",
        "Orientarsi verso ciò che è più sottile in questo momento ti dà una direzione da mantenere."
      ],
      "WEAK": [
        "Resistere da solo ti consuma prima di quanto ti aspetti.",
        "Senza nulla dietro di te, le decisioni scivolano e il momento passa.",
        "Tenere persone di supporto vicine non è una debolezza in questo grafico — è il metodo."
      ]
    },
    "scarcityCaution": "L'elemento più sottile in questo momento è {scarcest}. Qualunque cosa quell'elemento governi è dove sei più lento ad agire.",
    "elementBalance": "Per forza, {strongest} guida con {strongestPct}% e {scarcest} segue con {scarcestPct}%. Il mese di nascita si trova in {season}, il che spinge quell'elemento ancora una volta — la stessa quantità ha una forza diversa a seconda che la stagione la supporti o meno. Ciò di cui hai bisogno ora è {favorable}, e le cose si semplificano dove quell'elemento viene riempito.",
    "todayHeadline": "Oggi è {grade}",
    "todayMessage": "Oggi segna {score}, classificato come {gradeName}. {gradeBody} Il pilastro del giorno è {pillar}, e il fattore che ha mosso di più quel punteggio è stato “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Una buona giornata per riprendere il messaggio o l'organizzazione che hai rimandato — anche se è meglio non cercare di finire tutto oggi.",
      "MID": "Fai come fai di solito e otterrai ciò che ottieni di solito. Piuttosto che iniziare qualcosa di nuovo, sposta un passo avanti qualcosa che hai già in mano.",
      "LOW": "Parte di oggi va contro il grafico. È meglio dedicarsi a finire e controllare piuttosto che iniziare."
    },
    "luckyNote": "L'elemento fortunato di oggi è {element}. La gamma dei {colors}, il lato {direction}, e le ore attorno a {time} sono dove quell'energia è più densa.",
    "domains": {
      "wealth": "Leggi dal tema natale, il denaro arriva a {score}. Pesa ciò che guadagni insieme alla forza di sostenerlo.",
      "love": "Leggi dal tema natale, l'affetto arriva a {score}. Pesa la stella del coniuge insieme alla forma del posto in cui si trova.",
      "career": "Leggi dal tema natale, il lavoro arriva a {score}. Pesa ciò che assumi insieme a ciò che offri.",
      "health": "Leggi dal tema natale, la salute arriva a {score}. Pesa l'equilibrio con cui sei nato insieme a ciò che collide al suo interno."
    },
    "yearOutlook": "Il pilastro di quest'anno è {pillar}, portando {element}. {relation} Questa lettura considera solo come il pilastro dell'anno incontra ciò di cui hai bisogno ora; non scompone l'anno mese per mese.",
    "yearRelations": {
      "YONGSIN": "L'elemento di cui hai bisogno arriva direttamente quest'anno. Un momento adatto per tirare fuori ciò che avevi messo da parte.",
      "GENERATES": "Quest'anno nutre l'elemento di cui hai bisogno, quindi l'attuale diventa più gentile — non immediatamente, ma costantemente.",
      "GISIN": "Quest'anno spinge ancora una volta nella direzione in cui ti stavi già muovendo. È meglio dedicarsi a chiudere ciò che hai in mano piuttosto che aprire qualcosa di nuovo.",
      "CONTROLS": "Qualcosa quest'anno preme sull'elemento di cui hai bisogno, quindi le decisioni arrivano più lentamente. Impostare le tue scadenze aiuta.",
      "NEUTRAL": "Quest'anno non si scontra né nutre ciò di cui hai bisogno. Mantenere la posizione che hai è il miglior scambio."
    },
    "disclaimer": "Riferimento tradizionale di myeongri, non una previsione scientifica o una dichiarazione su ciò che deve accadere.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Compagno è spesso presente. Costruisci con le tue mani piuttosto che prendere in prestito, il che ti rende forte nel portare a termine un compito. Ma accettare aiuto è una competenza, e considerarlo una debolezza ti lascia a portare tutto da solo — e a scontrarti, per le condivisioni, con chiunque ti stia accanto. Dove il lavoro è condiviso, offrire la tua mano per primo si rivela essere la via più veloce.",
        "absent": "Compagno è assente. Muoversi con gli altri ti si addice meglio che mantenere la tua posizione. Esiti a lungo dove una decisione è solo tua, e prendi velocità una volta che qualcuno è con te. Quando una posizione è tua da mantenere, vale la pena esercitarsi a spingere."
      },
      "GEOPJAE": {
        "thick": "Rob Wealth è spesso presente. Ti muovi per primo dove gli altri esitano. Quella forza non si traduce facilmente nel mantenere, quindi ciò che guadagni non rimane a lungo in mano. Decidere in anticipo dove va il denaro non è parsimonia in questo grafico — è metodo.",
        "absent": "Rob Wealth è assente. Raramente forzi qualcosa e ti allontani dalle competizioni. Perdi poco, ma sei un battito in ritardo quando qualcosa deve essere spinto con forza. Dove le poste sono reali, impostare la tua scadenza aiuta."
      },
      "SIKSIN": {
        "thick": "Eating God è spesso presente. Ciò che è dentro esce facilmente, quindi creare, crescere e nutrire è terreno confortevole. Ti trovi bene in lavori che vengono svolti lentamente e a lungo, e i risultati arrivano tardi ma costantemente. Quando il comfort si allunga, però, ti stabilisci piuttosto che espanderti.",
        "absent": "Eating God è assente. Il canale dall'interno all'esterno è sottile: il pensiero è presente, l'espressione arriva in ritardo. Aspettare che tutto sia pronto ritarda l'inizio. Mettere qualcosa fuori incompleto non è una perdita in questo grafico."
      },
      "SANGGWAN": {
        "thick": "L'Ufficiale Ferito è forte. Vedi ciò che è fuori posto in un quadro fisso prima di chiunque altro e hai le parole per nominarlo. Brilli dove le cose vengono create e collidi dove le cose devono essere mantenute. Come viene detto il giusto è importante quanto vederlo.",
        "absent": "L'Ufficiale Ferito è assente. Cerchi il modo attraverso un quadro piuttosto che scuoterlo. Raramente ti scontri con le persone, ma lasci passare le cose dove dovrebbero cambiare, e questo si trasforma in frustrazione. È meglio non rimandare la parola che deve essere detta."
      },
      "PYEONJAE": {
        "thick": "La Ricchezza Indiretta è forte. Tieni una mano in diversi posti e cogli opportunità ampie, quindi le cose si aprono in angoli inaspettati. Ciò che è diffuso deve anche essere curato, però, e la cura ti interessa meno — quindi continui a fallire nel raccogliere ciò che hai aperto. Chiudere uno prima di aprire il successivo è l'ordine di cui ha bisogno questo grafico.",
        "absent": "La Ricchezza Indiretta è assente. Prendi la cosa sicura su terreno familiare piuttosto che allargarti. C'è meno che ti scuota, e osservi le grandi opportunità passare altrettanto spesso. Allargare il tuo raggio di azione di un palmo alla volta aiuta."
      },
      "JEONGJAE": {
        "thick": "La Ricchezza Diretta è forte. Conti ciò che entra e ciò che esce, e costruisci — quindi il terreno sotto di te si solidifica nel tempo. Raggiungere solo ciò che è certo ti fa arrivare in ritardo all'opportunità, e l'eccesso di parsimonia rende la tua mano pesante dove dovrebbe aprirsi. Decidere in anticipo a cosa serve il denaro aiuta.",
        "absent": "La Ricchezza Diretta è assente. Il lato dell'accumulo costante è sottile, quindi gestire ciò che arriva continua a essere rimandato. Guadagnare e mantenere sono abilità diverse; questo grafico deve imparare la seconda separatamente. Regole che muovono denaro senza che tu debba decidere ogni volta ti si addicono bene."
      },
      "PYEONGWAN": {
        "thick": "L'Ufficiale Indiretto è forte. La pressione fa emergere la tua forza, e porti responsabilità che altri trovano pesanti. Quando la tensione non si allenta mai, però, si indurisce in una sensazione di essere inseguiti e il riposo smette di sembrare riposo. Stabilire un momento per fermarsi non è inattività in questo grafico.",
        "absent": "L'Ufficiale Indiretto è assente. Poco ti preme, il che è facile per la mente, ma il potere di mantenerti eretto in una crisi è sottile. Fai molto meglio quando una scadenza o una promessa è fissata dall'esterno."
      },
      "JEONGGWAN": {
        "thick": "L'Ufficiale Diretto è forte. La tua posizione e le linee che mantieni sono chiare, e mantenerle è da dove deriva la tua stabilità — costruisci fiducia all'interno dei sistemi. Dove le regole vacillano sei lento a giudicare, e dove il tavolo è tuo da impostare ti senti costretto.",
        "absent": "L'Ufficiale Diretto è assente. Un modo creato da te si adatta meglio di un posto assegnato dall'esterno. Questa è libertà, ma lo standard oscilla facilmente; scrivere le tue regole come se fossero politiche aiuta."
      },
      "PYEONIN": {
        "thick": "La Risorsa Indiretta è forte. Segui la strada che altri saltano e costruisci una profondità tutta tua. L'apprendimento e la ponderazione sono forti, ma il pensiero supera la mano e puoi essere stanco prima di iniziare. Muoversi a metà preparazione si adatta a questo grafico.",
        "absent": "La Risorsa Indiretta è assente. Impari urtando le cose piuttosto che scavando. Non sei lento ad apprendere, ma lo studio tenuto da solo per lunghi periodi non ti si addice. Chiedere alle persone e imparare sul campo è più veloce."
      },
      "JEONGIN": {
        "thick": "La Risorsa Diretta è spessa. Ciò che ti sostiene è abbondante, quindi l'apprendimento e un luogo dove appoggiarsi non mancano mai. Questa stabilità rende difficile fare passi avanti, e la preparazione diventa la ragione per cui un inizio è rinviato. Tenere un posto dove ciò che hai ricevuto ritorna utile.",
        "absent": "La Risorsa Diretta è assente. Hai creato il tuo sostegno, quindi stare in piedi da solo è cresciuto presto. Chiedere aiuto è però poco familiare, e ti reggi da solo anche quando non è necessario. In questo grafico, chiedere è molto prezioso."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Quanta ricchezza (財星) porta il grafico — lo spessore di ciò che gestisci e raccogli.",
      "WEALTH_STRONG_BODY": "Il giorno maestro è pieno, quindi c'è forza per portare ricchezza.",
      "WEALTH_WEAK_BODY": "Il giorno maestro è sottile, quindi la ricchezza è difficile da portare anche dove esiste.",
      "WEALTH_YONGSIN": "Ciò di cui hai bisogno ora è lo stesso elemento delle stelle della ricchezza, affinché quel terreno venga più facilmente.",
      "LOVE_SPOUSE_STAR": "Quanta stella del coniuge porta il grafico — ricchezza diretta per gli uomini, ufficiale diretto per le donne.",
      "LOVE_SPOUSE_PALACE": "La stella del coniuge si trova all'interno del tuo ramo del giorno, il palazzo del coniuge, quindi il posto è occupato.",
      "LOVE_PALACE_CHUNG": "Il palazzo del coniuge si scontra con un altro ramo, quindi quel posto è instabile.",
      "LOVE_GENDER_UNKNOWN": "Nessun genere è stato inserito, quindi la stella del coniuge non è stata conteggiata. Il valore si divide tra stelle della ricchezza e ufficiali in base al genere, e non ne scegliamo uno arbitrariamente.",
      "CAREER_OFFICER": "Le stelle ufficiali (正官·偏官) nel grafico — lo spessore di ciò che assumi e mantieni.",
      "CAREER_OUTPUT": "Le stelle di output (食神·傷官) nel grafico — lo spessore di ciò che produci ed esprimi.",
      "CAREER_STRONG_BODY": "Il giorno maestro è pieno, quindi utilizza le stelle dell'ufficiale piuttosto che esserne schiacciato.",
      "HEALTH_BALANCE": "Quanto sono equilibrati i cinque elementi — più pende da un lato, maggiore è il peso su ciò che quell'elemento governa.",
      "HEALTH_CHUNG": "Quante coppie di rami si scontrano all'interno del grafico.",
      "HEALTH_EXTREME_BODY": "Il giorno maestro pende fortemente da un lato, il che è di per sé un peso. Un giorno maestro equilibrato non perde nulla qui."
    },
    "yongsinDepth": {
      "STRONG": "Gli elementi che supportano il tuo giorno maestro sono pieni. Questo ti dà una spinta personale, ma tende facilmente a inclinarsi da un lato, quindi ciò di cui hai bisogno ora non è ulteriore supporto — è qualcosa che possa rimuovere l'eccesso. {favorable} svolge questo compito. Dove quell'elemento arriva — mettere fuori, prendere su, raccogliere — è dove ti stabilisci.",
      "BALANCED": "Ciò che supporta il tuo giorno maestro e ciò che ne attinge sono abbastanza equilibrati. Troppo vicini per essere definiti in un modo o nell'altro, quindi qui leggiamo ciò che è più sottile come ciò di cui hai bisogno: {favorable}. Un grafico che non pende si adatta bene ma sfoca la propria linea, quindi orientarsi verso il posto sottile ti dà una direzione da mantenere.",
      "WEAK": "Gli elementi che supportano il tuo giorno maestro sono sottili. Prendi in prestito forza da ciò che ti circonda bene, ma ti consumi a resistere da solo, quindi ciò di cui hai bisogno ora è qualcosa che ti sostenga e ti riempia. {favorable} svolge questo compito. Tenere vicino le cose di supporto non è una debolezza in questo grafico — è il metodo."
    }
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
  },
  "animals": {
    "rat": "Topo",
    "ox": "Bue",
    "tiger": "Tigre",
    "rabbit": "Coniglio",
    "dragon": "Drago",
    "snake": "Serpente",
    "horse": "Cavallo",
    "goat": "Capra",
    "monkey": "Scimmia",
    "rooster": "Gallo",
    "dog": "Cane",
    "pig": "Maiale"
  },
  "elements": {
    "WOOD": "Legno",
    "FIRE": "Fuoco",
    "EARTH": "Terra",
    "METAL": "Metallo",
    "WATER": "Acqua"
  }
};
