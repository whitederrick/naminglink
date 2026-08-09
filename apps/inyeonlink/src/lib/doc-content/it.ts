import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Italiano — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const IT_DOCS = {
  "about": {
    "eyebrow": "Informazioni",
    "title": "Informazioni su Inyeon-Link",
    "summary": "Confrontiamo due grafici di nascita secondo la tradizione del Saju coreano. Ecco cosa calcoliamo e cosa ci rifiutiamo di affermare.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "Cosa facciamo",
        "blocks": [
          {
            "p": "Inyeon-Link costruisce due grafici di nascita a partire dalle date e dagli orari di nascita e mostra **come i due insiemi di energie si incontrano.** Puoi anche leggere il tuo grafico da solo e vedere quali temperamenti tendono a adattarsi a te."
          },
          {
            "p": "La lettura sullo schermo è **gratuita e non richiede un account.** Gli articoli a pagamento sono rapporti PDF che contengono dati che lo schermo non mostra mai — forze degli elementi, abbinamenti dei dieci dei e le relazioni tra tutti e quattro i pilastri."
          }
        ]
      },
      {
        "title": "Cosa calcoliamo",
        "blocks": [
          {
            "p": "I grafici sono costruiti dall'**almanacco lunisolare coreano**, e l'orario di nascita è corretto per il **tempo solare vero** per il luogo di nascita — lo stesso orario significa una posizione del sole diversa a seconda di dove sei nato."
          },
          {
            "p": "I punteggi derivano solo da regole fisse. Concetti tradizionali — dieci dei, relazioni tra rami, l'elemento di supporto — sono espressi come regole, quindi **lo stesso input dà sempre lo stesso risultato.** Quando una regola cambia, eseguiamo un'analisi di regressione per assicurarci che le letture più vecchie non siano state alterate."
          },
          {
            "p": "**Nessuna intelligenza artificiale è coinvolta.** Ogni frase sullo schermo è testo fisso collegato a un risultato calcolato."
          }
        ]
      },
      {
        "title": "Cosa non affermeremo",
        "blocks": [
          {
            "ul": [
              "**Non facciamo previsioni.** Nulla qui ti dice di perseguire o evitare qualcuno. È un riferimento tratto da una tradizione.",
              "**Non memorizziamo ciò che inserisci.** I dettagli di nascita sono utilizzati solo per il momento del calcolo e non vengono mai annotati; i link ai risultati vivono nella parte dell'URL che un browser non invia a un server.",
              "**Un punteggio non è un verdetto su una persona.** Un numero basso non invalida una relazione."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il metodo è descritto in dettaglio nelle [guide](/guide). I dettagli dell'azienda e come contattarci sono nella [pagina di contatto](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base di Calcolo",
    "title": "Qual è la Base per il Calcolo?",
    "summary": "Inyeon-Link rivela tutte le regole che utilizza. Puoi controllare gli elementi e i loro pesi, i punteggi dalla tabella delle relazioni tra rami terrestri e i valori soglia che distinguono un giorno maestro forte da uno debole — puoi vedere da dove provengono i numeri sullo schermo.",
    "backLabel": "Torna all'Inizio",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "I valori scritti qui sono tutti **lettura diretta dal codice di calcolo**. Poiché non sono trascritti manualmente nel testo, se le regole cambiano, i numeri in questo documento cambieranno anch'essi."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Base del Servizio",
    "title": "Cosa Considera la Compatibilità Saju?",
    "summary": "Chiarisce quattro elementi e i loro rispettivi pesi, e spiega perché sono stati scelti. Affronta anche il motivo per cui i calcoli possono essere effettuati anche senza conoscere l'orario di nascita.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Calcolo e Combinazione di Due Assi",
        "blocks": [
          {
            "p": "Il tasso di corrispondenza deriva da due rami. **La compatibilità Saju** considera l'intero grafico originale del saju di entrambi gli individui, mentre **la compatibilità zodiacale** considera solo un ramo terrestre dall'anno di nascita. Il valore finale è ottenuto mediando pesata i due."
          },
          {
            "table": {
              "head": [
                "Asse",
                "Cosa è Considerato",
                "Peso"
              ],
              "rows": [
                [
                  "Compatibilità Saju",
                  "Giorno maestro, ramo del giorno e i cinque elementi — quattro elementi",
                  "{weightSaju}"
                ],
                [
                  "Compatibilità Zodiacale",
                  "La relazione tra i rami dell'anno",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Il lato saju è molto più pesante perché la quantità di informazioni utilizzate è diversa. Il saju considera tutti e quattro i pilastri, mentre lo zodiaco guarda solo a un carattere. Tuttavia, lo zodiaco non è escluso per due motivi — è l'elemento più intuitivamente comprensibile e rappresenta l'**unico asse il cui valore non fluttua nemmeno senza conoscere l'orario di nascita**."
          }
        ]
      },
      {
        "title": "I Quattro Elementi della Compatibilità Saju",
        "blocks": [
          {
            "p": "Il lato saju è ulteriormente suddiviso in quattro. Ogni elemento è scelto per garantire che ciò che considerano non si sovrapponga."
          },
          {
            "figure": "four-pillars",
            "caption": "Il saju è composto da otto caratteri formati dai rami terrestri e dai tronchi celesti dell'anno, mese, giorno e ora di nascita. Il giorno maestro e il ramo del giorno menzionati di seguito sono i due caratteri nel pilastro del giorno.",
            "labels": {
              "year": "Pilastro dell'Anno",
              "yearNote": "Radice · Zodiaco",
              "month": "Pilastro del Mese",
              "monthNote": "Stagione · Potere",
              "day": "Pilastro del Giorno",
              "dayNote": "Io · Palazzo del Coniuge",
              "hour": "Pilastro dell'Ora",
              "hourNote": "Anni Avanzati · Utilizzo",
              "stem": "Tronco Celeste",
              "stemNote": "Giorno Maestro = Io",
              "branch": "Ramo Terrestre",
              "branchNote": "Ramo del Giorno = Palazzo del Coniuge"
            }
          },
          {
            "table": {
              "head": [
                "Elemento",
                "Cosa è Considerato",
                "Peso"
              ],
              "rows": [
                [
                  "Relazione del Ramo del Giorno",
                  "Cosa sono i rami del giorno (日干) delle due persone l'uno rispetto all'altro — visto attraverso i Dieci Dei",
                  "{weightDayMaster}"
                ],
                [
                  "Complementazione dei Cinque Elementi",
                  "Il partner ha l'energia di cui ho bisogno — visto attraverso l'elemento di supporto di cui un grafico ha attualmente bisogno",
                  "{weightElementSupply}"
                ],
                [
                  "Stella del Coniuge",
                  "Il ramo del giorno del partner corrisponde alla mia posizione di coniuge?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relazione del Ramo del Giorno",
                  "I rami del giorno (日支) delle due persone sono una combinazione o un conflitto?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Il ramo del giorno è interpretato perché la tradizione lo considera come il **palazzo del coniuge**. Tra i quattro pilastri è quello che indica il partner, il che lo rende il primo punto in cui si guarda la compatibilità."
          }
        ]
      },
      {
        "title": "Se il genere non è divulgato, l'elemento del coniuge è omesso",
        "blocks": [
          {
            "p": "L'elemento del coniuge richiede la conoscenza del genere per il calcolo. La tradizione legge la posizione che indica un coniuge in modo diverso a seconda del genere. Se non divulgato, questo elemento sarà **escluso** e i pesi dei restanti tre elementi saranno rinormalizzati."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Non sarà trattato come 0 punti",
        "blocks": [
          {
            "p": "Se le posizioni mancanti sono trattate come 0 punti, il punteggio sarà ingiustamente abbassato semplicemente perché il genere non è stato divulgato. La rinormalizzazione dei pesi previene questo problema."
          }
        ]
      },
      {
        "title": "I calcoli possono essere effettuati senza conoscere l'ora di nascita",
        "blocks": [
          {
            "p": "L'ora di nascita è utilizzata per determinare il pilastro orario. Se sconosciuta, i calcoli saranno effettuati senza il pilastro orario, e questo fatto sarà indicato nella schermata dei risultati. Poiché non c'è un input diretto per il pilastro orario tra i quattro elementi di compatibilità, i valori non fluttueranno significativamente, ma influisce sull'equilibrio dei cinque elementi."
          },
          {
            "p": "Se conosci l'ora, seleziona anche il luogo di nascita. Se l'ora standard differisce dalla posizione solare effettiva, usarla così com'è potrebbe disallineare il pilastro orario [(correzione dell'ora solare vera)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Lo stesso input produrrà sempre lo stesso valore",
        "blocks": [
          {
            "p": "Tutti i punteggi sono determinati da regole. Non viene utilizzata intelligenza artificiale, né vengono impiegati numeri casuali. Pertanto, inserire le stesse due date di nascita più volte non produrrà risultati diversi. Essendo un servizio che non memorizza dati, i risultati precedenti non possono essere recuperati, ma **determinismo** compensa questo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cambiare le regole aumenterà la versione",
        "blocks": [
          {
            "p": "Ogni volta che le regole di punteggio vengono cambiate, la versione del motore viene aggiornata. La versione è annotata in fondo alla schermata dei risultati, permettendoti di distinguere quali regole sono state utilizzate per calcolare i numeri che stai attualmente visualizzando."
          }
        ]
      },
      {
        "title": "Cosa non è questo risultato",
        "blocks": [
          {
            "p": "Questo è un **materiale di riferimento** calcolato secondo regole costruite sulla prospettiva della tradizione. Non è una previsione scientifica, né è una dichiarazione definitiva sulla relazione tra i due individui. L'intervallo di punteggio è impostato a un minimo di circa 45 punti per questo motivo — nessuna combinazione produrrà un valore vicino a 0 punti."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabella delle Relazioni",
    "title": "Dodici Rami Terrestri — Combinazione, Conflitto, Discordia",
    "summary": "Questa è una tabella delle relazioni utilizzata sia per la compatibilità dei rami del giorno che per la compatibilità zodiacale. Rivela completamente cosa significa ciascuna combinazione, conflitto e discordia e i rispettivi punteggi.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "I rami terrestri consistono di dodici caratteri",
        "blocks": [
          {
            "p": "I dodici rami terrestri (十二支) sono 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. I segni zodiacali comunemente conosciuti sono associati a ciascuno di questi dodici caratteri."
          },
          {
            "figure": "branch-wheel",
            "caption": "Disporre i dodici caratteri in un cerchio fornisce una chiara visione delle relazioni. Un conflitto si trova sempre direttamente opposto, mentre una coppia a sei armonie e una discordia tranquilla sono vicini vicini. Queste linee derivano direttamente dalle regole di calcolo, non sono scritte nel testo.",
            "labels": {
              "alt": "Un diagramma che mostra i dodici rami terrestri disposti in un cerchio con linee che collegano sei armonie, conflitto e discordia.",
              "yukhap": "Sei Armonie",
              "chung": "Conflitto",
              "wonjin": "Discordia",
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
            }
          },
          {
            "p": "Nel saju, ciascuno dei quattro pilastri ha un ramo terrestre. Inyeon-Link utilizza il **ramo del giorno** (il palazzo del coniuge) e il **ramo dell'anno** (l'animale zodiacale) tra di essi. Entrambe le posizioni sono valutate utilizzando la tabella delle relazioni qui sotto."
          }
        ]
      },
      {
        "title": "Tabella delle Relazioni Completa",
        "blocks": [
          {
            "table": {
              "caption": "Ordinato per punteggio più alto. Questi sono i valori effettivamente utilizzati da Inyeon-Link.",
              "head": [
                "Relazione",
                "Coppia Corrispondente",
                "Significato",
                "Punteggio"
              ],
              "rows": [
                [
                  "Combinazione (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Quando tutti e tre i caratteri si riuniscono, formano una formazione elementale completa — un **guk** (局). Questa è considerata la combinazione più forte.",
                  "{scoreSamhap}"
                ],
                [
                  "Sei-Armonia (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Coppie che si attraggono. Questa è la combinazione più comune nella compatibilità poiché consiste in soli due caratteri.",
                  "{scoreYukhap}"
                ],
                [
                  "Mezza triade (半合)",
                  "Due caratteri che includono un ramo reale (王地) dalla triade (子·酉·午·卯)",
                  "Una mezza combinazione che include il carattere al centro della formazione. Non può formare una combinazione completa con solo due caratteri, rendendola inferiore a una triade completa.",
                  "{scoreBanhap}"
                ],
                [
                  "Stesso ramo terrestre",
                  "子子 · 丑丑 …",
                  "Caratteri che sono gli stessi. Questo significa che si somigliano, ma non implica attrazione, quindi è collocato nel mezzo.",
                  "{scoreSame}"
                ],
                [
                  "Neutro",
                  "Coppie che non appartengono a nessuna delle categorie sopra o sotto",
                  "Una combinazione senza relazione speciale. Questo è il punto di riferimento.",
                  "{scoreNeutral}"
                ],
                [
                  "Discordia tranquilla (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Coppie che non possono separarsi nonostante nutrano risentimento. Appaiono tranquille in superficie ma si ritiene che durino a lungo.",
                  "{scoreWonjin}"
                ],
                [
                  "Scontro (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Coppie che si scontrano frontalmente. Queste sono sei coppie che si fronteggiano.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Le triadi complete non appaiono in questo servizio",
        "blocks": [
          {
            "p": "Una triade completa richiede tre caratteri per formarsi. Tuttavia, la compatibilità è strutturata abbinando i rami terrestri di due persone **uno a uno**, risultando in soli due caratteri. Pertanto, ciò che appare qui è sempre una mezza triade, e i punti della triade completa {scoreSamhap} sono riservati per l'esame delle formazioni all'interno di ciascun saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Le mezze triadi devono includere un ramo reale",
        "blocks": [
          {
            "p": "Esiste anche un metodo che conta come una mezza triade se entrambi i caratteri appartengono allo stesso gruppo di triade. Questo può portare a punteggi elevati anche per combinazioni che sono difficili da definire come triade, come 申辰. Pertanto, questo servizio riconosce una mezza triade solo per coppie che includono un ramo reale (王地) (子·酉·午·卯), e combinazioni come 申辰·巳丑·寅戌·亥未 senza un ramo reale non sono conteggiate come triadi."
          }
        ]
      },
      {
        "title": "Il motivo per cui si separa la discordia tranquilla",
        "blocks": [
          {
            "p": "Le sei coppie di discordia tranquilla sono viste frequentemente nella compatibilità quanto gli scontri. Se consideriamo le combinazioni come coppie e scontri, queste sei coppie sarebbero tutte sepolte sotto i punti neutri {scoreNeutral}, quindi sono collocate separatamente."
          },
          {
            "p": "Mentre gli scontri sono evidenti e colpiscono, la discordia tranquilla è sottilmente disallineata. Pertanto, è collocata a un punteggio di {scoreWonjin}, che è superiore agli scontri ({scoreChung}) ma decisamente inferiore al neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "I punteggi sono assegnati anche agli scontri",
        "blocks": [
          {
            "p": "Il punteggio di scontro più basso è {scoreChung}. L'intenzione non è quella di assegnare un valore vicino a 0. Nella tradizione, uno scontro non è una 'fine' ma una 'collisione', e assegnare un punteggio basso implicherebbe che il servizio sta facendo una dichiarazione definitiva sulla relazione."
          },
          {
            "p": "Con un minimo di {scoreChung} e un massimo di {scoreSamhap}, l'intervallo è chiaro, ma non fa una conclusione definitiva."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiaco",
    "title": "Perché la compatibilità zodiacale considera il ramo dell'anno?",
    "summary": "Il zodiac è il ramo terrestre dell'anno di nascita. Questo spiega perché è derivato dal pilastro dell'anno del saju piuttosto che dall'anno solare, e chiarisce il significato della compatibilità zodiacale.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Il zodiac è il ramo terrestre dell'anno di nascita",
        "blocks": [
          {
            "p": "Il saju è composto da quattro pilastri: anno, mese, giorno e ora, con ogni pilastro contenente un cielo stem e un ramo terrestre. Il **ramo dell'anno** è quello che porta l'animale che chiamiamo segno zodiacale."
          },
          {
            "table": {
              "caption": "I Dodici Rami Terrestri e il Zodiac",
              "head": [
                "Ramo Terrestre",
                "Zodiac"
              ],
              "rows": [
                [
                  "子",
                  "Topo"
                ],
                [
                  "丑",
                  "Bue"
                ],
                [
                  "寅",
                  "Tigre"
                ],
                [
                  "卯",
                  "Coniglio"
                ],
                [
                  "辰",
                  "drago"
                ],
                [
                  "巳",
                  "serpente"
                ],
                [
                  "午",
                  "cavallo"
                ],
                [
                  "未",
                  "pecora"
                ],
                [
                  "申",
                  "scimmia"
                ],
                [
                  "酉",
                  "gallo"
                ],
                [
                  "戌",
                  "cane"
                ],
                [
                  "亥",
                  "maiale"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Utilizziamo l'anno del saju, non l'anno solare",
        "blocks": [
          {
            "p": "Il punto in cui cambia il zodiac non è né il 1 gennaio del calendario solare né il Capodanno lunare. Lo standard per cambiare l'anno nel saju è **Ipchun**. Pertanto, coloro che sono nati a gennaio o all'inizio di febbraio potrebbero avere un anno zodiacale diverso da quello del calendario."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il motivo per cui non chiediamo direttamente del zodiac",
        "blocks": [
          {
            "p": "Ecco perché raccogliamo solo la data di nascita senza chiedere il zodiac nella schermata di input. Quando il motore del saju calcola il ramo dell'anno, il confine di Ipchun viene automaticamente regolato. Se lo selezioni direttamente, qualcuno nato all'inizio di febbraio potrebbe scegliere un zodiac che non corrisponde al proprio."
          }
        ]
      },
      {
        "title": "La compatibilità zodiacale considera solo una relazione",
        "blocks": [
          {
            "p": "Il calcolo della compatibilità zodiacale è semplice. Confronta i rami dell'anno di due persone per determinare se la relazione è armoniosa, un conflitto o una discordia silenziosa, e utilizza quel punteggio così com'è. Poiché c'è solo un elemento, non è necessario distribuire pesi."
          },
          {
            "p": "I punteggi per ogni relazione sono tutti elencati nella [Tabella delle Relazioni dei Dodici Rami](/guide/branches). La compatibilità del ramo del giorno utilizza la stessa tabella."
          }
        ]
      },
      {
        "title": "Il motivo per determinare il peso",
        "blocks": [
          {
            "p": "La compatibilità zodiacale conta per {weightZodiac} del tasso finale di corrispondenza. Mentre la compatibilità del saju considera tutti e quattro i pilastri, il zodiac considera solo un carattere, quindi non possono essere pesati in modo uguale."
          },
          {
            "p": "Tuttavia, ci sono due motivi per cui non viene escluso."
          },
          {
            "ul": [
              "**È l'elemento più intuitivamente comprensibile**. Anche senza conoscere il vocabolario della tradizione, 'la tigre e la scimmia si scontrano' ha senso.",
              "**È l'unico asse che non fluttua anche se l'ora di nascita è sconosciuta**. Se non conosci l'ora, il pilastro dell'ora è mancante e la forza dei cinque elementi cambia, ma il ramo dell'anno rimane lo stesso."
            ]
          }
        ]
      },
      {
        "title": "Puoi anche visualizzare la compatibilità zodiacale separatamente",
        "blocks": [
          {
            "p": "Nella schermata dei risultati, mostriamo i punteggi sia per la compatibilità del saju che per quella zodiacale separatamente. Se viene presentato solo il tasso finale di corrispondenza, non è chiaro da dove provenga quel numero. Se i due valori sono significativamente diversi, ciò stesso è degno di nota."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Dieci Dei",
    "title": "Dieci Dei e Posizione del Coniuge",
    "summary": "Esaminiamo cosa rappresenta il giorno di ciascuna persona rispetto all'altra attraverso i Dieci Dei. Spieghiamo perché la ricchezza diretta e la ricchezza indiretta vengono lette in modo diverso anche se entrambe sono ricchezze.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Il giorno del tronco è la persona stessa",
        "blocks": [
          {
            "p": "Tra i otto caratteri del saju, il **tronco del giorno** (il tronco celeste del giorno di nascita) si riferisce alla persona stessa. Gli altri sette caratteri vengono letti come l'ambiente in cui quel tronco del giorno è collocato."
          },
          {
            "p": "I **Dieci Dei** (十神) dividono come il tronco del giorno percepisce gli altri caratteri in dieci categorie. Ciò che mi nutre è **risorsa**, ciò che è uguale a me è **pari**, ciò che produco è **output**, ciò che controllo è **ricchezza**, e ciò che mi controlla è **autorità** — ognuno dei cinque è poi suddiviso per polarità, creando dieci."
          }
        ]
      },
      {
        "title": "Cosa rappresenta il tronco del giorno di ciascuna persona l'uno per l'altro",
        "blocks": [
          {
            "p": "Questo è il primo elemento nella compatibilità. Una volta determinato come il tronco del giorno di A percepisce il tronco del giorno di B, viene anche determinata la percezione di B su A, quindi ci sono **solo sei possibilità**."
          },
          {
            "table": {
              "caption": "In ordine di punteggio più alto",
              "head": [
                "Coppia",
                "Yin/Yang",
                "Nome",
                "Significato"
              ],
              "rows": [
                [
                  "Ricchezza Diretta ↔ Autorità Diretta",
                  "Polarità opposta",
                  "Legame caldo (有情)",
                  "Questa è la coppia tradizionalmente vista come la posizione del coniuge. Lo yin e lo yang sono disallineati, attirandosi a vicenda."
                ],
                [
                  "Ufficiale Ferito ↔ Risorsa Diretta",
                  "Polarità opposta",
                  "Ufficiale Ferito con il Sigillo (傷官佩印)",
                  "Un lato avvolge l'energia intensa dell'altro lato."
                ],
                [
                  "Amico ↔ Amico",
                  "Stessa polarità",
                  "Uguale",
                  "Si somigliano e sono uguali, ma non si spingono a vicenda."
                ],
                [
                  "Rivale ↔ Rivale",
                  "Polarità opposta",
                  "Competizione",
                  "Si attraggono a vicenda ma competono per la stessa posizione."
                ],
                [
                  "Ricchezza Indiretta ↔ Autorità Indiretta",
                  "Stessa polarità",
                  "Legame freddo (無情)",
                  "La stimolazione è grande, ma anche il peso è pesante."
                ],
                [
                  "Dio che Mangia ↔ Risorsa Indiretta",
                  "Stessa polarità",
                  "La stella gufo ruba il cibo (梟神奪食)",
                  "L'energia data viene presa dal corrispondente, bloccando il flusso."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin e Yang sono a un bivio",
        "blocks": [
          {
            "p": "Il lato in cui yin e yang sono disallineati (Ricchezza Propria, Ufficiale Proprio, Compagno Proprio) è emotivo, mentre lo stesso lato (Risorsa, Ufficiale, Compagno) è inemotivo, il che è il principio che distingue il proprio e il lato dei Dieci Dei."
          }
        ]
      },
      {
        "title": "Il motivo per cui si osserva con i Dieci Dei piuttosto che con i tre elementi",
        "blocks": [
          {
            "p": "Esiste un metodo per osservare la relazione del tronco del giorno con i tre elementi (generazione reciproca, uguaglianza, superamento reciproco). È semplice, ma **yin e yang scompaiono.** 甲 (legno yang) e 乙 (legno yin) diventano la stessa 'uguaglianza' come 甲 e 甲, e il superamento reciproco viene schiacciato in un unico punteggio senza direzione o yin e yang."
          },
          {
            "p": "La posizione del coniuge deve essere valutata in termini di Dieci Dei. Se gli elementi osservati dai cinque elementi e gli elementi osservati dai Dieci Dei sono mescolati in un unico motore, ci saranno due standard per gli stessi due caratteri. Pertanto, ci unifichiamo con i Dieci Dei."
          }
        ]
      },
      {
        "title": "La posizione del coniuge è Ricchezza Propria e Ufficiale Proprio",
        "blocks": [
          {
            "p": "Nella tradizione, quale dei Dieci Dei rappresenta un coniuge varia in base al genere."
          },
          {
            "table": {
              "head": [
                "Genere",
                "Posizione del Coniuge",
                "Posizione Corrispondente"
              ],
              "rows": [
                [
                  "Maschio",
                  "Ricchezza Diretta (正財)",
                  "Ricchezza Indiretta (偏財)"
                ],
                [
                  "Femmina",
                  "Autorità Diretta (正官)",
                  "Autorità Indiretta (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Anche se sono la stessa risorsa, solo il **Proper Wealth** emotivo è considerato la posizione del coniuge, mentre la Risorsa è letta come la natura dell'attività e della ricchezza. Pertanto, Proper Wealth e Proper Officer contano come 2 punti, mentre Risorsa e Officer contano come 1 punto, e entrambe le direzioni vengono sommate — se entrambe sono viste come posizioni coniugali, è il punteggio più alto."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se il genere non è divulgato, omettere questo elemento",
        "blocks": [
          {
            "p": "Se un elemento indecidibile è impostato a 0 punti, si traduce in un punteggio ingiustamente basso. Il peso rimanente dopo aver omesso l'elemento viene normalizzato di nuovo [(elemento e peso)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Mostriamo anche la forma della relazione",
        "blocks": [
          {
            "p": "Oltre al punteggio, descriviamo **che forma** ha la coppia di day stems nella schermata dei risultati. Se sono posizioni simili, se un lato supporta l'altro, o se un lato è soppresso — se si tratta di una relazione di supporto o di soppressione, chiariremo quale lato detiene quella posizione."
          },
          {
            "p": "Se viene presentato solo un punteggio, lascia la domanda 'e quindi?'. La forma non è un punteggio ma qualcosa da leggere, e anche le coppie con punteggi bassi hanno qualcosa da interpretare."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "I cinque elementi",
    "title": "Elemento di Supporto — L'energia necessaria ora",
    "summary": "Consideriamo i cinque elementi non come 'hanno scelto due' ma come 'il mio partner ha ciò di cui ho bisogno'. Riveliamo anche il valore limite che distingue un day master forte da uno debole.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Se i cinque elementi sono 'bilanciati' non è una questione di compatibilità",
        "blocks": [
          {
            "p": "Esiste un metodo per misurare se le cinque energie sono distribuite in modo uniforme combinando i cinque elementi delle due persone. Tuttavia, la questione della compatibilità non è quella. **Il partner ha ciò di cui ho bisogno?**"
          },
          {
            "p": "Il grado di equilibrio è simmetrico, ma la complementarietà è intrinsecamente asimmetrica. Questo perché ciò di cui A ha bisogno è diverso da ciò di cui B ha bisogno. Pertanto, misuriamo ciascun lato separatamente e facciamo una media — poiché si tratta di una media, il punteggio totale rimane simmetrico."
          }
        ]
      },
      {
        "title": "Elemento di Supporto — Ridurre se eccessivo, aggiungere se insufficiente",
        "blocks": [
          {
            "p": "L'Elemento di Supporto (用神) è 'l'energia di cui questa persona ha bisogno in questo momento'. Ci sono diversi metodi per determinarlo (soppressione, supporto, malattia e comunicazione), ma può essere tradotto in regole, e il più utilizzato è **soppressione (抑扶)**. Se il day master è forte, si vede che è necessaria l'energia da ridurre, e se è debole, è necessaria l'energia da aggiungere."
          },
          {
            "table": {
              "head": [
                "Giudizio",
                "Cosa è necessario",
                "Quanti"
              ],
              "rows": [
                [
                  "Strong day master (身强)",
                  "Energia in diminuzione — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tre"
                ],
                [
                  "Weak day master (身弱)",
                  "Energia da aggiungere — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Due"
                ],
                [
                  "Bilanciato (中和)",
                  "Non può essere coperto dall'elemento di supporto, quindi è l'energia più sottile",
                  "Due"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Valori soglia per forza e debolezza",
        "blocks": [
          {
            "p": "Il lato del day stem è **印星 e 比劫** — l'energia che mi genera e l'energia che è simile a me. Poiché due su cinque, se l'energia è completamente bilanciata, diventa {evenAllyRatio}. Viene impostato un intervallo sopra e sotto quel valore."
          },
          {
            "table": {
              "caption": "La proporzione di alleati (印星 + 比劫) nel potere totale",
              "head": [
                "Proporzione",
                "Giudizio"
              ],
              "rows": [
                [
                  "{strongThreshold} o più",
                  "Strong day master"
                ],
                [
                  "{weakThreshold} o più e meno di {strongThreshold}",
                  "Bilanciato"
                ],
                [
                  "Meno di {weakThreshold}",
                  "Weak day master"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "L'equilibrio è un 'giudizio meno certo'",
        "blocks": [
          {
            "p": "L'equilibrio significa che non può essere coperto dall'elemento di supporto. A questo punto, vediamo semplicemente le due energie più sottili come necessarie. Nella schermata dei risultati, viene annotato come 'attualmente in una posizione sottile' piuttosto che una dichiarazione definitiva."
          }
        ]
      },
      {
        "title": "Il potere non è il numero di caratteri",
        "blocks": [
          {
            "p": "Quando contiamo il potere dei cinque elementi, non contiamo semplicemente gli otto caratteri così come appaiono. Utilizziamo un valore che riflette i heavenly stems nascosti (地藏干) all'interno degli earthly branches e la stagione dell'energia del mese (月令) in cui si è nati."
          },
          {
            "p": "Se contiamo solo i caratteri superficiali, perdiamo il fatto che anche due caratteri di 木 possono avere forze completamente diverse a seconda della stagione. Il 木 di primavera e il 木 di autunno, sebbene siano lo stesso carattere, hanno poteri diversi."
          }
        ]
      },
      {
        "title": "Punteggio del grado di riempimento",
        "blocks": [
          {
            "p": "Osserviamo la proporzione del mio elemento di supporto nel potere dell'avversario. Tuttavia, non utilizziamo direttamente quella proporzione ma **dividiamo l'aspettativa per la dimensione dell'elemento di supporto.** Quando è forte, l'elemento di supporto è tre (aspettativa 60%), e quando è debole, è due (aspettativa 40%), quindi utilizzare direttamente la proporzione significherebbe che una persona forte riceve sempre un punteggio più alto."
          },
          {
            "p": "Se riempito al livello atteso, si ottiene un punteggio vicino a 78 punti, e se riempito molto di più, si raggiungono 100 punti, mentre se è significativamente carente, si scende verso 55 punti. Anche qui, il fondo non è impostato a 0."
          }
        ]
      },
      {
        "title": "Questo è un giudizio preliminare",
        "blocks": [
          {
            "p": "L'analisi reale del saju considera la formazione e il clima stagionale (il calore e l'umidità della stagione) per determinare l'elemento di supporto, e le conclusioni possono variare a seconda del metodo utilizzato. Inyeon-Link utilizza solo gli elementi di supporto che possono essere misurati tramite **valori di potere.** Questo è dovuto al principio di utilizzare solo ciò che può essere tradotto in regole, quindi lo stesso input produrrà sempre la stessa risposta."
          },
          {
            "p": "Invece, la schermata dei risultati presenta anche la forza e la debolezza di ciascuna persona insieme all'energia attualmente necessaria come **materiale di lettura**. Questo per evitare di nascondere la base del punteggio."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "I nostri standard",
    "title": "Inyeon’s Match — Il motivo per cui non forniamo un punteggio totale",
    "summary": "Prendiamo solo i dati di una persona lasciando vuota la posizione dell'avversario e sostituiamo tutti i valori possibili in quella posizione. Spieghiamo il motivo per cui non viene allegato un punteggio totale al tipo ottenuto in questo modo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "I calcoli vengono effettuati lasciando vuota la posizione dell'avversario",
        "blocks": [
          {
            "p": "I punteggi di compatibilità vengono calcolati abbinando due persone. **Inyeon’s Match** prende solo i dati di una persona lasciando vuota la posizione dell'avversario e testa tutti i valori possibili che potrebbero entrare in quella posizione. È come eseguire il motore di compatibilità al contrario."
          },
          {
            "p": "Pertanto, non è necessario conoscere la data di nascita dell'avversario. Possiamo comunque dire: 'Quale tipo di profilo di abbinamento è adatto a me?' riguardo a qualcuno che non abbiamo ancora incontrato."
          }
        ]
      },
      {
        "title": "Non eseguiamo milioni di combinazioni",
        "blocks": [
          {
            "p": "Il punteggio di compatibilità nel saju consiste in quattro elementi, e **ogni elemento non si sovrappone in ciò che esamina.**"
          },
          {
            "table": {
              "head": [
                "Elemento",
                "Qual è l'asse di esame",
                "Numero di casi"
              ],
              "rows": [
                [
                  "Relazione tra giorno stem · Natura coniugale",
                  "I day stems di entrambe le persone — heavenly stems",
                  "10"
                ],
                [
                  "Complemento dei cinque elementi",
                  "Il mio elemento di supporto e la potenza dei cinque elementi dell'avversario",
                  "5"
                ],
                [
                  "Relazione tra day branch",
                  "i day branches delle due persone",
                  "12"
                ],
                [
                  "Relazione zodiacale",
                  "i year branches delle due persone",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Poiché i valori non si scambiano tra gli elementi, **trovare il punto più alto per ciascun ramo sarà il punteggio complessivo più alto**. Non è necessario controllare tutte le combinazioni di date di nascita: basta impostare i dieci heavenly stems, dodici earthly branches e cinque elementi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Le stesse regole si applicano",
        "blocks": [
          {
            "p": "I punteggi scritti qui sono direttamente estratti dal motore di compatibilità. Poiché non sono state create nuove regole, il tipo che emerge qui avrà anche il punteggio più alto per quell'elemento nella compatibilità reale. Se le regole di compatibilità vengono cambiate, questo schermo seguirà di conseguenza."
          }
        ]
      },
      {
        "title": "Non viene fornito un punteggio totale",
        "blocks": [
          {
            "p": "Questa è la decisione più importante su questo schermo. Raccogliere i punteggi più alti per ciascun ramo può sembrare produrre un 'abbinamento perfetto', ma quella persona potrebbe **non esistere realmente.**"
          },
          {
            "p": "Nelle persone reali, il day master e i cinque elementi non operano separatamente. Una persona con 甲木 di solito ha anche una forte energia 木. Questo metodo di conteggio dei rami separatamente ignora quella correlazione, quindi il valore ottenuto collegando i punteggi più alti per ciascun ramo diventa una combinazione che non esiste nella realtà."
          },
          {
            "p": "Pertanto, lo schermo mostra solo **i punteggi degli elementi** e non fornisce un punteggio totale. Il punteggio totale sarà calcolato ricevendo la data di nascita dell'altra persona per [saju compatibility](/compatibility)."
          }
        ]
      },
      {
        "title": "Come leggere 'tipi di abbinamento'",
        "blocks": [
          {
            "p": "Il risultato significa 'se incontri una persona di questo tipo, questo elemento avrà un punteggio elevato'. Non è un criterio per scegliere una persona, ma piuttosto un modo per leggerlo da una prospettiva di comprensione di me stesso."
          },
          {
            "p": "I motivi per cui determinati tipi hanno ottenuto punteggi elevati sono anche annotati elemento per elemento — se il day master è in una posizione favorevole, o se quella persona possiede l'energia di cui ho attualmente bisogno."
          }
        ]
      },
      {
        "title": "Strumento di conferma",
        "blocks": [
          {
            "p": "Potresti essere curioso se la persona che hai in mente corrisponde a quel tipo. Inserendo la loro data di nascita nello strumento di conferma nella schermata dei risultati, sarai informato del loro day master, day branch e year branch. I valori inseriti non vengono salvati in questo momento [(non salvati)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Tempo",
    "title": "Convertire l'orario di nascita in tempo solare vero",
    "summary": "L'ora standard e la posizione reale del sole differiscono. Il tempo deve essere corretto in base alla longitudine del luogo di nascita per spiegare perché il pilastro temporale è accurato.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "L'ora sull'orologio e l'ora del sole sono diverse",
        "blocks": [
          {
            "p": "Il pilastro temporale (時柱) del saju è determinato dalla posizione del sole. Tuttavia, l'orologio che vediamo utilizza un'unica ora standard per l'intero paese, il che causa una discrepanza con la posizione reale del sole."
          },
          {
            "p": "L'ora standard della Corea è basata sulla longitudine 135° est. Poiché la longitudine di Seoul è di circa 127°, è approssimativamente 8° a ovest, causando il fatto che il sole raggiunga il suo zenit più tardi — quando è mezzogiorno secondo l'orologio, il sole a Seoul non ha ancora raggiunto il suo zenit. Questa differenza è di circa **32 minuti**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuti cambiano il pilastro temporale di uno slot",
        "blocks": [
          {
            "p": "Il tempo nel saju è diviso in unità di due ore. Coloro che sono nati vicino al confine avranno il loro pilastro temporale completamente cambiato da una differenza di 32 minuti — questa correzione è necessaria per coloro che cadono esattamente su questo confine."
          }
        ]
      },
      {
        "title": "Perché chiediamo il luogo di nascita",
        "blocks": [
          {
            "p": "Se la longitudine è diversa, anche l'importo della correzione varierà. Applicare la correzione basata su Seoul a qualcuno nato all'estero comporterà una discrepanza significativa nel pilastro temporale. Pertanto, la schermata di input richiede di selezionare il luogo di nascita, e il calcolo si basa sulla longitudine e sull'ora standard di quella città. Attualmente, ci sono {cityCount} luoghi nella lista."
          },
          {
            "p": "In luoghi dove la longitudine varia notevolmente anche all'interno dello stesso paese (come USA, Russia, Indonesia, ecc.), le città sono state suddivise. **15° di longitudine equivalgono a uno slot del pilastro temporale**."
          },
          {
            "p": "Se non selezioni, il calcolo si baserà su Seoul. Poiché la maggior parte delle nascite è nazionale, questo riduce la possibilità di errore, ma se sei nato all'estero, assicurati di selezionare."
          }
        ]
      },
      {
        "title": "L'ora standard è cambiata diverse volte in passato",
        "blocks": [
          {
            "p": "C'è un motivo per cui la correzione non può essere calcolata semplicemente come 'differenza di longitudine ÷ 15° × 60 minuti'. L'ora standard stessa è variata nel corso delle diverse epoche."
          },
          {
            "table": {
              "caption": "Cambiamenti nell'ora standard della Corea — coloro che sono nati in questo periodo avranno discrepanze con calcoli semplici",
              "head": [
                "Periodo",
                "Cosa era diverso"
              ],
              "rows": [
                [
                  "Prima del 1912",
                  "Non c'era un'ora standard (ora media locale)"
                ],
                [
                  "1954 – 1961",
                  "L'ora standard era UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "È stato implementato l'ora legale"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link non utilizza un valore fisso per il meridiano standard, ma calcola l'ora standard che è stata effettivamente utilizzata in quel momento basandosi sulle informazioni sul **fuso orario IANA** del luogo di nascita. L'ora legale e le ore standard passate sono automaticamente riflesse."
          }
        ]
      },
      {
        "title": "Le nascite subito dopo la mezzanotte considerano anche la data",
        "blocks": [
          {
            "p": "Poiché la correzione è di -32 minuti, coloro che sono nati tra le 00:00 e le 00:32 secondo l'orologio saranno **23:00 del giorno precedente** in vero tempo solare. Se solo l'ora viene riportata indietro e la data rimane invariata, verrà scritto il ramo del giorno come '23:00 del giorno precedente'."
          },
          {
            "p": "Inyeon-Link riporterà anche la data in questo caso. Il ramo del giorno indica la persona stessa nel saju, quindi se questo è errato, quasi tutti gli elementi di compatibilità saranno errati."
          }
        ]
      },
      {
        "title": "Non è necessario conoscere l'ora",
        "blocks": [
          {
            "p": "L'orario di nascita è facoltativo. Se non lo conosci, il calcolo sarà effettuato senza il pilastro temporale, e questo fatto sarà visualizzato nella schermata dei risultati. Non ci sono elementi nella compatibilità che richiedano che il pilastro temporale sia scritto direttamente, ma esso influisce sugli the five elements, quindi se lo conosci, è più preciso includerlo."
          },
          {
            "p": "La compatibilità zodiacale è sempre lo stesso valore indipendentemente dall'ora — [perché guarda solo il ramo dell'anno](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informazioni personali",
    "title": "Metodo per non memorizzare le informazioni inserite",
    "summary": "Questo spiega cosa significa tecnicamente che la tua data di nascita non è registrata da nessuna parte e cosa è incluso nel link dei risultati.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Nessuna registrazione richiesta",
        "blocks": [
          {
            "p": "Inyeon-Link non crea account. Non raccoglie nomi, email o numeri di telefono. L'unica informazione raccolta è la data di nascita e (facoltativamente) l'ora di nascita, il luogo di nascita e il genere, e anche quella non rimane dopo il completamento del calcolo."
          },
          {
            "p": "C'è un campo per inserire un titolo da visualizzare nella schermata dei risultati, ma quello è **solo per scopi di visualizzazione** e non viene utilizzato nel calcolo. Non è necessario inserire il tuo vero nome."
          }
        ]
      },
      {
        "title": "Cosa è incluso nel link dei risultati?",
        "blocks": [
          {
            "p": "Una volta completato il calcolo, l'indirizzo appare così."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ciò che segue **#** sono i valori di input. Questa parte è chiamata **frammento**, che è una **sezione che il browser non invia al server**. Questo è un comportamento web standard e non una regola che abbiamo creato — è stato originariamente progettato per indicare una posizione all'interno di un documento, quindi il server non ha bisogno di vederlo."
          },
          {
            "p": "In altre parole, quando apri il link dei risultati, il browser legge quel valore per richiedere il calcolo, e il nostro server riceve i valori necessari per il calcolo, restituisce la risposta e poi se ne dimentica."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si prega di fare attenzione quando si inviano link ad altri",
        "blocks": [
          {
            "p": "Il fatto che non sia memorizzato sul server e che il link sia sicuro non sono la stessa cosa. Il link dei risultati contiene entrambe le tue date di nascita, quindi la persona che riceve quel link può vedere lo stesso risultato."
          }
        ]
      },
      {
        "title": "Perché il calcolo viene effettuato sul server ma non memorizzato?",
        "blocks": [
          {
            "p": "Il calcolo stesso viene effettuato sul server. Il the Korean lunisolar almanac è necessario per generare il saju, e quella tabella è troppo grande per essere inviata al browser. Tuttavia, **dopo aver elaborato la richiesta, quel valore non viene utilizzato da nessuna parte.** Non c'è codice per memorizzarlo in un database."
          },
          {
            "p": "Viene mantenuto un record minimo necessario per il funzionamento — un contatore per prevenire che la stessa persona invii troppe richieste in breve tempo. Questo non include la data di nascita, e l'IP di accesso non viene mantenuto nemmeno. Solo un valore, hashato con la data, viene conteggiato, e quel valore cambia quando cambia il giorno."
          }
        ]
      },
      {
        "title": "Cose che non possono essere fatte perché le informazioni non sono memorizzate",
        "blocks": [
          {
            "p": "Ad essere onesti, ci sono cose a cui abbiamo rinunciato perché non memorizziamo informazioni."
          },
          {
            "ul": [
              "**Non puoi recuperare risultati passati.** Devi avere il link per visualizzarli di nuovo.",
              "**Gli stessi valori saranno ricalcolati.** Non c'è cache. Tuttavia, poiché tutte le regole sono deterministiche, [lo stesso input produrrà sempre lo stesso valore](/guide/how-compatibility).",
              "**Aggiornare riporterà il gate pubblicitario.** Questo perché non c'è posto per mantenere i record di visualizzazione."
            ]
          }
        ]
      },
      {
        "title": "In caso di acquisto",
        "blocks": [
          {
            "p": "Se acquisti un rapporto, un record della transazione sarà mantenuto in quel momento. La legge specifica un periodo di conservazione per i pagamenti, e senza una cronologia degli ordini, i rimborsi non possono essere elaborati. Tuttavia, anche in questo caso, **la data di nascita utilizzata per i calcoli di compatibilità non è allegata all'ordine** — viene raccolta di nuovo quando si crea il PDF dopo la conferma del pagamento."
          },
          {
            "p": "I dettagli sono delineati nella [Privacy Policy](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Prodotti a pagamento",
    "title": "Cosa è incluso nel rapporto a pagamento?",
    "summary": "Questo spiega cosa è stato aggiunto al PDF mantenendo invariata la schermata, voce per voce. I valori e i contenuti sono letti dalle impostazioni del prodotto reale.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "La schermata rimane invariata, solo aggiunta al PDF",
        "blocks": [
          {
            "p": "I calcoli di compatibilità e le richieste di risultati sono **gratuiti**. I tassi di corrispondenza, i punteggi e i pesi degli elementi, i grafici originali del saju di entrambe le persone e la forma della relazione possono essere visualizzati sullo schermo. Niente è stato rimosso dallo schermo durante la creazione del rapporto a pagamento."
          },
          {
            "p": "Lo scopo del rapporto è **aggiungere strati che non sono sullo schermo**. E quello strato non è fabbricato; consiste di valori che sono già stati calcolati durante il processo di punteggio ma non sono stati utilizzati sullo schermo."
          }
        ]
      },
      {
        "title": "Rapporto di compatibilità Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Pagamento domestico {priceGunghapDomestic} (incluso IVA), pagamento internazionale {priceGunghapGlobal}. A4 {pagesGunghap} pagine."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Le pagine 1-3 sono organizzate per mantenere ciò che è sullo schermo** e **dalla pagina 4 in poi ci sono contenuti non visibili sullo schermo**. Di seguito, si spiega perché alcune cose non sono state visualizzate sullo schermo."
          }
        ]
      },
      {
        "title": "Pagina 4 — La direzione delle due energie",
        "blocks": [
          {
            "p": "Gli elementi dei cinque elementi sullo schermo sono presentati come un punteggio unico. Tuttavia, quel punteggio unico è la **media delle due direzioni** — misurando quanto l'altro mi riempie e quanto io riempio l'altro, e mediando quei valori."
          },
          {
            "p": "La complementarità è intrinsecamente **asimmetrica**. Questo perché le energie di cui ho bisogno e le energie di cui ha bisogno l'altro sono diverse. Se guardi solo la media, una relazione in cui un lato riempie significativamente l'altro e una relazione in cui entrambi si riempiono a vicenda appariranno come lo stesso numero. Il rapporto separa queste due."
          },
          {
            "p": "Incluso nella stessa sezione c'è il **grafico delle relazioni dei quattro pilastri**. L'unico che entra nel tasso di corrispondenza è il ramo del giorno (日支) — perché è la posizione del coniuge — ma gli altri rami dell'anno, del mese e dell'ora possono anche essere letti con lo stesso grafico delle relazioni."
          }
        ]
      },
      {
        "kind": "note",
        "title": "I punteggi in questa tabella non entrano nel tasso di corrispondenza",
        "blocks": [
          {
            "p": "Se inclusi, il punteggio totale cambierebbe e non corrisponderebbe al link del risultato già inviato. Pertanto, è incluso solo come materiale di lettura, e questo fatto è annotato sotto la tabella."
          }
        ]
      },
      {
        "title": "Pagina 5 — Uno sguardo più da vicino al saju di ciascuna persona",
        "blocks": [
          {
            "p": "Le barre dei cinque elementi sullo schermo mostrano **quanto è presente**. Il rapporto aggiunge **se il mese di nascita supporta quell'energia**. Anche con la stessa quantità, l'energia che è forte (旺) e l'energia che è morta (死) hanno forze diverse."
          },
          {
            "p": "Puoi vedere le forze prima e dopo la moltiplicazione per l'energia del mese affiancate, mostrando quanto la stagione l'ha spinta. Il **rapporto degli alleati** che distingue tra un giorno maestro forte e un giorno maestro debole è anche annotato — lo schermo mostra solo il giudizio, ma il rapporto mostra dove è stato fatto quel giudizio."
          }
        ]
      },
      {
        "title": "Pagina 6 — Cosa significano i quattro pilastri dell'altra persona per me",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": "Indica quanto è stato regolato l'orario di nascita rispetto al true solar time, se la correzione ha causato un cambiamento di data, e quali erano le date solari e lunari quando è stato generato il saju. Il concetto è spiegato nel documento [Regolazione dell'orario di nascita al vero tempo solare](/guide/true-solar-time), ma **il valore di quanti minuti sono stati regolati nel tuo caso** varia da persona a persona, quindi è incluso solo nel rapporto."
          }
        ]
      },
      {
        "title": "Rapporto di compatibilità Inyeon PDF — {priceAffinityDomestic}",
        "slot": "",
        "blocks": [
          {
            "p": "Pagamento domestico {priceAffinityDomestic} (IVA inclusa), pagamento internazionale {priceAffinityGlobal}. {pagesAffinity} pagine A4."
          }
        ]
      },
      {
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
          },
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
            "p": ""
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avviso",
    "title": "Annunci",
    "summary": "Questo è un luogo per informare i cambiamenti che influenzano l'uso.",
    "backLabel": "Torna alla Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contatto",
    "title": "Richieste",
    "summary": "Questo è il canale per richieste riguardanti l'uso, rimborsi, richieste di informazioni personali e segnalazioni di errori, insieme a informazioni aziendali.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "title": "Contatto via Email",
        "blocks": [
          {
            "p": "Si prega di inviare richieste a **{email}**. Risponderemo entro 2 giorni lavorativi. Per richieste di pagamento e rimborso, si prega di includere **il numero dell'ordine o l'email utilizzata per il pagamento** per una conferma più rapida."
          },
          {
            "p": "Le richieste telefoniche possono essere effettuate al {customerCenter}."
          }
        ]
      },
      {
        "title": "Cosa può essere inviato a questo canale?",
        "blocks": [
          {
            "ul": [
              "**Pagamento e Rimborso** — Se il documento non è stato creato o l'importo del pagamento differisce dall'ordine, verrà fornito un rimborso completo. Le condizioni sono nella [politica di rimborso](/refund-policy).",
              "**Informazioni Personali** — Accettiamo richieste di visualizzazione, correzione e cancellazione. La politica di elaborazione è nella [politica sulla privacy](/privacy).",
              "**Segnalazione di Errore di Calcolo** — Se il grafico originale del saju o il punteggio sembrano strani, ti preghiamo di farcelo sapere. Se includi quando hai inserito la data e l'ora, possiamo ricalcolare con gli stessi valori."
            ]
          }
        ]
      },
      {
        "title": "Informazioni Aziendali",
        "blocks": [
          {
            "ul": [
              "**Nome Azienda** — {companyName}",
              "**Rappresentante** — {representative}",
              "**Numero di Registrazione Aziendale** — {businessNumber}",
              "**Numero di Registrazione per Vendita per Posta** — {mailOrderNumber}",
              "**Indirizzo** — {address}",
              "**Centro Assistenza Clienti** — {customerCenter}",
              "**Email** — {email}",
              "**Responsabile della Protezione delle Informazioni Personali** — {privacyOfficer}",
              "**Fornitore di Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Non è necessario includere la tua data e ora di nascita nell'email di richiesta. Non salviamo gli input, quindi non possiamo recuperarli, e il numero d'ordine è sufficiente per la conferma. Si prega di includerlo solo se necessario per un rapporto di errore di calcolo."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "Servizio",
    "product": "Rapporti",
    "engine": "Calcolo",
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
        "Domande, rimborsi, richieste di privacy e segnalazioni di errori di calcolo ora hanno un unico luogo dove andare — consulta la pagina di contatto nel piè di pagina.",
        "Se qualcosa sembra calcolato in modo errato, ti preghiamo di includere i dettagli di nascita che lo hanno prodotto. Non memorizziamo ciò che inserisci, quindi senza di essi non possiamo riprodurre la lettura."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "I rapporti sono emessi in inglese per arabo e khmer",
      "body": [
        "Se stai leggendo in arabo o khmer, il rapporto PDF che acquisti è prodotto in inglese. Lo strumento che imposta i nostri documenti non può ancora impostare paragrafi in quegli script.",
        "Lo schermo rimane nella tua lingua e il tuo nome è stampato nel tuo script all'interno del rapporto.",
        "La stessa nota appare prima del pagamento. Quando lo strumento supporterà questi script, lo diremo qui."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Ogni lettura riporta la versione delle regole utilizzate",
      "body": [
        "Ogni lettura e rapporto riporta il set di regole utilizzato per produrlo (ad esempio inyeonlink-match-v10). Lo stesso input sullo stesso set di regole dà sempre gli stessi numeri.",
        "Se cambiamo le regole di interpretazione in un modo che può modificare un punteggio, lo pubblichiamo qui per primo, con la data in cui entra in vigore — perché un link di risultato che già possiedi leggerebbe diversamente.",
        "L'attuale set di regole è v10. I pagamenti non sono ancora aperti."
      ]
    }
  }
} satisfies NoticeCopy;
