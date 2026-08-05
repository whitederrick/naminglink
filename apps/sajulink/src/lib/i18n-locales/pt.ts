// 사주링크 화면 사전의 Portuguese (Português)(pt) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const pt: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Seus Quatro Pilares, lidos a partir de uma data de nascimento",
  "currentLanguage": "Idioma atual",
  "moreLanguages": "Mais",
  "closeLanguages": "Fechar",
  "landing": {
    "title": "Os oito caracteres\ndos quais você nasceu",
    "subtitle": "Tudo que você precisa é de uma data de nascimento.\nConstruímos seu gráfico de Saju (Quatro Pilares), pesamos os cinco elementos e lemos a força do seu dia mestre.",
    "cta": "Veja meu Saju",
    "howTitle": "Como funciona",
    "steps": [
      "Insira sua data de nascimento. A hora de nascimento é opcional.",
      "O ano, mês, dia e hora do seu nascimento se tornam oito caracteres — seu gráfico natal. A partir disso, lemos o peso de cada elemento e a força do seu dia mestre.",
      "O pilar de hoje é colocado contra esse gráfico para lhe dar a sorte de hoje também."
    ],
    "privacyTitle": "Nada que você insira é armazenado",
    "privacyBody": "As datas de nascimento são usadas apenas enquanto o resultado está sendo calculado e nunca são registradas. Nenhuma conta é necessária. Nada contido em um link de resultado é enviado para o servidor.",
    "disclaimer": "Esta é uma leitura tradicional de Saju oferecida para referência. Não é uma previsão científica ou um veredicto sobre o futuro de ninguém."
  },
  "form": {
    "title": "Sua data de nascimento",
    "description": "Saber a hora de nascimento torna a leitura mais precisa, mas não é obrigatório.",
    "meLegend": "Sobre você",
    "nickname": "Como chamá-lo",
    "nicknamePlaceholder": "ex: Eu",
    "nicknameHint": "Exibido apenas na tela de resultados. Não é utilizado no cálculo.",
    "gender": "Gênero",
    "male": "Masculino",
    "female": "Feminino",
    "genderUnspecified": "Prefiro não dizer",
    "genderHint": "A leitura tradicional de Saju analisa as posições do cônjuge e dos filhos de forma diferente por gênero. Se você pular isso, esses fatores serão excluídos do cálculo.",
    "birthplace": "Local de nascimento",
    "birthplaceHint": "O pilar da hora é calculado a partir do horário solar verdadeiro no seu local de nascimento. Se seu local de nascimento não estiver listado, escolha a cidade mais próxima.\nDentro da Coreia continental, a diferença entre as cidades é inferior a dois minutos. O horário de verão e as mudanças históricas de fuso horário também são refletidos.",
    "calendar": "Calendário",
    "solar": "Solar",
    "lunar": "Lunar",
    "leapMonth": "Mês bissexto",
    "birthDate": "Data de nascimento",
    "year": "Ano",
    "month": "Mês",
    "day": "Dia",
    "birthTime": "Hora de nascimento",
    "unknownTime": "Não sei a hora",
    "hour": "Hora",
    "minute": "Minuto",
    "submit": "Assistir anúncio e ver meu Saju",
    "submitNoAd": "Ver meu Saju",
    "submitting": "Calculando…",
    "errorInvalidDate": "Por favor, verifique a data de nascimento. Para datas lunares, verifique também se cai em um mês bissexto.",
    "errorGeneric": "O cálculo falhou. Por favor, tente novamente em um momento."
  },
  "reading": {
    "chartTitle": "Seu mapa natal",
    "chartHint": "O Saju representa o ano, mês, dia e hora de nascimento como dois caracteres cada. Tudo abaixo é lido a partir desses oito caracteres.",
    "pillarYear": "Ano",
    "pillarMonth": "Mês",
    "pillarDay": "Dia",
    "pillarHour": "Hora",
    "pillarHourUnknown": "Hora de nascimento não informada",
    "dayMasterLabel": "Dia mestre",
    "animalLabel": "Zodíaco",
    "seasonLabel": "Energia da estação de nascimento",
    "elementsTitle": "Força elemental",
    "strongest": "Mais forte",
    "scarcest": "Mais escasso",
    "strengthTitle": "O que você trouxe ao nascer",
    "cautionTitle": "O que observar",
    "bodyStrengthTitle": "Força do dia-mestre",
    "favorableLabel": "O que você precisa agora"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Dia mestre forte",
      "body": "Os elementos que apoiam seu dia mestre estão em abundância. Isso lhe dá impulso próprio, mas também tende a inclinar-se facilmente para um lado — você tende a se acomodar quando algo remove o excesso."
    },
    "BALANCED": {
      "name": "Dia mestre equilibrado",
      "body": "O que apoia seu dia mestre e o que dele se retira estão quase iguais. Muito próximo para decidir de qualquer forma, então aqui lemos o que está mais fraco como o que você precisa."
    },
    "WEAK": {
      "name": "Dia mestre fraco",
      "body": "Os elementos que apoiam seu dia mestre estão escassos. Você pega força ao seu redor bem, mas se desgasta ao tentar se manter sozinho — você se destaca quando algo o apoia."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Companheiro (比肩)",
      "body": "A energia que está ombro a ombro com você. Espessa, dá a você a força para se manter firme e reivindicar sua parte primeiro."
    },
    "GEOPJAE": {
      "name": "Rival (劫財)",
      "body": "Energia que se assemelha a você, mas funciona de maneira diferente. Ela empresta força a um empurrão, mas em excesso o que você possui tende a se dispersar."
    },
    "SIKSIN": {
      "name": "Expressão (食神)",
      "body": "A energia que traz o que está em você para fora no mundo. A expressão e o prazer simples de viver vêm daqui; onde ela está, há facilidade."
    },
    "SANGGWAN": {
      "name": "Perturbador (傷官)",
      "body": "A energia que desestabiliza uma estrutura fixa. Ela concede talento e uma borda afiada, mas em excesso colide com regras e hierarquia."
    },
    "PYEONJAE": {
      "name": "Sorte Repentina (偏財)",
      "body": "Energia de riqueza ampla. Ativa e generosa com o que possui, traz oportunidades de lugares inesperados."
    },
    "JEONGJAE": {
      "name": "Riqueza Estável (正財)",
      "body": "Energia de riqueza estável, acumulada aos poucos. A Saju tradicional também a lê como a posição do cônjuge para um homem."
    },
    "PYEONGWAN": {
      "name": "Desafiante (偏官)",
      "body": "A energia que o mantém alerta e ereto. Você se torna forte sob pressão, embora em excesso isso o faça sentir-se sempre perseguido."
    },
    "JEONGGWAN": {
      "name": "Autoridade (正官)",
      "body": "A energia da ordem que o coloca em linha. Ela mantém seu nome e posição; a Saju tradicional também a lê como a posição do cônjuge para uma mulher."
    },
    "PYEONIN": {
      "name": "Apoio Não Convencional (偏印)",
      "body": "Energia que o apoia por um caminho incomum. Ela concede o poder de cavar fundo, mas em excesso o pensamento corre à frente da ação."
    },
    "JEONGIN": {
      "name": "Nutrição (正印)",
      "body": "A energia que o acolhe e o cria. Ela oferece aprendizado e algo em que se apoiar; em excesso, a iniciativa própria chega tarde."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Madeira Yang (甲)",
      "trait": "Uma árvore alta crescendo reta. Uma vez que a direção é definida, não vacila, e prefere suportar a dobrar."
    },
    "乙": {
      "name": "Madeira Yin (乙)",
      "trait": "Uma videira — grama flexível. Ela se curva às circunstâncias para continuar se movendo, e não se quebra."
    },
    "丙": {
      "name": "Fogo Yang (丙)",
      "trait": "O sol do meio-dia. Os sentimentos se mostram claramente, o ambiente se ilumina, e avançar vem naturalmente."
    },
    "丁": {
      "name": "Fogo Yin (丁)",
      "trait": "Luz de vela. Queima silenciosamente e por muito tempo, aquecendo primeiro os mais próximos."
    },
    "戊": {
      "name": "Terra Yang (戊)",
      "trait": "Terreno aberto e montanhas. Difícil de abalar e fácil de se apoiar, embora lenta para mudar uma decisão uma vez tomada."
    },
    "己": {
      "name": "Terra Yin (己)",
      "trait": "Solo de campo. Aceita o que vem e o cultiva, cuidando em vez de exibir."
    },
    "庚": {
      "name": "Metal Yang (庚)",
      "trait": "Ferro não trabalhado. Decisivo e claro, com pouca paciência para coisas deixadas pendentes."
    },
    "辛": {
      "name": "Metal Yin (辛)",
      "trait": "Uma gema lapidada. Sabor refinado e altos padrões; descuidos são difíceis de deixar passar."
    },
    "壬": {
      "name": "Água Yang (壬)",
      "trait": "Rio e mar. Amplo em perspectiva, com um olhar para como as coisas estão fluindo."
    },
    "癸": {
      "name": "Água Yin (癸)",
      "trait": "Orvalho e chuva. Penetra silenciosamente e lê o clima antes das palavras."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Diz o que pensa mesmo em um primeiro encontro.",
      "Raramente muda um plano ou uma promessa uma vez estabelecida.",
      "Recusa as coisas de forma direta, o que pode soar brusco."
    ],
    "乙": [
      "Evita confrontos e toma outro caminho.",
      "Parece suave, mas acaba onde pretendia ir.",
      "Lê o ambiente antes de se juntar a um grupo."
    ],
    "丙": [
      "Fala primeiro com pessoas que acabou de conhecer.",
      "O que gosta e não gosta aparece em seu rosto.",
      "Acaba no centro de um encontro sem tentar."
    ],
    "丁": [
      "Quieto no início, atencioso quando você se aproxima.",
      "Prefere uma conversa longa com uma ou duas pessoas do que com uma multidão.",
      "Lembra de um comentário passageiro e o menciona mais tarde."
    ],
    "戊": [
      "Fala pouco; sua voz raramente sobe mesmo quando as coisas são urgentes.",
      "Aquele que resolve no final enquanto os outros adiam a decisão.",
      "Um não, uma vez dado, permanece não por muito tempo."
    ],
    "己": [
      "Escuta mais do que fala.",
      "Tem dificuldade em recusar, então o trabalho se acumula.",
      "O que cuidou silenciosamente só aparece mais tarde."
    ],
    "庚": [
      "Decide rápido e diz isso na hora.",
      "Não suaviza as coisas, o que pode soar frio.",
      "Visivelmente inquieto quando algo se arrasta."
    ],
    "辛": [
      "Tem padrões claros sobre roupas e as coisas que escolhe.",
      "Não consegue deixar um trabalho mal feito passar sem apontar.",
      "Econômico com elogios, mas definitivo quando realmente o faz."
    ],
    "壬": [
      "Mistura-se facilmente com todos os tipos de pessoas.",
      "Menciona o que vem depois antes do que está à sua frente.",
      "Fica incomodado por estar preso a um lugar por muito tempo."
    ],
    "癸": [
      "Fala pouco, mas leu a situação exatamente.",
      "Primeiro a notar quando o clima muda.",
      "Mantém sua vida interior próxima, então leva tempo para conhecê-los."
    ]
  },
  "animalTraits": {
    "rat": "Rápido para perceber e rápido para garantir o que importa. Primeiro a agir em uma crise.",
    "ox": "Lento para olhar, mas vê as coisas até o fim. O que assume, não solta.",
    "tiger": "Destemido e à frente. Não pode deixar a injustiça passar.",
    "rabbit": "Gentil e perceptivo. Sabe como contornar em vez de colidir.",
    "dragon": "De coração grande e altos ideais. Raramente satisfeito com o comum.",
    "snake": "Mantém seus próprios conselhos e pensa profundamente. Julga com precisão.",
    "horse": "Brilhante e inquieto. Estar cercado é a coisa mais difícil.",
    "goat": "Caloroso e atencioso. Guarda palavras duras por muito tempo.",
    "monkey": "Inventivo e rápido para se adaptar. Entediado com a repetição.",
    "rooster": "Diligente e exigente. Não pode deixar nada fora do lugar.",
    "dog": "Leal até o fim uma vez que a confiança é dada. A traição dói especialmente.",
    "pig": "Generoso e direto. Confia facilmente, às vezes a um custo."
  },
  "result": {
    "title": "Sua leitura de Saju",
    "recalculate": "Começar de novo",
    "copyLink": "Copiar link do resultado",
    "copied": "Copiado",
    "missingInput": "Este resultado não pôde ser lido. Por favor, insira as datas novamente.",
    "partialTime": "Nenhum horário de nascimento foi fornecido, então o pilar da hora foi deixado de fora. Adicioná-lo torna a leitura mais precisa.",
    "engineVersion": "Calculado com",
    "disclaimer": "Esta é uma leitura tradicional de Saju oferecida como referência. Não é uma previsão científica ou um veredicto sobre seu futuro."
  },
  "today": {
    "menu": "A sorte de hoje",
    "title": "A sorte de hoje",
    "pillarLabel": "O pilar de hoje",
    "scoreLabel": "A pontuação de hoje",
    "grades": {
      "DAEGIL": {
        "name": "Muito auspicioso",
        "body": "A energia de hoje encontra seu gráfico no melhor ângulo. Um bom dia para retomar o que você tem adiado."
      },
      "GIL": {
        "name": "Auspicioso",
        "body": "A corrente flui com você hoje. O que você normalmente faz flui mais facilmente do que o habitual."
      },
      "PYEONG": {
        "name": "Neutro",
        "body": "Nada o empurra e nada o bloqueia. Faça como de costume e você obterá o que costuma obter."
      },
      "JUUI": {
        "name": "Cuidado",
        "body": "Parte da energia de hoje vai contra seu gráfico. É melhor gastar tempo finalizando coisas do que começando novas."
      },
      "JOSIM": {
        "name": "Cuidado ao pisar",
        "body": "A energia de hoje pressiona seu gráfico. Se uma decisão pode esperar, deixe-a esperar."
      }
    },
    "categories": {
      "wealth": "Dinheiro",
      "love": "Amor",
      "career": "Trabalho",
      "health": "Saúde"
    },
    "luckyTitle": "Mantenha isso por perto hoje",
    "luckyElement": "Elemento",
    "luckyColor": "Cor",
    "luckyDirection": "Direção",
    "luckyTime": "Horas",
    "luckyNumber": "Números",
    "luckyColors": {
      "TEAL": "verde-azulado",
      "GREEN": "verde",
      "RED": "vermelho",
      "ORANGE": "laranja",
      "YELLOW": "amarelo",
      "OCHRE": "ocre",
      "WHITE": "branco",
      "GOLD": "dourado",
      "BLACK": "preto",
      "NAVY": "azul-marinho"
    },
    "luckyDirections": {
      "EAST": "Leste",
      "SOUTH": "Sul",
      "CENTER": "Centro",
      "WEST": "Oeste",
      "NORTH": "Norte"
    },
    "basisTitle": "De onde vem essa pontuação",
    "factors": {
      "TODAY_IS_YONGSIN": "O elemento de hoje é o que seu gráfico precisa",
      "TODAY_GENERATES_YONGSIN": "O elemento de hoje alimenta o que seu gráfico precisa",
      "TODAY_IS_GISIN": "O elemento de hoje pressiona ainda mais o lado que já está cheio",
      "TODAY_CONTROLS_YONGSIN": "O elemento de hoje segura o que seu gráfico precisa",
      "TODAY_GENERATES_SELF": "O elemento de hoje apoia seu dia mestre",
      "TODAY_SAME_ELEMENT": "O elemento de hoje é o mesmo que seu dia mestre",
      "SELF_GENERATES_TODAY": "Seu dia mestre flui para o elemento de hoje",
      "TODAY_CONTROLS_SELF": "O elemento de hoje segura seu dia mestre",
      "SELF_CONTROLS_TODAY": "Seu dia mestre segura o elemento de hoje",
      "WEAK_HELPED": "Um dia mestre fraco recebe força hoje",
      "STRONG_OVERFED": "Um dia mestre forte se torna mais pesado hoje",
      "STRONG_DRAINED": "Um dia mestre forte é ajustado para um melhor equilíbrio hoje",
      "WEAK_BURDENED": "Um dia mestre fraco recebe mais carga hoje",
      "BRANCH_SAMHAP": "O ramo de hoje forma um trígono completo com seu gráfico",
      "BRANCH_BANHAP": "O ramo de hoje forma um meio trígono com seu gráfico",
      "BRANCH_YUKHAP": "O ramo de hoje forma uma harmonia de seis com seu gráfico",
      "BRANCH_SAME": "O ramo de hoje é o mesmo que um em seu gráfico",
      "BRANCH_NEUTRAL": "O ramo de hoje não tem ligação particular com seu gráfico",
      "BRANCH_WONJIN": "O ramo de hoje está em discordância silenciosa com seu gráfico",
      "BRANCH_CHUNG": "O ramo de hoje colide com seu gráfico"
    },
    "bookmarkHint": "Não armazenamos sua data de nascimento, então ela precisa ser inserida novamente a cada vez. **Adicione este link de resultado aos favoritos** e ele abrirá a sorte daquele dia todos os dias.",
    "disclaimer": "A sorte de hoje transforma a relação entre o pilar do dia e seu gráfico em uma pontuação. É uma nota sobre como passar o dia, não uma profecia."
  },
  "ads": {
    "label": "Anúncio"
  },
  "analyzing": {
    "title": "Construindo seu gráfico",
    "quotes": [
      "Saju não é uma resposta fixa. É uma linguagem para entender a si mesmo.",
      "Saber com o que você nasceu e viver isso são duas coisas diferentes.",
      "Uma posição forte é uma questão de uso; uma fraca, uma questão de preenchimento.",
      "Os mesmos oito caracteres fazem um dia diferente dependendo de como você os lê.",
      "Melhor do que esperar por um bom dia é saber como usar o que você tem.",
      "A posição que as pessoas chamam de fraqueza é geralmente onde o maior crescimento acontece.",
      "Alguma energia a estação empurra para frente; algumas você tem que criar por conta própria.",
      "O que importa mais do que a pontuação é como você a lê.",
      "A sorte de hoje é o clima de um dia, não o clima onde você vive.",
      "Conhecer seu Saju significa ver a si mesmo, não ver à frente."
    ],
    "watching": "Assistindo ao anúncio",
    "remaining": "Seu resultado será aberto em {seconds}s"
  },
  "reportDetail": {
    "depthTitle": "Um olhar mais atento para o seu gráfico",
    "vitalityTitle": "O que a estação impulsiona",
    "vitalityHint": "As barras indicam quanto de um elemento existe; esta tabela diz se o mês de nascimento o impulsiona. A mesma quantidade carrega força diferente em wang do que em sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "em seu ponto mais forte"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "seguido em força"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "descansando após seu turno"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "preso, difícil de mover"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "em seu ponto mais fraco"
      }
    },
    "rawLabel": "Antes da estação",
    "strengthLabel": "Após a estação",
    "earthSeasonNote": "Nascido em um mês de transição (辰未戌丑), então a terra também é contada como wang.",
    "allyRatioLabel": "Proporção de aliados",
    "allyRatioHint": "A parte mantida pelas estrelas de recurso e companheiro combinadas. Acima de 45% é forte, abaixo de 35% é fraco. O número é impresso para que você possa ver quão próxima foi a decisão.",
    "stemGodsTitle": "O que cada pilar é para você",
    "stemGodsHint": "Medido a partir do seu dia mestre, cada tronco restante recebe um dos nomes dos dez deuses. Quais deles são mais abundantes dizem muito sobre o temperamento.",
    "pillarColumn": "Pilar",
    "tenGodColumn": "Dez deuses",
    "meaningColumn": "O que isso significa",
    "yearOutlookTitle": "Perspectiva deste ano",
    "factorsTitle": "De onde vem a pontuação de hoje",
    "factorsHint": "A tela nomeia os fatores; aqui cada um é impresso com os pontos que adicionou ou removeu.",
    "deltaColumn": "Pontos",
    "appendixTitle": "Como este gráfico foi construído",
    "timeCorrectionLabel": "Hora de nascimento",
    "timeCorrectionApplied": "Corrigido para o horário solar verdadeiro e lido como {time}.",
    "timeCorrectionNone": "Nenhuma hora de nascimento foi fornecida, então o pilar da hora foi deixado de fora.",
    "timeCorrectionDateShift": "A correção moveu a data para {date}, então o pilar daquele dia foi usado.",
    "calendarLabel": "Data em que o gráfico foi gerado",
    "solarLabel": "Solar",
    "lunarLabel": "Lunar",
    "lunarUnavailable": "Esta data não está na tabela do almanaque, então nenhuma data lunar é mostrada."
  },
  "report": {
    "title": "Mantenha sua leitura de vida como um PDF",
    "body": "Transformamos esta leitura em um PDF — seu mapa natal, o peso dos cinco elementos, a força do seu dia master e o que ele precisa agora, e a sorte de hoje, tudo em uma página.",
    "buyButton": "Pague {price} e baixe",
    "preparing": "Ainda não disponível",
    "ordering": "Criando seu pedido…",
    "paying": "Processando pagamento…",
    "issuing": "Preparando seu relatório…",
    "done": "Baixado. Use o botão abaixo para baixá-lo novamente.",
    "failed": "O pagamento ou download falhou. Por favor, tente novamente em um momento.",
    "retry": "Baixar novamente",
    "contents": [
      "Seu dia master e temperamento — um resumo, forças e precauções",
      "Seu mapa natal — os oito caracteres dos quatro pilares",
      "O peso dos cinco elementos, o mais forte e o mais fraco",
      "A força do seu dia master, e a energia que ele precisa agora",
      "A sorte de hoje e os quatro domínios (dinheiro, amor, trabalho, saúde)"
    ],
    "consentLabel": "Entendo que este é um conteúdo digital entregue imediatamente após o pagamento, e que **a retirada por simples mudança de ideia é restrita uma vez que o download é concluído**.",
    "consentRequired": "Por favor, confirme os termos de retirada antes de pagar.",
    "productInfoTitle": "Informações do produto",
    "productInfo": [
      [
        "Fornecedor",
        "{brand}"
      ],
      [
        "Formato",
        "Um documento PDF (5 páginas A4), baixado na tela logo após o pagamento."
      ],
      [
        "Requisitos",
        "Qualquer dispositivo que abra um PDF. Nenhuma instalação ou conta necessária."
      ],
      [
        "Prazo de uso",
        "Sem limite. Você mantém o arquivo que baixa."
      ],
      [
        "Re-download",
        "Até cinco vezes no mesmo pedido. Não mantemos cópia, então não pode ser produzido novamente uma vez que você saia da tela de resultados."
      ],
      [
        "Retirada",
        "Reembolso total antes do início do download. Após a conclusão, a retirada por mudança de ideia é restrita (Art. 17(2), Lei de Comércio Eletrônico da Coreia)."
      ],
      [
        "Custos de devolução",
        "Nenhum — conteúdo digital, nada é enviado."
      ]
    ],
    "refundContact": "Para reembolsos ou perguntas, entre em contato com o centro de atendimento ao cliente ou e-mail abaixo. Se o documento não puder ser produzido, ou o valor cobrado diferir do pedido, reembolsamos integralmente.",
    "pdfLanguageNotice": "O PDF é produzido no mesmo idioma que esta tela."
  },
  "premiumReport": {
    "title": "Mantenha sua leitura premium como um PDF",
    "body": "Tudo na leitura da vida, além de **números que nunca aparecem na tela** — a proporção de aliados que decidiu se é forte ou fraco, quão longe o mês de nascimento empurrou cada elemento para cima, e a correção do tempo solar verdadeiro aplicada à sua hora de nascimento.",
    "buyButton": "Pague {price} e baixe",
    "preparing": "Ainda não disponível",
    "ordering": "Criando seu pedido…",
    "paying": "Processando pagamento…",
    "issuing": "Preparando seu relatório…",
    "done": "Baixado. Use o botão abaixo para baixá-lo novamente.",
    "failed": "O pagamento ou download falhou. Por favor, tente novamente em um momento.",
    "retry": "Baixar novamente",
    "contents": [
      "Seu dia mestre e temperamento — um resumo, pontos fortes e precauções",
      "Seu gráfico natal — os oito caracteres dos quatro pilares",
      "Os cinco elementos, a força do seu dia mestre e o que ele precisa",
      "A sorte de hoje e os quatro domínios (dinheiro, amor, trabalho, saúde)",
      "O que cada pilar é para você — os dez deuses lidos a partir do seu gráfico",
      "Posição sazonal e proporção de aliados — os números por trás do veredicto",
      "Perspectiva deste ano, fatores de pontuação de hoje e a correção de tempo"
    ],
    "consentLabel": "Entendo que este é um conteúdo digital entregue imediatamente após o pagamento, e que **a retirada por uma simples mudança de ideia é restrita uma vez que o download é concluído**.",
    "consentRequired": "Por favor, confirme os termos de retirada antes de pagar.",
    "productInfoTitle": "Informações do produto",
    "productInfo": [
      [
        "Fornecedor",
        "{brand}"
      ],
      [
        "Formato",
        "Um documento PDF (7 páginas A4), baixado na tela logo após o pagamento."
      ],
      [
        "Requisitos",
        "Qualquer dispositivo que abra um PDF. Nenhuma instalação ou conta necessária."
      ],
      [
        "Termo de uso",
        "Sem limite. Você mantém o arquivo que baixa."
      ],
      [
        "Re-download",
        "Até cinco vezes no mesmo pedido. Não mantemos cópia, então não pode ser produzido novamente uma vez que você saia da tela de resultados."
      ],
      [
        "Retirada",
        "Reembolso total antes do início do download. Após a conclusão, a retirada por mudança de ideia é restrita (Art. 17(2), Lei de Comércio Eletrônico da Coreia)."
      ],
      [
        "Custos de devolução",
        "Nenhum — conteúdo digital, nada é enviado."
      ]
    ],
    "refundContact": "Para reembolsos ou perguntas, entre em contato com o centro de atendimento ao cliente ou e-mail abaixo. Se o documento não puder ser produzido, ou o valor cobrado diferir do pedido, reembolsamos integralmente.",
    "pdfLanguageNotice": "O documento PDF é produzido no mesmo idioma que esta tela."
  },
  "fallbackReport": {
    "summary": "Um {dayMaster} dia mestre nascido na energia de {season}. Em todo o gráfico, {strongest} é o mais forte e {scarcest} é o mais fraco. Tudo abaixo segue a partir desses oito caracteres — cada número e cada pilar aqui é calculado, não escolhido.",
    "personality": "Seu dia mestre é {dayMaster} — energia de {element} — e este gráfico é lido como {strengthName}. Qual lado é mais forte, o que apoia o dia mestre ou o que dele se retira, é o que molda o caráter, e na vida diária isso se manifesta assim.",
    "cautions": {
      "STRONG": [
        "Você se esforça tanto que muitas vezes percebe a inclinação apenas depois que ela aconteceu.",
        "Mesmo onde a ajuda está disponível, você acaba lidando com isso sozinho, o que torna o trabalho maior.",
        "As coisas se estabilizam quando você deixa espaço para o que remove o excesso."
      ],
      "BALANCED": [
        "Nada te inclina para um lado ou para o outro, então uma decisão adiada simplesmente permanece adiada.",
        "Você se adapta bem à situação, o que pode borrar onde está sua própria linha.",
        "Dirigir-se para o que está mais fraco agora lhe dá uma direção a seguir."
      ],
      "WEAK": [
        "Segurar-se sozinho o desgasta mais rápido do que você espera.",
        "Sem nada que te apoie, as decisões escorregam e o momento passa.",
        "Manter pessoas que oferecem apoio por perto não é uma fraqueza neste gráfico — é o método."
      ]
    },
    "scarcityCaution": "O elemento mais fraco agora é {scarcest}. O que esse elemento governa é onde você age mais lentamente.",
    "elementBalance": "Por força, {strongest} lidera com {strongestPct}% e {scarcest} segue com {scarcestPct}%. Seu mês de nascimento está em {season}, o que empurra esse elemento para cima mais uma vez — a mesma quantidade carrega forças diferentes dependendo se a estação a apoia. O que você precisa agora é {favorable}, e as coisas se facilitam onde esse elemento é preenchido.",
    "todayHeadline": "Hoje é um dia {grade}",
    "todayMessage": "Hoje a pontuação é {score}, classificada como {gradeName}. {gradeBody} O pilar do dia é {pillar}, e o maior fator que influenciou essa pontuação foi “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Um bom dia para retomar a mensagem ou a organização que você tem deixado de lado — embora seja melhor não tentar terminar tudo hoje.",
      "MID": "Faça como costuma fazer e você obterá o que costuma obter. Em vez de começar algo novo, avance um passo em algo que já está em mãos.",
      "LOW": "Algumas partes de hoje vão contra o gráfico. É melhor gastar tempo finalizando e checando do que começando."
    },
    "luckyNote": "O elemento da sorte de hoje é {element}. A faixa de {colors}, o lado {direction}, e as horas em torno de {time} são onde essa energia é mais forte.",
    "domains": {
      "wealth": "A riqueza lê {score} hoje. Este valor varia com a energia de hoje alcançando as estrelas da riqueza (財星) — o que você lida e o que você coleta.",
      "love": "O afeto lê {score} hoje. Este valor é decidido por como o ramo de hoje se encontra com seu ramo do dia (日支), o palácio do cônjuge — harmonia o eleva, um conflito o diminui.",
      "career": "O trabalho lê {score} hoje. Este valor varia com a energia de hoje alcançando as estrelas do oficial (官星) e da produção (食傷) — o que você assume e o que você produz.",
      "health": "A saúde lê {score} hoje. Este valor é decidido por quantos dos seus ramos natais hoje colidem, e se o elemento de hoje é um que você precisa."
    },
    "yearOutlook": "O pilar deste ano é {pillar}, carregando {element}. {relation} Esta leitura considera apenas como o pilar do ano se relaciona com o que você precisa agora; não divide o ano mês a mês.",
    "yearRelations": {
      "YONGSIN": "O elemento que você precisa chega diretamente este ano. Um momento adequado para trazer à tona o que você havia deixado de lado.",
      "GENERATES": "Este ano alimenta o elemento que você precisa, então a corrente se torna mais suave — não de uma vez, mas de forma constante.",
      "GISIN": "Este ano empurra mais uma vez na direção que você já estava inclinando. É melhor gastar tempo finalizando o que está em mãos do que abrir algo novo.",
      "CONTROLS": "Algo este ano pressiona o elemento que você precisa, então as decisões demoram mais. Definir seus próprios prazos ajuda.",
      "NEUTRAL": "Este ano não colide nem alimenta o que você precisa. Manter o terreno que você tem é a melhor troca."
    },
    "disclaimer": "Referência tradicional de myeongri, não uma previsão científica ou uma afirmação sobre o que deve acontecer."
  },
  "footer": {
    "privacy": "Política de Privacidade",
    "terms": "Termos de Serviço",
    "refund": "Cancelamento e Reembolsos",
    "pricing": "Preços",
    "legalEntity": "Empresa",
    "representative": "Representante",
    "businessNumber": "Número de Registro",
    "mailOrderNumber": "Registro de E-commerce",
    "address": "Endereço",
    "customerCenter": "Atendimento ao Cliente",
    "email": "Email",
    "privacyOfficer": "Responsável pela Privacidade",
    "hostingProvider": "Hospedagem",
    "providedBy": "Fornecido por",
    "effective": "Vigente",
    "backHome": "Voltar para a página inicial"
  },
  "animals": {
    "rat": "Rato",
    "ox": "Boi",
    "tiger": "Tigre",
    "rabbit": "Coelho",
    "dragon": "Dragão",
    "snake": "Cobra",
    "horse": "Cavalo",
    "goat": "Cabra",
    "monkey": "Macaco",
    "rooster": "Galo",
    "dog": "Cão",
    "pig": "Porco"
  },
  "elements": {
    "WOOD": "Madeira",
    "FIRE": "Fogo",
    "EARTH": "Terra",
    "METAL": "Metal",
    "WATER": "Água"
  }
};
