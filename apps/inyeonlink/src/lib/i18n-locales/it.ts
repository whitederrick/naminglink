// 인연링크(사주 궁합·인연의 결) 화면 사전의 이탈리아어(it) 번역이다.
// `src/lib/i18n.ts`의 `en: Dictionary`를 기준으로 옮겼고, 영어가 모호한 자리는 같은 파일의 `ko`
// 원문을 대조했다. 언어 선택기 3개 키와 footer 13개 키는 naminglink 쪽 it 문구를 그대로 가져왔다.

import type { Dictionary } from "@/lib/i18n";

export const it: Dictionary = {
  brand: "InyeonLink",
  tagline: "L'affinità tra due persone letta con il Saju e i segni zodiacali",
  currentLanguage: "Lingua attuale",
  moreLanguages: "Altro",
  closeLanguages: "Chiudi",
  landing: {
    title: "Scopri quanto due persone\nsi accordano",
    subtitle:
      "Basta una data di nascita.\nUniamo l'affinità del Saju (i Quattro Pilastri) a quella dei segni zodiacali e la mostriamo come tasso di compatibilità.",
    cta: "Vedi l'affinità Saju",
    howTitle: "Come funziona",
    steps: [
      "Inserisci entrambe le date di nascita. L'ora di nascita è facoltativa.",
      "L'affinità Saju nasce dagli elementi dei padroni del giorno, dall'equilibrio degli elementi e dal ramo del giorno; l'affinità zodiacale nasce dal ramo dell'anno.",
      "I due punteggi vengono combinati in un tasso di compatibilità ponderato.",
    ],
    privacyTitle: "Nulla di ciò che inserisci viene conservato",
    privacyBody:
      "Le date di nascita servono solo durante il calcolo del risultato e non vengono mai registrate. Non serve alcun account. Nulla di ciò che il link del risultato contiene viene inviato al server.",
    disclaimer:
      "Questa è una lettura secondo il Saju tradizionale, offerta a titolo di riferimento. Non è una previsione scientifica né un giudizio definitivo su alcuna relazione.",
  },
  form: {
    title: "Le due date di nascita",
    description:
      "Conoscere l'ora di nascita rende la lettura più precisa, ma non è obbligatorio.",
    personA: "Prima persona",
    personB: "Seconda persona",
    nickname: "Come chiamarla",
    nicknamePlaceholder: "es. Io",
    nicknameHint: "Compare solo nella schermata del risultato. Non viene usato nel calcolo.",
    gender: "Genere",
    male: "Uomo",
    female: "Donna",
    genderUnspecified: "Preferisco non dirlo",
    genderHint:
      "Il Saju tradizionale legge la posizione del coniuge in modo diverso a seconda del genere. Se ometti questo dato, il fattore viene escluso dal calcolo.",
    birthplace: "Luogo di nascita",
    birthplaceHint:
      "Il pilastro dell'ora si calcola sul tempo solare vero del luogo di nascita, tenendo conto dell'ora legale e dei cambi storici di fuso orario. Se il tuo luogo di nascita non è in elenco, scegli la città più vicina: più è vicina, più il pilastro dell'ora è accurato.",
    calendar: "Calendario",
    solar: "Solare",
    lunar: "Lunare",
    leapMonth: "Mese intercalare",
    birthDate: "Data di nascita",
    year: "Anno",
    month: "Mese",
    day: "Giorno",
    birthTime: "Ora di nascita",
    unknownTime: "Non conosco l'ora",
    hour: "Ore",
    minute: "Minuti",
    submit: "Guarda un annuncio e vedi il risultato",
    submitting: "Calcolo in corso…",
    errorInvalidDate:
      "Controlla la data di nascita. Per le date lunari verifica anche se cade in un mese intercalare.",
    errorGeneric: "Il calcolo non è riuscito. Riprova tra un momento.",
  },
  reading: {
    chartTitle: "Le due carte",
    chartHint:
      "Il Saju rappresenta anno, mese, giorno e ora di nascita con due caratteri ciascuno. Tutti i punteggi qui sotto derivano da questi otto caratteri.",
    pillarYear: "Anno",
    pillarMonth: "Mese",
    pillarDay: "Giorno",
    pillarHour: "Ora",
    pillarHourUnknown: "Ora di nascita assente",
    dayMasterLabel: "Padrone del giorno",
    animalLabel: "Segno zodiacale",
    seasonLabel: "Stagione di nascita",
    elementsTitle: "Forza degli elementi",
    strongest: "Il più forte",
    scarcest: "Il più scarso",
    strengthTitle: "I punti di forza di questa coppia",
    cautionTitle: "A cosa fare attenzione",
    bodyStrengthTitle: "Forza del padrone del giorno",
    favorableLabel: "Ciò di cui hai bisogno ora",
  },
  bodyStrength: {
    STRONG: {
      name: "Padrone del giorno forte",
      body: "Gli elementi che sostengono il tuo padrone del giorno sono abbondanti. Questo ti dà uno slancio tutto tuo, ma ti fa anche sbilanciare facilmente da un lato: tendi ad assestarti quando qualcosa drena l'eccesso.",
    },
    BALANCED: {
      name: "Padrone del giorno equilibrato",
      body: "Ciò che sostiene il tuo padrone del giorno e ciò che lo drena quasi si equivalgono. Troppo vicini per decidere in un senso o nell'altro, perciò qui leggiamo come necessario ciò che è più sottile.",
    },
    WEAK: {
      name: "Padrone del giorno debole",
      body: "Gli elementi che sostengono il tuo padrone del giorno sono scarsi. Sai attingere bene alla forza di chi ti sta intorno, ma ti logori a resistere da solo: dai il meglio quando qualcosa ti sostiene.",
    },
  },
  relation: {
    title: "Come state insieme",
    hint: "Il Saju chiama con dieci termini il modo in cui due padroni del giorno si guardano. La lettura ha una direzione: come tu vedi l'altro e come l'altro vede te possono differire.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Simili",
        body: "I vostri padroni del giorno portano la stessa energia. Molto si capisce senza dirlo e i gusti coincidono. Il rovescio è che siete forti e deboli negli stessi punti, così le difficoltà tendono a bloccarvi entrambi nello stesso passaggio.",
      },
      NURTURING: {
        name: "Uno nutre, l'altro fiorisce",
        body: "L'energia scorre in una sola direzione. Chi riceve si sente a proprio agio e trova più cose che desidera fare; chi dà trova soddisfazione nel vedere l'altro andare bene. Poiché il flusso è unidirezionale, qualcosa deve tornare indietro, altrimenti chi dà finisce per prosciugarsi.",
      },
      TENSION: {
        name: "Uno tiene a freno l'altro",
        body: "Uno di voi occupa la posizione che trattiene l'altro. La tensione impedisce a entrambi di allentare la presa e tende a produrre risultati quando lavorate insieme. Chi viene trattenuto può sentirsi costantemente giudicato, perciò il riconoscimento deve venire prima della correzione.",
      },
    },
    leadNote: {
      NURTURING: "Qui è **{lead}** a dare energia.",
      TENSION: "Qui è **{lead}** a dettare il ritmo.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Compagno (比肩)",
      body: "Qualcuno che sta spalla a spalla con te. Facile da capire e piacevole da frequentare, ma difficile a cui cedere quando volete la stessa cosa.",
    },
    GEOPJAE: {
      name: "Rivale (劫財)",
      body: "Simile a te, ma con un metodo diverso. Formidabile quando spingete nella stessa direzione; attento ai conti non appena c'è qualcosa da dividere.",
    },
    SIKSIN: {
      name: "Espressione (食神)",
      body: "Qualcuno che tira fuori ciò che hai dentro. Insieme a lui parli di più e ti viene voglia di fare di più. Una delle posizioni più confortevoli che esistano.",
    },
    SANGGWAN: {
      name: "Perturbatore (傷官)",
      body: "Qualcuno che scuote i tuoi schemi. Interessante e stimolante, ma quando le parole tra voi si fanno taglienti il taglio resta a lungo.",
    },
    PYEONJAE: {
      name: "Fortuna inattesa (偏財)",
      body: "Qualcuno di cui ti viene voglia di prenderti cura. Molto divertimento spontaneo, anche se il peso della relazione può restare leggero.",
    },
    JEONGJAE: {
      name: "Ricchezza stabile (正財)",
      body: "Tradizionalmente la posizione del coniuge per un uomo. Le attenzioni arrivano con costanza e la relazione si assesta nella quotidianità più che nei picchi.",
    },
    PYEONGWAN: {
      name: "Sfidante (偏官)",
      body: "Qualcuno che ti tiene sulle spine. L'attrazione è forte e difficile da ignorare, ma una vicinanza prolungata può iniziare a pesare.",
    },
    JEONGGWAN: {
      name: "Autorità (正官)",
      body: "Tradizionalmente la posizione del coniuge per una donna. Ti rimette in riga e porta ordine e stabilità nella relazione.",
    },
    PYEONIN: {
      name: "Sostegno non convenzionale (偏印)",
      body: "Qualcuno che ti aiuta in un modo insolito. Ci sono momenti di vera profondità, anche se capire il metodo dell'altro richiede tempo.",
    },
    JEONGIN: {
      name: "Nutrimento (正印)",
      body: "Qualcuno che ti accoglie e si prende cura di te. Ti viene voglia di appoggiarti e la mente si acquieta. Se però ci si appoggia sempre da una parte sola, la relazione si sbilancia.",
    },
  },
  dayMasters: {
    甲: { name: "Legno Yang (甲)", trait: "Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi." },
    乙: { name: "Legno Yin (乙)", trait: "Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza." },
    丙: { name: "Fuoco Yang (丙)", trait: "Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale." },
    丁: { name: "Fuoco Yin (丁)", trait: "La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini." },
    戊: { name: "Terra Yang (戊)", trait: "Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa." },
    己: { name: "Terra Yin (己)", trait: "Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri." },
    庚: { name: "Metallo Yang (庚)", trait: "Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso." },
    辛: { name: "Metallo Yin (辛)", trait: "Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare." },
    壬: { name: "Acqua Yang (壬)", trait: "Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono." },
    癸: { name: "Acqua Yin (癸)", trait: "Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole." },
  },
  dayMasterSigns: {
    甲: [
      "Dice ciò che pensa anche al primo incontro.",
      "Cambia di rado un piano o una promessa una volta fissati.",
      "Rifiuta senza giri di parole, il che può suonare brusco.",
    ],
    乙: [
      "Aggira il confronto e prende un'altra strada.",
      "Sembra remissivo, eppure finisce dove voleva arrivare.",
      "Osserva l'ambiente prima di unirsi a un gruppo.",
    ],
    丙: [
      "Parla per primo con chi ha appena conosciuto.",
      "Ciò che gli piace e ciò che non gli piace si legge in faccia.",
      "Finisce al centro di una riunione senza nemmeno provarci.",
    ],
    丁: [
      "Silenzioso all'inizio, premuroso quando c'è confidenza.",
      "Preferisce una lunga chiacchierata con una o due persone a una folla.",
      "Ricorda un'osservazione detta di sfuggita e la riprende più tardi.",
    ],
    戊: [
      "Parla poco; alza di rado la voce anche quando le cose stringono.",
      "È quello che alla fine chiude la questione, mentre gli altri rimandano la decisione.",
      "Un no, una volta detto, resta no a lungo.",
    ],
    己: [
      "Ascolta più a lungo di quanto parli.",
      "Fatica a rifiutare, così il lavoro gli si accumula addosso.",
      "Ciò di cui si è occupato in silenzio emerge solo più tardi.",
    ],
    庚: [
      "Decide in fretta e lo dice subito.",
      "Non addolcisce le cose, il che può sembrare freddezza.",
      "Diventa visibilmente insofferente quando qualcosa va per le lunghe.",
    ],
    辛: [
      "Ha criteri chiari sui vestiti e sulle cose che sceglie.",
      "Non riesce a lasciar passare un lavoro fatto a metà senza farlo notare.",
      "Avaro di lodi, ma inequivocabile quando le fa sul serio.",
    ],
    壬: [
      "Si mescola con facilità a ogni tipo di persona.",
      "Tira fuori ciò che verrà dopo prima di ciò che ha davanti.",
      "Mal sopporta di restare legato a lungo a un solo posto.",
    ],
    癸: [
      "Parla poco ma ha letto la situazione con esattezza.",
      "È il primo ad accorgersi quando cambia l'atmosfera.",
      "Tiene per sé la propria interiorità, così serve tempo per conoscerlo.",
    ],
  },
  animalTraits: {
    rat: "Nota in fretta e in fretta si assicura ciò che conta. Il primo a muoversi in una crisi.",
    ox: "Sembra lento ma porta a termine. Ciò che prende in carico non lo molla.",
    tiger: "Senza paura e in prima linea. Non riesce a lasciar correre un'ingiustizia.",
    rabbit: "Gentile e perspicace. Sa aggirare invece di scontrarsi.",
    dragon: "Di animo grande e con ideali alti. Di rado si accontenta dell'ordinario.",
    snake: "Tiene per sé i propri pensieri e riflette a fondo. Giudica con precisione.",
    horse: "Brillante e irrequieto. Sentirsi chiuso in un recinto è la cosa più dura.",
    goat: "Caloroso e premuroso. Si tiene dentro a lungo le parole dure.",
    monkey: "Pieno di risorse e rapido ad adattarsi. La ripetizione lo annoia.",
    rooster: "Diligente ed esigente. Non riesce a lasciare nulla fuori posto.",
    dog: "Leale fino in fondo una volta data la fiducia. Il tradimento lo ferisce in modo particolare.",
    pig: "Generoso e schietto. Si fida facilmente, a volte a caro prezzo.",
  },
  affinity: {
    menu: "Il tuo profilo di affinità",
    formTitle: "Che tipo di persona fa per te",
    formDescription:
      "Basta una sola data di nascita. Puoi leggere questo profilo senza conoscere il compleanno di nessuno, o anche senza avere ancora nessuno in mente.",
    meLegend: "Tu",
    genderHint:
      "Il Saju tradizionale legge la posizione del coniuge in modo diverso a seconda del genere. Se lo lasci vuoto, quel fattore viene escluso invece che indovinato.",
    seekingLabel: "Cerchi",
    seekingHint:
      "La posizione del coniuge (Jeongjae / Jeonggwan) può essere valutata solo quando entrambi i generi sono noti.",
    seekingAny: "Non specificato",
    submit: "Guarda un annuncio e controlla il profilo di affinità",
    submitting: "Lettura in corso…",

    resultTitle: "Il tuo profilo di affinità",
    intro:
      "Ecco il tipo di persona verso cui la tua carta tende. **Puoi riconoscere questi tipi dal temperamento,** molto prima di conoscerne la data di nascita.",
    scoreCaption:
      "Questi sono gli stessi punteggi per fattore usati dal motore di affinità, non un tasso di compatibilità complessivo.",
    meTitle: "Dove ti collochi",
    meBody: "Sei {dayMaster} e in questo momento sei {strength}.",
    meHint:
      "Il Saju scrive anno, mese, giorno e ora di nascita con otto caratteri. **Il primo carattere del giorno di nascita rappresenta te**: si chiama stelo del giorno. Tutti i tipi qui sotto sono ordinati in base a quell'unico carattere.",
    bestTitle: "I tipi che ti si addicono",
    bestHint:
      "Questo è lo stelo del giorno dell'altra persona — **l'energia del giorno in cui è nata** — suddivisa in dieci tipi, di cui questi tre si incastrano con il tuo. Spesso puoi intuirlo dai comportamenti qui sotto, molto prima di conoscerne la data di nascita.",
    signsTitle: "Come si manifesta",
    avoidTitle: "I tipi che richiedono impegno",
    avoidHint:
      "Non è un avvertimento. Significa che la facilità arriva dopo, quando entrambi ci avrete messo del tempo.",
    bondLabel: "Incastro dei temperamenti",
    spouseLabel: "Posizione del coniuge",
    spouseSkipped: "Il genere non è stato indicato, quindi questo fattore è stato escluso",
    scoreHelp:
      "**Incastro dei temperamenti** — come si agganciano le energie dei vostri due giorni di nascita. Anche una coppia fatta di spinte contrarie ottiene il punteggio più alto quando yin e yang sono incrociati.\n**Posizione del coniuge** — il Saju tradizionale riserva una posizione al coniuge: Jeongjae per gli uomini, Jeonggwan per le donne. La verifichiamo **in entrambi i sensi**: se l'altro occupa quella posizione per te e se tu la occupi per l'altro. Entrambe insieme sono la coppia che la tradizione valuta più in alto.",
    typeHeading: "Qualcuno come {name}",
    needTitle: "Ciò che ti manca in questo momento",
    needBody:
      "Se {elements} è forte nell'altra persona, riempie il posto che in te resta sottile.",
    needHint:
      "Non si possono leggere a vista i cinque elementi di una persona. Ma una volta che ne conosci la data di nascita, guarda prima qui.",
    zodiacTitle: "Lo zodiaco, come nota a margine",
    zodiacHint:
      "Lo zodiaco richiede solo l'anno di nascita, quindi è la cosa più rapida da controllare. È anche uno solo dei quattro pilastri: trattalo come un indizio.",
    zodiacGood: "Segni che ti si addicono",
    zodiacHard: "Segni che creano attrito",
    tableType: "Tipo",
    tableSign: "Segno",
    tableYears: "Anni di nascita",
    bornYear: "nato nel {year}",
    younger: "{n} anni più giovane",
    older: "{n} anni più grande",
    sameAge: "coetaneo",
    zodiacYearsCaution:
      "Nel Saju l'anno cambia a Ipchun (intorno al 4 febbraio), non il 1° gennaio. **Chi è nato in gennaio o ai primi di febbraio appartiene al segno dell'anno precedente**, quindi per quelle date controlla l'anno da entrambi i lati.",
    dayBranchTitle: "È questa la persona giusta per me?",
    dayBranchBody:
      "Basta una data di nascita per verificare se qualcuno ti si addice.\nPer la lettura completa, usa l'affinità Saju in fondo a questa pagina.",
    check: {
      button: "Verifica la data di nascita di qualcuno",
      title: "Di che tipo è questa persona?",
      body: "Inserisci una data di nascita e ti diremo quale dei dieci tipi qui sopra le corrisponde. Non viene calcolato alcun punteggio di affinità.",
      submit: "Verifica",
      checking: "Verifica in corso…",
      rank: "il tuo n. {rank}",
      heading: "Questa persona è {name}",
      caution:
        "Questa lettura considera solo il giorno di nascita. **Se la persona è nata intorno alla mezzanotte** il giorno può cadere da una parte o dall'altra, e le date di gennaio o dei primi di febbraio appartengono al segno dell'anno precedente.",
      close: "Chiudi",
      another: "Verifica un'altra persona",
      error: "Controlla la data: non esiste o è fuori intervallo.",
    },
    nextTitle: "Hai qualcuno in mente?",
    nextBody:
      "Inserisci entrambe le date di nascita e ottieni il tasso di compatibilità reale, con tutti i fattori qui sopra sommati.",
    nextButton: "Vedi l'affinità Saju",
    recalculate: "Leggi di nuovo",
    copyLink: "Copia il link del risultato",
    copied: "Copiato",
    missingInput: "Non è stato possibile leggere il risultato. Ricomincia da capo.",
    partialTime:
      "Non è stata indicata l'ora di nascita, quindi il pilastro dell'ora è stato escluso. Aggiungerla rende più preciso ciò di cui hai bisogno.",
    disclaimer:
      "Un riferimento nella prospettiva del Saju tradizionale. Non ti sta dicendo di cercare o di evitare una persona in particolare.",
  },
  result: {
    title: "Risultato dell'affinità",
    totalLabel: "Tasso di compatibilità",
    breakdown: "Punteggio per fattore",
    recalculate: "Ricomincia",
    copyLink: "Copia il link del risultato",
    copied: "Copiato",
    missingInput: "Non è stato possibile leggere questo risultato. Inserisci di nuovo le date.",
    partialTime:
      "Non è stata indicata l'ora di nascita, quindi il pilastro dell'ora è stato escluso. Aggiungerla rende la lettura più precisa.",
    engineVersion: "Calcolato con",
    disclaimer:
      "Questa è una lettura secondo il Saju tradizionale, offerta a titolo di riferimento. Non è una previsione scientifica né un giudizio definitivo su alcuna relazione.",
  },
  ads: { label: "Pubblicità" },
  analyzing: {
    title: "Lettura delle due carte",
    quotes: [
      "Più che incontrare la persona giusta, la si riconosce.",
      "Una buona intesa non è quella che non litiga mai: è quella che dopo il litigio torna.",
      "Il Saju non è una risposta già scritta. È un linguaggio per capirsi.",
      "Alcune coppie sono facili perché vi somigliate; altre vi insegnano perché siete diversi.",
      "Le relazioni che durano sono di solito quelle in cui nulla è rimasto non detto troppo a lungo.",
      "Se il suo modo di fare ti sembra estraneo, vuol dire che possiede qualcosa che a te manca.",
      "L'affinità è per metà ciò con cui si nasce e per metà ciò che si costruisce.",
      "Una relazione dura quando appoggiarsi e sostenere si alternano.",
      "Più del punteggio conta il modo in cui lo si legge.",
      "Se le vostre stagioni sono diverse, raccontatevi com'è la vostra stagione.",
    ],
    gateTitle: "Il tuo risultato è pronto",
    gateBody:
      "Guarda un breve annuncio per aprirlo. Sono i ricavi pubblicitari a mantenere gratuito questo servizio.",
    watchButton: "Guarda un annuncio per vedere il risultato",
    watching: "Riproduzione dell'annuncio",
    remaining: "Il risultato si apre tra {seconds} s",
  },
  report: {
    title: "Conserva questa lettura in PDF",
    body: "Trasformiamo questo risultato in un PDF di tre pagine, comprensivo dei valori di forza degli elementi che non compaiono sullo schermo.",
    buyButton: "Paga {price} e scarica",
    preparing: "Non ancora disponibile",
    ordering: "Creazione dell'ordine…",
    paying: "Elaborazione del pagamento…",
    issuing: "Preparazione del report…",
    done: "Scaricato. Usa il pulsante qui sotto per scaricarlo di nuovo.",
    failed: "Il pagamento o il download non è riuscito. Riprova tra un momento.",
    retry: "Scarica di nuovo",
    contents: [
      "Pagina 1 — tasso di compatibilità, punti di forza della coppia e aspetti a cui fare attenzione",
      "Pagina 2 — la forma della relazione, i dieci dei e i punteggi per fattore",
      "Pagina 3 — entrambe le carte e la forza degli elementi",
    ],
    consentLabel:
      "Ho compreso che si tratta di contenuto digitale fornito immediatamente al momento del pagamento e che **il recesso per semplice ripensamento è limitato una volta completato il download**.",
    consentRequired: "Conferma le condizioni di recesso prima di pagare.",
    productInfoTitle: "Informazioni sul prodotto",
    productInfo: [
      ["Fornitore", "Naming-Link"],
      ["Formato", "Un documento PDF (3 pagine), scaricato sullo schermo subito dopo il pagamento."],
      ["Requisiti", "Qualsiasi dispositivo in grado di aprire un PDF. Non servono installazioni né account."],
      ["Durata d'uso", "Nessun limite. Il file scaricato resta tuo."],
      ["Nuovo download", "Fino a cinque volte per lo stesso ordine. Non ne conserviamo alcuna copia, quindi non può essere rigenerato una volta usciti dalla schermata del risultato."],
      ["Recesso", "Rimborso totale prima che il download inizi. A download completato, il recesso per ripensamento è limitato (art. 17, comma 2, della legge coreana sul commercio elettronico)."],
      ["Costi di reso", "Nessuno: è contenuto digitale, non viene spedito nulla."],
    ],
    refundContact:
      "Per rimborsi o domande, contatta il servizio clienti o l'indirizzo email indicato qui sotto. Se il documento non è stato prodotto, o se l'importo addebitato differisce dall'ordine, rimborsiamo per intero.",
  },
  affinityReport: {
    title: "Conserva il tuo profilo di affinità in PDF",
    body: "Trasformiamo questa lettura in un PDF di quattro pagine. Include **la classifica completa che lo schermo non mostra**: lo schermo ti dà i primi tre, il PDF riporta tutti e dieci i tipi e tutti e dodici i segni.",
    buyButton: "Paga {price} e scarica",
    preparing: "In preparazione",
    ordering: "Creazione dell'ordine…",
    paying: "Elaborazione del pagamento…",
    issuing: "Costruzione del report…",
    done: "Scaricato. Usa il pulsante qui sotto per riottenerlo.",
    failed: "Il pagamento o il download non è andato a buon fine. Riprova tra poco.",
    retry: "Scarica di nuovo",
    contents: [
      "Pagina 1 — Dove ti collochi e ciò che ti manca",
      "Pagina 2 — Tre tipi che ti si addicono, con indizi di comportamento",
      "Pagina 3 — Il tipo che richiede impegno, più la classifica completa degli steli del giorno",
      "Pagina 4 — Classifica completa di tutti e dodici i segni, con gli anni di nascita",
    ],
    consentLabel:
      "Questo è contenuto digitale fornito immediatamente dopo il pagamento. Ho compreso che **una volta completato il download, il diritto di recesso per ripensamento è limitato.**",
    consentRequired: "Accetta le condizioni di recesso prima di pagare.",
    productInfoTitle: "Informazioni sul prodotto",
    productInfo: [
      ["Fornitore", "Naming-Link"],
      ["Formato", "Un documento PDF (4 pagine), scaricato su questa schermata subito dopo il pagamento."],
      ["Requisiti", "Qualsiasi dispositivo in grado di aprire un PDF. Nessuna installazione, nessun account."],
      ["Disponibilità", "Nessun limite di tempo. Il file scaricato è tuo e puoi conservarlo."],
      ["Nuovo download", "Fino a 5 volte per lo stesso ordine. Non conserviamo il file, quindi non può essere ricostruito una volta usciti da questa schermata."],
      ["Recesso", "Rimborso totale prima che il download sia completato. A download completato, il recesso per ripensamento è limitato."],
      ["Costi di reso", "Nessuno. Non c'è nulla da spedire."],
    ],
    refundContact:
      "Per rimborsi o domande, contatta l'assistenza o l'indirizzo email indicato qui sotto. Se il documento non è mai stato prodotto, o se l'importo addebitato differisce dall'ordine, rimborsiamo per intero.",
  },
  footer: {
    privacy: "Privacy",
    terms: "Termini",
    refund: "Rimborsi",
    pricing: "Prezzi",
    legalEntity: "Società",
    representative: "Rappresentante",
    businessNumber: "Registro",
    mailOrderNumber: "Vendita online",
    address: "Indirizzo",
    customerCenter: "Servizio clienti",
    email: "Email",
    privacyOfficer: "Responsabile privacy",
    hostingProvider: "Hosting",
    providedBy: "Fornito da",
    effective: "In vigore dal",
    backHome: "Torna alla home",
  },
  bands: {
    EXCELLENT: "Un'intesa eccezionale",
    GOOD: "Un'intesa solida",
    FAIR: "Un'intesa praticabile",
    CHALLENGING: "Un'intesa che richiede impegno",
  },
  engines: {
    saju: {
      name: "Affinità Saju",
      description:
        "Legge insieme gli elementi dei padroni del giorno, l'equilibrio degli elementi e il ramo del giorno.",
    },
    zodiac: {
      name: "Affinità zodiacale",
      description: "Legge la relazione tra i due rami dell'anno di nascita.",
    },
  },
  factors: {
    dayMasterRelation: "Elementi dei padroni del giorno",
    spouseStar: "Stella del coniuge",
    elementSupply: "Apporto degli elementi",
    dayBranchRelation: "Ramo del giorno",
    branchRelation: "Segni zodiacali",
  },
  notes: {
    "strength.dayMasterRelation":
      "I vostri temperamenti si trovano in una posizione che serve all'altro. Anche quando il modo di fare dell'altro sembra estraneo, tende a fornire ciò che manca.",
    "strength.spouseStar":
      "Ciascuno di voi porta l'elemento che tradizionalmente si legge come posizione del coniuge. Se fin dall'inizio è stato facile senza un motivo evidente, è probabilmente per questo.",
    "strength.elementSupply":
      "Ciascuno di voi possiede ciò di cui l'altro ha bisogno adesso. Le cose difficili da smuovere da soli tendono a venire più facilmente insieme.",
    "strength.dayBranchRelation":
      "Il ramo del giorno si legge tradizionalmente come il posto del coniuge. I vostri stanno bene insieme, il che tende a rendere confortevole il tempo condiviso.",
    "strength.branchRelation":
      "I segni zodiacali stanno bene insieme: il tipo di coppia che da fuori appare naturale e che al primo incontro si legge con facilità.",
    "caution.dayMasterRelation":
      "È qui che i temperamenti si sfregano. Davanti allo stesso compito il vostro ritmo e il vostro metodo differiscono, e questo è facile da scambiare per intenzionalità. Mettetevi d'accordo sul procedimento prima che sulla conclusione.",
    "caution.spouseStar":
      "Nessuno dei due porta ciò che la tradizione chiama l'elemento della posizione del coniuge dell'altro. L'attrazione potrebbe non essere immediata; questa è piuttosto una coppia che si accumula nel tempo.",
    "caution.elementSupply":
      "Ciò di cui ciascuno di voi ha bisogno è scarso anche nell'altro. Ciò in cui siete entrambi bravi, lo siete moltissimo, ma i punti in cui a entrambi manca qualcosa restano vuoti. Meglio procurarseli fuori dalla relazione.",
    "caution.dayBranchRelation":
      "È probabile un attrito nella posizione della vita in comune. Di solito si manifesta nelle piccole abitudini più che nelle questioni grandi, quindi stabilire fin da subito qualche regola di base aiuta.",
    "caution.branchRelation":
      "I vostri segni zodiacali si trovano l'uno di fronte all'altro. Vedete le cose in modo diverso, il che crea attrito, e significa anche che avete molto da imparare l'uno dall'altro.",

    "spouseStar.MUTUAL":
      "Ciascuno di voi occupa esattamente la posizione del coniuge dell'altro: la coppia che il Saju tradizionale valuta più in alto.",
    "spouseStar.STRONG":
      "Uno di voi occupa esattamente la posizione del coniuge e l'altro le è vicino. Ciò che ciascuno prova per l'altro può differire un po' per intensità.",
    "spouseStar.PARTIAL":
      "Solo uno di voi occupa la posizione del coniuge dell'altro. L'attrazione iniziale tende a essere unilaterale, perciò vale la pena non rimandare il momento di dirlo.",
    "spouseStar.SLIGHT":
      "Uno di voi si trova accanto alla posizione del coniuge. Questo si accumula con il tempo trascorso insieme più che arrivare come attrazione immediata.",
    "spouseStar.NONE":
      "Nessuno dei due occupa ciò che la tradizione chiama posizione del coniuge. Questa coppia si costruisce vivendo l'uno accanto all'altro più che attraverso l'attrazione.",
    "dayMaster.CLASH_BONDED":
      "{elementA} e {elementB} si trattengono a vicenda, ma con polarità opposta. La tradizione legge questo come l'abbinamento coniugale: l'attrito tende a trasformarsi in attaccamento.",
    "dayMaster.CLASH_HARSH":
      "{elementA} e {elementB} si trattengono a vicenda con la stessa polarità. La carica è forte, e altrettanto lo è il peso che ciascuno mette sull'altro.",
    "dayMaster.FLOW_GUARDED":
      "Uno di voi emette energia e l'altro la contiene. L'impulso più tagliente viene temperato dall'altro: ciò che la tradizione chiama un abbinamento protetto.",
    "dayMaster.FLOW_BLOCKED":
      "Uno di voi emette energia e l'altro la sottrae. Qui chi dà si stanca facilmente, perciò aiuta dire chiaramente che cosa ciascuno dà e che cosa riceve.",
    "dayMaster.PEER_EVEN":
      "Entrambi portate l'energia {elementA} con la stessa polarità. Questo rende le cose pari e facili, ma nessuno dei due spinge avanti l'altro.",
    "dayMaster.PEER_RIVAL":
      "Entrambi portate l'energia {elementA} con polarità opposta. L'attrazione è rapida, ma vi contendete lo stesso terreno.",
    "supply.AMPLE":
      "Ciascuno di voi possiede in abbondanza ciò di cui l'altro ha bisogno. Alla prima persona serve {needA} e alla seconda {needB}, e l'altro glielo fornisce.",
    "supply.ENOUGH":
      "Ciascuno di voi possiede una buona parte di ciò di cui l'altro ha bisogno: {needA} per la prima persona, {needB} per la seconda.",
    "supply.THIN":
      "Ciò di cui ciascuno di voi ha bisogno — {needA} per la prima persona, {needB} per la seconda — è scarso nell'altro.",
    "supply.SCARCE":
      "Nessuno dei due può fornire facilmente ciò di cui l'altro ha bisogno: {needA} per la prima persona, {needB} per la seconda, ed entrambi i posti restano vuoti. Meglio procurarselo fuori dalla relazione.",
    "dayBranch.SAMHAP":
      "I rami del giorno formano un'armonia tripla: l'abbinamento più forte nella posizione del coniuge.",
    "dayBranch.BANHAP":
      "I rami del giorno formano una mezza armonia attorno al perno di una tripla. Un abbinamento ben assortito nella posizione del coniuge.",
    "dayBranch.YUKHAP": "I rami del giorno formano un'armonia sestuplice. Vi attirate a vicenda.",
    "dayBranch.SAME":
      "I rami del giorno sono identici. Questo rende le cose facili, ma lascia poca novità.",
    "dayBranch.NEUTRAL": "I rami del giorno non hanno alcuna relazione particolare.",
    "dayBranch.WONJIN":
      "I rami del giorno si trovano in un risentimento silenzioso. Poco esplode apertamente, ma i malumori difficili da nominare tendono ad accumularsi: meglio dirli sul momento che lasciarli correre.",
    "dayBranch.CHUNG":
      "I rami del giorno si scontrano. Questa posizione è soggetta ad attriti, quindi il modo in cui vi parlate è importante.",
    "zodiac.SAMHAP":
      "{animalA} e {animalB} formano un'armonia tripla: il migliore abbinamento zodiacale.",
    "zodiac.BANHAP":
      "{animalA} e {animalB} formano una mezza armonia attorno al perno di una tripla, quindi vi trovate bene insieme.",
    "zodiac.YUKHAP": "{animalA} e {animalB} formano un'armonia sestuplice. Vi trovate molto bene insieme.",
    "zodiac.SAME": "Siete nati entrambi sotto il segno {animalA}, quindi i vostri temperamenti si rispecchiano.",
    "zodiac.NEUTRAL": "{animalA} e {animalB} non hanno alcuna relazione particolare.",
    "zodiac.WONJIN":
      "{animalA} e {animalB} si trovano in un risentimento silenzioso: raramente un litigio aperto, ma una discordanza sottile che tende a durare.",
    "zodiac.CHUNG":
      "{animalA} e {animalB} si scontrano. Siete nettamente diversi, il che significa anche che c'è molto da imparare.",
  },
  animals: {
    rat: "Topo",
    ox: "Bue",
    tiger: "Tigre",
    rabbit: "Coniglio",
    dragon: "Drago",
    snake: "Serpente",
    horse: "Cavallo",
    goat: "Capra",
    monkey: "Scimmia",
    rooster: "Gallo",
    dog: "Cane",
    pig: "Maiale",
  },
  elements: {
    WOOD: "Legno",
    FIRE: "Fuoco",
    EARTH: "Terra",
    METAL: "Metallo",
    WATER: "Acqua",
  },
};
