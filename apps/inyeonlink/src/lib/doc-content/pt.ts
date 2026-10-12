import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Sobre",
    "title": "Sobre Inyeon-Link",
    "summary": "Comparamos dois gráficos de nascimento na tradição coreana de saju. Aqui está o que calculamos e o que nos recusamos a afirmar.",
    "backLabel": "Início",
    "sections": [
      {
        "title": "O que fazemos",
        "blocks": [
          {
            "p": "Inyeon-Link constrói dois gráficos de nascimento a partir das datas e horários de nascimento e mostra **como os dois conjuntos de energias se encontram.** Você também pode ler seu próprio gráfico sozinho e ver quais temperamentos tendem a lhe agradar."
          },
          {
            "p": "A leitura na tela é **gratuita e não requer conta.** Os itens pagos são relatórios em PDF que contêm figuras que a tela nunca mostra — forças dos elementos, combinações dos dez deuses e as relações entre os quatro pilares."
          }
        ]
      },
      {
        "title": "O que calculamos",
        "blocks": [
          {
            "p": "Os gráficos são construídos a partir do **almanaque lunissolar coreano**, e o horário de nascimento é corrigido para **tempo solar verdadeiro** para o local de nascimento — o mesmo horário de relógio significa uma posição do sol diferente dependendo de onde você nasceu."
          },
          {
            "p": "As pontuações vêm apenas de regras fixas. Conceitos tradicionais — dez deuses, relações entre ramos, o elemento de suporte — são expressos como regras, então **a mesma entrada sempre dá o mesmo resultado.** Quando uma regra muda, executamos um teste de regressão para garantir que leituras mais antigas não foram alteradas."
          },
          {
            "p": "**Nenhuma IA está envolvida.** Cada frase na tela é texto fixo anexado a um resultado calculado."
          }
        ]
      },
      {
        "title": "O que não afirmaremos",
        "blocks": [
          {
            "ul": [
              "**Não fazemos previsões.** Nada aqui diz para você perseguir ou evitar alguém. É uma referência extraída de uma tradição.",
              "**Não armazenamos o que você insere.** Os detalhes de nascimento são usados apenas no momento do cálculo e nunca são registrados; os links de resultado vivem na parte da URL que um navegador não envia para um servidor.",
              "**Uma pontuação não é um veredicto sobre uma pessoa.** Um número baixo não invalida um relacionamento."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "O método é descrito em detalhes nos [guias](/guide). Os detalhes da empresa e como nos contatar estão na [página de contato](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base de Cálculo",
    "title": "Qual é a Base para o Cálculo?",
    "summary": "Inyeon-Link revela todas as regras que utiliza. Você pode verificar os itens e seus pesos, as pontuações da tabela de relações entre ramos terrestres e os valores de limite que distinguem entre um tronco do dia forte e um tronco do dia fraco — você pode ver de onde vêm os números na tela.",
    "backLabel": "Voltar ao Início",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Os valores escritos aqui são todos **lidos diretamente do código de cálculo**. Como não são transcritos manualmente para o texto, se as regras mudarem, os números neste documento também mudarão."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Base do Serviço",
    "title": "O que a Compatibilidade de Saju Considera?",
    "summary": "Esclarece quatro itens e seus respectivos pesos, e explica por que esses quatro foram escolhidos. Também aborda por que os cálculos podem ser feitos mesmo sem saber o horário de nascimento.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Calculando e Combinando Dois Eixos",
        "blocks": [
          {
            "p": "A taxa de correspondência vem de dois ramos. **A compatibilidade de saju** analisa o gráfico original de saju de ambos os indivíduos, enquanto **a compatibilidade zodiacal** considera apenas um ramo terrestre do ano de nascimento. O valor final é obtido pela média ponderada dos dois."
          },
          {
            "table": {
              "head": [
                "Eixo",
                "O que é Considerado",
                "Peso"
              ],
              "rows": [
                [
                  "Compatibilidade de Saju",
                  "Tronco do dia, ramo do dia e os cinco elementos — quatro itens",
                  "{weightSaju}"
                ],
                [
                  "Compatibilidade Zodiacal",
                  "A relação entre os ramos do ano",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "O lado do saju é muito mais pesado porque a quantidade de informação utilizada é diferente. Saju considera todos os quatro pilares, enquanto o zodíaco analisa apenas um caractere. No entanto, o zodíaco não é excluído por duas razões — é o item mais intuitivamente compreensível e é o **único eixo cujo valor não flutua mesmo sem saber o horário de nascimento**."
          }
        ]
      },
      {
        "title": "Os Quatro Itens da Compatibilidade de Saju",
        "blocks": [
          {
            "p": "O lado do saju é ainda mais dividido em quatro. Cada item é escolhido para garantir que o que consideram não se sobreponha."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju consiste em oito caracteres formados pelos troncos celestiais e ramos terrestres do ano, mês, dia e hora de nascimento. O tronco do dia e o ramo do dia mencionados abaixo são os dois caracteres no pilar do dia.",
            "labels": {
              "year": "Pilar do Ano",
              "yearNote": "Raiz · Zodíaco",
              "month": "Pilar do Mês",
              "monthNote": "Estação · Poder",
              "day": "Pilar do Dia",
              "dayNote": "Eu · Palácio do Cônjuge",
              "hour": "Pilar da Hora",
              "hourNote": "Anos Finais · Uso",
              "stem": "Tronco Celestial",
              "stemNote": "Tronco do Dia = Eu",
              "branch": "Ramo Terrestre",
              "branchNote": "Ramo do Dia = Palácio do Cônjuge"
            }
          },
          {
            "table": {
              "head": [
                "Item",
                "O que é considerado",
                "Peso"
              ],
              "rows": [
                [
                  "Relação do Tronco do Dia",
                  "O que os troncos do dia (日干) das duas pessoas são um para o outro — visto através dos Dez Deuses",
                  "{weightDayMaster}"
                ],
                [
                  "Complementação dos Cinco Elementos",
                  "O parceiro tem a energia que eu preciso — visto através do elemento de suporte que um gráfico atualmente necessita",
                  "{weightElementSupply}"
                ],
                [
                  "Estrela do Cônjuge",
                  "O tronco do dia do parceiro corresponde à minha posição de cônjuge?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relação do Ramo do Dia",
                  "Os ramos do dia (日支) das duas pessoas são uma combinação ou um choque?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "O ramo do dia é lido porque a tradição o trata como o **palácio do cônjuge**. Dos quatro pilares, é aquele que aponta para o parceiro, o que faz dele o primeiro lugar que a compatibilidade observa."
          }
        ]
      },
      {
        "title": "Se o gênero não for divulgado, o elemento do cônjuge é omitido",
        "blocks": [
          {
            "p": "O elemento do cônjuge requer conhecimento do gênero para o cálculo. A tradição lê a posição que aponta para um cônjuge de maneira diferente dependendo do gênero. Se não for divulgado, este item será **excluído** e os pesos dos três itens restantes serão renormalizados."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Não será tratado como 0 pontos",
        "blocks": [
          {
            "p": "Se as posições ausentes forem tratadas como 0 pontos, a pontuação será injustamente reduzida simplesmente porque o gênero não foi divulgado. A renormalização dos pesos evita esse problema."
          }
        ]
      },
      {
        "title": "Cálculos podem ser feitos sem saber a hora de nascimento",
        "blocks": [
          {
            "p": "A hora de nascimento é usada para determinar o pilar da hora. Se desconhecida, os cálculos serão feitos sem o pilar da hora, e esse fato será indicado na tela de resultados. Como não há entrada direta para o pilar da hora entre os quatro itens de compatibilidade, os valores não flutuarão significativamente, mas isso afeta o equilíbrio dos cinco elementos."
          },
          {
            "p": "Se você souber a hora, por favor, selecione também o local de nascimento. Se o horário padrão diferir da posição solar real, usá-lo como está pode desalinhavar o pilar da hora [(correção do tempo solar verdadeiro)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "A mesma entrada sempre resultará no mesmo valor",
        "blocks": [
          {
            "p": "Todas as pontuações são determinadas por regras. Nenhuma inteligência artificial é utilizada, nem números aleatórios são empregados. Portanto, inserir as mesmas duas datas de nascimento várias vezes não resultará em resultados diferentes. Como um serviço que não armazena dados, resultados anteriores não podem ser recuperados, mas o **determinismo** compensa isso."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Alterar as regras aumentará a versão",
        "blocks": [
          {
            "p": "Cada vez que as regras de pontuação são alteradas, a versão do motor é atualizada. A versão é anotada na parte inferior da tela de resultados, permitindo que você identifique quais regras foram usadas para calcular os números que você está visualizando atualmente."
          }
        ]
      },
      {
        "title": "O que este resultado não é",
        "blocks": [
          {
            "p": "Este é um **material de referência** calculado a partir de regras construídas sob a perspectiva da tradição. Não é uma previsão científica, nem uma declaração definitiva sobre o relacionamento entre os dois indivíduos. A faixa de pontuação é definida para um mínimo de cerca de 45 pontos por essa razão — nenhuma combinação resultará em um valor próximo a 0 pontos."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabela de relações",
    "title": "Como os animais do zodíaco e os ramos do dia se encontram — A tabela dos doze ramos",
    "summary": "A tabela de relações usada quando os animais do zodíaco e os ramos do dia de duas pessoas são colocados lado a lado. Ela mostra, para cada um dos doze, quais animais formam com ele uma harmonia, um choque ou uma discórdia, e revela a pontuação de cada relação.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Animais do zodíaco e ramos do dia usam a mesma tabela",
        "blocks": [
          {
            "p": "O Inyeon-Link coloca lado a lado os ramos terrestres de duas pessoas em dois lugares: a **compatibilidade zodiacal**, que olha o ramo do ano de nascimento, e a **compatibilidade do ramo do dia** (o palácio do cônjuge), que olha o ramo do dia de nascimento. Ambas são avaliadas com a tabela abaixo; a única diferença é o peso que cada uma tem na pontuação final."
          },
          {
            "figure": "branch-wheel",
            "caption": "Dispor os doze caracteres em círculo deixa as relações claras num relance. Um choque fica sempre diretamente oposto, enquanto um par de seis-harmonias e uma discórdia silenciosa são vizinhos mais próximos. Essas linhas não são escritas à mão; são traçadas diretamente das regras de cálculo.",
            "labels": {
              "alt": "Um diagrama que mostra os doze ramos terrestres dispostos em círculo, com linhas ligando os pares de seis-harmonia, choque e discórdia.",
              "yukhap": "Seis-Harmonia",
              "chung": "Choque",
              "wonjin": "Discórdia",
              "rat": "Rato",
              "ox": "Boi",
              "tiger": "Tigre",
              "rabbit": "Coelho",
              "dragon": "Dragão",
              "snake": "Serpente",
              "horse": "Cavalo",
              "goat": "Ovelha",
              "monkey": "Macaco",
              "rooster": "Galo",
              "dog": "Cão",
              "pig": "Porco"
            }
          }
        ]
      },
      {
        "title": "As relações de cada um dos doze animais do zodíaco",
        "blocks": [
          {
            "p": "Para cada animal, a tabela lista com quais animais ele forma cada relação. Só estão listados os pares que este serviço reconhece como harmonias; por isso, um animal que não aparece numa linha não tem nenhuma relação especial com ele — é **neutro**."
          },
          {
            "table": {
              "caption": "Quatro tipos de relação vistos a partir de um animal",
              "head": [
                "Seu animal",
                "Par que se atrai (Seis-Harmonia)",
                "Meia triade",
                "Em discórdia silenciosa (Discórdia)",
                "Colisão frontal (Choque)"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Boi",
                  "Macaco · Dragão",
                  "Ovelha",
                  "Cavalo"
                ],
                [
                  "Boi (丑)",
                  "Rato",
                  "Galo",
                  "Cavalo",
                  "Ovelha"
                ],
                [
                  "Tigre (寅)",
                  "Porco",
                  "Cavalo",
                  "Galo",
                  "Macaco"
                ],
                [
                  "Coelho (卯)",
                  "Cão",
                  "Porco · Ovelha",
                  "Macaco",
                  "Galo"
                ],
                [
                  "Dragão (辰)",
                  "Galo",
                  "Rato",
                  "Porco",
                  "Cão"
                ],
                [
                  "Serpente (巳)",
                  "Macaco",
                  "Galo",
                  "Cão",
                  "Porco"
                ],
                [
                  "Cavalo (午)",
                  "Ovelha",
                  "Tigre · Cão",
                  "Boi",
                  "Rato"
                ],
                [
                  "Ovelha (未)",
                  "Cavalo",
                  "Coelho",
                  "Rato",
                  "Boi"
                ],
                [
                  "Macaco (申)",
                  "Serpente",
                  "Rato",
                  "Coelho",
                  "Tigre"
                ],
                [
                  "Galo (酉)",
                  "Dragão",
                  "Serpente · Boi",
                  "Tigre",
                  "Coelho"
                ],
                [
                  "Cão (戌)",
                  "Coelho",
                  "Cavalo",
                  "Serpente",
                  "Dragão"
                ],
                [
                  "Porco (亥)",
                  "Tigre",
                  "Coelho",
                  "Dragão",
                  "Serpente"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Quando duas pessoas se encontram na tabela",
        "blocks": [
          {
            "p": "Ler a tabela é encontrar os dois animais numa mesma linha. Aqui estão alguns pares como exemplo."
          },
          {
            "ul": [
              "**Rato e Boi** — uma seis-harmonia. Precisa de apenas dois caracteres, por isso é a harmonia que mais aparece na compatibilidade, e é boa.",
              "**Rato e Dragão** — uma meia triade: dois dos três caracteres 申子辰, incluindo o do meio (子).",
              "**Rato e Tigre** — não está na tabela, por isso é neutro: nem harmonia nem choque, apenas a base.",
              "**Rato e Ovelha** — uma discórdia. Parece calma na superfície, mas acredita-se que o desencontro dure.",
              "**Tigre e Macaco** — um choque. Ficam diretamente opostos e são vistos como em colisão frontal."
            ]
          }
        ]
      },
      {
        "title": "Quantos pontos cada relação recebe",
        "blocks": [
          {
            "table": {
              "caption": "Do mais alto para o mais baixo. São os valores que o Inyeon-Link realmente usa.",
              "head": [
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Choque",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "O mesmo ramo (duas pessoas do mesmo animal) significa semelhança, não atração, por isso fica logo acima do neutro. Seja na compatibilidade zodiacal ou na do ramo do dia, o valor desta tabela vai direto para a pontuação final."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por que as triades completas não estão na tabela",
        "blocks": [
          {
            "p": "Uma triade completa (申子辰, 巳酉丑, 寅午戌, 亥卯未) precisa dos três caracteres. Ao colocar duas pessoas lado a lado, há apenas dois, então uma triade completa não pode ocorrer na compatibilidade e só aparecem meias triades. A pontuação de triade completa, {scoreSamhap}, é mantida para o caso em que três caracteres se reúnem no mapa de uma só pessoa."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 e 亥未 não são contados como harmonias",
        "blocks": [
          {
            "p": "Alguns métodos contam como meia triade quaisquer dois caracteres do mesmo grupo de triade. O Inyeon-Link não: como mostra a coluna de meia triade acima, aceita apenas pares que incluam o **ramo real** no centro do grupo (子, 午, 卯, 酉). Um par sem ele não tem centro em torno do qual a formação se reúna, por isso é tratado como neutro."
          }
        ]
      },
      {
        "title": "Discórdia e choque não ficam no piso",
        "blocks": [
          {
            "p": "Se só harmonias e choques fossem contados, os seis pares de discórdia ficariam enterrados no neutro. Por isso a discórdia tem um lugar próprio: mais alta que a colisão frontal e mais baixa que o neutro, com {scoreWonjin} pontos."
          },
          {
            "p": "Mesmo um choque mantém {scoreChung} pontos. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação. Um valor próximo de zero faria o serviço pronunciar um veredicto sobre duas pessoas; por isso a faixa é mantida larga o bastante para mostrar a diferença sem pronunciar um."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodíaco",
    "title": "Por que a compatibilidade zodiacal considera o ramo do ano?",
    "summary": "O zodíaco é o ramo terrestre do ano de nascimento. Isso explica por que é derivado do pilar do ano do saju em vez do ano do calendário, e esclarece a importância da compatibilidade zodiacal.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "O zodíaco é o ramo terrestre do ano de nascimento",
        "blocks": [
          {
            "p": "O saju consiste em quatro pilares: ano, mês, dia e hora, com cada pilar contendo um tronco celestial e um ramo terrestre. O **ramo do ano** é aquele que carrega o animal que chamamos de signo zodiacal."
          },
          {
            "table": {
              "caption": "Os Doze Ramos Terrestres e o Zodíaco",
              "head": [
                "Ramo Terrestre",
                "Zodíaco"
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
                  "Ovelha"
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
        "title": "Usamos o ano do saju, não o ano do calendário",
        "blocks": [
          {
            "p": "O ponto em que o zodíaco muda não é 1º de janeiro do calendário solar nem o Ano Novo Lunar. O padrão para mudar o ano no saju é **Ipchun**. Portanto, aqueles que nasceram em janeiro ou no início de fevereiro podem ter um ano zodiacal diferente do que está no calendário."
          }
        ]
      },
      {
        "kind": "note",
        "title": "A razão pela qual não perguntamos diretamente sobre o zodíaco",
        "blocks": [
          {
            "p": "É por isso que apenas coletamos a data de nascimento sem perguntar pelo zodíaco na tela de entrada. Quando o motor de saju calcula o ramo do ano, a fronteira de Ipchun é automaticamente ajustada. Se você selecionar diretamente, alguém nascido no início de fevereiro pode escolher um zodíaco que não corresponde ao seu real."
          }
        ]
      },
      {
        "title": "A compatibilidade zodiacal considera apenas um relacionamento",
        "blocks": [
          {
            "p": "O cálculo da compatibilidade zodiacal é simples. Ele compara os ramos do ano de duas pessoas para determinar se o relacionamento é harmonioso, um choque ou uma discórdia silenciosa, e usa essa pontuação como está. Como há apenas um item, não há necessidade de distribuir pesos."
          },
          {
            "p": "As pontuações para cada relacionamento estão todas listadas na [Tabela de Relacionamento dos Doze Ramos](/guide/branches). A compatibilidade do ramo do dia usa a mesma tabela."
          }
        ]
      },
      {
        "title": "A razão para determinar o peso",
        "blocks": [
          {
            "p": "A compatibilidade zodiacal conta para {weightZodiac} da taxa final de correspondência. Enquanto a compatibilidade do saju analisa todos os quatro pilares, o zodíaco considera apenas um caractere, portanto, não podem ser ponderados igualmente."
          },
          {
            "p": "No entanto, há duas razões pelas quais não é excluído."
          },
          {
            "ul": [
              "**É o item mais intuitivamente compreensível**. Mesmo sem conhecer o vocabulário da tradição, 'o tigre e o macaco colidem' faz sentido.",
              "**É o único eixo que não flutua mesmo se a hora de nascimento for desconhecida**. Se você não souber a hora, o pilar da hora está ausente e a força dos cinco elementos muda, mas o ramo do ano permanece o mesmo."
            ]
          }
        ]
      },
      {
        "title": "Você também pode visualizar a compatibilidade zodiacal separadamente",
        "blocks": [
          {
            "p": "Na tela de resultados, mostramos as pontuações tanto da compatibilidade do saju quanto da compatibilidade zodiacal separadamente. Se apenas a taxa final de correspondência for apresentada, não está claro de onde vem esse número. Se os dois valores forem significativamente diferentes, isso em si vale a pena notar."
          }
        ]
      }
    ]
  },
  "guide/zodiac-rat": {
    "eyebrow": "Por animal",
    "title": "Como o Rato se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Rato (子) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Rato é o primeiro dos doze ramos",
        "blocks": [
          {
            "p": "O Rato é quem tem **子** como ramo do ano de nascimento. 子 é o primeiro dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 午 (o Cavalo)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Rato é: “Percebe rápido e garante rápido o que importa. O primeiro a se mover numa crise.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Rato. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Rato e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Boi (丑)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Tigre (寅)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Coelho (卯)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Dragão (辰)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Serpente (巳)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cavalo (午)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Ovelha (未)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Macaco (申)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Galo (酉)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cão (戌)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Porco (亥)",
                  "Neutro",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Boi — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "子 e 丑 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Rato e o Boi recebem {scoreYukhap}, o máximo que o Rato pode obter."
          }
        ]
      },
      {
        "title": "Dragão e Macaco — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "申子辰 é um grupo de triade (o grupo da água), e 子 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Rato forma uma meia triade ({scoreBanhap}) tanto com o Dragão quanto com o Macaco."
          },
          {
            "p": "**O Macaco e o Dragão juntos**, por outro lado, não têm o caractere central 子; por isso o par não é contado como harmonia e é tratado como neutro. Mesmo dentro de um grupo de triade, é o Rato quem forma a meia triade."
          }
        ]
      },
      {
        "title": "Cavalo — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "子 e 午 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Rato pode receber."
          }
        ]
      },
      {
        "title": "Ovelha — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "子 e 未 ficam logo ao lado de 午 (o Cavalo), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 6 animais, e o Rato com outro Rato",
        "blocks": [
          {
            "p": "Tigre, Coelho, Serpente, Galo, Cão e Porco não são nem uma harmonia, nem um choque, nem uma discórdia com o Rato: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Rato recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Rato encontra uma pessoa Cavalo, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Boi é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Rato cujos ramos do dia são 子 e 午 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Por animal",
    "title": "Como o Boi se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Boi (丑) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Boi é o segundo dos doze ramos",
        "blocks": [
          {
            "p": "O Boi é quem tem **丑** como ramo do ano de nascimento. 丑 é o segundo dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 未 (a Ovelha)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Boi é: “Parece lento, mas leva tudo até o fim. O que assume, não larga.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Boi. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Boi e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Boi (丑)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Tigre (寅)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Coelho (卯)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Dragão (辰)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cavalo (午)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Ovelha (未)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Macaco (申)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Galo (酉)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Cão (戌)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Porco (亥)",
                  "Neutro",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Rato — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "丑 e 子 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Boi e o Rato recebem {scoreYukhap}, o máximo que o Boi pode obter."
          }
        ]
      },
      {
        "title": "Galo — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "巳酉丑 é um grupo de triade (o grupo do metal), e 酉 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Boi forma uma meia triade ({scoreBanhap}) apenas com o Galo."
          },
          {
            "p": "Com a Serpente (巳) do mesmo grupo falta o caractere central 酉; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Ovelha — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "丑 e 未 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Boi pode receber."
          }
        ]
      },
      {
        "title": "Cavalo — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "丑 e 午 ficam logo ao lado de 未 (a Ovelha), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e o Boi com outro Boi",
        "blocks": [
          {
            "p": "Tigre, Coelho, Dragão, Serpente, Macaco, Cão e Porco não são nem uma harmonia, nem um choque, nem uma discórdia com o Boi: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Boi recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Boi encontra uma pessoa Ovelha, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Rato é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Boi cujos ramos do dia são 丑 e 未 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Por animal",
    "title": "Como o Tigre se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Tigre (寅) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Tigre é o terceiro dos doze ramos",
        "blocks": [
          {
            "p": "O Tigre é quem tem **寅** como ramo do ano de nascimento. 寅 é o terceiro dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 申 (o Macaco)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Tigre é: “Destemido e sempre à frente. Não consegue deixar passar uma injustiça.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Tigre. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Tigre e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Boi (丑)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Coelho (卯)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Dragão (辰)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cavalo (午)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Ovelha (未)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Macaco (申)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Galo (酉)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Cão (戌)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Porco (亥)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Porco — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "寅 e 亥 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Tigre e o Porco recebem {scoreYukhap}, o máximo que o Tigre pode obter."
          }
        ]
      },
      {
        "title": "Cavalo — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "寅午戌 é um grupo de triade (o grupo do fogo), e 午 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Tigre forma uma meia triade ({scoreBanhap}) apenas com o Cavalo."
          },
          {
            "p": "Com o Cão (戌) do mesmo grupo falta o caractere central 午; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Macaco — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "寅 e 申 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Tigre pode receber."
          }
        ]
      },
      {
        "title": "Galo — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "寅 e 酉 ficam logo ao lado de 申 (o Macaco), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e o Tigre com outro Tigre",
        "blocks": [
          {
            "p": "Rato, Boi, Coelho, Dragão, Serpente, Ovelha e Cão não são nem uma harmonia, nem um choque, nem uma discórdia com o Tigre: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Tigre recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Tigre encontra uma pessoa Macaco, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Porco é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Tigre cujos ramos do dia são 寅 e 申 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Por animal",
    "title": "Como o Coelho se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Coelho (卯) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Coelho é o quarto dos doze ramos",
        "blocks": [
          {
            "p": "O Coelho é quem tem **卯** como ramo do ano de nascimento. 卯 é o quarto dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 酉 (o Galo)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Coelho é: “Gentil e perceptivo. Sabe contornar em vez de colidir.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Coelho. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Coelho e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Boi (丑)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Coelho (卯)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Dragão (辰)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cavalo (午)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Ovelha (未)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Macaco (申)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Galo (酉)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Cão (戌)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Porco (亥)",
                  "Meia triade",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cão — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "卯 e 戌 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Coelho e o Cão recebem {scoreYukhap}, o máximo que o Coelho pode obter."
          }
        ]
      },
      {
        "title": "Ovelha e Porco — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "亥卯未 é um grupo de triade (o grupo da madeira), e 卯 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Coelho forma uma meia triade ({scoreBanhap}) tanto com a Ovelha quanto com o Porco."
          },
          {
            "p": "**O Porco e a Ovelha juntos**, por outro lado, não têm o caractere central 卯; por isso o par não é contado como harmonia e é tratado como neutro. Mesmo dentro de um grupo de triade, é o Coelho quem forma a meia triade."
          }
        ]
      },
      {
        "title": "Galo — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "卯 e 酉 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Coelho pode receber."
          }
        ]
      },
      {
        "title": "Macaco — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "卯 e 申 ficam logo ao lado de 酉 (o Galo), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 6 animais, e o Coelho com outro Coelho",
        "blocks": [
          {
            "p": "Rato, Boi, Tigre, Dragão, Serpente e Cavalo não são nem uma harmonia, nem um choque, nem uma discórdia com o Coelho: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Coelho recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Coelho encontra uma pessoa Galo, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Cão é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Coelho cujos ramos do dia são 卯 e 酉 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Por animal",
    "title": "Como o Dragão se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Dragão (辰) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Dragão é o quinto dos doze ramos",
        "blocks": [
          {
            "p": "O Dragão é quem tem **辰** como ramo do ano de nascimento. 辰 é o quinto dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 戌 (o Cão)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Dragão é: “Coração grande e ideais altos. Raramente se contenta com o comum.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Dragão. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Dragão e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Boi (丑)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Coelho (卯)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Dragão (辰)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Serpente (巳)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cavalo (午)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Ovelha (未)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Macaco (申)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Galo (酉)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Cão (戌)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Porco (亥)",
                  "Discórdia",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Galo — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "辰 e 酉 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Dragão e o Galo recebem {scoreYukhap}, o máximo que o Dragão pode obter."
          }
        ]
      },
      {
        "title": "Rato — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "申子辰 é um grupo de triade (o grupo da água), e 子 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Dragão forma uma meia triade ({scoreBanhap}) apenas com o Rato."
          },
          {
            "p": "Com o Macaco (申) do mesmo grupo falta o caractere central 子; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Cão — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "辰 e 戌 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Dragão pode receber."
          }
        ]
      },
      {
        "title": "Porco — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "辰 e 亥 ficam logo ao lado de 戌 (o Cão), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e o Dragão com outro Dragão",
        "blocks": [
          {
            "p": "Boi, Tigre, Coelho, Serpente, Cavalo, Ovelha e Macaco não são nem uma harmonia, nem um choque, nem uma discórdia com o Dragão: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Dragão recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Dragão encontra uma pessoa Cão, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Galo é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Dragão cujos ramos do dia são 辰 e 戌 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Por animal",
    "title": "Como a Serpente se encontra com os doze animais do zodíaco",
    "summary": "Que relação a Serpente (巳) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "A Serpente é o sexto dos doze ramos",
        "blocks": [
          {
            "p": "A Serpente é quem tem **巳** como ramo do ano de nascimento. 巳 é o sexto dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 亥 (o Porco)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Serpente é: “Guarda o que pensa e reflete com profundidade. Julga com precisão.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com a Serpente. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "A Serpente e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Boi (丑)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Coelho (卯)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Dragão (辰)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Cavalo (午)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Ovelha (未)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Macaco (申)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Galo (酉)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Cão (戌)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Porco (亥)",
                  "Choque",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Macaco — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "巳 e 申 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e a Serpente e o Macaco recebem {scoreYukhap}, o máximo que a Serpente pode obter."
          }
        ]
      },
      {
        "title": "Galo — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "巳酉丑 é um grupo de triade (o grupo do metal), e 酉 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso a Serpente forma uma meia triade ({scoreBanhap}) apenas com o Galo."
          },
          {
            "p": "Com o Boi (丑) do mesmo grupo falta o caractere central 酉; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Porco — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "巳 e 亥 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que a Serpente pode receber."
          }
        ]
      },
      {
        "title": "Cão — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "巳 e 戌 ficam logo ao lado de 亥 (o Porco), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e a Serpente com outra Serpente",
        "blocks": [
          {
            "p": "Rato, Boi, Tigre, Coelho, Dragão, Cavalo e Ovelha não são nem uma harmonia, nem um choque, nem uma discórdia com a Serpente: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Serpente recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Serpente encontra uma pessoa Porco, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Macaco é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Serpente cujos ramos do dia são 巳 e 亥 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Por animal",
    "title": "Como o Cavalo se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Cavalo (午) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Cavalo é o sétimo dos doze ramos",
        "blocks": [
          {
            "p": "O Cavalo é quem tem **午** como ramo do ano de nascimento. 午 é o sétimo dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 子 (o Rato)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Cavalo é: “Alegre e inquieto. Ficar cercado é o mais difícil de tudo.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Cavalo. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Cavalo e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Boi (丑)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Tigre (寅)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Coelho (卯)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Dragão (辰)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cavalo (午)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Ovelha (未)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Macaco (申)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Galo (酉)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cão (戌)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Porco (亥)",
                  "Neutro",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ovelha — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "午 e 未 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Cavalo e a Ovelha recebem {scoreYukhap}, o máximo que o Cavalo pode obter."
          }
        ]
      },
      {
        "title": "Tigre e Cão — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "寅午戌 é um grupo de triade (o grupo do fogo), e 午 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Cavalo forma uma meia triade ({scoreBanhap}) tanto com o Tigre quanto com o Cão."
          },
          {
            "p": "**O Tigre e o Cão juntos**, por outro lado, não têm o caractere central 午; por isso o par não é contado como harmonia e é tratado como neutro. Mesmo dentro de um grupo de triade, é o Cavalo quem forma a meia triade."
          }
        ]
      },
      {
        "title": "Rato — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "午 e 子 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Cavalo pode receber."
          }
        ]
      },
      {
        "title": "Boi — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "午 e 丑 ficam logo ao lado de 子 (o Rato), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 6 animais, e o Cavalo com outro Cavalo",
        "blocks": [
          {
            "p": "Coelho, Dragão, Serpente, Macaco, Galo e Porco não são nem uma harmonia, nem um choque, nem uma discórdia com o Cavalo: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Cavalo recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Cavalo encontra uma pessoa Rato, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Ovelha é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Cavalo cujos ramos do dia são 午 e 子 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Por animal",
    "title": "Como a Ovelha se encontra com os doze animais do zodíaco",
    "summary": "Que relação a Ovelha (未) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "A Ovelha é o oitavo dos doze ramos",
        "blocks": [
          {
            "p": "A Ovelha é quem tem **未** como ramo do ano de nascimento. 未 é o oitavo dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 丑 (o Boi)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Ovelha é: “Caloroso e atencioso. Guarda por muito tempo as palavras duras.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com a Ovelha. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "A Ovelha e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Boi (丑)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Tigre (寅)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Coelho (卯)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Dragão (辰)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cavalo (午)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Ovelha (未)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Macaco (申)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Galo (酉)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cão (戌)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Porco (亥)",
                  "Neutro",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cavalo — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "未 e 午 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e a Ovelha e o Cavalo recebem {scoreYukhap}, o máximo que a Ovelha pode obter."
          }
        ]
      },
      {
        "title": "Coelho — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "亥卯未 é um grupo de triade (o grupo da madeira), e 卯 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso a Ovelha forma uma meia triade ({scoreBanhap}) apenas com o Coelho."
          },
          {
            "p": "Com o Porco (亥) do mesmo grupo falta o caractere central 卯; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Boi — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "未 e 丑 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que a Ovelha pode receber."
          }
        ]
      },
      {
        "title": "Rato — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "未 e 子 ficam logo ao lado de 丑 (o Boi), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e a Ovelha com outra Ovelha",
        "blocks": [
          {
            "p": "Tigre, Dragão, Serpente, Macaco, Galo, Cão e Porco não são nem uma harmonia, nem um choque, nem uma discórdia com a Ovelha: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Ovelha recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Ovelha encontra uma pessoa Boi, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Cavalo é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Ovelha cujos ramos do dia são 未 e 丑 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Por animal",
    "title": "Como o Macaco se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Macaco (申) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Macaco é o nono dos doze ramos",
        "blocks": [
          {
            "p": "O Macaco é quem tem **申** como ramo do ano de nascimento. 申 é o nono dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 寅 (o Tigre)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Macaco é: “Cheio de recursos e rápido para se adaptar. Entedia-se com a repetição.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Macaco. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Macaco e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Boi (丑)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Coelho (卯)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Dragão (辰)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Serpente (巳)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Cavalo (午)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Ovelha (未)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Macaco (申)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Galo (酉)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cão (戌)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Porco (亥)",
                  "Neutro",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Serpente — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "申 e 巳 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Macaco e a Serpente recebem {scoreYukhap}, o máximo que o Macaco pode obter."
          }
        ]
      },
      {
        "title": "Rato — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "申子辰 é um grupo de triade (o grupo da água), e 子 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Macaco forma uma meia triade ({scoreBanhap}) apenas com o Rato."
          },
          {
            "p": "Com o Dragão (辰) do mesmo grupo falta o caractere central 子; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Tigre — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "申 e 寅 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Macaco pode receber."
          }
        ]
      },
      {
        "title": "Coelho — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "申 e 卯 ficam logo ao lado de 寅 (o Tigre), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e o Macaco com outro Macaco",
        "blocks": [
          {
            "p": "Boi, Dragão, Cavalo, Ovelha, Galo, Cão e Porco não são nem uma harmonia, nem um choque, nem uma discórdia com o Macaco: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Macaco recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Macaco encontra uma pessoa Tigre, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Serpente é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Macaco cujos ramos do dia são 申 e 寅 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Por animal",
    "title": "Como o Galo se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Galo (酉) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Galo é o décimo dos doze ramos",
        "blocks": [
          {
            "p": "O Galo é quem tem **酉** como ramo do ano de nascimento. 酉 é o décimo dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 卯 (o Coelho)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Galo é: “Diligente e minucioso. Não consegue deixar nada fora do lugar.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Galo. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Galo e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Boi (丑)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Tigre (寅)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Coelho (卯)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Dragão (辰)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Serpente (巳)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Cavalo (午)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Ovelha (未)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Macaco (申)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Galo (酉)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Cão (戌)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Porco (亥)",
                  "Neutro",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dragão — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "酉 e 辰 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Galo e o Dragão recebem {scoreYukhap}, o máximo que o Galo pode obter."
          }
        ]
      },
      {
        "title": "Boi e Serpente — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "巳酉丑 é um grupo de triade (o grupo do metal), e 酉 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Galo forma uma meia triade ({scoreBanhap}) tanto com o Boi quanto com a Serpente."
          },
          {
            "p": "**A Serpente e o Boi juntos**, por outro lado, não têm o caractere central 酉; por isso o par não é contado como harmonia e é tratado como neutro. Mesmo dentro de um grupo de triade, é o Galo quem forma a meia triade."
          }
        ]
      },
      {
        "title": "Coelho — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "酉 e 卯 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Galo pode receber."
          }
        ]
      },
      {
        "title": "Tigre — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "酉 e 寅 ficam logo ao lado de 卯 (o Coelho), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 6 animais, e o Galo com outro Galo",
        "blocks": [
          {
            "p": "Rato, Cavalo, Ovelha, Macaco, Cão e Porco não são nem uma harmonia, nem um choque, nem uma discórdia com o Galo: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Galo recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Galo encontra uma pessoa Coelho, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Dragão é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Galo cujos ramos do dia são 酉 e 卯 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Cão](/guide/zodiac-dog) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Por animal",
    "title": "Como o Cão se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Cão (戌) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Cão é o décimo primeiro dos doze ramos",
        "blocks": [
          {
            "p": "O Cão é quem tem **戌** como ramo do ano de nascimento. 戌 é o décimo primeiro dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 辰 (o Dragão)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Cão é: “Leal até o fim depois que confia. A traição machuca especialmente fundo.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Cão. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Cão e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Boi (丑)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Coelho (卯)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Dragão (辰)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Serpente (巳)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Cavalo (午)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Ovelha (未)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Macaco (申)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Galo (酉)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cão (戌)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ],
                [
                  "Porco (亥)",
                  "Neutro",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Coelho — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "戌 e 卯 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Cão e o Coelho recebem {scoreYukhap}, o máximo que o Cão pode obter."
          }
        ]
      },
      {
        "title": "Cavalo — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "寅午戌 é um grupo de triade (o grupo do fogo), e 午 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Cão forma uma meia triade ({scoreBanhap}) apenas com o Cavalo."
          },
          {
            "p": "Com o Tigre (寅) do mesmo grupo falta o caractere central 午; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Dragão — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "戌 e 辰 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Cão pode receber."
          }
        ]
      },
      {
        "title": "Serpente — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "戌 e 巳 ficam logo ao lado de 辰 (o Dragão), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e o Cão com outro Cão",
        "blocks": [
          {
            "p": "Rato, Boi, Tigre, Ovelha, Macaco, Galo e Porco não são nem uma harmonia, nem um choque, nem uma discórdia com o Cão: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Cão recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Cão encontra uma pessoa Dragão, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Coelho é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Cão cujos ramos do dia são 戌 e 辰 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Porco](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Por animal",
    "title": "Como o Porco se encontra com os doze animais do zodíaco",
    "summary": "Que relação o Porco (亥) tem com cada um dos doze animais do zodíaco, quantos pontos cada uma vale e que parcela da taxa de compatibilidade final esse valor ocupa — apresentado exatamente como nas regras de cálculo do Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O Porco é o décimo segundo dos doze ramos",
        "blocks": [
          {
            "p": "O Porco é quem tem **亥** como ramo do ano de nascimento. 亥 é o décimo segundo dos doze ramos terrestres e, quando os doze caracteres são dispostos em círculo, fica exatamente em frente a 巳 (a Serpente)."
          },
          {
            "p": "A frase que o resultado de compatibilidade mostra para uma pessoa Porco é: “Generoso e franco. Confia com facilidade, às vezes a um custo.” Essa frase não tem relação com as pontuações das relações e não afeta as pontuações abaixo."
          }
        ]
      },
      {
        "title": "Os doze animais do zodíaco num relance",
        "blocks": [
          {
            "p": "Cada um dos outros animais é confrontado, um de cada vez, com o Porco. Só os pares que este serviço reconhece como harmonias são escritos como relações; todo o resto é neutro."
          },
          {
            "table": {
              "caption": "O Porco e os doze animais do zodíaco",
              "head": [
                "Outro animal",
                "Relação",
                "Pontuação"
              ],
              "rows": [
                [
                  "Rato (子)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Boi (丑)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Seis-Harmonia",
                  "{scoreYukhap}"
                ],
                [
                  "Coelho (卯)",
                  "Meia triade",
                  "{scoreBanhap}"
                ],
                [
                  "Dragão (辰)",
                  "Discórdia",
                  "{scoreWonjin}"
                ],
                [
                  "Serpente (巳)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Cavalo (午)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Ovelha (未)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Macaco (申)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Galo (酉)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Cão (戌)",
                  "Neutro",
                  "{scoreNeutral}"
                ],
                [
                  "Porco (亥)",
                  "Mesmo ramo",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tigre — o par que se atrai (Seis-Harmonia)",
        "blocks": [
          {
            "p": "亥 e 寅 formam uma harmonia com apenas dois caracteres. Uma seis-harmonia é a boa relação que mais aparece na compatibilidade, e o Porco e o Tigre recebem {scoreYukhap}, o máximo que o Porco pode obter."
          }
        ]
      },
      {
        "title": "Coelho — uma meia triade que inclui o ramo real",
        "blocks": [
          {
            "p": "亥卯未 é um grupo de triade (o grupo da madeira), e 卯 é o **ramo real** no seu centro. O Inyeon-Link aceita apenas pares que incluam o ramo real, por isso o Porco forma uma meia triade ({scoreBanhap}) apenas com o Coelho."
          },
          {
            "p": "Com a Ovelha (未) do mesmo grupo falta o caractere central 卯; por isso o par não é contado como harmonia e é tratado como neutro ({scoreNeutral}). Pertencer ao mesmo grupo não faz de todo par uma harmonia."
          }
        ]
      },
      {
        "title": "Serpente — a colisão frontal (Choque)",
        "blocks": [
          {
            "p": "亥 e 巳 ficam exatamente em frente um do outro no círculo. Este serviço mantém {scoreChung} pontos mesmo para um choque. Na myeongri tradicional, um choque é uma colisão, não o fim de uma relação, e dar uma pontuação próxima do piso equivaleria a pronunciar um veredicto sobre duas pessoas. Mesmo assim, é a menor pontuação que o Porco pode receber."
          }
        ]
      },
      {
        "title": "Dragão — a discórdia silenciosa (Discórdia)",
        "blocks": [
          {
            "p": "亥 e 辰 ficam logo ao lado de 巳 (a Serpente), a posição do choque, e são tradicionalmente vistos como um par que se ressente, mas não consegue se separar. Parece calmo na superfície, mas acredita-se que o desencontro dure, por isso recebe {scoreWonjin} — mais que um choque ({scoreChung}) e menos que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Os outros 7 animais, e o Porco com outro Porco",
        "blocks": [
          {
            "p": "Rato, Boi, Cavalo, Ovelha, Macaco, Galo e Cão não são nem uma harmonia, nem um choque, nem uma discórdia com o Porco: são **neutros** e recebem {scoreNeutral}. São a linha de base, nem bons nem ruins."
          },
          {
            "p": "Duas pessoas Porco recebem {scoreSame}. Isso significa que se parecem, não que se atraem, por isso ficam logo acima do neutro."
          }
        ]
      },
      {
        "title": "Que parcela da taxa de compatibilidade final esta pontuação ocupa",
        "blocks": [
          {
            "p": "Há dois lugares em que os ramos de duas pessoas são colocados lado a lado."
          },
          {
            "ul": [
              "A **compatibilidade zodiacal** olha o ramo do ano de nascimento. Ela ocupa {weightZodiac} da taxa de compatibilidade final.",
              "A **compatibilidade do ramo do dia** olha o ramo do dia de nascimento. Ela ocupa {weightDayBranch} da compatibilidade de saju ({weightSaju}), o que corresponde a {weightDayBranchTotal} da taxa de compatibilidade final."
            ]
          },
          {
            "p": "Por exemplo, quando uma pessoa Porco encontra uma pessoa Serpente, a compatibilidade zodiacal resulta em choque. Com tudo o mais igual, a taxa de compatibilidade final sai {swingZodiacChung} pontos mais baixa do que com um par neutro. Com uma pessoa Tigre é uma seis-harmonia, e a taxa sai {swingZodiacYukhap} pontos mais alta."
          },
          {
            "p": "Os ramos do ano e do dia podem ser diferentes. Duas pessoas Porco cujos ramos do dia são 亥 e 巳 recebem o mesmo ramo ({scoreSame}) na compatibilidade zodiacal e um choque ({scoreChung}) na compatibilidade do ramo do dia."
          }
        ]
      },
      {
        "kind": "note",
        "title": "O que este guia não diz",
        "blocks": [
          {
            "ul": [
              "Um único animal não decide a relação entre duas pessoas. {weightSaju} da taxa de compatibilidade final é decidido pela compatibilidade de saju.",
              "As variações de pontos acima pressupõem que todo o resto seja igual; o resultado real é definido pelo saju completo das duas pessoas.",
              "A tabela completa de qual relação vale quanto está na [tabela dos doze ramos](/guide/branches), e por que o zodíaco é lido pelo ramo do ano está em [Por que a compatibilidade zodiacal considera o ramo do ano](/guide/zodiac)."
            ]
          },
          {
            "p": "Os outros animais são apresentados do mesmo modo. [Rato](/guide/zodiac-rat) · [Boi](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Coelho](/guide/zodiac-rabbit) · [Dragão](/guide/zodiac-dragon) · [Serpente](/guide/zodiac-snake) · [Cavalo](/guide/zodiac-horse) · [Ovelha](/guide/zodiac-goat) · [Macaco](/guide/zodiac-monkey) · [Galo](/guide/zodiac-rooster) · [Cão](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Dez Deuses",
    "title": "Dez Deuses e Posição do Cônjuge",
    "summary": "Analisamos o que cada tronco do dia é um para o outro através dos Dez Deuses. Explicamos por que a riqueza direta e a riqueza indireta são lidas de maneira diferente, mesmo que ambas sejam riqueza.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "O tronco do dia é a própria pessoa",
        "blocks": [
          {
            "p": "Entre os oito caracteres do saju, o **tronco do dia** (o tronco celestial do dia de nascimento) refere-se à própria pessoa. Os sete caracteres restantes são lidos como o ambiente em que esse tronco do dia está colocado."
          },
          {
            "p": "Os **Dez Deuses** (十神) dividem como o tronco do dia percebe outros caracteres em dez categorias. O que me nutre é **recurso**, o que é igual a mim é **par**, o que eu produzo é **saída**, o que eu controlo é **riqueza**, e o que me controla é **autoridade** — cada um dos cinco é então dividido por polaridade, totalizando dez."
          }
        ]
      },
      {
        "title": "O que o tronco do dia de cada pessoa é um para o outro",
        "blocks": [
          {
            "p": "Este é o primeiro item na compatibilidade. Uma vez determinado como o tronco do dia de A percebe o tronco do dia de B, a percepção de B sobre A também é determinada, então há **apenas seis possibilidades**."
          },
          {
            "table": {
              "caption": "Em ordem de maior pontuação",
              "head": [
                "Par",
                "Yin/Yang",
                "Nome",
                "Significado"
              ],
              "rows": [
                [
                  "Riqueza Direta ↔ Autoridade Direta",
                  "Polaridade oposta",
                  "Vínculo caloroso (有情)",
                  "Este é o par tradicionalmente visto como a posição do cônjuge. O yin e o yang estão desalinhados, atraindo-se mutuamente."
                ],
                [
                  "Oficial Ferido ↔ Recurso Direto",
                  "Polaridade oposta",
                  "Oficial Ferido usando o Selo (傷官佩印)",
                  "Um lado envolve a energia intensa do outro lado."
                ],
                [
                  "Amigo ↔ Amigo",
                  "Mesma polaridade",
                  "Igual",
                  "Eles se assemelham e são iguais, mas não se pressionam mutuamente."
                ],
                [
                  "Rival ↔ Rival",
                  "Polaridade oposta",
                  "Competição",
                  "Eles se atraem, mas competem pela mesma posição."
                ],
                [
                  "Riqueza Indireta ↔ Autoridade Indireta",
                  "Mesma polaridade",
                  "Vínculo frio (無情)",
                  "A estimulação é grande, mas o fardo também é pesado."
                ],
                [
                  "Deus Comedor ↔ Recurso Indireto",
                  "Mesma polaridade",
                  "A estrela coruja rouba a comida (梟神奪食)",
                  "A energia dada é tomada pela contraparte, bloqueando o fluxo."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin e Yang estão em uma encruzilhada",
        "blocks": [
          {
            "p": "O lado onde yin e yang estão desalinhados (Riqueza Adequada, Oficial Adequado, Companheiro Adequado) é emocional, enquanto o mesmo lado (Recurso, Oficial, Companheiro) é não emocional, que é o princípio que distingue o adequado e o lado dos Dez Deuses."
          }
        ]
      },
      {
        "title": "A razão para ver com os Dez Deuses em vez de três elementos",
        "blocks": [
          {
            "p": "Há um método de ver a relação do tronco do dia com os três elementos (geração mútua, igualdade, superação mútua). É simples, mas **yin e yang desaparecem.** 甲 (madeira yang) e 乙 (madeira yin) tornam-se a mesma 'igualdade' como 甲 e 甲, e a superação mútua é esmagada em uma única pontuação sem direção ou yin e yang."
          },
          {
            "p": "A posição do cônjuge deve ser avaliada em termos dos Dez Deuses. Se os itens vistos pelos cinco elementos e os itens vistos pelos Dez Deuses forem misturados em um único motor, haverá dois padrões para os mesmos dois caracteres. Portanto, unificamos com os Dez Deuses."
          }
        ]
      },
      {
        "title": "A posição do cônjuge é Riqueza Adequada e Oficial Adequado",
        "blocks": [
          {
            "p": "Na tradição, qual dos Dez Deuses representa um cônjuge difere por gênero."
          },
          {
            "table": {
              "head": [
                "Gênero",
                "Posição do Cônjuge",
                "Posição Correspondente"
              ],
              "rows": [
                [
                  "Masculino",
                  "Riqueza Direta (正財)",
                  "Riqueza Indireta (偏財)"
                ],
                [
                  "Feminino",
                  "Autoridade Direta (正官)",
                  "Autoridade Indireta (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Mesmo que sejam o mesmo recurso, apenas a **Riqueza Adequada** emocional é considerada a posição do cônjuge, enquanto o Recurso é lido como a natureza da atividade e da riqueza. Portanto, Riqueza Adequada e Oficial Adequado contam como 2 pontos, enquanto Recurso e Oficial contam como 1 ponto, e ambas as direções são somadas — se ambas são vistas como posições de cônjuge, é a mais alta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se o gênero não for divulgado, omita este item",
        "blocks": [
          {
            "p": "Se um item indecidível for definido como 0 pontos, resulta em uma pontuação injustamente baixa. O peso restante após omitir o item é normalizado novamente [(item e peso)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Também mostramos a forma do relacionamento",
        "blocks": [
          {
            "p": "Além da pontuação, descrevemos **qual forma** o par de troncos do dia tem na tela de resultados. Se são posições semelhantes, se um lado apoia o outro, ou se um lado é suprimido — se é uma relação de apoio ou supressão, esclarecemos qual lado ocupa essa posição."
          },
          {
            "p": "Se apenas uma pontuação for apresentada, fica a pergunta 'e daí'. A forma não é uma pontuação, mas algo a ser lido, e até mesmo pares com pontuações baixas têm algo a interpretar."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Os cinco elementos",
    "title": "Elemento de Apoio — A energia necessária agora",
    "summary": "Vemos os cinco elementos não como 'eles escolheram dois', mas como 'a contraparte tem o que eu preciso'. Também divulgamos o valor limite que distingue um tronco do dia forte de um fraco.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Se os cinco elementos estão 'equilibrados' não é uma questão de compatibilidade",
        "blocks": [
          {
            "p": "Há um método de medir se as cinco energias estão distribuídas de maneira uniforme, combinando os cinco elementos das duas pessoas. No entanto, a questão da compatibilidade não é essa. **A contraparte tem o que eu preciso?**"
          },
          {
            "p": "O grau de equilíbrio é simétrico, mas a complementaridade é inerentemente assimétrica. Isso porque o que A precisa é diferente do que B precisa. Portanto, medimos cada lado separadamente e fazemos uma média — como é uma média, a pontuação total permanece simétrica."
          }
        ]
      },
      {
        "title": "Elemento de Apoio — Reduzir se excessivo, adicionar se insuficiente",
        "blocks": [
          {
            "p": "O Elemento de Apoio (用神) é 'a energia que esta pessoa precisa agora'. Existem vários métodos para determiná-lo (supressão, apoio, doença e comunicação), mas pode ser traduzido em regras, e o mais amplamente utilizado é **supressão (抑扶)**. Se o tronco do dia é forte, vê-se que a energia a ser reduzida é necessária, e se fraco, a energia a ser adicionada é necessária."
          },
          {
            "table": {
              "head": [
                "Julgamento",
                "O que é necessário",
                "Quantos"
              ],
              "rows": [
                [
                  "Tronco do dia forte (身强)",
                  "Energia diminuindo — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Três"
                ],
                [
                  "Tronco do dia fraco (身弱)",
                  "Energia adicionando — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Dois"
                ],
                [
                  "Equilibrado (中和)",
                  "Não pode ser coberto pelo elemento de apoio, então é a energia mais fina",
                  "Dois"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Valores de limite para força e fraqueza",
        "blocks": [
          {
            "p": "O lado do tronco do dia é **印星 e 比劫** — a energia que me dá vida e a energia que é como eu. Como dois em cinco, se a energia estiver completamente equilibrada, torna-se {evenAllyRatio}. Um intervalo é definido acima e abaixo desse valor."
          },
          {
            "table": {
              "caption": "A proporção de aliados (印星 + 比劫) no poder total",
              "head": [
                "Proporção",
                "Julgamento"
              ],
              "rows": [
                [
                  "{strongThreshold} ou mais",
                  "Tronco do dia forte"
                ],
                [
                  "{weakThreshold} ou mais e menos que {strongThreshold}",
                  "Equilibrado"
                ],
                [
                  "Menos que {weakThreshold}",
                  "Tronco do dia fraco"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "O equilíbrio é um 'julgamento menos certo'",
        "blocks": [
          {
            "p": "Equilíbrio significa que não pode ser coberto pelo elemento de apoio. Nesse momento, vemos simplesmente as duas energias mais finas como necessárias. Na tela de resultados, é anotado como 'atualmente em uma posição fina' em vez de uma declaração definitiva."
          }
        ]
      },
      {
        "title": "Poder não é o número de caracteres",
        "blocks": [
          {
            "p": "Ao contar o poder dos cinco elementos, não contamos simplesmente os oito caracteres como aparecem. Usamos um valor que reflete os troncos celestiais ocultos (地藏干) dentro dos ramos terrestres e a estação da energia do mês (月令) em que alguém nasceu."
          },
          {
            "p": "Se contarmos apenas os caracteres superficiais, perdemos o fato de que até mesmo dois caracteres de 木 podem ter forças completamente diferentes dependendo da estação. O 木 da primavera e o 木 do outono, embora sejam o mesmo caractere, têm poderes diferentes."
          }
        ]
      },
      {
        "title": "Pontuação do grau de preenchimento",
        "blocks": [
          {
            "p": "Observamos a proporção do meu elemento de apoio no poder do oponente. No entanto, não usamos essa proporção diretamente, mas **dividimos a expectativa pelo tamanho do elemento de apoio.** Quando forte, o elemento de apoio é três (expectativa 60%), e quando fraco, é dois (expectativa 40%), então usar a proporção diretamente significaria que uma pessoa forte sempre recebe uma pontuação mais alta."
          },
          {
            "p": "Se preenchido até o nível esperado, uma pontuação próxima de 78 pontos é obtida, e se preenchido muito mais, chega a 100 pontos, enquanto se estiver significativamente faltando, vai em direção a 55 pontos. Aqui, também, o mínimo não é definido como 0."
          }
        ]
      },
      {
        "title": "Este é um julgamento preliminar",
        "blocks": [
          {
            "p": "A análise real de saju considera a formação e o clima sazonal (o calor e a umidade da estação) para determinar o elemento de apoio, e as conclusões podem variar dependendo do método utilizado. Inyeon-Link usa apenas os elementos de apoio que podem ser medidos por **valores de poder.** Isso se deve ao princípio de usar apenas o que pode ser traduzido em regras, então a mesma entrada sempre resultará na mesma resposta."
          },
          {
            "p": "Em vez disso, a tela de resultados também apresenta a força e fraqueza de cada pessoa junto com a energia atualmente necessária como **material de leitura**. Isso é para evitar esconder a base da pontuação."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Nossos padrões",
    "title": "Inyeon’s Match — A razão para não fornecer uma pontuação total",
    "summary": "Nós apenas consideramos os dados de uma pessoa enquanto deixamos a posição do oponente vazia e substituímos todos os valores possíveis nessa posição. Explicamos a razão para não anexar uma pontuação total ao tipo obtido dessa forma.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Os cálculos são feitos enquanto deixamos a posição do oponente vazia",
        "blocks": [
          {
            "p": "As pontuações de compatibilidade são calculadas combinando duas pessoas. **Inyeon’s Match** apenas considera os dados de uma pessoa enquanto deixa a posição do oponente vazia e testa todos os valores possíveis que poderiam entrar nessa posição. É como executar o motor de compatibilidade ao contrário."
          },
          {
            "p": "Assim, não é necessário conhecer a data de nascimento do oponente. Podemos ainda dizer: 'Que tipo de perfil de combinação é adequado para mim?' sobre alguém que ainda não conhecemos."
          }
        ]
      },
      {
        "title": "Não executamos milhões de combinações",
        "blocks": [
          {
            "p": "A pontuação de compatibilidade em saju consiste em quatro itens, e **cada item não se sobrepõe no que examina.**"
          },
          {
            "table": {
              "head": [
                "Item",
                "Qual é o eixo de exame",
                "Número de casos"
              ],
              "rows": [
                [
                  "Relação do tronco do dia · Natureza conjugal",
                  "Os troncos do dia de ambas as pessoas — troncos celestiais",
                  "10"
                ],
                [
                  "Complemento dos cinco elementos",
                  "Meu elemento de apoio e o poder dos cinco elementos do oponente",
                  "5"
                ],
                [
                  "Relação do ramo do dia",
                  "os ramos do dia das duas pessoas",
                  "12"
                ],
                [
                  "Relação do zodíaco",
                  "os ramos do ano das duas pessoas",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Como os valores não se trocam entre os itens, **encontrar o ponto mais alto para cada ramo será o ponto mais alto geral**. Não há necessidade de verificar todas as combinações de datas de nascimento — apenas definir os dez troncos celestiais, doze ramos terrestres e cinco elementos é suficiente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "As mesmas regras se aplicam",
        "blocks": [
          {
            "p": "As pontuações escritas aqui são diretamente retiradas do motor de compatibilidade. Como nenhuma nova regra foi criada, o tipo que aparece no topo aqui também terá a maior pontuação para esse item na compatibilidade real. Se as regras de compatibilidade forem alteradas, esta tela seguirá o mesmo padrão."
          }
        ]
      },
      {
        "title": "Nenhuma pontuação total é fornecida",
        "blocks": [
          {
            "p": "Esta é a decisão mais importante nesta tela. Coletar as pontuações mais altas para cada ramo pode parecer resultar em uma 'combinação perfeita', mas essa pessoa pode **não existir realmente.**"
          },
          {
            "p": "Em pessoas reais, o tronco do dia e os cinco elementos não operam separadamente. Uma pessoa com 甲木 geralmente tem uma forte energia de 木 também. Este método de contar ramos separadamente ignora essa correlação, então o valor obtido ao conectar as pontuações mais altas para cada ramo se torna uma combinação que não existe na realidade."
          },
          {
            "p": "Portanto, a tela exibe apenas **pontuações dos itens** e não fornece uma pontuação total. A pontuação total será calculada ao receber a data de nascimento da outra pessoa para [compatibilidade saju](/compatibility)."
          }
        ]
      },
      {
        "title": "Como ler 'tipos de combinação'",
        "blocks": [
          {
            "p": "O resultado significa 'se você encontrar uma pessoa desse tipo, este item terá uma pontuação alta'. Não é um critério para escolher uma pessoa, mas sim uma maneira de ler a partir de uma perspectiva de entender a mim mesmo."
          },
          {
            "p": "As razões pelas quais certos tipos pontuaram alto também são anotadas item por item — se o tronco do dia está em uma posição favorável, ou se essa pessoa possui a energia que eu atualmente preciso."
          }
        ]
      },
      {
        "title": "Ferramenta de confirmação",
        "blocks": [
          {
            "p": "Você pode estar curioso se a pessoa que tem em mente corresponde a esse tipo. Ao inserir a data de nascimento deles na ferramenta de confirmação na tela de resultados, você será informado sobre seu tronco do dia, ramo do dia e ramo do ano. Os valores inseridos não são salvos neste momento [(não salvos)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Hora",
    "title": "A hora de nascimento de cada pessoa é corrigida separadamente",
    "summary": "A compatibilidade calcula separadamente a hora das duas pessoas. Aqui se explica como a correção se aplica quando os locais de nascimento e as épocas diferem, e o que muda quando só uma delas não sabe a hora.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O relógio e o sol não concordam",
        "blocks": [
          {
            "p": "No saju, a hora de nascimento é lida pela posição do sol, não pelo relógio. Mas um país inteiro adota um só horário padrão, então o relógio e o sol de qualquer lugar se afastam um do outro."
          },
          {
            "p": "O horário padrão da Coreia baseia-se em 135°E, enquanto Seul fica a cerca de 127°E. O sol de Seul alcança o ponto mais alto mais tarde do que o relógio indica, cerca de **32 minutos**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutos podem mover o pilar da hora um passo",
        "blocks": [
          {
            "p": "Quem nasceu em Seul às 11:40 pelo relógio nasceu às 11:08 em tempo solar verdadeiro, ainda dentro da hora do Cavalo (午, 11:00–13:00). Quem nasceu às 11:20 pelo relógio nasceu às 10:48, que cai na hora da Serpente (巳, 9:00–11:00). A correção existe para quem está exatamente num limite como esse."
          }
        ]
      },
      {
        "title": "A correção é aplicada a cada pessoa separadamente",
        "blocks": [
          {
            "p": "A compatibilidade monta o mapa de cada pessoa por conta própria. Por isso a tela de entrada pede o local de nascimento **para cada pessoa**. Se uma nasceu em Seul e a outra no exterior, suas horas são corrigidas separadamente, com longitudes e fusos horários diferentes."
          },
          {
            "p": "A lista de cidades tem atualmente {cityCount} locais. Para países cuja longitude varia muito, as cidades são divididas, porque **15° de longitude movem o pilar da hora um passo**."
          },
          {
            "p": "Se você não escolher, Seul é usada. Se só uma pessoa nasceu no exterior e as duas ficam em Seul, apenas o pilar da hora da pessoa nascida no exterior fica errado; os valores da outra não são afetados, porque a correção é aplicada pessoa por pessoa."
          }
        ]
      },
      {
        "title": "Épocas diferentes usaram horários padrão diferentes",
        "blocks": [
          {
            "p": "Duas pessoas de idades diferentes viveram sob o horário padrão de períodos diferentes. Por isso, a diferença de longitude sozinha não basta."
          },
          {
            "ul": [
              "**Antes de 1912** — a Coreia não tinha um horário padrão unificado (hora média local).",
              "**1954–1961** — o horário padrão era UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — vigorou o horário de verão."
            ]
          },
          {
            "p": "O Inyeon-Link não fixa um meridiano padrão no código. Ele consulta o **fuso horário IANA** do local de nascimento para encontrar o horário padrão realmente em uso naquele momento, de modo que a época de cada pessoa é aplicada mesmo quando os anos de nascimento diferem."
          }
        ]
      },
      {
        "title": "Logo após a meia-noite, o tronco do dia muda",
        "blocks": [
          {
            "p": "A correção é de −32 minutos, então quem nasceu entre 00:00 e 00:32 pelo relógio nasceu, em tempo solar verdadeiro, na **hora das 23:00 do dia anterior**. A data é recuada junto."
          },
          {
            "p": "Na compatibilidade isso importa muito. Quando o pilar do dia recua um dia, mudam tanto o tronco quanto o ramo do dia; assim, a relação dos troncos do dia, a Estrela do Cônjuge e a relação dos ramos do dia são todas recalculadas com caracteres diferentes, e as forças dos cinco elementos se movem junto."
          }
        ]
      },
      {
        "title": "Não há problema se só uma pessoa não souber a hora",
        "blocks": [
          {
            "p": "A hora de nascimento é opcional, e a compatibilidade ainda é calculada se apenas uma das duas não a souber. Só a pessoa que não a sabe é calculada sem o pilar da hora, e a tela de resultados informa isso. Os valores da outra pessoa permanecem como estão."
          },
          {
            "p": "Nenhum dos quatro itens de compatibilidade usa diretamente o pilar da hora, mas ele afeta as forças dos cinco elementos, então é mais preciso informá-lo se você souber. A compatibilidade zodiacal dá o mesmo valor com ou sem hora — [ela olha só o ramo do ano](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Privacidade",
    "title": "Como evitamos guardar os dados de duas pessoas",
    "summary": "A compatibilidade pede que você informe também a data de nascimento de outra pessoa. Aqui se explica, em termos técnicos, o que significa que os dados de nenhuma das duas pessoas sejam gravados em lugar algum e o que viaja com um link de resultado.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Você está informando os dados de outra pessoa",
        "blocks": [
          {
            "p": "A tela de compatibilidade recebe juntas a sua data de nascimento e a da outra pessoa. A data de nascimento da outra pessoa é um dado pessoal dela, por isso explicamos à parte como o Inyeon-Link trata as duas."
          },
          {
            "p": "Não há conta, e não pedimos nome, endereço de e-mail nem número de telefone. Recebemos apenas as duas datas de nascimento e, opcionalmente, hora de nascimento, local de nascimento e gênero, e nada disso permanece quando o cálculo termina."
          },
          {
            "p": "Há um campo para um nome de exibição na tela de resultados, mas ele serve apenas para exibição e não é usado no cálculo. Você não precisa informar um nome real."
          }
        ]
      },
      {
        "title": "Um link de resultado contém as duas datas de nascimento",
        "blocks": [
          {
            "p": "Quando o cálculo termina, o endereço fica assim."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "A parte depois do **#** guarda os dados informados pelas duas pessoas. Ela se chama fragmento e, pelo comportamento padrão da web, **o navegador não a envia ao servidor**. Foi concebida para apontar uma posição dentro de um documento, então o servidor nunca a vê."
          },
          {
            "p": "Quando você abre um link de resultado, o navegador lê esse valor e pede um cálculo; o servidor recebe os valores de que precisa, devolve a resposta e os esquece."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Antes de enviar o link para a outra pessoa",
        "blocks": [
          {
            "p": "Não ser guardado num servidor não é o mesmo que o link ser secreto. Quem receber o link vê as duas datas de nascimento tal como são, e um link deixado numa conversa fica nessa conversa, independentemente do nosso servidor. Envie-o lembrando que ele contém os dados da outra pessoa."
          }
        ]
      },
      {
        "title": "Por que nada permanece embora o cálculo rode num servidor",
        "blocks": [
          {
            "p": "Para montar um mapa de saju precisamos de uma tabela do almanaque, grande demais para enviar ao navegador, então o cálculo roda no servidor. Mas **depois que a requisição é tratada, os valores não são usados em nenhum outro lugar.** Não existe código que os grave num banco de dados."
          },
          {
            "p": "O único registro que permanece é um contador que impede uma pessoa de enviar requisições demais em pouco tempo. Ele não contém nenhuma data de nascimento e não guarda o endereço IP como está; conta um único valor, gerado por hash junto com a data, e que muda quando o dia muda."
          }
        ]
      },
      {
        "title": "O que deixamos de ter por não guardar",
        "blocks": [
          {
            "p": "Como nada é guardado, abrimos mão de algumas coisas."
          },
          {
            "ul": [
              "**Você não pode recuperar um resultado de compatibilidade antigo.** É preciso guardar o link para vê-lo de novo.",
              "**As mesmas duas pessoas são recalculadas toda vez.** Não há cache. Mas toda regra é determinística, então [a mesma entrada sempre dá o mesmo valor](/guide/how-compatibility).",
              "**Atualizar a página traz de volta o portão de anúncio.** Não há onde guardar o registro de que você o assistiu."
            ]
          }
        ]
      },
      {
        "title": "Se você comprar um relatório",
        "blocks": [
          {
            "p": "Se você comprar um relatório, um registro da transação é mantido nesse momento: os registros de pagamento têm um prazo de guarda exigido por lei e, sem um histórico de pedidos, não é possível processar um reembolso. Mesmo assim, **as duas datas de nascimento não são anexadas ao pedido**; elas são pedidas de novo quando o PDF é criado após a confirmação do pagamento e usadas apenas naquele momento."
          },
          {
            "p": "Os detalhes estão na [política de privacidade](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produtos Pagos",
    "title": "O que está incluído no relatório pago?",
    "summary": "Isto explica o que foi adicionado ao PDF enquanto mantém a tela inalterada, item por item. Valores e conteúdos são lidos das configurações reais do produto.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "A tela permanece inalterada, apenas adicionada ao PDF",
        "blocks": [
          {
            "p": "Cálculos de compatibilidade e consultas de resultados são **gratuitos**. Taxas de correspondência, pontuações e pesos dos itens, os gráficos originais de saju de ambos os indivíduos e a forma do relacionamento podem ser visualizados na tela. Nada foi removido da tela ao criar o relatório pago."
          },
          {
            "p": "O objetivo do relatório é **adicionar camadas que não estão na tela**. E essa camada não é fabricada; consiste em valores que já foram calculados durante o processo de pontuação, mas que não foram usados na tela."
          }
        ]
      },
      {
        "title": "Relatório de Compatibilidade Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Pagamento doméstico {priceGunghapDomestic} (incluindo IVA), pagamento internacional {priceGunghapGlobal}. A4 {pagesGunghap} páginas."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**As páginas 1-3 estão organizadas para manter o que está na tela** e **a partir da página 4 é conteúdo que não está na tela**. Abaixo, explica por que certas coisas não foram exibidas na tela."
          }
        ]
      },
      {
        "title": "Página 4 — A direção das duas energias",
        "blocks": [
          {
            "p": "Os itens dos cinco elementos na tela são apresentados como uma única pontuação. No entanto, essa única pontuação é a **média das duas direções** — medindo o quanto o outro me preenche e o quanto eu preencho o outro, e fazendo a média desses valores."
          },
          {
            "p": "A complementaridade é inerentemente **assimétrica**. Isso ocorre porque as energias necessárias para mim e as energias necessárias para o outro são diferentes. Se você olhar apenas para a média, um relacionamento em que um lado preenche o outro significativamente e um relacionamento em que ambos se preenchem de maneira equilibrada aparecerão como o mesmo número. O relatório separa esses dois."
          },
          {
            "p": "Também incluído na mesma seção está o **gráfico de relacionamento dos quatro pilares**. O único que entra na taxa de compatibilidade é o ramo do dia (日支) — porque é a posição do cônjuge — mas os outros ramos do ano, mês e hora também podem ser lidos com o mesmo gráfico de relacionamento."
          }
        ]
      },
      {
        "kind": "note",
        "title": "As pontuações nesta tabela não entram na taxa de compatibilidade",
        "blocks": [
          {
            "p": "Se incluído, a pontuação total mudaria e não corresponderia ao link de resultado já enviado. Portanto, é incluído apenas como material de leitura, e esse fato é anotado abaixo da tabela."
          }
        ]
      },
      {
        "title": "Página 5 — Um olhar mais atento ao saju de cada pessoa",
        "blocks": [
          {
            "p": "As barras dos cinco elementos na tela mostram **quanto está presente**. O relatório adiciona **se o mês de nascimento apoia essa energia**. Mesmo com a mesma quantidade, a energia que é forte (旺) e a energia que está morta (死) têm forças diferentes."
          },
          {
            "p": "Você pode ver as forças antes e depois de multiplicar pela energia do mês lado a lado, mostrando quanto a estação a elevou. A **razão de aliados** que distingue entre um tronco do dia forte e um tronco do dia fraco também é anotada — a tela mostra apenas o julgamento, mas o relatório mostra onde esse julgamento foi feito."
          }
        ]
      },
      {
        "title": "Página 6 — O que os quatro pilares da outra pessoa significam para mim",
        "blocks": [
          {
            "p": "A taxa de compatibilidade compara apenas os **troncos do dia** de ambos os indivíduos. No entanto, os outros três pilares da outra pessoa também são determinados pelos Dez Deuses usando as mesmas regras. Embora você possa entender **o que essa pessoa significa para mim** olhando apenas para o tronco do dia, não pode saber **o que a posição dessa pessoa significa para mim**."
          },
          {
            "p": "Como existem direções, ambos os lados são apresentados separadamente. O que eu vejo e o que o outro vê são diferentes."
          }
        ]
      },
      {
        "title": "Página 7 — Como este saju foi calculado",
        "blocks": [
          {
            "p": "Declara quanto o horário de nascimento foi ajustado para o tempo solar verdadeiro, se a correção causou a mudança da data, e quais eram as datas solar e lunar quando o saju foi gerado. O conceito é explicado no documento [Ajustando o horário de nascimento para o tempo solar verdadeiro](/guide/true-solar-time), mas **o valor de quantos minutos foram ajustados no seu caso** varia de pessoa para pessoa, então é incluído apenas no relatório."
          }
        ]
      },
      {
        "title": "Relatório de perfil de compatibilidade Inyeon — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Pagamento doméstico {priceAffinityDomestic} (incluindo IVA), pagamento internacional {priceAffinityGlobal}. A4 {pagesAffinity} páginas."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Esta seção é a **tabela de classificação geral**. A tela mostra apenas os conjuntos que combinam bem, mas o relatório classifica todos os dez troncos celestiais e os doze ramos terrestres **completamente**. Se você olhar apenas para os conjuntos superiores, não saberá 'quem vem a seguir' e 'qual é o menos compatível'."
          }
        ]
      },
      {
        "title": "Coisas a saber antes de comprar",
        "blocks": [
          {
            "p": "**O servidor não armazena arquivos.** Uma vez que o pagamento é aprovado, o documento é gerado e enviado imediatamente, não deixando nada no servidor. O princípio deste serviço de não salvar valores de entrada é mantido mesmo no fluxo pago."
          },
          {
            "p": "Portanto, **salve o arquivo imediatamente após o pagamento.** Você pode receber o mesmo pedido até cinco vezes, mas se você sair da tela de resultados e os valores de entrada desaparecerem, não poderá recriá-lo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Relatórios também são materiais de referência",
        "blocks": [
          {
            "p": "Só porque o comprimento aumentou não significa que a conclusão é mais certa. O que o relatório contém mais é **a base do mesmo cálculo**, não uma afirmação mais forte. A leitura do destino é um campo onde as conclusões podem variar dependendo do praticante, e este serviço apenas calcula o que pode ser traduzido em regras."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Aviso",
    "title": "Anúncios",
    "summary": "Este é um lugar para informar mudanças que afetam o uso.",
    "backLabel": "Voltar para a Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contato",
    "title": "Consultas",
    "summary": "Este é o canal para consultas sobre uso, reembolsos, solicitações de informações pessoais e relatórios de erros, juntamente com informações comerciais.",
    "backLabel": "Voltar para a Home",
    "sections": [
      {
        "title": "Contato por Email",
        "blocks": [
          {
            "p": "Por favor, envie consultas para **{email}**. Responderemos dentro de 2 dias úteis. Para consultas sobre pagamento e reembolso, inclua **o número do pedido ou o email usado para pagamento** para uma confirmação mais rápida."
          },
          {
            "p": "Consultas por telefone podem ser feitas em {customerCenter}."
          }
        ]
      },
      {
        "title": "O que pode ser enviado para este canal?",
        "blocks": [
          {
            "ul": [
              "**Pagamento e Reembolso** — Se o documento não foi criado ou o valor do pagamento difere do pedido, um reembolso total será fornecido. As condições estão na [política de reembolso](/refund-policy).",
              "**Informações Pessoais** — Aceitamos solicitações de visualização, correção e exclusão. A política de processamento está na [política de privacidade](/privacy).",
              "**Relatório de Erro de Cálculo** — Se o gráfico original do saju ou a pontuação parecer estranha, por favor, nos avise. Se você incluir quando inseriu a data e a hora, podemos recalcular com os mesmos valores."
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
              "**Central de Atendimento ao Cliente** — {customerCenter}",
              "**Email** — {email}",
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
            "p": "Você não precisa incluir sua data e hora de nascimento no e-mail de consulta. Não salvamos entradas, então não podemos recuperá-las, e o número do pedido é suficiente para confirmação. Por favor, inclua-o apenas se for necessário para um relatório de erro de cálculo."
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
  "intro": "Mudanças nos seus termos de uso — preços, políticas — são publicadas aqui antes de entrarem em vigor. Melhorias internas não estão listadas: o que aparece aqui é o que você precisa saber.",
  "empty": {
    "title": "Nenhum aviso ainda",
    "body": "Quando algo mudar, aparecerá aqui."
  },
  "effective": "Entra em vigor {date}",
  "pager": {
    "label": "Páginas de aviso",
    "newer": "← Mais novo",
    "older": "Mais antigo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Páginas de Contato e Sobre estão agora abertas",
      "body": [
        "Perguntas, reembolsos, solicitações de privacidade e relatórios de erros de cálculo agora têm um lugar para ir — veja a página de contato no rodapé.",
        "Se algo parecer mal calculado, por favor inclua os detalhes de nascimento que o produziram. Não armazenamos o que você insere, então sem eles não podemos reproduzir a leitura."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Relatórios são emitidos em inglês para árabe e khmer",
      "body": [
        "Se você está lendo em árabe ou khmer, o relatório em PDF que você compra é produzido em inglês. A ferramenta que organiza nossos documentos ainda não consegue definir parágrafos nesses scripts.",
        "A tela permanece no seu idioma, e seu nome é impresso no seu próprio script dentro do relatório.",
        "A mesma nota aparece antes do pagamento. Quando a ferramenta suportar esses scripts, informaremos aqui."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Cada leitura carrega a versão das regras usadas",
      "body": [
        "Cada leitura e relatório carrega o conjunto de regras usado para produzi-lo (por exemplo inyeonlink-match-v10). A mesma entrada no mesmo conjunto de regras sempre dá os mesmos números.",
        "Se mudarmos as regras de interpretação de uma forma que possa alterar uma pontuação, publicaremos isso aqui primeiro, com a data em que entra em vigor — porque um link de resultado que você já possui leria de forma diferente.",
        "O conjunto de regras atual é v10. Os pagamentos ainda não estão abertos."
      ]
    }
  }
} satisfies NoticeCopy;
