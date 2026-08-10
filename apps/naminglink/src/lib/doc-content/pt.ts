import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Sobre",
    "title": "Sobre o Naming-Link",
    "summary": "Nós ajudamos você a escolher e entender nomes coreanos. Aqui está o que baseamos nossos resultados e o que deliberadamente não fazemos.",
    "backLabel": "Início",
    "sections": [
      {
        "title": "O que fazemos",
        "blocks": [
          {
            "p": "Naming-Link ajuda você a **escolher e entender nomes coreanos** — o hanja por trás do nome de uma criança, um nome coreano para usar no exterior, uma grafia em Hangul do seu próprio nome, e lembranças como um selo ou um relatório impresso."
          },
          {
            "p": "Ver seus resultados é **gratuito e não precisa de conta.** Itens pagos nunca revendem o que a tela já mostrou: eles abrem mais candidatos, adicionam análise escrita, ou transformam o resultado em algo que você pode guardar."
          }
        ]
      },
      {
        "title": "Para quem cada serviço é",
        "blocks": [
          {
            "p": "Existem dois tipos de serviço aqui: um para pessoas que **já têm um nome coreano**, e um para pessoas que **precisam de um.** Eles exigem coisas diferentes de você, então são oferecidos em idiomas diferentes."
          },
          {
            "ul": [
              "**Oferecido no seu idioma** — escrevendo seu próprio nome em Hangul e construindo um nome coreano. Estes são para pessoas sem um nome coreano, então seguem o idioma em que você chega.",
              "**Oferecido apenas em coreano** — encontrando o nome-hanja para uma criança, e transformando um nome coreano em um para uso no exterior. Ambos precisam de um **nome em Hangul existente** para funcionar, então as telas e seus guias permanecem em coreano."
            ]
          }
        ]
      },
      {
        "title": "Com base em que nossas respostas são",
        "blocks": [
          {
            "p": "O hanja vem da **tabela oficial de nome-hanja do Supremo Tribunal da Coreia.** Cada caractere tem uma leitura fixa para uso em nomes, e caracteres fora da tabela não podem ser registrados. Nós não adicionamos a essa lista ou escolhemos favoritos."
          },
          {
            "p": "Saju e figuras dos cinco elementos são calculados a partir do **calendário lunissolar coreano**, com o horário de nascimento corrigido para o horário solar verdadeiro do local de nascimento. A leitura é uma referência tradicional, não uma previsão."
          },
          {
            "p": "As explicações escritas são produzidas por IA. Para evitar que **invente coisas**, o modelo recebe apenas sua entrada e nossos próprios dados de referência, e é instruído a permanecer dentro disso. Os guias explicam isso em detalhes."
          }
        ]
      },
      {
        "title": "O que não fazemos",
        "blocks": [
          {
            "ul": [
              "**Nós não fazemos previsões.** Nada aqui promete sorte, riqueza ou proteção.",
              "**Nós não armazenamos seu nome.** Resultados gratuitos nunca são gravados em nossos servidores, e documentos pagos são entregues sem manter uma cópia do arquivo.",
              "**Pagar não compra uma resposta melhor.** Desbloquear com um anúncio e desbloquear com um pagamento dão exatamente o mesmo conteúdo."
            ]
          }
        ]
      },
      {
        "title": "Onde nossos dados e traduções se posicionam",
        "blocks": [
          {
            "p": "**Preferimos dizer isso claramente.** Dizer a você o que uma pessoa verificou e o que ninguém verificou é mais útil do que afirmar que tudo foi revisado."
          },
          {
            "ul": [
              "**Dados de nome-hanja** — a tabela de nome-hanja do {publisher}, a partir de {effectiveDate}. Mantemos um hash do arquivo fonte, então se a tabela mudar, podemos dizer o que mudou.",
              "**Compilado por** Platforest. Caracteres, leituras e significados são mantidos da tabela como estão; nós não adicionamos nem removemos.",
              "**Tradução** — escrita primeiro em coreano, depois em inglês, e então nos outros idiomas. **Estas são traduções automáticas, verificadas automaticamente** — para frases faltantes, terminologia consistente, e os valores inseridos permanecendo intactos. Elas não foram revisadas por falantes nativos.",
              "**Explicações escritas** são produzidas por IA, restritas à sua entrada e nossos próprios dados de referência para que não invente fatos."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "O serviço está disponível em 23 idiomas. PDFs pagos são emitidos em inglês para árabe e khmer — o renderizador de PDF não suporta esses scripts — e dizemos isso na tela antes de você pagar."
          }
        ]
      },
      {
        "title": "Contato",
        "blocks": [
          {
            "p": "Os detalhes da empresa e como nos contatar estão na [página de contato](/contact), incluindo reembolsos, solicitações de privacidade e relatórios de erros."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Como o Naming-Link funciona",
    "title": "No que baseamos seu nome",
    "summary": "Como escolhemos um sobrenome coreano, o que verificamos antes de sugerir um nome dado, e como escrevemos seu nome em Hangul — com as partes que deliberadamente deixamos de fora.",
    "backLabel": "Guia",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "caracteres de nome-hanja"
              },
              {
                "value": "{syllableCount}",
                "label": "sílabas em Hangul cobertas"
              },
              {
                "value": "{effectiveDate}",
                "label": "data de vigência da tabela"
              },
              {
                "value": "{avoidTotal}",
                "label": "caracteres tradicionalmente evitados"
              }
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Os guias abaixo cobrem os serviços oferecidos no seu idioma. O Naming-Link também tem dois serviços para pessoas que **já têm um nome coreano** — encontrando o nome-hanja para uma criança, e transformando um nome coreano em um para uso no exterior. Esses precisam de um nome em Hangul existente, então tanto os serviços quanto seus guias estão em coreano."
          },
          {
            "p": "[Sobre](/about) explica qual serviço é para quem."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Como funciona",
    "title": "Como escrevemos seu nome em Hangul",
    "summary": "Como escolhemos os sons ao escrever um nome estrangeiro em Hangul, e por que não anexamos hanja.",
    "backLabel": "Guia",
    "sections": [
      {
        "title": "Nós carregamos o som, não o significado",
        "blocks": [
          {
            "p": "Este serviço escreve **seu nome** em Hangul. Ele não lhe dá um nome coreano. Michael se torna 마이클 — o mesmo nome, escrito para que os coreanos possam ler e dizer. Nós não trocamos por um nome coreano que por acaso signifique algo semelhante."
          },
          {
            "p": "Se um nome coreano é o que você deseja, **isso é um serviço diferente.** Um mantém seu nome e muda apenas o script; o outro propõe um novo nome."
          }
        ]
      },
      {
        "title": "Os sons que o coreano não possui",
        "blocks": [
          {
            "p": "Cada idioma tem sons que o coreano não possui — f, v, z, th, e distinções vocálicas que o coreano não faz. Para esses, escrevemos o que **um falante de coreano realmente diz** quando lê seu nome em voz alta, em vez de transcrever a fonética original símbolo por símbolo. O objetivo é a grafia que será usada, não a mais tecnicamente fiel."
          },
          {
            "p": "A mesma grafia pode diferir dependendo de onde um nome vem, então pedimos seu idioma e país e trabalhamos a partir dessa pronúncia."
          }
        ]
      },
      {
        "title": "Várias grafias, lado a lado",
        "blocks": [
          {
            "p": "Não há uma única resposta correta. A grafia mais próxima do som original, a mais comumente usada na Coreia e a mais fácil de escrever são frequentemente três coisas diferentes. Portanto, mostramos todas juntas e dizemos o que as separa."
          },
          {
            "p": "Se nenhuma delas parecer certa, você pode adicionar uma dica sobre o som que deseja e executar novamente — por exemplo, que uma sílaba específica deve ser escrita de forma diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sem hanja aqui",
        "blocks": [
          {
            "p": "Não anexamos hanja a uma transliteração. Hanja carregam significado, e este fluxo é sobre som. Combinar caracteres apenas com som pode resultar em um significado que você nunca pediu."
          }
        ]
      },
      {
        "title": "Isso funciona ao contrário da romanização de passaporte",
        "blocks": [
          {
            "p": "Esses dois são fáceis de confundir, então aqui está a diferença: **eles funcionam em direções opostas.**"
          },
          {
            "ul": [
              "**A romanização** pega o nome em Hangul de uma pessoa coreana e o escreve no alfabeto latino. É fixo quando um passaporte é emitido, e a partir de então passagens, vistos e contas bancárias seguem essa grafia. 김민준 se torna Kim Minjun.",
              "**A transliteração em Hangul** — o que este serviço faz — funciona na direção oposta. Ela pega um nome escrito no alfabeto latino e escreve como soa em Hangul. Daniel se torna 대니얼."
            ]
          },
          {
            "p": "Então, o que você obtém aqui **não muda a grafia no seu passaporte.** Essa romanização já está fixada; este é o nome escrito de volta em Hangul. Os dois não sempre se convertem exatamente um no outro — escrever um som que o coreano não possui perde um pouco de informação no caminho."
          }
        ]
      },
      {
        "title": "Onde você usaria esta grafia",
        "blocks": [
          {
            "p": "Uma grafia em Hangul é geralmente necessária em lugares como estes."
          },
          {
            "ul": [
              "**Apresentando-se** — mostrando seu nome em Hangul, ou dizendo-o em coreano",
              "**Um campo de nome em Hangul em um formulário** — registros e aplicações que pedem seu nome em Hangul. Note que **a instituição decide o que vai em um documento oficial** — o que você obtém aqui não substitui isso",
              "**Um carimbo de nome ou lembrança** — a grafia a ser gravada"
            ]
          },
          {
            "p": "**É normal que mais de uma grafia seja defensável.** Quando um nome pode ser escrito de várias maneiras em Hangul, mostramos lado a lado e deixamos a escolha para você."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Como funciona",
    "title": "Como construímos um nome coreano",
    "summary": "Escolhemos entre sobrenomes que existem, avaliamos quão facilmente o nome é dito e escrito, e perguntamos para que o nome é.",
    "backLabel": "Guia",
    "sections": [
      {
        "title": "Começamos com o sobrenome",
        "blocks": [
          {
            "p": "Na Coreia, o sobrenome vem primeiro, e ao contrário dos nomes dados, não é livremente inventado — você o herda. Portanto, sugerimos apenas sobrenomes que as pessoas coreanas realmente têm. Nosso pool padrão é os **20 sobrenomes mais comuns**, que juntos cobrem cerca de 80% da população."
          },
          {
            "p": "Se seu próprio sobrenome coincidir com um verdadeiro coreano por som — Wang com 왕, Ye com 예 — colocamos esse primeiro. Manter um vínculo com seu nome original vale mais do que um sobrenome escolhido aleatoriamente."
          },
          {
            "p": "Você pode escolher um sobrenome você mesmo ou nos deixar recomendar um. De qualquer forma, será **um sobrenome que existe**."
          }
        ]
      },
      {
        "title": "Há vinte e seis sobrenomes para escolher",
        "blocks": [
          {
            "p": "Mantivemos a lista estreita de propósito. **Os sobrenomes coreanos realmente são concentrados** — Kim, Lee e Park sozinhos representam cerca de 45% da população, e os vinte principais cerca de 80%. Adicionar sobrenomes raros ampliaria o menu, mas também produziria nomes que os coreanos não ouvem como nomes."
          },
          {
            "ul": [
              "**Os vinte mais comuns** (cerca de 80% da população) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Sobrenomes reais adicionados para manter um vínculo sonoro** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "O segundo grupo existe para que **seu próprio sobrenome possa ser transferido por som**. Wang, Jin, Baek, Ma, Na e Yoo são sobrenomes que os coreanos já têm, então dizer seu nome mantém um vínculo com aquele com o qual você começou. Todos os vinte e seis são sobrenomes em uso real — nenhum deles é nossa invenção."
          }
        ]
      },
      {
        "title": "Fácil de dizer, fácil de escrever",
        "blocks": [
          {
            "p": "Este é um nome que as pessoas na Coreia realmente o chamarão, então a primeira coisa que verificamos é se um coreano pode ouvi-lo uma vez e escrevê-lo. Um nome que precisa ser soletrado toda vez é um fardo que você carrega, não nós."
          },
          {
            "p": "O significado também importa. Nomes dados coreanos geralmente carregam um, então dizemos como o nome é lido e por que o escolhemos — não apenas o nome em si."
          }
        ]
      },
      {
        "title": "Perguntamos para que o nome é",
        "blocks": [
          {
            "p": "Um nome para documentação universitária não é o mesmo que um nome que amigos gritarão através de uma sala, ou um apelido que você usará online. Perguntamos como você planeja usá-lo e levamos isso em conta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Isso não é uma transliteração",
        "blocks": [
          {
            "p": "Aqui propomos um **novo nome coreano**. Se você quiser que seu nome existente seja escrito em Hangul — Michael como 마이클 — veja o [guia de grafia em Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avisos",
    "title": "Avisos",
    "summary": "Onde anunciamos mudanças que afetam como você usa o serviço.",
    "backLabel": "Início",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contato",
    "title": "Entre em contato conosco",
    "summary": "Como nos contatar para perguntas, reembolsos, solicitações de privacidade e relatórios de erros, com os detalhes da nossa empresa.",
    "backLabel": "Início",
    "sections": [
      {
        "title": "Envie-nos um e-mail",
        "blocks": [
          {
            "p": "Escreva para **{email}**. Respondemos dentro de dois dias úteis. Para qualquer coisa sobre um pedido — pagamento, reembolso, um arquivo que você não recebeu — por favor inclua seu **número do pedido ou o e-mail com o qual você pagou**."
          },
          {
            "p": "Consultas por telefone: {customerCenter} (horário comercial coreano)."
          }
        ]
      },
      {
        "title": "O que enviar aqui",
        "blocks": [
          {
            "ul": [
              "**Pagamentos e reembolsos** — se um documento nunca foi produzido, ou o valor cobrado difere do seu pedido, reembolsamos integralmente. Veja a [política de reembolso](/refund-policy).",
              "**Privacidade** — solicitações para acessar, corrigir ou excluir seus dados. Veja a [política de privacidade](/privacy).",
              "**Correções** — se um significado, leitura ou cálculo de hanja parecer errado, nos avise. Mencionar qual tela e o que você inseriu ajuda bastante.",
              "**Qualquer outra coisa** — parcerias e imprensa vão para o mesmo endereço."
            ]
          }
        ]
      },
      {
        "title": "Detalhes da empresa",
        "blocks": [
          {
            "ul": [
              "**Entidade legal** — {companyName}",
              "**Representante** — {representative}",
              "**Número de registro comercial** — {businessNumber}",
              "**Número de vendas por correspondência** — {mailOrderNumber}",
              "**Endereço** — {address}",
              "**Atendimento ao cliente** — {customerCenter}",
              "**Email** — {email}",
              "**Responsável pela privacidade** — {privacyOfficer}",
              "**Fornecedor de hospedagem** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Você não precisa incluir um nome ou data de nascimento em sua mensagem. Resultados gratuitos nunca são armazenados em nossos servidores, então não podemos consultá-los novamente — um número de pedido é suficiente."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nossos Padrões",
    "title": "O Que Não Usamos",
    "summary": "Não atribuímos fortuna total ou pontuações numéricas, nem usamos contagens de traços. Os cinco elementos são usados apenas como um eixo suplementar. Aqui estão as razões.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "Razões para não atribuir fortuna total ou pontuações numéricas",
        "blocks": [
          {
            "p": "Existem métodos que atribuem fortuna total ou pontuações numéricas a nomes para classificá-los. O Naming-Link não fornece esses números. As razões são quatro."
          },
          {
            "p": "**Primeiro, não há apenas um padrão.** Os métodos para calcular fortuna variam por escola, e o mesmo nome pode ser avaliado positivamente por um padrão e negativamente por outro. Não temos base para decidir qual é o correto. É desonesto apresentar um como se fosse a resposta."
          },
          {
            "p": "**Segundo, esses cálculos dependem de contagens de traços.** No entanto, os dados do Supremo Tribunal não incluem contagens de traços. Além disso, as contagens de traços podem variar dependendo de serem contadas como caracteres regulares ou simplificados e de como os radicais são contados. Como os números fundamentais não estão definitivamente estabelecidos, as pontuações construídas sobre eles não podem ser definitivas."
          },
          {
            "p": "**Terceiro, números parecem mais sólidos do que a realidade.** Quando diz \"87 pontos\", soa como um valor medido em vez de uma interpretação convencional. Aqueles que nomeiam podem se sentir pressionados por esse número, deixando de lado o que é realmente importante (É agradável de chamar? O significado se encaixa? Contém os desejos desejados?)."
          },
          {
            "p": "**Quarto, não há como verificar.** A relação entre um nome e a vida de uma pessoa não pode ser verificada. Converter algo que não pode ser dito como certo ou errado em uma pontuação resulta em um número que não pode ser confirmado, mesmo que não possa estar errado."
          },
          {
            "p": "Usamos apenas o que pode ser **substanciado.** A tabela oficial de hanja do Supremo Tribunal, as leituras designadas para cada caractere e os significados listados na tabela. Em vez disso, fornecemos razões para a seleção deste candidato e por que certos caracteres foram excluídos, mostrando **razões em vez de pontuações**."
          }
        ]
      },
      {
        "title": "Não usamos contagens de traços",
        "blocks": [
          {
            "p": "Os dados oficiais de hanja fornecidos pelo Supremo Tribunal não incluem contagens de traços. Entre os {characterTotal} caracteres que recebemos, **nenhum caractere tem contagens de traços.**"
          },
          {
            "p": "Para usar contagens de traços, precisaríamos obter números de algum outro lugar, mas se não pudermos esclarecer de onde esses números vieram e quais critérios foram usados para contá-los, isso significaria julgar nomes com base em números infundados. Decidimos não avaliar nomes com base em valores que não podem ser substanciados."
          }
        ]
      },
      {
        "title": "Usamos os cinco elementos apenas como referência",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Os cinco elementos dispostos em um círculo: a geração ocorre entre vizinhos, o controle pula um",
              "wood": "madeira",
              "fire": "fogo",
              "earth": "terra",
              "metal": "metal",
              "water": "água",
              "saeng": "Geração — cada um dá origem ao seu vizinho",
              "geuk": "Controle — cada um restringe aquele que pula"
            },
            "caption": "As relações entre os cinco elementos. Mover ao longo do círculo representa geração mútua (相生), enquanto pular um e pressionar representa restrição mútua (相剋). Usamos essa relação apenas como um eixo suplementar para comparar candidatos."
          },
          {
            "p": "Se você inseriu seu mês de nascimento, usamos uma referência simplificada dos cinco elementos com base nesse mês como um eixo suplementar para comparar candidatos. No entanto, isso não é uma análise precisa de saju, e **não afirmamos que nomes determinam o destino ou caráter de uma pessoa.**"
          },
          {
            "p": "Na seleção final, o que priorizamos são sons, combinações de significados, os valores que a família deseja transmitir e se pode realmente ser registrado. Se você não inseriu seu mês de nascimento, excluímos completamente a referência dos cinco elementos da análise — não fazemos suposições arbitrárias sobre informações desconhecidas."
          },
          {
            "p": "Se você deseja uma análise precisa baseada em saju, cobrimos isso em um relatório detalhado separado. A razão pela qual não priorizamos os cinco elementos na correspondência gratuita de hanja é que não queremos apresentar julgamentos baseados nos cinco elementos derivados de uma data e hora de nascimento incompletas como se fossem definitivos."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Produtos Pagos",
    "title": "O que está incluído nos produtos pagos?",
    "summary": "Esclarecemos quanto é visível gratuitamente e quais recursos adicionais vêm com o pagamento para cada produto. Os preços são recuperados das configurações reais do produto.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "O que é visível gratuitamente?",
        "blocks": [
          {
            "p": "Criar um nome e visualizar os resultados é **gratuito**. Nenhum registro de associação é necessário. Você pode ver os significados correspondentes de hanja, criar nomes coreanos, conversão de nomes globais e notação de pronúncia em Hangul, junto com resultados recomendados e suas justificativas na tela."
          },
          {
            "p": "Produtos pagos não **revendem o que já foi mostrado na tela.** Eles abrem mais candidatos, adicionam mais explicações ou criam um formato que pode ser armazenado ou transmitido."
          }
        ]
      },
      {
        "title": "Divulgação completa de todos os candidatos — {priceUnlock}",
        "blocks": [
          {
            "p": "Os resultados recomendados são estruturados para abrir candidatos um por um. Ao visualizar anúncios, um se abre por vez, enquanto este produto **abre todos os candidatos restantes de uma vez**."
          },
          {
            "p": "Se você não está com pressa, não precisa comprar. Os **resultados da abertura via anúncios e os resultados do pagamento são completamente os mesmos** — é apenas uma questão de esperar, e pagar não resulta em melhores candidatos."
          }
        ]
      },
      {
        "title": "Detalhes do Hanja — Três Estágios",
        "blocks": [
          {
            "p": "Existem três produtos detalhados no fluxo de seleção de hanja para anexar a um nome em Hangul."
          },
          {
            "ul": [
              "**Máximo de 5 candidatos de hanja detalhados** — {priceFiveDetail}. Você pode expandir explicações para até cinco candidatos na tela. Não há PDF.",
              "**Máximo de 10 candidatos de hanja em PDF detalhado** — {priceTenDetail}. O número de candidatos aumenta para dez, e um documento PDF está incluído.",
              "**Máximo de 10 candidatos de hanja, relatório abrangente de saju e os cinco elementos** — {priceTenSaju}. Além do acima, inclui o gráfico de saju derivado da data de nascimento e as forças dos cinco elementos, examinando por que um determinado hanja se adequa a esse nome sob a perspectiva dos cinco elementos."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "O hanja em si é informação disponível publicamente",
        "blocks": [
          {
            "p": "Os hanja utilizáveis e seus significados vêm da tabela oficial de hanja para nomes definida pela Suprema Corte da Coreia, e todos estão disponíveis publicamente nos documentos de orientação do serviço. O que os produtos pagos vendem não é informação sobre hanja, mas **o ato de selecionar e explicar isso de acordo com o nome**."
          }
        ]
      },
      {
        "title": "PDFs para Usuários Globais",
        "blocks": [
          {
            "p": "Documentos disponíveis para converter nomes estrangeiros em nomes coreanos ou escrever nomes em Hangul. Os preços seguem os valores exibidos na tela de pagamento."
          },
          {
            "ul": [
              "**Relatório Premium de Nome Coreano** — 3 páginas. Inclui uma capa de caligrafia, o significado do nome e a razão para escolhê-lo, além da interpretação de saju e os cinco elementos.",
              "**Arte do Nome em Hangul** — 2 páginas. Inclui uma capa de caligrafia e guia de pronúncia. Contém como escrever o nome em Hangul e como pronunciá-lo."
            ]
          }
        ]
      },
      {
        "title": "Carimbo de Nome",
        "blocks": [
          {
            "p": "Gravamos o nome criado na tela em um carimbo físico e o enviamos para você. Os preços variam de acordo com o modelo — selo redondo {priceStampRound}, selo quadrado {priceStampSquare}, selo de ébano {priceStampEbony}. O envio internacional também está disponível."
          },
          {
            "p": "**A partir daqui, os produtos incluem envio.** Ao contrário dos itens anteriores, a produção e o envio levam tempo, e um endereço de recebimento é necessário. As informações de envio são usadas apenas para processamento de pedidos e retenção legal, e uma vez que o processamento esteja completo, serão destruídas após o período especificado na política."
          }
        ]
      },
      {
        "title": "Coisas a Saber Antes de Comprar",
        "blocks": [
          {
            "p": "**Produtos digitais são fornecidos imediatamente após o pagamento.** Você pode cancelar e receber um reembolso total a qualquer momento antes que o download comece, mas uma vez que o download esteja completo, a desistência devido a simples mudança de ideia é restrita (Artigo 17, Parágrafo 2 da Lei de Comércio Eletrônico). Esta condição é acordada separadamente na tela de pagamento."
          },
          {
            "p": "**Reclamações sobre o conteúdo dos resultados não são motivo para reembolso.** No entanto, se o documento não foi criado, o arquivo não pode ser aberto, ou o valor do pagamento difere do pedido, será processado como uma reemissão ou reembolso total."
          },
          {
            "p": "Condições detalhadas estão descritas na [Política de Reembolso](/refund-policy) e [Guia de Preços](/pricing). Este texto serve como um guia do que está incluído, e as condições legais são priorizadas nesses dois documentos."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const PT_NOTICES = {
  "kindLabels": {
    "service": "Serviço",
    "product": "Produtos",
    "policy": "Política",
    "support": "Suporte"
  },
  "intro": "Mudanças nos seus termos de uso — preços, políticas — são postadas aqui antes de entrarem em vigor. Melhorias internas não estão listadas: o que aparece aqui é o que você precisa saber.",
  "empty": {
    "title": "Nenhum aviso ainda",
    "body": "Quando algo mudar, aparecerá aqui."
  },
  "effective": "Entra em vigor {date}",
  "pager": {
    "label": "Páginas de aviso",
    "newer": "← Mais Novo",
    "older": "Mais Antigo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Páginas de Contato e Sobre estão agora abertas",
      "body": [
        "Perguntas, reembolsos, solicitações de privacidade e relatórios de erro agora têm um lugar único para ir. A página de contato no rodapé lista nosso e-mail e detalhes da empresa.",
        "Sobre o que nossas respostas se baseiam, e o que deliberadamente não fazemos, está escrito na página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Relatórios em PDF são emitidos em inglês para árabe e khmer",
      "body": [
        "Se você está usando o serviço em árabe ou khmer, o PDF que você compra é produzido em inglês. A ferramenta que organiza nossos documentos ainda não consegue definir parágrafos nesses dois scripts.",
        "A tela permanece em seu idioma, e seu nome é impresso em seu próprio script dentro do documento.",
        "A mesma nota aparece antes do pagamento. Quando a ferramenta suportar esses scripts, informaremos aqui."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pagamentos ainda não estão abertos",
      "body": [
        "Criar um nome e ler o resultado é gratuito hoje, e nenhuma conta é necessária.",
        "Itens pagos ainda não estão à venda. Os valores exibidos na página de preços são os que se aplicarão uma vez que as vendas sejam abertas."
      ]
    }
  }
} satisfies NoticeCopy;
