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
            "p": "Saju-Link stabilisce il **grafico saju (quattro pilastri) basato sulla tua data e ora di nascita e mostra cosa significano gli otto caratteri**. Legge la forza dei cinque elementi e la forza del giorno maestro, e esamina anche la fortuna di oggi basata sullo stelo del giorno."
          },
          {
            "p": "Ciò che vedi sullo schermo è **gratuito e non richiede iscrizione.** Il prodotto a pagamento è un documento PDF contenente valori non mostrati sullo schermo — la base per distinguere tra un giorno maestro forte e un giorno maestro debole, Wang Sang Hyu Su Sa, e i dettagli di correzione per il vero tempo solare."
          }
        ]
      },
      {
        "title": "Cosa calcoliamo?",
        "blocks": [
          {
            "p": "Il saju è stabilito utilizzando il **manseyeok (almanacco lunisolare coreano)**. L'ora di nascita è corretta al **vero tempo solare** del luogo di nascita — poiché la posizione reale del sole varia per regione anche se l'orologio segna la stessa ora."
          },
          {
            "p": "I punteggi sono assegnati solo secondo regole stabilite. Concetti della tradizionale 명리 (myeongri, lo studio del destino) come i Dieci Dei, le relazioni tra i rami terrestri e gli elementi di supporto sono tradotti in regole per il calcolo, e **lo stesso input darà sempre lo stesso valore**. Quando le regole vengono cambiate, vengono condotti test di regressione per garantire che i risultati precedenti rimangano invariati."
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
              "**Non forniamo divinazione.** Non scriviamo che dovresti incontrare o evitare qualcuno. Questo è un materiale di riferimento che riassume le prospettive della tradizionale 명리.",
              "**Non salviamo gli input.** La data e l'ora di nascita sono utilizzate solo nel momento del calcolo e non vengono conservate sul server. Il link del risultato è anche memorizzato in un luogo che il browser non invia al server.",
              "**I punteggi non sono considerati valori umani.** Solo perché la fortuna di oggi è bassa non significa che dovresti rinunciare a quel giorno."
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
    "summary": "Riveliamo tutte le regole utilizzate da Saju-Link. Puoi controllare da dove provengono i numeri visualizzati sullo schermo, inclusi gli aggiustamenti per la fortuna di oggi, i punteggi dalla tabella delle relazioni tra i rami terrestri e i valori di confine che distinguono tra un giorno maestro forte e un giorno maestro debole.",
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
    "title": "Grafico Saju — Da dove provengono gli otto caratteri?",
    "summary": "Spiega come l'anno, il mese, il giorno e l'ora di nascita diventino i quattro pilastri e gli otto caratteri, e identifica quale carattere punta a te. Discute anche perché può essere visualizzato anche senza conoscere l'ora esatta di nascita.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Quattro Pilastri, Otto Caratteri",
        "blocks": [
          {
            "p": "Saju (四柱) significa letteralmente **quattro pilastri**. Ognuno dell'anno, mese, giorno e ora di nascita è stabilito come un pilastro, e due caratteri sono scritti per ogni pilastro. Così, ci sono un totale di otto caratteri, che è chiamato **원국 (won-guk)**."
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
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilastro del Mese (月柱)",
                  "Mese di nascita",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilastro del Giorno (日柱)",
                  "Giorno di nascita",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilastro dell'Ora (時柱)",
                  "Ora di nascita",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "I caratteri superiori sono chiamati heavenly stems (天干), e i caratteri inferiori sono chiamati earthly branches (地支). Ci sono dieci heavenly stems e dodici earthly branches. I dodici earthly branches sono comunemente chiamati **segni zodiacali**."
          }
        ]
      },
      {
        "title": "Tra di essi, un carattere punta a me.",
        "blocks": [
          {
            "p": "Non tutti gli otto caratteri hanno lo stesso peso. Lo **stelo celeste del giorno di nascita**, specificamente il carattere superiore del pilastro del giorno, punta a **me stesso**. Questo è chiamato **day stem (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Il saju consiste in otto caratteri stabiliti utilizzando due caratteri ciascuno per l'anno, mese, giorno e ora di nascita, rappresentati dai heavenly stems e earthly branches. Qui, il prominente day stem (日干) è il carattere che punta a me stesso.",
            "labels": {
              "year": "Pilastro dell'Anno",
              "yearNote": "Radice · Segno Zodiacale",
              "month": "Pilastro del Mese",
              "monthNote": "Stagione · Forza",
              "day": "Maestro del Giorno",
              "dayNote": "Sé · Palazzo del Coniuge",
              "hour": "Maestro dell'Ora",
              "hourNote": "Anni Avanzati · Utilizzo",
              "stem": "Stelo Celeste",
              "stemNote": "Stelo del Giorno = Sé",
              "branch": "Ramo Terrestre",
              "branchNote": "Ramo del Giorno = Palazzo del Coniuge"
            }
          },
          {
            "p": "Ciò che questo servizio mostra deriva principalmente da questo carattere — l'interpretazione delle tendenze, la forza dei cinque elementi, l'energia attualmente necessaria e la lettura di oggi sono tutte misurate in base allo Stelo del Giorno. Gli altri sette caratteri indicano 'in quale ambiente è collocato lo Stelo del Giorno'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perché il Giorno di Nascita?",
        "blocks": [
          {
            "p": "Lo Stelo dell'Anno è lo stesso per tutti coloro che sono nati in quell'anno, e lo Stelo del Mese è lo stesso per tutti coloro che sono nati in quel mese. Lo Stelo del Giorno cambia quando cambia il giorno, e la tradizionale divinazione ha considerato questa posizione come il Sé sin dalla Dinastia Song. Se è incluso lo Stelo dell'Ora, si differenzia anche tra coloro che sono nati lo stesso giorno."
          }
        ]
      },
      {
        "title": "Diviso dai Termini Solari, Non dall'Anno Calendario",
        "blocks": [
          {
            "p": "Un anno di saju non cambia il 1° gennaio, ma piuttosto a **Ipchun (circa il 4 febbraio)**. Anche il mese si divide in base ai termini solari."
          },
          {
            "p": "Pertanto, coloro che sono nati a **gennaio e all'inizio di febbraio ricevono lo Stelo dell'Anno dell'anno precedente**. Qui sorge il comune fraintendimento riguardo ai segni zodiacali. Lo stesso vale se inserisci una data di nascita lunare — viene convertita di nuovo in solare e poi divisa per i termini solari."
          }
        ]
      },
      {
        "title": "Puoi Leggerlo Anche Senza Conoscere l'Ora di Nascita",
        "blocks": [
          {
            "p": "Se non inserisci l'ora, la lettura sarà basata sui tre pilastri e sei caratteri, escludendo il Maestro dell'Ora. Non indoviniamo valori mancanti — assegnare arbitrariamente un Maestro dell'Ora può disturbare la forza dei cinque elementi, portando a conclusioni errate invece di potenzialmente accurate."
          },
          {
            "p": "Se conosci l'ora, è meglio includerla. Poiché due caratteri vengono aggiunti tra gli otto, la forza e la valutazione dei cinque elementi possono cambiare. Tuttavia, non utilizziamo l'ora del orologio direttamente, ma piuttosto utilizziamo il [Tempo Solare Vero](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il metodo di conteggio degli otto caratteri come cinque elementi per valutare la forza continua in [Forza dei Cinque Elementi e Maestro del Giorno Forte/Debole](/guide/five-elements), mentre il metodo di lettura degli altri caratteri in base allo Stelo del Giorno continua in [Dieci Dei](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Cinque Elementi",
    "title": "Forza dei Cinque Elementi e Maestro del Giorno Forte/Debole",
    "summary": "Contiamo gli otto caratteri come cinque elementi per vedere quale energia è forte e quale è debole. Riveliamo i valori soglia (45%·35%) che determinano la forza dello Stelo del Giorno.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Conteggio degli Otto Caratteri come Cinque Energie",
        "blocks": [
          {
            "p": "I dieci Steli Celesti e i dodici Rami Terrestri appartengono ciascuno a uno dei **Cinque Elementi (五行)** — Legno (木), Fuoco (火), Terra (土), Metallo (金), Acqua (水). Contando i caratteri nel grafico originale in base ai rispettivi elementi, possiamo determinare quale energia è forte e quale è debole."
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
            "p": "Lo schermo gratuito mostra solo la **forza dopo aver riflettuto il Segno del Mese**. I valori prima del Segno del Mese e la tabella di Wang, Sang, Hyu, Su e Sa sono inclusi nel rapporto a pagamento — questo è fornito per permetterti di controllare direttamente dove la valutazione diverge."
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
            "p": "Le energie allineate con lo Stelo del Giorno sono **Umanità e Compagno** — le energie che mi generano e quelle simili a me. Poiché ci sono due su cinque, se non c'è bias, sarà intorno a {evenAllyRatio}. Valutiamo sopra e sotto questo confine come bilanciato."
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
                  "Maestro del Giorno Forte (身强)",
                  "Le energie che supportano lo Stelo del Giorno sono abbondanti."
                ],
                [
                  "{weakThreshold} o superiore e meno di {strongThreshold}",
                  "Bilanciato (中和)",
                  "È difficile concludere in entrambe le direzioni."
                ],
                [
                  "Meno di {weakThreshold}",
                  "Maestro del Giorno Debole (身弱)",
                  "Le energie che supportano lo Stelo del Giorno sono deboli."
                ]
              ]
            }
          },
          {
            "p": "I numeri in questa tabella non sono trascritti dal testo ma sono **letto direttamente dal motore**. Se le regole cambiano, anche questo documento cambierà."
          }
        ]
      },
      {
        "title": "La Forza Non è Né Buona Né Cattiva",
        "blocks": [
          {
            "p": "Essere forti non significa essere buoni, e essere deboli non significa essere cattivi. Se sei forte, c'è la forza di andare avanti, ma è facile inclinarsi da un lato; se sei debole, è più facile prendere in prestito la forza degli altri, ma si può stancare facilmente quando si resiste da soli. **Le energie necessarie differiscono in entrambi i casi.**"
          },
          {
            "p": "Determinare quella 'energia necessaria' è l'elemento di supporto, e continua in [Elemento di Supporto](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Come sono stabiliti gli otto caratteri è in [Grafico Originale Saju](/guide/natal-chart). Come il Maestro del Giorno di oggi interagisce con questa forza è trattato in [Lettura di Oggi](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Elemento di Supporto",
    "title": "Elemento di Supporto — L'Energia Necessaria Ora",
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
            "p": "Un saju che è distribuito in modo uniforme non è sempre confortevole, né un saju che è sbilanciato è sempre difficile. La direzione dello sbilanciamento e se c'è un elemento per alleviarlo è il crocevia."
          }
        ]
      },
      {
        "title": "Elemento di Supporto — Ridurre Se Eccessivo, Aggiungere Se Mancante",
        "blocks": [
          {
            "p": "L'elemento di supporto (用神) è **l'energia attualmente necessaria a questa persona**. Ci sono diversi metodi per determinarlo (riduzione, aggiunta, malattia e armonia), ma il più comunemente usato è **ridurre (抑扶)**. Se il giorno maestro è forte, si crede che sia necessaria un'energia da ridurre; se debole, è richiesta un'energia da aggiungere."
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
                  "Giorno Maestro Forte (身强)",
                  "Energia da Ridurre — Cibo e Ricchezza, Posizione Ufficiale",
                  "Tre"
                ],
                [
                  "Giorno Maestro Debole (身弱)",
                  "Energia da Aggiungere — Risorsa, Compagno",
                  "Due"
                ],
                [
                  "Bilanciato (中和)",
                  "Non può essere coperto dalla riduzione, quindi l'energia più sottile",
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
            "p": "Il lato del giorno maestro è **Risorsa e Compagno** — l'energia che mi dà vita e l'energia che è simile a me. Poiché due su cinque sono coinvolti, il bilanciamento completo sarà {evenAllyRatio}. La larghezza è impostata sopra e sotto questo {evenAllyRatio}."
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
                  "Giorno Maestro Forte"
                ],
                [
                  "{weakThreshold} o più e meno di {strongThreshold}",
                  "Bilanciato"
                ],
                [
                  "Meno di {weakThreshold}",
                  "Giorno Maestro Debole"
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
            "p": "Bilanciato significa che non può essere coperto dalla riduzione. In questo momento, le due energie più sottili sono semplicemente considerate necessarie. Nella schermata dei risultati, è annotato come 'posizione attualmente sottile' piuttosto che una dichiarazione definitiva."
          }
        ]
      },
      {
        "title": "La Forza Non È Il Numero di Caratteri",
        "blocks": [
          {
            "p": "Quando si conta la forza dei cinque elementi, gli otto caratteri non vengono contati così come appaiono. I valori riflettono i tronchi celesti nascosti (地藏干) all'interno dei rami terrestri e la stagione dell'energia del mese (月令) in cui si è nati."
          },
          {
            "p": "Contare solo i caratteri superficiali perde il fatto che anche gli stessi caratteri 木 possono avere forze completamente diverse a seconda della stagione. Il 木 di primavera e il 木 di autunno, pur essendo lo stesso carattere, hanno forze diverse."
          }
        ]
      },
      {
        "title": "Dove Usare l'Elemento di Supporto",
        "blocks": [
          {
            "p": "L'elemento di supporto determinato è utilizzato in due posti. Uno è **'energia attualmente necessaria'** nella schermata dei risultati, e l'altro è [l'fortuna di oggi](/guide/today-fortune) — se l'energia di oggi corrisponde all'elemento di supporto è l'elemento che muove di più il punteggio in quel giorno."
          }
        ]
      },
      {
        "title": "Questo È un Giudizio Semplice",
        "blocks": [
          {
            "p": "L'analisi del destino reale considera la formazione e le condizioni stagionali (il calore e l'umidità della stagione) per determinare l'elemento di supporto, e le conclusioni possono variare a seconda del metodo. Saju-Link utilizza solo **riduzione che può essere misurata dai valori di forza**. Questo è dovuto al principio di utilizzare solo ciò che può essere convertito in regole, quindi lo stesso input produrrà sempre la stessa risposta."
          },
          {
            "p": "Invece, la schermata dei risultati presenta anche il giorno maestro forte e debole insieme all'energia attualmente necessaria come **materiale di lettura**. Questo è per evitare di nascondere la base del punteggio."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "I Dieci Dei",
    "title": "I Dieci Dei — Le Dieci Posizioni Dentro il Mio Saju",
    "summary": "Basato sul giorno maestro, i caratteri rimanenti sono divisi in dieci nomi. Si discute delle ragioni per distinguere tra ricchezza regolare e ricchezza secondaria, anche se sono lo stesso elemento di ricchezza.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Il Giorno Maestro È La Persona Stessa",
        "blocks": [
          {
            "p": "Tra gli otto caratteri del saju, il **giorno maestro** (il tronco celeste del giorno di nascita) si riferisce alla persona stessa. Gli altri sette caratteri vengono letti come l'ambiente in cui esiste quel giorno maestro."
          },
          {
            "p": "**I Dieci Dei** (十神) sono le dieci divisioni di come il giorno maestro percepisce gli altri caratteri. L'energia che mi nutre è Risorsa, l'energia che è simile a me è Compagno, l'energia che do alla luce è Cibo e Ricchezza, l'energia che mi sopprime è Posizione Ufficiale, e l'energia che sopprimo è Ricchezza — questi cinque rami sono ulteriormente divisi in yin e yang, formando dieci."
          }
        ]
      },
      {
        "title": "Cosa Significano i Rimanenti Sette Caratteri per Me",
        "blocks": [
          {
            "p": "Una volta determinato il giorno maestro, i caratteri rimanenti nel grafico originale ricevono ciascuno un nome. L'energia che mi dà vita, l'energia che è simile a me, l'energia che do alla luce, l'energia che mi sopprime e l'energia che sopprimo — questi cinque rami sono ulteriormente divisi in **dieci** attraverso yin e yang. Questo sono i Dieci Dei."
          },
          {
            "p": "Pertanto, i Dieci Dei si riferiscono non a relazioni con gli altri ma a **le posizioni dentro di me stesso**. Quali posizioni sono spesse o sottili indicano le mie tendenze e il modo in cui vivo."
          }
        ]
      },
      {
        "title": "La Ragione per Vedere Come i Dieci Dei Invece di Tre Elementi",
        "blocks": [
          {
            "p": "Esiste anche un metodo per vedere la relazione del giorno stem esclusivamente attraverso i tre aspetti delle cinque elementi (supporto, stesso, e opposto). È semplice, ma **il yin e lo yang scompaiono.** 甲 (legno yang) e 乙 (legno yin) diventano uguali a 甲, che è una rappresentazione di 'uguaglianza', e la relazione opposta viene accorpata in un unico punteggio senza direzione o yin e yang."
          },
          {
            "p": "La posizione del coniuge deve essere valutata secondo i Dieci Dei in termini di yin e yang. Se gli elementi visti attraverso le cinque elementi sono mescolati con quelli visti attraverso i Dieci Dei in un unico motore, ci saranno due standard per gli stessi due caratteri. Pertanto, lo unifichiamo sotto i Dieci Dei."
          }
        ]
      },
      {
        "title": "La posizione del coniuge è 정재 e 정관",
        "blocks": [
          {
            "p": "La divinazione tradizionale vede la posizione del coniuge in modo diverso in base al genere. Per gli uomini, è **정재 (正財)**, e per le donne, è **정관 (正官)**. Anche se sono lo stesso elemento di ricchezza, solo il 정재 che è disallineato in yin e yang è considerato la posizione del coniuge, mentre 편재 è letto non come un coniuge ma in termini di attività e ricchezza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se non specifichi il genere, questa posizione è omessa",
        "blocks": [
          {
            "p": "Questo perché non può essere determinato quale lato, 정재 o 정관, considerare come la posizione del coniuge. Invece di indovinare per riempire un valore mancante, leggiamo gli elementi rimanenti senza quello."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "La fortuna di oggi",
    "title": "Come si presenta la fortuna di oggi?",
    "summary": "Il giorno stem di oggi è confrontato con il grafico originale per ottenere un punteggio. Le dodici relazioni degli elementi di supporto e le sette relazioni dei rami terrestri, insieme a tutti e venti gli elementi e le loro rispettive aggiunte e sottrazioni, sono completamente rivelati.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Oggi, lo stabiliremo anche nello stesso modo degli otto caratteri",
        "blocks": [
          {
            "p": "Ogni giorno ha il suo **일진 (日辰)**. Utilizzando lo stesso metodo per stabilire il ciclo del giorno del grafico originale, anche oggi ha un giorno stem e un ramo terrestre attaccati. La fortuna di oggi riguarda il confronto di quei due caratteri con il grafico originale."
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
            "p": "Questa è la posizione più significativa. Controlliamo se l'energia di oggi corrisponde all''energia necessaria in questo momento' determinata da [억부용신](/guide/yongsin)."
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
        "title": "Non considerare il 기신 come 'tutto tranne il 용신'",
        "blocks": [
          {
            "p": "Se lo fai, sia l'energia che genera il 용신 sia l'energia che sopprime il 용신 diventano negative, e le ultime due righe nella tabella sopra diventano indistinguibili. Solo l'energia che **spinge più forte nella direzione opposta** secondo il significato di 억부 è vista come 기신."
          }
        ]
      },
      {
        "title": "② La relazione tra il giorno stem di oggi e il giorno stem",
        "blocks": [
          {
            "p": "Le relazioni di supporto e opposizione delle cinque elementi sono applicate direttamente tra il giorno stem e il giorno stem di oggi."
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
                  "Io fluisco con oggi",
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
        "title": "③ Il ramo terrestre di oggi incontra i rami terrestri del grafico originale",
        "blocks": [
          {
            "p": "Il ramo terrestre di oggi è confrontato con i rami terrestri del grafico originale. La tabella delle relazioni stessa si trova in [십이지 관계](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relazione",
                "Aggiunta/Sottrazione"
              ],
              "rows": [
                [
                  "triade completa (三合)",
                  "{branchSamhap}"
                ],
                [
                  "coppia di sei armonie (六合)",
                  "{branchYukhap}"
                ],
                [
                  "triade parziale (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discordia silenziosa e duratura (怨嗔)",
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
            "p": "Quando ci sono più pilastri, sorgono più relazioni. Tutte vengono sommate, ma questo intero elemento è limitato a **±{branchMaxAbs} punti** — questo per evitare che una singola relazione di ramo terrestre determini l'intera giornata."
          }
        ]
      },
      {
        "title": "④ Correzione Basata sulla Forza",
        "blocks": [
          {
            "p": "Anche con la stessa energia, il significato differisce per un giorno maestro forte e un giorno maestro debole. Pertanto, facciamo un'ultima regolazione."
          },
          {
            "table": {
              "head": [
                "Situazione",
                "Regolazione"
              ],
              "rows": [
                [
                  "Giorno maestro debole ma oggi li supporta",
                  "{weakTodayHelps}"
                ],
                [
                  "Giorno maestro forte ma oggi riduce appropriatamente il carico",
                  "{strongTodayDrains}"
                ],
                [
                  "Giorno maestro forte ma oggi aumenta il supporto",
                  "{strongTodayHelps}"
                ],
                [
                  "Giorno maestro debole ma oggi aggiunge al carico",
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
            "p": "Il punteggio totale è suddiviso in cinque gradi."
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
            "p": "Le quattro aree di ricchezza, amore, carriera e salute ereditano un punteggio totale di {overallShare}, mentre il resto è suddiviso secondo i Dieci Dei e le relazioni di ramo terrestre rilevanti per quelle aree. Pertanto, anche se il punteggio totale è lo stesso, i numeri per area differiscono da persona a persona."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "I numeri sopra sono tutti letti dalle impostazioni del motore. Se le regole vengono cambiate, anche questo documento cambierà, e eventuali modifiche ai punteggi saranno pubblicate prima nella [Notifica](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabella delle Relazioni",
    "title": "Relazioni dei Rami Terrestri — Combinazione, Scontro e Discordia",
    "summary": "Questa è una tabella delle relazioni che mostra come il giorno maestro di oggi interagisce con il grafico natale. Rivela quali sono ciascuna combinazione, scontro e discordia e quanti punti hanno.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "I Rami Terrestri sono Dodici Caratteri",
        "blocks": [
          {
            "p": "I dodici rami terrestri (十二支) sono 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. I segni zodiacali comunemente noti — Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, Pig — sono ciascuno associati a uno di questi dodici caratteri."
          },
          {
            "figure": "branch-wheel",
            "caption": "Quando i dodici caratteri sono disposti in un cerchio, le relazioni sono chiaramente visibili. Lo scontro (沖) si affronta sempre, mentre l'armonia a sei e la discordia sono coppie più vicine. Queste linee non sono scritte nel testo ma sono direttamente derivate dalle regole di calcolo.",
            "labels": {
              "alt": "Un diagramma che mostra i dodici rami terrestri disposti in un cerchio con linee che collegano armonia a sei, scontro e discordia.",
              "yukhap": "Armonia a Sei",
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
            "p": "Nel saju, ciascuno dei quattro pilastri ha un ramo terrestre. **La lettura di oggi** è determinata abbinando **il ramo del giorno** con i quattro rami del grafico originale utilizzando la tabella delle relazioni qui sotto."
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
                  "Triade (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Quando tutti e tre i caratteri si uniscono, formano una formazione elementale completa (局). Questa è considerata la combinazione più forte.",
                  "{scoreSamhap}"
                ],
                [
                  "Sei Armonie (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Coppie che si attraggono. Questa è la combinazione più comune poiché consiste in soli due caratteri.",
                  "{scoreYukhap}"
                ],
                [
                  "Mezza Triade (半合)",
                  "Due caratteri che includono uno dei caratteri reali (子·酉·午·卯) dalla triade",
                  "Una mezza combinazione che include un carattere centrale per la formazione. Non forma una formazione elementale completa con solo due caratteri, rendendola inferiore alla triade.",
                  "{scoreBanhap}"
                ],
                [
                  "Stesso Ramo",
                  "子子 · 丑丑 …",
                  "Caratteri che sono gli stessi. Questo significa che si somigliano ma non implica attrazione, quindi sono posti nel mezzo.",
                  "{scoreSame}"
                ],
                [
                  "Nessuna Relazione",
                  "Coppie che non appartengono a nessuna delle categorie sopra o sotto",
                  "Combinazioni che non hanno relazioni speciali. Questo serve come punto di riferimento.",
                  "{scoreNeutral}"
                ],
                [
                  "Discordia Silenziosa (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Coppie che non possono separarsi nonostante il loro disprezzo. Appaiono tranquille in superficie ma sono considerate durature.",
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
        "title": "Triadi e Mezze Triadi",
        "blocks": [
          {
            "p": "Una triade richiede che tutti e tre i caratteri siano presenti. Poiché ci sono quattro rami terrestri nel grafico originale, è possibile che il ramo del giorno si combini con essi, risultando in una triade — in quel momento, riceve un punteggio di {scoreSamhap}. Se sono coinvolti solo due caratteri, è una mezza triade."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Le Mezze Triadi Richiedono Caratteri Reali per Essere Riconosciute",
        "blocks": [
          {
            "p": "Esiste anche un metodo che conta come una mezza triade se entrambi i caratteri appartengono allo stesso gruppo di triadi. Questo consente combinazioni come 申辰, che sono difficili da definire come combinazione, di ricevere punteggi elevati. Pertanto, questo servizio riconosce una mezza triade solo quando include caratteri reali (子·酉·午·卯), e non considera combinazioni come 申辰·巳丑·寅戌·亥未 come valide."
          }
        ]
      },
      {
        "title": "Motivo per Separare la Discordia Silenziosa",
        "blocks": [
          {
            "p": "Le sei coppie di discordia silenziosa sono viste tanto frequentemente quanto gli scontri. Se contiamo le combinazioni di entrambi gli scontri e le combinazioni, queste sei coppie sarebbero tutte sepolte sotto il punteggio di nessuna relazione di {scoreNeutral}, quindi sono poste separatamente."
          },
          {
            "p": "Se gli scontri sono coppie che collidono frontalmente e sono esposte in modo prominente, la discordia silenziosa è leggermente disallineata. Pertanto, è posta a un punteggio di {scoreWonjin}, che è superiore agli scontri ({scoreChung}) ma sicuramente inferiore a nessuna relazione ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "I punteggi sono assegnati anche per gli scontri",
        "blocks": [
          {
            "p": "Il punteggio di clash più basso è {scoreChung}. È intenzionale non dare un valore vicino a 0. Nella tradizionale 명리 (myeongri), un clash non è una 'fine' ma una 'collisione', e dare un punteggio vicino al fondo significherebbe che il servizio sta facendo un'affermazione definitiva sulla relazione."
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
    "summary": "Il segno zodiacale è il ramo terrestre dell'anno in cui sei nato. Questo spiega perché è tratto dall'anno saju piuttosto che dall'anno del calendario, e perché coloro che sono nati all'inizio di gennaio o febbraio hanno il segno zodiacale dell'anno precedente.",
    "backLabel": "Base di Calcolo",
    "sections": [
      {
        "title": "Il segno zodiacale è il ramo terrestre dell'anno in cui sei nato.",
        "blocks": [
          {
            "p": "Il Saju consiste di quattro pilastri: anno, mese, giorno e ora, con ogni pilastro che ha un cielo stem e un ramo terrestre. Tra di essi, il **ramo terrestre dell'anno**, o 연지 (year branch), è l'animale che chiamiamo segno zodiacale."
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
                  "Rat"
                ],
                [
                  "丑",
                  "Ox"
                ],
                [
                  "寅",
                  "Tiger"
                ],
                [
                  "卯",
                  "Rabbit"
                ],
                [
                  "辰",
                  "Dragon"
                ],
                [
                  "巳",
                  "Snake"
                ],
                [
                  "午",
                  "Horse"
                ],
                [
                  "未",
                  "Goat"
                ],
                [
                  "申",
                  "Monkey"
                ],
                [
                  "酉",
                  "Rooster"
                ],
                [
                  "戌",
                  "Dog"
                ],
                [
                  "亥",
                  "Pig"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Utilizziamo l'anno saju, non l'anno del calendario.",
        "blocks": [
          {
            "p": "Il punto in cui cambia il segno zodiacale non è né il 1° gennaio del calendario solare né il Capodanno Lunare. Lo standard per cambiare l'anno nel saju è **Ipchun**. Pertanto, coloro che sono nati all'inizio di gennaio o febbraio possono avere un segno zodiacale diverso da quello indicato dal calendario."
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
            "p": "Tra gli otto caratteri, quello corrispondente al segno zodiacale è **un 연지 (year branch)**. Gli altri sette caratteri — specialmente il giorno stem che si riferisce a se stessi — non hanno relazione con il segno zodiacale."
          },
          {
            "p": "People born in the same year all share the same zodiac sign. Therefore, what can be known from the zodiac sign is only as much as one of the eight characters. This is the reason why this service does not **treat the zodiac sign separately or significantly** — the 연지 (year branch) is calculated for strength and today's 일진 (daily fortune) judgment just like any other earthly branch."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tuttavia, il motivo per cui mostriamo il segno zodiacale.",
        "blocks": [
          {
            "p": "È l'unica posizione in cui il significato è compreso anche se non conosci la terminologia di 명리 (myeongri). Se il segno zodiacale è annotato insieme al 연지 (year branch) nella schermata originale del grafico, diventa un indizio per leggere gli altri sette caratteri."
          }
        ]
      },
      {
        "title": "Il ramo dell'anno rimane lo stesso anche se non conosci l'ora di nascita.",
        "blocks": [
          {
            "p": "Se non inserisci l'ora, il pilastro dell'ora è omesso e la forza degli 오행 (five elements) cambia. Tuttavia, il **ramo dell'anno rimane lo stesso** — è determinato esclusivamente dall'anno in cui sei nato."
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
    "title": "Convertiamo l'ora di nascita in vero tempo solare.",
    "summary": "L'ora standard e la posizione reale del sole differiscono. Questo spiega perché il tempo deve essere regolato secondo la longitudine del luogo di nascita per garantire che il pilastro dell'ora sia corretto.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "L'ora sull'orologio e l'ora solare sono diverse",
        "blocks": [
          {
            "p": "Il pilastro orario del saju (時柱) è determinato dalla posizione del sole. Tuttavia, l'orologio che vediamo utilizza un'unica ora standard per l'intero paese, che non coincide con la posizione reale del sole."
          },
          {
            "p": "Il fuso orario standard della Corea si basa sulla longitudine 135° est. La longitudine di Seoul è di circa 127°, quindi è approssimativamente 8° a ovest, causando un ritardo nel raggiungimento del zenit del sole — quando è mezzogiorno secondo l'orologio, il sole a Seoul è ancora prima del suo zenit. Questa differenza è di circa **32 minuti**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuti cambiano il pilastro orario di una posizione",
        "blocks": [
          {
            "p": "Il tempo nel saju è diviso in unità di due ore. Coloro che sono nati vicino al confine avranno il loro pilastro orario completamente cambiato da una differenza di 32 minuti — sono necessari aggiustamenti proprio per coloro che si trovano esattamente su questo confine."
          }
        ]
      },
      {
        "title": "Il motivo per cui si chiede dove sei nato",
        "blocks": [
          {
            "p": "Se la longitudine è diversa, anche l'importo dell'aggiustamento varierà. Se applichi l'aggiustamento basato su Seoul a qualcuno nato all'estero, il pilastro orario sarà significativamente disallineato. Pertanto, lo schermo di input ti chiede di selezionare il tuo luogo di nascita, e i calcoli vengono effettuati in base alla longitudine e all'ora standard di quella città. Attualmente, ci sono {cityCount} luoghi nella lista."
          },
          {
            "p": "Anche all'interno dello stesso paese, luoghi con longitudini significativamente diverse (come Stati Uniti, Russia, Indonesia, ecc.) sono stati divisi in città. **15° di longitudine equivalgono a un pilastro orario**."
          },
          {
            "p": "Se non selezioni, i calcoli verranno effettuati in base a Seoul. La maggior parte delle nascite è domestica, quindi questo è meno soggetto a errori, ma se sei nato all'estero, ti preghiamo di assicurarti di selezionare."
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
            "p": "Saju-Link non fissa il meridiano standard come valore costante, ma calcola l'ora standard effettiva utilizzata in quel momento basandosi sulle informazioni del **fuso orario IANA** del luogo di nascita. L'ora legale e le ore standard passate sono automaticamente riflesse."
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
            "p": "L'ora di nascita è facoltativa. Se non la conosci, i calcoli verranno effettuati senza il pilastro orario, e questo fatto verrà visualizzato sulla schermata dei risultati. Poiché ciò significa che due dei otto caratteri mancano, influenzerà la valutazione della forza e della debolezza dei cinque elementi, quindi se lo sai, è più preciso includerlo."
          },
          {
            "p": "Il ramo dell'anno (띠) è sempre lo stesso indipendentemente dall'ora — [perché guardiamo solo al ramo dell'anno](/guide/zodiac)."
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
        "title": "Non c'è registrazione di adesione",
        "blocks": [
          {
            "p": "Saju-Link non crea account. Non raccoglie nomi, email o numeri di telefono. L'unica informazione raccolta è la data di nascita e (facoltativamente) l'ora di nascita, il luogo di nascita e il genere, e queste informazioni non rimangono dopo il completamento del calcolo."
          },
          {
            "p": "C'è un campo per inserire un titolo da visualizzare sulla schermata dei risultati, ma questo è **solo per scopi di visualizzazione** e non viene utilizzato nei calcoli. Non è necessario inserire il tuo vero nome."
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
            "p": "In altre parole, quando apri il link ai risultati, il browser legge quel valore per richiedere il calcolo, e il nostro server riceve i valori da utilizzare per il calcolo, restituisce la risposta e poi se ne dimentica."
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
            "p": "I record minimi necessari per il funzionamento sono mantenuti — un contatore per prevenire che la stessa persona invii troppe richieste in breve tempo. Questo non include la data di nascita, e l'IP di accesso non viene conservato. Solo un valore hashato con la data viene conteggiato, e quel valore cambia quando cambia il giorno."
          }
        ]
      },
      {
        "title": "Cose che non possono essere fatte perché le informazioni non sono memorizzate",
        "blocks": [
          {
            "p": "A dire il vero, ci sono cose che sono state abbandonate perché non memorizziamo informazioni."
          },
          {
            "ul": [
              "**Non puoi recuperare risultati passati.** Devi avere il link per visualizzarli di nuovo.",
              "**Gli stessi valori verranno ricalcolati.** Non c'è cache. Tuttavia, poiché tutte le regole sono deterministiche, [lo stesso input produrrà sempre lo stesso valore](/guide/natal-chart).",
              "**Aggiornare riporterà il gate pubblicitario.** Questo perché non c'è posto per lasciare la cronologia delle visualizzazioni."
            ]
          }
        ]
      },
      {
        "title": "Se effettui un acquisto",
        "blocks": [
          {
            "p": "Quando acquisti un rapporto, verrà mantenuto un registro della transazione. Il pagamento è soggetto a periodi di conservazione legali e, senza una cronologia degli ordini, i rimborsi non possono essere elaborati. Tuttavia, in questo momento, **la data di nascita utilizzata per il calcolo del saju non sarà allegata all'ordine** — verrà richiesta nuovamente al momento della creazione del PDF dopo la conferma del pagamento."
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
    "summary": "Chiarisce cosa è stato aggiunto al PDF mantenendo invariato lo schermo. I valori e i contenuti sono recuperati dalle impostazioni del prodotto reale.",
    "backLabel": "Base di calcolo",
    "sections": [
      {
        "title": "Mantenuto lo schermo invariato, aggiunto solo al PDF",
        "blocks": [
          {
            "p": "Il calcolo del saju e l'inchiesta sui risultati sono **gratuiti**. Puoi vedere tutto sullo schermo, incluso il grafico originale, i cinque elementi, la fortuna di oggi e le loro basi, poiché nulla è stato omesso durante la creazione del rapporto a pagamento."
          },
          {
            "p": "Il ruolo del rapporto è **aggiungere strati non presenti sullo schermo**. Questi strati non sono fabbricati; sono valori che sono già stati calcolati durante il processo di punteggio ma non sono stati utilizzati sullo schermo."
          }
        ]
      },
      {
        "title": "PDF del rapporto sulla fortuna del saju per tutta la vita e di quest'anno — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Pagamento nazionale {priceDomestic} (IVA inclusa), pagamento internazionale {priceGlobal}. Consiste in {pageCount} pagine A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "L'indice è letto direttamente dalla descrizione del prodotto. **Il numero di pagine è lo stesso del documento reale** — non è gonfiato poiché è il valore indicato nell'avviso delle informazioni sul prodotto."
          }
        ]
      },
      {
        "title": "Cosa non è sullo schermo",
        "blocks": [
          {
            "p": "Lo schermo gratuito mostra il grafico originale, i cinque elementi e la fortuna di oggi. Ci sono tre valori che sono stati prodotti durante il processo di calcolo ma non sono visualizzati sullo schermo, e questi sono le porzioni del rapporto a pagamento."
          },
          {
            "ul": [
              "**Rapporto di convenienza del giorno stem** — Mostra numericamente dove è stata fatta la valutazione di un giorno master forte o debole. Il nome della valutazione da solo non indica se era al limite o abbondante.",
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
            "p": "Pertanto, **ti preghiamo di salvare immediatamente il file dopo il pagamento.** Puoi riceverlo fino a cinque volte con lo stesso ordine, ma se lasci lo schermo dei risultati e i valori di input scompaiono, non può essere ricreato."
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
            "p": "Si prega di inviare richieste a **{email}**. Risponderemo entro 2 giorni lavorativi. Per richieste di pagamento e rimborso, si prega di includere **il numero d'ordine o l'email utilizzata per il pagamento** per una conferma più rapida."
          },
          {
            "p": "Le richieste telefoniche vengono ricevute a {customerCenter}."
          }
        ]
      },
      {
        "title": "Cosa può essere inviato a questo canale",
        "blocks": [
          {
            "ul": [
              "**Pagamento e rimborso** — Se il documento non è stato creato o l'importo del pagamento differisce dall'ordine, verrà fornito un rimborso completo. Le condizioni sono nella [Politica di Rimborso](/refund-policy).",
              "**Informazioni personali** — Accettiamo richieste di visualizzazione, correzione e cancellazione. La politica di elaborazione è nella [Informativa sulla Privacy](/privacy).",
              "**Segnalazione di errore di calcolo** — Se il grafico originale del saju o i punteggi sembrano strani, ti preghiamo di farcelo sapere. Se includi quando hai inserito la data e l'ora di nascita, possiamo ricalcolare con gli stessi valori."
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
              "**Centro assistenza clienti** — {customerCenter}",
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
            "p": "Non è necessario includere la tua data e ora di nascita nell'email di richiesta. Non salviamo gli input, quindi non possiamo recuperarli in seguito, e ciò che necessita di conferma è sufficiente con il numero d'ordine. Si prega di includerlo solo quando i valori sono assolutamente necessari, come in una segnalazione di errore di calcolo."
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
  "intro": "Le modifiche che influenzano le condizioni d'uso, come prezzi e termini, saranno pubblicate qui prima dell'implementazione. Ci sono molti miglioramenti interni, come lo schermo che diventa più veloce — solo ciò che devi sapere sarà annotato qui.",
  "empty": {
    "title": "Nessun avviso è stato pubblicato.",
    "body": "Se ci sono cambiamenti da comunicarti, saranno pubblicati qui."
  },
  "effective": "Efficace dal {date}",
  "pager": {
    "label": "Pagina degli avvisi",
    "newer": "← Ultimo",
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
        "Le stesse informazioni sono anche fornite in anticipo sulla schermata di pagamento. Ti informeremo qui quando lo strumento supporterà questi script."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "I criteri di calcolo saranno inclusi con i risultati.",
      "body": [
        "Sotto lo schermo dei risultati e del rapporto, i criteri di calcolo (ad esempio, sajulink-natal-v1) sono indicati. Se l'input è lo stesso, lo stesso valore uscirà sempre sotto gli stessi criteri.",
        "Se le regole per interpretare 명리 (myeongri) vengono cambiate e i punteggi possono differire, pubblicheremo prima quel fatto e la data di efficacia qui. Questo perché i numeri nei link ai risultati che hai ricevuto in precedenza potrebbero cambiare.",
        "I criteri attuali sono v10, e il pagamento è ancora in preparazione."
      ]
    }
  }
} satisfies NoticeCopy;
