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
            "p": "Saju-Link établit le **tableau de saju (quatre piliers) basé sur votre date et heure de naissance et montre ce que signifient les huit caractères**. Il lit la force des cinq éléments et la force du pilier du jour, et examine également la fortune d'aujourd'hui en fonction du tige du jour."
          },
          {
            "p": "Ce que vous voyez à l'écran est **gratuit et ne nécessite pas d'adhésion.** Le produit payant est un document PDF contenant des valeurs non affichées à l'écran — la base pour distinguer entre un pilier du jour fort et un pilier du jour faible, Wang Sang Hyu Su Sa, et les détails de correction pour le vrai temps solaire."
          }
        ]
      },
      {
        "title": "Que calculons-nous ?",
        "blocks": [
          {
            "p": "Le saju est établi en utilisant le **manseyeok (almanach lunisolaire coréen)**. L'heure de naissance est corrigée au **vrai temps solaire** du lieu de naissance — car la position réelle du soleil varie selon la région même si l'horloge indique la même heure."
          },
          {
            "p": "Les scores sont donnés uniquement selon des règles établies. Les concepts de l'étude traditionnelle myeongri (étude du destin coréen) tels que les Dix Dieux, les relations entre les branches terrestres et l'équilibre des éléments sont traduits en règles de calcul, et **la même entrée produira toujours la même valeur**. Lorsque les règles sont modifiées, des tests de régression sont effectués pour garantir que les résultats précédents restent inchangés."
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
              "**Nous ne fournissons pas de divination.** Nous n'écrivons pas que vous devriez rencontrer ou éviter quelqu'un. Ceci est un matériel de référence résumant les perspectives de la myeongri traditionnelle.",
              "**Nous ne sauvegardons pas les entrées.** La date et l'heure de naissance ne sont utilisées qu'au moment du calcul et ne sont pas conservées sur le serveur. Le lien du résultat est également stocké dans un emplacement que le navigateur n'envoie pas au serveur.",
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
    "summary": "Nous divulguons toutes les règles utilisées par Saju-Link. Vous pouvez vérifier d'où proviennent les chiffres affichés à l'écran, y compris les ajustements pour la fortune d'aujourd'hui, les scores du tableau des relations entre les branches terrestres, et les valeurs limites qui distinguent entre un pilier du jour fort et un pilier du jour faible.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Les valeurs écrites ici sont toutes **lues directement à partir du code de calcul**. Comme elles ne sont pas transcrites manuellement dans le texte, si les règles changent, les chiffres de ce document changeront également en conséquence."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Base du service",
    "title": "carte natale — D'où viennent les huit caractères ?",
    "summary": "Il explique comment l'année, le mois, le jour et l'heure de naissance deviennent les quatre piliers et huit caractères, et identifie quel caractère vous désigne. Il discute également de la raison pour laquelle cela peut être vu même sans connaître l'heure exacte de naissance.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Quatre Piliers, Huit Caractères",
        "blocks": [
          {
            "p": "Saju (四柱) signifie littéralement **quatre piliers**. Chacun de l'année, du mois, du jour et de l'heure de naissance est établi comme un pilier, et deux caractères sont écrits pour chaque pilier. Ainsi, il y a un total de huit caractères, qui est appelé **la carte natale**."
          },
          {
            "table": {
              "head": [
                "Pilier",
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
              "day": "Pilier du Jour",
              "dayNote": "Soi · Palais du Conjoint",
              "hour": "Pilier de l'Heure",
              "hourNote": "Années Futures · Utilisation",
              "stem": "Tige Céleste",
              "stemNote": "Tige du Jour = Soi",
              "branch": "Branche Terrestre",
              "branchNote": "Branche du Jour = Palais du Conjoint"
            }
          },
          {
            "p": "Ce que ce service montre provient principalement de ce caractère — l'interprétation des tendances, la force des cinq éléments, l'énergie actuellement nécessaire et la fortune d'aujourd'hui sont toutes mesurées en fonction de la Tige du Jour. Les sept caractères restants indiquent 'dans quel environnement la Tige du Jour est placée'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pourquoi le Jour de Naissance ?",
        "blocks": [
          {
            "p": "La Tige de l'Année est la même pour tous ceux nés cette année-là, et la Tige du Mois est la même pour tous ceux nés ce mois-là. La Tige du Jour change lorsque le jour change, et la divination traditionnelle considère cette position comme le Soi depuis la Dynastie Song. Si la Tige de l'Heure est incluse, elle différencie même parmi ceux nés le même jour."
          }
        ]
      },
      {
        "title": "Divisé par les Termes Solaires, Pas par l'Année Calendrier",
        "blocks": [
          {
            "p": "Une année de saju ne change pas le 1er janvier mais plutôt à **Ipchun (vers le 4 février)**. Le mois se divise également en fonction des termes solaires."
          },
          {
            "p": "Ainsi, ceux nés en **janvier et début février reçoivent la Tige de l'Année de l'année précédente**. C'est ici que se situe le malentendu commun concernant les signes du zodiaque. Il en va de même si vous saisissez une date de naissance lunaire — elle est convertie en solaire puis divisée par les termes solaires."
          }
        ]
      },
      {
        "title": "Vous Pouvez le Lire Même Sans Connaître l'Heure de Naissance",
        "blocks": [
          {
            "p": "Si vous ne saisissez pas l'heure, la lecture sera basée sur les trois piliers et six caractères, excluant le Pilier de l'Heure. Nous ne devinons pas les valeurs manquantes — attribuer arbitrairement un Pilier de l'Heure peut perturber la force des cinq éléments, conduisant à des conclusions incorrectes au lieu de potentiellement précises."
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
            "p": "La méthode de comptage des huit caractères comme cinq éléments pour évaluer la force se poursuit dans [Force des Cinq Éléments et Pilier du Jour Fort/Faible](/guide/five-elements), tandis que la méthode de lecture des caractères restants en fonction de la Tige du Jour se poursuit dans [Dix Dieux](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Cinq Éléments",
    "title": "Force des Cinq Éléments et Pilier du Jour Fort/Faible",
    "summary": "Nous comptons les huit caractères comme cinq éléments pour voir quelle énergie est forte et laquelle est faible. Nous divulguons les valeurs seuils (45%·35%) qui déterminent la force de la Tige du Jour.",
    "backLabel": "Base de Calcul",
    "sections": [
      {
        "title": "Comptage des Huit Caractères comme Cinq Énergies",
        "blocks": [
          {
            "p": "Les dix Tiges Célestes et douze Branches Terrestres appartiennent chacune à l'un des **Cinq Éléments (五行)** — Bois (木), Feu (火), Terre (土), Métal (金), Eau (水). En comptant les caractères dans le graphique natal selon leurs éléments respectifs, nous pouvons déterminer quelle énergie est forte et laquelle est faible."
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
            "p": "Les énergies alignées avec la Tige du Jour sont **Ressource et Compagnon** — les énergies qui me donnent naissance et celles qui me ressemblent. Puisqu'il y en a deux sur cinq, s'il n'y a pas de biais, cela sera autour de {evenAllyRatio}. Nous considérons la zone autour de ce chiffre comme équilibrée, et lisons au-dessus et en dessous comme fort ou faible."
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
                  "Pilier du Jour Fort (身强)",
                  "Les énergies soutenant la Tige du Jour sont abondantes."
                ],
                [
                  "{weakThreshold} ou plus et moins de {strongThreshold}",
                  "Équilibré (中和)",
                  "Il est difficile de conclure dans un sens ou dans l'autre."
                ],
                [
                  "Moins de {weakThreshold}",
                  "Pilier du Jour Faible (身弱)",
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
            "p": "Déterminer cette 'énergie nécessaire' est l'élément d'équilibre, et cela continue dans [Élément d'Équilibre](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Comment les huit caractères sont établis est dans [graphique natal](/guide/natal-chart). Comment le Pilier du Jour d'aujourd'hui interagit avec cette force est couvert dans [la fortune d'aujourd'hui](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Élément d'Équilibre",
    "title": "Élément d'Équilibre — L'Énergie Nécessaire Maintenant",
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
            "p": "Un saju qui est uniformément réparti n'est pas toujours confortable, ni un saju qui est déséquilibré toujours difficile. La direction du déséquilibre et s'il y a un élément pour l'atténuer est le carrefour."
          }
        ]
      },
      {
        "title": "Élément d'équilibre — Réduire si excessif, ajouter si manquant",
        "blocks": [
          {
            "p": "L'élément d'équilibre (用神) est **l'énergie actuellement nécessaire à cette personne**. Il existe plusieurs méthodes pour le déterminer (suppress-and-support, équilibre saisonnier, affliction, médiation), et celle qui peut être exprimée sous forme de règles — et qui est la plus largement utilisée — est **suppress-and-support (抑扶)**. Si le pilier du jour est fort, on pense qu'une énergie à réduire est nécessaire ; si elle est faible, une énergie à ajouter est requise."
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
                  "Pilier du jour fort (身强)",
                  "Énergie à drainer — Sortie, Richesse et Fonction",
                  "Trois"
                ],
                [
                  "Pilier du jour faible (身弱)",
                  "Énergie à ajouter — Ressource, Compagnon",
                  "Deux"
                ],
                [
                  "Équilibré (中和)",
                  "Ne peut pas être décidé par suppress-and-support, donc les énergies les plus faibles",
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
            "p": "Le côté du pilier du jour est **Ressource et Compagnon** — l'énergie qui me donne naissance et l'énergie qui est comme moi. Puisque deux sur cinq sont impliqués, l'équilibre complet sera {evenAllyRatio}. La largeur est fixée au-dessus et en dessous de ce {evenAllyRatio}."
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
                  "Pilier du jour fort"
                ],
                [
                  "{weakThreshold} ou plus et moins de {strongThreshold}",
                  "Équilibré"
                ],
                [
                  "Moins de {weakThreshold}",
                  "Pilier du jour faible"
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
            "p": "Équilibré signifie que suppress-and-support ne peut pas le décider. À ce moment-là, les deux énergies les plus faibles sont simplement considérées comme nécessaires. Dans l'écran de résultats, cela est noté comme 'position actuellement faible' plutôt qu'une déclaration définitive."
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
        "title": "Où utiliser l'élément d'équilibre",
        "blocks": [
          {
            "p": "L'élément d'équilibre déterminé est utilisé à deux endroits. L'un est l'écran de résultats **'énergie actuellement nécessaire'**, et l'autre est [la fortune d'aujourd'hui](/guide/today-fortune) — si l'énergie d'aujourd'hui correspond à l'élément d'équilibre, c'est l'élément qui fait le plus bouger le score ce jour-là."
          }
        ]
      },
      {
        "title": "C'est un jugement simple",
        "blocks": [
          {
            "p": "L'analyse réelle du destin prend en compte la formation et les conditions saisonnières (la chaleur et l'humidité de la saison) pour déterminer l'élément d'équilibre, et les conclusions peuvent varier selon la méthode. Saju-Link utilise uniquement **la réduction qui peut être mesurée par des valeurs de force**. Cela est dû au principe d'utiliser uniquement ce qui peut être converti en règles, donc la même entrée donnera toujours la même réponse."
          },
          {
            "p": "Au lieu de cela, l'écran de résultats présente également le pilier du jour fort et faible avec l'énergie actuellement nécessaire comme **matériel de lecture**. Cela vise à éviter de cacher la base du score."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Tiges célestes",
    "title": "Bois Yang (甲) — Bois, Yang",
    "summary": "L'élément et la polarité de la tige céleste 甲, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Bois Yang (甲) est la première des dix tiges célestes",
        "blocks": [
          {
            "p": "甲 est la première des dix tiges célestes. Son élément est le Bois et sa polarité est Yang. Saju-Link appelle « Bois Yang (甲) » une personne dont la tige du jour est 甲."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 甲 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 甲 lit l'autre tige, et lorsque l'autre tige lit 甲, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Bois Yang (甲) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Compagnon (比肩)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Rival (劫財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Expression (食神)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Perturbateur (傷官)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Aubaine (偏財)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Richesse stable (正財)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Défi (偏官)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Autorité (正官)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Bienveillance (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 甲 comme tige du jour, la Richesse stable est 己 et l'Autorité est 辛. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 甲",
        "blocks": [
          {
            "p": "C'est là que 甲 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 甲."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 甲",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
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
                  "Lapin",
                  "résiduelle (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Cochon",
                  "intermédiaire (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Tiges célestes",
    "title": "Bois Yin (乙) — Bois, Yin",
    "summary": "L'élément et la polarité de la tige céleste 乙, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Bois Yin (乙) est la deuxième des dix tiges célestes",
        "blocks": [
          {
            "p": "乙 est la deuxième des dix tiges célestes. Son élément est le Bois et sa polarité est Yin. Saju-Link appelle « Bois Yin (乙) » une personne dont la tige du jour est 乙."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 乙 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 乙 lit l'autre tige, et lorsque l'autre tige lit 乙, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Bois Yin (乙) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Rival (劫財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Compagnon (比肩)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Expression (食神)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Richesse stable (正財)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Aubaine (偏財)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Autorité (正官)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Défi (偏官)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Bienveillance (正印)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 乙 comme tige du jour, la Richesse stable est 戊 et l'Autorité est 庚. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 乙",
        "blocks": [
          {
            "p": "C'est là que 乙 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 乙."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 乙",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "卯",
                  "Lapin",
                  "principale (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Dragon",
                  "résiduelle (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Mouton",
                  "intermédiaire (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Tiges célestes",
    "title": "Feu Yang (丙) — Feu, Yang",
    "summary": "L'élément et la polarité de la tige céleste 丙, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Feu Yang (丙) est la troisième des dix tiges célestes",
        "blocks": [
          {
            "p": "丙 est la troisième des dix tiges célestes. Son élément est le Feu et sa polarité est Yang. Saju-Link appelle « Feu Yang (丙) » une personne dont la tige du jour est 丙."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 丙 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 丙 lit l'autre tige, et lorsque l'autre tige lit 丙, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Feu Yang (丙) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Bienveillance (正印)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Compagnon (比肩)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Rival (劫財)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Expression (食神)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Perturbateur (傷官)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Aubaine (偏財)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Richesse stable (正財)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Défi (偏官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Autorité (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丙 comme tige du jour, la Richesse stable est 辛 et l'Autorité est 癸. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 丙",
        "blocks": [
          {
            "p": "C'est là que 丙 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 丙."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 丙",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "intermédiaire (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Serpent",
                  "principale (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Cheval",
                  "résiduelle (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Tiges célestes",
    "title": "Feu Yin (丁) — Feu, Yin",
    "summary": "L'élément et la polarité de la tige céleste 丁, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Feu Yin (丁) est la quatrième des dix tiges célestes",
        "blocks": [
          {
            "p": "丁 est la quatrième des dix tiges célestes. Son élément est le Feu et sa polarité est Yin. Saju-Link appelle « Feu Yin (丁) » une personne dont la tige du jour est 丁."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 丁 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 丁 lit l'autre tige, et lorsque l'autre tige lit 丁, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Feu Yin (丁) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Bienveillance (正印)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Rival (劫財)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Perturbateur (傷官)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Expression (食神)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Richesse stable (正財)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Aubaine (偏財)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Autorité (正官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丁 comme tige du jour, la Richesse stable est 庚 et l'Autorité est 壬. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 丁",
        "blocks": [
          {
            "p": "C'est là que 丁 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 丁."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 丁",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "午",
                  "Cheval",
                  "principale (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Mouton",
                  "résiduelle (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Chien",
                  "intermédiaire (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Tiges célestes",
    "title": "Terre Yang (戊) — Terre, Yang",
    "summary": "L'élément et la polarité de la tige céleste 戊, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Terre Yang (戊) est la cinquième des dix tiges célestes",
        "blocks": [
          {
            "p": "戊 est la cinquième des dix tiges célestes. Son élément est la Terre et sa polarité est Yang. Saju-Link appelle « Terre Yang (戊) » une personne dont la tige du jour est 戊."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 戊 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 戊 lit l'autre tige, et lorsque l'autre tige lit 戊, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Terre Yang (戊) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Défi (偏官)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Autorité (正官)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Bienveillance (正印)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Rival (劫財)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Expression (食神)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Perturbateur (傷官)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Aubaine (偏財)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Richesse stable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 戊 comme tige du jour, la Richesse stable est 癸 et l'Autorité est 乙. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 戊",
        "blocks": [
          {
            "p": "C'est là que 戊 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 戊."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 戊",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "résiduelle (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Dragon",
                  "principale (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Serpent",
                  "résiduelle (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Singe",
                  "résiduelle (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Chien",
                  "principale (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Cochon",
                  "résiduelle (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Tiges célestes",
    "title": "Terre Yin (己) — Terre, Yin",
    "summary": "L'élément et la polarité de la tige céleste 己, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Terre Yin (己) est la sixième des dix tiges célestes",
        "blocks": [
          {
            "p": "己 est la sixième des dix tiges célestes. Son élément est la Terre et sa polarité est Yin. Saju-Link appelle « Terre Yin (己) » une personne dont la tige du jour est 己."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 己 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 己 lit l'autre tige, et lorsque l'autre tige lit 己, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Terre Yin (己) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Autorité (正官)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Défi (偏官)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Bienveillance (正印)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Rival (劫財)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Compagnon (比肩)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Perturbateur (傷官)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Expression (食神)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Richesse stable (正財)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 己 comme tige du jour, la Richesse stable est 壬 et l'Autorité est 甲. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 己",
        "blocks": [
          {
            "p": "C'est là que 己 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 己."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 己",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "丑",
                  "Bœuf",
                  "principale (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Cheval",
                  "intermédiaire (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Mouton",
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
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Tiges célestes",
    "title": "Métal Yang (庚) — Métal, Yang",
    "summary": "L'élément et la polarité de la tige céleste 庚, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Métal Yang (庚) est la septième des dix tiges célestes",
        "blocks": [
          {
            "p": "庚 est la septième des dix tiges célestes. Son élément est le Métal et sa polarité est Yang. Saju-Link appelle « Métal Yang (庚) » une personne dont la tige du jour est 庚."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 庚 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 庚 lit l'autre tige, et lorsque l'autre tige lit 庚, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Métal Yang (庚) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Aubaine (偏財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Défi (偏官)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Autorité (正官)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Bienveillance (正印)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Compagnon (比肩)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Rival (劫財)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Expression (食神)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Perturbateur (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 庚 comme tige du jour, la Richesse stable est 乙 et l'Autorité est 丁. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 庚",
        "blocks": [
          {
            "p": "C'est là que 庚 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 庚."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 庚",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "巳",
                  "Serpent",
                  "intermédiaire (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Singe",
                  "principale (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Coq",
                  "résiduelle (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Tiges célestes",
    "title": "Métal Yin (辛) — Métal, Yin",
    "summary": "L'élément et la polarité de la tige céleste 辛, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Métal Yin (辛) est la huitième des dix tiges célestes",
        "blocks": [
          {
            "p": "辛 est la huitième des dix tiges célestes. Son élément est le Métal et sa polarité est Yin. Saju-Link appelle « Métal Yin (辛) » une personne dont la tige du jour est 辛."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 辛 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 辛 lit l'autre tige, et lorsque l'autre tige lit 辛, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Métal Yin (辛) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Richesse stable (正財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Aubaine (偏財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Autorité (正官)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Défi (偏官)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Bienveillance (正印)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Rival (劫財)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Compagnon (比肩)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Perturbateur (傷官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 辛 comme tige du jour, la Richesse stable est 甲 et l'Autorité est 丙. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 辛",
        "blocks": [
          {
            "p": "C'est là que 辛 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 辛."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 辛",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "丑",
                  "Bœuf",
                  "intermédiaire (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Coq",
                  "principale (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Chien",
                  "résiduelle (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Eau Yang (壬)](/guide/stem-im) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Tiges célestes",
    "title": "Eau Yang (壬) — Eau, Yang",
    "summary": "L'élément et la polarité de la tige céleste 壬, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Eau Yang (壬) est la neuvième des dix tiges célestes",
        "blocks": [
          {
            "p": "壬 est la neuvième des dix tiges célestes. Son élément est l'Eau et sa polarité est Yang. Saju-Link appelle « Eau Yang (壬) » une personne dont la tige du jour est 壬."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 壬 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 壬 lit l'autre tige, et lorsque l'autre tige lit 壬, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Eau Yang (壬) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Expression (食神)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Aubaine (偏財)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Richesse stable (正財)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Défi (偏官)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Autorité (正官)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Bienveillance (正印)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Compagnon (比肩)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 壬 comme tige du jour, la Richesse stable est 丁 et l'Autorité est 己. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 壬",
        "blocks": [
          {
            "p": "C'est là que 壬 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 壬."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 壬",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "子",
                  "Rat",
                  "résiduelle (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Singe",
                  "intermédiaire (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Cochon",
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
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Tiges célestes",
    "title": "Eau Yin (癸) — Eau, Yin",
    "summary": "L'élément et la polarité de la tige céleste 癸, la manière dont elle lit les neuf autres tiges (les Dix Dieux) et les branches terrestres qui la contiennent — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Eau Yin (癸) est la dixième des dix tiges célestes",
        "blocks": [
          {
            "p": "癸 est la dixième des dix tiges célestes. Son élément est l'Eau et sa polarité est Yin. Saju-Link appelle « Eau Yin (癸) » une personne dont la tige du jour est 癸."
          },
          {
            "p": "La ligne que l'écran de résultats affiche pour cette tige du jour est : « La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots. » Cette ligne n'a rien à voir avec le tableau ni avec les scores ci-dessous."
          }
        ]
      },
      {
        "title": "Comment elle lit les autres tiges (les Dix Dieux)",
        "blocks": [
          {
            "p": "Avec 癸 comme tige du jour, chacune des dix tiges se lit comme suit. La lecture est orientée : voici comment 癸 lit l'autre tige, et lorsque l'autre tige lit 癸, un nom différent peut en résulter."
          },
          {
            "table": {
              "caption": "Les Dix Dieux avec Eau Yin (癸) comme tige du jour",
              "head": [
                "Autre tige",
                "Élément et polarité",
                "Nom des Dix Dieux"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "Perturbateur (傷官)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "Expression (食神)"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "Aubaine (偏財)"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "Autorité (正官)"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "Défi (偏官)"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "Bienveillance (正印)"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "Rival (劫財)"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les tiges lues comme position du conjoint",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 癸 comme tige du jour, la Richesse stable est 丙 et l'Autorité est 戊. Si vous n'indiquez pas votre sexe, cette position n'est pas lue."
          }
        ]
      },
      {
        "title": "Les branches qui contiennent 癸",
        "blocks": [
          {
            "p": "C'est là que 癸 se trouve caché à l'intérieur des branches terrestres (les tiges cachées). La part est la proportion des trente jours de cette branche que prend 癸."
          },
          {
            "table": {
              "caption": "Les branches qui contiennent 癸",
              "head": [
                "Branche",
                "Animal",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "子",
                  "Rat",
                  "principale (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Bœuf",
                  "résiduelle (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Dragon",
                  "intermédiaire (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule tige ne détermine pas une personne. Un saju se lit à partir des relations entre ses huit caractères.",
              "Les Dix Dieux sont un jugement porté à partir de la tige du jour. Les deux mêmes caractères reçoivent un nom différent selon celui qui est la tige du jour."
            ]
          },
          {
            "p": "Les Dix Dieux complets figurent dans [le guide des Dix Dieux](/guide/ten-gods), et la force des éléments ainsi que le signe du mois dans [le guide des cinq éléments](/guide/five-elements). Autres tiges : [Bois Yang (甲)](/guide/stem-gap) · [Bois Yin (乙)](/guide/stem-eul) · [Feu Yang (丙)](/guide/stem-byeong) · [Feu Yin (丁)](/guide/stem-jeong) · [Terre Yang (戊)](/guide/stem-mu) · [Terre Yin (己)](/guide/stem-gi) · [Métal Yang (庚)](/guide/stem-gyeong) · [Métal Yin (辛)](/guide/stem-sin) · [Eau Yang (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Branches terrestres",
    "title": "子 — la branche du Rat",
    "summary": "Les tiges contenues dans la branche terrestre 子 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "子 est la première des douze branches terrestres",
        "blocks": [
          {
            "p": "子 est la première des douze branches terrestres et appartient au Rat. Lorsque la branche du mois de naissance est 子, la saison est l'hiver et l'élément qui possède la saison est l'Eau."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 子, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 子",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "résiduelle (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "principale (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 子",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 子, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 子 (hiver)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Feu",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terre",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Métal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Eau",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 子 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 子 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 子 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Eau Yang (壬) — résiduelle (餘氣)",
                "Eau Yin (癸) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Soutien atypique (偏印)",
                  "Bienveillance (正印)"
                ],
                [
                  "Bois Yin (乙)",
                  "Bienveillance (正印)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Feu Yang (丙)",
                  "Défi (偏官)",
                  "Autorité (正官)"
                ],
                [
                  "Feu Yin (丁)",
                  "Autorité (正官)",
                  "Défi (偏官)"
                ],
                [
                  "Terre Yang (戊)",
                  "Aubaine (偏財)",
                  "Richesse stable (正財)"
                ],
                [
                  "Terre Yin (己)",
                  "Richesse stable (正財)",
                  "Aubaine (偏財)"
                ],
                [
                  "Métal Yang (庚)",
                  "Expression (食神)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Métal Yin (辛)",
                  "Perturbateur (傷官)",
                  "Expression (食神)"
                ],
                [
                  "Eau Yang (壬)",
                  "Compagnon (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Eau Yin (癸)",
                  "Rival (劫財)",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Branches terrestres",
    "title": "丑 — la branche du Bœuf",
    "summary": "Les tiges contenues dans la branche terrestre 丑 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丑 est la deuxième des douze branches terrestres",
        "blocks": [
          {
            "p": "丑 est la deuxième des douze branches terrestres et appartient au Bœuf. Lorsque la branche du mois de naissance est 丑, la saison est l'hiver et l'élément qui possède la saison est l'Eau. C'est un mois de transition (辰未戌丑), si bien que la Terre est aussi comptée à l'état Wang."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 丑, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 丑",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "résiduelle (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "intermédiaire (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "principale (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 丑",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 丑, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 丑 (hiver (mois de transition))",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Feu",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terre",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Métal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Eau",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 丑 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 丑 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 丑 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Eau Yin (癸) — résiduelle (餘氣)",
                "Métal Yin (辛) — intermédiaire (中氣)",
                "Terre Yin (己) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bienveillance (正印)",
                  "Autorité (正官)",
                  "Richesse stable (正財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)",
                  "Aubaine (偏財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Autorité (正官)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yin (丁)",
                  "Défi (偏官)",
                  "Aubaine (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Terre Yang (戊)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Terre Yin (己)",
                  "Aubaine (偏財)",
                  "Expression (食神)",
                  "Compagnon (比肩)"
                ],
                [
                  "Métal Yang (庚)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)",
                  "Bienveillance (正印)"
                ],
                [
                  "Métal Yin (辛)",
                  "Expression (食神)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Eau Yang (壬)",
                  "Rival (劫財)",
                  "Bienveillance (正印)",
                  "Autorité (正官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Branches terrestres",
    "title": "寅 — la branche du Tigre",
    "summary": "Les tiges contenues dans la branche terrestre 寅 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "寅 est la troisième des douze branches terrestres",
        "blocks": [
          {
            "p": "寅 est la troisième des douze branches terrestres et appartient au Tigre. Lorsque la branche du mois de naissance est 寅, la saison est le printemps et l'élément qui possède la saison est le Bois."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 寅, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 寅",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "résiduelle (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "intermédiaire (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "principale (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 寅",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 寅, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 寅 (printemps)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Feu",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terre",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Métal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Eau",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 寅 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 寅 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 寅 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Terre Yang (戊) — résiduelle (餘氣)",
                "Feu Yang (丙) — intermédiaire (中氣)",
                "Bois Yang (甲) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Aubaine (偏財)",
                  "Expression (食神)",
                  "Compagnon (比肩)"
                ],
                [
                  "Bois Yin (乙)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Expression (食神)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Feu Yin (丁)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)",
                  "Bienveillance (正印)"
                ],
                [
                  "Terre Yang (戊)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)"
                ],
                [
                  "Terre Yin (己)",
                  "Rival (劫財)",
                  "Bienveillance (正印)",
                  "Autorité (正官)"
                ],
                [
                  "Métal Yang (庚)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)",
                  "Aubaine (偏財)"
                ],
                [
                  "Métal Yin (辛)",
                  "Bienveillance (正印)",
                  "Autorité (正官)",
                  "Richesse stable (正財)"
                ],
                [
                  "Eau Yang (壬)",
                  "Défi (偏官)",
                  "Aubaine (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Eau Yin (癸)",
                  "Autorité (正官)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Branches terrestres",
    "title": "卯 — la branche du Lapin",
    "summary": "Les tiges contenues dans la branche terrestre 卯 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "卯 est la quatrième des douze branches terrestres",
        "blocks": [
          {
            "p": "卯 est la quatrième des douze branches terrestres et appartient au Lapin. Lorsque la branche du mois de naissance est 卯, la saison est le printemps et l'élément qui possède la saison est le Bois."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 卯, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 卯",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "résiduelle (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "principale (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 卯",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 卯, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 卯 (printemps)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Feu",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terre",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Métal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Eau",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 卯 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 卯 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 卯 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Bois Yang (甲) — résiduelle (餘氣)",
                "Bois Yin (乙) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Compagnon (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Rival (劫財)",
                  "Compagnon (比肩)"
                ],
                [
                  "Feu Yang (丙)",
                  "Soutien atypique (偏印)",
                  "Bienveillance (正印)"
                ],
                [
                  "Feu Yin (丁)",
                  "Bienveillance (正印)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Terre Yang (戊)",
                  "Défi (偏官)",
                  "Autorité (正官)"
                ],
                [
                  "Terre Yin (己)",
                  "Autorité (正官)",
                  "Défi (偏官)"
                ],
                [
                  "Métal Yang (庚)",
                  "Aubaine (偏財)",
                  "Richesse stable (正財)"
                ],
                [
                  "Métal Yin (辛)",
                  "Richesse stable (正財)",
                  "Aubaine (偏財)"
                ],
                [
                  "Eau Yang (壬)",
                  "Expression (食神)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Perturbateur (傷官)",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Branches terrestres",
    "title": "辰 — la branche du Dragon",
    "summary": "Les tiges contenues dans la branche terrestre 辰 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "辰 est la cinquième des douze branches terrestres",
        "blocks": [
          {
            "p": "辰 est la cinquième des douze branches terrestres et appartient au Dragon. Lorsque la branche du mois de naissance est 辰, la saison est le printemps et l'élément qui possède la saison est le Bois. C'est un mois de transition (辰未戌丑), si bien que la Terre est aussi comptée à l'état Wang."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 辰, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 辰",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "résiduelle (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Eau Yin (癸)",
                  "Eau Yin",
                  "intermédiaire (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "principale (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 辰",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 辰, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 辰 (printemps (mois de transition))",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Feu",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terre",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Métal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Eau",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 辰 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 辰 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 辰 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Bois Yin (乙) — résiduelle (餘氣)",
                "Eau Yin (癸) — intermédiaire (中氣)",
                "Terre Yang (戊) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Rival (劫財)",
                  "Bienveillance (正印)",
                  "Aubaine (偏財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Bienveillance (正印)",
                  "Autorité (正官)",
                  "Expression (食神)"
                ],
                [
                  "Feu Yin (丁)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Terre Yang (戊)",
                  "Autorité (正官)",
                  "Richesse stable (正財)",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yin (己)",
                  "Défi (偏官)",
                  "Aubaine (偏財)",
                  "Rival (劫財)"
                ],
                [
                  "Métal Yang (庚)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Métal Yin (辛)",
                  "Aubaine (偏財)",
                  "Expression (食神)",
                  "Bienveillance (正印)"
                ],
                [
                  "Eau Yang (壬)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)",
                  "Défi (偏官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Expression (食神)",
                  "Compagnon (比肩)",
                  "Autorité (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Branches terrestres",
    "title": "巳 — la branche du Serpent",
    "summary": "Les tiges contenues dans la branche terrestre 巳 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "巳 est la sixième des douze branches terrestres",
        "blocks": [
          {
            "p": "巳 est la sixième des douze branches terrestres et appartient au Serpent. Lorsque la branche du mois de naissance est 巳, la saison est l'été et l'élément qui possède la saison est le Feu."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 巳, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 巳",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "résiduelle (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "intermédiaire (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "principale (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 巳",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 巳, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 巳 (été)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Feu",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terre",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Métal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Eau",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 巳 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 巳 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 巳 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Terre Yang (戊) — résiduelle (餘氣)",
                "Métal Yang (庚) — intermédiaire (中氣)",
                "Feu Yang (丙) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Aubaine (偏財)",
                  "Défi (偏官)",
                  "Expression (食神)"
                ],
                [
                  "Bois Yin (乙)",
                  "Richesse stable (正財)",
                  "Autorité (正官)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yang (丙)",
                  "Expression (食神)",
                  "Aubaine (偏財)",
                  "Compagnon (比肩)"
                ],
                [
                  "Feu Yin (丁)",
                  "Perturbateur (傷官)",
                  "Richesse stable (正財)",
                  "Rival (劫財)"
                ],
                [
                  "Terre Yang (戊)",
                  "Compagnon (比肩)",
                  "Expression (食神)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Terre Yin (己)",
                  "Rival (劫財)",
                  "Perturbateur (傷官)",
                  "Bienveillance (正印)"
                ],
                [
                  "Métal Yang (庚)",
                  "Soutien atypique (偏印)",
                  "Compagnon (比肩)",
                  "Défi (偏官)"
                ],
                [
                  "Métal Yin (辛)",
                  "Bienveillance (正印)",
                  "Rival (劫財)",
                  "Autorité (正官)"
                ],
                [
                  "Eau Yang (壬)",
                  "Défi (偏官)",
                  "Soutien atypique (偏印)",
                  "Aubaine (偏財)"
                ],
                [
                  "Eau Yin (癸)",
                  "Autorité (正官)",
                  "Bienveillance (正印)",
                  "Richesse stable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Branches terrestres",
    "title": "午 — la branche du Cheval",
    "summary": "Les tiges contenues dans la branche terrestre 午 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "午 est la septième des douze branches terrestres",
        "blocks": [
          {
            "p": "午 est la septième des douze branches terrestres et appartient au Cheval. Lorsque la branche du mois de naissance est 午, la saison est l'été et l'élément qui possède la saison est le Feu."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 午, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 午",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Feu Yang (丙)",
                  "Feu Yang",
                  "résiduelle (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "intermédiaire (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "principale (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 午",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 午, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 午 (été)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Feu",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terre",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Métal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Eau",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 午 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 午 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 午 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Feu Yang (丙) — résiduelle (餘氣)",
                "Terre Yin (己) — intermédiaire (中氣)",
                "Feu Yin (丁) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Expression (食神)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Bois Yin (乙)",
                  "Perturbateur (傷官)",
                  "Aubaine (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Feu Yang (丙)",
                  "Compagnon (比肩)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Feu Yin (丁)",
                  "Rival (劫財)",
                  "Expression (食神)",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yang (戊)",
                  "Soutien atypique (偏印)",
                  "Rival (劫財)",
                  "Bienveillance (正印)"
                ],
                [
                  "Terre Yin (己)",
                  "Bienveillance (正印)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Métal Yang (庚)",
                  "Défi (偏官)",
                  "Bienveillance (正印)",
                  "Autorité (正官)"
                ],
                [
                  "Métal Yin (辛)",
                  "Autorité (正官)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)"
                ],
                [
                  "Eau Yang (壬)",
                  "Aubaine (偏財)",
                  "Autorité (正官)",
                  "Richesse stable (正財)"
                ],
                [
                  "Eau Yin (癸)",
                  "Richesse stable (正財)",
                  "Défi (偏官)",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Branches terrestres",
    "title": "未 — la branche du Mouton",
    "summary": "Les tiges contenues dans la branche terrestre 未 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "未 est la huitième des douze branches terrestres",
        "blocks": [
          {
            "p": "未 est la huitième des douze branches terrestres et appartient au Mouton. Lorsque la branche du mois de naissance est 未, la saison est l'été et l'élément qui possède la saison est le Feu. C'est un mois de transition (辰未戌丑), si bien que la Terre est aussi comptée à l'état Wang."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 未, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 未",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "résiduelle (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Bois Yin (乙)",
                  "Bois Yin",
                  "intermédiaire (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Terre Yin (己)",
                  "Terre Yin",
                  "principale (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 未",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 未, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 未 (été (mois de transition))",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Feu",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terre",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Métal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Eau",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 未 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 未 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 未 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Feu Yin (丁) — résiduelle (餘氣)",
                "Bois Yin (乙) — intermédiaire (中氣)",
                "Terre Yin (己) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)",
                  "Richesse stable (正財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Expression (食神)",
                  "Compagnon (比肩)",
                  "Aubaine (偏財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Rival (劫財)",
                  "Bienveillance (正印)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yin (丁)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)",
                  "Expression (食神)"
                ],
                [
                  "Terre Yang (戊)",
                  "Bienveillance (正印)",
                  "Autorité (正官)",
                  "Rival (劫財)"
                ],
                [
                  "Terre Yin (己)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)",
                  "Compagnon (比肩)"
                ],
                [
                  "Métal Yang (庚)",
                  "Autorité (正官)",
                  "Richesse stable (正財)",
                  "Bienveillance (正印)"
                ],
                [
                  "Métal Yin (辛)",
                  "Défi (偏官)",
                  "Aubaine (偏財)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Eau Yang (壬)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)",
                  "Autorité (正官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Aubaine (偏財)",
                  "Expression (食神)",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Branches terrestres",
    "title": "申 — la branche du Singe",
    "summary": "Les tiges contenues dans la branche terrestre 申 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "申 est la neuvième des douze branches terrestres",
        "blocks": [
          {
            "p": "申 est la neuvième des douze branches terrestres et appartient au Singe. Lorsque la branche du mois de naissance est 申, la saison est l'automne et l'élément qui possède la saison est le Métal."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 申, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 申",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "résiduelle (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "intermédiaire (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "principale (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 申",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 申, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 申 (automne)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Feu",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terre",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Métal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Eau",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 申 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 申 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 申 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Terre Yang (戊) — résiduelle (餘氣)",
                "Eau Yang (壬) — intermédiaire (中氣)",
                "Métal Yang (庚) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Aubaine (偏財)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)"
                ],
                [
                  "Bois Yin (乙)",
                  "Richesse stable (正財)",
                  "Bienveillance (正印)",
                  "Autorité (正官)"
                ],
                [
                  "Feu Yang (丙)",
                  "Expression (食神)",
                  "Défi (偏官)",
                  "Aubaine (偏財)"
                ],
                [
                  "Feu Yin (丁)",
                  "Perturbateur (傷官)",
                  "Autorité (正官)",
                  "Richesse stable (正財)"
                ],
                [
                  "Terre Yang (戊)",
                  "Compagnon (比肩)",
                  "Aubaine (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Terre Yin (己)",
                  "Rival (劫財)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Métal Yang (庚)",
                  "Soutien atypique (偏印)",
                  "Expression (食神)",
                  "Compagnon (比肩)"
                ],
                [
                  "Métal Yin (辛)",
                  "Bienveillance (正印)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Eau Yang (壬)",
                  "Défi (偏官)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Eau Yin (癸)",
                  "Autorité (正官)",
                  "Rival (劫財)",
                  "Bienveillance (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Branches terrestres",
    "title": "酉 — la branche du Coq",
    "summary": "Les tiges contenues dans la branche terrestre 酉 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "酉 est la dixième des douze branches terrestres",
        "blocks": [
          {
            "p": "酉 est la dixième des douze branches terrestres et appartient au Coq. Lorsque la branche du mois de naissance est 酉, la saison est l'automne et l'élément qui possède la saison est le Métal."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 酉, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 酉",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Métal Yang (庚)",
                  "Métal Yang",
                  "résiduelle (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "principale (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 酉",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 酉, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 酉 (automne)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Feu",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terre",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Métal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Eau",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 酉 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 酉 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 酉 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Métal Yang (庚) — résiduelle (餘氣)",
                "Métal Yin (辛) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Défi (偏官)",
                  "Autorité (正官)"
                ],
                [
                  "Bois Yin (乙)",
                  "Autorité (正官)",
                  "Défi (偏官)"
                ],
                [
                  "Feu Yang (丙)",
                  "Aubaine (偏財)",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yin (丁)",
                  "Richesse stable (正財)",
                  "Aubaine (偏財)"
                ],
                [
                  "Terre Yang (戊)",
                  "Expression (食神)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Terre Yin (己)",
                  "Perturbateur (傷官)",
                  "Expression (食神)"
                ],
                [
                  "Métal Yang (庚)",
                  "Compagnon (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Métal Yin (辛)",
                  "Rival (劫財)",
                  "Compagnon (比肩)"
                ],
                [
                  "Eau Yang (壬)",
                  "Soutien atypique (偏印)",
                  "Bienveillance (正印)"
                ],
                [
                  "Eau Yin (癸)",
                  "Bienveillance (正印)",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [戌 (Chien)](/guide/branch-sul) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Branches terrestres",
    "title": "戌 — la branche du Chien",
    "summary": "Les tiges contenues dans la branche terrestre 戌 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "戌 est la onzième des douze branches terrestres",
        "blocks": [
          {
            "p": "戌 est la onzième des douze branches terrestres et appartient au Chien. Lorsque la branche du mois de naissance est 戌, la saison est l'automne et l'élément qui possède la saison est le Métal. C'est un mois de transition (辰未戌丑), si bien que la Terre est aussi comptée à l'état Wang."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 戌, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 戌",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Métal Yin (辛)",
                  "Métal Yin",
                  "résiduelle (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Feu Yin (丁)",
                  "Feu Yin",
                  "intermédiaire (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "principale (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 戌",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 戌, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 戌 (automne (mois de transition))",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Feu",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terre",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Métal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Eau",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 戌 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 戌 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 戌 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Métal Yin (辛) — résiduelle (餘氣)",
                "Feu Yin (丁) — intermédiaire (中氣)",
                "Terre Yang (戊) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Autorité (正官)",
                  "Perturbateur (傷官)",
                  "Aubaine (偏財)"
                ],
                [
                  "Bois Yin (乙)",
                  "Défi (偏官)",
                  "Expression (食神)",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yang (丙)",
                  "Richesse stable (正財)",
                  "Rival (劫財)",
                  "Expression (食神)"
                ],
                [
                  "Feu Yin (丁)",
                  "Aubaine (偏財)",
                  "Compagnon (比肩)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Terre Yang (戊)",
                  "Perturbateur (傷官)",
                  "Bienveillance (正印)",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yin (己)",
                  "Expression (食神)",
                  "Soutien atypique (偏印)",
                  "Rival (劫財)"
                ],
                [
                  "Métal Yang (庚)",
                  "Rival (劫財)",
                  "Autorité (正官)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Métal Yin (辛)",
                  "Compagnon (比肩)",
                  "Défi (偏官)",
                  "Bienveillance (正印)"
                ],
                [
                  "Eau Yang (壬)",
                  "Bienveillance (正印)",
                  "Richesse stable (正財)",
                  "Défi (偏官)"
                ],
                [
                  "Eau Yin (癸)",
                  "Soutien atypique (偏印)",
                  "Aubaine (偏財)",
                  "Autorité (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [亥 (Cochon)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Branches terrestres",
    "title": "亥 — la branche du Cochon",
    "summary": "Les tiges contenues dans la branche terrestre 亥 (les tiges cachées), la force des cinq éléments lorsqu'elle est la branche du mois et les Dix Dieux lus pour chaque tige du jour — exposés exactement comme le prévoient les règles de calcul de Saju-Link.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "亥 est la douzième des douze branches terrestres",
        "blocks": [
          {
            "p": "亥 est la douzième des douze branches terrestres et appartient au Cochon. Lorsque la branche du mois de naissance est 亥, la saison est l'hiver et l'élément qui possède la saison est l'Eau."
          },
          {
            "p": "Lorsque la branche du jour de naissance est 亥, ce caractère est la position du conjoint. Vous voyez ci-dessous quelles tiges cette branche contient et ce qu'elles sont pour la tige du jour."
          }
        ]
      },
      {
        "title": "Les tiges que contient cette branche (tiges cachées)",
        "blocks": [
          {
            "p": "Une branche est un seul caractère visible, mais elle contient des tiges à l'intérieur. La part indique comment les trente jours de la branche sont répartis entre les tiges, et la tige principale est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de 亥",
              "head": [
                "Tige",
                "Élément et polarité",
                "Position",
                "Part"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "Terre Yang",
                  "résiduelle (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Bois Yang (甲)",
                  "Bois Yang",
                  "intermédiaire (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Eau Yang (壬)",
                  "Eau Yang",
                  "principale (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La force des cinq éléments lorsque la branche du mois est 亥",
        "blocks": [
          {
            "p": "Lorsque la branche du mois de naissance est 亥, chaque élément reçoit un état (Wang, Sang, Hyu, Su, Sa), et cet état devient le multiplicateur appliqué à sa force."
          },
          {
            "table": {
              "caption": "Les états des éléments pour la branche du mois 亥 (hiver)",
              "head": [
                "Élément",
                "État",
                "Multiplicateur"
              ],
              "rows": [
                [
                  "Bois",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Feu",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terre",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Métal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Eau",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Les Dix Dieux selon la tige du jour",
        "blocks": [
          {
            "p": "Les mêmes tiges cachées de 亥 deviennent des Dix Dieux différents selon la tige du jour. Lorsque 亥 est la branche du jour, ce tableau est la lecture de la position du conjoint."
          },
          {
            "table": {
              "caption": "Ce que sont les tiges cachées de 亥 pour chaque tige du jour",
              "head": [
                "Tige du jour",
                "Terre Yang (戊) — résiduelle (餘氣)",
                "Bois Yang (甲) — intermédiaire (中氣)",
                "Eau Yang (壬) — principale (本氣)"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "Aubaine (偏財)",
                  "Compagnon (比肩)",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Bois Yin (乙)",
                  "Richesse stable (正財)",
                  "Rival (劫財)",
                  "Bienveillance (正印)"
                ],
                [
                  "Feu Yang (丙)",
                  "Expression (食神)",
                  "Soutien atypique (偏印)",
                  "Défi (偏官)"
                ],
                [
                  "Feu Yin (丁)",
                  "Perturbateur (傷官)",
                  "Bienveillance (正印)",
                  "Autorité (正官)"
                ],
                [
                  "Terre Yang (戊)",
                  "Compagnon (比肩)",
                  "Défi (偏官)",
                  "Aubaine (偏財)"
                ],
                [
                  "Terre Yin (己)",
                  "Rival (劫財)",
                  "Autorité (正官)",
                  "Richesse stable (正財)"
                ],
                [
                  "Métal Yang (庚)",
                  "Soutien atypique (偏印)",
                  "Aubaine (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Métal Yin (辛)",
                  "Bienveillance (正印)",
                  "Richesse stable (正財)",
                  "Perturbateur (傷官)"
                ],
                [
                  "Eau Yang (壬)",
                  "Défi (偏官)",
                  "Expression (食神)",
                  "Compagnon (比肩)"
                ],
                [
                  "Eau Yin (癸)",
                  "Autorité (正官)",
                  "Perturbateur (傷官)",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Une seule branche ne détermine pas une personne. La même branche se lit différemment selon la tige du jour et la branche du mois.",
              "Les relations entre branches, telles que l'harmonie, le choc et la discorde, ne sont pas traitées ici."
            ]
          },
          {
            "p": "Les relations entre branches se trouvent dans [le tableau des douze branches](/guide/branches), et sa signification en tant qu'animal du zodiaque dans [la place du zodiaque dans un saju](/guide/zodiac). Autres branches : [子 (Rat)](/guide/branch-ja) · [丑 (Bœuf)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Lapin)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Serpent)](/guide/branch-sa) · [午 (Cheval)](/guide/branch-o) · [未 (Mouton)](/guide/branch-mi) · [申 (Singe)](/guide/branch-sin) · [酉 (Coq)](/guide/branch-yu) · [戌 (Chien)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 甲子",
    "summary": "Comment Saju-Link lit le pilier du jour 甲子 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "甲子 est le pilier du jour numéro 1 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 甲子, la tige du jour est 甲 (Bois, Yang) et la branche du jour est 子 (le Rat). Dans le cycle de soixante ans, c'est la combinaison numéro 1."
          },
          {
            "p": "Saju-Link appelle « Bois Yang (甲) » une personne dont la tige du jour est 甲, et la ligne affichée par l'écran de résultats est : « Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 子",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 甲, les tiges que contient 子 sont les suivantes. La tige principale (癸) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 甲子",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 甲"
              ],
              "rows": [
                [
                  "Eau Yang (壬)",
                  "résiduelle (餘氣)",
                  "{hidJaYeo}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Eau Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Bienveillance (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 甲 comme tige du jour, la Richesse stable est 己 et l'Autorité est 辛."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 己. 己 ne se trouve pas dans 子."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 辛. 辛 ne se trouve pas dans 子."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [癸亥](/guide/pillar-gye-hae) et le suivant est [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Il est composé de [Bois Yang (甲)](/guide/stem-gap) et de [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 乙丑",
    "summary": "Comment Saju-Link lit le pilier du jour 乙丑 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "乙丑 est le pilier du jour numéro 2 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 乙丑, la tige du jour est 乙 (Bois, Yin) et la branche du jour est 丑 (le Bœuf). Dans le cycle de soixante ans, c'est la combinaison numéro 2."
          },
          {
            "p": "Saju-Link appelle « Bois Yin (乙) » une personne dont la tige du jour est 乙, et la ligne affichée par l'écran de résultats est : « Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 丑",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 乙, les tiges que contient 丑 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 乙丑",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 乙"
              ],
              "rows": [
                [
                  "Eau Yin (癸)",
                  "résiduelle (餘氣)",
                  "{hidChukYeo}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Métal Yin (辛)",
                  "intermédiaire (中氣)",
                  "{hidChukJung}",
                  "Défi (偏官)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 乙 comme tige du jour, la Richesse stable est 戊 et l'Autorité est 庚."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 戊. 戊 ne se trouve pas dans 丑."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 庚. 庚 ne se trouve pas dans 丑."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [甲子](/guide/pillar-gap-ja) et le suivant est [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Il est composé de [Bois Yin (乙)](/guide/stem-eul) et de [丑 (Bœuf)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丙寅",
    "summary": "Comment Saju-Link lit le pilier du jour 丙寅 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丙寅 est le pilier du jour numéro 3 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丙寅, la tige du jour est 丙 (Feu, Yang) et la branche du jour est 寅 (le Tigre). Dans le cycle de soixante ans, c'est la combinaison numéro 3."
          },
          {
            "p": "Saju-Link appelle « Feu Yang (丙) » une personne dont la tige du jour est 丙, et la ligne affichée par l'écran de résultats est : « Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 寅",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丙, les tiges que contient 寅 sont les suivantes. La tige principale (甲) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丙寅",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丙"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidInYeo}",
                  "Expression (食神)"
                ],
                [
                  "Feu Yang (丙)",
                  "intermédiaire (中氣)",
                  "{hidInJung}",
                  "Compagnon (比肩)"
                ],
                [
                  "Bois Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丙 comme tige du jour, la Richesse stable est 辛 et l'Autorité est 癸."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 辛. 辛 ne se trouve pas dans 寅."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 癸. 癸 ne se trouve pas dans 寅."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [乙丑](/guide/pillar-eul-chuk) et le suivant est [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Il est composé de [Feu Yang (丙)](/guide/stem-byeong) et de [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丁卯",
    "summary": "Comment Saju-Link lit le pilier du jour 丁卯 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丁卯 est le pilier du jour numéro 4 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丁卯, la tige du jour est 丁 (Feu, Yin) et la branche du jour est 卯 (le Lapin). Dans le cycle de soixante ans, c'est la combinaison numéro 4."
          },
          {
            "p": "Saju-Link appelle « Feu Yin (丁) » une personne dont la tige du jour est 丁, et la ligne affichée par l'écran de résultats est : « La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 卯",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丁, les tiges que contient 卯 sont les suivantes. La tige principale (乙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丁卯",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丁"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "résiduelle (餘氣)",
                  "{hidMyoYeo}",
                  "Bienveillance (正印)"
                ],
                [
                  "Bois Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丁 comme tige du jour, la Richesse stable est 庚 et l'Autorité est 壬."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 庚. 庚 ne se trouve pas dans 卯."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 壬. 壬 ne se trouve pas dans 卯."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丙寅](/guide/pillar-byeong-in) et le suivant est [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Il est composé de [Feu Yin (丁)](/guide/stem-jeong) et de [卯 (Lapin)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 戊辰",
    "summary": "Comment Saju-Link lit le pilier du jour 戊辰 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "戊辰 est le pilier du jour numéro 5 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 戊辰, la tige du jour est 戊 (Terre, Yang) et la branche du jour est 辰 (le Dragon). Dans le cycle de soixante ans, c'est la combinaison numéro 5."
          },
          {
            "p": "Saju-Link appelle « Terre Yang (戊) » une personne dont la tige du jour est 戊, et la ligne affichée par l'écran de résultats est : « La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 辰",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 戊, les tiges que contient 辰 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 戊辰",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 戊"
              ],
              "rows": [
                [
                  "Bois Yin (乙)",
                  "résiduelle (餘氣)",
                  "{hidJinYeo}",
                  "Autorité (正官)"
                ],
                [
                  "Eau Yin (癸)",
                  "intermédiaire (中氣)",
                  "{hidJinJung}",
                  "Richesse stable (正財)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 戊 comme tige du jour, la Richesse stable est 癸 et l'Autorité est 乙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 癸. 癸 se trouve dans 辰 (intermédiaire (中氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 乙. 乙 se trouve dans 辰 (résiduelle (餘氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丁卯](/guide/pillar-jeong-myo) et le suivant est [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Il est composé de [Terre Yang (戊)](/guide/stem-mu) et de [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 己巳",
    "summary": "Comment Saju-Link lit le pilier du jour 己巳 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "己巳 est le pilier du jour numéro 6 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 己巳, la tige du jour est 己 (Terre, Yin) et la branche du jour est 巳 (le Serpent). Dans le cycle de soixante ans, c'est la combinaison numéro 6."
          },
          {
            "p": "Saju-Link appelle « Terre Yin (己) » une personne dont la tige du jour est 己, et la ligne affichée par l'écran de résultats est : « La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 巳",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 己, les tiges que contient 巳 sont les suivantes. La tige principale (丙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 己巳",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 己"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSaYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Métal Yang (庚)",
                  "intermédiaire (中氣)",
                  "{hidSaJung}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Bienveillance (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 己 comme tige du jour, la Richesse stable est 壬 et l'Autorité est 甲."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 壬. 壬 ne se trouve pas dans 巳."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 甲. 甲 ne se trouve pas dans 巳."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [戊辰](/guide/pillar-mu-jin) et le suivant est [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Il est composé de [Terre Yin (己)](/guide/stem-gi) et de [巳 (Serpent)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 庚午",
    "summary": "Comment Saju-Link lit le pilier du jour 庚午 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "庚午 est le pilier du jour numéro 7 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 庚午, la tige du jour est 庚 (Métal, Yang) et la branche du jour est 午 (le Cheval). Dans le cycle de soixante ans, c'est la combinaison numéro 7."
          },
          {
            "p": "Saju-Link appelle « Métal Yang (庚) » une personne dont la tige du jour est 庚, et la ligne affichée par l'écran de résultats est : « Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 午",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 庚, les tiges que contient 午 sont les suivantes. La tige principale (丁) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 庚午",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 庚"
              ],
              "rows": [
                [
                  "Feu Yang (丙)",
                  "résiduelle (餘氣)",
                  "{hidOYeo}",
                  "Défi (偏官)"
                ],
                [
                  "Terre Yin (己)",
                  "intermédiaire (中氣)",
                  "{hidOJung}",
                  "Bienveillance (正印)"
                ],
                [
                  "Feu Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Autorité (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 庚 comme tige du jour, la Richesse stable est 乙 et l'Autorité est 丁."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 乙. 乙 ne se trouve pas dans 午."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丁. 丁 se trouve dans 午 (principale (本氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [己巳](/guide/pillar-gi-sa) et le suivant est [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Il est composé de [Métal Yang (庚)](/guide/stem-gyeong) et de [午 (Cheval)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 辛未",
    "summary": "Comment Saju-Link lit le pilier du jour 辛未 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "辛未 est le pilier du jour numéro 8 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 辛未, la tige du jour est 辛 (Métal, Yin) et la branche du jour est 未 (le Mouton). Dans le cycle de soixante ans, c'est la combinaison numéro 8."
          },
          {
            "p": "Saju-Link appelle « Métal Yin (辛) » une personne dont la tige du jour est 辛, et la ligne affichée par l'écran de résultats est : « Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 未",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 辛, les tiges que contient 未 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 辛未",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 辛"
              ],
              "rows": [
                [
                  "Feu Yin (丁)",
                  "résiduelle (餘氣)",
                  "{hidMiYeo}",
                  "Défi (偏官)"
                ],
                [
                  "Bois Yin (乙)",
                  "intermédiaire (中氣)",
                  "{hidMiJung}",
                  "Aubaine (偏財)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 辛 comme tige du jour, la Richesse stable est 甲 et l'Autorité est 丙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 甲. 甲 ne se trouve pas dans 未."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丙. 丙 ne se trouve pas dans 未."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [庚午](/guide/pillar-gyeong-o) et le suivant est [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Il est composé de [Métal Yin (辛)](/guide/stem-sin) et de [未 (Mouton)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 壬申",
    "summary": "Comment Saju-Link lit le pilier du jour 壬申 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "壬申 est le pilier du jour numéro 9 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 壬申, la tige du jour est 壬 (Eau, Yang) et la branche du jour est 申 (le Singe). Dans le cycle de soixante ans, c'est la combinaison numéro 9."
          },
          {
            "p": "Saju-Link appelle « Eau Yang (壬) » une personne dont la tige du jour est 壬, et la ligne affichée par l'écran de résultats est : « Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 申",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 壬, les tiges que contient 申 sont les suivantes. La tige principale (庚) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 壬申",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 壬"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSinYeo}",
                  "Défi (偏官)"
                ],
                [
                  "Eau Yang (壬)",
                  "intermédiaire (中氣)",
                  "{hidSinJung}",
                  "Compagnon (比肩)"
                ],
                [
                  "Métal Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 壬 comme tige du jour, la Richesse stable est 丁 et l'Autorité est 己."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丁. 丁 ne se trouve pas dans 申."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 己. 己 ne se trouve pas dans 申."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [辛未](/guide/pillar-sin-mi) et le suivant est [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Il est composé de [Eau Yang (壬)](/guide/stem-im) et de [申 (Singe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 癸酉",
    "summary": "Comment Saju-Link lit le pilier du jour 癸酉 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "癸酉 est le pilier du jour numéro 10 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 癸酉, la tige du jour est 癸 (Eau, Yin) et la branche du jour est 酉 (le Coq). Dans le cycle de soixante ans, c'est la combinaison numéro 10."
          },
          {
            "p": "Saju-Link appelle « Eau Yin (癸) » une personne dont la tige du jour est 癸, et la ligne affichée par l'écran de résultats est : « La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 酉",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 癸, les tiges que contient 酉 sont les suivantes. La tige principale (辛) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 癸酉",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 癸"
              ],
              "rows": [
                [
                  "Métal Yang (庚)",
                  "résiduelle (餘氣)",
                  "{hidYuYeo}",
                  "Bienveillance (正印)"
                ],
                [
                  "Métal Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 癸 comme tige du jour, la Richesse stable est 丙 et l'Autorité est 戊."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丙. 丙 ne se trouve pas dans 酉."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 戊. 戊 ne se trouve pas dans 酉."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [壬申](/guide/pillar-im-sin) et le suivant est [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Il est composé de [Eau Yin (癸)](/guide/stem-gye) et de [酉 (Coq)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 甲戌",
    "summary": "Comment Saju-Link lit le pilier du jour 甲戌 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "甲戌 est le pilier du jour numéro 11 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 甲戌, la tige du jour est 甲 (Bois, Yang) et la branche du jour est 戌 (le Chien). Dans le cycle de soixante ans, c'est la combinaison numéro 11."
          },
          {
            "p": "Saju-Link appelle « Bois Yang (甲) » une personne dont la tige du jour est 甲, et la ligne affichée par l'écran de résultats est : « Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 戌",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 甲, les tiges que contient 戌 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 甲戌",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 甲"
              ],
              "rows": [
                [
                  "Métal Yin (辛)",
                  "résiduelle (餘氣)",
                  "{hidSulYeo}",
                  "Autorité (正官)"
                ],
                [
                  "Feu Yin (丁)",
                  "intermédiaire (中氣)",
                  "{hidSulJung}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 甲 comme tige du jour, la Richesse stable est 己 et l'Autorité est 辛."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 己. 己 ne se trouve pas dans 戌."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 辛. 辛 se trouve dans 戌 (résiduelle (餘氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [癸酉](/guide/pillar-gye-yu) et le suivant est [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Il est composé de [Bois Yang (甲)](/guide/stem-gap) et de [戌 (Chien)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 乙亥",
    "summary": "Comment Saju-Link lit le pilier du jour 乙亥 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "乙亥 est le pilier du jour numéro 12 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 乙亥, la tige du jour est 乙 (Bois, Yin) et la branche du jour est 亥 (le Cochon). Dans le cycle de soixante ans, c'est la combinaison numéro 12."
          },
          {
            "p": "Saju-Link appelle « Bois Yin (乙) » une personne dont la tige du jour est 乙, et la ligne affichée par l'écran de résultats est : « Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 亥",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 乙, les tiges que contient 亥 sont les suivantes. La tige principale (壬) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 乙亥",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 乙"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidHaeYeo}",
                  "Richesse stable (正財)"
                ],
                [
                  "Bois Yang (甲)",
                  "intermédiaire (中氣)",
                  "{hidHaeJung}",
                  "Rival (劫財)"
                ],
                [
                  "Eau Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Bienveillance (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 乙 comme tige du jour, la Richesse stable est 戊 et l'Autorité est 庚."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 戊. 戊 se trouve dans 亥 (résiduelle (餘氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 庚. 庚 ne se trouve pas dans 亥."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [甲戌](/guide/pillar-gap-sul) et le suivant est [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Il est composé de [Bois Yin (乙)](/guide/stem-eul) et de [亥 (Cochon)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丙子",
    "summary": "Comment Saju-Link lit le pilier du jour 丙子 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丙子 est le pilier du jour numéro 13 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丙子, la tige du jour est 丙 (Feu, Yang) et la branche du jour est 子 (le Rat). Dans le cycle de soixante ans, c'est la combinaison numéro 13."
          },
          {
            "p": "Saju-Link appelle « Feu Yang (丙) » une personne dont la tige du jour est 丙, et la ligne affichée par l'écran de résultats est : « Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 子",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丙, les tiges que contient 子 sont les suivantes. La tige principale (癸) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丙子",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丙"
              ],
              "rows": [
                [
                  "Eau Yang (壬)",
                  "résiduelle (餘氣)",
                  "{hidJaYeo}",
                  "Défi (偏官)"
                ],
                [
                  "Eau Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Autorité (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丙 comme tige du jour, la Richesse stable est 辛 et l'Autorité est 癸."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 辛. 辛 ne se trouve pas dans 子."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 癸. 癸 se trouve dans 子 (principale (本氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [乙亥](/guide/pillar-eul-hae) et le suivant est [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Il est composé de [Feu Yang (丙)](/guide/stem-byeong) et de [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丁丑",
    "summary": "Comment Saju-Link lit le pilier du jour 丁丑 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丁丑 est le pilier du jour numéro 14 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丁丑, la tige du jour est 丁 (Feu, Yin) et la branche du jour est 丑 (le Bœuf). Dans le cycle de soixante ans, c'est la combinaison numéro 14."
          },
          {
            "p": "Saju-Link appelle « Feu Yin (丁) » une personne dont la tige du jour est 丁, et la ligne affichée par l'écran de résultats est : « La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 丑",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丁, les tiges que contient 丑 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丁丑",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丁"
              ],
              "rows": [
                [
                  "Eau Yin (癸)",
                  "résiduelle (餘氣)",
                  "{hidChukYeo}",
                  "Défi (偏官)"
                ],
                [
                  "Métal Yin (辛)",
                  "intermédiaire (中氣)",
                  "{hidChukJung}",
                  "Aubaine (偏財)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丁 comme tige du jour, la Richesse stable est 庚 et l'Autorité est 壬."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 庚. 庚 ne se trouve pas dans 丑."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 壬. 壬 ne se trouve pas dans 丑."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丙子](/guide/pillar-byeong-ja) et le suivant est [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Il est composé de [Feu Yin (丁)](/guide/stem-jeong) et de [丑 (Bœuf)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 戊寅",
    "summary": "Comment Saju-Link lit le pilier du jour 戊寅 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "戊寅 est le pilier du jour numéro 15 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 戊寅, la tige du jour est 戊 (Terre, Yang) et la branche du jour est 寅 (le Tigre). Dans le cycle de soixante ans, c'est la combinaison numéro 15."
          },
          {
            "p": "Saju-Link appelle « Terre Yang (戊) » une personne dont la tige du jour est 戊, et la ligne affichée par l'écran de résultats est : « La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 寅",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 戊, les tiges que contient 寅 sont les suivantes. La tige principale (甲) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 戊寅",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 戊"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidInYeo}",
                  "Compagnon (比肩)"
                ],
                [
                  "Feu Yang (丙)",
                  "intermédiaire (中氣)",
                  "{hidInJung}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Bois Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 戊 comme tige du jour, la Richesse stable est 癸 et l'Autorité est 乙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 癸. 癸 ne se trouve pas dans 寅."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 乙. 乙 ne se trouve pas dans 寅."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丁丑](/guide/pillar-jeong-chuk) et le suivant est [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Il est composé de [Terre Yang (戊)](/guide/stem-mu) et de [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 己卯",
    "summary": "Comment Saju-Link lit le pilier du jour 己卯 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "己卯 est le pilier du jour numéro 16 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 己卯, la tige du jour est 己 (Terre, Yin) et la branche du jour est 卯 (le Lapin). Dans le cycle de soixante ans, c'est la combinaison numéro 16."
          },
          {
            "p": "Saju-Link appelle « Terre Yin (己) » une personne dont la tige du jour est 己, et la ligne affichée par l'écran de résultats est : « La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 卯",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 己, les tiges que contient 卯 sont les suivantes. La tige principale (乙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 己卯",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 己"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "résiduelle (餘氣)",
                  "{hidMyoYeo}",
                  "Autorité (正官)"
                ],
                [
                  "Bois Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 己 comme tige du jour, la Richesse stable est 壬 et l'Autorité est 甲."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 壬. 壬 ne se trouve pas dans 卯."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 甲. 甲 se trouve dans 卯 (résiduelle (餘氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [戊寅](/guide/pillar-mu-in) et le suivant est [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Il est composé de [Terre Yin (己)](/guide/stem-gi) et de [卯 (Lapin)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 庚辰",
    "summary": "Comment Saju-Link lit le pilier du jour 庚辰 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "庚辰 est le pilier du jour numéro 17 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 庚辰, la tige du jour est 庚 (Métal, Yang) et la branche du jour est 辰 (le Dragon). Dans le cycle de soixante ans, c'est la combinaison numéro 17."
          },
          {
            "p": "Saju-Link appelle « Métal Yang (庚) » une personne dont la tige du jour est 庚, et la ligne affichée par l'écran de résultats est : « Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 辰",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 庚, les tiges que contient 辰 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 庚辰",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 庚"
              ],
              "rows": [
                [
                  "Bois Yin (乙)",
                  "résiduelle (餘氣)",
                  "{hidJinYeo}",
                  "Richesse stable (正財)"
                ],
                [
                  "Eau Yin (癸)",
                  "intermédiaire (中氣)",
                  "{hidJinJung}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 庚 comme tige du jour, la Richesse stable est 乙 et l'Autorité est 丁."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 乙. 乙 se trouve dans 辰 (résiduelle (餘氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丁. 丁 ne se trouve pas dans 辰."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [己卯](/guide/pillar-gi-myo) et le suivant est [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Il est composé de [Métal Yang (庚)](/guide/stem-gyeong) et de [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 辛巳",
    "summary": "Comment Saju-Link lit le pilier du jour 辛巳 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "辛巳 est le pilier du jour numéro 18 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 辛巳, la tige du jour est 辛 (Métal, Yin) et la branche du jour est 巳 (le Serpent). Dans le cycle de soixante ans, c'est la combinaison numéro 18."
          },
          {
            "p": "Saju-Link appelle « Métal Yin (辛) » une personne dont la tige du jour est 辛, et la ligne affichée par l'écran de résultats est : « Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 巳",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 辛, les tiges que contient 巳 sont les suivantes. La tige principale (丙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 辛巳",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 辛"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSaYeo}",
                  "Bienveillance (正印)"
                ],
                [
                  "Métal Yang (庚)",
                  "intermédiaire (中氣)",
                  "{hidSaJung}",
                  "Rival (劫財)"
                ],
                [
                  "Feu Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Autorité (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 辛 comme tige du jour, la Richesse stable est 甲 et l'Autorité est 丙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 甲. 甲 ne se trouve pas dans 巳."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丙. 丙 se trouve dans 巳 (principale (本氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [庚辰](/guide/pillar-gyeong-jin) et le suivant est [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Il est composé de [Métal Yin (辛)](/guide/stem-sin) et de [巳 (Serpent)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 壬午",
    "summary": "Comment Saju-Link lit le pilier du jour 壬午 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "壬午 est le pilier du jour numéro 19 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 壬午, la tige du jour est 壬 (Eau, Yang) et la branche du jour est 午 (le Cheval). Dans le cycle de soixante ans, c'est la combinaison numéro 19."
          },
          {
            "p": "Saju-Link appelle « Eau Yang (壬) » une personne dont la tige du jour est 壬, et la ligne affichée par l'écran de résultats est : « Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 午",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 壬, les tiges que contient 午 sont les suivantes. La tige principale (丁) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 壬午",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 壬"
              ],
              "rows": [
                [
                  "Feu Yang (丙)",
                  "résiduelle (餘氣)",
                  "{hidOYeo}",
                  "Aubaine (偏財)"
                ],
                [
                  "Terre Yin (己)",
                  "intermédiaire (中氣)",
                  "{hidOJung}",
                  "Autorité (正官)"
                ],
                [
                  "Feu Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Richesse stable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 壬 comme tige du jour, la Richesse stable est 丁 et l'Autorité est 己."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丁. 丁 se trouve dans 午 (principale (本氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 己. 己 se trouve dans 午 (intermédiaire (中氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [辛巳](/guide/pillar-sin-sa) et le suivant est [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Il est composé de [Eau Yang (壬)](/guide/stem-im) et de [午 (Cheval)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 癸未",
    "summary": "Comment Saju-Link lit le pilier du jour 癸未 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "癸未 est le pilier du jour numéro 20 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 癸未, la tige du jour est 癸 (Eau, Yin) et la branche du jour est 未 (le Mouton). Dans le cycle de soixante ans, c'est la combinaison numéro 20."
          },
          {
            "p": "Saju-Link appelle « Eau Yin (癸) » une personne dont la tige du jour est 癸, et la ligne affichée par l'écran de résultats est : « La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 未",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 癸, les tiges que contient 未 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 癸未",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 癸"
              ],
              "rows": [
                [
                  "Feu Yin (丁)",
                  "résiduelle (餘氣)",
                  "{hidMiYeo}",
                  "Aubaine (偏財)"
                ],
                [
                  "Bois Yin (乙)",
                  "intermédiaire (中氣)",
                  "{hidMiJung}",
                  "Expression (食神)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 癸 comme tige du jour, la Richesse stable est 丙 et l'Autorité est 戊."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丙. 丙 ne se trouve pas dans 未."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 戊. 戊 ne se trouve pas dans 未."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [壬午](/guide/pillar-im-o) et le suivant est [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Il est composé de [Eau Yin (癸)](/guide/stem-gye) et de [未 (Mouton)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 甲申",
    "summary": "Comment Saju-Link lit le pilier du jour 甲申 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "甲申 est le pilier du jour numéro 21 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 甲申, la tige du jour est 甲 (Bois, Yang) et la branche du jour est 申 (le Singe). Dans le cycle de soixante ans, c'est la combinaison numéro 21."
          },
          {
            "p": "Saju-Link appelle « Bois Yang (甲) » une personne dont la tige du jour est 甲, et la ligne affichée par l'écran de résultats est : « Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 申",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 甲, les tiges que contient 申 sont les suivantes. La tige principale (庚) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 甲申",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 甲"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSinYeo}",
                  "Aubaine (偏財)"
                ],
                [
                  "Eau Yang (壬)",
                  "intermédiaire (中氣)",
                  "{hidSinJung}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Métal Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 甲 comme tige du jour, la Richesse stable est 己 et l'Autorité est 辛."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 己. 己 ne se trouve pas dans 申."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 辛. 辛 ne se trouve pas dans 申."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [癸未](/guide/pillar-gye-mi) et le suivant est [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Il est composé de [Bois Yang (甲)](/guide/stem-gap) et de [申 (Singe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 乙酉",
    "summary": "Comment Saju-Link lit le pilier du jour 乙酉 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "乙酉 est le pilier du jour numéro 22 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 乙酉, la tige du jour est 乙 (Bois, Yin) et la branche du jour est 酉 (le Coq). Dans le cycle de soixante ans, c'est la combinaison numéro 22."
          },
          {
            "p": "Saju-Link appelle « Bois Yin (乙) » une personne dont la tige du jour est 乙, et la ligne affichée par l'écran de résultats est : « Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 酉",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 乙, les tiges que contient 酉 sont les suivantes. La tige principale (辛) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 乙酉",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 乙"
              ],
              "rows": [
                [
                  "Métal Yang (庚)",
                  "résiduelle (餘氣)",
                  "{hidYuYeo}",
                  "Autorité (正官)"
                ],
                [
                  "Métal Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 乙 comme tige du jour, la Richesse stable est 戊 et l'Autorité est 庚."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 戊. 戊 ne se trouve pas dans 酉."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 庚. 庚 se trouve dans 酉 (résiduelle (餘氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [甲申](/guide/pillar-gap-sin) et le suivant est [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Il est composé de [Bois Yin (乙)](/guide/stem-eul) et de [酉 (Coq)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丙戌",
    "summary": "Comment Saju-Link lit le pilier du jour 丙戌 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丙戌 est le pilier du jour numéro 23 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丙戌, la tige du jour est 丙 (Feu, Yang) et la branche du jour est 戌 (le Chien). Dans le cycle de soixante ans, c'est la combinaison numéro 23."
          },
          {
            "p": "Saju-Link appelle « Feu Yang (丙) » une personne dont la tige du jour est 丙, et la ligne affichée par l'écran de résultats est : « Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 戌",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丙, les tiges que contient 戌 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丙戌",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丙"
              ],
              "rows": [
                [
                  "Métal Yin (辛)",
                  "résiduelle (餘氣)",
                  "{hidSulYeo}",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yin (丁)",
                  "intermédiaire (中氣)",
                  "{hidSulJung}",
                  "Rival (劫財)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丙 comme tige du jour, la Richesse stable est 辛 et l'Autorité est 癸."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 辛. 辛 se trouve dans 戌 (résiduelle (餘氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 癸. 癸 ne se trouve pas dans 戌."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [乙酉](/guide/pillar-eul-yu) et le suivant est [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Il est composé de [Feu Yang (丙)](/guide/stem-byeong) et de [戌 (Chien)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丁亥",
    "summary": "Comment Saju-Link lit le pilier du jour 丁亥 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丁亥 est le pilier du jour numéro 24 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丁亥, la tige du jour est 丁 (Feu, Yin) et la branche du jour est 亥 (le Cochon). Dans le cycle de soixante ans, c'est la combinaison numéro 24."
          },
          {
            "p": "Saju-Link appelle « Feu Yin (丁) » une personne dont la tige du jour est 丁, et la ligne affichée par l'écran de résultats est : « La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 亥",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丁, les tiges que contient 亥 sont les suivantes. La tige principale (壬) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丁亥",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丁"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidHaeYeo}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Bois Yang (甲)",
                  "intermédiaire (中氣)",
                  "{hidHaeJung}",
                  "Bienveillance (正印)"
                ],
                [
                  "Eau Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Autorité (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丁 comme tige du jour, la Richesse stable est 庚 et l'Autorité est 壬."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 庚. 庚 ne se trouve pas dans 亥."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 壬. 壬 se trouve dans 亥 (principale (本氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丙戌](/guide/pillar-byeong-sul) et le suivant est [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Il est composé de [Feu Yin (丁)](/guide/stem-jeong) et de [亥 (Cochon)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 戊子",
    "summary": "Comment Saju-Link lit le pilier du jour 戊子 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "戊子 est le pilier du jour numéro 25 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 戊子, la tige du jour est 戊 (Terre, Yang) et la branche du jour est 子 (le Rat). Dans le cycle de soixante ans, c'est la combinaison numéro 25."
          },
          {
            "p": "Saju-Link appelle « Terre Yang (戊) » une personne dont la tige du jour est 戊, et la ligne affichée par l'écran de résultats est : « La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 子",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 戊, les tiges que contient 子 sont les suivantes. La tige principale (癸) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 戊子",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 戊"
              ],
              "rows": [
                [
                  "Eau Yang (壬)",
                  "résiduelle (餘氣)",
                  "{hidJaYeo}",
                  "Aubaine (偏財)"
                ],
                [
                  "Eau Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Richesse stable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 戊 comme tige du jour, la Richesse stable est 癸 et l'Autorité est 乙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 癸. 癸 se trouve dans 子 (principale (本氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 乙. 乙 ne se trouve pas dans 子."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丁亥](/guide/pillar-jeong-hae) et le suivant est [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Il est composé de [Terre Yang (戊)](/guide/stem-mu) et de [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 己丑",
    "summary": "Comment Saju-Link lit le pilier du jour 己丑 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "己丑 est le pilier du jour numéro 26 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 己丑, la tige du jour est 己 (Terre, Yin) et la branche du jour est 丑 (le Bœuf). Dans le cycle de soixante ans, c'est la combinaison numéro 26."
          },
          {
            "p": "Saju-Link appelle « Terre Yin (己) » une personne dont la tige du jour est 己, et la ligne affichée par l'écran de résultats est : « La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 丑",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 己, les tiges que contient 丑 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 己丑",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 己"
              ],
              "rows": [
                [
                  "Eau Yin (癸)",
                  "résiduelle (餘氣)",
                  "{hidChukYeo}",
                  "Aubaine (偏財)"
                ],
                [
                  "Métal Yin (辛)",
                  "intermédiaire (中氣)",
                  "{hidChukJung}",
                  "Expression (食神)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 己 comme tige du jour, la Richesse stable est 壬 et l'Autorité est 甲."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 壬. 壬 ne se trouve pas dans 丑."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 甲. 甲 ne se trouve pas dans 丑."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [戊子](/guide/pillar-mu-ja) et le suivant est [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Il est composé de [Terre Yin (己)](/guide/stem-gi) et de [丑 (Bœuf)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 庚寅",
    "summary": "Comment Saju-Link lit le pilier du jour 庚寅 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "庚寅 est le pilier du jour numéro 27 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 庚寅, la tige du jour est 庚 (Métal, Yang) et la branche du jour est 寅 (le Tigre). Dans le cycle de soixante ans, c'est la combinaison numéro 27."
          },
          {
            "p": "Saju-Link appelle « Métal Yang (庚) » une personne dont la tige du jour est 庚, et la ligne affichée par l'écran de résultats est : « Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 寅",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 庚, les tiges que contient 寅 sont les suivantes. La tige principale (甲) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 庚寅",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 庚"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidInYeo}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Feu Yang (丙)",
                  "intermédiaire (中氣)",
                  "{hidInJung}",
                  "Défi (偏官)"
                ],
                [
                  "Bois Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 庚 comme tige du jour, la Richesse stable est 乙 et l'Autorité est 丁."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 乙. 乙 ne se trouve pas dans 寅."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丁. 丁 ne se trouve pas dans 寅."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [己丑](/guide/pillar-gi-chuk) et le suivant est [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Il est composé de [Métal Yang (庚)](/guide/stem-gyeong) et de [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 辛卯",
    "summary": "Comment Saju-Link lit le pilier du jour 辛卯 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "辛卯 est le pilier du jour numéro 28 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 辛卯, la tige du jour est 辛 (Métal, Yin) et la branche du jour est 卯 (le Lapin). Dans le cycle de soixante ans, c'est la combinaison numéro 28."
          },
          {
            "p": "Saju-Link appelle « Métal Yin (辛) » une personne dont la tige du jour est 辛, et la ligne affichée par l'écran de résultats est : « Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 卯",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 辛, les tiges que contient 卯 sont les suivantes. La tige principale (乙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 辛卯",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 辛"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "résiduelle (餘氣)",
                  "{hidMyoYeo}",
                  "Richesse stable (正財)"
                ],
                [
                  "Bois Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 辛 comme tige du jour, la Richesse stable est 甲 et l'Autorité est 丙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 甲. 甲 se trouve dans 卯 (résiduelle (餘氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丙. 丙 ne se trouve pas dans 卯."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [庚寅](/guide/pillar-gyeong-in) et le suivant est [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Il est composé de [Métal Yin (辛)](/guide/stem-sin) et de [卯 (Lapin)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 壬辰",
    "summary": "Comment Saju-Link lit le pilier du jour 壬辰 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "壬辰 est le pilier du jour numéro 29 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 壬辰, la tige du jour est 壬 (Eau, Yang) et la branche du jour est 辰 (le Dragon). Dans le cycle de soixante ans, c'est la combinaison numéro 29."
          },
          {
            "p": "Saju-Link appelle « Eau Yang (壬) » une personne dont la tige du jour est 壬, et la ligne affichée par l'écran de résultats est : « Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 辰",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 壬, les tiges que contient 辰 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 壬辰",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 壬"
              ],
              "rows": [
                [
                  "Bois Yin (乙)",
                  "résiduelle (餘氣)",
                  "{hidJinYeo}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Eau Yin (癸)",
                  "intermédiaire (中氣)",
                  "{hidJinJung}",
                  "Rival (劫財)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 壬 comme tige du jour, la Richesse stable est 丁 et l'Autorité est 己."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丁. 丁 ne se trouve pas dans 辰."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 己. 己 ne se trouve pas dans 辰."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [辛卯](/guide/pillar-sin-myo) et le suivant est [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Il est composé de [Eau Yang (壬)](/guide/stem-im) et de [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 癸巳",
    "summary": "Comment Saju-Link lit le pilier du jour 癸巳 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "癸巳 est le pilier du jour numéro 30 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 癸巳, la tige du jour est 癸 (Eau, Yin) et la branche du jour est 巳 (le Serpent). Dans le cycle de soixante ans, c'est la combinaison numéro 30."
          },
          {
            "p": "Saju-Link appelle « Eau Yin (癸) » une personne dont la tige du jour est 癸, et la ligne affichée par l'écran de résultats est : « La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 巳",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 癸, les tiges que contient 巳 sont les suivantes. La tige principale (丙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 癸巳",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 癸"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSaYeo}",
                  "Autorité (正官)"
                ],
                [
                  "Métal Yang (庚)",
                  "intermédiaire (中氣)",
                  "{hidSaJung}",
                  "Bienveillance (正印)"
                ],
                [
                  "Feu Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Richesse stable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 癸 comme tige du jour, la Richesse stable est 丙 et l'Autorité est 戊."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丙. 丙 se trouve dans 巳 (principale (本氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 戊. 戊 se trouve dans 巳 (résiduelle (餘氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [壬辰](/guide/pillar-im-jin) et le suivant est [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Il est composé de [Eau Yin (癸)](/guide/stem-gye) et de [巳 (Serpent)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 甲午",
    "summary": "Comment Saju-Link lit le pilier du jour 甲午 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "甲午 est le pilier du jour numéro 31 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 甲午, la tige du jour est 甲 (Bois, Yang) et la branche du jour est 午 (le Cheval). Dans le cycle de soixante ans, c'est la combinaison numéro 31."
          },
          {
            "p": "Saju-Link appelle « Bois Yang (甲) » une personne dont la tige du jour est 甲, et la ligne affichée par l'écran de résultats est : « Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 午",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 甲, les tiges que contient 午 sont les suivantes. La tige principale (丁) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 甲午",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 甲"
              ],
              "rows": [
                [
                  "Feu Yang (丙)",
                  "résiduelle (餘氣)",
                  "{hidOYeo}",
                  "Expression (食神)"
                ],
                [
                  "Terre Yin (己)",
                  "intermédiaire (中氣)",
                  "{hidOJung}",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Perturbateur (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 甲 comme tige du jour, la Richesse stable est 己 et l'Autorité est 辛."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 己. 己 se trouve dans 午 (intermédiaire (中氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 辛. 辛 ne se trouve pas dans 午."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [癸巳](/guide/pillar-gye-sa) et le suivant est [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Il est composé de [Bois Yang (甲)](/guide/stem-gap) et de [午 (Cheval)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 乙未",
    "summary": "Comment Saju-Link lit le pilier du jour 乙未 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "乙未 est le pilier du jour numéro 32 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 乙未, la tige du jour est 乙 (Bois, Yin) et la branche du jour est 未 (le Mouton). Dans le cycle de soixante ans, c'est la combinaison numéro 32."
          },
          {
            "p": "Saju-Link appelle « Bois Yin (乙) » une personne dont la tige du jour est 乙, et la ligne affichée par l'écran de résultats est : « Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 未",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 乙, les tiges que contient 未 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 乙未",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 乙"
              ],
              "rows": [
                [
                  "Feu Yin (丁)",
                  "résiduelle (餘氣)",
                  "{hidMiYeo}",
                  "Expression (食神)"
                ],
                [
                  "Bois Yin (乙)",
                  "intermédiaire (中氣)",
                  "{hidMiJung}",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 乙 comme tige du jour, la Richesse stable est 戊 et l'Autorité est 庚."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 戊. 戊 ne se trouve pas dans 未."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 庚. 庚 ne se trouve pas dans 未."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [甲午](/guide/pillar-gap-o) et le suivant est [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Il est composé de [Bois Yin (乙)](/guide/stem-eul) et de [未 (Mouton)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丙申",
    "summary": "Comment Saju-Link lit le pilier du jour 丙申 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丙申 est le pilier du jour numéro 33 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丙申, la tige du jour est 丙 (Feu, Yang) et la branche du jour est 申 (le Singe). Dans le cycle de soixante ans, c'est la combinaison numéro 33."
          },
          {
            "p": "Saju-Link appelle « Feu Yang (丙) » une personne dont la tige du jour est 丙, et la ligne affichée par l'écran de résultats est : « Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 申",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丙, les tiges que contient 申 sont les suivantes. La tige principale (庚) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丙申",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丙"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSinYeo}",
                  "Expression (食神)"
                ],
                [
                  "Eau Yang (壬)",
                  "intermédiaire (中氣)",
                  "{hidSinJung}",
                  "Défi (偏官)"
                ],
                [
                  "Métal Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丙 comme tige du jour, la Richesse stable est 辛 et l'Autorité est 癸."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 辛. 辛 ne se trouve pas dans 申."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 癸. 癸 ne se trouve pas dans 申."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [乙未](/guide/pillar-eul-mi) et le suivant est [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Il est composé de [Feu Yang (丙)](/guide/stem-byeong) et de [申 (Singe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丁酉",
    "summary": "Comment Saju-Link lit le pilier du jour 丁酉 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丁酉 est le pilier du jour numéro 34 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丁酉, la tige du jour est 丁 (Feu, Yin) et la branche du jour est 酉 (le Coq). Dans le cycle de soixante ans, c'est la combinaison numéro 34."
          },
          {
            "p": "Saju-Link appelle « Feu Yin (丁) » une personne dont la tige du jour est 丁, et la ligne affichée par l'écran de résultats est : « La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 酉",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丁, les tiges que contient 酉 sont les suivantes. La tige principale (辛) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丁酉",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丁"
              ],
              "rows": [
                [
                  "Métal Yang (庚)",
                  "résiduelle (餘氣)",
                  "{hidYuYeo}",
                  "Richesse stable (正財)"
                ],
                [
                  "Métal Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丁 comme tige du jour, la Richesse stable est 庚 et l'Autorité est 壬."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 庚. 庚 se trouve dans 酉 (résiduelle (餘氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 壬. 壬 ne se trouve pas dans 酉."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丙申](/guide/pillar-byeong-sin) et le suivant est [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Il est composé de [Feu Yin (丁)](/guide/stem-jeong) et de [酉 (Coq)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 戊戌",
    "summary": "Comment Saju-Link lit le pilier du jour 戊戌 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "戊戌 est le pilier du jour numéro 35 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 戊戌, la tige du jour est 戊 (Terre, Yang) et la branche du jour est 戌 (le Chien). Dans le cycle de soixante ans, c'est la combinaison numéro 35."
          },
          {
            "p": "Saju-Link appelle « Terre Yang (戊) » une personne dont la tige du jour est 戊, et la ligne affichée par l'écran de résultats est : « La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 戌",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 戊, les tiges que contient 戌 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 戊戌",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 戊"
              ],
              "rows": [
                [
                  "Métal Yin (辛)",
                  "résiduelle (餘氣)",
                  "{hidSulYeo}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yin (丁)",
                  "intermédiaire (中氣)",
                  "{hidSulJung}",
                  "Bienveillance (正印)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 戊 comme tige du jour, la Richesse stable est 癸 et l'Autorité est 乙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 癸. 癸 ne se trouve pas dans 戌."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 乙. 乙 ne se trouve pas dans 戌."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丁酉](/guide/pillar-jeong-yu) et le suivant est [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Il est composé de [Terre Yang (戊)](/guide/stem-mu) et de [戌 (Chien)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 己亥",
    "summary": "Comment Saju-Link lit le pilier du jour 己亥 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "己亥 est le pilier du jour numéro 36 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 己亥, la tige du jour est 己 (Terre, Yin) et la branche du jour est 亥 (le Cochon). Dans le cycle de soixante ans, c'est la combinaison numéro 36."
          },
          {
            "p": "Saju-Link appelle « Terre Yin (己) » une personne dont la tige du jour est 己, et la ligne affichée par l'écran de résultats est : « La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 亥",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 己, les tiges que contient 亥 sont les suivantes. La tige principale (壬) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 己亥",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 己"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidHaeYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Bois Yang (甲)",
                  "intermédiaire (中氣)",
                  "{hidHaeJung}",
                  "Autorité (正官)"
                ],
                [
                  "Eau Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Richesse stable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 己 comme tige du jour, la Richesse stable est 壬 et l'Autorité est 甲."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 壬. 壬 se trouve dans 亥 (principale (本氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 甲. 甲 se trouve dans 亥 (intermédiaire (中氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [戊戌](/guide/pillar-mu-sul) et le suivant est [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Il est composé de [Terre Yin (己)](/guide/stem-gi) et de [亥 (Cochon)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 庚子",
    "summary": "Comment Saju-Link lit le pilier du jour 庚子 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "庚子 est le pilier du jour numéro 37 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 庚子, la tige du jour est 庚 (Métal, Yang) et la branche du jour est 子 (le Rat). Dans le cycle de soixante ans, c'est la combinaison numéro 37."
          },
          {
            "p": "Saju-Link appelle « Métal Yang (庚) » une personne dont la tige du jour est 庚, et la ligne affichée par l'écran de résultats est : « Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 子",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 庚, les tiges que contient 子 sont les suivantes. La tige principale (癸) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 庚子",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 庚"
              ],
              "rows": [
                [
                  "Eau Yang (壬)",
                  "résiduelle (餘氣)",
                  "{hidJaYeo}",
                  "Expression (食神)"
                ],
                [
                  "Eau Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Perturbateur (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 庚 comme tige du jour, la Richesse stable est 乙 et l'Autorité est 丁."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 乙. 乙 ne se trouve pas dans 子."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丁. 丁 ne se trouve pas dans 子."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [己亥](/guide/pillar-gi-hae) et le suivant est [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Il est composé de [Métal Yang (庚)](/guide/stem-gyeong) et de [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 辛丑",
    "summary": "Comment Saju-Link lit le pilier du jour 辛丑 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "辛丑 est le pilier du jour numéro 38 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 辛丑, la tige du jour est 辛 (Métal, Yin) et la branche du jour est 丑 (le Bœuf). Dans le cycle de soixante ans, c'est la combinaison numéro 38."
          },
          {
            "p": "Saju-Link appelle « Métal Yin (辛) » une personne dont la tige du jour est 辛, et la ligne affichée par l'écran de résultats est : « Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 丑",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 辛, les tiges que contient 丑 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 辛丑",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 辛"
              ],
              "rows": [
                [
                  "Eau Yin (癸)",
                  "résiduelle (餘氣)",
                  "{hidChukYeo}",
                  "Expression (食神)"
                ],
                [
                  "Métal Yin (辛)",
                  "intermédiaire (中氣)",
                  "{hidChukJung}",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 辛 comme tige du jour, la Richesse stable est 甲 et l'Autorité est 丙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 甲. 甲 ne se trouve pas dans 丑."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丙. 丙 ne se trouve pas dans 丑."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [庚子](/guide/pillar-gyeong-ja) et le suivant est [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Il est composé de [Métal Yin (辛)](/guide/stem-sin) et de [丑 (Bœuf)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 壬寅",
    "summary": "Comment Saju-Link lit le pilier du jour 壬寅 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "壬寅 est le pilier du jour numéro 39 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 壬寅, la tige du jour est 壬 (Eau, Yang) et la branche du jour est 寅 (le Tigre). Dans le cycle de soixante ans, c'est la combinaison numéro 39."
          },
          {
            "p": "Saju-Link appelle « Eau Yang (壬) » une personne dont la tige du jour est 壬, et la ligne affichée par l'écran de résultats est : « Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 寅",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 壬, les tiges que contient 寅 sont les suivantes. La tige principale (甲) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 壬寅",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 壬"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidInYeo}",
                  "Défi (偏官)"
                ],
                [
                  "Feu Yang (丙)",
                  "intermédiaire (中氣)",
                  "{hidInJung}",
                  "Aubaine (偏財)"
                ],
                [
                  "Bois Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 壬 comme tige du jour, la Richesse stable est 丁 et l'Autorité est 己."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丁. 丁 ne se trouve pas dans 寅."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 己. 己 ne se trouve pas dans 寅."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [辛丑](/guide/pillar-sin-chuk) et le suivant est [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Il est composé de [Eau Yang (壬)](/guide/stem-im) et de [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 癸卯",
    "summary": "Comment Saju-Link lit le pilier du jour 癸卯 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "癸卯 est le pilier du jour numéro 40 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 癸卯, la tige du jour est 癸 (Eau, Yin) et la branche du jour est 卯 (le Lapin). Dans le cycle de soixante ans, c'est la combinaison numéro 40."
          },
          {
            "p": "Saju-Link appelle « Eau Yin (癸) » une personne dont la tige du jour est 癸, et la ligne affichée par l'écran de résultats est : « La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 卯",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 癸, les tiges que contient 卯 sont les suivantes. La tige principale (乙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 癸卯",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 癸"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "résiduelle (餘氣)",
                  "{hidMyoYeo}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Bois Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 癸 comme tige du jour, la Richesse stable est 丙 et l'Autorité est 戊."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丙. 丙 ne se trouve pas dans 卯."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 戊. 戊 ne se trouve pas dans 卯."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [壬寅](/guide/pillar-im-in) et le suivant est [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Il est composé de [Eau Yin (癸)](/guide/stem-gye) et de [卯 (Lapin)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 甲辰",
    "summary": "Comment Saju-Link lit le pilier du jour 甲辰 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "甲辰 est le pilier du jour numéro 41 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 甲辰, la tige du jour est 甲 (Bois, Yang) et la branche du jour est 辰 (le Dragon). Dans le cycle de soixante ans, c'est la combinaison numéro 41."
          },
          {
            "p": "Saju-Link appelle « Bois Yang (甲) » une personne dont la tige du jour est 甲, et la ligne affichée par l'écran de résultats est : « Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 辰",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 甲, les tiges que contient 辰 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 甲辰",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 甲"
              ],
              "rows": [
                [
                  "Bois Yin (乙)",
                  "résiduelle (餘氣)",
                  "{hidJinYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Eau Yin (癸)",
                  "intermédiaire (中氣)",
                  "{hidJinJung}",
                  "Bienveillance (正印)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Aubaine (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 甲 comme tige du jour, la Richesse stable est 己 et l'Autorité est 辛."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 己. 己 ne se trouve pas dans 辰."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 辛. 辛 ne se trouve pas dans 辰."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [癸卯](/guide/pillar-gye-myo) et le suivant est [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Il est composé de [Bois Yang (甲)](/guide/stem-gap) et de [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 乙巳",
    "summary": "Comment Saju-Link lit le pilier du jour 乙巳 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "乙巳 est le pilier du jour numéro 42 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 乙巳, la tige du jour est 乙 (Bois, Yin) et la branche du jour est 巳 (le Serpent). Dans le cycle de soixante ans, c'est la combinaison numéro 42."
          },
          {
            "p": "Saju-Link appelle « Bois Yin (乙) » une personne dont la tige du jour est 乙, et la ligne affichée par l'écran de résultats est : « Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 巳",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 乙, les tiges que contient 巳 sont les suivantes. La tige principale (丙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 乙巳",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 乙"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSaYeo}",
                  "Richesse stable (正財)"
                ],
                [
                  "Métal Yang (庚)",
                  "intermédiaire (中氣)",
                  "{hidSaJung}",
                  "Autorité (正官)"
                ],
                [
                  "Feu Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Perturbateur (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 乙 comme tige du jour, la Richesse stable est 戊 et l'Autorité est 庚."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 戊. 戊 se trouve dans 巳 (résiduelle (餘氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 庚. 庚 se trouve dans 巳 (intermédiaire (中氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [甲辰](/guide/pillar-gap-jin) et le suivant est [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Il est composé de [Bois Yin (乙)](/guide/stem-eul) et de [巳 (Serpent)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丙午",
    "summary": "Comment Saju-Link lit le pilier du jour 丙午 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丙午 est le pilier du jour numéro 43 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丙午, la tige du jour est 丙 (Feu, Yang) et la branche du jour est 午 (le Cheval). Dans le cycle de soixante ans, c'est la combinaison numéro 43."
          },
          {
            "p": "Saju-Link appelle « Feu Yang (丙) » une personne dont la tige du jour est 丙, et la ligne affichée par l'écran de résultats est : « Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 午",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丙, les tiges que contient 午 sont les suivantes. La tige principale (丁) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丙午",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丙"
              ],
              "rows": [
                [
                  "Feu Yang (丙)",
                  "résiduelle (餘氣)",
                  "{hidOYeo}",
                  "Compagnon (比肩)"
                ],
                [
                  "Terre Yin (己)",
                  "intermédiaire (中氣)",
                  "{hidOJung}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Feu Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丙 comme tige du jour, la Richesse stable est 辛 et l'Autorité est 癸."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 辛. 辛 ne se trouve pas dans 午."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 癸. 癸 ne se trouve pas dans 午."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [乙巳](/guide/pillar-eul-sa) et le suivant est [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Il est composé de [Feu Yang (丙)](/guide/stem-byeong) et de [午 (Cheval)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丁未",
    "summary": "Comment Saju-Link lit le pilier du jour 丁未 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丁未 est le pilier du jour numéro 44 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丁未, la tige du jour est 丁 (Feu, Yin) et la branche du jour est 未 (le Mouton). Dans le cycle de soixante ans, c'est la combinaison numéro 44."
          },
          {
            "p": "Saju-Link appelle « Feu Yin (丁) » une personne dont la tige du jour est 丁, et la ligne affichée par l'écran de résultats est : « La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 未",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丁, les tiges que contient 未 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丁未",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丁"
              ],
              "rows": [
                [
                  "Feu Yin (丁)",
                  "résiduelle (餘氣)",
                  "{hidMiYeo}",
                  "Compagnon (比肩)"
                ],
                [
                  "Bois Yin (乙)",
                  "intermédiaire (中氣)",
                  "{hidMiJung}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丁 comme tige du jour, la Richesse stable est 庚 et l'Autorité est 壬."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 庚. 庚 ne se trouve pas dans 未."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 壬. 壬 ne se trouve pas dans 未."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丙午](/guide/pillar-byeong-o) et le suivant est [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Il est composé de [Feu Yin (丁)](/guide/stem-jeong) et de [未 (Mouton)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 戊申",
    "summary": "Comment Saju-Link lit le pilier du jour 戊申 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "戊申 est le pilier du jour numéro 45 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 戊申, la tige du jour est 戊 (Terre, Yang) et la branche du jour est 申 (le Singe). Dans le cycle de soixante ans, c'est la combinaison numéro 45."
          },
          {
            "p": "Saju-Link appelle « Terre Yang (戊) » une personne dont la tige du jour est 戊, et la ligne affichée par l'écran de résultats est : « La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 申",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 戊, les tiges que contient 申 sont les suivantes. La tige principale (庚) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 戊申",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 戊"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSinYeo}",
                  "Compagnon (比肩)"
                ],
                [
                  "Eau Yang (壬)",
                  "intermédiaire (中氣)",
                  "{hidSinJung}",
                  "Aubaine (偏財)"
                ],
                [
                  "Métal Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 戊 comme tige du jour, la Richesse stable est 癸 et l'Autorité est 乙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 癸. 癸 ne se trouve pas dans 申."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 乙. 乙 ne se trouve pas dans 申."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丁未](/guide/pillar-jeong-mi) et le suivant est [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Il est composé de [Terre Yang (戊)](/guide/stem-mu) et de [申 (Singe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 己酉",
    "summary": "Comment Saju-Link lit le pilier du jour 己酉 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "己酉 est le pilier du jour numéro 46 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 己酉, la tige du jour est 己 (Terre, Yin) et la branche du jour est 酉 (le Coq). Dans le cycle de soixante ans, c'est la combinaison numéro 46."
          },
          {
            "p": "Saju-Link appelle « Terre Yin (己) » une personne dont la tige du jour est 己, et la ligne affichée par l'écran de résultats est : « La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 酉",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 己, les tiges que contient 酉 sont les suivantes. La tige principale (辛) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 己酉",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 己"
              ],
              "rows": [
                [
                  "Métal Yang (庚)",
                  "résiduelle (餘氣)",
                  "{hidYuYeo}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Métal Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 己 comme tige du jour, la Richesse stable est 壬 et l'Autorité est 甲."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 壬. 壬 ne se trouve pas dans 酉."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 甲. 甲 ne se trouve pas dans 酉."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [戊申](/guide/pillar-mu-sin) et le suivant est [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Il est composé de [Terre Yin (己)](/guide/stem-gi) et de [酉 (Coq)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 庚戌",
    "summary": "Comment Saju-Link lit le pilier du jour 庚戌 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "庚戌 est le pilier du jour numéro 47 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 庚戌, la tige du jour est 庚 (Métal, Yang) et la branche du jour est 戌 (le Chien). Dans le cycle de soixante ans, c'est la combinaison numéro 47."
          },
          {
            "p": "Saju-Link appelle « Métal Yang (庚) » une personne dont la tige du jour est 庚, et la ligne affichée par l'écran de résultats est : « Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 戌",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 庚, les tiges que contient 戌 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 庚戌",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 庚"
              ],
              "rows": [
                [
                  "Métal Yin (辛)",
                  "résiduelle (餘氣)",
                  "{hidSulYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Feu Yin (丁)",
                  "intermédiaire (中氣)",
                  "{hidSulJung}",
                  "Autorité (正官)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Soutien atypique (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 庚 comme tige du jour, la Richesse stable est 乙 et l'Autorité est 丁."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 乙. 乙 ne se trouve pas dans 戌."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丁. 丁 se trouve dans 戌 (intermédiaire (中氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [己酉](/guide/pillar-gi-yu) et le suivant est [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Il est composé de [Métal Yang (庚)](/guide/stem-gyeong) et de [戌 (Chien)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 辛亥",
    "summary": "Comment Saju-Link lit le pilier du jour 辛亥 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "辛亥 est le pilier du jour numéro 48 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 辛亥, la tige du jour est 辛 (Métal, Yin) et la branche du jour est 亥 (le Cochon). Dans le cycle de soixante ans, c'est la combinaison numéro 48."
          },
          {
            "p": "Saju-Link appelle « Métal Yin (辛) » une personne dont la tige du jour est 辛, et la ligne affichée par l'écran de résultats est : « Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 亥",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 辛, les tiges que contient 亥 sont les suivantes. La tige principale (壬) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 辛亥",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 辛"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidHaeYeo}",
                  "Bienveillance (正印)"
                ],
                [
                  "Bois Yang (甲)",
                  "intermédiaire (中氣)",
                  "{hidHaeJung}",
                  "Richesse stable (正財)"
                ],
                [
                  "Eau Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Perturbateur (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 辛 comme tige du jour, la Richesse stable est 甲 et l'Autorité est 丙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 甲. 甲 se trouve dans 亥 (intermédiaire (中氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丙. 丙 ne se trouve pas dans 亥."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [庚戌](/guide/pillar-gyeong-sul) et le suivant est [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Il est composé de [Métal Yin (辛)](/guide/stem-sin) et de [亥 (Cochon)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 壬子",
    "summary": "Comment Saju-Link lit le pilier du jour 壬子 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "壬子 est le pilier du jour numéro 49 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 壬子, la tige du jour est 壬 (Eau, Yang) et la branche du jour est 子 (le Rat). Dans le cycle de soixante ans, c'est la combinaison numéro 49."
          },
          {
            "p": "Saju-Link appelle « Eau Yang (壬) » une personne dont la tige du jour est 壬, et la ligne affichée par l'écran de résultats est : « Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 子",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 壬, les tiges que contient 子 sont les suivantes. La tige principale (癸) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 壬子",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 壬"
              ],
              "rows": [
                [
                  "Eau Yang (壬)",
                  "résiduelle (餘氣)",
                  "{hidJaYeo}",
                  "Compagnon (比肩)"
                ],
                [
                  "Eau Yin (癸)",
                  "principale (本氣)",
                  "{hidJaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 壬 comme tige du jour, la Richesse stable est 丁 et l'Autorité est 己."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丁. 丁 ne se trouve pas dans 子."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 己. 己 ne se trouve pas dans 子."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [辛亥](/guide/pillar-sin-hae) et le suivant est [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Il est composé de [Eau Yang (壬)](/guide/stem-im) et de [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 癸丑",
    "summary": "Comment Saju-Link lit le pilier du jour 癸丑 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "癸丑 est le pilier du jour numéro 50 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 癸丑, la tige du jour est 癸 (Eau, Yin) et la branche du jour est 丑 (le Bœuf). Dans le cycle de soixante ans, c'est la combinaison numéro 50."
          },
          {
            "p": "Saju-Link appelle « Eau Yin (癸) » une personne dont la tige du jour est 癸, et la ligne affichée par l'écran de résultats est : « La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 丑",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 癸, les tiges que contient 丑 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 癸丑",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 癸"
              ],
              "rows": [
                [
                  "Eau Yin (癸)",
                  "résiduelle (餘氣)",
                  "{hidChukYeo}",
                  "Compagnon (比肩)"
                ],
                [
                  "Métal Yin (辛)",
                  "intermédiaire (中氣)",
                  "{hidChukJung}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidChukBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 癸 comme tige du jour, la Richesse stable est 丙 et l'Autorité est 戊."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丙. 丙 ne se trouve pas dans 丑."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 戊. 戊 ne se trouve pas dans 丑."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [壬子](/guide/pillar-im-ja) et le suivant est [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Il est composé de [Eau Yin (癸)](/guide/stem-gye) et de [丑 (Bœuf)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 甲寅",
    "summary": "Comment Saju-Link lit le pilier du jour 甲寅 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "甲寅 est le pilier du jour numéro 51 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 甲寅, la tige du jour est 甲 (Bois, Yang) et la branche du jour est 寅 (le Tigre). Dans le cycle de soixante ans, c'est la combinaison numéro 51."
          },
          {
            "p": "Saju-Link appelle « Bois Yang (甲) » une personne dont la tige du jour est 甲, et la ligne affichée par l'écran de résultats est : « Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 寅",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 甲, les tiges que contient 寅 sont les suivantes. La tige principale (甲) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 甲寅",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 甲"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidInYeo}",
                  "Aubaine (偏財)"
                ],
                [
                  "Feu Yang (丙)",
                  "intermédiaire (中氣)",
                  "{hidInJung}",
                  "Expression (食神)"
                ],
                [
                  "Bois Yang (甲)",
                  "principale (本氣)",
                  "{hidInBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 甲 comme tige du jour, la Richesse stable est 己 et l'Autorité est 辛."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 己. 己 ne se trouve pas dans 寅."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 辛. 辛 ne se trouve pas dans 寅."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [癸丑](/guide/pillar-gye-chuk) et le suivant est [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Il est composé de [Bois Yang (甲)](/guide/stem-gap) et de [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 乙卯",
    "summary": "Comment Saju-Link lit le pilier du jour 乙卯 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "乙卯 est le pilier du jour numéro 52 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 乙卯, la tige du jour est 乙 (Bois, Yin) et la branche du jour est 卯 (le Lapin). Dans le cycle de soixante ans, c'est la combinaison numéro 52."
          },
          {
            "p": "Saju-Link appelle « Bois Yin (乙) » une personne dont la tige du jour est 乙, et la ligne affichée par l'écran de résultats est : « Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 卯",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 乙, les tiges que contient 卯 sont les suivantes. La tige principale (乙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 乙卯",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 乙"
              ],
              "rows": [
                [
                  "Bois Yang (甲)",
                  "résiduelle (餘氣)",
                  "{hidMyoYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Bois Yin (乙)",
                  "principale (本氣)",
                  "{hidMyoBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 乙 comme tige du jour, la Richesse stable est 戊 et l'Autorité est 庚."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 戊. 戊 ne se trouve pas dans 卯."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 庚. 庚 ne se trouve pas dans 卯."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [甲寅](/guide/pillar-gap-in) et le suivant est [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Il est composé de [Bois Yin (乙)](/guide/stem-eul) et de [卯 (Lapin)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丙辰",
    "summary": "Comment Saju-Link lit le pilier du jour 丙辰 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丙辰 est le pilier du jour numéro 53 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丙辰, la tige du jour est 丙 (Feu, Yang) et la branche du jour est 辰 (le Dragon). Dans le cycle de soixante ans, c'est la combinaison numéro 53."
          },
          {
            "p": "Saju-Link appelle « Feu Yang (丙) » une personne dont la tige du jour est 丙, et la ligne affichée par l'écran de résultats est : « Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 辰",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丙, les tiges que contient 辰 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丙辰",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丙"
              ],
              "rows": [
                [
                  "Bois Yin (乙)",
                  "résiduelle (餘氣)",
                  "{hidJinYeo}",
                  "Bienveillance (正印)"
                ],
                [
                  "Eau Yin (癸)",
                  "intermédiaire (中氣)",
                  "{hidJinJung}",
                  "Autorité (正官)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidJinBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丙 comme tige du jour, la Richesse stable est 辛 et l'Autorité est 癸."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 辛. 辛 ne se trouve pas dans 辰."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 癸. 癸 se trouve dans 辰 (intermédiaire (中氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [乙卯](/guide/pillar-eul-myo) et le suivant est [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Il est composé de [Feu Yang (丙)](/guide/stem-byeong) et de [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 丁巳",
    "summary": "Comment Saju-Link lit le pilier du jour 丁巳 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "丁巳 est le pilier du jour numéro 54 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 丁巳, la tige du jour est 丁 (Feu, Yin) et la branche du jour est 巳 (le Serpent). Dans le cycle de soixante ans, c'est la combinaison numéro 54."
          },
          {
            "p": "Saju-Link appelle « Feu Yin (丁) » une personne dont la tige du jour est 丁, et la ligne affichée par l'écran de résultats est : « La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 巳",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 丁, les tiges que contient 巳 sont les suivantes. La tige principale (丙) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 丁巳",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 丁"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSaYeo}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Métal Yang (庚)",
                  "intermédiaire (中氣)",
                  "{hidSaJung}",
                  "Richesse stable (正財)"
                ],
                [
                  "Feu Yang (丙)",
                  "principale (本氣)",
                  "{hidSaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 丁 comme tige du jour, la Richesse stable est 庚 et l'Autorité est 壬."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 庚. 庚 se trouve dans 巳 (intermédiaire (中氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 壬. 壬 ne se trouve pas dans 巳."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丙辰](/guide/pillar-byeong-jin) et le suivant est [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Il est composé de [Feu Yin (丁)](/guide/stem-jeong) et de [巳 (Serpent)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 戊午",
    "summary": "Comment Saju-Link lit le pilier du jour 戊午 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "戊午 est le pilier du jour numéro 55 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 戊午, la tige du jour est 戊 (Terre, Yang) et la branche du jour est 午 (le Cheval). Dans le cycle de soixante ans, c'est la combinaison numéro 55."
          },
          {
            "p": "Saju-Link appelle « Terre Yang (戊) » une personne dont la tige du jour est 戊, et la ligne affichée par l'écran de résultats est : « La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 午",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 戊, les tiges que contient 午 sont les suivantes. La tige principale (丁) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 戊午",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 戊"
              ],
              "rows": [
                [
                  "Feu Yang (丙)",
                  "résiduelle (餘氣)",
                  "{hidOYeo}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Terre Yin (己)",
                  "intermédiaire (中氣)",
                  "{hidOJung}",
                  "Rival (劫財)"
                ],
                [
                  "Feu Yin (丁)",
                  "principale (本氣)",
                  "{hidOBon}",
                  "Bienveillance (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 戊 comme tige du jour, la Richesse stable est 癸 et l'Autorité est 乙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 癸. 癸 ne se trouve pas dans 午."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 乙. 乙 ne se trouve pas dans 午."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [丁巳](/guide/pillar-jeong-sa) et le suivant est [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Il est composé de [Terre Yang (戊)](/guide/stem-mu) et de [午 (Cheval)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 己未",
    "summary": "Comment Saju-Link lit le pilier du jour 己未 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "己未 est le pilier du jour numéro 56 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 己未, la tige du jour est 己 (Terre, Yin) et la branche du jour est 未 (le Mouton). Dans le cycle de soixante ans, c'est la combinaison numéro 56."
          },
          {
            "p": "Saju-Link appelle « Terre Yin (己) » une personne dont la tige du jour est 己, et la ligne affichée par l'écran de résultats est : « La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 未",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 己, les tiges que contient 未 sont les suivantes. La tige principale (己) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 己未",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 己"
              ],
              "rows": [
                [
                  "Feu Yin (丁)",
                  "résiduelle (餘氣)",
                  "{hidMiYeo}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Bois Yin (乙)",
                  "intermédiaire (中氣)",
                  "{hidMiJung}",
                  "Défi (偏官)"
                ],
                [
                  "Terre Yin (己)",
                  "principale (本氣)",
                  "{hidMiBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 己 comme tige du jour, la Richesse stable est 壬 et l'Autorité est 甲."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 壬. 壬 ne se trouve pas dans 未."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 甲. 甲 ne se trouve pas dans 未."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [戊午](/guide/pillar-mu-o) et le suivant est [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Il est composé de [Terre Yin (己)](/guide/stem-gi) et de [未 (Mouton)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 庚申",
    "summary": "Comment Saju-Link lit le pilier du jour 庚申 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "庚申 est le pilier du jour numéro 57 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 庚申, la tige du jour est 庚 (Métal, Yang) et la branche du jour est 申 (le Singe). Dans le cycle de soixante ans, c'est la combinaison numéro 57."
          },
          {
            "p": "Saju-Link appelle « Métal Yang (庚) » une personne dont la tige du jour est 庚, et la ligne affichée par l'écran de résultats est : « Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 申",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 庚, les tiges que contient 申 sont les suivantes. La tige principale (庚) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 庚申",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 庚"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidSinYeo}",
                  "Soutien atypique (偏印)"
                ],
                [
                  "Eau Yang (壬)",
                  "intermédiaire (中氣)",
                  "{hidSinJung}",
                  "Expression (食神)"
                ],
                [
                  "Métal Yang (庚)",
                  "principale (本氣)",
                  "{hidSinBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 庚 comme tige du jour, la Richesse stable est 乙 et l'Autorité est 丁."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 乙. 乙 ne se trouve pas dans 申."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丁. 丁 ne se trouve pas dans 申."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [己未](/guide/pillar-gi-mi) et le suivant est [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Il est composé de [Métal Yang (庚)](/guide/stem-gyeong) et de [申 (Singe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 辛酉",
    "summary": "Comment Saju-Link lit le pilier du jour 辛酉 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "辛酉 est le pilier du jour numéro 58 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 辛酉, la tige du jour est 辛 (Métal, Yin) et la branche du jour est 酉 (le Coq). Dans le cycle de soixante ans, c'est la combinaison numéro 58."
          },
          {
            "p": "Saju-Link appelle « Métal Yin (辛) » une personne dont la tige du jour est 辛, et la ligne affichée par l'écran de résultats est : « Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 酉",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 辛, les tiges que contient 酉 sont les suivantes. La tige principale (辛) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 辛酉",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 辛"
              ],
              "rows": [
                [
                  "Métal Yang (庚)",
                  "résiduelle (餘氣)",
                  "{hidYuYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Métal Yin (辛)",
                  "principale (本氣)",
                  "{hidYuBon}",
                  "Compagnon (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 辛 comme tige du jour, la Richesse stable est 甲 et l'Autorité est 丙."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 甲. 甲 ne se trouve pas dans 酉."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 丙. 丙 ne se trouve pas dans 酉."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [庚申](/guide/pillar-gyeong-sin) et le suivant est [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Il est composé de [Métal Yin (辛)](/guide/stem-sin) et de [酉 (Coq)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 壬戌",
    "summary": "Comment Saju-Link lit le pilier du jour 壬戌 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "壬戌 est le pilier du jour numéro 59 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 壬戌, la tige du jour est 壬 (Eau, Yang) et la branche du jour est 戌 (le Chien). Dans le cycle de soixante ans, c'est la combinaison numéro 59."
          },
          {
            "p": "Saju-Link appelle « Eau Yang (壬) » une personne dont la tige du jour est 壬, et la ligne affichée par l'écran de résultats est : « Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 戌",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 壬, les tiges que contient 戌 sont les suivantes. La tige principale (戊) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 壬戌",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 壬"
              ],
              "rows": [
                [
                  "Métal Yin (辛)",
                  "résiduelle (餘氣)",
                  "{hidSulYeo}",
                  "Bienveillance (正印)"
                ],
                [
                  "Feu Yin (丁)",
                  "intermédiaire (中氣)",
                  "{hidSulJung}",
                  "Richesse stable (正財)"
                ],
                [
                  "Terre Yang (戊)",
                  "principale (本氣)",
                  "{hidSulBon}",
                  "Défi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 壬 comme tige du jour, la Richesse stable est 丁 et l'Autorité est 己."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丁. 丁 se trouve dans 戌 (intermédiaire (中氣))."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 己. 己 ne se trouve pas dans 戌."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [辛酉](/guide/pillar-sin-yu) et le suivant est [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Il est composé de [Eau Yang (壬)](/guide/stem-im) et de [戌 (Chien)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Piliers du jour",
    "title": "Le pilier du jour 癸亥",
    "summary": "Comment Saju-Link lit le pilier du jour 癸亥 — ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour — exposé exactement comme le prévoient ses règles de calcul.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "癸亥 est le pilier du jour numéro 60 du cycle de soixante ans",
        "blocks": [
          {
            "p": "Lorsque la combinaison tige-branche du jour de naissance est 癸亥, la tige du jour est 癸 (Eau, Yin) et la branche du jour est 亥 (le Cochon). Dans le cycle de soixante ans, c'est la combinaison numéro 60."
          },
          {
            "p": "Saju-Link appelle « Eau Yin (癸) » une personne dont la tige du jour est 癸, et la ligne affichée par l'écran de résultats est : « La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots. » Cette ligne n'a rien à voir avec la lecture ci-dessous ni avec les scores."
          }
        ]
      },
      {
        "title": "Ce que sont, pour la tige du jour, les tiges contenues dans la branche du jour 亥",
        "blocks": [
          {
            "p": "La branche du jour est la position du conjoint. Lues depuis la tige du jour 癸, les tiges que contient 亥 sont les suivantes. La tige principale (壬) est l'énergie représentative de la branche."
          },
          {
            "table": {
              "caption": "Les tiges cachées de la branche du jour de 癸亥",
              "head": [
                "Tige cachée",
                "Position",
                "Part",
                "Pour la tige du jour 癸"
              ],
              "rows": [
                [
                  "Terre Yang (戊)",
                  "résiduelle (餘氣)",
                  "{hidHaeYeo}",
                  "Autorité (正官)"
                ],
                [
                  "Bois Yang (甲)",
                  "intermédiaire (中氣)",
                  "{hidHaeJung}",
                  "Perturbateur (傷官)"
                ],
                [
                  "Eau Yang (壬)",
                  "principale (本氣)",
                  "{hidHaeBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La position du conjoint et ce pilier du jour",
        "blocks": [
          {
            "p": "Le myeongri traditionnel lit la position du conjoint comme la Richesse stable (正財) pour les hommes et l'Autorité (正官) pour les femmes. Avec 癸 comme tige du jour, la Richesse stable est 丙 et l'Autorité est 戊."
          },
          {
            "p": "Pour les hommes, la position du conjoint (Richesse stable) est 丙. 丙 ne se trouve pas dans 亥."
          },
          {
            "p": "Pour les femmes, la position du conjoint (Autorité) est 戊. 戊 se trouve dans 亥 (résiduelle (餘氣))."
          }
        ]
      },
      {
        "title": "Les piliers du jour voisins et les caractères qui composent celui-ci",
        "blocks": [
          {
            "p": "Dans le cycle de soixante ans, le pilier du jour précédent est [壬戌](/guide/pillar-im-sul) et le suivant est [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Il est composé de [Eau Yin (癸)](/guide/stem-gye) et de [亥 (Cochon)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce que ce guide ne dit pas",
        "blocks": [
          {
            "ul": [
              "Un seul pilier du jour ne détermine ni une personne ni une relation. Un saju se lit à partir des relations entre les huit caractères des quatre piliers.",
              "La lecture de la position du conjoint reprend une règle du myeongri traditionnel, et si vous n'indiquez pas votre sexe, cette position n'est pas lue."
            ]
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Les Dix Dieux",
    "title": "Les Dix Dieux — Les Dix Positions Dans Mon Saju",
    "summary": "Basé sur le pilier du jour, les caractères restants sont divisés en dix noms. Il discute des raisons de distinguer entre la richesse régulière et la richesse secondaire, même si elles sont du même élément de richesse.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Le pilier du jour est la personne elle-même",
        "blocks": [
          {
            "p": "Parmi les huit caractères du saju, le **pilier du jour** (la tige céleste du jour de naissance) fait référence à la personne elle-même. Les sept caractères restants sont lus comme l'environnement dans lequel ce pilier du jour existe."
          },
          {
            "p": "**Les Dix Dieux** (十神) sont les dix divisions de la façon dont le pilier du jour perçoit les autres caractères. L'énergie qui me nourrit est Ressource, l'énergie qui est comme moi est Compagnon, l'énergie que je donne naissance est Nourriture et Richesse, l'énergie qui me supprime est Fonction Officielle, et l'énergie que je supprime est Richesse — ces cinq catégories sont encore divisées en yin et yang, formant dix."
          }
        ]
      },
      {
        "title": "Ce que les sept caractères restants signifient pour moi",
        "blocks": [
          {
            "p": "Une fois le pilier du jour déterminé, les caractères restants dans le tableau natal reçoivent chacun un nom. L'énergie qui me donne naissance, l'énergie qui est comme moi, l'énergie que je donne naissance, l'énergie qui me supprime, et l'énergie que je supprime — ces cinq branches sont encore divisées en **dix** à travers le yin et le yang. C'est les Dix Dieux."
          },
          {
            "p": "Ainsi, les Dix Dieux ne font pas référence aux relations avec les autres mais à **les positions en moi-même**. Quelles positions sont épaisses ou fines indiquent mes tendances et ma façon de vivre."
          }
        ]
      },
      {
        "title": "Pourquoi nous lisons cela à travers les Dix Dieux plutôt que trois relations élémentaires",
        "blocks": [
          {
            "p": "Il existe également une méthode pour examiner la relation du jour stem uniquement à travers les trois aspects des cinq éléments (soutien, même, et opposé). C'est simple, mais **le yin et le yang disparaissent.** 甲 (bois yang) et 乙 (bois yin) deviennent identiques à 甲, qui représente la 'similarité', et la relation opposée est regroupée en un seul score sans direction ni yin ni yang."
          },
          {
            "p": "La position du conjoint doit être évaluée selon les Dix Dieux en termes de yin et yang. Si les éléments vus à travers les cinq éléments sont mélangés avec ceux vus à travers les Dix Dieux dans un même moteur, il y aura deux standards pour les deux mêmes caractères. Par conséquent, nous unifions cela sous les Dix Dieux."
          }
        ]
      },
      {
        "title": "La position du conjoint est la Richesse Propre et l'Officier Propre",
        "blocks": [
          {
            "p": "La divination traditionnelle considère la position du conjoint différemment selon le sexe. Pour les hommes, c'est **Richesse Propre (正財)**, et pour les femmes, c'est **Officier Propre (正官)**. Même s'ils sont le même élément de richesse, seule la Richesse Propre qui est désalignée en yin et yang est considérée comme la position du conjoint, tandis que la Richesse Indirecte est lue non pas comme un conjoint mais en termes d'activité et de richesse."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si vous ne spécifiez pas le sexe, cette position est omise",
        "blocks": [
          {
            "p": "C'est parce qu'il ne peut pas être déterminé quel côté, Richesse Propre ou Officier Propre, considérer comme la position du conjoint. Au lieu de deviner pour remplir une valeur manquante, nous lisons les éléments restants sans celui-ci."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "La fortune d'aujourd'hui",
    "title": "Comment se présente la fortune d'aujourd'hui ?",
    "summary": "Le jour stem d'aujourd'hui est comparé au tableau natal pour obtenir un score. Treize relations de suppression et de soutien et sept relations de branches terrestres, ainsi que tous les vingt éléments et leurs ajouts et soustractions respectifs, sont entièrement divulgués.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Aujourd'hui, nous l'établissons également de la même manière que les huit caractères",
        "blocks": [
          {
            "p": "Chaque jour a son propre **pilier du jour (日辰)**. En utilisant la même méthode que pour établir le pilier du jour du tableau natal, aujourd'hui a également un heavenly stem et un earthly branch attachés. La fortune d'aujourd'hui concerne la comparaison de ces deux caractères avec le tableau natal."
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
            "p": "C'est la position la plus significative. Nous vérifions si l'énergie d'aujourd'hui correspond à l' 'énergie nécessaire en ce moment' déterminée par [l'élément d'équilibre](/guide/yongsin)."
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
        "title": "Ne considérez pas l'élément adverse comme 'tout sauf l'élément d'équilibre'",
        "blocks": [
          {
            "p": "Si vous faites cela, à la fois l'énergie qui génère l'élément d'équilibre et l'énergie qui supprime l'élément d'équilibre deviennent mauvaises, et les deux dernières lignes du tableau ci-dessus deviennent indistinguables. Seule l'énergie qui **pousse plus fort dans la direction opposée** selon le sens de suppression et de soutien est considérée comme l'élément adverse."
          }
        ]
      },
      {
        "title": "② La relation entre le heavenly stem d'aujourd'hui et le jour stem",
        "blocks": [
          {
            "p": "Les relations de soutien et d'opposition des cinq éléments sont appliquées directement entre le jour stem et le heavenly stem d'aujourd'hui."
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
        "title": "③ La branche terrestre d'aujourd'hui rencontre les branches terrestres du tableau natal",
        "blocks": [
          {
            "p": "La branche terrestre d'aujourd'hui est comparée aux branches terrestres du tableau natal. Le tableau des relations lui-même se trouve dans [les relations de branches terrestres](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relation",
                "Ajout/Soustraction"
              ],
              "rows": [
                [
                  "triade (三合)",
                  "{branchSamhap}"
                ],
                [
                  "six harmonie (六合)",
                  "{branchYukhap}"
                ],
                [
                  "demi triade (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discord silencieux (怨嗔)",
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
            "p": "Lorsque plusieurs piliers sont présents, plusieurs relations se forment. Toutes sont ajoutées, mais cet élément entier est limité à **±{branchMaxAbs} points** — cela permet d'éviter qu'une seule relation de branche terrestre ne détermine l'ensemble de la journée."
          }
        ]
      },
      {
        "title": "④ Correction Basée sur la Force",
        "blocks": [
          {
            "p": "Même avec la même énergie, la signification diffère pour un pilier de jour fort et un pilier de jour faible. Par conséquent, nous faisons un dernier ajustement."
          },
          {
            "table": {
              "head": [
                "Situation",
                "Ajustement"
              ],
              "rows": [
                [
                  "Pilier de jour faible mais aujourd'hui les soutient",
                  "{weakTodayHelps}"
                ],
                [
                  "Pilier de jour fort mais aujourd'hui réduit adéquatement le fardeau",
                  "{strongTodayDrains}"
                ],
                [
                  "Pilier de jour fort mais aujourd'hui renforce le soutien",
                  "{strongTodayHelps}"
                ],
                [
                  "Pilier de jour faible mais aujourd'hui ajoute au fardeau",
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
            "p": "Les quatre domaines de la richesse, de l'amour, de la carrière et de la santé héritent de {overallShare} du score total, tandis que le reste est divisé selon les Dix Dieux et les relations de branches terrestres pertinentes à ces domaines. Par conséquent, même si le score total est le même, les chiffres par domaine diffèrent d'une personne à l'autre."
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
    "title": "Relations des Branches Terrestres — Combinaison, Conflit et Discord",
    "summary": "Ceci est un tableau des relations montrant comment le pilier de jour d'aujourd'hui interagit avec le tableau natal. Il révèle ce que chaque combinaison, conflit et discord est et combien de points ils ont.",
    "backLabel": "Base de Calcul",
    "sections": [
      {
        "title": "Les Branches Terrestres sont Douze Caractères",
        "blocks": [
          {
            "p": "Les douze branches terrestres (十二支) sont 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Les signes du zodiaque communément connus — Rat, Bœuf, Tigre, Lapin, Dragon, Serpent, Cheval, Chèvre, Singe, Coq, Chien, Cochon — sont chacun attachés à l'un de ces douze caractères."
          },
          {
            "figure": "branch-wheel",
            "caption": "Lorsque les douze caractères sont disposés en cercle, les relations sont clairement visibles. Conflit (沖) fait toujours face à l'autre, tandis que six harmonies et discordes sont des paires plus proches. Ces lignes ne sont pas écrites dans le texte mais sont directement dérivées des règles de calcul.",
            "labels": {
              "alt": "Un diagramme montrant les douze branches terrestres disposées en cercle avec des lignes reliant six harmonies, conflits et discordes.",
              "yukhap": "six harmonies",
              "chung": "Conflit",
              "wonjin": "Discord",
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
            "p": "Dans le saju, chacun des quatre piliers a une branche terrestre. **La lecture d'aujourd'hui** est déterminée en faisant correspondre **la branche du jour** avec les quatre branches du tableau natal en utilisant le tableau de relations ci-dessous."
          }
        ]
      },
      {
        "title": "Tableau de Relations Globales",
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
                  "triade (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Lorsque les trois caractères se réunissent, ils forment une formation élémentaire complète (局). C'est considéré comme la combinaison la plus forte.",
                  "{scoreSamhap}"
                ],
                [
                  "six harmonies (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Paires qui s'attirent. C'est la combinaison la plus courante car elle ne comprend que deux caractères.",
                  "{scoreYukhap}"
                ],
                [
                  "demi-triade (半合)",
                  "Deux caractères qui incluent l'un des caractères royaux (子·酉·午·卯) de la triade",
                  "Une demi-triade qui inclut un caractère central à la formation. Elle ne forme pas une formation élémentaire complète avec seulement deux caractères, ce qui la rend inférieure à la triade.",
                  "{scoreBanhap}"
                ],
                [
                  "Même Branche",
                  "子子 · 丑丑 …",
                  "Caractères qui sont identiques. Cela signifie qu'ils se ressemblent mais n'implique pas d'attraction, donc ils sont placés au milieu.",
                  "{scoreSame}"
                ],
                [
                  "Pas de Relation",
                  "Paires qui n'appartiennent à aucune catégorie ci-dessus ou ci-dessous",
                  "Combinaisons qui n'ont pas de relation spéciale. Cela sert de point de référence.",
                  "{scoreNeutral}"
                ],
                [
                  "discord calme (怨嗔)",
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
        "title": "triades et demi-triades",
        "blocks": [
          {
            "p": "Une triade nécessite la présence de tous les trois caractères. Étant donné qu'il y a quatre branches terrestres dans le tableau natal, il est possible que la branche du jour se combine avec elles, résultant en une triade — à ce moment-là, elle reçoit un score de {scoreSamhap}. Si seulement deux caractères sont impliqués, c'est une demi-triade."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les demi-triades nécessitent des Caractères Royaux pour être Reconnaissables",
        "blocks": [
          {
            "p": "Il existe également une méthode qui compte comme une demi-triade si les deux caractères appartiennent au même groupe de triade. Cela permet à des combinaisons comme 申辰, qui sont difficiles à appeler une combinaison, de recevoir des scores élevés. Par conséquent, ce service reconnaît une demi-triade uniquement lorsqu'elle inclut des caractères royaux (子·酉·午·卯), et ne considère pas des combinaisons comme 申辰·巳丑·寅戌·亥未 comme valides."
          }
        ]
      },
      {
        "title": "Raison de la Séparation du discord calme",
        "blocks": [
          {
            "p": "Les six paires de discord calme sont aussi fréquentes que les conflits. Si l'on ne comptait que les combinaisons et les conflits, ces six paires seraient toutes enterrées sous le score de pas de relation de {scoreNeutral}, donc elles sont placées séparément."
          },
          {
            "p": "Si les conflits sont des paires qui se heurtent directement et sont affichées de manière proéminente, le discord calme est subtilement désaligné. Par conséquent, il est placé à un score de {scoreWonjin}, qui est plus élevé que les conflits ({scoreChung}) mais définitivement inférieur à pas de relation ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Des scores sont également attribués pour les conflits",
        "blocks": [
          {
            "p": "Le score de conflit le plus bas est {scoreChung}. Il est intentionnel de ne pas donner une valeur proche de 0. Dans le myeongri traditionnel, un conflit n'est pas une 'fin' mais une 'collision', et donner un score proche du bas signifierait que le service fait une déclaration définitive sur la relation."
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
            "p": "Le saju se compose de quatre piliers : année, mois, jour et heure, chaque pilier ayant un tige céleste et une branche terrestre. Parmi eux, la **branche terrestre de l'année**, ou branche de l'année, est l'animal que nous appelons le signe du zodiaque."
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
            "p": "Le moment où le signe du zodiaque change n'est ni le 1er janvier du calendrier solaire ni le Nouvel An lunaire. La norme pour changer d'année dans le saju est **Ipchun**. Par conséquent, ceux nés début janvier ou février peuvent avoir un signe du zodiaque différent de celui indiqué par le calendrier."
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
            "p": "Parmi les huit caractères, celui correspondant au signe du zodiaque est **une branche de l'année**. Les sept autres caractères — en particulier la tige du jour qui se réfère à soi-même — n'ont aucun rapport avec le signe du zodiaque."
          },
          {
            "p": "Les personnes nées la même année partagent toutes le même signe du zodiaque. Par conséquent, ce qui peut être connu à partir du signe du zodiaque est seulement autant que l'un des huit caractères. C'est la raison pour laquelle ce service ne **traite pas le signe du zodiaque séparément ou de manière significative** — la branche de l'année est calculée pour la force et aujourd'hui le pilier du jour du jugement du jour tout comme n'importe quelle autre branche terrestre."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pourtant, la raison pour laquelle nous montrons le signe du zodiaque.",
        "blocks": [
          {
            "p": "C'est la seule position où le sens est compris même si vous ne connaissez pas la terminologie du myeongri. Si le signe du zodiaque est noté aux côtés de la branche de l'année sur l'écran du thème natal, cela devient un indice pour lire les sept autres caractères."
          }
        ]
      },
      {
        "title": "La branche de l'année reste la même même si vous ne connaissez pas l'heure de naissance.",
        "blocks": [
          {
            "p": "Si vous n'entrez pas l'heure, le pilier horaire est omis et la force des the five elements (cinq éléments) change. Cependant, **la branche de l'année reste la même** — elle est déterminée uniquement par l'année de votre naissance."
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
    "summary": "L'heure standard et la position réelle du soleil diffèrent. Cela explique pourquoi l'heure doit être ajustée en fonction de la longitude du lieu de naissance pour garantir que le pilier de l'heure est correct.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "L'heure sur l'horloge et l'heure solaire sont différentes",
        "blocks": [
          {
            "p": "Le pilier horaire (時柱) du saju est déterminé par la position du soleil. Cependant, l'horloge que nous voyons utilise un temps standard unique pour tout le pays, ce qui désaligne avec la position réelle du soleil."
          },
          {
            "p": "Le temps standard de la Corée est basé sur la longitude 135° est. La longitude de Séoul est d'environ 127°, donc elle est approximativement à 8° à l'ouest, ce qui fait que le soleil atteint son zénith plus tard — quand il est midi à l'horloge, le soleil à Séoul est encore avant son zénith. Cette différence est d'environ **32 minutes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutes changent le pilier horaire d'un cran",
        "blocks": [
          {
            "p": "Le temps dans le saju est divisé en unités de deux heures. Ceux nés près de la frontière auront leur pilier horaire complètement changé par une différence de 32 minutes — des ajustements sont nécessaires précisément à cause de ceux qui se trouvent juste sur cette frontière."
          }
        ]
      },
      {
        "title": "La raison de demander où vous êtes né",
        "blocks": [
          {
            "p": "Si la longitude est différente, le montant de l'ajustement variera également. Si vous appliquez l'ajustement basé sur Séoul à quelqu'un né à l'étranger, le pilier horaire sera significativement désaligné. Par conséquent, l'écran de saisie vous demande de sélectionner votre lieu de naissance, et les calculs sont effectués en fonction de la longitude et du temps standard de cette ville. Actuellement, il y a {cityCount} lieux dans la liste."
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
            "p": "Saju-Link ne fixe pas le méridien standard comme une valeur constante, mais calcule le temps standard réel utilisé à ce moment-là basé sur les informations de **zone horaire IANA** du lieu de naissance. L'heure d'été et les temps standards passés sont automatiquement reflétés."
          }
        ]
      },
      {
        "title": "Naissance juste après minuit prend également en compte la date",
        "blocks": [
          {
            "p": "Puisque l'ajustement est de -32 minutes, ceux nés entre 00:00 et 00:32 à l'horloge seront à **23h la veille** en temps solaire vrai. Si seule l'heure est ajustée en arrière et que la date reste la même, cela écrira le pilier de jour (日柱) comme \"23h la veille.\""
          },
          {
            "p": "Saju-Link ajustera également la date dans ce cas. Le caractère au-dessus du pilier de jour fait référence au tige de jour (日干), qui indique moi-même, donc si cela est désaligné, presque tous les éléments de l'interprétation seront désalignés."
          }
        ]
      },
      {
        "title": "Vous n'avez pas besoin de connaître l'heure",
        "blocks": [
          {
            "p": "L'heure de naissance est optionnelle. Si vous ne la connaissez pas, les calculs seront effectués sans le pilier horaire, et ce fait sera affiché sur l'écran des résultats. Puisque cela signifie que deux des huit caractères manquent, cela affectera l'évaluation de la force et de la faiblesse des cinq éléments, donc si vous le savez, il est plus précis de l'inclure."
          },
          {
            "p": "Le branchement de l'année (l'animal du zodiaque) est toujours le même, peu importe l'heure — [car nous ne regardons que le branchement de l'année](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informations personnelles",
    "title": "Une méthode qui ne stocke pas les informations saisies",
    "summary": "Cela clarifie ce que cela signifie techniquement que la date de naissance n'est enregistrée nulle part et ce qui est contenu dans le lien de résultat.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "Il n'y a pas d'enregistrement d'adhésion",
        "blocks": [
          {
            "p": "Saju-Link ne crée pas de comptes. Il ne collecte pas de noms, d'emails ou de numéros de téléphone. La seule information collectée est la date de naissance et (optionnellement) l'heure de naissance, le lieu de naissance et le sexe, et cette information ne reste pas après que le calcul est terminé."
          },
          {
            "p": "Il y a un champ pour entrer un titre à afficher sur l'écran des résultats, mais cela est **uniquement à des fins d'affichage** et n'est pas utilisé dans les calculs. Vous n'avez pas besoin d'entrer votre vrai nom."
          }
        ]
      },
      {
        "title": "Que contient le lien de résultat ?",
        "blocks": [
          {
            "p": "Une fois le calcul terminé, l'adresse ressemble à ceci."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ce qui suit **#** est les valeurs d'entrée. Cette partie est appelée le **fragment**, qui est une section que **le navigateur n'envoie pas au serveur**. C'est un comportement web standard et non une règle que nous avons créée — il a été conçu à l'origine pour indiquer une position dans un document, donc le serveur n'a pas besoin de le voir."
          },
          {
            "p": "En d'autres termes, lorsque vous ouvrez le lien de résultat, le navigateur lit cette valeur pour demander le calcul, et notre serveur reçoit les valeurs à utiliser pour le calcul, renvoie la réponse, puis l'oublie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Veuillez faire attention lorsque vous envoyez le lien à d'autres",
        "blocks": [
          {
            "p": "Le fait qu'il ne soit pas stocké sur le serveur ne signifie pas que le lien est sûr. Le lien de résultat contient les dates de naissance de deux individus, donc la personne qui reçoit ce lien peut voir le même résultat."
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
            "p": "Les enregistrements minimaux nécessaires au fonctionnement sont conservés — un compteur pour empêcher la même personne d'envoyer trop de demandes en peu de temps. Cela n'inclut pas la date de naissance, et l'IP d'accès n'est pas conservée. Une seule valeur hachée avec la date est comptée, et cette valeur change lorsque le jour change."
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
              "**Rafraîchir ramènera la porte de publicité.** Cela est dû au fait qu'il n'y a pas d'endroit pour laisser un historique de visualisation."
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
            "p": "Pour plus de détails, veuillez vous référer à notre [Politique de Confidentialité](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produits payants",
    "title": "Ce qui est inclus dans le rapport payant",
    "summary": "Il clarifie ce qui a été ajouté au PDF tout en gardant l'écran inchangé. Les valeurs et contenus sont extraits des paramètres réels du produit.",
    "backLabel": "Base de calcul",
    "sections": [
      {
        "title": "L'écran est resté inchangé, ajouté uniquement au PDF",
        "blocks": [
          {
            "p": "Le calcul du saju et la demande de résultats sont **gratuits**. Vous pouvez voir tout sur l'écran, y compris le tableau natal, les cinq éléments, la fortune d'aujourd'hui et leur base, car rien n'a été omis lors de la création du rapport payant."
          },
          {
            "p": "Le rôle du rapport est de **ajouter des couches non présentes sur l'écran**. Ces couches ne sont pas fabriquées ; ce sont des valeurs qui ont déjà été calculées lors du processus de notation mais qui n'ont pas été utilisées sur l'écran."
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
            "p": "La table des matières est lue directement à partir de la description du produit. **Le nombre de pages est le même que le document réel** — il n'est pas gonflé car c'est la valeur indiquée dans l'avis d'information sur le produit."
          }
        ]
      },
      {
        "title": "Ce qui n'est pas à l'écran",
        "blocks": [
          {
            "p": "L'écran gratuit montre le tableau natal, les cinq éléments et la fortune d'aujourd'hui. Il y a trois valeurs qui ont été produites lors du processus de calcul mais qui ne sont pas affichées à l'écran, et ce sont les portions du rapport payant."
          },
          {
            "ul": [
              "**Ratio des alliés du jour tige** — Il montre numériquement où le jugement d'un pilier de jour fort ou faible a été fait. Le nom du jugement seul n'indique pas s'il était à la limite ou ample.",
              "**Wang Sang Hyu Su Sa** — Dans quelle mesure le mois de naissance a poussé chaque énergie. Si la barre de puissance indique 'combien il y a', ce tableau indique 'est-ce en saison'.",
              "**Détails de correction du temps solaire vrai** — Le concept est dans le document d'orientation, mais **'combien de minutes ont été décalées dans votre cas'** est une valeur différente pour chaque personne, donc elle est incluse uniquement dans le rapport."
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
        "title": "Les rapports sont également des matériaux de référence",
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
              "**Rapport d'erreur de calcul** — Si le tableau natal de saju ou les scores semblent étranges, veuillez nous le faire savoir. Si vous incluez quand vous avez saisi la date et l'heure de naissance, nous pouvons recalculer avec les mêmes valeurs."
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
  "intro": "Les changements qui affectent les conditions d'utilisation, tels que les prix et les termes, seront publiés ici avant leur mise en œuvre. Les améliorations internes telles que l'accélération de l'écran ne sont pas publiées ici : ce qui apparaît ici est uniquement ce que vous devez savoir.",
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
      "title": "La fenêtre de demande et la page d'introduction au service ont été ouvertes.",
      "body": [
        "Nous avons rassemblé une fenêtre unique pour les demandes, les remboursements, les demandes d'informations personnelles et le signalement d'erreurs de calcul. Vous pouvez la consulter en bas de l'écran sous 'Demander'.",
        "Lorsque vous nous informez d'une erreur de calcul apparente, veuillez inclure la date et l'heure de naissance que vous avez saisies. Nous ne sauvegardons pas l'entrée, donc sans cette valeur, nous ne pouvons pas recalculer."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Sur les écrans en arabe et en khmer, le rapport sera généré en anglais.",
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
        "Si les règles d'interprétation du myeongri changent et que les scores peuvent différer, nous publierons d'abord ce fait et la date d'entrée en vigueur ici. Cela est dû au fait que les chiffres dans les liens de résultats que vous avez reçus précédemment peuvent changer.",
        "Les critères actuels sont v10, et le paiement est toujours en préparation."
      ]
    }
  }
} satisfies NoticeCopy;
