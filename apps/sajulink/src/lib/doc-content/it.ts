import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Italiano — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const IT_DOCS = {
  "about": {
    "eyebrow": "Introduzione",
    "title": "Introduzione a Saju-Link",
    "summary": "Questo è un servizio che stabilisce un saju (lettura dei quattro pilastri) basato sulla tua data e ora di nascita e spiega cosa significano gli otto caratteri. Chiarisce cosa viene calcolato e cosa non lo è.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "title": "Cosa facciamo?",
        "blocks": [
          {
            "p": "Saju-Link stabilisce il **grafico del saju (quattro pilastri) basato sulla tua data e ora di nascita e mostra cosa significano gli otto caratteri**. Legge la forza dei cinque elementi e la forza del pilastro del giorno, e esamina anche la fortuna di oggi basata sullo stelo del giorno."
          },
          {
            "p": "Ciò che vedi sullo schermo è **gratuito e non richiede iscrizione.** Il prodotto a pagamento è un documento PDF contenente valori non mostrati sullo schermo — la base per distinguere tra un pilastro del giorno forte e uno debole, Wang Sang Hyu Su Sa, e i dettagli di correzione per il vero tempo solare."
          }
        ]
      },
      {
        "title": "Cosa calcoliamo?",
        "blocks": [
          {
            "p": "Il saju è stabilito utilizzando il **manseyeok (almanacco lunisolare coreano)**. L'ora di nascita è corretta al **vero tempo solare** del luogo di nascita — perché la posizione effettiva del sole varia per regione anche se l'orologio segna la stessa ora."
          },
          {
            "p": "I punteggi sono assegnati solo secondo regole stabilite. Concetti provenienti dallo studio del destino tradizionale myeongri, come i Dieci Dei, le relazioni tra i rami terrestri e il bilanciamento degli elementi, sono tradotti in regole per il calcolo, e **lo stesso input darà sempre lo stesso valore**. Quando le regole vengono cambiate, vengono condotti test di regressione per garantire che i risultati precedenti rimangano invariati."
          },
          {
            "p": "**L'IA non è utilizzata nelle frasi sullo schermo.** Le spiegazioni che appaiono sullo schermo gratuito sono frasi fisse collegate ai risultati del calcolo. **Solo le interpretazioni nei rapporti a pagamento** utilizzano IA generativa, e anche in questo caso, l'IA non crea punteggi — scrive solo frasi basate sui valori forniti dal motore."
          }
        ]
      },
      {
        "title": "Cosa non diciamo?",
        "blocks": [
          {
            "ul": [
              "**Non forniamo divinazioni.** Non scriviamo che dovresti incontrare o evitare qualcuno. Questo è un materiale di riferimento che riassume le prospettive del tradizionale myeongri.",
              "**Non salviamo gli input.** La data e l'ora di nascita sono utilizzate solo nel momento del calcolo e non vengono conservate sul server. Il link del risultato è anche memorizzato in un luogo che il browser non invia al server.",
              "**I punteggi non sono considerati valori umani.** Solo perché la fortuna di oggi è bassa non significa che tu debba rinunciare a quel giorno."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "I metodi di calcolo dettagliati sono scritti nella [Guida Utente](/guide). Le informazioni aziendali e i dettagli di contatto possono essere trovati in [Contattaci](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base di Calcolo",
    "title": "Qual è la base per i calcoli?",
    "summary": "Riveliamo tutte le regole utilizzate da Saju-Link. Puoi controllare da dove provengono i numeri visualizzati sullo schermo, inclusi gli aggiustamenti per la fortuna di oggi, i punteggi dalla tabella delle relazioni tra i rami terrestri e i valori di confine che distinguono tra un pilastro del giorno forte e uno debole.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "I valori scritti qui sono tutti **letto direttamente dal codice di calcolo**. Poiché non sono trascritti manualmente nel testo, se le regole vengono cambiate, i numeri in questo documento cambieranno di conseguenza."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Base del Servizio",
    "title": "grafico natale — Da dove provengono gli otto caratteri?",
    "summary": "Spiega come l'anno, il mese, il giorno e l'ora di nascita diventino i quattro pilastri e gli otto caratteri, e identifica quale carattere punta a te. Discute anche perché può essere visualizzato anche senza conoscere l'ora esatta di nascita.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Quattro Pilastri, Otto Caratteri",
        "blocks": [
          {
            "p": "Saju (四柱) significa letteralmente **quattro pilastri**. Ognuno dell'anno, mese, giorno e ora di nascita è stabilito come un pilastro, e due caratteri sono scritti per ogni pilastro. Così, ci sono un totale di otto caratteri, che è chiamato **il grafico natale**."
          },
          {
            "table": {
              "head": [
                "Pilastro",
                "Da cosa proviene?",
                "Due Caratteri"
              ],
              "rows": [
                [
                  "Pilastro dell'Anno (年柱)",
                  "Anno di nascita",
                  "Stelo Celeste + Ramo Terrestre"
                ],
                [
                  "Pilastro del Mese (月柱)",
                  "Mese di nascita",
                  "Stelo Celeste + Ramo Terrestre"
                ],
                [
                  "Pilastro del Giorno (日柱)",
                  "Giorno di nascita",
                  "Stelo Celeste + Ramo Terrestre"
                ],
                [
                  "Pilastro dell'Ora (時柱)",
                  "Ora di nascita",
                  "Stelo Celeste + Ramo Terrestre"
                ]
              ]
            }
          },
          {
            "p": "I caratteri superiori sono chiamati steli celesti (天干), e i caratteri inferiori sono chiamati rami terrestri (地支). Ci sono dieci steli celesti e dodici rami terrestri. I dodici rami terrestri sono comunemente chiamati **segni zodiacali**."
          }
        ]
      },
      {
        "title": "Tra di essi, un carattere punta a me.",
        "blocks": [
          {
            "p": "Non tutti gli otto caratteri hanno lo stesso peso. Lo **stelo celeste del giorno di nascita**, specificamente il carattere superiore del pilastro del giorno, punta a **me stesso**. Questo è chiamato **stelo del giorno (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Il saju è composto da otto caratteri stabiliti utilizzando due caratteri ciascuno per l'anno, mese, giorno e ora di nascita, rappresentati dagli steli celesti e dai rami terrestri. Qui, lo stelo del giorno prominente (日干) è il carattere che punta a me stesso.",
            "labels": {
              "year": "Pilastro dell'Anno",
              "yearNote": "Radice · Segno Zodiacale",
              "month": "Pilastro del Mese",
              "monthNote": "Stagione · Forza",
              "day": "Pilastro del Giorno",
              "dayNote": "Sé · Palazzo del Coniuge",
              "hour": "Pilastro dell'Ora",
              "hourNote": "Anni Avanzati · Utilizzo",
              "stem": "Stelo Celeste",
              "stemNote": "Stelo del Giorno = Sé",
              "branch": "Ramo Terrestre",
              "branchNote": "Ramo del Giorno = Palazzo del Coniuge"
            }
          },
          {
            "p": "Ciò che questo servizio mostra deriva principalmente da questo unico carattere — l'interpretazione delle tendenze, la forza dei cinque elementi, l'energia attualmente necessaria e la fortuna di oggi sono tutte misurate in base allo Stelo del Giorno. Gli altri sette caratteri indicano 'in quale ambiente è collocato lo Stelo del Giorno'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perché il Giorno di Nascita?",
        "blocks": [
          {
            "p": "Lo Stelo dell'Anno è lo stesso per tutti coloro che sono nati in quell'anno, e lo Stelo del Mese è lo stesso per tutti coloro che sono nati in quel mese. Lo Stelo del Giorno cambia quando cambia il giorno, e la tradizionale divinazione ha considerato questa posizione come il Sé sin dalla Dinastia Song. Se è incluso lo Stelo dell'Ora, si differenzia anche tra coloro che sono nati nello stesso giorno."
          }
        ]
      },
      {
        "title": "Diviso dai Termini Solari, Non dall'Anno Calendario",
        "blocks": [
          {
            "p": "Un anno di saju non cambia il 1° gennaio, ma piuttosto a **Ipchun (intorno al 4 febbraio)**. Anche il mese si divide in base ai termini solari."
          },
          {
            "p": "Pertanto, coloro che sono nati a **gennaio e all'inizio di febbraio ricevono lo Stelo dell'Anno dell'anno precedente**. Qui sorge il comune malinteso riguardo ai segni zodiacali. Lo stesso vale se inserisci una data di nascita lunare — viene convertita di nuovo in solare e poi divisa per i termini solari."
          }
        ]
      },
      {
        "title": "Puoi Leggerlo Anche Senza Conoscere l'Ora di Nascita",
        "blocks": [
          {
            "p": "Se non inserisci l'ora, la lettura sarà basata sui tre pilastri e sei caratteri, escludendo il Pilastro dell'Ora. Non indoviniamo i valori mancanti — assegnare arbitrariamente un Pilastro dell'Ora può disturbare la forza dei cinque elementi, portando a conclusioni errate invece di potenzialmente accurate."
          },
          {
            "p": "Se conosci l'ora, è meglio includerla. Poiché due caratteri vengono aggiunti tra gli otto, la forza e la valutazione dei cinque elementi possono cambiare. Tuttavia, non utilizziamo l'ora del orologio direttamente, ma utilizziamo invece [Tempo Solare Vero](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il metodo di conteggio degli otto caratteri come cinque elementi per valutare la forza è continuato in [Forza dei Cinque Elementi e Pilastro del Giorno Forte/Debole](/guide/five-elements), mentre il metodo di lettura degli altri caratteri basato sullo Stelo del Giorno è continuato in [Dieci Dei](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Cinque Elementi",
    "title": "Forza dei Cinque Elementi e Pilastro del Giorno Forte/Debole",
    "summary": "Contiamo gli otto caratteri come cinque elementi per vedere quale energia è forte e quale è debole. Riveliamo i valori soglia (45%·35%) che determinano la forza dello Stelo del Giorno.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Conteggio di Otto Caratteri come Cinque Energie",
        "blocks": [
          {
            "p": "I dieci Steli Celesti e i dodici Rami Terrestri appartengono ciascuno a uno dei **Cinque Elementi (五行)** — Legno (木), Fuoco (火), Terra (土), Metallo (金), Acqua (水). Contando i caratteri nel grafico natale in base ai loro rispettivi elementi, possiamo determinare quale energia è forte e quale è debole."
          },
          {
            "p": "Tuttavia, non contiamo solo i numeri. Consideriamo anche **se il mese di nascita supporta quell'energia**. Anche lo stesso carattere può avere forze diverse a seconda di se incontra la sua stagione. Questo è chiamato Segno del Mese (月令), ed è diviso in cinque fasi: Wang (旺), Sang (相), Hyu (休), Su (囚), e Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dove Differiscono Schermo e Rapporto",
        "blocks": [
          {
            "p": "Lo schermo gratuito mostra solo la **forza dopo aver riflettuto il Segno del Mese**. I valori prima del Segno del Mese e la tabella di Wang, Sang, Hyu, Su e Sa sono inclusi nel rapporto a pagamento — questo è fornito per consentirti di controllare direttamente dove la valutazione diverge."
          }
        ]
      },
      {
        "title": "Forza dello Stelo del Giorno — Forte e Debole",
        "blocks": [
          {
            "p": "Dopo aver contato le forze dei cinque elementi, valutiamo se lo **Stelo del Giorno è forte o debole**. Il criterio è il rapporto delle energie allineate con lo Stelo del Giorno."
          },
          {
            "p": "Le energie allineate con lo Stelo del Giorno sono **Risorsa e Compagno** — le energie che mi danno vita e quelle che sono simili a me. Poiché ci sono due su cinque, se non c'è bias, sarà intorno a {evenAllyRatio}. Trattiamo l'area attorno a quella cifra come bilanciata, e leggiamo sopra e sotto di essa come forte o debole."
          },
          {
            "table": {
              "head": [
                "Rapporto delle Energie Allineate con lo Stelo del Giorno",
                "Valutazione",
                "Cosa Significa?"
              ],
              "rows": [
                [
                  "{strongThreshold} o superiore",
                  "Pilastro del Giorno Forte (身强)",
                  "Le energie che supportano lo Stelo del Giorno sono abbondanti."
                ],
                [
                  "{weakThreshold} o superiore e meno di {strongThreshold}",
                  "Bilanciato (中和)",
                  "È difficile concludere in entrambe le direzioni."
                ],
                [
                  "Meno di {weakThreshold}",
                  "Pilastro del Giorno Debole (身弱)",
                  "Le energie che supportano lo Stelo del Giorno sono deboli."
                ]
              ]
            }
          },
          {
            "p": "I numeri in questa tabella non sono trascritti dal testo ma sono **letto direttamente dal motore**. Se le regole cambiano, questo documento cambierà di conseguenza."
          }
        ]
      },
      {
        "title": "La Forza Non è Né Buona Né Cattiva",
        "blocks": [
          {
            "p": "Essere forte non significa essere buono, e essere debole non significa essere cattivo. Se forte, c'è il potere di andare avanti, ma è facile inclinarsi da un lato; se debole, è più facile prendere in prestito la forza degli altri, ma si può stancare facilmente quando si resiste da soli. **Le energie necessarie differiscono in entrambi i casi.**"
          },
          {
            "p": "Determinare quella 'energia necessaria' è l'elemento di bilanciamento, e continua in [Elemento di Bilanciamento](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Come sono stabiliti gli otto caratteri è in [grafico natale](/guide/natal-chart). Come interagisce il Pilastro del Giorno di oggi con questa forza è trattato in [fortuna di oggi](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Elemento di Bilanciamento",
    "title": "Elemento di Bilanciamento — L'Energia Necessaria Ora",
    "summary": "Se lo Stelo del Giorno è forte, consideriamo l'energia da ridurre; se debole, consideriamo l'energia da supportare come necessaria. Questo spiega come scegliere quell'energia e come gestirla quando è bilanciata.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "I Cinque Elementi Da Soli Non Sono Sufficiente",
        "blocks": [
          {
            "p": "Ci sono modi per misurare se i cinque elementi sono distribuiti in modo uniforme. Tuttavia, ciò che è veramente necessario è **ciò che manca e ciò che è eccessivo in questo saju**."
          },
          {
            "p": "Un saju che è distribuito uniformemente non è sempre confortevole, né un saju che è sbilanciato è sempre difficile. La direzione dello sbilanciamento e se c'è un elemento per alleviarlo è il crocevia."
          }
        ]
      },
      {
        "title": "Elemento di Bilanciamento — Ridurre Se Eccessivo, Aggiungere Se Mancante",
        "blocks": [
          {
            "p": "L'elemento di bilanciamento (用神) è **l'energia attualmente necessaria a questa persona**. Ci sono diversi metodi per determinarlo (soppressione e supporto, bilanciamento stagionale, afflizione, mediazione), e quello che può essere espresso come regole — ed è il più ampiamente utilizzato — è **soppressione e supporto (抑扶)**. Se il pilastro del giorno è forte, si crede che sia necessaria un'energia da ridurre; se debole, è richiesta un'energia da aggiungere."
          },
          {
            "table": {
              "head": [
                "Giudizio",
                "Cosa È Necessario",
                "Numero di Tipi"
              ],
              "rows": [
                [
                  "Pilastro del Giorno Forte (身强)",
                  "Energia da drenare — Uscita, Ricchezza e Funzionario",
                  "Tre"
                ],
                [
                  "Pilastro del Giorno Debole (身弱)",
                  "Energia da Aggiungere — Risorsa, Compagno",
                  "Due"
                ],
                [
                  "Bilanciato (中和)",
                  "Non può essere deciso da soppressione e supporto, quindi le energie più sottili",
                  "Due"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Soglia per Forza e Debolezza",
        "blocks": [
          {
            "p": "Il lato del pilastro del giorno è **Risorsa e Compagno** — l'energia che mi genera e l'energia che è simile a me. Poiché due su cinque sono coinvolti, il bilanciamento completo sarà {evenAllyRatio}. La larghezza è impostata sopra e sotto questo {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "Il Rapporto di Alleati (Risorsa + Compagno) nella Forza Complessiva",
              "head": [
                "Rapporto",
                "Giudizio"
              ],
              "rows": [
                [
                  "{strongThreshold} o più",
                  "Pilastro del Giorno Forte"
                ],
                [
                  "{weakThreshold} o più e meno di {strongThreshold}",
                  "Bilanciato"
                ],
                [
                  "Meno di {weakThreshold}",
                  "Pilastro del Giorno Debole"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bilanciato È un 'Giudizio Meno Certo'",
        "blocks": [
          {
            "p": "Bilanciato significa che soppressione e supporto non possono deciderlo. In questo momento, le due energie più sottili sono semplicemente considerate necessarie. Nella schermata dei risultati, è annotato come 'posizione attualmente sottile' piuttosto che una dichiarazione definitiva."
          }
        ]
      },
      {
        "title": "La Forza Non È Il Numero di Caratteri",
        "blocks": [
          {
            "p": "Quando si conta la forza dei cinque elementi, gli otto caratteri non vengono conteggiati come appaiono. I valori riflettono i tronchi celesti nascosti (地藏干) all'interno dei rami terrestri e la stagione dell'energia del mese (月令) in cui si è nati."
          },
          {
            "p": "Contare solo i caratteri superficiali perde il fatto che anche gli stessi caratteri 木 possono avere forze completamente diverse a seconda della stagione. Il 木 di primavera e il 木 di autunno, pur essendo lo stesso carattere, hanno forze diverse."
          }
        ]
      },
      {
        "title": "Dove Usare L'Elemento di Bilanciamento",
        "blocks": [
          {
            "p": "L'elemento di bilanciamento determinato è utilizzato in due posti. Uno è **'energia attualmente necessaria'** nella schermata dei risultati, e l'altro è [l'odierna fortuna](/guide/today-fortune) — se l'energia di oggi corrisponde all'elemento di bilanciamento è l'elemento che muove di più il punteggio in quel giorno."
          }
        ]
      },
      {
        "title": "Questo È un Giudizio Semplice",
        "blocks": [
          {
            "p": "L'analisi del destino reale considera la formazione e le condizioni stagionali (il calore e l'umidità della stagione) per determinare l'elemento di bilanciamento, e le conclusioni possono variare a seconda del metodo. Saju-Link utilizza solo **riduzioni che possono essere misurate dai valori di forza**. Questo è dovuto al principio di utilizzare solo ciò che può essere convertito in regole, quindi lo stesso input darà sempre la stessa risposta."
          },
          {
            "p": "Invece, la schermata dei risultati presenta anche il pilastro del giorno forte e debole insieme all'energia attualmente necessaria come **materiale di lettura**. Questo per evitare di nascondere la base del punteggio."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Steli celesti",
    "title": "Legno Yang (甲) — Legno, Yang",
    "summary": "L'elemento e la polarità dello stelo celeste 甲, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Legno Yang (甲) è il primo dei dieci steli celesti",
        "blocks": [
          {
            "p": "甲 è il primo dei dieci steli celesti. Il suo elemento è il Legno e la sua polarità è Yang. Saju-Link chiama «Legno Yang (甲)» una persona il cui stelo del giorno è 甲."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 甲 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 甲 legge l'altro stelo, e quando è l'altro stelo a leggere 甲 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Legno Yang (甲) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Compagno (比肩)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Rivale (劫財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Espressione (食神)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Perturbatore (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Sfidante (偏官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Autorità (正官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Nutrimento (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 甲 come stelo del giorno, la Ricchezza stabile è 己 e l'Autorità è 辛. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 甲",
        "blocks": [
          {
            "p": "È qui che 甲 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 甲 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 甲",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "principale (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Coniglio",
                  "residuo (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Maiale",
                  "intermedio (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Steli celesti",
    "title": "Legno Yin (乙) — Legno, Yin",
    "summary": "L'elemento e la polarità dello stelo celeste 乙, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Legno Yin (乙) è il secondo dei dieci steli celesti",
        "blocks": [
          {
            "p": "乙 è il secondo dei dieci steli celesti. Il suo elemento è il Legno e la sua polarità è Yin. Saju-Link chiama «Legno Yin (乙)» una persona il cui stelo del giorno è 乙."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 乙 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 乙 legge l'altro stelo, e quando è l'altro stelo a leggere 乙 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Legno Yin (乙) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Rivale (劫財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Compagno (比肩)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Autorità (正官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Sfidante (偏官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Nutrimento (正印)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 乙 come stelo del giorno, la Ricchezza stabile è 戊 e l'Autorità è 庚. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 乙",
        "blocks": [
          {
            "p": "È qui che 乙 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 乙 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 乙",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "卯",
                  "Coniglio",
                  "principale (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Drago",
                  "residuo (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Pecora",
                  "intermedio (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Steli celesti",
    "title": "Fuoco Yang (丙) — Fuoco, Yang",
    "summary": "L'elemento e la polarità dello stelo celeste 丙, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Fuoco Yang (丙) è il terzo dei dieci steli celesti",
        "blocks": [
          {
            "p": "丙 è il terzo dei dieci steli celesti. Il suo elemento è il Fuoco e la sua polarità è Yang. Saju-Link chiama «Fuoco Yang (丙)» una persona il cui stelo del giorno è 丙."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 丙 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 丙 legge l'altro stelo, e quando è l'altro stelo a leggere 丙 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Fuoco Yang (丙) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Nutrimento (正印)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Compagno (比肩)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Rivale (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Perturbatore (傷官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Sfidante (偏官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Autorità (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丙 come stelo del giorno, la Ricchezza stabile è 辛 e l'Autorità è 癸. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 丙",
        "blocks": [
          {
            "p": "È qui che 丙 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 丙 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 丙",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "intermedio (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Serpente",
                  "principale (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Cavallo",
                  "residuo (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Steli celesti",
    "title": "Fuoco Yin (丁) — Fuoco, Yin",
    "summary": "L'elemento e la polarità dello stelo celeste 丁, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Fuoco Yin (丁) è il quarto dei dieci steli celesti",
        "blocks": [
          {
            "p": "丁 è il quarto dei dieci steli celesti. Il suo elemento è il Fuoco e la sua polarità è Yin. Saju-Link chiama «Fuoco Yin (丁)» una persona il cui stelo del giorno è 丁."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 丁 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 丁 legge l'altro stelo, e quando è l'altro stelo a leggere 丁 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Fuoco Yin (丁) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Nutrimento (正印)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Rivale (劫財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Perturbatore (傷官)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Espressione (食神)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Autorità (正官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丁 come stelo del giorno, la Ricchezza stabile è 庚 e l'Autorità è 壬. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 丁",
        "blocks": [
          {
            "p": "È qui che 丁 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 丁 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 丁",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "午",
                  "Cavallo",
                  "principale (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Pecora",
                  "residuo (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Cane",
                  "intermedio (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Steli celesti",
    "title": "Terra Yang (戊) — Terra, Yang",
    "summary": "L'elemento e la polarità dello stelo celeste 戊, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Terra Yang (戊) è il quinto dei dieci steli celesti",
        "blocks": [
          {
            "p": "戊 è il quinto dei dieci steli celesti. Il suo elemento è la Terra e la sua polarità è Yang. Saju-Link chiama «Terra Yang (戊)» una persona il cui stelo del giorno è 戊."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 戊 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 戊 legge l'altro stelo, e quando è l'altro stelo a leggere 戊 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Terra Yang (戊) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Sfidante (偏官)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Autorità (正官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Nutrimento (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Rivale (劫財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Espressione (食神)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Perturbatore (傷官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Ricchezza stabile (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 戊 come stelo del giorno, la Ricchezza stabile è 癸 e l'Autorità è 乙. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 戊",
        "blocks": [
          {
            "p": "È qui che 戊 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 戊 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 戊",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "residuo (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Drago",
                  "principale (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Serpente",
                  "residuo (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Scimmia",
                  "residuo (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Cane",
                  "principale (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Maiale",
                  "residuo (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Steli celesti",
    "title": "Terra Yin (己) — Terra, Yin",
    "summary": "L'elemento e la polarità dello stelo celeste 己, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Terra Yin (己) è il sesto dei dieci steli celesti",
        "blocks": [
          {
            "p": "己 è il sesto dei dieci steli celesti. Il suo elemento è la Terra e la sua polarità è Yin. Saju-Link chiama «Terra Yin (己)» una persona il cui stelo del giorno è 己."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 己 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 己 legge l'altro stelo, e quando è l'altro stelo a leggere 己 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Terra Yin (己) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Autorità (正官)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Sfidante (偏官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Nutrimento (正印)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Rivale (劫財)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Compagno (比肩)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Perturbatore (傷官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Espressione (食神)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 己 come stelo del giorno, la Ricchezza stabile è 壬 e l'Autorità è 甲. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 己",
        "blocks": [
          {
            "p": "È qui che 己 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 己 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 己",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "丑",
                  "Bue",
                  "principale (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Cavallo",
                  "intermedio (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Pecora",
                  "principale (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Steli celesti",
    "title": "Metallo Yang (庚) — Metallo, Yang",
    "summary": "L'elemento e la polarità dello stelo celeste 庚, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Metallo Yang (庚) è il settimo dei dieci steli celesti",
        "blocks": [
          {
            "p": "庚 è il settimo dei dieci steli celesti. Il suo elemento è il Metallo e la sua polarità è Yang. Saju-Link chiama «Metallo Yang (庚)» una persona il cui stelo del giorno è 庚."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 庚 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 庚 legge l'altro stelo, e quando è l'altro stelo a leggere 庚 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Metallo Yang (庚) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Sfidante (偏官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Autorità (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Nutrimento (正印)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Compagno (比肩)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Rivale (劫財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Espressione (食神)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Perturbatore (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 庚 come stelo del giorno, la Ricchezza stabile è 乙 e l'Autorità è 丁. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 庚",
        "blocks": [
          {
            "p": "È qui che 庚 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 庚 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 庚",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "巳",
                  "Serpente",
                  "intermedio (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Scimmia",
                  "principale (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Gallo",
                  "residuo (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Steli celesti",
    "title": "Metallo Yin (辛) — Metallo, Yin",
    "summary": "L'elemento e la polarità dello stelo celeste 辛, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Metallo Yin (辛) è l'ottavo dei dieci steli celesti",
        "blocks": [
          {
            "p": "辛 è l'ottavo dei dieci steli celesti. Il suo elemento è il Metallo e la sua polarità è Yin. Saju-Link chiama «Metallo Yin (辛)» una persona il cui stelo del giorno è 辛."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 辛 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 辛 legge l'altro stelo, e quando è l'altro stelo a leggere 辛 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Metallo Yin (辛) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Autorità (正官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Sfidante (偏官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Nutrimento (正印)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Rivale (劫財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Compagno (比肩)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Perturbatore (傷官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 辛 come stelo del giorno, la Ricchezza stabile è 甲 e l'Autorità è 丙. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 辛",
        "blocks": [
          {
            "p": "È qui che 辛 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 辛 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 辛",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "丑",
                  "Bue",
                  "intermedio (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Gallo",
                  "principale (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Cane",
                  "residuo (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Acqua Yang (壬)](/guide/stem-im) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Steli celesti",
    "title": "Acqua Yang (壬) — Acqua, Yang",
    "summary": "L'elemento e la polarità dello stelo celeste 壬, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Acqua Yang (壬) è il nono dei dieci steli celesti",
        "blocks": [
          {
            "p": "壬 è il nono dei dieci steli celesti. Il suo elemento è l'Acqua e la sua polarità è Yang. Saju-Link chiama «Acqua Yang (壬)» una persona il cui stelo del giorno è 壬."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 壬 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 壬 legge l'altro stelo, e quando è l'altro stelo a leggere 壬 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Acqua Yang (壬) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Espressione (食神)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Sfidante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Autorità (正官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Nutrimento (正印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Compagno (比肩)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 壬 come stelo del giorno, la Ricchezza stabile è 丁 e l'Autorità è 己. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 壬",
        "blocks": [
          {
            "p": "È qui che 壬 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 壬 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 壬",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "子",
                  "Topo",
                  "residuo (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Scimmia",
                  "intermedio (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Maiale",
                  "principale (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Steli celesti",
    "title": "Acqua Yin (癸) — Acqua, Yin",
    "summary": "L'elemento e la polarità dello stelo celeste 癸, come legge gli altri nove steli (i Dieci Dei) e quali rami terrestri lo contengono — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Acqua Yin (癸) è il decimo dei dieci steli celesti",
        "blocks": [
          {
            "p": "癸 è il decimo dei dieci steli celesti. Il suo elemento è l'Acqua e la sua polarità è Yin. Saju-Link chiama «Acqua Yin (癸)» una persona il cui stelo del giorno è 癸."
          },
          {
            "p": "La frase che la schermata dei risultati mostra per questo stelo del giorno è: \"Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole.\" Questa frase non ha nulla a che vedere con la tabella o con i punteggi qui sotto."
          }
        ]
      },
      {
        "title": "Come legge gli altri steli (i Dieci Dei)",
        "blocks": [
          {
            "p": "Con 癸 come stelo del giorno, ciascuno dei dieci steli si legge così. La lettura ha una direzione: è così che 癸 legge l'altro stelo, e quando è l'altro stelo a leggere 癸 può risultare un nome diverso."
          },
          {
            "table": {
              "caption": "I Dieci Dei con Acqua Yin (癸) come stelo del giorno",
              "head": [
                "Altro stelo",
                "Elemento e polarità",
                "Nome nei Dieci Dei"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "Perturbatore (傷官)"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "Espressione (食神)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Autorità (正官)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Sfidante (偏官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "Nutrimento (正印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "Rivale (劫財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gli steli che si leggono come posizione del coniuge",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 癸 come stelo del giorno, la Ricchezza stabile è 丙 e l'Autorità è 戊. Se non indichi il tuo genere, questa posizione non viene letta."
          }
        ]
      },
      {
        "title": "I rami che contengono 癸",
        "blocks": [
          {
            "p": "È qui che 癸 si trova nascosto dentro i rami terrestri (gli steli nascosti). La quota è la proporzione dei trenta giorni di quel ramo che 癸 occupa."
          },
          {
            "table": {
              "caption": "I rami che contengono 癸",
              "head": [
                "Ramo",
                "Animale",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "子",
                  "Topo",
                  "principale (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Bue",
                  "residuo (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Drago",
                  "intermedio (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo stelo non decide una persona. Un saju si legge da come si relazionano i suoi otto caratteri.",
              "I Dieci Dei sono un giudizio formulato a partire dallo stelo del giorno. Gli stessi due caratteri ricevono un nome diverso a seconda di quale sia lo stelo del giorno."
            ]
          },
          {
            "p": "I Dieci Dei completi si trovano nella [guida ai Dieci Dei](/guide/ten-gods), mentre la forza degli elementi e il segno del mese sono nella [guida ai cinque elementi](/guide/five-elements). Altri steli: [Legno Yang (甲)](/guide/stem-gap) · [Legno Yin (乙)](/guide/stem-eul) · [Fuoco Yang (丙)](/guide/stem-byeong) · [Fuoco Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metallo Yang (庚)](/guide/stem-gyeong) · [Metallo Yin (辛)](/guide/stem-sin) · [Acqua Yang (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Rami terrestri",
    "title": "子 — il ramo del Topo",
    "summary": "Gli steli contenuti dal ramo terrestre 子 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "子 è il primo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "子 è il primo dei dodici rami terrestri e appartiene al Topo. Quando il ramo del mese di nascita è 子, la stagione è l'inverno e l'elemento che governa la stagione è l'Acqua."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 子, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 子",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "residuo (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "principale (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 子",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 子, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 子 (inverno)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fuoco",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terra",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metallo",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Acqua",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 子 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 子 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 子 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Acqua Yang (壬) — residuo (餘氣)",
                "Acqua Yin (癸) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Sostegno non convenzionale (偏印)",
                  "Nutrimento (正印)"
                ],
                [
                  "Legno Yin (乙)",
                  "Nutrimento (正印)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Sfidante (偏官)",
                  "Autorità (正官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Autorità (正官)",
                  "Sfidante (偏官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Fortuna inattesa (偏財)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Terra Yin (己)",
                  "Ricchezza stabile (正財)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Espressione (食神)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Perturbatore (傷官)",
                  "Espressione (食神)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Compagno (比肩)",
                  "Rivale (劫財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Rivale (劫財)",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Rami terrestri",
    "title": "丑 — il ramo del Bue",
    "summary": "Gli steli contenuti dal ramo terrestre 丑 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丑 è il secondo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "丑 è il secondo dei dodici rami terrestri e appartiene al Bue. Quando il ramo del mese di nascita è 丑, la stagione è l'inverno e l'elemento che governa la stagione è l'Acqua. È un mese di transizione (辰未戌丑), perciò anche la Terra è considerata nello stato Wang."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 丑, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 丑",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "residuo (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "intermedio (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "principale (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 丑",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 丑, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 丑 (inverno (mese di transizione))",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fuoco",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metallo",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Acqua",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 丑 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 丑 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 丑 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Acqua Yin (癸) — residuo (餘氣)",
                "Metallo Yin (辛) — intermedio (中氣)",
                "Terra Yin (己) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Nutrimento (正印)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yang (戊)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Terra Yin (己)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)",
                  "Compagno (比肩)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Espressione (食神)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)",
                  "Autorità (正官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Rami terrestri",
    "title": "寅 — il ramo della Tigre",
    "summary": "Gli steli contenuti dal ramo terrestre 寅 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "寅 è il terzo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "寅 è il terzo dei dodici rami terrestri e appartiene alla Tigre. Quando il ramo del mese di nascita è 寅, la stagione è la primavera e l'elemento che governa la stagione è il Legno."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 寅, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 寅",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residuo (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "intermedio (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "principale (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 寅",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 寅, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 寅 (primavera)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fuoco",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terra",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metallo",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Acqua",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 寅 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 寅 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 寅 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Terra Yang (戊) — residuo (餘氣)",
                "Fuoco Yang (丙) — intermedio (中氣)",
                "Legno Yang (甲) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)",
                  "Compagno (比肩)"
                ],
                [
                  "Legno Yin (乙)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Espressione (食神)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)",
                  "Autorità (正官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Nutrimento (正印)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Rami terrestri",
    "title": "卯 — il ramo del Coniglio",
    "summary": "Gli steli contenuti dal ramo terrestre 卯 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "卯 è il quarto dei dodici rami terrestri",
        "blocks": [
          {
            "p": "卯 è il quarto dei dodici rami terrestri e appartiene al Coniglio. Quando il ramo del mese di nascita è 卯, la stagione è la primavera e l'elemento che governa la stagione è il Legno."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 卯, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 卯",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "residuo (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "principale (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 卯",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 卯, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 卯 (primavera)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fuoco",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terra",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metallo",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Acqua",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 卯 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 卯 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 卯 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Legno Yang (甲) — residuo (餘氣)",
                "Legno Yin (乙) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Compagno (比肩)",
                  "Rivale (劫財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Rivale (劫財)",
                  "Compagno (比肩)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Sostegno non convenzionale (偏印)",
                  "Nutrimento (正印)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Nutrimento (正印)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Sfidante (偏官)",
                  "Autorità (正官)"
                ],
                [
                  "Terra Yin (己)",
                  "Autorità (正官)",
                  "Sfidante (偏官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Fortuna inattesa (偏財)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Ricchezza stabile (正財)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Espressione (食神)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Perturbatore (傷官)",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Rami terrestri",
    "title": "辰 — il ramo del Drago",
    "summary": "Gli steli contenuti dal ramo terrestre 辰 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "辰 è il quinto dei dodici rami terrestri",
        "blocks": [
          {
            "p": "辰 è il quinto dei dodici rami terrestri e appartiene al Drago. Quando il ramo del mese di nascita è 辰, la stagione è la primavera e l'elemento che governa la stagione è il Legno. È un mese di transizione (辰未戌丑), perciò anche la Terra è considerata nello stato Wang."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 辰, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 辰",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "residuo (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Acqua Yin (癸)",
                  "Acqua Yin",
                  "intermedio (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "principale (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 辰",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 辰, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 辰 (primavera (mese di transizione))",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fuoco",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metallo",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Acqua",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 辰 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 辰 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 辰 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Legno Yin (乙) — residuo (餘氣)",
                "Acqua Yin (癸) — intermedio (中氣)",
                "Terra Yang (戊) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Nutrimento (正印)",
                  "Autorità (正官)",
                  "Espressione (食神)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)",
                  "Rivale (劫財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)",
                  "Nutrimento (正印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)",
                  "Sfidante (偏官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Espressione (食神)",
                  "Compagno (比肩)",
                  "Autorità (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Rami terrestri",
    "title": "巳 — il ramo del Serpente",
    "summary": "Gli steli contenuti dal ramo terrestre 巳 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "巳 è il sesto dei dodici rami terrestri",
        "blocks": [
          {
            "p": "巳 è il sesto dei dodici rami terrestri e appartiene al Serpente. Quando il ramo del mese di nascita è 巳, la stagione è l'estate e l'elemento che governa la stagione è il Fuoco."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 巳, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 巳",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residuo (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "intermedio (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "principale (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 巳",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 巳, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 巳 (estate)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fuoco",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terra",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metallo",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Acqua",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 巳 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 巳 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 巳 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Terra Yang (戊) — residuo (餘氣)",
                "Metallo Yang (庚) — intermedio (中氣)",
                "Fuoco Yang (丙) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Fortuna inattesa (偏財)",
                  "Sfidante (偏官)",
                  "Espressione (食神)"
                ],
                [
                  "Legno Yin (乙)",
                  "Ricchezza stabile (正財)",
                  "Autorità (正官)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Espressione (食神)",
                  "Fortuna inattesa (偏財)",
                  "Compagno (比肩)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Perturbatore (傷官)",
                  "Ricchezza stabile (正財)",
                  "Rivale (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Compagno (比肩)",
                  "Espressione (食神)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "Rivale (劫財)",
                  "Perturbatore (傷官)",
                  "Nutrimento (正印)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Sostegno non convenzionale (偏印)",
                  "Compagno (比肩)",
                  "Sfidante (偏官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Nutrimento (正印)",
                  "Rivale (劫財)",
                  "Autorità (正官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Sfidante (偏官)",
                  "Sostegno non convenzionale (偏印)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Autorità (正官)",
                  "Nutrimento (正印)",
                  "Ricchezza stabile (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Rami terrestri",
    "title": "午 — il ramo del Cavallo",
    "summary": "Gli steli contenuti dal ramo terrestre 午 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "午 è il settimo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "午 è il settimo dei dodici rami terrestri e appartiene al Cavallo. Quando il ramo del mese di nascita è 午, la stagione è l'estate e l'elemento che governa la stagione è il Fuoco."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 午, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 午",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Fuoco Yang (丙)",
                  "Fuoco Yang",
                  "residuo (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "intermedio (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "principale (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 午",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 午, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 午 (estate)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fuoco",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terra",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metallo",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Acqua",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 午 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 午 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 午 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Fuoco Yang (丙) — residuo (餘氣)",
                "Terra Yin (己) — intermedio (中氣)",
                "Fuoco Yin (丁) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Espressione (食神)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Legno Yin (乙)",
                  "Perturbatore (傷官)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Compagno (比肩)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Rivale (劫財)",
                  "Espressione (食神)",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yang (戊)",
                  "Sostegno non convenzionale (偏印)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)"
                ],
                [
                  "Terra Yin (己)",
                  "Nutrimento (正印)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Sfidante (偏官)",
                  "Nutrimento (正印)",
                  "Autorità (正官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Autorità (正官)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Fortuna inattesa (偏財)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Ricchezza stabile (正財)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Rami terrestri",
    "title": "未 — il ramo della Pecora",
    "summary": "Gli steli contenuti dal ramo terrestre 未 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "未 è l'ottavo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "未 è l'ottavo dei dodici rami terrestri e appartiene alla Pecora. Quando il ramo del mese di nascita è 未, la stagione è l'estate e l'elemento che governa la stagione è il Fuoco. È un mese di transizione (辰未戌丑), perciò anche la Terra è considerata nello stato Wang."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 未, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 未",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "residuo (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Legno Yin (乙)",
                  "Legno Yin",
                  "intermedio (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "principale (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 未",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 未, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 未 (estate (mese di transizione))",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fuoco",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metallo",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Acqua",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 未 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 未 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 未 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Fuoco Yin (丁) — residuo (餘氣)",
                "Legno Yin (乙) — intermedio (中氣)",
                "Terra Yin (己) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Espressione (食神)",
                  "Compagno (比肩)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yang (戊)",
                  "Nutrimento (正印)",
                  "Autorità (正官)",
                  "Rivale (劫財)"
                ],
                [
                  "Terra Yin (己)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)",
                  "Compagno (比肩)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)",
                  "Nutrimento (正印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)",
                  "Autorità (正官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Rami terrestri",
    "title": "申 — il ramo della Scimmia",
    "summary": "Gli steli contenuti dal ramo terrestre 申 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "申 è il nono dei dodici rami terrestri",
        "blocks": [
          {
            "p": "申 è il nono dei dodici rami terrestri e appartiene alla Scimmia. Quando il ramo del mese di nascita è 申, la stagione è l'autunno e l'elemento che governa la stagione è il Metallo."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 申, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 申",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residuo (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "intermedio (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "principale (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 申",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 申, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 申 (autunno)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fuoco",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terra",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metallo",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Acqua",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 申 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 申 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 申 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Terra Yang (戊) — residuo (餘氣)",
                "Acqua Yang (壬) — intermedio (中氣)",
                "Metallo Yang (庚) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Fortuna inattesa (偏財)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)"
                ],
                [
                  "Legno Yin (乙)",
                  "Ricchezza stabile (正財)",
                  "Nutrimento (正印)",
                  "Autorità (正官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Espressione (食神)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Perturbatore (傷官)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Compagno (比肩)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "Rivale (劫財)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Sostegno non convenzionale (偏印)",
                  "Espressione (食神)",
                  "Compagno (比肩)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Nutrimento (正印)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Sfidante (偏官)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Autorità (正官)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Rami terrestri",
    "title": "酉 — il ramo del Gallo",
    "summary": "Gli steli contenuti dal ramo terrestre 酉 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "酉 è il decimo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "酉 è il decimo dei dodici rami terrestri e appartiene al Gallo. Quando il ramo del mese di nascita è 酉, la stagione è l'autunno e l'elemento che governa la stagione è il Metallo."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 酉, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 酉",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Metallo Yang (庚)",
                  "Metallo Yang",
                  "residuo (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "principale (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 酉",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 酉, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 酉 (autunno)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fuoco",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terra",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metallo",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Acqua",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 酉 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 酉 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 酉 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Metallo Yang (庚) — residuo (餘氣)",
                "Metallo Yin (辛) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Sfidante (偏官)",
                  "Autorità (正官)"
                ],
                [
                  "Legno Yin (乙)",
                  "Autorità (正官)",
                  "Sfidante (偏官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Fortuna inattesa (偏財)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Ricchezza stabile (正財)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Espressione (食神)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Terra Yin (己)",
                  "Perturbatore (傷官)",
                  "Espressione (食神)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Compagno (比肩)",
                  "Rivale (劫財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Rivale (劫財)",
                  "Compagno (比肩)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Sostegno non convenzionale (偏印)",
                  "Nutrimento (正印)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Nutrimento (正印)",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [戌 (Cane)](/guide/branch-sul) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Rami terrestri",
    "title": "戌 — il ramo del Cane",
    "summary": "Gli steli contenuti dal ramo terrestre 戌 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "戌 è l'undicesimo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "戌 è l'undicesimo dei dodici rami terrestri e appartiene al Cane. Quando il ramo del mese di nascita è 戌, la stagione è l'autunno e l'elemento che governa la stagione è il Metallo. È un mese di transizione (辰未戌丑), perciò anche la Terra è considerata nello stato Wang."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 戌, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 戌",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Metallo Yin (辛)",
                  "Metallo Yin",
                  "residuo (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fuoco Yin",
                  "intermedio (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "principale (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 戌",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 戌, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 戌 (autunno (mese di transizione))",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fuoco",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metallo",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Acqua",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 戌 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 戌 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 戌 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Metallo Yin (辛) — residuo (餘氣)",
                "Fuoco Yin (丁) — intermedio (中氣)",
                "Terra Yang (戊) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Autorità (正官)",
                  "Perturbatore (傷官)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Legno Yin (乙)",
                  "Sfidante (偏官)",
                  "Espressione (食神)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Ricchezza stabile (正財)",
                  "Rivale (劫財)",
                  "Espressione (食神)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Fortuna inattesa (偏財)",
                  "Compagno (比肩)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Perturbatore (傷官)",
                  "Nutrimento (正印)",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "Espressione (食神)",
                  "Sostegno non convenzionale (偏印)",
                  "Rivale (劫財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Rivale (劫財)",
                  "Autorità (正官)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Compagno (比肩)",
                  "Sfidante (偏官)",
                  "Nutrimento (正印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Nutrimento (正印)",
                  "Ricchezza stabile (正財)",
                  "Sfidante (偏官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Sostegno non convenzionale (偏印)",
                  "Fortuna inattesa (偏財)",
                  "Autorità (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [亥 (Maiale)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Rami terrestri",
    "title": "亥 — il ramo del Maiale",
    "summary": "Gli steli contenuti dal ramo terrestre 亥 (gli steli nascosti), la forza dei cinque elementi quando è il ramo del mese e i Dieci Dei letti per ciascuno stelo del giorno — esposti esattamente come previsto dalle regole di calcolo di Saju-Link.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "亥 è il dodicesimo dei dodici rami terrestri",
        "blocks": [
          {
            "p": "亥 è il dodicesimo dei dodici rami terrestri e appartiene al Maiale. Quando il ramo del mese di nascita è 亥, la stagione è l'inverno e l'elemento che governa la stagione è l'Acqua."
          },
          {
            "p": "Quando il ramo del giorno di nascita è 亥, questo carattere è la posizione del coniuge. Qui sotto si vede quali steli contiene questo ramo e che cosa sono rispetto allo stelo del giorno."
          }
        ]
      },
      {
        "title": "Gli steli contenuti da questo ramo (steli nascosti)",
        "blocks": [
          {
            "p": "Un ramo è un solo carattere visibile, ma contiene degli steli al suo interno. La quota indica come i trenta giorni del ramo si dividono tra gli steli, e lo stelo principale è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti di 亥",
              "head": [
                "Stelo",
                "Elemento e polarità",
                "Posizione",
                "Quota"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residuo (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Legno Yang (甲)",
                  "Legno Yang",
                  "intermedio (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Acqua Yang (壬)",
                  "Acqua Yang",
                  "principale (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La forza dei cinque elementi quando il ramo del mese è 亥",
        "blocks": [
          {
            "p": "Quando il ramo del mese di nascita è 亥, a ogni elemento viene assegnato uno stato (Wang, Sang, Hyu, Su, Sa), e quello stato diventa il moltiplicatore applicato alla sua forza."
          },
          {
            "table": {
              "caption": "Gli stati degli elementi per il ramo del mese 亥 (inverno)",
              "head": [
                "Elemento",
                "Stato",
                "Moltiplicatore"
              ],
              "rows": [
                [
                  "Legno",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fuoco",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terra",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metallo",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Acqua",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "I Dieci Dei per stelo del giorno",
        "blocks": [
          {
            "p": "Gli stessi steli nascosti di 亥 diventano Dieci Dei diversi a seconda dello stelo del giorno. Quando 亥 è il ramo del giorno, questa tabella è la lettura della posizione del coniuge."
          },
          {
            "table": {
              "caption": "Cosa sono gli steli nascosti di 亥 rispetto a ciascuno stelo del giorno",
              "head": [
                "Stelo del giorno",
                "Terra Yang (戊) — residuo (餘氣)",
                "Legno Yang (甲) — intermedio (中氣)",
                "Acqua Yang (壬) — principale (本氣)"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "Fortuna inattesa (偏財)",
                  "Compagno (比肩)",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Legno Yin (乙)",
                  "Ricchezza stabile (正財)",
                  "Rivale (劫財)",
                  "Nutrimento (正印)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "Espressione (食神)",
                  "Sostegno non convenzionale (偏印)",
                  "Sfidante (偏官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "Perturbatore (傷官)",
                  "Nutrimento (正印)",
                  "Autorità (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Compagno (比肩)",
                  "Sfidante (偏官)",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "Rivale (劫財)",
                  "Autorità (正官)",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "Sostegno non convenzionale (偏印)",
                  "Fortuna inattesa (偏財)",
                  "Espressione (食神)"
                ],
                [
                  "Metallo Yin (辛)",
                  "Nutrimento (正印)",
                  "Ricchezza stabile (正財)",
                  "Perturbatore (傷官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "Sfidante (偏官)",
                  "Espressione (食神)",
                  "Compagno (比肩)"
                ],
                [
                  "Acqua Yin (癸)",
                  "Autorità (正官)",
                  "Perturbatore (傷官)",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo ramo non decide una persona. Lo stesso ramo si legge in modo diverso a seconda dello stelo del giorno e del ramo del mese.",
              "Le relazioni tra i rami, come armonia, scontro e discordia, non sono trattate qui."
            ]
          },
          {
            "p": "Le relazioni tra i rami sono nella [tabella dei dodici rami](/guide/branches), e il suo significato come animale dello zodiaco è in [dove si colloca lo zodiaco in un saju](/guide/zodiac). Altri rami: [子 (Topo)](/guide/branch-ja) · [丑 (Bue)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coniglio)](/guide/branch-myo) · [辰 (Drago)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavallo)](/guide/branch-o) · [未 (Pecora)](/guide/branch-mi) · [申 (Scimmia)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Cane)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 甲子",
    "summary": "Come Saju-Link legge il pilastro del giorno 甲子 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "甲子 è il pilastro del giorno numero 1 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 甲子, lo stelo del giorno è 甲 (Legno, Yang) e il ramo del giorno è 子 (il Topo). Nel ciclo sessagesimale è la combinazione numero 1."
          },
          {
            "p": "Saju-Link chiama «Legno Yang (甲)» una persona il cui stelo del giorno è 甲, e la frase che la schermata dei risultati mostra è: \"Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 子 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 甲, gli steli contenuti in 子 sono i seguenti. Lo stelo principale (癸) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 甲子",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 甲"
              ],
              "rows": [
                [
                  "Acqua Yang (壬)",
                  "residuo (餘氣)",
                  "{hidJaYeo}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Acqua Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Nutrimento (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 甲 come stelo del giorno, la Ricchezza stabile è 己 e l'Autorità è 辛."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 己. 己 non è contenuto in 子."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 辛. 辛 non è contenuto in 子."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [癸亥](/guide/pillar-gye-hae) e il successivo è [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "È composto da [Legno Yang (甲)](/guide/stem-gap) e [子 (Topo)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 乙丑",
    "summary": "Come Saju-Link legge il pilastro del giorno 乙丑 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "乙丑 è il pilastro del giorno numero 2 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 乙丑, lo stelo del giorno è 乙 (Legno, Yin) e il ramo del giorno è 丑 (il Bue). Nel ciclo sessagesimale è la combinazione numero 2."
          },
          {
            "p": "Saju-Link chiama «Legno Yin (乙)» una persona il cui stelo del giorno è 乙, e la frase che la schermata dei risultati mostra è: \"Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 丑 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 乙, gli steli contenuti in 丑 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 乙丑",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 乙"
              ],
              "rows": [
                [
                  "Acqua Yin (癸)",
                  "residuo (餘氣)",
                  "{hidChukYeo}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Sfidante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 乙 come stelo del giorno, la Ricchezza stabile è 戊 e l'Autorità è 庚."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 戊. 戊 non è contenuto in 丑."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 庚. 庚 non è contenuto in 丑."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [甲子](/guide/pillar-gap-ja) e il successivo è [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "È composto da [Legno Yin (乙)](/guide/stem-eul) e [丑 (Bue)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丙寅",
    "summary": "Come Saju-Link legge il pilastro del giorno 丙寅 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丙寅 è il pilastro del giorno numero 3 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丙寅, lo stelo del giorno è 丙 (Fuoco, Yang) e il ramo del giorno è 寅 (la Tigre). Nel ciclo sessagesimale è la combinazione numero 3."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yang (丙)» una persona il cui stelo del giorno è 丙, e la frase che la schermata dei risultati mostra è: \"Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 寅 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丙, gli steli contenuti in 寅 sono i seguenti. Lo stelo principale (甲) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丙寅",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidInYeo}",
                  "Espressione (食神)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Compagno (比肩)"
                ],
                [
                  "Legno Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丙 come stelo del giorno, la Ricchezza stabile è 辛 e l'Autorità è 癸."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 辛. 辛 non è contenuto in 寅."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 癸. 癸 non è contenuto in 寅."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [乙丑](/guide/pillar-eul-chuk) e il successivo è [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "È composto da [Fuoco Yang (丙)](/guide/stem-byeong) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丁卯",
    "summary": "Come Saju-Link legge il pilastro del giorno 丁卯 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丁卯 è il pilastro del giorno numero 4 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丁卯, lo stelo del giorno è 丁 (Fuoco, Yin) e il ramo del giorno è 卯 (il Coniglio). Nel ciclo sessagesimale è la combinazione numero 4."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yin (丁)» una persona il cui stelo del giorno è 丁, e la frase che la schermata dei risultati mostra è: \"La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 卯 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丁, gli steli contenuti in 卯 sono i seguenti. Lo stelo principale (乙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丁卯",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丁"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "residuo (餘氣)",
                  "{hidMyoYeo}",
                  "Nutrimento (正印)"
                ],
                [
                  "Legno Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丁 come stelo del giorno, la Ricchezza stabile è 庚 e l'Autorità è 壬."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 庚. 庚 non è contenuto in 卯."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 壬. 壬 non è contenuto in 卯."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丙寅](/guide/pillar-byeong-in) e il successivo è [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "È composto da [Fuoco Yin (丁)](/guide/stem-jeong) e [卯 (Coniglio)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 戊辰",
    "summary": "Come Saju-Link legge il pilastro del giorno 戊辰 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "戊辰 è il pilastro del giorno numero 5 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 戊辰, lo stelo del giorno è 戊 (Terra, Yang) e il ramo del giorno è 辰 (il Drago). Nel ciclo sessagesimale è la combinazione numero 5."
          },
          {
            "p": "Saju-Link chiama «Terra Yang (戊)» una persona il cui stelo del giorno è 戊, e la frase che la schermata dei risultati mostra è: \"Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 辰 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 戊, gli steli contenuti in 辰 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 戊辰",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 戊"
              ],
              "rows": [
                [
                  "Legno Yin (乙)",
                  "residuo (餘氣)",
                  "{hidJinYeo}",
                  "Autorità (正官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 戊 come stelo del giorno, la Ricchezza stabile è 癸 e l'Autorità è 乙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 癸. 癸 è contenuto in 辰 (intermedio (中氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 乙. 乙 è contenuto in 辰 (residuo (餘氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丁卯](/guide/pillar-jeong-myo) e il successivo è [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "È composto da [Terra Yang (戊)](/guide/stem-mu) e [辰 (Drago)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 己巳",
    "summary": "Come Saju-Link legge il pilastro del giorno 己巳 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "己巳 è il pilastro del giorno numero 6 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 己巳, lo stelo del giorno è 己 (Terra, Yin) e il ramo del giorno è 巳 (il Serpente). Nel ciclo sessagesimale è la combinazione numero 6."
          },
          {
            "p": "Saju-Link chiama «Terra Yin (己)» una persona il cui stelo del giorno è 己, e la frase che la schermata dei risultati mostra è: \"Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 巳 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 己, gli steli contenuti in 巳 sono i seguenti. Lo stelo principale (丙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 己巳",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 己"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSaYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Nutrimento (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 己 come stelo del giorno, la Ricchezza stabile è 壬 e l'Autorità è 甲."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 壬. 壬 non è contenuto in 巳."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 甲. 甲 non è contenuto in 巳."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [戊辰](/guide/pillar-mu-jin) e il successivo è [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "È composto da [Terra Yin (己)](/guide/stem-gi) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 庚午",
    "summary": "Come Saju-Link legge il pilastro del giorno 庚午 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "庚午 è il pilastro del giorno numero 7 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 庚午, lo stelo del giorno è 庚 (Metallo, Yang) e il ramo del giorno è 午 (il Cavallo). Nel ciclo sessagesimale è la combinazione numero 7."
          },
          {
            "p": "Saju-Link chiama «Metallo Yang (庚)» una persona il cui stelo del giorno è 庚, e la frase che la schermata dei risultati mostra è: \"Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 午 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 庚, gli steli contenuti in 午 sono i seguenti. Lo stelo principale (丁) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 庚午",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 庚"
              ],
              "rows": [
                [
                  "Fuoco Yang (丙)",
                  "residuo (餘氣)",
                  "{hidOYeo}",
                  "Sfidante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Nutrimento (正印)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Autorità (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 庚 come stelo del giorno, la Ricchezza stabile è 乙 e l'Autorità è 丁."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 乙. 乙 non è contenuto in 午."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丁. 丁 è contenuto in 午 (principale (本氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [己巳](/guide/pillar-gi-sa) e il successivo è [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "È composto da [Metallo Yang (庚)](/guide/stem-gyeong) e [午 (Cavallo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 辛未",
    "summary": "Come Saju-Link legge il pilastro del giorno 辛未 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "辛未 è il pilastro del giorno numero 8 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 辛未, lo stelo del giorno è 辛 (Metallo, Yin) e il ramo del giorno è 未 (la Pecora). Nel ciclo sessagesimale è la combinazione numero 8."
          },
          {
            "p": "Saju-Link chiama «Metallo Yin (辛)» una persona il cui stelo del giorno è 辛, e la frase che la schermata dei risultati mostra è: \"Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 未 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 辛, gli steli contenuti in 未 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 辛未",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 辛"
              ],
              "rows": [
                [
                  "Fuoco Yin (丁)",
                  "residuo (餘氣)",
                  "{hidMiYeo}",
                  "Sfidante (偏官)"
                ],
                [
                  "Legno Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 辛 come stelo del giorno, la Ricchezza stabile è 甲 e l'Autorità è 丙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 甲. 甲 non è contenuto in 未."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丙. 丙 non è contenuto in 未."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [庚午](/guide/pillar-gyeong-o) e il successivo è [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "È composto da [Metallo Yin (辛)](/guide/stem-sin) e [未 (Pecora)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 壬申",
    "summary": "Come Saju-Link legge il pilastro del giorno 壬申 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "壬申 è il pilastro del giorno numero 9 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 壬申, lo stelo del giorno è 壬 (Acqua, Yang) e il ramo del giorno è 申 (la Scimmia). Nel ciclo sessagesimale è la combinazione numero 9."
          },
          {
            "p": "Saju-Link chiama «Acqua Yang (壬)» una persona il cui stelo del giorno è 壬, e la frase che la schermata dei risultati mostra è: \"Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 申 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 壬, gli steli contenuti in 申 sono i seguenti. Lo stelo principale (庚) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 壬申",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 壬"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSinYeo}",
                  "Sfidante (偏官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Compagno (比肩)"
                ],
                [
                  "Metallo Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 壬 come stelo del giorno, la Ricchezza stabile è 丁 e l'Autorità è 己."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丁. 丁 non è contenuto in 申."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 己. 己 non è contenuto in 申."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [辛未](/guide/pillar-sin-mi) e il successivo è [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "È composto da [Acqua Yang (壬)](/guide/stem-im) e [申 (Scimmia)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 癸酉",
    "summary": "Come Saju-Link legge il pilastro del giorno 癸酉 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "癸酉 è il pilastro del giorno numero 10 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 癸酉, lo stelo del giorno è 癸 (Acqua, Yin) e il ramo del giorno è 酉 (il Gallo). Nel ciclo sessagesimale è la combinazione numero 10."
          },
          {
            "p": "Saju-Link chiama «Acqua Yin (癸)» una persona il cui stelo del giorno è 癸, e la frase che la schermata dei risultati mostra è: \"Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 酉 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 癸, gli steli contenuti in 酉 sono i seguenti. Lo stelo principale (辛) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 癸酉",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 癸"
              ],
              "rows": [
                [
                  "Metallo Yang (庚)",
                  "residuo (餘氣)",
                  "{hidYuYeo}",
                  "Nutrimento (正印)"
                ],
                [
                  "Metallo Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 癸 come stelo del giorno, la Ricchezza stabile è 丙 e l'Autorità è 戊."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丙. 丙 non è contenuto in 酉."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 戊. 戊 non è contenuto in 酉."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [壬申](/guide/pillar-im-sin) e il successivo è [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "È composto da [Acqua Yin (癸)](/guide/stem-gye) e [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 甲戌",
    "summary": "Come Saju-Link legge il pilastro del giorno 甲戌 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "甲戌 è il pilastro del giorno numero 11 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 甲戌, lo stelo del giorno è 甲 (Legno, Yang) e il ramo del giorno è 戌 (il Cane). Nel ciclo sessagesimale è la combinazione numero 11."
          },
          {
            "p": "Saju-Link chiama «Legno Yang (甲)» una persona il cui stelo del giorno è 甲, e la frase che la schermata dei risultati mostra è: \"Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 戌 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 甲, gli steli contenuti in 戌 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 甲戌",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 甲"
              ],
              "rows": [
                [
                  "Metallo Yin (辛)",
                  "residuo (餘氣)",
                  "{hidSulYeo}",
                  "Autorità (正官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 甲 come stelo del giorno, la Ricchezza stabile è 己 e l'Autorità è 辛."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 己. 己 non è contenuto in 戌."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 辛. 辛 è contenuto in 戌 (residuo (餘氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [癸酉](/guide/pillar-gye-yu) e il successivo è [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "È composto da [Legno Yang (甲)](/guide/stem-gap) e [戌 (Cane)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 乙亥",
    "summary": "Come Saju-Link legge il pilastro del giorno 乙亥 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "乙亥 è il pilastro del giorno numero 12 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 乙亥, lo stelo del giorno è 乙 (Legno, Yin) e il ramo del giorno è 亥 (il Maiale). Nel ciclo sessagesimale è la combinazione numero 12."
          },
          {
            "p": "Saju-Link chiama «Legno Yin (乙)» una persona il cui stelo del giorno è 乙, e la frase che la schermata dei risultati mostra è: \"Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 亥 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 乙, gli steli contenuti in 亥 sono i seguenti. Lo stelo principale (壬) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 乙亥",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 乙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidHaeYeo}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Legno Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Nutrimento (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 乙 come stelo del giorno, la Ricchezza stabile è 戊 e l'Autorità è 庚."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 戊. 戊 è contenuto in 亥 (residuo (餘氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 庚. 庚 non è contenuto in 亥."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [甲戌](/guide/pillar-gap-sul) e il successivo è [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "È composto da [Legno Yin (乙)](/guide/stem-eul) e [亥 (Maiale)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丙子",
    "summary": "Come Saju-Link legge il pilastro del giorno 丙子 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丙子 è il pilastro del giorno numero 13 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丙子, lo stelo del giorno è 丙 (Fuoco, Yang) e il ramo del giorno è 子 (il Topo). Nel ciclo sessagesimale è la combinazione numero 13."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yang (丙)» una persona il cui stelo del giorno è 丙, e la frase che la schermata dei risultati mostra è: \"Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 子 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丙, gli steli contenuti in 子 sono i seguenti. Lo stelo principale (癸) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丙子",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丙"
              ],
              "rows": [
                [
                  "Acqua Yang (壬)",
                  "residuo (餘氣)",
                  "{hidJaYeo}",
                  "Sfidante (偏官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Autorità (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丙 come stelo del giorno, la Ricchezza stabile è 辛 e l'Autorità è 癸."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 辛. 辛 non è contenuto in 子."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 癸. 癸 è contenuto in 子 (principale (本氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [乙亥](/guide/pillar-eul-hae) e il successivo è [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "È composto da [Fuoco Yang (丙)](/guide/stem-byeong) e [子 (Topo)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丁丑",
    "summary": "Come Saju-Link legge il pilastro del giorno 丁丑 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丁丑 è il pilastro del giorno numero 14 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丁丑, lo stelo del giorno è 丁 (Fuoco, Yin) e il ramo del giorno è 丑 (il Bue). Nel ciclo sessagesimale è la combinazione numero 14."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yin (丁)» una persona il cui stelo del giorno è 丁, e la frase che la schermata dei risultati mostra è: \"La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 丑 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丁, gli steli contenuti in 丑 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丁丑",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丁"
              ],
              "rows": [
                [
                  "Acqua Yin (癸)",
                  "residuo (餘氣)",
                  "{hidChukYeo}",
                  "Sfidante (偏官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丁 come stelo del giorno, la Ricchezza stabile è 庚 e l'Autorità è 壬."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 庚. 庚 non è contenuto in 丑."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 壬. 壬 non è contenuto in 丑."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丙子](/guide/pillar-byeong-ja) e il successivo è [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "È composto da [Fuoco Yin (丁)](/guide/stem-jeong) e [丑 (Bue)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 戊寅",
    "summary": "Come Saju-Link legge il pilastro del giorno 戊寅 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "戊寅 è il pilastro del giorno numero 15 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 戊寅, lo stelo del giorno è 戊 (Terra, Yang) e il ramo del giorno è 寅 (la Tigre). Nel ciclo sessagesimale è la combinazione numero 15."
          },
          {
            "p": "Saju-Link chiama «Terra Yang (戊)» una persona il cui stelo del giorno è 戊, e la frase che la schermata dei risultati mostra è: \"Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 寅 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 戊, gli steli contenuti in 寅 sono i seguenti. Lo stelo principale (甲) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 戊寅",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 戊"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidInYeo}",
                  "Compagno (比肩)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Legno Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 戊 come stelo del giorno, la Ricchezza stabile è 癸 e l'Autorità è 乙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 癸. 癸 non è contenuto in 寅."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 乙. 乙 non è contenuto in 寅."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丁丑](/guide/pillar-jeong-chuk) e il successivo è [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "È composto da [Terra Yang (戊)](/guide/stem-mu) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 己卯",
    "summary": "Come Saju-Link legge il pilastro del giorno 己卯 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "己卯 è il pilastro del giorno numero 16 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 己卯, lo stelo del giorno è 己 (Terra, Yin) e il ramo del giorno è 卯 (il Coniglio). Nel ciclo sessagesimale è la combinazione numero 16."
          },
          {
            "p": "Saju-Link chiama «Terra Yin (己)» una persona il cui stelo del giorno è 己, e la frase che la schermata dei risultati mostra è: \"Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 卯 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 己, gli steli contenuti in 卯 sono i seguenti. Lo stelo principale (乙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 己卯",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 己"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "residuo (餘氣)",
                  "{hidMyoYeo}",
                  "Autorità (正官)"
                ],
                [
                  "Legno Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 己 come stelo del giorno, la Ricchezza stabile è 壬 e l'Autorità è 甲."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 壬. 壬 non è contenuto in 卯."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 甲. 甲 è contenuto in 卯 (residuo (餘氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [戊寅](/guide/pillar-mu-in) e il successivo è [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "È composto da [Terra Yin (己)](/guide/stem-gi) e [卯 (Coniglio)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 庚辰",
    "summary": "Come Saju-Link legge il pilastro del giorno 庚辰 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "庚辰 è il pilastro del giorno numero 17 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 庚辰, lo stelo del giorno è 庚 (Metallo, Yang) e il ramo del giorno è 辰 (il Drago). Nel ciclo sessagesimale è la combinazione numero 17."
          },
          {
            "p": "Saju-Link chiama «Metallo Yang (庚)» una persona il cui stelo del giorno è 庚, e la frase che la schermata dei risultati mostra è: \"Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 辰 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 庚, gli steli contenuti in 辰 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 庚辰",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 庚"
              ],
              "rows": [
                [
                  "Legno Yin (乙)",
                  "residuo (餘氣)",
                  "{hidJinYeo}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 庚 come stelo del giorno, la Ricchezza stabile è 乙 e l'Autorità è 丁."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 乙. 乙 è contenuto in 辰 (residuo (餘氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丁. 丁 non è contenuto in 辰."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [己卯](/guide/pillar-gi-myo) e il successivo è [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "È composto da [Metallo Yang (庚)](/guide/stem-gyeong) e [辰 (Drago)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 辛巳",
    "summary": "Come Saju-Link legge il pilastro del giorno 辛巳 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "辛巳 è il pilastro del giorno numero 18 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 辛巳, lo stelo del giorno è 辛 (Metallo, Yin) e il ramo del giorno è 巳 (il Serpente). Nel ciclo sessagesimale è la combinazione numero 18."
          },
          {
            "p": "Saju-Link chiama «Metallo Yin (辛)» una persona il cui stelo del giorno è 辛, e la frase che la schermata dei risultati mostra è: \"Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 巳 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 辛, gli steli contenuti in 巳 sono i seguenti. Lo stelo principale (丙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 辛巳",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 辛"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSaYeo}",
                  "Nutrimento (正印)"
                ],
                [
                  "Metallo Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Autorità (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 辛 come stelo del giorno, la Ricchezza stabile è 甲 e l'Autorità è 丙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 甲. 甲 non è contenuto in 巳."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丙. 丙 è contenuto in 巳 (principale (本氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [庚辰](/guide/pillar-gyeong-jin) e il successivo è [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "È composto da [Metallo Yin (辛)](/guide/stem-sin) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 壬午",
    "summary": "Come Saju-Link legge il pilastro del giorno 壬午 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "壬午 è il pilastro del giorno numero 19 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 壬午, lo stelo del giorno è 壬 (Acqua, Yang) e il ramo del giorno è 午 (il Cavallo). Nel ciclo sessagesimale è la combinazione numero 19."
          },
          {
            "p": "Saju-Link chiama «Acqua Yang (壬)» una persona il cui stelo del giorno è 壬, e la frase che la schermata dei risultati mostra è: \"Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 午 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 壬, gli steli contenuti in 午 sono i seguenti. Lo stelo principale (丁) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 壬午",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 壬"
              ],
              "rows": [
                [
                  "Fuoco Yang (丙)",
                  "residuo (餘氣)",
                  "{hidOYeo}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Autorità (正官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Ricchezza stabile (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 壬 come stelo del giorno, la Ricchezza stabile è 丁 e l'Autorità è 己."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丁. 丁 è contenuto in 午 (principale (本氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 己. 己 è contenuto in 午 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [辛巳](/guide/pillar-sin-sa) e il successivo è [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "È composto da [Acqua Yang (壬)](/guide/stem-im) e [午 (Cavallo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 癸未",
    "summary": "Come Saju-Link legge il pilastro del giorno 癸未 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "癸未 è il pilastro del giorno numero 20 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 癸未, lo stelo del giorno è 癸 (Acqua, Yin) e il ramo del giorno è 未 (la Pecora). Nel ciclo sessagesimale è la combinazione numero 20."
          },
          {
            "p": "Saju-Link chiama «Acqua Yin (癸)» una persona il cui stelo del giorno è 癸, e la frase che la schermata dei risultati mostra è: \"Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 未 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 癸, gli steli contenuti in 未 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 癸未",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 癸"
              ],
              "rows": [
                [
                  "Fuoco Yin (丁)",
                  "residuo (餘氣)",
                  "{hidMiYeo}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Legno Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 癸 come stelo del giorno, la Ricchezza stabile è 丙 e l'Autorità è 戊."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丙. 丙 non è contenuto in 未."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 戊. 戊 non è contenuto in 未."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [壬午](/guide/pillar-im-o) e il successivo è [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "È composto da [Acqua Yin (癸)](/guide/stem-gye) e [未 (Pecora)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 甲申",
    "summary": "Come Saju-Link legge il pilastro del giorno 甲申 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "甲申 è il pilastro del giorno numero 21 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 甲申, lo stelo del giorno è 甲 (Legno, Yang) e il ramo del giorno è 申 (la Scimmia). Nel ciclo sessagesimale è la combinazione numero 21."
          },
          {
            "p": "Saju-Link chiama «Legno Yang (甲)» una persona il cui stelo del giorno è 甲, e la frase che la schermata dei risultati mostra è: \"Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 申 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 甲, gli steli contenuti in 申 sono i seguenti. Lo stelo principale (庚) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 甲申",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 甲"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSinYeo}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Metallo Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 甲 come stelo del giorno, la Ricchezza stabile è 己 e l'Autorità è 辛."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 己. 己 non è contenuto in 申."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 辛. 辛 non è contenuto in 申."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [癸未](/guide/pillar-gye-mi) e il successivo è [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "È composto da [Legno Yang (甲)](/guide/stem-gap) e [申 (Scimmia)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 乙酉",
    "summary": "Come Saju-Link legge il pilastro del giorno 乙酉 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "乙酉 è il pilastro del giorno numero 22 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 乙酉, lo stelo del giorno è 乙 (Legno, Yin) e il ramo del giorno è 酉 (il Gallo). Nel ciclo sessagesimale è la combinazione numero 22."
          },
          {
            "p": "Saju-Link chiama «Legno Yin (乙)» una persona il cui stelo del giorno è 乙, e la frase che la schermata dei risultati mostra è: \"Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 酉 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 乙, gli steli contenuti in 酉 sono i seguenti. Lo stelo principale (辛) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 乙酉",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 乙"
              ],
              "rows": [
                [
                  "Metallo Yang (庚)",
                  "residuo (餘氣)",
                  "{hidYuYeo}",
                  "Autorità (正官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 乙 come stelo del giorno, la Ricchezza stabile è 戊 e l'Autorità è 庚."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 戊. 戊 non è contenuto in 酉."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 庚. 庚 è contenuto in 酉 (residuo (餘氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [甲申](/guide/pillar-gap-sin) e il successivo è [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "È composto da [Legno Yin (乙)](/guide/stem-eul) e [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丙戌",
    "summary": "Come Saju-Link legge il pilastro del giorno 丙戌 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丙戌 è il pilastro del giorno numero 23 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丙戌, lo stelo del giorno è 丙 (Fuoco, Yang) e il ramo del giorno è 戌 (il Cane). Nel ciclo sessagesimale è la combinazione numero 23."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yang (丙)» una persona il cui stelo del giorno è 丙, e la frase che la schermata dei risultati mostra è: \"Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 戌 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丙, gli steli contenuti in 戌 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丙戌",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丙"
              ],
              "rows": [
                [
                  "Metallo Yin (辛)",
                  "residuo (餘氣)",
                  "{hidSulYeo}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丙 come stelo del giorno, la Ricchezza stabile è 辛 e l'Autorità è 癸."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 辛. 辛 è contenuto in 戌 (residuo (餘氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 癸. 癸 non è contenuto in 戌."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [乙酉](/guide/pillar-eul-yu) e il successivo è [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "È composto da [Fuoco Yang (丙)](/guide/stem-byeong) e [戌 (Cane)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丁亥",
    "summary": "Come Saju-Link legge il pilastro del giorno 丁亥 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丁亥 è il pilastro del giorno numero 24 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丁亥, lo stelo del giorno è 丁 (Fuoco, Yin) e il ramo del giorno è 亥 (il Maiale). Nel ciclo sessagesimale è la combinazione numero 24."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yin (丁)» una persona il cui stelo del giorno è 丁, e la frase che la schermata dei risultati mostra è: \"La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 亥 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丁, gli steli contenuti in 亥 sono i seguenti. Lo stelo principale (壬) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丁亥",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丁"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidHaeYeo}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Legno Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Nutrimento (正印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Autorità (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丁 come stelo del giorno, la Ricchezza stabile è 庚 e l'Autorità è 壬."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 庚. 庚 non è contenuto in 亥."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 壬. 壬 è contenuto in 亥 (principale (本氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丙戌](/guide/pillar-byeong-sul) e il successivo è [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "È composto da [Fuoco Yin (丁)](/guide/stem-jeong) e [亥 (Maiale)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 戊子",
    "summary": "Come Saju-Link legge il pilastro del giorno 戊子 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "戊子 è il pilastro del giorno numero 25 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 戊子, lo stelo del giorno è 戊 (Terra, Yang) e il ramo del giorno è 子 (il Topo). Nel ciclo sessagesimale è la combinazione numero 25."
          },
          {
            "p": "Saju-Link chiama «Terra Yang (戊)» una persona il cui stelo del giorno è 戊, e la frase che la schermata dei risultati mostra è: \"Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 子 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 戊, gli steli contenuti in 子 sono i seguenti. Lo stelo principale (癸) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 戊子",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 戊"
              ],
              "rows": [
                [
                  "Acqua Yang (壬)",
                  "residuo (餘氣)",
                  "{hidJaYeo}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Ricchezza stabile (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 戊 come stelo del giorno, la Ricchezza stabile è 癸 e l'Autorità è 乙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 癸. 癸 è contenuto in 子 (principale (本氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 乙. 乙 non è contenuto in 子."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丁亥](/guide/pillar-jeong-hae) e il successivo è [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "È composto da [Terra Yang (戊)](/guide/stem-mu) e [子 (Topo)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 己丑",
    "summary": "Come Saju-Link legge il pilastro del giorno 己丑 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "己丑 è il pilastro del giorno numero 26 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 己丑, lo stelo del giorno è 己 (Terra, Yin) e il ramo del giorno è 丑 (il Bue). Nel ciclo sessagesimale è la combinazione numero 26."
          },
          {
            "p": "Saju-Link chiama «Terra Yin (己)» una persona il cui stelo del giorno è 己, e la frase che la schermata dei risultati mostra è: \"Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 丑 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 己, gli steli contenuti in 丑 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 己丑",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 己"
              ],
              "rows": [
                [
                  "Acqua Yin (癸)",
                  "residuo (餘氣)",
                  "{hidChukYeo}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 己 come stelo del giorno, la Ricchezza stabile è 壬 e l'Autorità è 甲."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 壬. 壬 non è contenuto in 丑."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 甲. 甲 non è contenuto in 丑."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [戊子](/guide/pillar-mu-ja) e il successivo è [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "È composto da [Terra Yin (己)](/guide/stem-gi) e [丑 (Bue)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 庚寅",
    "summary": "Come Saju-Link legge il pilastro del giorno 庚寅 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "庚寅 è il pilastro del giorno numero 27 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 庚寅, lo stelo del giorno è 庚 (Metallo, Yang) e il ramo del giorno è 寅 (la Tigre). Nel ciclo sessagesimale è la combinazione numero 27."
          },
          {
            "p": "Saju-Link chiama «Metallo Yang (庚)» una persona il cui stelo del giorno è 庚, e la frase che la schermata dei risultati mostra è: \"Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 寅 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 庚, gli steli contenuti in 寅 sono i seguenti. Lo stelo principale (甲) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 庚寅",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 庚"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidInYeo}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Sfidante (偏官)"
                ],
                [
                  "Legno Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 庚 come stelo del giorno, la Ricchezza stabile è 乙 e l'Autorità è 丁."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 乙. 乙 non è contenuto in 寅."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丁. 丁 non è contenuto in 寅."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [己丑](/guide/pillar-gi-chuk) e il successivo è [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "È composto da [Metallo Yang (庚)](/guide/stem-gyeong) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 辛卯",
    "summary": "Come Saju-Link legge il pilastro del giorno 辛卯 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "辛卯 è il pilastro del giorno numero 28 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 辛卯, lo stelo del giorno è 辛 (Metallo, Yin) e il ramo del giorno è 卯 (il Coniglio). Nel ciclo sessagesimale è la combinazione numero 28."
          },
          {
            "p": "Saju-Link chiama «Metallo Yin (辛)» una persona il cui stelo del giorno è 辛, e la frase che la schermata dei risultati mostra è: \"Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 卯 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 辛, gli steli contenuti in 卯 sono i seguenti. Lo stelo principale (乙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 辛卯",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 辛"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "residuo (餘氣)",
                  "{hidMyoYeo}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Legno Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 辛 come stelo del giorno, la Ricchezza stabile è 甲 e l'Autorità è 丙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 甲. 甲 è contenuto in 卯 (residuo (餘氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丙. 丙 non è contenuto in 卯."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [庚寅](/guide/pillar-gyeong-in) e il successivo è [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "È composto da [Metallo Yin (辛)](/guide/stem-sin) e [卯 (Coniglio)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 壬辰",
    "summary": "Come Saju-Link legge il pilastro del giorno 壬辰 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "壬辰 è il pilastro del giorno numero 29 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 壬辰, lo stelo del giorno è 壬 (Acqua, Yang) e il ramo del giorno è 辰 (il Drago). Nel ciclo sessagesimale è la combinazione numero 29."
          },
          {
            "p": "Saju-Link chiama «Acqua Yang (壬)» una persona il cui stelo del giorno è 壬, e la frase che la schermata dei risultati mostra è: \"Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 辰 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 壬, gli steli contenuti in 辰 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 壬辰",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 壬"
              ],
              "rows": [
                [
                  "Legno Yin (乙)",
                  "residuo (餘氣)",
                  "{hidJinYeo}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Acqua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 壬 come stelo del giorno, la Ricchezza stabile è 丁 e l'Autorità è 己."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丁. 丁 non è contenuto in 辰."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 己. 己 non è contenuto in 辰."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [辛卯](/guide/pillar-sin-myo) e il successivo è [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "È composto da [Acqua Yang (壬)](/guide/stem-im) e [辰 (Drago)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 癸巳",
    "summary": "Come Saju-Link legge il pilastro del giorno 癸巳 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "癸巳 è il pilastro del giorno numero 30 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 癸巳, lo stelo del giorno è 癸 (Acqua, Yin) e il ramo del giorno è 巳 (il Serpente). Nel ciclo sessagesimale è la combinazione numero 30."
          },
          {
            "p": "Saju-Link chiama «Acqua Yin (癸)» una persona il cui stelo del giorno è 癸, e la frase che la schermata dei risultati mostra è: \"Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 巳 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 癸, gli steli contenuti in 巳 sono i seguenti. Lo stelo principale (丙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 癸巳",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 癸"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSaYeo}",
                  "Autorità (正官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Nutrimento (正印)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Ricchezza stabile (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 癸 come stelo del giorno, la Ricchezza stabile è 丙 e l'Autorità è 戊."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丙. 丙 è contenuto in 巳 (principale (本氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 戊. 戊 è contenuto in 巳 (residuo (餘氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [壬辰](/guide/pillar-im-jin) e il successivo è [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "È composto da [Acqua Yin (癸)](/guide/stem-gye) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 甲午",
    "summary": "Come Saju-Link legge il pilastro del giorno 甲午 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "甲午 è il pilastro del giorno numero 31 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 甲午, lo stelo del giorno è 甲 (Legno, Yang) e il ramo del giorno è 午 (il Cavallo). Nel ciclo sessagesimale è la combinazione numero 31."
          },
          {
            "p": "Saju-Link chiama «Legno Yang (甲)» una persona il cui stelo del giorno è 甲, e la frase che la schermata dei risultati mostra è: \"Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 午 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 甲, gli steli contenuti in 午 sono i seguenti. Lo stelo principale (丁) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 甲午",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 甲"
              ],
              "rows": [
                [
                  "Fuoco Yang (丙)",
                  "residuo (餘氣)",
                  "{hidOYeo}",
                  "Espressione (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Perturbatore (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 甲 come stelo del giorno, la Ricchezza stabile è 己 e l'Autorità è 辛."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 己. 己 è contenuto in 午 (intermedio (中氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 辛. 辛 non è contenuto in 午."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [癸巳](/guide/pillar-gye-sa) e il successivo è [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "È composto da [Legno Yang (甲)](/guide/stem-gap) e [午 (Cavallo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 乙未",
    "summary": "Come Saju-Link legge il pilastro del giorno 乙未 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "乙未 è il pilastro del giorno numero 32 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 乙未, lo stelo del giorno è 乙 (Legno, Yin) e il ramo del giorno è 未 (la Pecora). Nel ciclo sessagesimale è la combinazione numero 32."
          },
          {
            "p": "Saju-Link chiama «Legno Yin (乙)» una persona il cui stelo del giorno è 乙, e la frase che la schermata dei risultati mostra è: \"Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 未 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 乙, gli steli contenuti in 未 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 乙未",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 乙"
              ],
              "rows": [
                [
                  "Fuoco Yin (丁)",
                  "residuo (餘氣)",
                  "{hidMiYeo}",
                  "Espressione (食神)"
                ],
                [
                  "Legno Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 乙 come stelo del giorno, la Ricchezza stabile è 戊 e l'Autorità è 庚."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 戊. 戊 non è contenuto in 未."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 庚. 庚 non è contenuto in 未."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [甲午](/guide/pillar-gap-o) e il successivo è [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "È composto da [Legno Yin (乙)](/guide/stem-eul) e [未 (Pecora)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丙申",
    "summary": "Come Saju-Link legge il pilastro del giorno 丙申 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丙申 è il pilastro del giorno numero 33 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丙申, lo stelo del giorno è 丙 (Fuoco, Yang) e il ramo del giorno è 申 (la Scimmia). Nel ciclo sessagesimale è la combinazione numero 33."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yang (丙)» una persona il cui stelo del giorno è 丙, e la frase che la schermata dei risultati mostra è: \"Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 申 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丙, gli steli contenuti in 申 sono i seguenti. Lo stelo principale (庚) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丙申",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSinYeo}",
                  "Espressione (食神)"
                ],
                [
                  "Acqua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Sfidante (偏官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丙 come stelo del giorno, la Ricchezza stabile è 辛 e l'Autorità è 癸."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 辛. 辛 non è contenuto in 申."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 癸. 癸 non è contenuto in 申."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [乙未](/guide/pillar-eul-mi) e il successivo è [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "È composto da [Fuoco Yang (丙)](/guide/stem-byeong) e [申 (Scimmia)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丁酉",
    "summary": "Come Saju-Link legge il pilastro del giorno 丁酉 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丁酉 è il pilastro del giorno numero 34 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丁酉, lo stelo del giorno è 丁 (Fuoco, Yin) e il ramo del giorno è 酉 (il Gallo). Nel ciclo sessagesimale è la combinazione numero 34."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yin (丁)» una persona il cui stelo del giorno è 丁, e la frase che la schermata dei risultati mostra è: \"La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 酉 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丁, gli steli contenuti in 酉 sono i seguenti. Lo stelo principale (辛) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丁酉",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丁"
              ],
              "rows": [
                [
                  "Metallo Yang (庚)",
                  "residuo (餘氣)",
                  "{hidYuYeo}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丁 come stelo del giorno, la Ricchezza stabile è 庚 e l'Autorità è 壬."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 庚. 庚 è contenuto in 酉 (residuo (餘氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 壬. 壬 non è contenuto in 酉."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丙申](/guide/pillar-byeong-sin) e il successivo è [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "È composto da [Fuoco Yin (丁)](/guide/stem-jeong) e [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 戊戌",
    "summary": "Come Saju-Link legge il pilastro del giorno 戊戌 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "戊戌 è il pilastro del giorno numero 35 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 戊戌, lo stelo del giorno è 戊 (Terra, Yang) e il ramo del giorno è 戌 (il Cane). Nel ciclo sessagesimale è la combinazione numero 35."
          },
          {
            "p": "Saju-Link chiama «Terra Yang (戊)» una persona il cui stelo del giorno è 戊, e la frase che la schermata dei risultati mostra è: \"Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 戌 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 戊, gli steli contenuti in 戌 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 戊戌",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 戊"
              ],
              "rows": [
                [
                  "Metallo Yin (辛)",
                  "residuo (餘氣)",
                  "{hidSulYeo}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Nutrimento (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 戊 come stelo del giorno, la Ricchezza stabile è 癸 e l'Autorità è 乙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 癸. 癸 non è contenuto in 戌."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 乙. 乙 non è contenuto in 戌."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丁酉](/guide/pillar-jeong-yu) e il successivo è [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "È composto da [Terra Yang (戊)](/guide/stem-mu) e [戌 (Cane)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 己亥",
    "summary": "Come Saju-Link legge il pilastro del giorno 己亥 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "己亥 è il pilastro del giorno numero 36 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 己亥, lo stelo del giorno è 己 (Terra, Yin) e il ramo del giorno è 亥 (il Maiale). Nel ciclo sessagesimale è la combinazione numero 36."
          },
          {
            "p": "Saju-Link chiama «Terra Yin (己)» una persona il cui stelo del giorno è 己, e la frase che la schermata dei risultati mostra è: \"Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 亥 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 己, gli steli contenuti in 亥 sono i seguenti. Lo stelo principale (壬) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 己亥",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 己"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidHaeYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Legno Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Autorità (正官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Ricchezza stabile (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 己 come stelo del giorno, la Ricchezza stabile è 壬 e l'Autorità è 甲."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 壬. 壬 è contenuto in 亥 (principale (本氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 甲. 甲 è contenuto in 亥 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [戊戌](/guide/pillar-mu-sul) e il successivo è [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "È composto da [Terra Yin (己)](/guide/stem-gi) e [亥 (Maiale)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 庚子",
    "summary": "Come Saju-Link legge il pilastro del giorno 庚子 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "庚子 è il pilastro del giorno numero 37 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 庚子, lo stelo del giorno è 庚 (Metallo, Yang) e il ramo del giorno è 子 (il Topo). Nel ciclo sessagesimale è la combinazione numero 37."
          },
          {
            "p": "Saju-Link chiama «Metallo Yang (庚)» una persona il cui stelo del giorno è 庚, e la frase che la schermata dei risultati mostra è: \"Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 子 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 庚, gli steli contenuti in 子 sono i seguenti. Lo stelo principale (癸) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 庚子",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 庚"
              ],
              "rows": [
                [
                  "Acqua Yang (壬)",
                  "residuo (餘氣)",
                  "{hidJaYeo}",
                  "Espressione (食神)"
                ],
                [
                  "Acqua Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Perturbatore (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 庚 come stelo del giorno, la Ricchezza stabile è 乙 e l'Autorità è 丁."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 乙. 乙 non è contenuto in 子."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丁. 丁 non è contenuto in 子."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [己亥](/guide/pillar-gi-hae) e il successivo è [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "È composto da [Metallo Yang (庚)](/guide/stem-gyeong) e [子 (Topo)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 辛丑",
    "summary": "Come Saju-Link legge il pilastro del giorno 辛丑 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "辛丑 è il pilastro del giorno numero 38 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 辛丑, lo stelo del giorno è 辛 (Metallo, Yin) e il ramo del giorno è 丑 (il Bue). Nel ciclo sessagesimale è la combinazione numero 38."
          },
          {
            "p": "Saju-Link chiama «Metallo Yin (辛)» una persona il cui stelo del giorno è 辛, e la frase che la schermata dei risultati mostra è: \"Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 丑 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 辛, gli steli contenuti in 丑 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 辛丑",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 辛"
              ],
              "rows": [
                [
                  "Acqua Yin (癸)",
                  "residuo (餘氣)",
                  "{hidChukYeo}",
                  "Espressione (食神)"
                ],
                [
                  "Metallo Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 辛 come stelo del giorno, la Ricchezza stabile è 甲 e l'Autorità è 丙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 甲. 甲 non è contenuto in 丑."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丙. 丙 non è contenuto in 丑."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [庚子](/guide/pillar-gyeong-ja) e il successivo è [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "È composto da [Metallo Yin (辛)](/guide/stem-sin) e [丑 (Bue)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 壬寅",
    "summary": "Come Saju-Link legge il pilastro del giorno 壬寅 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "壬寅 è il pilastro del giorno numero 39 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 壬寅, lo stelo del giorno è 壬 (Acqua, Yang) e il ramo del giorno è 寅 (la Tigre). Nel ciclo sessagesimale è la combinazione numero 39."
          },
          {
            "p": "Saju-Link chiama «Acqua Yang (壬)» una persona il cui stelo del giorno è 壬, e la frase che la schermata dei risultati mostra è: \"Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 寅 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 壬, gli steli contenuti in 寅 sono i seguenti. Lo stelo principale (甲) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 壬寅",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 壬"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidInYeo}",
                  "Sfidante (偏官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Legno Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 壬 come stelo del giorno, la Ricchezza stabile è 丁 e l'Autorità è 己."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丁. 丁 non è contenuto in 寅."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 己. 己 non è contenuto in 寅."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [辛丑](/guide/pillar-sin-chuk) e il successivo è [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "È composto da [Acqua Yang (壬)](/guide/stem-im) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 癸卯",
    "summary": "Come Saju-Link legge il pilastro del giorno 癸卯 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "癸卯 è il pilastro del giorno numero 40 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 癸卯, lo stelo del giorno è 癸 (Acqua, Yin) e il ramo del giorno è 卯 (il Coniglio). Nel ciclo sessagesimale è la combinazione numero 40."
          },
          {
            "p": "Saju-Link chiama «Acqua Yin (癸)» una persona il cui stelo del giorno è 癸, e la frase che la schermata dei risultati mostra è: \"Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 卯 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 癸, gli steli contenuti in 卯 sono i seguenti. Lo stelo principale (乙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 癸卯",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 癸"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "residuo (餘氣)",
                  "{hidMyoYeo}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Legno Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 癸 come stelo del giorno, la Ricchezza stabile è 丙 e l'Autorità è 戊."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丙. 丙 non è contenuto in 卯."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 戊. 戊 non è contenuto in 卯."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [壬寅](/guide/pillar-im-in) e il successivo è [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "È composto da [Acqua Yin (癸)](/guide/stem-gye) e [卯 (Coniglio)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 甲辰",
    "summary": "Come Saju-Link legge il pilastro del giorno 甲辰 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "甲辰 è il pilastro del giorno numero 41 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 甲辰, lo stelo del giorno è 甲 (Legno, Yang) e il ramo del giorno è 辰 (il Drago). Nel ciclo sessagesimale è la combinazione numero 41."
          },
          {
            "p": "Saju-Link chiama «Legno Yang (甲)» una persona il cui stelo del giorno è 甲, e la frase che la schermata dei risultati mostra è: \"Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 辰 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 甲, gli steli contenuti in 辰 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 甲辰",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 甲"
              ],
              "rows": [
                [
                  "Legno Yin (乙)",
                  "residuo (餘氣)",
                  "{hidJinYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Acqua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Nutrimento (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Fortuna inattesa (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 甲 come stelo del giorno, la Ricchezza stabile è 己 e l'Autorità è 辛."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 己. 己 non è contenuto in 辰."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 辛. 辛 non è contenuto in 辰."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [癸卯](/guide/pillar-gye-myo) e il successivo è [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "È composto da [Legno Yang (甲)](/guide/stem-gap) e [辰 (Drago)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 乙巳",
    "summary": "Come Saju-Link legge il pilastro del giorno 乙巳 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "乙巳 è il pilastro del giorno numero 42 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 乙巳, lo stelo del giorno è 乙 (Legno, Yin) e il ramo del giorno è 巳 (il Serpente). Nel ciclo sessagesimale è la combinazione numero 42."
          },
          {
            "p": "Saju-Link chiama «Legno Yin (乙)» una persona il cui stelo del giorno è 乙, e la frase che la schermata dei risultati mostra è: \"Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 巳 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 乙, gli steli contenuti in 巳 sono i seguenti. Lo stelo principale (丙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 乙巳",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 乙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSaYeo}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Autorità (正官)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Perturbatore (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 乙 come stelo del giorno, la Ricchezza stabile è 戊 e l'Autorità è 庚."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 戊. 戊 è contenuto in 巳 (residuo (餘氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 庚. 庚 è contenuto in 巳 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [甲辰](/guide/pillar-gap-jin) e il successivo è [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "È composto da [Legno Yin (乙)](/guide/stem-eul) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丙午",
    "summary": "Come Saju-Link legge il pilastro del giorno 丙午 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丙午 è il pilastro del giorno numero 43 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丙午, lo stelo del giorno è 丙 (Fuoco, Yang) e il ramo del giorno è 午 (il Cavallo). Nel ciclo sessagesimale è la combinazione numero 43."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yang (丙)» una persona il cui stelo del giorno è 丙, e la frase che la schermata dei risultati mostra è: \"Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 午 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丙, gli steli contenuti in 午 sono i seguenti. Lo stelo principale (丁) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丙午",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丙"
              ],
              "rows": [
                [
                  "Fuoco Yang (丙)",
                  "residuo (餘氣)",
                  "{hidOYeo}",
                  "Compagno (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丙 come stelo del giorno, la Ricchezza stabile è 辛 e l'Autorità è 癸."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 辛. 辛 non è contenuto in 午."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 癸. 癸 non è contenuto in 午."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [乙巳](/guide/pillar-eul-sa) e il successivo è [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "È composto da [Fuoco Yang (丙)](/guide/stem-byeong) e [午 (Cavallo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丁未",
    "summary": "Come Saju-Link legge il pilastro del giorno 丁未 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丁未 è il pilastro del giorno numero 44 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丁未, lo stelo del giorno è 丁 (Fuoco, Yin) e il ramo del giorno è 未 (la Pecora). Nel ciclo sessagesimale è la combinazione numero 44."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yin (丁)» una persona il cui stelo del giorno è 丁, e la frase che la schermata dei risultati mostra è: \"La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 未 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丁, gli steli contenuti in 未 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丁未",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丁"
              ],
              "rows": [
                [
                  "Fuoco Yin (丁)",
                  "residuo (餘氣)",
                  "{hidMiYeo}",
                  "Compagno (比肩)"
                ],
                [
                  "Legno Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丁 come stelo del giorno, la Ricchezza stabile è 庚 e l'Autorità è 壬."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 庚. 庚 non è contenuto in 未."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 壬. 壬 non è contenuto in 未."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丙午](/guide/pillar-byeong-o) e il successivo è [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "È composto da [Fuoco Yin (丁)](/guide/stem-jeong) e [未 (Pecora)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 戊申",
    "summary": "Come Saju-Link legge il pilastro del giorno 戊申 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "戊申 è il pilastro del giorno numero 45 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 戊申, lo stelo del giorno è 戊 (Terra, Yang) e il ramo del giorno è 申 (la Scimmia). Nel ciclo sessagesimale è la combinazione numero 45."
          },
          {
            "p": "Saju-Link chiama «Terra Yang (戊)» una persona il cui stelo del giorno è 戊, e la frase che la schermata dei risultati mostra è: \"Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 申 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 戊, gli steli contenuti in 申 sono i seguenti. Lo stelo principale (庚) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 戊申",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 戊"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSinYeo}",
                  "Compagno (比肩)"
                ],
                [
                  "Acqua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Metallo Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 戊 come stelo del giorno, la Ricchezza stabile è 癸 e l'Autorità è 乙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 癸. 癸 non è contenuto in 申."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 乙. 乙 non è contenuto in 申."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丁未](/guide/pillar-jeong-mi) e il successivo è [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "È composto da [Terra Yang (戊)](/guide/stem-mu) e [申 (Scimmia)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 己酉",
    "summary": "Come Saju-Link legge il pilastro del giorno 己酉 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "己酉 è il pilastro del giorno numero 46 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 己酉, lo stelo del giorno è 己 (Terra, Yin) e il ramo del giorno è 酉 (il Gallo). Nel ciclo sessagesimale è la combinazione numero 46."
          },
          {
            "p": "Saju-Link chiama «Terra Yin (己)» una persona il cui stelo del giorno è 己, e la frase che la schermata dei risultati mostra è: \"Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 酉 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 己, gli steli contenuti in 酉 sono i seguenti. Lo stelo principale (辛) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 己酉",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 己"
              ],
              "rows": [
                [
                  "Metallo Yang (庚)",
                  "residuo (餘氣)",
                  "{hidYuYeo}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Metallo Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 己 come stelo del giorno, la Ricchezza stabile è 壬 e l'Autorità è 甲."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 壬. 壬 non è contenuto in 酉."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 甲. 甲 non è contenuto in 酉."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [戊申](/guide/pillar-mu-sin) e il successivo è [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "È composto da [Terra Yin (己)](/guide/stem-gi) e [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 庚戌",
    "summary": "Come Saju-Link legge il pilastro del giorno 庚戌 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "庚戌 è il pilastro del giorno numero 47 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 庚戌, lo stelo del giorno è 庚 (Metallo, Yang) e il ramo del giorno è 戌 (il Cane). Nel ciclo sessagesimale è la combinazione numero 47."
          },
          {
            "p": "Saju-Link chiama «Metallo Yang (庚)» una persona il cui stelo del giorno è 庚, e la frase che la schermata dei risultati mostra è: \"Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 戌 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 庚, gli steli contenuti in 戌 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 庚戌",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 庚"
              ],
              "rows": [
                [
                  "Metallo Yin (辛)",
                  "residuo (餘氣)",
                  "{hidSulYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Autorità (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Sostegno non convenzionale (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 庚 come stelo del giorno, la Ricchezza stabile è 乙 e l'Autorità è 丁."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 乙. 乙 non è contenuto in 戌."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丁. 丁 è contenuto in 戌 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [己酉](/guide/pillar-gi-yu) e il successivo è [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "È composto da [Metallo Yang (庚)](/guide/stem-gyeong) e [戌 (Cane)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 辛亥",
    "summary": "Come Saju-Link legge il pilastro del giorno 辛亥 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "辛亥 è il pilastro del giorno numero 48 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 辛亥, lo stelo del giorno è 辛 (Metallo, Yin) e il ramo del giorno è 亥 (il Maiale). Nel ciclo sessagesimale è la combinazione numero 48."
          },
          {
            "p": "Saju-Link chiama «Metallo Yin (辛)» una persona il cui stelo del giorno è 辛, e la frase che la schermata dei risultati mostra è: \"Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 亥 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 辛, gli steli contenuti in 亥 sono i seguenti. Lo stelo principale (壬) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 辛亥",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 辛"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidHaeYeo}",
                  "Nutrimento (正印)"
                ],
                [
                  "Legno Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Acqua Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Perturbatore (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 辛 come stelo del giorno, la Ricchezza stabile è 甲 e l'Autorità è 丙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 甲. 甲 è contenuto in 亥 (intermedio (中氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丙. 丙 non è contenuto in 亥."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [庚戌](/guide/pillar-gyeong-sul) e il successivo è [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "È composto da [Metallo Yin (辛)](/guide/stem-sin) e [亥 (Maiale)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 壬子",
    "summary": "Come Saju-Link legge il pilastro del giorno 壬子 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "壬子 è il pilastro del giorno numero 49 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 壬子, lo stelo del giorno è 壬 (Acqua, Yang) e il ramo del giorno è 子 (il Topo). Nel ciclo sessagesimale è la combinazione numero 49."
          },
          {
            "p": "Saju-Link chiama «Acqua Yang (壬)» una persona il cui stelo del giorno è 壬, e la frase che la schermata dei risultati mostra è: \"Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 子 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 壬, gli steli contenuti in 子 sono i seguenti. Lo stelo principale (癸) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 壬子",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 壬"
              ],
              "rows": [
                [
                  "Acqua Yang (壬)",
                  "residuo (餘氣)",
                  "{hidJaYeo}",
                  "Compagno (比肩)"
                ],
                [
                  "Acqua Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 壬 come stelo del giorno, la Ricchezza stabile è 丁 e l'Autorità è 己."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丁. 丁 non è contenuto in 子."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 己. 己 non è contenuto in 子."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [辛亥](/guide/pillar-sin-hae) e il successivo è [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "È composto da [Acqua Yang (壬)](/guide/stem-im) e [子 (Topo)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 癸丑",
    "summary": "Come Saju-Link legge il pilastro del giorno 癸丑 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "癸丑 è il pilastro del giorno numero 50 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 癸丑, lo stelo del giorno è 癸 (Acqua, Yin) e il ramo del giorno è 丑 (il Bue). Nel ciclo sessagesimale è la combinazione numero 50."
          },
          {
            "p": "Saju-Link chiama «Acqua Yin (癸)» una persona il cui stelo del giorno è 癸, e la frase che la schermata dei risultati mostra è: \"Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 丑 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 癸, gli steli contenuti in 丑 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 癸丑",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 癸"
              ],
              "rows": [
                [
                  "Acqua Yin (癸)",
                  "residuo (餘氣)",
                  "{hidChukYeo}",
                  "Compagno (比肩)"
                ],
                [
                  "Metallo Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 癸 come stelo del giorno, la Ricchezza stabile è 丙 e l'Autorità è 戊."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丙. 丙 non è contenuto in 丑."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 戊. 戊 non è contenuto in 丑."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [壬子](/guide/pillar-im-ja) e il successivo è [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "È composto da [Acqua Yin (癸)](/guide/stem-gye) e [丑 (Bue)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 甲寅",
    "summary": "Come Saju-Link legge il pilastro del giorno 甲寅 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "甲寅 è il pilastro del giorno numero 51 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 甲寅, lo stelo del giorno è 甲 (Legno, Yang) e il ramo del giorno è 寅 (la Tigre). Nel ciclo sessagesimale è la combinazione numero 51."
          },
          {
            "p": "Saju-Link chiama «Legno Yang (甲)» una persona il cui stelo del giorno è 甲, e la frase che la schermata dei risultati mostra è: \"Un albero alto che cresce dritto. Una volta scelta la direzione non vacilla, e preferisce resistere piuttosto che piegarsi.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 寅 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 甲, gli steli contenuti in 寅 sono i seguenti. Lo stelo principale (甲) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 甲寅",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 甲"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidInYeo}",
                  "Fortuna inattesa (偏財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Espressione (食神)"
                ],
                [
                  "Legno Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 甲 come stelo del giorno, la Ricchezza stabile è 己 e l'Autorità è 辛."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 己. 己 non è contenuto in 寅."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 辛. 辛 non è contenuto in 寅."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [癸丑](/guide/pillar-gye-chuk) e il successivo è [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "È composto da [Legno Yang (甲)](/guide/stem-gap) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 乙卯",
    "summary": "Come Saju-Link legge il pilastro del giorno 乙卯 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "乙卯 è il pilastro del giorno numero 52 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 乙卯, lo stelo del giorno è 乙 (Legno, Yin) e il ramo del giorno è 卯 (il Coniglio). Nel ciclo sessagesimale è la combinazione numero 52."
          },
          {
            "p": "Saju-Link chiama «Legno Yin (乙)» una persona il cui stelo del giorno è 乙, e la frase che la schermata dei risultati mostra è: \"Una liana, erba flessibile. Si piega alle circostanze per continuare ad avanzare, e non si spezza.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 卯 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 乙, gli steli contenuti in 卯 sono i seguenti. Lo stelo principale (乙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 乙卯",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 乙"
              ],
              "rows": [
                [
                  "Legno Yang (甲)",
                  "residuo (餘氣)",
                  "{hidMyoYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Legno Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 乙 come stelo del giorno, la Ricchezza stabile è 戊 e l'Autorità è 庚."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 戊. 戊 non è contenuto in 卯."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 庚. 庚 non è contenuto in 卯."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [甲寅](/guide/pillar-gap-in) e il successivo è [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "È composto da [Legno Yin (乙)](/guide/stem-eul) e [卯 (Coniglio)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丙辰",
    "summary": "Come Saju-Link legge il pilastro del giorno 丙辰 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丙辰 è il pilastro del giorno numero 53 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丙辰, lo stelo del giorno è 丙 (Fuoco, Yang) e il ramo del giorno è 辰 (il Drago). Nel ciclo sessagesimale è la combinazione numero 53."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yang (丙)» una persona il cui stelo del giorno è 丙, e la frase che la schermata dei risultati mostra è: \"Il sole di mezzogiorno. I sentimenti si vedono chiaramente, l'ambiente si illumina e farsi avanti viene naturale.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 辰 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丙, gli steli contenuti in 辰 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丙辰",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丙"
              ],
              "rows": [
                [
                  "Legno Yin (乙)",
                  "residuo (餘氣)",
                  "{hidJinYeo}",
                  "Nutrimento (正印)"
                ],
                [
                  "Acqua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Autorità (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Espressione (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丙 come stelo del giorno, la Ricchezza stabile è 辛 e l'Autorità è 癸."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 辛. 辛 non è contenuto in 辰."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 癸. 癸 è contenuto in 辰 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [乙卯](/guide/pillar-eul-myo) e il successivo è [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "È composto da [Fuoco Yang (丙)](/guide/stem-byeong) e [辰 (Drago)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 丁巳",
    "summary": "Come Saju-Link legge il pilastro del giorno 丁巳 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "丁巳 è il pilastro del giorno numero 54 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 丁巳, lo stelo del giorno è 丁 (Fuoco, Yin) e il ramo del giorno è 巳 (il Serpente). Nel ciclo sessagesimale è la combinazione numero 54."
          },
          {
            "p": "Saju-Link chiama «Fuoco Yin (丁)» una persona il cui stelo del giorno è 丁, e la frase che la schermata dei risultati mostra è: \"La luce di una candela. Brucia in silenzio e a lungo, e scalda per primi quelli più vicini.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 巳 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 丁, gli steli contenuti in 巳 sono i seguenti. Lo stelo principale (丙) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 丁巳",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 丁"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSaYeo}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Metallo Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Fuoco Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 丁 come stelo del giorno, la Ricchezza stabile è 庚 e l'Autorità è 壬."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 庚. 庚 è contenuto in 巳 (intermedio (中氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 壬. 壬 non è contenuto in 巳."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丙辰](/guide/pillar-byeong-jin) e il successivo è [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "È composto da [Fuoco Yin (丁)](/guide/stem-jeong) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 戊午",
    "summary": "Come Saju-Link legge il pilastro del giorno 戊午 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "戊午 è il pilastro del giorno numero 55 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 戊午, lo stelo del giorno è 戊 (Terra, Yang) e il ramo del giorno è 午 (il Cavallo). Nel ciclo sessagesimale è la combinazione numero 55."
          },
          {
            "p": "Saju-Link chiama «Terra Yang (戊)» una persona il cui stelo del giorno è 戊, e la frase che la schermata dei risultati mostra è: \"Terreno aperto e montagne. Difficile da smuovere e facile a cui appoggiarsi, anche se lento a cambiare una decisione già presa.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 午 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 戊, gli steli contenuti in 午 sono i seguenti. Lo stelo principale (丁) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 戊午",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 戊"
              ],
              "rows": [
                [
                  "Fuoco Yang (丙)",
                  "residuo (餘氣)",
                  "{hidOYeo}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Nutrimento (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 戊 come stelo del giorno, la Ricchezza stabile è 癸 e l'Autorità è 乙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 癸. 癸 non è contenuto in 午."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 乙. 乙 non è contenuto in 午."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [丁巳](/guide/pillar-jeong-sa) e il successivo è [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "È composto da [Terra Yang (戊)](/guide/stem-mu) e [午 (Cavallo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 己未",
    "summary": "Come Saju-Link legge il pilastro del giorno 己未 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "己未 è il pilastro del giorno numero 56 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 己未, lo stelo del giorno è 己 (Terra, Yin) e il ramo del giorno è 未 (la Pecora). Nel ciclo sessagesimale è la combinazione numero 56."
          },
          {
            "p": "Saju-Link chiama «Terra Yin (己)» una persona il cui stelo del giorno è 己, e la frase che la schermata dei risultati mostra è: \"Il suolo dei campi. Accoglie tutto ciò che arriva e lo fa crescere: si prende cura più di quanto si mostri.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 未 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 己, gli steli contenuti in 未 sono i seguenti. Lo stelo principale (己) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 己未",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 己"
              ],
              "rows": [
                [
                  "Fuoco Yin (丁)",
                  "residuo (餘氣)",
                  "{hidMiYeo}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Legno Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Sfidante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 己 come stelo del giorno, la Ricchezza stabile è 壬 e l'Autorità è 甲."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 壬. 壬 non è contenuto in 未."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 甲. 甲 non è contenuto in 未."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [戊午](/guide/pillar-mu-o) e il successivo è [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "È composto da [Terra Yin (己)](/guide/stem-gi) e [未 (Pecora)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 庚申",
    "summary": "Come Saju-Link legge il pilastro del giorno 庚申 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "庚申 è il pilastro del giorno numero 57 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 庚申, lo stelo del giorno è 庚 (Metallo, Yang) e il ramo del giorno è 申 (la Scimmia). Nel ciclo sessagesimale è la combinazione numero 57."
          },
          {
            "p": "Saju-Link chiama «Metallo Yang (庚)» una persona il cui stelo del giorno è 庚, e la frase che la schermata dei risultati mostra è: \"Ferro grezzo. Deciso e netto, con poca pazienza per le cose lasciate in sospeso.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 申 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 庚, gli steli contenuti in 申 sono i seguenti. Lo stelo principale (庚) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 庚申",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 庚"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidSinYeo}",
                  "Sostegno non convenzionale (偏印)"
                ],
                [
                  "Acqua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Espressione (食神)"
                ],
                [
                  "Metallo Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 庚 come stelo del giorno, la Ricchezza stabile è 乙 e l'Autorità è 丁."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 乙. 乙 non è contenuto in 申."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丁. 丁 non è contenuto in 申."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [己未](/guide/pillar-gi-mi) e il successivo è [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "È composto da [Metallo Yang (庚)](/guide/stem-gyeong) e [申 (Scimmia)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 辛酉",
    "summary": "Come Saju-Link legge il pilastro del giorno 辛酉 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "辛酉 è il pilastro del giorno numero 58 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 辛酉, lo stelo del giorno è 辛 (Metallo, Yin) e il ramo del giorno è 酉 (il Gallo). Nel ciclo sessagesimale è la combinazione numero 58."
          },
          {
            "p": "Saju-Link chiama «Metallo Yin (辛)» una persona il cui stelo del giorno è 辛, e la frase che la schermata dei risultati mostra è: \"Una gemma tagliata. Gusto raffinato e standard elevati; la sciatteria è difficile da lasciar passare.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 酉 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 辛, gli steli contenuti in 酉 sono i seguenti. Lo stelo principale (辛) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 辛酉",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 辛"
              ],
              "rows": [
                [
                  "Metallo Yang (庚)",
                  "residuo (餘氣)",
                  "{hidYuYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Metallo Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Compagno (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 辛 come stelo del giorno, la Ricchezza stabile è 甲 e l'Autorità è 丙."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 甲. 甲 non è contenuto in 酉."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 丙. 丙 non è contenuto in 酉."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [庚申](/guide/pillar-gyeong-sin) e il successivo è [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "È composto da [Metallo Yin (辛)](/guide/stem-sin) e [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 壬戌",
    "summary": "Come Saju-Link legge il pilastro del giorno 壬戌 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "壬戌 è il pilastro del giorno numero 59 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 壬戌, lo stelo del giorno è 壬 (Acqua, Yang) e il ramo del giorno è 戌 (il Cane). Nel ciclo sessagesimale è la combinazione numero 59."
          },
          {
            "p": "Saju-Link chiama «Acqua Yang (壬)» una persona il cui stelo del giorno è 壬, e la frase che la schermata dei risultati mostra è: \"Fiume e mare. Visione ampia, con occhio per il modo in cui le cose scorrono.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 戌 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 壬, gli steli contenuti in 戌 sono i seguenti. Lo stelo principale (戊) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 壬戌",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 壬"
              ],
              "rows": [
                [
                  "Metallo Yin (辛)",
                  "residuo (餘氣)",
                  "{hidSulYeo}",
                  "Nutrimento (正印)"
                ],
                [
                  "Fuoco Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Ricchezza stabile (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Sfidante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 壬 come stelo del giorno, la Ricchezza stabile è 丁 e l'Autorità è 己."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丁. 丁 è contenuto in 戌 (intermedio (中氣))."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 己. 己 non è contenuto in 戌."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [辛酉](/guide/pillar-sin-yu) e il successivo è [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "È composto da [Acqua Yang (壬)](/guide/stem-im) e [戌 (Cane)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Pilastri del giorno",
    "title": "Il pilastro del giorno 癸亥",
    "summary": "Come Saju-Link legge il pilastro del giorno 癸亥 — che cosa sono gli steli contenuti dal ramo del giorno rispetto allo stelo del giorno — esposto esattamente come previsto dalle sue regole di calcolo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "癸亥 è il pilastro del giorno numero 60 del ciclo sessagesimale",
        "blocks": [
          {
            "p": "Quando lo stelo-ramo del giorno di nascita è 癸亥, lo stelo del giorno è 癸 (Acqua, Yin) e il ramo del giorno è 亥 (il Maiale). Nel ciclo sessagesimale è la combinazione numero 60."
          },
          {
            "p": "Saju-Link chiama «Acqua Yin (癸)» una persona il cui stelo del giorno è 癸, e la frase che la schermata dei risultati mostra è: \"Rugiada e pioggia. Si insinua in silenzio e legge l'atmosfera prima delle parole.\" Questa frase non ha nulla a che vedere con la lettura qui sotto o con i punteggi."
          }
        ]
      },
      {
        "title": "Cosa sono gli steli contenuti dal ramo del giorno 亥 rispetto allo stelo del giorno",
        "blocks": [
          {
            "p": "Il ramo del giorno è la posizione del coniuge. Letti dallo stelo del giorno 癸, gli steli contenuti in 亥 sono i seguenti. Lo stelo principale (壬) è l'energia rappresentativa del ramo."
          },
          {
            "table": {
              "caption": "Gli steli nascosti del ramo del giorno di 癸亥",
              "head": [
                "Stelo nascosto",
                "Posizione",
                "Quota",
                "Rispetto allo stelo del giorno 癸"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residuo (餘氣)",
                  "{hidHaeYeo}",
                  "Autorità (正官)"
                ],
                [
                  "Legno Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Perturbatore (傷官)"
                ],
                [
                  "Acqua Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posizione del coniuge e questo pilastro del giorno",
        "blocks": [
          {
            "p": "Il myeongri tradizionale legge la posizione del coniuge come Ricchezza stabile (正財) per gli uomini e Autorità (正官) per le donne. Con 癸 come stelo del giorno, la Ricchezza stabile è 丙 e l'Autorità è 戊."
          },
          {
            "p": "Per gli uomini, la posizione del coniuge (Ricchezza stabile) è 丙. 丙 non è contenuto in 亥."
          },
          {
            "p": "Per le donne, la posizione del coniuge (Autorità) è 戊. 戊 è contenuto in 亥 (residuo (餘氣))."
          }
        ]
      },
      {
        "title": "I pilastri del giorno adiacenti e i caratteri di cui si compone questo pilastro",
        "blocks": [
          {
            "p": "Nel ciclo sessagesimale il pilastro del giorno precedente è [壬戌](/guide/pillar-im-sul) e il successivo è [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "È composto da [Acqua Yin (癸)](/guide/stem-gye) e [亥 (Maiale)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cosa non dice questa guida",
        "blocks": [
          {
            "ul": [
              "Un solo pilastro del giorno non decide una persona o una relazione. Un saju si legge da come si relazionano gli otto caratteri dei quattro pilastri.",
              "La lettura della posizione del coniuge riprende una regola del myeongri tradizionale e, se non indichi il tuo genere, questa posizione non viene letta."
            ]
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "I Dieci Dei",
    "title": "I Dieci Dei — Le Dieci Posizioni Dentro Il Mio Saju",
    "summary": "Basato sul pilastro del giorno, i caratteri rimanenti sono divisi in dieci nomi. Si discute le ragioni per distinguere tra ricchezza regolare e ricchezza secondaria, anche se sono lo stesso elemento di ricchezza.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Il Pilastro del Giorno È La Persona Stessa",
        "blocks": [
          {
            "p": "Tra gli otto caratteri del saju, il **pilastro del giorno** (il tronco celeste del giorno di nascita) si riferisce alla persona stessa. Gli altri sette caratteri sono letti come l'ambiente in cui esiste quel pilastro del giorno."
          },
          {
            "p": "**I Dieci Dei** (十神) sono le dieci divisioni di come il pilastro del giorno percepisce gli altri caratteri. L'energia che mi nutre è Risorsa, l'energia che è simile a me è Compagno, l'energia che genero è Cibo e Ricchezza, l'energia che mi sopprime è Posizione Ufficiale, e l'energia che sopprimo è Ricchezza — queste cinque categorie sono ulteriormente suddivise in yin e yang, formando dieci."
          }
        ]
      },
      {
        "title": "Cosa Significano I Rimanenti Sette Caratteri Per Me",
        "blocks": [
          {
            "p": "Una volta determinato il pilastro del giorno, i caratteri rimanenti nel grafico natale ricevono ciascuno un nome. L'energia che mi genera, l'energia che è simile a me, l'energia che genero, l'energia che mi sopprime e l'energia che sopprimo — questi cinque rami sono ulteriormente divisi in **dieci** attraverso yin e yang. Questi sono i Dieci Dei."
          },
          {
            "p": "Pertanto, i Dieci Dei si riferiscono non a relazioni con gli altri ma a **le posizioni dentro di me**. Quali posizioni sono spesse o sottili indicano le mie tendenze e il modo in cui vivo."
          }
        ]
      },
      {
        "title": "Perché leggiamo questo attraverso i Dieci Dei piuttosto che tre relazioni elementali",
        "blocks": [
          {
            "p": "Esiste anche un metodo per visualizzare la relazione del giorno stem esclusivamente attraverso i tre aspetti dei cinque elementi (supportante, stesso e opposto). È semplice, ma **il yin e lo yang scompaiono.** 甲 (legno yang) e 乙 (legno yin) diventano uguali a 甲, che è una rappresentazione di 'uguaglianza', e la relazione opposta viene accorpata in un punteggio unico senza direzione o yin e yang."
          },
          {
            "p": "La posizione del coniuge deve essere valutata secondo i Dieci Dei in termini di yin e yang. Se gli elementi visti attraverso i cinque elementi sono mescolati con quelli visti attraverso i Dieci Dei in un unico motore, ci saranno due standard per gli stessi due caratteri. Pertanto, lo unifichiamo sotto i Dieci Dei."
          }
        ]
      },
      {
        "title": "La posizione del coniuge è Ricchezza Propria e Ufficiale Proprio",
        "blocks": [
          {
            "p": "La divinazione tradizionale vede la posizione del coniuge in modo diverso in base al genere. Per gli uomini, è **Ricchezza Propria (正財)**, e per le donne, è **Ufficiale Proprio (正官)**. Anche se sono lo stesso elemento di ricchezza, solo la Ricchezza Propria che è disallineata in yin e yang è considerata la posizione del coniuge, mentre la Ricchezza Indiretta viene letta non come un coniuge ma in termini di attività e ricchezza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se non specifichi il genere, questa posizione è omessa",
        "blocks": [
          {
            "p": "Questo perché non può essere determinato quale lato, Ricchezza Propria o Ufficiale Proprio, considerare come la posizione del coniuge. Invece di indovinare per riempire un valore mancante, leggiamo gli elementi rimanenti senza quello."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "La fortuna di oggi",
    "title": "Come si presenta la fortuna di oggi?",
    "summary": "Il giorno stem di oggi è confrontato con il grafico natale per ottenere un punteggio. Tredici relazioni di soppressione e supporto e sette relazioni di rami terrestri, insieme a tutti e venti gli elementi e le loro rispettive aggiunte e sottrazioni, sono completamente divulgati.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Oggi, lo stabiliremo anche nello stesso modo delle otto caratteri",
        "blocks": [
          {
            "p": "Ogni giorno ha il proprio **il pilastro del giorno (日辰)**. Utilizzando lo stesso metodo per stabilire il pilastro del giorno del grafico natale, anche oggi ha un cielo stem e un ramo terrestre attaccati. La fortuna di oggi riguarda il confronto di quei due caratteri con il grafico natale."
          },
          {
            "p": "Il punteggio base è **{baseScore} punti**. Gli elementi sottostanti vengono aggiunti e sottratti, e infine, è confinato tra {clampLow} punti e {clampHigh} punti — non menzioniamo 0 punti o 100 punti."
          }
        ]
      },
      {
        "title": "① L'energia di oggi è ciò di cui ho bisogno?",
        "blocks": [
          {
            "p": "Questa è la posizione più significativa. Controlliamo se l'energia di oggi corrisponde all''energia necessaria in questo momento' determinata da [l'elemento di bilanciamento](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "L'energia di oggi è",
                "Aggiunta/Sottrazione"
              ],
              "rows": [
                [
                  "L'energia necessaria in questo momento",
                  "{todayIsYongsin}"
                ],
                [
                  "Genera l'energia necessaria",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Sopprime l'energia necessaria",
                  "{todayControlsYongsin}"
                ],
                [
                  "Spinge di più sul lato già traboccante",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Non considerare l'elemento avverso come 'tutto tranne l'elemento di bilanciamento'",
        "blocks": [
          {
            "p": "Se lo fai, sia l'energia che genera l'elemento di bilanciamento sia l'energia che sopprime l'elemento di bilanciamento diventano negative, e le ultime due righe nella tabella sopra diventano indistinguibili. Solo l'energia che **spinge più forte nella direzione opposta** secondo il significato di soppressione e supporto è vista come l'elemento avverso."
          }
        ]
      },
      {
        "title": "② La relazione tra il cielo stem di oggi e il giorno stem",
        "blocks": [
          {
            "p": "Le relazioni di supporto e opposizione dei cinque elementi sono applicate direttamente tra il giorno stem e il cielo stem di oggi."
          },
          {
            "table": {
              "head": [
                "Relazione",
                "Aggiunta/Sottrazione"
              ],
              "rows": [
                [
                  "Oggi genera me",
                  "{generatesSelf}"
                ],
                [
                  "Oggi e io siamo la stessa energia",
                  "{sameElement}"
                ],
                [
                  "Io sopprimo oggi",
                  "{selfControls}"
                ],
                [
                  "Fluisco con oggi",
                  "{selfGenerates}"
                ],
                [
                  "Oggi sopprime me",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Il ramo terrestre di oggi incontra i rami terrestri del grafico natale",
        "blocks": [
          {
            "p": "Il ramo terrestre di oggi è confrontato con i rami terrestri del grafico natale. La tabella delle relazioni è in [relazioni di rami terrestri](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relazione",
                "Aggiunta/Sottrazione"
              ],
              "rows": [
                [
                  "triade (三合)",
                  "{branchSamhap}"
                ],
                [
                  "sei armonia (六合)",
                  "{branchYukhap}"
                ],
                [
                  "mezza triade (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discordia silenziosa (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "scontro (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Quando ci sono più pilastri, sorgono più relazioni. Tutte vengono aggiunte, ma questo intero elemento è limitato a **±{branchMaxAbs} punti** — questo per evitare che una singola relazione di ramo terrestre determini l'intera giornata."
          }
        ]
      },
      {
        "title": "④ Correzione Basata sulla Forza",
        "blocks": [
          {
            "p": "Anche con la stessa energia, il significato differisce per un pilastro di giorno forte e uno debole. Pertanto, facciamo un'ultima regolazione."
          },
          {
            "table": {
              "head": [
                "Situazione",
                "Regolazione"
              ],
              "rows": [
                [
                  "Pilastro di giorno debole ma oggi li supporta",
                  "{weakTodayHelps}"
                ],
                [
                  "Pilastro di giorno forte ma oggi riduce appropriatamente il carico",
                  "{strongTodayDrains}"
                ],
                [
                  "Pilastro di giorno forte ma oggi ispessisce il supporto",
                  "{strongTodayHelps}"
                ],
                [
                  "Pilastro di giorno debole ma oggi aggiunge al carico",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Punteggi per Grado e Area",
        "blocks": [
          {
            "p": "Il punteggio totale è diviso in cinque gradi."
          },
          {
            "table": {
              "head": [
                "Punteggio",
                "Grado"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} punti o più",
                  "Grande Fortuna (大吉)"
                ],
                [
                  "{gradeGilMin} punti o più",
                  "Fortuna (吉)"
                ],
                [
                  "{gradePyeongMin} punti o più",
                  "Media (平)"
                ],
                [
                  "{gradeJuuiMin} punti o più",
                  "Cautela (注意)"
                ],
                [
                  "{gradeJosimMin} punti o più",
                  "Fai Attenzione (操心)"
                ]
              ]
            }
          },
          {
            "p": "Le quattro aree di ricchezza, amore, carriera e salute ereditano {overallShare} del punteggio totale, mentre il resto è diviso secondo i Dieci Dei e le relazioni dei rami terrestri pertinenti a quelle aree. Pertanto, anche se il punteggio totale è lo stesso, i numeri per area differiscono da persona a persona."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "I numeri sopra sono tutti letti dalle impostazioni del motore. Se le regole vengono cambiate, questo documento cambierà anche, e qualsiasi modifica al punteggio sarà pubblicata prima nella [Notifica](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabella delle Relazioni",
    "title": "Relazioni dei Rami Terrestri — Combinazione, Scontro e Discordia",
    "summary": "Questa è una tabella delle relazioni che mostra come il pilastro di giorno di oggi interagisce con il grafico natale. Rivela quali sono ogni combinazione, scontro e discordia e quanti punti hanno.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "I Rami Terrestri sono Dodici Caratteri",
        "blocks": [
          {
            "p": "I dodici rami terrestri (十二支) sono 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. I segni zodiacali comunemente conosciuti — Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig — sono ciascuno associati a uno di questi dodici caratteri."
          },
          {
            "figure": "branch-wheel",
            "caption": "Quando i dodici caratteri sono disposti in un cerchio, le relazioni sono chiaramente visibili. Lo scontro (沖) si affronta sempre, mentre sei armonie e discordie sono coppie più vicine. Queste linee non sono scritte nel testo ma sono direttamente derivate dalle regole di calcolo.",
            "labels": {
              "alt": "Un diagramma che mostra i dodici rami terrestri disposti in un cerchio con linee che collegano sei armonie, scontro e discordia.",
              "yukhap": "sei armonie",
              "chung": "Scontro",
              "wonjin": "Discordia",
              "rat": "Rat",
              "ox": "Ox",
              "tiger": "Tiger",
              "rabbit": "Rabbit",
              "dragon": "Dragon",
              "snake": "serpente",
              "horse": "cavallo",
              "goat": "capra",
              "monkey": "scimmia",
              "rooster": "gallo",
              "dog": "cane",
              "pig": "maiale"
            }
          },
          {
            "p": "Nel saju, ciascuno dei quattro pilastri ha un ramo terrestre. **La lettura di oggi** è determinata abbinando **il ramo del giorno** con i quattro rami del grafico natale utilizzando la tabella delle relazioni qui sotto."
          }
        ]
      },
      {
        "title": "Tabella delle Relazioni Generali",
        "blocks": [
          {
            "table": {
              "caption": "In ordine di punteggio più alto. Questi sono i valori utilizzati da Saju-Link.",
              "head": [
                "Relazione",
                "Coppia Corrispondente",
                "Significato",
                "Punteggio"
              ],
              "rows": [
                [
                  "triade (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Quando tutti e tre i caratteri si uniscono, formano una completa formazione elementale (局). Questa è considerata la combinazione più forte.",
                  "{scoreSamhap}"
                ],
                [
                  "sei armonia (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Coppie che si attraggono. Questa è la combinazione più comune poiché consiste in soli due caratteri.",
                  "{scoreYukhap}"
                ],
                [
                  "mezza triade (半合)",
                  "Due caratteri che includono uno dei caratteri reali (子·酉·午·卯) dalla triade",
                  "Una mezza triade che include un carattere centrale per la formazione. Non forma una completa formazione elementale con solo due caratteri, rendendola inferiore alla triade.",
                  "{scoreBanhap}"
                ],
                [
                  "Stesso Ramo",
                  "子子 · 丑丑 …",
                  "Caratteri che sono gli stessi. Questo significa che si somigliano ma non implica attrazione, quindi sono collocati nel mezzo.",
                  "{scoreSame}"
                ],
                [
                  "Nessuna Relazione",
                  "Coppie che non appartengono a nessuna delle categorie sopra o sotto",
                  "Combinazioni che non hanno relazioni speciali. Questo serve come punto di riferimento.",
                  "{scoreNeutral}"
                ],
                [
                  "discordia tranquilla (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Coppie che non possono separarsi nonostante la loro avversione. Appaiono tranquille in superficie ma sono considerate durature.",
                  "{scoreWonjin}"
                ],
                [
                  "Scontro (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Coppie che si scontrano frontalmente. Queste sono sei coppie che si affrontano.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "triadi e mezza triadi",
        "blocks": [
          {
            "p": "Una triade richiede la presenza di tutti e tre i caratteri. Poiché ci sono quattro rami terrestri nel grafico natale, è possibile che il ramo del giorno si combini con essi, risultando in una triade — in quel momento, riceve un punteggio di {scoreSamhap}. Se sono coinvolti solo due caratteri, si tratta di una mezza triade."
          }
        ]
      },
      {
        "kind": "note",
        "title": "mezza triadi Richiedono Caratteri Reali per essere Riconosciute",
        "blocks": [
          {
            "p": "Esiste anche un metodo che conta come una mezza triade se entrambi i caratteri appartengono allo stesso gruppo di triade. Questo consente combinazioni come 申辰, che sono difficili da definire come combinazione, di ricevere punteggi elevati. Pertanto, questo servizio riconosce una mezza triade solo quando include caratteri reali (子·酉·午·卯), e non considera combinazioni come 申辰·巳丑·寅戌·亥未 come valide."
          }
        ]
      },
      {
        "title": "Motivo per Separare la discordia tranquilla",
        "blocks": [
          {
            "p": "Le sei coppie di discordia tranquilla sono viste tanto frequentemente quanto gli scontri. Se si contassero solo combinazioni e scontri, queste sei coppie sarebbero tutte sepolte sotto il punteggio di nessuna relazione di {scoreNeutral}, quindi sono collocate separatamente."
          },
          {
            "p": "Se gli scontri sono coppie che si scontrano frontalmente e sono esposte in modo prominente, la discordia tranquilla è sottilmente disallineata. Pertanto, è collocata a un punteggio di {scoreWonjin}, che è superiore agli scontri ({scoreChung}) ma sicuramente inferiore a nessuna relazione ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "I punteggi sono anche assegnati per gli scontri",
        "blocks": [
          {
            "p": "Il punteggio di clash più basso è {scoreChung}. È intenzionale non dare un valore vicino a 0. Nella tradizionale myeongri, un clash non è una 'fine' ma una 'collisione', e dare un punteggio vicino al fondo significherebbe che il servizio sta facendo un'affermazione definitiva sulla relazione."
          },
          {
            "p": "Con un minimo di {scoreChung} e un massimo di {scoreSamhap}, la differenza è chiaramente visibile ma non definitiva."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Segno Zodiacale",
    "title": "Dove si trova il Segno Zodiacale nel Saju?",
    "summary": "Il segno zodiacale è il ramo terrestre dell'anno in cui sei nato. Questo spiega perché è tratto dall'anno saju piuttosto che dall'anno solare, e perché coloro che sono nati all'inizio di gennaio o febbraio hanno il segno zodiacale dell'anno precedente.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Il segno zodiacale è il ramo terrestre dell'anno in cui sei nato.",
        "blocks": [
          {
            "p": "Il saju consiste di quattro pilastri: anno, mese, giorno e ora, con ogni pilastro che ha un cielo stem e un ramo terrestre. Tra questi, il **ramo terrestre dell'anno**, o ramo dell'anno, è l'animale che chiamiamo segno zodiacale."
          },
          {
            "table": {
              "caption": "I Dodici Rami Terrestri e Segni Zodiacali",
              "head": [
                "Ramo Terrestre",
                "Segno Zodiacale"
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
                  "Drago"
                ],
                [
                  "巳",
                  "Serpente"
                ],
                [
                  "午",
                  "Cavallo"
                ],
                [
                  "未",
                  "Capra"
                ],
                [
                  "申",
                  "Scimmia"
                ],
                [
                  "酉",
                  "Gallo"
                ],
                [
                  "戌",
                  "Cane"
                ],
                [
                  "亥",
                  "Maiale"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Utilizziamo l'anno saju, non l'anno solare.",
        "blocks": [
          {
            "p": "Il punto in cui cambia il segno zodiacale non è né il 1 gennaio del calendario solare né il Capodanno Lunare. Lo standard per cambiare anno nel saju è **Ipchun**. Pertanto, coloro che sono nati all'inizio di gennaio o febbraio possono avere un segno zodiacale diverso da quello indicato dal calendario."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il motivo per cui non chiediamo direttamente il segno zodiacale.",
        "blocks": [
          {
            "p": "Questo è il motivo per cui chiediamo solo la data di nascita senza selezionare il segno zodiacale nella schermata di input. Quando il motore saju calcola l'anno, si allinea automaticamente con il confine di Ipchun. Se selezionato direttamente, qualcuno nato all'inizio di febbraio sceglierebbe un segno zodiacale che non corrisponde al proprio segno reale."
          }
        ]
      },
      {
        "title": "Il segno zodiacale è un carattere nel saju.",
        "blocks": [
          {
            "p": "Tra gli otto caratteri, quello corrispondente al segno zodiacale è **un ramo dell'anno**. Gli altri sette caratteri — in particolare il giorno stem che si riferisce a se stessi — non hanno relazione con il segno zodiacale."
          },
          {
            "p": "Le persone nate nello stesso anno condividono tutte lo stesso segno zodiacale. Pertanto, ciò che può essere conosciuto dal segno zodiacale è solo quanto uno degli otto caratteri. Questo è il motivo per cui questo servizio non **tratta il segno zodiacale separatamente o in modo significativo** — il ramo dell'anno è calcolato per la forza e oggi il pilastro del giorno del giudizio del giorno proprio come qualsiasi altro ramo terrestre."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tuttavia, il motivo per cui mostriamo il segno zodiacale.",
        "blocks": [
          {
            "p": "È l'unica posizione in cui il significato è compreso anche se non conosci la terminologia della myeongri. Se il segno zodiacale è annotato insieme al ramo dell'anno sulla schermata del grafico natale, diventa un indizio per leggere gli altri sette caratteri."
          }
        ]
      },
      {
        "title": "Il ramo dell'anno rimane lo stesso anche se non conosci l'orario di nascita.",
        "blocks": [
          {
            "p": "Se non inserisci l'ora, il pilastro dell'ora è omesso e la forza dei cinque elementi cambia. Tuttavia, il **ramo dell'anno rimane lo stesso** — è determinato esclusivamente dall'anno in cui sei nato."
          },
          {
            "p": "Pertanto, la storia derivata dal ramo dell'anno non cambia nemmeno per coloro che non conoscono l'ora. Al contrario, questo significa che ciò che può essere detto basandosi esclusivamente sul segno zodiacale è limitato, indipendentemente dal fatto che l'ora sia inclusa o meno."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Tempo",
    "title": "Convertiamo l'orario di nascita in tempo solare vero.",
    "summary": "L'ora standard e la posizione reale del sole differiscono. Questo spiega perché il tempo deve essere regolato in base alla longitudine del luogo di nascita per garantire che il pilastro dell'ora sia corretto.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "L'ora sull'orologio e l'ora solare sono diverse",
        "blocks": [
          {
            "p": "Il pilastro dell'ora del saju (時柱) è determinato dalla posizione del sole. Tuttavia, l'orologio che vediamo utilizza un'unica ora standard per l'intero paese, che non si allinea con la posizione reale del sole."
          },
          {
            "p": "L'ora standard della Corea è basata sulla longitudine 135° est. La longitudine di Seoul è di circa 127°, quindi è approssimativamente 8° a ovest, causando il fatto che il sole raggiunga il suo zenit più tardi: quando è mezzogiorno sull'orologio, il sole a Seoul è ancora prima del suo zenit. Questa differenza è di circa **32 minuti**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuti cambiano il pilastro dell'ora di uno slot",
        "blocks": [
          {
            "p": "Il tempo nel saju è diviso in unità di due ore. Coloro che sono nati vicino al confine avranno il loro pilastro dell'ora completamente cambiato da una differenza di 32 minuti: gli aggiustamenti sono necessari proprio a causa di coloro che si trovano esattamente su questo confine."
          }
        ]
      },
      {
        "title": "Il motivo per cui si chiede dove sei nato",
        "blocks": [
          {
            "p": "Se la longitudine è diversa, anche l'importo dell'aggiustamento varierà. Se applichi l'aggiustamento basato su Seoul a qualcuno nato all'estero, il pilastro dell'ora sarà significativamente disallineato. Pertanto, lo schermo di input ti chiede di selezionare il tuo luogo di nascita, e i calcoli vengono effettuati in base alla longitudine e all'ora standard di quella città. Attualmente, ci sono {cityCount} luoghi nella lista."
          },
          {
            "p": "Anche all'interno dello stesso paese, i luoghi con longitudini significativamente diverse (come gli Stati Uniti, la Russia, l'Indonesia, ecc.) sono stati divisi in città. **15° di longitudine equivalgono a un pilastro dell'ora**."
          },
          {
            "p": "Se non selezioni, i calcoli verranno effettuati in base a Seoul. La maggior parte delle nascite è domestica, quindi questo è meno soggetto a errori, ma se sei nato all'estero, ti preghiamo di essere sicuro di selezionare."
          }
        ]
      },
      {
        "title": "L'ora standard è cambiata diverse volte in passato",
        "blocks": [
          {
            "p": "C'è un motivo per cui l'aggiustamento non può essere calcolato semplicemente come \"differenza di longitudine ÷ 15° × 60 minuti.\" L'ora standard stessa è variata nel corso delle diverse epoche."
          },
          {
            "table": {
              "caption": "Cambiamenti nell'ora standard della Corea — coloro che sono nati in questo periodo saranno disallineati con calcoli semplici",
              "head": [
                "Periodo",
                "Cosa era diverso?"
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
            "p": "Saju-Link non fissa il meridiano standard come un valore costante, ma calcola l'ora standard effettiva utilizzata in quel momento basandosi sulle informazioni del **fuso orario IANA** del luogo di nascita. L'ora legale e le ore standard passate sono automaticamente riflesse."
          }
        ]
      },
      {
        "title": "Nascita subito dopo la mezzanotte considera anche la data",
        "blocks": [
          {
            "p": "Poiché l'aggiustamento è di -32 minuti, coloro che sono nati tra le 00:00 e le 00:32 secondo l'orologio saranno a **11 PM del giorno precedente** in ora solare vera. Se solo l'ora viene regolata indietro e la data rimane la stessa, verrà scritto il pilastro del giorno (日柱) come \"11 PM del giorno precedente.\""
          },
          {
            "p": "Saju-Link regolerà anche la data in questo caso. Il carattere sopra il pilastro del giorno si riferisce al giorno stem (日干), che indica me stesso, quindi se questo è disallineato, quasi tutti gli elementi nell'interpretazione saranno disallineati."
          }
        ]
      },
      {
        "title": "Non è necessario conoscere l'ora",
        "blocks": [
          {
            "p": "L'ora di nascita è facoltativa. Se non la conosci, i calcoli verranno effettuati senza il pilastro dell'ora, e questo fatto sarà visualizzato sullo schermo dei risultati. Poiché ciò significa che due dei otto caratteri mancano, influenzerà la valutazione della forza e della debolezza dei cinque elementi, quindi se la conosci, è più accurato includerla."
          },
          {
            "p": "Il ramo dell'anno (l'animale zodiacale) è sempre lo stesso indipendentemente dall'ora — [perché guardiamo solo al ramo dell'anno](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informazioni personali",
    "title": "Un metodo che non memorizza le informazioni inserite",
    "summary": "Chiarisce cosa significa tecnicamente che la data di nascita non è registrata da nessuna parte e cosa contiene il link ai risultati.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Non c'è registrazione di membri",
        "blocks": [
          {
            "p": "Saju-Link non crea account. Non raccoglie nomi, email o numeri di telefono. L'unica informazione raccolta è la data di nascita e (facoltativamente) l'ora di nascita, il luogo di nascita e il genere, e queste informazioni non rimangono dopo il completamento del calcolo."
          },
          {
            "p": "C'è un campo per inserire un titolo da visualizzare sullo schermo dei risultati, ma questo è **solo per scopi di visualizzazione** e non viene utilizzato nei calcoli. Non è necessario inserire il tuo vero nome."
          }
        ]
      },
      {
        "title": "Cosa contiene il link ai risultati?",
        "blocks": [
          {
            "p": "Una volta completato il calcolo, l'indirizzo appare così."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ciò che segue **#** sono i valori di input. Questa parte è chiamata **frammento**, che è una sezione che **il browser non invia al server**. Questo è un comportamento web standard e non una regola che abbiamo creato — è stato originariamente progettato per indicare una posizione all'interno di un documento, quindi il server non ha bisogno di vederlo."
          },
          {
            "p": "In altre parole, quando apri il link ai risultati, il browser legge quel valore per richiedere il calcolo, e il nostro server riceve i valori da utilizzare per il calcolo, restituisce la risposta e poi lo dimentica."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si prega di fare attenzione quando si invia il link ad altri",
        "blocks": [
          {
            "p": "Il fatto che non sia memorizzato sul server non significa che il link sia sicuro. Il link ai risultati contiene le date di nascita di due individui, quindi la persona che riceve quel link può vedere lo stesso risultato."
          }
        ]
      },
      {
        "title": "Perché il calcolo viene effettuato sul server ma non memorizzato?",
        "blocks": [
          {
            "p": "Il calcolo stesso viene effettuato sul server. La tabella dell'almanacco lunisolare è necessaria per generare il saju, e quella tabella è troppo grande per essere inviata al browser. Tuttavia, **dopo aver elaborato la richiesta, non utilizziamo quel valore da nessuna parte.** Non c'è codice per inserirlo in un database."
          },
          {
            "p": "I record minimi necessari per il funzionamento sono mantenuti — un contatore per prevenire che la stessa persona invii troppe richieste in breve tempo. Questo non include la data di nascita, e l'IP di accesso non viene mantenuto. Solo un valore hashato con la data viene conteggiato, e quel valore cambia quando cambia il giorno."
          }
        ]
      },
      {
        "title": "Cose che non possono essere fatte perché le informazioni non sono memorizzate",
        "blocks": [
          {
            "p": "Ad essere onesti, ci sono cose che sono state abbandonate perché non memorizziamo informazioni."
          },
          {
            "ul": [
              "**Non puoi recuperare risultati passati.** Devi avere il link per visualizzarli di nuovo.",
              "**Gli stessi valori verranno ricalcolati.** Non c'è cache. Tuttavia, poiché tutte le regole sono deterministiche, [lo stesso input produrrà sempre lo stesso valore](/guide/natal-chart).",
              "**Aggiornare riporterà il gate pubblicitario.** Questo perché non c'è posto per lasciare la cronologia di visualizzazione."
            ]
          }
        ]
      },
      {
        "title": "Se effettui un acquisto",
        "blocks": [
          {
            "p": "Quando acquisti un rapporto, verrà mantenuto un registro della transazione. Il pagamento è soggetto a periodi di conservazione legali e senza una cronologia degli ordini, i rimborsi non possono essere elaborati. Tuttavia, in questo momento, **la data di nascita utilizzata per il calcolo del saju non sarà allegata all'ordine** — verrà richiesta nuovamente al momento della creazione del PDF dopo la conferma del pagamento."
          },
          {
            "p": "Per ulteriori dettagli, ti preghiamo di fare riferimento alla nostra [Informativa sulla Privacy](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Prodotti a pagamento",
    "title": "Cosa è incluso nel rapporto a pagamento",
    "summary": "Chiarisce cosa è stato aggiunto al PDF mantenendo invariato lo schermo. I valori e i contenuti sono recuperati dalle impostazioni del prodotto effettivo.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Mantenuto lo schermo invariato, aggiunto solo al PDF",
        "blocks": [
          {
            "p": "Saju calculation and result inquiry are **free**. You can see everything on the screen, including the natal chart, the five elements, today's fortune, and their basis, as nothing has been omitted while creating the paid report."
          },
          {
            "p": "Il ruolo del rapporto è **aggiungere strati non presenti sullo schermo**. Questi strati non sono fabbricati; sono valori che sono già stati calcolati durante il processo di punteggio ma non sono stati utilizzati sullo schermo."
          }
        ]
      },
      {
        "title": "PDF del rapporto sul saju di vita e sulla fortuna di quest'anno — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Pagamento nazionale {priceDomestic} (IVA inclusa), pagamento internazionale {priceGlobal}. Consiste di {pageCount} pagine A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "L'indice è letto direttamente dalla descrizione del prodotto. **Il numero di pagine è lo stesso del documento effettivo** — non è gonfiato poiché è il valore indicato nell'avviso di informazioni sul prodotto."
          }
        ]
      },
      {
        "title": "Cosa non è presente sullo schermo",
        "blocks": [
          {
            "p": "The free screen shows the natal chart, the five elements, and today's fortune. There are three values that were produced during the calculation process but are not displayed on the screen, and these are the portions of the paid report."
          },
          {
            "ul": [
              "**Rapporto degli alleati del giorno stem** — Mostra numericamente dove è stata fatta la valutazione di un pilastro di giorno forte o debole. Il nome della valutazione da solo non indica se era al limite o ampio.",
              "**Wang Sang Hyu Su Sa** — Quanto il mese di nascita ha spinto ciascuna energia. Se la barra di potenza indica 'quanto c'è', questa tabella indica 'è in stagione'.",
              "**Dettagli della correzione del vero tempo solare** — Il concetto è nel documento di guida, ma **'quanti minuti sono stati spostati nel tuo caso'** è un valore diverso per ogni persona, quindi è incluso solo nel rapporto."
            ]
          }
        ]
      },
      {
        "title": "Cosa dovresti sapere prima di acquistare",
        "blocks": [
          {
            "p": "**Il server non memorizza file.** Una volta approvato il pagamento, il documento viene creato e inviato immediatamente, senza lasciare nulla sul server. Il principio di questo servizio di non salvare i valori di input è mantenuto anche nel flusso a pagamento."
          },
          {
            "p": "Pertanto, **ti preghiamo di salvare il file immediatamente dopo il pagamento.** Puoi riceverlo fino a cinque volte con lo stesso ordine, ma se lasci lo schermo dei risultati e i valori di input scompaiono, non può essere ricreato."
          }
        ]
      },
      {
        "kind": "note",
        "title": "I rapporti sono anche materiali di riferimento",
        "blocks": [
          {
            "p": "Solo perché il numero di pagine è aumentato non significa che le conclusioni siano più certe. Ciò che il rapporto aggiunge è **la base dello stesso calcolo**, non un'affermazione più forte. Il destino è un campo in cui le conclusioni possono variare a seconda del praticante, e questo servizio calcola solo ciò che può essere tradotto in regole."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avviso",
    "title": "Annunci",
    "summary": "Questo è un luogo per informare sui cambiamenti che possono influenzare l'uso.",
    "backLabel": "Torna all'inizio",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contatto",
    "title": "Richieste",
    "summary": "Questo è il canale per richieste riguardanti l'uso, rimborsi, richieste di informazioni personali e segnalazioni di errori, insieme a informazioni aziendali.",
    "backLabel": "Torna all'inizio",
    "sections": [
      {
        "title": "Contatto via email",
        "blocks": [
          {
            "p": "Si prega di inviare richieste a **{email}**. Risponderemo entro 2 giorni lavorativi. Per richieste di pagamento e rimborso, si prega di includere **il numero dell'ordine o l'email utilizzata per il pagamento** per una conferma più rapida."
          },
          {
            "p": "Le richieste telefoniche vengono ricevute al {customerCenter}."
          }
        ]
      },
      {
        "title": "Cosa può essere inviato a questo canale",
        "blocks": [
          {
            "ul": [
              "**Pagamento e rimborso** — Se il documento non è stato creato o l'importo del pagamento differisce dall'ordine, verrà fornito un rimborso completo. Le condizioni sono nella [Politica di Rimborso](/refund-policy).",
              "**Informazioni personali** — Accettiamo richieste di visione, correzione e cancellazione. La politica di elaborazione è nella [Informativa sulla Privacy](/privacy).",
              "**Segnalazione di errore di calcolo** — Se il grafico natale del saju o i punteggi sembrano strani, ti preghiamo di farcelo sapere. Se includi quando hai inserito la data e l'ora di nascita, possiamo ricalcolare con gli stessi valori."
            ]
          }
        ]
      },
      {
        "title": "Informazioni aziendali",
        "blocks": [
          {
            "ul": [
              "**Nome dell'azienda** — {companyName}",
              "**Rappresentante** — {representative}",
              "**Numero di registrazione dell'azienda** — {businessNumber}",
              "**Numero di registrazione dell'attività di vendita per corrispondenza** — {mailOrderNumber}",
              "**Indirizzo** — {address}",
              "**Centro clienti** — {customerCenter}",
              "**Email** — {email}",
              "**Responsabile della protezione delle informazioni personali** — {privacyOfficer}",
              "**Fornitore di hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Non è necessario includere la tua data e ora di nascita nell'email di richiesta. Non salviamo gli input, quindi non possiamo recuperarli in seguito, e ciò che necessita di conferma è sufficiente con il numero dell'ordine. Si prega di includerlo solo quando i valori sono assolutamente necessari, come in un rapporto di errore di calcolo."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "Servizio",
    "product": "Rapporto",
    "engine": "Criteri di calcolo",
    "support": "Richiesta"
  },
  "intro": "Le modifiche che influenzano le condizioni d'uso, come prezzi e termini, saranno pubblicate qui prima dell'implementazione. I miglioramenti interni, come il caricamento più veloce dello schermo, non sono pubblicati qui: ciò che appare qui è solo ciò che devi sapere.",
  "empty": {
    "title": "Nessun avviso è stato pubblicato.",
    "body": "Se ci sono modifiche da comunicarti, saranno pubblicate qui."
  },
  "effective": "Efficace dal {date}",
  "pager": {
    "label": "Pagina avvisi",
    "newer": "← Ultimi",
    "older": "Avvisi precedenti →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "La finestra di richiesta e la pagina di introduzione al servizio sono state aperte.",
      "body": [
        "Abbiamo raccolto un'unica finestra per richieste, rimborsi, richieste di informazioni personali e segnalazione di errori di calcolo. Puoi controllarlo in fondo allo schermo sotto 'Richiesta'.",
        "Quando ci informi di qualcosa che sembra essere un errore di calcolo, ti preghiamo di includere la data e l'ora di nascita che hai inserito. Non salviamo l'input, quindi senza quel valore non possiamo ricalcolare."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Negli schermi in arabo e khmer, il rapporto sarà generato in inglese.",
      "body": [
        "Se stai visualizzando lo schermo in arabo o khmer, il rapporto PDF che acquisti sarà creato in inglese. Questo perché lo strumento non è ancora riuscito a formattare questi due script in paragrafi.",
        "Puoi comunque vedere lo schermo così com'è, e il nome scritto nel rapporto sarà esattamente come lo hai inserito.",
        "Le stesse informazioni sono anche fornite in anticipo nella schermata di pagamento. Ti informeremo qui quando lo strumento supporterà questi script."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "I criteri di calcolo saranno inclusi con i risultati.",
      "body": [
        "Sotto lo schermo dei risultati e il rapporto, sono indicati i criteri di calcolo (ad es., sajulink-natal-v1). Se l'input è lo stesso, lo stesso valore uscirà sempre sotto gli stessi criteri.",
        "Se le regole per interpretare myeongri vengono cambiate e i punteggi possono differire, pubblicheremo prima quel fatto e la data di efficacia qui. Questo perché i numeri nei link dei risultati che hai ricevuto in precedenza potrebbero cambiare.",
        "I criteri attuali sono v10, e il pagamento è ancora in preparazione."
      ]
    }
  }
} satisfies NoticeCopy;
