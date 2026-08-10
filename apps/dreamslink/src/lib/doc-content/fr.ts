import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "about": {
    "eyebrow": "Introduction",
    "title": "Introduction à Dreams-Link",
    "summary": "C'est un service qui interprète les rêves en utilisant un dictionnaire de symboles de rêve traditionnel. Il clarifie ce qui est utilisé comme base et ce qui n'est pas mentionné.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "title": "Que faisons-nous ?",
        "blocks": [
          {
            "p": "Dreams-Link trouve **des symboles utilisés dans l'interprétation traditionnelle des rêves** à partir des rêves que vous notez et montre leurs significations. Puisque les rêves sont quelque chose que nous expérimentons quotidiennement, les interprétations affichées à l'écran sont **gratuites et ne nécessitent pas d'adhésion.**"
          },
          {
            "p": "Les seules choses vendues moyennant des frais sont **deux formes de préservation** — une image (carte de rêve) contenant un bon rêve et un PDF qui capture le contexte lorsqu'un symbole traditionnellement considéré comme un rêve de conception apparaît."
          }
        ]
      },
      {
        "title": "Quelle est la base de l'interprétation ?",
        "blocks": [
          {
            "p": "La base de l'interprétation est un **dictionnaire de {symbolTotal} symboles**. Nous trouvons des symboles dans le texte du rêve et montrons uniquement les significations enregistrées dans le dictionnaire pour ces symboles. Si un symbole a plusieurs significations, nous choisissons en fonction du contexte — par exemple, tenir un serpent et être mordu sont traditionnellement considérés comme des opposés."
          },
          {
            "p": "La recherche est effectuée **uniquement selon des règles fixes**. Si c'est le même rêve, les mêmes symboles apparaîtront toujours, et l'interprétation ne changera pas d'hier à aujourd'hui."
          }
        ]
      },
      {
        "title": "Que ne disons-nous pas ?",
        "blocks": [
          {
            "p": "**Nous n'inventons pas de significations traditionnelles qui ne figurent pas dans le dictionnaire.** Si aucun symbole n'est trouvé, nous indiquons simplement qu'aucun n'a été trouvé et nous concluons. Remplir cet espace avec des mots plausibles est ce dont ce service se méfie le plus."
          },
          {
            "p": "**Un rêve de conception n'est qu'un signe, pas un jugement.** Nous vous informons seulement qu'un symbole traditionnellement considéré comme un rêve de conception est apparu dans le rêve. Nous ne prédisons pas une grossesse ou le sexe de l'enfant, et il n'y a aucune base pour de telles affirmations."
          },
          {
            "p": "Nous ne **faisons pas de déclarations définitives sur la santé, la richesse ou la carrière.** Ceci est une référence du point de vue de l'interprétation traditionnelle des rêves et ne constitue pas un avis médical, financier ou juridique."
          }
        ]
      },
      {
        "title": "Nous ne conservons pas les rêves que vous notez.",
        "blocks": [
          {
            "p": "Les histoires de rêves sont la partie la plus privée de ce que ce service reçoit. Par conséquent, nous **ne les stockons pas.** Ce que vous entrez est transporté uniquement dans l'URL et utilisé pour la lecture ; il n'est enregistré dans aucune table sur nos serveurs."
          },
          {
            "p": "Nous avons décidé **de ne pas créer une fonction pour collecter les rêves comme un journal de rêves.** C'est une fonctionnalité précieuse, mais cela nécessiterait de conserver les écrits les plus privés."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "La méthode est décrite plus en détail dans le [document guide](/guide). Les informations commerciales et les coordonnées peuvent être trouvées dans [contactez-nous](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base de Calcul",
    "title": "Quelle est la base du calcul ?",
    "summary": "Nous divulguons toutes les règles que Dreams-Link utilise. Vous pouvez vérifier quels symboles sont trouvés, ce qui est écrit dans le dictionnaire — d'où proviennent les interprétations affichées à l'écran.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tous les chiffres écrits ici sont **lus directement à partir du dictionnaire de symboles et des règles de correspondance.** Puisque nous ne transcrivons pas manuellement le texte, si le dictionnaire est élargi ou si les règles sont modifiées, les chiffres dans ces documents changeront également."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Base du Service",
    "title": "Quelle est la base du dictionnaire de symboles ?",
    "summary": "Il clarifie d'où proviennent les interprétations. Les critères pour diviser 215 symboles en neuf catégories, la raison pour laquelle seulement 24 peuvent être justifiés, et pourquoi nous ne comblons pas les lacunes.",
    "backLabel": "Base de l'Interprétation",
    "sections": [
      {
        "title": "Nous ne montrons que ce qui est écrit dans le dictionnaire.",
        "blocks": [
          {
            "p": "Les interprétations de Dreams-Link proviennent d'un **dictionnaire de symboles pré-écrit**. Nous trouvons des symboles dans le texte que vous fournissez et montrons les significations enregistrées dans le dictionnaire pour ces symboles. Nous ne créons pas de mots qui ne figurent pas dans le dictionnaire."
          },
          {
            "p": "Actuellement, le dictionnaire contient **{symbolTotal} symboles**, et ces symboles ont un total de **{meaningTotal} significations**. La plupart des symboles n'ont qu'une seule signification, tandis que certains en ont plusieurs selon le contexte."
          }
        ]
      },
      {
        "title": "Divisé en neuf catégories.",
        "blocks": [
          {
            "p": "Nous avons regroupé ce qui apparaît dans les rêves en neuf catégories en fonction de leurs caractéristiques. Les chiffres entre parenthèses sont les comptes actuels."
          },
          {
            "ul": [
              "**Objets**({categoryThing}) · **Animaux**({categoryAnimal}) · **Nature**({categoryNature}) — les trois plus grandes catégories. L'interprétation traditionnelle des rêves discute principalement des objets visibles, des animaux et des éléments du ciel et de l'eau.",
              "**Actions**({categoryAction}) · **Corps**({categoryBody}) — ce qui a été fait, comme être poursuivi ou tomber, et où sur le corps, comme le visage ou les cheveux.",
              "**Personnes**({categoryPerson}) · **Lieux**({categoryPlace}) · **Couleurs**({categoryColor}) · **Nombres**({categoryNumber})"
            ]
          },
          {
            "p": "Pour les voir par catégorie, vous pouvez consulter la liste complète dans le [dictionnaire de symboles](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Seuls {cultureNoteTotal} peuvent être justifiés.",
        "blocks": [
          {
            "p": "Parmi les symboles, **{cultureNoteTotal}** ont des raisons d'interprétation écrites à côté d'eux. Par exemple, la raison de distinguer entre les dents supérieures et inférieures dans un rêve de perte de dents. Les symboles restants ont des espaces vides."
          },
          {
            "p": "**Nous n'avons pas comblé les espaces vides.** Ajouter des origines plausibles rendrait le document plus épais, mais à ce moment-là, ce dictionnaire ne transmettrait pas la tradition mais la fabriquerait. Il est plus honnête de distinguer ce qui peut et ne peut pas être justifié."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Raisons de ne pas élargir arbitrairement le dictionnaire.",
        "blocks": [
          {
            "p": "Nous avons effectivement tenté d'élargir les symboles à des centaines mais avons abandonné. Les entrées générées automatiquement répétaient soit les mêmes phrases comme 'romance → bonne relation', soit ne fournissaient aucune source traditionnelle documentée. Nous avons conclu que **trouver avec précision ce qui existe** est mieux que d'augmenter simplement les chiffres."
          }
        ]
      },
      {
        "title": "Le bon et le mauvais sont prédéterminés par le dictionnaire.",
        "blocks": [
          {
            "p": "Chaque symbole porte son auspice enregistré à côté. **Bon {polarityPositive}**, **ambivalent {polarityAmbivalent}**, **prudent {polarityNegative}**, et **neutre {polarityNeutral}**."
          },
          {
            "p": "Le fait que les significations positives dépassent la moitié n'est pas parce que nous sommes généreux, mais parce que l'interprétation traditionnelle des rêves a toujours été ainsi — des symboles grands et forts comme les cochons, les dragons et le feu ont généralement été considérés comme de bons augures. Cependant, tous les rêves ne sont pas interprétés positivement. Cette valeur reflète la nature de chaque symbole, et l'atmosphère générale du rêve est réévaluée en rassemblant les symboles trouvés."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base du Service",
    "title": "Comment trouver des symboles dans les histoires de rêve.",
    "summary": "Il explique comment les symboles sont sélectionnés à partir de phrases librement écrites et comment nous filtrons un symbole qui se trouve simplement à l'intérieur d'un mot plus long — 별 (\"étoile\") à l'intérieur de 특별할 (\"rien de spécial\").",
    "backLabel": "Base de l'Interprétation",
    "sections": [
      {
        "title": "Nous trouvons des symboles dans le texte que vous fournissez.",
        "blocks": [
          {
            "p": "Lorsque vous écrivez librement votre histoire de rêve, nous recherchons des symboles dans ce texte à partir du dictionnaire. Vous n'avez pas besoin de sélectionner des éléments ou d'écrire dans un format spécifique. Écrivez simplement comme vous le feriez normalement, par exemple 'La nuit dernière, un énorme python s'est enroulé autour de moi.'"
          },
          {
            "p": "Lors de la recherche, nous examinons non seulement le nom du symbole mais aussi **{aliasTotal} noms alternatifs**. Ce sont des mots qui se réfèrent à la même chose, comme 구렁이 (gureongi) et 뱀 (baem), 떨어지다 (tteoreojida) et 빠지다 (ppajida). Les variations avec des terminaisons, telles que 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), sont également incluses."
          }
        ]
      },
      {
        "title": "Les caractères qui apparaissent accidentellement dans un mot ne comptent pas",
        "blocks": [
          {
            "p": "C'est l'aspect le plus difficile en coréen. Parmi les symboles, il y a **{singleCharSymbolTotal} symboles à un caractère** comme **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), qui apparaissent fréquemment dans d'autres mots."
          },
          {
            "ul": [
              "별 (\"étoile\") caché dans 특**별**할 (\"rien de spécial\")",
              "게 (\"crabe\") caché dans 누군가에**게** (\"par quelqu'un\")",
              "말 (\"cheval\") dans **말**했다 (\"a dit\"), et 배 (\"bateau, poire\") dans **배**가 고팠다 (\"Nous avions faim\")"
            ]
          },
          {
            "p": "Compter ces symboles conduit à des interprétations non pertinentes. Par conséquent, nous examinons les caractères environnants — si **il y a un caractère coréen devant**, nous le considérons comme faisant partie d'un mot plus long et ne le comptons pas, et nous vérifions **si ce qui suit est une particule ou une terminaison verbale**, permettant à 「소가」 (soga) de passer tout en filtrant 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "C'est ainsi que cela fonctionne",
        "blocks": [
          {
            "p": "Avant de mettre en œuvre cette règle, lors de tests avec douze phrases réelles, **les douze** contenaient des symboles non pertinents. Une phrase sans contenu significatif a même été marquée comme un a conception dream."
          },
          {
            "p": "Maintenant, il en reste un — le 배 (bae) dans 「배가 고팠다」 (bae ga gopatda). Comme il sonne de la même manière mais a une signification différente, il ne peut pas être filtré uniquement par les caractères environnants."
          },
          {
            "p": "Ne pas trouver quelque chose est une question honnête. Cependant, trouver quelque chose de non pertinent signifie établir une tradition derrière ce mot qu'il n'a jamais eue."
          }
        ]
      },
      {
        "title": "Les mêmes caractères donnent toujours les mêmes résultats",
        "blocks": [
          {
            "p": "Il n'y a pas de place pour le hasard dans les règles de correspondance. Puisque le dictionnaire est fixe et que les règles sont établies, si vous saisissez la même phrase à nouveau, **le même symbole apparaîtra dans le même ordre**. L'interprétation que vous voyez aujourd'hui ne différera pas de celle que vous verrez demain."
          },
          {
            "p": "Cette qualité est également une promesse que nous nous sommes faite. Les interprétations qui changent à chaque fois sont divertissantes mais manquent de fondement. Cela se connecte à l'histoire de [pourquoi nous n'utilisons pas de modèles](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Base du service",
    "title": "La raison pour laquelle le même symbole a différentes significations",
    "summary": "Traditionnellement, tenir un serpent et être mordu par un est opposé. Cela discute de la structure où 215 symboles ont 256 significations et comment interpréter les situations.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Même si les symboles sont les mêmes, des situations différentes donnent des significations différentes",
        "blocks": [
          {
            "p": "Dans l'interprétation traditionnelle des rêves, un symbole unique n'a pas toujours une seule signification. Même pour le même serpent, **le fait de le tenir et d'être mordu a été interprété comme complètement opposé.** Cela est également noté dans le dictionnaire."
          },
          {
            "p": "C'est pourquoi les {symbolTotal} symboles ont un total de {meaningTotal} significations. Chaque signification inclut **le contexte dans lequel elle s'applique**, et si ce contexte est visible dans le texte que vous fournissez, nous sélectionnons cette signification."
          }
        ]
      },
      {
        "title": "Comment identifier la situation",
        "blocks": [
          {
            "p": "Nous vérifions si le texte que vous avez fourni contient des mots indiquant cette situation. Dans 「뱀이 나를 물었다」 (baemi nareul mul-eotda), la situation de morsure est décrite, tandis que dans 「뱀을 품에 안았다」 (baemeul pume anatda), la situation de tenir est décrite. S'il n'y a pas de mots indiquant la situation, nous l'interprétons en utilisant la **signification de base** de ce symbole."
          },
          {
            "p": "Par conséquent, lorsque vous écrivez votre rêve, si vous incluez **non seulement ce qui est apparu mais aussi quelles actions ont été prises**, l'interprétation sera plus précise. 「돼지를 봤다」 (dwaeji-reul bwatda) transmet moins que 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Plus vous écrivez, mieux c'est, mais il n'est pas nécessaire d'écrire long",
        "blocks": [
          {
            "p": "Deux ou trois phrases suffisent. Écrire plus longtemps ne signifie pas trouver plus de symboles ; plutôt, si des mots non liés sont mélangés, des symboles non pertinents peuvent être identifiés."
          }
        ]
      },
      {
        "title": "Il y a {contextSplitSymbolTotal} symboles avec des significations divisées",
        "blocks": [
          {
            "p": "Parmi les {symbolTotal} symboles dans le dictionnaire, **{contextSplitSymbolTotal}** ont des significations qui varient selon la situation. Le reste a été lu dans une seule direction indépendamment de la situation."
          },
          {
            "p": "Ces {contextSplitSymbolTotal} sont les domaines les plus prudents. Malinterpréter la situation peut conduire à transmettre de bonnes nouvelles comme de mauvaises nouvelles, ou vice versa. Par conséquent, si la situation est floue, nous ne **choisissons pas de force un côté et nous nous en tenons à la signification de base** de ce symbole — nous ne voulons pas déclarer quelque chose d'incertain comme si c'était certain."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Les sentiments au réveil sont également pris en compte",
        "blocks": [
          {
            "p": "Les sentiments et la répétition demandés en dessous du contenu du rêve ne sont pas utilisés pour trouver des symboles. Ils sont référencés lors de la décision de la manière d'interpréter dans des situations avec des significations divisées. Vous n'avez pas besoin de choisir ; les résultats seront toujours fournis."
          }
        ]
      },
      {
        "title": "L'atmosphère générale du rêve est comptée séparément",
        "blocks": [
          {
            "p": "Si plusieurs symboles sont trouvés, nous rassemblons si chacun de ces symboles est positif ou prudent pour déterminer le ton général du rêve. Un rêve qui inclut un bon symbole et un symbole prudent n'est pas simplement qualifié de 'bon rêve.'"
          },
          {
            "p": "Vous pouvez prévisualiser les différents symboles et leurs significations dans le [dictionnaire des symboles](/dream/symbols). Il est également bon de jeter un coup d'œil à ce qui est inclus avant d'écrire votre rêve."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Base du service",
    "title": "Critères pour distinguer les rêves auspices et les rêves inauspices",
    "summary": "Les quatre valeurs attribuées à chaque symbole et leur distribution, la raison pour laquelle les symboles positifs dépassent la moitié, et pourquoi nous communiquons les rêves mixtes comme mixtes.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Chaque symbole se voit attribuer l'une des quatre valeurs",
        "blocks": [
          {
            "p": "Parmi les {symbolTotal} symboles dans le dictionnaire, chacun est catégorisé comme l'un des suivants."
          },
          {
            "ul": [
              "**{polarityPositive} symboles positifs** — ceux interprétés comme des événements chanceux comme la richesse, les célébrations et les bienfaiteurs.",
              "**{polarityAmbivalent} symboles qui varient selon la situation** — comme les serpents, où la signification peut changer selon ce qui a été fait. Cette catégorie est la plus prudente.",
              "**{polarityNegative} symboles inauspices** — ceux vus comme des commérages, des disputes ou des pertes.",
              "**{polarityNeutral} symboles neutres** — ceux qui ne sont ni bons ni mauvais en eux-mêmes, comme les couleurs ou les nombres."
            ]
          }
        ]
      },
      {
        "title": "La raison pour laquelle les symboles positifs dépassent la moitié",
        "blocks": [
          {
            "p": "Ce n'est pas parce que nous sommes généreux dans nos évaluations. **L'interprétation des rêves traditionnelle (dream interpretation) a toujours été ainsi.** De grands et puissants symboles comme les cochons, les dragons, le feu et l'eau ont généralement été considérés comme de bons augures, et le dictionnaire reflète cette tradition."
          },
          {
            "p": "Ainsi, le fait qu'un 'bon symbole soit apparu' ne signifie pas que 'de bonnes choses vont arriver.' Ce que nous pouvons transmettre est limité à la manière dont ce symbole a été interprété dans la tradition."
          }
        ]
      },
      {
        "title": "Le ton d'un rêve est rassemblé à partir de ses symboles",
        "blocks": [
          {
            "p": "Si plusieurs symboles sont trouvés, nous rassemblons leur auspice respectif pour déterminer le ton général du rêve. Si seuls des symboles positifs apparaissent, c'est un bon rêve ; si seuls des symboles inauspices apparaissent, c'est un rêve inauspice ; si **mixte, nous le communiquons comme mixte.**"
          },
          {
            "p": "Nous ne catégorisons pas de force les symboles mixtes d'un seul côté. En réalité, les rêves que les gens ont sont souvent mixtes, et les résumer comme 'un bon rêve' n'est ni précis ni utile."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mots à ne pas utiliser",
        "blocks": [
          {
            "p": "Ne faites pas de déclarations définitives sur ce qui va se passer, quand cela va se passer, ou concernant la santé et la richesse. Transmettre les significations des symboles transmis par la tradition est différent de prédire l'avenir."
          }
        ]
      },
      {
        "title": "Quand un rêve inauspicieux apparaît",
        "blocks": [
          {
            "p": "Même si un symbole interprété comme un avertissement apparaît, ce n'est pas nécessairement une mauvaise nouvelle. Dans l'interprétation des rêves traditionnelle, un rêve inauspicieux a généralement été utilisé comme **une déclaration pointant vers la situation actuelle**. Si un symbole suggérant un conflit apparaît, il peut être interprété comme un rappel de retenir ses mots."
          },
          {
            "p": "Pour la même raison, ce service ne vend pas de talismans ou de charmes. Ce qui est vendu est uniquement [deux façons de garder vos rêves](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Rêve de conception",
    "title": "Comment interpréter les rêves de conception",
    "summary": "Il révèle comment déterminer 27 symboles de rêve de conception, pourquoi tous les rêves de cochon ne sont pas considérés comme des rêves de conception, et le principe qui ne prédit pas la grossesse ou le sexe.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Tout d'abord, clarifiez ceci",
        "blocks": [
          {
            "p": "**Dreams-Link ne détermine pas le statut de grossesse. Cela n'indique pas non plus le sexe de l'enfant.** Ce sont des choses qui ne peuvent pas être connues par les rêves, et ce n'est pas quelque chose que nous pouvons faire."
          },
          {
            "p": "Ce que nous pouvons vous dire est limité à cela — **le fait qu'un symbole traditionnellement considéré comme un rêve de conception soit apparu dans ce rêve.** C'est tout ce que nos ancêtres ont interprété à propos de ce symbole."
          }
        ]
      },
      {
        "title": "Il y a {conceptionSymbolTotal} symboles considérés comme des rêves de conception",
        "blocks": [
          {
            "p": "Parmi les {symbolTotal} symboles dans le dictionnaire, **{conceptionSymbolTotal}** sont marqués comme des rêves de conception. Il y a de nombreux animaux comme des dragons, des cochons et des serpents, ainsi que des fruits comme des pêches et des châtaignes, et le soleil et la lune sont inclus."
          },
          {
            "p": "Cependant, **l'apparition de ce symbole ne signifie pas immédiatement qu'il s'agit d'un rêve de conception.** C'est là que ce service a fourni des efforts."
          }
        ]
      },
      {
        "title": "Le jugement est basé sur la signification réelle, pas sur les symboles",
        "blocks": [
          {
            "p": "Le cochon est un symbole des rêves de conception et en même temps **représente les rêves de richesse.** S'il est considéré comme un rêve de conception simplement parce que le symbole est apparu, alors tout le monde qui a rêvé de cochons aurait eu un rêve de conception. En réalité, il a principalement été interprété comme un rêve de richesse."
          },
          {
            "p": "Par conséquent, nous regardons **la signification réelle dérivée de ce symbole, pas le symbole lui-même.** Nous ne le marquons comme un rêve de conception que lorsque la signification penche vers la conception dans la situation que vous avez fournie. Même avec le même cochon, la lecture change si la phrase diffère."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si vous mentionnez la grossesse, nous regardons cela en premier",
        "blocks": [
          {
            "p": "Si votre écriture inclut des mots comme grossesse, rêve de conception, ou accouchement, nous regardons d'abord la signification de ce symbole penché vers la conception. Même avec le même rêve de cochon, la façon dont nos ancêtres l'ont interprété variait selon la situation actuelle."
          }
        ]
      },
      {
        "title": "La raison de séparer les rapports de rêve de conception",
        "blocks": [
          {
            "p": "Les rêves de conception servent un but différent des autres rêves. Ils sont souvent discutés même après la naissance de l'enfant et partagés entre les membres de la famille. Par conséquent, plutôt que de simplement les visualiser sur un écran, nous avons créé un **document qui peut être conservé.**"
          },
          {
            "p": "Ce qui est inclus est noté dans [deux façons de garder vos rêves](/guide/reports). Vous pouvez voir toutes les interprétations sans acheter ce que vous voyez à l'écran."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Comment utiliser",
    "title": "Comment écrire votre rêve efficacement",
    "summary": "Si vous écrivez ce que vous avez vu et fait, cela sera bien interprété. Cela explique pourquoi un seul verbe peut déterminer la signification et pourquoi nous posons des questions sur les sentiments et la répétition.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Veuillez écrire ce que vous avez vu et fait",
        "blocks": [
          {
            "p": "Il n'y a pas de format spécifique. Quelques phrases comme vous parlez normalement suffisent. Cependant, ce qui fonctionne bien est déterminé — **ce qui est visible** et **ce qui s'est passé.**"
          },
          {
            "ul": [
              "Fonctionne bien — 「Un grand serpent m'a entouré」, 「J'ai vu de l'eau claire couler」, 「Je suis tombé d'un endroit élevé」",
              "Ne fonctionne pas — 「J'avais peur」, 「Je me sentais étrange」, 「J'avais l'impression que quelqu'un me détestait」"
            ]
          },
          {
            "p": "Si vous écrivez seulement des sentiments, il n'y aura pas de symboles à trouver. Cela est dû au fait que l'interprétation traditionnelle des rêves parle de [objets et d'actions](/guide/categories), pas d'émotions."
          }
        ]
      },
      {
        "title": "Écrire ce que vous avez fait rend cela plus précis",
        "blocks": [
          {
            "p": "Même avec le même symbole, il y a {contextSplitSymbolTotal} cas où les significations diffèrent selon la situation. Traditionnellement, tenir un serpent et être mordu ont été interprétés comme des opposés."
          },
          {
            "p": "Ainsi, 「J'ai vu un cochon」 est moins précis que 「Un cochon est entré dans la maison」, et 「Il y avait de l'eau」 est moins précis que 「J'ai bu de l'eau claire.」 **Un seul verbe détermine la signification.**"
          }
        ]
      },
      {
        "title": "Pourquoi nous posons des questions sur les sentiments et la répétition",
        "blocks": [
          {
            "p": "Sous le contenu du rêve, il y a un endroit pour sélectionner **le sentiment lorsque vous vous êtes réveillé** et **si vous avez répété le même rêve.** Vous n'avez pas besoin de choisir les deux pour qu'un résultat soit fourni."
          },
          {
            "p": "Ces valeurs ne sont pas utilisées pour trouver des symboles. Elles sont référencées lors de la détermination **de quelle signification choisir** parmi le même symbole et comment transmettre le résultat."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dans les cas où vous mentionnez la grossesse",
        "blocks": [
          {
            "p": "Si votre écriture inclut des mots comme grossesse, rêve de conception, ou accouchement, nous regardons d'abord la signification de ce symbole penché vers la conception. Même avec le même rêve de cochon, la façon dont nos ancêtres l'ont interprété variait selon la situation actuelle — [comment interpréter les rêves de conception](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Il n'est pas nécessaire d'écrire des textes longs",
        "blocks": [
          {
            "p": "Un texte plus long ne signifie pas que plus de symboles seront trouvés. Au contraire, si des mots non pertinents sont mélangés longuement, il y a une plus grande chance que des mots non liés soient interprétés comme des symboles. **Veuillez écrire uniquement les scènes dont vous vous souvenez.**"
          },
          {
            "p": "Le texte que vous fournissez n'est enregistré nulle part. La raison pour laquelle vous pouvez écrire librement est notée dans [la méthode de non-stockage](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base du service",
    "title": "Critères divisés en neuf catégories",
    "summary": "Des objets, des animaux et de la nature aux couleurs et aux nombres, il y a neuf catégories et une raison de ne pas inclure une catégorie émotionnelle.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Les symboles dans les rêves sont divisés en neuf catégories",
        "blocks": [
          {
            "p": "Les {symbolTotal} symboles sont regroupés en neuf catégories en fonction de leurs caractéristiques. Les critères de division sont **comment ils apparaissent dans les rêves** — que ce soit sous forme d'animaux, d'objets, ou d'actions que nous avons prises."
          },
          {
            "ul": [
              "**Objets {categoryThing}** — Articles tangibles comme de l'argent, des miroirs et des couteaux. C'est la catégorie la plus fournie.",
              "**Animaux {categoryAnimal}** — dragon·cochon·serpent·vache. Beaucoup de ceux-ci sont considérés comme des rêves de conception.",
              "**Nature {categoryNature}** — des choses qui sont grandes et anciennes comme l'eau·le feu·le soleil·la lune·la montagne.",
              "**Action {categoryAction}** — des choses faites dans les rêves comme être poursuivi·tomber·voler.",
              "**Corps {categoryBody}** — dents·cheveux·sang. La signification varie selon l'endroit sur le corps.",
              "**Personne {categoryPerson}** · **Lieu {categoryPlace}** · **Couleur {categoryColor}** · **Nombre {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Pourquoi n'y a-t-il pas de catégorie émotionnelle ?",
        "blocks": [
          {
            "p": "Des catégories comme 「anxiété」·「désir」 ne sont pas incluses. **C'est parce que l'interprétation des rêves traditionnelle ne traite pas des émotions.** Les anciennes interprétations se concentraient sur ce qui était visible et ce qui se passait, plutôt que sur les sentiments du rêveur."
          },
          {
            "p": "nous avons essayé de créer une catégorie émotionnelle, mais les résultats étaient des termes comme 「perte d'affection」·「stabilité émotionnelle」. Ce ne sont pas des **symboles** issus des rêves mais du vocabulaire de la psychologie moderne. C'est un type de service différent et ce n'est pas ce que ce dictionnaire vise à faire."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Alors quand vous écrivez",
        "blocks": [
          {
            "p": "Veuillez écrire **ce que vous avez vu et fait** plutôt que des sentiments ; cela donnera de bien meilleurs résultats. Cependant, nous vous demanderons vos sentiments au réveil séparément — même le même symbole peut avoir des significations différentes selon la situation."
          }
        ]
      },
      {
        "title": "Les couleurs et les nombres ne se tiennent pas seuls",
        "blocks": [
          {
            "p": "Couleur {categoryColor} et nombre {categoryNumber} n'ont pas de significations intrinsèquement bonnes ou mauvaises. Tout comme un serpent blanc et un serpent noir sont différents, leurs significations changent selon **ce avec quoi ils sont associés**. Par conséquent, ces deux catégories sont considérées en conjonction avec d'autres symboles."
          },
          {
            "p": "Une liste complète par catégorie est disponible dans le [dictionnaire des symboles](/dream/symbols). Ouvrir un symbole montrera sa signification traditionnelle, sa catégorie et les symboles associés."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Comment utiliser",
    "title": "Lorsque un symbole ne peut pas être trouvé",
    "summary": "Si vous ne pouvez pas le trouver, nous vous informerons qu'il n'est pas trouvé. nous discuterons pourquoi il ne peut pas être trouvé, ce que nous vous montrerons à la place sur cet écran, et comment le dictionnaire est élargi.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Lorsque non trouvé, nous vous informerons qu'il n'est pas trouvé",
        "blocks": [
          {
            "p": "Si nous ne pouvons trouver aucun symbole dans le texte que vous avez fourni, nous vous **informerons qu'il n'est pas trouvé.** nous ne forcerons pas l'association avec quelque chose de similaire ou ne créerons pas de phrases plausibles pour combler l'espace."
          },
          {
            "p": "C'est ce dont ce service est le plus prudent. Au moment où nous comblons un vide, cela rompt la promesse que nous ne transmettons que des interprétations transmises."
          }
        ]
      },
      {
        "title": "Pourquoi ne peut-il pas être trouvé ?",
        "blocks": [
          {
            "p": "En général, c'est l'une des raisons suivantes."
          },
          {
            "ul": [
              "**C'est un symbole qui n'est pas encore dans le dictionnaire.** Actuellement, il y a {symbolTotal} symboles répertoriés, mais il y en a beaucoup d'autres qui pourraient apparaître dans les rêves.",
              "**Vous n'avez écrit que des sentiments.** S'il n'y a que des émotions comme 「j'étais effrayé」·「je me sentais étrange」, il n'y a pas de symboles qui peuvent être associés. L'interprétation traditionnelle des rêves parle de **objets visibles et d'actions** plutôt que d'émotions.",
              "**C'est trop court.** Il est préférable d'écrire en phrases plutôt qu'en un ou deux mots."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lorsque vous essayez d'écrire à nouveau",
        "blocks": [
          {
            "p": "Veuillez inclure **ce que vous avez vu et ce que vous avez fait** dans le rêve. Dire 「j'étais anxieux」 est moins efficace que de dire 「je suis tombé d'un endroit élevé」, et dire 「je l'ai aimé」 est moins efficace que de dire 「j'ai vu de l'eau claire couler」."
          }
        ]
      },
      {
        "title": "nous ne laissons pas un écran vide",
        "blocks": [
          {
            "p": "Lorsque quelque chose ne peut pas être trouvé, nous montrerons également **{popularSymbolCount} symboles fréquemment recherchés** sur cet écran. Ceux-ci sont sélectionnés dans le dictionnaire en fonction de leur représentativité, ce qui peut vous aider à vous rappeler si l'un d'eux est apparu dans votre rêve."
          },
          {
            "p": "Si vous souhaitez parcourir la liste complète, il y a {symbolTotal} symboles organisés par catégorie dans le [dictionnaire des symboles](/dream/symbols). Chaque symbole inclut sa signification traditionnelle et les symboles associés."
          }
        ]
      },
      {
        "title": "Comment le dictionnaire sera-t-il élargi à l'avenir ?",
        "blocks": [
          {
            "p": "Plutôt que d'augmenter les chiffres, nous nous concentrons sur **l'identification précise de ce qui est déjà là**. nous avons inclus {aliasTotal} noms alternatifs pour le même symbole, et nous avons rendu possible la reconnaissance des mots qui changent de forme avec des suffixes."
          },
          {
            "p": "Lors de l'élargissement des symboles eux-mêmes, nous n'inclurons que ceux qui peuvent **fournir une source traditionnelle documentée.** Augmenter simplement les chiffres sans preuve devient de la création plutôt qu'un dictionnaire — nous avons documenté les tentatives et les résultats dans [pourquoi nous n'utilisons pas de modèles](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base de service",
    "title": "Raisons de ne pas utiliser l'intelligence artificielle dans l'interprétation des rêves",
    "summary": "Il n'y a pas de code qui appelle un modèle dans le processus de création d'interprétation. nous avons abandonné la tentative d'élargir le dictionnaire en utilisant un modèle basé sur des résultats empiriques, et donc ce qui a été gagné et ce qui a été abandonné.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "L'intelligence artificielle n'est pas utilisée dans l'interprétation des rêves",
        "blocks": [
          {
            "p": "De nombreux services d'interprétation des rêves actuels montrent des textes générés en insérant des histoires de rêves dans des modèles génératifs. Dreams-Link ne fait pas cela. **Il n'y a pas de code qui appelle un modèle dans le processus de création d'interprétation.**"
          },
          {
            "p": "Ce que nous faisons est simple. nous trouvons des symboles dans le texte que vous fournissez qui sont dans le dictionnaire et sélectionnons et montrons les significations que le dictionnaire a écrites pour ces symboles. Il n'y a pas de place pour des phrases qui ne sont pas dans le dictionnaire."
          }
        ]
      },
      {
        "title": "Pourquoi cette décision a-t-elle été prise ?",
        "blocks": [
          {
            "p": "**Les modèles ne disent pas qu'ils ne savent pas ce qu'ils ne savent pas.** Lorsqu'on leur demande des symboles sans source traditionnelle documentée, ils fabriquent des origines plausibles. Et qu'elles soient fabriquées ou non est quelque chose que le lecteur ne peut pas discerner. Si l'on insère de la création à la place de la transmission de la tradition, le principe du service s'effondre."
          },
          {
            "p": "nous avons en fait essayé de faire créer des symboles par un modèle pour élargir le dictionnaire. Sur soixante-six exemples qui valaient la peine d'être considérés, **cinquante-cinq n'ont pu fournir aucune source traditionnelle documentée**, et certains incluaient des choses qui ne pouvaient pas exister dans l'interprétation traditionnelle des rêves, comme des métros et des autoroutes. Par conséquent, **aucun n'a été inclus.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il en était de même même avec des modèles plus grands",
        "blocks": [
          {
            "p": "Lorsque nous avons essayé la même tâche avec un meilleur modèle, un seul sur dix-neuf a réussi, et celui-ci n'était qu'une répétition des mêmes mots dans la position de preuve. Les modèles plus grands ne parlent que **plus plausiblement** de ce qu'ils ne savent pas."
          }
        ]
      },
      {
        "title": "Les avantages de ne pas utiliser un modèle",
        "blocks": [
          {
            "ul": [
              "**Si c'est le même rêve, la même interprétation en sortira.** La formulation ne change pas à chaque fois.",
              "**C'est rapide.** Il n'y a pas d'attente pour la réponse d'un modèle, donc les résultats sont livrés immédiatement.",
              "**Le rêve que vous avez fourni ne sort pas.** Il n'est pas nécessaire de l'envoyer aux serveurs d'entreprise externes — veuillez lire avec [la méthode de non-stockage](/guide/no-storage).",
              "**Il peut être offert gratuitement.** Les rêves sont quelque chose que nous faisons chaque jour, donc il y a de nombreuses demandes. Si un modèle est appelé pour chaque demande, les coûts doivent être couverts quelque part."
            ]
          }
        ]
      },
      {
        "title": "Ce qui est abandonné à la place",
        "blocks": [
          {
            "p": "Nous ne pouvons pas interpréter ce qui n'est pas dans le dictionnaire. Si un modèle avait été utilisé, tout ce que vous avez écrit aurait produit une réponse plausible. Nous avons choisi le côté qui **dit qu'il ne pouvait pas être trouvé quand il ne pouvait pas être trouvé**. Ce que nous montrons à ce moment-là est écrit dans [lorsqu'un symbole ne peut pas être trouvé](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produits payants",
    "title": "Deux façons de conserver vos rêves",
    "summary": "L'interprétation elle-même n'entraîne pas de frais. Nous expliquons ce que sont les deux choses que nous vendons, ce qu'elles contiennent et pourquoi elles ne sont pas de meilleures interprétations.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "L'interprétation elle-même n'entraîne pas de frais",
        "blocks": [
          {
            "p": "Écrire vos rêves et voir quels symboles sont présents **ne coûte pas d'argent et ne nécessite pas d'adhésion.** Puisque les gens rêvent chaque jour, nous avons décidé que cet espace devrait être gratuit."
          },
          {
            "p": "**Les deux choses que nous vendons ne sont pas de meilleures interprétations.** Ce sont **deux façons de conserver la même interprétation.** Le contenu que vous voyez à l'écran ne change pas après le paiement."
          }
        ]
      },
      {
        "title": "Carte de rêve — Une image",
        "blocks": [
          {
            "p": "Nous fournissons les symboles trouvés dans votre rêve et leurs significations dans **une image.** C'est un fichier image, pas un PDF, donc vous pouvez le sauvegarder tel quel ou l'envoyer à d'autres."
          },
          {
            "p": "C'est pour ceux qui ressentent des regrets lorsque un bon rêve disparaît après la fermeture de l'écran. Puisque nous ne sauvegardons pas les rêves, si vous voulez le garder, c'est la seule façon de le prendre."
          }
        ]
      },
      {
        "title": "Rapport de rêve de conception — Document {conceptionPages} pages",
        "blocks": [
          {
            "p": "Pour les rêves qui montrent des symboles interprétés comme des rêves de conception, nous créons un **document de {conceptionPages} pages.** Il comprend quels symboles sont apparus, comment ces symboles ont été traditionnellement interprétés, et un endroit pour les enregistrer."
          },
          {
            "p": "Puisqu'un rêve de conception est souvent discuté et partagé entre les membres de la famille même après la naissance de l'enfant, nous avons créé un document séparé pour les rêves qui sont trop précieux pour être simplement vus à l'écran."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mots non dits ici non plus",
        "blocks": [
          {
            "p": "Nous ne déterminons pas le statut de grossesse ni le sexe de l'enfant. De telles déclarations n'apparaissent pas dans le document. Pour plus de détails, voir [comment interpréter un rêve de conception](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Pourquoi il n'y a plus de document",
        "blocks": [
          {
            "p": "Les services frères fournissent des rapports de neuf pages. Le moteur de saju extrait beaucoup de valeurs à partir d'une seule date de naissance. L'interprétation des rêves ne fonctionne pas de cette manière."
          },
          {
            "p": "Les symboles énumérés dans le dictionnaire totalisent {symbolTotal}, et la plupart d'entre eux ont **une signification chacun.** Pour étirer cela sur neuf pages, nous devrions écrire des significations traditionnelles qui ne se trouvent dans aucun matériel, et c'est exactement ce que ce service a décidé de ne pas faire. Par conséquent, le document est seulement aussi long que les matériaux le permettent honnêtement, et pas plus."
          }
        ]
      },
      {
        "title": "Prix et statut des ventes",
        "blocks": [
          {
            "p": "Les prix sont indiqués dans le [guide des prix](/pricing). La raison pour laquelle ce document ne liste pas les montants est intentionnelle — pour éviter des situations où le document d'orientation reste avec de vieux montants lorsque les prix changent. L'écran et les termes lisent tous le même montant d'un seul endroit."
          },
          {
            "p": "Les documents que vous achetez peuvent **être reçus à nouveau avec la même commande.** Cependant, puisque nous ne conservons pas de fichiers, une fois que vous quittez l'écran de résultat, vous ne pouvez pas les recréer — veuillez conserver les fichiers que vous recevez."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informations personnelles",
    "title": "La méthode de ne pas stocker les rêves que vous écrivez",
    "summary": "Nous expliquons ce que cela signifie techniquement que les histoires de rêve ne sont enregistrées nulle part, et ce qui est contenu dans le lien de résultat.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Aucune adhésion requise",
        "blocks": [
          {
            "p": "Dreams-Link ne crée pas de comptes. Nous ne collectons pas de noms, d'emails ou de numéros de téléphone. Les seules choses que nous collectons sont les rêves que vous écrivez, comment vous vous êtes senti au réveil, et si vous rêvez du même rêve de manière répétée, et cela ne reste pas après que l'interprétation est terminée."
          },
          {
            "p": "Les histoires de rêve sont les valeurs les plus privées que ce service reçoit. C'est pourquoi les règles sont plus strictes que nécessaire — nous n'avons même pas créé de tableau pour écrire ce que vous soumettez."
          }
        ]
      },
      {
        "title": "Ce qui est contenu dans le lien de résultat",
        "blocks": [
          {
            "p": "Lorsque le calcul est terminé, l'adresse ressemblera à ceci."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Ce qui suit **#** est la valeur d'entrée. Cette partie est appelée un **fragment**, qui est une **partie que le navigateur n'envoie pas au serveur**. C'est un comportement web standard et non une règle que nous avons créée — il a été initialement conçu pour indiquer un emplacement dans un document, donc le serveur n'a pas besoin de le voir."
          },
          {
            "p": "Ici, cette propriété est particulièrement importante — le rêve que vous avez fourni **ne reste pas dans les enregistrements d'accès.**"
          },
          {
            "p": "En d'autres termes, lorsque vous ouvrez le lien de résultat, le navigateur lit cette valeur pour demander un calcul, et notre serveur reçoit la valeur pour le calcul, renvoie la réponse, puis l'oublie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Veuillez faire attention lorsque vous envoyez des liens à d'autres",
        "blocks": [
          {
            "p": "Le fait qu'il ne soit pas stocké sur le serveur ne signifie pas que le lien est sûr. Le lien de résultat contient le rêve que vous avez fourni, donc la personne qui reçoit ce lien peut lire ce contenu."
          }
        ]
      },
      {
        "title": "Pourquoi le calcul est-il effectué sur le serveur mais pas stocké ?",
        "blocks": [
          {
            "p": "Le calcul lui-même est effectué sur le serveur. Trouver des symboles nécessite l'ensemble du dictionnaire, et ce dictionnaire est trop volumineux pour être envoyé au navigateur. Garder le dictionnaire sur le serveur signifie également que lorsque une erreur est corrigée, elle est reflétée pour tout le monde en même temps. Cependant, **après le traitement de la demande, cette valeur n'est utilisée nulle part.** Il n'y a pas de code pour l'insérer dans la base de données."
          },
          {
            "p": "Un enregistrement minimal nécessaire au fonctionnement est conservé — un compteur pour empêcher la même personne d'envoyer trop de demandes en peu de temps. Cela n'inclut pas le contenu du rêve, et l'IP d'accès n'est également pas conservée. Une seule valeur, hachée avec la date, est comptée, et cette valeur change lorsque le jour change."
          }
        ]
      },
      {
        "title": "Ce qui ne peut pas être fait parce que ce n'est pas stocké",
        "blocks": [
          {
            "p": "Pour être honnête, il y a des choses que nous avons abandonnées parce que nous ne stockons pas de données."
          },
          {
            "ul": [
              "**Il n'y a pas de journal de rêves.** Vous ne pouvez pas récupérer l'interprétation de la semaine dernière, et vous devez avoir le lien pour la voir à nouveau. Cela est fait intentionnellement — pour créer un journal, les écrits les plus privés doivent être continuellement stockés.",
              "**Nous calculons la même valeur à chaque fois.** Il n'y a pas de cache. Au lieu de cela, le dictionnaire est fixe, et les règles de correspondance sont déterministes, donc le même texte produira toujours le même symbole — les règles remplacent ce que le cache aurait garanti.",
              "**Rafraîchir fera apparaître à nouveau la porte de publicité.** C'est parce qu'il n'y a nulle part où laisser des enregistrements de visualisation."
            ]
          }
        ]
      },
      {
        "title": "En cas d'achat",
        "blocks": [
          {
            "p": "Si vous achetez un rapport, un enregistrement de transaction sera conservé à ce moment-là. Le paiement a une période de conservation définie par la loi, et sans un historique de commande, les remboursements ne peuvent pas être traités. Cependant, même alors, **le texte du rêve utilisé pour la lecture n'est pas attaché à la commande** — il est reçu à nouveau et écrit à ce moment-là lors de la création du document après la confirmation du paiement."
          },
          {
            "p": "Pour plus de détails, veuillez consulter la [politique de confidentialité](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avis",
    "title": "Annonces",
    "summary": "Ceci est un endroit pour vous informer des changements qui peuvent affecter votre utilisation.",
    "backLabel": "Retour à l'accueil",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Demandes",
    "summary": "Ceci est le canal pour les demandes concernant l'utilisation, les remboursements, les demandes d'informations personnelles et les rapports d'erreurs, ainsi que les informations commerciales.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "title": "Contact par Email",
        "blocks": [
          {
            "p": "Veuillez envoyer vos demandes à **{email}**. Nous répondrons dans un délai de 2 jours ouvrables. Pour les demandes de paiement et de remboursement, il est plus rapide d'inclure votre **numéro de commande ou email de paiement**."
          },
          {
            "p": "Les demandes par téléphone sont reçues au {customerCenter}."
          }
        ]
      },
      {
        "title": "Que peut-on envoyer à ce canal ?",
        "blocks": [
          {
            "ul": [
              "**Paiement et Remboursement** — Si le document n'a pas été créé ou si le montant du paiement diffère de la commande, un remboursement complet sera fourni. Les conditions sont dans la [politique de remboursement](/refund-policy).",
              "**Informations Personnelles** — Nous acceptons les demandes d'accès, de correction et de suppression. La politique de traitement est dans la [politique de confidentialité](/privacy).",
              "**Signaler des Erreurs d'Interprétation** — Si des symboles ont été trouvés incorrectement ou si l'interprétation semble étrange, veuillez nous le faire savoir. Si vous incluez quand vous avez écrit cette histoire de rêve, nous pouvons la rechercher à nouveau avec le même texte."
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
            "p": "Vous n'avez pas besoin de réécrire le rêve que vous avez fourni dans l'email de demande. Nous ne sauvegardons pas les entrées, donc nous ne pouvons pas les rechercher à nouveau, et le numéro de commande est suffisant pour la vérification. Veuillez seulement le noter si cela est absolument nécessaire, comme pour signaler des erreurs d'interprétation."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Principes de Service",
    "title": "Ce que Nous Ne Faisons Pas",
    "summary": "Nous ne fournissons pas de numéros de loterie, de journaux de rêves, de déterminations de grossesse ou de talismans. Nous expliquons pourquoi nous avons choisi de ne pas faire chacune de ces choses.",
    "backLabel": "Base d'Interprétation",
    "sections": [
      {
        "title": "Nous ne fournissons pas de numéros de loterie",
        "blocks": [
          {
            "p": "Bien que cela soit couramment abordé dans les services d'interprétation des rêves, nous ne le faisons pas. **Il n'y a pas de base dans l'interprétation traditionnelle des rêves pour tirer des numéros des rêves.** Bien qu'il existe des enregistrements d'interprétation des rêves de cochons comme richesse, il n'y a aucune règle dans la littérature qui produise six numéros à partir de cela."
          },
          {
            "p": "Pour les créer, nous devrions les inventer, et à ce moment-là, ce service ne serait plus un lieu pour transmettre les interprétations transmises par la tradition. Cela est particulièrement préoccupant car cela pourrait entraîner des pertes financières."
          }
        ]
      },
      {
        "title": "Nous ne créons pas de journaux de rêves",
        "blocks": [
          {
            "p": "Bien qu'il serait pratique d'avoir une fonctionnalité pour collecter des rêves passés, cela nécessiterait que nous **stockions continuellement les rêves que vous fournissez.** Les récits de rêves sont l'aspect le plus privé de ce que ce service reçoit, et nous avons décidé de ne pas échanger cela."
          },
          {
            "p": "Au lieu de cela, les rêves que vous souhaitez conserver peuvent être **pris en images ou en documents.** La responsabilité du stockage incombe aux utilisateurs, pas à nous — [Deux Façons de Conserver Vos Rêves](/guide/reports)"
          }
        ]
      },
      {
        "title": "Nous ne déterminons pas la grossesse ou le sexe",
        "blocks": [
          {
            "p": "Nous allons seulement indiquer qu'un symbole interprété comme un a conception dream (rêve de conception) est apparu. Que vous soyez enceinte ou que l'enfant soit une fille ou un garçon **n'est pas quelque chose qui peut être connu à travers les rêves.** De telles déclarations n'apparaissent pas à l'écran ou dans des documents payants."
          }
        ]
      },
      {
        "title": "Nous ne vendons pas de talismans ou de charmes",
        "blocks": [
          {
            "p": "Un symbole lu comme inauspicieux n'est pas une raison d'acheter quoi que ce soit. Un rêve inauspicieux a traditionnellement été utilisé pour **indiquer une situation à examiner maintenant**, et non pour payer afin d'éviter quelque chose."
          },
          {
            "p": "Nous ne créons pas d'anxiété pour vendre quelque chose basé sur cela. Les seules choses que nous vendons sont les deux mentionnées ci-dessus, et aucune ne fournit d'interprétation supplémentaire mais plutôt **des moyens de conserver le même contenu.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nous ne faisons pas de déclarations définitives sur l'avenir",
        "blocks": [
          {
            "p": "Nous ne faisons pas de déclarations définitives sur si quelque chose va se produire, quand cela va se produire, ou concernant la santé, la richesse ou la durée de vie. Transmettre les significations des symboles traditionnels et prédire l'avenir sont des choses différentes."
          }
        ]
      },
      {
        "title": "Nous ne fabriquons pas d'interprétations qui n'existent pas",
        "blocks": [
          {
            "p": "Pour les symboles qui n'existent pas dans le dictionnaire, nous **indiquons que nous n'avons pas pu les trouver.** Nous ne rassemblons pas des similaires ni ne remplissons l'espace avec des phrases plausibles. Par conséquent, ce service ne [utilise pas l'intelligence artificielle pour l'interprétation des rêves](/guide/no-ai). Le modèle ne dit pas qu'il ne sait pas ce qu'il ne sait pas."
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
  "intro": "Les changements de vos conditions d'utilisation — prix, politiques — sont affichés ici avant qu'ils ne prennent effet. Les améliorations internes telles que l'accélération de l'écran ne sont pas affichées ici : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Aucune annonce publiée",
    "body": "S'il y a des changements à vous informer, ils seront publiés ici."
  },
  "effective": "En vigueur à partir du {date}",
  "pager": {
    "label": "Page de Notification",
    "newer": "← Le plus récent",
    "older": "Notifications Précédentes →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Le rêve que vous avez fourni n'est pas stocké.",
      "body": [
        "Les histoires de rêve sont les valeurs les plus privées que ce service reçoit. Par conséquent, elles ne sont enregistrées dans aucune table. L'entrée est uniquement transportée dans l'adresse de résultat pour le calcul, et une fois la fenêtre fermée, elle disparaît.",
        "Nous avons décidé de ne pas créer une fonctionnalité qui collecte les rêves et montre le flux (journal de rêve). C'est une fonctionnalité utile, mais pour cela, les écrits les plus privés doivent être continuellement stockés.",
        "Lorsque vous envoyez le lien de résultat à d'autres, il contient le contenu du rêve. Veuillez faire attention lors du partage."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Les résultats incluent le dictionnaire de symboles et les critères de calcul.",
      "body": [
        "La base de l'interprétation est le dictionnaire de symboles de rêve traditionnel. Les résultats et documents incluront la version de ce dictionnaire (par exemple, 1.2.0) et la version des règles de correspondance (par exemple dream-1.0.0). Le même rêve produira toujours le même symbole basé sur les mêmes critères.",
        "Si nous ajoutons des symboles au dictionnaire ou changeons des significations d'une manière qui peut altérer les résultats, ce fait est présenté ici. Cela est dû au fait que les résultats que vous avez reçus précédemment peuvent changer.",
        "Nous ne créons pas de significations traditionnelles qui ne sont pas dans le dictionnaire. Si aucun symbole n'est trouvé, nous déclarons simplement qu'aucun n'a été trouvé et concluons."
      ]
    },
    "2026-08-06-conception": {
      "title": "Nous vous informons uniquement d'un rêve de conception et ne portons pas de jugements.",
      "body": [
        "Si des symboles traditionnellement considérés comme un rêve de conception apparaissent dans le rêve, nous vous informerons de ce fait. Cependant, nous ne déterminons pas l'état de grossesse ou le sexe de l'enfant — de telles affirmations n'ont aucun fondement, et les jugements médicaux relèvent des institutions médicales.",
        "La mention de fils et de filles dans les récits traditionnels est un reflet des coutumes qui ont été transmises, et cela ne signifie pas que nous prédisons correctement."
      ]
    }
  }
} satisfies NoticeCopy;
