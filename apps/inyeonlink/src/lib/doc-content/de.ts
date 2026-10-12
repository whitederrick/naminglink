import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Über",
    "title": "Über Inyeon-Link",
    "summary": "Wir vergleichen zwei Geburtshoroskope in der koreanischen Saju-Tradition. Hier ist, was wir berechnen und was wir nicht behaupten.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "Was wir tun",
        "blocks": [
          {
            "p": "Inyeon-Link erstellt zwei Geburtshoroskope aus Geburtsdaten und -zeiten und zeigt **wie die beiden Energiesätze aufeinandertreffen.** Sie können auch Ihr eigenes Horoskop allein lesen und sehen, welche Temperamente zu Ihnen tendieren."
          },
          {
            "p": "Das Lesen auf dem Bildschirm ist **kostenlos und benötigt kein Konto.** Die kostenpflichtigen Artikel sind PDF-Berichte, die Zahlen enthalten, die der Bildschirm niemals anzeigt — Elementstärken, zehn-god Paarungen und die Beziehungen über alle vier Säulen."
          }
        ]
      },
      {
        "title": "Was wir berechnen",
        "blocks": [
          {
            "p": "Die Horoskope werden aus dem **koreanischen lunisolaren Almanach** erstellt, und die Geburtszeit wird auf **wahre Sonnenzeit** für den Geburtsort korrigiert — die gleiche Uhrzeit bedeutet eine andere Sonnenposition, je nachdem, wo Sie geboren wurden."
          },
          {
            "p": "Die Werte stammen nur aus festen Regeln. Traditionelle Konzepte — zehn Götter, Zweigbeziehungen, das unterstützende Element — werden als Regeln ausgedrückt, sodass **die gleiche Eingabe immer das gleiche Ergebnis liefert.** Wenn sich eine Regel ändert, führen wir einen Regressionstest durch, um sicherzustellen, dass ältere Lesungen nicht verschoben wurden."
          },
          {
            "p": "**Keine KI ist beteiligt.** Jeder Satz auf dem Bildschirm ist fester Text, der an ein berechnetes Ergebnis angehängt ist."
          }
        ]
      },
      {
        "title": "Was wir nicht behaupten werden",
        "blocks": [
          {
            "ul": [
              "**Wir sagen keine Zukunft voraus.** Nichts hier sagt Ihnen, dass Sie jemandem nachjagen oder ihn vermeiden sollen. Es ist ein Verweis, der aus einer Tradition gezogen wurde.",
              "**Wir speichern nicht, was Sie eingeben.** Geburtsdetails werden nur für den Moment der Berechnung verwendet und niemals niedergeschrieben; Ergebnislinks leben im Teil der URL, den ein Browser nicht an einen Server sendet.",
              "**Ein Wert ist kein Urteil über eine Person.** Eine niedrige Zahl entwertet keine Beziehung."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die Methode wird im Detail in den [Leitfäden](/guide) beschrieben. Unternehmensdetails und wie Sie uns erreichen können, finden Sie auf der [Kontaktseite](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Berechnungsbasis",
    "title": "Was ist die Basis für die Berechnung?",
    "summary": "Inyeon-Link offenbart alle Regeln, die es verwendet. Sie können die Elemente und deren Gewichtungen, die Werte aus der Tabelle der Beziehungen der Erdenzweige und die Schwellenwerte, die zwischen einem starken und einem schwachen Tagesmeister unterscheiden, überprüfen — Sie können sehen, woher die Zahlen auf dem Bildschirm kommen.",
    "backLabel": "Zurück zum Start",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die hier geschriebenen Werte werden **direkt aus dem Berechnungscode abgelesen**. Da sie nicht manuell in den Text übertragen werden, ändern sich die Zahlen in diesem Dokument ebenfalls, wenn sich die Regeln ändern."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Dienstbasis",
    "title": "Was betrachtet die Saju-Kompatibilität?",
    "summary": "Es werden vier Elemente und deren jeweilige Gewichtungen klargestellt und erklärt, warum diese vier ausgewählt wurden. Es wird auch angesprochen, warum Berechnungen auch ohne Kenntnis der Geburtszeit durchgeführt werden können.",
    "backLabel": "Berechnungsbasis",
    "sections": [
      {
        "title": "Berechnung und Kombination von zwei Achsen",
        "blocks": [
          {
            "p": "Die Übereinstimmungsrate stammt aus zwei Zweigen. **Saju-Kompatibilität** betrachtet das gesamte ursprüngliche Saju-Horoskop beider Personen, während **Tierkreis-Kompatibilität** nur einen Erdenzweig aus dem Geburtsjahr berücksichtigt. Der endgültige Wert wird durch gewichtetes Mittel der beiden erhalten."
          },
          {
            "table": {
              "head": [
                "Achse",
                "Was wird berücksichtigt",
                "Gewicht"
              ],
              "rows": [
                [
                  "Saju-Kompatibilität",
                  "Tagestamm, Tageszweig und die fünf Elemente — vier Elemente",
                  "{weightSaju}"
                ],
                [
                  "Tierkreis-Kompatibilität",
                  "Die Beziehung zwischen den Jahrzweigen",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Die Saju-Seite ist viel schwerer, da die Menge der verwendeten Informationen unterschiedlich ist. Saju berücksichtigt alle vier Säulen, während der Tierkreis nur einen Charakter betrachtet. Der Tierkreis wird jedoch aus zwei Gründen nicht ausgeschlossen — er ist das am intuitivsten verständliche Element und es ist die **einzige Achse, deren Wert nicht schwankt, auch ohne Kenntnis der Geburtszeit.**"
          }
        ]
      },
      {
        "title": "Die vier Elemente der Saju-Kompatibilität",
        "blocks": [
          {
            "p": "Die Saju-Seite ist weiter in vier unterteilt. Jedes Element wird ausgewählt, um sicherzustellen, dass das, was sie berücksichtigen, sich nicht überschneidet."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju besteht aus acht Zeichen, die aus den himmlischen Stämmen und den irdischen Zweigen des Jahres, Monats, Tages und der Stunde der Geburt gebildet werden. Der Tagestamm und der Tageszweig, die unten erwähnt werden, sind die beiden Zeichen in der Tagsäule.",
            "labels": {
              "year": "Jahressäule",
              "yearNote": "Wurzel · Tierkreis",
              "month": "Monatssäule",
              "monthNote": "Jahreszeit · Kraft",
              "day": "Tagsäule",
              "dayNote": "Ich · Ehepalast",
              "hour": "Stundensäule",
              "hourNote": "Spätere Jahre · Nutzung",
              "stem": "Himmlischer Stamm",
              "stemNote": "Tagestamm = Ich",
              "branch": "Erdzweig",
              "branchNote": "Tageszweig = Ehepalast"
            }
          },
          {
            "table": {
              "head": [
                "Element",
                "Was wird betrachtet",
                "Gewicht"
              ],
              "rows": [
                [
                  "Beziehung der Tagesstämme",
                  "Was die Tagesstämme (日干) der beiden Personen füreinander sind — betrachtet durch die **Zehn Götter**",
                  "{weightDayMaster}"
                ],
                [
                  "Komplementation der fünf Elemente",
                  "Hat der Partner die Energie, die ich brauche — betrachtet durch das **unterstützende Element**, das ein Diagramm derzeit benötigt",
                  "{weightElementSupply}"
                ],
                [
                  "Ehe-Stern",
                  "Entspricht der Tagesstamm des Partners meiner Eheposition?",
                  "{weightSpouseStar}"
                ],
                [
                  "Beziehung der Tageszweige",
                  "Sind die Tageszweige (日支) der beiden Personen eine Kombination oder ein **Zusammenstoß**?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Der Tageszweig wird gelesen, weil die Tradition ihn als den **Ehepalast** betrachtet. Von den vier Säulen ist er derjenige, der auf den Partner zeigt, was ihn zum ersten Punkt macht, an dem die Kompatibilität betrachtet wird."
          }
        ]
      },
      {
        "title": "Wenn das Geschlecht nicht bekannt ist, wird das Eheelement weggelassen",
        "blocks": [
          {
            "p": "Das Eheelement erfordert Kenntnisse über das Geschlecht für die Berechnung. Die Tradition liest die Position, die auf einen Ehepartner zeigt, unterschiedlich je nach Geschlecht. Wenn nicht bekannt, wird dieser Punkt **ausgeschlossen** und die Gewichte der verbleibenden drei Punkte werden neu normalisiert."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Es wird nicht als 0 Punkte behandelt",
        "blocks": [
          {
            "p": "Wenn fehlende Positionen als 0 Punkte behandelt werden, wird die Punktzahl unfairerweise gesenkt, nur weil das Geschlecht nicht bekannt war. Die Neu-Normalisierung der Gewichte verhindert dieses Problem."
          }
        ]
      },
      {
        "title": "Berechnungen können ohne Kenntnis der Geburtszeit durchgeführt werden",
        "blocks": [
          {
            "p": "Die Geburtszeit wird verwendet, um die Stunden-Säule zu bestimmen. Wenn unbekannt, werden die Berechnungen ohne die Stunden-Säule durchgeführt, und dies wird auf dem Ergebnisbildschirm angezeigt. Da es keinen direkten Eingabepunkt für die Stunden-Säule unter den vier Kompatibilitätsgegenständen gibt, werden die Werte nicht signifikant schwanken, aber es beeinflusst das Gleichgewicht der fünf Elemente."
          },
          {
            "p": "Wenn Sie die Zeit kennen, wählen Sie bitte auch den Geburtsort aus. Wenn die Standardzeit von der tatsächlichen Sonnenposition abweicht, kann die Verwendung dieser Zeit die Stunden-Säule falsch ausrichten [(Korrektur der wahren Sonnenzeit)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Die gleiche Eingabe ergibt immer den gleichen Wert",
        "blocks": [
          {
            "p": "Alle Punktzahlen werden durch Regeln bestimmt. Es wird keine künstliche Intelligenz verwendet, noch werden Zufallszahlen eingesetzt. Daher wird die Eingabe der gleichen zwei Geburtsdaten mehrfach nicht zu unterschiedlichen Ergebnissen führen. Als ein Dienst, der keine Daten speichert, können frühere Ergebnisse nicht abgerufen werden, aber **Determinismus** kompensiert dies."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Änderungen der Regeln erhöhen die Version",
        "blocks": [
          {
            "p": "Jedes Mal, wenn die Bewertungsregeln geändert werden, wird die Motorversion aktualisiert. Die Version wird am unteren Ende des Ergebnisbildschirms vermerkt, sodass Sie erkennen können, welche Regeln zur Berechnung der Zahlen verwendet wurden, die Sie derzeit sehen."
          }
        ]
      },
      {
        "title": "Was dieses Ergebnis nicht ist",
        "blocks": [
          {
            "p": "Dies ist ein **Referenzmaterial**, das aus Regeln berechnet wurde, die aus der Perspektive der Tradition aufgebaut sind. Es ist keine wissenschaftliche Vorhersage, noch ist es eine definitive Aussage über die Beziehung zwischen den beiden Individuen. Der Punktbereich ist aus diesem Grund auf ein Minimum von etwa 45 Punkten festgelegt — keine Kombination wird einen Wert nahe 0 Punkten ergeben."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Beziehungstabelle",
    "title": "Wie Tierkreiszeichen und Tageszweige zusammentreffen — Die Tabelle der zwölf Zweige",
    "summary": "Die Beziehungstabelle, die verwendet wird, wenn die Tierkreiszeichen und Tageszweige zweier Personen nebeneinandergelegt werden. Sie zeigt für jedes der zwölf Tiere, mit welchen Tieren es eine Harmonie, einen Zusammenstoß oder eine Zwietracht bildet, und legt den Punktwert jeder Beziehung offen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Tierkreiszeichen und Tageszweige verwenden dieselbe Tabelle",
        "blocks": [
          {
            "p": "Inyeon-Link legt die irdischen Zweige zweier Personen an zwei Stellen nebeneinander: bei der **Tierkreis-Kompatibilität**, die den Zweig des Geburtsjahres betrachtet, und bei der **Tageszweig-Kompatibilität** (dem Ehepalast), die den Zweig des Geburtstages betrachtet. Beide werden mit der folgenden Tabelle beurteilt; der einzige Unterschied ist, wie stark jede im Endwert gewichtet wird."
          },
          {
            "figure": "branch-wheel",
            "caption": "Ordnet man die zwölf Zeichen im Kreis an, sind die Beziehungen auf einen Blick zu erkennen. Ein Zusammenstoß liegt immer direkt gegenüber, während ein Sechs-Harmonie-Paar und eine stille Zwietracht nähere Nachbarn sind. Diese Linien werden nicht von Hand gezeichnet, sondern direkt aus den Berechnungsregeln abgeleitet.",
            "labels": {
              "alt": "Ein Diagramm, das die zwölf irdischen Zweige im Kreis angeordnet zeigt, mit Linien, die Paare der Sechs-Harmonie, des Zusammenstoßes und der Zwietracht verbinden.",
              "yukhap": "Sechs-Harmonie",
              "chung": "Zusammenstoß",
              "wonjin": "Zwietracht",
              "rat": "Ratte",
              "ox": "Ochse",
              "tiger": "Tiger",
              "rabbit": "Hase",
              "dragon": "Drache",
              "snake": "Schlange",
              "horse": "Pferd",
              "goat": "Ziege",
              "monkey": "Affe",
              "rooster": "Hahn",
              "dog": "Hund",
              "pig": "Schwein"
            }
          }
        ]
      },
      {
        "title": "Die Beziehungen der zwölf Tierkreiszeichen",
        "blocks": [
          {
            "p": "Für jedes Tier führt die Tabelle auf, mit welchen Tieren es welche Beziehung eingeht. Es sind nur die Paare aufgeführt, die dieser Dienst als Harmonien anerkennt; ein Tier, das in einer Zeile nicht erscheint, steht in keiner besonderen Beziehung zu ihr — es ist **neutral**."
          },
          {
            "table": {
              "caption": "Vier Arten von Beziehungen, von einem Tier aus gesehen",
              "head": [
                "Ihr Tier",
                "Sich anziehendes Paar (Sechs-Harmonie)",
                "Halb-Triade",
                "Stille Disharmonie (Zwietracht)",
                "Frontaler Zusammenstoß"
              ],
              "rows": [
                [
                  "Ratte (子)",
                  "Ochse",
                  "Affe · Drache",
                  "Ziege",
                  "Pferd"
                ],
                [
                  "Ochse (丑)",
                  "Ratte",
                  "Hahn",
                  "Pferd",
                  "Ziege"
                ],
                [
                  "Tiger (寅)",
                  "Schwein",
                  "Pferd",
                  "Hahn",
                  "Affe"
                ],
                [
                  "Hase (卯)",
                  "Hund",
                  "Schwein · Ziege",
                  "Affe",
                  "Hahn"
                ],
                [
                  "Drache (辰)",
                  "Hahn",
                  "Ratte",
                  "Schwein",
                  "Hund"
                ],
                [
                  "Schlange (巳)",
                  "Affe",
                  "Hahn",
                  "Hund",
                  "Schwein"
                ],
                [
                  "Pferd (午)",
                  "Ziege",
                  "Tiger · Hund",
                  "Ochse",
                  "Ratte"
                ],
                [
                  "Ziege (未)",
                  "Pferd",
                  "Hase",
                  "Ratte",
                  "Ochse"
                ],
                [
                  "Affe (申)",
                  "Schlange",
                  "Ratte",
                  "Hase",
                  "Tiger"
                ],
                [
                  "Hahn (酉)",
                  "Drache",
                  "Schlange · Ochse",
                  "Tiger",
                  "Hase"
                ],
                [
                  "Hund (戌)",
                  "Hase",
                  "Pferd",
                  "Schlange",
                  "Drache"
                ],
                [
                  "Schwein (亥)",
                  "Tiger",
                  "Hase",
                  "Drache",
                  "Schlange"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Wenn zwei Personen in der Tabelle aufeinandertreffen",
        "blocks": [
          {
            "p": "Die Tabelle zu lesen heißt, die beiden Tiere in einer Zeile zu finden. Hier einige Paare als Beispiele."
          },
          {
            "ul": [
              "**Ratte und Ochse** — eine Sechs-Harmonie. Sie braucht nur zwei Zeichen und ist daher die Harmonie, die in der Kompatibilität am häufigsten vorkommt, und eine gute.",
              "**Ratte und Drache** — eine Halb-Triade: zwei der drei Zeichen 申子辰, einschließlich des mittleren (子).",
              "**Ratte und Tiger** — nicht in der Tabelle, also neutral: weder Harmonie noch Zusammenstoß, nur die Ausgangslage.",
              "**Ratte und Ziege** — eine Zwietracht. Sie wirkt an der Oberfläche ruhig, aber die Verschiebung gilt als dauerhaft.",
              "**Tiger und Affe** — ein Zusammenstoß. Sie liegen einander direkt gegenüber und gelten als frontal kollidierend."
            ]
          }
        ]
      },
      {
        "title": "Wie viele Punkte jede Beziehung erhält",
        "blocks": [
          {
            "table": {
              "caption": "Der höchste Wert zuerst. Dies sind die Werte, die Inyeon-Link tatsächlich verwendet.",
              "head": [
                "Beziehung",
                "Punktzahl"
              ],
              "rows": [
                [
                  "Sechs-Harmonie",
                  "{scoreYukhap}"
                ],
                [
                  "Halb-Triade",
                  "{scoreBanhap}"
                ],
                [
                  "Gleicher Zweig",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Zwietracht",
                  "{scoreWonjin}"
                ],
                [
                  "Zusammenstoß",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Der gleiche Zweig (zwei Personen desselben Tieres) bedeutet Ähnlichkeit, nicht Anziehung, und liegt daher knapp über neutral. Ob Tierkreis- oder Tageszweig-Kompatibilität: Der Wert dieser Tabelle geht direkt in den Endwert ein."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Warum vollständige Triaden nicht in der Tabelle stehen",
        "blocks": [
          {
            "p": "Eine vollständige Triade (申子辰, 巳酉丑, 寅午戌, 亥卯未) braucht alle drei Zeichen. Legt man zwei Personen nebeneinander, ergeben sich nur zwei, sodass in der Kompatibilität keine vollständige Triade entstehen kann und nur Halb-Triaden vorkommen. Der Punktwert {scoreSamhap} der vollständigen Triade bleibt für den Fall erhalten, dass drei Zeichen innerhalb des eigenen Horoskops einer Person zusammenkommen."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 und 亥未 zählen nicht als Harmonien",
        "blocks": [
          {
            "p": "Manche Methoden zählen zwei beliebige Zeichen derselben Triadengruppe als Halb-Triade. Inyeon-Link tut das nicht: Wie die Spalte der Halb-Triade oben zeigt, werden nur Paare akzeptiert, die den **königlichen Zweig** in der Mitte der Gruppe enthalten (子, 午, 卯, 酉). Ein Paar ohne ihn hat kein Zentrum, um das sich die Formation sammeln könnte, und gilt daher als neutral."
          }
        ]
      },
      {
        "title": "Zwietracht und Zusammenstoß liegen nicht am Boden",
        "blocks": [
          {
            "p": "Würden nur Harmonien und Zusammenstöße gezählt, ginge jedes der sechs Zwietracht-Paare im Neutralen unter. Deshalb hat die Zwietracht einen eigenen Platz: höher als der frontale Zusammenstoß und niedriger als neutral, bei {scoreWonjin} Punkten."
          },
          {
            "p": "Auch ein Zusammenstoß behält {scoreChung} Punkte. In der traditionellen Myeongri-Lehre ist ein Zusammenstoß eine Kollision, nicht das Ende einer Beziehung. Ein Wert nahe null würde den Dienst dazu bringen, über zwei Menschen ein Urteil zu fällen; deshalb ist der Bereich breit genug gehalten, um den Unterschied zu zeigen, ohne ein Urteil auszusprechen."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Tierkreis",
    "title": "Warum berücksichtigt die Tierkreis-Kompatibilität den Jahrzweig?",
    "summary": "Der Tierkreis ist der irdische Zweig des Geburtsjahres. Dies erklärt, warum er aus dem saju-Jahrssäulen abgeleitet wird und nicht aus dem Kalenderjahr, und verdeutlicht die Bedeutung der Tierkreis-Kompatibilität.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Der Tierkreis ist der irdische Zweig des Geburtsjahres",
        "blocks": [
          {
            "p": "Saju besteht aus vier Säulen: Jahr, Monat, Tag und Stunde, wobei jede Säule einen himmlischen Stamm und einen irdischen Zweig enthält. Der **Jahrzweig** ist derjenige, der das Tier trägt, das wir als Tierkreiszeichen bezeichnen."
          },
          {
            "table": {
              "caption": "Die Zwölf irdischen Zweige und der Tierkreis",
              "head": [
                "Irdischer Zweig",
                "Tierkreis"
              ],
              "rows": [
                [
                  "子",
                  "Ratte"
                ],
                [
                  "丑",
                  "Ochse"
                ],
                [
                  "寅",
                  "Tiger"
                ],
                [
                  "卯",
                  "Hase"
                ],
                [
                  "辰",
                  "Drache"
                ],
                [
                  "巳",
                  "Schlange"
                ],
                [
                  "午",
                  "Pferd"
                ],
                [
                  "未",
                  "Schaf"
                ],
                [
                  "申",
                  "Affe"
                ],
                [
                  "酉",
                  "Hahn"
                ],
                [
                  "戌",
                  "Hund"
                ],
                [
                  "亥",
                  "Schwein"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Wir verwenden das Jahr des saju, nicht das Kalenderjahr",
        "blocks": [
          {
            "p": "Der Zeitpunkt, an dem sich der Tierkreis ändert, ist weder der 1. Januar des Sonnenkalenders noch das Mondneujahr. Der Standard für den Wechsel des Jahres im saju ist **Ipchun**. Daher können Personen, die im Januar oder frühen Februar geboren sind, ein anderes Tierkreisjahr haben als das im Kalender."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Der Grund, warum wir nicht direkt nach dem Tierkreis fragen",
        "blocks": [
          {
            "p": "Deshalb sammeln wir nur das Geburtsdatum, ohne nach dem Tierkreis auf dem Eingabebildschirm zu fragen. Wenn die saju-Engine den Jahrzweig berechnet, wird die Grenze von Ipchun automatisch angepasst. Wenn Sie es direkt auswählen, könnte jemand, der Anfang Februar geboren wurde, einen Tierkreis wählen, der nicht mit seinem tatsächlichen übereinstimmt."
          }
        ]
      },
      {
        "title": "Die Tierkreis-Kompatibilität berücksichtigt nur eine Beziehung",
        "blocks": [
          {
            "p": "Die Berechnung der Tierkreis-Kompatibilität ist einfach. Sie vergleicht die Jahrzweige von zwei Personen, um zu bestimmen, ob die Beziehung harmonisch, ein Konflikt oder eine stille Disharmonie ist, und verwendet diesen Wert unverändert. Da es nur einen Punkt gibt, ist es nicht notwendig, Gewichte zu verteilen."
          },
          {
            "p": "Die Werte für jede Beziehung sind alle in der [Tabelle der Zwölf Zweige Beziehungen](/guide/branches) aufgeführt. Die Kompatibilität der Tageszweige verwendet dieselbe Tabelle."
          }
        ]
      },
      {
        "title": "Der Grund für die Bestimmung des Gewichts",
        "blocks": [
          {
            "p": "Die Tierkreis-Kompatibilität macht {weightZodiac} des endgültigen Übereinstimmungswertes aus. Während die saju-Kompatibilität alle vier Säulen betrachtet, berücksichtigt der Tierkreis nur ein Zeichen, sodass sie nicht gleich gewichtet werden können."
          },
          {
            "p": "Es gibt jedoch zwei Gründe, warum es nicht ausgeschlossen wird."
          },
          {
            "ul": [
              "**Es ist das am intuitivsten verständliche Element**. Selbst ohne das Vokabular der Tradition zu kennen, macht 'der Tiger und der Affe stehen im Konflikt' Sinn.",
              "**Es ist die einzige Achse, die sich nicht ändert, selbst wenn die Geburtszeit unbekannt ist**. Wenn Sie die Zeit nicht kennen, fehlt die Stunden-Säule und die Stärke der fünf Elemente ändert sich, aber der Jahrzweig bleibt gleich."
            ]
          }
        ]
      },
      {
        "title": "Sie können die Tierkreis-Kompatibilität auch separat anzeigen",
        "blocks": [
          {
            "p": "Auf dem Ergebnisbildschirm zeigen wir die Werte für die saju-Kompatibilität und die Tierkreis-Kompatibilität separat an. Wenn nur der endgültige Übereinstimmungswert präsentiert wird, ist unklar, woher diese Zahl stammt. Wenn die beiden Werte erheblich unterschiedlich sind, ist das an sich bemerkenswert."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Zehn Götter",
    "title": "Zehn Götter und Ehepartnerposition",
    "summary": "Wir betrachten, was jeder Tagestamm füreinander durch die Zehn Götter ist. Wir erklären, warum direkter Reichtum und indirekter Reichtum unterschiedlich gelesen werden, obwohl beide Reichtum sind.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Der Tagestamm ist die Person selbst",
        "blocks": [
          {
            "p": "Unter den acht Zeichen des saju bezieht sich der **Tagestamm** (der himmlische Stamm des Geburtstags) auf die Person selbst. Die verbleibenden sieben Zeichen werden als die Umgebung gelesen, in der sich dieser Tagestamm befindet."
          },
          {
            "p": "Die **Zehn Götter** (十神) teilen ein, wie der Tagestamm andere Zeichen wahrnimmt, in zehn Kategorien. Was mich nährt, ist **Ressource**, was dasselbe wie ich ist, ist **Gleichgesinnter**, was ich produziere, ist **Ausgabe**, was ich kontrolliere, ist **Reichtum**, und was mich kontrolliert, ist **Autorität** — jede der fünf wird dann nach Polarität aufgeteilt, was zehn ergibt."
          }
        ]
      },
      {
        "title": "Was jeder Tagestamm füreinander ist",
        "blocks": [
          {
            "p": "Dies ist der erste Punkt in der Kompatibilität. Sobald bestimmt ist, wie A's Tagestamm B's Tagestamm wahrnimmt, wird auch B's Wahrnehmung von A bestimmt, sodass es **nur sechs Möglichkeiten** gibt."
          },
          {
            "table": {
              "caption": "In der Reihenfolge der höchsten Punktzahl",
              "head": [
                "Paar",
                "Yin/Yang",
                "Name",
                "Bedeutung"
              ],
              "rows": [
                [
                  "Direkter Reichtum ↔ Direkte Autorität",
                  "Gegensätzliche Polarität",
                  "Warmes Band (有情)",
                  "Dies ist das Paar, das traditionell als die Position des Ehepartners angesehen wird. Yin und Yang sind nicht übereinstimmend und ziehen sich gegenseitig an."
                ],
                [
                  "Verletzender Beamter ↔ Direkte Ressource",
                  "Gegensätzliche Polarität",
                  "Verletzender Beamter mit dem Siegel (傷官佩印)",
                  "Eine Seite umschließt die intensive Energie der anderen Seite."
                ],
                [
                  "Freund ↔ Freund",
                  "Gleiche Polarität",
                  "Gleichwertig",
                  "Sie ähneln sich und sind gleichwertig, drängen sich jedoch nicht gegenseitig."
                ],
                [
                  "Rivale ↔ Rivale",
                  "Gegensätzliche Polarität",
                  "Wettbewerb",
                  "Sie ziehen sich gegenseitig an, konkurrieren jedoch um dieselbe Position."
                ],
                [
                  "Indirekter Reichtum ↔ Indirekte Autorität",
                  "Gleiche Polarität",
                  "Kaltes Band (無情)",
                  "Die Stimulation ist groß, aber die Last ist ebenfalls schwer."
                ],
                [
                  "Essender Gott ↔ Indirekte Ressource",
                  "Gleiche Polarität",
                  "Der Eulenstern raubt das Essen (梟神奪食)",
                  "Die gegebene Energie wird vom Gegenüber genommen, was den Fluss blockiert."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin und Yang stehen an einem Scheideweg",
        "blocks": [
          {
            "p": "Die Seite, auf der Yin und Yang nicht übereinstimmen (Echter Reichtum, Echter Beamter, Echter Gefährte) ist emotional, während die gleiche Seite (Ressource, Beamter, Gefährte) unemotional ist, was das Prinzip ist, das das Richtige und die Seite der Zehn Götter unterscheidet."
          }
        ]
      },
      {
        "title": "Der Grund, warum man mit den Zehn Göttern und nicht mit den drei Elementen betrachtet",
        "blocks": [
          {
            "p": "Es gibt eine Methode, die Beziehung des Tagestamms mit den drei Elementen (gegenseitige Erzeugung, Gleichheit, gegenseitiges Überwinden) zu betrachten. Es ist einfach, aber **Yin und Yang verschwinden.** 甲 (yang Holz) und 乙 (yin Holz) werden zur gleichen 'Gleichheit' wie 甲 und 甲, und das gegenseitige Überwinden wird zu einem einzigen Punkt ohne Richtung oder Yin und Yang zusammengepresst."
          },
          {
            "p": "Die Ehepartnerposition muss im Hinblick auf die Zehn Götter bewertet werden. Wenn die von den fünf Elementen betrachteten Punkte und die von den Zehn Göttern betrachteten Punkte in einem Motor gemischt werden, gibt es zwei Standards für dieselben zwei Zeichen. Daher vereinheitlichen wir uns mit den Zehn Göttern."
          }
        ]
      },
      {
        "title": "Die Ehepartnerposition ist Echter Reichtum und Echter Beamter",
        "blocks": [
          {
            "p": "In der Tradition variiert, welcher der Zehn Götter für einen Ehepartner steht, je nach Geschlecht."
          },
          {
            "table": {
              "head": [
                "Geschlecht",
                "Ehepartnerposition",
                "Entsprechende Position"
              ],
              "rows": [
                [
                  "Männlich",
                  "Direkter Reichtum (正財)",
                  "Indirekter Reichtum (偏財)"
                ],
                [
                  "Weiblich",
                  "Direkte Autorität (正官)",
                  "Indirekte Autorität (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Selbst wenn sie dieselbe Ressource sind, wird nur der emotionale **Echte Reichtum** als Ehepartnerposition betrachtet, während die Ressource als die Art der Aktivität und des Reichtums gelesen wird. Daher zählen Echte Reichtum und Echter Beamter als 2 Punkte, während Ressource und Beamter als 1 Punkt zählen, und beide Richtungen werden summiert — wenn beide als Ehepartnerpositionen gesehen werden, ist es das Höchste."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn das Geschlecht nicht angegeben ist, dieses Element weglassen",
        "blocks": [
          {
            "p": "Wenn ein unentschiedenes Element auf 0 Punkte gesetzt wird, führt dies zu einer unfair niedrigen Punktzahl. Das verbleibende Gewicht nach dem Weglassen des Elements wird erneut normalisiert [(Element und Gewicht)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Wir zeigen auch die Form der Beziehung",
        "blocks": [
          {
            "p": "Neben der Punktzahl beschreiben wir **welche Form** das Paar der Tagesstämme auf dem Ergebnisbildschirm hat. Ob sie ähnliche Positionen sind, ob eine Seite die andere unterstützt oder ob eine Seite unterdrückt wird — wenn es eine unterstützende oder unterdrückende Beziehung ist, klären wir, welche Seite diese Position hält."
          },
          {
            "p": "Wenn nur eine Punktzahl präsentiert wird, bleibt die Frage 'und was jetzt'. Die Form ist keine Punktzahl, sondern etwas, das zu lesen ist, und selbst Paare mit niedrigen Punktzahlen haben etwas zu interpretieren."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Die fünf Elemente",
    "title": "Unterstützendes Element — Die Energie, die jetzt benötigt wird",
    "summary": "Wir betrachten die fünf Elemente nicht als 'haben sie zwei gewählt', sondern als 'hat der Gegenüber, was ich brauche'. Wir geben auch den Grenzwert an, der einen starken Tagesmeister von einem schwachen unterscheidet.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Ob die fünf Elemente 'ausgewogen' sind, ist keine Frage der Kompatibilität",
        "blocks": [
          {
            "p": "Es gibt eine Methode zur Messung, ob die fünf Energien gleichmäßig verteilt sind, indem die fünf Elemente der beiden Personen kombiniert werden. Die Frage der Kompatibilität ist jedoch nicht das. **Hat der Gegenüber, was ich brauche?**"
          },
          {
            "p": "Der Grad des Gleichgewichts ist symmetrisch, aber die Komplementarität ist von Natur aus asymmetrisch. Das liegt daran, dass das, was A braucht, anders ist als das, was B braucht. Daher messen wir jede Seite separat und bilden einen Durchschnitt — da es ein Durchschnitt ist, bleibt die Gesamtpunktzahl symmetrisch."
          }
        ]
      },
      {
        "title": "Unterstützendes Element — Reduzieren, wenn übermäßig, hinzufügen, wenn unzureichend",
        "blocks": [
          {
            "p": "Das unterstützende Element (用神) ist 'die Energie, die diese Person gerade braucht'. Es gibt mehrere Methoden, um es zu bestimmen (unterdrücken, unterstützen, Krankheit und Kommunikation), aber es kann in Regeln übersetzt werden, und die am weitesten verbreitete ist **unterdrücken (抑扶)**. Wenn der Tagesmeister stark ist, wird gesehen, dass die Energie zur Reduzierung benötigt wird, und wenn schwach, wird die Energie zum Hinzufügen benötigt."
          },
          {
            "table": {
              "head": [
                "Urteil",
                "Was wird benötigt",
                "Wie viel"
              ],
              "rows": [
                [
                  "Starker Tagesmeister (身强)",
                  "Reduzierende Energie — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Drei"
                ],
                [
                  "Schwacher Tagesmeister (身弱)",
                  "Hinzufügende Energie — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Zwei"
                ],
                [
                  "Ausgewogen (中和)",
                  "Kann nicht durch das unterstützende Element abgedeckt werden, daher ist es die dünnste Energie",
                  "Zwei"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Grenzwerte für Stärke und Schwäche",
        "blocks": [
          {
            "p": "Die Tagesstammseite ist **印星 und 比劫** — die Energie, die mich gebiert, und die Energie, die mir ähnlich ist. Da zwei von fünf, wenn die Energie vollständig ausgewogen ist, wird es {evenAllyRatio}. Ein Bereich wird über und unter diesem Wert festgelegt."
          },
          {
            "table": {
              "caption": "Der Anteil der Verbündeten (印星 + 比劫) an der Gesamtstärke",
              "head": [
                "Anteil",
                "Urteil"
              ],
              "rows": [
                [
                  "{strongThreshold} oder mehr",
                  "Starker Tagesmeister"
                ],
                [
                  "{weakThreshold} oder mehr und weniger als {strongThreshold}",
                  "Ausgewogen"
                ],
                [
                  "Weniger als {weakThreshold}",
                  "Schwacher Tagesmeister"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gleichgewicht ist ein 'weniger sicheres Urteil'",
        "blocks": [
          {
            "p": "Gleichgewicht bedeutet, dass es nicht durch das unterstützende Element abgedeckt werden kann. Zu diesem Zeitpunkt betrachten wir einfach die beiden dünnsten Energien als notwendig. Auf dem Ergebnisbildschirm wird es als 'derzeit in einer dünnen Position' vermerkt, anstatt als definitive Aussage."
          }
        ]
      },
      {
        "title": "Macht ist nicht die Anzahl der Zeichen",
        "blocks": [
          {
            "p": "Bei der Zählung der Macht der fünf Elemente zählen wir nicht einfach die acht Zeichen, wie sie erscheinen. Wir verwenden einen Wert, der die verborgenen himmlischen Stämme (地藏干) innerhalb der irdischen Zweige und die Jahreszeit der Energie des Monats (月令), in dem man geboren wurde, widerspiegelt."
          },
          {
            "p": "Wenn wir nur die Oberflächenzeichen zählen, übersehen wir die Tatsache, dass selbst zwei Zeichen von 木 je nach Jahreszeit völlig unterschiedliche Stärken haben können. Das 木 des Frühlings und das 木 des Herbstes, obwohl sie dasselbe Zeichen sind, haben unterschiedliche Kräfte."
          }
        ]
      },
      {
        "title": "Bewertung des Füllgrads",
        "blocks": [
          {
            "p": "Wir betrachten den Anteil meines unterstützenden Elements an der Kraft des Gegners. Wir verwenden diesen Anteil jedoch nicht direkt, sondern **teilen die Erwartung durch die Größe des unterstützenden Elements.** Wenn stark, ist das unterstützende Element drei (Erwartung 60%), und wenn schwach, ist es zwei (Erwartung 40%), sodass die direkte Verwendung des Anteils bedeuten würde, dass eine starke Person immer eine höhere Punktzahl erhält."
          },
          {
            "p": "Wenn auf das erwartete Niveau gefüllt, wird eine Punktzahl nahe 78 Punkten erreicht, und wenn viel mehr gefüllt, erreicht sie 100 Punkte, während sie, wenn sie erheblich fehlt, in Richtung 55 Punkte geht. Auch hier ist der Boden nicht auf 0 gesetzt."
          }
        ]
      },
      {
        "title": "Dies ist ein vorläufiges Urteil",
        "blocks": [
          {
            "p": "Die tatsächliche Saju-Analyse berücksichtigt die Formation und das saisonale Klima (die Wärme und Feuchtigkeit der Saison), um das unterstützende Element zu bestimmen, und die Schlussfolgerungen können je nach verwendeter Methode variieren. Inyeon-Link verwendet nur die unterstützenden Elemente, die durch **Machtwerte** gemessen werden können. Dies liegt am Prinzip, nur das zu verwenden, was in Regeln übersetzt werden kann, sodass dieselbe Eingabe immer dieselbe Antwort liefert."
          },
          {
            "p": "Stattdessen präsentiert der Ergebnisbildschirm auch die Stärken und Schwächen jeder Person zusammen mit der derzeit benötigten Energie als **Lesematerial**. Dies soll vermeiden, dass die Grundlage der Punktzahl verborgen wird."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Unsere Standards",
    "title": "Inyeon’s Match — Der Grund, warum keine Gesamtpunktzahl bereitgestellt wird",
    "summary": "Wir verwenden nur die Daten einer Person, während die Position des Gegners leer bleibt, und setzen alle möglichen Werte an dieser Stelle ein. Wir erklären den Grund, warum keine Gesamtpunktzahl zu dem auf diese Weise erhaltenen Typ angehängt wird.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Berechnungen erfolgen, während die Position des Gegners leer bleibt",
        "blocks": [
          {
            "p": "Kompatibilitätswerte werden durch das Abgleichen von zwei Personen berechnet. **Inyeon’s Match** verwendet nur die Daten einer Person, während die Position des Gegners leer bleibt, und testet alle möglichen Werte, die an dieser Stelle eingegeben werden könnten. Es ist wie das Rückwärtslaufen des Kompatibilitätsmotors."
          },
          {
            "p": "Daher ist es nicht notwendig, das Geburtsdatum des Gegners zu kennen. Wir können trotzdem sagen: 'Welches Match-Profil ist für mich geeignet?' über jemanden, den wir noch nicht getroffen haben."
          }
        ]
      },
      {
        "title": "Wir führen keine Millionen von Kombinationen durch",
        "blocks": [
          {
            "p": "Der Kompatibilitätswert in saju besteht aus vier Elementen, und **jedes Element überschneidet sich nicht in dem, was es untersucht.**"
          },
          {
            "table": {
              "head": [
                "Element",
                "Was ist die Achse der Untersuchung",
                "Anzahl der Fälle"
              ],
              "rows": [
                [
                  "Beziehung der Tagesstämme · Eheliche Natur",
                  "Die Tagesstämme beider Personen — himmlische Stämme",
                  "10"
                ],
                [
                  "Die fünf Elemente ergänzen sich",
                  "Mein unterstützendes Element und die fünf Elementkräfte des Gegners",
                  "5"
                ],
                [
                  "Beziehung der Tageszweige",
                  "die Tageszweige der beiden Personen",
                  "12"
                ],
                [
                  "Tierkreisbeziehung",
                  "die Jahrzweige der beiden Personen",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Da Werte nicht zwischen den Elementen ausgetauscht werden, **wird das Finden des höchsten Punktes für jeden Zweig den insgesamt höchsten Punkt ergeben**. Es ist nicht notwendig, alle Kombinationen von Geburtsdaten zu überprüfen — es reicht aus, die zehn himmlischen Stämme, zwölf irdischen Zweige und fünf Elemente festzulegen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Die gleichen Regeln gelten",
        "blocks": [
          {
            "p": "Die hier geschriebenen Werte stammen direkt aus dem Kompatibilitätsmotor. Da keine neuen Regeln erstellt wurden, wird der Typ, der hier oben erscheint, auch die höchste Punktzahl für dieses Element in der tatsächlichen Kompatibilität haben. Wenn die Kompatibilitätsregeln geändert werden, wird dieser Bildschirm ebenfalls angepasst."
          }
        ]
      },
      {
        "title": "Es wird keine Gesamtpunktzahl bereitgestellt",
        "blocks": [
          {
            "p": "Dies ist die wichtigste Entscheidung auf diesem Bildschirm. Das Sammeln der höchsten Punktzahlen für jeden Zweig mag scheinen, als würde es eine 'perfekte Übereinstimmung' ergeben, aber diese Person könnte **in Wirklichkeit nicht existieren.**"
          },
          {
            "p": "Bei realen Personen arbeiten der Tagesmeister und die fünf Elemente nicht separat. Eine Person mit 甲木 hat normalerweise auch eine starke 木-Energie. Diese Methode, die Zweige separat zu zählen, ignoriert diese Korrelation, sodass der Wert, der durch das Verbinden der höchsten Punktzahlen für jeden Zweig erhalten wird, eine Kombination ist, die in der Realität nicht existiert."
          },
          {
            "p": "Daher zeigt der Bildschirm nur **Elementpunktzahlen** an und bietet keine Gesamtpunktzahl an. Die Gesamtpunktzahl wird berechnet, indem das Geburtsdatum der anderen Person für [saju-Kompatibilität](/compatibility) eingegeben wird."
          }
        ]
      },
      {
        "title": "Wie man 'Übereinstimmungstypen' liest",
        "blocks": [
          {
            "p": "Das Ergebnis bedeutet: 'Wenn Sie eine Person dieses Typs treffen, wird dieses Element hoch punkten.' Es ist kein Kriterium zur Auswahl einer Person, sondern vielmehr eine Möglichkeit, es aus einer Perspektive des Selbstverständnisses zu lesen."
          },
          {
            "p": "Die Gründe, warum bestimmte Typen hoch punkteten, werden ebenfalls punktuell vermerkt — ob der Tagesmeister in einer günstigen Position ist oder ob diese Person die Energie besitzt, die ich derzeit benötige."
          }
        ]
      },
      {
        "title": "Bestätigungstool",
        "blocks": [
          {
            "p": "Sie könnten neugierig sein, ob die Person, die Sie im Kopf haben, diesem Typ entspricht. Indem Sie ihr Geburtsdatum in das Bestätigungstool auf dem Ergebnisbildschirm eingeben, werden Sie über ihren Tagesmeister, Tageszweig und Jahrzweig informiert. Die eingegebenen Werte werden zu diesem Zeitpunkt nicht gespeichert [(nicht gespeichert)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Zeit",
    "title": "Die Geburtszeit jeder Person wird einzeln korrigiert",
    "summary": "Die Kompatibilität berechnet die Zeiten der beiden Personen getrennt. Hier wird erklärt, wie die Korrektur gilt, wenn sich Geburtsorte und Epochen unterscheiden, und was sich ändert, wenn nur eine der beiden ihre Zeit nicht kennt.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Die Uhr und die Sonne stimmen nicht überein",
        "blocks": [
          {
            "p": "Im Saju wird die Geburtszeit nicht von der Uhr, sondern vom Stand der Sonne abgelesen. Ein ganzes Land hält sich jedoch an eine einheitliche Standardzeit, sodass sich die Uhr und die Sonne eines bestimmten Ortes voneinander entfernen."
          },
          {
            "p": "Koreas Standardzeit beruht auf 135° Ost, während Seoul bei etwa 127° Ost liegt. Die Sonne erreicht in Seoul ihren höchsten Stand um etwa **32 Minuten** später, als die Uhr anzeigt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 Minuten können die Stundensäule um einen Schritt verschieben",
        "blocks": [
          {
            "p": "Wer in Seoul um 11:40 Uhr nach der Uhr geboren wurde, wurde in wahrer Sonnenzeit um 11:08 Uhr geboren, was noch in die Pferd-Stunde (午, 11:00–13:00) fällt. Wer um 11:20 Uhr nach der Uhr geboren wurde, wurde um 10:48 Uhr geboren, was in die Schlange-Stunde (巳, 9:00–11:00) fällt. Die Korrektur gibt es für Menschen, die genau an einer solchen Grenze stehen."
          }
        ]
      },
      {
        "title": "Die Korrektur wird für jede Person einzeln angewendet",
        "blocks": [
          {
            "p": "Die Kompatibilität erstellt das Horoskop jeder Person für sich. Deshalb fragt der Eingabebildschirm den Geburtsort **für jede Person** ab. Wurde eine Person in Seoul und die andere im Ausland geboren, werden ihre Zeiten getrennt korrigiert, mit unterschiedlichen Längengraden und Zeitzonen."
          },
          {
            "p": "Die Städteliste umfasst derzeit {cityCount} Orte. Bei Ländern, deren Längengrad stark variiert, sind die Städte aufgeteilt, weil **15° Länge die Stundensäule um einen Schritt verschieben**."
          },
          {
            "p": "Wenn Sie nichts auswählen, wird Seoul verwendet. Wurde nur eine Person im Ausland geboren und beide bleiben auf Seoul eingestellt, ist nur die Stundensäule der im Ausland geborenen Person verschoben; die Werte der anderen Person sind nicht betroffen, weil die Korrektur personenweise angewendet wird."
          }
        ]
      },
      {
        "title": "Verschiedene Epochen verwendeten unterschiedliche Standardzeiten",
        "blocks": [
          {
            "p": "Zwei Personen unterschiedlichen Alters lebten unter der Standardzeit verschiedener Perioden. Deshalb genügt ein Längenunterschied allein nicht."
          },
          {
            "ul": [
              "**Vor 1912** — Korea hatte keine einheitliche Standardzeit (lokale mittlere Zeit).",
              "**1954–1961** — die Standardzeit war UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — die Sommerzeit war in Kraft."
            ]
          },
          {
            "p": "Inyeon-Link schreibt keinen Standardmeridian fest vor. Es schlägt die **IANA-Zeitzone** des Geburtsortes nach, um die zu diesem Zeitpunkt tatsächlich geltende Standardzeit zu ermitteln, sodass die jeweilige Epoche jeder Person berücksichtigt wird, auch wenn ihre Geburtsjahre verschieden sind."
          }
        ]
      },
      {
        "title": "Kurz nach Mitternacht wechselt der Tagestamm",
        "blocks": [
          {
            "p": "Die Korrektur beträgt −32 Minuten; wer nach der Uhr zwischen 00:00 und 00:32 Uhr geboren wurde, wurde in wahrer Sonnenzeit in der **23:00-Stunde des Vortages** geboren. Das Datum wird entsprechend zurückgesetzt."
          },
          {
            "p": "In der Kompatibilität ist das sehr wichtig. Wenn die Tagessäule um einen Tag zurückgeht, ändern sich sowohl der Tagestamm als auch der Tageszweig; daher werden die Beziehung der Tagestämme, der Ehe-Stern und die Beziehung der Tageszweige alle mit anderen Zeichen neu berechnet, und die Stärken der fünf Elemente verschieben sich mit."
          }
        ]
      },
      {
        "title": "Es ist in Ordnung, wenn nur eine Person ihre Zeit nicht kennt",
        "blocks": [
          {
            "p": "Die Geburtszeit ist optional, und die Kompatibilität wird auch berechnet, wenn nur eine der beiden Personen ihre nicht kennt. Nur die Person, die sie nicht kennt, wird ohne Stundensäule berechnet, und der Ergebnisbildschirm weist darauf hin. Die Werte der anderen Person bleiben unverändert."
          },
          {
            "p": "Keiner der vier Kompatibilitätspunkte verwendet die Stundensäule direkt, aber sie beeinflusst die Stärken der fünf Elemente; wenn Sie sie kennen, ist es daher genauer, sie anzugeben. Die Tierkreis-Kompatibilität ergibt mit oder ohne Zeit denselben Wert — [sie betrachtet nur den Jahreszweig](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Datenschutz",
    "title": "Wie wir vermeiden, die Angaben zweier Personen zu speichern",
    "summary": "Für die Kompatibilität müssen Sie auch das Geburtsdatum einer anderen Person eingeben. Hier wird technisch erklärt, was es bedeutet, dass die Eingaben keiner der beiden Personen irgendwo aufgezeichnet werden, und was ein Ergebnislink mit sich führt.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Sie geben die Informationen einer anderen Person ein",
        "blocks": [
          {
            "p": "Der Kompatibilitätsbildschirm nimmt Ihr Geburtsdatum und das der anderen Person gemeinsam entgegen. Das Geburtsdatum der anderen Person ist deren persönliche Information, daher legen wir gesondert dar, wie Inyeon-Link mit beiden umgeht."
          },
          {
            "p": "Es gibt kein Konto, und wir verlangen weder Namen noch E-Mail-Adresse oder Telefonnummer. Wir erhalten nur die beiden Geburtsdaten und optional Geburtszeit, Geburtsort und Geschlecht, und nichts davon bleibt nach Abschluss der Berechnung erhalten."
          },
          {
            "p": "Es gibt ein Feld für einen Anzeigenamen, der auf dem Ergebnisbildschirm erscheint, doch er dient nur der Anzeige und fließt nicht in die Berechnung ein. Sie müssen keinen echten Namen eingeben."
          }
        ]
      },
      {
        "title": "Ein Ergebnislink enthält beide Geburtsdaten",
        "blocks": [
          {
            "p": "Nach der Berechnung sieht die Adresse so aus."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Der Teil nach dem **#** enthält die Eingaben der beiden Personen. Er wird Fragment genannt, und nach dem Standardverhalten des Webs **sendet der Browser ihn nicht an den Server**. Er wurde dafür entworfen, auf eine Position innerhalb eines Dokuments zu zeigen, sodass der Server ihn nie zu sehen bekommt."
          },
          {
            "p": "Wenn Sie einen Ergebnislink öffnen, liest der Browser diesen Wert und fordert eine Berechnung an; der Server erhält die benötigten Werte, liefert die Antwort und vergisst sie wieder."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bevor Sie den Link an die andere Person senden",
        "blocks": [
          {
            "p": "Nicht auf einem Server gespeichert zu sein ist nicht dasselbe wie ein geheimer Link. Wer den Link erhält, sieht beide Geburtsdaten unverändert, und ein in einem Chat hinterlassener Link bleibt in diesem Chat, unabhängig von unserem Server. Bitte senden Sie ihn in dem Bewusstsein, dass er die Angaben der anderen Person enthält."
          }
        ]
      },
      {
        "title": "Warum nichts zurückbleibt, obwohl die Berechnung auf einem Server läuft",
        "blocks": [
          {
            "p": "Um ein Saju-Horoskop zu erstellen, brauchen wir eine Almanach-Tabelle, die zu groß ist, um sie an den Browser zu senden, daher läuft die Berechnung auf dem Server. Aber **sobald die Anfrage bearbeitet ist, werden die Werte nirgendwo sonst verwendet.** Es gibt keinen Code, der sie in eine Datenbank schreibt."
          },
          {
            "p": "Die einzige Aufzeichnung, die bleibt, ist ein Zähler, der verhindert, dass eine Person in kurzer Zeit zu viele Anfragen sendet. Er enthält kein Geburtsdatum und speichert die IP-Adresse nicht unverändert; er zählt einen einzigen Wert, der zusammen mit dem Datum gehasht wird, und dieser Wert ändert sich, wenn der Tag wechselt."
          }
        ]
      },
      {
        "title": "Worauf wir durch das Nichtspeichern verzichten",
        "blocks": [
          {
            "p": "Weil nichts gespeichert wird, haben wir auf einiges verzichtet."
          },
          {
            "ul": [
              "**Ein früheres Kompatibilitätsergebnis lässt sich nicht abrufen.** Sie müssen den Link aufbewahren, um es erneut zu sehen.",
              "**Dieselben zwei Personen werden jedes Mal neu berechnet.** Es gibt keinen Cache. Aber jede Regel ist deterministisch, sodass [dieselbe Eingabe immer denselben Wert ergibt](/guide/how-compatibility).",
              "**Beim Neuladen kehrt die Werbeschranke zurück.** Es gibt keinen Ort, an dem festgehalten wird, dass Sie sie schon gesehen haben."
            ]
          }
        ]
      },
      {
        "title": "Wenn Sie einen Bericht kaufen",
        "blocks": [
          {
            "p": "Wenn Sie einen Bericht kaufen, wird zu diesem Zeitpunkt ein Transaktionsdatensatz gespeichert: Für Zahlungsbelege gilt eine gesetzliche Aufbewahrungsfrist, und ohne Bestellverlauf kann keine Rückerstattung bearbeitet werden. Auch dann **werden die beiden Geburtsdaten nicht an die Bestellung angehängt**; sie werden nach der Zahlungsbestätigung beim Erstellen des PDFs erneut abgefragt und nur in diesem Moment verwendet."
          },
          {
            "p": "Einzelheiten finden Sie in der [Datenschutzerklärung](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bezahlte Produkte",
    "title": "Was ist im kostenpflichtigen Bericht enthalten?",
    "summary": "Dies erklärt, was dem PDF hinzugefügt wurde, während der Bildschirm unverändert bleibt, Punkt für Punkt. Werte und Inhalte werden aus den tatsächlichen Produkteinstellungen gelesen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Der Bildschirm bleibt unverändert, nur dem PDF hinzugefügt",
        "blocks": [
          {
            "p": "Kompatibilitätsberechnungen und Ergebnisanfragen sind **kostenlos**. Übereinstimmungsraten, Punktzahlen und Gewichte, die ursprünglichen saju-Diagramme beider Personen und die Form der Beziehung können alle auf dem Bildschirm angezeigt werden. Nichts wurde vom Bildschirm entfernt, während der kostenpflichtige Bericht erstellt wurde."
          },
          {
            "p": "Der Zweck des Berichts besteht darin, **Ebenen hinzuzufügen, die nicht auf dem Bildschirm sind**. Und diese Ebene ist nicht erfunden; sie besteht aus Werten, die bereits während des Bewertungsprozesses berechnet wurden, aber nicht auf dem Bildschirm verwendet wurden."
          }
        ]
      },
      {
        "title": "Saju-Kompatibilitätsbericht PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Inlandszahlung {priceGunghapDomestic} (inklusive MwSt.), internationale Zahlung {priceGunghapGlobal}. A4 {pagesGunghap} Seiten."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Seiten 1-3 sind organisiert, um das, was auf dem Bildschirm ist, zu behalten** und **ab Seite 4 handelt es sich um Inhalte, die nicht auf dem Bildschirm sind**. Unten wird erklärt, warum bestimmte Dinge nicht auf dem Bildschirm angezeigt wurden."
          }
        ]
      },
      {
        "title": "Seite 4 — Die Richtung der beiden Energien",
        "blocks": [
          {
            "p": "Die Elemente der fünf Elemente auf dem Bildschirm werden als eine einzige Punktzahl präsentiert. Diese einzelne Punktzahl ist jedoch der **Durchschnitt der beiden Richtungen** — sie misst, wie sehr der andere mich erfüllt und wie sehr ich den anderen erfülle, und mittelt diese Werte."
          },
          {
            "p": "Komplementarität ist von Natur aus **asymmetrisch**. Das liegt daran, dass die Energien, die ich brauche, und die Energien, die der andere braucht, unterschiedlich sind. Wenn man nur den Durchschnitt betrachtet, erscheinen eine Beziehung, in der eine Seite die andere erheblich erfüllt, und eine Beziehung, in der sich beide gegenseitig gleichmäßig erfüllen, als dieselbe Zahl. Der Bericht trennt diese beiden."
          },
          {
            "p": "Ebenfalls in demselben Abschnitt enthalten ist das **Beziehungsschema der vier Säulen**. Das einzige, das in die Übereinstimmungsrate einfließt, ist der Tagezweig (日支) — da es sich um die Ehepartnerposition handelt — aber die anderen Jahr-, Monat- und Stundenäste können ebenfalls mit demselben Beziehungsschema gelesen werden."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Die Punktzahlen in dieser Tabelle fließen nicht in die Übereinstimmungsrate ein",
        "blocks": [
          {
            "p": "Wenn sie einbezogen würden, würde sich die Gesamtpunktzahl ändern und nicht mit dem bereits gesendeten Ergebnislink übereinstimmen. Daher wird sie nur als Lesematerial einbezogen, und dieser Fakt wird unter der Tabelle vermerkt."
          }
        ]
      },
      {
        "title": "Seite 5 — Ein genauerer Blick auf das saju jeder Person",
        "blocks": [
          {
            "p": "Die Balken der fünf Elemente auf dem Bildschirm zeigen **wie viel vorhanden ist**. Der Bericht fügt hinzu, **ob der Geburtsmonat diese Energie unterstützt**. Selbst bei der gleichen Menge haben die starke Energie (旺) und die tote Energie (死) unterschiedliche Stärken."
          },
          {
            "p": "Sie können die Kräfte vor und nach der Multiplikation mit der Energie des Monats nebeneinander sehen, was zeigt, wie sehr die Saison sie angehoben hat. Das **Verbündetenverhältnis**, das zwischen einem starken Tagmeister und einem schwachen Tagmeister unterscheidet, wird ebenfalls vermerkt — der Bildschirm zeigt nur das Urteil, aber der Bericht zeigt, wo dieses Urteil gefällt wurde."
          }
        ]
      },
      {
        "title": "Seite 6 — Was die vier Säulen der anderen Person für mich bedeuten",
        "blocks": [
          {
            "p": "Die Übereinstimmungsrate vergleicht nur die **Tagestämme** beider Personen. Die verbleibenden drei Säulen der anderen Person werden jedoch auch durch die Zehn Götter nach denselben Regeln bestimmt. Während Sie verstehen können, **was diese Person für mich bedeutet**, wenn Sie nur den Tagestamm betrachten, können Sie nicht wissen, **was die Position dieser Person für mich bedeutet.**"
          },
          {
            "p": "Da es Richtungen gibt, werden beide Seiten separat dargestellt. Was ich sehe und was der andere sieht, ist unterschiedlich."
          }
        ]
      },
      {
        "title": "Seite 7 — Wie dieses saju berechnet wurde",
        "blocks": [
          {
            "p": "Es wird angegeben, wie sehr die Geburtszeit auf die wahre Solarzeit angepasst wurde, ob die Korrektur das Datum geändert hat und welche Sonnen- und Monddaten zum Zeitpunkt der Erstellung des saju verwendet wurden. Das Konzept wird im Dokument [Anpassung der Geburtszeit an die wahre Solarzeit](/guide/true-solar-time) erklärt, aber **der Wert, um wie viele Minuten in Ihrem Fall angepasst wurde**, variiert von Person zu Person, daher ist er nur im Bericht enthalten."
          }
        ]
      },
      {
        "title": "Inyeon-Match-Profilbericht PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Inlandszahlung {priceAffinityDomestic} (inklusive MwSt.), internationale Zahlung {priceAffinityGlobal}. A4 {pagesAffinity} Seiten."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Dieser Abschnitt ist die **Gesamt-Rangliste**. Der Bildschirm zeigt nur die Sets, die gut übereinstimmen, aber der Bericht rangiert alle zehn himmlischen Stämme und die zwölf irdischen Zweige **vollständig**. Wenn Sie nur die obersten Sets betrachten, wissen Sie nicht, 'wer als nächstes kommt' und 'welches am wenigsten kompatibel ist'."
          }
        ]
      },
      {
        "title": "Wichtige Informationen vor dem Kauf",
        "blocks": [
          {
            "p": "**Der Server speichert keine Dateien.** Sobald die Zahlung genehmigt ist, wird das Dokument sofort erstellt und gesendet, ohne dass etwas auf dem Server bleibt. Das Prinzip dieses Dienstes, Eingabewerte nicht zu speichern, wird auch im kostenpflichtigen Ablauf beibehalten."
          },
          {
            "p": "Bitte **speichern Sie die Datei sofort nach der Zahlung.** Sie können dieselbe Bestellung bis zu fünf Mal erhalten, aber wenn Sie den Ergebnisscreen verlassen und die Eingabewerte verschwinden, können Sie sie nicht erneut erstellen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Berichte sind auch Referenzmaterialien",
        "blocks": [
          {
            "p": "Nur weil die Länge zugenommen hat, bedeutet das nicht, dass die Schlussfolgerung sicherer ist. Was der Bericht mehr enthält, ist **die Grundlage derselben Berechnung**, nicht eine stärkere Behauptung. Schicksalslesung ist ein Bereich, in dem die Schlussfolgerungen je nach Praktiker variieren können, und dieser Dienst berechnet nur, was in Regeln übersetzt werden kann."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Hinweis",
    "title": "Ankündigungen",
    "summary": "Dies ist ein Ort, um Änderungen zu informieren, die die Nutzung betreffen.",
    "backLabel": "Zurück zur Startseite",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Anfragen",
    "summary": "Dies ist der Kanal für Anfragen zu Nutzung, Rückerstattungen, Anfragen zu persönlichen Informationen und Fehlerberichten sowie für Geschäftsinformationen.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "title": "Kontakt per E-Mail",
        "blocks": [
          {
            "p": "Bitte senden Sie Anfragen an **{email}**. Wir werden innerhalb von 2 Werktagen antworten. Für Anfragen zu Zahlungen und Rückerstattungen geben Sie bitte **die Bestellnummer oder die E-Mail-Adresse, die für die Zahlung verwendet wurde**, für eine schnellere Bestätigung an."
          },
          {
            "p": "Telefonanfragen können unter {customerCenter} getätigt werden."
          }
        ]
      },
      {
        "title": "Was kann über diesen Kanal gesendet werden?",
        "blocks": [
          {
            "ul": [
              "**Zahlung und Rückerstattung** — Wenn das Dokument nicht erstellt wurde oder der Zahlungsbetrag von der Bestellung abweicht, wird eine vollständige Rückerstattung gewährt. Die Bedingungen finden Sie in der [Rückerstattungsrichtlinie](/refund-policy).",
              "**Persönliche Informationen** — Wir akzeptieren Anfragen zur Einsichtnahme, Korrektur und Löschung. Die Bearbeitungsrichtlinie finden Sie in der [Datenschutzrichtlinie](/privacy).",
              "**Berechnungsfehlerbericht** — Wenn das ursprüngliche saju-Diagramm oder die Punktzahl seltsam erscheint, lassen Sie es uns bitte wissen. Wenn Sie angeben, wann Sie das Datum und die Uhrzeit eingegeben haben, können wir mit denselben Werten neu berechnen."
            ]
          }
        ]
      },
      {
        "title": "Geschäftsinformationen",
        "blocks": [
          {
            "ul": [
              "**Firmenname** — {companyName}",
              "**Vertreter** — {representative}",
              "**Handelsregisternummer** — {businessNumber}",
              "**Fernabsatzhandelsregisternummer** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Kundenservice** — {customerCenter}",
              "**E-Mail** — {email}",
              "**Beauftragter für den Datenschutz** — {privacyOfficer}",
              "**Hosting-Anbieter** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sie müssen Ihr Geburtsdatum und Ihre Geburtszeit nicht in der Anfrage-E-Mail angeben. Wir speichern keine Eingaben, daher können wir sie nicht abrufen, und die Bestellnummer reicht zur Bestätigung aus. Bitte fügen Sie sie nur hinzu, wenn es für einen Berechnungsfehlerbericht notwendig ist."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const DE_NOTICES = {
  "kindLabels": {
    "service": "Dienst",
    "product": "Berichte",
    "engine": "Berechnung",
    "support": "Unterstützung"
  },
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen sind nicht aufgeführt: Was hier erscheint, ist das, was Sie wissen müssen.",
  "empty": {
    "title": "Noch keine Mitteilungen",
    "body": "Wenn sich etwas ändert, wird es hier erscheinen."
  },
  "effective": "Tritt in Kraft am {date}",
  "pager": {
    "label": "Mitteilungsseiten",
    "newer": "← Neuer",
    "older": "Älter →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Kontakt- und Über-Seiten sind jetzt geöffnet",
      "body": [
        "Fragen, Rückerstattungen, Datenschutzanfragen und Berichte über Berechnungsfehler haben jetzt einen Ort — siehe die Kontaktseite im Footer.",
        "Wenn etwas falsch berechnet aussieht, geben Sie bitte die Geburtsdetails an, die dazu geführt haben. Wir speichern nicht, was Sie eingeben, daher können wir ohne diese Informationen die Lesung nicht reproduzieren."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Berichte werden in Englisch für Arabisch und Khmer ausgegeben",
      "body": [
        "Wenn Sie auf Arabisch oder Khmer lesen, wird der PDF-Bericht, den Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente layoutet, kann derzeit keine Absätze in diesen Schriften setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Bericht gedruckt.",
        "Die gleiche Notiz erscheint vor der Zahlung. Wenn das Tool diese Schriften unterstützt, werden wir das hier mitteilen."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Jede Lesung trägt die Version der verwendeten Regeln",
      "body": [
        "Jede Lesung und jeder Bericht trägt das Regelwerk, das zu ihrer Erstellung verwendet wurde (zum Beispiel inyeonlink-match-v10). Die gleiche Eingabe im gleichen Regelwerk ergibt immer die gleichen Zahlen.",
        "Wenn wir die Interpretationsregeln so ändern, dass sich ein Ergebnis ändern kann, veröffentlichen wir das hier zuerst, mit dem Datum, an dem es in Kraft tritt — denn ein Ergebnislink, den Sie bereits haben, würde dann anders gelesen werden.",
        "Das aktuelle Regelwerk ist v10. Zahlungen sind noch nicht geöffnet."
      ]
    }
  }
} satisfies NoticeCopy;
