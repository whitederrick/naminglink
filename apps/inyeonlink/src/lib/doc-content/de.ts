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
            "p": "Das Lesen auf dem Bildschirm ist **kostenlos und benötigt kein Konto.** Die kostenpflichtigen Artikel sind PDF-Berichte, die Zahlen enthalten, die der Bildschirm niemals anzeigt — Elementstärken, Zehn-Götter-Paarungen und die Beziehungen über alle vier Säulen."
          }
        ]
      },
      {
        "title": "Was wir berechnen",
        "blocks": [
          {
            "p": "Die Horoskope werden aus dem **koreanischen lunisolaren Almanach** erstellt, und die Geburtszeit wird auf **wahre Solarzeit** für den Geburtsort korrigiert — die gleiche Uhrzeit bedeutet eine andere Sonnenposition, je nachdem, wo Sie geboren wurden."
          },
          {
            "p": "Die Werte stammen nur aus festen Regeln. Traditionelle Konzepte — zehn Götter, Zweigbeziehungen, das unterstützende Element — werden als Regeln ausgedrückt, sodass **die gleiche Eingabe immer das gleiche Ergebnis liefert.** Wenn sich eine Regel ändert, führen wir einen Regressionstest durch, um sicherzustellen, dass ältere Lesungen nicht verschoben wurden."
          },
          {
            "p": "**Es ist keine KI beteiligt.** Jeder Satz auf dem Bildschirm ist fester Text, der an ein berechnetes Ergebnis angehängt ist."
          }
        ]
      },
      {
        "title": "Was wir nicht behaupten werden",
        "blocks": [
          {
            "ul": [
              "**Wir sagen keine Vorhersagen.** Nichts hier sagt Ihnen, dass Sie jemandem nachjagen oder ihn meiden sollen. Es ist ein Verweis, der aus einer Tradition gezogen wurde.",
              "**Wir speichern nicht, was Sie eingeben.** Geburtsdetails werden nur für den Moment der Berechnung verwendet und niemals aufgeschrieben; Ergebnislinks leben im Teil der URL, den ein Browser nicht an einen Server sendet.",
              "**Ein Wert ist kein Urteil über eine Person.** Eine niedrige Zahl macht eine Beziehung nicht ungültig."
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
    "summary": "Inyeon-Link offenbart alle Regeln, die es verwendet. Sie können die Elemente und deren Gewichtungen, die Werte aus der Tabelle der Beziehungen der Erdzweige und die Schwellenwerte, die zwischen einem starken Tagmeister und einem schwachen Tagmeister unterscheiden, überprüfen — Sie können sehen, woher die Zahlen auf dem Bildschirm stammen.",
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
            "p": "Die Übereinstimmungsrate stammt aus zwei Zweigen. **Saju-Kompatibilität** betrachtet das gesamte ursprüngliche Saju-Horoskop beider Personen, während **Tierkreis-Kompatibilität** nur einen Erdzweig aus dem Geburtsjahr berücksichtigt. Der endgültige Wert wird durch gewichtetes Mittel der beiden erhalten."
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
            "p": "Die Saju-Seite ist viel schwerer, da die Menge an verwendeten Informationen unterschiedlich ist. Saju berücksichtigt alle vier Säulen, während der Tierkreis nur einen Charakter betrachtet. Der Tierkreis wird jedoch aus zwei Gründen nicht ausgeschlossen — er ist das am intuitivsten verständliche Element und es ist die **einzige Achse, deren Wert selbst ohne Kenntnis der Geburtszeit nicht schwankt**."
          }
        ]
      },
      {
        "title": "Die vier Elemente der Saju-Kompatibilität",
        "blocks": [
          {
            "p": "Die Saju-Seite wird weiter in vier unterteilt. Jedes Element wird ausgewählt, um sicherzustellen, dass das, was sie betrachten, sich nicht überschneidet."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju besteht aus acht Zeichen, die durch die himmlischen Stämme und die irdischen Zweige des Jahres, Monats, Tages und der Stunde der Geburt gebildet werden. Der Tagestamm und der Tageszweig, die unten erwähnt werden, sind die beiden Zeichen in der Tagsäule.",
            "labels": {
              "year": "Jahressäule",
              "yearNote": "Wurzel · Tierkreis",
              "month": "Monatssäule",
              "monthNote": "Jahreszeit · Kraft",
              "day": "Tagsäule",
              "dayNote": "Ich · Ehepartnerpalast",
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
                "Artikel",
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
            "p": "Der Tageszweig wird gelesen, weil die Tradition ihn als **Ehepalast** betrachtet. Von den vier Säulen ist er derjenige, der auf den Partner zeigt, was ihn zum ersten Punkt macht, an dem die Kompatibilität betrachtet wird."
          }
        ]
      },
      {
        "title": "Wenn das Geschlecht nicht offengelegt wird, wird das Eheelement weggelassen",
        "blocks": [
          {
            "p": "Das Eheelement erfordert Kenntnisse über das Geschlecht zur Berechnung. Die Tradition liest die Position, die auf einen Ehepartner zeigt, unterschiedlich je nach Geschlecht. Wenn nicht offengelegt, wird dieser Punkt **ausgeschlossen** und die Gewichte der verbleibenden drei Punkte werden neu normalisiert."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Es wird nicht als 0 Punkte behandelt",
        "blocks": [
          {
            "p": "Wenn fehlende Positionen als 0 Punkte behandelt werden, wird die Punktzahl unfairerweise gesenkt, nur weil das Geschlecht nicht offengelegt wurde. Die Neu-Normalisierung der Gewichte verhindert dieses Problem."
          }
        ]
      },
      {
        "title": "Berechnungen können ohne Kenntnis der Geburtszeit durchgeführt werden",
        "blocks": [
          {
            "p": "Die Geburtszeit wird verwendet, um die Stunden-Säule zu bestimmen. Wenn unbekannt, werden die Berechnungen ohne die Stunden-Säule durchgeführt, und dies wird auf dem Ergebnisbildschirm angezeigt. Da es unter den vier Kompatibilitätsgegenständen keinen direkten Eingabepunkt für die Stunden-Säule gibt, werden die Werte nicht signifikant schwanken, aber es beeinflusst das Gleichgewicht der **fünf Elemente**."
          },
          {
            "p": "Wenn Sie die Zeit kennen, wählen Sie bitte auch den Geburtsort aus. Wenn die Standardzeit von der tatsächlichen solarposition abweicht, kann die Verwendung dieser Zeit die Stunden-Säule falsch ausrichten [(Korrektur der wahren Solarzeit)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Die gleiche Eingabe ergibt immer den gleichen Wert",
        "blocks": [
          {
            "p": "Alle Punktzahlen werden durch Regeln bestimmt. Es wird keine künstliche Intelligenz verwendet, noch werden Zufallszahlen eingesetzt. Daher wird die Eingabe der gleichen beiden Geburtsdaten mehrfach nicht zu unterschiedlichen Ergebnissen führen. Als ein Dienst, der keine Daten speichert, können frühere Ergebnisse nicht abgerufen werden, aber **Determinismus** kompensiert dies."
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
    "title": "Zwölf Erdzweige — Kombination, Zusammenstoß, Unstimmigkeit",
    "summary": "Dies ist eine Beziehungstabelle, die sowohl für die Kompatibilität der Tageszweige als auch für die Tierkreis-Kompatibilität verwendet wird. Sie legt vollständig offen, was jede Kombination, jeder Zusammenstoß und jede Unstimmigkeit bedeutet und deren jeweilige Punktzahlen.",
    "backLabel": "Berechnungsbasis",
    "sections": [
      {
        "title": "Die Erdzweige bestehen aus zwölf Zeichen",
        "blocks": [
          {
            "p": "Die zwölf Erdzweige (十二支) sind 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Die allgemein bekannten Tierkreiszeichen sind mit jedem dieser zwölf Zeichen verbunden."
          },
          {
            "figure": "branch-wheel",
            "caption": "Die Anordnung der zwölf Zeichen in einem Kreis bietet einen klaren Überblick über die Beziehungen. Ein Zusammenstoß sitzt immer direkt gegenüber, während ein **sechs-harmonisches Paar** und eine ruhige Unstimmigkeit näher benachbart sind. Diese Linien stammen direkt aus den Berechnungsregeln und sind nicht im Text geschrieben.",
            "labels": {
              "alt": "Ein Diagramm, das die zwölf Erdzweige in einem Kreis anordnet, mit Linien, die sechs-harmonische, Zusammenstoß und Unstimmigkeit verbinden.",
              "yukhap": "Sechs-Harmonie",
              "chung": "Zusammenstoß",
              "wonjin": "Unstimmigkeit",
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
          },
          {
            "p": "In saju hat jede der vier Säulen einen irdischen Zweig. Inyeon-Link verwendet den **Tag-Zweig** (den Ehepalast) und den **Jahres-Zweig** (das Tierkreiszeichen) unter ihnen. Beide Positionen werden anhand der Beziehungstabelle unten bewertet."
          }
        ]
      },
      {
        "title": "Gesamte Beziehungstabelle",
        "blocks": [
          {
            "table": {
              "caption": "Sortiert nach höchster Punktzahl. Dies sind die Werte, die tatsächlich von Inyeon-Link verwendet werden.",
              "head": [
                "Beziehung",
                "Entsprechendes Paar",
                "Bedeutung",
                "Punktzahl"
              ],
              "rows": [
                [
                  "Kombination (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Wenn alle drei Zeichen zusammenkommen, bilden sie eine vollständige elementare Formation — ein **guk** (局). Dies wird als die stärkste Kombination angesehen.",
                  "{scoreSamhap}"
                ],
                [
                  "Sechs-Harmonie (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Paare, die sich gegenseitig anziehen. Dies ist die häufigste Kombination in der Kompatibilität, da sie nur aus zwei Zeichen besteht.",
                  "{scoreYukhap}"
                ],
                [
                  "Halb-Triad (半合)",
                  "Zwei Zeichen, die einen königlichen Zweig (王地) aus der Triade (子·酉·午·卯) enthalten",
                  "Eine halbe Kombination, die das Zeichen in der Mitte der Formation enthält. Sie kann mit nur zwei Zeichen keine vollständige Kombination bilden, was sie niedriger als eine vollständige Triade macht.",
                  "{scoreBanhap}"
                ],
                [
                  "Gleicher irdischer Zweig",
                  "子子 · 丑丑 …",
                  "Zeichen, die gleich sind. Dies bedeutet, dass sie einander ähneln, aber es impliziert keine Anziehung, daher wird es in der Mitte platziert.",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "Paare, die nirgendwo oben oder unten gehören",
                  "Eine Kombination ohne besondere Beziehung. Dies ist der Referenzpunkt.",
                  "{scoreNeutral}"
                ],
                [
                  "Stille Disharmonie (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Paare, die sich trotz Groll nicht trennen können. Sie erscheinen an der Oberfläche ruhig, werden aber als langlebig angesehen.",
                  "{scoreWonjin}"
                ],
                [
                  "Konflikt (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Paare, die direkt aufeinanderprallen. Dies sind sechs Paare, die sich gegenüberstehen.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vollständige Triaden erscheinen in diesem Dienst nicht",
        "blocks": [
          {
            "p": "Eine vollständige Triade erfordert drei Zeichen, um zu bilden. Die Kompatibilität wird jedoch durch das Abgleichen der irdischen Zweige von zwei Personen **eins nach dem anderen** strukturiert, was nur zu zwei Zeichen führt. Daher erscheint hier immer eine halbe Triade, und die vollen Triade {scoreSamhap} Punkte sind für die Untersuchung der Formationen innerhalb jedes saju reserviert."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Halb-Triaden müssen einen königlichen Zweig enthalten",
        "blocks": [
          {
            "p": "Es gibt auch eine Methode, die als halb-Triad zählt, wenn beide Zeichen zur gleichen Triade-Gruppe gehören. Dies kann zu hohen Punktzahlen führen, selbst für Kombinationen, die schwer als Triade zu bezeichnen sind, wie 申辰. Daher erkennt dieser Dienst eine halb-Triad nur für Paare an, die einen königlichen Zweig (王地) (子·酉·午·卯) enthalten, und Kombinationen wie 申辰·巳丑·寅戌·亥未 ohne einen königlichen Zweig werden nicht als Triaden gezählt."
          }
        ]
      },
      {
        "title": "Der Grund für die Trennung von stiller Disharmonie",
        "blocks": [
          {
            "p": "Die sechs Paare stiller Disharmonie werden in der Kompatibilität ebenso häufig wie Konflikte angesehen. Wenn wir Kombinationen als Paare und Konflikte zählen, würden diese sechs Paare alle unter neutralen {scoreNeutral} Punkten begraben werden, daher werden sie separat platziert."
          },
          {
            "p": "Während Konflikte offen und auffällig sind, ist stille Disharmonie subtil fehlangepasst. Daher wird sie mit einer Punktzahl von {scoreWonjin} platziert, die höher ist als die von Konflikten ({scoreChung}), aber definitiv niedriger als neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Punktzahlen werden auch Konflikten zugewiesen",
        "blocks": [
          {
            "p": "Die niedrigste Konfliktpunktzahl beträgt {scoreChung}. Die Absicht ist nicht, einen Wert nahe 0 zuzuweisen. In der Tradition ist ein Konflikt kein 'Ende', sondern eine 'Kollision', und eine niedrige Punktzahl würde implizieren, dass der Dienst eine definitive Aussage über die Beziehung trifft."
          },
          {
            "p": "Mit einem Minimum von {scoreChung} und einem Maximum von {scoreSamhap} ist der Bereich klar, aber es zieht kein definitives Fazit."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Tierkreis",
    "title": "Warum berücksichtigt die Tierkreis-Kompatibilität den Jahrzweig?",
    "summary": "Der Tierkreis ist der irdische Zweig des Geburtsjahres. Dies erklärt, warum er aus dem saju Jahrssäule abgeleitet wird und nicht aus dem Kalenderjahr, und verdeutlicht die Bedeutung der Tierkreis-Kompatibilität.",
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
            "p": "Der Punkt, an dem sich der Tierkreis ändert, ist weder der 1. Januar des Sonnenkalenders noch das Mondneujahr. Der Standard für den Wechsel des Jahres im saju ist **Ipchun**. Daher können Personen, die im Januar oder frühen Februar geboren sind, ein anderes Tierkreisjahr haben als das im Kalender."
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
            "p": "Die Berechnung der Tierkreis-Kompatibilität ist einfach. Sie vergleicht die Jahrzweige von zwei Personen, um festzustellen, ob die Beziehung harmonisch, ein Konflikt oder eine stille Disharmonie ist, und verwendet diesen Wert unverändert. Da es nur einen Punkt gibt, ist es nicht notwendig, Gewichte zu verteilen."
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
            "p": "Die Tierkreis-Kompatibilität macht {weightZodiac} des endgültigen Übereinstimmungswertes aus. Während die saju-Kompatibilität alle vier Säulen betrachtet, berücksichtigt der Tierkreis nur ein Zeichen, daher können sie nicht gleich gewichtet werden."
          },
          {
            "p": "Es gibt jedoch zwei Gründe, warum es nicht ausgeschlossen wird."
          },
          {
            "ul": [
              "**Es ist das am intuitivsten verständliche Element**. Selbst ohne das Vokabular der Tradition zu kennen, macht 'der Tiger und der Affe stehen im Konflikt' Sinn.",
              "**Es ist die einzige Achse, die sich nicht ändert, selbst wenn die Geburtszeit unbekannt ist**. Wenn Sie die Zeit nicht wissen, fehlt die Stunden-Säule und die Stärke der fünf Elemente ändert sich, aber der Jahrzweig bleibt gleich."
            ]
          }
        ]
      },
      {
        "title": "Sie können die Tierkreis-Kompatibilität auch separat anzeigen",
        "blocks": [
          {
            "p": "Auf dem Ergebnisbildschirm zeigen wir die Werte für sowohl die saju-Kompatibilität als auch die Tierkreis-Kompatibilität separat an. Wenn nur der endgültige Übereinstimmungswert präsentiert wird, ist unklar, woher diese Zahl stammt. Wenn die beiden Werte erheblich unterschiedlich sind, ist das an sich bemerkenswert."
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
            "p": "**Die Zehn Götter** (十神) unterteilen, wie der Tagestamm andere Zeichen wahrnimmt, in zehn Kategorien. Was mich nährt, ist **Ressource**, was dasselbe wie ich ist, ist **Gleichgestellter**, was ich produziere, ist **Ausgabe**, was ich kontrolliere, ist **Reichtum**, und was mich kontrolliert, ist **Autorität** — jede der fünf wird dann nach Polarität aufgeteilt, was zehn ergibt."
          }
        ]
      },
      {
        "title": "Was der Tagestamm jeder Person füreinander ist",
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
                  "Dies ist das Paar, das traditionell als die Position des Ehepartners angesehen wird. Yin und Yang sind nicht übereinstimmend und ziehen sich an."
                ],
                [
                  "Verletzender Offizier ↔ Direkte Ressource",
                  "Gegensätzliche Polarität",
                  "Verletzender Offizier mit dem Siegel (傷官佩印)",
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
            "p": "Die Seite, auf der Yin und Yang nicht übereinstimmen (Ordentlicher Reichtum, Ordentlicher Offizier, Ordentlicher Begleiter) ist emotional, während die gleiche Seite (Ressource, Offizier, Begleiter) unemotional ist, was das Prinzip ist, das das Ordentliche und die Seite der Zehn Götter unterscheidet."
          }
        ]
      },
      {
        "title": "Der Grund, die Beziehung mit den Zehn Göttern und nicht mit den drei Elementen zu betrachten",
        "blocks": [
          {
            "p": "Es gibt eine Methode, die Beziehung des Tagestamms mit den drei Elementen (gegenseitige Erzeugung, Gleichheit, gegenseitiges Überwinden) zu betrachten. Es ist einfach, aber **Yin und Yang verschwinden.** 甲 (yang Holz) und 乙 (yin Holz) werden zur gleichen 'Gleichheit' wie 甲 und 甲, und gegenseitiges Überwinden wird zu einer einzigen Punktzahl ohne Richtung oder Yin und Yang zerdrückt."
          },
          {
            "p": "Die Ehepartnerposition muss im Hinblick auf die Zehn Götter bewertet werden. Wenn die von den fünf Elementen betrachteten Punkte und die von den Zehn Göttern betrachteten Punkte in einem Motor gemischt werden, gibt es zwei Standards für dieselben zwei Zeichen. Daher vereinheitlichen wir uns mit den Zehn Göttern."
          }
        ]
      },
      {
        "title": "Die Ehepartnerposition ist Ordentlicher Reichtum und Ordentlicher Offizier",
        "blocks": [
          {
            "p": "In der Tradition unterscheidet sich, welcher der Zehn Götter für einen Ehepartner steht, je nach Geschlecht."
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
            "p": "Selbst wenn sie dieselbe Ressource sind, wird nur der emotionale **Echte Reichtum** als Ehepartnerposition betrachtet, während die Ressource als die Art der Aktivität und des Reichtums gelesen wird. Daher zählen Echte Reichtum und Echte Beamte als 2 Punkte, während Ressource und Beamte als 1 Punkt zählen, und beide Richtungen werden summiert — wenn beide als Ehepartnerpositionen gesehen werden, ist es das Höchste."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn das Geschlecht nicht offengelegt wird, dieses Element weglassen",
        "blocks": [
          {
            "p": "Wenn ein unentscheidbares Element auf 0 Punkte gesetzt wird, führt das zu einer unfair niedrigen Punktzahl. Das verbleibende Gewicht nach dem Weglassen des Elements wird erneut normalisiert [(Element und Gewicht)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Wir zeigen auch die Form der Beziehung",
        "blocks": [
          {
            "p": "Neben der Punktzahl beschreiben wir **welche Form** das Paar von Tagestämmen auf dem Ergebnisbildschirm hat. Ob sie ähnliche Positionen sind, ob eine Seite die andere unterstützt oder ob eine Seite unterdrückt wird — wenn es eine unterstützende oder unterdrückende Beziehung ist, klären wir, welche Seite diese Position hält."
          },
          {
            "p": "Wenn nur eine Punktzahl präsentiert wird, bleibt die Frage 'und was jetzt'. Die Form ist keine Punktzahl, sondern etwas, das gelesen werden kann, und selbst Paare mit niedrigen Punktzahlen haben etwas zu interpretieren."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Die fünf Elemente",
    "title": "Unterstützendes Element — Die Energie, die jetzt benötigt wird",
    "summary": "Wir betrachten die fünf Elemente nicht als 'haben sie zwei gewählt', sondern als 'hat der Partner, was ich brauche'. Wir geben auch den Grenzwert an, der einen starken Tagmeister von einem schwachen unterscheidet.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Ob die fünf Elemente 'ausgewogen' sind, ist keine Frage der Kompatibilität",
        "blocks": [
          {
            "p": "Es gibt eine Methode zur Messung, ob die fünf Energien gleichmäßig verteilt sind, indem die fünf Elemente der beiden Personen kombiniert werden. Die Frage der Kompatibilität ist jedoch nicht das. **Hat der Partner, was ich brauche?**"
          },
          {
            "p": "Der Grad der Balance ist symmetrisch, aber die Komplementarität ist von Natur aus asymmetrisch. Das liegt daran, dass das, was A braucht, anders ist als das, was B braucht. Daher messen wir jede Seite separat und bilden einen Durchschnitt — da es ein Durchschnitt ist, bleibt die Gesamtpunktzahl symmetrisch."
          }
        ]
      },
      {
        "title": "Unterstützendes Element — Reduzieren, wenn übermäßig, hinzufügen, wenn unzureichend",
        "blocks": [
          {
            "p": "Das unterstützende Element (用神) ist 'die Energie, die diese Person gerade braucht'. Es gibt mehrere Methoden, um es zu bestimmen (unterdrückend, unterstützend, Krankheit und Kommunikation), aber es kann in Regeln übersetzt werden, und die am weitesten verbreitete ist **unterdrückend (抑扶)**. Wenn der Tagmeister stark ist, wird gesehen, dass die Energie zur Reduzierung benötigt wird, und wenn schwach, wird die Energie zum Hinzufügen benötigt."
          },
          {
            "table": {
              "head": [
                "Urteil",
                "Was benötigt wird",
                "Wie viel"
              ],
              "rows": [
                [
                  "Starker Tagmeister (身强)",
                  "Reduzierende Energie — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Drei"
                ],
                [
                  "Schwacher Tagmeister (身弱)",
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
            "p": "Die Seite des Tagestamms ist **印星 und 比劫** — die Energie, die mich gebiert, und die Energie, die wie ich ist. Da zwei von fünf, wenn die Energie vollständig ausgewogen ist, wird es {evenAllyRatio}. Ein Bereich wird über und unter diesem Wert festgelegt."
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
                  "Starker Tagmeister"
                ],
                [
                  "{weakThreshold} oder mehr und weniger als {strongThreshold}",
                  "Ausgewogen"
                ],
                [
                  "Weniger als {weakThreshold}",
                  "Schwacher Tagmeister"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Balance ist ein 'weniger sicheres Urteil'",
        "blocks": [
          {
            "p": "Balance bedeutet, dass sie nicht durch das unterstützende Element abgedeckt werden kann. Zu diesem Zeitpunkt betrachten wir einfach die beiden dünnsten Energien als notwendig. Auf dem Ergebnisbildschirm wird es als 'derzeit in einer dünnen Position' vermerkt, anstatt als definitive Aussage."
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
            "p": "Wenn es auf das erwartete Niveau gefüllt ist, wird eine Punktzahl nahe 78 Punkten erreicht, und wenn es viel mehr gefüllt ist, erreicht es 100 Punkte, während es, wenn es erheblich fehlt, in Richtung 55 Punkte geht. Auch hier wird der Boden nicht auf 0 festgelegt."
          }
        ]
      },
      {
        "title": "Dies ist ein vorläufiges Urteil",
        "blocks": [
          {
            "p": "Die tatsächliche Saju-Analyse berücksichtigt die Formation und das saisonale Klima (die Wärme und Feuchtigkeit der Saison), um das unterstützende Element zu bestimmen, und die Schlussfolgerungen können je nach verwendeter Methode variieren. Inyeon-Link verwendet nur die unterstützenden Elemente, die durch **Machtwerte** gemessen werden können. Dies liegt am Prinzip, nur das zu verwenden, was in Regeln übersetzt werden kann, sodass die gleiche Eingabe immer die gleiche Antwort liefert."
          },
          {
            "p": "Stattdessen präsentiert der Ergebnisbildschirm auch die Stärken und Schwächen jeder Person zusammen mit der derzeit benötigten Energie als **Lesematerial**. Dies soll vermeiden, die Grundlage der Punktzahl zu verbergen."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Unsere Standards",
    "title": "Inyeon’s Match — Der Grund, warum keine Gesamtpunktzahl bereitgestellt wird",
    "summary": "Wir verwenden nur die Daten einer Person, während die Position des Gegners leer bleibt, und setzen alle möglichen Werte in diese Position ein. Wir erklären den Grund, warum keine Gesamtpunktzahl zu dem auf diese Weise erhaltenen Typ angehängt wird.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Berechnungen erfolgen, während die Position des Gegners leer bleibt",
        "blocks": [
          {
            "p": "Die Kompatibilitätswerte werden durch das Abgleichen von zwei Personen berechnet. **Inyeon’s Match** verwendet nur die Daten einer Person, während die Position des Gegners leer bleibt, und testet alle möglichen Werte, die in diese Position eingehen könnten. Es ist wie das Rückwärtslaufen des Kompatibilitätsmotors."
          },
          {
            "p": "Daher ist es nicht notwendig, das Geburtsdatum des Gegners zu kennen. Wir können trotzdem sagen: 'Welches Art von Match-Profil ist für mich geeignet?' über jemanden, den wir noch nicht getroffen haben."
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
                  "Komplement der fünf Elemente",
                  "Mein unterstützendes Element und die fünf Elementkräfte des Gegners",
                  "5"
                ],
                [
                  "Beziehung der Tageszweige",
                  "die Tageszweige der beiden Personen",
                  "12"
                ],
                [
                  "Beziehung der Tierkreiszeichen",
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
            "p": "Die hier geschriebenen Werte stammen direkt aus dem Kompatibilitätsmotor. Da keine neuen Regeln erstellt wurden, wird der Typ, der hier oben erscheint, auch die höchste Punktzahl für dieses Element in der tatsächlichen Kompatibilität haben. Wenn die Kompatibilitätsregeln geändert werden, wird dieser Bildschirm entsprechend angepasst."
          }
        ]
      },
      {
        "title": "Keine Gesamtpunktzahl wird bereitgestellt",
        "blocks": [
          {
            "p": "Dies ist die wichtigste Entscheidung auf diesem Bildschirm. Das Sammeln der höchsten Punktzahlen für jeden Zweig mag wie eine 'perfekte Übereinstimmung' erscheinen, aber diese Person könnte **tatsächlich nicht existieren.**"
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
            "p": "Das Ergebnis bedeutet: 'Wenn Sie eine Person dieses Typs treffen, wird dieses Element hoch punkten'. Es ist kein Kriterium zur Auswahl einer Person, sondern vielmehr eine Möglichkeit, es aus einer Perspektive des Selbstverständnisses zu lesen."
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
            "p": "Sie könnten neugierig sein, ob die Person, die Sie im Sinn haben, diesem Typ entspricht. Indem Sie ihr Geburtsdatum in das Bestätigungstool auf dem Ergebnisbildschirm eingeben, erfahren Sie ihren Tagesmeister, Tageszweig und Jahrzweig. Die eingegebenen Werte werden zu diesem Zeitpunkt nicht gespeichert [(nicht gespeichert)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Zeit",
    "title": "Geburtszeit in wahre Solarzeit umrechnen",
    "summary": "Die Standardzeit und die tatsächliche Position der Sonne unterscheiden sich. Die Zeit muss basierend auf dem Längengrad des Geburtsortes korrigiert werden, um zu erklären, warum der Zeitstamm genau ist.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Die Uhrzeit und die Zeit der Sonne sind unterschiedlich",
        "blocks": [
          {
            "p": "Der Zeitstamm (時柱) des saju wird durch die Position der Sonne bestimmt. Allerdings verwendet die Uhr, die wir sehen, eine einheitliche Standardzeit für das gesamte Land, was zu einer Diskrepanz mit der tatsächlichen Position der Sonne führt."
          },
          {
            "p": "Die Standardzeit in Korea basiert auf 135° östlicher Länge. Da der Längengrad von Seoul etwa 127° beträgt, ist er ungefähr 8° westlich, was dazu führt, dass die Sonne später ihren Zenit erreicht — wenn es nach der Uhr Mittag ist, hat die Sonne in Seoul ihren Zenit noch nicht erreicht. Dieser Unterschied beträgt etwa **32 Minuten**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 Minuten ändern den Zeitstamm um einen Slot",
        "blocks": [
          {
            "p": "Die Zeit im saju ist in zwei-Stunden-Einheiten unterteilt. Personen, die nahe der Grenze geboren wurden, haben ihren Zeitstamm durch einen Unterschied von 32 Minuten vollständig verändert — diese Korrektur ist notwendig für diejenigen, die genau an dieser Grenze liegen."
          }
        ]
      },
      {
        "title": "Warum wir nach dem Geburtsort fragen",
        "blocks": [
          {
            "p": "Wenn der Längengrad unterschiedlich ist, wird auch der Korrekturwert unterschiedlich sein. Die Anwendung der auf Seoul basierenden Korrektur auf jemanden, der im Ausland geboren wurde, führt zu einer erheblichen Diskrepanz im Zeitstamm. Daher erfordert der Eingabebildschirm, dass Sie Ihren Geburtsort auswählen, und die Berechnung basiert auf dem Längengrad und der Standardzeit dieser Stadt. Derzeit gibt es {cityCount} Orte in der Liste."
          },
          {
            "p": "In Regionen, in denen der Längengrad selbst innerhalb desselben Landes stark variiert (wie in den USA, Russland, Indonesien usw.), wurden die Städte unterteilt. **15° Längengrad entspricht einem Zeitstamm-Slot**."
          },
          {
            "p": "Wenn Sie nicht auswählen, wird die Berechnung auf Seoul basieren. Da die meisten Geburten im Inland stattfinden, verringert dies die Fehlerchance, aber wenn Sie im Ausland geboren wurden, wählen Sie bitte unbedingt aus."
          }
        ]
      },
      {
        "title": "Die Standardzeit hat sich in der Vergangenheit mehrmals geändert",
        "blocks": [
          {
            "p": "Es gibt einen Grund, warum die Korrektur nicht einfach als 'Längendifferenz ÷ 15° × 60 Minuten' berechnet werden kann. Die Standardzeit selbst hat sich in verschiedenen Epochen verändert."
          },
          {
            "table": {
              "caption": "Änderungen in Koreas Standardzeit — diejenigen, die in diesem Zeitraum geboren wurden, werden Abweichungen bei einfachen Berechnungen haben",
              "head": [
                "Zeitraum",
                "Was war anders"
              ],
              "rows": [
                [
                  "Vor 1912",
                  "Es gab keine Standardzeit (lokale Mittelzeit)"
                ],
                [
                  "1954 – 1961",
                  "Die Standardzeit war UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Die Sommerzeit wurde eingeführt"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link verwendet keinen festen Wert für den Standardmeridian, sondern berechnet die Standardzeit, die zu diesem Zeitpunkt tatsächlich verwendet wurde, basierend auf den **IANA-Zeitzonen**-Informationen des Geburtsortes. Die Sommerzeit und frühere Standardzeiten werden automatisch berücksichtigt."
          }
        ]
      },
      {
        "title": "Geburten kurz nach Mitternacht berücksichtigen ebenfalls das Datum",
        "blocks": [
          {
            "p": "Da die Korrektur -32 Minuten beträgt, werden diejenigen, die zwischen 00:00 und 00:32 nach der Uhr geboren wurden, in wahrer Solarzeit als **23:00 des vorherigen Tages** betrachtet. Wenn nur die Zeit zurückgesetzt wird und das Datum unverändert bleibt, wird der Tagestamm als '23:00 des vorherigen Tages' geschrieben."
          },
          {
            "p": "Inyeon-Link wird in diesem Fall auch das Datum zurücksetzen. Der Tagestamm zeigt die Person selbst im saju an, daher sind fast alle Kompatibilitätsitems falsch, wenn dies nicht korrekt ist."
          }
        ]
      },
      {
        "title": "Sie müssen die Zeit nicht wissen",
        "blocks": [
          {
            "p": "Die Geburtszeit ist optional. Wenn Sie sie nicht wissen, wird die Berechnung ohne den Zeitstamm durchgeführt, und dies wird auf dem Ergebnisscreen angezeigt. Es gibt keine Items in der Kompatibilität, die erfordern, dass der Zeitstamm direkt geschrieben wird, aber er beeinflusst die fünf Elemente, daher ist es genauer, ihn einzuschließen, wenn Sie ihn wissen."
          },
          {
            "p": "Die Tierkreis-Kompatibilität hat immer denselben Wert, unabhängig von der Zeit — [weil sie nur den Jahrzweig betrachtet](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Persönliche Informationen",
    "title": "Methode zur Nichtspeicherung eingegebener Informationen",
    "summary": "Dies erklärt, was es technisch bedeutet, dass Ihr Geburtsdatum nirgendwo aufgezeichnet wird und was im Ergebnislink enthalten ist.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Keine Mitgliedschaft erforderlich",
        "blocks": [
          {
            "p": "Inyeon-Link erstellt keine Konten. Es werden keine Namen, E-Mails oder Telefonnummern gesammelt. Die einzigen gesammelten Informationen sind das Geburtsdatum und (optional) die Geburtszeit, der Geburtsort und das Geschlecht, und selbst diese bleiben nach Abschluss der Berechnung nicht erhalten."
          },
          {
            "p": "Es gibt ein Feld, um einen Titel einzugeben, der auf dem Ergebnisscreen angezeigt wird, aber das ist **nur zu Anzeigezwecken** und wird nicht in der Berechnung verwendet. Sie müssen Ihren echten Namen nicht eingeben."
          }
        ]
      },
      {
        "title": "Was ist im Ergebnislink enthalten?",
        "blocks": [
          {
            "p": "Sobald die Berechnung abgeschlossen ist, sieht die Adresse so aus."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Was nach **#** folgt, sind die Eingabewerte. Dieser Teil wird als **Fragment** bezeichnet, das ein **Abschnitt ist, den der Browser nicht an den Server sendet**. Dies ist ein standardmäßiges Webverhalten und keine Regel, die wir erstellt haben — es wurde ursprünglich entworfen, um einen Standort innerhalb eines Dokuments anzuzeigen, sodass der Server keinen Bedarf hat, es zu sehen."
          },
          {
            "p": "Mit anderen Worten, wenn Sie den Ergebnislink öffnen, liest der Browser diesen Wert, um die Berechnung anzufordern, und unser Server erhält die für die Berechnung benötigten Werte, gibt die Antwort zurück und vergisst sie dann."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bitte seien Sie vorsichtig, wenn Sie Links an andere senden",
        "blocks": [
          {
            "p": "Die Tatsache, dass es nicht auf dem Server gespeichert wird und dass der Link sicher ist, sind nicht dasselbe. Der Ergebnislink enthält beide Ihre Geburtsdaten, sodass die Person, die diesen Link erhält, dasselbe Ergebnis sehen kann."
          }
        ]
      },
      {
        "title": "Warum wird die Berechnung auf dem Server durchgeführt, aber nicht gespeichert?",
        "blocks": [
          {
            "p": "Die Berechnung selbst erfolgt auf dem Server. Der koreanische lunisolare Almanach wird benötigt, um das saju zu generieren, und diese Tabelle ist zu groß, um sie an den Browser zu senden. Allerdings wird **nach der Verarbeitung der Anfrage dieser Wert nirgendwo verwendet.** Es gibt keinen Code, um ihn in einer Datenbank zu speichern."
          },
          {
            "p": "Ein minimaler, für den Betrieb notwendiger Datensatz wird aufbewahrt — ein Zähler, um zu verhindern, dass dieselbe Person zu viele Anfragen in kurzer Zeit sendet. Dies umfasst nicht das Geburtsdatum, und die Zugriffs-IP wird ebenfalls nicht gespeichert. Nur ein Wert, der mit dem Datum gehasht ist, wird gezählt, und dieser Wert ändert sich, wenn sich der Tag ändert."
          }
        ]
      },
      {
        "title": "Dinge, die nicht getan werden können, weil Informationen nicht gespeichert werden",
        "blocks": [
          {
            "p": "Um ehrlich zu sein, gibt es Dinge, auf die wir verzichtet haben, weil wir keine Informationen speichern."
          },
          {
            "ul": [
              "**Sie können frühere Ergebnisse nicht abrufen.** Sie müssen den Link haben, um sie erneut anzusehen.",
              "**Die gleichen Werte werden neu berechnet.** Es gibt keinen Cache. Da jedoch alle Regeln deterministisch sind, [wird die gleiche Eingabe immer denselben Wert ergeben](/guide/how-compatibility).",
              "**Ein Neuladen bringt das Werbegate zurück.** Dies liegt daran, dass es keinen Ort gibt, um Anzeigedaten zu speichern."
            ]
          }
        ]
      },
      {
        "title": "Im Falle eines Kaufs",
        "blocks": [
          {
            "p": "Wenn Sie einen Bericht kaufen, wird zu diesem Zeitpunkt ein Transaktionsdatensatz aufbewahrt. Das Gesetz legt eine Aufbewahrungsfrist für Zahlungen fest, und ohne eine Bestellhistorie können Rückerstattungen nicht bearbeitet werden. Selbst dann gilt jedoch, dass **das Geburtsdatum, das für die Kompatibilitätsberechnungen verwendet wird, nicht an die Bestellung angehängt wird** — es wird erneut gesammelt, wenn das PDF nach der Zahlungsbestätigung erstellt wird."
          },
          {
            "p": "Die Einzelheiten sind in der [Datenschutzrichtlinie](/privacy) aufgeführt."
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
            "p": "Kompatibilitätsberechnungen und Ergebnisanfragen sind **kostenlos**. Übereinstimmungsraten, Itemwerte und -gewichte, die ursprünglichen saju-Diagramme beider Personen und die Form der Beziehung können alle auf dem Bildschirm angezeigt werden. Nichts wurde vom Bildschirm entfernt, während der kostenpflichtige Bericht erstellt wurde."
          },
          {
            "p": "Der Zweck des Berichts ist es, **Ebenen hinzuzufügen, die nicht auf dem Bildschirm sind**. Und diese Ebene ist nicht erfunden; sie besteht aus Werten, die bereits während des Bewertungsprozesses berechnet wurden, aber nicht auf dem Bildschirm verwendet wurden."
          }
        ]
      },
      {
        "title": "Saju-Kompatibilitätsbericht PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Inlandszahlung {priceGunghapDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceGunghapGlobal}. A4 {pagesGunghap} Seiten."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Seiten 1-3 sind organisiert, um das anzuzeigen, was auf dem Bildschirm ist** und **ab Seite 4 handelt es sich um Inhalte, die nicht auf dem Bildschirm sind**. Im Folgenden wird erklärt, warum bestimmte Dinge nicht auf dem Bildschirm angezeigt wurden."
          }
        ]
      },
      {
        "title": "Seite 4 — Die Richtung der beiden Energien",
        "blocks": [
          {
            "p": "Die Elemente der fünf Elemente auf dem Bildschirm werden als eine einzige Punktzahl präsentiert. Diese Punktzahl ist jedoch der **Durchschnitt der beiden Richtungen** — sie misst, wie sehr der andere mich erfüllt und wie sehr ich den anderen erfülle, und mittelt diese Werte."
          },
          {
            "p": "Komplementarität ist von Natur aus **asymmetrisch**. Das liegt daran, dass die Energien, die ich benötige, und die Energien, die der andere benötigt, unterschiedlich sind. Wenn man nur den Durchschnitt betrachtet, erscheinen eine Beziehung, in der eine Seite die andere erheblich erfüllt, und eine Beziehung, in der sich beide gegenseitig gleichmäßig erfüllen, als dieselbe Zahl. Der Bericht trennt diese beiden."
          },
          {
            "p": "In demselben Abschnitt ist auch das **Beziehungsschema der vier Säulen** enthalten. Die einzige, die in die Übereinstimmungsrate einfließt, ist der Tagezweig (日支) — weil er die Position des Ehepartners ist — aber auch die anderen Jahr-, Monats- und Stundenäste können mit demselben Beziehungsschema gelesen werden."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Die Punktzahlen in dieser Tabelle fließen nicht in die Übereinstimmungsrate ein",
        "blocks": [
          {
            "p": "Wenn sie einbezogen würden, würde sich die Gesamtpunktzahl ändern und nicht mit dem bereits gesendeten Ergebnislink übereinstimmen. Daher ist sie nur als Lesematerial enthalten, und dieser Fakt wird unter der Tabelle vermerkt."
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
            "p": "Sie können die Kräfte vor und nach der Multiplikation mit der Energie des Monats nebeneinander sehen, was zeigt, wie sehr die Jahreszeit sie angehoben hat. Das **Verbündetenverhältnis**, das zwischen starkem Tagmeister und schwachem Tagmeister unterscheidet, wird ebenfalls vermerkt — der Bildschirm zeigt nur das Urteil, aber der Bericht zeigt, wo dieses Urteil gefällt wurde."
          }
        ]
      },
      {
        "title": "Seite 6 — Was die vier Säulen der anderen Person für mich bedeuten",
        "blocks": [
          {
            "p": "Die Übereinstimmungsrate vergleicht nur die **Tagestämme** beider Personen. Die verbleibenden drei Säulen der anderen Person werden jedoch auch von den Zehn Göttern nach denselben Regeln bestimmt. Während Sie verstehen können, **was diese Person für mich bedeutet**, indem Sie nur den Tagestamm betrachten, können Sie nicht wissen, **was die Position dieser Person für mich bedeutet**."
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
            "p": "Es wird angegeben, wie sehr die Geburtszeit auf die wahre Solarzeit angepasst wurde, ob die Korrektur das Datum geändert hat und welche Sonnen- und Monddaten bei der Erstellung des saju verwendet wurden. Das Konzept wird im Dokument [Anpassung der Geburtszeit an die wahre Solarzeit](/guide/true-solar-time) erklärt, aber **der Wert, um wie viele Minuten in Ihrem Fall angepasst wurde**, variiert von Person zu Person, daher ist er nur im Bericht enthalten."
          }
        ]
      },
      {
        "title": "Inyeon Kompatibilitätsprofilbericht PDF — {priceAffinityDomestic}",
        "slot": "",
        "blocks": [
          {
            "p": "Inlandszahlung {priceAffinityDomestic} (einschließlich MwSt.), internationale Zahlung {priceAffinityGlobal}. A4 {pagesAffinity} Seiten."
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
            "p": "Bitte senden Sie Anfragen an **{email}**. Wir werden innerhalb von 2 Werktagen antworten. Bei Anfragen zu Zahlungen und Rückerstattungen geben Sie bitte **die Bestellnummer oder die E-Mail-Adresse, die für die Zahlung verwendet wurde**, für eine schnellere Bestätigung an."
          },
          {
            "p": "Telefonanfragen können unter {customerCenter} erfolgen."
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
              "**Fehlerbericht zur Berechnung** — Wenn das ursprüngliche saju-Diagramm oder die Punktzahl seltsam erscheint, lassen Sie es uns bitte wissen. Wenn Sie angeben, wann Sie das Datum und die Uhrzeit eingegeben haben, können wir mit denselben Werten neu berechnen."
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
              "**Nummer der Versandhandelsregistrierung** — {mailOrderNumber}",
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
            "p": "Sie müssen Ihr Geburtsdatum und Ihre Geburtszeit nicht in der Anfrage-E-Mail angeben. Wir speichern keine Eingaben, daher können wir sie nicht abrufen, und die Bestellnummer ist zur Bestätigung ausreichend. Bitte fügen Sie sie nur hinzu, wenn es für einen Fehlerbericht zur Berechnung notwendig ist."
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
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen sind nicht aufgeführt: was hier erscheint, ist das, was Sie wissen müssen.",
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
        "Fragen, Rückerstattungen, Datenschutzanfragen und Berichte über Berechnungsfehler haben jetzt einen Ort — siehe die Kontaktseite im Fußbereich.",
        "Wenn etwas falsch berechnet aussieht, fügen Sie bitte die Geburtsdetails hinzu, die es erzeugt haben. Wir speichern nicht, was Sie eingeben, daher können wir ohne diese Informationen die Lesung nicht reproduzieren."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Berichte werden in Englisch für Arabisch und Khmer ausgegeben",
      "body": [
        "Wenn Sie auf Arabisch oder Khmer lesen, wird der PDF-Bericht, den Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente anordnet, kann derzeit keine Absätze in diesen Schriften setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Bericht gedruckt.",
        "Die gleiche Notiz erscheint vor der Zahlung. Wenn das Tool diese Schriften unterstützt, werden wir dies hier mitteilen."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Jede Lesung trägt die Version der verwendeten Regeln",
      "body": [
        "Jede Lesung und jeder Bericht trägt das Regelwerk, das zu ihrer Erstellung verwendet wurde (zum Beispiel inyeonlink-match-v10). Die gleiche Eingabe im gleichen Regelwerk ergibt immer die gleichen Zahlen.",
        "Wenn wir die Interpretationsregeln so ändern, dass sich ein Ergebnis ändern kann, veröffentlichen wir dies zuerst hier, mit dem Datum, an dem es in Kraft tritt — denn ein Ergebnislink, den Sie bereits haben, würde dann anders gelesen werden.",
        "Das aktuelle Regelwerk ist v10. Zahlungen sind noch nicht geöffnet."
      ]
    }
  }
} satisfies NoticeCopy;
