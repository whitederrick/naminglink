import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "about": {
    "eyebrow": "Introduction",
    "title": "Introduction à Saju-Link",
    "summary": "Ceci est un service qui établit un saju (lecture des quatre piliers) basé sur votre date et heure de naissance et explique ce que signifient les huit caractères. Il clarifie ce qui est calculé et ce qui ne l'est pas.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "title": "Que faisons-nous ?",
        "blocks": [
          {
            "p": "Saju-Link établit le **graphique de saju (quatre piliers) basé sur votre date et heure de naissance et montre ce que signifient les huit caractères**. Il lit la force des cinq éléments et la force du maître du jour, et examine également la fortune d'aujourd'hui basée sur le tige du jour."
          },
          {
            "p": "Ce que vous voyez à l'écran est **gratuit et ne nécessite pas d'adhésion.** Le produit payant est un document PDF contenant des valeurs non affichées à l'écran — la base pour distinguer entre un maître du jour fort et un maître du jour faible, Wang Sang Hyu Su Sa, et les détails de correction pour le vrai temps solaire."
          }
        ]
      },
      {
        "title": "Que calculons-nous ?",
        "blocks": [
          {
            "p": "Le saju est établi en utilisant le **manseyeok (almanach lunisolaire coréen)**. L'heure de naissance est corrigée au **temps solaire vrai** du lieu de naissance — car la position réelle du soleil varie selon la région même si l'horloge indique la même heure."
          },
          {
            "p": "Les scores sont donnés uniquement selon des règles établies. Les concepts de la 명리 traditionnelle (myeongri, l'étude du destin) tels que les Dix Dieux, les relations entre les branches terrestres, et les éléments de soutien sont traduits en règles de calcul, et **la même entrée produira toujours la même valeur**. Lorsque les règles sont modifiées, des tests de régression sont effectués pour garantir que les résultats précédents restent inchangés."
          },
          {
            "p": "**L'IA n'est pas utilisée dans les phrases à l'écran.** Les explications apparaissant sur l'écran gratuit sont des phrases fixes attachées aux résultats de calcul. **Seules les interprétations dans les rapports payants** utilisent l'IA générative, et même alors, l'IA ne crée pas de scores — elle écrit uniquement des phrases basées sur les valeurs fournies par le moteur."
          }
        ]
      },
      {
        "title": "Que ne disons-nous pas ?",
        "blocks": [
          {
            "ul": [
              "**Nous ne fournissons pas de divination.** Nous n'écrivons pas que vous devriez rencontrer ou éviter quelqu'un. Ceci est un matériel de référence résumant les perspectives de la 명리 traditionnelle.",
              "**Nous ne sauvegardons pas les entrées.** La date et l'heure de naissance ne sont utilisées qu'au moment du calcul et ne sont pas conservées sur le serveur. Le lien de résultat est également stocké dans un emplacement que le navigateur n'envoie pas au serveur.",
              "**Les scores ne sont pas considérés comme des valeurs humaines.** Juste parce que la fortune d'aujourd'hui est basse ne signifie pas que vous devriez abandonner ce jour."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Les méthodes de calcul détaillées sont écrites dans le [Guide de l'utilisateur](/guide). Les informations commerciales et les coordonnées peuvent être trouvées dans [Contactez-nous](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base de calcul",
    "title": "Quelle est la base des calculs ?",
    "summary": "Nous divulguons toutes les règles utilisées par Saju-Link. Vous pouvez vérifier d'où proviennent les chiffres affichés à l'écran, y compris les ajustements pour la fortune d'aujourd'hui, les scores du tableau des relations entre les branches terrestres, et les valeurs limites qui distinguent entre un maître du jour fort et un maître du jour faible.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Les valeurs écrites ici sont toutes **lues directement à partir du code de calcul**. Comme elles ne sont pas transcrites manuellement dans le texte, si les règles changent, les chiffres dans ce document changeront également en conséquence."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Base du service",
    "title": "Graphique Saju — D'où viennent les huit caractères ?",
    "summary": "Il explique comment l'année, le mois, le jour et l'heure de naissance deviennent les quatre piliers et huit caractères, et identifie quel caractère vous désigne. Il discute également de pourquoi cela peut être vu même sans connaître l'heure exacte de naissance.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Quatre Piliers, Huit Caractères",
        "blocks": [
          {
            "p": "Saju (四柱) signifie littéralement **quatre piliers**. Chacun de l'année, du mois, du jour et de l'heure de naissance est établi comme un pilier, et deux caractères sont écrits pour chaque pilier. Ainsi, il y a un total de huit caractères, qui est appelé **원국 (won-guk)**."
          },
          {
            "table": {
              "head": [
                "Piliers",
                "D'où cela vient-il ?",
                "Deux Caractères"
              ],
              "rows": [
                [
                  "Pilier Année (年柱)",
                  "Année de naissance",
                  "Tige Céleste + Branche Terrestre"
                ],
                [
                  "Pilier Mois (月柱)",
                  "Mois de naissance",
                  "Tige Céleste + Branche Terrestre"
                ],
                [
                  "Pilier Jour (日柱)",
                  "Jour de naissance",
                  "Tige Céleste + Branche Terrestre"
                ],
                [
                  "Pilier Heure (時柱)",
                  "Heure de naissance",
                  "Tige Céleste + Branche Terrestre"
                ]
              ]
            }
          },
          {
            "p": "Les caractères supérieurs sont appelés tiges célestes (天干), et les caractères inférieurs sont appelés branches terrestres (地支). Il y a dix tiges célestes et douze branches terrestres. Les douze branches terrestres sont communément appelées **signes du zodiaque**."
          }
        ]
      },
      {
        "title": "Parmi eux, un caractère me désigne.",
        "blocks": [
          {
            "p": "Tous les huit caractères n'ont pas le même poids. La **tige céleste du jour de naissance**, spécifiquement le caractère supérieur du pilier du jour, désigne **moi-même**. Cela s'appelle la **tige du jour (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Le saju se compose de huit caractères établis en utilisant deux caractères chacun pour l'année, le mois, le jour et l'heure de naissance, représentés par les tiges célestes et les branches terrestres. Ici, la tige du jour proéminente (日干) est le caractère qui me désigne.",
            "labels": {
              "year": "Pilier Année",
              "yearNote": "Racine · Signe du Zodiaque",
              "month": "Pilier Mois",
              "monthNote": "Saison · Force",
              "day": "Maître du Jour",
              "dayNote": "Soi · Palais du Conjoint",
              "hour": "Maître de l'Heure",
              "hourNote": "Années Avancées · Utilisation",
              "stem": "Tige Céleste",
              "stemNote": "Tige du Jour = Soi",
              "branch": "Branche Terrestre",
              "branchNote": "Branche du Jour = Palais du Conjoint"
            }
          },
          {
            "p": "Ce que ce service montre provient principalement de ce caractère — l'interprétation des tendances, la force des cinq éléments, l'énergie actuellement nécessaire, et la lecture d'aujourd'hui sont toutes mesurées en fonction de la Tige du Jour. Les sept caractères restants indiquent 'dans quel environnement la Tige du Jour est placée'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pourquoi le Jour de Naissance ?",
        "blocks": [
          {
            "p": "La Tige de l'Année est la même pour tous ceux nés cette année-là, et la Tige du Mois est la même pour tous ceux nés ce mois-là. La Tige du Jour change lorsque le jour change, et la divination traditionnelle a considéré cette position comme le Soi depuis la Dynastie Song. Si la Tige de l'Heure est incluse, elle différencie même parmi ceux nés le même jour."
          }
        ]
      },
      {
        "title": "Divisé par les Termes Solaires, Pas par l'Année Calendrier",
        "blocks": [
          {
            "p": "Une année de saju ne change pas le 1er janvier mais plutôt à **Ipchun (environ le 4 février)**. Le mois se divise également en fonction des termes solaires."
          },
          {
            "p": "Ainsi, ceux nés en **janvier et début février reçoivent la Tige de l'Année de l'année précédente**. C'est ici que la compréhension erronée des signes du zodiaque se produit. Il en va de même si vous saisissez une date de naissance lunaire — elle est convertie en solaire puis divisée par les termes solaires."
          }
        ]
      },
      {
        "title": "Vous Pouvez le Lire Même Sans Connaître l'Heure de Naissance",
        "blocks": [
          {
            "p": "Si vous ne saisissez pas l'heure, la lecture sera basée sur les trois piliers et six caractères, excluant le Maître de l'Heure. Nous ne devinons pas les valeurs manquantes — attribuer arbitrairement un Maître de l'Heure peut perturber la force des cinq éléments, conduisant à des conclusions incorrectes au lieu de potentiellement précises."
          },
          {
            "p": "Si vous connaissez l'heure, il est préférable de l'inclure. Puisque deux caractères sont ajoutés parmi les huit, la force et l'évaluation des cinq éléments peuvent changer. Cependant, nous n'utilisons pas l'heure de l'horloge directement mais utilisons plutôt [le Temps Solaire Vrai](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "La méthode de comptage des huit caractères comme cinq éléments pour évaluer la force se poursuit dans [Force des Cinq Éléments et Maître du Jour Fort/Faible](/guide/five-elements), tandis que la méthode de lecture des caractères restants en fonction de la Tige du Jour se poursuit dans [Dix Dieux](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Cinq Éléments",
    "title": "Force des Cinq Éléments et Maître du Jour Fort/Faible",
    "summary": "Nous comptons les huit caractères comme cinq éléments pour voir quelle énergie est forte et laquelle est faible. Nous divulguons les valeurs seuils (45%·35%) qui déterminent la force de la Tige du Jour.",
    "backLabel": "Base de Calcul",
    "sections": [
      {
        "title": "Comptage des Huit Caractères comme Cinq Énergies",
        "blocks": [
          {
            "p": "Les dix Tiges Célestes et douze Branches Terrestres appartiennent chacune à l'un des **Cinq Éléments (五行)** — Bois (木), Feu (火), Terre (土), Métal (金), Eau (水). En comptant les caractères dans le tableau original par leurs éléments respectifs, nous pouvons déterminer quelle énergie est forte et laquelle est faible."
          },
          {
            "p": "Cependant, nous ne comptons pas seulement les nombres. Nous considérons également **si le mois de naissance soutient cette énergie**. Même le même caractère peut avoir des forces différentes selon qu'il rencontre sa saison. Cela s'appelle le Signe du Mois (月令), et il est divisé en cinq étapes : Wang (旺), Sang (相), Hyu (休), Su (囚), et Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Où l'Écran et le Rapport Diffèrent",
        "blocks": [
          {
            "p": "L'écran gratuit ne montre que la **force après réflexion du Signe du Mois**. Les valeurs avant le Signe du Mois et le tableau de Wang, Sang, Hyu, Su, et Sa sont inclus dans le rapport payant — cela est fourni pour que vous puissiez vérifier directement où l'évaluation diverge."
          }
        ]
      },
      {
        "title": "Force de la Tige du Jour — Forte et Faible",
        "blocks": [
          {
            "p": "Après avoir compté les forces des cinq éléments, nous évaluons si la **Tige du Jour est forte ou faible**. Le critère est le ratio des énergies alignées avec la Tige du Jour."
          },
          {
            "p": "Les énergies alignées avec la Tige du Jour sont **Humanité et Compagnon** — les énergies qui me donnent naissance et celles qui me ressemblent. Puisqu'il y en a deux sur cinq, s'il n'y a pas de biais, cela sera autour de {evenAllyRatio}. Nous évaluons au-dessus et en dessous de cette limite comme équilibré."
          },
          {
            "table": {
              "head": [
                "Ratio des Énergies Alignées avec la Tige du Jour",
                "Évaluation",
                "Que Cela Signifie-t-il ?"
              ],
              "rows": [
                [
                  "{strongThreshold} ou plus",
                  "Maître du Jour Fort (身强)",
                  "Les énergies soutenant la Tige du Jour sont abondantes."
                ],
                [
                  "{weakThreshold} ou plus et moins de {strongThreshold}",
                  "Équilibré (中和)",
                  "Il est difficile de conclure dans un sens ou dans l'autre."
                ],
                [
                  "Moins de {weakThreshold}",
                  "Maître du Jour Faible (身弱)",
                  "Les énergies soutenant la Tige du Jour sont faibles."
                ]
              ]
            }
          },
          {
            "p": "Les chiffres dans ce tableau ne sont pas transcrits du texte mais sont **lus directement depuis le moteur**. Si les règles changent, ce document changera également."
          }
        ]
      },
      {
        "title": "La Force n'est Ni Bonne Ni Mauvaise",
        "blocks": [
          {
            "p": "Être fort ne signifie pas bon, et être faible ne signifie pas mauvais. Si fort, il y a le pouvoir d'avancer, mais il est facile de pencher d'un côté ; si faible, il est plus facile d'emprunter la force des autres, mais on peut se fatiguer facilement en endurant seul. **Les énergies nécessaires diffèrent dans chaque cas.**"
          },
          {
            "p": "Déterminer cette 'énergie nécessaire' est l'élément de soutien, et cela continue dans [Élément de Soutien](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Comment les huit caractères sont établis est dans [Tableau Original de Saju](/guide/natal-chart). Comment le Maître du Jour d'aujourd'hui interagit avec cette force est couvert dans [Lecture d'Aujourd'hui](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Élément de Soutien",
    "title": "Élément de Soutien — L'Énergie Nécessaire Maintenant",
    "summary": "Si la Tige du Jour est forte, nous considérons l'énergie à réduire ; si faible, nous considérons l'énergie à soutenir comme nécessaire. Cela explique comment choisir cette énergie et comment la gérer lorsqu'elle est équilibrée.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Les cinq éléments seuls ne suffisent pas",
        "blocks": [
          {
            "p": "Il existe des moyens de mesurer si les cinq éléments sont répartis de manière uniforme. Cependant, ce qui est vraiment nécessaire est **ce qui manque et ce qui est excessif dans ce saju**."
          },
          {
            "p": "Un saju qui est uniformément réparti n'est pas toujours confortable, ni un saju qui est biaisé toujours difficile. La direction du biais et s'il y a un élément pour l'atténuer est le carrefour."
          }
        ]
      },
      {
        "title": "Élément de soutien — Réduire si excessif, ajouter si manquant",
        "blocks": [
          {
            "p": "L'élément de soutien (用神) est **l'énergie actuellement nécessaire à cette personne**. Il existe plusieurs méthodes pour le déterminer (réduction, ajout, maladie et harmonie), mais la plus largement utilisée est **la réduction (抑扶)**. Si le maître du jour est fort, on pense qu'une énergie à réduire est nécessaire ; si faible, une énergie à ajouter est requise."
          },
          {
            "table": {
              "head": [
                "Jugement",
                "Ce qui est nécessaire",
                "Nombre de types"
              ],
              "rows": [
                [
                  "Maître du jour fort (身强)",
                  "Énergie à réduire — Nourriture et richesse, Position officielle",
                  "Trois"
                ],
                [
                  "Maître du jour faible (身弱)",
                  "Énergie à ajouter — Ressource, Compagnon",
                  "Deux"
                ],
                [
                  "Équilibré (中和)",
                  "Ne peut pas être couvert par la réduction, donc l'énergie la plus fine",
                  "Deux"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seuil de force et de faiblesse",
        "blocks": [
          {
            "p": "Le côté du maître du jour est **Ressource et Compagnon** — l'énergie qui me donne naissance et l'énergie qui est comme moi. Puisque deux sur cinq sont impliqués, l'équilibre complet sera {evenAllyRatio}. La largeur est fixée au-dessus et en dessous de ce {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "Le ratio d'alliés (Ressource + Compagnon) dans la force globale",
              "head": [
                "Ratio",
                "Jugement"
              ],
              "rows": [
                [
                  "{strongThreshold} ou plus",
                  "Maître du jour fort"
                ],
                [
                  "{weakThreshold} ou plus et moins de {strongThreshold}",
                  "Équilibré"
                ],
                [
                  "Moins de {weakThreshold}",
                  "Maître du jour faible"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Équilibré est un 'jugement moins certain'",
        "blocks": [
          {
            "p": "Équilibré signifie qu'il ne peut pas être couvert par la réduction. À ce moment-là, les deux énergies les plus fines sont simplement considérées comme nécessaires. Dans l'écran de résultat, cela est noté comme 'position actuellement fine' plutôt qu'une déclaration définitive."
          }
        ]
      },
      {
        "title": "La force n'est pas le nombre de caractères",
        "blocks": [
          {
            "p": "Lors du comptage de la force des cinq éléments, les huit caractères ne sont pas comptés tels qu'ils apparaissent. Les valeurs reflètent les tiges célestes cachées (地藏干) au sein des branches terrestres et la saison de l'énergie du mois (月令) dans laquelle on est né."
          },
          {
            "p": "Compter uniquement les caractères de surface manque le fait que même les mêmes caractères 木 peuvent avoir des forces complètement différentes selon la saison. Le 木 du printemps et le 木 de l'automne, bien que le même caractère, ont des forces différentes."
          }
        ]
      },
      {
        "title": "Où utiliser l'élément de soutien",
        "blocks": [
          {
            "p": "L'élément de soutien déterminé est utilisé à deux endroits. L'un est l'écran de résultat **'énergie actuellement nécessaire'**, et l'autre est [la fortune d'aujourd'hui](/guide/today-fortune) — si l'énergie d'aujourd'hui correspond à l'élément de soutien, c'est l'élément qui fait le plus bouger le score ce jour-là."
          }
        ]
      },
      {
        "title": "C'est un jugement simple",
        "blocks": [
          {
            "p": "L'analyse réelle du destin prend en compte la formation et les conditions saisonnières (la chaleur et l'humidité de la saison) pour déterminer l'élément de soutien, et les conclusions peuvent varier selon la méthode. Saju-Link utilise uniquement **la réduction qui peut être mesurée par des valeurs de force**. Cela est dû au principe d'utiliser uniquement ce qui peut être converti en règles, donc la même entrée donnera toujours la même réponse."
          },
          {
            "p": "Au lieu de cela, l'écran de résultat présente également le maître du jour fort et faible avec l'énergie actuellement nécessaire comme **matériel de lecture**. Cela vise à éviter de cacher la base du score."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Les Dix Dieux",
    "title": "Les Dix Dieux — Les Dix Positions Dans Mon Saju",
    "summary": "Basé sur le maître du jour, les caractères restants sont divisés en dix noms. Cela discute des raisons de distinguer entre la richesse régulière et la richesse secondaire, même si ce sont le même élément de richesse.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le Maître du Jour Est La Personne Elle-Même",
        "blocks": [
          {
            "p": "Parmi les huit caractères du saju, le **maître du jour** (la tige céleste du jour de naissance) fait référence à la personne elle-même. Les sept caractères restants sont lus comme l'environnement dans lequel ce maître du jour existe."
          },
          {
            "p": "**Les Dix Dieux** (十神) sont les dix divisions de la façon dont le maître du jour perçoit les autres caractères. L'énergie qui me nourrit est Ressource, l'énergie qui est comme moi est Compagnon, l'énergie que je donne naissance est Nourriture et Richesse, l'énergie qui me supprime est Position officielle, et l'énergie que je supprime est Richesse — ces cinq branches sont encore divisées en yin et yang, formant dix."
          }
        ]
      },
      {
        "title": "Ce Que Les Sept Caractères Restants Signifient Pour Moi",
        "blocks": [
          {
            "p": "Une fois le maître du jour déterminé, les caractères restants dans le tableau original reçoivent chacun un nom. L'énergie qui me donne naissance, l'énergie qui est comme moi, l'énergie que je donne naissance, l'énergie qui me supprime, et l'énergie que je supprime — ces cinq branches sont encore divisées en **dix** à travers le yin et le yang. C'est les Dix Dieux."
          },
          {
            "p": "Ainsi, les Dix Dieux ne font pas référence aux relations avec les autres mais à **les positions en moi-même**. Quelles positions sont épaisses ou fines indiquent mes tendances et ma façon de vivre."
          }
        ]
      },
      {
        "title": "La Raison de Voir Comme Les Dix Dieux Au Lieu de Trois Éléments",
        "blocks": [
          {
            "p": "Il existe également une méthode pour voir la relation du jour stem uniquement à travers les trois aspects des cinq éléments (soutenant, même et opposé). C'est simple, mais **le yin et le yang disparaissent.** 甲 (bois yang) et 乙 (bois yin) deviennent identiques à 甲, qui est une représentation de 'similarité', et la relation opposée est regroupée en un seul score sans direction ni yin et yang."
          },
          {
            "p": "La position du conjoint doit être évaluée selon les Dix Dieux en termes de yin et yang. Si les éléments vus à travers les cinq éléments sont mélangés avec ceux vus à travers les Dix Dieux dans un même moteur, il y aura deux standards pour les mêmes deux caractères. Par conséquent, nous unifions cela sous les Dix Dieux."
          }
        ]
      },
      {
        "title": "La position du conjoint est 정재 et 정관",
        "blocks": [
          {
            "p": "La divination traditionnelle considère la position du conjoint différemment selon le genre. Pour les hommes, c'est **정재 (正財)**, et pour les femmes, c'est **정관 (正官)**. Même s'ils sont le même élément de richesse, seul le 정재 qui est désaligné en yin et yang est considéré comme la position du conjoint, tandis que 편재 est interprété non pas comme un conjoint mais en termes d'activité et de richesse."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si vous ne spécifiez pas le genre, cette position est omise",
        "blocks": [
          {
            "p": "C'est parce qu'il ne peut pas être déterminé quel côté, 정재 ou 정관, considérer comme la position du conjoint. Au lieu de deviner pour remplir une valeur manquante, nous lisons les éléments restants sans celui-ci."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "La fortune d'aujourd'hui",
    "title": "Comment la fortune d'aujourd'hui se présente-t-elle ?",
    "summary": "Le jour stem d'aujourd'hui est comparé au tableau original pour obtenir un score. Les douze relations des éléments soutenants et les sept relations des earthly branches, ainsi que tous les vingt éléments et leurs ajouts et soustractions respectifs, sont entièrement divulgués.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Aujourd'hui, nous l'établissons également de la même manière que les huit caractères",
        "blocks": [
          {
            "p": "Chaque jour a son propre **일진 (日辰)**. En utilisant la même méthode que pour établir le cycle du jour du tableau original, aujourd'hui a également un heavenly stem et un earthly branch attachés. La fortune d'aujourd'hui concerne la comparaison de ces deux caractères avec le tableau original."
          },
          {
            "p": "Le score de base est **{baseScore} points**. Les éléments ci-dessous sont ajoutés et soustraits, et finalement, il est confiné entre {clampLow} points et {clampHigh} points — nous ne mentionnons pas 0 points ou 100 points."
          }
        ]
      },
      {
        "title": "① L'énergie d'aujourd'hui est-elle ce dont j'ai besoin ?",
        "blocks": [
          {
            "p": "C'est la position la plus significative. Nous vérifions si l'énergie d'aujourd'hui correspond à l' 'énergie nécessaire en ce moment' déterminée par [억부용신](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "L'énergie d'aujourd'hui est",
                "Ajout/Soustraction"
              ],
              "rows": [
                [
                  "L'énergie nécessaire en ce moment",
                  "{todayIsYongsin}"
                ],
                [
                  "Elle génère l'énergie nécessaire",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Elle supprime l'énergie nécessaire",
                  "{todayControlsYongsin}"
                ],
                [
                  "Elle pousse plus du côté déjà débordant",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ne considérez pas le 기신 comme 'tout sauf le 용신'",
        "blocks": [
          {
            "p": "Si vous faites cela, à la fois l'énergie qui génère le 용신 et l'énergie qui supprime le 용신 deviennent mauvaises, et les deux dernières lignes du tableau ci-dessus deviennent indistinguables. Seule l'énergie qui **pousse plus fort dans la direction opposée** selon le sens de 억부 est considérée comme 기신."
          }
        ]
      },
      {
        "title": "② La relation entre le heavenly stem d'aujourd'hui et le jour stem",
        "blocks": [
          {
            "p": "Les relations soutenantes et opposées des cinq éléments sont appliquées directement entre le jour stem et le heavenly stem d'aujourd'hui."
          },
          {
            "table": {
              "head": [
                "Relation",
                "Ajout/Soustraction"
              ],
              "rows": [
                [
                  "Aujourd'hui me génère",
                  "{generatesSelf}"
                ],
                [
                  "Aujourd'hui et moi sommes la même énergie",
                  "{sameElement}"
                ],
                [
                  "Je supprime aujourd'hui",
                  "{selfControls}"
                ],
                [
                  "Je m'écoule avec aujourd'hui",
                  "{selfGenerates}"
                ],
                [
                  "Aujourd'hui me supprime",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ La branche terrestre d'aujourd'hui rencontre les branches terrestres du tableau original",
        "blocks": [
          {
            "p": "La branche terrestre d'aujourd'hui est comparée aux branches terrestres du tableau original. Le tableau des relations lui-même est dans [십이지 관계](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relation",
                "Ajout/Soustraction"
              ],
              "rows": [
                [
                  "triade complète (三合)",
                  "{branchSamhap}"
                ],
                [
                  "paire de six-harmonies (六合)",
                  "{branchYukhap}"
                ],
                [
                  "triade demi (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discorde silencieuse et durable (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "conflit (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Lorsque plusieurs piliers sont présents, plusieurs relations apparaissent. Toutes sont ajoutées, mais cet élément entier est limité à **±{branchMaxAbs} points** — cela vise à empêcher qu'une seule relation de branche terrestre ne détermine l'ensemble de la journée."
          }
        ]
      },
      {
        "title": "④ Correction Basée sur la Force",
        "blocks": [
          {
            "p": "Même avec la même énergie, la signification diffère pour un maître de jour fort et un maître de jour faible. Par conséquent, nous faisons un dernier ajustement."
          },
          {
            "table": {
              "head": [
                "Situation",
                "Ajustement"
              ],
              "rows": [
                [
                  "Maître de jour faible mais aujourd'hui les soutient",
                  "{weakTodayHelps}"
                ],
                [
                  "Maître de jour fort mais aujourd'hui réduit adéquatement le fardeau",
                  "{strongTodayDrains}"
                ],
                [
                  "Maître de jour fort mais aujourd'hui renforce le soutien",
                  "{strongTodayHelps}"
                ],
                [
                  "Maître de jour faible mais aujourd'hui ajoute au fardeau",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Scores par Grade et Domaine",
        "blocks": [
          {
            "p": "Le score total est divisé en cinq grades."
          },
          {
            "table": {
              "head": [
                "Score",
                "Grade"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} points ou plus",
                  "Grande Chance (大吉)"
                ],
                [
                  "{gradeGilMin} points ou plus",
                  "Chance (吉)"
                ],
                [
                  "{gradePyeongMin} points ou plus",
                  "Moyenne (平)"
                ],
                [
                  "{gradeJuuiMin} points ou plus",
                  "Prudence (注意)"
                ],
                [
                  "{gradeJosimMin} points ou plus",
                  "Soyez Prudent (操心)"
                ]
              ]
            }
          },
          {
            "p": "Les quatre domaines de la richesse, de l'amour, de la carrière et de la santé héritent d'un score total de {overallShare}, tandis que le reste est divisé selon les Dix Dieux et les relations de branches terrestres pertinentes à ces domaines. Par conséquent, même si le score total est le même, les chiffres par domaine diffèrent d'une personne à l'autre."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Les chiffres ci-dessus sont tous lus à partir des paramètres du moteur. Si les règles changent, ce document changera également, et tout changement de score sera d'abord publié dans le [Avis](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tableau des Relations",
    "title": "Relations des Branches Terrestres — Combinaison, Conflit et Discorde",
    "summary": "Ceci est un tableau de relations montrant comment le maître de jour d'aujourd'hui interagit avec le tableau natal. Il révèle ce qu'est chaque combinaison, conflit et discordance et combien de points ils ont.",
    "backLabel": "Base de Calcul",
    "sections": [
      {
        "title": "Les Branches Terrestres sont Douze Caractères",
        "blocks": [
          {
            "p": "Les douze branches terrestres (十二支) sont 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Les signes du zodiaque communément connus — Rat, Bœuf, Tigre, Lapin, Dragon, Serpent, Cheval, Mouton, Singe, Coq, Chien, Cochon — sont chacun attachés à l'un de ces douze caractères."
          },
          {
            "figure": "branch-wheel",
            "caption": "Lorsque les douze caractères sont disposés en cercle, les relations sont clairement visibles. Le conflit (沖) fait toujours face à l'autre, tandis que l'harmonie à six et la discorde sont des paires plus proches. Ces lignes ne sont pas écrites dans le texte mais sont directement dérivées des règles de calcul.",
            "labels": {
              "alt": "Un diagramme montrant les douze branches terrestres disposées en cercle avec des lignes reliant l'harmonie à six, le conflit et la discorde.",
              "yukhap": "Harmonie à Six",
              "chung": "Conflit",
              "wonjin": "Discorde",
              "rat": "Rat",
              "ox": "Bœuf",
              "tiger": "Tigre",
              "rabbit": "Lapin",
              "dragon": "Dragon",
              "snake": "serpent",
              "horse": "cheval",
              "goat": "chèvre",
              "monkey": "singe",
              "rooster": "coq",
              "dog": "chien",
              "pig": "cochon"
            }
          },
          {
            "p": "Dans le saju, chacun des quatre piliers a une branche terrestre. **La lecture d'aujourd'hui** est déterminée en faisant correspondre **la branche du jour** avec les quatre branches du tableau original en utilisant le tableau de relations ci-dessous."
          }
        ]
      },
      {
        "title": "Tableau des Relations Globales",
        "blocks": [
          {
            "table": {
              "caption": "Par ordre de score le plus élevé. Ce sont les valeurs utilisées par Saju-Link.",
              "head": [
                "Relation",
                "Paire Correspondante",
                "Signification",
                "Score"
              ],
              "rows": [
                [
                  "Triade (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Lorsque les trois caractères se réunissent, ils forment une formation élémentaire complète (局). C'est considéré comme la combinaison la plus forte.",
                  "{scoreSamhap}"
                ],
                [
                  "Six Harmonies (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Paires qui s'attirent. C'est la combinaison la plus courante car elle ne comprend que deux caractères.",
                  "{scoreYukhap}"
                ],
                [
                  "Demi-Triade (半合)",
                  "Deux caractères qui incluent l'un des caractères royaux (子·酉·午·卯) de la triade",
                  "Une demi-combinaison qui inclut un caractère central à la formation. Elle ne forme pas une formation élémentaire complète avec seulement deux caractères, ce qui la rend inférieure à la triade.",
                  "{scoreBanhap}"
                ],
                [
                  "Même Branche",
                  "子子 · 丑丑 …",
                  "Caractères qui sont les mêmes. Cela signifie qu'ils se ressemblent mais n'implique pas d'attraction, donc ils sont placés au milieu.",
                  "{scoreSame}"
                ],
                [
                  "Pas de Relation",
                  "Paires qui n'appartiennent à aucune des catégories ci-dessus ou ci-dessous",
                  "Combinaisons qui n'ont pas de relation spéciale. Cela sert de point de référence.",
                  "{scoreNeutral}"
                ],
                [
                  "Discord Calme (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Paires qui ne peuvent se séparer malgré leur aversion. Elles semblent calmes en surface mais sont considérées comme durables.",
                  "{scoreWonjin}"
                ],
                [
                  "Conflit (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Paires qui s'affrontent directement. Ce sont six paires qui se font face.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triades et Demi-Triades",
        "blocks": [
          {
            "p": "Une triade nécessite la présence de tous les trois caractères. Étant donné qu'il y a quatre branches terrestres dans le tableau original, il est possible que la branche du jour se combine avec elles, résultant en une triade — à ce moment-là, elle reçoit un score de {scoreSamhap}. Si seulement deux caractères sont impliqués, c'est une demi-triade."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les Demi-Triades Nécessitent des Caractères Royaux pour Être Reconnaissables",
        "blocks": [
          {
            "p": "Il existe également une méthode qui compte comme une demi-triade si les deux caractères appartiennent au même groupe de triade. Cela permet à des combinaisons comme 申辰, qui sont difficiles à appeler une combinaison, de recevoir des scores élevés. Par conséquent, ce service reconnaît une demi-triade uniquement lorsqu'elle inclut des caractères royaux (子·酉·午·卯), et ne considère pas des combinaisons comme 申辰·巳丑·寅戌·亥未 comme valides."
          }
        ]
      },
      {
        "title": "Raison de la Séparation du Discord Calme",
        "blocks": [
          {
            "p": "Les six paires de discord calme sont vues aussi fréquemment que les conflits. Si nous comptons les combinaisons de conflits et de combinaisons, ces six paires seraient toutes enterrées sous le score de pas de relation de {scoreNeutral}, donc elles sont placées séparément."
          },
          {
            "p": "Si les conflits sont des paires qui se heurtent directement et sont affichées de manière proéminente, le discord calme est subtilement désaligné. Par conséquent, il est placé à un score de {scoreWonjin}, qui est supérieur aux conflits ({scoreChung}) mais définitivement inférieur à pas de relation ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Des Scores Sont Également Attribués aux Conflits",
        "blocks": [
          {
            "p": "Le score de conflit le plus bas est {scoreChung}. Il est intentionnel de ne pas donner une valeur proche de 0. Dans la tradition 명리 (myeongri), un conflit n'est pas une 'fin' mais une 'collision', et donner un score proche du bas signifierait que le service fait une déclaration définitive sur la relation."
          },
          {
            "p": "Avec un minimum de {scoreChung} et un maximum de {scoreSamhap}, la différence est clairement visible mais pas définitive."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Signe du Zodiaque",
    "title": "Où se trouve le Signe du Zodiaque dans le Saju ?",
    "summary": "Le signe du zodiaque est la branche terrestre de l'année de votre naissance. Cela explique pourquoi il est tiré de l'année saju plutôt que de l'année calendaire, et pourquoi ceux nés début janvier ou février ont le signe du zodiaque de l'année précédente.",
    "backLabel": "Base de Calcul",
    "sections": [
      {
        "title": "Le signe du zodiaque est la branche terrestre de l'année de votre naissance.",
        "blocks": [
          {
            "p": "Le saju se compose de quatre piliers : année, mois, jour et heure, chaque pilier ayant une tige céleste et une branche terrestre. Parmi eux, la **branche terrestre de l'année**, ou 연지 (branche de l'année), est l'animal que nous appelons le signe du zodiaque."
          },
          {
            "table": {
              "caption": "Les Douze Branches Terrestres et Signe du Zodiaque",
              "head": [
                "Branche Terrestre",
                "Signe du Zodiaque"
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
                  "Dragon"
                ],
                [
                  "巳",
                  "Serpent"
                ],
                [
                  "午",
                  "Cheval"
                ],
                [
                  "未",
                  "Chèvre"
                ],
                [
                  "申",
                  "Singe"
                ],
                [
                  "酉",
                  "Coq"
                ],
                [
                  "戌",
                  "Chien"
                ],
                [
                  "亥",
                  "Cochon"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Nous utilisons l'année saju, pas l'année calendaire.",
        "blocks": [
          {
            "p": "Le point auquel le signe du zodiaque change n'est ni le 1er janvier du calendrier solaire ni le Nouvel An lunaire. La norme pour changer l'année dans le saju est **Ipchun**. Par conséquent, ceux nés début janvier ou février peuvent avoir un signe du zodiaque différent de celui indiqué par le calendrier."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La raison pour laquelle nous ne demandons pas directement le signe du zodiaque.",
        "blocks": [
          {
            "p": "C'est pourquoi nous ne demandons que la date de naissance sans sélectionner le signe du zodiaque sur l'écran d'entrée. Lorsque le moteur saju calcule l'année, il s'aligne automatiquement avec la limite d'Ipchun. Si sélectionné directement, quelqu'un né début février choisirait un signe du zodiaque qui ne correspond pas à son signe réel."
          }
        ]
      },
      {
        "title": "Le signe du zodiaque est un caractère dans le saju.",
        "blocks": [
          {
            "p": "Parmi les huit caractères, celui correspondant au signe du zodiaque est **une 연지 (branche de l'année)**. Les sept autres caractères — en particulier la tige du jour qui fait référence à soi-même — n'ont aucune relation avec le signe du zodiaque."
          },
          {
            "p": "Les personnes nées la même année partagent toutes le même signe du zodiaque. Par conséquent, ce qui peut être connu à partir du signe du zodiaque est seulement autant que l'un des huit caractères. C'est la raison pour laquelle ce service ne **traite pas le signe du zodiaque séparément ou de manière significative** — la 연지 (branche de l'année) est calculée pour la force et le jugement de l'일진 (fortune quotidienne) tout comme n'importe quelle autre branche terrestre."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pourtant, la raison pour laquelle nous montrons le signe du zodiaque.",
        "blocks": [
          {
            "p": "C'est la seule position où la signification est comprise même si vous ne connaissez pas la terminologie de 명리 (myeongri). Si le signe du zodiaque est noté aux côtés de la 연지 (branche de l'année) sur l'écran du tableau original, cela devient un indice pour lire les sept autres caractères."
          }
        ]
      },
      {
        "title": "La branche de l'année reste la même même si vous ne connaissez pas l'heure de naissance.",
        "blocks": [
          {
            "p": "Si vous n'entrez pas l'heure, le pilier horaire est omis et la force des 오행 (cinq éléments) change. Cependant, la **branche de l'année reste la même** — elle est déterminée uniquement par l'année de votre naissance."
          },
          {
            "p": "Par conséquent, l'histoire dérivée de la branche de l'année ne change pas même pour ceux qui ne connaissent pas l'heure. Inversement, cela signifie que ce qui peut être dit uniquement sur la base du signe du zodiaque est limité, que l'heure soit incluse ou non."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Temps",
    "title": "Nous convertissons l'heure de naissance en temps solaire vrai.",
    "summary": "L'heure standard et la position réelle du soleil diffèrent. Cela explique pourquoi l'heure doit être ajustée en fonction de la longitude du lieu de naissance pour garantir que le pilier horaire est correct.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "L'heure sur l'horloge et l'heure solaire sont différentes",
        "blocks": [
          {
            "p": "Le pilier horaire (時柱) du saju est déterminé par la position du soleil. Cependant, l'horloge que nous voyons utilise un temps standard unique pour tout le pays, ce qui désajuste la position réelle du soleil."
          },
          {
            "p": "Le temps standard de la Corée est basé sur la longitude 135° est. La longitude de Séoul est d'environ 127°, donc elle est approximativement à 8° à l'ouest, ce qui fait que le soleil atteint son zénith plus tard — quand il est midi sur l'horloge, le soleil à Séoul est encore avant son zénith. Cette différence est d'environ **32 minutes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutes changent le pilier horaire d'un cran",
        "blocks": [
          {
            "p": "Le temps dans le saju est divisé en unités de deux heures. Ceux qui sont nés près de la frontière auront leur pilier horaire complètement changé par une différence de 32 minutes — des ajustements sont nécessaires précisément à cause de ceux qui se trouvent juste sur cette frontière."
          }
        ]
      },
      {
        "title": "La raison de demander où vous êtes né",
        "blocks": [
          {
            "p": "Si la longitude est différente, le montant de l'ajustement variera également. Si vous appliquez l'ajustement basé sur Séoul à quelqu'un né à l'étranger, le pilier horaire sera considérablement désaligné. Par conséquent, l'écran d'entrée vous demande de sélectionner votre lieu de naissance, et les calculs sont effectués en fonction de la longitude et du temps standard de cette ville. Actuellement, il y a {cityCount} lieux dans la liste."
          },
          {
            "p": "Même au sein du même pays, des lieux avec des longitudes très différentes (comme les États-Unis, la Russie, l'Indonésie, etc.) ont été divisés en villes. **15° de longitude équivaut à un pilier horaire**."
          },
          {
            "p": "Si vous ne sélectionnez pas, les calculs seront effectués en fonction de Séoul. La plupart des naissances sont domestiques, donc cela est moins sujet à erreur, mais si vous êtes né à l'étranger, veuillez vous assurer de sélectionner."
          }
        ]
      },
      {
        "title": "Le temps standard a changé plusieurs fois dans le passé",
        "blocks": [
          {
            "p": "Il y a une raison pour laquelle l'ajustement ne peut pas être calculé simplement comme \"différence de longitude ÷ 15° × 60 minutes.\" Le temps standard lui-même a varié au cours des différentes époques."
          },
          {
            "table": {
              "caption": "Changements dans le temps standard de la Corée — ceux nés durant cette période seront désalignés avec des calculs simples",
              "head": [
                "Période",
                "Qu'est-ce qui était différent ?"
              ],
              "rows": [
                [
                  "Avant 1912",
                  "Il n'y avait pas de temps standard (temps moyen local)"
                ],
                [
                  "1954 – 1961",
                  "Le temps standard était UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "L'heure d'été a été mise en œuvre"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link ne fixe pas le méridien standard comme une valeur constante, mais calcule le temps standard réel utilisé à ce moment en fonction des informations de **zone horaire IANA** du lieu de naissance. L'heure d'été et les temps standards passés sont automatiquement reflétés."
          }
        ]
      },
      {
        "title": "Naissance juste après minuit prend également en compte la date",
        "blocks": [
          {
            "p": "Puisque l'ajustement est de -32 minutes, ceux nés entre 00:00 et 00:32 sur l'horloge seront à **23 heures la veille** en temps solaire réel. Si seule l'heure est ajustée en arrière et que la date reste la même, cela écrira le pilier du jour (日柱) comme \"23 heures la veille.\""
          },
          {
            "p": "Saju-Link ajustera également la date dans ce cas. Le caractère au-dessus du pilier du jour fait référence au tige du jour (日干), qui indique moi-même, donc si cela est désaligné, presque tous les éléments de l'interprétation seront désalignés."
          }
        ]
      },
      {
        "title": "Vous n'avez pas besoin de connaître l'heure",
        "blocks": [
          {
            "p": "L'heure de naissance est optionnelle. Si vous ne la connaissez pas, les calculs seront effectués sans le pilier horaire, et ce fait sera affiché sur l'écran des résultats. Puisque cela signifie que deux des huit caractères sont manquants, cela affectera l'évaluation de la force et de la faiblesse des cinq éléments, donc si vous le savez, il est plus précis de l'inclure."
          },
          {
            "p": "Le branchement de l'année (띠) est toujours le même, peu importe l'heure — [car nous ne regardons que le branchement de l'année](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informations personnelles",
    "title": "Une méthode qui ne stocke pas les informations saisies",
    "summary": "Il clarifie ce que cela signifie techniquement que la date de naissance n'est enregistrée nulle part et ce qui est contenu dans le lien des résultats.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Il n'y a pas d'inscription de membre",
        "blocks": [
          {
            "p": "Saju-Link ne crée pas de comptes. Il ne collecte pas de noms, d'emails ou de numéros de téléphone. Les seules informations collectées sont la date de naissance et (optionnellement) l'heure de naissance, le lieu de naissance et le sexe, et ces informations ne restent pas après que le calcul est terminé."
          },
          {
            "p": "Il y a un champ pour entrer un titre à afficher sur l'écran des résultats, mais cela est **uniquement à des fins d'affichage** et n'est pas utilisé dans les calculs. Vous n'avez pas besoin d'entrer votre vrai nom."
          }
        ]
      },
      {
        "title": "Que contient le lien des résultats ?",
        "blocks": [
          {
            "p": "Une fois le calcul terminé, l'adresse ressemble à ceci."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ce qui suit **#** est les valeurs d'entrée. Cette partie est appelée le **fragment**, qui est une section que **le navigateur n'envoie pas au serveur**. C'est un comportement web standard et non une règle que nous avons créée — il a été à l'origine conçu pour indiquer une position dans un document, donc le serveur n'a pas besoin de le voir."
          },
          {
            "p": "En d'autres termes, lorsque vous ouvrez le lien des résultats, le navigateur lit cette valeur pour demander le calcul, et notre serveur reçoit les valeurs à utiliser pour le calcul, renvoie la réponse, puis l'oublie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Veuillez faire attention lorsque vous envoyez le lien à d'autres",
        "blocks": [
          {
            "p": "Le fait qu'il ne soit pas stocké sur le serveur ne signifie pas que le lien est sûr. Le lien des résultats contient les dates de naissance de deux individus, donc la personne qui reçoit ce lien peut voir le même résultat."
          }
        ]
      },
      {
        "title": "Pourquoi le calcul est-il effectué sur le serveur mais pas stocké ?",
        "blocks": [
          {
            "p": "Le calcul lui-même est effectué sur le serveur. Le tableau de l'almanach lunaire-solaire est nécessaire pour générer le saju, et ce tableau est trop volumineux pour être envoyé au navigateur. Cependant, **après traitement de la demande, nous n'utilisons pas cette valeur nulle part.** Il n'y a pas de code pour l'insérer dans une base de données."
          },
          {
            "p": "Les enregistrements minimums nécessaires pour le fonctionnement sont conservés — un compteur pour empêcher la même personne d'envoyer trop de demandes en peu de temps. Cela n'inclut pas la date de naissance, et l'IP d'accès n'est pas conservée. Une seule valeur hachée avec la date est comptée, et cette valeur change lorsque le jour change."
          }
        ]
      },
      {
        "title": "Choses qui ne peuvent pas être faites parce que les informations ne sont pas stockées",
        "blocks": [
          {
            "p": "Pour être honnête, il y a des choses qui ont été abandonnées parce que nous ne stockons pas d'informations."
          },
          {
            "ul": [
              "**Vous ne pouvez pas récupérer les résultats passés.** Vous devez avoir le lien pour les revoir.",
              "**Les mêmes valeurs seront recalculées.** Il n'y a pas de cache. Cependant, puisque toutes les règles sont déterministes, [la même entrée donnera toujours la même valeur](/guide/natal-chart).",
              "**Actualiser ramènera la porte de publicité.** Cela est dû au fait qu'il n'y a pas d'endroit pour laisser un historique de visualisation."
            ]
          }
        ]
      },
      {
        "title": "Si vous effectuez un achat",
        "blocks": [
          {
            "p": "Lorsque vous achetez un rapport, un enregistrement de transaction sera conservé. Le paiement est soumis à des périodes de conservation légales, et sans historique de commande, les remboursements ne peuvent pas être traités. Cependant, à ce moment, **la date de naissance utilisée pour le calcul du saju ne sera pas attachée à la commande** — elle sera demandée à nouveau lors de la création du PDF après la confirmation du paiement."
          },
          {
            "p": "Pour plus de détails, veuillez consulter notre [Politique de Confidentialité](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produits payants",
    "title": "Ce qui est inclus dans le rapport payant",
    "summary": "Il clarifie ce qui a été ajouté au PDF tout en gardant l'écran inchangé. Les valeurs et contenus sont récupérés des paramètres réels du produit.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "L'écran est resté inchangé, ajouté uniquement au PDF",
        "blocks": [
          {
            "p": "Le calcul du saju et la demande de résultats sont **gratuits**. Vous pouvez voir tout sur l'écran, y compris le tableau original, les cinq éléments, la chance d'aujourd'hui, et leur base, car rien n'a été omis lors de la création du rapport payant."
          },
          {
            "p": "Le rôle du rapport est de **ajouter des couches non présentes sur l'écran**. Ces couches ne sont pas fabriquées ; ce sont des valeurs qui ont déjà été calculées lors du processus de notation mais qui n'ont pas été utilisées à l'écran."
          }
        ]
      },
      {
        "title": "PDF du rapport de saju à vie et de la chance de cette année — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Paiement national {priceDomestic} (TVA incluse), paiement international {priceGlobal}. Il se compose de {pageCount} pages A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "La table des matières est lue directement à partir de la description du produit. **Le nombre de pages est le même que celui du document réel** — il n'est pas gonflé car c'est la valeur indiquée dans l'avis d'information sur le produit."
          }
        ]
      },
      {
        "title": "Ce qui n'est pas à l'écran",
        "blocks": [
          {
            "p": "L'écran gratuit montre le tableau original, les cinq éléments, et la chance d'aujourd'hui. Il y a trois valeurs qui ont été produites lors du processus de calcul mais qui ne sont pas affichées à l'écran, et ce sont les portions du rapport payant."
          },
          {
            "ul": [
              "**Ratio de commodité du jour tige** — Il montre numériquement où le jugement d'un maître de jour fort ou faible a été fait. Le nom du jugement seul n'indique pas s'il était à la limite ou ample.",
              "**Wang Sang Hyu Su Sa** — Dans quelle mesure le mois de naissance a poussé chaque énergie. Si la barre de puissance indique 'combien il y a', ce tableau indique 'est-ce en saison'.",
              "**Détails de correction du vrai temps solaire** — Le concept est dans le document d'orientation, mais **'combien de minutes ont été décalées dans votre cas'** est une valeur différente pour chaque personne, donc elle est incluse uniquement dans le rapport."
            ]
          }
        ]
      },
      {
        "title": "Ce que vous devez savoir avant d'acheter",
        "blocks": [
          {
            "p": "**Le serveur ne stocke pas de fichiers.** Une fois le paiement approuvé, le document est créé et envoyé immédiatement, ne laissant rien sur le serveur. Le principe de ce service de ne pas sauvegarder les valeurs d'entrée est respecté même dans le flux payant."
          },
          {
            "p": "Par conséquent, **veuillez sauvegarder le fichier immédiatement après le paiement.** Vous pouvez le recevoir jusqu'à cinq fois avec la même commande, mais si vous quittez l'écran de résultat et que les valeurs d'entrée disparaissent, il ne peut pas être recréé."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les rapports sont aussi des matériaux de référence",
        "blocks": [
          {
            "p": "Ce n'est pas parce que le nombre de pages a augmenté que les conclusions sont plus certaines. Ce que le rapport ajoute est **la base du même calcul**, pas une affirmation plus forte. Le destin est un domaine où les conclusions peuvent varier selon le praticien, et ce service ne calcule que ce qui peut être traduit en règles."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avis",
    "title": "Annonces",
    "summary": "C'est un endroit pour informer des changements qui peuvent affecter l'utilisation.",
    "backLabel": "Retour au début",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Demandes",
    "summary": "C'est le canal pour les demandes concernant l'utilisation, les remboursements, les demandes d'informations personnelles et les rapports d'erreurs, ainsi que les informations commerciales.",
    "backLabel": "Retour au début",
    "sections": [
      {
        "title": "Contact par email",
        "blocks": [
          {
            "p": "Veuillez envoyer vos demandes à **{email}**. Nous répondrons dans les 2 jours ouvrables. Pour les demandes de paiement et de remboursement, veuillez inclure **le numéro de commande ou l'email utilisé pour le paiement** pour une confirmation plus rapide."
          },
          {
            "p": "Les demandes par téléphone sont reçues au {customerCenter}."
          }
        ]
      },
      {
        "title": "Ce qui peut être envoyé à ce canal",
        "blocks": [
          {
            "ul": [
              "**Paiement et remboursement** — Si le document n'a pas été créé ou si le montant du paiement diffère de la commande, un remboursement complet sera fourni. Les conditions sont dans la [Politique de Remboursement](/refund-policy).",
              "**Informations personnelles** — Nous acceptons les demandes de consultation, de correction et de suppression. La politique de traitement est dans la [Politique de Confidentialité](/privacy).",
              "**Rapport d'erreur de calcul** — Si le tableau original de saju ou les scores semblent étranges, veuillez nous le faire savoir. Si vous incluez quand vous avez saisi la date et l'heure de naissance, nous pouvons recalculer avec les mêmes valeurs."
            ]
          }
        ]
      },
      {
        "title": "Informations commerciales",
        "blocks": [
          {
            "ul": [
              "**Nom de l'entreprise** — {companyName}",
              "**Représentant** — {representative}",
              "**Numéro d'enregistrement de l'entreprise** — {businessNumber}",
              "**Numéro d'enregistrement de commerce par correspondance** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Centre client** — {customerCenter}",
              "**Email** — {email}",
              "**Responsable de la protection des informations personnelles** — {privacyOfficer}",
              "**Fournisseur d'hébergement** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il n'est pas nécessaire d'inclure votre date et heure de naissance dans l'email de demande. Nous ne sauvegardons pas les entrées, donc nous ne pouvons pas les récupérer plus tard, et ce qui nécessite confirmation est suffisant avec le numéro de commande. Veuillez l'inclure uniquement lorsque les valeurs sont absolument nécessaires, comme dans un rapport d'erreur de calcul."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FR_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Rapport",
    "engine": "Critères de calcul",
    "support": "Demande"
  },
  "intro": "Les changements qui affectent les conditions d'utilisation, tels que les prix et les termes, seront publiés ici avant leur mise en œuvre. Il y a de nombreuses améliorations internes, comme l'accélération de l'écran — seules les informations nécessaires seront notées ici.",
  "empty": {
    "title": "Aucun avis n'a été publié.",
    "body": "S'il y a des changements à vous informer, ils seront publiés ici."
  },
  "effective": "En vigueur à partir du {date}",
  "pager": {
    "label": "Page des avis",
    "newer": "← Dernier",
    "older": "Avis précédents →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "La fenêtre de demande et la page d'introduction du service ont été ouvertes.",
      "body": [
        "Nous avons rassemblé une fenêtre unique pour les demandes, les remboursements, les demandes d'informations personnelles et le signalement d'erreurs de calcul. Vous pouvez la consulter en bas de l'écran sous 'Demander'.",
        "Lorsque vous nous informez d'une erreur de calcul apparente, veuillez inclure la date et l'heure de naissance que vous avez saisies. Nous ne sauvegardons pas l'entrée, donc sans cette valeur, nous ne pouvons pas recalculer."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Dans les écrans en arabe et en khmer, le rapport sera généré en anglais.",
      "body": [
        "Si vous visualisez l'écran en arabe ou en khmer, le rapport PDF que vous achetez sera créé en anglais. Cela est dû au fait que l'outil n'a pas encore pu formater ces deux scripts en paragraphes.",
        "Vous pouvez toujours voir l'écran tel qu'il est, et le nom écrit dans le rapport sera exactement comme vous l'avez saisi.",
        "Les mêmes informations sont également fournies à l'avance sur l'écran de paiement. Nous vous informerons ici lorsque l'outil prendra en charge ces scripts."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Les critères de calcul seront inclus avec les résultats.",
      "body": [
        "Sous l'écran des résultats et le rapport, les critères de calcul (par exemple, sajulink-natal-v1) sont indiqués. Si l'entrée est la même, la même valeur sortira toujours sous les mêmes critères.",
        "Si les règles d'interprétation 명리 (myeongri) changent et que les scores peuvent différer, nous publierons d'abord ce fait et la date d'entrée en vigueur ici. Cela est dû au fait que les chiffres dans les liens de résultats que vous avez reçus précédemment peuvent changer.",
        "Les critères actuels sont v10, et le paiement est toujours en préparation."
      ]
    }
  }
} satisfies NoticeCopy;
