import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "guide": {
    "eyebrow": "Base de calcul",
    "title": "Quelle est la base de calcul ?",
    "summary": "Nous divulguons toutes les règles que Dreams-Link utilise. Vous pouvez vérifier quels symboles sont trouvés, ce qui est écrit dans le dictionnaire — d'où proviennent les interprétations affichées à l'écran.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tous les chiffres écrits ici sont **lus directement à partir du dictionnaire des symboles et des règles de correspondance.** Comme nous ne transcrivons pas manuellement le texte, si le dictionnaire est élargi ou si les règles sont modifiées, les chiffres dans ces documents changeront également."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base du service",
    "title": "Comment trouver des symboles dans les histoires de rêves.",
    "summary": "Il explique comment les symboles sont sélectionnés à partir de phrases librement écrites et comment nous filtrons un symbole qui se trouve simplement à l'intérieur d'un mot plus long — 별 (\"étoile\") à l'intérieur de 특별할 (\"rien de spécial\").",
    "backLabel": "Base de l'interprétation",
    "sections": [
      {
        "title": "Nous trouvons des symboles dans le texte que vous fournissez.",
        "blocks": [
          {
            "p": "Lorsque vous écrivez librement votre histoire de rêve, nous recherchons des symboles dans ce texte à partir du dictionnaire. Vous n'avez pas besoin de sélectionner des éléments ou d'écrire dans un format spécifique. Écrivez simplement comme vous le feriez normalement, par exemple : 'La nuit dernière, un énorme python s'est enroulé autour de moi.'"
          },
          {
            "p": "Lors de la recherche, nous examinons non seulement le nom du symbole mais aussi **{aliasTotal} noms alternatifs**. Ce sont des mots qui désignent la même chose, comme 구렁이 (gureongi) et 뱀 (baem), 떨어지다 (tteoreojida) et 빠지다 (ppajida). Les variations avec des terminaisons, telles que 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), sont également incluses."
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
              "별 (\"étoile\") caché à l'intérieur de 특**별**할 (\"rien de spécial\")",
              "게 (\"crabe\") caché à l'intérieur de 누군가에**게** (\"par quelqu'un\")",
              "말 (\"cheval\") à l'intérieur de **말**했다 (\"a dit\"), et 배 (\"bateau, poire\") à l'intérieur de **배**가 고팠다 (\"Nous avions faim\")"
            ]
          },
          {
            "p": "Compter ces symboles conduit à des interprétations non pertinentes. Par conséquent, nous examinons les caractères environnants — si **il y a un caractère coréen devant**, nous le considérons comme faisant partie d'un mot plus long et ne le comptons pas, et nous vérifions **si ce qui suit est une particule ou une terminaison verbale**, permettant à 「소가」 (soga) de passer tout en filtrant 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Voici comment cela fonctionne",
        "blocks": [
          {
            "p": "Avant de mettre en œuvre cette règle, lors de tests avec douze phrases réelles, **toutes les douze** contenaient des symboles non pertinents. Une phrase sans contenu significatif a même été marquée comme un a conception dream."
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
            "p": "Il n'y a pas de place pour le hasard dans les règles de correspondance. Comme le dictionnaire est fixe et que les règles sont établies, si vous saisissez à nouveau la même phrase, **le même symbole apparaîtra dans le même ordre**. L'interprétation que vous voyez aujourd'hui ne sera pas différente de celle que vous verrez demain."
          },
          {
            "p": "Cette qualité est également une promesse que nous nous sommes faite. Les interprétations qui changent à chaque fois sont divertissantes mais manquent de fondement. Cela se connecte à l'histoire de [pourquoi nous n'utilisons pas de modèles](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informations personnelles",
    "title": "La méthode de non-stockage des rêves que vous écrivez",
    "summary": "Nous expliquons ce que cela signifie techniquement que les histoires de rêves ne sont enregistrées nulle part, et ce qui est contenu dans le lien de résultat.",
    "backLabel": "Base de l'interprétation",
    "sections": [
      {
        "title": "Aucun abonnement requis",
        "blocks": [
          {
            "p": "Dreams-Link ne crée pas de comptes. Nous ne collectons pas de noms, d'emails ou de numéros de téléphone. Les seules choses que nous collectons sont les rêves que vous écrivez, comment vous vous êtes senti au réveil, et si vous rêvez du même rêve à plusieurs reprises, et cela ne reste pas après que l'interprétation soit complète."
          },
          {
            "p": "Les histoires de rêves sont les valeurs les plus privées que ce service reçoit. C'est pourquoi les règles sont plus strictes que nécessaire — nous n'avons même pas créé de tableau pour écrire ce que vous soumettez."
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
            "p": "Ce qui suit **#** est la valeur d'entrée. Cette partie est appelée un **fragment**, qui est une **partie que le navigateur n'envoie pas au serveur**. C'est un comportement web standard et non une règle que nous avons créée — il a été conçu à l'origine pour indiquer un emplacement dans un document, donc le serveur n'a pas besoin de le voir."
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
            "p": "Pour être honnête, il y a des choses auxquelles nous avons renoncé parce que nous ne stockons pas de données."
          },
          {
            "ul": [
              "**Il n'y a pas de journal de rêves.** Vous ne pouvez pas récupérer l'interprétation de la semaine dernière, et vous devez avoir le lien pour la revoir. Cela est fait intentionnellement — pour créer un journal, les écrits les plus privés doivent être continuellement stockés.",
              "**Nous calculons la même valeur à chaque fois.** Il n'y a pas de cache. Au lieu de cela, le dictionnaire est fixe, et les règles de correspondance sont déterministes, donc le même texte donnera toujours le même symbole — les règles remplacent ce que le cache aurait garanti.",
              "**Rafraîchir fera apparaître à nouveau la porte de publicité.** C'est parce qu'il n'y a nulle part où laisser des enregistrements de visualisation."
            ]
          }
        ]
      },
      {
        "title": "En cas d'achat",
        "blocks": [
          {
            "p": "Si vous achetez un rapport, un enregistrement de transaction sera conservé à ce moment-là. Le paiement a une période de conservation définie par la loi, et sans historique de commande, les remboursements ne peuvent pas être traités. Cependant, même alors, **le texte du rêve utilisé pour la lecture n'est pas attaché à la commande** — il est reçu à nouveau et écrit à ce moment-là lors de la création du document après confirmation du paiement."
          },
          {
            "p": "Pour plus de détails, veuillez vous référer à la [politique de confidentialité](/privacy)."
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
              "**Informations Personnelles** — Nous acceptons les demandes d'accès, de correction et de suppression. La politique de traitement se trouve dans la [politique de confidentialité](/privacy).",
              "**Signaler des Erreurs d'Interprétation** — Si des symboles ont été trouvés incorrectement ou si l'interprétation semble étrange, veuillez nous le faire savoir. Si vous incluez la date à laquelle vous avez écrit cette histoire de rêve, nous pouvons la rechercher à nouveau avec le même texte."
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
            "p": "Vous n'avez pas besoin de réécrire le rêve que vous avez fourni dans l'email de demande. Nous ne sauvegardons pas les entrées, donc nous ne pouvons pas les rechercher à nouveau, et le numéro de commande est suffisant pour la vérification. Veuillez seulement le noter si c'est absolument nécessaire, comme pour signaler des erreurs d'interprétation."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Principes de Service",
    "title": "Ce que nous ne faisons pas",
    "summary": "Nous ne fournissons pas de numéros de loterie, de journaux de rêves, de déterminations de grossesse, ou de talismans. Nous expliquons pourquoi nous avons choisi de ne pas faire chacune de ces choses.",
    "backLabel": "Base d'Interprétation",
    "sections": [
      {
        "title": "Nous ne fournissons pas de numéros de loterie",
        "blocks": [
          {
            "p": "Bien que cela soit couramment abordé dans les services d'interprétation des rêves, nous ne le faisons pas. **Il n'y a pas de fondement dans l'interprétation traditionnelle des rêves pour tirer des numéros des rêves.** Bien qu'il existe des enregistrements d'interprétation des rêves de cochons comme richesse, il n'y a aucune règle dans la littérature qui produise six numéros à partir de cela."
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
            "p": "Bien qu'il serait pratique d'avoir une fonctionnalité pour collecter les rêves passés, cela nous obligerait à **stocker en continu les rêves que vous fournissez.** Les récits de rêves sont l'aspect le plus privé de ce que ce service reçoit, et nous avons décidé de ne pas échanger cela."
          },
          {
            "p": "Au lieu de cela, les rêves que vous souhaitez conserver peuvent être **pris en tant qu'images ou documents.** La responsabilité du stockage incombe aux utilisateurs, pas à nous — [Deux Façons de Conserver Vos Rêves](/guide/reports)"
          }
        ]
      },
      {
        "title": "Nous ne déterminons pas la grossesse ou le sexe",
        "blocks": [
          {
            "p": "Nous indiquerons seulement qu'un symbole interprété comme un rêve de conception (a conception dream) est apparu. Que vous soyez enceinte ou que l'enfant soit une fille ou un garçon **n'est pas quelque chose qui peut être connu à travers les rêves.** De telles déclarations n'apparaissent pas à l'écran ou dans les documents payants."
          }
        ]
      },
      {
        "title": "Nous ne vendons pas de talismans ou de charmes",
        "blocks": [
          {
            "p": "Un symbole interprété comme inauspicieux n'est pas une raison d'acheter quoi que ce soit. Un rêve inauspicieux a traditionnellement été utilisé pour **indiquer une situation à examiner maintenant**, et non pour payer afin d'éviter quelque chose."
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
            "p": "Nous ne faisons pas de déclarations définitives sur si quelque chose va se produire, quand cela va se produire, ou concernant la santé, la richesse, ou la durée de vie. Transmettre les significations des symboles traditionnels et prédire l'avenir sont des choses différentes."
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
  },
  "about": {
    "eyebrow": "Introduction",
    "title": "Introduction à Dreams-Link",
    "summary": "Ceci est un service qui interprète les rêves en utilisant un dictionnaire de symboles d'interprétation des rêves traditionnel. Il clarifie ce qui est basé et ce qui n'est pas déclaré.",
    "backLabel": "Retour à l'accueil",
    "sections": [
      {
        "title": "Que faisons-nous ?",
        "blocks": [
          {
            "p": "Dreams-Link trouve **des symboles utilisés dans l'interprétation des rêves traditionnelle** à partir des rêves que vous écrivez et montre leurs significations. Étant donné que les rêves sont quelque chose que nous avons chaque jour, les interprétations que vous voyez à l'écran sont **gratuites et ne nécessitent pas d'adhésion.**"
          },
          {
            "p": "Les seules choses vendues moyennant des frais sont **deux formes de préservation** — une image contenant un bon rêve (carte de rêve) et un PDF qui contient le contexte lorsqu'un symbole traditionnellement considéré comme un rêve de conception apparaît."
          }
        ]
      },
      {
        "title": "Quelle est la base ?",
        "blocks": [
          {
            "p": "La base de l'interprétation est un **dictionnaire de {symbolTotal} symboles**. Nous trouvons des symboles dans le texte du rêve et montrons uniquement les significations enregistrées dans le dictionnaire pour ces symboles. Si un symbole a plusieurs significations, nous choisissons en fonction de la situation — comme le lever de soleil et le coucher de soleil sont traditionnellement interprétés comme des opposés."
          },
          {
            "p": "Toutes les significations dans le dictionnaire sont **traduites des textes originaux des anciens livres d'interprétation des rêves**, et chaque signification est accompagnée du texte original qui a servi de base. Les textes originaux utilisés comme base sont deux — le **Zhou Gong's Dream Interpretation**, qui est lu depuis longtemps en Asie de l'Est, et le **Miller's Dream Book** de l'Ouest publié en 1901."
          },
          {
            "p": "La recherche est effectuée **uniquement selon des règles fixes**. Le même rêve produira toujours les mêmes symboles, et les interprétations ne changent pas d'hier à aujourd'hui."
          }
        ]
      },
      {
        "title": "Que ne disons-nous pas ?",
        "blocks": [
          {
            "p": "**Nous ne créons pas de significations traditionnelles qui ne sont pas dans le dictionnaire.** Si aucun symbole n'est trouvé, nous indiquons simplement qu'aucun n'a été trouvé et concluons. Remplir cet espace avec des mots plausibles est ce dont ce service se méfie le plus."
          },
          {
            "p": "**Les rêves de conception ne sont que des indications, pas des déterminations.** Nous vous informons uniquement qu'un symbole traditionnellement considéré comme un rêve de conception est apparu dans le rêve. Nous ne prédisons pas une grossesse ou le sexe de l'enfant, et il n'y a aucune base pour de telles affirmations."
          },
          {
            "p": "Nous ne **faisons pas de déclarations définitives sur la santé, la richesse ou la carrière.** Ceci est une référence du point de vue de l'interprétation traditionnelle des rêves et ne constitue pas un avis médical, financier ou juridique."
          }
        ]
      },
      {
        "title": "Nous ne conservons pas les rêves que vous écrivez.",
        "blocks": [
          {
            "p": "Les histoires de rêves sont la partie la plus privée de ce que ce service reçoit. Par conséquent, nous **ne les stockons pas.** Les entrées ne sont utilisées que pour des calculs et ne sont pas enregistrées sous aucune forme sur le serveur."
          },
          {
            "p": "Nous avons décidé **de ne pas créer une fonction pour collecter les rêves comme un journal de rêve.** C'est une fonctionnalité précieuse, mais cela nécessiterait de conserver les écrits les plus privés."
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
  "guide/symbol-dictionary": {
    "eyebrow": "Base du service",
    "title": "Quelle est la base du dictionnaire des symboles ?",
    "summary": "Il clarifie d'où proviennent les interprétations. Les critères pour diviser {symbolTotal} symboles en huit catégories, la raison d'attacher des passages de texte originaux à chaque signification, et le principe de ne pas remplir les espaces vides.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Nous montrons uniquement ce qui est écrit dans le dictionnaire.",
        "blocks": [
          {
            "p": "Les interprétations de Dreams-Link proviennent d'un **dictionnaire de symboles pré-écrit**. Nous trouvons des symboles dans le texte que vous fournissez et montrons les significations enregistrées dans le dictionnaire pour ces symboles telles qu'elles sont. Nous ne créons pas de mots qui ne sont pas dans le dictionnaire."
          },
          {
            "p": "Actuellement, le dictionnaire contient **{symbolTotal} symboles**, et tous ces symboles ont un total de **{meaningTotal} significations**. Certains symboles n'ont qu'une seule signification, mais la plupart en ont plusieurs, et pour chaque signification, **la situation dans laquelle cette signification s'applique** est également notée."
          }
        ]
      },
      {
        "title": "Divisé en huit catégories.",
        "blocks": [
          {
            "p": "Nous avons regroupé ce qui apparaît dans les rêves en huit catégories en fonction de leurs caractéristiques. Le nombre actuellement répertorié est entre parenthèses."
          },
          {
            "ul": [
              "**Objets**({categoryThing}) · **Actions**({categoryAction}) · **Animaux**({categoryAnimal}) — les trois catégories les plus importantes. Ce sont principalement ce dont parlent les anciens livres d'interprétation des rêves : objets visibles, bêtes et actions entreprises dans les rêves.",
              "**Nature**({categoryNature}) · **Personnes**({categoryPerson}) — de grandes et anciennes choses comme l'eau, le feu, le soleil et la lune, et des personnes qui apparaissent dans les rêves comme des rois, des voleurs et les défunts.",
              "**Lieux**({categoryPlace}) · **Corps**({categoryBody}) · **Couleurs**({categoryColor}) — des lieux comme des maisons et des tombes, des parties du corps comme des dents, des cheveux et du sang, et des couleurs."
            ]
          },
          {
            "p": "Pour les voir par catégorie, vous pouvez consulter la liste complète dans le [dictionnaire des symboles](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Chaque signification est accompagnée d'un passage de texte original.",
        "blocks": [
          {
            "p": "Chacune des **{meaningTotal} significations** dans le dictionnaire est accompagnée du **passage de texte original** qui a servi de base à cette signification. Tous les {symbolTotal} symboles ont cela — s'il n'y a pas de passage de texte original, l'entrée elle-même ne peut pas être créée."
          },
          {
            "p": "Les textes originaux utilisés comme base sont deux. **Zhou Gong's Dream Interpretation** est un livre d'interprétation des rêves qui est lu depuis longtemps en Asie de l'Est, et **Miller's Dream Book** est un livre occidental publié en 1901. Lorsque vous ouvrez un symbole, vous pouvez voir de quel texte original provient la signification, ainsi que le passage et sa signification."
          },
          {
            "p": "**Nous ne remplissons pas les espaces vides.** Ajouter des origines plausibles rendrait le document plus épais, mais à ce moment-là, ce dictionnaire ne serait plus une traduction de ce qui a été transmis mais plutôt une fabrication. Nous n'écrivons pas ce qui n'est pas dans le texte original, et pour ce que nous écrivons, nous devons joindre le texte original."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lors de l'expansion, nous n'élargissons qu'à partir du texte original.",
        "blocks": [
          {
            "p": "Nous avons essayé de créer des entrées basées sur des modèles de symboles, mais les entrées résultantes répètent soit les mêmes mots comme 「amour → bonne relation」 soit ne fournissent aucune base de la tradition. Par conséquent, **nous n'en avons inclus aucune.** La taille actuelle du dictionnaire est due à la traduction des textes originaux, pas à la création d'entrées — les raisons de ne pas utiliser de modèles sont détaillées dans [pourquoi nous n'utilisons pas de modèles](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Le bon et le mauvais sont prédéterminés par le dictionnaire.",
        "blocks": [
          {
            "p": "Chaque symbole est accompagné d'indications d'auspiciousness et d'inauspiciousness. **Bon {polarityPositive}**, **ambivalent selon la situation {polarityAmbivalent}**, **prudent {polarityNegative}**, et **neutre {polarityNeutral}**."
          },
          {
            "p": "Parmi les quatre catégories, **la plupart sont celles qui varient selon la situation.** Ce n'est pas quelque chose que nous avons équilibré ; c'est ainsi qu'il est écrit dans les textes originaux — même pour le même symbole, il y a de nombreux endroits où il a été interprété de manière opposée selon ce qui a été fait. Cette valeur reflète la nature de chaque symbole, et l'atmosphère générale du rêve est recalculée en rassemblant les symboles trouvés."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Base du service",
    "title": "Pourquoi le même symbole a-t-il des significations différentes ?",
    "summary": "Le lever de soleil et le coucher de soleil sont traditionnellement interprétés comme des opposés. Cela discute de la structure où {symbolTotal} symboles ont {meaningTotal} significations et comment discerner la situation.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Même si les symboles sont les mêmes, différentes situations donnent des significations différentes.",
        "blocks": [
          {
            "p": "Dans les anciens livres d'interprétation des rêves, un symbole n'a pas toujours une seule signification. Même pour le même soleil, **le lever de soleil et le coucher de soleil ont été interprétés de manière opposée** — le premier indique la prospérité dans le foyer, tandis que le second indique des inquiétudes concernant la perte des parents. Le dictionnaire est écrit de cette manière."
          },
          {
            "p": "La raison pour laquelle les {symbolTotal} symboles ont un total de {meaningTotal} significations est que pour chaque signification, **la situation dans laquelle cette signification s'applique** est également notée, donc si cette situation est visible dans le texte que vous fournissez, nous choisissons cette signification."
          }
        ]
      },
      {
        "title": "Comment discernons-nous la situation ?",
        "blocks": [
          {
            "p": "Nous cherchons à voir s'il y a des mots indiquant la situation dans le texte que vous fournissez. Dans la phrase 「J'ai vu le soleil se coucher」, la situation de coucher est indiquée, tandis que dans 「J'ai vu le soleil juste se lever」, la situation de lever est indiquée. S'il n'y a pas de mots indiquant la situation, nous l'interprétons en fonction de la **signification de base** de ce symbole."
          },
          {
            "p": "Donc, lorsque vous écrivez votre rêve, veuillez inclure **non seulement ce qui est apparu mais aussi quelles actions ont été entreprises** ; cela rendra l'interprétation plus précise. Dire \"J'ai vu un cochon\" transmet moins que \"le cochon est entré dans la maison.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Plus vous écrivez, mieux c'est, mais il n'est pas nécessaire d'écrire de manière extensive.",
        "blocks": [
          {
            "p": "Quelques phrases suffisent. Écrire plus ne signifie pas nécessairement trouver plus de symboles ; au contraire, si des déclarations non liées sont mélangées, cela peut conduire à des symboles incorrects."
          }
        ]
      },
      {
        "title": "Il y a {contextSplitSymbolTotal} symboles avec des significations variées.",
        "blocks": [
          {
            "p": "Parmi les {symbolTotal} symboles dans le dictionnaire, **{contextSplitSymbolTotal}** ont des significations qui varient selon la situation. Le reste peut être interprété dans une seule direction, quelle que soit la situation."
          },
          {
            "p": "Ces **{contextSplitSymbolTotal}** symboles sont les plus délicats. Mal interpréter la situation peut conduire à transmettre de bonnes nouvelles comme de mauvaises nouvelles, ou vice versa. Par conséquent, si la situation est floue, nous nous en tenons à la **signification de base du symbole** sans forcer un choix — nous ne voulons pas parler de l'incertain comme s'il était certain."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La sensation au réveil est également prise en compte.",
        "blocks": [
          {
            "p": "Les sentiments et répétitions demandés ci-dessous le contenu du rêve ne sont pas utilisés pour trouver des symboles. Ils sont référencés lors de la détermination de la manière d'interpréter dans les cas de significations variées. Vous n'avez pas besoin de choisir ; les résultats seront tout de même fournis."
          }
        ]
      },
      {
        "title": "L'atmosphère générale du rêve est comptée séparément.",
        "blocks": [
          {
            "p": "Si plusieurs symboles sont trouvés, nous rassemblons si chaque symbole est positif ou d'avertissement pour déterminer le ton général du rêve. Un rêve qui présente un bon symbole et un symbole d'avertissement n'est pas simplement appelé un \"bon rêve.\""
          },
          {
            "p": "Vous pouvez prévisualiser les différents symboles et leurs significations dans le [dictionnaire des symboles](/dream/symbols). Il est également bon de parcourir ce qui est inclus avant d'écrire votre rêve."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Base du service",
    "title": "Critères pour distinguer les rêves auspices et les rêves ominous",
    "summary": "Les quatre valeurs attribuées à chaque symbole et leur distribution, les raisons des significations les plus variées, et pourquoi nous discutons des rêves mixtes comme mixtes.",
    "backLabel": "Base de l'interprétation",
    "sections": [
      {
        "title": "Chaque symbole est attribué à l'une des quatre catégories.",
        "blocks": [
          {
            "p": "Les {symbolTotal} symboles dans le dictionnaire sont chacun catégorisés comme l'un des suivants."
          },
          {
            "ul": [
              "**Positif {polarityPositive}** — interprété comme des événements agréables comme la richesse, les célébrations ou les bienfaiteurs.",
              "**Ambivalent {polarityAmbivalent}** — symboles comme le soleil ou le cochon qui peuvent avoir leurs significations inversées selon les actions entreprises. **C'est la catégorie la plus courante et la plus prudente.**",
              "**Avertissement {polarityNegative}** — interprété comme des disputes, des pertes ou des événements négatifs.",
              "**Neutre {polarityNeutral}** — symboles qui ne sont ni auspices ni ominous en eux-mêmes, comme les couleurs."
            ]
          }
        ]
      },
      {
        "title": "Raisons des significations les plus variées",
        "blocks": [
          {
            "p": "Ce n'est pas un équilibre que nous avons atteint. **C'est ainsi que les textes originaux sont écrits.** Les anciens textes d'interprétation des rêves ont enregistré différentes significations pour le même symbole selon la situation, et beaucoup de ces situations sont opposées — attraper un cochon est auspice, mais un cochon mourant de lui-même est ominous, et il en va de même pour le lever et le coucher du soleil."
          },
          {
            "p": "Par conséquent, le fait qu'\"un bon symbole soit apparu\" ne signifie pas \"de bonnes choses vont arriver.\" Ce que nous pouvons transmettre est limité à la manière dont ce symbole a été interprété dans la tradition."
          }
        ]
      },
      {
        "title": "Le ton d'un rêve est rassemblé à partir de ses symboles.",
        "blocks": [
          {
            "p": "Si plusieurs symboles sont trouvés, nous rassemblons leurs significations auspices et d'avertissement pour déterminer le ton général du rêve. Si seuls des symboles positifs apparaissent, c'est un bon rêve ; si seuls des symboles d'avertissement apparaissent, c'est un rêve d'avertissement ; si **mixte, nous en discuterons comme mixte.**"
          },
          {
            "p": "Nous ne forçons pas une interprétation mixte d'un côté. En réalité, les rêves que les gens ont sont principalement mixtes, et les résumer comme \"un bon rêve\" n'est ni précis ni utile."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mots non prononcés",
        "blocks": [
          {
            "p": "Nous ne faisons pas de déclarations définitives sur ce qui va se passer, quand cela va se passer, ou concernant la santé et la richesse. Traduire les significations des symboles traditionnels est différent de prédire l'avenir."
          }
        ]
      },
      {
        "title": "Lorsque des rêves d'avertissement apparaissent",
        "blocks": [
          {
            "p": "Même si un symbole interprété comme d'avertissement apparaît, cela ne signifie pas nécessairement de mauvaises nouvelles. Dans l'interprétation traditionnelle des rêves, les rêves ominous ont généralement été utilisés pour indiquer **la situation qui doit être examinée maintenant.** Si un symbole interprété comme une dispute apparaît, il peut être lu comme une suggestion de garder le silence."
          },
          {
            "p": "Pour la même raison, ce service ne vend pas de talismans ou de charmes. Les seules choses vendues sont [deux méthodes pour garder vos rêves](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Rêves de conception",
    "title": "Comment distinguer les rêves de conception",
    "summary": "Comment nous déterminons les {conceptionSymbolTotal} symboles de rêve de conception, pourquoi tous les rêves de cochons ne sont pas des rêves de conception, et le principe selon lequel nous ne déterminons pas la grossesse ou le sexe.",
    "backLabel": "Base de l'interprétation",
    "sections": [
      {
        "title": "Tout d'abord, clarifions.",
        "blocks": [
          {
            "p": "**Dreams-Link ne détermine pas l'état de grossesse. Nous ne déclarons pas non plus le sexe de l'enfant.** Ce n'est pas quelque chose qui peut être connu à travers les rêves, ni quelque chose que nous pouvons faire."
          },
          {
            "p": "Ce que nous pouvons transmettre est limité à cela — **le fait qu'un symbole traditionnellement interprété comme un rêve de conception soit apparu dans ce rêve.** Comment ce symbole a été interprété par les anciens est tout ce que nous pouvons fournir."
          }
        ]
      },
      {
        "title": "Il y a {conceptionSymbolTotal} symboles interprétés comme des rêves de conception.",
        "blocks": [
          {
            "p": "Parmi les {symbolTotal} symboles dans le dictionnaire, **{conceptionSymbolTotal}** sont marqués comme des rêves de conception. Beaucoup sont des animaux comme des dragons, des cochons et des tigres, ainsi que des fruits comme des pêches, des kakis et des jujubes, et incluent également le soleil et la lune."
          },
          {
            "p": "Cependant, **le fait que ce symbole soit apparu ne signifie pas immédiatement qu'il s'agit d'un rêve de conception.** C'est là que ce service a mis un effort significatif."
          }
        ]
      },
      {
        "title": "Nous déterminons en fonction de la signification choisie, pas du symbole.",
        "blocks": [
          {
            "p": "Le cochon est un symbole de rêves de conception, mais c'est aussi **le représentant des rêves de richesse.** Si nous déclarons que c'est un rêve de conception uniquement parce que le symbole est apparu, alors tout le monde qui rêve de cochons aurait des rêves de conception. En réalité, la plupart ont été interprétés comme des rêves de richesse."
          },
          {
            "p": "Par conséquent, nous regardons **la signification réellement choisie de ce symbole, pas seulement le symbole lui-même.** Nous ne le marquons comme un rêve de conception que lorsque la signification penchée vers la conception est choisie en fonction de la situation que vous avez fournie. Même avec le même cochon, l'interprétation peut différer selon la phrase."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si vous mentionnez la grossesse, nous examinerons cela en premier.",
        "blocks": [
          {
            "p": "Si votre écriture inclut des termes comme grossesse, rêves de conception ou accouchement, nous donnerons la priorité à la signification de conception parmi les significations que ce symbole détient. Même le même rêve peut être interprété différemment selon la situation actuelle."
          }
        ]
      },
      {
        "title": "La raison d'avoir un rapport de rêve de conception séparé.",
        "blocks": [
          {
            "p": "Les rêves de conception servent un but différent des autres rêves. Ils sont souvent discutés longtemps après la naissance de l'enfant et partagés entre les membres de la famille. Par conséquent, plutôt que de simplement le voir sur un écran, nous avons créé un **document qui peut être conservé.**"
          },
          {
            "p": "Ce qui est inclus est décrit dans [deux méthodes pour garder vos rêves](/guide/reports). Vous pouvez voir toutes les interprétations sans les acheter."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Comment utiliser",
    "title": "Comment écrire un rêve",
    "summary": "Si vous écrivez ce que vous avez vu et fait, cela sera bien interprété. Nous expliquons pourquoi un seul verbe décide de la signification, et pourquoi nous demandons également comment vous vous êtes senti et si le rêve se reproduit.",
    "backLabel": "Base de l'interprétation",
    "sections": [
      {
        "title": "Veuillez écrire ce que vous avez vu et fait",
        "blocks": [
          {
            "p": "Il n'y a pas de format spécifique. Deux ou trois phrases, comme vous parleriez normalement, suffisent. Cependant, ce qui est bien interprété est déterminé — **ce que vous avez vu** et **ce qui s'est passé**."
          },
          {
            "ul": [
              "Bien interprété — 「Un grand serpent m'a entouré」, 「J'ai vu de l'eau claire couler」, 「Ma dent est tombée toute seule」",
              "Pas interprété — 「J'avais peur」, 「Je me sentais étrange」, 「Il semblait que quelqu'un me détestait」"
            ]
          },
          {
            "p": "Si vous écrivez seulement vos sentiments, il n'y aura pas de symboles à trouver. L'interprétation des rêves traditionnelle parle de [objets et actions](/guide/categories), pas d'émotions."
          }
        ]
      },
      {
        "title": "Écrire ce que vous avez fait le rend plus précis",
        "blocks": [
          {
            "p": "Même le même symbole peut avoir des significations différentes selon la situation, avec {contextSplitSymbolTotal} cas. Le lever et le coucher du soleil ont traditionnellement été interprétés de manière opposée."
          },
          {
            "p": "Par conséquent, 「J'ai vu un cochon」 est moins précis que 「Le cochon est entré dans la maison」, et 「Il y avait de l'eau」 est moins précis que 「J'ai bu de l'eau claire」. **Un seul verbe détermine le sens.**"
          }
        ]
      },
      {
        "title": "La raison de demander des sentiments et des récurrences",
        "blocks": [
          {
            "p": "Sous le contenu du rêve, il y a un endroit pour choisir **comment vous vous êtes senti au réveil** et **si vous avez des rêves récurrents**. Vous n'avez pas besoin de sélectionner les deux pour que des résultats soient fournis."
          },
          {
            "p": "Ces valeurs ne sont pas utilisées pour trouver des symboles. Elles sont référencées lors de la décision **de quel sens choisir** parmi le même symbole et comment transmettre les résultats. Les rêves récurrents ont traditionnellement été vus différemment d'un rêve qui a été fait une seule fois."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dans les cas mentionnant la grossesse",
        "blocks": [
          {
            "p": "Si le texte inclut des mots comme grossesse, rêve de conception, ou accouchement, nous regardons d'abord la signification du rêve de conception de ce symbole. Même le même rêve de cochon a été interprété différemment par les anciens selon la situation — [comment distinguer 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Il n'est pas nécessaire d'écrire long",
        "blocks": [
          {
            "p": "Une longueur plus longue ne signifie pas que plus de symboles seront trouvés. En fait, si des mots non liés sont mélangés longuement, il y a une chance accrue que des mots non pertinents soient interprétés comme des symboles. Veuillez écrire uniquement les **scènes mémorables**."
          },
          {
            "p": "Le texte que vous écrivez ne sera enregistré nulle part. La raison pour laquelle vous pouvez écrire librement est expliquée dans [la méthode de non-enregistrement](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base du service",
    "title": "Critères divisés en huit catégories",
    "summary": "Huit catégories — des objets, actions et animaux jusqu'au corps et aux couleurs — avec combien de symboles chacune contient, et pourquoi il n'y a pas de catégorie pour les émotions.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Divisé en huit catégories de ce qui apparaît dans les rêves",
        "blocks": [
          {
            "p": "Nous avons regroupé {symbolTotal} symboles en huit catégories selon leur caractère. La question de division est **ce qu'il apparaît comme dans le rêve** — une bête, un objet, ou quelque chose que vous avez fait."
          },
          {
            "ul": [
              "**Objets {categoryThing}** — articles tangibles comme de l'argent, des miroirs et des couteaux. C'est la catégorie la plus fournie.",
              "**Actions {categoryAction}** — choses faites ou vécues dans le rêve, comme se baigner, faire la fête, ou être battu.",
              "**Animaux {categoryAnimal}** — dragons, cochons, serpents et vaches. Beaucoup d'entre eux ont été vus comme 태몽.",
              "**Nature {categoryNature}** — grandes et anciennes choses comme l'eau, le feu, le soleil et la lune.",
              "**Personnes {categoryPerson}** — personnes apparaissant dans les rêves, comme des rois, des voleurs et des individus décédés.",
              "**Lieux {categoryPlace}** — emplacements où les rêves se produisent, comme des maisons, des puits et des tombes.",
              "**Corps {categoryBody}** — dents, cheveux, sang. La signification varie selon l'endroit sur le corps.",
              "**Couleurs {categoryColor}** — elles n'ont pas de bon ou de mauvais inhérent et sont interprétées en fonction de ce avec quoi elles sont associées."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "La raison de ne pas avoir de catégories numériques",
        "blocks": [
          {
            "p": "Nous n'avons pas créé de catégorie pour des nombres tels que 「trois」 ou 「sept」. **Aucun des deux textes originaux ne fixe un nombre comme entrée.** Pour ouvrir cette catégorie et la remplir, nous devrions écrire quelque chose qui n'apparaît dans aucun des textes."
          }
        ]
      },
      {
        "title": "Pourquoi il n'y a pas de catégorie émotionnelle",
        "blocks": [
          {
            "p": "Nous n'avons pas créé de catégorie pour des sentiments tels que 「anxiété」 ou 「nostalgie」. **C'est parce que les textes d'interprétation des rêves anciens ne mentionnent pas les émotions.** Les deux textes originaux parlent de ce qui est vu et de ce qui se passe, pas des sentiments du rêveur comme sujet d'interprétation."
          },
          {
            "p": "Nous avons une fois essayé de construire une catégorie pour les émotions, et ce qui en est sorti étaient des termes comme 「perte d'affection」 et 「stabilité émotionnelle」. Ce ne sont pas des **formes** apparaissant dans les rêves mais du vocabulaire de la psychologie moderne. C'est un type de service différent et ce n'est pas ce que ce dictionnaire vise à faire."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Alors quand vous écrivez",
        "blocks": [
          {
            "p": "Veuillez écrire **ce que vous avez vu et fait** plutôt que des sentiments, car cela sera beaucoup mieux interprété. Cependant, nous demandons séparément comment vous vous êtes senti au réveil — cela est référencé dans les situations où les significations peuvent varier même pour le même symbole."
          }
        ]
      },
      {
        "title": "Les couleurs ne sont pas utilisées seules",
        "blocks": [
          {
            "p": "Les couleurs {categoryColor} n'ont pas de bon ou de mauvais inhérent. Tout comme les serpents bleus et rouges ont été interprétés différemment, leurs significations changent en fonction de **ce avec quoi elles sont associées**. Par conséquent, cette catégorie est considérée comme des valeurs lues lorsqu'elles apparaissent avec d'autres symboles."
          },
          {
            "p": "La liste complète par catégorie est disponible dans le [Dictionnaire des Symboles](/dream/symbols). Lorsque vous ouvrez un symbole, la signification transmise, la catégorie et les symboles associés seront fournis."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Comment utiliser",
    "title": "Lorsque qu'un symbole n'est pas trouvé",
    "summary": "Si rien n'est trouvé, nous le disons. Nous couvrons pourquoi cela se produit, ce que nous montrons sur cet écran à la place, et comment le dictionnaire est élargi.",
    "backLabel": "Base d'interprétation",
    "sections": [
      {
        "title": "Lorsque nous ne trouvons rien, nous disons que nous n'avons rien trouvé",
        "blocks": [
          {
            "p": "Si nous ne pouvons trouver aucun symbole dans le texte que vous avez écrit, nous **vous disons que nous n'avons rien trouvé.** Nous ne forçons pas un symbole similaire dessus, ni n'écrivons une phrase plausible pour combler le vide."
          },
          {
            "p": "C'est le problème le plus préoccupant pour ce service. Au moment où vous remplissez le vide, l'interprétation qui en découle et ce qui est réellement fait divergent."
          }
        ]
      },
      {
        "title": "Pourquoi ne peut-il pas être trouvé ?",
        "blocks": [
          {
            "p": "C'est généralement l'un des éléments suivants."
          },
          {
            "ul": [
              "**C'est un symbole qui n'est pas encore dans le dictionnaire.** Actuellement, il y a {symbolTotal} symboles répertoriés, mais il y en a beaucoup d'autres qui pourraient apparaître dans les rêves.",
              "**Vous n'avez écrit que vos sentiments.** Si vous n'avez que des émotions comme \"J'avais peur\" ou \"Je me sentais étrange,\" il n'y a pas de symboles qui peuvent être identifiés. L'interprétation des rêves traditionnelle fait référence à **des objets et des actions visibles**, pas aux émotions.",
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
            "p": "Veuillez inclure **ce que vous avez vu et ce que vous avez fait** dans le rêve. Dire \"J'étais anxieux\" est moins efficace que de dire \"mes dents sont tombées toutes seules,\" et \"j'ai aimé ça\" est moins efficace que de dire \"j'ai vu de l'eau claire couler.\""
          }
        ]
      },
      {
        "title": "Nous ne laissons pas un écran vide",
        "blocks": [
          {
            "p": "Lorsque quelque chose ne peut pas être trouvé, nous montrons également **{popularSymbolCount} symboles fréquemment recherchés** sur cet écran. Ceux-ci sont sélectionnés parmi les plus représentatifs dans le dictionnaire, ce qui peut vous aider à vous rappeler si l'un d'eux était dans votre rêve."
          },
          {
            "p": "Si vous souhaitez parcourir tout, vous pouvez trouver {symbolTotal} symboles organisés par catégorie dans le [dictionnaire des symboles](/dream/symbols). Chaque symbole inclut sa signification et des symboles associés."
          }
        ]
      },
      {
        "title": "Comment le dictionnaire s'élargira-t-il à l'avenir ?",
        "blocks": [
          {
            "p": "Plutôt que d'augmenter les chiffres, nous nous concentrons d'abord sur **l'identification précise de ce qui est déjà là**. Nous avons inclus {aliasTotal} noms alternatifs pour les mêmes symboles, et nous avons veillé à ce que les mots avec des suffixes qui changent leurs formes puissent également être identifiés."
          },
          {
            "p": "Lors de l'expansion des symboles eux-mêmes, nous n'incluons que **ce qui est écrit dans le texte original**. Si une signification n'a pas de phrase originale correspondante, une entrée ne sera pas créée — simplement augmenter les chiffres sans fondement en fait une création, pas un dictionnaire. Les raisons de cette tentative et ses résultats sont documentés dans [pourquoi nous n'utilisons pas de modèles](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base du service",
    "title": "Raisons de ne pas utiliser l'intelligence artificielle dans l'interprétation des rêves",
    "summary": "Il n'y a pas de code qui appelle un modèle pour créer des interprétations. C'est le résultat d'une tentative d'élargir le dictionnaire en utilisant un modèle et ce qui a été gagné et ce qui a été sacrifié en conséquence.",
    "backLabel": "Base de l'interprétation",
    "sections": [
      {
        "title": "L'intelligence artificielle n'est pas utilisée dans l'interprétation des rêves",
        "blocks": [
          {
            "p": "De nombreux services d'interprétation des rêves actuels montrent des écrits générés en insérant des histoires de rêves dans des modèles génératifs. Dreams-Link ne fait pas cela. **Il n'y a pas de code qui appelle un modèle pour créer des interprétations.**"
          },
          {
            "p": "Ce que nous faisons est simple. Nous trouvons les symboles dans le texte que vous fournissez et sélectionnons les significations que le dictionnaire a écrites sur ces symboles. Il n'y a pas de place pour des phrases qui ne sont pas dans le dictionnaire."
          },
          {
            "p": "Le dictionnaire lui-même n'est pas créé par un modèle. Chaque signification est accompagnée de **quel passage du texte original d'interprétation des rêves elle provient**, et ce passage est comparé mot à mot avec le fichier original."
          }
        ]
      },
      {
        "title": "Pourquoi cette décision a-t-elle été prise ?",
        "blocks": [
          {
            "p": "**Les modèles ne disent pas qu'ils ne savent pas ce qu'ils ne savent pas.** Lorsqu'on leur demande des symboles sans fondement, ils fabriquent des origines plausibles. Et que ce soit fabriqué ou non est quelque chose que le lecteur ne peut pas discerner. Si la création est insérée à la place de la transmission de la tradition, le principe du service s'effondre."
          },
          {
            "p": "Nous avons essayé de laisser un modèle créer des symboles pour élargir le dictionnaire. Parmi soixante-six exemples sélectionnés comme dignes d'adoption, **cinquante-cinq n'ont pu fournir aucun fondement**, et il y avait aussi des exemples comme le métro et l'autoroute qui ne peuvent pas exister dans l'interprétation traditionnelle des rêves. Par conséquent, **aucun n'a été inclus.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il en était de même même avec un modèle plus grand",
        "blocks": [
          {
            "p": "Lorsque nous avons exécuté la même chose sur un meilleur modèle, un sur dix-neuf a réussi, et celui-ci n'était qu'une répétition du même mot avec le même fondement. Un modèle plus grand ne parle que **plus plausiblement** de ce qu'il ne sait pas."
          }
        ]
      },
      {
        "title": "Les avantages de ne pas utiliser un modèle",
        "blocks": [
          {
            "ul": [
              "**Si c'est le même rêve, la même interprétation en sortira.** Les mots ne changent pas chaque fois que vous le regardez.",
              "**C'est rapide.** Il n'y a pas d'attente pour la réponse du modèle, donc les résultats sont immédiatement disponibles.",
              "**Le rêve que vous avez écrit ne sort pas.** Il n'est pas nécessaire de l'envoyer au serveur d'une entreprise externe — veuillez lire cela avec [la méthode qui ne sauvegarde pas](/guide/no-storage).",
              "**Il peut être offert gratuitement.** Les rêves sont quelque chose que nous avons chaque jour, donc il y a de nombreuses demandes. Si un modèle est appelé pour chaque demande, le coût doit être couvert d'une manière ou d'une autre."
            ]
          }
        ]
      },
      {
        "title": "Au lieu de cela, ce qui a été sacrifié",
        "blocks": [
          {
            "p": "Nous ne pouvons pas interpréter ce qui n'est pas dans le dictionnaire. Si nous avions utilisé un modèle, il y aurait eu une réponse plausible pour tout ce que vous avez écrit. Nous avons choisi de **dire que nous ne pouvions pas le trouver lorsque nous ne pouvions pas le trouver.** Ce que nous montrons à ce moment-là est documenté dans [lorsqu'un symbole ne peut pas être trouvé](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produits payants",
    "title": "Deux façons de garder vos rêves",
    "summary": "L'interprétation elle-même n'entraîne pas de frais. Elle explique quelles sont les deux options payantes, ce qu'elles contiennent et pourquoi elles ne sont pas de meilleures interprétations.",
    "backLabel": "Base de l'interprétation",
    "sections": [
      {
        "title": "L'interprétation elle-même n'entraîne pas de frais",
        "blocks": [
          {
            "p": "Écrire votre rêve et voir quels symboles sont inclus **ne coûte pas d'argent et ne nécessite pas d'adhésion.** Puisque les gens rêvent chaque jour, nous avons jugé que cet espace devait être offert gratuitement."
          },
          {
            "p": "**Les deux options payantes ne sont pas de meilleures interprétations.** Ce sont **deux façons de garder la même interprétation.** Le contenu que vous voyez à l'écran ne change pas après le paiement."
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
            "p": "C'est pour ceux qui ressentent des regrets lorsque un bon rêve disparaît après la fermeture de l'écran. Puisque nous ne sauvegardons pas les rêves, c'est le seul moyen de les conserver si vous souhaitez les préserver."
          }
        ]
      },
      {
        "title": "Rapport de rêve de conception — Document {conceptionPages} pages",
        "blocks": [
          {
            "p": "Nous créons un **document de {conceptionPages} pages** sur les rêves qui montrent des symboles indiquant un rêve de conception. Il inclut quels symboles sont apparus, comment ces symboles ont été traditionnellement interprétés, et un espace pour enregistrer cette information."
          },
          {
            "p": "Les rêves de conception sont souvent discutés et partagés parmi les membres de la famille même après la naissance de l'enfant, donc nous avons créé un document séparé pour les rêves qui sont trop précieux pour être simplement vus à l'écran."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mots non utilisés ici non plus",
        "blocks": [
          {
            "p": "Nous ne faisons pas de jugements sur l'état de grossesse ou le sexe de l'enfant. De telles déclarations ne sont pas incluses dans le document. Pour plus de détails, veuillez vous référer à [comment les rêves de conception sont filtrés](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Pourquoi n'y a-t-il plus de document ?",
        "blocks": [
          {
            "p": "Le service frère produit un rapport de neuf pages. C'est parce que le moteur de saju extrait beaucoup de valeurs à partir d'une seule date de naissance. L'interprétation des rêves dans la tradition coréenne ne fonctionne pas de cette manière."
          },
          {
            "p": "Le dictionnaire contient {symbolTotal} symboles et {meaningTotal} significations, mais **seuls quelques symboles s'appliquent réellement à un seul rêve**. Pour élargir cela en neuf pages, il faudrait écrire des choses qui ne se trouvent dans aucun texte original, et c'est précisément ce que ce service a choisi de ne pas faire. Par conséquent, le document est aussi long que les matériaux le permettent honnêtement, et pas plus."
          }
        ]
      },
      {
        "title": "Valeurs et disponibilité",
        "blocks": [
          {
            "p": "Les prix sont disponibles dans le [guide des prix](/pricing). La raison pour laquelle ce document ne liste pas les montants est intentionnelle — pour éviter des situations où le document d'orientation reste avec des montants obsolètes lorsque les valeurs changent. L'écran et les termes lisent tous les montants au même endroit."
          },
          {
            "p": "Le document pour lequel vous avez payé peut **être reçu à nouveau avec la même commande.** Cependant, comme nous ne stockons pas les fichiers, il ne peut pas être recréé une fois que vous quittez l'écran des résultats — veuillez conserver le fichier que vous avez reçu."
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
  "intro": "Les changements de vos conditions d'utilisation — prix, politiques — sont affichés ici avant qu'ils n'entrent en vigueur. Les améliorations internes telles que l'accélération de l'écran ne sont pas affichées ici : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Aucun avis publié",
    "body": "S'il y a des changements à vous informer, ils seront publiés ici."
  },
  "effective": "En vigueur à partir de {date}",
  "pager": {
    "label": "Page d'avis",
    "newer": "← Le plus récent",
    "older": "Avis précédents →"
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
        "La mention de fils et de filles dans les récits traditionnels est un reflet des coutumes qui ont été transmises, et cela ne signifie pas que nous prédisons cela correctement."
      ]
    }
  }
} satisfies NoticeCopy;
