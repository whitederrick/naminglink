import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "about": {
    "eyebrow": "À propos",
    "title": "À propos d'Inyeon-Link",
    "summary": "Nous comparons deux cartes de naissance selon la tradition coréenne du saju. Voici ce que nous calculons et ce que nous refusons de revendiquer.",
    "backLabel": "Accueil",
    "sections": [
      {
        "title": "Ce que nous faisons",
        "blocks": [
          {
            "p": "Inyeon-Link construit deux cartes de naissance à partir des dates et heures de naissance et montre **comment les deux ensembles d'énergies se rencontrent.** Vous pouvez également lire votre propre carte seule et voir quels tempéraments ont tendance à vous convenir."
          },
          {
            "p": "La lecture à l'écran est **gratuite et ne nécessite pas de compte.** Les éléments payants sont des rapports PDF contenant des chiffres que l'écran ne montre jamais — forces des éléments, associations des dix dieux et relations à travers les quatre piliers."
          }
        ]
      },
      {
        "title": "Ce que nous calculons",
        "blocks": [
          {
            "p": "Les cartes sont construites à partir de l'**almanach lunisolaire coréen**, et l'heure de naissance est corrigée à **l'heure solaire vraie** pour le lieu de naissance — la même heure de l'horloge signifie une position du soleil différente selon l'endroit où vous êtes né."
          },
          {
            "p": "Les scores proviennent uniquement de règles fixes. Les concepts traditionnels — dix dieux, relations entre branches, élément de soutien — sont exprimés sous forme de règles, donc **la même entrée donne toujours le même résultat.** Lorsque une règle change, nous exécutons un système de régression pour nous assurer que les lectures plus anciennes n'ont pas été modifiées."
          },
          {
            "p": "**Aucun IA n'est impliqué.** Chaque phrase à l'écran est un texte fixe attaché à un résultat calculé."
          }
        ]
      },
      {
        "title": "Ce que nous ne revendiquons pas",
        "blocks": [
          {
            "ul": [
              "**Nous ne prédisons pas l'avenir.** Rien ici ne vous dit de poursuivre ou d'éviter qui que ce soit. C'est une référence tirée d'une tradition.",
              "**Nous ne stockons pas ce que vous entrez.** Les détails de naissance sont utilisés au moment du calcul et ne sont jamais notés ; les liens de résultats vivent dans la partie de l'URL qu'un navigateur n'envoie pas à un serveur.",
              "**Un score n'est pas un verdict sur une personne.** Un faible nombre n'invalide pas une relation."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "La méthode est décrite en détail dans les [guides](/guide). Les détails de l'entreprise et comment nous contacter se trouvent sur la [page de contact](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base de calcul",
    "title": "Quelle est la base du calcul ?",
    "summary": "Inyeon-Link révèle toutes les règles qu'il utilise. Vous pouvez vérifier les éléments et leurs poids, les scores du tableau des relations entre branches terrestres, et les valeurs seuil qui distinguent un maître de jour fort d'un maître de jour faible — vous pouvez voir d'où viennent les chiffres à l'écran.",
    "backLabel": "Retour au début",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Les valeurs écrites ici sont toutes **directement lues à partir du code de calcul**. Comme elles ne sont pas transcrites manuellement dans le texte, si les règles changent, les chiffres dans ce document changeront également."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Base du service",
    "title": "Que regarde la compatibilité du Saju ?",
    "summary": "Cela clarifie quatre éléments et leurs poids respectifs, et explique pourquoi ces quatre sont choisis. Cela aborde également pourquoi des calculs peuvent être effectués même sans connaître l'heure de naissance.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Calculer et combiner deux axes",
        "blocks": [
          {
            "p": "Le taux de correspondance provient de deux branches. **La compatibilité du saju** examine l'ensemble de la carte originale du saju des deux individus, tandis que **la compatibilité zodiacale** ne considère qu'une seule branche terrestre de l'année de naissance. La valeur finale est obtenue par une moyenne pondérée des deux."
          },
          {
            "table": {
              "head": [
                "Axe",
                "Ce qui est considéré",
                "Poids"
              ],
              "rows": [
                [
                  "Compatibilité du Saju",
                  "Jour tige, jour branche, et les cinq éléments — quatre éléments",
                  "{weightSaju}"
                ],
                [
                  "Compatibilité zodiacale",
                  "La relation entre les branches de l'année",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Le côté saju est beaucoup plus lourd car la quantité d'informations utilisées est différente. Le saju considère les quatre piliers, tandis que le zodiaque ne regarde qu'un seul caractère. Cependant, le zodiaque n'est pas exclu pour deux raisons — c'est l'élément le plus intuitivement compréhensible, et c'est le **seul axe dont la valeur ne fluctue pas même sans connaître l'heure de naissance**."
          }
        ]
      },
      {
        "title": "Les quatre éléments de la compatibilité du Saju",
        "blocks": [
          {
            "p": "Le côté saju est encore divisé en quatre. Chaque élément est choisi pour s'assurer que ce qu'ils considèrent ne se chevauche pas."
          },
          {
            "figure": "four-pillars",
            "caption": "Le saju se compose de huit caractères formés par les tiges célestes et les branches terrestres de l'année, du mois, du jour et de l'heure de naissance. La tige du jour et la branche du jour mentionnées ci-dessous sont les deux caractères dans le pilier du jour.",
            "labels": {
              "year": "Pilier de l'année",
              "yearNote": "Racine · Zodiaque",
              "month": "Pilier du mois",
              "monthNote": "Saison · Pouvoir",
              "day": "Pilier du jour",
              "dayNote": "Moi · Palais du conjoint",
              "hour": "Pilier de l'heure",
              "hourNote": "Années ultérieures · Utilisation",
              "stem": "Tige céleste",
              "stemNote": "Tige du jour = Moi",
              "branch": "Branche terrestre",
              "branchNote": "Branche du jour = Palais du conjoint"
            }
          },
          {
            "table": {
              "head": [
                "Élément",
                "Ce qui est considéré",
                "Poids"
              ],
              "rows": [
                [
                  "Relation entre les tiges du jour",
                  "Ce que les tiges du jour (日干) des deux personnes sont l'une par rapport à l'autre — vu à travers les Dix Dieux",
                  "{weightDayMaster}"
                ],
                [
                  "Complémentation des cinq éléments",
                  "Le partenaire a-t-il l'énergie dont j'ai besoin — vu à travers l'élément de soutien dont un graphique a actuellement besoin",
                  "{weightElementSupply}"
                ],
                [
                  "Étoile du conjoint",
                  "La tige du jour du partenaire correspond-elle à ma position de conjoint ?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relation entre les branches du jour",
                  "Les branches du jour (日支) des deux personnes sont-elles une combinaison ou un choc ?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "La branche du jour est lue car la tradition la considère comme le **palais du conjoint**. Parmi les quatre piliers, c'est celui qui désigne le partenaire, ce qui en fait le premier endroit où la compatibilité est examinée."
          }
        ]
      },
      {
        "title": "Si le sexe n'est pas divulgué, l'élément du conjoint est omis",
        "blocks": [
          {
            "p": "L'élément du conjoint nécessite la connaissance du sexe pour le calcul. La tradition lit la position qui désigne un conjoint différemment selon le sexe. Si non divulgué, cet élément sera **exclu** et les poids des trois éléments restants seront renormalisés."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il ne sera pas traité comme 0 points",
        "blocks": [
          {
            "p": "Si les positions manquantes sont traitées comme 0 points, le score sera injustement abaissé simplement parce que le sexe n'a pas été divulgué. La renormalisation des poids empêche ce problème."
          }
        ]
      },
      {
        "title": "Les calculs peuvent être effectués sans connaître l'heure de naissance",
        "blocks": [
          {
            "p": "L'heure de naissance est utilisée pour déterminer le pilier horaire. Si inconnue, les calculs seront effectués sans le pilier horaire, et ce fait sera indiqué sur l'écran des résultats. Puisqu'il n'y a pas d'entrée directe pour le pilier horaire parmi les quatre éléments de compatibilité, les valeurs ne fluctueront pas de manière significative, mais cela affecte l'équilibre des cinq éléments."
          },
          {
            "p": "Si vous connaissez l'heure, veuillez également sélectionner le lieu de naissance. Si l'heure standard diffère de la position solaire réelle, l'utiliser telle quelle peut désaligner le pilier horaire [(correction du temps solaire vrai)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "La même entrée donnera toujours la même valeur",
        "blocks": [
          {
            "p": "Tous les scores sont déterminés par des règles. Aucune intelligence artificielle n'est utilisée, ni de nombres aléatoires. Par conséquent, entrer les mêmes deux dates de naissance plusieurs fois ne donnera pas des résultats différents. En tant que service qui ne stocke pas de données, les résultats précédents ne peuvent pas être récupérés, mais **le déterminisme** compense cela."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Changer les règles fera augmenter la version",
        "blocks": [
          {
            "p": "Chaque fois que les règles de notation sont modifiées, la version du moteur est mise à jour. La version est notée en bas de l'écran des résultats, vous permettant de distinguer quelles règles ont été utilisées pour calculer les nombres que vous visualisez actuellement."
          }
        ]
      },
      {
        "title": "Ce que ce résultat n'est pas",
        "blocks": [
          {
            "p": "Ceci est un **matériel de référence** calculé à partir de règles établies sur la perspective de la tradition. Ce n'est pas une prédiction scientifique, ni une déclaration définitive sur la relation entre les deux individus. La plage de scores est fixée à un minimum d'environ 45 points pour cette raison — aucune combinaison ne donnera une valeur proche de 0 points."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tableau des relations",
    "title": "Douze branches terrestres — Combinaison, choc, discorde",
    "summary": "Ceci est un tableau des relations utilisé à la fois pour la compatibilité des branches du jour et la compatibilité du zodiaque. Il divulgue entièrement ce que chaque combinaison, choc et discorde signifie et leurs scores respectifs.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Les branches terrestres se composent de douze caractères",
        "blocks": [
          {
            "p": "Les douze branches terrestres (十二支) sont 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Les signes du zodiaque communément connus sont associés à chacun de ces douze caractères."
          },
          {
            "figure": "branch-wheel",
            "caption": "Disposer les douze caractères en cercle fournit une vue claire des relations. Un choc se trouve toujours directement en face, tandis qu'une paire à six harmonies et une discorde tranquille sont des voisins plus proches. Ces lignes sont dérivées directement des règles de calcul, pas écrites dans le texte.",
            "labels": {
              "alt": "Un diagramme montrant les douze branches terrestres disposées en cercle avec des lignes reliant les six harmonies, les chocs et les discordes.",
              "yukhap": "Six-Harmonie",
              "chung": "Choc",
              "wonjin": "Discorde",
              "rat": "Rat",
              "ox": "Boeuf",
              "tiger": "Tigre",
              "rabbit": "Lapin",
              "dragon": "Dragon",
              "snake": "Serpent",
              "horse": "Cheval",
              "goat": "Chèvre",
              "monkey": "Singe",
              "rooster": "Coq",
              "dog": "Chien",
              "pig": "Cochon"
            }
          },
          {
            "p": "Dans le saju, chacun des quatre piliers a une branche terrestre. Inyeon-Link utilise la **branche du jour** (le palais du conjoint) et la **branche de l'année** (l'animal du zodiaque) parmi elles. Les deux positions sont évaluées à l'aide du tableau de relations ci-dessous."
          }
        ]
      },
      {
        "title": "Tableau de relations complet",
        "blocks": [
          {
            "table": {
              "caption": "Classé par score le plus élevé. Ce sont les valeurs réellement utilisées par Inyeon-Link.",
              "head": [
                "Relation",
                "Paire correspondante",
                "Signification",
                "Score"
              ],
              "rows": [
                [
                  "Combinaison (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Lorsque les trois caractères se rassemblent, ils forment une formation élémentaire complète — un **guk** (局). C'est considéré comme la combinaison la plus forte.",
                  "{scoreSamhap}"
                ],
                [
                  "Six-Harmonie (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Paires qui s'attirent. C'est la combinaison la plus courante en compatibilité car elle ne comprend que deux caractères.",
                  "{scoreYukhap}"
                ],
                [
                  "Triade incomplète (半合)",
                  "Deux caractères qui incluent une branche royale (王地) du triade (子·酉·午·卯)",
                  "Une demi-combinaison qui inclut le caractère au centre de la formation. Elle ne peut pas former une combinaison complète avec seulement deux caractères, ce qui la rend inférieure à une triade complète.",
                  "{scoreBanhap}"
                ],
                [
                  "Même branche terrestre",
                  "子子 · 丑丑 …",
                  "Caractères qui sont les mêmes. Cela signifie qu'ils se ressemblent, mais cela n'implique pas d'attraction, donc cela est placé au milieu.",
                  "{scoreSame}"
                ],
                [
                  "Neutre",
                  "Paires qui n'appartiennent nulle part au-dessus ou en dessous",
                  "Une combinaison sans relation spéciale. C'est le point de référence.",
                  "{scoreNeutral}"
                ],
                [
                  "Discorde silencieuse (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Paires qui ne peuvent se séparer malgré le ressentiment. Elles semblent calmes en surface mais sont considérées comme durables.",
                  "{scoreWonjin}"
                ],
                [
                  "Conflit (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Paires qui s'affrontent directement. Ce sont six paires se faisant face.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les triades complètes n'apparaissent pas dans ce service",
        "blocks": [
          {
            "p": "Une triade complète nécessite trois caractères pour se former. Cependant, la compatibilité est structurée en faisant correspondre les branches terrestres de deux personnes **une par une**, ce qui ne donne que deux caractères. Par conséquent, ce qui apparaît ici est toujours une demi-triade, et les points de triade complète {scoreSamhap} sont réservés pour l'examen des formations au sein de chaque saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les demi-triades doivent inclure une branche royale",
        "blocks": [
          {
            "p": "Il existe également une méthode qui compte comme une demi-triade si les deux caractères appartiennent au même groupe de triade. Cela peut conduire à des scores élevés même pour des combinaisons qui sont difficiles à appeler une triade, comme 申辰. Par conséquent, ce service reconnaît une demi-triade uniquement pour les paires qui incluent une branche royale (王地) (子·酉·午·卯), et des combinaisons comme 申辰·巳丑·寅戌·亥未 sans branche royale ne sont pas comptées comme des triades."
          }
        ]
      },
      {
        "title": "La raison de séparer la discorde silencieuse",
        "blocks": [
          {
            "p": "Les six paires de discorde silencieuse sont vues aussi fréquemment en compatibilité que les conflits. Si nous comptons les combinaisons comme des paires et des conflits, ces six paires seraient toutes enterrées sous des points neutres {scoreNeutral}, donc elles sont placées séparément."
          },
          {
            "p": "Alors que les conflits sont ouverts et frappants, la discorde silencieuse est subtilement désalignée. Par conséquent, elle est placée à un score de {scoreWonjin}, qui est plus élevé que les conflits ({scoreChung}) mais définitivement inférieur à neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Des scores sont également attribués aux conflits",
        "blocks": [
          {
            "p": "Le score de conflit le plus bas est {scoreChung}. L'intention n'est pas d'attribuer une valeur proche de 0. Dans la tradition, un conflit n'est pas une 'fin' mais une 'collision', et attribuer un score bas impliquerait que le service fait une déclaration définitive sur la relation."
          },
          {
            "p": "Avec un minimum de {scoreChung} et un maximum de {scoreSamhap}, la plage est claire, mais cela ne fait pas de conclusion définitive."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiaque",
    "title": "Pourquoi la compatibilité zodiacale considère-t-elle la branche terrestre de l'année ?",
    "summary": "Le zodiac est la branche terrestre de l'année de naissance. Cela explique pourquoi il est dérivé du pilier de l'année du saju plutôt que de l'année calendaire, et clarifie l'importance de la compatibilité zodiacale.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le zodiac est la branche terrestre de l'année de naissance",
        "blocks": [
          {
            "p": "Le saju se compose de quatre piliers : année, mois, jour et heure, chaque pilier contenant un ciel céleste et une branche terrestre. La **branche terrestre de l'année** est celle qui porte l'animal que nous appelons le signe zodiacal."
          },
          {
            "table": {
              "caption": "Les Douze Branches Terrestres et le Zodiac",
              "head": [
                "Branche Terrestre",
                "Zodiac"
              ],
              "rows": [
                [
                  "子",
                  "Rat"
                ],
                [
                  "丑",
                  "Boeuf"
                ],
                [
                  "寅",
                  "Tigre"
                ],
                [
                  "卯",
                  "Lapin"
                ],
                [
                  "辰",
                  "dragon"
                ],
                [
                  "巳",
                  "serpent"
                ],
                [
                  "午",
                  "cheval"
                ],
                [
                  "未",
                  "mouton"
                ],
                [
                  "申",
                  "singe"
                ],
                [
                  "酉",
                  "coq"
                ],
                [
                  "戌",
                  "chien"
                ],
                [
                  "亥",
                  "cochon"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Nous utilisons l'année de saju, pas l'année calendaire",
        "blocks": [
          {
            "p": "Le moment où le zodiac change n'est ni le 1er janvier du calendrier solaire ni le Nouvel An lunaire. La norme pour changer d'année dans le saju est **Ipchun**. Par conséquent, ceux nés en janvier ou début février peuvent avoir une année zodiacale différente de celle du calendrier."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La raison pour laquelle nous ne demandons pas directement le zodiac",
        "blocks": [
          {
            "p": "C'est pourquoi nous ne collectons que la date de naissance sans demander le zodiac sur l'écran d'entrée. Lorsque le moteur de saju calcule la branche de l'année, la limite d'Ipchun est automatiquement ajustée. Si vous le sélectionnez directement, quelqu'un né début février peut choisir un zodiac qui ne correspond pas au sien."
          }
        ]
      },
      {
        "title": "La compatibilité zodiacale ne considère qu'une seule relation",
        "blocks": [
          {
            "p": "Le calcul de la compatibilité zodiacale est simple. Il compare les branches de l'année de deux personnes pour déterminer si la relation est harmonieuse, en conflit ou en discordance silencieuse, et utilise ce score tel quel. Puisqu'il n'y a qu'un seul élément, il n'est pas nécessaire de répartir les poids."
          },
          {
            "p": "Les scores pour chaque relation sont tous listés dans le [Tableau des Relations des Douze Branches](/guide/branches). La compatibilité de la branche du jour utilise le même tableau."
          }
        ]
      },
      {
        "title": "La raison de la détermination du poids",
        "blocks": [
          {
            "p": "La compatibilité zodiacale représente {weightZodiac} du taux final de correspondance. Alors que la compatibilité saju examine les quatre piliers, le zodiac ne considère qu'un seul caractère, donc ils ne peuvent pas être pondérés de manière égale."
          },
          {
            "p": "Cependant, il y a deux raisons pour lesquelles il n'est pas exclu."
          },
          {
            "ul": [
              "**C'est l'élément le plus intuitivement compréhensible**. Même sans connaître le vocabulaire de la tradition, 'le tigre et le singe sont en conflit' a du sens.",
              "**C'est le seul axe qui ne fluctue pas même si l'heure de naissance est inconnue**. Si vous ne connaissez pas l'heure, le pilier de l'heure est manquant et la force des cinq éléments change, mais la branche de l'année reste la même."
            ]
          }
        ]
      },
      {
        "title": "Vous pouvez également consulter la compatibilité zodiacale séparément",
        "blocks": [
          {
            "p": "Sur l'écran des résultats, nous montrons les scores pour la compatibilité saju et la compatibilité zodiacale séparément. Si seul le taux final de correspondance est présenté, il n'est pas clair d'où provient ce chiffre. Si les deux valeurs diffèrent considérablement, cela vaut la peine d'être noté."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Dix Dieux",
    "title": "Dix Dieux et Position du Conjoint",
    "summary": "Nous examinons ce que chaque jour maître est l'un pour l'autre à travers les Dix Dieux. Nous expliquons pourquoi la richesse directe et la richesse indirecte sont lues différemment même si les deux sont de la richesse.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le jour de la tige est la personne elle-même",
        "blocks": [
          {
            "p": "Parmi les huit caractères du saju, la **tige du jour** (la tige céleste du jour de naissance) fait référence à la personne elle-même. Les sept caractères restants sont interprétés comme l'environnement dans lequel cette tige du jour est placée."
          },
          {
            "p": "Les **Dix Dieux** (十神) divisent la façon dont la tige du jour perçoit les autres caractères en dix catégories. Ce qui me nourrit est **ressource**, ce qui est le même que moi est **pair**, ce que je produis est **sortie**, ce que je contrôle est **richesse**, et ce qui me contrôle est **autorité** — chacun des cinq est ensuite divisé par polarité, formant dix."
          }
        ]
      },
      {
        "title": "Ce que la tige du jour de chaque personne représente pour les autres",
        "blocks": [
          {
            "p": "C'est le premier élément de la compatibilité. Une fois déterminé ce que la tige du jour de A perçoit comme celle de B, la perception de B envers A est également déterminée, donc il y a **seulement six possibilités**."
          },
          {
            "table": {
              "caption": "Par ordre de score le plus élevé",
              "head": [
                "Couple",
                "Yin/Yang",
                "Nom",
                "Signification"
              ],
              "rows": [
                [
                  "Richesse Directe ↔ Autorité Directe",
                  "Polarité opposée",
                  "Lien chaleureux (有情)",
                  "C'est le couple traditionnellement vu comme la position du conjoint. Le yin et le yang sont dépareillés, s'attirant mutuellement."
                ],
                [
                  "Officier Blessant ↔ Ressource Directe",
                  "Polarité opposée",
                  "Officier Blessant portant le Sceau (傷官佩印)",
                  "Un côté enveloppe l'énergie intense de l'autre côté."
                ],
                [
                  "Ami ↔ Ami",
                  "Même polarité",
                  "Égal",
                  "Ils se ressemblent et sont égaux, mais ne se poussent pas l'un l'autre."
                ],
                [
                  "Rival ↔ Rival",
                  "Polarité opposée",
                  "Compétition",
                  "Ils s'attirent mais rivalisent pour la même position."
                ],
                [
                  "Richesse Indirecte ↔ Autorité Indirecte",
                  "Même polarité",
                  "Lien froid (無情)",
                  "La stimulation est grande, mais le fardeau est également lourd."
                ],
                [
                  "Dieu de la Nourriture ↔ Ressource Indirecte",
                  "Même polarité",
                  "L'étoile hibou vole la nourriture (梟神奪食)",
                  "L'énergie donnée est prise par le correspondant, bloquant le flux."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin et Yang sont à un carrefour",
        "blocks": [
          {
            "p": "Le côté où le yin et le yang sont mal alignés (Richesse Propre, Officier Propre, Compagnon Propre) est émotionnel, tandis que le même côté (Ressource, Officier, Compagnon) est non émotionnel, ce qui est le principe qui distingue le propre et le côté des Dix Dieux."
          }
        ]
      },
      {
        "title": "La raison de voir avec les Dix Dieux plutôt qu'avec trois éléments",
        "blocks": [
          {
            "p": "Il existe une méthode pour voir la relation de la tige du jour avec les trois éléments (génération mutuelle, similitude, dépassement mutuel). C'est simple, mais **le yin et le yang disparaissent.** 甲 (bois yang) et 乙 (bois yin) deviennent la même 'similitude' comme 甲 et 甲, et le dépassement mutuel est écrasé en un seul score sans direction ni yin et yang."
          },
          {
            "p": "La position du conjoint doit être évaluée en termes des Dix Dieux. Si les éléments vus par les cinq éléments et les éléments vus par les Dix Dieux sont mélangés dans un même moteur, il y aura deux normes pour les mêmes deux caractères. Par conséquent, nous unifions avec les Dix Dieux."
          }
        ]
      },
      {
        "title": "La position du conjoint est Richesse Propre et Officier Propre",
        "blocks": [
          {
            "p": "Dans la tradition, lequel des Dix Dieux représente un conjoint diffère selon le sexe."
          },
          {
            "table": {
              "head": [
                "Sexe",
                "Position du Conjoint",
                "Position Correspondante"
              ],
              "rows": [
                [
                  "Homme",
                  "Richesse Directe (正財)",
                  "Richesse Indirecte (偏財)"
                ],
                [
                  "Femme",
                  "Autorité Directe (正官)",
                  "Autorité Indirecte (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Même s'ils proviennent de la même ressource, seule la **Richesse Propre** émotionnelle est considérée comme la position du conjoint, tandis que la Ressource est interprétée comme la nature de l'activité et de la richesse. Par conséquent, la Richesse Propre et le Fonctionnaire Propre comptent pour 2 points, tandis que la Ressource et le Fonctionnaire comptent pour 1 point, et les deux directions sont additionnées — si les deux sont considérées comme des positions de conjoint, c'est la plus élevée."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si le sexe n'est pas divulgué, omettez cet élément",
        "blocks": [
          {
            "p": "Si un élément indécidable est fixé à 0 points, cela entraîne un score injustement bas. Le poids restant après l'omission de l'élément est normalisé à nouveau [(élément et poids)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Nous montrons également la forme de la relation",
        "blocks": [
          {
            "p": "En plus du score, nous décrivons **quelle forme** la paire de tiges de jour a sur l'écran des résultats. Qu'elles soient dans des positions similaires, qu'un côté soutienne l'autre, ou qu'un côté soit réprimé — s'il s'agit d'une relation de soutien ou de répression, nous clarifions quel côté occupe cette position."
          },
          {
            "p": "Si un seul score est présenté, cela laisse la question 'et alors'. La forme n'est pas un score mais quelque chose à lire, et même les paires avec des scores bas ont quelque chose à interpréter."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Les cinq éléments",
    "title": "Élément de Soutien — L'énergie nécessaire maintenant",
    "summary": "Nous considérons les cinq éléments non pas comme 'ont-ils choisi deux' mais comme 'le partenaire a-t-il ce dont j'ai besoin'. Nous divulguons également la valeur limite qui distingue un maître de jour fort d'un maître de jour faible.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Que les cinq éléments soient 'équilibrés' n'est pas une question de compatibilité",
        "blocks": [
          {
            "p": "Il existe une méthode pour mesurer si les cinq énergies sont réparties de manière uniforme en combinant les cinq éléments des deux personnes. Cependant, la question de la compatibilité n'est pas cela. **Le partenaire a-t-il ce dont j'ai besoin ?**"
          },
          {
            "p": "Le degré d'équilibre est symétrique, mais la complémentarité est intrinsèquement asymétrique. Cela est dû au fait que ce dont A a besoin est différent de ce dont B a besoin. Par conséquent, nous mesurons chaque côté séparément et faisons une moyenne — étant donné qu'il s'agit d'une moyenne, le score total reste symétrique."
          }
        ]
      },
      {
        "title": "Élément de Soutien — Réduire si excessif, ajouter si insuffisant",
        "blocks": [
          {
            "p": "L'Élément de Soutien (用神) est 'l'énergie dont cette personne a besoin en ce moment'. Il existe plusieurs méthodes pour le déterminer (répression, soutien, maladie et communication), mais cela peut être traduit en règles, et la plus largement utilisée est **répression (抑扶)**. Si le maître de jour est fort, il est considéré que l'énergie à réduire est nécessaire, et si faible, l'énergie à ajouter est nécessaire."
          },
          {
            "table": {
              "head": [
                "Jugement",
                "Ce qui est nécessaire",
                "Combien"
              ],
              "rows": [
                [
                  "Maître de jour fort (身强)",
                  "Énergie diminuante — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Trois"
                ],
                [
                  "Maître de jour faible (身弱)",
                  "Énergie ajoutante — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Deux"
                ],
                [
                  "Équilibré (中和)",
                  "Ne peut pas être couvert par l'élément de soutien, donc c'est l'énergie la plus fine",
                  "Deux"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Valeurs seuils pour la force et la faiblesse",
        "blocks": [
          {
            "p": "Le côté de la tige de jour est **印星 et 比劫** — l'énergie qui me donne naissance et l'énergie qui est comme moi. Puisque deux sur cinq, si l'énergie est complètement équilibrée, cela devient {evenAllyRatio}. Une plage est fixée au-dessus et en dessous de cette valeur."
          },
          {
            "table": {
              "caption": "La proportion d'alliés (印星 + 比劫) dans la puissance totale",
              "head": [
                "Proportion",
                "Jugement"
              ],
              "rows": [
                [
                  "{strongThreshold} ou plus",
                  "Maître de jour fort"
                ],
                [
                  "{weakThreshold} ou plus et moins de {strongThreshold}",
                  "Équilibré"
                ],
                [
                  "Moins de {weakThreshold}",
                  "Maître de jour faible"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "L'équilibre est un 'jugement moins certain'",
        "blocks": [
          {
            "p": "L'équilibre signifie qu'il ne peut pas être couvert par l'élément de soutien. À ce moment-là, nous voyons simplement les deux énergies les plus fines comme nécessaires. Sur l'écran des résultats, cela est noté comme 'actuellement dans une position fine' plutôt que comme une déclaration définitive."
          }
        ]
      },
      {
        "title": "La puissance n'est pas le nombre de caractères",
        "blocks": [
          {
            "p": "Lors du comptage de la puissance des cinq éléments, nous ne comptons pas simplement les huit caractères tels qu'ils apparaissent. Nous utilisons une valeur qui reflète les tiges célestes cachées (地藏干) au sein des branches terrestres et la saison de l'énergie du mois (月令) dans lequel on est né."
          },
          {
            "p": "Si nous ne comptons que les caractères de surface, nous manquons le fait que même deux caractères de 木 peuvent avoir des forces complètement différentes selon la saison. Le 木 du printemps et le 木 de l'automne, bien qu'ils soient le même caractère, ont des puissances différentes."
          }
        ]
      },
      {
        "title": "Évaluation du degré de remplissage",
        "blocks": [
          {
            "p": "Nous examinons la proportion de mon élément de soutien dans la puissance de l'adversaire. Cependant, nous n'utilisons pas cette proportion directement mais **divisons l'attente par la taille de l'élément de soutien.** Lorsqu'il est fort, l'élément de soutien est trois (attente 60 %), et lorsqu'il est faible, il est deux (attente 40 %), donc utiliser la proportion directement signifierait qu'une personne forte reçoit toujours un score plus élevé."
          },
          {
            "p": "Si rempli au niveau attendu, un score proche de 78 points est obtenu, et s'il est rempli beaucoup plus, il atteint 100 points, tandis que s'il manque considérablement, il descend vers 55 points. Ici aussi, le bas n'est pas fixé à 0."
          }
        ]
      },
      {
        "title": "Ceci est un jugement préliminaire",
        "blocks": [
          {
            "p": "L'analyse saju réelle considère la formation et le climat saisonnier (la chaleur et l'humidité de la saison) pour déterminer l'élément de soutien, et les conclusions peuvent varier selon la méthode utilisée. Inyeon-Link n'utilise que les éléments de soutien qui peuvent être mesurés par **valeurs de puissance.** Cela est dû au principe d'utiliser uniquement ce qui peut être traduit en règles, donc la même entrée donnera toujours la même réponse."
          },
          {
            "p": "Au lieu de cela, l'écran des résultats présente également la force et la faiblesse de chaque personne avec l'énergie actuellement nécessaire comme **matériel de lecture**. Cela vise à éviter de cacher la base du score."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Nos standards",
    "title": "Inyeon’s Match — La raison pour laquelle nous ne fournissons pas de score total",
    "summary": "Nous ne prenons les données que d'une seule personne tout en laissant la position de l'adversaire vide et substituons toutes les valeurs possibles dans cette position. Nous expliquons la raison pour laquelle nous n'attachons pas de score total au type obtenu de cette manière.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Les calculs sont effectués en laissant la position de l'adversaire vide",
        "blocks": [
          {
            "p": "Les scores de compatibilité sont calculés en associant deux personnes. **Inyeon’s Match** ne prend que les données d'une seule personne tout en laissant la position de l'adversaire vide et teste toutes les valeurs possibles qui pourraient entrer dans cette position. C'est comme faire fonctionner le moteur de compatibilité à l'envers."
          },
          {
            "p": "Ainsi, il n'est pas nécessaire de connaître la date de naissance de l'adversaire. Nous pouvons toujours dire : 'Quel type de profil de match me convient ?' à propos de quelqu'un que nous n'avons pas encore rencontré."
          }
        ]
      },
      {
        "title": "Nous ne faisons pas des millions de combinaisons",
        "blocks": [
          {
            "p": "Le score de compatibilité dans le saju se compose de quatre éléments, et **chaque élément n'overlap pas dans ce qu'il examine.**"
          },
          {
            "table": {
              "head": [
                "Élément",
                "Quel est l'axe d'examen",
                "Nombre de cas"
              ],
              "rows": [
                [
                  "Relation entre les tiges du jour · Nature conjugale",
                  "Les tiges du jour des deux personnes — tiges célestes",
                  "10"
                ],
                [
                  "Complément des cinq éléments",
                  "Mon élément de soutien et la puissance des cinq éléments de l'adversaire",
                  "5"
                ],
                [
                  "Relation entre les branches du jour",
                  "les branches du jour des deux personnes",
                  "12"
                ],
                [
                  "Relation zodiacale",
                  "les branches de l'année des deux personnes",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Puisque les valeurs ne s'échangent pas entre les éléments, **trouver le point le plus élevé pour chaque branche sera le point le plus élevé global.** Il n'est pas nécessaire de vérifier toutes les combinaisons de dates de naissance — il suffit de définir les dix tiges célestes, douze branches terrestres et cinq éléments."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les mêmes règles s'appliquent",
        "blocks": [
          {
            "p": "Les scores écrits ici sont directement tirés du moteur de compatibilité. Puisqu'aucune nouvelle règle n'a été créée, le type qui ressort ici aura également le score le plus élevé pour cet élément dans la compatibilité réelle. Si les règles de compatibilité changent, cet écran suivra également."
          }
        ]
      },
      {
        "title": "Aucun score total n'est fourni",
        "blocks": [
          {
            "p": "C'est la décision la plus importante sur cet écran. Collecter les scores les plus élevés pour chaque branche peut sembler donner un 'match parfait', mais cette personne peut **ne pas exister réellement.**"
          },
          {
            "p": "Chez les vraies personnes, le maître du jour et les cinq éléments ne fonctionnent pas séparément. Une personne avec 甲木 a généralement aussi une forte énergie 木. Cette méthode de comptage des branches séparément ignore cette corrélation, donc la valeur obtenue en reliant les scores les plus élevés pour chaque branche devient une combinaison qui n'existe pas dans la réalité."
          },
          {
            "p": "Par conséquent, l'écran n'affiche que les **scores des éléments** et ne fournit pas de score total. Le score total sera calculé en recevant la date de naissance de l'autre personne pour [saju compatibility](/compatibility)."
          }
        ]
      },
      {
        "title": "Comment lire les 'types de correspondance'",
        "blocks": [
          {
            "p": "Le résultat signifie 'si vous rencontrez une personne de ce type, cet élément obtiendra un score élevé'. Ce n'est pas un critère pour choisir une personne, mais plutôt une façon de le lire d'un point de vue de compréhension de soi."
          },
          {
            "p": "Les raisons pour lesquelles certains types ont obtenu des scores élevés sont également notées élément par élément — que le maître du jour soit dans une position favorable, ou que cette personne possède l'énergie dont j'ai actuellement besoin."
          }
        ]
      },
      {
        "title": "Outil de confirmation",
        "blocks": [
          {
            "p": "Vous pourriez vous demander si la personne à laquelle vous pensez correspond à ce type. En entrant leur date de naissance dans l'outil de confirmation sur l'écran des résultats, vous serez informé de leur maître du jour, de leur branche du jour et de leur branche de l'année. Les valeurs saisies ne sont pas enregistrées à ce moment [(non enregistrées)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Temps",
    "title": "Convertir l'heure de naissance en temps solaire vrai",
    "summary": "L'heure standard et la position réelle du soleil diffèrent. L'heure doit être corrigée en fonction de la longitude du lieu de naissance pour expliquer pourquoi le pilier horaire est précis.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "L'heure sur l'horloge et l'heure du soleil sont différentes",
        "blocks": [
          {
            "p": "Le pilier horaire (時柱) du saju est déterminé par la position du soleil. Cependant, l'horloge que nous voyons utilise une heure standard unique pour tout le pays, ce qui provoque un écart avec la position réelle du soleil."
          },
          {
            "p": "L'heure standard de la Corée est basée sur 135° de longitude est. Étant donné que la longitude de Séoul est d'environ 127°, elle est donc environ 8° à l'ouest, ce qui fait que le soleil atteint son zénith plus tard — lorsque c'est midi à l'horloge, le soleil à Séoul n'a pas encore atteint son zénith. Cette différence est d'environ **32 minutes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutes changent le pilier horaire d'un créneau",
        "blocks": [
          {
            "p": "Le temps dans le saju est divisé en unités de deux heures. Ceux qui sont nés près de la frontière verront leur pilier horaire complètement changé par une différence de 32 minutes — cette correction est nécessaire pour ceux qui se trouvent exactement sur cette frontière."
          }
        ]
      },
      {
        "title": "Pourquoi nous demandons le lieu de naissance",
        "blocks": [
          {
            "p": "Si la longitude est différente, le montant de la correction variera également. Appliquer la correction basée sur Séoul à quelqu'un né à l'étranger entraînera un écart significatif dans le pilier horaire. Par conséquent, l'écran de saisie vous demande de sélectionner votre lieu de naissance, et le calcul est basé sur la longitude et l'heure standard de cette ville. Actuellement, il y a {cityCount} lieux dans la liste."
          },
          {
            "p": "Dans les endroits où la longitude varie considérablement même au sein du même pays (comme les États-Unis, la Russie, l'Indonésie, etc.), les villes ont été divisées. **15° de longitude équivaut à un créneau de pilier horaire**."
          },
          {
            "p": "Si vous ne sélectionnez pas, le calcul sera basé sur Séoul. Étant donné que la plupart des naissances sont domestiques, cela réduit les chances d'erreur, mais si vous êtes né à l'étranger, veuillez vous assurer de sélectionner."
          }
        ]
      },
      {
        "title": "L'heure standard a changé plusieurs fois dans le passé",
        "blocks": [
          {
            "p": "Il y a une raison pour laquelle la correction ne peut pas être calculée simplement comme 'différence de longitude ÷ 15° × 60 minutes'. L'heure standard elle-même a varié au cours des différentes époques."
          },
          {
            "table": {
              "caption": "Les changements dans l'heure standard de la Corée — ceux nés durant cette période auront des écarts avec des calculs simples",
              "head": [
                "Période",
                "Ce qui était différent"
              ],
              "rows": [
                [
                  "Avant 1912",
                  "Il n'y avait pas d'heure standard (heure moyenne locale)"
                ],
                [
                  "1954 – 1961",
                  "L'heure standard était UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "L'heure d'été a été mise en œuvre"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link n'utilise pas de valeur fixe pour le méridien standard, mais calcule l'heure standard qui était réellement utilisée à ce moment-là en fonction des informations de **zone horaire IANA** du lieu de naissance. L'heure d'été et les heures standard passées sont automatiquement prises en compte."
          }
        ]
      },
      {
        "title": "Les naissances juste après minuit prennent également en compte la date",
        "blocks": [
          {
            "p": "Puisque la correction est de -32 minutes, ceux nés entre 00:00 et 00:32 à l'horloge seront **23:00 du jour précédent** en heure solaire réelle. Si seule l'heure est inversée et que la date reste inchangée, cela écrira la branche du jour comme '23:00 du jour précédent'."
          },
          {
            "p": "Inyeon-Link inversera également la date dans ce cas. La branche du jour indique la personne elle-même dans le saju, donc si cela est incorrect, presque tous les éléments de compatibilité seront incorrects."
          }
        ]
      },
      {
        "title": "Vous n'avez pas besoin de connaître l'heure",
        "blocks": [
          {
            "p": "L'heure de naissance est optionnelle. Si vous ne la connaissez pas, le calcul sera effectué sans la branche du temps, et ce fait sera affiché sur l'écran des résultats. Il n'y a pas d'éléments dans la compatibilité qui nécessitent que la branche du temps soit écrite directement, mais cela influence les cinq éléments, donc si vous le savez, il est plus précis de l'inclure."
          },
          {
            "p": "La compatibilité zodiacale est toujours la même valeur, quelle que soit l'heure — [car elle ne regarde que la branche de l'année](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informations personnelles",
    "title": "Méthode de non stockage des informations saisies",
    "summary": "Cela explique ce que cela signifie techniquement que votre date de naissance n'est enregistrée nulle part et ce qui est inclus dans le lien de résultat.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Aucun abonnement requis",
        "blocks": [
          {
            "p": "Inyeon-Link ne crée pas de comptes. Il ne collecte pas de noms, d'emails ou de numéros de téléphone. La seule information collectée est la date de naissance et (optionnellement) l'heure de naissance, le lieu de naissance et le sexe, et même cela ne reste pas après que le calcul soit terminé."
          },
          {
            "p": "Il y a un champ pour entrer un titre à afficher sur l'écran des résultats, mais cela est **uniquement à des fins d'affichage** et n'est pas utilisé dans le calcul. Vous n'avez pas besoin d'entrer votre vrai nom."
          }
        ]
      },
      {
        "title": "Qu'est-ce qui est inclus dans le lien de résultat ?",
        "blocks": [
          {
            "p": "Une fois le calcul terminé, l'adresse ressemble à ceci."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ce qui suit **#** est les valeurs d'entrée. Cette partie est appelée un **fragment**, qui est une **section que le navigateur n'envoie pas au serveur**. C'est un comportement web standard et non une règle que nous avons créée — il a été à l'origine conçu pour indiquer un emplacement dans un document, donc le serveur n'a pas besoin de le voir."
          },
          {
            "p": "En d'autres termes, lorsque vous ouvrez le lien de résultat, le navigateur lit cette valeur pour demander le calcul, et notre serveur reçoit les valeurs nécessaires pour le calcul, renvoie la réponse, puis l'oublie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Veuillez faire attention lorsque vous envoyez des liens à d'autres",
        "blocks": [
          {
            "p": "Le fait qu'il ne soit pas stocké sur le serveur et que le lien soit sûr ne sont pas la même chose. Le lien de résultat contient vos deux dates de naissance, donc la personne recevant ce lien peut voir le même résultat."
          }
        ]
      },
      {
        "title": "Pourquoi le calcul est-il effectué sur le serveur mais pas stocké ?",
        "blocks": [
          {
            "p": "Le calcul lui-même est effectué sur le serveur. L'almanach lunisolaire coréen est nécessaire pour générer le saju, et ce tableau est trop grand pour être envoyé au navigateur. Cependant, **après le traitement de la demande, cette valeur n'est utilisée nulle part.** Il n'y a pas de code pour la stocker dans une base de données."
          },
          {
            "p": "Un enregistrement minimal nécessaire au fonctionnement est conservé — un compteur pour empêcher la même personne d'envoyer trop de demandes en peu de temps. Cela n'inclut pas la date de naissance, et l'IP d'accès n'est pas conservée non plus. Une seule valeur, hachée avec la date, est comptée, et cette valeur change lorsque le jour change."
          }
        ]
      },
      {
        "title": "Choses qui ne peuvent pas être faites parce que les informations ne sont pas stockées",
        "blocks": [
          {
            "p": "Pour être honnête, il y a des choses que nous avons abandonnées parce que nous ne stockons pas d'informations."
          },
          {
            "ul": [
              "**Vous ne pouvez pas récupérer les résultats passés.** Vous devez avoir le lien pour les revoir.",
              "**Les mêmes valeurs seront recalculées.** Il n'y a pas de cache. Cependant, puisque toutes les règles sont déterministes, [les mêmes entrées donneront toujours la même valeur](/guide/how-compatibility).",
              "**Actualiser ramènera la porte de publicité.** Cela est dû au fait qu'il n'y a pas d'endroit pour conserver les enregistrements de visualisation."
            ]
          }
        ]
      },
      {
        "title": "En cas d'achat",
        "blocks": [
          {
            "p": "Si vous achetez un rapport, un enregistrement de transaction sera conservé à ce moment-là. La loi spécifie une période de conservation pour les paiements, et sans historique de commande, les remboursements ne peuvent pas être traités. Cependant, même dans ce cas, **la date de naissance utilisée pour les calculs de compatibilité n'est pas attachée à la commande** — elle est collectée à nouveau lors de la création du PDF après confirmation du paiement."
          },
          {
            "p": "Les détails sont décrits dans la [Politique de confidentialité](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produits payants",
    "title": "Qu'est-ce qui est inclus dans le rapport payant ?",
    "summary": "Cela explique ce qui a été ajouté au PDF tout en gardant l'écran inchangé, élément par élément. Les valeurs et contenus sont lus à partir des paramètres réels du produit.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "L'écran reste inchangé, seulement ajouté au PDF",
        "blocks": [
          {
            "p": "Les calculs de compatibilité et les demandes de résultats sont **gratuits**. Les taux de correspondance, les scores et poids des éléments, les graphiques originaux de saju des deux individus, et la forme de la relation peuvent tous être vus à l'écran. Rien n'a été retiré de l'écran lors de la création du rapport payant."
          },
          {
            "p": "Le but du rapport est d'**ajouter des couches qui ne sont pas à l'écran**. Et cette couche n'est pas fabriquée ; elle se compose de valeurs qui ont déjà été calculées lors du processus de notation mais qui n'ont pas été utilisées à l'écran."
          }
        ]
      },
      {
        "title": "Rapport de compatibilité Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Paiement domestique {priceGunghapDomestic} (TVA incluse), paiement international {priceGunghapGlobal}. A4 {pagesGunghap} pages."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Les pages 1-3 sont organisées pour garder ce qui est à l'écran** et **à partir de la page 4, le contenu n'est pas à l'écran**. Ci-dessous, il explique pourquoi certaines choses n'ont pas été affichées à l'écran."
          }
        ]
      },
      {
        "title": "Page 4 — La direction des deux énergies",
        "blocks": [
          {
            "p": "Les éléments des cinq éléments à l'écran sont présentés comme un score unique. Cependant, ce score unique est la **moyenne des deux directions** — mesurant combien l'autre me remplit et combien je remplis l'autre, et en faisant la moyenne de ces valeurs."
          },
          {
            "p": "La complémentarité est intrinsèquement **asymétrique**. Cela est dû au fait que les énergies dont j'ai besoin et les énergies dont l'autre a besoin sont différentes. Si vous ne regardez que la moyenne, une relation où un côté remplit l'autre de manière significative et une relation où les deux se remplissent mutuellement apparaîtront comme le même nombre. Le rapport sépare ces deux."
          },
          {
            "p": "Compris dans la même section est le **tableau de relation des quatre piliers**. Le seul qui entre dans le taux de correspondance est la branche du jour (日支) — car c'est la position du conjoint — mais les autres branches de l'année, du mois et de l'heure peuvent également être lues avec le même tableau de relation."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les scores dans ce tableau ne vont pas dans le taux de correspondance",
        "blocks": [
          {
            "p": "S'ils étaient inclus, le score total changerait et ne correspondrait pas au lien de résultat déjà envoyé. Par conséquent, il est inclus uniquement comme matériel de lecture, et ce fait est noté sous le tableau."
          }
        ]
      },
      {
        "title": "Page 5 — Un examen plus approfondi du saju de chaque personne",
        "blocks": [
          {
            "p": "Les barres des cinq éléments à l'écran montrent **combien est présent**. Le rapport ajoute **si le mois de naissance soutient cette énergie**. Même avec la même quantité, l'énergie qui est forte (旺) et l'énergie qui est morte (死) ont des forces différentes."
          },
          {
            "p": "Vous pouvez voir les forces avant et après multiplication par l'énergie du mois côte à côte, montrant combien la saison l'a poussée. Le **ratio d'allié** qui distingue entre un maître de jour fort et un maître de jour faible est également noté — l'écran montre uniquement le jugement, mais le rapport montre où ce jugement a été fait."
          }
        ]
      },
      {
        "title": "Page 6 — Ce que les quatre piliers de l'autre personne signifient pour moi",
        "blocks": [
          {
            "p": "Le taux de correspondance ne compare que les **tiges du jour** des deux individus. Cependant, les trois autres piliers de l'autre personne sont également déterminés par les Dix Dieux en utilisant les mêmes règles. Bien que vous puissiez comprendre **ce que cette personne signifie pour moi** en regardant uniquement la tige du jour, vous ne pouvez pas savoir **quelle position de cette personne signifie pour moi**."
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
            "p": "Il indique dans quelle mesure l'heure de naissance a été ajustée au **temps solaire vrai**, si la correction a entraîné un changement de date, et quelles étaient les dates solaire et lunaire lorsque le saju a été généré. Le concept est expliqué dans le document [Ajuster l'heure de naissance au temps solaire vrai](/guide/true-solar-time), mais **la valeur du nombre de minutes qui ont été ajustées dans votre cas** varie d'une personne à l'autre, donc elle n'est incluse que dans le rapport."
          }
        ]
      },
      {
        "title": "Rapport de profil de correspondance Inyeon PDF — {priceAffinityDomestic}",
        "slot": "",
        "blocks": [
          {
            "p": "Paiement national {priceAffinityDomestic} (TVA incluse), paiement international {priceAffinityGlobal}. {pagesAffinity} pages A4."
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
    "eyebrow": "Avis",
    "title": "Annonces",
    "summary": "C'est un endroit pour informer des changements qui affectent l'utilisation.",
    "backLabel": "Retour à l'accueil",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Demandes",
    "summary": "C'est le canal pour les demandes concernant l'utilisation, les remboursements, les demandes d'informations personnelles et les rapports d'erreurs, ainsi que les informations commerciales.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "title": "Contact par Email",
        "blocks": [
          {
            "p": "Veuillez envoyer vos demandes à **{email}**. Nous répondrons dans les 2 jours ouvrables. Pour les demandes de paiement et de remboursement, veuillez inclure **le numéro de commande ou l'email utilisé pour le paiement** pour une confirmation plus rapide."
          },
          {
            "p": "Les demandes par téléphone peuvent être faites au {customerCenter}."
          }
        ]
      },
      {
        "title": "Que peut-on envoyer à ce canal ?",
        "blocks": [
          {
            "ul": [
              "**Paiement et Remboursement** — Si le document n'a pas été créé ou si le montant du paiement diffère de la commande, un remboursement complet sera fourni. Les conditions sont dans la [politique de remboursement](/refund-policy).",
              "**Informations Personnelles** — Nous acceptons les demandes de consultation, de correction et de suppression. La politique de traitement est dans la [politique de confidentialité](/privacy).",
              "**Rapport d'Erreur de Calcul** — Si le tableau original du saju ou le score semble étrange, veuillez nous le faire savoir. Si vous incluez quand vous avez entré la date et l'heure, nous pouvons recalculer avec les mêmes valeurs."
            ]
          }
        ]
      },
      {
        "title": "Informations Commerciales",
        "blocks": [
          {
            "ul": [
              "**Nom de l'Entreprise** — {companyName}",
              "**Représentant** — {representative}",
              "**Numéro d'Enregistrement de l'Entreprise** — {businessNumber}",
              "**Numéro d'Enregistrement de Vente par Correspondance** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Centre Client** — {customerCenter}",
              "**Email** — {email}",
              "**Responsable de la Protection des Informations Personnelles** — {privacyOfficer}",
              "**Fournisseur d'Hébergement** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Vous n'avez pas besoin d'inclure votre date et heure de naissance dans l'email de demande. Nous ne sauvegardons pas les saisies, donc nous ne pouvons pas les récupérer, et le numéro de commande est suffisant pour la confirmation. Veuillez l'inclure uniquement si cela est nécessaire pour un rapport d'erreur de calcul."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FR_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Rapports",
    "engine": "Calcul",
    "support": "Support"
  },
  "intro": "Les changements de vos conditions d'utilisation — prix, politiques — sont affichés ici avant qu'ils n'entrent en vigueur. Les améliorations internes ne sont pas listées : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Aucune notification pour le moment",
    "body": "Lorsque quelque chose change, cela apparaîtra ici."
  },
  "effective": "Entre en vigueur le {date}",
  "pager": {
    "label": "Pages de notification",
    "newer": "← Plus récent",
    "older": "Plus ancien →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Les pages Contact et À propos sont maintenant ouvertes",
      "body": [
        "Questions, remboursements, demandes de confidentialité et rapports d'erreurs de calcul ont maintenant un seul endroit où aller — consultez la page de contact dans le pied de page.",
        "Si quelque chose semble mal calculé, veuillez inclure les détails de naissance qui l'ont produit. Nous ne stockons pas ce que vous entrez, donc sans eux, nous ne pouvons pas reproduire la lecture."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Les rapports sont émis en anglais pour l'arabe et le khmer",
      "body": [
        "Si vous lisez en arabe ou en khmer, le rapport PDF que vous achetez est produit en anglais. L'outil qui met en page nos documents ne peut pas encore définir des paragraphes dans ces scripts.",
        "L'écran reste dans votre langue, et votre nom est imprimé dans votre propre script à l'intérieur du rapport.",
        "La même note apparaît avant le paiement. Lorsque l'outil prendra en charge ces scripts, nous le dirons ici."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Chaque lecture porte la version des règles utilisées",
      "body": [
        "Chaque lecture et rapport porte l'ensemble de règles utilisé pour le produire (par exemple inyeonlink-match-v10). La même entrée sur le même ensemble de règles donne toujours les mêmes chiffres.",
        "Si nous changeons les règles d'interprétation d'une manière qui peut modifier un score, nous le publions ici en premier, avec la date à laquelle cela entre en vigueur — car un lien de résultat que vous détenez déjà pourrait alors donner un résultat différent.",
        "L'ensemble de règles actuel est v10. Les paiements ne sont pas encore ouverts."
      ]
    }
  }
} satisfies NoticeCopy;
