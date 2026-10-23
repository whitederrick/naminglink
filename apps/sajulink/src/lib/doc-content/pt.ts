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
        "blocks": [
          {
            "p": "O Saju registra o ano, o mês, o dia e a hora do seu nascimento com dois caracteres chineses cada, oito caracteres no total. O caractere superior de cada par se chama **tronco celeste**, o inferior **ramo terrestre**, e os dois caracteres do seu dia de nascimento se chamam **pilar do dia**. Se essas palavras são novas para você, comece por [Troncos celestes, ramos terrestres e pilar do dia: como ler os caracteres](/guide/saju-letters)."
          },
          {
            "ul": [
              "**Troncos celestes** — os dez caracteres superiores do Saju. Cada um tem um elemento e uma polaridade fixos, e o tronco do seu dia de nascimento é o tronco do dia que aponta para você.",
              "**Ramos terrestres** — os doze caracteres inferiores do Saju, os mesmos dos animais do zodíaco. Cada ramo guarda troncos ocultos no seu interior.",
              "**Pilares do dia** — o par formado pelo tronco e pelo ramo do seu dia de nascimento. Há 60, de 甲子 a 癸亥, e cada um tem a sua própria entrada. Você os encontra nas listas recolhidas abaixo."
            ]
          }
        ]
      },
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
  "guide/examples": {
    "eyebrow": "Exemplos",
    "title": "Lendo um mapa por exemplos: três resultados reais de cálculo",
    "summary": "Três datas de nascimento fictícias processadas pelo mecanismo do Saju-Link e mostradas exatamente como foram calculadas, com um passo a passo da ordem para ler os quatro pilares, o mestre do dia e a força dos cinco elementos.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O que são estes exemplos",
        "blocks": [
          {
            "p": "As três pessoas abaixo não são reais. As datas de nascimento foram escolhidas para ilustrar um ponto. Os resultados são gerados com **o mesmo mecanismo de cálculo e os mesmos componentes de tela** que mostram o resultado gratuito quando você informa a sua própria data de nascimento; por isso, o que você vê aqui corresponde ao que você obteria."
          },
          {
            "p": "A tela gratuita mostra os quatro pilares, o mestre do dia e a força dos cinco elementos. Se o mestre do dia é forte ou fraco (pilar do dia forte / fraco) e, portanto, qual elemento é necessário (o elemento de equilíbrio) fazem parte do [O que está incluído no relatório pago](/guide/reports); por isso, também não aparecem nestes exemplos."
          },
          {
            "p": "Cada exemplo é lido na mesma ordem. Primeiro, encontre o mestre do dia — o tronco celeste do dia em que você nasceu — entre os quatro pilares. Depois, observe os elementos mais forte e mais fraco na barra e, por fim, sobreponha a estação do mês de nascimento. Se os caracteres não forem familiares, comece por [Troncos celestes, ramos terrestres e pilar do dia: como ler os caracteres](/guide/saju-letters)."
          }
        ]
      },
      {
        "title": "Exemplo 1 — {exADayMaster}: o mestre do dia e o elemento mais forte são diferentes",
        "slot": "exampleA",
        "blocks": [
          {
            "p": "O nascimento imaginado é {exABirth} (calendário solar). O mapa tem estes pilares. Ano: {exAYear}. Mês: {exAMonth}. Dia: {exADay}. Hora: {exAHour}."
          },
          {
            "p": "O tronco celeste do dia de nascimento é o mestre do dia — aqui, {exADayMaster} ({exADayElement}). A descrição de temperamento em uma linha que o Saju-Link associa a cada mestre do dia diz: {exATrait}"
          },
          {
            "p": "Na barra de elementos, a maior parcela é {exAStrongest}, com {exAStrongestPct}, e a menor é {exAScarcest}, com {exAScarcestPct}. O elemento do mestre do dia é {exADayElement}, mas o elemento mais forte é {exAStrongest}. **O elemento do mestre do dia e o elemento mais forte podem ser diferentes** — esse é o ponto deste exemplo."
          },
          {
            "p": "A estação do mês de nascimento é {exASeason}, do mesmo lado que o elemento mais forte. Como a estação eleva um elemento faz parte do cálculo da força, e o método está descrito em [Elemento de Equilíbrio — A Energia Necessária Agora](/guide/yongsin)."
          },
          {
            "p": "Os troncos ocultos dentro do ramo do dia ({exADayBranch}) são: {exAHiddenStems}. Os troncos ocultos contam para a força de cada elemento; por isso, se você contar apenas os oito caracteres visíveis, a barra pode parecer inconsistente."
          },
          {
            "p": "Para este exemplo, outras leituras recomendadas são [Madeira Yin (乙) — Madeira, Yin](/guide/stem-eul), [O pilar do dia 乙亥](/guide/pillar-eul-hae) e [亥 — o ramo do Porco](/guide/branch-hae)."
          }
        ]
      },
      {
        "title": "Exemplo 2 — {exBDayMaster}: um mapa com um elemento ausente",
        "slot": "exampleB",
        "blocks": [
          {
            "p": "O nascimento imaginado é {exBBirth} (calendário solar). O mapa tem estes pilares. Ano: {exBYear}. Mês: {exBMonth}. Dia: {exBDay}. Hora: {exBHour}."
          },
          {
            "p": "O tronco celeste do dia de nascimento é o mestre do dia — aqui, {exBDayMaster} ({exBDayElement}). A descrição de temperamento em uma linha que o Saju-Link associa a cada mestre do dia diz: {exBTrait}"
          },
          {
            "p": "Na barra de elementos, a parcela de {exBScarcest} é {exBScarcestPct}, o que significa que ele é praticamente invisível na barra. O Saju-Link destaca separadamente esse elemento como o mais fraco. Já a maior parcela é {exBStrongest}, com {exBStrongestPct}."
          },
          {
            "p": "A estação do mês de nascimento é {exBSeason}. O elemento do mestre do dia ({exBDayElement}), o elemento mais forte ({exBStrongest}) e a estação ({exBSeason}) são todos diferentes entre si, o que faz deste um bom exemplo para ler os três separadamente."
          },
          {
            "p": "O ramo do ano ({exBYearBranch}) corresponde ao animal: {exBAnimal}. O animal é apenas um dos oito caracteres — o ramo do ano. Mais informações em [Onde está o Signo do Zodíaco em Saju?](/guide/zodiac)."
          },
          {
            "p": "Para este exemplo, outras leituras recomendadas são [Terra Yin (己) — Terra, Yin](/guide/stem-gi), [O pilar do dia 己酉](/guide/pillar-gi-yu) e [酉 — o ramo do Galo](/guide/branch-yu)."
          }
        ]
      },
      {
        "title": "Exemplo 3 — {exCDayMaster}: um mapa fortemente inclinado para um lado",
        "slot": "exampleC",
        "blocks": [
          {
            "p": "O nascimento imaginado é {exCBirth} (calendário solar). O mapa tem estes pilares. Ano: {exCYear}. Mês: {exCMonth}. Dia: {exCDay}. Hora: {exCHour}."
          },
          {
            "p": "O tronco celeste do dia de nascimento é o mestre do dia — aqui, {exCDayMaster} ({exCDayElement}). A descrição de temperamento em uma linha que o Saju-Link associa a cada mestre do dia diz: {exCTrait}"
          },
          {
            "p": "O elemento do mestre do dia, o elemento mais forte e a estação se reúnem todos no mesmo lado, o de {exCStrongest}. Na barra de elementos, a parcela de {exCStrongest} é {exCStrongestPct}, e o menor, {exCScarcest}, tem {exCScarcestPct}."
          },
          {
            "p": "Uma forte inclinação para um lado não diz, por si só, se algo é bom ou ruim. Se a inclinação é um peso ou uma força para o mestre do dia é decidido separadamente pela avaliação de pilar do dia forte / fraco e pelo elemento de equilíbrio — os critérios estão publicados em [Elemento de Equilíbrio — A Energia Necessária Agora](/guide/yongsin), e a avaliação em si está em [O que está incluído no relatório pago](/guide/reports)."
          },
          {
            "p": "Os troncos ocultos dentro do ramo do dia ({exCDayBranch}) são: {exCHiddenStems}."
          },
          {
            "p": "Para este exemplo, outras leituras recomendadas são [Fogo Yin (丁) — Fogo, Yin](/guide/stem-jeong), [O pilar do dia 丁亥](/guide/pillar-jeong-hae) e [亥 — o ramo do Porco](/guide/branch-hae)."
          }
        ]
      },
      {
        "title": "Experimente com o seu próprio mapa",
        "blocks": [
          {
            "p": "Informe a sua data e hora de nascimento em [Leitura de Saju](/reading) e você receberá um resultado construído da mesma forma que estes exemplos. Os valores informados não são guardados em nossos servidores — o método está descrito em [Um método que não armazena as informações inseridas](/guide/no-storage)."
          },
          {
            "p": "Para sobrepor o pilar do dia de hoje ao seu mapa, use [A sorte de hoje](/today)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "As datas de nascimento destes exemplos são fictícias, criadas para ilustração, e os resultados servem apenas como referência. Valores que mudam todos os dias, como a sorte de hoje, não estão incluídos."
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
  "guide/stem-gap": {
    "eyebrow": "Troncos celestes",
    "title": "Madeira Yang (甲) — Madeira, Yang",
    "summary": "O elemento e a polaridade do tronco celeste 甲, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Madeira Yang (甲) é o primeiro dos dez troncos celestes",
        "blocks": [
          {
            "p": "甲 é o primeiro dos dez troncos celestes. Seu elemento é Madeira e sua polaridade é Yang. O Saju-Link chama de \"Madeira Yang (甲)\" a pessoa cujo tronco do dia é 甲."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 甲 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 甲 lê o outro tronco, e, quando o outro tronco lê 甲, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Madeira Yang (甲) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Companheiro (比肩)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Rival (劫財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Expressão (食神)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Riqueza estável (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Desafiante (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Autoridade (正官)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Amparo (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 甲 como tronco do dia, a Riqueza estável é 己 e a Autoridade é 辛. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 甲",
        "blocks": [
          {
            "p": "É aqui que 甲 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 甲 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 甲",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "principal (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Coelho",
                  "residual (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Porco",
                  "médio (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Troncos celestes",
    "title": "Madeira Yin (乙) — Madeira, Yin",
    "summary": "O elemento e a polaridade do tronco celeste 乙, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Madeira Yin (乙) é o segundo dos dez troncos celestes",
        "blocks": [
          {
            "p": "乙 é o segundo dos dez troncos celestes. Seu elemento é Madeira e sua polaridade é Yin. O Saju-Link chama de \"Madeira Yin (乙)\" a pessoa cujo tronco do dia é 乙."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 乙 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 乙 lê o outro tronco, e, quando o outro tronco lê 乙, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Madeira Yin (乙) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Rival (劫財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Companheiro (比肩)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Riqueza estável (正財)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Autoridade (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Desafiante (偏官)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Amparo (正印)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 乙 como tronco do dia, a Riqueza estável é 戊 e a Autoridade é 庚. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 乙",
        "blocks": [
          {
            "p": "É aqui que 乙 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 乙 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 乙",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "卯",
                  "Coelho",
                  "principal (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Dragão",
                  "residual (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Ovelha",
                  "médio (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Troncos celestes",
    "title": "Fogo Yang (丙) — Fogo, Yang",
    "summary": "O elemento e a polaridade do tronco celeste 丙, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Fogo Yang (丙) é o terceiro dos dez troncos celestes",
        "blocks": [
          {
            "p": "丙 é o terceiro dos dez troncos celestes. Seu elemento é Fogo e sua polaridade é Yang. O Saju-Link chama de \"Fogo Yang (丙)\" a pessoa cujo tronco do dia é 丙."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 丙 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 丙 lê o outro tronco, e, quando o outro tronco lê 丙, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Fogo Yang (丙) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Amparo (正印)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Companheiro (比肩)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Rival (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Riqueza estável (正財)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Desafiante (偏官)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Autoridade (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丙 como tronco do dia, a Riqueza estável é 辛 e a Autoridade é 癸. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 丙",
        "blocks": [
          {
            "p": "É aqui que 丙 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 丙 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 丙",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "médio (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Serpente",
                  "principal (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Cavalo",
                  "residual (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Troncos celestes",
    "title": "Fogo Yin (丁) — Fogo, Yin",
    "summary": "O elemento e a polaridade do tronco celeste 丁, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Fogo Yin (丁) é o quarto dos dez troncos celestes",
        "blocks": [
          {
            "p": "丁 é o quarto dos dez troncos celestes. Seu elemento é Fogo e sua polaridade é Yin. O Saju-Link chama de \"Fogo Yin (丁)\" a pessoa cujo tronco do dia é 丁."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 丁 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 丁 lê o outro tronco, e, quando o outro tronco lê 丁, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Fogo Yin (丁) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Amparo (正印)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Rival (劫財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Expressão (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Riqueza estável (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Autoridade (正官)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丁 como tronco do dia, a Riqueza estável é 庚 e a Autoridade é 壬. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 丁",
        "blocks": [
          {
            "p": "É aqui que 丁 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 丁 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 丁",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "午",
                  "Cavalo",
                  "principal (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Ovelha",
                  "residual (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Cão",
                  "médio (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Troncos celestes",
    "title": "Terra Yang (戊) — Terra, Yang",
    "summary": "O elemento e a polaridade do tronco celeste 戊, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Terra Yang (戊) é o quinto dos dez troncos celestes",
        "blocks": [
          {
            "p": "戊 é o quinto dos dez troncos celestes. Seu elemento é Terra e sua polaridade é Yang. O Saju-Link chama de \"Terra Yang (戊)\" a pessoa cujo tronco do dia é 戊."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 戊 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 戊 lê o outro tronco, e, quando o outro tronco lê 戊, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Terra Yang (戊) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Desafiante (偏官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Autoridade (正官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Amparo (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Expressão (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Riqueza estável (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 戊 como tronco do dia, a Riqueza estável é 癸 e a Autoridade é 乙. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 戊",
        "blocks": [
          {
            "p": "É aqui que 戊 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 戊 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 戊",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "residual (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Dragão",
                  "principal (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Serpente",
                  "residual (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Macaco",
                  "residual (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Cão",
                  "principal (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Porco",
                  "residual (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Troncos celestes",
    "title": "Terra Yin (己) — Terra, Yin",
    "summary": "O elemento e a polaridade do tronco celeste 己, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Terra Yin (己) é o sexto dos dez troncos celestes",
        "blocks": [
          {
            "p": "己 é o sexto dos dez troncos celestes. Seu elemento é Terra e sua polaridade é Yin. O Saju-Link chama de \"Terra Yin (己)\" a pessoa cujo tronco do dia é 己."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 己 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 己 lê o outro tronco, e, quando o outro tronco lê 己, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Terra Yin (己) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Autoridade (正官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Desafiante (偏官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Amparo (正印)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Rival (劫財)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Companheiro (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Expressão (食神)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Riqueza estável (正財)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 己 como tronco do dia, a Riqueza estável é 壬 e a Autoridade é 甲. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 己",
        "blocks": [
          {
            "p": "É aqui que 己 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 己 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 己",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "丑",
                  "Boi",
                  "principal (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Cavalo",
                  "médio (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Ovelha",
                  "principal (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Troncos celestes",
    "title": "Metal Yang (庚) — Metal, Yang",
    "summary": "O elemento e a polaridade do tronco celeste 庚, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Metal Yang (庚) é o sétimo dos dez troncos celestes",
        "blocks": [
          {
            "p": "庚 é o sétimo dos dez troncos celestes. Seu elemento é Metal e sua polaridade é Yang. O Saju-Link chama de \"Metal Yang (庚)\" a pessoa cujo tronco do dia é 庚."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 庚 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 庚 lê o outro tronco, e, quando o outro tronco lê 庚, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Metal Yang (庚) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Desafiante (偏官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Autoridade (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Amparo (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Companheiro (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Rival (劫財)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Expressão (食神)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 庚 como tronco do dia, a Riqueza estável é 乙 e a Autoridade é 丁. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 庚",
        "blocks": [
          {
            "p": "É aqui que 庚 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 庚 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 庚",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "巳",
                  "Serpente",
                  "médio (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Macaco",
                  "principal (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Galo",
                  "residual (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Troncos celestes",
    "title": "Metal Yin (辛) — Metal, Yin",
    "summary": "O elemento e a polaridade do tronco celeste 辛, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Metal Yin (辛) é o oitavo dos dez troncos celestes",
        "blocks": [
          {
            "p": "辛 é o oitavo dos dez troncos celestes. Seu elemento é Metal e sua polaridade é Yin. O Saju-Link chama de \"Metal Yin (辛)\" a pessoa cujo tronco do dia é 辛."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 辛 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 辛 lê o outro tronco, e, quando o outro tronco lê 辛, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Metal Yin (辛) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Riqueza estável (正財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Autoridade (正官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Desafiante (偏官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Amparo (正印)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Companheiro (比肩)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 辛 como tronco do dia, a Riqueza estável é 甲 e a Autoridade é 丙. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 辛",
        "blocks": [
          {
            "p": "É aqui que 辛 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 辛 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 辛",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "丑",
                  "Boi",
                  "médio (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Galo",
                  "principal (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Cão",
                  "residual (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Água Yang (壬)](/guide/stem-im) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Troncos celestes",
    "title": "Água Yang (壬) — Água, Yang",
    "summary": "O elemento e a polaridade do tronco celeste 壬, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Água Yang (壬) é o nono dos dez troncos celestes",
        "blocks": [
          {
            "p": "壬 é o nono dos dez troncos celestes. Seu elemento é Água e sua polaridade é Yang. O Saju-Link chama de \"Água Yang (壬)\" a pessoa cujo tronco do dia é 壬."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 壬 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 壬 lê o outro tronco, e, quando o outro tronco lê 壬, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Água Yang (壬) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Expressão (食神)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Riqueza estável (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Desafiante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Autoridade (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Amparo (正印)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Companheiro (比肩)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 壬 como tronco do dia, a Riqueza estável é 丁 e a Autoridade é 己. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 壬",
        "blocks": [
          {
            "p": "É aqui que 壬 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 壬 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 壬",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "子",
                  "Rato",
                  "residual (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Macaco",
                  "médio (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Porco",
                  "principal (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Troncos celestes",
    "title": "Água Yin (癸) — Água, Yin",
    "summary": "O elemento e a polaridade do tronco celeste 癸, como ele lê os outros nove troncos (os Dez Deuses) e quais ramos terrestres o contêm — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Água Yin (癸) é o décimo dos dez troncos celestes",
        "blocks": [
          {
            "p": "癸 é o décimo dos dez troncos celestes. Seu elemento é Água e sua polaridade é Yin. O Saju-Link chama de \"Água Yin (癸)\" a pessoa cujo tronco do dia é 癸."
          },
          {
            "p": "A frase que a tela de resultado mostra para este tronco do dia é: \"Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras.\" Esta frase não tem relação com a tabela nem com as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Como ele lê os outros troncos (os Dez Deuses)",
        "blocks": [
          {
            "p": "Com 癸 como tronco do dia, cada um dos dez troncos é lido da seguinte forma. A leitura tem uma direção: é assim que 癸 lê o outro tronco, e, quando o outro tronco lê 癸, pode surgir um nome diferente."
          },
          {
            "table": {
              "caption": "Os Dez Deuses com Água Yin (癸) como tronco do dia",
              "head": [
                "Outro tronco",
                "Elemento e polaridade",
                "Dez Deuses"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "Expressão (食神)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "Autoridade (正官)"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "Desafiante (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Amparo (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "Rival (劫財)"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os troncos lidos como a posição do cônjuge",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 癸 como tronco do dia, a Riqueza estável é 丙 e a Autoridade é 戊. Se você não informar o gênero, esta posição não é lida."
          }
        ]
      },
      {
        "title": "Os ramos que contêm 癸",
        "blocks": [
          {
            "p": "É aqui que 癸 fica oculto dentro dos ramos terrestres (os troncos ocultos). A proporção é a fração dos trinta dias desse ramo que 癸 ocupa."
          },
          {
            "table": {
              "caption": "Os ramos que contêm 癸",
              "head": [
                "Ramo",
                "Animal",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "子",
                  "Rato",
                  "principal (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Boi",
                  "residual (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Dragão",
                  "médio (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um tronco não define uma pessoa. Um saju é lido a partir de como seus oito caracteres se relacionam.",
              "Os Dez Deuses são um julgamento feito a partir do tronco do dia. Os mesmos dois caracteres recebem um nome diferente conforme qual deles é o tronco do dia."
            ]
          },
          {
            "p": "Os Dez Deuses completos estão no [guia dos Dez Deuses](/guide/ten-gods), e a força dos elementos e o Signo do Mês estão no [guia dos cinco elementos](/guide/five-elements). Outros troncos: [Madeira Yang (甲)](/guide/stem-gap) · [Madeira Yin (乙)](/guide/stem-eul) · [Fogo Yang (丙)](/guide/stem-byeong) · [Fogo Yin (丁)](/guide/stem-jeong) · [Terra Yang (戊)](/guide/stem-mu) · [Terra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Água Yang (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Ramos terrestres",
    "title": "子 — o ramo do Rato",
    "summary": "Os troncos contidos no ramo terrestre 子 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "子 é o primeiro dos doze ramos terrestres",
        "blocks": [
          {
            "p": "子 é o primeiro dos doze ramos terrestres e pertence ao Rato. Quando o ramo do mês de nascimento é 子, a estação é o inverno e o elemento dono da estação é Água."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 子, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 子",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "residual (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "principal (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 子",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 子, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 子 (inverno)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fogo",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terra",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Água",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 子 tornam-se Deuses diferentes conforme o tronco do dia. Quando 子 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 子 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Água Yang (壬) — residual (餘氣)",
                "Água Yin (癸) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Apoio não convencional (偏印)",
                  "Amparo (正印)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Amparo (正印)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Desafiante (偏官)",
                  "Autoridade (正官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Autoridade (正官)",
                  "Desafiante (偏官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Fortuna imprevista (偏財)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Terra Yin (己)",
                  "Riqueza estável (正財)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Expressão (食神)",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Perturbador (傷官)",
                  "Expressão (食神)"
                ],
                [
                  "Água Yang (壬)",
                  "Companheiro (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Água Yin (癸)",
                  "Rival (劫財)",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Ramos terrestres",
    "title": "丑 — o ramo do Boi",
    "summary": "Os troncos contidos no ramo terrestre 丑 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丑 é o segundo dos doze ramos terrestres",
        "blocks": [
          {
            "p": "丑 é o segundo dos doze ramos terrestres e pertence ao Boi. Quando o ramo do mês de nascimento é 丑, a estação é o inverno e o elemento dono da estação é Água. É um mês de transição (辰未戌丑), então a Terra também é considerada no estado Wang."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 丑, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 丑",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "residual (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "médio (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "principal (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 丑",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 丑, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 丑 (inverno (mês de transição))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fogo",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Água",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 丑 tornam-se Deuses diferentes conforme o tronco do dia. Quando 丑 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 丑 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Água Yin (癸) — residual (餘氣)",
                "Metal Yin (辛) — médio (中氣)",
                "Terra Yin (己) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Amparo (正印)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yang (戊)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Terra Yin (己)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)",
                  "Companheiro (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Amparo (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Expressão (食神)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Água Yang (壬)",
                  "Rival (劫財)",
                  "Amparo (正印)",
                  "Autoridade (正官)"
                ],
                [
                  "Água Yin (癸)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Ramos terrestres",
    "title": "寅 — o ramo do Tigre",
    "summary": "Os troncos contidos no ramo terrestre 寅 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "寅 é o terceiro dos doze ramos terrestres",
        "blocks": [
          {
            "p": "寅 é o terceiro dos doze ramos terrestres e pertence ao Tigre. Quando o ramo do mês de nascimento é 寅, a estação é a primavera e o elemento dono da estação é Madeira."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 寅, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 寅",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residual (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "médio (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "principal (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 寅",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 寅, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 寅 (primavera)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fogo",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terra",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Água",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 寅 tornam-se Deuses diferentes conforme o tronco do dia. Quando 寅 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 寅 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Terra Yang (戊) — residual (餘氣)",
                "Fogo Yang (丙) — médio (中氣)",
                "Madeira Yang (甲) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)",
                  "Companheiro (比肩)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Expressão (食神)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Amparo (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "Rival (劫財)",
                  "Amparo (正印)",
                  "Autoridade (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Amparo (正印)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Água Yang (壬)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)"
                ],
                [
                  "Água Yin (癸)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Ramos terrestres",
    "title": "卯 — o ramo do Coelho",
    "summary": "Os troncos contidos no ramo terrestre 卯 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "卯 é o quarto dos doze ramos terrestres",
        "blocks": [
          {
            "p": "卯 é o quarto dos doze ramos terrestres e pertence ao Coelho. Quando o ramo do mês de nascimento é 卯, a estação é a primavera e o elemento dono da estação é Madeira."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 卯, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 卯",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "residual (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "principal (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 卯",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 卯, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 卯 (primavera)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fogo",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terra",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Água",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 卯 tornam-se Deuses diferentes conforme o tronco do dia. Quando 卯 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 卯 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Madeira Yang (甲) — residual (餘氣)",
                "Madeira Yin (乙) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Companheiro (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Rival (劫財)",
                  "Companheiro (比肩)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Apoio não convencional (偏印)",
                  "Amparo (正印)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Amparo (正印)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Terra Yang (戊)",
                  "Desafiante (偏官)",
                  "Autoridade (正官)"
                ],
                [
                  "Terra Yin (己)",
                  "Autoridade (正官)",
                  "Desafiante (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Fortuna imprevista (偏財)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Riqueza estável (正財)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Água Yang (壬)",
                  "Expressão (食神)",
                  "Perturbador (傷官)"
                ],
                [
                  "Água Yin (癸)",
                  "Perturbador (傷官)",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Ramos terrestres",
    "title": "辰 — o ramo do Dragão",
    "summary": "Os troncos contidos no ramo terrestre 辰 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "辰 é o quinto dos doze ramos terrestres",
        "blocks": [
          {
            "p": "辰 é o quinto dos doze ramos terrestres e pertence ao Dragão. Quando o ramo do mês de nascimento é 辰, a estação é a primavera e o elemento dono da estação é Madeira. É um mês de transição (辰未戌丑), então a Terra também é considerada no estado Wang."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 辰, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 辰",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "residual (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin",
                  "médio (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "principal (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 辰",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 辰, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 辰 (primavera (mês de transição))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fogo",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Água",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 辰 tornam-se Deuses diferentes conforme o tronco do dia. Quando 辰 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 辰 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Madeira Yin (乙) — residual (餘氣)",
                "Água Yin (癸) — médio (中氣)",
                "Terra Yang (戊) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Rival (劫財)",
                  "Amparo (正印)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Amparo (正印)",
                  "Autoridade (正官)",
                  "Expressão (食神)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)",
                  "Perturbador (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)",
                  "Amparo (正印)"
                ],
                [
                  "Água Yang (壬)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Desafiante (偏官)"
                ],
                [
                  "Água Yin (癸)",
                  "Expressão (食神)",
                  "Companheiro (比肩)",
                  "Autoridade (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Ramos terrestres",
    "title": "巳 — o ramo da Serpente",
    "summary": "Os troncos contidos no ramo terrestre 巳 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "巳 é o sexto dos doze ramos terrestres",
        "blocks": [
          {
            "p": "巳 é o sexto dos doze ramos terrestres e pertence à Serpente. Quando o ramo do mês de nascimento é 巳, a estação é o verão e o elemento dono da estação é Fogo."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 巳, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 巳",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residual (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "médio (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "principal (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 巳",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 巳, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 巳 (verão)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fogo",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terra",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Água",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 巳 tornam-se Deuses diferentes conforme o tronco do dia. Quando 巳 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 巳 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Terra Yang (戊) — residual (餘氣)",
                "Metal Yang (庚) — médio (中氣)",
                "Fogo Yang (丙) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Fortuna imprevista (偏財)",
                  "Desafiante (偏官)",
                  "Expressão (食神)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Riqueza estável (正財)",
                  "Autoridade (正官)",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Expressão (食神)",
                  "Fortuna imprevista (偏財)",
                  "Companheiro (比肩)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Perturbador (傷官)",
                  "Riqueza estável (正財)",
                  "Rival (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Companheiro (比肩)",
                  "Expressão (食神)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "Rival (劫財)",
                  "Perturbador (傷官)",
                  "Amparo (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoio não convencional (偏印)",
                  "Companheiro (比肩)",
                  "Desafiante (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Amparo (正印)",
                  "Rival (劫財)",
                  "Autoridade (正官)"
                ],
                [
                  "Água Yang (壬)",
                  "Desafiante (偏官)",
                  "Apoio não convencional (偏印)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Água Yin (癸)",
                  "Autoridade (正官)",
                  "Amparo (正印)",
                  "Riqueza estável (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Ramos terrestres",
    "title": "午 — o ramo do Cavalo",
    "summary": "Os troncos contidos no ramo terrestre 午 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "午 é o sétimo dos doze ramos terrestres",
        "blocks": [
          {
            "p": "午 é o sétimo dos doze ramos terrestres e pertence ao Cavalo. Quando o ramo do mês de nascimento é 午, a estação é o verão e o elemento dono da estação é Fogo."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 午, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 午",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang",
                  "residual (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "médio (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "principal (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 午",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 午, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 午 (verão)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fogo",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terra",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Água",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 午 tornam-se Deuses diferentes conforme o tronco do dia. Quando 午 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 午 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Fogo Yang (丙) — residual (餘氣)",
                "Terra Yin (己) — médio (中氣)",
                "Fogo Yin (丁) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Expressão (食神)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Perturbador (傷官)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Companheiro (比肩)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Rival (劫財)",
                  "Expressão (食神)",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yang (戊)",
                  "Apoio não convencional (偏印)",
                  "Rival (劫財)",
                  "Amparo (正印)"
                ],
                [
                  "Terra Yin (己)",
                  "Amparo (正印)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Desafiante (偏官)",
                  "Amparo (正印)",
                  "Autoridade (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Autoridade (正官)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)"
                ],
                [
                  "Água Yang (壬)",
                  "Fortuna imprevista (偏財)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Água Yin (癸)",
                  "Riqueza estável (正財)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Ramos terrestres",
    "title": "未 — o ramo da Ovelha",
    "summary": "Os troncos contidos no ramo terrestre 未 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "未 é o oitavo dos doze ramos terrestres",
        "blocks": [
          {
            "p": "未 é o oitavo dos doze ramos terrestres e pertence à Ovelha. Quando o ramo do mês de nascimento é 未, a estação é o verão e o elemento dono da estação é Fogo. É um mês de transição (辰未戌丑), então a Terra também é considerada no estado Wang."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 未, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 未",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "residual (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin",
                  "médio (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin",
                  "principal (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 未",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 未, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 未 (verão (mês de transição))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fogo",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Água",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 未 tornam-se Deuses diferentes conforme o tronco do dia. Quando 未 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 未 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Fogo Yin (丁) — residual (餘氣)",
                "Madeira Yin (乙) — médio (中氣)",
                "Terra Yin (己) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Expressão (食神)",
                  "Companheiro (比肩)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Rival (劫財)",
                  "Amparo (正印)",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yang (戊)",
                  "Amparo (正印)",
                  "Autoridade (正官)",
                  "Rival (劫財)"
                ],
                [
                  "Terra Yin (己)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)",
                  "Companheiro (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)",
                  "Amparo (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Água Yang (壬)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)",
                  "Autoridade (正官)"
                ],
                [
                  "Água Yin (癸)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Ramos terrestres",
    "title": "申 — o ramo do Macaco",
    "summary": "Os troncos contidos no ramo terrestre 申 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "申 é o nono dos doze ramos terrestres",
        "blocks": [
          {
            "p": "申 é o nono dos doze ramos terrestres e pertence ao Macaco. Quando o ramo do mês de nascimento é 申, a estação é o outono e o elemento dono da estação é Metal."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 申, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 申",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residual (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "médio (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "principal (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 申",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 申, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 申 (outono)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fogo",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terra",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Água",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 申 tornam-se Deuses diferentes conforme o tronco do dia. Quando 申 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 申 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Terra Yang (戊) — residual (餘氣)",
                "Água Yang (壬) — médio (中氣)",
                "Metal Yang (庚) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Fortuna imprevista (偏財)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Riqueza estável (正財)",
                  "Amparo (正印)",
                  "Autoridade (正官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Expressão (食神)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Perturbador (傷官)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Companheiro (比肩)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "Rival (劫財)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoio não convencional (偏印)",
                  "Expressão (食神)",
                  "Companheiro (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "Amparo (正印)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Água Yang (壬)",
                  "Desafiante (偏官)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Água Yin (癸)",
                  "Autoridade (正官)",
                  "Rival (劫財)",
                  "Amparo (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Ramos terrestres",
    "title": "酉 — o ramo do Galo",
    "summary": "Os troncos contidos no ramo terrestre 酉 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "酉 é o décimo dos doze ramos terrestres",
        "blocks": [
          {
            "p": "酉 é o décimo dos doze ramos terrestres e pertence ao Galo. Quando o ramo do mês de nascimento é 酉, a estação é o outono e o elemento dono da estação é Metal."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 酉, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 酉",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "residual (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "principal (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 酉",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 酉, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 酉 (outono)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fogo",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terra",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Água",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 酉 tornam-se Deuses diferentes conforme o tronco do dia. Quando 酉 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 酉 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Metal Yang (庚) — residual (餘氣)",
                "Metal Yin (辛) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Desafiante (偏官)",
                  "Autoridade (正官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Autoridade (正官)",
                  "Desafiante (偏官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fortuna imprevista (偏財)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Riqueza estável (正財)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Terra Yang (戊)",
                  "Expressão (食神)",
                  "Perturbador (傷官)"
                ],
                [
                  "Terra Yin (己)",
                  "Perturbador (傷官)",
                  "Expressão (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "Companheiro (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Rival (劫財)",
                  "Companheiro (比肩)"
                ],
                [
                  "Água Yang (壬)",
                  "Apoio não convencional (偏印)",
                  "Amparo (正印)"
                ],
                [
                  "Água Yin (癸)",
                  "Amparo (正印)",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [戌 (Cão)](/guide/branch-sul) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Ramos terrestres",
    "title": "戌 — o ramo do Cão",
    "summary": "Os troncos contidos no ramo terrestre 戌 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "戌 é o décimo primeiro dos doze ramos terrestres",
        "blocks": [
          {
            "p": "戌 é o décimo primeiro dos doze ramos terrestres e pertence ao Cão. Quando o ramo do mês de nascimento é 戌, a estação é o outono e o elemento dono da estação é Metal. É um mês de transição (辰未戌丑), então a Terra também é considerada no estado Wang."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 戌, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 戌",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "residual (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin",
                  "médio (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "principal (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 戌",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 戌, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 戌 (outono (mês de transição))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fogo",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Terra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Água",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 戌 tornam-se Deuses diferentes conforme o tronco do dia. Quando 戌 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 戌 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Metal Yin (辛) — residual (餘氣)",
                "Fogo Yin (丁) — médio (中氣)",
                "Terra Yang (戊) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Autoridade (正官)",
                  "Perturbador (傷官)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Desafiante (偏官)",
                  "Expressão (食神)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Riqueza estável (正財)",
                  "Rival (劫財)",
                  "Expressão (食神)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fortuna imprevista (偏財)",
                  "Companheiro (比肩)",
                  "Perturbador (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Perturbador (傷官)",
                  "Amparo (正印)",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "Expressão (食神)",
                  "Apoio não convencional (偏印)",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Rival (劫財)",
                  "Autoridade (正官)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Companheiro (比肩)",
                  "Desafiante (偏官)",
                  "Amparo (正印)"
                ],
                [
                  "Água Yang (壬)",
                  "Amparo (正印)",
                  "Riqueza estável (正財)",
                  "Desafiante (偏官)"
                ],
                [
                  "Água Yin (癸)",
                  "Apoio não convencional (偏印)",
                  "Fortuna imprevista (偏財)",
                  "Autoridade (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [亥 (Porco)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Ramos terrestres",
    "title": "亥 — o ramo do Porco",
    "summary": "Os troncos contidos no ramo terrestre 亥 (os troncos ocultos), a força dos cinco elementos quando ele é o ramo do mês e os Dez Deuses lidos para cada tronco do dia — apresentados exatamente como constam nas regras de cálculo do Saju-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "亥 é o décimo segundo dos doze ramos terrestres",
        "blocks": [
          {
            "p": "亥 é o décimo segundo dos doze ramos terrestres e pertence ao Porco. Quando o ramo do mês de nascimento é 亥, a estação é o inverno e o elemento dono da estação é Água."
          },
          {
            "p": "Quando o ramo do dia de nascimento é 亥, este caractere é a posição do cônjuge. Abaixo você vê quais troncos este ramo contém e o que eles são para o tronco do dia."
          }
        ]
      },
      {
        "title": "Os troncos que este ramo contém (troncos ocultos)",
        "blocks": [
          {
            "p": "Um ramo é um caractere visível, mas contém troncos em seu interior. A proporção mostra como os trinta dias do ramo se dividem entre os troncos, e o tronco principal é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos de 亥",
              "head": [
                "Tronco",
                "Elemento e polaridade",
                "Posição",
                "Proporção"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "Terra Yang",
                  "residual (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang",
                  "médio (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang",
                  "principal (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A força dos cinco elementos quando o ramo do mês é 亥",
        "blocks": [
          {
            "p": "Quando o ramo do mês de nascimento é 亥, cada elemento recebe um estado (Wang, Sang, Hyu, Su, Sa), e esse estado se torna o multiplicador aplicado à sua força."
          },
          {
            "table": {
              "caption": "Os estados dos elementos para o ramo do mês 亥 (inverno)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madeira",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fogo",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Terra",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Água",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Os Dez Deuses por tronco do dia",
        "blocks": [
          {
            "p": "Os mesmos troncos ocultos de 亥 tornam-se Deuses diferentes conforme o tronco do dia. Quando 亥 é o ramo do dia, esta tabela é a leitura da posição do cônjuge."
          },
          {
            "table": {
              "caption": "O que os troncos ocultos de 亥 são para cada tronco do dia",
              "head": [
                "Tronco do dia",
                "Terra Yang (戊) — residual (餘氣)",
                "Madeira Yang (甲) — médio (中氣)",
                "Água Yang (壬) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Fortuna imprevista (偏財)",
                  "Companheiro (比肩)",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Madeira Yin (乙)",
                  "Riqueza estável (正財)",
                  "Rival (劫財)",
                  "Amparo (正印)"
                ],
                [
                  "Fogo Yang (丙)",
                  "Expressão (食神)",
                  "Apoio não convencional (偏印)",
                  "Desafiante (偏官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "Perturbador (傷官)",
                  "Amparo (正印)",
                  "Autoridade (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "Companheiro (比肩)",
                  "Desafiante (偏官)",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "Rival (劫財)",
                  "Autoridade (正官)",
                  "Riqueza estável (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoio não convencional (偏印)",
                  "Fortuna imprevista (偏財)",
                  "Expressão (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "Amparo (正印)",
                  "Riqueza estável (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Água Yang (壬)",
                  "Desafiante (偏官)",
                  "Expressão (食神)",
                  "Companheiro (比肩)"
                ],
                [
                  "Água Yin (癸)",
                  "Autoridade (正官)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um ramo não define uma pessoa. O mesmo ramo é lido de forma diferente conforme o tronco do dia e o ramo do mês.",
              "As relações entre ramos, como harmonia, choque e discórdia, não são tratadas aqui."
            ]
          },
          {
            "p": "As relações entre ramos estão na [tabela dos doze ramos](/guide/branches), e seu significado como animal do zodíaco está em [onde o zodíaco se encontra num saju](/guide/zodiac). Outros ramos: [子 (Rato)](/guide/branch-ja) · [丑 (Boi)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Coelho)](/guide/branch-myo) · [辰 (Dragão)](/guide/branch-jin) · [巳 (Serpente)](/guide/branch-sa) · [午 (Cavalo)](/guide/branch-o) · [未 (Ovelha)](/guide/branch-mi) · [申 (Macaco)](/guide/branch-sin) · [酉 (Galo)](/guide/branch-yu) · [戌 (Cão)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 甲子",
    "summary": "Como o Saju-Link lê o pilar do dia 甲子 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "甲子 é o pilar do dia número 1 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 甲子, o tronco do dia é 甲 (Madeira, Yang) e o ramo do dia é 子 (Rato). No ciclo sexagenário, é a combinação número 1."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yang (甲)\" a pessoa cujo tronco do dia é 甲, e a frase que a tela de resultado mostra é: \"Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 子 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 甲, os troncos que 子 contém são os seguintes. O tronco principal (癸) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 甲子",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 甲"
              ],
              "rows": [
                [
                  "Água Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Água Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Amparo (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 甲 como tronco do dia, a Riqueza estável é 己 e a Autoridade é 辛."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 己. 己 não está contido em 子."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 辛. 辛 não está contido em 子."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [癸亥](/guide/pillar-gye-hae) e o seguinte é [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "É formado por [Madeira Yang (甲)](/guide/stem-gap) e [子 (Rato)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 乙丑",
    "summary": "Como o Saju-Link lê o pilar do dia 乙丑 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "乙丑 é o pilar do dia número 2 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 乙丑, o tronco do dia é 乙 (Madeira, Yin) e o ramo do dia é 丑 (Boi). No ciclo sexagenário, é a combinação número 2."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yin (乙)\" a pessoa cujo tronco do dia é 乙, e a frase que a tela de resultado mostra é: \"Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 丑 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 乙, os troncos que 丑 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 乙丑",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 乙"
              ],
              "rows": [
                [
                  "Água Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "médio (中氣)",
                  "{hidChukJung}",
                  "Desafiante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 乙 como tronco do dia, a Riqueza estável é 戊 e a Autoridade é 庚."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 戊. 戊 não está contido em 丑."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 庚. 庚 não está contido em 丑."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [甲子](/guide/pillar-gap-ja) e o seguinte é [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "É formado por [Madeira Yin (乙)](/guide/stem-eul) e [丑 (Boi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丙寅",
    "summary": "Como o Saju-Link lê o pilar do dia 丙寅 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丙寅 é o pilar do dia número 3 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丙寅, o tronco do dia é 丙 (Fogo, Yang) e o ramo do dia é 寅 (Tigre). No ciclo sexagenário, é a combinação número 3."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yang (丙)\" a pessoa cujo tronco do dia é 丙, e a frase que a tela de resultado mostra é: \"O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 寅 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丙, os troncos que 寅 contém são os seguintes. O tronco principal (甲) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丙寅",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Expressão (食神)"
                ],
                [
                  "Fogo Yang (丙)",
                  "médio (中氣)",
                  "{hidInJung}",
                  "Companheiro (比肩)"
                ],
                [
                  "Madeira Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丙 como tronco do dia, a Riqueza estável é 辛 e a Autoridade é 癸."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 辛. 辛 não está contido em 寅."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 癸. 癸 não está contido em 寅."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [乙丑](/guide/pillar-eul-chuk) e o seguinte é [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "É formado por [Fogo Yang (丙)](/guide/stem-byeong) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丁卯",
    "summary": "Como o Saju-Link lê o pilar do dia 丁卯 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丁卯 é o pilar do dia número 4 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丁卯, o tronco do dia é 丁 (Fogo, Yin) e o ramo do dia é 卯 (Coelho). No ciclo sexagenário, é a combinação número 4."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yin (丁)\" a pessoa cujo tronco do dia é 丁, e a frase que a tela de resultado mostra é: \"A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 卯 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丁, os troncos que 卯 contém são os seguintes. O tronco principal (乙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丁卯",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丁"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Amparo (正印)"
                ],
                [
                  "Madeira Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丁 como tronco do dia, a Riqueza estável é 庚 e a Autoridade é 壬."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 庚. 庚 não está contido em 卯."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 壬. 壬 não está contido em 卯."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丙寅](/guide/pillar-byeong-in) e o seguinte é [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "É formado por [Fogo Yin (丁)](/guide/stem-jeong) e [卯 (Coelho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 戊辰",
    "summary": "Como o Saju-Link lê o pilar do dia 戊辰 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "戊辰 é o pilar do dia número 5 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 戊辰, o tronco do dia é 戊 (Terra, Yang) e o ramo do dia é 辰 (Dragão). No ciclo sexagenário, é a combinação número 5."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yang (戊)\" a pessoa cujo tronco do dia é 戊, e a frase que a tela de resultado mostra é: \"Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 辰 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 戊, os troncos que 辰 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 戊辰",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 戊"
              ],
              "rows": [
                [
                  "Madeira Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Autoridade (正官)"
                ],
                [
                  "Água Yin (癸)",
                  "médio (中氣)",
                  "{hidJinJung}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 戊 como tronco do dia, a Riqueza estável é 癸 e a Autoridade é 乙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 癸. 癸 está contido em 辰 (médio (中氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 乙. 乙 está contido em 辰 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丁卯](/guide/pillar-jeong-myo) e o seguinte é [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "É formado por [Terra Yang (戊)](/guide/stem-mu) e [辰 (Dragão)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 己巳",
    "summary": "Como o Saju-Link lê o pilar do dia 己巳 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "己巳 é o pilar do dia número 6 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 己巳, o tronco do dia é 己 (Terra, Yin) e o ramo do dia é 巳 (Serpente). No ciclo sexagenário, é a combinação número 6."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yin (己)\" a pessoa cujo tronco do dia é 己, e a frase que a tela de resultado mostra é: \"Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 巳 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 己, os troncos que 巳 contém são os seguintes. O tronco principal (丙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 己巳",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 己"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "médio (中氣)",
                  "{hidSaJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Amparo (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 己 como tronco do dia, a Riqueza estável é 壬 e a Autoridade é 甲."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 壬. 壬 não está contido em 巳."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 甲. 甲 não está contido em 巳."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [戊辰](/guide/pillar-mu-jin) e o seguinte é [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "É formado por [Terra Yin (己)](/guide/stem-gi) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 庚午",
    "summary": "Como o Saju-Link lê o pilar do dia 庚午 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "庚午 é o pilar do dia número 7 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 庚午, o tronco do dia é 庚 (Metal, Yang) e o ramo do dia é 午 (Cavalo). No ciclo sexagenário, é a combinação número 7."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yang (庚)\" a pessoa cujo tronco do dia é 庚, e a frase que a tela de resultado mostra é: \"Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 午 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 庚, os troncos que 午 contém são os seguintes. O tronco principal (丁) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 庚午",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 庚"
              ],
              "rows": [
                [
                  "Fogo Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Desafiante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "médio (中氣)",
                  "{hidOJung}",
                  "Amparo (正印)"
                ],
                [
                  "Fogo Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Autoridade (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 庚 como tronco do dia, a Riqueza estável é 乙 e a Autoridade é 丁."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 乙. 乙 não está contido em 午."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丁. 丁 está contido em 午 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [己巳](/guide/pillar-gi-sa) e o seguinte é [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "É formado por [Metal Yang (庚)](/guide/stem-gyeong) e [午 (Cavalo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 辛未",
    "summary": "Como o Saju-Link lê o pilar do dia 辛未 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "辛未 é o pilar do dia número 8 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 辛未, o tronco do dia é 辛 (Metal, Yin) e o ramo do dia é 未 (Ovelha). No ciclo sexagenário, é a combinação número 8."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yin (辛)\" a pessoa cujo tronco do dia é 辛, e a frase que a tela de resultado mostra é: \"Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 未 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 辛, os troncos que 未 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 辛未",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 辛"
              ],
              "rows": [
                [
                  "Fogo Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Desafiante (偏官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "médio (中氣)",
                  "{hidMiJung}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 辛 como tronco do dia, a Riqueza estável é 甲 e a Autoridade é 丙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 甲. 甲 não está contido em 未."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丙. 丙 não está contido em 未."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [庚午](/guide/pillar-gyeong-o) e o seguinte é [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "É formado por [Metal Yin (辛)](/guide/stem-sin) e [未 (Ovelha)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 壬申",
    "summary": "Como o Saju-Link lê o pilar do dia 壬申 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "壬申 é o pilar do dia número 9 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 壬申, o tronco do dia é 壬 (Água, Yang) e o ramo do dia é 申 (Macaco). No ciclo sexagenário, é a combinação número 9."
          },
          {
            "p": "O Saju-Link chama de \"Água Yang (壬)\" a pessoa cujo tronco do dia é 壬, e a frase que a tela de resultado mostra é: \"Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 申 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 壬, os troncos que 申 contém são os seguintes. O tronco principal (庚) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 壬申",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 壬"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Desafiante (偏官)"
                ],
                [
                  "Água Yang (壬)",
                  "médio (中氣)",
                  "{hidSinJung}",
                  "Companheiro (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 壬 como tronco do dia, a Riqueza estável é 丁 e a Autoridade é 己."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丁. 丁 não está contido em 申."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 己. 己 não está contido em 申."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [辛未](/guide/pillar-sin-mi) e o seguinte é [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "É formado por [Água Yang (壬)](/guide/stem-im) e [申 (Macaco)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 癸酉",
    "summary": "Como o Saju-Link lê o pilar do dia 癸酉 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "癸酉 é o pilar do dia número 10 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 癸酉, o tronco do dia é 癸 (Água, Yin) e o ramo do dia é 酉 (Galo). No ciclo sexagenário, é a combinação número 10."
          },
          {
            "p": "O Saju-Link chama de \"Água Yin (癸)\" a pessoa cujo tronco do dia é 癸, e a frase que a tela de resultado mostra é: \"Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 酉 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 癸, os troncos que 酉 contém são os seguintes. O tronco principal (辛) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 癸酉",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 癸"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Amparo (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 癸 como tronco do dia, a Riqueza estável é 丙 e a Autoridade é 戊."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丙. 丙 não está contido em 酉."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 戊. 戊 não está contido em 酉."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [壬申](/guide/pillar-im-sin) e o seguinte é [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "É formado por [Água Yin (癸)](/guide/stem-gye) e [酉 (Galo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 甲戌",
    "summary": "Como o Saju-Link lê o pilar do dia 甲戌 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "甲戌 é o pilar do dia número 11 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 甲戌, o tronco do dia é 甲 (Madeira, Yang) e o ramo do dia é 戌 (Cão). No ciclo sexagenário, é a combinação número 11."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yang (甲)\" a pessoa cujo tronco do dia é 甲, e a frase que a tela de resultado mostra é: \"Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 戌 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 甲, os troncos que 戌 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 甲戌",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 甲"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Autoridade (正官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "médio (中氣)",
                  "{hidSulJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 甲 como tronco do dia, a Riqueza estável é 己 e a Autoridade é 辛."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 己. 己 não está contido em 戌."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 辛. 辛 está contido em 戌 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [癸酉](/guide/pillar-gye-yu) e o seguinte é [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "É formado por [Madeira Yang (甲)](/guide/stem-gap) e [戌 (Cão)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 乙亥",
    "summary": "Como o Saju-Link lê o pilar do dia 乙亥 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "乙亥 é o pilar do dia número 12 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 乙亥, o tronco do dia é 乙 (Madeira, Yin) e o ramo do dia é 亥 (Porco). No ciclo sexagenário, é a combinação número 12."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yin (乙)\" a pessoa cujo tronco do dia é 乙, e a frase que a tela de resultado mostra é: \"Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 亥 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 乙, os troncos que 亥 contém são os seguintes. O tronco principal (壬) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 乙亥",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 乙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Madeira Yang (甲)",
                  "médio (中氣)",
                  "{hidHaeJung}",
                  "Rival (劫財)"
                ],
                [
                  "Água Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Amparo (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 乙 como tronco do dia, a Riqueza estável é 戊 e a Autoridade é 庚."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 戊. 戊 está contido em 亥 (residual (餘氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 庚. 庚 não está contido em 亥."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [甲戌](/guide/pillar-gap-sul) e o seguinte é [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "É formado por [Madeira Yin (乙)](/guide/stem-eul) e [亥 (Porco)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丙子",
    "summary": "Como o Saju-Link lê o pilar do dia 丙子 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丙子 é o pilar do dia número 13 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丙子, o tronco do dia é 丙 (Fogo, Yang) e o ramo do dia é 子 (Rato). No ciclo sexagenário, é a combinação número 13."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yang (丙)\" a pessoa cujo tronco do dia é 丙, e a frase que a tela de resultado mostra é: \"O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 子 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丙, os troncos que 子 contém são os seguintes. O tronco principal (癸) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丙子",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丙"
              ],
              "rows": [
                [
                  "Água Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Desafiante (偏官)"
                ],
                [
                  "Água Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Autoridade (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丙 como tronco do dia, a Riqueza estável é 辛 e a Autoridade é 癸."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 辛. 辛 não está contido em 子."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 癸. 癸 está contido em 子 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [乙亥](/guide/pillar-eul-hae) e o seguinte é [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "É formado por [Fogo Yang (丙)](/guide/stem-byeong) e [子 (Rato)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丁丑",
    "summary": "Como o Saju-Link lê o pilar do dia 丁丑 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丁丑 é o pilar do dia número 14 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丁丑, o tronco do dia é 丁 (Fogo, Yin) e o ramo do dia é 丑 (Boi). No ciclo sexagenário, é a combinação número 14."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yin (丁)\" a pessoa cujo tronco do dia é 丁, e a frase que a tela de resultado mostra é: \"A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 丑 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丁, os troncos que 丑 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丁丑",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丁"
              ],
              "rows": [
                [
                  "Água Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Desafiante (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "médio (中氣)",
                  "{hidChukJung}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丁 como tronco do dia, a Riqueza estável é 庚 e a Autoridade é 壬."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 庚. 庚 não está contido em 丑."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 壬. 壬 não está contido em 丑."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丙子](/guide/pillar-byeong-ja) e o seguinte é [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "É formado por [Fogo Yin (丁)](/guide/stem-jeong) e [丑 (Boi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 戊寅",
    "summary": "Como o Saju-Link lê o pilar do dia 戊寅 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "戊寅 é o pilar do dia número 15 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 戊寅, o tronco do dia é 戊 (Terra, Yang) e o ramo do dia é 寅 (Tigre). No ciclo sexagenário, é a combinação número 15."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yang (戊)\" a pessoa cujo tronco do dia é 戊, e a frase que a tela de resultado mostra é: \"Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 寅 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 戊, os troncos que 寅 contém são os seguintes. O tronco principal (甲) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 戊寅",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 戊"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Companheiro (比肩)"
                ],
                [
                  "Fogo Yang (丙)",
                  "médio (中氣)",
                  "{hidInJung}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Madeira Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 戊 como tronco do dia, a Riqueza estável é 癸 e a Autoridade é 乙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 癸. 癸 não está contido em 寅."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 乙. 乙 não está contido em 寅."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丁丑](/guide/pillar-jeong-chuk) e o seguinte é [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "É formado por [Terra Yang (戊)](/guide/stem-mu) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 己卯",
    "summary": "Como o Saju-Link lê o pilar do dia 己卯 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "己卯 é o pilar do dia número 16 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 己卯, o tronco do dia é 己 (Terra, Yin) e o ramo do dia é 卯 (Coelho). No ciclo sexagenário, é a combinação número 16."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yin (己)\" a pessoa cujo tronco do dia é 己, e a frase que a tela de resultado mostra é: \"Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 卯 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 己, os troncos que 卯 contém são os seguintes. O tronco principal (乙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 己卯",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 己"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Autoridade (正官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 己 como tronco do dia, a Riqueza estável é 壬 e a Autoridade é 甲."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 壬. 壬 não está contido em 卯."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 甲. 甲 está contido em 卯 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [戊寅](/guide/pillar-mu-in) e o seguinte é [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "É formado por [Terra Yin (己)](/guide/stem-gi) e [卯 (Coelho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 庚辰",
    "summary": "Como o Saju-Link lê o pilar do dia 庚辰 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "庚辰 é o pilar do dia número 17 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 庚辰, o tronco do dia é 庚 (Metal, Yang) e o ramo do dia é 辰 (Dragão). No ciclo sexagenário, é a combinação número 17."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yang (庚)\" a pessoa cujo tronco do dia é 庚, e a frase que a tela de resultado mostra é: \"Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 辰 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 庚, os troncos que 辰 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 庚辰",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 庚"
              ],
              "rows": [
                [
                  "Madeira Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Água Yin (癸)",
                  "médio (中氣)",
                  "{hidJinJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 庚 como tronco do dia, a Riqueza estável é 乙 e a Autoridade é 丁."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 乙. 乙 está contido em 辰 (residual (餘氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丁. 丁 não está contido em 辰."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [己卯](/guide/pillar-gi-myo) e o seguinte é [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "É formado por [Metal Yang (庚)](/guide/stem-gyeong) e [辰 (Dragão)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 辛巳",
    "summary": "Como o Saju-Link lê o pilar do dia 辛巳 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "辛巳 é o pilar do dia número 18 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 辛巳, o tronco do dia é 辛 (Metal, Yin) e o ramo do dia é 巳 (Serpente). No ciclo sexagenário, é a combinação número 18."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yin (辛)\" a pessoa cujo tronco do dia é 辛, e a frase que a tela de resultado mostra é: \"Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 巳 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 辛, os troncos que 巳 contém são os seguintes. O tronco principal (丙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 辛巳",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 辛"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Amparo (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "médio (中氣)",
                  "{hidSaJung}",
                  "Rival (劫財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Autoridade (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 辛 como tronco do dia, a Riqueza estável é 甲 e a Autoridade é 丙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 甲. 甲 não está contido em 巳."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丙. 丙 está contido em 巳 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [庚辰](/guide/pillar-gyeong-jin) e o seguinte é [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "É formado por [Metal Yin (辛)](/guide/stem-sin) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 壬午",
    "summary": "Como o Saju-Link lê o pilar do dia 壬午 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "壬午 é o pilar do dia número 19 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 壬午, o tronco do dia é 壬 (Água, Yang) e o ramo do dia é 午 (Cavalo). No ciclo sexagenário, é a combinação número 19."
          },
          {
            "p": "O Saju-Link chama de \"Água Yang (壬)\" a pessoa cujo tronco do dia é 壬, e a frase que a tela de resultado mostra é: \"Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 午 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 壬, os troncos que 午 contém são os seguintes. O tronco principal (丁) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 壬午",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 壬"
              ],
              "rows": [
                [
                  "Fogo Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Terra Yin (己)",
                  "médio (中氣)",
                  "{hidOJung}",
                  "Autoridade (正官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Riqueza estável (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 壬 como tronco do dia, a Riqueza estável é 丁 e a Autoridade é 己."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丁. 丁 está contido em 午 (principal (本氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 己. 己 está contido em 午 (médio (中氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [辛巳](/guide/pillar-sin-sa) e o seguinte é [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "É formado por [Água Yang (壬)](/guide/stem-im) e [午 (Cavalo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 癸未",
    "summary": "Como o Saju-Link lê o pilar do dia 癸未 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "癸未 é o pilar do dia número 20 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 癸未, o tronco do dia é 癸 (Água, Yin) e o ramo do dia é 未 (Ovelha). No ciclo sexagenário, é a combinação número 20."
          },
          {
            "p": "O Saju-Link chama de \"Água Yin (癸)\" a pessoa cujo tronco do dia é 癸, e a frase que a tela de resultado mostra é: \"Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 未 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 癸, os troncos que 未 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 癸未",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 癸"
              ],
              "rows": [
                [
                  "Fogo Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "médio (中氣)",
                  "{hidMiJung}",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 癸 como tronco do dia, a Riqueza estável é 丙 e a Autoridade é 戊."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丙. 丙 não está contido em 未."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 戊. 戊 não está contido em 未."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [壬午](/guide/pillar-im-o) e o seguinte é [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "É formado por [Água Yin (癸)](/guide/stem-gye) e [未 (Ovelha)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 甲申",
    "summary": "Como o Saju-Link lê o pilar do dia 甲申 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "甲申 é o pilar do dia número 21 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 甲申, o tronco do dia é 甲 (Madeira, Yang) e o ramo do dia é 申 (Macaco). No ciclo sexagenário, é a combinação número 21."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yang (甲)\" a pessoa cujo tronco do dia é 甲, e a frase que a tela de resultado mostra é: \"Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 申 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 甲, os troncos que 申 contém são os seguintes. O tronco principal (庚) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 甲申",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 甲"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Água Yang (壬)",
                  "médio (中氣)",
                  "{hidSinJung}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 甲 como tronco do dia, a Riqueza estável é 己 e a Autoridade é 辛."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 己. 己 não está contido em 申."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 辛. 辛 não está contido em 申."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [癸未](/guide/pillar-gye-mi) e o seguinte é [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "É formado por [Madeira Yang (甲)](/guide/stem-gap) e [申 (Macaco)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 乙酉",
    "summary": "Como o Saju-Link lê o pilar do dia 乙酉 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "乙酉 é o pilar do dia número 22 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 乙酉, o tronco do dia é 乙 (Madeira, Yin) e o ramo do dia é 酉 (Galo). No ciclo sexagenário, é a combinação número 22."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yin (乙)\" a pessoa cujo tronco do dia é 乙, e a frase que a tela de resultado mostra é: \"Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 酉 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 乙, os troncos que 酉 contém são os seguintes. O tronco principal (辛) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 乙酉",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 乙"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Autoridade (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 乙 como tronco do dia, a Riqueza estável é 戊 e a Autoridade é 庚."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 戊. 戊 não está contido em 酉."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 庚. 庚 está contido em 酉 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [甲申](/guide/pillar-gap-sin) e o seguinte é [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "É formado por [Madeira Yin (乙)](/guide/stem-eul) e [酉 (Galo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丙戌",
    "summary": "Como o Saju-Link lê o pilar do dia 丙戌 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丙戌 é o pilar do dia número 23 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丙戌, o tronco do dia é 丙 (Fogo, Yang) e o ramo do dia é 戌 (Cão). No ciclo sexagenário, é a combinação número 23."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yang (丙)\" a pessoa cujo tronco do dia é 丙, e a frase que a tela de resultado mostra é: \"O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 戌 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丙, os troncos que 戌 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丙戌",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丙"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "médio (中氣)",
                  "{hidSulJung}",
                  "Rival (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丙 como tronco do dia, a Riqueza estável é 辛 e a Autoridade é 癸."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 辛. 辛 está contido em 戌 (residual (餘氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 癸. 癸 não está contido em 戌."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [乙酉](/guide/pillar-eul-yu) e o seguinte é [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "É formado por [Fogo Yang (丙)](/guide/stem-byeong) e [戌 (Cão)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丁亥",
    "summary": "Como o Saju-Link lê o pilar do dia 丁亥 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丁亥 é o pilar do dia número 24 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丁亥, o tronco do dia é 丁 (Fogo, Yin) e o ramo do dia é 亥 (Porco). No ciclo sexagenário, é a combinação número 24."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yin (丁)\" a pessoa cujo tronco do dia é 丁, e a frase que a tela de resultado mostra é: \"A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 亥 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丁, os troncos que 亥 contém são os seguintes. O tronco principal (壬) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丁亥",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丁"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Madeira Yang (甲)",
                  "médio (中氣)",
                  "{hidHaeJung}",
                  "Amparo (正印)"
                ],
                [
                  "Água Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Autoridade (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丁 como tronco do dia, a Riqueza estável é 庚 e a Autoridade é 壬."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 庚. 庚 não está contido em 亥."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 壬. 壬 está contido em 亥 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丙戌](/guide/pillar-byeong-sul) e o seguinte é [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "É formado por [Fogo Yin (丁)](/guide/stem-jeong) e [亥 (Porco)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 戊子",
    "summary": "Como o Saju-Link lê o pilar do dia 戊子 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "戊子 é o pilar do dia número 25 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 戊子, o tronco do dia é 戊 (Terra, Yang) e o ramo do dia é 子 (Rato). No ciclo sexagenário, é a combinação número 25."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yang (戊)\" a pessoa cujo tronco do dia é 戊, e a frase que a tela de resultado mostra é: \"Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 子 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 戊, os troncos que 子 contém são os seguintes. O tronco principal (癸) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 戊子",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 戊"
              ],
              "rows": [
                [
                  "Água Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Água Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Riqueza estável (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 戊 como tronco do dia, a Riqueza estável é 癸 e a Autoridade é 乙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 癸. 癸 está contido em 子 (principal (本氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 乙. 乙 não está contido em 子."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丁亥](/guide/pillar-jeong-hae) e o seguinte é [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "É formado por [Terra Yang (戊)](/guide/stem-mu) e [子 (Rato)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 己丑",
    "summary": "Como o Saju-Link lê o pilar do dia 己丑 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "己丑 é o pilar do dia número 26 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 己丑, o tronco do dia é 己 (Terra, Yin) e o ramo do dia é 丑 (Boi). No ciclo sexagenário, é a combinação número 26."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yin (己)\" a pessoa cujo tronco do dia é 己, e a frase que a tela de resultado mostra é: \"Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 丑 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 己, os troncos que 丑 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 己丑",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 己"
              ],
              "rows": [
                [
                  "Água Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "médio (中氣)",
                  "{hidChukJung}",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 己 como tronco do dia, a Riqueza estável é 壬 e a Autoridade é 甲."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 壬. 壬 não está contido em 丑."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 甲. 甲 não está contido em 丑."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [戊子](/guide/pillar-mu-ja) e o seguinte é [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "É formado por [Terra Yin (己)](/guide/stem-gi) e [丑 (Boi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 庚寅",
    "summary": "Como o Saju-Link lê o pilar do dia 庚寅 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "庚寅 é o pilar do dia número 27 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 庚寅, o tronco do dia é 庚 (Metal, Yang) e o ramo do dia é 寅 (Tigre). No ciclo sexagenário, é a combinação número 27."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yang (庚)\" a pessoa cujo tronco do dia é 庚, e a frase que a tela de resultado mostra é: \"Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 寅 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 庚, os troncos que 寅 contém são os seguintes. O tronco principal (甲) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 庚寅",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 庚"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Fogo Yang (丙)",
                  "médio (中氣)",
                  "{hidInJung}",
                  "Desafiante (偏官)"
                ],
                [
                  "Madeira Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 庚 como tronco do dia, a Riqueza estável é 乙 e a Autoridade é 丁."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 乙. 乙 não está contido em 寅."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丁. 丁 não está contido em 寅."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [己丑](/guide/pillar-gi-chuk) e o seguinte é [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "É formado por [Metal Yang (庚)](/guide/stem-gyeong) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 辛卯",
    "summary": "Como o Saju-Link lê o pilar do dia 辛卯 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "辛卯 é o pilar do dia número 28 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 辛卯, o tronco do dia é 辛 (Metal, Yin) e o ramo do dia é 卯 (Coelho). No ciclo sexagenário, é a combinação número 28."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yin (辛)\" a pessoa cujo tronco do dia é 辛, e a frase que a tela de resultado mostra é: \"Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 卯 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 辛, os troncos que 卯 contém são os seguintes. O tronco principal (乙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 辛卯",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 辛"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 辛 como tronco do dia, a Riqueza estável é 甲 e a Autoridade é 丙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 甲. 甲 está contido em 卯 (residual (餘氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丙. 丙 não está contido em 卯."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [庚寅](/guide/pillar-gyeong-in) e o seguinte é [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "É formado por [Metal Yin (辛)](/guide/stem-sin) e [卯 (Coelho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 壬辰",
    "summary": "Como o Saju-Link lê o pilar do dia 壬辰 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "壬辰 é o pilar do dia número 29 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 壬辰, o tronco do dia é 壬 (Água, Yang) e o ramo do dia é 辰 (Dragão). No ciclo sexagenário, é a combinação número 29."
          },
          {
            "p": "O Saju-Link chama de \"Água Yang (壬)\" a pessoa cujo tronco do dia é 壬, e a frase que a tela de resultado mostra é: \"Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 辰 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 壬, os troncos que 辰 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 壬辰",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 壬"
              ],
              "rows": [
                [
                  "Madeira Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Água Yin (癸)",
                  "médio (中氣)",
                  "{hidJinJung}",
                  "Rival (劫財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 壬 como tronco do dia, a Riqueza estável é 丁 e a Autoridade é 己."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丁. 丁 não está contido em 辰."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 己. 己 não está contido em 辰."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [辛卯](/guide/pillar-sin-myo) e o seguinte é [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "É formado por [Água Yang (壬)](/guide/stem-im) e [辰 (Dragão)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 癸巳",
    "summary": "Como o Saju-Link lê o pilar do dia 癸巳 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "癸巳 é o pilar do dia número 30 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 癸巳, o tronco do dia é 癸 (Água, Yin) e o ramo do dia é 巳 (Serpente). No ciclo sexagenário, é a combinação número 30."
          },
          {
            "p": "O Saju-Link chama de \"Água Yin (癸)\" a pessoa cujo tronco do dia é 癸, e a frase que a tela de resultado mostra é: \"Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 巳 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 癸, os troncos que 巳 contém são os seguintes. O tronco principal (丙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 癸巳",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 癸"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Autoridade (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "médio (中氣)",
                  "{hidSaJung}",
                  "Amparo (正印)"
                ],
                [
                  "Fogo Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Riqueza estável (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 癸 como tronco do dia, a Riqueza estável é 丙 e a Autoridade é 戊."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丙. 丙 está contido em 巳 (principal (本氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 戊. 戊 está contido em 巳 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [壬辰](/guide/pillar-im-jin) e o seguinte é [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "É formado por [Água Yin (癸)](/guide/stem-gye) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 甲午",
    "summary": "Como o Saju-Link lê o pilar do dia 甲午 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "甲午 é o pilar do dia número 31 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 甲午, o tronco do dia é 甲 (Madeira, Yang) e o ramo do dia é 午 (Cavalo). No ciclo sexagenário, é a combinação número 31."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yang (甲)\" a pessoa cujo tronco do dia é 甲, e a frase que a tela de resultado mostra é: \"Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 午 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 甲, os troncos que 午 contém são os seguintes. O tronco principal (丁) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 甲午",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 甲"
              ],
              "rows": [
                [
                  "Fogo Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Expressão (食神)"
                ],
                [
                  "Terra Yin (己)",
                  "médio (中氣)",
                  "{hidOJung}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 甲 como tronco do dia, a Riqueza estável é 己 e a Autoridade é 辛."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 己. 己 está contido em 午 (médio (中氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 辛. 辛 não está contido em 午."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [癸巳](/guide/pillar-gye-sa) e o seguinte é [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "É formado por [Madeira Yang (甲)](/guide/stem-gap) e [午 (Cavalo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 乙未",
    "summary": "Como o Saju-Link lê o pilar do dia 乙未 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "乙未 é o pilar do dia número 32 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 乙未, o tronco do dia é 乙 (Madeira, Yin) e o ramo do dia é 未 (Ovelha). No ciclo sexagenário, é a combinação número 32."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yin (乙)\" a pessoa cujo tronco do dia é 乙, e a frase que a tela de resultado mostra é: \"Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 未 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 乙, os troncos que 未 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 乙未",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 乙"
              ],
              "rows": [
                [
                  "Fogo Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Expressão (食神)"
                ],
                [
                  "Madeira Yin (乙)",
                  "médio (中氣)",
                  "{hidMiJung}",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 乙 como tronco do dia, a Riqueza estável é 戊 e a Autoridade é 庚."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 戊. 戊 não está contido em 未."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 庚. 庚 não está contido em 未."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [甲午](/guide/pillar-gap-o) e o seguinte é [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "É formado por [Madeira Yin (乙)](/guide/stem-eul) e [未 (Ovelha)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丙申",
    "summary": "Como o Saju-Link lê o pilar do dia 丙申 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丙申 é o pilar do dia número 33 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丙申, o tronco do dia é 丙 (Fogo, Yang) e o ramo do dia é 申 (Macaco). No ciclo sexagenário, é a combinação número 33."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yang (丙)\" a pessoa cujo tronco do dia é 丙, e a frase que a tela de resultado mostra é: \"O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 申 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丙, os troncos que 申 contém são os seguintes. O tronco principal (庚) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丙申",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Expressão (食神)"
                ],
                [
                  "Água Yang (壬)",
                  "médio (中氣)",
                  "{hidSinJung}",
                  "Desafiante (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丙 como tronco do dia, a Riqueza estável é 辛 e a Autoridade é 癸."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 辛. 辛 não está contido em 申."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 癸. 癸 não está contido em 申."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [乙未](/guide/pillar-eul-mi) e o seguinte é [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "É formado por [Fogo Yang (丙)](/guide/stem-byeong) e [申 (Macaco)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丁酉",
    "summary": "Como o Saju-Link lê o pilar do dia 丁酉 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丁酉 é o pilar do dia número 34 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丁酉, o tronco do dia é 丁 (Fogo, Yin) e o ramo do dia é 酉 (Galo). No ciclo sexagenário, é a combinação número 34."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yin (丁)\" a pessoa cujo tronco do dia é 丁, e a frase que a tela de resultado mostra é: \"A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 酉 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丁, os troncos que 酉 contém são os seguintes. O tronco principal (辛) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丁酉",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丁"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丁 como tronco do dia, a Riqueza estável é 庚 e a Autoridade é 壬."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 庚. 庚 está contido em 酉 (residual (餘氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 壬. 壬 não está contido em 酉."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丙申](/guide/pillar-byeong-sin) e o seguinte é [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "É formado por [Fogo Yin (丁)](/guide/stem-jeong) e [酉 (Galo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 戊戌",
    "summary": "Como o Saju-Link lê o pilar do dia 戊戌 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "戊戌 é o pilar do dia número 35 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 戊戌, o tronco do dia é 戊 (Terra, Yang) e o ramo do dia é 戌 (Cão). No ciclo sexagenário, é a combinação número 35."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yang (戊)\" a pessoa cujo tronco do dia é 戊, e a frase que a tela de resultado mostra é: \"Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 戌 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 戊, os troncos que 戌 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 戊戌",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 戊"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "médio (中氣)",
                  "{hidSulJung}",
                  "Amparo (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 戊 como tronco do dia, a Riqueza estável é 癸 e a Autoridade é 乙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 癸. 癸 não está contido em 戌."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 乙. 乙 não está contido em 戌."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丁酉](/guide/pillar-jeong-yu) e o seguinte é [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "É formado por [Terra Yang (戊)](/guide/stem-mu) e [戌 (Cão)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 己亥",
    "summary": "Como o Saju-Link lê o pilar do dia 己亥 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "己亥 é o pilar do dia número 36 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 己亥, o tronco do dia é 己 (Terra, Yin) e o ramo do dia é 亥 (Porco). No ciclo sexagenário, é a combinação número 36."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yin (己)\" a pessoa cujo tronco do dia é 己, e a frase que a tela de resultado mostra é: \"Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 亥 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 己, os troncos que 亥 contém são os seguintes. O tronco principal (壬) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 己亥",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 己"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Madeira Yang (甲)",
                  "médio (中氣)",
                  "{hidHaeJung}",
                  "Autoridade (正官)"
                ],
                [
                  "Água Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Riqueza estável (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 己 como tronco do dia, a Riqueza estável é 壬 e a Autoridade é 甲."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 壬. 壬 está contido em 亥 (principal (本氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 甲. 甲 está contido em 亥 (médio (中氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [戊戌](/guide/pillar-mu-sul) e o seguinte é [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "É formado por [Terra Yin (己)](/guide/stem-gi) e [亥 (Porco)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 庚子",
    "summary": "Como o Saju-Link lê o pilar do dia 庚子 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "庚子 é o pilar do dia número 37 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 庚子, o tronco do dia é 庚 (Metal, Yang) e o ramo do dia é 子 (Rato). No ciclo sexagenário, é a combinação número 37."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yang (庚)\" a pessoa cujo tronco do dia é 庚, e a frase que a tela de resultado mostra é: \"Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 子 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 庚, os troncos que 子 contém são os seguintes. O tronco principal (癸) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 庚子",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 庚"
              ],
              "rows": [
                [
                  "Água Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Expressão (食神)"
                ],
                [
                  "Água Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 庚 como tronco do dia, a Riqueza estável é 乙 e a Autoridade é 丁."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 乙. 乙 não está contido em 子."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丁. 丁 não está contido em 子."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [己亥](/guide/pillar-gi-hae) e o seguinte é [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "É formado por [Metal Yang (庚)](/guide/stem-gyeong) e [子 (Rato)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 辛丑",
    "summary": "Como o Saju-Link lê o pilar do dia 辛丑 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "辛丑 é o pilar do dia número 38 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 辛丑, o tronco do dia é 辛 (Metal, Yin) e o ramo do dia é 丑 (Boi). No ciclo sexagenário, é a combinação número 38."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yin (辛)\" a pessoa cujo tronco do dia é 辛, e a frase que a tela de resultado mostra é: \"Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 丑 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 辛, os troncos que 丑 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 辛丑",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 辛"
              ],
              "rows": [
                [
                  "Água Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Expressão (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "médio (中氣)",
                  "{hidChukJung}",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 辛 como tronco do dia, a Riqueza estável é 甲 e a Autoridade é 丙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 甲. 甲 não está contido em 丑."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丙. 丙 não está contido em 丑."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [庚子](/guide/pillar-gyeong-ja) e o seguinte é [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "É formado por [Metal Yin (辛)](/guide/stem-sin) e [丑 (Boi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 壬寅",
    "summary": "Como o Saju-Link lê o pilar do dia 壬寅 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "壬寅 é o pilar do dia número 39 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 壬寅, o tronco do dia é 壬 (Água, Yang) e o ramo do dia é 寅 (Tigre). No ciclo sexagenário, é a combinação número 39."
          },
          {
            "p": "O Saju-Link chama de \"Água Yang (壬)\" a pessoa cujo tronco do dia é 壬, e a frase que a tela de resultado mostra é: \"Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 寅 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 壬, os troncos que 寅 contém são os seguintes. O tronco principal (甲) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 壬寅",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 壬"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Desafiante (偏官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "médio (中氣)",
                  "{hidInJung}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Madeira Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 壬 como tronco do dia, a Riqueza estável é 丁 e a Autoridade é 己."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丁. 丁 não está contido em 寅."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 己. 己 não está contido em 寅."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [辛丑](/guide/pillar-sin-chuk) e o seguinte é [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "É formado por [Água Yang (壬)](/guide/stem-im) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 癸卯",
    "summary": "Como o Saju-Link lê o pilar do dia 癸卯 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "癸卯 é o pilar do dia número 40 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 癸卯, o tronco do dia é 癸 (Água, Yin) e o ramo do dia é 卯 (Coelho). No ciclo sexagenário, é a combinação número 40."
          },
          {
            "p": "O Saju-Link chama de \"Água Yin (癸)\" a pessoa cujo tronco do dia é 癸, e a frase que a tela de resultado mostra é: \"Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 卯 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 癸, os troncos que 卯 contém são os seguintes. O tronco principal (乙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 癸卯",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 癸"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Madeira Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 癸 como tronco do dia, a Riqueza estável é 丙 e a Autoridade é 戊."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丙. 丙 não está contido em 卯."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 戊. 戊 não está contido em 卯."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [壬寅](/guide/pillar-im-in) e o seguinte é [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "É formado por [Água Yin (癸)](/guide/stem-gye) e [卯 (Coelho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 甲辰",
    "summary": "Como o Saju-Link lê o pilar do dia 甲辰 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "甲辰 é o pilar do dia número 41 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 甲辰, o tronco do dia é 甲 (Madeira, Yang) e o ramo do dia é 辰 (Dragão). No ciclo sexagenário, é a combinação número 41."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yang (甲)\" a pessoa cujo tronco do dia é 甲, e a frase que a tela de resultado mostra é: \"Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 辰 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 甲, os troncos que 辰 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 甲辰",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 甲"
              ],
              "rows": [
                [
                  "Madeira Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Água Yin (癸)",
                  "médio (中氣)",
                  "{hidJinJung}",
                  "Amparo (正印)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Fortuna imprevista (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 甲 como tronco do dia, a Riqueza estável é 己 e a Autoridade é 辛."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 己. 己 não está contido em 辰."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 辛. 辛 não está contido em 辰."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [癸卯](/guide/pillar-gye-myo) e o seguinte é [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "É formado por [Madeira Yang (甲)](/guide/stem-gap) e [辰 (Dragão)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 乙巳",
    "summary": "Como o Saju-Link lê o pilar do dia 乙巳 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "乙巳 é o pilar do dia número 42 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 乙巳, o tronco do dia é 乙 (Madeira, Yin) e o ramo do dia é 巳 (Serpente). No ciclo sexagenário, é a combinação número 42."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yin (乙)\" a pessoa cujo tronco do dia é 乙, e a frase que a tela de resultado mostra é: \"Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 巳 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 乙, os troncos que 巳 contém são os seguintes. O tronco principal (丙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 乙巳",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 乙"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "médio (中氣)",
                  "{hidSaJung}",
                  "Autoridade (正官)"
                ],
                [
                  "Fogo Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 乙 como tronco do dia, a Riqueza estável é 戊 e a Autoridade é 庚."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 戊. 戊 está contido em 巳 (residual (餘氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 庚. 庚 está contido em 巳 (médio (中氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [甲辰](/guide/pillar-gap-jin) e o seguinte é [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "É formado por [Madeira Yin (乙)](/guide/stem-eul) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丙午",
    "summary": "Como o Saju-Link lê o pilar do dia 丙午 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丙午 é o pilar do dia número 43 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丙午, o tronco do dia é 丙 (Fogo, Yang) e o ramo do dia é 午 (Cavalo). No ciclo sexagenário, é a combinação número 43."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yang (丙)\" a pessoa cujo tronco do dia é 丙, e a frase que a tela de resultado mostra é: \"O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 午 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丙, os troncos que 午 contém são os seguintes. O tronco principal (丁) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丙午",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丙"
              ],
              "rows": [
                [
                  "Fogo Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Companheiro (比肩)"
                ],
                [
                  "Terra Yin (己)",
                  "médio (中氣)",
                  "{hidOJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Fogo Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丙 como tronco do dia, a Riqueza estável é 辛 e a Autoridade é 癸."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 辛. 辛 não está contido em 午."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 癸. 癸 não está contido em 午."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [乙巳](/guide/pillar-eul-sa) e o seguinte é [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "É formado por [Fogo Yang (丙)](/guide/stem-byeong) e [午 (Cavalo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丁未",
    "summary": "Como o Saju-Link lê o pilar do dia 丁未 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丁未 é o pilar do dia número 44 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丁未, o tronco do dia é 丁 (Fogo, Yin) e o ramo do dia é 未 (Ovelha). No ciclo sexagenário, é a combinação número 44."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yin (丁)\" a pessoa cujo tronco do dia é 丁, e a frase que a tela de resultado mostra é: \"A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 未 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丁, os troncos que 未 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丁未",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丁"
              ],
              "rows": [
                [
                  "Fogo Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Companheiro (比肩)"
                ],
                [
                  "Madeira Yin (乙)",
                  "médio (中氣)",
                  "{hidMiJung}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丁 como tronco do dia, a Riqueza estável é 庚 e a Autoridade é 壬."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 庚. 庚 não está contido em 未."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 壬. 壬 não está contido em 未."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丙午](/guide/pillar-byeong-o) e o seguinte é [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "É formado por [Fogo Yin (丁)](/guide/stem-jeong) e [未 (Ovelha)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 戊申",
    "summary": "Como o Saju-Link lê o pilar do dia 戊申 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "戊申 é o pilar do dia número 45 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 戊申, o tronco do dia é 戊 (Terra, Yang) e o ramo do dia é 申 (Macaco). No ciclo sexagenário, é a combinação número 45."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yang (戊)\" a pessoa cujo tronco do dia é 戊, e a frase que a tela de resultado mostra é: \"Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 申 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 戊, os troncos que 申 contém são os seguintes. O tronco principal (庚) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 戊申",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 戊"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Companheiro (比肩)"
                ],
                [
                  "Água Yang (壬)",
                  "médio (中氣)",
                  "{hidSinJung}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 戊 como tronco do dia, a Riqueza estável é 癸 e a Autoridade é 乙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 癸. 癸 não está contido em 申."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 乙. 乙 não está contido em 申."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丁未](/guide/pillar-jeong-mi) e o seguinte é [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "É formado por [Terra Yang (戊)](/guide/stem-mu) e [申 (Macaco)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 己酉",
    "summary": "Como o Saju-Link lê o pilar do dia 己酉 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "己酉 é o pilar do dia número 46 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 己酉, o tronco do dia é 己 (Terra, Yin) e o ramo do dia é 酉 (Galo). No ciclo sexagenário, é a combinação número 46."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yin (己)\" a pessoa cujo tronco do dia é 己, e a frase que a tela de resultado mostra é: \"Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 酉 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 己, os troncos que 酉 contém são os seguintes. O tronco principal (辛) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 己酉",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 己"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 己 como tronco do dia, a Riqueza estável é 壬 e a Autoridade é 甲."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 壬. 壬 não está contido em 酉."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 甲. 甲 não está contido em 酉."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [戊申](/guide/pillar-mu-sin) e o seguinte é [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "É formado por [Terra Yin (己)](/guide/stem-gi) e [酉 (Galo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 庚戌",
    "summary": "Como o Saju-Link lê o pilar do dia 庚戌 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "庚戌 é o pilar do dia número 47 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 庚戌, o tronco do dia é 庚 (Metal, Yang) e o ramo do dia é 戌 (Cão). No ciclo sexagenário, é a combinação número 47."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yang (庚)\" a pessoa cujo tronco do dia é 庚, e a frase que a tela de resultado mostra é: \"Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 戌 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 庚, os troncos que 戌 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 庚戌",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 庚"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "médio (中氣)",
                  "{hidSulJung}",
                  "Autoridade (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Apoio não convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 庚 como tronco do dia, a Riqueza estável é 乙 e a Autoridade é 丁."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 乙. 乙 não está contido em 戌."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丁. 丁 está contido em 戌 (médio (中氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [己酉](/guide/pillar-gi-yu) e o seguinte é [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "É formado por [Metal Yang (庚)](/guide/stem-gyeong) e [戌 (Cão)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 辛亥",
    "summary": "Como o Saju-Link lê o pilar do dia 辛亥 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "辛亥 é o pilar do dia número 48 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 辛亥, o tronco do dia é 辛 (Metal, Yin) e o ramo do dia é 亥 (Porco). No ciclo sexagenário, é a combinação número 48."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yin (辛)\" a pessoa cujo tronco do dia é 辛, e a frase que a tela de resultado mostra é: \"Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 亥 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 辛, os troncos que 亥 contém são os seguintes. O tronco principal (壬) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 辛亥",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 辛"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Amparo (正印)"
                ],
                [
                  "Madeira Yang (甲)",
                  "médio (中氣)",
                  "{hidHaeJung}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Água Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 辛 como tronco do dia, a Riqueza estável é 甲 e a Autoridade é 丙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 甲. 甲 está contido em 亥 (médio (中氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丙. 丙 não está contido em 亥."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [庚戌](/guide/pillar-gyeong-sul) e o seguinte é [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "É formado por [Metal Yin (辛)](/guide/stem-sin) e [亥 (Porco)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 壬子",
    "summary": "Como o Saju-Link lê o pilar do dia 壬子 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "壬子 é o pilar do dia número 49 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 壬子, o tronco do dia é 壬 (Água, Yang) e o ramo do dia é 子 (Rato). No ciclo sexagenário, é a combinação número 49."
          },
          {
            "p": "O Saju-Link chama de \"Água Yang (壬)\" a pessoa cujo tronco do dia é 壬, e a frase que a tela de resultado mostra é: \"Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 子 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 壬, os troncos que 子 contém são os seguintes. O tronco principal (癸) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 壬子",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 壬"
              ],
              "rows": [
                [
                  "Água Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Companheiro (比肩)"
                ],
                [
                  "Água Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 壬 como tronco do dia, a Riqueza estável é 丁 e a Autoridade é 己."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丁. 丁 não está contido em 子."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 己. 己 não está contido em 子."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [辛亥](/guide/pillar-sin-hae) e o seguinte é [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "É formado por [Água Yang (壬)](/guide/stem-im) e [子 (Rato)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 癸丑",
    "summary": "Como o Saju-Link lê o pilar do dia 癸丑 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "癸丑 é o pilar do dia número 50 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 癸丑, o tronco do dia é 癸 (Água, Yin) e o ramo do dia é 丑 (Boi). No ciclo sexagenário, é a combinação número 50."
          },
          {
            "p": "O Saju-Link chama de \"Água Yin (癸)\" a pessoa cujo tronco do dia é 癸, e a frase que a tela de resultado mostra é: \"Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 丑 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 癸, os troncos que 丑 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 癸丑",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 癸"
              ],
              "rows": [
                [
                  "Água Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Companheiro (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "médio (中氣)",
                  "{hidChukJung}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 癸 como tronco do dia, a Riqueza estável é 丙 e a Autoridade é 戊."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丙. 丙 não está contido em 丑."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 戊. 戊 não está contido em 丑."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [壬子](/guide/pillar-im-ja) e o seguinte é [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "É formado por [Água Yin (癸)](/guide/stem-gye) e [丑 (Boi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 甲寅",
    "summary": "Como o Saju-Link lê o pilar do dia 甲寅 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "甲寅 é o pilar do dia número 51 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 甲寅, o tronco do dia é 甲 (Madeira, Yang) e o ramo do dia é 寅 (Tigre). No ciclo sexagenário, é a combinação número 51."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yang (甲)\" a pessoa cujo tronco do dia é 甲, e a frase que a tela de resultado mostra é: \"Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 寅 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 甲, os troncos que 寅 contém são os seguintes. O tronco principal (甲) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 甲寅",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 甲"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Fortuna imprevista (偏財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "médio (中氣)",
                  "{hidInJung}",
                  "Expressão (食神)"
                ],
                [
                  "Madeira Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 甲 como tronco do dia, a Riqueza estável é 己 e a Autoridade é 辛."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 己. 己 não está contido em 寅."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 辛. 辛 não está contido em 寅."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [癸丑](/guide/pillar-gye-chuk) e o seguinte é [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "É formado por [Madeira Yang (甲)](/guide/stem-gap) e [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 乙卯",
    "summary": "Como o Saju-Link lê o pilar do dia 乙卯 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "乙卯 é o pilar do dia número 52 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 乙卯, o tronco do dia é 乙 (Madeira, Yin) e o ramo do dia é 卯 (Coelho). No ciclo sexagenário, é a combinação número 52."
          },
          {
            "p": "O Saju-Link chama de \"Madeira Yin (乙)\" a pessoa cujo tronco do dia é 乙, e a frase que a tela de resultado mostra é: \"Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 卯 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 乙, os troncos que 卯 contém são os seguintes. O tronco principal (乙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 乙卯",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 乙"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Madeira Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 乙 como tronco do dia, a Riqueza estável é 戊 e a Autoridade é 庚."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 戊. 戊 não está contido em 卯."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 庚. 庚 não está contido em 卯."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [甲寅](/guide/pillar-gap-in) e o seguinte é [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "É formado por [Madeira Yin (乙)](/guide/stem-eul) e [卯 (Coelho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丙辰",
    "summary": "Como o Saju-Link lê o pilar do dia 丙辰 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丙辰 é o pilar do dia número 53 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丙辰, o tronco do dia é 丙 (Fogo, Yang) e o ramo do dia é 辰 (Dragão). No ciclo sexagenário, é a combinação número 53."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yang (丙)\" a pessoa cujo tronco do dia é 丙, e a frase que a tela de resultado mostra é: \"O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 辰 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丙, os troncos que 辰 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丙辰",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丙"
              ],
              "rows": [
                [
                  "Madeira Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Amparo (正印)"
                ],
                [
                  "Água Yin (癸)",
                  "médio (中氣)",
                  "{hidJinJung}",
                  "Autoridade (正官)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Expressão (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丙 como tronco do dia, a Riqueza estável é 辛 e a Autoridade é 癸."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 辛. 辛 não está contido em 辰."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 癸. 癸 está contido em 辰 (médio (中氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [乙卯](/guide/pillar-eul-myo) e o seguinte é [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "É formado por [Fogo Yang (丙)](/guide/stem-byeong) e [辰 (Dragão)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 丁巳",
    "summary": "Como o Saju-Link lê o pilar do dia 丁巳 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "丁巳 é o pilar do dia número 54 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 丁巳, o tronco do dia é 丁 (Fogo, Yin) e o ramo do dia é 巳 (Serpente). No ciclo sexagenário, é a combinação número 54."
          },
          {
            "p": "O Saju-Link chama de \"Fogo Yin (丁)\" a pessoa cujo tronco do dia é 丁, e a frase que a tela de resultado mostra é: \"A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 巳 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 丁, os troncos que 巳 contém são os seguintes. O tronco principal (丙) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 丁巳",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 丁"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "médio (中氣)",
                  "{hidSaJung}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Fogo Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 丁 como tronco do dia, a Riqueza estável é 庚 e a Autoridade é 壬."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 庚. 庚 está contido em 巳 (médio (中氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 壬. 壬 não está contido em 巳."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丙辰](/guide/pillar-byeong-jin) e o seguinte é [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "É formado por [Fogo Yin (丁)](/guide/stem-jeong) e [巳 (Serpente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 戊午",
    "summary": "Como o Saju-Link lê o pilar do dia 戊午 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "戊午 é o pilar do dia número 55 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 戊午, o tronco do dia é 戊 (Terra, Yang) e o ramo do dia é 午 (Cavalo). No ciclo sexagenário, é a combinação número 55."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yang (戊)\" a pessoa cujo tronco do dia é 戊, e a frase que a tela de resultado mostra é: \"Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 午 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 戊, os troncos que 午 contém são os seguintes. O tronco principal (丁) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 戊午",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 戊"
              ],
              "rows": [
                [
                  "Fogo Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Terra Yin (己)",
                  "médio (中氣)",
                  "{hidOJung}",
                  "Rival (劫財)"
                ],
                [
                  "Fogo Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Amparo (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 戊 como tronco do dia, a Riqueza estável é 癸 e a Autoridade é 乙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 癸. 癸 não está contido em 午."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 乙. 乙 não está contido em 午."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [丁巳](/guide/pillar-jeong-sa) e o seguinte é [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "É formado por [Terra Yang (戊)](/guide/stem-mu) e [午 (Cavalo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 己未",
    "summary": "Como o Saju-Link lê o pilar do dia 己未 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "己未 é o pilar do dia número 56 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 己未, o tronco do dia é 己 (Terra, Yin) e o ramo do dia é 未 (Ovelha). No ciclo sexagenário, é a combinação número 56."
          },
          {
            "p": "O Saju-Link chama de \"Terra Yin (己)\" a pessoa cujo tronco do dia é 己, e a frase que a tela de resultado mostra é: \"Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 未 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 己, os troncos que 未 contém são os seguintes. O tronco principal (己) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 己未",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 己"
              ],
              "rows": [
                [
                  "Fogo Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Madeira Yin (乙)",
                  "médio (中氣)",
                  "{hidMiJung}",
                  "Desafiante (偏官)"
                ],
                [
                  "Terra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 己 como tronco do dia, a Riqueza estável é 壬 e a Autoridade é 甲."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 壬. 壬 não está contido em 未."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 甲. 甲 não está contido em 未."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [戊午](/guide/pillar-mu-o) e o seguinte é [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "É formado por [Terra Yin (己)](/guide/stem-gi) e [未 (Ovelha)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 庚申",
    "summary": "Como o Saju-Link lê o pilar do dia 庚申 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "庚申 é o pilar do dia número 57 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 庚申, o tronco do dia é 庚 (Metal, Yang) e o ramo do dia é 申 (Macaco). No ciclo sexagenário, é a combinação número 57."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yang (庚)\" a pessoa cujo tronco do dia é 庚, e a frase que a tela de resultado mostra é: \"Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 申 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 庚, os troncos que 申 contém são os seguintes. O tronco principal (庚) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 庚申",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 庚"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Apoio não convencional (偏印)"
                ],
                [
                  "Água Yang (壬)",
                  "médio (中氣)",
                  "{hidSinJung}",
                  "Expressão (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 庚 como tronco do dia, a Riqueza estável é 乙 e a Autoridade é 丁."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 乙. 乙 não está contido em 申."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丁. 丁 não está contido em 申."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [己未](/guide/pillar-gi-mi) e o seguinte é [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "É formado por [Metal Yang (庚)](/guide/stem-gyeong) e [申 (Macaco)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 辛酉",
    "summary": "Como o Saju-Link lê o pilar do dia 辛酉 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "辛酉 é o pilar do dia número 58 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 辛酉, o tronco do dia é 辛 (Metal, Yin) e o ramo do dia é 酉 (Galo). No ciclo sexagenário, é a combinação número 58."
          },
          {
            "p": "O Saju-Link chama de \"Metal Yin (辛)\" a pessoa cujo tronco do dia é 辛, e a frase que a tela de resultado mostra é: \"Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 酉 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 辛, os troncos que 酉 contém são os seguintes. O tronco principal (辛) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 辛酉",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 辛"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Companheiro (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 辛 como tronco do dia, a Riqueza estável é 甲 e a Autoridade é 丙."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 甲. 甲 não está contido em 酉."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 丙. 丙 não está contido em 酉."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [庚申](/guide/pillar-gyeong-sin) e o seguinte é [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "É formado por [Metal Yin (辛)](/guide/stem-sin) e [酉 (Galo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 壬戌",
    "summary": "Como o Saju-Link lê o pilar do dia 壬戌 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "壬戌 é o pilar do dia número 59 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 壬戌, o tronco do dia é 壬 (Água, Yang) e o ramo do dia é 戌 (Cão). No ciclo sexagenário, é a combinação número 59."
          },
          {
            "p": "O Saju-Link chama de \"Água Yang (壬)\" a pessoa cujo tronco do dia é 壬, e a frase que a tela de resultado mostra é: \"Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 戌 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 壬, os troncos que 戌 contém são os seguintes. O tronco principal (戊) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 壬戌",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 壬"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Amparo (正印)"
                ],
                [
                  "Fogo Yin (丁)",
                  "médio (中氣)",
                  "{hidSulJung}",
                  "Riqueza estável (正財)"
                ],
                [
                  "Terra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Desafiante (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 壬 como tronco do dia, a Riqueza estável é 丁 e a Autoridade é 己."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丁. 丁 está contido em 戌 (médio (中氣))."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 己. 己 não está contido em 戌."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [辛酉](/guide/pillar-sin-yu) e o seguinte é [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "É formado por [Água Yang (壬)](/guide/stem-im) e [戌 (Cão)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Pilares do dia",
    "title": "O pilar do dia 癸亥",
    "summary": "Como o Saju-Link lê o pilar do dia 癸亥 — o que os troncos contidos no ramo do dia são para o tronco do dia — apresentado exatamente como constam suas regras de cálculo.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "癸亥 é o pilar do dia número 60 do ciclo sexagenário",
        "blocks": [
          {
            "p": "Quando o par tronco-ramo do dia de nascimento é 癸亥, o tronco do dia é 癸 (Água, Yin) e o ramo do dia é 亥 (Porco). No ciclo sexagenário, é a combinação número 60."
          },
          {
            "p": "O Saju-Link chama de \"Água Yin (癸)\" a pessoa cujo tronco do dia é 癸, e a frase que a tela de resultado mostra é: \"Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras.\" Esta frase não tem relação com a leitura abaixo nem com as pontuações."
          }
        ]
      },
      {
        "title": "O que os troncos contidos no ramo do dia 亥 são para o tronco do dia",
        "blocks": [
          {
            "p": "O ramo do dia é a posição do cônjuge. Lidos a partir do tronco do dia 癸, os troncos que 亥 contém são os seguintes. O tronco principal (壬) é a energia representativa do ramo."
          },
          {
            "table": {
              "caption": "Os troncos ocultos do ramo do dia de 癸亥",
              "head": [
                "Tronco oculto",
                "Posição",
                "Proporção",
                "Para o tronco do dia 癸"
              ],
              "rows": [
                [
                  "Terra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Autoridade (正官)"
                ],
                [
                  "Madeira Yang (甲)",
                  "médio (中氣)",
                  "{hidHaeJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Água Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "A posição do cônjuge e este pilar do dia",
        "blocks": [
          {
            "p": "O myeongri tradicional lê a posição do cônjuge como Riqueza estável (正財) para os homens e Autoridade (正官) para as mulheres. Com 癸 como tronco do dia, a Riqueza estável é 丙 e a Autoridade é 戊."
          },
          {
            "p": "Para homens, a posição do cônjuge (Riqueza estável) é 丙. 丙 não está contido em 亥."
          },
          {
            "p": "Para mulheres, a posição do cônjuge (Autoridade) é 戊. 戊 está contido em 亥 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Os pilares do dia vizinhos e os caracteres de que ele é feito",
        "blocks": [
          {
            "p": "No ciclo sexagenário, o pilar do dia anterior é [壬戌](/guide/pillar-im-sul) e o seguinte é [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "É formado por [Água Yin (癸)](/guide/stem-gye) e [亥 (Porco)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um pilar do dia não define uma pessoa nem um relacionamento. Um saju é lido a partir de como os oito caracteres dos quatro pilares se relacionam.",
              "A leitura da posição do cônjuge herda uma regra do myeongri tradicional, e se você não informar o gênero esta posição não é lida."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Para começar",
    "title": "Troncos celestes, ramos terrestres e pilar do dia: como ler os caracteres",
    "summary": "O que são os oito caracteres de um Saju e o que significam os troncos celestes, os ramos terrestres e o pilar do dia, explicados de forma simples com duas tabelas.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Saju é escrito com dois tipos de caracteres",
        "blocks": [
          {
            "p": "Os oito caracteres de um Saju se dividem em caracteres superiores e inferiores. O caractere superior é um dos dez **troncos celestes (天干)**, e o caractere inferior é um dos doze **ramos terrestres (地支)**."
          },
          {
            "p": "Pense no tronco como uma etiqueta para um tipo de energia e no ramo como uma etiqueta para um momento e um lugar. Não é preciso decorá-los, assim como não se decoram os nomes dos dias da semana; basta consultá-los nas tabelas abaixo. Como os quatro pilares se tornam oito caracteres é explicado no [guia do gráfico natal](/guide/natal-chart)."
          }
        ]
      },
      {
        "title": "Os dez troncos celestes",
        "blocks": [
          {
            "p": "Existem dez troncos celestes. Cada um dos cinco elementos (Madeira, Fogo, Terra, Metal, Água) fica com dois troncos, e em cada par o primeiro é Yang (陽) e o segundo é Yin (陰)."
          },
          {
            "table": {
              "caption": "Os dez troncos celestes com elemento e polaridade",
              "head": [
                "Tronco celeste",
                "Elemento e polaridade"
              ],
              "rows": [
                [
                  "Madeira Yang (甲)",
                  "Madeira Yang"
                ],
                [
                  "Madeira Yin (乙)",
                  "Madeira Yin"
                ],
                [
                  "Fogo Yang (丙)",
                  "Fogo Yang"
                ],
                [
                  "Fogo Yin (丁)",
                  "Fogo Yin"
                ],
                [
                  "Terra Yang (戊)",
                  "Terra Yang"
                ],
                [
                  "Terra Yin (己)",
                  "Terra Yin"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin"
                ],
                [
                  "Água Yang (壬)",
                  "Água Yang"
                ],
                [
                  "Água Yin (癸)",
                  "Água Yin"
                ]
              ]
            }
          },
          {
            "p": "O tronco do dia em que você nasceu se chama **tronco do dia (日干)**, e é o caractere que aponta para você."
          }
        ]
      },
      {
        "title": "Os doze ramos terrestres",
        "blocks": [
          {
            "p": "Existem doze ramos terrestres, e cada um tem associado um animal do zodíaco. Portanto, os doze ramos são os signos do zodíaco."
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
          },
          {
            "p": "Um ramo parece um único caractere, mas guarda troncos dentro de si. Eles se chamam **troncos ocultos (支藏干)**. Que troncos um ramo contém, e em que proporção, está detalhado na entrada do dicionário de cada ramo. Para saber como se determina o animal do zodíaco, consulte [o guia do zodíaco](/guide/zodiac)."
          }
        ]
      },
      {
        "title": "O pilar do dia: um tronco e um ramo em par",
        "blocks": [
          {
            "p": "Cada pilar de um Saju é formado por dois caracteres: um tronco emparelhado com um ramo. O pilar do dia em que você nasceu é o **pilar do dia (日柱)**."
          },
          {
            "p": "Ao emparelhar os troncos e os ramos em ordem, obtêm-se **sessenta** combinações, de 甲子 e 乙丑 e 丙寅 até 癸亥. Esse ciclo se chama ciclo sexagenário. São sessenta e não 10 × 12 = 120 porque um tronco Yang só se emparelha com um ramo Yang, e um tronco Yin só com um ramo Yin."
          },
          {
            "p": "O caractere superior do pilar do dia é o tronco do dia que vimos acima. As entradas que explicam cada pilar uma a uma estão nos dicionários de troncos, ramos e pilares do dia, no fim da [lista de guias](/guide)."
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
