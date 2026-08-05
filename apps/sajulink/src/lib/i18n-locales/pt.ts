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
    "privacyTitle": "Nada do que você informa é armazenado",
    "privacyBody": "As datas de nascimento são usadas apenas enquanto o resultado é calculado e nunca são registradas. Não é preciso criar conta. Nada do que o link de resultado carrega é enviado ao servidor.",
    "disclaimer": "Esta é uma leitura tradicional de Saju oferecida para referência. Não é uma previsão científica ou um veredicto sobre o futuro de ninguém."
  },
  "form": {
    "title": "Sua data de nascimento",
    "description": "Saber o horário de nascimento deixa a leitura mais precisa, mas não é obrigatório.",
    "meLegend": "Sobre você",
    "nickname": "Como chamar a pessoa",
    "nicknamePlaceholder": "ex.: Eu",
    "nicknameHint": "Aparece apenas na tela de resultado. Não é usado no cálculo.",
    "gender": "Gênero",
    "male": "Masculino",
    "female": "Feminino",
    "genderUnspecified": "Prefiro não informar",
    "genderHint": "A leitura tradicional de Saju analisa as posições do cônjuge e dos filhos de forma diferente por gênero. Se você pular isso, esses fatores serão excluídos do cálculo.",
    "birthplace": "Local de nascimento",
    "birthplaceHint": "O pilar da hora é calculado a partir do horário solar verdadeiro no seu local de nascimento. Se seu local de nascimento não estiver listado, escolha a cidade mais próxima.\nDentro da Coreia continental, a diferença entre as cidades é inferior a dois minutos. O horário de verão e as mudanças históricas de fuso horário também são refletidos.",
    "calendar": "Calendário",
    "solar": "Solar",
    "lunar": "Lunar",
    "leapMonth": "Mês intercalar",
    "birthDate": "Data de nascimento",
    "year": "Ano",
    "month": "Mês",
    "day": "Dia",
    "birthTime": "Horário de nascimento",
    "unknownTime": "Não sei o horário",
    "hour": "Hora",
    "minute": "Minuto",
    "submit": "Assistir anúncio e ver meu Saju",
    "submitNoAd": "Ver meu Saju",
    "submitting": "Calculando…",
    "errorInvalidDate": "Verifique a data de nascimento. Se for do calendário lunar, confira também se ela cai em um mês intercalar.",
    "errorGeneric": "O cálculo falhou. Tente novamente em instantes."
  },
  "reading": {
    "chartTitle": "Seu mapa natal",
    "chartHint": "O Saju representa o ano, mês, dia e hora de nascimento como dois caracteres cada. Tudo abaixo é lido a partir desses oito caracteres.",
    "pillarYear": "Ano",
    "pillarMonth": "Mês",
    "pillarDay": "Dia",
    "pillarHour": "Hora",
    "pillarHourUnknown": "Sem horário de nascimento",
    "dayMasterLabel": "Mestre do dia",
    "animalLabel": "Zodíaco",
    "seasonLabel": "Estação do nascimento",
    "elementsTitle": "Força dos elementos",
    "strongest": "Mais forte",
    "scarcest": "Mais escasso",
    "strengthTitle": "O que você trouxe ao nascer",
    "cautionTitle": "O que observar",
    "bodyStrengthTitle": "Força do mestre do dia",
    "favorableLabel": "O que você precisa agora"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Mestre do dia forte",
      "body": "Os elementos que sustentam o seu mestre do dia estão fartos. Isso lhe dá impulso próprio, mas também faz tudo pender para um lado com facilidade — você tende a se assentar quando algo drena o excesso."
    },
    "BALANCED": {
      "name": "Mestre do dia equilibrado",
      "body": "O que sustenta o seu mestre do dia e o que o consome estão quase empatados. Como não dá para decidir por nenhum dos lados, aqui lemos como necessidade aquilo que estiver mais escasso."
    },
    "WEAK": {
      "name": "Mestre do dia fraco",
      "body": "Os elementos que sustentam o seu mestre do dia estão escassos. Você toma emprestada bem a força de quem está por perto, mas se desgasta ao resistir sozinho — você se realiza quando algo lhe dá apoio."
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
      "name": "Fortuna imprevista (偏財)",
      "body": "Energia de riqueza ampla. Ativa e generosa com o que possui, traz oportunidades de lugares inesperados."
    },
    "JEONGJAE": {
      "name": "Riqueza estável (正財)",
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
      "name": "Apoio não convencional (偏印)",
      "body": "Energia que o apoia por um caminho incomum. Ela concede o poder de cavar fundo, mas em excesso o pensamento corre à frente da ação."
    },
    "JEONGIN": {
      "name": "Amparo (正印)",
      "body": "A energia que o acolhe e o cria. Ela oferece aprendizado e algo em que se apoiar; em excesso, a iniciativa própria chega tarde."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Madeira Yang (甲)",
      "trait": "Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar."
    },
    "乙": {
      "name": "Madeira Yin (乙)",
      "trait": "Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe."
    },
    "丙": {
      "name": "Fogo Yang (丙)",
      "trait": "O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade."
    },
    "丁": {
      "name": "Fogo Yin (丁)",
      "trait": "A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto."
    },
    "戊": {
      "name": "Terra Yang (戊)",
      "trait": "Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada."
    },
    "己": {
      "name": "Terra Yin (己)",
      "trait": "Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir."
    },
    "庚": {
      "name": "Metal Yang (庚)",
      "trait": "Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente."
    },
    "辛": {
      "name": "Metal Yin (辛)",
      "trait": "Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar."
    },
    "壬": {
      "name": "Água Yang (壬)",
      "trait": "Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem."
    },
    "癸": {
      "name": "Água Yin (癸)",
      "trait": "Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Diz o que pensa mesmo em um primeiro encontro.",
      "Raramente muda um plano ou uma promessa depois de firmados.",
      "Recusa de forma direta, o que pode soar seco."
    ],
    "乙": [
      "Contorna o confronto e segue por outro caminho.",
      "Parece dócil, mas acaba chegando aonde pretendia.",
      "Observa o ambiente antes de entrar em um grupo."
    ],
    "丙": [
      "Puxa conversa com quem acabou de conhecer.",
      "O que gosta e o que não gosta aparece no rosto.",
      "Acaba no centro de qualquer reunião sem nem tentar."
    ],
    "丁": [
      "Calado no começo, atencioso depois que a proximidade chega.",
      "Prefere uma conversa longa com uma ou duas pessoas a uma multidão.",
      "Guarda um comentário de passagem e o retoma depois."
    ],
    "戊": [
      "Fala pouco; a voz raramente se altera, mesmo na urgência.",
      "É quem resolve no fim, enquanto os outros adiam a decisão.",
      "Um não, uma vez dado, continua sendo não por muito tempo."
    ],
    "己": [
      "Ouve por mais tempo do que fala.",
      "Tem dificuldade de recusar, então o trabalho se acumula sobre essa pessoa.",
      "O que cuidou em silêncio só vem à tona depois."
    ],
    "庚": [
      "Decide rápido e diz na hora.",
      "Não suaviza as coisas, o que pode soar frio.",
      "Fica visivelmente inquieto quando algo se arrasta."
    ],
    "辛": [
      "Tem critérios claros sobre a roupa e sobre o que escolhe.",
      "Não consegue deixar passar um trabalho pela metade sem apontá-lo.",
      "Econômico nos elogios, mas categórico quando resolve elogiar."
    ],
    "壬": [
      "Mistura-se com facilidade com todo tipo de gente.",
      "Traz o que vem depois antes do que está diante de si.",
      "Incomoda-se em ficar preso a um só lugar por muito tempo."
    ],
    "癸": [
      "Fala pouco, mas leu a situação com exatidão.",
      "É o primeiro a perceber quando o clima muda.",
      "Guarda a vida interior para si, então leva tempo até conhecê-lo."
    ]
  },
  "animalTraits": {
    "rat": "Percebe rápido e garante rápido o que importa. O primeiro a se mover numa crise.",
    "ox": "Parece lento, mas leva tudo até o fim. O que assume, não larga.",
    "tiger": "Destemido e sempre à frente. Não consegue deixar passar uma injustiça.",
    "rabbit": "Gentil e perceptivo. Sabe contornar em vez de colidir.",
    "dragon": "Coração grande e ideais altos. Raramente se contenta com o comum.",
    "snake": "Guarda o que pensa e reflete com profundidade. Julga com precisão.",
    "horse": "Alegre e inquieto. Ficar cercado é o mais difícil de tudo.",
    "goat": "Caloroso e atencioso. Guarda por muito tempo as palavras duras.",
    "monkey": "Cheio de recursos e rápido para se adaptar. Entedia-se com a repetição.",
    "rooster": "Diligente e minucioso. Não consegue deixar nada fora do lugar.",
    "dog": "Leal até o fim depois que confia. A traição machuca especialmente fundo.",
    "pig": "Generoso e franco. Confia com facilidade, às vezes a um custo."
  },
  "result": {
    "title": "Sua leitura de Saju",
    "recalculate": "Começar de novo",
    "copyLink": "Copiar o link do resultado",
    "copied": "Copiado",
    "missingInput": "Não foi possível ler este resultado. Informe as datas novamente.",
    "partialTime": "Nenhum horário de nascimento foi informado, então o pilar da hora ficou de fora. Incluí-lo deixa a leitura mais precisa.",
    "engineVersion": "Calculado com",
    "disclaimer": "Esta é uma leitura tradicional de Saju oferecida como referência. Não é uma previsão científica ou um veredicto sobre seu futuro.",
    "seeToday": "Veja a fortuna de hoje",
    "seeReading": "Veja seu gráfico natal"
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
    "label": "Publicidade"
  },
  "selfAds": {
    "label": "Serviços relacionados",
    "comingSoon": "Em breve",
    "purposes": {
      "naminglink": "Nomes coreanos e hanja escolhidos por significado e contagem de traços",
      "inyeonlink": "Como duas pessoas se encaixam, lidas a partir de seus quatro pilares e signos do zodíaco",
      "sajulink": "Seus próprios quatro pilares e como hoje se relaciona com eles",
      "dreamslink": "Interpretações de sonhos extraídas de um dicionário de símbolos",
      "placelink": "Lugares para ir em um encontro na Coreia, compartilhados e recomendados"
    }
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
    "remaining": "Seu resultado abre em {seconds}s"
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
        "body": "em repouso após a sua vez"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "preso, difícil de mover"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "no ponto mais fraco"
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
    "domainsTitle": "Quatro áreas da vida",
    "yongsinTitle": "O que você precisa agora",
    "tenGodDepthTitle": "O que se destaca neste gráfico",
    "disclaimerTitle": "Como ler este documento",
    "yearOutlookUnavailable": "O pilar deste ano não pôde ser lido, então esta seção fica vazia. Tudo nas páginas anteriores ainda é válido.",
    "factorsTitle": "De onde vem a pontuação de cada área",
    "factorsHint": "A tela nomeia os fatores; aqui cada um é impresso com os pontos que adicionou ou removeu.",
    "deltaColumn": "Pontos",
    "appendixTitle": "Como este gráfico foi construído",
    "timeCorrectionLabel": "Hora de nascimento",
    "timeCorrectionApplied": "Corrigida para hora solar verdadeira e lida como {time}.",
    "timeCorrectionNone": "Nenhuma hora de nascimento foi fornecida, então o pilar da hora foi deixado de fora.",
    "timeCorrectionDateShift": "A correção moveu a data para {date}, então o pilar daquele dia foi usado.",
    "calendarLabel": "Data a partir da qual o mapa foi traçado",
    "solarLabel": "Solar",
    "lunarLabel": "Lunar",
    "lunarUnavailable": "Esta data não está na tabela do almanaque, então nenhuma data lunar é mostrada."
  },
  "report": {
    "title": "Leitura da vida e o ano à frente",
    "body": "Transformamos esta leitura em um PDF e adicionamos a camada que a tela nunca mostra: a força do seu day master e o que ele precisa agora, os dez deuses dos seus quatro pilares, as quatro áreas da vida lidas do seu natal chart com os números por trás delas, e a perspectiva para este ano. A fortuna de hoje não está incluída — ela muda diariamente, então permanece gratuita na tela.",
    "buyButton": "Pagar {price} e baixar",
    "preparing": "Ainda não disponível",
    "ordering": "Criando seu pedido…",
    "paying": "Processando o pagamento…",
    "issuing": "Preparando seu relatório…",
    "done": "Baixado. Use o botão abaixo para baixar de novo.",
    "failed": "O pagamento ou o download falhou. Tente novamente em instantes.",
    "retry": "Baixar de novo",
    "contents": [
      "Seu day master e temperamento — um resumo, forças e precauções",
      "Seu natal chart e o peso dos cinco elementos — os oito caracteres",
      "A força do seu day master, e a energia que ele precisa agora",
      "Vitalidade sazonal e os dez deuses dos seus quatro pilares",
      "O que se destaca neste gráfico — os dez deuses robustos e os ausentes",
      "As quatro áreas da vida lidas a partir do seu natal chart, com os números por trás de cada uma",
      "A correção do tempo solar verdadeiro, e a perspectiva para este ano"
    ],
    "consentLabel": "Entendo que este é um conteúdo digital entregue imediatamente após o pagamento e que **o arrependimento por simples mudança de ideia fica restrito assim que o download é concluído**.",
    "consentRequired": "Confirme os termos de arrependimento antes de pagar.",
    "productInfoTitle": "Informações do produto",
    "productInfo": [
      [
        "Fornecedor",
        "{brand}"
      ],
      [
        "Formato",
        "Um documento PDF (9 páginas A4), baixado na tela imediatamente após o pagamento."
      ],
      [
        "Requisitos",
        "Qualquer aparelho que abra PDF. Não é preciso instalar nada nem criar conta."
      ],
      [
        "Prazo de uso",
        "Sem limite. O arquivo baixado fica com você."
      ],
      [
        "Novo download",
        "Até cinco vezes no mesmo pedido. Não guardamos nenhuma cópia, então ele não pode ser gerado outra vez depois que você sair da tela de resultado."
      ],
      [
        "Arrependimento",
        "Reembolso integral antes de o download começar. Depois de concluído, o arrependimento por mudança de ideia fica restrito (art. 17, §2º, da Lei de Comércio Eletrônico da Coreia)."
      ],
      [
        "Custos de devolução",
        "Nenhum — é conteúdo digital, nada é enviado."
      ]
    ],
    "refundContact": "Para reembolsos ou dúvidas, fale com o atendimento ao cliente ou use o e-mail abaixo. Se o documento não pôde ser gerado, ou se o valor cobrado for diferente do pedido, reembolsamos integralmente.",
    "pdfLanguageNotice": "O PDF é gerado no mesmo idioma desta tela."
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
    "summary": "Um {dayMaster} dia mestre nascido na energia de {season}. Em todo o gráfico, {strongest} é o mais espesso e {scarcest} é o mais fino. Tudo abaixo segue a partir desses oito caracteres — cada número e cada pilar aqui é calculado, não escolhido.",
    "personality": "Seu dia mestre é {dayMaster} — energia {element} — e este gráfico é lido como {strengthName}. Qual lado é mais espesso, o que apoia o dia mestre ou o que dele se retira, é o que molda o caráter, e na vida diária isso se manifesta assim.",
    "cautions": {
      "STRONG": [
        "Você se esforça tanto que muitas vezes percebe a inclinação apenas depois que ela acontece.",
        "Mesmo onde a ajuda está disponível, você acaba lidando com isso sozinho, o que torna o trabalho maior.",
        "As coisas se estabilizam quando você deixa espaço para o que retira o excesso."
      ],
      "BALANCED": [
        "Nada te inclina para nenhum lado, então uma decisão adiada simplesmente permanece adiada.",
        "Você se adapta bem à situação, o que pode borrar onde está sua própria linha.",
        "Dirigir-se para o que está mais fino agora lhe dá uma direção a seguir."
      ],
      "WEAK": [
        "Segurar-se sozinho o desgasta mais rápido do que você espera.",
        "Sem nada atrás de você, as decisões escorregam e o momento passa.",
        "Manter pessoas que apoiam perto não é uma fraqueza neste gráfico — é o método."
      ]
    },
    "scarcityCaution": "O elemento mais fino agora é {scarcest}. O que esse elemento governa é onde você age mais lentamente.",
    "elementBalance": "Por força, {strongest} lidera com {strongestPct}% e {scarcest} fica atrás com {scarcestPct}%. O mês do seu nascimento está em {season}, o que empurra esse elemento mais uma vez — a mesma quantidade carrega uma força diferente dependendo de se a estação a apoia. O que você precisa agora é {favorable}, e as coisas se tornam mais fáceis onde esse elemento é preenchido.",
    "todayHeadline": "Hoje é um dia {grade}",
    "todayMessage": "Hoje a pontuação é {score}, classificada como {gradeName}. {gradeBody} O pilar do dia é {pillar}, e o maior fator que influenciou essa pontuação foi “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Um bom dia para retomar a mensagem ou a organização que você tem adiado — embora seja melhor não tentar terminar tudo hoje.",
      "MID": "Faça como de costume e você obterá o que costuma obter. Em vez de começar algo novo, avance um passo em algo que já está em mãos.",
      "LOW": "Parte de hoje vai contra o gráfico. É melhor gastar tempo finalizando e verificando do que começando."
    },
    "luckyNote": "O elemento da sorte de hoje é {element}. A faixa de {colors}, o lado {direction}, e as horas em torno de {time} são onde essa energia flui mais intensamente.",
    "domains": {
      "wealth": "Lido do mapa natal, a riqueza chega a {score}. Pesa o que se ganha junto com a força para suportá-la.",
      "love": "Lido do mapa natal, o afeto chega a {score}. Pesa a estrela do cônjuge junto com a forma do assento em que está.",
      "career": "Lido do mapa natal, o trabalho chega a {score}. Pesa o que você assume junto com o que você entrega.",
      "health": "Lido do mapa natal, a saúde chega a {score}. Pesa o equilíbrio com o qual você nasceu junto com o que colide dentro dele."
    },
    "yearOutlook": "O pilar deste ano é {pillar}, carregando {element}. {relation} Esta leitura considera apenas como o pilar do ano se relaciona com o que você precisa agora; não divide o ano mês a mês.",
    "yearRelations": {
      "YONGSIN": "O elemento que você precisa chega diretamente este ano. Um momento adequado para trazer à tona o que você havia deixado de lado.",
      "GENERATES": "Este ano alimenta o elemento que você precisa, então a corrente se torna mais suave — não de uma vez, mas de forma constante.",
      "GISIN": "Este ano empurra mais uma vez na direção que você já estava seguindo. É melhor gastar tempo fechando o que está em mãos do que abrir algo novo.",
      "CONTROLS": "Algo este ano pressiona o elemento que você precisa, então as decisões demoram mais. Definir seus próprios prazos ajuda.",
      "NEUTRAL": "Este ano não colide nem alimenta o que você precisa. Manter o terreno que você tem é o melhor negócio."
    },
    "disclaimer": "Referência tradicional de myeongri, não uma previsão científica ou uma afirmação sobre o que deve acontecer.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Companheiro é forte. Você constrói com suas próprias mãos em vez de emprestá-las, o que o torna forte em levar uma tarefa até o fim. Mas aceitar ajuda também é uma habilidade, e tratá-la como uma fraqueza deixa você carregando as coisas sozinho — e colidindo, sobre as partes, com quem está ao seu lado. Onde o trabalho é compartilhado, oferecer sua mão primeiro acaba sendo o caminho mais rápido.",
        "absent": "Companheiro está ausente. Mover-se com os outros se adapta melhor a você do que manter seu próprio espaço. Você hesita muito onde a decisão é apenas sua, e ganha velocidade uma vez que alguém está com você. Quando uma posição é sua para manter, vale a pena praticar o empurrão."
      },
      "GEOPJAE": {
        "thick": "Rob Riqueza é forte. Você se move primeiro onde os outros hesitam. Essa força não se transforma facilmente em manter, então o que você ganha não permanece por muito tempo em mãos. Decidir com antecedência para onde o dinheiro vai não é economia neste gráfico — é método.",
        "absent": "Rob Riqueza está ausente. Você raramente força algo e evita competições. Você perde pouco, mas chega um pouco atrasado quando algo precisa ser empurrado com força. Onde os riscos são reais, definir seu próprio prazo ajuda."
      },
      "SIKSIN": {
        "thick": "Deus da Alimentação é forte. O que está dentro sai facilmente, então fazer, crescer e alimentar são terrenos confortáveis. Você se sai bem em trabalhos que são feitos lentamente e por muito tempo, e os resultados chegam tarde, mas de forma constante. Quando o conforto se estende, no entanto, você se acomoda em vez de se expandir.",
        "absent": "Deus da Alimentação está ausente. O canal do interior para o exterior é fino: o pensamento está lá, a expressão dele chega tarde. Esperar até que tudo esteja pronto atrasa o início. Colocar algo para fora meio acabado não é uma perda neste gráfico."
      },
      "SANGGWAN": {
        "thick": "O Oficial Ferido é forte. Você vê o que está fora do lugar em um quadro fixo antes de qualquer outra pessoa e tem as palavras para nomeá-lo. Você brilha onde as coisas estão sendo feitas e colide onde as coisas estão sendo mantidas. Como a coisa certa é dita importa tanto aqui quanto vê-la.",
        "absent": "O Oficial Ferido está ausente. Você procura o caminho através de um quadro em vez de sacudi-lo. Você raramente colide com as pessoas, mas deixa as coisas passarem onde deveriam mudar, e isso se transforma em frustração. Melhor não adiar a palavra que precisa ser dita."
      },
      "PYEONJAE": {
        "thick": "A Riqueza Indireta é forte. Você mantém uma mão em vários lugares e captura oportunidades amplas, então as coisas se abrem em cantos inesperados. O que é espalhado também deve ser cuidado, no entanto, e cuidar disso lhe interessa menos — então você continua falhando em reunir o que abriu. Fechar um antes de abrir o próximo é a ordem que este gráfico precisa.",
        "absent": "A Riqueza Indireta está ausente. Você pega a coisa certa em terreno familiar em vez de se espalhar. Há menos para te abalar, e você observa as grandes oportunidades passarem com a mesma frequência. Ampliar seu alcance um palmo de cada vez ajuda."
      },
      "JEONGJAE": {
        "thick": "A Riqueza Direta é forte. Você conta o que entra e o que sai, e você constrói — assim, o chão sob você se firma ao longo do tempo. Alcançar apenas a coisa certa faz você se atrasar para a oportunidade, e a avareza levada longe demais torna sua mão pesada onde deveria abrir. Decidir com antecedência para que o dinheiro serve ajuda.",
        "absent": "A Riqueza Direta está ausente. O lado de acumulação constante é fraco, então gerenciar o que chega continua sendo adiado. Ganhar e manter são habilidades diferentes; este gráfico precisa aprender a segunda separadamente. Regras que movem dinheiro sem você decidir cada vez se adequam bem a você."
      },
      "PYEONGWAN": {
        "thick": "O Oficial Indireto é forte. A pressão revela sua força, e você carrega responsabilidades que outros acham pesadas. Quando a tensão nunca se alivia, no entanto, ela se endurece em uma sensação de estar perseguido e descansar deixa de parecer descanso. Definir um horário para parar não é ocioso neste gráfico.",
        "absent": "O Oficial Indireto está ausente. Pouco pressiona você, o que é fácil para a mente, mas o poder de se manter ereto em uma crise é fraco. Você se sai muito melhor quando um prazo ou uma promessa é estabelecida de fora."
      },
      "JEONGGWAN": {
        "thick": "O Oficial Direto é forte. Sua posição e as linhas que você mantém são claras, e mantê-las é de onde vem sua estabilidade — você constrói confiança dentro dos sistemas. Onde as regras vacilam, você é lento para julgar, e onde a mesa é sua para definir, você se sente preso.",
        "absent": "O Oficial Direto está ausente. Um caminho feito por você se adequa melhor do que um lugar designado de fora. Isso é liberdade, mas o padrão oscila facilmente; escrever suas próprias regras como se fossem políticas ajuda."
      },
      "PYEONIN": {
        "thick": "O Recurso Indireto é forte. Você vai pelo caminho que outros pulam e constrói uma profundidade própria. O aprendizado e a ponderação são fortes, mas o pensamento ultrapassa a mão e você pode estar cansado antes de começar. Mover-se com meio preparo se encaixa neste gráfico.",
        "absent": "O Recurso Indireto está ausente. Você aprende ao se deparar com as coisas em vez de se enterrar. Você não é lento para aprender, mas estudar sozinho por longos períodos não se adequa a você. Perguntar às pessoas e aprender no chão é mais rápido."
      },
      "JEONGIN": {
        "thick": "O Recurso Direto é denso. O que te sustenta é abundante, então aprender e ter um lugar para se apoiar nunca acaba. Essa estabilidade faz com que avançar seja tardio, e a preparação se torna a razão para um início ser adiado. Manter um lugar onde o que você recebeu retorna é valioso.",
        "absent": "O Recurso Direto está ausente. Você criou seu próprio apoio, então ficar em pé sozinho se desenvolveu cedo. Pedir ajuda é desconhecido, e você se sustenta sozinho mesmo quando não precisa. Neste gráfico, pedir é muito valioso."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Quanta riqueza (財星) o gráfico carrega — a espessura do que você lida e coleta.",
      "WEALTH_STRONG_BODY": "O dia mestre é pleno, então há força para carregar riqueza.",
      "WEALTH_WEAK_BODY": "O dia mestre é fino, então a riqueza é difícil de carregar mesmo onde existe.",
      "WEALTH_YONGSIN": "O que você precisa agora é do mesmo elemento que as estrelas da riqueza, para que esse terreno venha mais fácil.",
      "LOVE_SPOUSE_STAR": "Quanta estrela do cônjuge o gráfico carrega — riqueza direta para homens, oficial direto para mulheres.",
      "LOVE_SPOUSE_PALACE": "A estrela do cônjuge está dentro do seu ramo do dia, o palácio do cônjuge, então o assento está preenchido.",
      "LOVE_PALACE_CHUNG": "O palácio do cônjuge colide com outro ramo, então esse assento está instável.",
      "LOVE_GENDER_UNKNOWN": "Nenhum gênero foi inserido, então a estrela do cônjuge não foi contada. O valor se divide entre estrelas de riqueza e de oficial por gênero, e não escolhemos um arbitrariamente.",
      "CAREER_OFFICER": "As estrelas de oficial (正官·偏官) no gráfico — a espessura do que você assume e mantém.",
      "CAREER_OUTPUT": "As estrelas de saída (食神·傷官) no gráfico — a espessura do que você coloca para fora e expressa.",
      "CAREER_STRONG_BODY": "O dia mestre é forte, então usa as estrelas de oficial em vez de ser pressionado por elas.",
      "HEALTH_BALANCE": "Quão equilibrados estão os cinco elementos — quanto mais inclina para um lado, mais pressão recai sobre o que aquele elemento governa.",
      "HEALTH_CHUNG": "Quantos pares de ramos colidem dentro do gráfico.",
      "HEALTH_EXTREME_BODY": "O dia mestre se inclina fortemente para um lado, o que é uma pressão em si. Um dia mestre equilibrado não perde nada aqui."
    },
    "yongsinDepth": {
      "STRONG": "Os elementos que apoiam seu dia mestre estão em plena força. Isso lhe dá impulso próprio, mas tende a se inclinar para um lado, então o que você precisa agora não é de mais apoio — é algo para retirar o excesso. {favorable} faz esse trabalho. Onde esse elemento chega — colocando para fora, assumindo, reunindo — é onde você se estabelece.",
      "BALANCED": "O que apoia seu dia mestre e o que dele retira estão quase equilibrados. Muito próximo para decidir de qualquer forma, então aqui lemos o que está mais fino como o que você precisa: {favorable}. Um gráfico que não se inclina se adapta bem, mas desfoca sua própria linha, então direcionar-se para o lugar fino lhe dá uma direção a seguir.",
      "WEAK": "Os elementos que apoiam seu dia mestre estão fracos. Você pega força ao seu redor bem, mas se desgasta ao tentar se manter sozinho, então o que você precisa agora é de algo que o apoie e o preencha. {favorable} faz esse trabalho. Manter coisas de apoio por perto não é uma fraqueza neste gráfico — é o método."
    }
  },
  "footer": {
    "privacy": "Privacidade",
    "terms": "Termos",
    "refund": "Reembolso",
    "pricing": "Preços",
    "legalEntity": "Empresa",
    "representative": "Representante",
    "businessNumber": "Registro",
    "mailOrderNumber": "Comércio online",
    "address": "Endereço",
    "customerCenter": "Atendimento",
    "email": "Email",
    "privacyOfficer": "Privacidade",
    "hostingProvider": "Hospedagem",
    "providedBy": "Fornecido por",
    "effective": "Vigência",
    "backHome": "Voltar ao início"
  },
  "animals": {
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
  },
  "elements": {
    "WOOD": "Madeira",
    "FIRE": "Fogo",
    "EARTH": "Terra",
    "METAL": "Metal",
    "WATER": "Água"
  }
};
