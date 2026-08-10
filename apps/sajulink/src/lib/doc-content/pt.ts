import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Introdução",
    "title": "Introdução ao Saju-Link",
    "summary": "Este é um serviço que estabelece um saju (leitura dos quatro pilares) com base na sua data e hora de nascimento e explica o que os oito caracteres significam. Ele esclarece o que é calculado e o que não é.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": [
      {
        "title": "O que fazemos?",
        "blocks": [
          {
            "p": "Saju-Link estabelece o **gráfico de saju (quatro pilares) com base na sua data e hora de nascimento e mostra o que os oito caracteres significam**. Ele lê a força dos cinco elementos e a força do pilar do dia, e também examina a fortuna de hoje com base no tronco do dia."
          },
          {
            "p": "O que você vê na tela é **gratuito e não requer associação.** O produto pago é um documento PDF contendo valores não exibidos na tela — a base para distinguir entre um pilar do dia forte e um pilar do dia fraco, Wang Sang Hyu Su Sa, e os detalhes de correção para o verdadeiro horário solar."
          }
        ]
      },
      {
        "title": "O que calculamos?",
        "blocks": [
          {
            "p": "O saju é estabelecido usando o **manseyeok (almanac lunissolar coreano)**. O horário de nascimento é corrigido para o **verdadeiro horário solar** do local de nascimento — porque a posição real do sol varia por região, mesmo que o relógio mostre a mesma hora."
          },
          {
            "p": "As pontuações são dadas apenas de acordo com regras estabelecidas. Conceitos do estudo tradicional de myeongri (estudo do destino coreano) como os Dez Deuses, relações entre ramos terrestres e elementos de equilíbrio são traduzidos em regras de cálculo, e **a mesma entrada sempre resultará no mesmo valor**. Quando as regras são alteradas, testes de regressão são realizados para garantir que os resultados anteriores permaneçam inalterados."
          },
          {
            "p": "**A IA não é utilizada nas frases na tela.** As explicações que aparecem na tela gratuita são frases fixas anexadas aos resultados do cálculo. **Somente as interpretações nos relatórios pagos** utilizam IA generativa, e mesmo assim, a IA não cria pontuações — ela apenas escreve frases com base nos valores fornecidos pelo motor."
          }
        ]
      },
      {
        "title": "O que não dizemos?",
        "blocks": [
          {
            "ul": [
              "**Não fornecemos adivinhação.** Não escrevemos que você deve encontrar ou evitar alguém. Este é um material de referência que resume as perspectivas do myeongri tradicional.",
              "**Não salvamos entradas.** A data e hora de nascimento são usadas apenas no momento do cálculo e não são retidas no servidor. O link do resultado também é armazenado em um local que o navegador não envia ao servidor.",
              "**As pontuações não são consideradas valores humanos.** Apenas porque a fortuna de hoje está baixa não significa que você deve desistir desse dia."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Os métodos de cálculo detalhados estão escritos no [Guia do Usuário](/guide). Informações comerciais e detalhes de contato podem ser encontrados em [Fale Conosco](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base do Cálculo",
    "title": "Qual é a base para os cálculos?",
    "summary": "Divulgamos todas as regras usadas pelo Saju-Link. Você pode verificar de onde vêm os números exibidos na tela, incluindo os ajustes para a fortuna de hoje, as pontuações da tabela de relações entre ramos terrestres e os valores limites que distinguem entre um pilar do dia forte e um pilar do dia fraco.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Os valores escritos aqui são todos **lidos diretamente do código de cálculo**. Como não são transcritos manualmente para o texto, se as regras forem alteradas, os números neste documento também mudarão de acordo."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Base do Serviço",
    "title": "gráfico natal — De onde vêm os oito caracteres?",
    "summary": "Explica como o ano, mês, dia e hora de nascimento se tornam os quatro pilares e oito caracteres, e identifica qual caractere aponta para você. Também discute por que pode ser visualizado mesmo sem saber a hora exata de nascimento.",
    "backLabel": "Base do Cálculo",
    "sections": [
      {
        "title": "Quatro Pilares, Oito Caracteres",
        "blocks": [
          {
            "p": "Saju (四柱) significa literalmente **quatro pilares**. Cada um dos ano, mês, dia e hora de nascimento é estabelecido como um pilar, e dois caracteres são escritos para cada pilar. Assim, há um total de oito caracteres, que é referido como **o gráfico natal**."
          },
          {
            "table": {
              "head": [
                "Pilar",
                "De onde vem?",
                "Dois Caracteres"
              ],
              "rows": [
                [
                  "Pilar do Ano (年柱)",
                  "Ano de nascimento",
                  "Tronco Celestial + Ramo Terrestre"
                ],
                [
                  "Pilar do Mês (月柱)",
                  "Mês de nascimento",
                  "Tronco Celestial + Ramo Terrestre"
                ],
                [
                  "Pilar do Dia (日柱)",
                  "Dia de nascimento",
                  "Tronco Celestial + Ramo Terrestre"
                ],
                [
                  "Pilar do Tempo (時柱)",
                  "Hora de nascimento",
                  "Tronco Celestial + Ramo Terrestre"
                ]
              ]
            }
          },
          {
            "p": "Os caracteres superiores são chamados de troncos celestiais (天干), e os caracteres inferiores são chamados de ramos terrestres (地支). Existem dez troncos celestiais e doze ramos terrestres. Os doze ramos terrestres são comumente referidos como **signos do zodíaco**."
          }
        ]
      },
      {
        "title": "Entre eles, um caractere aponta para mim.",
        "blocks": [
          {
            "p": "Nem todos os oito caracteres têm o mesmo peso. O **tronco celestial do dia de nascimento**, especificamente o caractere superior do pilar do dia, aponta para **mim mesmo**. Isso é chamado de **tronco do dia (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "O saju consiste em oito caracteres estabelecidos usando dois caracteres para cada um dos ano, mês, dia e hora de nascimento, representados pelos troncos celestiais e ramos terrestres. Aqui, o tronco do dia proeminente (日干) é o caractere que aponta para mim mesmo.",
            "labels": {
              "year": "Pilar do Ano",
              "yearNote": "Raiz · Signo do Zodíaco",
              "month": "Pilar do Mês",
              "monthNote": "Estação · Força",
              "day": "Pilar do Dia",
              "dayNote": "Palácio do Eu · Palácio do Cônjuge",
              "hour": "Pilar da Hora",
              "hourNote": "Anos Finais · Uso",
              "stem": "Caule Celestial",
              "stemNote": "Caule do Dia = Eu",
              "branch": "Ramo Terrestre",
              "branchNote": "Ramo do Dia = Palácio do Cônjuge"
            }
          },
          {
            "p": "O que este serviço mostra deriva principalmente deste único caráter — a interpretação das tendências, a força dos cinco elementos, a energia atualmente necessária e a **fortuna de hoje** são todas medidas com base no Dia Stem. Os sete caracteres restantes indicam 'em que ambiente o Dia Stem está colocado'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por que o Dia do Nascimento?",
        "blocks": [
          {
            "p": "O Caule do Ano é o mesmo para todos nascidos naquele ano, e o Caule do Mês é o mesmo para todos nascidos naquele mês. O Caule do Dia muda quando o dia muda, e a adivinhação tradicional considera essa posição como o Eu desde a Dinastia Song. Se o Caule da Hora estiver incluído, ele diferencia mesmo entre aqueles nascidos no mesmo dia."
          }
        ]
      },
      {
        "title": "Dividido por Termos Solares, Não por Ano Calendário",
        "blocks": [
          {
            "p": "Um ano de saju não muda em 1º de janeiro, mas sim em **Ipchun (cerca de 4 de fevereiro)**. O mês também se divide com base nos termos solares."
          },
          {
            "p": "Assim, aqueles nascidos em **janeiro e início de fevereiro recebem o Caule do Ano do ano anterior**. É aqui que surge o mal-entendido comum sobre os signos do zodíaco. O mesmo se aplica se você inserir uma data de nascimento lunar — ela é convertida de volta para solar e, em seguida, dividida por termos solares."
          }
        ]
      },
      {
        "title": "Você Pode Ler Mesmo Sem Saber a Hora de Nascimento",
        "blocks": [
          {
            "p": "Se você não inserir a hora, a leitura será baseada nos três pilares e seis caracteres, excluindo o Pilar da Hora. Não adivinhamos valores ausentes — atribuir arbitrariamente um Pilar da Hora pode perturbar a força dos cinco elementos, levando a conclusões incorretas em vez de potencialmente precisas."
          },
          {
            "p": "Se você souber a hora, é melhor incluí-la. Como dois caracteres são adicionados entre os oito, a força e a avaliação dos cinco elementos podem mudar. No entanto, não usamos a hora do relógio diretamente, mas sim [Hora Solar Verdadeira](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "O método de contar os oito caracteres como cinco elementos para avaliar a força é continuado em [Força dos Cinco Elementos e Pilar do Dia Forte/Fraco](/guide/five-elements), enquanto o método de leitura dos caracteres restantes com base no Caule do Dia é continuado em [Dez Deuses](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Cinco Elementos",
    "title": "Força dos Cinco Elementos e Pilar do Dia Forte/Fraco",
    "summary": "Contamos os oito caracteres como cinco elementos para ver qual energia é forte e qual é fraca. Divulgamos os valores de limiar (45%·35%) que determinam a força do Caule do Dia.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Contando Oito Caracteres como Cinco Energias",
        "blocks": [
          {
            "p": "Os dez Caules Celestiais e doze Ramos Terrestres pertencem a um dos **Cinco Elementos (五行)** — Madeira (木), Fogo (火), Terra (土), Metal (金), Água (水). Ao contar os caracteres no gráfico natal com base em seus respectivos elementos, podemos determinar qual energia é forte e qual é fraca."
          },
          {
            "p": "No entanto, não contamos apenas os números. Também consideramos **se o mês de nascimento apoia essa energia**. Mesmo o mesmo caractere pode ter forças diferentes dependendo de se atende à sua estação. Isso é chamado de Signo do Mês (月令), e é dividido em cinco estágios: Wang (旺), Sang (相), Hyu (休), Su (囚) e Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Onde a Tela e o Relatório Diferem",
        "blocks": [
          {
            "p": "A tela gratuita mostra apenas a **força após refletir o Signo do Mês**. Os valores antes do Signo do Mês e a tabela de Wang, Sang, Hyu, Su e Sa estão incluídos no relatório pago — isso é fornecido para que você possa verificar diretamente onde a avaliação divergiu."
          }
        ]
      },
      {
        "title": "Força do Caule do Dia — Forte e Fraco",
        "blocks": [
          {
            "p": "Após contar as forças dos cinco elementos, avaliamos se o **Caule do Dia é forte ou fraco**. O critério é a proporção de energias alinhadas com o Caule do Dia."
          },
          {
            "p": "As energias alinhadas com o Caule do Dia são **Recurso e Companheiro** — as energias que me dão origem e aquelas que são semelhantes a mim. Como há duas em cinco, se não houver viés, será em torno de {evenAllyRatio}. Tratamos a área em torno desse número como equilibrada, e lemos acima e abaixo como forte ou fraco."
          },
          {
            "table": {
              "head": [
                "Proporção de Energias Alinhadas com o Caule do Dia",
                "Avaliação",
                "O Que Isso Significa?"
              ],
              "rows": [
                [
                  "{strongThreshold} ou mais",
                  "Pilar do Dia Forte (身强)",
                  "As energias que apoiam o Caule do Dia são abundantes."
                ],
                [
                  "{weakThreshold} ou mais e menos que {strongThreshold}",
                  "Equilibrado (中和)",
                  "É difícil concluir em qualquer direção."
                ],
                [
                  "Menos que {weakThreshold}",
                  "Pilar do Dia Fraco (身弱)",
                  "As energias que apoiam o Caule do Dia são fracas."
                ]
              ]
            }
          },
          {
            "p": "Os números nesta tabela não são transcritos do texto, mas são **lidos diretamente do motor**. Se as regras mudarem, este documento também mudará."
          }
        ]
      },
      {
        "title": "Força Não é Boa ou Ruim",
        "blocks": [
          {
            "p": "Ser forte não significa bom, e ser fraco não significa ruim. Se forte, há o poder de avançar, mas é fácil inclinar-se para um lado; se fraco, é mais fácil emprestar a força dos outros, mas pode-se cansar facilmente ao suportar sozinho. **As energias necessárias diferem em ambos os casos.**"
          },
          {
            "p": "Determinar essa 'energia necessária' é o elemento de equilíbrio, e continua em [Elemento de Equilíbrio](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Como os oito caracteres são estabelecidos está em [natal chart](/guide/natal-chart). Como o Pilar do Dia de hoje interage com essa força é abordado em [today's fortune](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Elemento de Equilíbrio",
    "title": "Elemento de Equilíbrio — A Energia Necessária Agora",
    "summary": "Se o Caule do Dia é forte, consideramos a energia a ser reduzida; se fraco, consideramos a energia a ser apoiada como necessária. Isso explica como escolher essa energia e como lidar com ela quando equilibrada.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Os Cinco Elementos Sozinhos Não São Suficientes",
        "blocks": [
          {
            "p": "Existem maneiras de medir se os cinco elementos estão distribuídos de maneira uniforme. No entanto, o que realmente é necessário é **o que está faltando e o que está em excesso neste saju**."
          },
          {
            "p": "Um saju que está distribuído uniformemente não é sempre confortável, nem um saju que está desequilibrado é sempre difícil. A direção do desequilíbrio e se há um elemento para aliviá-lo é o ponto de decisão."
          }
        ]
      },
      {
        "title": "Elemento de Equilíbrio — Reduzir se Excessivo, Adicionar se Faltando",
        "blocks": [
          {
            "p": "O elemento de equilíbrio (用神) é **a energia atualmente necessária por esta pessoa**. Existem vários métodos para determiná-lo (supressão e apoio, equilíbrio sazonal, aflição, mediação), e o que pode ser expresso como regras — e é mais amplamente utilizado — é **supressão e apoio (抑扶)**. Se o pilar do dia é forte, acredita-se que uma energia para reduzir é necessária; se fraco, uma energia para adicionar é requerida."
          },
          {
            "table": {
              "head": [
                "Julgamento",
                "O que é Necessário",
                "Número de Tipos"
              ],
              "rows": [
                [
                  "Pilar do Dia Forte (身强)",
                  "Energia a drenar — Saída, Riqueza e Oficial",
                  "Três"
                ],
                [
                  "Pilar do Dia Fraco (身弱)",
                  "Energia a Adicionar — Recurso, Companheiro",
                  "Dois"
                ],
                [
                  "Equilibrado (中和)",
                  "Não pode ser decidido por supressão e apoio, então as energias mais finas",
                  "Dois"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Limite para Força e Fraqueza",
        "blocks": [
          {
            "p": "O lado do pilar do dia é **Recurso e Companheiro** — a energia que me dá vida e a energia que é como eu. Como dois dos cinco estão envolvidos, o equilíbrio completo será {evenAllyRatio}. A largura é definida acima e abaixo deste {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "A Proporção de Aliados (Recurso + Companheiro) na Força Geral",
              "head": [
                "Proporção",
                "Julgamento"
              ],
              "rows": [
                [
                  "{strongThreshold} ou mais",
                  "Pilar do Dia Forte"
                ],
                [
                  "{weakThreshold} ou mais e menos que {strongThreshold}",
                  "Equilibrado"
                ],
                [
                  "Menos que {weakThreshold}",
                  "Pilar do Dia Fraco"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Equilibrado É um 'Julgamento Menos Certo'",
        "blocks": [
          {
            "p": "Equilibrado significa que a supressão e apoio não podem decidir. Neste momento, as duas energias mais finas são simplesmente consideradas necessárias. Na tela de resultados, é anotado como 'posição atualmente fina' em vez de uma declaração definitiva."
          }
        ]
      },
      {
        "title": "Força Não É o Número de Caracteres",
        "blocks": [
          {
            "p": "Ao contar a força dos cinco elementos, os oito caracteres não são contados como aparecem. Os valores refletem os céus ocultos (地藏干) dentro dos ramos terrestres e a estação da energia do mês (月令) em que alguém nasceu."
          },
          {
            "p": "Contar apenas os caracteres superficiais ignora o fato de que até os mesmos caracteres 木 podem ter forças completamente diferentes dependendo da estação. O 木 da primavera e o 木 do outono, embora sejam o mesmo caractere, têm forças diferentes."
          }
        ]
      },
      {
        "title": "Onde Usar o Elemento de Equilíbrio",
        "blocks": [
          {
            "p": "O elemento de equilíbrio determinado é usado em dois lugares. Um é a tela de resultados **'energia atualmente necessária'**, e o outro é [a sorte de hoje](/guide/today-fortune) — se a energia de hoje corresponde ao elemento de equilíbrio é o item que mais movimenta a pontuação naquele dia."
          }
        ]
      },
      {
        "title": "Este É um Julgamento Simples",
        "blocks": [
          {
            "p": "A análise real do destino considera a formação e as condições sazonais (o calor e a umidade da estação) para determinar o elemento de equilíbrio, e as conclusões podem variar dependendo do método. Saju-Link apenas usa **redução que pode ser medida por valores de força**. Isso se deve ao princípio de usar apenas o que pode ser convertido em regras, então a mesma entrada sempre produzirá a mesma resposta."
          },
          {
            "p": "Em vez disso, a tela de resultados também apresenta o pilar do dia forte e fraco junto com a energia atualmente necessária como **material de leitura**. Isso é para evitar esconder a base da pontuação."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Os Dez Deuses",
    "title": "Os Dez Deuses — As Dez Posições Dentro do Meu Saju",
    "summary": "Baseado no pilar do dia, os caracteres restantes são divididos em dez nomes. Discute as razões para distinguir entre riqueza regular e riqueza lateral, mesmo que sejam o mesmo elemento de riqueza.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "O Pilar do Dia É a Própria Pessoa",
        "blocks": [
          {
            "p": "Entre os oito caracteres do saju, o **pilar do dia** (o tronco celestial do dia de nascimento) refere-se à própria pessoa. Os sete caracteres restantes são lidos como o ambiente em que esse pilar do dia existe."
          },
          {
            "p": "**Os Dez Deuses** (十神) são as dez divisões de como o pilar do dia percebe os outros caracteres. A energia que me nutre é Recurso, a energia que é como eu é Companheiro, a energia que eu dou à luz é Comida e Riqueza, a energia que me suprime é Posição Oficial, e a energia que eu suprime é Riqueza — essas cinco categorias são ainda divididas em yin e yang, formando dez."
          }
        ]
      },
      {
        "title": "O Que os Sete Caracteres Restantes Significam Para Mim",
        "blocks": [
          {
            "p": "Uma vez que o pilar do dia é determinado, os caracteres restantes no gráfico natal recebem cada um um nome. A energia que me dá vida, a energia que é como eu, a energia que eu dou à luz, a energia que me suprime e a energia que eu suprime — esses cinco ramos são ainda divididos em **dez** através de yin e yang. Estes são os Dez Deuses."
          },
          {
            "p": "Assim, os Dez Deuses referem-se não a relacionamentos com os outros, mas a **as posições dentro de mim mesmo**. Quais posições são grossas ou finas indicam minhas tendências e a maneira como vivo."
          }
        ]
      },
      {
        "title": "Por Que Lemos Isso Através dos Dez Deuses em Vez de Três Relações Elementares",
        "blocks": [
          {
            "p": "Há também um método de visualizar a relação do dia stem apenas através dos três aspectos dos cinco elementos (suporte, mesmo e oposto). É simples, mas **o yin e o yang desaparecem.** 甲 (madeira yang) e 乙 (madeira yin) tornam-se o mesmo que 甲, que é uma representação de 'mesmice', e a relação oposta é agrupada em uma única pontuação sem direção ou yin e yang."
          },
          {
            "p": "A posição do cônjuge deve ser avaliada de acordo com os Dez Deuses em termos de yin e yang. Se itens vistos através dos cinco elementos forem misturados com aqueles vistos através dos Dez Deuses em um único motor, haverá dois padrões para os mesmos dois caracteres. Portanto, unificamos sob os Dez Deuses."
          }
        ]
      },
      {
        "title": "A posição do cônjuge é Riqueza Adequada e Oficial Adequado",
        "blocks": [
          {
            "p": "A adivinhação tradicional vê a posição do cônjuge de forma diferente com base no gênero. Para homens, é **Riqueza Adequada (正財)**, e para mulheres, é **Oficial Adequado (正官)**. Mesmo que sejam o mesmo elemento de riqueza, apenas a Riqueza Adequada que está desalinhada em yin e yang é considerada a posição do cônjuge, enquanto a Riqueza Indireta é lida não como um cônjuge, mas em termos de atividade e riqueza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se você não especificar o gênero, esta posição é omitida",
        "blocks": [
          {
            "p": "Isso ocorre porque não é possível determinar qual lado, Riqueza Adequada ou Oficial Adequado, considerar como a posição do cônjuge. Em vez de adivinhar para preencher um valor ausente, lemos os itens restantes sem aquele."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "A fortuna de hoje",
    "title": "Como a fortuna de hoje se apresenta?",
    "summary": "O dia stem de hoje é comparado ao gráfico natal para pontuação. Treze relações de suprimir e apoiar e sete relações de ramos terrestres, junto com todos os vinte itens e suas respectivas adições e subtrações, são totalmente divulgados.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Hoje, também estabelecemos da mesma forma que os oito caracteres",
        "blocks": [
          {
            "p": "Todo dia tem seu próprio **o pilar do dia (日辰)**. Usando o mesmo método de estabelecer o pilar do dia do gráfico natal, hoje também tem um heavenly stem e um earthly branch anexados. A fortuna de hoje é sobre comparar esses dois caracteres com o gráfico natal."
          },
          {
            "p": "A pontuação base é **{baseScore} pontos**. Os itens abaixo são adicionados e subtraídos, e finalmente, é restrito entre {clampLow} pontos e {clampHigh} pontos — não mencionamos 0 pontos ou 100 pontos."
          }
        ]
      },
      {
        "title": "① A energia de hoje é o que eu preciso?",
        "blocks": [
          {
            "p": "Esta é a posição mais significativa. Verificamos se a energia de hoje corresponde à 'energia necessária agora' determinada pelo [elemento de equilíbrio](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "A energia de hoje é",
                "Adição/Subtração"
              ],
              "rows": [
                [
                  "A energia necessária agora",
                  "{todayIsYongsin}"
                ],
                [
                  "Ela gera a energia necessária",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Ela suprime a energia necessária",
                  "{todayControlsYongsin}"
                ],
                [
                  "Ela pressiona mais o lado já transbordante",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Não considere o elemento adverso como 'tudo exceto o elemento de equilíbrio'",
        "blocks": [
          {
            "p": "Se você fizer isso, tanto a energia que gera o elemento de equilíbrio quanto a energia que suprime o elemento de equilíbrio se tornam ruins, e as duas últimas linhas na tabela acima se tornam indistinguíveis. Apenas a energia que **pressiona mais na direção oposta** de acordo com o significado de suprimir e apoiar é vista como o elemento adverso."
          }
        ]
      },
      {
        "title": "② A relação entre o heavenly stem de hoje e o dia stem",
        "blocks": [
          {
            "p": "As relações de suporte e oposição dos cinco elementos são aplicadas diretamente entre o dia stem e o heavenly stem de hoje."
          },
          {
            "table": {
              "head": [
                "Relação",
                "Adição/Subtração"
              ],
              "rows": [
                [
                  "Hoje me gera",
                  "{generatesSelf}"
                ],
                [
                  "Hoje e eu somos a mesma energia",
                  "{sameElement}"
                ],
                [
                  "Eu suprimo hoje",
                  "{selfControls}"
                ],
                [
                  "Eu fluo com hoje",
                  "{selfGenerates}"
                ],
                [
                  "Hoje me suprime",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ O ramo terrestre de hoje encontra os ramos terrestres do gráfico natal",
        "blocks": [
          {
            "p": "O ramo terrestre de hoje é comparado aos ramos terrestres do gráfico natal. A tabela de relações em si está em [relações de ramos terrestres](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relação",
                "Adição/Subtração"
              ],
              "rows": [
                [
                  "triade (三合)",
                  "{branchSamhap}"
                ],
                [
                  "seis harmonias (六合)",
                  "{branchYukhap}"
                ],
                [
                  "metade da triade (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discórdia silenciosa (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "conflito (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Quando há múltiplos pilares, múltiplos relacionamentos surgem. Todos são somados, mas este item inteiro é limitado a **±{branchMaxAbs} pontos** — isso é para evitar que um único relacionamento de ramo terrestre determine todo o dia."
          }
        ]
      },
      {
        "title": "④ Correção Baseada na Força",
        "blocks": [
          {
            "p": "Mesmo com a mesma energia, o significado difere para um pilar de dia forte e um pilar de dia fraco. Portanto, fazemos um último ajuste."
          },
          {
            "table": {
              "head": [
                "Situação",
                "Ajuste"
              ],
              "rows": [
                [
                  "Pilar de dia fraco, mas hoje o apoia",
                  "{weakTodayHelps}"
                ],
                [
                  "Pilar de dia forte, mas hoje reduz adequadamente o fardo",
                  "{strongTodayDrains}"
                ],
                [
                  "Pilar de dia forte, mas hoje aumenta o apoio",
                  "{strongTodayHelps}"
                ],
                [
                  "Pilar de dia fraco, mas hoje adiciona ao fardo",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pontuações por Grau e Área",
        "blocks": [
          {
            "p": "A pontuação total é dividida em cinco graus."
          },
          {
            "table": {
              "head": [
                "Pontuação",
                "Grau"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} pontos ou mais",
                  "Grande Sorte (大吉)"
                ],
                [
                  "{gradeGilMin} pontos ou mais",
                  "Sorte (吉)"
                ],
                [
                  "{gradePyeongMin} pontos ou mais",
                  "Média (平)"
                ],
                [
                  "{gradeJuuiMin} pontos ou mais",
                  "Cuidado (注意)"
                ],
                [
                  "{gradeJosimMin} pontos ou mais",
                  "Tenha Cuidado (操心)"
                ]
              ]
            }
          },
          {
            "p": "As quatro áreas de riqueza, amor, carreira e saúde herdam {overallShare} da pontuação total, enquanto o restante é dividido de acordo com os Dez Deuses e os relacionamentos de ramos terrestres relevantes para essas áreas. Portanto, mesmo que a pontuação total seja a mesma, os números por área diferem de pessoa para pessoa."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Os números acima são todos lidos a partir das configurações do motor. Se as regras forem alteradas, este documento também mudará, e quaisquer mudanças de pontuação serão postadas primeiro no [Aviso](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabela de Relacionamentos",
    "title": "Relacionamentos de Ramos Terrestres — Combinação, Conflito e Discórdia",
    "summary": "Esta é uma tabela de relacionamentos que mostra como o pilar de dia de hoje interage com o gráfico natal. Ela revela o que cada combinação, conflito e discórdia é e quantos pontos eles têm.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Ramos Terrestres são Doze Caracteres",
        "blocks": [
          {
            "p": "Os doze ramos terrestres (十二支) são 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Os signos do zodíaco comumente conhecidos — Rato, Boi, Tigre, Coelho, Dragão, Serpente, Cavalo, Cabra, Macaco, Galo, Cachorro, Porco — estão cada um associado a um desses doze caracteres."
          },
          {
            "figure": "branch-wheel",
            "caption": "Quando os doze caracteres são dispostos em um círculo, os relacionamentos ficam claramente visíveis. O conflito (沖) sempre se enfrenta, enquanto a harmonia e a discórdia de seis são pares mais próximos. Essas linhas não estão escritas no texto, mas são derivadas diretamente das regras de cálculo.",
            "labels": {
              "alt": "Um diagrama mostrando os doze ramos terrestres dispostos em um círculo com linhas conectando a harmonia de seis, conflito e discórdia.",
              "yukhap": "harmonia de seis",
              "chung": "Conflito",
              "wonjin": "Discórdia",
              "rat": "Rato",
              "ox": "Boi",
              "tiger": "Tigre",
              "rabbit": "Coelho",
              "dragon": "Dragão",
              "snake": "cobra",
              "horse": "cavalo",
              "goat": "cabra",
              "monkey": "macaco",
              "rooster": "galo",
              "dog": "cachorro",
              "pig": "porco"
            }
          },
          {
            "p": "No saju, cada um dos quatro pilares tem um ramo terrestre. **A leitura de hoje** é determinada pela correspondência **do ramo do dia** com os quatro ramos do gráfico natal usando a tabela de relacionamentos abaixo."
          }
        ]
      },
      {
        "title": "Tabela de Relacionamento Geral",
        "blocks": [
          {
            "table": {
              "caption": "Em ordem de maior pontuação. Estes são os valores usados pelo Saju-Link.",
              "head": [
                "Relacionamento",
                "Par Correspondente",
                "Significado",
                "Pontuação"
              ],
              "rows": [
                [
                  "triade (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Quando todos os três caracteres se juntam, eles formam uma formação elemental completa (局). Esta é considerada a combinação mais forte.",
                  "{scoreSamhap}"
                ],
                [
                  "seis harmonias (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pares que se atraem. Esta é a combinação mais comum, pois consiste em apenas dois caracteres.",
                  "{scoreYukhap}"
                ],
                [
                  "metade da triade (半合)",
                  "Dois caracteres que incluem um dos caracteres reais (子·酉·午·卯) da triade",
                  "Uma metade da triade que inclui um caráter que é central para a formação. Não forma uma formação elemental completa com apenas dois caracteres, tornando-a inferior à triade.",
                  "{scoreBanhap}"
                ],
                [
                  "Mesmo Ramo",
                  "子子 · 丑丑 …",
                  "Caracteres que são iguais. Isso significa que se assemelham, mas não implica atração, então são colocados no meio.",
                  "{scoreSame}"
                ],
                [
                  "Sem Relacionamento",
                  "Pares que não pertencem a nenhum lugar acima ou abaixo",
                  "Combinações que não têm relacionamento especial. Isso serve como um ponto de referência.",
                  "{scoreNeutral}"
                ],
                [
                  "discórdia silenciosa (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pares que não conseguem se separar apesar de sua aversão. Eles parecem silenciosos na superfície, mas são considerados duradouros.",
                  "{scoreWonjin}"
                ],
                [
                  "Conflito (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pares que colidem diretamente. Estes são seis pares que se enfrentam.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "triades e metades de triades",
        "blocks": [
          {
            "p": "Uma triade requer que todos os três caracteres estejam presentes. Como há quatro ramos terrestres no gráfico natal, é possível que o ramo do dia se combine com eles, resultando em uma triade — nesse momento, recebe uma pontuação de {scoreSamhap}. Se apenas dois caracteres estiverem envolvidos, é uma metade de triade."
          }
        ]
      },
      {
        "kind": "note",
        "title": "metades de triades Requerem Caracteres Reais para serem Reconhecidas",
        "blocks": [
          {
            "p": "Há também um método que conta como uma metade de triade se ambos os caracteres pertencem ao mesmo grupo de triade. Isso permite combinações como 申辰, que são difíceis de chamar de combinação, receberem altas pontuações. Portanto, este serviço reconhece uma metade de triade apenas quando inclui caracteres reais (子·酉·午·卯), e não considera combinações como 申辰·巳丑·寅戌·亥未 como válidas."
          }
        ]
      },
      {
        "title": "Razão para Separar discórdia silenciosa",
        "blocks": [
          {
            "p": "Os seis pares de discórdia silenciosa são vistos com frequência, assim como os conflitos. Se alguém contasse apenas combinações e conflitos, esses seis pares estariam todos enterrados sob a pontuação de sem relacionamento de {scoreNeutral}, então são colocados separadamente."
          },
          {
            "p": "Se os conflitos são pares que colidem diretamente e são exibidos de forma proeminente, a discórdia silenciosa é sutilmente desalinhada. Portanto, é colocada com uma pontuação de {scoreWonjin}, que é mais alta do que os conflitos ({scoreChung}), mas definitivamente mais baixa do que sem relacionamento ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pontuações também são atribuídas para conflitos",
        "blocks": [
          {
            "p": "A pontuação de choque mais baixa é {scoreChung}. É intencional não dar um valor próximo de 0. Na tradicional myeongri, um choque não é um 'fim', mas uma 'colisão', e dar uma pontuação próxima do fundo significaria que o serviço está fazendo uma declaração definitiva sobre o relacionamento."
          },
          {
            "p": "Com um mínimo de {scoreChung} e um máximo de {scoreSamhap}, a diferença é claramente visível, mas não definitiva."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Signo do Zodíaco",
    "title": "Onde está o Signo do Zodíaco em Saju?",
    "summary": "O signo do zodíaco é o ramo terrestre do ano em que você nasceu. Isso explica por que é extraído do ano do saju em vez do ano do calendário, e por que aqueles nascidos no início de janeiro ou fevereiro têm o signo do zodíaco do ano anterior.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "O signo do zodíaco é o ramo terrestre do ano em que você nasceu.",
        "blocks": [
          {
            "p": "Saju consiste em quatro pilares: ano, mês, dia e hora, com cada pilar tendo um tronco celestial e um ramo terrestre. Entre eles, o **ramo terrestre do ano**, ou ramo do ano, é o animal que nos referimos como o signo do zodíaco."
          },
          {
            "table": {
              "caption": "Os Doze Ramos Terrestres e Signos do Zodíaco",
              "head": [
                "Ramo Terrestre",
                "Signo do Zodíaco"
              ],
              "rows": [
                [
                  "子",
                  "Rato"
                ],
                [
                  "丑",
                  "Boi"
                ],
                [
                  "寅",
                  "Tigre"
                ],
                [
                  "卯",
                  "Coelho"
                ],
                [
                  "辰",
                  "Dragão"
                ],
                [
                  "巳",
                  "Serpente"
                ],
                [
                  "午",
                  "Cavalo"
                ],
                [
                  "未",
                  "Cabra"
                ],
                [
                  "申",
                  "Macaco"
                ],
                [
                  "酉",
                  "Galo"
                ],
                [
                  "戌",
                  "Cão"
                ],
                [
                  "亥",
                  "Porco"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Usamos o ano do saju, não o ano do calendário.",
        "blocks": [
          {
            "p": "O ponto em que o signo do zodíaco muda não é 1º de janeiro do calendário solar nem o Ano Novo Lunar. O padrão para mudar o ano no saju é **Ipchun**. Portanto, aqueles nascidos no início de janeiro ou fevereiro podem ter um signo do zodíaco diferente do que o calendário indica."
          }
        ]
      },
      {
        "kind": "note",
        "title": "A razão pela qual não perguntamos diretamente pelo signo do zodíaco.",
        "blocks": [
          {
            "p": "É por isso que só pedimos a data de nascimento sem selecionar o signo do zodíaco na tela de entrada. Quando o motor de saju calcula o ano, ele se alinha automaticamente com o limite de Ipchun. Se selecionado diretamente, alguém nascido no início de fevereiro escolheria um signo do zodíaco que não corresponde ao seu signo real."
          }
        ]
      },
      {
        "title": "O signo do zodíaco é um caractere no saju.",
        "blocks": [
          {
            "p": "Entre os oito caracteres, o que corresponde ao signo do zodíaco é **um ramo do ano**. Os outros sete caracteres — especialmente o tronco do dia que se refere a si mesmo — não têm relação com o signo do zodíaco."
          },
          {
            "p": "As pessoas nascidas no mesmo ano compartilham todas o mesmo signo do zodíaco. Portanto, o que pode ser conhecido a partir do signo do zodíaco é apenas tanto quanto um dos oito caracteres. Esta é a razão pela qual este serviço não **trata o signo do zodíaco separadamente ou significativamente** — o ramo do ano é calculado para força e hoje é o pilar do dia do julgamento do dia, assim como qualquer outro ramo terrestre."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ainda assim, a razão pela qual mostramos o signo do zodíaco.",
        "blocks": [
          {
            "p": "É a única posição onde o significado é compreendido mesmo que você não conheça a terminologia de myeongri. Se o signo do zodíaco for anotado ao lado do ramo do ano na tela do gráfico natal, ele se torna uma pista para ler os outros sete caracteres."
          }
        ]
      },
      {
        "title": "O ramo do ano permanece o mesmo mesmo que você não saiba a hora de nascimento.",
        "blocks": [
          {
            "p": "Se você não inserir a hora, o pilar da hora é omitido e a força dos cinco elementos (the five elements) muda. No entanto, o **ano da ramificação permanece o mesmo** — é determinado unicamente pelo ano em que você nasceu."
          },
          {
            "p": "Portanto, a história derivada do ramo do ano não muda mesmo para aqueles que não conhecem a hora. Inversamente, isso significa que o que pode ser dito com base apenas no signo do zodíaco é limitado, independentemente de a hora estar incluída ou não."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Hora",
    "title": "Convertendo a hora de nascimento para o verdadeiro horário solar.",
    "summary": "O horário padrão e a posição real do sol diferem. Isso aborda por que a hora deve ser ajustada de acordo com a longitude do local de nascimento para garantir que o pilar da hora esteja correto.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "A hora no relógio e a hora solar são diferentes",
        "blocks": [
          {
            "p": "O pilar da hora do saju (時柱) é determinado pela posição do sol. No entanto, o relógio que vemos utiliza um único horário padrão para todo o país, o que desalinha com a posição real do sol."
          },
          {
            "p": "O horário padrão da Coreia é baseado na longitude 135° leste. A longitude de Seul é cerca de 127°, então está aproximadamente 8° a oeste, fazendo com que o sol atinja seu zênite mais tarde — quando é meio-dia pelo relógio, o sol em Seul ainda está antes de seu zênite. Essa diferença é de cerca de **32 minutos**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutos mudam o pilar da hora em um slot",
        "blocks": [
          {
            "p": "O tempo no saju é dividido em unidades de duas horas. Aqueles que nasceram perto da fronteira terão seu pilar da hora completamente alterado por uma diferença de 32 minutos — ajustes são necessários precisamente por causa daqueles que caem exatamente nessa fronteira."
          }
        ]
      },
      {
        "title": "A razão para perguntar onde você nasceu",
        "blocks": [
          {
            "p": "Se a longitude for diferente, o valor do ajuste também diferirá. Se você aplicar o ajuste baseado em Seul a alguém nascido no exterior, o pilar da hora estará significativamente desalinhado. Portanto, a tela de entrada pede que você selecione seu local de nascimento, e os cálculos são feitos com base na longitude e no horário padrão daquela cidade. Atualmente, há {cityCount} lugares na lista."
          },
          {
            "p": "Mesmo dentro do mesmo país, lugares com longitudes significativamente diferentes (como os Estados Unidos, Rússia, Indonésia, etc.) foram divididos em cidades. **15° de longitude equivalem a um pilar da hora**."
          },
          {
            "p": "Se você não selecionar, os cálculos serão feitos com base em Seul. A maioria dos nascimentos é doméstica, então isso é menos propenso a erros, mas se você nasceu no exterior, por favor, certifique-se de selecionar."
          }
        ]
      },
      {
        "title": "O horário padrão mudou várias vezes no passado",
        "blocks": [
          {
            "p": "Há uma razão pela qual o ajuste não pode ser calculado simplesmente como \"diferença de longitude ÷ 15° × 60 minutos.\" O horário padrão em si variou ao longo de diferentes eras."
          },
          {
            "table": {
              "caption": "Mudanças no horário padrão da Coreia — aqueles nascidos neste período estarão desalinhados com cálculos simples",
              "head": [
                "Período",
                "O que era diferente?"
              ],
              "rows": [
                [
                  "Antes de 1912",
                  "Não havia horário padrão (hora média local)"
                ],
                [
                  "1954 – 1961",
                  "O horário padrão era UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "O horário de verão foi implementado"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link não fixa o meridiano padrão como um valor constante, mas calcula o horário padrão real usado naquele momento com base nas informações de **fuso horário IANA** do local de nascimento. O horário de verão e os horários padrão passados são automaticamente refletidos."
          }
        ]
      },
      {
        "title": "Nascimento logo após a meia-noite também considera a data",
        "blocks": [
          {
            "p": "Como o ajuste é -32 minutos, aqueles nascidos entre 00:00 e 00:32 pelo relógio estarão às **11 PM do dia anterior** em tempo solar verdadeiro. Se apenas a hora for ajustada para trás e a data permanecer a mesma, o pilar do dia (日柱) será escrito como \"11 PM do dia anterior.\""
          },
          {
            "p": "Saju-Link também ajustará a data neste caso. O caractere acima do pilar do dia refere-se ao tronco do dia (日干), que indica a mim mesmo, então se isso estiver desalinhado, quase todos os itens na interpretação estarão desalinhados."
          }
        ]
      },
      {
        "title": "Você não precisa saber a hora",
        "blocks": [
          {
            "p": "A hora de nascimento é opcional. Se você não souber, os cálculos serão feitos sem o pilar da hora, e esse fato será exibido na tela de resultados. Como isso significa que dois dos oito caracteres estão faltando, afetará a avaliação da força e fraqueza dos cinco elementos, então se você souber, é mais preciso incluí-la."
          },
          {
            "p": "O ramo do ano (o animal do zodíaco) é sempre o mesmo, independentemente da hora — [porque olhamos apenas para o ramo do ano](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informação Pessoal",
    "title": "Um método que não armazena as informações inseridas",
    "summary": "Esclarece o que significa tecnicamente que a data de nascimento não é registrada em nenhum lugar e o que está contido no link do resultado.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Não há registro de associação",
        "blocks": [
          {
            "p": "Saju-Link não cria contas. Não coleta nomes, e-mails ou números de telefone. A única informação coletada é a data de nascimento e (opcionalmente) a hora de nascimento, local de nascimento e gênero, e essa informação não permanece após a conclusão do cálculo."
          },
          {
            "p": "Há um campo para inserir um título a ser exibido na tela de resultados, mas isso é **apenas para fins de exibição** e não é usado nos cálculos. Você não precisa inserir seu nome real."
          }
        ]
      },
      {
        "title": "O que está contido no link do resultado?",
        "blocks": [
          {
            "p": "Uma vez que o cálculo esteja completo, o endereço se parece com isso."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "O que segue **#** são os valores de entrada. Esta parte é chamada de **fragmento**, que é uma seção que **o navegador não envia ao servidor**. Este é um comportamento padrão da web e não uma regra que criamos — foi originalmente projetado para indicar uma posição dentro de um documento, então o servidor não tem necessidade de vê-lo."
          },
          {
            "p": "Em outras palavras, quando você abre o link do resultado, o navegador lê esse valor para solicitar o cálculo, e nosso servidor recebe os valores para usar no cálculo, retorna a resposta e então a esquece."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por favor, tenha cuidado ao enviar o link para outros",
        "blocks": [
          {
            "p": "O fato de que não é armazenado no servidor não significa que o link seja seguro. O link do resultado contém as datas de nascimento de duas pessoas, então a pessoa que recebe esse link pode ver o mesmo resultado."
          }
        ]
      },
      {
        "title": "Por que o cálculo é feito no servidor, mas não é armazenado?",
        "blocks": [
          {
            "p": "O cálculo em si é feito no servidor. A tabela do calendário lunisolar é necessária para gerar o saju, e essa tabela é grande demais para ser enviada ao navegador. No entanto, **após processar a solicitação, não usamos esse valor em lugar nenhum.** Não há código para inseri-lo em um banco de dados."
          },
          {
            "p": "Os registros mínimos necessários para operação são mantidos — um contador para evitar que a mesma pessoa envie muitas solicitações em um curto período de tempo. Isso não inclui a data de nascimento, e o IP de acesso não é retido. Apenas um valor hash com a data é contado, e esse valor muda quando o dia muda."
          }
        ]
      },
      {
        "title": "Coisas que não podem ser feitas porque as informações não são armazenadas",
        "blocks": [
          {
            "p": "Para ser honesto, há coisas que foram abandonadas porque não armazenamos informações."
          },
          {
            "ul": [
              "**Você não pode recuperar resultados passados.** Você precisa ter o link para visualizá-los novamente.",
              "**Os mesmos valores serão recalculados.** Não há cache. No entanto, como todas as regras são determinísticas, [a mesma entrada sempre produzirá o mesmo valor](/guide/natal-chart).",
              "**Atualizar trará de volta o portão de anúncios.** Isso ocorre porque não há lugar para deixar o histórico de visualização."
            ]
          }
        ]
      },
      {
        "title": "Se você fizer uma compra",
        "blocks": [
          {
            "p": "Quando você compra um relatório, um registro de transação será mantido. O pagamento está sujeito a períodos legais de retenção, e sem um histórico de pedidos, reembolsos não podem ser processados. No entanto, neste momento, **a data de nascimento usada para o cálculo do saju não será anexada ao pedido** — ela será solicitada novamente ao criar o PDF após a confirmação do pagamento."
          },
          {
            "p": "Para mais detalhes, consulte nossa [Política de Privacidade](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produtos pagos",
    "title": "O que está incluído no relatório pago",
    "summary": "Esclarece o que foi adicionado ao PDF enquanto mantém a tela inalterada. Valores e conteúdos são recuperados das configurações reais do produto.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Manteve a tela inalterada, adicionou apenas ao PDF",
        "blocks": [
          {
            "p": "O cálculo do saju e a consulta de resultados são **gratuitos**. Você pode ver tudo na tela, incluindo o gráfico natal, os cinco elementos, a sorte de hoje e suas bases, pois nada foi omitido ao criar o relatório pago."
          },
          {
            "p": "O papel do relatório é **adicionar camadas que não estão presentes na tela**. Essas camadas não são fabricadas; são valores que já foram calculados durante o processo de pontuação, mas não foram usados na tela."
          }
        ]
      },
      {
        "title": "Relatório PDF de saju vitalício e sorte deste ano — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Pagamento nacional {priceDomestic} (incluindo IVA), pagamento internacional {priceGlobal}. Consiste em {pageCount} páginas A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "O índice é lido diretamente da descrição do produto. **O número de páginas é o mesmo que o documento real** — não é inflacionado, pois é o valor declarado no aviso de informações do produto."
          }
        ]
      },
      {
        "title": "O que não está na tela",
        "blocks": [
          {
            "p": "A tela gratuita mostra o gráfico natal, os cinco elementos e a sorte de hoje. Existem três valores que foram produzidos durante o processo de cálculo, mas não são exibidos na tela, e essas são as partes do relatório pago."
          },
          {
            "ul": [
              "**Relação dos aliados do dia stem** — Mostra numericamente onde foi feito o julgamento de um pilar de dia forte ou fraco. O nome do julgamento sozinho não indica se estava na borda ou amplo.",
              "**Wang Sang Hyu Su Sa** — Quanto o mês de nascimento elevou cada energia. Se a barra de poder indica 'quanto há', esta tabela indica 'está na estação'.",
              "**Detalhes da correção do verdadeiro horário solar** — O conceito está no documento de orientação, mas **'quantos minutos foram deslocados no seu caso'** é um valor diferente para cada pessoa, então está incluído apenas no relatório."
            ]
          }
        ]
      },
      {
        "title": "O que você deve saber antes de comprar",
        "blocks": [
          {
            "p": "**O servidor não armazena arquivos.** Uma vez que o pagamento é aprovado, o documento é criado e enviado imediatamente, não deixando nada no servidor. O princípio deste serviço de não salvar valores de entrada é mantido mesmo no fluxo pago."
          },
          {
            "p": "Portanto, **salve o arquivo imediatamente após o pagamento.** Você pode recebê-lo até cinco vezes com o mesmo pedido, mas se você sair da tela de resultados e os valores de entrada desaparecerem, não poderá ser recriado."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Relatórios também são materiais de referência",
        "blocks": [
          {
            "p": "Apenas porque o número de páginas aumentou não significa que as conclusões são mais certas. O que o relatório adiciona é **a base do mesmo cálculo**, não uma afirmação mais forte. O destino é um campo onde as conclusões podem variar dependendo do praticante, e este serviço apenas calcula o que pode ser traduzido em regras."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Aviso",
    "title": "Anúncios",
    "summary": "Este é um lugar para informar mudanças que podem afetar o uso.",
    "backLabel": "Voltar ao início",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contato",
    "title": "Consultas",
    "summary": "Este é o canal para consultas sobre uso, reembolsos, solicitações de informações pessoais e relatórios de erros, juntamente com informações comerciais.",
    "backLabel": "Voltar ao início",
    "sections": [
      {
        "title": "Contato por e-mail",
        "blocks": [
          {
            "p": "Por favor, envie consultas para **{email}**. Nós responderemos dentro de 2 dias úteis. Para consultas sobre pagamento e reembolso, inclua **o número do pedido ou o e-mail usado para pagamento** para uma confirmação mais rápida."
          },
          {
            "p": "Consultas por telefone são recebidas em {customerCenter}."
          }
        ]
      },
      {
        "title": "O que pode ser enviado para este canal",
        "blocks": [
          {
            "ul": [
              "**Pagamento e reembolso** — Se o documento não foi criado ou o valor do pagamento difere do pedido, um reembolso total será fornecido. As condições estão na [Política de Reembolso](/refund-policy).",
              "**Informações pessoais** — Aceitamos solicitações de visualização, correção e exclusão. A política de processamento está na [Política de Privacidade](/privacy).",
              "**Relatório de erro de cálculo** — Se o gráfico natal do saju ou as pontuações parecerem estranhas, por favor, nos avise. Se você incluir quando inseriu a data e hora de nascimento, podemos recalcular com os mesmos valores."
            ]
          }
        ]
      },
      {
        "title": "Informações comerciais",
        "blocks": [
          {
            "ul": [
              "**Nome da empresa** — {companyName}",
              "**Representante** — {representative}",
              "**Número de registro da empresa** — {businessNumber}",
              "**Número de registro de comércio por correspondência** — {mailOrderNumber}",
              "**Endereço** — {address}",
              "**Centro de atendimento ao cliente** — {customerCenter}",
              "**E-mail** — {email}",
              "**Responsável pela proteção de informações pessoais** — {privacyOfficer}",
              "**Fornecedor de hospedagem** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Não há necessidade de incluir sua data e hora de nascimento no e-mail de consulta. Não salvamos entradas, então não podemos recuperá-las depois, e o que precisa de confirmação é suficiente com o número do pedido. Por favor, inclua apenas quando os valores forem absolutamente necessários, como em um relatório de erro de cálculo."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PT_NOTICES = {
  "kindLabels": {
    "service": "Serviço",
    "product": "Relatório",
    "engine": "Critérios de cálculo",
    "support": "Consulta"
  },
  "intro": "Mudanças que afetam as condições de uso, como preços e termos, serão publicadas aqui antes da implementação. Melhorias internas, como a tela ficando mais rápida, não são publicadas aqui: o que aparece aqui é apenas o que você precisa saber.",
  "empty": {
    "title": "Nenhum aviso foi publicado.",
    "body": "Se houver alguma mudança para informar, ela será publicada aqui."
  },
  "effective": "Válido a partir de {date}",
  "pager": {
    "label": "Página de avisos",
    "newer": "← Mais recente",
    "older": "Avisos anteriores →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "A janela de consulta e a página de introdução do serviço foram abertas.",
      "body": [
        "Reunimos uma única janela para consultas, reembolsos, solicitações de informações pessoais e relatórios de erros de cálculo. Você pode verificá-la na parte inferior da tela em 'Consultar'.",
        "Quando você nos informar sobre algo que parece ser um erro de cálculo, por favor inclua a data e a hora de nascimento que você inseriu. Não salvamos a entrada, então sem esse valor, não podemos recalcular."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Nas telas em árabe e khmer, o relatório será gerado em inglês.",
      "body": [
        "Se você estiver visualizando a tela em árabe ou khmer, o relatório em PDF que você comprar será criado em inglês. Isso ocorre porque a ferramenta ainda não conseguiu formatar esses dois scripts em parágrafos.",
        "Você ainda pode ver a tela como está, e o nome escrito no relatório será exatamente como você o inseriu.",
        "As mesmas informações também são fornecidas antecipadamente na tela de pagamento. Nós o notificaremos aqui quando a ferramenta suportar esses scripts."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Os critérios de cálculo serão incluídos com os resultados.",
      "body": [
        "Abaixo da tela de resultados e do relatório, os critérios de cálculo (por exemplo, sajulink-natal-v1) são indicados. Se a entrada for a mesma, o mesmo valor sempre sairá sob os mesmos critérios.",
        "Se as regras para interpretar myeongri forem alteradas e as pontuações puderem diferir, primeiro publicaremos esse fato e a data de vigência aqui. Isso ocorre porque os números nos links de resultados que você recebeu anteriormente podem mudar.",
        "Os critérios atuais são v10, e o pagamento ainda está em preparação."
      ]
    }
  }
} satisfies NoticeCopy;
