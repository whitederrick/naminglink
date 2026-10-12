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
            "p": "La lecture à l'écran est **gratuite et ne nécessite aucun compte.** Les éléments payants sont des rapports PDF contenant des chiffres que l'écran ne montre jamais — forces des éléments, associations des dix dieux et les relations à travers les quatre piliers."
          }
        ]
      },
      {
        "title": "Ce que nous calculons",
        "blocks": [
          {
            "p": "Les cartes sont construites à partir de **l'almanach lunisolaire coréen**, et l'heure de naissance est corrigée à **l'heure solaire réelle** pour le lieu de naissance — la même heure de l'horloge signifie une position du soleil différente selon l'endroit où vous êtes né."
          },
          {
            "p": "Les scores proviennent uniquement de règles fixes. Les concepts traditionnels — dix dieux, relations entre branches, élément de soutien — sont exprimés sous forme de règles, donc **la même entrée donne toujours le même résultat.** Lorsque une règle change, nous exécutons un système de régression pour nous assurer que les lectures plus anciennes n'ont pas été affectées."
          },
          {
            "p": "**Aucune IA n'est impliquée.** Chaque phrase à l'écran est un texte fixe attaché à un résultat calculé."
          }
        ]
      },
      {
        "title": "Ce que nous ne revendiquons pas",
        "blocks": [
          {
            "ul": [
              "**Nous ne prédisons pas l'avenir.** Rien ici ne vous dit de poursuivre ou d'éviter quelqu'un. C'est une référence tirée d'une tradition.",
              "**Nous ne stockons pas ce que vous entrez.** Les détails de naissance sont utilisés au moment du calcul et ne sont jamais notés ; les liens de résultats vivent dans la partie de l'URL qu'un navigateur n'envoie pas à un serveur.",
              "**Un score n'est pas un verdict sur une personne.** Un nombre bas n'invalide pas une relation."
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
    "summary": "Elle clarifie quatre éléments et leurs poids respectifs, et explique pourquoi ces quatre sont choisis. Elle aborde également pourquoi des calculs peuvent être effectués même sans connaître l'heure de naissance.",
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
                  "Compatibilité Saju",
                  "Tige du jour, branche du jour et les cinq éléments — quatre éléments",
                  "{weightSaju}"
                ],
                [
                  "Compatibilité Zodiacale",
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
        "title": "Les quatre éléments de la compatibilité Saju",
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
              "branch": "Branche Terrestre",
              "branchNote": "Branche du Jour = Palais du Conjoint"
            }
          },
          {
            "table": {
              "head": [
                "Élément",
                "Ce qui est Considéré",
                "Poids"
              ],
              "rows": [
                [
                  "Relation entre les Tiges du Jour",
                  "Ce que les tiges du jour (日干) des deux personnes sont l'une pour l'autre — vu à travers les Dix Dieux",
                  "{weightDayMaster}"
                ],
                [
                  "Complémentation des Cinq Éléments",
                  "Le partenaire a-t-il l'énergie dont j'ai besoin — vu à travers l'élément de soutien dont un graphique a actuellement besoin",
                  "{weightElementSupply}"
                ],
                [
                  "Étoile du Conjoint",
                  "La tige du jour du partenaire correspond-elle à ma position de conjoint ?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relation entre les Branches du Jour",
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
        "title": "Si le genre n'est pas divulgué, l'élément du conjoint est omis",
        "blocks": [
          {
            "p": "L'élément du conjoint nécessite la connaissance du genre pour le calcul. La tradition lit la position qui désigne un conjoint différemment selon le genre. Si non divulgué, cet élément sera **exclu** et les poids des trois éléments restants seront renormalisés."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il ne sera pas traité comme 0 points",
        "blocks": [
          {
            "p": "Si les positions manquantes sont traitées comme 0 points, le score sera injustement abaissé simplement parce que le genre n'a pas été divulgué. La renormalisation des poids empêche ce problème."
          }
        ]
      },
      {
        "title": "Les calculs peuvent être effectués sans connaître l'heure de naissance",
        "blocks": [
          {
            "p": "L'heure de naissance est utilisée pour déterminer le pilier de l'heure. Si inconnue, les calculs seront effectués sans le pilier de l'heure, et ce fait sera indiqué sur l'écran des résultats. Étant donné qu'il n'y a pas d'entrée directe pour le pilier de l'heure parmi les quatre éléments de compatibilité, les valeurs ne fluctueront pas de manière significative, mais cela affecte l'équilibre des cinq éléments."
          },
          {
            "p": "Si vous connaissez l'heure, veuillez également sélectionner le lieu de naissance. Si l'heure standard diffère de la position solaire réelle, l'utiliser telle quelle peut désaligner le pilier de l'heure [(correction de l'heure solaire réelle)](/guide/true-solar-time)."
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
        "title": "Changer les règles augmentera la version",
        "blocks": [
          {
            "p": "Chaque fois que les règles de notation sont modifiées, la version du moteur est mise à jour. La version est notée en bas de l'écran des résultats, vous permettant de distinguer quelles règles ont été utilisées pour calculer les chiffres que vous visualisez actuellement."
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
    "title": "Comment les animaux du zodiaque et les branches du jour se rencontrent — Le tableau des douze branches",
    "summary": "Le tableau des relations utilisé lorsque les animaux du zodiaque et les branches du jour de deux personnes sont placés côte à côte. Il indique, pour chacun des douze, avec quels animaux il forme une harmonie, un choc ou une discorde, et dévoile le score de chaque relation.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Les animaux du zodiaque et les branches du jour utilisent le même tableau",
        "blocks": [
          {
            "p": "Inyeon-Link place côte à côte les branches terrestres de deux personnes à deux endroits : la **compatibilité zodiacale**, qui regarde la branche de l'année de naissance, et la **compatibilité de la branche du jour** (le palais du conjoint), qui regarde la branche du jour de naissance. Les deux sont jugées avec le tableau ci-dessous ; la seule différence est le poids que chacune porte dans le score final."
          },
          {
            "figure": "branch-wheel",
            "caption": "Disposer les douze caractères en cercle rend les relations lisibles d'un coup d'œil. Un choc se trouve toujours directement en face, tandis qu'une paire de six-harmonies et une discorde silencieuse sont des voisins plus proches. Ces lignes ne sont pas tracées à la main ; elles sont dessinées directement à partir des règles de calcul.",
            "labels": {
              "alt": "Un diagramme montrant les douze branches terrestres disposées en cercle, avec des lignes reliant les paires de six-harmonies, de choc et de discorde.",
              "yukhap": "Six-Harmonies",
              "chung": "Choc",
              "wonjin": "Discorde",
              "rat": "Rat",
              "ox": "Bœuf",
              "tiger": "Tigre",
              "rabbit": "Lapin",
              "dragon": "Dragon",
              "snake": "Serpent",
              "horse": "Cheval",
              "goat": "Mouton",
              "monkey": "Singe",
              "rooster": "Coq",
              "dog": "Chien",
              "pig": "Cochon"
            }
          }
        ]
      },
      {
        "title": "Les relations de chacun des douze animaux du zodiaque",
        "blocks": [
          {
            "p": "Pour chaque animal, le tableau indique avec quels animaux il forme chaque relation. Seules les paires que ce service reconnaît comme des harmonies sont listées ; un animal qui n'apparaît pas dans une ligne n'a aucune relation particulière avec elle — il est **neutre**."
          },
          {
            "table": {
              "caption": "Quatre types de relation vus depuis un animal",
              "head": [
                "Votre animal",
                "Paire qui s'attire (six-harmonies)",
                "Triade partielle",
                "Désaccord silencieux (discorde)",
                "Collision frontale (choc)"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Bœuf",
                  "Singe · Dragon",
                  "Mouton",
                  "Cheval"
                ],
                [
                  "Bœuf (丑)",
                  "Rat",
                  "Coq",
                  "Cheval",
                  "Mouton"
                ],
                [
                  "Tigre (寅)",
                  "Cochon",
                  "Cheval",
                  "Coq",
                  "Singe"
                ],
                [
                  "Lapin (卯)",
                  "Chien",
                  "Cochon · Mouton",
                  "Singe",
                  "Coq"
                ],
                [
                  "Dragon (辰)",
                  "Coq",
                  "Rat",
                  "Cochon",
                  "Chien"
                ],
                [
                  "Serpent (巳)",
                  "Singe",
                  "Coq",
                  "Chien",
                  "Cochon"
                ],
                [
                  "Cheval (午)",
                  "Mouton",
                  "Tigre · Chien",
                  "Bœuf",
                  "Rat"
                ],
                [
                  "Mouton (未)",
                  "Cheval",
                  "Lapin",
                  "Rat",
                  "Bœuf"
                ],
                [
                  "Singe (申)",
                  "Serpent",
                  "Rat",
                  "Lapin",
                  "Tigre"
                ],
                [
                  "Coq (酉)",
                  "Dragon",
                  "Serpent · Bœuf",
                  "Tigre",
                  "Lapin"
                ],
                [
                  "Chien (戌)",
                  "Lapin",
                  "Cheval",
                  "Serpent",
                  "Dragon"
                ],
                [
                  "Cochon (亥)",
                  "Tigre",
                  "Lapin",
                  "Dragon",
                  "Serpent"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Quand deux personnes se rencontrent dans le tableau",
        "blocks": [
          {
            "p": "Lire le tableau, c'est trouver les deux animaux sur une même ligne. Voici quelques paires en exemple."
          },
          {
            "ul": [
              "**Rat et Bœuf** — une relation de six-harmonies. Elle ne demande que deux caractères ; c'est donc l'harmonie qui apparaît le plus souvent en compatibilité, et une bonne.",
              "**Rat et Dragon** — une triade partielle : deux des trois caractères 申子辰, dont celui du milieu (子).",
              "**Rat et Tigre** — absent du tableau, donc neutre : ni harmonie ni choc, simplement la base de référence.",
              "**Rat et Mouton** — une discorde. Elle paraît calme en surface, mais on estime que le décalage perdure.",
              "**Tigre et Singe** — un choc. Ils se font directement face et sont considérés comme entrant en collision frontale."
            ]
          }
        ]
      },
      {
        "title": "Combien de points rapporte chaque relation",
        "blocks": [
          {
            "table": {
              "caption": "Du plus élevé au plus bas. Ce sont les valeurs qu'Inyeon-Link utilise réellement.",
              "head": [
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Choc",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "La même branche (deux personnes du même animal) signifie ressemblance, non attirance ; elle se situe donc juste au-dessus du neutre. Qu'il s'agisse de la compatibilité zodiacale ou de celle de la branche du jour, la valeur de ce tableau entre directement dans le score final."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pourquoi les triades complètes ne figurent pas dans le tableau",
        "blocks": [
          {
            "p": "Une triade complète (申子辰, 巳酉丑, 寅午戌, 亥卯未) exige les trois caractères. En plaçant deux personnes côte à côte, on n'en obtient que deux ; une triade complète ne peut donc pas se produire en compatibilité et seules des triades partielles apparaissent. Le score de {scoreSamhap} de la triade complète est conservé pour le cas où trois caractères se rejoignent dans le thème d'une seule personne."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 et 亥未 ne comptent pas comme harmonies",
        "blocks": [
          {
            "p": "Certaines méthodes comptent deux caractères quelconques d'un même groupe de triade comme une triade partielle. Inyeon-Link ne le fait pas : comme le montre la colonne des triades partielles ci-dessus, il n'accepte que les paires qui incluent la **branche royale** au centre du groupe (子, 午, 卯, 酉). Une paire qui en est dépourvue n'a pas de centre autour duquel la formation puisse se rassembler ; elle est donc traitée comme neutre."
          }
        ]
      },
      {
        "title": "La discorde et le choc ne sont pas au plancher",
        "blocks": [
          {
            "p": "Si l'on ne comptait que les harmonies et les chocs, les six paires de discorde seraient noyées dans le neutre. La discorde a donc sa propre place : plus haut que le choc frontal et plus bas que le neutre, à {scoreWonjin} points."
          },
          {
            "p": "Même un choc garde {scoreChung} points. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation. Une valeur proche de zéro amènerait le service à prononcer un verdict sur deux personnes ; l'écart est donc maintenu assez large pour montrer la différence sans rendre de verdict."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiaque",
    "title": "Pourquoi la compatibilité zodiacale considère-t-elle la branche terrestre de l'année ?",
    "summary": "Le zodiaque est la branche terrestre de l'année de naissance. Cela explique pourquoi il est dérivé du pilier de l'année du saju plutôt que de l'année calendaire, et clarifie l'importance de la compatibilité zodiacale.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le zodiaque est la branche terrestre de l'année de naissance",
        "blocks": [
          {
            "p": "Le saju se compose de quatre piliers : année, mois, jour et heure, chaque pilier contenant une tige céleste et une branche terrestre. La **branche terrestre de l'année** est celle qui porte l'animal que nous appelons le signe zodiacal."
          },
          {
            "table": {
              "caption": "Les Douze Branches Terrestres et le Zodiaque",
              "head": [
                "Branche Terrestre",
                "Zodiaque"
              ],
              "rows": [
                [
                  "子",
                  "Rat"
                ],
                [
                  "丑",
                  "Bœuf"
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
            "p": "Le point auquel le zodiaque change n'est ni le 1er janvier du calendrier solaire ni le Nouvel An lunaire. La norme pour changer d'année dans le saju est **Ipchun**. Par conséquent, ceux nés en janvier ou début février peuvent avoir une année zodiacale différente de celle du calendrier."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La raison pour laquelle nous ne demandons pas directement le zodiaque",
        "blocks": [
          {
            "p": "C'est pourquoi nous ne collectons que la date de naissance sans demander le zodiaque sur l'écran d'entrée. Lorsque le moteur de saju calcule la branche terrestre de l'année, la limite d'Ipchun est automatiquement ajustée. Si vous le sélectionnez directement, quelqu'un né début février peut choisir un zodiaque qui ne correspond pas au sien."
          }
        ]
      },
      {
        "title": "La compatibilité zodiacale ne considère qu'une seule relation",
        "blocks": [
          {
            "p": "Le calcul de la compatibilité zodiacale est simple. Il compare les branches terrestres de deux personnes pour déterminer si la relation est harmonieuse, un choc ou une discorde silencieuse, et utilise ce score tel quel. Comme il n'y a qu'un seul élément, il n'est pas nécessaire de distribuer des poids."
          },
          {
            "p": "Les scores pour chaque relation sont tous listés dans le [Tableau des Relations des Douze Branches](/guide/branches). La compatibilité de la branche du jour utilise le même tableau."
          }
        ]
      },
      {
        "title": "La raison de déterminer le poids",
        "blocks": [
          {
            "p": "La compatibilité zodiacale compte pour {weightZodiac} du taux de correspondance final. Alors que la compatibilité saju examine les quatre piliers, le zodiaque ne considère qu'un seul caractère, donc ils ne peuvent pas être pondérés de manière égale."
          },
          {
            "p": "Cependant, il y a deux raisons pour lesquelles il n'est pas exclu."
          },
          {
            "ul": [
              "**C'est l'élément le plus intuitivement compréhensible**. Même sans connaître le vocabulaire de la tradition, 'le tigre et le singe forment un choc' a du sens.",
              "**C'est le seul axe qui ne fluctue pas même si l'heure de naissance est inconnue**. Si vous ne connaissez pas l'heure, le pilier de l'heure est manquant et la force des cinq éléments change, mais la branche terrestre de l'année reste la même."
            ]
          }
        ]
      },
      {
        "title": "Vous pouvez également consulter la compatibilité zodiacale séparément",
        "blocks": [
          {
            "p": "Sur l'écran des résultats, nous montrons les scores pour la compatibilité saju et la compatibilité zodiacale séparément. Si seul le taux de correspondance final est présenté, il n'est pas clair d'où vient ce nombre. Si les deux valeurs sont significativement différentes, cela vaut la peine d'être noté."
          }
        ]
      }
    ]
  },
  "guide/zodiac-rat": {
    "eyebrow": "Par animal",
    "title": "Comment le Rat rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Rat (子) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Rat est la première des douze branches",
        "blocks": [
          {
            "p": "Le Rat est une personne dont la branche de l'année de naissance est **子**. 子 est la première des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 午 (le Cheval)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Rat est : « Remarque vite et met vite à l'abri ce qui compte. Le premier à bouger en cas de crise. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Rat. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Rat et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Bœuf (丑)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Tigre (寅)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Lapin (卯)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Serpent (巳)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cheval (午)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Mouton (未)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Singe (申)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Coq (酉)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Chien (戌)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cochon (亥)",
                  "Neutre",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Bœuf — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "子 et 丑 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Rat et le Bœuf obtiennent {scoreYukhap}, le maximum que le Rat puisse obtenir."
          }
        ]
      },
      {
        "title": "Dragon et Singe — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "申子辰 est un groupe de triade (le groupe de l'eau), et 子 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Rat forme une triade partielle ({scoreBanhap}) à la fois avec le Dragon et avec le Singe."
          },
          {
            "p": "**Le Singe et le Dragon ensemble**, en revanche, n'ont pas le caractère central 子 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres. Même au sein d'un groupe de triade, c'est le Rat qui forme la triade partielle."
          }
        ]
      },
      {
        "title": "Cheval — la collision frontale (choc)",
        "blocks": [
          {
            "p": "子 et 午 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Rat puisse recevoir."
          }
        ]
      },
      {
        "title": "Mouton — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "子 et 未 se trouvent juste à côté de 午 (le Cheval), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 6 autres animaux, et le Rat avec un autre Rat",
        "blocks": [
          {
            "p": "Le Tigre, le Lapin, le Serpent, le Coq, le Chien et le Cochon ne forment ni harmonie, ni choc, ni discorde avec le Rat : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Rat obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Rat rencontre une personne Cheval, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Bœuf, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Rat dont les branches du jour sont 子 et 午 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Par animal",
    "title": "Comment le Bœuf rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Bœuf (丑) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Bœuf est la deuxième des douze branches",
        "blocks": [
          {
            "p": "Le Bœuf est une personne dont la branche de l'année de naissance est **丑**. 丑 est la deuxième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 未 (le Mouton)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Bœuf est : « Paraît lent mais va jusqu'au bout. Ce qu'il prend en charge, il ne le lâche pas. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Bœuf. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Bœuf et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Bœuf (丑)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Tigre (寅)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Lapin (卯)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Serpent (巳)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cheval (午)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Mouton (未)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Singe (申)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Coq (酉)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Chien (戌)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cochon (亥)",
                  "Neutre",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Rat — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "丑 et 子 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Bœuf et le Rat obtiennent {scoreYukhap}, le maximum que le Bœuf puisse obtenir."
          }
        ]
      },
      {
        "title": "Coq — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "巳酉丑 est un groupe de triade (le groupe du métal), et 酉 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Bœuf forme une triade partielle ({scoreBanhap}) uniquement avec le Coq."
          },
          {
            "p": "Avec le Serpent (巳) du même groupe, le caractère central 酉 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Mouton — la collision frontale (choc)",
        "blocks": [
          {
            "p": "丑 et 未 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Bœuf puisse recevoir."
          }
        ]
      },
      {
        "title": "Cheval — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "丑 et 午 se trouvent juste à côté de 未 (le Mouton), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Bœuf avec un autre Bœuf",
        "blocks": [
          {
            "p": "Le Tigre, le Lapin, le Dragon, le Serpent, le Singe, le Chien et le Cochon ne forment ni harmonie, ni choc, ni discorde avec le Bœuf : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Bœuf obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Bœuf rencontre une personne Mouton, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Rat, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Bœuf dont les branches du jour sont 丑 et 未 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Par animal",
    "title": "Comment le Tigre rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Tigre (寅) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Tigre est la troisième des douze branches",
        "blocks": [
          {
            "p": "Le Tigre est une personne dont la branche de l'année de naissance est **寅**. 寅 est la troisième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 申 (le Singe)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Tigre est : « Sans peur et en première ligne. Ne peut pas laisser passer une injustice. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Tigre. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Tigre et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Bœuf (丑)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Lapin (卯)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Serpent (巳)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cheval (午)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Mouton (未)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Singe (申)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Coq (酉)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Chien (戌)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cochon (亥)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cochon — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "寅 et 亥 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Tigre et le Cochon obtiennent {scoreYukhap}, le maximum que le Tigre puisse obtenir."
          }
        ]
      },
      {
        "title": "Cheval — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "寅午戌 est un groupe de triade (le groupe du feu), et 午 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Tigre forme une triade partielle ({scoreBanhap}) uniquement avec le Cheval."
          },
          {
            "p": "Avec le Chien (戌) du même groupe, le caractère central 午 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Singe — la collision frontale (choc)",
        "blocks": [
          {
            "p": "寅 et 申 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Tigre puisse recevoir."
          }
        ]
      },
      {
        "title": "Coq — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "寅 et 酉 se trouvent juste à côté de 申 (le Singe), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Tigre avec un autre Tigre",
        "blocks": [
          {
            "p": "Le Rat, le Bœuf, le Lapin, le Dragon, le Serpent, le Mouton et le Chien ne forment ni harmonie, ni choc, ni discorde avec le Tigre : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Tigre obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Tigre rencontre une personne Singe, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Cochon, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Tigre dont les branches du jour sont 寅 et 申 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Par animal",
    "title": "Comment le Lapin rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Lapin (卯) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Lapin est la quatrième des douze branches",
        "blocks": [
          {
            "p": "Le Lapin est une personne dont la branche de l'année de naissance est **卯**. 卯 est la quatrième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 酉 (le Coq)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Lapin est : « Doux et perspicace. Sait contourner plutôt qu'entrer en collision. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Lapin. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Lapin et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Bœuf (丑)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Lapin (卯)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Dragon (辰)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Serpent (巳)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cheval (午)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Mouton (未)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Singe (申)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Coq (酉)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Chien (戌)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Cochon (亥)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Chien — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "卯 et 戌 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Lapin et le Chien obtiennent {scoreYukhap}, le maximum que le Lapin puisse obtenir."
          }
        ]
      },
      {
        "title": "Mouton et Cochon — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "亥卯未 est un groupe de triade (le groupe du bois), et 卯 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Lapin forme une triade partielle ({scoreBanhap}) à la fois avec le Mouton et avec le Cochon."
          },
          {
            "p": "**Le Cochon et le Mouton ensemble**, en revanche, n'ont pas le caractère central 卯 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres. Même au sein d'un groupe de triade, c'est le Lapin qui forme la triade partielle."
          }
        ]
      },
      {
        "title": "Coq — la collision frontale (choc)",
        "blocks": [
          {
            "p": "卯 et 酉 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Lapin puisse recevoir."
          }
        ]
      },
      {
        "title": "Singe — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "卯 et 申 se trouvent juste à côté de 酉 (le Coq), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 6 autres animaux, et le Lapin avec un autre Lapin",
        "blocks": [
          {
            "p": "Le Rat, le Bœuf, le Tigre, le Dragon, le Serpent et le Cheval ne forment ni harmonie, ni choc, ni discorde avec le Lapin : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Lapin obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Lapin rencontre une personne Coq, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Chien, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Lapin dont les branches du jour sont 卯 et 酉 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Par animal",
    "title": "Comment le Dragon rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Dragon (辰) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Dragon est la cinquième des douze branches",
        "blocks": [
          {
            "p": "Le Dragon est une personne dont la branche de l'année de naissance est **辰**. 辰 est la cinquième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 戌 (le Chien)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Dragon est : « Grand cœur et idéaux élevés. Se contente rarement de l'ordinaire. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Dragon. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Dragon et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Bœuf (丑)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Lapin (卯)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Serpent (巳)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cheval (午)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Mouton (未)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Singe (申)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Coq (酉)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Chien (戌)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Cochon (亥)",
                  "Discorde",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Coq — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "辰 et 酉 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Dragon et le Coq obtiennent {scoreYukhap}, le maximum que le Dragon puisse obtenir."
          }
        ]
      },
      {
        "title": "Rat — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "申子辰 est un groupe de triade (le groupe de l'eau), et 子 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Dragon forme une triade partielle ({scoreBanhap}) uniquement avec le Rat."
          },
          {
            "p": "Avec le Singe (申) du même groupe, le caractère central 子 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Chien — la collision frontale (choc)",
        "blocks": [
          {
            "p": "辰 et 戌 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Dragon puisse recevoir."
          }
        ]
      },
      {
        "title": "Cochon — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "辰 et 亥 se trouvent juste à côté de 戌 (le Chien), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Dragon avec un autre Dragon",
        "blocks": [
          {
            "p": "Le Bœuf, le Tigre, le Lapin, le Serpent, le Cheval, le Mouton et le Singe ne forment ni harmonie, ni choc, ni discorde avec le Dragon : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Dragon obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Dragon rencontre une personne Chien, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Coq, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Dragon dont les branches du jour sont 辰 et 戌 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Par animal",
    "title": "Comment le Serpent rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Serpent (巳) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Serpent est la sixième des douze branches",
        "blocks": [
          {
            "p": "Le Serpent est une personne dont la branche de l'année de naissance est **巳**. 巳 est la sixième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 亥 (le Cochon)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Serpent est : « Garde ses pensées pour lui et réfléchit en profondeur. Juge avec justesse. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Serpent. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Serpent et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Bœuf (丑)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Lapin (卯)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Serpent (巳)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Cheval (午)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Mouton (未)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Singe (申)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Coq (酉)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Chien (戌)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Cochon (亥)",
                  "Choc",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Singe — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "巳 et 申 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Serpent et le Singe obtiennent {scoreYukhap}, le maximum que le Serpent puisse obtenir."
          }
        ]
      },
      {
        "title": "Coq — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "巳酉丑 est un groupe de triade (le groupe du métal), et 酉 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Serpent forme une triade partielle ({scoreBanhap}) uniquement avec le Coq."
          },
          {
            "p": "Avec le Bœuf (丑) du même groupe, le caractère central 酉 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Cochon — la collision frontale (choc)",
        "blocks": [
          {
            "p": "巳 et 亥 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Serpent puisse recevoir."
          }
        ]
      },
      {
        "title": "Chien — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "巳 et 戌 se trouvent juste à côté de 亥 (le Cochon), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Serpent avec un autre Serpent",
        "blocks": [
          {
            "p": "Le Rat, le Bœuf, le Tigre, le Lapin, le Dragon, le Cheval et le Mouton ne forment ni harmonie, ni choc, ni discorde avec le Serpent : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Serpent obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Serpent rencontre une personne Cochon, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Singe, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Serpent dont les branches du jour sont 巳 et 亥 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Par animal",
    "title": "Comment le Cheval rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Cheval (午) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Cheval est la septième des douze branches",
        "blocks": [
          {
            "p": "Le Cheval est une personne dont la branche de l'année de naissance est **午**. 午 est la septième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 子 (le Rat)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Cheval est : « Enjoué et remuant. Être enfermé est ce qu'il supporte le moins. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Cheval. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Cheval et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Bœuf (丑)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Tigre (寅)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Lapin (卯)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Serpent (巳)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cheval (午)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Mouton (未)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Singe (申)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Coq (酉)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Chien (戌)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Cochon (亥)",
                  "Neutre",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mouton — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "午 et 未 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Cheval et le Mouton obtiennent {scoreYukhap}, le maximum que le Cheval puisse obtenir."
          }
        ]
      },
      {
        "title": "Tigre et Chien — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "寅午戌 est un groupe de triade (le groupe du feu), et 午 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Cheval forme une triade partielle ({scoreBanhap}) à la fois avec le Tigre et avec le Chien."
          },
          {
            "p": "**Le Tigre et le Chien ensemble**, en revanche, n'ont pas le caractère central 午 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres. Même au sein d'un groupe de triade, c'est le Cheval qui forme la triade partielle."
          }
        ]
      },
      {
        "title": "Rat — la collision frontale (choc)",
        "blocks": [
          {
            "p": "午 et 子 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Cheval puisse recevoir."
          }
        ]
      },
      {
        "title": "Bœuf — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "午 et 丑 se trouvent juste à côté de 子 (le Rat), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 6 autres animaux, et le Cheval avec un autre Cheval",
        "blocks": [
          {
            "p": "Le Lapin, le Dragon, le Serpent, le Singe, le Coq et le Cochon ne forment ni harmonie, ni choc, ni discorde avec le Cheval : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Cheval obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Cheval rencontre une personne Rat, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Mouton, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Cheval dont les branches du jour sont 午 et 子 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Par animal",
    "title": "Comment le Mouton rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Mouton (未) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Mouton est la huitième des douze branches",
        "blocks": [
          {
            "p": "Le Mouton est une personne dont la branche de l'année de naissance est **未**. 未 est la huitième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 丑 (le Bœuf)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Mouton est : « Chaleureux et attentionné. Garde longtemps les paroles dures. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Mouton. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Mouton et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Bœuf (丑)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Tigre (寅)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Lapin (卯)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Dragon (辰)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Serpent (巳)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cheval (午)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Mouton (未)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Singe (申)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Coq (酉)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Chien (戌)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cochon (亥)",
                  "Neutre",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cheval — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "未 et 午 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Mouton et le Cheval obtiennent {scoreYukhap}, le maximum que le Mouton puisse obtenir."
          }
        ]
      },
      {
        "title": "Lapin — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "亥卯未 est un groupe de triade (le groupe du bois), et 卯 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Mouton forme une triade partielle ({scoreBanhap}) uniquement avec le Lapin."
          },
          {
            "p": "Avec le Cochon (亥) du même groupe, le caractère central 卯 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Bœuf — la collision frontale (choc)",
        "blocks": [
          {
            "p": "未 et 丑 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Mouton puisse recevoir."
          }
        ]
      },
      {
        "title": "Rat — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "未 et 子 se trouvent juste à côté de 丑 (le Bœuf), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Mouton avec un autre Mouton",
        "blocks": [
          {
            "p": "Le Tigre, le Dragon, le Serpent, le Singe, le Coq, le Chien et le Cochon ne forment ni harmonie, ni choc, ni discorde avec le Mouton : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Mouton obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Mouton rencontre une personne Bœuf, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Cheval, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Mouton dont les branches du jour sont 未 et 丑 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Par animal",
    "title": "Comment le Singe rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Singe (申) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Singe est la neuvième des douze branches",
        "blocks": [
          {
            "p": "Le Singe est une personne dont la branche de l'année de naissance est **申**. 申 est la neuvième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 寅 (le Tigre)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Singe est : « Ingénieux et prompt à s'adapter. La répétition l'ennuie. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Singe. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Singe et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Bœuf (丑)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Lapin (卯)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Dragon (辰)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Serpent (巳)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Cheval (午)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Mouton (未)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Singe (申)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Coq (酉)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Chien (戌)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cochon (亥)",
                  "Neutre",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Serpent — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "申 et 巳 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Singe et le Serpent obtiennent {scoreYukhap}, le maximum que le Singe puisse obtenir."
          }
        ]
      },
      {
        "title": "Rat — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "申子辰 est un groupe de triade (le groupe de l'eau), et 子 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Singe forme une triade partielle ({scoreBanhap}) uniquement avec le Rat."
          },
          {
            "p": "Avec le Dragon (辰) du même groupe, le caractère central 子 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Tigre — la collision frontale (choc)",
        "blocks": [
          {
            "p": "申 et 寅 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Singe puisse recevoir."
          }
        ]
      },
      {
        "title": "Lapin — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "申 et 卯 se trouvent juste à côté de 寅 (le Tigre), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Singe avec un autre Singe",
        "blocks": [
          {
            "p": "Le Bœuf, le Dragon, le Cheval, le Mouton, le Coq, le Chien et le Cochon ne forment ni harmonie, ni choc, ni discorde avec le Singe : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Singe obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Singe rencontre une personne Tigre, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Serpent, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Singe dont les branches du jour sont 申 et 寅 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Par animal",
    "title": "Comment le Coq rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Coq (酉) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Coq est la dixième des douze branches",
        "blocks": [
          {
            "p": "Le Coq est une personne dont la branche de l'année de naissance est **酉**. 酉 est la dixième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 卯 (le Lapin)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Coq est : « Appliqué et rigoureux. Ne peut rien laisser de travers. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Coq. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Coq et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Bœuf (丑)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Tigre (寅)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Lapin (卯)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Dragon (辰)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Serpent (巳)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Cheval (午)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Mouton (未)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Singe (申)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Coq (酉)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Chien (戌)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cochon (亥)",
                  "Neutre",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dragon — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "酉 et 辰 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Coq et le Dragon obtiennent {scoreYukhap}, le maximum que le Coq puisse obtenir."
          }
        ]
      },
      {
        "title": "Bœuf et Serpent — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "巳酉丑 est un groupe de triade (le groupe du métal), et 酉 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Coq forme une triade partielle ({scoreBanhap}) à la fois avec le Bœuf et avec le Serpent."
          },
          {
            "p": "**Le Serpent et le Bœuf ensemble**, en revanche, n'ont pas le caractère central 酉 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres. Même au sein d'un groupe de triade, c'est le Coq qui forme la triade partielle."
          }
        ]
      },
      {
        "title": "Lapin — la collision frontale (choc)",
        "blocks": [
          {
            "p": "酉 et 卯 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Coq puisse recevoir."
          }
        ]
      },
      {
        "title": "Tigre — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "酉 et 寅 se trouvent juste à côté de 卯 (le Lapin), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 6 autres animaux, et le Coq avec un autre Coq",
        "blocks": [
          {
            "p": "Le Rat, le Cheval, le Mouton, le Singe, le Chien et le Cochon ne forment ni harmonie, ni choc, ni discorde avec le Coq : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Coq obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Coq rencontre une personne Lapin, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Dragon, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Coq dont les branches du jour sont 酉 et 卯 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Chien](/guide/zodiac-dog) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Par animal",
    "title": "Comment le Chien rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Chien (戌) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Chien est la onzième des douze branches",
        "blocks": [
          {
            "p": "Le Chien est une personne dont la branche de l'année de naissance est **戌**. 戌 est la onzième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 辰 (le Dragon)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Chien est : « Loyal jusqu'au bout une fois la confiance donnée. La trahison le blesse particulièrement. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Chien. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Chien et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Bœuf (丑)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Lapin (卯)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Dragon (辰)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Serpent (巳)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Cheval (午)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Mouton (未)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Singe (申)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Coq (酉)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Chien (戌)",
                  "Même branche",
                  "{scoreSame}"
                ],
                [
                  "Cochon (亥)",
                  "Neutre",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Lapin — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "戌 et 卯 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Chien et le Lapin obtiennent {scoreYukhap}, le maximum que le Chien puisse obtenir."
          }
        ]
      },
      {
        "title": "Cheval — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "寅午戌 est un groupe de triade (le groupe du feu), et 午 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Chien forme une triade partielle ({scoreBanhap}) uniquement avec le Cheval."
          },
          {
            "p": "Avec le Tigre (寅) du même groupe, le caractère central 午 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Dragon — la collision frontale (choc)",
        "blocks": [
          {
            "p": "戌 et 辰 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Chien puisse recevoir."
          }
        ]
      },
      {
        "title": "Serpent — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "戌 et 巳 se trouvent juste à côté de 辰 (le Dragon), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Chien avec un autre Chien",
        "blocks": [
          {
            "p": "Le Rat, le Bœuf, le Tigre, le Mouton, le Singe, le Coq et le Cochon ne forment ni harmonie, ni choc, ni discorde avec le Chien : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Chien obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Chien rencontre une personne Dragon, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Lapin, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Chien dont les branches du jour sont 戌 et 辰 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Cochon](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Par animal",
    "title": "Comment le Cochon rencontre les douze animaux du zodiaque",
    "summary": "Quelle relation le Cochon (亥) entretient avec chacun des douze animaux du zodiaque, quel score chacune obtient et quelle part du score final ce score représente — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Cochon est la douzième des douze branches",
        "blocks": [
          {
            "p": "Le Cochon est une personne dont la branche de l'année de naissance est **亥**. 亥 est la douzième des douze branches terrestres et, lorsque les douze caractères sont disposés en cercle, elle se trouve directement en face de 巳 (le Serpent)."
          },
          {
            "p": "La ligne que le résultat de compatibilité affiche pour une personne Cochon est : « Généreux et direct. Fait confiance facilement, parfois à ses dépens. » Cette ligne n'a rien à voir avec les scores des relations et n'affecte pas les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Les douze animaux du zodiaque en un coup d'œil",
        "blocks": [
          {
            "p": "Chacun des autres animaux est mis tour à tour en regard du Cochon. Seules les paires que ce service reconnaît comme des harmonies sont écrites comme des relations ; tout le reste est neutre."
          },
          {
            "table": {
              "caption": "Le Cochon et les douze animaux du zodiaque",
              "head": [
                "Autre animal",
                "Relation",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Bœuf (丑)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Six-Harmonies",
                  "{scoreYukhap}"
                ],
                [
                  "Lapin (卯)",
                  "Triade partielle",
                  "{scoreBanhap}"
                ],
                [
                  "Dragon (辰)",
                  "Discorde",
                  "{scoreWonjin}"
                ],
                [
                  "Serpent (巳)",
                  "Choc",
                  "{scoreChung}"
                ],
                [
                  "Cheval (午)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Mouton (未)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Singe (申)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Coq (酉)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Chien (戌)",
                  "Neutre",
                  "{scoreNeutral}"
                ],
                [
                  "Cochon (亥)",
                  "Même branche",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tigre — la paire qui s'attire (six-harmonies)",
        "blocks": [
          {
            "p": "亥 et 寅 forment une harmonie avec seulement deux caractères. Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et le Cochon et le Tigre obtiennent {scoreYukhap}, le maximum que le Cochon puisse obtenir."
          }
        ]
      },
      {
        "title": "Lapin — une triade partielle qui inclut la branche royale",
        "blocks": [
          {
            "p": "亥卯未 est un groupe de triade (le groupe du bois), et 卯 est la **branche royale** en son centre. Inyeon-Link n'accepte que les paires qui incluent la branche royale ; ainsi le Cochon forme une triade partielle ({scoreBanhap}) uniquement avec le Lapin."
          },
          {
            "p": "Avec le Mouton (未) du même groupe, le caractère central 卯 manque : la paire n'est donc pas comptée comme une harmonie et est traitée comme neutre ({scoreNeutral}). Appartenir au même groupe ne fait pas de chaque paire une harmonie."
          }
        ]
      },
      {
        "title": "Serpent — la collision frontale (choc)",
        "blocks": [
          {
            "p": "亥 et 巳 se font directement face sur le cercle. Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes. Cela reste le score le plus bas que le Cochon puisse recevoir."
          }
        ]
      },
      {
        "title": "Dragon — la discorde silencieuse (discorde)",
        "blocks": [
          {
            "p": "亥 et 辰 se trouvent juste à côté de 巳 (le Serpent), la position du choc, et sont traditionnellement vus comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Les 7 autres animaux, et le Cochon avec un autre Cochon",
        "blocks": [
          {
            "p": "Le Rat, le Bœuf, le Cheval, le Mouton, le Singe, le Coq et le Chien ne forment ni harmonie, ni choc, ni discorde avec le Cochon : ils sont **neutres** et obtiennent {scoreNeutral}. Ils constituent la base de référence, ni bons ni mauvais."
          },
          {
            "p": "Deux personnes Cochon obtiennent {scoreSame}. Cela signifie qu'elles se ressemblent, non qu'elles s'attirent ; ce score se situe donc juste au-dessus du neutre."
          }
        ]
      },
      {
        "title": "Quelle part du score final ce score représente",
        "blocks": [
          {
            "p": "Il y a deux endroits où les branches de deux personnes sont placées côte à côte."
          },
          {
            "ul": [
              "La **compatibilité zodiacale** regarde la branche de l'année de naissance. Elle pèse {weightZodiac} du score final.",
              "La **compatibilité de la branche du jour** regarde la branche du jour de naissance. Elle pèse {weightDayBranch} de la compatibilité de saju ({weightSaju}), soit {weightDayBranchTotal} du score final."
            ]
          },
          {
            "p": "Par exemple, lorsqu'une personne Cochon rencontre une personne Serpent, la compatibilité zodiacale donne un choc. Toutes choses égales par ailleurs, le score final ressort {swingZodiacChung} points plus bas qu'avec une paire neutre. Avec une personne Tigre, c'est une six-harmonie, et le score ressort {swingZodiacYukhap} points plus haut."
          },
          {
            "p": "Les branches de l'année et du jour peuvent différer. Deux personnes Cochon dont les branches du jour sont 亥 et 巳 obtiennent la même branche ({scoreSame}) en compatibilité zodiacale et un choc ({scoreChung}) en compatibilité de la branche du jour."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes.",
              "Le tableau complet de ce que vaut chaque relation figure dans le [tableau des douze branches](/guide/branches), et la raison pour laquelle le zodiaque se lit à partir de la branche de l'année est expliquée dans [Pourquoi la compatibilité zodiacale considère la branche de l'année](/guide/zodiac)."
            ]
          },
          {
            "p": "Les autres animaux sont présentés de la même manière. [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Lapin](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Serpent](/guide/zodiac-snake) · [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat) · [Singe](/guide/zodiac-monkey) · [Coq](/guide/zodiac-rooster) · [Chien](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-rat": {
    "eyebrow": "Par paire",
    "title": "Le Rat et le Rat — Même branche",
    "summary": "Quelle relation deux personnes Rat entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Rat ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Rat ont la même branche (子 et 子). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "子 est la première des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Rat",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Rat",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Rat** — Six-Harmonies [Bœuf](/guide/zodiac-pair-rat-ox) · Triade partielle [Dragon](/guide/zodiac-pair-rat-dragon), [Singe](/guide/zodiac-pair-rat-monkey) · Discorde [Mouton](/guide/zodiac-pair-rat-goat) · Choc [Cheval](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Rat](/guide/zodiac-rat), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-ox": {
    "eyebrow": "Par paire",
    "title": "Le Rat et le Bœuf — Six-Harmonies",
    "summary": "Quelle relation le Rat et le Bœuf entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Rat et le Bœuf forment une six-harmonie",
        "blocks": [
          {
            "p": "Le Rat et le Bœuf forment une six-harmonie. 子 et 丑 forment une harmonie avec seulement deux caractères."
          },
          {
            "p": "Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et avec {scoreYukhap}, c'est le maximum que chacun des deux animaux puisse obtenir."
          },
          {
            "p": "Sur le cercle, 子 occupe la première place et 丑 la deuxième, et les deux caractères sont séparés d'un pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Rat et le Bœuf",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Six-Harmonies"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacYukhap} points en compatibilité zodiacale et de {swingDayBranchYukhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Rat** — Six-Harmonies [Bœuf](/guide/zodiac-pair-rat-ox) · Triade partielle [Dragon](/guide/zodiac-pair-rat-dragon), [Singe](/guide/zodiac-pair-rat-monkey) · Discorde [Mouton](/guide/zodiac-pair-rat-goat) · Choc [Cheval](/guide/zodiac-pair-rat-horse)",
              "Les partenaires particuliers **du Bœuf** — Six-Harmonies [Rat](/guide/zodiac-pair-rat-ox) · Triade partielle [Coq](/guide/zodiac-pair-ox-rooster) · Discorde [Cheval](/guide/zodiac-pair-ox-horse) · Choc [Mouton](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Rat](/guide/zodiac-rat) · [Bœuf](/guide/zodiac-ox), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-dragon": {
    "eyebrow": "Par paire",
    "title": "Le Rat et le Dragon — Triade partielle",
    "summary": "Quelle relation le Rat et le Dragon entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Rat et le Dragon forment une triade partielle",
        "blocks": [
          {
            "p": "Le Rat et le Dragon forment une triade partielle. 申子辰 est un groupe de triade (le groupe de l'eau), et 子 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Singe (申) et le Dragon (辰) du même groupe n'ont pas le caractère central 子 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 子 occupe la première place et 辰 la cinquième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Rat et le Dragon",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Rat** — Six-Harmonies [Bœuf](/guide/zodiac-pair-rat-ox) · Triade partielle [Dragon](/guide/zodiac-pair-rat-dragon), [Singe](/guide/zodiac-pair-rat-monkey) · Discorde [Mouton](/guide/zodiac-pair-rat-goat) · Choc [Cheval](/guide/zodiac-pair-rat-horse)",
              "Les partenaires particuliers **du Dragon** — Six-Harmonies [Coq](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Rat](/guide/zodiac-pair-rat-dragon) · Discorde [Cochon](/guide/zodiac-pair-dragon-pig) · Choc [Chien](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Rat](/guide/zodiac-rat) · [Dragon](/guide/zodiac-dragon), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-horse": {
    "eyebrow": "Par paire",
    "title": "Le Rat et le Cheval — Choc",
    "summary": "Quelle relation le Rat et le Cheval entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Rat et le Cheval forment un choc",
        "blocks": [
          {
            "p": "Le Rat et le Cheval forment un choc. 子 et 午 se font directement face sur le cercle."
          },
          {
            "p": "Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes."
          },
          {
            "p": "Sur le cercle, 子 occupe la première place et 午 la septième, et les deux caractères sont séparés de six pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Rat et le Cheval",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Choc"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacChung} points en compatibilité zodiacale et de {swingDayBranchChung} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Rat** — Six-Harmonies [Bœuf](/guide/zodiac-pair-rat-ox) · Triade partielle [Dragon](/guide/zodiac-pair-rat-dragon), [Singe](/guide/zodiac-pair-rat-monkey) · Discorde [Mouton](/guide/zodiac-pair-rat-goat) · Choc [Cheval](/guide/zodiac-pair-rat-horse)",
              "Les partenaires particuliers **du Cheval** — Six-Harmonies [Mouton](/guide/zodiac-pair-horse-goat) · Triade partielle [Tigre](/guide/zodiac-pair-tiger-horse), [Chien](/guide/zodiac-pair-horse-dog) · Discorde [Bœuf](/guide/zodiac-pair-ox-horse) · Choc [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Rat](/guide/zodiac-rat) · [Cheval](/guide/zodiac-horse), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-goat": {
    "eyebrow": "Par paire",
    "title": "Le Rat et le Mouton — Discorde",
    "summary": "Quelle relation le Rat et le Mouton entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Rat et le Mouton forment une discorde",
        "blocks": [
          {
            "p": "Le Rat et le Mouton forment une discorde. La position du choc de 子 est 午 (le Cheval), et 未 se trouve juste à côté ; juste à côté de 丑 (le Bœuf), la position du choc de 未, se trouve 子."
          },
          {
            "p": "Elle est traditionnellement vue comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          },
          {
            "p": "Sur le cercle, 子 occupe la première place et 未 la huitième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Rat et le Mouton",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Discorde"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacWonjin} points en compatibilité zodiacale et de {swingDayBranchWonjin} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Rat** — Six-Harmonies [Bœuf](/guide/zodiac-pair-rat-ox) · Triade partielle [Dragon](/guide/zodiac-pair-rat-dragon), [Singe](/guide/zodiac-pair-rat-monkey) · Discorde [Mouton](/guide/zodiac-pair-rat-goat) · Choc [Cheval](/guide/zodiac-pair-rat-horse)",
              "Les partenaires particuliers **du Mouton** — Six-Harmonies [Cheval](/guide/zodiac-pair-horse-goat) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-goat) · Discorde [Rat](/guide/zodiac-pair-rat-goat) · Choc [Bœuf](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Rat](/guide/zodiac-rat) · [Mouton](/guide/zodiac-goat), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-monkey": {
    "eyebrow": "Par paire",
    "title": "Le Rat et le Singe — Triade partielle",
    "summary": "Quelle relation le Rat et le Singe entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Rat et le Singe forment une triade partielle",
        "blocks": [
          {
            "p": "Le Rat et le Singe forment une triade partielle. 申子辰 est un groupe de triade (le groupe de l'eau), et 子 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Dragon (辰) et le Singe (申) du même groupe n'ont pas le caractère central 子 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 子 occupe la première place et 申 la neuvième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Rat et le Singe",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Rat** — Six-Harmonies [Bœuf](/guide/zodiac-pair-rat-ox) · Triade partielle [Dragon](/guide/zodiac-pair-rat-dragon), [Singe](/guide/zodiac-pair-rat-monkey) · Discorde [Mouton](/guide/zodiac-pair-rat-goat) · Choc [Cheval](/guide/zodiac-pair-rat-horse)",
              "Les partenaires particuliers **du Singe** — Six-Harmonies [Serpent](/guide/zodiac-pair-snake-monkey) · Triade partielle [Rat](/guide/zodiac-pair-rat-monkey) · Discorde [Lapin](/guide/zodiac-pair-rabbit-monkey) · Choc [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Rat](/guide/zodiac-rat) · [Singe](/guide/zodiac-monkey), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-ox": {
    "eyebrow": "Par paire",
    "title": "Le Bœuf et le Bœuf — Même branche",
    "summary": "Quelle relation deux personnes Bœuf entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Bœuf ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Bœuf ont la même branche (丑 et 丑). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "丑 est la deuxième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Bœuf",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Bœuf",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Bœuf** — Six-Harmonies [Rat](/guide/zodiac-pair-rat-ox) · Triade partielle [Coq](/guide/zodiac-pair-ox-rooster) · Discorde [Cheval](/guide/zodiac-pair-ox-horse) · Choc [Mouton](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Bœuf](/guide/zodiac-ox), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-horse": {
    "eyebrow": "Par paire",
    "title": "Le Bœuf et le Cheval — Discorde",
    "summary": "Quelle relation le Bœuf et le Cheval entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Bœuf et le Cheval forment une discorde",
        "blocks": [
          {
            "p": "Le Bœuf et le Cheval forment une discorde. La position du choc de 丑 est 未 (le Mouton), et 午 se trouve juste à côté ; juste à côté de 子 (le Rat), la position du choc de 午, se trouve 丑."
          },
          {
            "p": "Elle est traditionnellement vue comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          },
          {
            "p": "Sur le cercle, 丑 occupe la deuxième place et 午 la septième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Bœuf et le Cheval",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Discorde"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacWonjin} points en compatibilité zodiacale et de {swingDayBranchWonjin} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Bœuf** — Six-Harmonies [Rat](/guide/zodiac-pair-rat-ox) · Triade partielle [Coq](/guide/zodiac-pair-ox-rooster) · Discorde [Cheval](/guide/zodiac-pair-ox-horse) · Choc [Mouton](/guide/zodiac-pair-ox-goat)",
              "Les partenaires particuliers **du Cheval** — Six-Harmonies [Mouton](/guide/zodiac-pair-horse-goat) · Triade partielle [Tigre](/guide/zodiac-pair-tiger-horse), [Chien](/guide/zodiac-pair-horse-dog) · Discorde [Bœuf](/guide/zodiac-pair-ox-horse) · Choc [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Bœuf](/guide/zodiac-ox) · [Cheval](/guide/zodiac-horse), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-goat": {
    "eyebrow": "Par paire",
    "title": "Le Bœuf et le Mouton — Choc",
    "summary": "Quelle relation le Bœuf et le Mouton entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Bœuf et le Mouton forment un choc",
        "blocks": [
          {
            "p": "Le Bœuf et le Mouton forment un choc. 丑 et 未 se font directement face sur le cercle."
          },
          {
            "p": "Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes."
          },
          {
            "p": "Sur le cercle, 丑 occupe la deuxième place et 未 la huitième, et les deux caractères sont séparés de six pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Bœuf et le Mouton",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Choc"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacChung} points en compatibilité zodiacale et de {swingDayBranchChung} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Bœuf** — Six-Harmonies [Rat](/guide/zodiac-pair-rat-ox) · Triade partielle [Coq](/guide/zodiac-pair-ox-rooster) · Discorde [Cheval](/guide/zodiac-pair-ox-horse) · Choc [Mouton](/guide/zodiac-pair-ox-goat)",
              "Les partenaires particuliers **du Mouton** — Six-Harmonies [Cheval](/guide/zodiac-pair-horse-goat) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-goat) · Discorde [Rat](/guide/zodiac-pair-rat-goat) · Choc [Bœuf](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Bœuf](/guide/zodiac-ox) · [Mouton](/guide/zodiac-goat), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-rooster": {
    "eyebrow": "Par paire",
    "title": "Le Bœuf et le Coq — Triade partielle",
    "summary": "Quelle relation le Bœuf et le Coq entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Bœuf et le Coq forment une triade partielle",
        "blocks": [
          {
            "p": "Le Bœuf et le Coq forment une triade partielle. 巳酉丑 est un groupe de triade (le groupe du métal), et 酉 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Serpent (巳) et le Bœuf (丑) du même groupe n'ont pas le caractère central 酉 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 丑 occupe la deuxième place et 酉 la dixième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Bœuf et le Coq",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Bœuf** — Six-Harmonies [Rat](/guide/zodiac-pair-rat-ox) · Triade partielle [Coq](/guide/zodiac-pair-ox-rooster) · Discorde [Cheval](/guide/zodiac-pair-ox-horse) · Choc [Mouton](/guide/zodiac-pair-ox-goat)",
              "Les partenaires particuliers **du Coq** — Six-Harmonies [Dragon](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Bœuf](/guide/zodiac-pair-ox-rooster), [Serpent](/guide/zodiac-pair-snake-rooster) · Discorde [Tigre](/guide/zodiac-pair-tiger-rooster) · Choc [Lapin](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Bœuf](/guide/zodiac-ox) · [Coq](/guide/zodiac-rooster), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-tiger": {
    "eyebrow": "Par paire",
    "title": "Le Tigre et le Tigre — Même branche",
    "summary": "Quelle relation deux personnes Tigre entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Tigre ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Tigre ont la même branche (寅 et 寅). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "寅 est la troisième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Tigre",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Tigre",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Tigre** — Six-Harmonies [Cochon](/guide/zodiac-pair-tiger-pig) · Triade partielle [Cheval](/guide/zodiac-pair-tiger-horse) · Discorde [Coq](/guide/zodiac-pair-tiger-rooster) · Choc [Singe](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Tigre](/guide/zodiac-tiger), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-horse": {
    "eyebrow": "Par paire",
    "title": "Le Tigre et le Cheval — Triade partielle",
    "summary": "Quelle relation le Tigre et le Cheval entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Tigre et le Cheval forment une triade partielle",
        "blocks": [
          {
            "p": "Le Tigre et le Cheval forment une triade partielle. 寅午戌 est un groupe de triade (le groupe du feu), et 午 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Chien (戌) et le Tigre (寅) du même groupe n'ont pas le caractère central 午 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 寅 occupe la troisième place et 午 la septième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Tigre et le Cheval",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Tigre** — Six-Harmonies [Cochon](/guide/zodiac-pair-tiger-pig) · Triade partielle [Cheval](/guide/zodiac-pair-tiger-horse) · Discorde [Coq](/guide/zodiac-pair-tiger-rooster) · Choc [Singe](/guide/zodiac-pair-tiger-monkey)",
              "Les partenaires particuliers **du Cheval** — Six-Harmonies [Mouton](/guide/zodiac-pair-horse-goat) · Triade partielle [Tigre](/guide/zodiac-pair-tiger-horse), [Chien](/guide/zodiac-pair-horse-dog) · Discorde [Bœuf](/guide/zodiac-pair-ox-horse) · Choc [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Tigre](/guide/zodiac-tiger) · [Cheval](/guide/zodiac-horse), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-monkey": {
    "eyebrow": "Par paire",
    "title": "Le Tigre et le Singe — Choc",
    "summary": "Quelle relation le Tigre et le Singe entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Tigre et le Singe forment un choc",
        "blocks": [
          {
            "p": "Le Tigre et le Singe forment un choc. 寅 et 申 se font directement face sur le cercle."
          },
          {
            "p": "Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes."
          },
          {
            "p": "Sur le cercle, 寅 occupe la troisième place et 申 la neuvième, et les deux caractères sont séparés de six pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Tigre et le Singe",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Choc"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacChung} points en compatibilité zodiacale et de {swingDayBranchChung} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Tigre** — Six-Harmonies [Cochon](/guide/zodiac-pair-tiger-pig) · Triade partielle [Cheval](/guide/zodiac-pair-tiger-horse) · Discorde [Coq](/guide/zodiac-pair-tiger-rooster) · Choc [Singe](/guide/zodiac-pair-tiger-monkey)",
              "Les partenaires particuliers **du Singe** — Six-Harmonies [Serpent](/guide/zodiac-pair-snake-monkey) · Triade partielle [Rat](/guide/zodiac-pair-rat-monkey) · Discorde [Lapin](/guide/zodiac-pair-rabbit-monkey) · Choc [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Tigre](/guide/zodiac-tiger) · [Singe](/guide/zodiac-monkey), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-rooster": {
    "eyebrow": "Par paire",
    "title": "Le Tigre et le Coq — Discorde",
    "summary": "Quelle relation le Tigre et le Coq entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Tigre et le Coq forment une discorde",
        "blocks": [
          {
            "p": "Le Tigre et le Coq forment une discorde. La position du choc de 寅 est 申 (le Singe), et 酉 se trouve juste à côté ; juste à côté de 卯 (le Lapin), la position du choc de 酉, se trouve 寅."
          },
          {
            "p": "Elle est traditionnellement vue comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          },
          {
            "p": "Sur le cercle, 寅 occupe la troisième place et 酉 la dixième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Tigre et le Coq",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Discorde"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacWonjin} points en compatibilité zodiacale et de {swingDayBranchWonjin} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Tigre** — Six-Harmonies [Cochon](/guide/zodiac-pair-tiger-pig) · Triade partielle [Cheval](/guide/zodiac-pair-tiger-horse) · Discorde [Coq](/guide/zodiac-pair-tiger-rooster) · Choc [Singe](/guide/zodiac-pair-tiger-monkey)",
              "Les partenaires particuliers **du Coq** — Six-Harmonies [Dragon](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Bœuf](/guide/zodiac-pair-ox-rooster), [Serpent](/guide/zodiac-pair-snake-rooster) · Discorde [Tigre](/guide/zodiac-pair-tiger-rooster) · Choc [Lapin](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Tigre](/guide/zodiac-tiger) · [Coq](/guide/zodiac-rooster), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-pig": {
    "eyebrow": "Par paire",
    "title": "Le Tigre et le Cochon — Six-Harmonies",
    "summary": "Quelle relation le Tigre et le Cochon entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Tigre et le Cochon forment une six-harmonie",
        "blocks": [
          {
            "p": "Le Tigre et le Cochon forment une six-harmonie. 寅 et 亥 forment une harmonie avec seulement deux caractères."
          },
          {
            "p": "Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et avec {scoreYukhap}, c'est le maximum que chacun des deux animaux puisse obtenir."
          },
          {
            "p": "Sur le cercle, 寅 occupe la troisième place et 亥 la douzième, et les deux caractères sont séparés de trois pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Tigre et le Cochon",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Six-Harmonies"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacYukhap} points en compatibilité zodiacale et de {swingDayBranchYukhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Tigre** — Six-Harmonies [Cochon](/guide/zodiac-pair-tiger-pig) · Triade partielle [Cheval](/guide/zodiac-pair-tiger-horse) · Discorde [Coq](/guide/zodiac-pair-tiger-rooster) · Choc [Singe](/guide/zodiac-pair-tiger-monkey)",
              "Les partenaires particuliers **du Cochon** — Six-Harmonies [Tigre](/guide/zodiac-pair-tiger-pig) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-pig) · Discorde [Dragon](/guide/zodiac-pair-dragon-pig) · Choc [Serpent](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Tigre](/guide/zodiac-tiger) · [Cochon](/guide/zodiac-pig), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rabbit": {
    "eyebrow": "Par paire",
    "title": "Le Lapin et le Lapin — Même branche",
    "summary": "Quelle relation deux personnes Lapin entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Lapin ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Lapin ont la même branche (卯 et 卯). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "卯 est la quatrième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Lapin",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Lapin",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Lapin** — Six-Harmonies [Chien](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Mouton](/guide/zodiac-pair-rabbit-goat), [Cochon](/guide/zodiac-pair-rabbit-pig) · Discorde [Singe](/guide/zodiac-pair-rabbit-monkey) · Choc [Coq](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Lapin](/guide/zodiac-rabbit), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-goat": {
    "eyebrow": "Par paire",
    "title": "Le Lapin et le Mouton — Triade partielle",
    "summary": "Quelle relation le Lapin et le Mouton entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Lapin et le Mouton forment une triade partielle",
        "blocks": [
          {
            "p": "Le Lapin et le Mouton forment une triade partielle. 亥卯未 est un groupe de triade (le groupe du bois), et 卯 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Cochon (亥) et le Mouton (未) du même groupe n'ont pas le caractère central 卯 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 卯 occupe la quatrième place et 未 la huitième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Lapin et le Mouton",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Lapin** — Six-Harmonies [Chien](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Mouton](/guide/zodiac-pair-rabbit-goat), [Cochon](/guide/zodiac-pair-rabbit-pig) · Discorde [Singe](/guide/zodiac-pair-rabbit-monkey) · Choc [Coq](/guide/zodiac-pair-rabbit-rooster)",
              "Les partenaires particuliers **du Mouton** — Six-Harmonies [Cheval](/guide/zodiac-pair-horse-goat) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-goat) · Discorde [Rat](/guide/zodiac-pair-rat-goat) · Choc [Bœuf](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Lapin](/guide/zodiac-rabbit) · [Mouton](/guide/zodiac-goat), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-monkey": {
    "eyebrow": "Par paire",
    "title": "Le Lapin et le Singe — Discorde",
    "summary": "Quelle relation le Lapin et le Singe entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Lapin et le Singe forment une discorde",
        "blocks": [
          {
            "p": "Le Lapin et le Singe forment une discorde. La position du choc de 卯 est 酉 (le Coq), et 申 se trouve juste à côté ; juste à côté de 寅 (le Tigre), la position du choc de 申, se trouve 卯."
          },
          {
            "p": "Elle est traditionnellement vue comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          },
          {
            "p": "Sur le cercle, 卯 occupe la quatrième place et 申 la neuvième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Lapin et le Singe",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Discorde"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacWonjin} points en compatibilité zodiacale et de {swingDayBranchWonjin} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Lapin** — Six-Harmonies [Chien](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Mouton](/guide/zodiac-pair-rabbit-goat), [Cochon](/guide/zodiac-pair-rabbit-pig) · Discorde [Singe](/guide/zodiac-pair-rabbit-monkey) · Choc [Coq](/guide/zodiac-pair-rabbit-rooster)",
              "Les partenaires particuliers **du Singe** — Six-Harmonies [Serpent](/guide/zodiac-pair-snake-monkey) · Triade partielle [Rat](/guide/zodiac-pair-rat-monkey) · Discorde [Lapin](/guide/zodiac-pair-rabbit-monkey) · Choc [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Lapin](/guide/zodiac-rabbit) · [Singe](/guide/zodiac-monkey), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rooster": {
    "eyebrow": "Par paire",
    "title": "Le Lapin et le Coq — Choc",
    "summary": "Quelle relation le Lapin et le Coq entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Lapin et le Coq forment un choc",
        "blocks": [
          {
            "p": "Le Lapin et le Coq forment un choc. 卯 et 酉 se font directement face sur le cercle."
          },
          {
            "p": "Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes."
          },
          {
            "p": "Sur le cercle, 卯 occupe la quatrième place et 酉 la dixième, et les deux caractères sont séparés de six pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Lapin et le Coq",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Choc"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacChung} points en compatibilité zodiacale et de {swingDayBranchChung} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Lapin** — Six-Harmonies [Chien](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Mouton](/guide/zodiac-pair-rabbit-goat), [Cochon](/guide/zodiac-pair-rabbit-pig) · Discorde [Singe](/guide/zodiac-pair-rabbit-monkey) · Choc [Coq](/guide/zodiac-pair-rabbit-rooster)",
              "Les partenaires particuliers **du Coq** — Six-Harmonies [Dragon](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Bœuf](/guide/zodiac-pair-ox-rooster), [Serpent](/guide/zodiac-pair-snake-rooster) · Discorde [Tigre](/guide/zodiac-pair-tiger-rooster) · Choc [Lapin](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Lapin](/guide/zodiac-rabbit) · [Coq](/guide/zodiac-rooster), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-dog": {
    "eyebrow": "Par paire",
    "title": "Le Lapin et le Chien — Six-Harmonies",
    "summary": "Quelle relation le Lapin et le Chien entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Lapin et le Chien forment une six-harmonie",
        "blocks": [
          {
            "p": "Le Lapin et le Chien forment une six-harmonie. 卯 et 戌 forment une harmonie avec seulement deux caractères."
          },
          {
            "p": "Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et avec {scoreYukhap}, c'est le maximum que chacun des deux animaux puisse obtenir."
          },
          {
            "p": "Sur le cercle, 卯 occupe la quatrième place et 戌 la onzième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Lapin et le Chien",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Six-Harmonies"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacYukhap} points en compatibilité zodiacale et de {swingDayBranchYukhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Lapin** — Six-Harmonies [Chien](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Mouton](/guide/zodiac-pair-rabbit-goat), [Cochon](/guide/zodiac-pair-rabbit-pig) · Discorde [Singe](/guide/zodiac-pair-rabbit-monkey) · Choc [Coq](/guide/zodiac-pair-rabbit-rooster)",
              "Les partenaires particuliers **du Chien** — Six-Harmonies [Lapin](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Cheval](/guide/zodiac-pair-horse-dog) · Discorde [Serpent](/guide/zodiac-pair-snake-dog) · Choc [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Lapin](/guide/zodiac-rabbit) · [Chien](/guide/zodiac-dog), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-pig": {
    "eyebrow": "Par paire",
    "title": "Le Lapin et le Cochon — Triade partielle",
    "summary": "Quelle relation le Lapin et le Cochon entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Lapin et le Cochon forment une triade partielle",
        "blocks": [
          {
            "p": "Le Lapin et le Cochon forment une triade partielle. 亥卯未 est un groupe de triade (le groupe du bois), et 卯 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Mouton (未) et le Cochon (亥) du même groupe n'ont pas le caractère central 卯 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 卯 occupe la quatrième place et 亥 la douzième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Lapin et le Cochon",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Lapin** — Six-Harmonies [Chien](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Mouton](/guide/zodiac-pair-rabbit-goat), [Cochon](/guide/zodiac-pair-rabbit-pig) · Discorde [Singe](/guide/zodiac-pair-rabbit-monkey) · Choc [Coq](/guide/zodiac-pair-rabbit-rooster)",
              "Les partenaires particuliers **du Cochon** — Six-Harmonies [Tigre](/guide/zodiac-pair-tiger-pig) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-pig) · Discorde [Dragon](/guide/zodiac-pair-dragon-pig) · Choc [Serpent](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Lapin](/guide/zodiac-rabbit) · [Cochon](/guide/zodiac-pig), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dragon": {
    "eyebrow": "Par paire",
    "title": "Le Dragon et le Dragon — Même branche",
    "summary": "Quelle relation deux personnes Dragon entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Dragon ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Dragon ont la même branche (辰 et 辰). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "辰 est la cinquième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Dragon",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Dragon",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Dragon** — Six-Harmonies [Coq](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Rat](/guide/zodiac-pair-rat-dragon) · Discorde [Cochon](/guide/zodiac-pair-dragon-pig) · Choc [Chien](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Dragon](/guide/zodiac-dragon), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-rooster": {
    "eyebrow": "Par paire",
    "title": "Le Dragon et le Coq — Six-Harmonies",
    "summary": "Quelle relation le Dragon et le Coq entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Dragon et le Coq forment une six-harmonie",
        "blocks": [
          {
            "p": "Le Dragon et le Coq forment une six-harmonie. 辰 et 酉 forment une harmonie avec seulement deux caractères."
          },
          {
            "p": "Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et avec {scoreYukhap}, c'est le maximum que chacun des deux animaux puisse obtenir."
          },
          {
            "p": "Sur le cercle, 辰 occupe la cinquième place et 酉 la dixième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Dragon et le Coq",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Six-Harmonies"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacYukhap} points en compatibilité zodiacale et de {swingDayBranchYukhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Dragon** — Six-Harmonies [Coq](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Rat](/guide/zodiac-pair-rat-dragon) · Discorde [Cochon](/guide/zodiac-pair-dragon-pig) · Choc [Chien](/guide/zodiac-pair-dragon-dog)",
              "Les partenaires particuliers **du Coq** — Six-Harmonies [Dragon](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Bœuf](/guide/zodiac-pair-ox-rooster), [Serpent](/guide/zodiac-pair-snake-rooster) · Discorde [Tigre](/guide/zodiac-pair-tiger-rooster) · Choc [Lapin](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Dragon](/guide/zodiac-dragon) · [Coq](/guide/zodiac-rooster), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dog": {
    "eyebrow": "Par paire",
    "title": "Le Dragon et le Chien — Choc",
    "summary": "Quelle relation le Dragon et le Chien entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Dragon et le Chien forment un choc",
        "blocks": [
          {
            "p": "Le Dragon et le Chien forment un choc. 辰 et 戌 se font directement face sur le cercle."
          },
          {
            "p": "Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes."
          },
          {
            "p": "Sur le cercle, 辰 occupe la cinquième place et 戌 la onzième, et les deux caractères sont séparés de six pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Dragon et le Chien",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Choc"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacChung} points en compatibilité zodiacale et de {swingDayBranchChung} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Dragon** — Six-Harmonies [Coq](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Rat](/guide/zodiac-pair-rat-dragon) · Discorde [Cochon](/guide/zodiac-pair-dragon-pig) · Choc [Chien](/guide/zodiac-pair-dragon-dog)",
              "Les partenaires particuliers **du Chien** — Six-Harmonies [Lapin](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Cheval](/guide/zodiac-pair-horse-dog) · Discorde [Serpent](/guide/zodiac-pair-snake-dog) · Choc [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Dragon](/guide/zodiac-dragon) · [Chien](/guide/zodiac-dog), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-pig": {
    "eyebrow": "Par paire",
    "title": "Le Dragon et le Cochon — Discorde",
    "summary": "Quelle relation le Dragon et le Cochon entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Dragon et le Cochon forment une discorde",
        "blocks": [
          {
            "p": "Le Dragon et le Cochon forment une discorde. La position du choc de 辰 est 戌 (le Chien), et 亥 se trouve juste à côté ; juste à côté de 巳 (le Serpent), la position du choc de 亥, se trouve 辰."
          },
          {
            "p": "Elle est traditionnellement vue comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          },
          {
            "p": "Sur le cercle, 辰 occupe la cinquième place et 亥 la douzième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Dragon et le Cochon",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Discorde"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacWonjin} points en compatibilité zodiacale et de {swingDayBranchWonjin} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Dragon** — Six-Harmonies [Coq](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Rat](/guide/zodiac-pair-rat-dragon) · Discorde [Cochon](/guide/zodiac-pair-dragon-pig) · Choc [Chien](/guide/zodiac-pair-dragon-dog)",
              "Les partenaires particuliers **du Cochon** — Six-Harmonies [Tigre](/guide/zodiac-pair-tiger-pig) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-pig) · Discorde [Dragon](/guide/zodiac-pair-dragon-pig) · Choc [Serpent](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Dragon](/guide/zodiac-dragon) · [Cochon](/guide/zodiac-pig), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-snake": {
    "eyebrow": "Par paire",
    "title": "Le Serpent et le Serpent — Même branche",
    "summary": "Quelle relation deux personnes Serpent entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Serpent ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Serpent ont la même branche (巳 et 巳). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "巳 est la sixième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Serpent",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Serpent",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Serpent** — Six-Harmonies [Singe](/guide/zodiac-pair-snake-monkey) · Triade partielle [Coq](/guide/zodiac-pair-snake-rooster) · Discorde [Chien](/guide/zodiac-pair-snake-dog) · Choc [Cochon](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Serpent](/guide/zodiac-snake), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-monkey": {
    "eyebrow": "Par paire",
    "title": "Le Serpent et le Singe — Six-Harmonies",
    "summary": "Quelle relation le Serpent et le Singe entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Serpent et le Singe forment une six-harmonie",
        "blocks": [
          {
            "p": "Le Serpent et le Singe forment une six-harmonie. 巳 et 申 forment une harmonie avec seulement deux caractères."
          },
          {
            "p": "Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et avec {scoreYukhap}, c'est le maximum que chacun des deux animaux puisse obtenir."
          },
          {
            "p": "Sur le cercle, 巳 occupe la sixième place et 申 la neuvième, et les deux caractères sont séparés de trois pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Serpent et le Singe",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Six-Harmonies"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacYukhap} points en compatibilité zodiacale et de {swingDayBranchYukhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Serpent** — Six-Harmonies [Singe](/guide/zodiac-pair-snake-monkey) · Triade partielle [Coq](/guide/zodiac-pair-snake-rooster) · Discorde [Chien](/guide/zodiac-pair-snake-dog) · Choc [Cochon](/guide/zodiac-pair-snake-pig)",
              "Les partenaires particuliers **du Singe** — Six-Harmonies [Serpent](/guide/zodiac-pair-snake-monkey) · Triade partielle [Rat](/guide/zodiac-pair-rat-monkey) · Discorde [Lapin](/guide/zodiac-pair-rabbit-monkey) · Choc [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Serpent](/guide/zodiac-snake) · [Singe](/guide/zodiac-monkey), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-rooster": {
    "eyebrow": "Par paire",
    "title": "Le Serpent et le Coq — Triade partielle",
    "summary": "Quelle relation le Serpent et le Coq entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Serpent et le Coq forment une triade partielle",
        "blocks": [
          {
            "p": "Le Serpent et le Coq forment une triade partielle. 巳酉丑 est un groupe de triade (le groupe du métal), et 酉 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Bœuf (丑) et le Serpent (巳) du même groupe n'ont pas le caractère central 酉 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 巳 occupe la sixième place et 酉 la dixième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Serpent et le Coq",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Serpent** — Six-Harmonies [Singe](/guide/zodiac-pair-snake-monkey) · Triade partielle [Coq](/guide/zodiac-pair-snake-rooster) · Discorde [Chien](/guide/zodiac-pair-snake-dog) · Choc [Cochon](/guide/zodiac-pair-snake-pig)",
              "Les partenaires particuliers **du Coq** — Six-Harmonies [Dragon](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Bœuf](/guide/zodiac-pair-ox-rooster), [Serpent](/guide/zodiac-pair-snake-rooster) · Discorde [Tigre](/guide/zodiac-pair-tiger-rooster) · Choc [Lapin](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Serpent](/guide/zodiac-snake) · [Coq](/guide/zodiac-rooster), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-dog": {
    "eyebrow": "Par paire",
    "title": "Le Serpent et le Chien — Discorde",
    "summary": "Quelle relation le Serpent et le Chien entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Serpent et le Chien forment une discorde",
        "blocks": [
          {
            "p": "Le Serpent et le Chien forment une discorde. La position du choc de 巳 est 亥 (le Cochon), et 戌 se trouve juste à côté ; juste à côté de 辰 (le Dragon), la position du choc de 戌, se trouve 巳."
          },
          {
            "p": "Elle est traditionnellement vue comme une paire qui se tient rancune sans pouvoir se séparer. En surface elle paraît calme, mais on estime que le décalage perdure ; elle obtient donc {scoreWonjin} — plus qu'un choc ({scoreChung}) et moins que le neutre ({scoreNeutral})."
          },
          {
            "p": "Sur le cercle, 巳 occupe la sixième place et 戌 la onzième, et les deux caractères sont séparés de cinq pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Serpent et le Chien",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Discorde"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacWonjin} points en compatibilité zodiacale et de {swingDayBranchWonjin} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Serpent** — Six-Harmonies [Singe](/guide/zodiac-pair-snake-monkey) · Triade partielle [Coq](/guide/zodiac-pair-snake-rooster) · Discorde [Chien](/guide/zodiac-pair-snake-dog) · Choc [Cochon](/guide/zodiac-pair-snake-pig)",
              "Les partenaires particuliers **du Chien** — Six-Harmonies [Lapin](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Cheval](/guide/zodiac-pair-horse-dog) · Discorde [Serpent](/guide/zodiac-pair-snake-dog) · Choc [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Serpent](/guide/zodiac-snake) · [Chien](/guide/zodiac-dog), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-pig": {
    "eyebrow": "Par paire",
    "title": "Le Serpent et le Cochon — Choc",
    "summary": "Quelle relation le Serpent et le Cochon entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Serpent et le Cochon forment un choc",
        "blocks": [
          {
            "p": "Le Serpent et le Cochon forment un choc. 巳 et 亥 se font directement face sur le cercle."
          },
          {
            "p": "Ce service conserve {scoreChung} points même pour un choc. Dans le myeongri traditionnel, un choc est une collision, non la fin d'une relation, et donner un score proche du plancher reviendrait à prononcer un verdict sur deux personnes."
          },
          {
            "p": "Sur le cercle, 巳 occupe la sixième place et 亥 la douzième, et les deux caractères sont séparés de six pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Serpent et le Cochon",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Choc"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire abaisse le score final de {swingZodiacChung} points en compatibilité zodiacale et de {swingDayBranchChung} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Serpent** — Six-Harmonies [Singe](/guide/zodiac-pair-snake-monkey) · Triade partielle [Coq](/guide/zodiac-pair-snake-rooster) · Discorde [Chien](/guide/zodiac-pair-snake-dog) · Choc [Cochon](/guide/zodiac-pair-snake-pig)",
              "Les partenaires particuliers **du Cochon** — Six-Harmonies [Tigre](/guide/zodiac-pair-tiger-pig) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-pig) · Discorde [Dragon](/guide/zodiac-pair-dragon-pig) · Choc [Serpent](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Serpent](/guide/zodiac-snake) · [Cochon](/guide/zodiac-pig), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-horse": {
    "eyebrow": "Par paire",
    "title": "Le Cheval et le Cheval — Même branche",
    "summary": "Quelle relation deux personnes Cheval entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Cheval ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Cheval ont la même branche (午 et 午). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "午 est la septième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Cheval",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Cheval",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Cheval** — Six-Harmonies [Mouton](/guide/zodiac-pair-horse-goat) · Triade partielle [Tigre](/guide/zodiac-pair-tiger-horse), [Chien](/guide/zodiac-pair-horse-dog) · Discorde [Bœuf](/guide/zodiac-pair-ox-horse) · Choc [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Cheval](/guide/zodiac-horse), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-goat": {
    "eyebrow": "Par paire",
    "title": "Le Cheval et le Mouton — Six-Harmonies",
    "summary": "Quelle relation le Cheval et le Mouton entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Cheval et le Mouton forment une six-harmonie",
        "blocks": [
          {
            "p": "Le Cheval et le Mouton forment une six-harmonie. 午 et 未 forment une harmonie avec seulement deux caractères."
          },
          {
            "p": "Une six-harmonie est la bonne relation qui apparaît le plus souvent en compatibilité, et avec {scoreYukhap}, c'est le maximum que chacun des deux animaux puisse obtenir."
          },
          {
            "p": "Sur le cercle, 午 occupe la septième place et 未 la huitième, et les deux caractères sont séparés d'un pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Cheval et le Mouton",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Six-Harmonies"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacYukhap} points en compatibilité zodiacale et de {swingDayBranchYukhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Cheval** — Six-Harmonies [Mouton](/guide/zodiac-pair-horse-goat) · Triade partielle [Tigre](/guide/zodiac-pair-tiger-horse), [Chien](/guide/zodiac-pair-horse-dog) · Discorde [Bœuf](/guide/zodiac-pair-ox-horse) · Choc [Rat](/guide/zodiac-pair-rat-horse)",
              "Les partenaires particuliers **du Mouton** — Six-Harmonies [Cheval](/guide/zodiac-pair-horse-goat) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-goat) · Discorde [Rat](/guide/zodiac-pair-rat-goat) · Choc [Bœuf](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Cheval](/guide/zodiac-horse) · [Mouton](/guide/zodiac-goat), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-dog": {
    "eyebrow": "Par paire",
    "title": "Le Cheval et le Chien — Triade partielle",
    "summary": "Quelle relation le Cheval et le Chien entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Cheval et le Chien forment une triade partielle",
        "blocks": [
          {
            "p": "Le Cheval et le Chien forment une triade partielle. 寅午戌 est un groupe de triade (le groupe du feu), et 午 est la **branche royale** en son centre."
          },
          {
            "p": "Inyeon-Link n'accepte que les paires qui incluent la branche royale ; cette paire est donc une triade partielle ({scoreBanhap})."
          },
          {
            "p": "Le Tigre (寅) et le Chien (戌) du même groupe n'ont pas le caractère central 午 ; ils ne sont donc pas comptés comme une harmonie et sont traités comme neutres."
          },
          {
            "p": "Sur le cercle, 午 occupe la septième place et 戌 la onzième, et les deux caractères sont séparés de quatre pas."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Le Cheval et le Chien",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Triade partielle"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacBanhap} points en compatibilité zodiacale et de {swingDayBranchBanhap} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières de chaque animal",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Cheval** — Six-Harmonies [Mouton](/guide/zodiac-pair-horse-goat) · Triade partielle [Tigre](/guide/zodiac-pair-tiger-horse), [Chien](/guide/zodiac-pair-horse-dog) · Discorde [Bœuf](/guide/zodiac-pair-ox-horse) · Choc [Rat](/guide/zodiac-pair-rat-horse)",
              "Les partenaires particuliers **du Chien** — Six-Harmonies [Lapin](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Cheval](/guide/zodiac-pair-horse-dog) · Discorde [Serpent](/guide/zodiac-pair-snake-dog) · Choc [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Cheval](/guide/zodiac-horse) · [Chien](/guide/zodiac-dog), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-goat-goat": {
    "eyebrow": "Par paire",
    "title": "Le Mouton et le Mouton — Même branche",
    "summary": "Quelle relation deux personnes Mouton entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Mouton ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Mouton ont la même branche (未 et 未). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "未 est la huitième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Mouton",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Mouton",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Mouton** — Six-Harmonies [Cheval](/guide/zodiac-pair-horse-goat) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-goat) · Discorde [Rat](/guide/zodiac-pair-rat-goat) · Choc [Bœuf](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Mouton](/guide/zodiac-goat), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-monkey-monkey": {
    "eyebrow": "Par paire",
    "title": "Le Singe et le Singe — Même branche",
    "summary": "Quelle relation deux personnes Singe entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Singe ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Singe ont la même branche (申 et 申). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "申 est la neuvième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Singe",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Singe",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Singe** — Six-Harmonies [Serpent](/guide/zodiac-pair-snake-monkey) · Triade partielle [Rat](/guide/zodiac-pair-rat-monkey) · Discorde [Lapin](/guide/zodiac-pair-rabbit-monkey) · Choc [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Singe](/guide/zodiac-monkey), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rooster-rooster": {
    "eyebrow": "Par paire",
    "title": "Le Coq et le Coq — Même branche",
    "summary": "Quelle relation deux personnes Coq entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Coq ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Coq ont la même branche (酉 et 酉). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "酉 est la dixième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Coq",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Coq",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Coq** — Six-Harmonies [Dragon](/guide/zodiac-pair-dragon-rooster) · Triade partielle [Bœuf](/guide/zodiac-pair-ox-rooster), [Serpent](/guide/zodiac-pair-snake-rooster) · Discorde [Tigre](/guide/zodiac-pair-tiger-rooster) · Choc [Lapin](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Coq](/guide/zodiac-rooster), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dog-dog": {
    "eyebrow": "Par paire",
    "title": "Le Chien et le Chien — Même branche",
    "summary": "Quelle relation deux personnes Chien entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Chien ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Chien ont la même branche (戌 et 戌). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "戌 est la onzième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Chien",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Chien",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Chien** — Six-Harmonies [Lapin](/guide/zodiac-pair-rabbit-dog) · Triade partielle [Cheval](/guide/zodiac-pair-horse-dog) · Discorde [Serpent](/guide/zodiac-pair-snake-dog) · Choc [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Chien](/guide/zodiac-dog), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-pig-pig": {
    "eyebrow": "Par paire",
    "title": "Le Cochon et le Cochon — Même branche",
    "summary": "Quelle relation deux personnes Cochon entretiennent, quel score elle obtient et dans quelle mesure ce score déplace le score final — exposé exactement comme le prévoient les règles de calcul d'Inyeon-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Deux personnes Cochon ont la même branche",
        "blocks": [
          {
            "p": "Deux personnes Cochon ont la même branche (亥 et 亥). Cela signifie qu'elles se ressemblent, non qu'elles s'attirent."
          },
          {
            "p": "Elle obtient donc {scoreSame}, juste au-dessus du neutre ({scoreNeutral}) : ni harmonie, ni choc, ni discorde, seulement légèrement relevée."
          },
          {
            "p": "亥 est la douzième des douze branches terrestres."
          }
        ]
      },
      {
        "title": "Les chiffres de cette paire",
        "blocks": [
          {
            "table": {
              "caption": "Deux personnes Cochon",
              "head": [
                "Élément",
                "Valeur"
              ],
              "rows": [
                [
                  "Relation",
                  "Même branche"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Part du score final en compatibilité zodiacale",
                  "{weightZodiac}"
                ],
                [
                  "Part du score final en compatibilité de la branche du jour",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "De combien cela déplace le score final",
        "blocks": [
          {
            "p": "Toutes choses égales par ailleurs, cette paire augmente le score final de {swingZodiacSame} points en compatibilité zodiacale et de {swingDayBranchSame} points en compatibilité de la branche du jour, par rapport à une paire neutre."
          },
          {
            "p": "La compatibilité zodiacale met côte à côte les branches des années de naissance, et la compatibilité de la branche du jour celles des jours de naissance. Les deux peuvent être des branches différentes ; les deux mêmes personnes peuvent donc présenter des relations différentes dans chacune."
          }
        ]
      },
      {
        "title": "Les autres relations particulières du Cochon",
        "blocks": [
          {
            "ul": [
              "Les partenaires particuliers **du Cochon** — Six-Harmonies [Tigre](/guide/zodiac-pair-tiger-pig) · Triade partielle [Lapin](/guide/zodiac-pair-rabbit-pig) · Discorde [Dragon](/guide/zodiac-pair-dragon-pig) · Choc [Serpent](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul animal ne décide pas d'une relation entre deux personnes. {weightSaju} du score final est déterminé par la compatibilité de saju.",
              "Les variations de points ci-dessus supposent que tout le reste est égal ; le résultat réel est déterminé par l'ensemble du saju des deux personnes."
            ]
          },
          {
            "p": "Le guide complet de chaque animal se trouve sous [Cochon](/guide/zodiac-pig), et le tableau complet dans le [tableau des douze branches](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Dix Dieux",
    "title": "Dix Dieux et Position du Conjoint",
    "summary": "Nous examinons ce que chaque tige du jour est l'une pour l'autre à travers les Dix Dieux. Nous expliquons pourquoi la richesse directe et la richesse indirecte sont lues différemment même si les deux sont de la richesse.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "La tige du jour est la personne elle-même",
        "blocks": [
          {
            "p": "Parmi les huit caractères du saju, la **tige du jour** (la tige céleste du jour de naissance) fait référence à la personne elle-même. Les sept caractères restants sont interprétés comme l'environnement dans lequel cette tige du jour est placée."
          },
          {
            "p": "Les **Dix Dieux** (十神) divisent la manière dont la tige du jour perçoit les autres caractères en dix catégories. Ce qui me nourrit est **ressource**, ce qui est le même que moi est **pair**, ce que je produis est **sortie**, ce que je contrôle est **richesse**, et ce qui me contrôle est **autorité** — chacun des cinq est ensuite divisé par polarité, formant ainsi dix."
          }
        ]
      },
      {
        "title": "Ce que chaque tige du jour est les uns pour les autres",
        "blocks": [
          {
            "p": "C'est le premier élément de la compatibilité. Une fois déterminé ce que la tige du jour de A perçoit comme celle de B, la perception de B envers A est également déterminée, donc il y a **seulement six possibilités**."
          },
          {
            "table": {
              "caption": "Par ordre de score le plus élevé",
              "head": [
                "Paire",
                "Yin/Yang",
                "Nom",
                "Signification"
              ],
              "rows": [
                [
                  "Richesse Directe ↔ Autorité Directe",
                  "Polarité opposée",
                  "Lien chaleureux (有情)",
                  "C'est la paire traditionnellement considérée comme la position du conjoint. Le yin et le yang sont dépareillés, s'attirant mutuellement."
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
                  "Ils se ressemblent et sont égaux, mais ne se poussent pas."
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
                  "L'énergie donnée est prise par le partenaire, bloquant le flux."
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
            "p": "Le côté où le yin et le yang sont mal alignés (Richesse Propre, Officier Propre, Compagnon Propre) est émotionnel, tandis que le même côté (Ressource, Officier, Compagnon) est sans émotion, ce qui est le principe qui distingue le propre et le côté des Dix Dieux."
          }
        ]
      },
      {
        "title": "La raison de voir avec les Dix Dieux plutôt qu'avec trois éléments",
        "blocks": [
          {
            "p": "Il existe une méthode pour voir la relation de la tige du jour avec les trois éléments (génération mutuelle, similitude, dépassement mutuel). C'est simple, mais **le yin et le yang disparaissent.** 甲 (bois yang) et 乙 (bois yin) deviennent la même 'similitude' comme 甲 et 甲, et le dépassement mutuel est écrasé en un seul score sans direction ni yin ni yang."
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
            "p": "Même s'ils sont la même ressource, seule la **Richesse Propre** émotionnelle est considérée comme la position du conjoint, tandis que la Ressource est lue comme la nature de l'activité et de la richesse. Par conséquent, la Richesse Propre et l'Officier Propre comptent pour 2 points, tandis que la Ressource et l'Officier comptent pour 1 point, et les deux directions sont additionnées — si les deux sont considérées comme des positions de conjoint, c'est le plus élevé."
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
            "p": "En plus du score, nous décrivons **quelle forme** la paire de tiges du jour a sur l'écran des résultats. Qu'elles soient dans des positions similaires, qu'un côté soutienne l'autre, ou qu'un côté soit réprimé — si c'est une relation de soutien ou de répression, nous clarifions quel côté détient cette position."
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
            "p": "Le degré d'équilibre est symétrique, mais la complémentarité est intrinsèquement asymétrique. Cela est dû au fait que ce dont A a besoin est différent de ce dont B a besoin. Par conséquent, nous mesurons chaque côté séparément et faisons une moyenne — puisque c'est une moyenne, le score total reste symétrique."
          }
        ]
      },
      {
        "title": "Élément de Soutien — Réduire si excessif, ajouter si insuffisant",
        "blocks": [
          {
            "p": "L'Élément de Soutien (用神) est 'l'énergie dont cette personne a besoin en ce moment'. Il existe plusieurs méthodes pour le déterminer (répression, soutien, maladie et communication), mais cela peut être traduit en règles, et la plus largement utilisée est **répression (抑扶)**. Si le maître de jour est fort, on considère qu'il a besoin de réduire l'énergie, et s'il est faible, il a besoin d'ajouter de l'énergie."
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
            "p": "Le côté de la tige du jour est **印星 et 比劫** — l'énergie qui me donne naissance et l'énergie qui est comme moi. Puisque deux sur cinq, si l'énergie est complètement équilibrée, cela devient {evenAllyRatio}. Une plage est définie au-dessus et en dessous de cette valeur."
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
            "p": "L'équilibre signifie qu'il ne peut pas être couvert par l'élément de soutien. À ce moment-là, nous voyons simplement les deux énergies les plus fines comme nécessaires. Sur l'écran des résultats, cela est noté comme 'actuellement dans une position fine' plutôt qu'une déclaration définitive."
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
            "p": "Si rempli au niveau attendu, un score proche de 78 points est obtenu, et s'il est rempli beaucoup plus, il atteint 100 points, tandis que s'il est significativement insuffisant, il descend vers 55 points. Ici aussi, le bas n'est pas fixé à 0."
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
    "eyebrow": "Nos normes",
    "title": "Inyeon’s Match — La raison pour laquelle aucun score total n'est fourni",
    "summary": "Nous ne prenons les données que d'une seule personne tout en laissant la position de l'adversaire vide et substituons toutes les valeurs possibles dans cette position. Nous expliquons la raison pour laquelle aucun score total n'est attaché au type obtenu de cette manière.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Les calculs sont effectués en laissant la position de l'adversaire vide",
        "blocks": [
          {
            "p": "Les scores de compatibilité sont calculés en faisant correspondre deux personnes. **Inyeon’s Match** ne prend que les données d'une seule personne tout en laissant la position de l'adversaire vide et teste toutes les valeurs possibles qui pourraient entrer dans cette position. C'est comme faire fonctionner le moteur de compatibilité à l'envers."
          },
          {
            "p": "Ainsi, il n'est pas nécessaire de connaître la date de naissance de l'adversaire. Nous pouvons toujours dire : 'Quel type de profil de correspondance me convient ?' à propos de quelqu'un que nous n'avons pas encore rencontré."
          }
        ]
      },
      {
        "title": "Nous ne faisons pas des millions de combinaisons",
        "blocks": [
          {
            "p": "Le score de compatibilité dans le saju se compose de quatre éléments, et **chaque élément ne se chevauche pas dans ce qu'il examine.**"
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
                  "Relation des tiges du jour · Nature conjugale",
                  "Les tiges du jour des deux personnes — tiges célestes",
                  "10"
                ],
                [
                  "Complément des cinq éléments",
                  "Mon élément de soutien et le pouvoir des cinq éléments de l'adversaire",
                  "5"
                ],
                [
                  "Relation des branches du jour",
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
            "p": "C'est la décision la plus importante sur cet écran. Collecter les scores les plus élevés pour chaque branche peut sembler donner une 'correspondance parfaite', mais cette personne peut **ne pas exister réellement.**"
          },
          {
            "p": "Chez les personnes réelles, le maître du jour et les cinq éléments ne fonctionnent pas séparément. Une personne avec 甲木 a généralement aussi une forte énergie 木. Cette méthode de comptage des branches séparément ignore cette corrélation, donc la valeur obtenue en connectant les scores les plus élevés pour chaque branche devient une combinaison qui n'existe pas dans la réalité."
          },
          {
            "p": "Par conséquent, l'écran n'affiche que les **scores des éléments** et ne fournit pas de score total. Le score total sera calculé en recevant la date de naissance de l'autre personne pour [compatibilité saju](/compatibility)."
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
            "p": "Les raisons pour lesquelles certains types ont obtenu des scores élevés sont également notées élément par élément — que le maître du jour soit dans une position favorable, ou si cette personne possède l'énergie dont j'ai actuellement besoin."
          }
        ]
      },
      {
        "title": "Outil de confirmation",
        "blocks": [
          {
            "p": "Vous pourriez vous demander si la personne que vous avez en tête correspond à ce type. En entrant leur date de naissance dans l'outil de confirmation sur l'écran des résultats, vous serez informé de leur maître du jour, de leur branche du jour et de leur branche de l'année. Les valeurs saisies ne sont pas enregistrées à ce moment [(non enregistrées)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Heure",
    "title": "L'heure de naissance de chaque personne est corrigée séparément",
    "summary": "La compatibilité calcule séparément les heures des deux personnes. Cette page explique comment la correction s'applique lorsque les lieux de naissance et les époques diffèrent, et ce qui change lorsqu'une seule des deux ne connaît pas son heure.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "L'horloge et le soleil ne s'accordent pas",
        "blocks": [
          {
            "p": "Dans le saju, l'heure de naissance se lit à partir de la position du soleil, non de l'horloge. Mais un pays entier garde une seule heure standard ; l'horloge et le soleil d'un lieu donné s'écartent donc l'un de l'autre."
          },
          {
            "p": "L'heure standard de la Corée est fondée sur 135° E, alors que Séoul se trouve à environ 127° E. Le soleil de Séoul atteint son point le plus haut plus tard que ne l'indique l'horloge, d'environ **32 minutes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutes peuvent déplacer le pilier de l'heure d'un cran",
        "blocks": [
          {
            "p": "Une personne née à Séoul à 11:40 à l'horloge est née à 11:08 en heure solaire réelle, ce qui reste dans l'heure du Cheval (午, 11:00–13:00). Née à 11:20 à l'horloge, elle est née à 10:48, ce qui tombe dans l'heure du Serpent (巳, 9:00–11:00). La correction existe pour les personnes qui se trouvent précisément sur une telle frontière."
          }
        ]
      },
      {
        "title": "La correction est appliquée à chaque personne séparément",
        "blocks": [
          {
            "p": "La compatibilité établit le thème de chaque personne pour elle-même. C'est pourquoi l'écran de saisie demande le lieu de naissance **pour chaque personne**. Si l'une est née à Séoul et l'autre à l'étranger, leurs heures sont corrigées séparément, avec des longitudes et des fuseaux horaires différents."
          },
          {
            "p": "La liste de villes compte actuellement {cityCount} lieux. Pour les pays dont la longitude varie beaucoup, les villes sont subdivisées, car **15° de longitude déplacent le pilier de l'heure d'un cran**."
          },
          {
            "p": "Si vous ne choisissez pas, Séoul est utilisée. Si une seule personne est née à l'étranger et que les deux restent sur Séoul, seul le pilier de l'heure de la personne née à l'étranger est décalé ; les valeurs de l'autre personne ne sont pas affectées, car la correction s'applique personne par personne."
          }
        ]
      },
      {
        "title": "Les époques ont utilisé des heures standard différentes",
        "blocks": [
          {
            "p": "Deux personnes d'âges différents ont vécu sous l'heure standard de périodes différentes. C'est pourquoi une différence de longitude ne suffit pas à elle seule."
          },
          {
            "ul": [
              "**Avant 1912** — la Corée n'avait pas d'heure standard unifiée (heure moyenne locale).",
              "**1954–1961** — l'heure standard était UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — l'heure d'été était en vigueur."
            ]
          },
          {
            "p": "Inyeon-Link n'inscrit pas de méridien standard en dur. Il consulte le **fuseau horaire IANA** du lieu de naissance pour trouver l'heure standard réellement en vigueur à ce moment-là ; l'époque propre à chaque personne est ainsi appliquée même lorsque leurs années de naissance diffèrent."
          }
        ]
      },
      {
        "title": "Juste après minuit, la tige du jour change",
        "blocks": [
          {
            "p": "La correction est de −32 minutes ; une personne née entre 00:00 et 00:32 à l'horloge est donc née dans l'**heure de 23:00 du jour précédent** en heure solaire réelle. La date est reculée en conséquence."
          },
          {
            "p": "En compatibilité, cela compte beaucoup. Lorsque le pilier du jour recule d'un jour, la tige du jour et la branche du jour changent toutes deux ; la relation des tiges du jour, l'Étoile du Conjoint et la relation des branches du jour sont donc toutes recalculées avec d'autres caractères, et les forces des cinq éléments se déplacent avec elles."
          }
        ]
      },
      {
        "title": "Ce n'est pas un problème si une seule personne ignore son heure",
        "blocks": [
          {
            "p": "L'heure de naissance est facultative, et la compatibilité est quand même calculée si une seule des deux ne connaît pas la sienne. Seule la personne qui l'ignore est calculée sans pilier de l'heure, et l'écran de résultat l'indique. Les valeurs de l'autre personne restent inchangées."
          },
          {
            "p": "Aucun des quatre éléments de compatibilité n'utilise directement le pilier de l'heure, mais il influence les forces des cinq éléments ; il est donc plus précis de le saisir si vous le connaissez. La compatibilité zodiacale donne la même valeur avec ou sans heure — [elle ne regarde que la branche de l'année](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Confidentialité",
    "title": "Comment nous évitons de conserver les informations de deux personnes",
    "summary": "La compatibilité vous demande aussi de saisir la date de naissance d'une autre personne. Cette page explique, sur le plan technique, ce que signifie le fait que les saisies d'aucune des deux personnes ne soient enregistrées nulle part, et ce que transporte un lien de résultat.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Vous saisissez les informations d'une autre personne",
        "blocks": [
          {
            "p": "L'écran de compatibilité reçoit ensemble votre date de naissance et celle de l'autre personne. La date de naissance de l'autre personne est une information personnelle qui lui appartient ; nous exposons donc séparément la manière dont Inyeon-Link traite les deux."
          },
          {
            "p": "Il n'y a pas de compte, et nous ne demandons ni nom, ni adresse e-mail, ni numéro de téléphone. Nous ne recevons que les deux dates de naissance et, facultativement, l'heure de naissance, le lieu de naissance et le genre, et rien de tout cela ne subsiste une fois le calcul terminé."
          },
          {
            "p": "Il existe un champ pour un nom d'affichage à montrer sur l'écran de résultat, mais il ne sert qu'à l'affichage et n'intervient pas dans le calcul. Vous n'avez pas besoin de saisir un vrai nom."
          }
        ]
      },
      {
        "title": "Un lien de résultat contient les deux dates de naissance",
        "blocks": [
          {
            "p": "Lorsque le calcul est terminé, l'adresse ressemble à ceci."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "La partie après le **#** contient les saisies des deux personnes. On l'appelle le fragment, et selon le comportement standard du web, **le navigateur ne l'envoie pas au serveur**. Il a été conçu pour désigner une position à l'intérieur d'un document ; le serveur ne le voit donc jamais."
          },
          {
            "p": "Lorsque vous ouvrez un lien de résultat, le navigateur lit cette valeur et demande un calcul ; le serveur reçoit les valeurs dont il a besoin, renvoie la réponse et les oublie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Avant d'envoyer le lien à l'autre personne",
        "blocks": [
          {
            "p": "Ne pas être conservé sur un serveur ne veut pas dire que le lien est secret. Quiconque reçoit le lien peut voir les deux dates de naissance telles quelles, et un lien laissé dans une conversation reste dans cette conversation, quel que soit notre serveur. Envoyez-le en vous rappelant qu'il contient les informations de l'autre personne."
          }
        ]
      },
      {
        "title": "Pourquoi rien ne subsiste alors que le calcul s'exécute sur un serveur",
        "blocks": [
          {
            "p": "Pour établir un thème de saju, il nous faut une table d'almanach, trop volumineuse pour être envoyée au navigateur ; le calcul s'exécute donc sur le serveur. Mais **une fois la requête traitée, les valeurs ne sont utilisées nulle part ailleurs.** Aucun code ne les écrit dans une base de données."
          },
          {
            "p": "Le seul enregistrement qui subsiste est un compteur qui empêche une même personne d'envoyer trop de requêtes en peu de temps. Il ne contient aucune date de naissance et ne conserve pas l'adresse IP telle quelle ; il compte une valeur unique, hachée avec la date, et cette valeur change lorsque le jour change."
          }
        ]
      },
      {
        "title": "Ce à quoi nous renonçons en ne conservant rien",
        "blocks": [
          {
            "p": "Comme rien n'est conservé, nous avons renoncé à certaines choses."
          },
          {
            "ul": [
              "**Vous ne pouvez pas retrouver un ancien résultat de compatibilité.** Vous devez garder le lien pour le revoir.",
              "**Les deux mêmes personnes sont recalculées à chaque fois.** Il n'y a pas de cache. Mais toutes les règles sont déterministes, donc [la même saisie donne toujours la même valeur](/guide/how-compatibility).",
              "**Actualiser ramène la barrière publicitaire.** Il n'y a aucun endroit où garder la trace de l'avoir déjà regardée."
            ]
          }
        ]
      },
      {
        "title": "Si vous achetez un rapport",
        "blocks": [
          {
            "p": "Si vous achetez un rapport, un enregistrement de transaction est conservé à ce moment-là : les justificatifs de paiement ont une durée de conservation exigée par la loi, et sans historique de commande aucun remboursement ne peut être traité. Même alors, **les deux dates de naissance ne sont pas jointes à la commande** ; elles sont redemandées lors de la création du PDF après la confirmation du paiement, et utilisées uniquement à ce moment-là."
          },
          {
            "p": "Les détails figurent dans la [politique de confidentialité](/privacy)."
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
            "p": "Le but du rapport est d'**ajouter des couches qui ne sont pas sur l'écran**. Et cette couche n'est pas fabriquée ; elle se compose de valeurs qui ont déjà été calculées lors du processus de notation mais qui n'ont pas été utilisées à l'écran."
          }
        ]
      },
      {
        "title": "Rapport de compatibilité Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Paiement national {priceGunghapDomestic} (TVA incluse), paiement international {priceGunghapGlobal}. A4 {pagesGunghap} pages."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Les pages 1-3 sont organisées pour garder ce qui est à l'écran** et **à partir de la page 4, il s'agit de contenu non affiché à l'écran**. Ci-dessous, il est expliqué pourquoi certaines choses n'ont pas été affichées à l'écran."
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
            "p": "Si inclus, le score total changerait et ne correspondrait pas au lien de résultat déjà envoyé. Par conséquent, il est inclus uniquement comme matériel de lecture, et ce fait est noté sous le tableau."
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
            "p": "Vous pouvez voir les forces avant et après multiplication par l'énergie du mois côte à côte, montrant combien la saison l'a poussée. Le **ratio d'allié** qui distingue entre un maître de jour fort et un maître de jour faible est également noté — l'écran montre seulement le jugement, mais le rapport montre où ce jugement a été fait."
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
            "p": "Puisqu'il y a des directions, les deux côtés sont présentés séparément. Ce que je vois et ce que l'autre voit sont différents."
          }
        ]
      },
      {
        "title": "Page 7 — Comment ce saju a été calculé",
        "blocks": [
          {
            "p": "Il indique combien l'heure de naissance a été ajustée à l'**heure solaire réelle**, si la correction a causé un changement de date, et quelles étaient les dates solaires et lunaires lorsque le saju a été généré. Le concept est expliqué dans le document [Ajuster l'heure de naissance à l'heure solaire réelle](/guide/true-solar-time), mais **la valeur du nombre de minutes ajustées dans votre cas** varie d'une personne à l'autre, donc elle est seulement incluse dans le rapport."
          }
        ]
      },
      {
        "title": "Rapport de profil de correspondance Inyeon PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Paiement national {priceAffinityDomestic} (TVA incluse), paiement international {priceAffinityGlobal}. {pagesAffinity} pages A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Cette section est le **tableau de classement global**. L'écran montre seulement les ensembles qui correspondent bien, mais le rapport classe les dix tiges célestes et les douze branches terrestres **complètement**. Si vous ne regardez que les ensembles supérieurs, vous ne saurez pas 'qui vient ensuite' et 'le moins compatible'."
          }
        ]
      },
      {
        "title": "Choses à savoir avant d'acheter",
        "blocks": [
          {
            "p": "**Le serveur ne stocke pas de fichiers.** Une fois le paiement approuvé, le document est généré et envoyé immédiatement, ne laissant rien sur le serveur. Le principe de ce service de ne pas sauvegarder les valeurs d'entrée est maintenu même dans le flux payant."
          },
          {
            "p": "Donc, **veuillez sauvegarder le fichier immédiatement après le paiement.** Vous pouvez recevoir la même commande jusqu'à cinq fois, mais si vous quittez l'écran des résultats et que les valeurs d'entrée disparaissent, vous ne pouvez pas le recréer."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les rapports sont également des matériaux de référence",
        "blocks": [
          {
            "p": "Ce n'est pas parce que la longueur a augmenté que la conclusion est plus certaine. Ce que le rapport contient de plus est **la base du même calcul**, pas une affirmation plus forte. La lecture du destin est un domaine où les conclusions peuvent varier selon le praticien, et ce service ne calcule que ce qui peut être traduit en règles."
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
              "**Rapport d'Erreur de Calcul** — Si le tableau original de saju ou le score semble étrange, veuillez nous le faire savoir. Si vous incluez quand vous avez saisi la date et l'heure, nous pouvons recalculer avec les mêmes valeurs."
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
              "**Numéro d'Enregistrement Commercial** — {businessNumber}",
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
            "p": "Vous n'avez pas besoin d'inclure votre date et heure de naissance dans l'email de demande. Nous ne sauvegardons pas les entrées, donc nous ne pouvons pas les récupérer, et le numéro de commande est suffisant pour la confirmation. Veuillez l'inclure seulement si cela est nécessaire pour un rapport d'erreur de calcul."
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
  "intro": "Les changements de vos conditions d'utilisation — prix, politiques — sont publiés ici avant leur entrée en vigueur. Les améliorations internes ne sont pas listées : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Aucun avis pour le moment",
    "body": "Lorsque quelque chose change, cela apparaîtra ici."
  },
  "effective": "Prend effet le {date}",
  "pager": {
    "label": "Pages d'avis",
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
        "Si nous changeons les règles d'interprétation d'une manière qui peut modifier un score, nous le publierons ici en premier, avec la date à laquelle cela prend effet — car un lien de résultat que vous détenez déjà pourrait alors lire différemment.",
        "L'ensemble de règles actuel est v10. Les paiements ne sont pas encore ouverts."
      ]
    }
  }
} satisfies NoticeCopy;
