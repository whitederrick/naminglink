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
            "p": "Os gráficos são construídos a partir do **almanac lunissolar coreano**, e o horário de nascimento é corrigido para **tempo solar verdadeiro** para o local de nascimento — o mesmo horário de relógio significa uma posição do sol diferente dependendo de onde você nasceu."
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
    "summary": "Inyeon-Link revela todas as regras que utiliza. Você pode verificar os itens e seus pesos, as pontuações da tabela de relações entre ramos e os valores de limite que distinguem entre um dia mestre forte e um dia mestre fraco — você pode ver de onde vêm os números na tela.",
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
                  "Dia do tronco, dia do ramo e os cinco elementos — quatro itens",
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
                  "Relação do Dia Stem",
                  "O que os dia stems (日干) das duas pessoas são um para o outro — visto através dos Dez Deuses",
                  "{weightDayMaster}"
                ],
                [
                  "Complementação dos Cinco Elementos",
                  "O parceiro tem a energia que eu preciso — visto através do elemento de suporte que um gráfico atualmente necessita",
                  "{weightElementSupply}"
                ],
                [
                  "Estrela do Cônjuge",
                  "O dia stem do parceiro corresponde à minha posição de cônjuge?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relação do Dia Branch",
                  "Os dia branches (日支) das duas pessoas são uma combinação ou um choque?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "O dia branch é lido porque a tradição o trata como o **palácio do cônjuge**. Dos quatro pilares, é aquele que aponta para o parceiro, o que faz dele o primeiro lugar que a compatibilidade observa."
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
            "p": "Todas as pontuações são determinadas por regras. Nenhuma inteligência artificial é utilizada, nem números aleatórios são empregados. Portanto, inserir as mesmas duas datas de nascimento várias vezes não resultará em resultados diferentes. Como um serviço que não armazena dados, resultados anteriores não podem ser recuperados, mas **determinismo** compensa isso."
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
    "eyebrow": "Tabela de Relação",
    "title": "Doze Ramos Terrestres — Combinação, Choque, Discórdia",
    "summary": "Esta é uma tabela de relação usada tanto para compatibilidade de dia branch quanto para compatibilidade zodiacal. Ela divulga completamente o que cada combinação, choque e discórdia significa e suas respectivas pontuações.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Os ramos terrestres consistem em doze caracteres",
        "blocks": [
          {
            "p": "Os doze ramos terrestres (十二支) são 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Os signos zodiacais comumente conhecidos estão associados a cada um desses doze caracteres."
          },
          {
            "figure": "branch-wheel",
            "caption": "Arranjar os doze caracteres em um círculo fornece uma visão clara das relações. Um choque sempre está diretamente oposto, enquanto um par de seis-harmonias e uma discórdia silenciosa são vizinhos mais próximos. Essas linhas são derivadas diretamente das regras de cálculo, não escritas no texto.",
            "labels": {
              "alt": "Um diagrama mostrando os doze ramos terrestres dispostos em um círculo com linhas conectando seis-harmonia, choque e discórdia.",
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
              "goat": "Cabra",
              "monkey": "Macaco",
              "rooster": "Galo",
              "dog": "Cão",
              "pig": "Porco"
            }
          },
          {
            "p": "No saju, cada um dos quatro pilares tem um ramo terrestre. O Inyeon-Link utiliza o **ramo do dia** (o palácio do cônjuge) e o **ramo do ano** (o animal do zodíaco) entre eles. Ambas as posições são avaliadas usando a tabela de relacionamento abaixo."
          }
        ]
      },
      {
        "title": "Tabela de Relacionamento Completa",
        "blocks": [
          {
            "table": {
              "caption": "Ordenado pela maior pontuação. Estes são os valores realmente utilizados pelo Inyeon-Link.",
              "head": [
                "Relacionamento",
                "Par Correspondente",
                "Significado",
                "Pontuação"
              ],
              "rows": [
                [
                  "Combinação (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Quando todos os três caracteres se reúnem, eles formam uma formação elemental completa — um **guk** (局). Esta é considerada a combinação mais forte.",
                  "{scoreSamhap}"
                ],
                [
                  "Seis-Harmonia (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pares que se atraem. Esta é a combinação mais comum em compatibilidade, pois consiste em apenas dois caracteres.",
                  "{scoreYukhap}"
                ],
                [
                  "Meia triade (半合)",
                  "Dois caracteres que incluem um ramo real (王地) da triade (子·酉·午·卯)",
                  "Uma meia combinação que inclui o caractere no centro da formação. Não pode formar uma combinação completa com apenas dois caracteres, tornando-a inferior a uma triade completa.",
                  "{scoreBanhap}"
                ],
                [
                  "Mesmo ramo terrestre",
                  "子子 · 丑丑 …",
                  "Caracteres que são iguais. Isso significa que eles se assemelham, mas não implica atração, então é colocado no meio.",
                  "{scoreSame}"
                ],
                [
                  "Neutro",
                  "Pares que não pertencem a nenhum lugar acima ou abaixo",
                  "Uma combinação sem relacionamento especial. Este é o ponto de referência.",
                  "{scoreNeutral}"
                ],
                [
                  "Discórdia silenciosa (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pares que não conseguem se separar apesar de abrigar ressentimento. Eles parecem tranquilos na superfície, mas são considerados duradouros.",
                  "{scoreWonjin}"
                ],
                [
                  "Conflito (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pares que colidem diretamente. Estes são seis pares enfrentando um ao outro.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triades completas não aparecem neste serviço",
        "blocks": [
          {
            "p": "Uma triade completa requer três caracteres para se formar. No entanto, a compatibilidade é estruturada combinando os ramos terrestres de duas pessoas **um a um**, resultando em apenas dois caracteres. Portanto, o que aparece aqui é sempre uma meia triade, e os pontos da triade completa {scoreSamhap} são reservados para quando se examinam as formações dentro de cada saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Meias triades devem incluir um ramo real",
        "blocks": [
          {
            "p": "Há também um método que conta como uma meia triade se ambos os caracteres pertencem ao mesmo grupo de triade. Isso pode levar a altas pontuações mesmo para combinações que são difíceis de chamar de triade, como 申辰. Portanto, este serviço reconhece uma meia triade apenas para pares que incluem um ramo real (王地) (子·酉·午·卯), e combinações como 申辰·巳丑·寅戌·亥未 sem um ramo real não são contadas como triades."
          }
        ]
      },
      {
        "title": "A razão para separar a discórdia silenciosa",
        "blocks": [
          {
            "p": "Os seis pares de discórdia silenciosa são vistos com frequência em compatibilidade, assim como os conflitos. Se contarmos combinações como pares e conflitos, esses seis pares estariam todos enterrados sob pontos neutros {scoreNeutral}, então são colocados separadamente."
          },
          {
            "p": "Enquanto os conflitos são abertos e marcantes, a discórdia silenciosa é sutilmente desalinhada. Portanto, é colocada com uma pontuação de {scoreWonjin}, que é mais alta do que os conflitos ({scoreChung}), mas definitivamente mais baixa do que o neutro ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pontuações também são atribuídas a conflitos",
        "blocks": [
          {
            "p": "A pontuação de conflito mais baixa é {scoreChung}. A intenção não é atribuir um valor próximo de 0. Na tradição, um conflito não é um 'fim', mas uma 'colisão', e atribuir uma pontuação baixa implicaria que o serviço está fazendo uma declaração definitiva sobre o relacionamento."
          },
          {
            "p": "Com um mínimo de {scoreChung} e um máximo de {scoreSamhap}, a faixa é clara, mas não faz uma conclusão definitiva."
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
            "p": "A compatibilidade zodiacal conta para {weightZodiac} da taxa final de correspondência. Enquanto a compatibilidade do saju analisa todos os quatro pilares, o zodíaco considera apenas um caráter, portanto, não podem ser ponderados igualmente."
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
  "guide/ten-gods": {
    "eyebrow": "Dez Deuses",
    "title": "Dez Deuses e Posição do Cônjuge",
    "summary": "Analisamos o que cada tronco do dia é um para o outro através dos Dez Deuses. Explicamos por que a riqueza direta e a riqueza indireta são lidas de maneira diferente, mesmo que ambas sejam riqueza.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "O dia do tronco é a própria pessoa",
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
        "title": "O que o tronco do dia de cada pessoa é para os outros",
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
            "p": "Mesmo que sejam o mesmo recurso, apenas a **Riqueza Adequada** emocional é considerada a posição do cônjuge, enquanto o Recurso é lido como a natureza da atividade e da riqueza. Portanto, Riqueza Adequada e Funcionário Adequado contam como 2 pontos, enquanto Recurso e Funcionário contam como 1 ponto, e ambas as direções são somadas — se ambas são vistas como posições de cônjuge, é a mais alta."
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
            "p": "Além da pontuação, descrevemos **qual forma** o par de ramos do dia tem na tela de resultados. Se são posições semelhantes, se um lado apoia o outro, ou se um lado é suprimido — se é uma relação de apoio ou supressão, esclarecemos qual lado ocupa essa posição."
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
    "summary": "Vemos os cinco elementos não como 'eles escolheram dois', mas como 'o contraparte tem o que eu preciso'. Também divulgamos o valor limite que distingue um dia mestre forte de um fraco.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Se os cinco elementos estão 'equilibrados' não é uma questão de compatibilidade",
        "blocks": [
          {
            "p": "Há um método de medir se as cinco energias estão distribuídas de maneira uniforme, combinando os cinco elementos das duas pessoas. No entanto, a questão da compatibilidade não é essa. **O contraparte tem o que eu preciso?**"
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
            "p": "O Elemento de Apoio (用神) é 'a energia que esta pessoa precisa agora'. Existem vários métodos para determiná-lo (supressão, apoio, doença e comunicação), mas pode ser traduzido em regras, e o mais amplamente utilizado é **supressão (抑扶)**. Se o dia mestre é forte, vê-se que a energia a ser reduzida é necessária, e se fraco, a energia a ser adicionada é necessária."
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
                  "Dia mestre forte (身强)",
                  "Energia diminuindo — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Três"
                ],
                [
                  "Dia mestre fraco (身弱)",
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
            "p": "O lado do ramo do dia é **印星 e 比劫** — a energia que me dá vida e a energia que é como eu. Como dois em cinco, se a energia estiver completamente equilibrada, torna-se {evenAllyRatio}. Um intervalo é definido acima e abaixo desse valor."
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
                  "Dia mestre forte"
                ],
                [
                  "{weakThreshold} ou mais e menos que {strongThreshold}",
                  "Equilibrado"
                ],
                [
                  "Menos que {weakThreshold}",
                  "Dia mestre fraco"
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
            "p": "Ao contar o poder dos cinco elementos, não contamos simplesmente os oito caracteres como aparecem. Usamos um valor que reflete os ramos celestiais ocultos (地藏干) dentro dos ramos terrestres e a estação da energia do mês (月令) em que alguém nasceu."
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
                  "Relação do dia stem · Natureza conjugal",
                  "Os day stems de ambas as pessoas — heavenly stems",
                  "10"
                ],
                [
                  "Complemento dos cinco elementos",
                  "Meu elemento de apoio e o poder dos cinco elementos do oponente",
                  "5"
                ],
                [
                  "Relação do day branch",
                  "os day branches das duas pessoas",
                  "12"
                ],
                [
                  "Relação do zodíaco",
                  "os year branches das duas pessoas",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Como os valores não se trocam entre os itens, **encontrar o ponto mais alto para cada branch será o ponto mais alto geral**. Não há necessidade de verificar todas as combinações de datas de nascimento — apenas definir os dez heavenly stems, doze earthly branches e cinco elementos é suficiente."
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
            "p": "Esta é a decisão mais importante nesta tela. Coletar as pontuações mais altas para cada branch pode parecer resultar em uma 'combinação perfeita', mas essa pessoa pode **não existir realmente.**"
          },
          {
            "p": "Em pessoas reais, o day master e os cinco elementos não operam separadamente. Uma pessoa com 甲木 geralmente tem uma forte energia de 木 também. Este método de contar branches separadamente ignora essa correlação, então o valor obtido ao conectar as pontuações mais altas para cada branch se torna uma combinação que não existe na realidade."
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
            "p": "As razões pelas quais certos tipos pontuaram alto também são anotadas item por item — se o day master está em uma posição favorável, ou se essa pessoa possui a energia que eu atualmente preciso."
          }
        ]
      },
      {
        "title": "Ferramenta de confirmação",
        "blocks": [
          {
            "p": "Você pode estar curioso se a pessoa que tem em mente corresponde a esse tipo. Ao inserir a data de nascimento deles na ferramenta de confirmação na tela de resultados, você será informado sobre seu day master, day branch e year branch. Os valores inseridos não são salvos neste momento [(não salvos)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Hora",
    "title": "Converter a hora de nascimento para o verdadeiro tempo solar",
    "summary": "O horário padrão e a posição real do sol diferem. O tempo deve ser corrigido com base na longitude do local de nascimento para abordar por que o pilar de tempo é preciso.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "O tempo no relógio e o tempo do sol são diferentes",
        "blocks": [
          {
            "p": "O pilar de tempo (時柱) do saju é determinado pela posição do sol. No entanto, o relógio que vemos usa um único horário padrão para todo o país, o que causa uma discrepância com a posição real do sol."
          },
          {
            "p": "O horário padrão da Coreia é baseado na longitude de 135° leste. Como a longitude de Seul é cerca de 127°, está aproximadamente 8° a oeste, fazendo com que o sol atinja seu zênite mais tarde — quando é meio-dia no relógio, o sol em Seul ainda não atingiu seu zênite. Essa diferença é de cerca de **32 minutos**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutos mudam o pilar de tempo por um slot",
        "blocks": [
          {
            "p": "O tempo em saju é dividido em unidades de duas horas. Aqueles nascidos perto da fronteira terão seu pilar de tempo completamente alterado por uma diferença de 32 minutos — essa correção é necessária devido àqueles que caem exatamente nessa fronteira."
          }
        ]
      },
      {
        "title": "Por que pedimos o local de nascimento",
        "blocks": [
          {
            "p": "Se a longitude for diferente, o valor da correção também diferirá. Aplicar a correção baseada em Seul a alguém nascido no exterior resultará em uma discrepância significativa no pilar de tempo. Portanto, a tela de entrada exige que você selecione seu local de nascimento, e o cálculo é baseado na longitude e no horário padrão daquela cidade. Atualmente, há {cityCount} lugares na lista."
          },
          {
            "p": "Em lugares onde a longitude varia muito mesmo dentro do mesmo país (como os EUA, Rússia, Indonésia, etc.), as cidades foram divididas. **15° de longitude equivalem a um slot de pilar de tempo**."
          },
          {
            "p": "Se você não selecionar, o cálculo será baseado em Seul. Como a maioria dos nascimentos é nacional, isso reduz a chance de erro, mas se você nasceu no exterior, por favor, certifique-se de selecionar."
          }
        ]
      },
      {
        "title": "O horário padrão mudou várias vezes no passado",
        "blocks": [
          {
            "p": "Há uma razão pela qual a correção não pode ser calculada simplesmente como 'diferença de longitude ÷ 15° × 60 minutos'. O horário padrão em si variou ao longo de diferentes épocas."
          },
          {
            "table": {
              "caption": "Mudanças no horário padrão da Coreia — aqueles nascidos neste período terão discrepâncias com cálculos simples",
              "head": [
                "Período",
                "O que era diferente"
              ],
              "rows": [
                [
                  "Antes de 1912",
                  "Não havia horário padrão (horário médio local)"
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
            "p": "Inyeon-Link não usa um valor fixo para o meridiano padrão, mas calcula o horário padrão que foi realmente utilizado naquela época com base nas informações de **fuso horário IANA** do local de nascimento. O horário de verão e os horários padrão passados são automaticamente refletidos."
          }
        ]
      },
      {
        "title": "Nascimentos logo após a meia-noite também consideram a data",
        "blocks": [
          {
            "p": "Como a correção é de -32 minutos, aqueles nascidos entre 00:00 e 00:32 pelo relógio serão **23:00 do dia anterior** em horário solar verdadeiro. Se apenas a hora for revertida e a data permanecer inalterada, será escrito o pilar do dia como '23:00 do dia anterior'."
          },
          {
            "p": "Inyeon-Link também reverterá a data neste caso. O pilar do dia indica a própria pessoa no saju, então se isso estiver incorreto, quase todos os itens de compatibilidade estarão incorretos."
          }
        ]
      },
      {
        "title": "Você não precisa saber a hora",
        "blocks": [
          {
            "p": "A hora de nascimento é opcional. Se você não souber, o cálculo será feito sem o pilar do tempo, e esse fato será exibido na tela de resultados. Não há itens na compatibilidade que exijam que o pilar do tempo seja escrito diretamente, mas ele influencia os cinco elementos, então se você souber, é mais preciso incluí-lo."
          },
          {
            "p": "A compatibilidade zodiacal é sempre o mesmo valor, independentemente da hora — [porque só considera o ramo do ano](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informações Pessoais",
    "title": "Método de não armazenamento de informações inseridas",
    "summary": "Isto explica o que significa tecnicamente que sua data de nascimento não é registrada em nenhum lugar e o que está incluído no link de resultado.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Nenhuma associação necessária",
        "blocks": [
          {
            "p": "Inyeon-Link não cria contas. Não coleta nomes, e-mails ou números de telefone. A única informação coletada é a data de nascimento e (opcionalmente) a hora de nascimento, local de nascimento e gênero, e mesmo isso não permanece após a conclusão do cálculo."
          },
          {
            "p": "Há um campo para inserir um título a ser exibido na tela de resultados, mas isso é **apenas para fins de exibição** e não é utilizado no cálculo. Você não precisa inserir seu nome verdadeiro."
          }
        ]
      },
      {
        "title": "O que está incluído no link de resultado?",
        "blocks": [
          {
            "p": "Uma vez que o cálculo esteja completo, o endereço fica assim."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "O que segue **#** são os valores de entrada. Esta parte é chamada de **fragmento**, que é uma **seção que o navegador não envia ao servidor**. Este é um comportamento padrão da web e não uma regra que criamos — foi originalmente projetado para indicar uma localização dentro de um documento, então o servidor não tem necessidade de vê-lo."
          },
          {
            "p": "Em outras palavras, quando você abre o link de resultado, o navegador lê esse valor para solicitar o cálculo, e nosso servidor recebe os valores necessários para o cálculo, retorna a resposta e então esquece."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por favor, tenha cuidado ao enviar links para outros",
        "blocks": [
          {
            "p": "O fato de que não é armazenado no servidor e que o link é seguro não são a mesma coisa. O link de resultado contém ambas as suas datas de nascimento, então a pessoa que receber esse link pode ver o mesmo resultado."
          }
        ]
      },
      {
        "title": "Por que o cálculo é feito no servidor, mas não é armazenado?",
        "blocks": [
          {
            "p": "O cálculo em si é feito no servidor. O calendário lunissolar coreano é necessário para gerar o saju, e essa tabela é grande demais para ser enviada ao navegador. No entanto, **após processar a solicitação, esse valor não é usado em nenhum lugar.** Não há código para armazená-lo em um banco de dados."
          },
          {
            "p": "Um registro mínimo necessário para operação é mantido — um contador para evitar que a mesma pessoa envie muitas solicitações em um curto período de tempo. Isso não inclui a data de nascimento, e o IP de acesso também não é retido. Apenas um valor, hash com a data, é contado, e esse valor muda quando o dia muda."
          }
        ]
      },
      {
        "title": "Coisas que não podem ser feitas porque as informações não são armazenadas",
        "blocks": [
          {
            "p": "Para ser honesto, há coisas que desistimos porque não armazenamos informações."
          },
          {
            "ul": [
              "**Você não pode recuperar resultados passados.** Você precisa ter o link para visualizá-los novamente.",
              "**Os mesmos valores serão recalculados.** Não há cache. No entanto, como todas as regras são determinísticas, [a mesma entrada sempre produzirá o mesmo valor](/guide/how-compatibility).",
              "**Atualizar trará de volta o portão de anúncios.** Isso ocorre porque não há lugar para manter registros de visualização."
            ]
          }
        ]
      },
      {
        "title": "Em caso de compra",
        "blocks": [
          {
            "p": "Se você comprar um relatório, um registro de transação será mantido naquele momento. A lei especifica um período de retenção para pagamentos, e sem um histórico de pedidos, reembolsos não podem ser processados. No entanto, mesmo assim, **a data de nascimento usada para cálculos de compatibilidade não se anexa ao pedido** — ela é coletada novamente ao criar o PDF após a confirmação do pagamento."
          },
          {
            "p": "Os detalhes estão descritos na [Política de Privacidade](/privacy)."
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
            "p": "Você pode ver as forças antes e depois de multiplicar pelo lado da energia do mês lado a lado, mostrando quanto a estação a elevou. A **razão de aliados** que distingue entre um dia mestre forte e um dia mestre fraco também é anotada — a tela mostra apenas o julgamento, mas o relatório mostra onde esse julgamento foi feito."
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
            "p": "Declara quanto o horário de nascimento foi ajustado para o verdadeiro horário solar, se a correção causou a mudança da data, e quais eram as datas solar e lunar quando o saju foi gerado. O conceito é explicado no documento [Ajustando o horário de nascimento para o verdadeiro horário solar](/guide/true-solar-time), mas **o valor de quantos minutos foram ajustados no seu caso** varia de pessoa para pessoa, então é incluído apenas no relatório."
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
