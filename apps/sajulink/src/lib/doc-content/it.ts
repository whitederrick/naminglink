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
