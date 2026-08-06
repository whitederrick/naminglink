// 드림링크 화면 사전의 Portuguese (Português)(pt) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const pt: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "O sonho de hoje, lido através dos símbolos tradicionais de sonhos coreanos",
  "currentLanguage": "Idioma atual",
  "moreLanguages": "Mais",
  "closeLanguages": "Fechar",
  "dream": {
    "title": "Interpretação de sonhos",
    "subtitle": "Escreva o sonho que teve e nós o procuraremos em um dicionário de símbolos tradicionais coreanos de sonhos.",
    "textLabel": "Sobre o que você sonhou?",
    "textPlaceholder": "Escreva como você se lembra. Por exemplo: um carpa saltou de água limpa",
    "moodLabel": "Como você se sentiu ao acordar",
    "moods": {
      "good": "Bom",
      "scary": "Aterrorizante",
      "strange": "Estranho",
      "sad": "Triste",
      "unsure": "Não tenho certeza"
    },
    "recurringLabel": "Eu tenho esse sonho repetidamente",
    "submit": "Leia meu sonho",
    "submitting": "Procurando…",
    "errorEmpty": "Por favor, escreva um pouco mais sobre o sonho.",
    "errorGeneric": "Não conseguimos carregar a leitura. Por favor, tente novamente em um momento.",
    "resultTitle": "Leitura de sonho",
    "symbolsHeading": "Símbolos encontrados em seu sonho",
    "noSymbols": "Nenhum símbolo tradicional do nosso dicionário apareceu neste sonho. Deixamos isso vazio em vez de inventar um significado.",
    "themesHeading": "O que eles apontam juntos",
    "conceptionNotice": "Símbolos tradicionalmente lidos como presságios de concepção aparecem aqui. Isso não determina a gravidez.",
    "disclaimer": "Este é um material de referência de uma perspectiva tradicional de leitura de sonhos, não é aconselhamento médico, financeiro ou legal. Não armazenamos o sonho que você escreveu.",
    "again": "Ler outro sonho"
  },
  "landing": {
    "title": "Leia seu sonho\ndo jeito tradicional",
    "subtitle": "Pesquisamos os símbolos do seu sonho em um dicionário de tradições de sonhos coreanos.\nSem data de nascimento, sem cadastro.",
    "howTitle": "Como funciona",
    "steps": [
      "Escreva o sonho como você se lembra. Uma frase ou duas são suficientes.",
      "Pesquisamos em um dicionário de símbolos de sonhos tradicionais coreanos o que apareceu nele. Se um símbolo não estiver lá, informamos.",
      "Você verá o que cada símbolo tem sido tradicionalmente interpretado e o que eles apontam juntos."
    ],
    "privacyTitle": "O sonho que você escreve não é armazenado",
    "privacyBody": "O que você escreve é usado apenas enquanto a leitura está sendo realizada e nunca é registrado.\nNenhuma conta é necessária, e nada é deixado no servidor uma vez que a leitura é concluída.",
    "disclaimer": "Este é um material de referência de uma perspectiva de 해몽 tradicional. Não é uma previsão do que está por vir, nem aconselhamento médico ou financeiro."
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
    "title": "Procurando os símbolos em seu sonho",
    "quotes": [
      "Um sonho tende a refletir os últimos dias mais do que os dias que virão.",
      "O mesmo símbolo foi lido de forma diferente dependendo de quem o sonhou.",
      "A tradicional 해몽 não é uma chave de respostas. É um corpo de histórias acumuladas ao longo do tempo.",
      "Um sonho assustador não é o mesmo que um sonho ruim. Pode ser a marca que uma mente assustada deixou para trás.",
      "Está tudo bem se você lembrar apenas de um fragmento. Um símbolo é suficiente para começar.",
      "Um sonho que continua voltando geralmente vem com algo que ficou inacabado.",
      "Quão clara era a água e qual era sua cor é o que os antigos leitores observavam mais de perto.",
      "Como você se sentiu ao acordar persiste tanto quanto o que você realmente viu.",
      "Sonho bom ou não, é melhor não deixar que ele decida seu dia.",
      "Uma leitura não é uma palavra sobre o que acontecerá. É um segundo olhar sobre o que já é."
    ],
    "watching": "Assistindo ao anúncio",
    "remaining": "Seu resultado abre em {seconds}s"
  },
  "dreamCard": {
    "title": "Guarde este sonho como um cartão",
    "body": "Colocamos o sonho que você escreveu e os símbolos que encontramos em uma única imagem. É **um arquivo de imagem, não um PDF**, então você pode salvá-lo ou enviá-lo como está.",
    "buyButton": "Adquira por {price}",
    "preparing": "Preparando",
    "ordering": "Criando o pedido…",
    "paying": "Processando o pagamento…",
    "issuing": "Criando o cartão…",
    "done": "Concluído. Use o botão abaixo para baixá-lo novamente.",
    "failed": "O pagamento ou o download falhou. Por favor, tente novamente em um momento.",
    "retry": "Baixar novamente",
    "contents": [
      "Os símbolos encontrados em seu sonho e o que eles tradicionalmente significam",
      "O que esses símbolos apontam juntos",
      "A data do sonho e a versão do dicionário"
    ],
    "consentLabel": "Este é um conteúdo digital entregue imediatamente após o pagamento. Eu entendo que **uma vez que o download é concluído, o direito de desistir por mudança de ideia é limitado**.",
    "consentRequired": "Você precisa concordar com os termos de desistência antes de pagar.",
    "productInfoTitle": "Informações do produto",
    "productInfo": [
      [
        "Fornecedor",
        "{brand}"
      ],
      [
        "Formato",
        "1 arquivo de imagem (PNG), baixado nesta tela logo após o pagamento. Não é um documento PDF."
      ],
      [
        "Requisitos",
        "Qualquer dispositivo que possa abrir uma imagem. Sem instalação e sem conta."
      ],
      [
        "Disponibilidade",
        "Sem limite de tempo. O arquivo baixado é seu para manter."
      ],
      [
        "Baixar novamente",
        "Até 5 vezes no mesmo pedido. Não mantemos o arquivo, então não pode ser feito novamente uma vez que você saia da tela de resultados."
      ],
      [
        "Cancelamento",
        "Reembolso total antes da conclusão do download. Depois, o cancelamento por mudança de ideia é limitado (Lei de Comércio Eletrônico da Coreia art. 17(2))."
      ],
      [
        "Custos de devolução",
        "Nenhum. Conteúdo digital não é enviado."
      ]
    ],
    "refundContact": "Para reembolsos ou perguntas, entre em contato com o suporte ou o endereço de e-mail abaixo. Se o arquivo nunca foi produzido, ou o valor cobrado difere do pedido, reembolsamos integralmente.",
    "pdfLanguageNotice": "O texto no cartão sai no mesmo idioma que esta tela."
  },
  "conceptionReport": {
    "title": "Mantenha a leitura de omen de concepção como um PDF",
    "body": "Quando símbolos tradicionalmente lidos como presságios de concepção aparecem, um PDF de 4 páginas apresenta o que apareceu, o que isso significa tradicionalmente e de onde vem essa leitura. Não determina a gravidez ou o sexo de uma criança.",
    "buyButton": "Adquira por {price}",
    "preparing": "Preparando",
    "ordering": "Criando o pedido…",
    "paying": "Processando pagamento…",
    "issuing": "Gerando o relatório…",
    "done": "Concluído. Use o botão abaixo para baixá-lo novamente.",
    "failed": "O pagamento ou o download falhou. Por favor, tente novamente em um momento.",
    "retry": "Baixar novamente",
    "contents": [
      "Página 1 — o sonho que você escreveu e o que foi encontrado nele",
      "Página 2 — cada símbolo e o que tradicionalmente significou",
      "Página 3 — por que estes são lidos como presságios de concepção",
      "Página 4 — uma página para guardar (a data e os avisos)"
    ],
    "consentLabel": "Este é um conteúdo digital entregue imediatamente após o pagamento. Eu entendo que **uma vez que o download é concluído, o direito de desistir por mudança de ideia é limitado**.",
    "consentRequired": "Você precisa concordar com os termos de desistência antes de pagar.",
    "productInfoTitle": "Informações do produto",
    "productInfo": [
      [
        "Fornecedor",
        "{brand}"
      ],
      [
        "Formato",
        "1 documento PDF (4 páginas), baixado nesta tela logo após o pagamento."
      ],
      [
        "Requisitos",
        "Qualquer dispositivo que possa abrir um PDF. Sem instalação e sem conta."
      ],
      [
        "Disponibilidade",
        "Sem limite de tempo. O arquivo baixado é seu para manter."
      ],
      [
        "Baixar novamente",
        "Até 5 vezes no mesmo pedido. Não mantemos o arquivo, então não pode ser recriado uma vez que você saia da tela de resultados."
      ],
      [
        "Retirada",
        "Reembolso total antes da conclusão do download. Depois, a retirada por mudança de ideia é limitada (Lei de Comércio Eletrônico da Coreia art. 17(2))."
      ],
      [
        "Custos de devolução",
        "Nenhum. Conteúdo digital não é enviado."
      ]
    ],
    "refundContact": "Para reembolsos ou perguntas, entre em contato com o suporte ou o endereço de e-mail abaixo. Se o documento nunca foi produzido, ou o valor cobrado difere do pedido, reembolsamos integralmente.",
    "pdfLanguageNotice": "O PDF sai no mesmo idioma que esta tela."
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
  }
};
