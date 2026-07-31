// 인연링크(사주 궁합) 화면 사전의 포르투갈어(브라질) 번역이다.
// `src/lib/i18n.ts`의 `const en: Dictionary`를 기준으로 옮겼고, 영어가 모호한 자리는 같은 파일의
// `const ko`(원문)를 대조했다. 언어 선택기 3개 키와 footer 13개 키는 naminglink의 pt 문구를 그대로 가져왔다.

import type { Dictionary } from "@/lib/i18n";

export const pt: Dictionary = {
  brand: "InyeonLink",
  tagline: "A compatibilidade vista pelo Saju e pelos signos do zodíaco",
  currentLanguage: "Idioma atual",
  moreLanguages: "Mais",
  closeLanguages: "Fechar",
  landing: {
    title: "Veja como duas pessoas\ncombinam entre si",
    subtitle:
      "Basta uma data de nascimento.\nCombinamos a compatibilidade do Saju (Quatro Pilares) com a do zodíaco e mostramos tudo como uma taxa de compatibilidade.",
    cta: "Ver a compatibilidade no Saju",
    howTitle: "Como funciona",
    steps: [
      "Informe as duas datas de nascimento. O horário de nascimento é opcional.",
      "A compatibilidade no Saju vem dos elementos do mestre do dia, do equilíbrio elemental e do ramo do dia; a compatibilidade do zodíaco vem do ramo do ano.",
      "As duas notas são combinadas em uma taxa de compatibilidade ponderada.",
    ],
    privacyTitle: "Nada do que você informa é armazenado",
    privacyBody:
      "As datas de nascimento são usadas apenas enquanto o resultado é calculado e nunca são registradas. Não é preciso criar conta. Nada do que o link de resultado carrega é enviado ao servidor.",
    disclaimer:
      "Esta é uma leitura tradicional de Saju, oferecida como referência. Não é uma previsão científica nem um veredito sobre qualquer relação.",
  },
  form: {
    title: "As duas datas de nascimento",
    description:
      "Saber o horário de nascimento deixa a leitura mais precisa, mas não é obrigatório.",
    personA: "Primeira pessoa",
    personB: "Segunda pessoa",
    nickname: "Como chamar a pessoa",
    nicknamePlaceholder: "ex.: Eu",
    nicknameHint: "Aparece apenas na tela de resultado. Não é usado no cálculo.",
    gender: "Gênero",
    male: "Masculino",
    female: "Feminino",
    genderUnspecified: "Prefiro não informar",
    genderHint:
      "O Saju tradicional lê a posição do cônjuge de forma diferente conforme o gênero. Se você pular esta parte, esse fator fica de fora do cálculo.",
    birthplace: "Local de nascimento",
    birthplaceHint:
      "O pilar da hora é calculado pelo tempo solar verdadeiro do local de nascimento, incluindo horário de verão e mudanças históricas de fuso. Se o seu local não estiver na lista, escolha a cidade mais próxima — quanto mais perto, mais preciso fica o pilar da hora.",
    calendar: "Calendário",
    solar: "Solar",
    lunar: "Lunar",
    leapMonth: "Mês intercalar",
    birthDate: "Data de nascimento",
    year: "Ano",
    month: "Mês",
    day: "Dia",
    birthTime: "Horário de nascimento",
    unknownTime: "Não sei o horário",
    hour: "Hora",
    minute: "Minuto",
    submit: "Ver o anúncio e ver o resultado",
    submitting: "Calculando…",
    errorInvalidDate:
      "Verifique a data de nascimento. Se for do calendário lunar, confira também se ela cai em um mês intercalar.",
    errorGeneric: "O cálculo falhou. Tente novamente em instantes.",
  },
  reading: {
    chartTitle: "Os dois mapas",
    chartHint:
      "O Saju representa o ano, o mês, o dia e a hora do nascimento com dois caracteres cada. Todas as notas abaixo vêm desses oito caracteres.",
    pillarYear: "Ano",
    pillarMonth: "Mês",
    pillarDay: "Dia",
    pillarHour: "Hora",
    pillarHourUnknown: "Sem horário de nascimento",
    dayMasterLabel: "Mestre do dia",
    animalLabel: "Zodíaco",
    seasonLabel: "Estação do nascimento",
    elementsTitle: "Força dos elementos",
    strongest: "Mais forte",
    scarcest: "Mais escasso",
    strengthTitle: "O que joga a favor deste par",
    cautionTitle: "O que observar",
    bodyStrengthTitle: "Força do mestre do dia",
    favorableLabel: "O que você precisa agora",
  },
  bodyStrength: {
    STRONG: {
      name: "Mestre do dia forte",
      body: "Os elementos que sustentam o seu mestre do dia estão fartos. Isso lhe dá impulso próprio, mas também faz tudo pender para um lado com facilidade — você tende a se assentar quando algo drena o excesso.",
    },
    BALANCED: {
      name: "Mestre do dia equilibrado",
      body: "O que sustenta o seu mestre do dia e o que o consome estão quase empatados. Como não dá para decidir por nenhum dos lados, aqui lemos como necessidade aquilo que estiver mais escasso.",
    },
    WEAK: {
      name: "Mestre do dia fraco",
      body: "Os elementos que sustentam o seu mestre do dia estão escassos. Você toma emprestada bem a força de quem está por perto, mas se desgasta ao resistir sozinho — você se realiza quando algo lhe dá apoio.",
    },
  },
  relation: {
    title: "Como vocês dois se posicionam",
    hint: "O Saju nomeia com dez termos a maneira como dois mestres do dia se veem. A leitura tem direção — como você vê a outra pessoa e como ela vê você podem ser diferentes.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Semelhantes",
        body: "Os mestres do dia de vocês carregam a mesma energia. Muita coisa dispensa explicação e os gostos se sobrepõem. O problema é que vocês são fortes e fracos nos mesmos pontos, então a dificuldade tende a travar os dois no mesmo lugar.",
      },
      NURTURING: {
        name: "Um nutre, o outro floresce",
        body: "A energia flui em um só sentido. Quem recebe se sente à vontade e descobre mais coisas que quer fazer; quem dá encontra satisfação em ver o outro ir bem. Como o fluxo é unidirecional, algo precisa voltar, ou quem dá acaba secando.",
      },
      TENSION: {
        name: "Um firma o outro",
        body: "Um de vocês ocupa a posição que contém o outro. A tensão impede que ambos afrouxem e costuma render resultados quando trabalham juntos. Quem é contido pode se sentir avaliado o tempo todo, então o reconhecimento precisa vir antes da correção.",
      },
    },
    leadNote: {
      NURTURING: "Aqui **{lead}** é quem dá energia.",
      TENSION: "Aqui **{lead}** é quem dita o ritmo.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Companheiro (比肩)",
      body: "Alguém que fica ombro a ombro com você. Fácil de conversar e de conviver — mas difícil de ceder quando os dois querem a mesma coisa.",
    },
    GEOPJAE: {
      name: "Rival (劫財)",
      body: "Parecidos, mas com jeitos diferentes. Formidáveis quando empurram na mesma direção; afiados nas contas assim que há algo a dividir.",
    },
    SIKSIN: {
      name: "Expressão (食神)",
      body: "Alguém que puxa para fora o que existe em você. Perto dessa pessoa você fala mais e quer fazer mais. Uma das posições mais confortáveis que existem.",
    },
    SANGGWAN: {
      name: "Perturbador (傷官)",
      body: "Alguém que abala a sua estrutura. Interessante e estimulante — mas, quando as palavras entre vocês ficam afiadas, o corte demora a passar.",
    },
    PYEONJAE: {
      name: "Fortuna imprevista (偏財)",
      body: "Alguém de quem você quer cuidar. Há bastante diversão espontânea, embora o peso da relação possa continuar leve.",
    },
    JEONGJAE: {
      name: "Riqueza estável (正財)",
      body: "Tradicionalmente, a posição do cônjuge para o homem. O cuidado vem de forma constante, e a relação se assenta no cotidiano, e não nos picos.",
    },
    PYEONGWAN: {
      name: "Desafiante (偏官)",
      body: "Alguém que mantém você em alerta. A atração é forte e difícil de ignorar, mas a proximidade prolongada pode começar a pesar como pressão.",
    },
    JEONGGWAN: {
      name: "Autoridade (正官)",
      body: "Tradicionalmente, a posição do cônjuge para a mulher. Essa pessoa põe você nos eixos e traz ordem e estabilidade à relação.",
    },
    PYEONIN: {
      name: "Apoio não convencional (偏印)",
      body: "Alguém que ajuda você de um jeito incomum. Há momentos de real profundidade, embora leve tempo até que cada um entenda o método do outro.",
    },
    JEONGIN: {
      name: "Amparo (正印)",
      body: "Alguém que acolhe e cuida de você. Dá vontade de se apoiar, e a cabeça se assenta. Mas, se o apoio só vai para um lado, a relação desequilibra.",
    },
  },
  dayMasters: {
    甲: { name: "Madeira Yang (甲)", trait: "Uma árvore alta que cresce reta. Definida a direção, não vacila, e prefere aguentar a se curvar." },
    乙: { name: "Madeira Yin (乙)", trait: "Uma trepadeira, erva flexível. Curva-se conforme as circunstâncias para seguir em frente, e não se rompe." },
    丙: { name: "Fogo Yang (丙)", trait: "O sol do meio-dia. Os sentimentos aparecem sem disfarce, o ambiente se ilumina e dar o primeiro passo vem com naturalidade." },
    丁: { name: "Fogo Yin (丁)", trait: "A luz de vela. Queima em silêncio e por muito tempo, e aquece primeiro quem está mais perto." },
    戊: { name: "Terra Yang (戊)", trait: "Campo aberto e montanhas. Difícil de abalar e fácil de servir de apoio, embora demore a mudar uma decisão já tomada." },
    己: { name: "Terra Yin (己)", trait: "Solo de lavoura. Acolhe o que vier e faz crescer, cuidando em vez de exibir." },
    庚: { name: "Metal Yang (庚)", trait: "Ferro bruto. Decidido e direto, com pouca paciência para o que fica pendente." },
    辛: { name: "Metal Yin (辛)", trait: "Uma gema lapidada. Gosto refinado e padrões altos; o desleixo é difícil de deixar passar." },
    壬: { name: "Água Yang (壬)", trait: "Rio e mar. Visão ampla, com olho para a maneira como as coisas fluem." },
    癸: { name: "Água Yin (癸)", trait: "Orvalho e chuva. Infiltra-se em silêncio e lê o clima antes das palavras." },
  },
  dayMasterSigns: {
    甲: [
      "Diz o que pensa mesmo em um primeiro encontro.",
      "Raramente muda um plano ou uma promessa depois de firmados.",
      "Recusa de forma direta, o que pode soar seco.",
    ],
    乙: [
      "Contorna o confronto e segue por outro caminho.",
      "Parece dócil, mas acaba chegando aonde pretendia.",
      "Observa o ambiente antes de entrar em um grupo.",
    ],
    丙: [
      "Puxa conversa com quem acabou de conhecer.",
      "O que gosta e o que não gosta aparece no rosto.",
      "Acaba no centro de qualquer reunião sem nem tentar.",
    ],
    丁: [
      "Calado no começo, atencioso depois que a proximidade chega.",
      "Prefere uma conversa longa com uma ou duas pessoas a uma multidão.",
      "Guarda um comentário de passagem e o retoma depois.",
    ],
    戊: [
      "Fala pouco; a voz raramente se altera, mesmo na urgência.",
      "É quem resolve no fim, enquanto os outros adiam a decisão.",
      "Um não, uma vez dado, continua sendo não por muito tempo.",
    ],
    己: [
      "Ouve por mais tempo do que fala.",
      "Tem dificuldade de recusar, então o trabalho se acumula sobre essa pessoa.",
      "O que cuidou em silêncio só vem à tona depois.",
    ],
    庚: [
      "Decide rápido e diz na hora.",
      "Não suaviza as coisas, o que pode soar frio.",
      "Fica visivelmente inquieto quando algo se arrasta.",
    ],
    辛: [
      "Tem critérios claros sobre a roupa e sobre o que escolhe.",
      "Não consegue deixar passar um trabalho pela metade sem apontá-lo.",
      "Econômico nos elogios, mas categórico quando resolve elogiar.",
    ],
    壬: [
      "Mistura-se com facilidade com todo tipo de gente.",
      "Traz o que vem depois antes do que está diante de si.",
      "Incomoda-se em ficar preso a um só lugar por muito tempo.",
    ],
    癸: [
      "Fala pouco, mas leu a situação com exatidão.",
      "É o primeiro a perceber quando o clima muda.",
      "Guarda a vida interior para si, então leva tempo até conhecê-lo.",
    ],
  },
  animalTraits: {
    rat: "Percebe rápido e garante rápido o que importa. O primeiro a se mover numa crise.",
    ox: "Parece lento, mas leva tudo até o fim. O que assume, não larga.",
    tiger: "Destemido e sempre à frente. Não consegue deixar passar uma injustiça.",
    rabbit: "Gentil e perceptivo. Sabe contornar em vez de colidir.",
    dragon: "Coração grande e ideais altos. Raramente se contenta com o comum.",
    snake: "Guarda o que pensa e reflete com profundidade. Julga com precisão.",
    horse: "Alegre e inquieto. Ficar cercado é o mais difícil de tudo.",
    goat: "Caloroso e atencioso. Guarda por muito tempo as palavras duras.",
    monkey: "Cheio de recursos e rápido para se adaptar. Entedia-se com a repetição.",
    rooster: "Diligente e minucioso. Não consegue deixar nada fora do lugar.",
    dog: "Leal até o fim depois que confia. A traição machuca especialmente fundo.",
    pig: "Generoso e franco. Confia com facilidade, às vezes a um custo.",
  },
  affinity: {
    menu: "Seu perfil de afinidade",
    formTitle: "Que tipo de pessoa combina com você",
    formDescription:
      "Basta uma data de nascimento. Você pode ler isto sem saber o aniversário de ninguém — ou sem ter ninguém em mente ainda.",
    meLegend: "Você",
    genderHint:
      "O Saju tradicional lê a posição do cônjuge de forma diferente conforme o gênero. Deixe em branco e esse fator é descartado, em vez de adivinhado.",
    seekingLabel: "Procurando",
    seekingHint:
      "A posição do cônjuge (Jeongjae / Jeonggwan) só pode ser julgada quando os dois gêneros são conhecidos.",
    seekingAny: "Não especificado",
    submit: "Ver o anúncio e ver o resultado da conexão",
    submitting: "Analisando…",

    resultTitle: "Seu perfil de afinidade",
    intro:
      "Este é o feitio de pessoa para o qual o seu mapa pende. **Você reconhece esses tipos pelo temperamento,** muito antes de saber uma data de nascimento.",
    scoreCaption:
      "Estas são as mesmas notas por fator que o motor de compatibilidade usa — não uma taxa de compatibilidade combinada.",
    meTitle: "Onde você está",
    meBody: "Você é {dayMaster} e, neste momento, é {strength}.",
    meHint:
      "O Saju escreve o ano, o mês, o dia e a hora do seu nascimento em oito caracteres. **O primeiro caractere do dia do nascimento representa você** — é o chamado tronco do dia. Todos os tipos abaixo são ordenados por esse único caractere.",
    bestTitle: "Feitios que combinam com você",
    bestHint:
      "Este é o tronco do dia da outra pessoa — **a energia do dia em que ela nasceu** — dividido em dez tipos, dos quais estes três se encaixam com o seu. Muitas vezes dá para adivinhar pelo comportamento abaixo, bem antes de saber uma data de nascimento.",
    signsTitle: "Como isso aparece",
    avoidTitle: "Feitios que dão trabalho",
    avoidHint:
      "Não é um alerta. Significa que a naturalidade vem depois, quando os dois já tiverem investido tempo.",
    bondLabel: "Encaixe de temperamento",
    spouseLabel: "Posição do cônjuge",
    spouseSkipped: "O gênero não foi informado, então este fator foi descartado",
    scoreHelp:
      "**Encaixe de temperamento** — como as energias dos dias de nascimento de vocês dois se travam. Mesmo um par de empurra e puxa marca o máximo quando yin e yang estão cruzados.\n**Posição do cônjuge** — o Saju tradicional reserva uma posição para o cônjuge: Jeongjae para os homens, Jeonggwan para as mulheres. Nós a verificamos **nos dois sentidos** — se a outra pessoa ocupa essa posição para você e se você a ocupa para ela. As duas ao mesmo tempo formam o par que a tradição mais valoriza.",
    typeHeading: "Alguém como {name}",
    needTitle: "O que está lhe faltando agora",
    needBody:
      "Se {elements} for forte nessa pessoa, ela preenche o lugar que está escasso em você.",
    needHint:
      "Não dá para ler os cinco elementos de alguém à primeira vista. Mas, assim que souber a data de nascimento, olhe aqui primeiro.",
    zodiacTitle: "O zodíaco, como nota à parte",
    zodiacHint:
      "O zodíaco só precisa do ano de nascimento, então é o mais rápido de conferir. Mas ele também é apenas um dos quatro pilares — trate-o como uma pista.",
    zodiacGood: "Signos que combinam com você",
    zodiacHard: "Signos que atritam",
    tableType: "Tipo",
    tableSign: "Signo",
    tableYears: "Anos de nascimento",
    bornYear: "nascido em {year}",
    younger: "{n} anos mais novo",
    older: "{n} anos mais velho",
    sameAge: "mesma idade",
    zodiacYearsCaution:
      "No Saju o ano vira no Ipchun (por volta de 4 de fevereiro), e não em 1º de janeiro. **Quem nasce em janeiro ou no início de fevereiro pertence ao signo do ano anterior**, então confira o ano de um lado e do outro para essas datas.",
    dayBranchTitle: "Será que é essa pessoa?",
    dayBranchBody:
      "Basta uma data de nascimento para conferir se alguém combina com você.\nPara a leitura completa, use a compatibilidade no Saju no fim desta página.",
    check: {
      button: "Conferir o aniversário de alguém",
      title: "Qual é o feitio dessa pessoa?",
      body: "Informe uma data de nascimento e diremos qual dos dez tipos acima ela é. Nenhuma nota de compatibilidade é calculada.",
      submit: "Conferir",
      checking: "Conferindo…",
      rank: "seu nº {rank}",
      heading: "Esta pessoa é {name}",
      caution:
        "Isto lê apenas o dia do nascimento. **Se a pessoa nasceu perto da meia-noite**, o dia pode cair de um lado ou do outro, e aniversários de janeiro ou do início de fevereiro pertencem ao signo do ano anterior.",
      close: "Fechar",
      another: "Conferir outra pessoa",
      error: "Verifique a data — ela não existe ou está fora do intervalo.",
    },
    nextTitle: "Tem alguém em mente?",
    nextBody:
      "Informe as duas datas de nascimento e você recebe a taxa de compatibilidade real, com todos os fatores acima somados.",
    nextButton: "Ver a compatibilidade no Saju",
    recalculate: "Ver de novo",
    copyLink: "Copiar o link do resultado",
    copied: "Copiado",
    missingInput: "Não conseguimos ler o resultado. Comece de novo, por favor.",
    partialTime:
      "Nenhum horário de nascimento foi informado, então o pilar da hora ficou de fora. Incluí-lo deixa mais precisa a leitura do que lhe falta.",
    disclaimer:
      "Uma referência sob a ótica do Saju tradicional. Não é uma indicação para procurar ou evitar qualquer pessoa.",
  },
  result: {
    title: "Resultado da compatibilidade",
    totalLabel: "Taxa de compatibilidade",
    breakdown: "Nota por fator",
    recalculate: "Começar de novo",
    copyLink: "Copiar o link do resultado",
    copied: "Copiado",
    missingInput: "Não foi possível ler este resultado. Informe as datas novamente.",
    partialTime:
      "Nenhum horário de nascimento foi informado, então o pilar da hora ficou de fora. Incluí-lo deixa a leitura mais precisa.",
    engineVersion: "Calculado com",
    disclaimer:
      "Esta é uma leitura tradicional de Saju, oferecida como referência. Não é uma previsão científica nem um veredito sobre qualquer relação.",
  },
  ads: { label: "Publicidade" },
  analyzing: {
    title: "Lendo os dois mapas",
    quotes: [
      "A gente não encontra a pessoa certa: a gente a reconhece.",
      "Um bom par não é o que nunca discute — é o que volta depois de discutir.",
      "O Saju não é uma resposta fixa. É uma linguagem para entender um ao outro.",
      "Há pares fáceis porque vocês se parecem; outros ensinam justamente porque não.",
      "As relações que duram costumam ser aquelas em que nada ficou por dizer tempo demais.",
      "Se o jeito da outra pessoa soa estranho, é porque ela tem algo que você não tem.",
      "A compatibilidade é metade do que se nasce e metade do que se constrói.",
      "Uma relação dura quando apoiar-se e dar se revezam.",
      "Mais importante do que a nota é como você a lê.",
      "Se as estações de vocês são diferentes, contem um ao outro como é a sua estação.",
    ],
    gateTitle: "Seu resultado está pronto",
    gateBody:
      "Assista a um anúncio curto para abri-lo. É a receita de publicidade que mantém este serviço gratuito.",
    watchButton: "Ver um anúncio e abrir o resultado",
    watching: "Assistindo ao anúncio",
    remaining: "Seu resultado abre em {seconds}s",
  },
  report: {
    title: "Guarde esta leitura em PDF",
    body:
      "Transformamos este resultado num PDF de 7 páginas. **Quatro dessas páginas não estão no ecrã**: para onde a energia flui, um olhar mais atento a cada mapa, onde os quatro pilares se encontram e como foi calculado.",
    buyButton: "Pagar {price} e baixar",
    preparing: "Ainda não disponível",
    ordering: "Criando seu pedido…",
    paying: "Processando o pagamento…",
    issuing: "Preparando seu relatório…",
    done: "Baixado. Use o botão abaixo para baixar de novo.",
    failed: "O pagamento ou o download falhou. Tente novamente em instantes.",
    retry: "Baixar de novo",
    contents: [
      "Página 1 — taxa de compatibilidade, o que joga a favor do par e o que observar",
      "Página 2 — o formato da relação, os dez deuses e as notas por fator",
      "Página 3 — os dois mapas e a força dos elementos",
          "Página 4 — para onde a energia flui e onde os quatro pilares se encontram",
      "Página 5 — um olhar mais atento a cada mapa (o que a estação impulsiona)",
      "Página 6 — o que cada pilar do outro é para si",
      "Página 7 — como estes mapas foram calculados",
    ],
    consentLabel:
      "Entendo que este é um conteúdo digital entregue imediatamente após o pagamento e que **o arrependimento por simples mudança de ideia fica restrito assim que o download é concluído**.",
    consentRequired: "Confirme os termos de arrependimento antes de pagar.",
    productInfoTitle: "Informações do produto",
    productInfo: [
      ["Fornecedor", "{brand}"],
      ["Formato", "Um documento PDF (7 páginas), baixado na tela logo após o pagamento."],
      ["Requisitos", "Qualquer aparelho que abra PDF. Não é preciso instalar nada nem criar conta."],
      ["Prazo de uso", "Sem limite. O arquivo baixado fica com você."],
      ["Novo download", "Até cinco vezes no mesmo pedido. Não guardamos nenhuma cópia, então ele não pode ser gerado outra vez depois que você sair da tela de resultado."],
      ["Arrependimento", "Reembolso integral antes de o download começar. Depois de concluído, o arrependimento por mudança de ideia fica restrito (art. 17, §2º, da Lei de Comércio Eletrônico da Coreia)."],
      ["Custos de devolução", "Nenhum — é conteúdo digital, nada é enviado."],
    ],
    refundContact:
      "Para reembolsos ou dúvidas, fale com o atendimento ao cliente ou use o e-mail abaixo. Se o documento não pôde ser gerado, ou se o valor cobrado for diferente do pedido, reembolsamos integralmente.",
  },
  affinityReport: {
    title: "Guarde seu perfil de afinidade em PDF",
    body: "Transformamos esta leitura em um PDF de quatro páginas. Ele inclui **a classificação completa que a tela não mostra** — a tela dá os três primeiros, o PDF traz todos os dez tipos e os doze signos.",
    buyButton: "Pagar {price} e baixar",
    preparing: "Preparando",
    ordering: "Criando o pedido…",
    paying: "Processando o pagamento…",
    issuing: "Montando seu relatório…",
    done: "Baixado. Use o botão abaixo para obtê-lo de novo.",
    failed: "O pagamento ou o download não foi concluído. Tente novamente em instantes.",
    retry: "Baixar de novo",
    contents: [
      "Página 1 — Onde você está e o que lhe falta",
      "Página 2 — Três feitios que combinam com você, com pistas de comportamento",
      "Página 3 — O feitio que dá trabalho, mais a classificação completa dos troncos do dia",
      "Página 4 — Classificação completa dos doze signos, com anos de nascimento",
    ],
    consentLabel:
      "Este é um conteúdo digital entregue imediatamente após o pagamento. Entendo que **assim que o download é concluído, o direito de arrependimento por mudança de ideia fica limitado.**",
    consentRequired: "Concorde com os termos de arrependimento antes de pagar.",
    productInfoTitle: "Informações do produto",
    productInfo: [
      ["Fornecedor", "{brand}"],
      ["Formato", "Um documento PDF (4 páginas), baixado nesta tela logo após o pagamento."],
      ["Requisitos", "Qualquer aparelho que abra PDF. Sem instalação, sem conta."],
      ["Disponibilidade", "Sem prazo. O arquivo baixado é seu para guardar."],
      ["Novo download", "Até 5 vezes no mesmo pedido. Não armazenamos o arquivo, então ele não pode ser refeito depois que você sair desta tela."],
      ["Arrependimento", "Reembolso integral antes de o download ser concluído. Depois de concluído, o arrependimento por mudança de ideia fica limitado."],
      ["Custos de devolução", "Nenhum. Não há nada a enviar."],
    ],
    refundContact:
      "Para reembolsos ou dúvidas, fale com o suporte ou use o e-mail abaixo. Se o documento nunca chegou a ser gerado, ou se o valor cobrado for diferente do pedido, reembolsamos integralmente.",
  },
  reportDetail: {
    supplyTitle: "Para onde a energia flui",
    supplyHint: "A pontuação dos Cinco Elementos é a média de dois sentidos. Uma média esconde quem nutre quem. Aqui separamos: há pares em que só um lado fica bem suprido.",
    supplyReceiveLabel: "Quanto {name} recebe",
    needsLabel: "O que é preciso agora",
    bondTitle: "O vínculo entre os dois Senhores do Dia",
    depthTitle: "Um olhar mais atento a cada mapa",
    vitalityTitle: "O que a estação impulsiona",
    vitalityHint: "As barras mostram quanto há de cada elemento. Esta tabela mostra se o mês de nascimento o impulsiona. A mesma quantidade rende de forma diferente em Wang e em Sa.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "no auge" },
      SANG: { name: "Sang (相)", body: "o próximo a subir" },
      HYU: { name: "Hyu (休)", body: "em repouso após a sua vez" },
      SU: { name: "Su (囚)", body: "preso, difícil de mover" },
      SA: { name: "Sa (死)", body: "no ponto mais fraco" },
    },
    seasonBoostTitle: "Quanto o mês o elevou",
    rawLabel: "Antes do mês",
    strengthLabel: "Depois do mês",
    earthSeasonNote: "Nascimento em mês de transição (辰未戌丑), por isso a Terra também foi tomada como dominante.",
    allyRatioLabel: "Parcela do lado do Senhor do Dia",
    allyRatioHint: "Recurso mais Par, sobre o total. Acima de 45% é um Senhor do Dia forte; abaixo de 35%, fraco. Imprimimos o número para que veja onde caiu o veredito.",
    pillarsTitle: "Onde os quatro pilares se encontram",
    pillarsHint: "Só o ramo do Dia entra na compatibilidade — é o assento conjugal. Os outros três pilares leem-se com a mesma tabela, por isso os incluímos.",
    branchRelations: {
      SAMHAP: "Harmonia tripla",
      BANHAP: "Meia harmonia",
      YUKHAP: "Harmonia sêxtupla",
      SAME: "Mesmo ramo",
      NEUTRAL: "Sem relação",
      WONJIN: "Ressentimento",
      CHUNG: "Choque",
    },
    pillarColumn: "Pilar",
    relationColumn: "Relação",
    relationScoreColumn: "Pontos",
    tenGodColumn: "Dez Deuses",
    stemGodsTitle: "O que cada pilar do outro é para si",
    stemGodsHint: "A compatibilidade compara apenas os Senhores do Dia. A mesma regra fixa um Deus para os restantes pilares — mostra que parte dessa pessoa é o quê para si.",
    seesLabel: "Visto por {from}",
    notScoredNote: "As pontuações desta tabela não entram na compatibilidade. São impressas para que possa comparar intensidades.",
    appendixTitle: "Como este mapa foi calculado",
    timeCorrectionLabel: "Hora de nascimento",
    timeCorrectionApplied: "Corrigida para hora solar verdadeira e lida como {time}.",
    timeCorrectionNone: "Não foi indicada a hora de nascimento, pelo que o pilar da Hora ficou de fora.",
    timeCorrectionDateShift: "A correção moveu a data para {date}; o pilar do Dia veio desse dia.",
    calendarLabel: "Data a partir da qual o mapa foi traçado",
    solarLabel: "Solar",
    lunarLabel: "Lunar",
    lunarUnavailable: "Este dia falta na tabela do almanaque, pelo que não foi possível imprimir a data lunar.",
  },
  footer: {
    privacy: "Privacidade",
    terms: "Termos",
    refund: "Reembolso",
    pricing: "Preços",
    legalEntity: "Empresa",
    representative: "Representante",
    businessNumber: "Registro",
    mailOrderNumber: "Comércio online",
    address: "Endereço",
    customerCenter: "Atendimento",
    email: "Email",
    privacyOfficer: "Privacidade",
    hostingProvider: "Hospedagem",
    providedBy: "Fornecido por",
    effective: "Vigência",
    backHome: "Voltar ao início",
  },
  bands: {
    EXCELLENT: "Um par excepcional",
    GOOD: "Um par forte",
    FAIR: "Um par viável",
    CHALLENGING: "Um par que exige esforço",
  },
  engines: {
    saju: {
      name: "Compatibilidade no Saju",
      description:
        "Lê em conjunto os elementos do mestre do dia, o equilíbrio elemental e o ramo do dia.",
    },
    zodiac: {
      name: "Compatibilidade do zodíaco",
      description: "Lê a relação entre os ramos dos dois anos de nascimento.",
    },
  },
  factors: {
    dayMasterRelation: "Elementos do mestre do dia",
    spouseStar: "Estrela do cônjuge",
    elementSupply: "Suprimento elemental",
    dayBranchRelation: "Ramo do dia",
    branchRelation: "Signos do zodíaco",
  },
  notes: {
    "strength.dayMasterRelation":
      "Os temperamentos de vocês estão em uma posição que serve ao outro. Mesmo quando o jeito do outro parece estranho, ele tende a fornecer o que lhe falta.",
    "strength.spouseStar":
      "Cada um de vocês carrega o elemento tradicionalmente lido como a posição do cônjuge. Se as coisas pareceram fáceis desde o início sem motivo aparente, é provavelmente por isso.",
    "strength.elementSupply":
      "Cada um de vocês tem o que o outro precisa agora. O que era difícil de mover sozinho costuma vir com mais facilidade a dois.",
    "strength.dayBranchRelation":
      "O ramo do dia é tradicionalmente lido como o assento do cônjuge. Os de vocês se combinam bem, o que tende a tornar confortável o tempo compartilhado.",
    "strength.branchRelation":
      "Os signos do zodíaco se combinam bem — o tipo de par que parece natural visto de fora e que se lê com facilidade no primeiro encontro.",
    "caution.dayMasterRelation":
      "É aqui que os temperamentos atritam. Diante da mesma tarefa, o ritmo e o método de vocês diferem, o que é fácil de interpretar como algo proposital. Combinem o processo antes da conclusão.",
    "caution.spouseStar":
      "Nenhum de vocês carrega o que a tradição chama de elemento da posição do cônjuge do outro. A atração pode não ser imediata; este é um par que se acumula com o tempo.",
    "caution.elementSupply":
      "O que cada um de vocês precisa também está escasso no outro. Aquilo em que ambos são bons, vocês fazem muito bem — mas os lugares em que os dois carecem continuam vazios. É melhor buscar isso fora da relação.",
    "caution.dayBranchRelation":
      "É provável haver atrito na posição da vida em comum. Em geral, isso aparece em pequenos hábitos, e não em grandes questões, então definir algumas regras logo no início ajuda.",
    "caution.branchRelation":
      "Os seus signos do zodíaco ficam em lados opostos. Vocês veem as coisas de modo diferente, o que causa atrito — e também significa que há muito a aprender um com o outro.",

    "spouseStar.MUTUAL":
      "Cada um de vocês ocupa exatamente a posição do cônjuge do outro — o par que o Saju tradicional mais valoriza.",
    "spouseStar.STRONG":
      "Um de vocês ocupa exatamente a posição do cônjuge e o outro fica bem perto dela. O que cada um sente pelo outro pode diferir um pouco em tamanho.",
    "spouseStar.PARTIAL":
      "Apenas um de vocês ocupa a posição do cônjuge do outro. A atração inicial tende a correr em um só sentido, então vale a pena não adiar o que se tem a dizer.",
    "spouseStar.SLIGHT":
      "Um de vocês fica adjacente à posição do cônjuge. Isso se acumula com o tempo de convivência, em vez de chegar como atração imediata.",
    "spouseStar.NONE":
      "Nenhum de vocês ocupa o que a tradição chama de posição do cônjuge. Este par se constrói pela convivência, e não pela atração.",
    "dayMaster.CLASH_BONDED":
      "{elementA} e {elementB} se contêm mutuamente, mas com polaridade oposta. A tradição lê isso como o par conjugal — o atrito tende a virar afeto.",
    "dayMaster.CLASH_HARSH":
      "{elementA} e {elementB} se contêm mutuamente com a mesma polaridade. A carga é forte, e o peso que cada um coloca no outro também.",
    "dayMaster.FLOW_GUARDED":
      "Um de vocês emite energia e o outro a contém. O impulso mais afiado acaba temperado pelo outro — o que a tradição chama de par protegido.",
    "dayMaster.FLOW_BLOCKED":
      "Um de vocês emite energia e o outro a leva embora. Quem dá se cansa com facilidade aqui, então ajuda dizer com clareza o que cada um está dando e recebendo.",
    "dayMaster.PEER_EVEN":
      "Os dois carregam a energia {elementA} com a mesma polaridade. Isso deixa tudo equilibrado e leve, mas nenhum dos dois impulsiona o outro.",
    "dayMaster.PEER_RIVAL":
      "Os dois carregam a energia {elementA} com polaridade oposta. A atração é rápida, mas vocês disputam o mesmo terreno.",
    "supply.AMPLE":
      "Cada um de vocês tem de sobra o que o outro precisa. A primeira pessoa precisa de {needA} e a segunda precisa de {needB} — e o outro fornece.",
    "supply.ENOUGH":
      "Cada um de vocês tem uma boa parte do que o outro precisa: {needA} para a primeira pessoa, {needB} para a segunda.",
    "supply.THIN":
      "O que cada um de vocês precisa — {needA} para a primeira pessoa, {needB} para a segunda — está escasso no outro.",
    "supply.SCARCE":
      "Nenhum de vocês consegue fornecer com facilidade o que o outro precisa: {needA} para a primeira pessoa, {needB} para a segunda, e os dois lugares estão vazios. É melhor buscar isso fora da relação.",
    "dayBranch.SAMHAP":
      "Os ramos do dia formam uma harmonia tripla — o par mais forte na posição do cônjuge.",
    "dayBranch.BANHAP":
      "Os ramos do dia formam uma meia harmonia em torno do eixo de uma tripla. Um par bem ajustado na posição do cônjuge.",
    "dayBranch.YUKHAP": "Os ramos do dia formam uma harmonia sêxtupla. Vocês se atraem.",
    "dayBranch.SAME":
      "Os ramos do dia são idênticos. Isso facilita as coisas, mas deixa pouca novidade.",
    "dayBranch.NEUTRAL": "Os ramos do dia não guardam nenhuma relação em especial.",
    "dayBranch.WONJIN":
      "Os ramos do dia ficam em ressentimento silencioso. Pouca coisa vem à tona abertamente, mas mágoas difíceis de nomear tendem a se acumular — melhor dizê-las na hora do que deixar passar.",
    "dayBranch.CHUNG":
      "Os ramos do dia se chocam. Esta posição é propensa a atrito, então o jeito de conversar importa.",
    "zodiac.SAMHAP":
      "{animalA} e {animalB} formam uma harmonia tripla — o melhor par do zodíaco.",
    "zodiac.BANHAP":
      "{animalA} e {animalB} formam uma meia harmonia em torno do eixo de uma tripla, então vocês combinam.",
    "zodiac.YUKHAP": "{animalA} e {animalB} formam uma harmonia sêxtupla. Vocês combinam muito bem.",
    "zodiac.SAME": "Vocês dois nasceram no ano de {animalA}, então os temperamentos se espelham.",
    "zodiac.NEUTRAL": "{animalA} e {animalB} não guardam nenhuma relação em especial.",
    "zodiac.WONJIN":
      "{animalA} e {animalB} ficam em ressentimento silencioso — raramente uma briga aberta, mas um desencontro sutil que tende a durar.",
    "zodiac.CHUNG":
      "{animalA} e {animalB} se chocam. Vocês diferem bastante, o que também significa que há muito a aprender.",
  },
  animals: {
    rat: "Rato",
    ox: "Boi",
    tiger: "Tigre",
    rabbit: "Coelho",
    dragon: "Dragão",
    snake: "Serpente",
    horse: "Cavalo",
    goat: "Cabra",
    monkey: "Macaco",
    rooster: "Galo",
    dog: "Cão",
    pig: "Porco",
  },
  elements: {
    WOOD: "Madeira",
    FIRE: "Fogo",
    EARTH: "Terra",
    METAL: "Metal",
    WATER: "Água",
  },
};
