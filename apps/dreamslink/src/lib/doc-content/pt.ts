import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Introdução",
    "title": "Introdução ao Dreams-Link",
    "summary": "Este é um serviço que interpreta sonhos usando um dicionário de símbolos de interpretação de sonhos tradicional. Ele esclarece o que é usado como base e o que não é mencionado.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": [
      {
        "title": "O que fazemos?",
        "blocks": [
          {
            "p": "Dreams-Link encontra **símbolos usados na interpretação tradicional de sonhos** a partir dos sonhos que você escreve e mostra seus significados. Como os sonhos são algo que experimentamos diariamente, as interpretações exibidas na tela são **gratuitas e não requerem associação.**"
          },
          {
            "p": "As únicas coisas vendidas por uma taxa são **duas formas de preservação** — uma imagem (cartão de sonho) contendo um bom sonho e um PDF que captura o contexto quando um símbolo tradicionalmente considerado um 태몽 aparece."
          }
        ]
      },
      {
        "title": "Qual é a base para a interpretação?",
        "blocks": [
          {
            "p": "A base para a interpretação é um **dicionário de {symbolTotal} símbolos**. Encontramos símbolos no texto do sonho e mostramos apenas os significados registrados no dicionário para esses símbolos. Se um símbolo tiver múltiplos significados, escolhemos com base no contexto — por exemplo, segurar uma cobra e ser mordido são tradicionalmente considerados opostos."
          },
          {
            "p": "A busca é feita **apenas de acordo com regras fixas**. Se for o mesmo sonho, os mesmos símbolos sempre aparecerão, e a interpretação não mudará de ontem para hoje."
          }
        ]
      },
      {
        "title": "O que não dizemos?",
        "blocks": [
          {
            "p": "**Não inventamos significados tradicionais que não estão no dicionário.** Se nenhum símbolo for encontrado, simplesmente afirmamos que nenhum foi encontrado e concluímos. Preencher esse espaço com palavras plausíveis é o que este serviço mais se precavê."
          },
          {
            "p": "**Um 태몽 é meramente um sinal, não um julgamento.** Apenas informamos que um símbolo tradicionalmente considerado um 태몽 apareceu no sonho. Não prevemos gravidez ou o gênero da criança, e não há base para tais afirmações."
          },
          {
            "p": "Não fazemos **afirmações definitivas sobre saúde, riqueza ou carreira.** Esta é uma referência da perspectiva da interpretação tradicional de sonhos e não é aconselhamento médico, financeiro ou legal."
          }
        ]
      },
      {
        "title": "Não mantemos os sonhos que você escreve.",
        "blocks": [
          {
            "p": "As histórias dos sonhos são a parte mais privada do que este serviço recebe. Portanto, **não as armazenamos.** A entrada é usada apenas para cálculos e não é registrada em nenhum log de servidor."
          },
          {
            "p": "Decidimos **não criar uma função para coletar sonhos como um diário de sonhos.** É um recurso valioso, mas exigiria manter os escritos mais privados."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "O método é descrito em mais detalhes no [documento guia](/guide). Informações comerciais e detalhes de contato podem ser encontrados em [entre em contato](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base para Cálculo",
    "title": "Qual é a base para o cálculo?",
    "summary": "Divulgamos todas as regras que o Dreams-Link usa. Você pode verificar quais símbolos são encontrados, o que está escrito no dicionário — de onde vêm as interpretações exibidas na tela.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Todos os números escritos aqui são **lidos diretamente do dicionário de símbolos e das regras de busca.** Como não transcrevemos manualmente o texto, se o dicionário for expandido ou as regras forem alteradas, os números nestes documentos também mudarão."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Base para o Serviço",
    "title": "Qual é a base do dicionário de símbolos?",
    "summary": "Esclarece de onde vêm as interpretações. Os critérios para dividir 215 símbolos em nove categorias, a razão pela qual apenas 24 podem ser substanciadas e por que não preenchemos as lacunas.",
    "backLabel": "Base para Interpretação",
    "sections": [
      {
        "title": "Mostramos apenas o que está escrito no dicionário.",
        "blocks": [
          {
            "p": "As interpretações do Dreams-Link vêm de um **dicionário de símbolos pré-escrito**. Encontramos símbolos no texto que você fornece e mostramos os significados registrados no dicionário para esses símbolos. Não criamos palavras que não estão no dicionário."
          },
          {
            "p": "Atualmente, o dicionário contém **{symbolTotal} símbolos**, e esses símbolos têm um total de **{meaningTotal} significados**. A maioria dos símbolos tem apenas um significado, enquanto alguns têm múltiplos dependendo do contexto."
          }
        ]
      },
      {
        "title": "Dividido em nove categorias.",
        "blocks": [
          {
            "p": "Agrupamos o que aparece nos sonhos em nove categorias com base em suas características. Os números entre parênteses são as contagens atuais."
          },
          {
            "ul": [
              "**Objetos**({categoryThing}) · **Animais**({categoryAnimal}) · **Natureza**({categoryNature}) — as três maiores categorias. A interpretação tradicional de sonhos discute principalmente objetos visíveis, animais e elementos do céu e da água.",
              "**Ações**({categoryAction}) · **Corpo**({categoryBody}) — o que foi feito, como ser perseguido ou cair, e onde no corpo, como o rosto ou cabelo.",
              "**Pessoas**({categoryPerson}) · **Lugares**({categoryPlace}) · **Cores**({categoryColor}) · **Números**({categoryNumber})"
            ]
          },
          {
            "p": "Para visualizá-los por categoria, você pode ver a lista completa no [dicionário de símbolos](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Apenas {cultureNoteTotal} podem ser substanciadas.",
        "blocks": [
          {
            "p": "Entre os símbolos, **{cultureNoteTotal}** têm razões para interpretação escritas ao lado deles. Por exemplo, a razão para distinguir entre dentes superiores e inferiores em um sonho de perder dentes. Os símbolos restantes têm espaços vazios."
          },
          {
            "p": "**Não preenchemos os espaços vazios.** Adicionar origens plausíveis tornaria o documento mais extenso, mas nesse momento, este dicionário não estaria transmitindo tradição, mas fabricando-a. É mais honesto distinguir entre o que pode e não pode ser substanciado."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Razões para não expandir arbitrariamente o dicionário.",
        "blocks": [
          {
            "p": "Na verdade, tentamos expandir os símbolos para centenas, mas desistimos. As entradas geradas automaticamente repetiam as mesmas frases como 'romance → bom relacionamento' ou falhavam em fornecer quaisquer origens substanciadas. Concluímos que **encontrar com precisão o que existe** é melhor do que simplesmente aumentar os números."
          }
        ]
      },
      {
        "title": "Bom e ruim são predeterminados pelo dicionário.",
        "blocks": [
          {
            "p": "Cada símbolo tem significados bons e ruins. **Bom {polarityPositive}**, **ambivalente {polarityAmbivalent}**, **cauteloso {polarityNegative}**, e **neutro {polarityNeutral}**."
          },
          {
            "p": "O fato de que os significados bons superem a metade não é porque somos generosos, mas porque a interpretação tradicional de sonhos sempre foi assim — símbolos grandes e fortes como porcos, dragões e fogo foram geralmente vistos como bons presságios. No entanto, nem todos os sonhos são interpretados positivamente. Este valor reflete a natureza de cada símbolo, e a atmosfera geral do sonho é reavaliada reunindo os símbolos encontrados."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base para o Serviço",
    "title": "Como encontrar símbolos em histórias de sonhos.",
    "summary": "Explica como os símbolos são selecionados a partir de frases escritas livremente e como filtrar letras que acidentalmente entraram em palavras como 'especial'.",
    "backLabel": "Base para Interpretação",
    "sections": [
      {
        "title": "Encontramos símbolos no texto que você fornece.",
        "blocks": [
          {
            "p": "Quando você escreve livremente sua história de sonho, buscamos símbolos nesse texto a partir do dicionário. Você não precisa selecionar itens ou escrever em um formato específico. Apenas escreva como normalmente faria, como 'Na noite passada, uma enorme píton se enrolou em mim.'"
          },
          {
            "p": "Ao pesquisar, olhamos não apenas para o nome do símbolo, mas também para **{aliasTotal} nomes alternativos**. Estas são palavras que se referem à mesma coisa, como 구렁이 (gureongi) e 뱀 (baem), 떨어지다 (tteoreojida) e 빠지다 (ppajida). Variações com terminações, como 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), também estão incluídas."
          }
        ]
      },
      {
        "title": "Caracteres que aparecem acidentalmente dentro de uma palavra não contam",
        "blocks": [
          {
            "p": "Este é o aspecto mais desafiador em coreano. Entre os símbolos, existem **{singleCharSymbolTotal} símbolos de um único caractere** como **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), que frequentemente aparecem em outras palavras."
          },
          {
            "ul": [
              "A **estrela** de \"Era um dia comum\"",
              "A **coisa** em \"Fui perseguido por alguém\"",
              "A **palavra** em \"Aquela pessoa disse\" e a **barriga** em \"Eu estava com fome\""
            ]
          },
          {
            "p": "Contar isso como símbolos leva a interpretações irrelevantes. Portanto, examinamos os caracteres ao redor — se **houver um caractere coreano na frente**, consideramos isso um fragmento de uma palavra e não contamos, e distinguimos se o caractere anexado no final é uma partícula ou uma terminação, permitindo que 「소가」 (soga) passe enquanto filtramos 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "É assim que tem funcionado",
        "blocks": [
          {
            "p": "Antes de implementar esta regra, ao testar com doze frases reais, **todas as doze** continham símbolos irrelevantes. Uma frase sem conteúdo significativo foi até marcada como um 태몽 (taemong)."
          },
          {
            "p": "Agora, resta um — o 배 (bae) em 「배가 고팠다」 (bae ga gopatda). Como soa igual, mas tem um significado diferente, não pode ser filtrado apenas pelos caracteres ao redor."
          },
          {
            "p": "Não encontrar algo é uma questão honesta. No entanto, encontrar algo irrelevante significa estabelecer uma tradição por trás daquela palavra que ela nunca teve."
          }
        ]
      },
      {
        "title": "Os mesmos caracteres sempre produzem os mesmos resultados",
        "blocks": [
          {
            "p": "Não há lugar para coincidência nas regras de busca. Como o dicionário é fixo e as regras estão estabelecidas, se você inserir a mesma frase novamente, **o mesmo símbolo aparecerá na mesma ordem**. A interpretação que você vê hoje não diferirá da que você verá amanhã."
          },
          {
            "p": "Essa qualidade também é uma promessa que fizemos a nós mesmos. Interpretações que mudam a cada vez são divertidas, mas carecem de fundamento. Isso se conecta à história de [por que não usamos modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Base do Serviço",
    "title": "A razão pela qual o mesmo símbolo tem significados diferentes",
    "summary": "Tradicionalmente, segurar uma cobra e ser mordido por uma são opostos. Isso discute a estrutura onde 215 símbolos têm 256 significados e como interpretar situações.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Mesmo que os símbolos sejam os mesmos, diferentes situações geram significados diferentes",
        "blocks": [
          {
            "p": "Na tradicional 해몽 (interpretação de sonhos), um único símbolo não tem sempre um significado. Mesmo para a mesma cobra, **segurá-la e ser mordido foram interpretados como completamente opostos.** Isso também é notado no dicionário."
          },
          {
            "p": "É por isso que os {symbolTotal} símbolos têm um total de {meaningTotal} significados. Cada significado inclui **o contexto em que se aplica**, e se esse contexto estiver visível no texto que você fornece, selecionamos esse significado."
          }
        ]
      },
      {
        "title": "Como identificar a situação",
        "blocks": [
          {
            "p": "Verificamos se o texto que você forneceu contém palavras que indicam essa situação. Em 「뱀이 나를 물었다」 (baemi nareul mul-eotda), a situação da mordida é descrita, enquanto em 「뱀을 품에 안았다」 (baemeul pume anatda), a situação de segurar é descrita. Se não houver palavras indicando a situação, interpretamos usando o **significado básico** desse símbolo."
          },
          {
            "p": "Portanto, ao escrever seu sonho, se você incluir **não apenas o que apareceu, mas também quais ações foram tomadas**, a interpretação será mais precisa. 「돼지를 봤다」 (dwaeji-reul bwatda) transmite menos do que 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quanto mais você escreve, melhor, mas não há necessidade de escrever muito",
        "blocks": [
          {
            "p": "Duas ou três frases são suficientes. Escrever mais não significa encontrar mais símbolos; na verdade, se palavras não relacionadas forem misturadas, símbolos irrelevantes podem ser identificados."
          }
        ]
      },
      {
        "title": "Existem {contextSplitSymbolTotal} símbolos com significados divididos",
        "blocks": [
          {
            "p": "Entre os {symbolTotal} símbolos no dicionário, **{contextSplitSymbolTotal}** têm significados que variam dependendo da situação. O restante foi lido em uma única direção, independentemente da situação."
          },
          {
            "p": "Esses {contextSplitSymbolTotal} são as áreas mais cautelosas. Interpretar mal a situação pode levar a transmitir boas notícias como más notícias, ou vice-versa. Portanto, se a situação não estiver clara, não **escolhemos forçosamente um lado e, em vez disso, seguimos com o significado básico** desse símbolo — não queremos afirmar algo incerto como se fosse certo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Os sentimentos ao acordar também são considerados",
        "blocks": [
          {
            "p": "Os sentimentos e repetições perguntados abaixo do conteúdo do sonho não são usados para encontrar símbolos. Eles são referenciados ao decidir qual caminho interpretar em situações com significados divididos. Você não precisa escolher; os resultados ainda serão fornecidos."
          }
        ]
      },
      {
        "title": "A atmosfera geral do sonho é contada separadamente",
        "blocks": [
          {
            "p": "Se múltiplos símbolos forem encontrados, reunimos se cada um desses símbolos é positivo ou cauteloso para determinar o tom geral do sonho. Um sonho que inclui um bom símbolo e um símbolo cauteloso não é simplesmente referido como um 'bom sonho.'"
          },
          {
            "p": "Você pode visualizar os vários símbolos e seus significados no [dicionário de símbolos](/dream/symbols). Também é bom dar uma olhada no que está incluído antes de escrever seu sonho."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Base do Serviço",
    "title": "Critérios para distinguir 길몽 (sonhos auspiciosos) e 흉몽 (sonhos ominosos)",
    "summary": "Os quatro valores atribuídos a cada símbolo e sua distribuição, a razão pela qual os positivos superam a metade, e por que comunicamos sonhos mistos como mistos.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Cada símbolo é atribuído a um dos quatro valores",
        "blocks": [
          {
            "p": "Entre os {symbolTotal} símbolos no dicionário, cada um é categorizado como um dos seguintes."
          },
          {
            "ul": [
              "**{polarityPositive} símbolos positivos** — aqueles interpretados como eventos afortunados, como riqueza, celebrações e benfeitores.",
              "**{polarityAmbivalent} símbolos que variam por situação** — como cobras, onde o significado pode mudar dependendo do que foi feito. Esta categoria é a mais cautelosa.",
              "**{polarityNegative} símbolos cautelosos** — aqueles vistos como fofocas, disputas ou perdas.",
              "**{polarityNeutral} símbolos neutros** — aqueles que não são bons nem maus em si mesmos, como cores ou números."
            ]
          }
        ]
      },
      {
        "title": "A razão pela qual os símbolos positivos superam a metade",
        "blocks": [
          {
            "p": "Isso não é porque somos generosos em nossas avaliações. **A tradicional 해몽 (interpretação de sonhos) sempre foi assim.** Símbolos grandes e poderosos como porcos, dragões, fogo e água foram geralmente vistos como bons presságios, e o dicionário reflete essa tradição."
          },
          {
            "p": "Assim, o fato de que 'um bom símbolo apareceu' não significa 'coisas boas acontecerão.' O que podemos transmitir é limitado a como aquele símbolo foi interpretado na tradição."
          }
        ]
      },
      {
        "title": "O tom de um sonho é reunido a partir de seus símbolos",
        "blocks": [
          {
            "p": "Se múltiplos símbolos forem encontrados, reunimos sua respectiva auspiciosidade para determinar o tom geral do sonho. Se apenas símbolos positivos aparecerem, é um bom sonho; se apenas símbolos cautelosos aparecerem, é um sonho cauteloso; se **mistos, comunicamos como mistos.**"
          },
          {
            "p": "Não forçamos a categorização de símbolos mistos em um lado. Na realidade, os sonhos que as pessoas têm são frequentemente mistos, e resumi-los como 'um bom sonho' não é nem preciso nem útil."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palavras a Não Usar",
        "blocks": [
          {
            "p": "Não faça declarações definitivas sobre o que acontecerá, quando acontecerá ou sobre saúde e riqueza. Transmitir os significados dos símbolos que foram transmitidos pela tradição é diferente de prever o futuro."
          }
        ]
      },
      {
        "title": "Quando Aparece um Sonho de Advertência",
        "blocks": [
          {
            "p": "Mesmo que um símbolo interpretado como advertência apareça, não é necessariamente uma má notícia. Na interpretação de sonhos tradicional, um sonho ominoso tem sido geralmente usado como **uma declaração apontando para a situação atual**. Se um símbolo que sugere conflito aparece, pode ser lido como um lembrete para conter as palavras."
          },
          {
            "p": "Pelo mesmo motivo, este serviço não vende talismãs ou amuletos. O que é vendido é apenas [duas maneiras de guardar seus sonhos](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sonho de Concepção",
    "title": "Como Interpretar Sonhos de Concepção",
    "summary": "Revela como determinar 27 símbolos de sonho de concepção, por que nem todos os sonhos com porcos são considerados sonhos de concepção, e o princípio que não prevê gravidez ou gênero.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Primeiro, Esclareça Isso",
        "blocks": [
          {
            "p": "**Dreams-Link não determina o estado de gravidez. Também não indica o gênero da criança.** Estas são questões que não podem ser conhecidas através de sonhos, e não é algo que podemos fazer."
          },
          {
            "p": "O que podemos lhe dizer é limitado a isso — **o fato de que um símbolo tradicionalmente considerado um sonho de concepção apareceu neste sonho.** Isso é tudo o que nossos ancestrais interpretaram sobre esse símbolo."
          }
        ]
      },
      {
        "title": "Existem {conceptionSymbolTotal} símbolos considerados Sonhos de Concepção",
        "blocks": [
          {
            "p": "Entre os {symbolTotal} símbolos no dicionário, **{conceptionSymbolTotal}** são marcados como sonhos de concepção. Existem muitos animais como dragões, porcos e cobras, bem como frutas como pêssegos e castanhas, e o sol e a lua estão incluídos."
          },
          {
            "p": "No entanto, **a aparição desse símbolo não significa imediatamente que é um sonho de concepção.** É aqui que este serviço se esforçou."
          }
        ]
      },
      {
        "title": "O Julgamento é Baseado no Significado Real, Não nos Símbolos",
        "blocks": [
          {
            "p": "O porco é um símbolo de sonhos de concepção e ao mesmo tempo **representa sonhos de riqueza.** Se for considerado um sonho de concepção apenas porque o símbolo apareceu, então todos que sonharam com porcos teriam tido um sonho de concepção. Na realidade, tem sido interpretado principalmente como um sonho de riqueza."
          },
          {
            "p": "Portanto, olhamos para **o significado real derivado desse símbolo, não para o símbolo em si.** Marcamos como um sonho de concepção apenas quando o significado inclinado para a concepção é escolhido na situação que você forneceu. Mesmo com o mesmo porco, o julgamento muda se o contexto for diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se Você Mencionar Gravidez, Olhamos Para Isso Primeiro",
        "blocks": [
          {
            "p": "Se sua escrita incluir palavras como gravidez, sonho de concepção ou parto, olhamos primeiro para o significado desse símbolo inclinado para a concepção. Mesmo com o mesmo sonho de porco, a forma como nossos ancestrais o interpretaram variou dependendo da situação atual."
          }
        ]
      },
      {
        "title": "A Razão para Separar Relatórios de Sonhos de Concepção",
        "blocks": [
          {
            "p": "Sonhos de concepção servem a um propósito diferente de outros sonhos. Eles são frequentemente discutidos mesmo após o nascimento da criança e compartilhados entre membros da família. Portanto, em vez de apenas visualizá-lo na tela, criamos um **documento que pode ser guardado.**"
          },
          {
            "p": "O que está incluído é anotado em [duas maneiras de guardar seus sonhos](/guide/reports). Você pode ver todas as interpretações sem comprar o que vê na tela."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Como Usar",
    "title": "Como Escrever Seu Sonho de Forma Eficaz",
    "summary": "Se você escrever o que viu e fez, será bem interpretado. Explica por que um único verbo pode determinar o significado e por que perguntamos sobre sentimentos e repetição.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Por Favor, Escreva o Que Você Viu e Fez",
        "blocks": [
          {
            "p": "Não há um formato específico. Algumas frases como você normalmente fala são suficientes. No entanto, o que funciona bem é determinado — **o que é visível** e **o que aconteceu.**"
          },
          {
            "ul": [
              "Funciona bem — 「Uma grande cobra me envolveu」, 「Eu vi água clara fluindo」, 「Eu caí de um lugar alto」",
              "Não funciona — 「Eu estava assustado」, 「Eu me senti estranho」, 「Eu senti que alguém me odiava」"
            ]
          },
          {
            "p": "Se você apenas escrever sentimentos, não haverá símbolos a serem encontrados. Isso porque a interpretação de sonhos tradicional fala sobre [objetos e ações](/guide/categories), não emoções."
          }
        ]
      },
      {
        "title": "Escrever o Que Você Fez Torna Mais Preciso",
        "blocks": [
          {
            "p": "Mesmo com o mesmo símbolo, existem {contextSplitSymbolTotal} casos em que os significados diferem dependendo da situação. Tradicionalmente, segurar uma cobra e ser mordido foram interpretados como opostos."
          },
          {
            "p": "Assim, 「Eu vi um porco」 é menos preciso do que 「Um porco entrou na casa」, e 「Havia água」 é menos preciso do que 「Eu bebi água clara.」 **Um único verbo determina o significado.**"
          }
        ]
      },
      {
        "title": "Por Que Perguntamos Sobre Sentimentos e Repetição",
        "blocks": [
          {
            "p": "Abaixo do conteúdo do sonho, há um lugar para selecionar **o sentimento quando você acordou** e **se você repetiu o mesmo sonho.** Você não precisa escolher ambos para que um resultado seja fornecido."
          },
          {
            "p": "Esses valores não são usados para encontrar símbolos. Eles são referenciados ao determinar **qual significado escolher** do mesmo símbolo e como transmitir o resultado."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nos Casos em Que Você Menciona Gravidez",
        "blocks": [
          {
            "p": "Se sua escrita incluir palavras como gravidez, sonho de concepção ou parto, olhamos primeiro para o significado desse símbolo inclinado para a concepção. Mesmo com o mesmo sonho de porco, a forma como nossos ancestrais o interpretaram variou dependendo da situação atual — [como interpretar sonhos de concepção](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Não Há Necessidade de Escrever Textos Longos",
        "blocks": [
          {
            "p": "Um texto mais longo não significa que mais símbolos serão encontrados. Em vez disso, se palavras irrelevantes forem misturadas de forma longa, há uma maior chance de que palavras não relacionadas sejam interpretadas como símbolos. **Por favor, escreva apenas as cenas que você lembra.**"
          },
          {
            "p": "O texto que você fornece não é salvo em nenhum lugar. A razão pela qual você pode escrever livremente está anotada em [o método de não salvar](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base do Serviço",
    "title": "Critérios Divididos em Nove Categorias",
    "summary": "De objetos, animais e natureza a cores e números, existem nove categorias e uma razão para não incluir uma categoria emocional.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Os Símbolos nos Sonhos São Divididos em Nove Categorias",
        "blocks": [
          {
            "p": "Os {symbolTotal} símbolos são agrupados em nove categorias com base em suas características. O critério para a divisão é **como eles aparecem nos sonhos** — seja como animais, objetos ou ações que eu tomei."
          },
          {
            "ul": [
              "**Objetos {categoryThing}** — Itens tangíveis como dinheiro, espelhos e facas. Esta é a categoria mais extensa.",
              "**Animais {categoryAnimal}** — dragão·porco·cobra·vaca. Muitos destes são vistos como 태몽 (sonhos de concepção).",
              "**Natureza {categoryNature}** — coisas que são grandes e antigas como água·fogo·sol·lua·montanha.",
              "**Ação {categoryAction}** — coisas feitas em sonhos como ser perseguido·cair·voar.",
              "**Corpo {categoryBody}** — dentes·cabelo·sangue. O significado varia dependendo de onde no corpo está.",
              "**Pessoa {categoryPerson}** · **Lugar {categoryPlace}** · **Cor {categoryColor}** · **Número {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Por que não há categoria de emoção?",
        "blocks": [
          {
            "p": "Categorias como 「ansiedade」·「desejo」 não estão incluídas. **Isto porque a 해몽 (interpretação de sonhos) tradicional não aborda emoções.** As interpretações antigas focavam no que era visível e no que aconteceu, em vez dos sentimentos do sonhador."
          },
          {
            "p": "Eu tentei criar uma categoria de emoção, mas os resultados foram termos como 「perda de afeto」·「estabilidade emocional」. Estes não são **símbolos** de sonhos, mas vocabulário da psicologia moderna. Esse é um tipo diferente de serviço e não é o que este dicionário se propõe a fazer."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Então, quando você escreve",
        "blocks": [
          {
            "p": "Por favor, escreva **o que você viu e fez** em vez de sentimentos; isso resultará em resultados muito melhores. No entanto, eu perguntarei sobre seus sentimentos ao acordar separadamente — mesmo o mesmo símbolo pode ter significados diferentes dependendo da situação."
          }
        ]
      },
      {
        "title": "Cores e números não ficam sozinhos",
        "blocks": [
          {
            "p": "Cor {categoryColor} e número {categoryNumber} não têm significados bons ou ruins inerentes. Assim como uma cobra branca e uma cobra preta são diferentes, seus significados mudam dependendo de **com o que estão associados**. Portanto, essas duas categorias são consideradas em conjunto com outros símbolos."
          },
          {
            "p": "Uma lista completa por categoria está disponível no [Dicionário de Símbolos](/dream/symbols). Abrir um símbolo mostrará seu significado transmitido, categoria e símbolos relacionados."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Como usar",
    "title": "Quando um símbolo não pode ser encontrado",
    "summary": "Se você não conseguir encontrá-lo, eu informarei que não foi encontrado. Eu discutirei por que não pode ser encontrado, o que eu mostrarei em vez disso naquela tela e como o dicionário é expandido.",
    "backLabel": "Base de interpretação",
    "sections": [
      {
        "title": "Quando não encontrado, eu informarei que não foi encontrado",
        "blocks": [
          {
            "p": "Se eu não conseguir encontrar nenhum símbolo no texto que você forneceu, eu **informarei que não foi encontrado.** Eu não forçarei uma associação com algo semelhante ou criarei frases plausíveis para preencher o espaço."
          },
          {
            "p": "Isto é o que este serviço é mais cauteloso. No momento em que eu preencho uma lacuna, isso contradiz a declaração de transmitir interpretações."
          }
        ]
      },
      {
        "title": "Por que não pode ser encontrado?",
        "blocks": [
          {
            "p": "Geralmente, é uma das seguintes."
          },
          {
            "ul": [
              "**É um símbolo que ainda não está no dicionário.** Atualmente, há {symbolTotal} símbolos listados, mas há muitos mais que poderiam aparecer em sonhos.",
              "**Você só escreveu sentimentos.** Se houver apenas emoções como 「eu estava com medo」·「eu me senti estranho」, não há símbolos que possam ser correspondidos. A 해몽 tradicional fala de **objetos e ações visíveis** em vez de emoções.",
              "**É muito curto.** É melhor escrever em frases em vez de uma ou duas palavras."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quando você tentar escrever novamente",
        "blocks": [
          {
            "p": "Por favor, inclua **o que você viu e o que você fez** no sonho. Dizer 「eu estava ansioso」 é menos eficaz do que dizer 「eu caí de um lugar alto」, e dizer 「eu gostei」 é menos eficaz do que dizer 「eu vi água clara fluindo」."
          }
        ]
      },
      {
        "title": "Eu não deixo uma tela em branco",
        "blocks": [
          {
            "p": "Quando algo não pode ser encontrado, eu também mostrarei **{popularSymbolCount} símbolos frequentemente pesquisados** naquela tela. Estes são selecionados do dicionário com base em sua representatividade, o que pode ajudá-lo a lembrar se um deles apareceu em seu sonho."
          },
          {
            "p": "Se você quiser navegar pela lista completa, há {symbolTotal} símbolos organizados por categoria no [Dicionário de Símbolos](/dream/symbols). Cada símbolo inclui seu significado transmitido e símbolos relacionados."
          }
        ]
      },
      {
        "title": "Como o dicionário será expandido no futuro?",
        "blocks": [
          {
            "p": "Em vez de aumentar os números, estou focando em **identificar com precisão o que já está lá**. Eu incluí {aliasTotal} nomes alternativos para o mesmo símbolo, e fiz possível reconhecer palavras que mudam de forma com sufixos."
          },
          {
            "p": "Ao expandir os símbolos em si, eu incluirei apenas aqueles que podem **fornecer evidências transmitidas.** Simplesmente aumentar números sem evidências se torna criação em vez de um dicionário — eu documentei as tentativas e resultados em [Por que não uso modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base do serviço",
    "title": "Razões para não usar inteligência artificial na 해몽",
    "summary": "Não há código que chama um modelo no processo de criação de interpretação. Eu abandonei a tentativa de expandir o dicionário usando um modelo baseado em resultados empíricos, e assim o que foi ganho e o que foi abandonado.",
    "backLabel": "Base de interpretação",
    "sections": [
      {
        "title": "Inteligência artificial não é usada na 해몽",
        "blocks": [
          {
            "p": "Muitos serviços atuais de 해몽 mostram textos gerados ao inserir histórias de sonhos em modelos generativos. Dreams-Link não faz isso. **Não há código que chama um modelo no processo de criação de interpretação.**"
          },
          {
            "p": "O que eu faço é simples. Eu encontro símbolos no texto que você fornece que estão no dicionário e seleciono e mostro os significados que o dicionário escreveu para esses símbolos. Não há lugar para frases que não estão no dicionário."
          }
        ]
      },
      {
        "title": "Por que essa decisão foi tomada?",
        "blocks": [
          {
            "p": "**Modelos não dizem que não sabem o que não sabem.** Quando perguntados sobre símbolos sem evidências transmitidas, eles fabricam origens plausíveis. E se é fabricado ou não é algo que o leitor não pode discernir. Se alguém insere criação no lugar de transmitir tradição, a premissa do serviço colapsa."
          },
          {
            "p": "Eu realmente tentei fazer um modelo criar símbolos para expandir o dicionário. De sessenta e seis exemplos que valiam a pena considerar, **cinquenta e cinco não puderam fornecer nenhuma evidência transmitida**, e alguns incluíam coisas que não poderiam existir na 해몽 tradicional, como metrôs e rodovias. Portanto, **nenhum foi incluído.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "O mesmo foi verdade mesmo com modelos maiores",
        "blocks": [
          {
            "p": "Quando eu tentei a mesma tarefa com um modelo melhor, apenas um de dezenove passou, e esse era apenas uma repetição das mesmas palavras na posição de evidência. Modelos maiores apenas falam **de forma mais plausível** sobre o que não sabem."
          }
        ]
      },
      {
        "title": "Os benefícios de não usar um modelo",
        "blocks": [
          {
            "ul": [
              "**Se é o mesmo sonho, a mesma interpretação sairá.** A redação não muda a cada vez.",
              "**É rápido.** Não há espera pela resposta de um modelo, então os resultados são entregues imediatamente.",
              "**O sonho que você forneceu não sai.** Não há necessidade de enviá-lo para servidores externos — por favor, leia junto com [o método de não armazenar](/guide/no-storage).",
              "**Pode ser oferecido gratuitamente.** Sonhos são algo que sonhamos todos os dias, então há muitas consultas. Se um modelo for chamado para cada consulta, os custos devem ser cobertos em algum lugar."
            ]
          }
        ]
      },
      {
        "title": "O que é deixado de lado em vez disso",
        "blocks": [
          {
            "p": "Não podemos interpretar o que não está no dicionário. Se um modelo tivesse sido usado, qualquer coisa que você escrevesse teria produzido uma resposta plausível. Escolhemos o lado que **diz que não pôde ser encontrado quando não pôde ser encontrado**. O que mostramos nesse momento está escrito em [quando um símbolo não pode ser encontrado](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produtos Pagos",
    "title": "Duas Maneiras de Manter Seus Sonhos",
    "summary": "A interpretação em si não gera uma taxa. Explicamos o que são as duas coisas que vendemos, o que elas contêm e por que não são melhores interpretações.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "A interpretação em si não gera uma taxa",
        "blocks": [
          {
            "p": "Anotar seus sonhos e ver quais símbolos estão presentes **não custa dinheiro e não requer associação.** Como as pessoas sonham todos os dias, decidimos que este espaço deve ser gratuito."
          },
          {
            "p": "**As duas coisas que vendemos não são melhores interpretações.** Elas são **duas maneiras de manter a mesma interpretação.** O conteúdo que você vê na tela não muda após o pagamento."
          }
        ]
      },
      {
        "title": "Cartão dos Sonhos — Uma Imagem",
        "blocks": [
          {
            "p": "Fornecemos os símbolos encontrados em seu sonho e seus significados em **uma imagem.** É um arquivo de imagem, não um PDF, então você pode salvá-lo como está ou enviá-lo para outros."
          },
          {
            "p": "Isso é para aqueles que sentem arrependimento quando um bom sonho desaparece após fechar a tela. Como não salvamos sonhos, se você quiser mantê-lo, esta é a única maneira de levá-lo."
          }
        ]
      },
      {
        "title": "Relatório de 태몽 — Documento {conceptionPages} Páginas",
        "blocks": [
          {
            "p": "Para sonhos que mostram símbolos interpretados como 태몽 (sonhos de concepção), criamos um **documento de {conceptionPages} páginas.** Inclui quais símbolos apareceram, como esses símbolos foram tradicionalmente interpretados e um lugar para registrar isso."
          },
          {
            "p": "Como os 태몽 são frequentemente discutidos e compartilhados entre membros da família mesmo após o nascimento da criança, criamos um documento separado para sonhos que são preciosos demais para serem vistos apenas na tela."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palavras Não Ditadas Aqui Também",
        "blocks": [
          {
            "p": "Não determinamos o status de gravidez ou o gênero da criança. Essas declarações não aparecem no documento. Para detalhes, veja [como interpretar 태몽](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Por que Não Há Mais Documento",
        "blocks": [
          {
            "p": "Serviços de irmãos fornecem relatórios de nove páginas. O motor de saju extrai muitos valores a partir de apenas uma data de nascimento. A interpretação dos sonhos não funciona dessa maneira."
          },
          {
            "p": "Os símbolos listados no dicionário totalizam {symbolTotal}, e a maioria deles tem **um significado cada.** Para estender isso para nove páginas, teríamos que escrever significados tradicionais que não são encontrados em nenhum material, e é exatamente isso que este serviço decidiu não fazer. Portanto, o documento é apenas tão longo quanto os materiais honestamente permitem, e não mais."
          }
        ]
      },
      {
        "title": "Preços e Status de Vendas",
        "blocks": [
          {
            "p": "Os preços estão listados no [guia de preços](/pricing). A razão pela qual este documento não lista valores é intencional — para evitar situações em que o documento de orientação permaneça com valores antigos quando os preços mudam. A tela e os termos leem todos o mesmo valor de um lugar."
          },
          {
            "p": "Os documentos que você compra podem **ser recebidos novamente com o mesmo pedido.** No entanto, como não mantemos arquivos, uma vez que você sai da tela de resultados, não pode recriá-los — por favor, mantenha os arquivos que você recebe."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informações Pessoais",
    "title": "O Método de Não Armazenar Sonhos Que Você Anota",
    "summary": "Explicamos o que significa tecnicamente que as histórias dos sonhos não são registradas em nenhum lugar e o que está contido no link de resultado.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Nenhuma Associação Necessária",
        "blocks": [
          {
            "p": "Dreams-Link não cria contas. Não coletamos nomes, e-mails ou números de telefone. As únicas coisas que coletamos são os sonhos que você anota, como você se sentiu ao acordar e se você sonha o mesmo sonho repetidamente, e isso não permanece após a interpretação ser concluída."
          },
          {
            "p": "As histórias dos sonhos são os valores mais privados que este serviço recebe. É por isso que as regras são mais rigorosas do que o necessário — não configuramos nem mesmo um espaço para anotar o que você envia."
          }
        ]
      },
      {
        "title": "O que está contido no link de resultado",
        "blocks": [
          {
            "p": "Quando o cálculo é concluído, o endereço ficará assim."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "O que segue **#** é o valor de entrada. Esta parte é chamada de **fragmento**, que é uma **parte que o navegador não envia ao servidor**. Este é um comportamento padrão da web e não uma regra que criamos — foi originalmente projetado para indicar uma localização dentro de um documento, então o servidor não tem necessidade de vê-lo."
          },
          {
            "p": "Aqui, essa propriedade é particularmente importante — o sonho que você forneceu **não permanece nos registros de acesso.**"
          },
          {
            "p": "Em outras palavras, quando você abre o link de resultado, o navegador lê esse valor para solicitar um cálculo, e nosso servidor recebe o valor para o cálculo, retorna a resposta e então esquece."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por favor, tenha cuidado ao enviar links para outros",
        "blocks": [
          {
            "p": "O fato de que não está armazenado no servidor não significa que o link seja seguro. O link de resultado contém o sonho que você forneceu, então a pessoa que recebe esse link pode ler esse conteúdo."
          }
        ]
      },
      {
        "title": "Por que o cálculo é feito no servidor, mas não é armazenado?",
        "blocks": [
          {
            "p": "O cálculo em si é feito no servidor. Encontrar símbolos requer todo o dicionário, e esse dicionário é grande demais para ser enviado ao navegador. Manter o dicionário no servidor também significa que, quando um erro é corrigido, ele é refletido para todos de uma vez. No entanto, **após processar a solicitação, esse valor não é usado em nenhum lugar.** Não há código para inseri-lo no banco de dados."
          },
          {
            "p": "Um registro mínimo necessário para operação é mantido — um contador para evitar que a mesma pessoa envie muitos pedidos em um curto espaço de tempo. Isso não inclui o conteúdo do sonho, e o IP de acesso também não é retido. Apenas um valor, codificado com a data, é contado, e esse valor muda quando o dia muda."
          }
        ]
      },
      {
        "title": "O que não pode ser feito porque não é armazenado",
        "blocks": [
          {
            "p": "Para ser honesto, há coisas que desistimos porque não armazenamos dados."
          },
          {
            "ul": [
              "**Não há diário de sonhos.** Você não pode recuperar a interpretação da semana passada, e deve ter o link para vê-la novamente. Isso é feito intencionalmente — para criar um diário, os escritos mais privados devem ser armazenados continuamente.",
              "**Encontrar o mesmo valor novamente.** Não há cache. Em vez disso, o dicionário é fixo, e as regras de correspondência são determinísticas, então o mesmo texto sempre resultará no mesmo símbolo — as regras substituem o que o cache teria garantido.",
              "**Atualizar trará novamente o portão de anúncios.** Isso ocorre porque não há lugar para deixar registros de visualização."
            ]
          }
        ]
      },
      {
        "title": "Em caso de compra",
        "blocks": [
          {
            "p": "Se você comprar um relatório, um registro de transação será mantido naquele momento. O pagamento tem um período de retenção definido por lei, e sem um histórico de pedidos, os reembolsos não podem ser processados. No entanto, mesmo assim, **o conteúdo do sonho escrito na interpretação não se anexa ao pedido** — ele é recebido novamente e escrito naquele momento ao criar o documento após a confirmação do pagamento."
          },
          {
            "p": "Para mais detalhes, consulte a [política de privacidade](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Aviso",
    "title": "Anúncios",
    "summary": "Este é um lugar para informá-lo sobre mudanças que podem afetar seu uso.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contato",
    "title": "Consultas",
    "summary": "Este é o canal para consultas sobre uso, reembolsos, solicitações de informações pessoais e relatórios de erros, juntamente com informações comerciais.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": [
      {
        "title": "Contato por E-mail",
        "blocks": [
          {
            "p": "Por favor, envie consultas para **{email}**. Nós responderemos dentro de 2 dias úteis. Para consultas sobre pagamento e reembolso, é mais rápido incluir seu **número do pedido ou e-mail de pagamento**."
          },
          {
            "p": "Consultas por telefone são recebidas em {customerCenter}."
          }
        ]
      },
      {
        "title": "O que pode ser enviado para este canal?",
        "blocks": [
          {
            "ul": [
              "**Pagamento e Reembolso** — Se o documento não foi criado ou o valor do pagamento difere do pedido, um reembolso total será fornecido. As condições estão na [política de reembolso](/refund-policy).",
              "**Informações Pessoais** — Aceitamos solicitações de acesso, correção e exclusão. A política de processamento está na [política de privacidade](/privacy).",
              "**Relatar Erros de Interpretação** — Se símbolos foram encontrados incorretamente ou a interpretação parece estranha, por favor, nos avise. Se você incluir quando escreveu essa história de sonho, podemos procurá-la novamente com o mesmo texto."
            ]
          }
        ]
      },
      {
        "title": "Informações Comerciais",
        "blocks": [
          {
            "ul": [
              "**Nome da Empresa** — {companyName}",
              "**Representante** — {representative}",
              "**Número de Registro da Empresa** — {businessNumber}",
              "**Número de Registro de Comércio por Correspondência** — {mailOrderNumber}",
              "**Endereço** — {address}",
              "**Centro de Atendimento ao Cliente** — {customerCenter}",
              "**E-mail** — {email}",
              "**Oficial de Proteção de Informações Pessoais** — {privacyOfficer}",
              "**Fornecedor de Hospedagem** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Você não precisa reescrever o sonho que forneceu no e-mail de consulta. Nós não salvamos entradas, então não podemos procurá-las novamente, e o número do pedido é suficiente para verificação. Por favor, escreva-o apenas se for absolutamente necessário, como para relatar erros de interpretação."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Princípios de Serviço",
    "title": "O Que Não Fazemos",
    "summary": "Não fornecemos números de loteria, diários de sonhos, determinações de gravidez ou talismãs. Explicamos por que escolhemos não fazer cada uma dessas coisas.",
    "backLabel": "Base de Interpretação",
    "sections": [
      {
        "title": "Não fornecemos números de loteria",
        "blocks": [
          {
            "p": "Embora isso seja comumente abordado em serviços de interpretação de sonhos, não fazemos isso. **Não há base na interpretação de sonhos tradicional para extrair números dos sonhos.** Embora existam registros de interpretação de sonhos com porcos como riqueza, não há regra em qualquer literatura que produza seis números a partir disso."
          },
          {
            "p": "Para criá-los, teríamos que inventá-los, e nesse momento, este serviço não seria mais um lugar para transmitir as interpretações que a tradição transmite. Isso é especialmente preocupante, pois pode levar a perdas financeiras."
          }
        ]
      },
      {
        "title": "Não criamos diários de sonhos",
        "blocks": [
          {
            "p": "Embora fosse conveniente ter um recurso para coletar sonhos passados, isso exigiria que nós **armazenássemos continuamente os sonhos que você fornece.** As narrativas dos sonhos são o aspecto mais privado do que este serviço recebe, e decidimos não trocar isso."
          },
          {
            "p": "Em vez disso, os sonhos que você deseja manter podem ser **capturados como imagens ou documentos.** A responsabilidade pelo armazenamento recai sobre os usuários, não sobre nós — [Duas Maneiras de Manter Seus Sonhos](/guide/reports)"
          }
        ]
      },
      {
        "title": "Não determinamos gravidez ou gênero",
        "blocks": [
          {
            "p": "Apenas afirmaremos que um símbolo interpretado como um 태몽 (sonho de concepção) apareceu. Se você está grávida ou se a criança é uma filha ou um filho **não é algo que pode ser conhecido através dos sonhos.** Tais afirmações não aparecem na tela ou em documentos pagos."
          }
        ]
      },
      {
        "title": "Não vendemos talismãs ou amuletos",
        "blocks": [
          {
            "p": "Apenas porque um símbolo é interpretado como cauteloso não significa que haja razão para comprar algo. Um 흉몽 (sonho ominoso) tem sido tradicionalmente usado para **indicar uma situação a ser examinada agora**, não para pagar para evitar algo."
          },
          {
            "p": "Não criamos ansiedade para vender algo com base nisso. As únicas coisas que vendemos são as duas mencionadas acima, e nenhuma fornece interpretação adicional, mas sim **maneiras de manter o mesmo conteúdo.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Não fazemos declarações definitivas sobre o futuro",
        "blocks": [
          {
            "p": "Não fazemos declarações definitivas sobre se algo acontecerá, quando acontecerá, ou sobre saúde, riqueza ou expectativa de vida. Transmitir os significados dos símbolos tradicionais e prever o futuro são questões diferentes."
          }
        ]
      },
      {
        "title": "Não fabricamos interpretações que não existem",
        "blocks": [
          {
            "p": "Para símbolos que não existem no dicionário, **afirmaremos que não conseguimos encontrá-los.** Não juntamos símbolos semelhantes ou preenchendo o espaço com frases plausíveis. Portanto, este serviço não [usa inteligência artificial para interpretação de sonhos](/guide/no-ai). O modelo não diz que não sabe o que não sabe."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PT_NOTICES = {
  "kindLabels": {
    "service": "Serviço",
    "product": "Relatórios",
    "engine": "Cálculo",
    "support": "Suporte"
  },
  "intro": "Mudanças nos seus termos de uso — preços, políticas — são postadas aqui antes de entrarem em vigor. Melhorias internas, como a tela ficando mais rápida, não são postadas aqui: o que aparece aqui é o que você precisa saber.",
  "empty": {
    "title": "Nenhum aviso postado",
    "body": "Se houver alguma mudança para informar, ela será publicada aqui."
  },
  "effective": "Válido a partir de {date}",
  "pager": {
    "label": "Página de Avisos",
    "newer": "← Mais Novo",
    "older": "Avisos Anteriores →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "O sonho que você forneceu não está armazenado.",
      "body": [
        "As histórias de sonhos são os valores mais privados que este serviço recebe. Portanto, elas não são registradas em nenhuma tabela. A entrada é apenas transportada no endereço do resultado para cálculo, e uma vez que a janela é fechada, ela desaparece.",
        "Decidimos não criar uma funcionalidade que colete sonhos e mostre o fluxo (diário de sonhos). É uma funcionalidade útil, mas para isso, os escritos mais privados devem ser continuamente armazenados.",
        "Quando você envia o link do resultado para outras pessoas, ele contém o conteúdo do sonho. Por favor, tenha cuidado ao compartilhar."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Os resultados incluem o dicionário de símbolos e critérios de cálculo.",
      "body": [
        "A base para a interpretação é o dicionário de símbolos tradicional de 해몽 (interpretação de sonhos). Os resultados e documentos incluirão a versão desse dicionário (por exemplo, 1.2.0) e os critérios para encontrar regras (por exemplo, dream-1.0.0). O mesmo sonho sempre resultará no mesmo símbolo com base nos mesmos critérios.",
        "Se adicionar símbolos ou mudar significados antecipadamente puder alterar os resultados, esse fato é apresentado aqui. Isso porque os resultados que você recebeu anteriormente podem mudar.",
        "Não criamos significados tradicionais que não estão no dicionário. Se nenhum símbolo for encontrado, simplesmente afirmamos que nenhum foi encontrado e concluímos."
      ]
    },
    "2026-08-06-conception": {
      "title": "Nós apenas informamos sobre 태몽 e não fazemos julgamentos.",
      "body": [
        "Se símbolos tradicionalmente vistos como 태몽 aparecerem no sonho, informaremos esse fato. No entanto, não determinamos o estado de gravidez ou o gênero da criança — tais afirmações não têm base, e julgamentos médicos são de responsabilidade das instituições médicas.",
        "A menção de filhos e filhas em narrativas tradicionais é um reflexo de costumes que foram transmitidos, e isso não significa que estamos prevendo corretamente."
      ]
    }
  }
} satisfies NoticeCopy;
