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
  "moreLanguages": "Di più",
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
    "privacyTitle": "Niente di ciò che inserisci viene memorizzato",
    "privacyBody": "Le date di nascita vengono utilizzate solo mentre il risultato viene calcolato e non vengono mai registrate. Non è necessario alcun account. Niente di ciò che è contenuto in un link di risultato viene inviato al server.",
    "disclaimer": "Questo è un lettura tradizionale di Saju offerta per riferimento. Non è una previsione scientifica o un verdetto sul futuro di qualcuno."
  },
  "form": {
    "title": "La tua data di nascita",
    "description": "Conoscere l'ora di nascita rende la lettura più precisa, ma non è obbligatorio.",
    "meLegend": "Informazioni su di te",
    "nickname": "Come chiamarli",
    "nicknamePlaceholder": "es. Io",
    "nicknameHint": "Mostrato solo nella schermata dei risultati. Non viene utilizzato nel calcolo.",
    "gender": "Genere",
    "male": "Maschio",
    "female": "Femmina",
    "genderUnspecified": "Preferisco non dirlo",
    "genderHint": "La lettura tradizionale del Saju considera le posizioni del coniuge e dei figli in modo diverso a seconda del genere. Se salti questo, quei fattori verranno esclusi dal calcolo.",
    "birthplace": "Luogo di nascita",
    "birthplaceHint": "Il pilastro dell'ora viene calcolato dal tempo solare reale nel tuo luogo di nascita. Se il tuo luogo di nascita non è elencato, scegli la città più vicina.\nAll'interno della Corea continentale, la differenza tra le città è inferiore a due minuti. Anche l'ora legale e i cambiamenti storici dei fusi orari sono riflessi.",
    "calendar": "Calendario",
    "solar": "Solare",
    "lunar": "Lunare",
    "leapMonth": "Mese bisestile",
    "birthDate": "Data di nascita",
    "year": "Anno",
    "month": "Mese",
    "day": "Giorno",
    "birthTime": "Ora di nascita",
    "unknownTime": "Non conosco l'ora",
    "hour": "Ora",
    "minute": "Minuto",
    "submit": "Guarda l'annuncio e vedi il mio Saju",
    "submitNoAd": "Vedi il mio Saju",
    "submitting": "Calcolando…",
    "errorInvalidDate": "Controlla la data di nascita. Per le date lunari, controlla anche se cade in un mese bisestile.",
    "errorGeneric": "Il calcolo è fallito. Riprova tra un momento."
  },
  "reading": {
    "chartTitle": "Il tuo tema natale",
    "chartHint": "Il Saju rappresenta l'anno, il mese, il giorno e l'ora di nascita come due caratteri ciascuno. Tutto ciò che segue è interpretato a partire da questi otto caratteri.",
    "pillarYear": "Anno",
    "pillarMonth": "Mese",
    "pillarDay": "Giorno",
    "pillarHour": "Ora",
    "pillarHourUnknown": "Orario di nascita non fornito",
    "dayMasterLabel": "Giorno maestro",
    "animalLabel": "Zodiaco",
    "seasonLabel": "Stagione di nascita",
    "elementsTitle": "Forza elementale",
    "strongest": "Più forte",
    "scarcest": "Più scarso",
    "strengthTitle": "Cosa hai ricevuto alla nascita",
    "cautionTitle": "Cosa tenere d'occhio",
    "bodyStrengthTitle": "Forza del giorno maestro",
    "favorableLabel": "Cosa ti serve ora"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Maestro del giorno forte",
      "body": "Gli elementi che supportano il tuo maestro del giorno sono abbondanti. Questo ti dà una spinta personale, ma tende anche a inclinarsi facilmente da un lato — tendi a stabilizzarti quando qualcosa sottrae l'eccesso."
    },
    "BALANCED": {
      "name": "Maestro del giorno equilibrato",
      "body": "Ciò che supporta il tuo maestro del giorno e ciò che ne trae si avvicinano a un equilibrio. Troppo vicino per decidere in un senso o nell'altro, quindi qui leggiamo ciò che è più sottile come ciò di cui hai bisogno."
    },
    "WEAK": {
      "name": "Maestro del giorno debole",
      "body": "Gli elementi che supportano il tuo maestro del giorno sono scarsi. Prendi in prestito forza da ciò che ti circonda, ma ti consumi a resistere da solo — trovi la tua forza quando qualcosa ti sostiene."
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
      "name": "Disturbatore (傷官)",
      "body": "L'energia che destabilizza un quadro fisso. Dona talento e un bordo affilato, ma in eccesso collide con regole e gerarchie."
    },
    "PYEONJAE": {
      "name": "Colpo di fortuna (偏財)",
      "body": "Energia di ricchezza di tipo ampio. Attiva e libera con ciò che ha, porta opportunità da fonti inaspettate."
    },
    "JEONGJAE": {
      "name": "Ricchezza stabile (正財)",
      "body": "Energia di ricchezza di tipo stabile, raccolta pezzo per pezzo. La tradizionale Saju la legge anche come posizione del coniuge per un uomo."
    },
    "PYEONGWAN": {
      "name": "Sfida (偏官)",
      "body": "L'energia che ti tiene in tensione e dritto. Cresci forte sotto pressione, anche se in eccesso ti lascia sempre con la sensazione di essere inseguito."
    },
    "JEONGGWAN": {
      "name": "Autorità (正官)",
      "body": "L'energia dell'ordine che ti raddrizza. Mantiene il tuo nome e la tua posizione; la tradizionale Saju la legge anche come posizione del coniuge per una donna."
    },
    "PYEONIN": {
      "name": "Supporto non convenzionale (偏印)",
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
      "trait": "Un grande albero che cresce dritto. Una volta che la direzione è impostata, non vacilla e preferisce resistere piuttosto che piegarsi."
    },
    "乙": {
      "name": "Legno Yin (乙)",
      "trait": "Una vite — erba flessibile. Si piega alle circostanze per continuare a muoversi e non si spezza."
    },
    "丙": {
      "name": "Fuoco Yang (丙)",
      "trait": "Il sole di mezzogiorno. I sentimenti si mostrano chiaramente, la stanza si illumina e avanzare viene naturale."
    },
    "丁": {
      "name": "Fuoco Yin (丁)",
      "trait": "Luce di candela. Brucia silenziosamente e a lungo, e riscalda prima coloro che sono più vicini."
    },
    "戊": {
      "name": "Terra Yang (戊)",
      "trait": "Terreno aperto e montagne. Difficile da scuotere e facile su cui appoggiarsi, anche se lento a cambiare una decisione una volta presa."
    },
    "己": {
      "name": "Terra Yin (己)",
      "trait": "Terreno agricolo. Accoglie tutto ciò che arriva e lo fa crescere, tendendo piuttosto che esibire."
    },
    "庚": {
      "name": "Metallo Yang (庚)",
      "trait": "Ferro grezzo. Decisivo e netto, con poca pazienza per le cose lasciate in sospeso."
    },
    "辛": {
      "name": "Metallo Yin (辛)",
      "trait": "Una gemma tagliata. Gusto fine e standard elevati; è difficile lasciar passare la trascuratezza."
    },
    "壬": {
      "name": "Acqua Yang (壬)",
      "trait": "Fiume e mare. Ampio nella visione, con un occhio su come le cose stanno fluendo."
    },
    "癸": {
      "name": "Acqua Yin (癸)",
      "trait": "Rugiada e pioggia. Si insinua silenziosamente e legge l'umore prima delle parole."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Dice ciò che pensa anche al primo incontro.",
      "Raramente cambia un piano o una promessa una volta stabilita.",
      "Rifiuta le cose in modo diretto, il che può sembrare brusco."
    ],
    "乙": [
      "Evita il confronto e prende un'altra strada.",
      "Sembra morbido, ma alla fine arriva dove intendeva andare.",
      "Legge l'atmosfera prima di unirsi a un gruppo."
    ],
    "丙": [
      "Parla per primo con le persone che ha appena incontrato.",
      "Ciò che gli piace e non gli piace si vede sul suo volto.",
      "Finisce al centro di un raduno senza nemmeno provarci."
    ],
    "丁": [
      "Silenzioso all'inizio, attento una volta che ci si avvicina.",
      "Preferisce una lunga conversazione con uno o due piuttosto che con una folla.",
      "Ricorda un commento casuale e lo tira fuori più tardi."
    ],
    "戊": [
      "Parla poco; la sua voce raramente si alza anche quando le cose sono urgenti.",
      "Colui che risolve alla fine mentre gli altri rimandano la decisione.",
      "Un no, una volta dato, rimane no a lungo."
    ],
    "己": [
      "Ascolta più a lungo di quanto parli.",
      "Fa fatica a rifiutare, quindi il lavoro si accumula su di loro.",
      "Ciò di cui si è occupato silenziosamente riemerge solo più tardi."
    ],
    "庚": [
      "Decide in fretta e lo dice sul posto.",
      "Non addolcisce le cose, il che può sembrare freddo.",
      "Visibilmente irrequieto quando qualcosa si protrae."
    ],
    "辛": [
      "Ha standard chiari riguardo ai vestiti e alle cose che sceglie.",
      "Non può lasciar passare un lavoro fatto a metà senza farlo notare.",
      "È parsimonioso con i complimenti, ma deciso una volta che lo intende."
    ],
    "壬": [
      "Si mescola facilmente con tutti i tipi di persone.",
      "Tira fuori ciò che verrà dopo prima di ciò che è davanti a loro.",
      "Si irrita a rimanere legato a un posto per lungo tempo."
    ],
    "癸": [
      "Parla poco ma ha letto la situazione esattamente.",
      "Primo a notare quando l'umore cambia.",
      "Tiene la sua vita interiore vicina, quindi ci vuole tempo per conoscerlo."
    ]
  },
  "animalTraits": {
    "rat": "Pronto a notare e veloce a mettere in sicurezza ciò che conta. Primo a muoversi in una crisi.",
    "ox": "Sembra lento ma porta a termine le cose. Ciò che prende, non lo abbandona.",
    "tiger": "Senza paura e in prima linea. Non può tollerare l'ingiustizia.",
    "rabbit": "Gentile e perspicace. Sa come girare piuttosto che scontrarsi.",
    "dragon": "Di grande cuore con ideali elevati. Raramente è soddisfatto dell'ordinario.",
    "snake": "Tiene per sé i propri pensieri e riflette a fondo. Giudica con precisione.",
    "horse": "Luminoso e irrequieto. Essere rinchiuso è la cosa più difficile.",
    "goat": "Caloroso e premuroso. Tiene parole dure per molto tempo.",
    "monkey": "Ingegnoso e veloce ad adattarsi. Si annoia con la ripetizione.",
    "rooster": "Diligente e preciso. Non può lasciare nulla fuori posto.",
    "dog": "Leale fino alla fine una volta che la fiducia è data. Il tradimento fa particolarmente male.",
    "pig": "Generoso e diretto. Si fida facilmente, a volte a costo di un danno."
  },
  "result": {
    "title": "La tua lettura di Saju",
    "recalculate": "Ricomincia",
    "copyLink": "Copia il link del risultato",
    "copied": "Copiato",
    "missingInput": "Questo risultato non può essere letto. Per favore, inserisci di nuovo le date.",
    "partialTime": "Non è stato fornito alcun orario di nascita, quindi il pilastro dell'ora è stato omesso. Aggiungerlo rende la lettura più precisa.",
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
    "watching": "Guardando l'annuncio",
    "remaining": "Il tuo risultato si apre tra {seconds}s"
  },
  "reportDetail": {
    "depthTitle": "Uno sguardo più ravvicinato al tuo grafico",
    "vitalityTitle": "Cosa spinge in avanti la stagione",
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
        "body": "in riposo dopo il suo turno"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "trattenuto, difficile da muovere"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "al suo minimo"
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
    "factorsTitle": "Da dove proviene il punteggio di oggi",
    "factorsHint": "Lo schermo nomina i fattori; qui ciascuno è stampato con i punti che ha aggiunto o rimosso.",
    "deltaColumn": "Punti",
    "appendixTitle": "Come è stato costruito questo grafico",
    "timeCorrectionLabel": "Ora di nascita",
    "timeCorrectionApplied": "Corretto all'ora solare vera e letto come {time}.",
    "timeCorrectionNone": "Nessun orario di nascita è stato fornito, quindi il pilastro dell'ora è stato omesso.",
    "timeCorrectionDateShift": "La correzione ha spostato la data a {date}, quindi è stato usato il pilastro di quel giorno.",
    "calendarLabel": "Data da cui è stato estratto il grafico",
    "solarLabel": "Solare",
    "lunarLabel": "Lunare",
    "lunarUnavailable": "Questa data non è nella tabella dell'almanacco, quindi non è mostrata alcuna data lunare."
  },
  "report": {
    "title": "Conserva la tua lettura della vita come PDF",
    "body": "Trasformiamo questa lettura in un PDF — il tuo grafico natale, il peso dei cinque elementi, la forza del tuo giorno maestro e ciò di cui ha bisogno ora, e la fortuna di oggi, tutto su una pagina.",
    "buyButton": "Paga {price} e scarica",
    "preparing": "Non disponibile ancora",
    "ordering": "Creando il tuo ordine…",
    "paying": "Elaborazione del pagamento…",
    "issuing": "Preparando il tuo report…",
    "done": "Scaricato. Usa il pulsante qui sotto per scaricarlo di nuovo.",
    "failed": "Il pagamento o il download non sono riusciti. Riprova tra un momento.",
    "retry": "Scarica di nuovo",
    "contents": [
      "Il tuo giorno maestro e temperamento — un riepilogo, punti di forza e precauzioni",
      "Il tuo grafico natale — gli otto caratteri dei quattro pilastri",
      "Il peso dei cinque elementi, il più spesso e il più sottile",
      "La forza del tuo giorno maestro, e l'energia di cui ha bisogno ora",
      "La fortuna di oggi e i quattro ambiti (denaro, amore, lavoro, salute)"
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
        "Un documento PDF (5 pagine A4), scaricato sullo schermo subito dopo il pagamento."
      ],
      [
        "Requisiti",
        "Qualsiasi dispositivo che apre un PDF. Nessuna installazione o account necessario."
      ],
      [
        "Termine di utilizzo",
        "Nessun limite. Puoi tenere il file che scarichi."
      ],
      [
        "Riscatto",
        "Fino a cinque volte con lo stesso ordine. Non conserviamo copie, quindi non può essere prodotto di nuovo una volta che lasci la schermata dei risultati."
      ],
      [
        "Recesso",
        "Rimborso completo prima dell'inizio del download. Dopo il completamento, il recesso per un cambio di idea è limitato (Art. 17(2), Legge sul commercio elettronico coreana)."
      ],
      [
        "Costi di restituzione",
        "Nessuno — contenuto digitale, nulla viene spedito."
      ]
    ],
    "refundContact": "Per rimborsi o domande, contatta il centro assistenza clienti o l'email qui sotto. Se il documento non è stato prodotto, o l'importo addebitato è diverso dall'ordine, rimborseremo completamente.",
    "pdfLanguageNotice": "Il PDF è prodotto nella stessa lingua di questo schermo."
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
    "summary": "Un {dayMaster} giorno maestro nato nell'energia di {season}. In tutto il grafico, {strongest} è il più spesso e {scarcest} è il più sottile. Tutto ciò che segue deriva da quei otto caratteri: ogni numero e ogni pilastro qui è calcolato, non scelto.",
    "personality": "Il tuo giorno maestro è {dayMaster} — energia {element} — e questo grafico si legge come {strengthName}. Quale lato è più spesso, ciò che supporta il giorno maestro o ciò che ne trae, è ciò che modella il carattere, e nella vita quotidiana si manifesta in questo modo.",
    "cautions": {
      "STRONG": [
        "Spingi così forte che spesso noti l'inclinazione solo dopo che è accaduta.",
        "Anche dove l'aiuto è disponibile, finisci per gestirlo da solo, il che rende il lavoro più grande.",
        "Le cose si sistemano quando lasci spazio a ciò che sottrae l'eccesso."
      ],
      "BALANCED": [
        "Niente ti inclina da nessuna parte, quindi una decisione posticipata rimane semplicemente posticipata.",
        "Ti adatti bene alla situazione, il che può offuscare dove si trova la tua linea.",
        "Orientarsi verso ciò che è più sottile in questo momento ti dà una direzione da seguire."
      ],
      "WEAK": [
        "Resistere da solo ti consuma prima di quanto ti aspetti.",
        "Senza nulla a sostenerti, le decisioni scivolano e il momento passa.",
        "Tenere persone di supporto vicine non è una debolezza in questo grafico — è il metodo."
      ]
    },
    "scarcityCaution": "L'elemento più sottile in questo momento è {scarcest}. Qualunque cosa quell'elemento governi è dove sei più lento ad agire.",
    "elementBalance": "Per forza, {strongest} guida al {strongestPct}% e {scarcest} segue al {scarcestPct}%. Il mese di nascita si trova in {season}, il che spinge quell'elemento ancora una volta — la stessa quantità porta forze diverse a seconda che la stagione la sostenga. Ciò di cui hai bisogno ora è {favorable}, e le cose si semplificano dove quell'elemento viene riempito.",
    "todayHeadline": "Oggi si legge come {grade}",
    "todayMessage": "Oggi segna {score}, classificato {gradeName}. {gradeBody} Il pilastro del giorno è {pillar}, e il fattore che ha mosso di più quel punteggio è stato “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Una buona giornata per riprendere il messaggio o l'organizzazione che hai rimandato — anche se è meglio non cercare di finire tutto oggi.",
      "MID": "Fai come fai di solito e otterrai ciò che ottieni di solito. Piuttosto che iniziare qualcosa di nuovo, sposta un passo avanti qualcosa che hai già in mano.",
      "LOW": "Alcuni aspetti di oggi vanno contro il grafico. È meglio dedicarsi a finire e controllare piuttosto che iniziare."
    },
    "luckyNote": "L'elemento fortunato di oggi è {element}. La gamma {colors}, il lato {direction}, e le ore intorno a {time} sono dove quell'energia è più densa.",
    "domains": {
      "wealth": "Il denaro segna {score} oggi. Questo valore si muove con l'energia di oggi che raggiunge le stelle della ricchezza (財星) — ciò che gestisci e ciò che raccogli.",
      "love": "L'affetto segna {score} oggi. Questo valore è deciso da come il ramo di oggi incontra il tuo ramo del giorno (日支), il palazzo del coniuge — l'armonia lo solleva, un conflitto lo abbassa.",
      "career": "Il lavoro segna {score} oggi. Questo valore si muove con l'energia di oggi che raggiunge le stelle dell'ufficiale (官星) e dell'output (食傷) — ciò che prendi e ciò che produci.",
      "health": "La salute segna {score} oggi. Questo valore è deciso da quanti dei tuoi rami natali oggi si scontrano, e se l'elemento di oggi è uno di cui hai bisogno."
    },
    "yearOutlook": "Il pilastro di quest'anno è {pillar}, portando {element}. {relation} Questa lettura guarda solo a come il pilastro dell'anno incontra ciò di cui hai bisogno ora; non suddivide l'anno mese per mese.",
    "yearRelations": {
      "YONGSIN": "L'elemento di cui hai bisogno arriva direttamente quest'anno. Un momento adatto per tirare fuori ciò che avevi messo da parte.",
      "GENERATES": "Quest'anno nutre l'elemento di cui hai bisogno, quindi il flusso diventa più gentile — non immediatamente, ma costantemente.",
      "GISIN": "Quest'anno spinge ancora una volta nella direzione in cui ti stavi già inclinando. È meglio dedicarsi a chiudere ciò che hai in mano piuttosto che aprire qualcosa di nuovo.",
      "CONTROLS": "Qualcosa quest'anno preme sull'elemento di cui hai bisogno, quindi le decisioni arrivano più lentamente. Impostare le proprie scadenze aiuta.",
      "NEUTRAL": "Quest'anno non collide né nutre ciò di cui hai bisogno. Mantenere il terreno che hai è il miglior scambio."
    },
    "disclaimer": "Riferimento tradizionale di myeongri, non una previsione scientifica o una dichiarazione su ciò che deve accadere."
  },
  "footer": {
    "privacy": "Informativa sulla privacy",
    "terms": "Termini di servizio",
    "refund": "Cancellazione e rimborsi",
    "pricing": "Prezzi",
    "legalEntity": "Attività",
    "representative": "Rappresentante",
    "businessNumber": "Numero di registrazione",
    "mailOrderNumber": "Registrazione e-commerce",
    "address": "Indirizzo",
    "customerCenter": "Servizio clienti",
    "email": "Email",
    "privacyOfficer": "Responsabile della privacy",
    "hostingProvider": "Hosting",
    "providedBy": "Fornito da",
    "effective": "Efficace",
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
