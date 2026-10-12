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
            "p": "I punteggi derivano solo da regole fisse. Concetti tradizionali — dieci dei, relazioni tra rami, l'elemento di supporto — sono espressi come regole, quindi **lo stesso input dà sempre lo stesso risultato.** Quando una regola cambia, eseguiamo un test di regressione per assicurarci che le letture più vecchie non siano state alterate."
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
              "**Non facciamo previsioni.** Niente qui ti dice di perseguire o evitare qualcuno. È un riferimento tratto da una tradizione.",
              "**Non memorizziamo ciò che inserisci.** I dettagli di nascita sono utilizzati solo nel momento del calcolo e non vengono mai annotati; i link ai risultati vivono nella parte dell'URL che un browser non invia a un server.",
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
    "summary": "Inyeon-Link rivela tutte le regole che utilizza. Puoi controllare gli elementi e i loro pesi, i punteggi dalla tabella delle relazioni tra rami terrestri e i valori soglia che distinguono un tronco del giorno forte da uno debole — puoi vedere da dove provengono i numeri sullo schermo.",
    "backLabel": "Torna all'Inizio",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "I valori scritti qui sono tutti **lettura diretta dal codice di calcolo**. Poiché non sono trascritti manualmente nel testo, se le regole cambiano, i numeri in questo documento cambieranno."
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
            "p": "Il tasso di corrispondenza deriva da due rami. **La compatibilità Saju** considera l'intero grafico originale del saju di entrambi gli individui, mentre **la compatibilità zodiacale** considera solo un ramo terrestre dall'anno di nascita. Il valore finale è ottenuto attraverso una media ponderata dei due."
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
                  "Tronco del giorno, ramo del giorno e i cinque elementi — quattro elementi",
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
            "p": "Il lato saju è molto più pesante perché la quantità di informazioni utilizzate è diversa. Il saju considera tutti e quattro i pilastri, mentre lo zodiaco guarda solo a un carattere. Tuttavia, lo zodiaco non è escluso per due motivi — è l'elemento più intuitivamente comprensibile e rappresenta **l'unico asse il cui valore non fluttua nemmeno senza conoscere l'orario di nascita**."
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
            "caption": "Il saju è composto da otto caratteri formati dai tronchi celesti e dai rami terrestri dell'anno, mese, giorno e ora di nascita. Il tronco del giorno e il ramo del giorno menzionati di seguito sono i due caratteri nel pilastro del giorno.",
            "labels": {
              "year": "Pilastro dell'Anno",
              "yearNote": "Radice · Zodiaco",
              "month": "Pilastro del Mese",
              "monthNote": "Stagione · Potere",
              "day": "Pilastro del Giorno",
              "dayNote": "Io · Palazzo del Coniuge",
              "hour": "Pilastro dell'Ora",
              "hourNote": "Anni Successivi · Utilizzo",
              "stem": "Tronco Celeste",
              "stemNote": "Tronco del Giorno = Io",
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
                  "Relazione del Tronco del Giorno",
                  "Cosa sono i tronchi del giorno (日干) delle due persone l'uno rispetto all'altro — visto attraverso i Dieci Dei",
                  "{weightDayMaster}"
                ],
                [
                  "Complementazione dei Cinque Elementi",
                  "Il partner ha l'energia di cui ho bisogno — visto attraverso l'elemento di supporto di cui un grafico ha attualmente bisogno",
                  "{weightElementSupply}"
                ],
                [
                  "Stella del Coniuge",
                  "Il tronco del giorno del partner corrisponde alla mia posizione di coniuge?",
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
            "p": "Il ramo del giorno è interpretato perché la tradizione lo considera il **palazzo del coniuge**. Tra i quattro pilastri è quello che indica il partner, il che lo rende il primo luogo in cui si guarda la compatibilità."
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
            "p": "L'ora di nascita è utilizzata per determinare il pilastro dell'ora. Se sconosciuta, i calcoli saranno effettuati senza il pilastro dell'ora, e questo fatto sarà indicato sulla schermata dei risultati. Poiché non c'è un input diretto per il pilastro dell'ora tra i quattro elementi di compatibilità, i valori non fluttueranno significativamente, ma influisce sull'equilibrio dei cinque elementi."
          },
          {
            "p": "Se conosci l'ora, seleziona anche il luogo di nascita. Se l'ora standard differisce dalla posizione solare effettiva, utilizzarla così com'è potrebbe disallineare il pilastro dell'ora [(correzione dell'ora solare vera)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Lo stesso input produrrà sempre lo stesso valore",
        "blocks": [
          {
            "p": "Tutti i punteggi sono determinati da regole. Non viene utilizzata intelligenza artificiale, né vengono impiegati numeri casuali. Pertanto, inserire le stesse due date di nascita più volte non produrrà risultati diversi. Essendo un servizio che non memorizza dati, i risultati precedenti non possono essere recuperati, ma il **determinismo** compensa questo."
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
    "eyebrow": "Tabella delle relazioni",
    "title": "Come si incontrano gli animali dello zodiaco e i rami del giorno — La tabella dei dodici rami",
    "summary": "La tabella delle relazioni usata quando gli animali dello zodiaco e i rami del giorno di due persone vengono messi a confronto. Mostra, per ciascuno dei dodici, quali animali formano con esso un'armonia, uno scontro o una discordia, e rende noto il punteggio di ogni relazione.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Animali dello zodiaco e rami del giorno usano la stessa tabella",
        "blocks": [
          {
            "p": "Inyeon-Link mette a confronto i rami terrestri di due persone in due punti: la **compatibilità zodiacale**, che considera il ramo dell'anno di nascita, e la **compatibilità del ramo del giorno** (il palazzo del coniuge), che considera il ramo del giorno di nascita. Entrambe sono valutate con la tabella qui sotto; l'unica differenza è il peso che ciascuna ha nel punteggio finale."
          },
          {
            "figure": "branch-wheel",
            "caption": "Disporre i dodici caratteri in cerchio rende le relazioni chiare a colpo d'occhio. Un conflitto sta sempre esattamente di fronte, mentre una coppia di sei armonie e una discordia silenziosa sono vicini più prossimi. Queste linee non sono scritte a mano: sono tracciate direttamente dalle regole di calcolo.",
            "labels": {
              "alt": "Un diagramma che mostra i dodici rami terrestri disposti in cerchio, con linee che collegano le coppie di sei armonie, conflitto e discordia.",
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
              "goat": "Pecora",
              "monkey": "Scimmia",
              "rooster": "Gallo",
              "dog": "Cane",
              "pig": "Maiale"
            }
          }
        ]
      },
      {
        "title": "Le relazioni di ciascuno dei dodici animali dello zodiaco",
        "blocks": [
          {
            "p": "Per ogni animale, la tabella elenca con quali animali forma ciascuna relazione. Sono elencate solo le coppie che questo servizio riconosce come armonie, quindi un animale che non compare in una riga non ha con esso alcuna relazione particolare: è **neutro**."
          },
          {
            "table": {
              "caption": "Quattro tipi di relazione visti da un solo animale",
              "head": [
                "Il tuo animale",
                "Coppia che si attrae (Sei Armonie)",
                "Mezza triade",
                "In silenziosa discordia (Discordia)",
                "Scontro frontale (Conflitto)"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Bue",
                  "Scimmia · Drago",
                  "Pecora",
                  "Cavallo"
                ],
                [
                  "Bue (丑)",
                  "Topo",
                  "Gallo",
                  "Cavallo",
                  "Pecora"
                ],
                [
                  "Tigre (寅)",
                  "Maiale",
                  "Cavallo",
                  "Gallo",
                  "Scimmia"
                ],
                [
                  "Coniglio (卯)",
                  "Cane",
                  "Maiale · Pecora",
                  "Scimmia",
                  "Gallo"
                ],
                [
                  "Drago (辰)",
                  "Gallo",
                  "Topo",
                  "Maiale",
                  "Cane"
                ],
                [
                  "Serpente (巳)",
                  "Scimmia",
                  "Gallo",
                  "Cane",
                  "Maiale"
                ],
                [
                  "Cavallo (午)",
                  "Pecora",
                  "Tigre · Cane",
                  "Bue",
                  "Topo"
                ],
                [
                  "Pecora (未)",
                  "Cavallo",
                  "Coniglio",
                  "Topo",
                  "Bue"
                ],
                [
                  "Scimmia (申)",
                  "Serpente",
                  "Topo",
                  "Coniglio",
                  "Tigre"
                ],
                [
                  "Gallo (酉)",
                  "Drago",
                  "Serpente · Bue",
                  "Tigre",
                  "Coniglio"
                ],
                [
                  "Cane (戌)",
                  "Coniglio",
                  "Cavallo",
                  "Serpente",
                  "Drago"
                ],
                [
                  "Maiale (亥)",
                  "Tigre",
                  "Coniglio",
                  "Drago",
                  "Serpente"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Quando due persone si incontrano nella tabella",
        "blocks": [
          {
            "p": "Leggere la tabella significa trovare i due animali su una stessa riga. Ecco alcune coppie come esempio."
          },
          {
            "ul": [
              "**Topo e Bue** — una sei-armonie. Bastano due caratteri, quindi è l'armonia che compare più spesso nella compatibilità, ed è una buona armonia.",
              "**Topo e Drago** — una mezza triade: due dei tre caratteri 申子辰, compreso quello centrale (子).",
              "**Topo e Tigre** — non è nella tabella, quindi è neutra: né armonia né conflitto, solo la base di partenza.",
              "**Topo e Pecora** — una discordia. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo.",
              "**Tigre e Scimmia** — un conflitto. Stanno esattamente una di fronte all'altra e si considerano in collisione frontale."
            ]
          }
        ]
      },
      {
        "title": "Quanti punti ottiene ciascuna relazione",
        "blocks": [
          {
            "table": {
              "caption": "Dal più alto. Sono i valori che Inyeon-Link usa realmente.",
              "head": [
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Conflitto",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Lo stesso ramo (due persone dello stesso animale) indica somiglianza, non attrazione, quindi sta appena sopra il neutro. Che si tratti di compatibilità zodiacale o del ramo del giorno, il valore di questa tabella va direttamente nel punteggio finale."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perché le triadi complete non sono nella tabella",
        "blocks": [
          {
            "p": "Una triade completa (申子辰, 巳酉丑, 寅午戌, 亥卯未) richiede tutti e tre i caratteri. Mettendo a confronto due persone se ne hanno solo due, quindi una triade completa non può verificarsi nella compatibilità e compaiono solo le mezze triadi. Il punteggio della triade completa, {scoreSamhap}, è conservato per il caso in cui tre caratteri si trovino insieme nel tema di una sola persona."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 e 亥未 non sono contati come armonie",
        "blocks": [
          {
            "p": "Alcuni metodi contano come mezza triade due qualsiasi caratteri dello stesso gruppo di triade. Inyeon-Link no: come mostra la colonna della mezza triade qui sopra, accetta solo le coppie che includono il **ramo reale** al centro del gruppo (子, 午, 卯, 酉). Una coppia che non lo include non ha un centro attorno a cui la formazione possa raccogliersi, perciò è trattata come neutra."
          }
        ]
      },
      {
        "title": "Discordia e conflitto non stanno sul fondo",
        "blocks": [
          {
            "p": "Se si contassero solo armonie e conflitti, tutte e sei le coppie di discordia verrebbero sepolte nel neutro. Per questo la discordia ha un posto suo: più alta dello scontro frontale e più bassa del neutro, a {scoreWonjin} punti."
          },
          {
            "p": "Anche un conflitto conserva {scoreChung} punti. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione. Un valore vicino a zero porterebbe il servizio a pronunciare un verdetto su due persone, perciò l'intervallo è mantenuto abbastanza ampio da mostrare la differenza senza pronunciarne uno."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiaco",
    "title": "Perché la compatibilità zodiacale considera il ramo dell'anno?",
    "summary": "Lo zodiaco è il ramo terrestre dell'anno di nascita. Questo spiega perché è derivato dal pilastro dell'anno del saju piuttosto che dall'anno solare, e chiarisce il significato della compatibilità zodiacale.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Lo zodiaco è il ramo terrestre dell'anno di nascita",
        "blocks": [
          {
            "p": "Il saju è composto da quattro pilastri: anno, mese, giorno e ora, con ogni pilastro contenente un tronco celeste e un ramo terrestre. Il **ramo dell'anno** è quello che porta l'animale che chiamiamo segno zodiacale."
          },
          {
            "table": {
              "caption": "I Dodici Rami Terrestri e lo Zodiaco",
              "head": [
                "Ramo Terrestre",
                "Zodiaco"
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
            "p": "Il punto in cui cambia lo zodiaco non è né il 1° gennaio del calendario solare né il Capodanno lunare. Lo standard per cambiare anno nel saju è **Ipchun**. Pertanto, coloro che sono nati a gennaio o all'inizio di febbraio potrebbero avere un anno zodiacale diverso da quello del calendario."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il motivo per cui non chiediamo direttamente dello zodiaco",
        "blocks": [
          {
            "p": "Questo è il motivo per cui raccogliamo solo la data di nascita senza chiedere lo zodiaco nella schermata di input. Quando il motore del saju calcola il ramo dell'anno, il confine di Ipchun viene automaticamente regolato. Se lo selezioni direttamente, qualcuno nato all'inizio di febbraio potrebbe scegliere uno zodiaco che non corrisponde al suo reale."
          }
        ]
      },
      {
        "title": "La compatibilità zodiacale considera solo una relazione",
        "blocks": [
          {
            "p": "Il calcolo della compatibilità zodiacale è semplice. Confronta i rami dell'anno di due persone per determinare se la relazione è armoniosa, un conflitto o una discordia silenziosa, e utilizza quel punteggio così com'è. Poiché c'è solo un elemento, non c'è bisogno di distribuire pesi."
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
            "p": "La compatibilità zodiacale conta per {weightZodiac} del tasso finale di corrispondenza. Mentre la compatibilità del saju considera tutti e quattro i pilastri, lo zodiaco considera solo un carattere, quindi non possono essere pesati in modo uguale."
          },
          {
            "p": "Tuttavia, ci sono due motivi per cui non è escluso."
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
  "guide/zodiac-rat": {
    "eyebrow": "Per animale",
    "title": "Come il Topo incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Topo (子) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Topo è il primo dei dodici rami",
        "blocks": [
          {
            "p": "Il Topo è chi ha come ramo dell'anno di nascita **子**. 子 è il primo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 午 (il Cavallo)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Topo è: “Nota in fretta e in fretta si assicura ciò che conta. Il primo a muoversi in una crisi.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Topo. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Topo e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Bue (丑)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Tigre (寅)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Coniglio (卯)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Drago (辰)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Serpente (巳)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cavallo (午)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Pecora (未)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Scimmia (申)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Gallo (酉)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cane (戌)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Maiale (亥)",
                  "Neutra",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Bue — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "子 e 丑 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Topo e il Bue ottengono {scoreYukhap}, il massimo che il Topo può ottenere."
          }
        ]
      },
      {
        "title": "Drago e Scimmia — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "申子辰 è un gruppo di triade (il gruppo dell'acqua), e 子 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Topo forma una mezza triade ({scoreBanhap}) sia con il Drago sia con la Scimmia."
          },
          {
            "p": "**La Scimmia e il Drago insieme**, invece, non hanno il carattere centrale 子: la coppia non è contata come armonia ed è trattata come neutra. Anche all'interno di uno stesso gruppo di triade, è il Topo a formare la mezza triade."
          }
        ]
      },
      {
        "title": "Cavallo — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "子 e 午 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Topo può ricevere."
          }
        ]
      },
      {
        "title": "Pecora — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "子 e 未 stanno subito accanto a 午 (il Cavallo), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 6 animali, e il Topo con un altro Topo",
        "blocks": [
          {
            "p": "Tigre, Coniglio, Serpente, Gallo, Cane e Maiale non sono né un'armonia, né un conflitto, né una discordia con il Topo: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Topo ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Topo incontra una persona Cavallo, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Bue è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Topo i cui rami del giorno sono 子 e 午 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Per animale",
    "title": "Come il Bue incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Bue (丑) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Bue è il secondo dei dodici rami",
        "blocks": [
          {
            "p": "Il Bue è chi ha come ramo dell'anno di nascita **丑**. 丑 è il secondo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 未 (la Pecora)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Bue è: “Sembra lento ma porta a termine. Ciò che prende in carico non lo molla.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Bue. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Bue e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Bue (丑)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Tigre (寅)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Coniglio (卯)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Drago (辰)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cavallo (午)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Pecora (未)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Scimmia (申)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Cane (戌)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Maiale (亥)",
                  "Neutra",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Topo — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "丑 e 子 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Bue e il Topo ottengono {scoreYukhap}, il massimo che il Bue può ottenere."
          }
        ]
      },
      {
        "title": "Gallo — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "巳酉丑 è un gruppo di triade (il gruppo del metallo), e 酉 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Bue forma una mezza triade ({scoreBanhap}) solo con il Gallo."
          },
          {
            "p": "Con il Serpente (巳) dello stesso gruppo manca il carattere centrale 酉, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Pecora — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "丑 e 未 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Bue può ricevere."
          }
        ]
      },
      {
        "title": "Cavallo — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "丑 e 午 stanno subito accanto a 未 (la Pecora), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e il Bue con un altro Bue",
        "blocks": [
          {
            "p": "Tigre, Coniglio, Drago, Serpente, Scimmia, Cane e Maiale non sono né un'armonia, né un conflitto, né una discordia con il Bue: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Bue ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Bue incontra una persona Pecora, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Topo è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Bue i cui rami del giorno sono 丑 e 未 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Per animale",
    "title": "Come la Tigre incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha la Tigre (寅) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "La Tigre è il terzo dei dodici rami",
        "blocks": [
          {
            "p": "La Tigre è chi ha come ramo dell'anno di nascita **寅**. 寅 è il terzo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 申 (la Scimmia)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Tigre è: “Senza paura e in prima linea. Non riesce a lasciar correre un'ingiustizia.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con la Tigre. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "La Tigre e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Bue (丑)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Coniglio (卯)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Drago (辰)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cavallo (午)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Pecora (未)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Scimmia (申)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Gallo (酉)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Cane (戌)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Maiale (亥)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Maiale — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "寅 e 亥 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e la Tigre e il Maiale ottengono {scoreYukhap}, il massimo che la Tigre può ottenere."
          }
        ]
      },
      {
        "title": "Cavallo — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "寅午戌 è un gruppo di triade (il gruppo del fuoco), e 午 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi la Tigre forma una mezza triade ({scoreBanhap}) solo con il Cavallo."
          },
          {
            "p": "Con il Cane (戌) dello stesso gruppo manca il carattere centrale 午, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Scimmia — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "寅 e 申 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che la Tigre può ricevere."
          }
        ]
      },
      {
        "title": "Gallo — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "寅 e 酉 stanno subito accanto a 申 (la Scimmia), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e la Tigre con un'altra Tigre",
        "blocks": [
          {
            "p": "Topo, Bue, Coniglio, Drago, Serpente, Pecora e Cane non sono né un'armonia, né un conflitto, né una discordia con la Tigre: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Tigre ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Tigre incontra una persona Scimmia, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Maiale è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Tigre i cui rami del giorno sono 寅 e 申 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Per animale",
    "title": "Come il Coniglio incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Coniglio (卯) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Coniglio è il quarto dei dodici rami",
        "blocks": [
          {
            "p": "Il Coniglio è chi ha come ramo dell'anno di nascita **卯**. 卯 è il quarto dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 酉 (il Gallo)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Coniglio è: “Gentile e perspicace. Sa aggirare invece di scontrarsi.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Coniglio. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Coniglio e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Bue (丑)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Coniglio (卯)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Drago (辰)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cavallo (午)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Pecora (未)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Scimmia (申)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Gallo (酉)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Cane (戌)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Maiale (亥)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cane — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "卯 e 戌 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Coniglio e il Cane ottengono {scoreYukhap}, il massimo che il Coniglio può ottenere."
          }
        ]
      },
      {
        "title": "Pecora e Maiale — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "亥卯未 è un gruppo di triade (il gruppo del legno), e 卯 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Coniglio forma una mezza triade ({scoreBanhap}) sia con la Pecora sia con il Maiale."
          },
          {
            "p": "**Il Maiale e la Pecora insieme**, invece, non hanno il carattere centrale 卯: la coppia non è contata come armonia ed è trattata come neutra. Anche all'interno di uno stesso gruppo di triade, è il Coniglio a formare la mezza triade."
          }
        ]
      },
      {
        "title": "Gallo — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "卯 e 酉 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Coniglio può ricevere."
          }
        ]
      },
      {
        "title": "Scimmia — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "卯 e 申 stanno subito accanto a 酉 (il Gallo), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 6 animali, e il Coniglio con un altro Coniglio",
        "blocks": [
          {
            "p": "Topo, Bue, Tigre, Drago, Serpente e Cavallo non sono né un'armonia, né un conflitto, né una discordia con il Coniglio: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Coniglio ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Coniglio incontra una persona Gallo, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Cane è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Coniglio i cui rami del giorno sono 卯 e 酉 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Per animale",
    "title": "Come il Drago incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Drago (辰) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Drago è il quinto dei dodici rami",
        "blocks": [
          {
            "p": "Il Drago è chi ha come ramo dell'anno di nascita **辰**. 辰 è il quinto dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 戌 (il Cane)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Drago è: “Di animo grande e con ideali alti. Di rado si accontenta dell'ordinario.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Drago. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Drago e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Bue (丑)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Coniglio (卯)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Drago (辰)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Serpente (巳)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cavallo (午)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Pecora (未)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Scimmia (申)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Cane (戌)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Maiale (亥)",
                  "Discordia",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gallo — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "辰 e 酉 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Drago e il Gallo ottengono {scoreYukhap}, il massimo che il Drago può ottenere."
          }
        ]
      },
      {
        "title": "Topo — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "申子辰 è un gruppo di triade (il gruppo dell'acqua), e 子 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Drago forma una mezza triade ({scoreBanhap}) solo con il Topo."
          },
          {
            "p": "Con la Scimmia (申) dello stesso gruppo manca il carattere centrale 子, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Cane — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "辰 e 戌 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Drago può ricevere."
          }
        ]
      },
      {
        "title": "Maiale — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "辰 e 亥 stanno subito accanto a 戌 (il Cane), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e il Drago con un altro Drago",
        "blocks": [
          {
            "p": "Bue, Tigre, Coniglio, Serpente, Cavallo, Pecora e Scimmia non sono né un'armonia, né un conflitto, né una discordia con il Drago: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Drago ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Drago incontra una persona Cane, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Gallo è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Drago i cui rami del giorno sono 辰 e 戌 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Per animale",
    "title": "Come il Serpente incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Serpente (巳) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Serpente è il sesto dei dodici rami",
        "blocks": [
          {
            "p": "Il Serpente è chi ha come ramo dell'anno di nascita **巳**. 巳 è il sesto dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 亥 (il Maiale)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Serpente è: “Tiene per sé i propri pensieri e riflette a fondo. Giudica con precisione.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Serpente. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Serpente e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Bue (丑)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Coniglio (卯)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Drago (辰)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Cavallo (午)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Pecora (未)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Scimmia (申)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Gallo (酉)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Cane (戌)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Maiale (亥)",
                  "Conflitto",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Scimmia — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "巳 e 申 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Serpente e la Scimmia ottengono {scoreYukhap}, il massimo che il Serpente può ottenere."
          }
        ]
      },
      {
        "title": "Gallo — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "巳酉丑 è un gruppo di triade (il gruppo del metallo), e 酉 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Serpente forma una mezza triade ({scoreBanhap}) solo con il Gallo."
          },
          {
            "p": "Con il Bue (丑) dello stesso gruppo manca il carattere centrale 酉, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Maiale — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "巳 e 亥 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Serpente può ricevere."
          }
        ]
      },
      {
        "title": "Cane — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "巳 e 戌 stanno subito accanto a 亥 (il Maiale), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e il Serpente con un altro Serpente",
        "blocks": [
          {
            "p": "Topo, Bue, Tigre, Coniglio, Drago, Cavallo e Pecora non sono né un'armonia, né un conflitto, né una discordia con il Serpente: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Serpente ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Serpente incontra una persona Maiale, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Scimmia è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Serpente i cui rami del giorno sono 巳 e 亥 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Per animale",
    "title": "Come il Cavallo incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Cavallo (午) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Cavallo è il settimo dei dodici rami",
        "blocks": [
          {
            "p": "Il Cavallo è chi ha come ramo dell'anno di nascita **午**. 午 è il settimo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 子 (il Topo)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Cavallo è: “Brillante e irrequieto. Sentirsi chiuso in un recinto è la cosa più dura.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Cavallo. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Cavallo e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Bue (丑)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Tigre (寅)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Coniglio (卯)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Drago (辰)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cavallo (午)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Pecora (未)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Scimmia (申)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cane (戌)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Maiale (亥)",
                  "Neutra",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pecora — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "午 e 未 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Cavallo e la Pecora ottengono {scoreYukhap}, il massimo che il Cavallo può ottenere."
          }
        ]
      },
      {
        "title": "Tigre e Cane — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "寅午戌 è un gruppo di triade (il gruppo del fuoco), e 午 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Cavallo forma una mezza triade ({scoreBanhap}) sia con la Tigre sia con il Cane."
          },
          {
            "p": "**La Tigre e il Cane insieme**, invece, non hanno il carattere centrale 午: la coppia non è contata come armonia ed è trattata come neutra. Anche all'interno di uno stesso gruppo di triade, è il Cavallo a formare la mezza triade."
          }
        ]
      },
      {
        "title": "Topo — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "午 e 子 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Cavallo può ricevere."
          }
        ]
      },
      {
        "title": "Bue — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "午 e 丑 stanno subito accanto a 子 (il Topo), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 6 animali, e il Cavallo con un altro Cavallo",
        "blocks": [
          {
            "p": "Coniglio, Drago, Serpente, Scimmia, Gallo e Maiale non sono né un'armonia, né un conflitto, né una discordia con il Cavallo: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Cavallo ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Cavallo incontra una persona Topo, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Pecora è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Cavallo i cui rami del giorno sono 午 e 子 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Per animale",
    "title": "Come la Pecora incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha la Pecora (未) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "La Pecora è l'ottavo dei dodici rami",
        "blocks": [
          {
            "p": "La Pecora è chi ha come ramo dell'anno di nascita **未**. 未 è l'ottavo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 丑 (il Bue)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Pecora è: “Caloroso e premuroso. Si tiene dentro a lungo le parole dure.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con la Pecora. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "La Pecora e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Bue (丑)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Tigre (寅)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Coniglio (卯)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Drago (辰)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cavallo (午)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Pecora (未)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Scimmia (申)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cane (戌)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Maiale (亥)",
                  "Neutra",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cavallo — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "未 e 午 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e la Pecora e il Cavallo ottengono {scoreYukhap}, il massimo che la Pecora può ottenere."
          }
        ]
      },
      {
        "title": "Coniglio — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "亥卯未 è un gruppo di triade (il gruppo del legno), e 卯 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi la Pecora forma una mezza triade ({scoreBanhap}) solo con il Coniglio."
          },
          {
            "p": "Con il Maiale (亥) dello stesso gruppo manca il carattere centrale 卯, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Bue — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "未 e 丑 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che la Pecora può ricevere."
          }
        ]
      },
      {
        "title": "Topo — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "未 e 子 stanno subito accanto a 丑 (il Bue), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e la Pecora con un'altra Pecora",
        "blocks": [
          {
            "p": "Tigre, Drago, Serpente, Scimmia, Gallo, Cane e Maiale non sono né un'armonia, né un conflitto, né una discordia con la Pecora: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Pecora ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Pecora incontra una persona Bue, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Cavallo è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Pecora i cui rami del giorno sono 未 e 丑 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Per animale",
    "title": "Come la Scimmia incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha la Scimmia (申) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "La Scimmia è il nono dei dodici rami",
        "blocks": [
          {
            "p": "La Scimmia è chi ha come ramo dell'anno di nascita **申**. 申 è il nono dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 寅 (la Tigre)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Scimmia è: “Pieno di risorse e rapido ad adattarsi. La ripetizione lo annoia.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con la Scimmia. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "La Scimmia e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Bue (丑)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Coniglio (卯)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Drago (辰)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Cavallo (午)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Pecora (未)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Scimmia (申)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Gallo (酉)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cane (戌)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Maiale (亥)",
                  "Neutra",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Serpente — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "申 e 巳 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e la Scimmia e il Serpente ottengono {scoreYukhap}, il massimo che la Scimmia può ottenere."
          }
        ]
      },
      {
        "title": "Topo — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "申子辰 è un gruppo di triade (il gruppo dell'acqua), e 子 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi la Scimmia forma una mezza triade ({scoreBanhap}) solo con il Topo."
          },
          {
            "p": "Con il Drago (辰) dello stesso gruppo manca il carattere centrale 子, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Tigre — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "申 e 寅 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che la Scimmia può ricevere."
          }
        ]
      },
      {
        "title": "Coniglio — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "申 e 卯 stanno subito accanto a 寅 (la Tigre), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e la Scimmia con un'altra Scimmia",
        "blocks": [
          {
            "p": "Bue, Drago, Cavallo, Pecora, Gallo, Cane e Maiale non sono né un'armonia, né un conflitto, né una discordia con la Scimmia: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Scimmia ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Scimmia incontra una persona Tigre, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Serpente è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Scimmia i cui rami del giorno sono 申 e 寅 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Per animale",
    "title": "Come il Gallo incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Gallo (酉) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Gallo è il decimo dei dodici rami",
        "blocks": [
          {
            "p": "Il Gallo è chi ha come ramo dell'anno di nascita **酉**. 酉 è il decimo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 卯 (il Coniglio)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Gallo è: “Diligente ed esigente. Non riesce a lasciare nulla fuori posto.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Gallo. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Gallo e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Bue (丑)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Tigre (寅)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Coniglio (卯)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Drago (辰)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Serpente (巳)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Cavallo (午)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Pecora (未)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Scimmia (申)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Cane (戌)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Maiale (亥)",
                  "Neutra",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Drago — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "酉 e 辰 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Gallo e il Drago ottengono {scoreYukhap}, il massimo che il Gallo può ottenere."
          }
        ]
      },
      {
        "title": "Bue e Serpente — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "巳酉丑 è un gruppo di triade (il gruppo del metallo), e 酉 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Gallo forma una mezza triade ({scoreBanhap}) sia con il Bue sia con il Serpente."
          },
          {
            "p": "**Il Serpente e il Bue insieme**, invece, non hanno il carattere centrale 酉: la coppia non è contata come armonia ed è trattata come neutra. Anche all'interno di uno stesso gruppo di triade, è il Gallo a formare la mezza triade."
          }
        ]
      },
      {
        "title": "Coniglio — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "酉 e 卯 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Gallo può ricevere."
          }
        ]
      },
      {
        "title": "Tigre — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "酉 e 寅 stanno subito accanto a 卯 (il Coniglio), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 6 animali, e il Gallo con un altro Gallo",
        "blocks": [
          {
            "p": "Topo, Cavallo, Pecora, Scimmia, Cane e Maiale non sono né un'armonia, né un conflitto, né una discordia con il Gallo: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Gallo ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Gallo incontra una persona Coniglio, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Drago è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Gallo i cui rami del giorno sono 酉 e 卯 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Cane](/guide/zodiac-dog) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Per animale",
    "title": "Come il Cane incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Cane (戌) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Cane è l'undicesimo dei dodici rami",
        "blocks": [
          {
            "p": "Il Cane è chi ha come ramo dell'anno di nascita **戌**. 戌 è l'undicesimo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 辰 (il Drago)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Cane è: “Leale fino in fondo una volta data la fiducia. Il tradimento lo ferisce in modo particolare.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Cane. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Cane e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Bue (丑)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Coniglio (卯)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Drago (辰)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Serpente (巳)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Cavallo (午)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Pecora (未)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Scimmia (申)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cane (戌)",
                  "Stesso ramo",
                  "{scoreSame}"
                ],
                [
                  "Maiale (亥)",
                  "Neutra",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Coniglio — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "戌 e 卯 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Cane e il Coniglio ottengono {scoreYukhap}, il massimo che il Cane può ottenere."
          }
        ]
      },
      {
        "title": "Cavallo — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "寅午戌 è un gruppo di triade (il gruppo del fuoco), e 午 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Cane forma una mezza triade ({scoreBanhap}) solo con il Cavallo."
          },
          {
            "p": "Con la Tigre (寅) dello stesso gruppo manca il carattere centrale 午, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Drago — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "戌 e 辰 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Cane può ricevere."
          }
        ]
      },
      {
        "title": "Serpente — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "戌 e 巳 stanno subito accanto a 辰 (il Drago), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e il Cane con un altro Cane",
        "blocks": [
          {
            "p": "Topo, Bue, Tigre, Pecora, Scimmia, Gallo e Maiale non sono né un'armonia, né un conflitto, né una discordia con il Cane: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Cane ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Cane incontra una persona Drago, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Coniglio è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Cane i cui rami del giorno sono 戌 e 辰 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Maiale](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Per animale",
    "title": "Come il Maiale incontra i dodici animali dello zodiaco",
    "summary": "Quale relazione ha il Maiale (亥) con ciascuno dei dodici animali dello zodiaco, quanti punti ottiene ciascuna e quale quota della percentuale di corrispondenza finale occupa quel punteggio — esposto esattamente come lo prevedono le regole di calcolo di Inyeon-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Il Maiale è il dodicesimo dei dodici rami",
        "blocks": [
          {
            "p": "Il Maiale è chi ha come ramo dell'anno di nascita **亥**. 亥 è il dodicesimo dei dodici rami terrestri e, quando i dodici caratteri sono disposti in cerchio, sta esattamente di fronte a 巳 (il Serpente)."
          },
          {
            "p": "La riga che il risultato di compatibilità mostra per una persona Maiale è: “Generoso e schietto. Si fida facilmente, a volte a caro prezzo.” Questa riga non ha nulla a che fare con i punteggi delle relazioni e non influisce sui punteggi qui sotto."
          }
        ]
      },
      {
        "title": "I dodici animali dello zodiaco a colpo d'occhio",
        "blocks": [
          {
            "p": "Ognuno degli altri animali viene messo a confronto, a turno, con il Maiale. Solo le coppie che questo servizio riconosce come armonie sono scritte come relazioni; tutto il resto è neutro."
          },
          {
            "table": {
              "caption": "Il Maiale e i dodici animali dello zodiaco",
              "head": [
                "Altro animale",
                "Relazione",
                "Punteggio"
              ],
              "rows": [
                [
                  "Topo (子)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Bue (丑)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Sei Armonie",
                  "{scoreYukhap}"
                ],
                [
                  "Coniglio (卯)",
                  "Mezza triade",
                  "{scoreBanhap}"
                ],
                [
                  "Drago (辰)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Serpente (巳)",
                  "Conflitto",
                  "{scoreChung}"
                ],
                [
                  "Cavallo (午)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Pecora (未)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Scimmia (申)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Cane (戌)",
                  "Neutra",
                  "{scoreNeutral}"
                ],
                [
                  "Maiale (亥)",
                  "Stesso ramo",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tigre — la coppia che si attrae (Sei Armonie)",
        "blocks": [
          {
            "p": "亥 e 寅 formano un'armonia con soli due caratteri. Una coppia di sei armonie è la buona relazione che compare più spesso nella compatibilità, e il Maiale e la Tigre ottengono {scoreYukhap}, il massimo che il Maiale può ottenere."
          }
        ]
      },
      {
        "title": "Coniglio — una mezza triade che include il ramo reale",
        "blocks": [
          {
            "p": "亥卯未 è un gruppo di triade (il gruppo del legno), e 卯 è il **ramo reale** al suo centro. Inyeon-Link accetta solo le coppie che includono il ramo reale, quindi il Maiale forma una mezza triade ({scoreBanhap}) solo con il Coniglio."
          },
          {
            "p": "Con la Pecora (未) dello stesso gruppo manca il carattere centrale 卯, perciò la coppia non è contata come armonia ed è trattata come neutra ({scoreNeutral}). Appartenere allo stesso gruppo non rende ogni coppia un'armonia."
          }
        ]
      },
      {
        "title": "Serpente — lo scontro frontale (Conflitto)",
        "blocks": [
          {
            "p": "亥 e 巳 stanno esattamente uno di fronte all'altro nel cerchio. Questo servizio mantiene {scoreChung} punti anche per un conflitto. Nella myeongri tradizionale un conflitto è una collisione, non la fine di una relazione, e assegnare un punteggio vicino al minimo equivarrebbe a pronunciare un verdetto su due persone. Anche così, è il punteggio più basso che il Maiale può ricevere."
          }
        ]
      },
      {
        "title": "Drago — la quieta discordia (Discordia)",
        "blocks": [
          {
            "p": "亥 e 辰 stanno subito accanto a 巳 (il Serpente), la posizione del conflitto, e tradizionalmente sono visti come una coppia che si porta rancore ma non riesce a separarsi. In superficie sembra calma, ma si ritiene che lo scarto duri nel tempo, perciò ottiene {scoreWonjin} — più di un conflitto ({scoreChung}) e meno del neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Gli altri 7 animali, e il Maiale con un altro Maiale",
        "blocks": [
          {
            "p": "Topo, Bue, Cavallo, Pecora, Scimmia, Gallo e Cane non sono né un'armonia, né un conflitto, né una discordia con il Maiale: sono **neutri** e ottengono {scoreNeutral}. Sono la base di partenza, né buoni né cattivi."
          },
          {
            "p": "Due persone Maiale ottengono {scoreSame}. Significa che si somigliano, non che si attraggono, perciò si collocano appena sopra il neutro."
          }
        ]
      },
      {
        "title": "Quale quota della percentuale di corrispondenza finale occupa questo punteggio",
        "blocks": [
          {
            "p": "Ci sono due punti in cui i rami di due persone vengono messi a confronto."
          },
          {
            "ul": [
              "La **compatibilità zodiacale** considera il ramo dell'anno di nascita. Pesa per {weightZodiac} sulla percentuale di corrispondenza finale.",
              "La **compatibilità del ramo del giorno** considera il ramo del giorno di nascita. Pesa per {weightDayBranch} sulla compatibilità saju ({weightSaju}), ovvero {weightDayBranchTotal} della percentuale di corrispondenza finale."
            ]
          },
          {
            "p": "Per esempio, quando una persona Maiale incontra una persona Serpente, la compatibilità zodiacale dà un conflitto. A parità di tutto il resto, la percentuale di corrispondenza finale risulta più bassa di {swingZodiacChung} punti rispetto a una coppia neutra. Con una persona Tigre è una coppia di sei armonie, e la percentuale risulta più alta di {swingZodiacYukhap} punti."
          },
          {
            "p": "Il ramo dell'anno e quello del giorno possono essere diversi. Due persone Maiale i cui rami del giorno sono 亥 e 巳 ottengono lo stesso ramo ({scoreSame}) nella compatibilità zodiacale e un conflitto ({scoreChung}) nella compatibilità del ramo del giorno."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ciò che questa guida non dice",
        "blocks": [
          {
            "ul": [
              "Un solo animale non decide una relazione tra due persone. {weightSaju} della percentuale di corrispondenza finale è stabilito dalla compatibilità saju.",
              "Le variazioni di punteggio qui sopra presuppongono che tutto il resto sia uguale; il risultato reale è determinato dall'intero saju di entrambe le persone.",
              "La tabella completa di quale relazione vale quanto è nella [tabella dei dodici rami](/guide/branches), e perché lo zodiaco si legge dal ramo dell'anno è spiegato in [Perché la compatibilità zodiacale considera il ramo dell'anno](/guide/zodiac)."
            ]
          },
          {
            "p": "Gli altri animali sono presentati allo stesso modo. [Topo](/guide/zodiac-rat) · [Bue](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coniglio](/guide/zodiac-rabbit) · [Drago](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavallo](/guide/zodiac-horse) · [Pecora](/guide/zodiac-goat) · [Scimmia](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cane](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Dieci Dei",
    "title": "Dieci Dei e Posizione del Coniuge",
    "summary": "Esaminiamo cosa rappresenta il tronco del giorno di ciascuna persona rispetto all'altra attraverso i Dieci Dei. Spieghiamo perché la ricchezza diretta e la ricchezza indiretta vengono lette in modo diverso anche se entrambe sono ricchezze.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Il tronco del giorno è la persona stessa",
        "blocks": [
          {
            "p": "Tra gli otto caratteri del saju, il **tronco del giorno** (il tronco celeste del giorno di nascita) si riferisce alla persona stessa. Gli altri sette caratteri vengono letti come l'ambiente in cui si trova quel tronco del giorno."
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
            "p": "Questo è il primo elemento nella compatibilità. Una volta determinato come il tronco del giorno di A percepisce il tronco del giorno di B, anche la percezione di B nei confronti di A è determinata, quindi ci sono **solo sei possibilità**."
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
                  "Questa è la coppia tradizionalmente vista come la posizione del coniuge. Lo yin e lo yang sono disallineati, attratti l'uno dall'altro."
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
                  "Si somigliano e sono uguali, ma non si spingono l'uno contro l'altro."
                ],
                [
                  "Rivale ↔ Rivale",
                  "Polarità opposta",
                  "Competizione",
                  "Sono attratti l'uno dall'altro ma competono per la stessa posizione."
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
                  "L'energia data viene presa dalla controparte, bloccando il flusso."
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
            "p": "Il lato in cui yin e yang sono disallineati (Ricchezza Propria, Ufficiale Proprio, Compagno Proprio) è emotivo, mentre lo stesso lato (Risorsa, Ufficiale, Compagno) è inemotivo, che è il principio che distingue il proprio e il lato dei Dieci Dei."
          }
        ]
      },
      {
        "title": "Il motivo per cui si osserva con i Dieci Dei piuttosto che con i tre elementi",
        "blocks": [
          {
            "p": "Esiste un metodo per osservare la relazione del tronco del giorno con i tre elementi (generazione reciproca, uguaglianza, superamento reciproco). È semplice, ma **yin e yang scompaiono.** 甲 (legno yang) e 乙 (legno yin) diventano la stessa 'uguaglianza' come 甲 e 甲, e il superamento reciproco viene schiacciato in un punteggio unico senza direzione o yin e yang."
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
            "p": "Anche se sono la stessa risorsa, solo la **Ricchezza Propria** emotiva è considerato la posizione del coniuge, mentre la Risorsa è letta come la natura dell'attività e della ricchezza. Pertanto, Ricchezza Propria e Ufficiale Proprio contano come 2 punti, mentre Risorsa e Ufficiale contano come 1 punto, e entrambe le direzioni vengono sommate — se entrambe sono viste come posizioni coniugali, è il punteggio più alto."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se il genere non è rivelato, omettere questo elemento",
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
            "p": "Oltre al punteggio, descriviamo **che forma** ha la coppia di tronchi del giorno nella schermata dei risultati. Se sono posizioni simili, se un lato supporta l'altro, o se un lato è soppresso — se si tratta di una relazione di supporto o di soppressione, chiariremo quale lato detiene quella posizione."
          },
          {
            "p": "Se viene presentato solo un punteggio, rimane la domanda 'e quindi?'. La forma non è un punteggio ma qualcosa da leggere, e anche le coppie con punteggi bassi hanno qualcosa da interpretare."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "I cinque elementi",
    "title": "Elemento di Supporto — L'energia necessaria ora",
    "summary": "Consideriamo i cinque elementi non come 'hanno scelto due' ma come 'il mio partner ha ciò di cui ho bisogno'. Riveliamo anche il valore limite che distingue un tronco del giorno forte da uno debole.",
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
            "p": "L'Elemento di Supporto (用神) è 'l'energia di cui questa persona ha bisogno in questo momento'. Ci sono diversi metodi per determinarlo (soppressione, supporto, malattia e comunicazione), ma può essere tradotto in regole, e il più ampiamente utilizzato è **soppressione (抑扶)**. Se il tronco del giorno è forte, si vede che è necessaria l'energia da ridurre, e se è debole, è necessaria l'energia da aggiungere."
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
                  "Tronco del giorno forte (身强)",
                  "Energia in diminuzione — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tre"
                ],
                [
                  "Tronco del giorno debole (身弱)",
                  "Energia in aggiunta — 印星 (in-seong) · 比劫 (bi-gyeob)",
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
            "p": "Il lato del tronco del giorno è **印星 e 比劫** — l'energia che mi genera e l'energia che è simile a me. Poiché due su cinque, se l'energia è completamente bilanciata, diventa {evenAllyRatio}. Viene impostato un intervallo sopra e sotto quel valore."
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
                  "Tronco del giorno forte"
                ],
                [
                  "{weakThreshold} o più e meno di {strongThreshold}",
                  "Bilanciato"
                ],
                [
                  "Meno di {weakThreshold}",
                  "Tronco del giorno debole"
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
            "p": "L'equilibrio significa che non può essere coperto dall'elemento di supporto. A questo punto, vediamo semplicemente le due energie più sottili come necessarie. Nella schermata dei risultati, è annotato come 'attualmente in una posizione sottile' piuttosto che una dichiarazione definitiva."
          }
        ]
      },
      {
        "title": "Il potere non è il numero di caratteri",
        "blocks": [
          {
            "p": "Quando contiamo il potere dei cinque elementi, non contiamo semplicemente gli otto caratteri così come appaiono. Utilizziamo un valore che riflette i tronchi celesti nascosti (地藏干) all'interno dei rami terrestri e la stagione dell'energia del mese (月令) in cui si è nati."
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
            "p": "Esaminiamo la proporzione del mio elemento di supporto nel potere dell'avversario. Tuttavia, non utilizziamo direttamente quella proporzione ma **dividiamo l'aspettativa per la dimensione dell'elemento di supporto.** Quando è forte, l'elemento di supporto è tre (aspettativa 60%), e quando è debole, è due (aspettativa 40%), quindi utilizzare direttamente la proporzione significherebbe che una persona forte riceve sempre un punteggio più alto."
          },
          {
            "p": "Se riempito al livello atteso, si ottiene un punteggio vicino a 78 punti, e se riempito molto di più, si raggiungono 100 punti, mentre se è significativamente carente, si va verso 55 punti. Anche qui, il fondo non è impostato a 0."
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
            "p": "Il punteggio di compatibilità nel saju consiste in quattro elementi, e **ogni elemento non si sovrappone a ciò che esamina.**"
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
                  "Relazione del tronco del giorno · Natura coniugale",
                  "I tronchi del giorno di entrambe le persone — tronchi celesti",
                  "10"
                ],
                [
                  "Complemento dei cinque elementi",
                  "Il mio elemento di supporto e la potenza dei cinque elementi dell'avversario",
                  "5"
                ],
                [
                  "Relazione del ramo del giorno",
                  "i rami del giorno delle due persone",
                  "12"
                ],
                [
                  "Relazione zodiacale",
                  "i rami dell'anno delle due persone",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Poiché i valori non si scambiano tra gli elementi, **trovare il punteggio più alto per ciascun ramo sarà il punteggio complessivo più alto**. Non è necessario controllare tutte le combinazioni di date di nascita: basta impostare i dieci tronchi celesti, i dodici rami terrestri e i cinque elementi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Le stesse regole si applicano",
        "blocks": [
          {
            "p": "I punteggi scritti qui sono direttamente estratti dal motore di compatibilità. Poiché non sono state create nuove regole, il tipo che emerge qui avrà anche il punteggio più alto per quell'elemento nella compatibilità reale. Se le regole di compatibilità vengono modificate, questo schermo seguirà di conseguenza."
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
            "p": "Nelle persone reali, il tronco del giorno e i cinque elementi non operano separatamente. Una persona con 甲木 di solito ha anche una forte energia 木. Questo metodo di conteggio dei rami separatamente ignora quella correlazione, quindi il valore ottenuto collegando i punteggi più alti per ciascun ramo diventa una combinazione che non esiste nella realtà."
          },
          {
            "p": "Pertanto, lo schermo mostra solo **i punteggi degli elementi** e non fornisce un punteggio totale. Il punteggio totale sarà calcolato ricevendo la data di nascita dell'altra persona per [compatibilità saju](/compatibility)."
          }
        ]
      },
      {
        "title": "Come leggere i 'tipi di abbinamento'",
        "blocks": [
          {
            "p": "Il risultato significa 'se incontri una persona di questo tipo, questo elemento avrà un punteggio elevato'. Non è un criterio per scegliere una persona, ma piuttosto un modo per leggerlo da una prospettiva di comprensione di me stesso."
          },
          {
            "p": "Le ragioni per cui certi tipi hanno ottenuto punteggi elevati sono anche annotate elemento per elemento — se il tronco del giorno è in una posizione favorevole, o se quella persona possiede l'energia di cui ho attualmente bisogno."
          }
        ]
      },
      {
        "title": "Strumento di conferma",
        "blocks": [
          {
            "p": "Potresti essere curioso se la persona che hai in mente corrisponde a quel tipo. Inserendo la loro data di nascita nello strumento di conferma nella schermata dei risultati, sarai informato del loro tronco del giorno, ramo del giorno e ramo dell'anno. I valori inseriti non vengono salvati in questo momento [(non salvati)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Orario",
    "title": "L'ora di nascita di ciascuno viene corretta separatamente",
    "summary": "La compatibilità calcola separatamente l'orario delle due persone. Qui si spiega come si applica la correzione quando luoghi di nascita ed epoche sono diversi, e che cosa cambia se solo uno dei due non conosce la propria ora.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "L'orologio e il sole non coincidono",
        "blocks": [
          {
            "p": "Nel saju l'ora di nascita si legge dalla posizione del sole, non dall'orologio. Ma un intero paese tiene un solo orario standard, quindi l'orologio e il sole di un dato luogo si discostano."
          },
          {
            "p": "L'ora standard coreana si basa su 135°E, mentre Seul si trova a circa 127°E. Il sole di Seul raggiunge il punto più alto più tardi di quanto indichi l'orologio, di circa **32 minuti**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuti possono spostare di un passo il pilastro dell'ora",
        "blocks": [
          {
            "p": "Chi è nato a Seul alle 11:40 sull'orologio è nato alle 11:08 in tempo solare vero, che rientra ancora nell'ora del Cavallo (午, 11:00–13:00). Chi è nato alle 11:20 sull'orologio è nato alle 10:48, che cade nell'ora del Serpente (巳, 9:00–11:00). La correzione esiste per chi si trova esattamente su un confine di questo tipo."
          }
        ]
      },
      {
        "title": "La correzione si applica a ciascuna persona separatamente",
        "blocks": [
          {
            "p": "La compatibilità costruisce il tema di ciascuna persona da sé. Per questo la schermata di inserimento chiede il luogo di nascita **per ciascuna persona**. Se una è nata a Seul e l'altra all'estero, i loro orari vengono corretti separatamente, con longitudini e fusi orari diversi."
          },
          {
            "p": "L'elenco delle città contiene attualmente {cityCount} luoghi. Per i paesi in cui la longitudine varia molto, le città sono suddivise, perché **15° di longitudine spostano di un passo il pilastro dell'ora**."
          },
          {
            "p": "Se non scegli, viene usata Seul. Se solo una persona è nata all'estero ed entrambe restano su Seul, è sbagliato solo il pilastro dell'ora della persona nata all'estero; i valori dell'altra non risentono dell'errore, perché la correzione è applicata persona per persona."
          }
        ]
      },
      {
        "title": "Epoche diverse usavano orari standard diversi",
        "blocks": [
          {
            "p": "Due persone di età diversa hanno vissuto sotto l'ora standard di periodi diversi. Per questo la sola differenza di longitudine non basta."
          },
          {
            "ul": [
              "**Prima del 1912** — la Corea non aveva un'ora standard unificata (ora media locale).",
              "**1954–1961** — l'ora standard era UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — era in vigore l'ora legale."
            ]
          },
          {
            "p": "Inyeon-Link non fissa un meridiano standard nel codice. Cerca il **fuso orario IANA** del luogo di nascita per trovare l'ora standard realmente in uso in quel momento, così l'epoca di ciascuno viene applicata anche quando gli anni di nascita differiscono."
          }
        ]
      },
      {
        "title": "Subito dopo mezzanotte, cambia il tronco del giorno",
        "blocks": [
          {
            "p": "La correzione è di −32 minuti, quindi chi è nato tra le 00:00 e le 00:32 sull'orologio è nato, in tempo solare vero, nell'**ora delle 23:00 del giorno precedente**. Anche la data viene riportata indietro."
          },
          {
            "p": "Nella compatibilità questo conta molto. Quando il pilastro del giorno torna indietro di un giorno, cambiano sia il tronco sia il ramo del giorno; così la relazione dei tronchi del giorno, la Stella del Coniuge e la relazione dei rami del giorno vengono ricalcolate con caratteri diversi, e con esse si muovono le forze dei cinque elementi."
          }
        ]
      },
      {
        "title": "Va bene se solo una persona non conosce la propria ora",
        "blocks": [
          {
            "p": "L'ora di nascita è facoltativa, e la compatibilità viene calcolata anche se solo uno dei due non la conosce. Solo la persona che non la conosce viene calcolata senza il pilastro dell'ora, e la schermata dei risultati lo segnala. I valori dell'altra persona restano invariati."
          },
          {
            "p": "Nessuna delle quattro voci di compatibilità usa direttamente il pilastro dell'ora, ma questo influisce sulle forze dei cinque elementi, quindi è più accurato inserirla se la conosci. La compatibilità zodiacale dà lo stesso valore con o senza l'ora — [considera solo il ramo dell'anno](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Privacy",
    "title": "Come evitiamo di conservare i dati di due persone",
    "summary": "La compatibilità chiede di inserire anche la data di nascita di un'altra persona. Qui si spiega, in termini tecnici, che cosa significa che i dati inseriti dalle due persone non vengono registrati da nessuna parte e che cosa viaggia con il link del risultato.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Stai inserendo i dati di un'altra persona",
        "blocks": [
          {
            "p": "La schermata di compatibilità richiede insieme la tua data di nascita e quella dell'altra persona. La data di nascita dell'altra persona è un suo dato personale, perciò spieghiamo a parte come Inyeon-Link tratta entrambe."
          },
          {
            "p": "Non c'è alcun account e non chiediamo nome, indirizzo email o numero di telefono. Riceviamo soltanto le due date di nascita e, facoltativamente, ora di nascita, luogo di nascita e genere, e nulla di tutto ciò resta una volta terminato il calcolo."
          },
          {
            "p": "C'è un campo per un nome da mostrare nella schermata dei risultati, ma serve solo per la visualizzazione e non è usato nel calcolo. Non è necessario inserire un nome reale."
          }
        ]
      },
      {
        "title": "Un link di risultato contiene entrambe le date di nascita",
        "blocks": [
          {
            "p": "Quando il calcolo è terminato, l'indirizzo ha questo aspetto."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "La parte dopo il **#** contiene i dati inseriti dalle due persone. Si chiama frammento e, per il comportamento standard del web, **il browser non lo invia al server**. È stato pensato per indicare una posizione all'interno di un documento, quindi il server non lo vede mai."
          },
          {
            "p": "Quando apri un link di risultato, il browser legge quel valore e richiede un calcolo; il server riceve i valori che gli servono, restituisce la risposta e li dimentica."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Prima di inviare il link all'altra persona",
        "blocks": [
          {
            "p": "Non essere conservato su un server non equivale a un link segreto. Chiunque riceva il link può vedere entrambe le date di nascita così come sono, e un link lasciato in una chat resta in quella chat a prescindere dal nostro server. Ti invitiamo a inviarlo ricordando che contiene i dati dell'altra persona."
          }
        ]
      },
      {
        "title": "Perché non resta nulla anche se il calcolo avviene su un server",
        "blocks": [
          {
            "p": "Per costruire un tema saju serve una tabella dell'almanacco, troppo grande da inviare al browser, quindi il calcolo avviene sul server. Ma **una volta gestita la richiesta, i valori non vengono usati da nessun'altra parte.** Non esiste alcun codice che li scriva in un database."
          },
          {
            "p": "L'unica traccia che resta è un contatore che impedisce a una persona di inviare troppe richieste in poco tempo. Non contiene alcuna data di nascita e non conserva l'indirizzo IP così com'è; conta un unico valore, ottenuto con un hash insieme alla data, e che cambia quando cambia il giorno."
          }
        ]
      },
      {
        "title": "Ciò a cui rinunciamo non conservando",
        "blocks": [
          {
            "p": "Poiché non viene conservato nulla, abbiamo rinunciato ad alcune cose."
          },
          {
            "ul": [
              "**Non puoi recuperare un risultato di compatibilità passato.** Devi conservare il link per rivederlo.",
              "**Le stesse due persone vengono ricalcolate ogni volta.** Non c'è cache. Ma ogni regola è deterministica, quindi [lo stesso input dà sempre lo stesso valore](/guide/how-compatibility).",
              "**Aggiornando la pagina ricompare il blocco pubblicitario.** Non c'è un posto dove conservare la traccia di averlo guardato."
            ]
          }
        ]
      },
      {
        "title": "Se acquisti un report",
        "blocks": [
          {
            "p": "Se acquisti un report, in quel momento viene conservata una registrazione della transazione: le registrazioni dei pagamenti hanno un periodo di conservazione stabilito per legge e, senza uno storico degli ordini, non è possibile elaborare un rimborso. Anche allora **le due date di nascita non vengono associate all'ordine**; vengono richieste di nuovo quando si crea il PDF dopo la conferma del pagamento e usate solo in quel momento."
          },
          {
            "p": "I dettagli sono nell'[informativa sulla privacy](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Prodotti a pagamento",
    "title": "Cosa è incluso nel rapporto a pagamento?",
    "summary": "Questo spiega cosa è stato aggiunto al PDF mantenendo invariata la schermata, voce per voce. I valori e i contenuti sono letti dalle impostazioni del prodotto effettivo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "La schermata rimane invariata, solo aggiunta al PDF",
        "blocks": [
          {
            "p": "I calcoli di compatibilità e le richieste di risultati sono **gratuiti**. I tassi di corrispondenza, i punteggi e i pesi degli elementi, i grafici originali del saju di entrambi gli individui e la forma della relazione possono essere visualizzati sullo schermo. Niente è stato rimosso dallo schermo durante la creazione del rapporto a pagamento."
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
            "p": "Pagamento nazionale {priceGunghapDomestic} (inclusa IVA), pagamento internazionale {priceGunghapGlobal}. A4 {pagesGunghap} pagine."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Le pagine 1-3 sono organizzate per mantenere ciò che è sullo schermo** e **dalla pagina 4 in poi ci sono contenuti non visibili sullo schermo**. Di seguito, viene spiegato perché alcune cose non sono state visualizzate sullo schermo."
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
            "p": "La complementarietà è intrinsecamente **asimmetrica**. Questo perché le energie necessarie a me e le energie necessarie all'altro sono diverse. Se guardi solo la media, una relazione in cui un lato riempie significativamente l'altro e una relazione in cui entrambi si riempiono a vicenda appariranno come lo stesso numero. Il rapporto separa queste due."
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
        "title": "Pagina 5 — Uno sguardo più ravvicinato al saju di ciascuna persona",
        "blocks": [
          {
            "p": "Le barre dei cinque elementi sullo schermo mostrano **quanto è presente**. Il rapporto aggiunge **se il mese di nascita supporta quell'energia**. Anche con la stessa quantità, l'energia che è forte (旺) e l'energia che è morta (死) hanno forze diverse."
          },
          {
            "p": "Puoi vedere le forze prima e dopo aver moltiplicato per l'energia del mese affiancate, mostrando quanto la stagione l'ha spinta. Il **rapporto degli alleati** che distingue tra un tronco del giorno forte e un tronco del giorno debole è anche annotato — lo schermo mostra solo il giudizio, ma il rapporto mostra dove è stato fatto quel giudizio."
          }
        ]
      },
      {
        "title": "Pagina 6 — Cosa significano per me i quattro pilastri dell'altra persona",
        "blocks": [
          {
            "p": "Il tasso di corrispondenza confronta solo i **tronchi del giorno** di entrambi gli individui. Tuttavia, i restanti tre pilastri dell'altra persona sono anche determinati dai Dieci Dei utilizzando le stesse regole. Mentre puoi capire **cosa significa questa persona per me** guardando solo il tronco del giorno, non puoi sapere **cosa significa per me quella posizione della persona**."
          },
          {
            "p": "Poiché ci sono direzioni, entrambi i lati sono presentati separatamente. Ciò che vedo e ciò che vede l'altro sono diversi."
          }
        ]
      },
      {
        "title": "Pagina 7 — Come è stato calcolato questo saju",
        "blocks": [
          {
            "p": "Indica quanto il tempo di nascita è stato regolato al vero tempo solare, se la correzione ha causato un cambiamento di data, e quali erano le date solari e lunari quando è stato generato il saju. Il concetto è spiegato nel documento [Regolazione del tempo di nascita al vero tempo solare](/guide/true-solar-time), ma **il valore di quanti minuti sono stati regolati nel tuo caso** varia da persona a persona, quindi è incluso solo nel rapporto."
          }
        ]
      },
      {
        "title": "Rapporto PDF del profilo di corrispondenza Inyeon — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Pagamento domestico {priceAffinityDomestic} (inclusa IVA), pagamento internazionale {priceAffinityGlobal}. A4 {pagesAffinity} pagine."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Questa sezione è la **tabella di classificazione generale**. Lo schermo mostra solo i set che corrispondono bene, ma il rapporto classifica tutti e dieci i tronchi celesti e i dodici rami terrestri **completamente**. Se guardi solo i set migliori, non saprai 'chi viene dopo' e 'quale è il meno compatibile'."
          }
        ]
      },
      {
        "title": "Cose da sapere prima di acquistare",
        "blocks": [
          {
            "p": "**Il server non memorizza file.** Una volta approvato il pagamento, il documento viene generato e inviato immediatamente, senza lasciare nulla sul server. Il principio di questo servizio di non salvare i valori di input è mantenuto anche nel flusso a pagamento."
          },
          {
            "p": "Quindi, **si prega di salvare il file immediatamente dopo il pagamento.** Puoi ricevere lo stesso ordine fino a cinque volte, ma se lasci lo schermo dei risultati e i valori di input scompaiono, non puoi ricrearlo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "I rapporti sono anche materiali di riferimento",
        "blocks": [
          {
            "p": "Solo perché la lunghezza è aumentata non significa che la conclusione sia più certa. Ciò che il rapporto contiene di più è **la base dello stesso calcolo**, non un'affermazione più forte. La lettura del destino è un campo in cui le conclusioni possono variare a seconda del praticante, e questo servizio calcola solo ciò che può essere tradotto in regole."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avviso",
    "title": "Annunci",
    "summary": "Questo è un luogo per informare sui cambiamenti che influenzano l'uso.",
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
              "**Segnalazione di Errore di Calcolo** — Se il grafico originale del saju o il punteggio sembrano strani, faccelo sapere. Se includi quando hai inserito la data e l'ora, possiamo ricalcolare con gli stessi valori."
            ]
          }
        ]
      },
      {
        "title": "Informazioni Aziendali",
        "blocks": [
          {
            "ul": [
              "**Nome Aziendale** — {companyName}",
              "**Rappresentante** — {representative}",
              "**Numero di Registrazione Aziendale** — {businessNumber}",
              "**Numero di Registrazione per Vendita per Posta** — {mailOrderNumber}",
              "**Indirizzo** — {address}",
              "**Centro Assistenza Clienti** — {customerCenter}",
              "**Email** — {email}",
              "**Responsabile della Protezione dei Dati Personali** — {privacyOfficer}",
              "**Fornitore di Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Non è necessario includere la tua data e ora di nascita nell'email di richiesta. Non salviamo gli input, quindi non possiamo recuperarli, e il numero dell'ordine è sufficiente per la conferma. Si prega di includerlo solo se è necessario per una segnalazione di errore di calcolo."
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
        "Domande, rimborsi, richieste di privacy e segnalazioni di errori di calcolo ora hanno un unico luogo dove andare — vedi la pagina di contatto nel piè di pagina.",
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
        "Se cambiamo le regole di interpretazione in un modo che può modificare un punteggio, lo pubblichiamo qui per primo, con la data in cui entra in vigore — perché un link a un risultato che già possiedi leggerebbe diversamente.",
        "L'attuale set di regole è v10. I pagamenti non sono ancora aperti."
      ]
    }
  }
} satisfies NoticeCopy;
