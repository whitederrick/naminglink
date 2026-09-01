import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "guide": {
    "eyebrow": "Base para Cálculo",
    "title": "Qual é a base para cálculo?",
    "summary": "Divulgamos todas as regras que o Dreams-Link utiliza. Você pode verificar quais símbolos são encontrados, o que está escrito no dicionário — de onde vêm as interpretações exibidas na tela.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Todos os números escritos aqui são **lidos diretamente do dicionário de símbolos e das regras de correspondência.** Como não transcrevemos manualmente o texto, se o dicionário for expandido ou as regras forem alteradas, os números nestes documentos também mudarão."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base do Serviço",
    "title": "Como encontrar símbolos em histórias de sonhos.",
    "summary": "Explica como os símbolos são selecionados de frases escritas livremente e como filtramos um símbolo que apenas acontece de estar dentro de uma palavra mais longa — 별 (\"estrela\") dentro de 특별할 (\"nada especial\").",
    "backLabel": "Base para Interpretação",
    "sections": [
      {
        "title": "Encontramos símbolos no texto que você fornece.",
        "blocks": [
          {
            "p": "Quando você escreve livremente sua história de sonho, buscamos símbolos nesse texto a partir do dicionário. Você não precisa selecionar itens ou escrever em um formato específico. Apenas escreva como normalmente faria, como 'Na noite passada, uma enorme píton se enrolou em mim.'"
          },
          {
            "p": "Ao buscar, olhamos não apenas para o nome do símbolo, mas também para **{aliasTotal} nomes alternativos**. Estas são palavras que se referem à mesma coisa, como 구렁이 (gureongi) e 뱀 (baem), 떨어지다 (tteoreojida) e 빠지다 (ppajida). Variações com terminações, como 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), também estão incluídas."
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
              "별 (\"estrela\") escondido dentro de 특**별**할 (\"nada especial\")",
              "게 (\"caranguejo\") escondido dentro de 누군가에**게** (\"por alguém\")",
              "말 (\"cavalo\") dentro de **말**했다 (\"disse\"), e 배 (\"barco, pêra\") dentro de **배**가 고팠다 (\"estávamos com fome\")"
            ]
          },
          {
            "p": "Contar esses como símbolos leva a interpretações irrelevantes. Portanto, examinamos os caracteres ao redor — se **há um caractere coreano na frente**, tratamos isso como parte de uma palavra mais longa e não contamos, e verificamos **se o que segue é uma partícula ou uma terminação verbal**, permitindo que 「소가」 (soga) passe enquanto filtramos 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "É assim que tem funcionado",
        "blocks": [
          {
            "p": "Antes de implementar esta regra, ao testar com doze frases reais, **todas as doze** continham símbolos irrelevantes. Uma frase sem conteúdo significativo foi até marcada como um a conception dream (sonho de concepção)."
          },
          {
            "p": "Agora, uma permanece — o 배 (bae) em 「배가 고팠다」 (bae ga gopatda). Como soa igual, mas tem um significado diferente, não pode ser filtrado apenas pelos caracteres ao redor."
          },
          {
            "p": "Não encontrar algo é uma questão honesta. No entanto, encontrar algo irrelevante significa estabelecer uma tradição por trás daquela palavra que ela nunca teve."
          }
        ]
      },
      {
        "title": "Os mesmos caracteres sempre geram os mesmos resultados",
        "blocks": [
          {
            "p": "Não há espaço para coincidência nas regras de correspondência. Como o dicionário é fixo e as regras são estabelecidas, se você inserir a mesma frase novamente, **o mesmo símbolo aparecerá na mesma ordem**. A interpretação que você vê hoje não diferirá da que você verá amanhã."
          },
          {
            "p": "Essa qualidade também é uma promessa que fizemos a nós mesmos. Interpretações que mudam a cada vez são divertidas, mas carecem de fundamento. Isso se conecta à história de [por que não usamos modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informações Pessoais",
    "title": "O Método de Não Armazenar Sonhos que Você Anota",
    "summary": "Explicamos o que significa tecnicamente que as histórias de sonhos não são registradas em nenhum lugar, e o que está contido no link de resultado.",
    "backLabel": "Base de Interpretação",
    "sections": [
      {
        "title": "Nenhuma Associação Necessária",
        "blocks": [
          {
            "p": "O Dreams-Link não cria contas. Não coletamos nomes, e-mails ou números de telefone. As únicas coisas que coletamos são os sonhos que você anota, como você se sentiu ao acordar, e se você sonha o mesmo sonho repetidamente, e isso não permanece após a interpretação ser concluída."
          },
          {
            "p": "As histórias de sonhos são o valor mais privado que este serviço recebe. É por isso que as regras são mais rigorosas do que o necessário — não criamos nem uma tabela para anotar o que você envia."
          }
        ]
      },
      {
        "title": "O que está contido no link de resultado",
        "blocks": [
          {
            "p": "Quando o cálculo é concluído, o endereço parecerá assim."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "O que segue **#** é o valor de entrada. Esta parte é chamada de **fragmento**, que é uma **parte que o navegador não envia para o servidor**. Este é um comportamento padrão da web e não uma regra que criamos — foi originalmente projetado para indicar uma localização dentro de um documento, então o servidor não tem necessidade de vê-lo."
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
            "p": "O fato de que não é armazenado no servidor não significa que o link é seguro. O link de resultado contém o sonho que você forneceu, então a pessoa que recebe esse link pode ler esse conteúdo."
          }
        ]
      },
      {
        "title": "Por que o cálculo é feito no servidor, mas não armazenado?",
        "blocks": [
          {
            "p": "O cálculo em si é feito no servidor. Encontrar símbolos requer o dicionário completo, e esse dicionário é grande demais para ser enviado ao navegador. Manter o dicionário no servidor também significa que, quando um erro é corrigido, isso é refletido para todos de uma vez. No entanto, **após processar a solicitação, esse valor não é usado em nenhum lugar.** Não há código para inseri-lo no banco de dados."
          },
          {
            "p": "Um registro mínimo necessário para operação é mantido — um contador para evitar que a mesma pessoa envie muitas solicitações em um curto período. Isso não inclui o conteúdo do sonho, e o IP de acesso também não é retido. Apenas um valor, hash com a data, é contado, e esse valor muda quando o dia muda."
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
              "**Não há diário de sonhos.** Você não pode recuperar a interpretação da semana passada, e deve ter o link para vê-la novamente. Isso é feito intencionalmente — para criar um diário, os escritos mais privados devem ser continuamente armazenados.",
              "**Calculamos o mesmo valor novamente a cada vez.** Não há cache. Em vez disso, o dicionário é fixo, e as regras de correspondência são determinísticas, então o mesmo texto sempre gerará o mesmo símbolo — as regras substituem o que o cache teria garantido.",
              "**Atualizar trará novamente o portão de anúncios.** Isso ocorre porque não há lugar para deixar registros de visualização."
            ]
          }
        ]
      },
      {
        "title": "Em caso de compra",
        "blocks": [
          {
            "p": "Se você comprar um relatório, um registro de transação será mantido naquele momento. O pagamento tem um período de retenção definido por lei, e sem um histórico de pedidos, reembolsos não podem ser processados. No entanto, mesmo assim, **o texto do sonho usado para a leitura não está anexado ao pedido** — ele é recebido novamente e escrito naquele momento ao criar o documento após a confirmação do pagamento."
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
        "title": "Contato por Email",
        "blocks": [
          {
            "p": "Por favor, envie consultas para **{email}**. Responderemos dentro de 2 dias úteis. Para consultas sobre pagamento e reembolso, é mais rápido incluir seu **número do pedido ou email de pagamento**."
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
              "**Relatar Erros de Interpretação** — Se símbolos foram encontrados incorretamente ou a interpretação parece estranha, por favor, nos avise. Se você incluir quando escreveu essa história de sonho, podemos consultá-la novamente com o mesmo texto."
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
              "**Provedor de Hospedagem** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Você não precisa reescrever o sonho que forneceu no email de consulta. Não salvamos entradas, então não podemos consultá-las novamente, e o número do pedido é suficiente para verificação. Por favor, escreva-o apenas se for absolutamente necessário, como para relatar erros de interpretação."
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
            "p": "Embora seja comumente abordado em serviços de interpretação de sonhos, não fazemos isso. **Não há base na interpretação tradicional de sonhos para tirar números de sonhos.** Embora existam registros de interpretação de sonhos com porcos como riqueza, não há regra em nenhuma literatura que produza seis números a partir disso."
          },
          {
            "p": "Para criá-los, teríamos que inventá-los, e nesse momento, este serviço não seria mais um lugar para transmitir as interpretações transmitidas pela tradição. Isso é especialmente preocupante, pois pode levar a perdas financeiras."
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
            "p": "Apenas afirmaremos que um símbolo interpretado como um a conception dream (sonho de concepção) apareceu. Se você está grávida ou se a criança é uma filha ou um filho **não é algo que pode ser conhecido através dos sonhos.** Tais declarações não aparecem na tela ou em documentos pagos."
          }
        ]
      },
      {
        "title": "Não vendemos talismãs ou amuletos",
        "blocks": [
          {
            "p": "Um símbolo lido como inauspicioso não é motivo para comprar nada. Um sonho inauspicioso tem sido tradicionalmente usado para **indicar uma situação a ser examinada agora**, não para pagar para evitar algo."
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
            "p": "Para símbolos que não existem no dicionário, **afirmaremos que não conseguimos encontrá-los.** Não juntamos semelhantes ou preenchermos o espaço com frases plausíveis. Portanto, este serviço não [usa inteligência artificial para interpretação de sonhos](/guide/no-ai). O modelo não diz que não sabe o que não sabe."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Introdução",
    "title": "Introdução ao Dreams-Link",
    "summary": "Este é um serviço que interpreta sonhos usando um dicionário de símbolos de interpretação de sonhos tradicional. Esclarece o que é baseado e o que não é declarado.",
    "backLabel": "Voltar para a Página Inicial",
    "sections": [
      {
        "title": "O que fazemos?",
        "blocks": [
          {
            "p": "Dreams-Link encontra **símbolos usados na interpretação de sonhos tradicional** a partir dos sonhos que você escreve e mostra seus significados. Como os sonhos são algo que temos todos os dias, as interpretações que você vê na tela são **gratuitas e não requerem associação.**"
          },
          {
            "p": "As únicas coisas vendidas por uma taxa são **duas formas de preservação** — uma imagem contendo um bom sonho (cartão de sonho) e um PDF que contém o contexto quando um símbolo tradicionalmente considerado um sonho de concepção aparece."
          }
        ]
      },
      {
        "title": "Qual é a base?",
        "blocks": [
          {
            "p": "A base para a interpretação é um **dicionário de {symbolTotal} símbolos**. Encontramos símbolos no texto do sonho e mostramos apenas os significados registrados no dicionário para esses símbolos. Se um símbolo tem múltiplos significados, escolhemos com base na situação — como o sol nascente e o sol poente são tradicionalmente interpretados como opostos."
          },
          {
            "p": "Todos os significados no dicionário são **traduzidos dos textos originais de antigos livros de interpretação de sonhos**, e cada significado é acompanhado pelo texto original que serviu como base. Os textos originais usados como base são dois — o **Zhou Gong's Dream Interpretation**, que tem sido lido há muito tempo na Ásia Oriental, e o **Miller's Dream Book** do Ocidente publicado em 1901."
          },
          {
            "p": "A busca é feita **apenas por regras fixas**. O mesmo sonho sempre produzirá os mesmos símbolos, e as interpretações não mudam de ontem para hoje."
          }
        ]
      },
      {
        "title": "O que não dizemos?",
        "blocks": [
          {
            "p": "**Não criamos significados tradicionais que não estão no dicionário.** Se nenhum símbolo for encontrado, simplesmente afirmamos que nenhum foi encontrado e concluímos. Preencher esse espaço com palavras plausíveis é o que este serviço é mais cauteloso."
          },
          {
            "p": "**Sonhos de concepção são meramente indicações, não determinações.** Apenas informamos que um símbolo tradicionalmente considerado um sonho de concepção apareceu no sonho. Não prevemos gravidez ou o gênero da criança, e não há base para tais afirmações."
          },
          {
            "p": "Não fazemos **afirmações definitivas sobre saúde, riqueza ou carreira.** Isso é uma referência da perspectiva da interpretação de sonhos tradicional e não é aconselhamento médico, financeiro ou legal."
          }
        ]
      },
      {
        "title": "Não mantemos os sonhos que você escreve.",
        "blocks": [
          {
            "p": "Histórias de sonhos são a parte mais privada do que este serviço recebe. Portanto, **não as armazenamos.** As entradas são usadas apenas para cálculos e não são registradas de nenhuma forma no servidor."
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
            "p": "O método é descrito em mais detalhes no [documento guia](/guide). Informações comerciais e detalhes de contato podem ser encontrados em [entre em contato conosco](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Base do serviço",
    "title": "Qual é a base do dicionário de símbolos?",
    "summary": "Esclarece de onde vêm as interpretações. Os critérios para dividir {symbolTotal} símbolos em oito categorias, a razão para anexar trechos de texto original a cada significado, e o princípio de não preencher espaços vazios.",
    "backLabel": "Base da interpretação",
    "sections": [
      {
        "title": "Mostramos apenas o que está escrito no dicionário.",
        "blocks": [
          {
            "p": "As interpretações do Dreams-Link vêm de um **dicionário de símbolos pré-escrito**. Encontramos símbolos no texto que você fornece e mostramos os significados registrados no dicionário para esses símbolos como estão. Não criamos palavras que não estão no dicionário."
          },
          {
            "p": "Atualmente, o dicionário contém **{symbolTotal} símbolos**, e todos esses símbolos têm um total de **{meaningTotal} significados**. Alguns símbolos têm apenas um significado, mas a maioria tem vários, e para cada significado, **a situação em que esse significado se aplica** também é observada."
          }
        ]
      },
      {
        "title": "Dividido em oito categorias.",
        "blocks": [
          {
            "p": "Agrupamos o que aparece nos sonhos em oito categorias com base em suas características. O número atualmente listado está entre parênteses."
          },
          {
            "ul": [
              "**Objetos**({categoryThing}) · **Ações**({categoryAction}) · **Animais**({categoryAnimal}) — as três categorias mais espessas. Estes são principalmente o que os antigos livros de interpretação de sonhos discutem: objetos visíveis, bestas e ações realizadas em sonhos.",
              "**Natureza**({categoryNature}) · **Pessoas**({categoryPerson}) — coisas grandes e antigas como água, fogo, sol e lua, e pessoas que aparecem em sonhos como reis, ladrões e os falecidos.",
              "**Lugares**({categoryPlace}) · **Corpo**({categoryBody}) · **Cores**({categoryColor}) — locais como casas e tumbas, partes do corpo como dentes, cabelo e sangue, e cores."
            ]
          },
          {
            "p": "Para visualizá-los por categoria, você pode ver a lista completa no [dicionário de símbolos](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Cada significado é acompanhado por um trecho de texto original.",
        "blocks": [
          {
            "p": "Cada um dos **{meaningTotal} significados** no dicionário é acompanhado pelo **trecho de texto original** que serviu como base para esse significado. Todos os {symbolTotal} símbolos têm isso — se não houver trecho de texto original, a entrada em si não pode ser criada."
          },
          {
            "p": "Os textos originais usados como base são dois. **Zhou Gong's Dream Interpretation** é um livro de interpretação de sonhos que tem sido lido há muito tempo na Ásia Oriental, e **Miller's Dream Book** é um livro ocidental publicado em 1901. Quando você abre um símbolo, pode ver de qual texto original o significado vem, junto com o trecho e seu significado."
          },
          {
            "p": "**Não preenchemos espaços vazios.** Adicionar origens plausíveis tornaria o documento mais extenso, mas nesse momento, este dicionário não seria mais uma tradução do que foi transmitido, mas sim uma fabricação. Não escrevemos o que não está no texto original, e para o que escrevemos, devemos anexar o texto original."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ao expandir, expandimos apenas a partir do texto original.",
        "blocks": [
          {
            "p": "Tentamos criar entradas com base em modelos de símbolos, mas as entradas resultantes repetem as mesmas palavras como 「amor → bom relacionamento」 ou falham em fornecer qualquer base da tradição. Portanto, **não incluímos nenhuma.** O tamanho atual do dicionário se deve à tradução dos textos originais, não à criação de entradas — as razões para não usar modelos estão detalhadas em [por que não usamos modelos](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Bom e mau são predeterminados pelo dicionário.",
        "blocks": [
          {
            "p": "Cada símbolo é acompanhado por indicações de auspiciosidade e inauspiciosidade. **Bom {polarityPositive}**, **ambivalente dependendo da situação {polarityAmbivalent}**, **cauteloso {polarityNegative}**, e **neutro {polarityNeutral}**."
          },
          {
            "p": "Entre as quatro categorias, **a maioria são aquelas que variam dependendo da situação.** Isso não é algo que equilibramos; é como está escrito nos textos originais — mesmo para o mesmo símbolo, há muitos lugares onde foi interpretado de forma oposta dependendo do que foi feito. Este valor reflete a natureza de cada símbolo, e a atmosfera geral do sonho é recalculada reunindo os símbolos encontrados."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Base do Serviço",
    "title": "Por que o mesmo símbolo tem significados diferentes.",
    "summary": "O sol nascente e o sol poente são tradicionalmente interpretados como opostos. Isso discute a estrutura onde {symbolTotal} símbolos têm {meaningTotal} significados e como discernir a situação.",
    "backLabel": "Base da interpretação",
    "sections": [
      {
        "title": "Mesmo que os símbolos sejam os mesmos, situações diferentes geram significados diferentes.",
        "blocks": [
          {
            "p": "Em antigos livros de interpretação de sonhos, um símbolo não tem sempre um significado. Mesmo para o mesmo sol, **o sol nascente e o sol poente foram interpretados como opostos** — o primeiro indica prosperidade no lar, enquanto o último indica preocupações sobre perder os pais. O dicionário é escrito dessa forma."
          },
          {
            "p": "A razão pela qual os {symbolTotal} símbolos têm um total de {meaningTotal} significados é que para cada significado, **a situação em que esse significado se aplica** também é observada, então se essa situação é visível no texto que você fornece, escolhemos esse significado."
          }
        ]
      },
      {
        "title": "Como discernimos a situação?",
        "blocks": [
          {
            "p": "Procuramos ver se há palavras indicando a situação no texto que você fornece. Na frase 「Eu vi o sol se pondo」, a situação de pôr-se é indicada, enquanto em 「Eu vi o sol apenas nascendo」, a situação de nascer é indicada. Se não houver palavras indicando a situação, interpretamos com base no **significado básico** desse símbolo."
          },
          {
            "p": "Portanto, quando você escreve seu sonho, por favor inclua **não apenas o que apareceu, mas também quais ações foram tomadas**; isso tornará a interpretação mais precisa. Dizer \"Eu vi um porco\" transmite menos do que \"o porco entrou na casa.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quanto mais você escreve, melhor, mas não há necessidade de escrever extensivamente.",
        "blocks": [
          {
            "p": "Algumas frases são suficientes. Escrever mais não significa necessariamente encontrar mais símbolos; na verdade, se declarações não relacionadas forem misturadas, isso pode levar a símbolos incorretos."
          }
        ]
      },
      {
        "title": "Existem {contextSplitSymbolTotal} símbolos com significados variados.",
        "blocks": [
          {
            "p": "Dos {symbolTotal} símbolos no dicionário, **{contextSplitSymbolTotal}** têm significados que variam dependendo da situação. O restante pode ser interpretado em uma única direção, independentemente da situação."
          },
          {
            "p": "Esses **{contextSplitSymbolTotal}** símbolos são os mais delicados. Interpretar mal a situação pode levar a transmitir boas notícias como más notícias, ou vice-versa. Portanto, se a situação não estiver clara, seguimos o **significado básico do símbolo** sem forçar uma escolha — não queremos falar do incerto como se fosse certo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "A sensação ao acordar também é levada em conta.",
        "blocks": [
          {
            "p": "As sensações e repetições perguntadas abaixo do conteúdo do sonho não são usadas para encontrar símbolos. Elas são referenciadas ao determinar qual direção interpretar em casos de significados variados. Você não precisa escolher; os resultados ainda serão fornecidos."
          }
        ]
      },
      {
        "title": "A atmosfera geral do sonho é contada separadamente.",
        "blocks": [
          {
            "p": "Se múltiplos símbolos forem encontrados, reunimos se cada símbolo é positivo ou cauteloso para determinar o tom geral do sonho. Um sonho que apresenta um bom símbolo e um símbolo cauteloso não é simplesmente chamado de \"bom sonho.\""
          },
          {
            "p": "Você pode visualizar os vários símbolos e seus significados no [dicionário de símbolos](/dream/symbols). Também é bom dar uma olhada no que está incluído antes de anotar seu sonho."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Base do serviço",
    "title": "Critérios para distinguir entre sonhos auspiciosos e ominosos",
    "summary": "Os quatro valores atribuídos a cada símbolo e sua distribuição, as razões para os significados mais variados e por que discutimos sonhos mistos como mistos.",
    "backLabel": "Base da interpretação",
    "sections": [
      {
        "title": "Cada símbolo é atribuído a uma das quatro categorias.",
        "blocks": [
          {
            "p": "Os {symbolTotal} símbolos no dicionário são categorizados como um dos seguintes."
          },
          {
            "ul": [
              "**Positivo {polarityPositive}** — interpretado como eventos agradáveis como riqueza, celebrações ou benfeitores.",
              "**Ambivalente {polarityAmbivalent}** — símbolos como o sol ou o porco que podem ter seus significados invertidos dependendo das ações tomadas. **Esta é a categoria mais comum e a mais cautelosa.**",
              "**Cauteloso {polarityNegative}** — interpretado como disputas, perdas ou eventos negativos.",
              "**Neutro {polarityNeutral}** — símbolos que não são nem auspiciosos nem ominosos em si, como cores."
            ]
          }
        ]
      },
      {
        "title": "Razões para os significados mais variados",
        "blocks": [
          {
            "p": "Este não é um equilíbrio que estabelecemos. **É como os textos originais estão escritos.** Textos antigos de interpretação de sonhos registraram significados diferentes para o mesmo símbolo dependendo da situação, e muitas dessas situações são opostas — pegar um porco é auspicioso, mas um porco morrendo por conta própria é ominoso, e o mesmo se aplica ao sol nascente e ao sol poente."
          },
          {
            "p": "Portanto, o fato de que \"um bom símbolo apareceu\" não significa \"coisas boas acontecerão.\" O que podemos transmitir é limitado a como esse símbolo foi interpretado na tradição."
          }
        ]
      },
      {
        "title": "O tom de um sonho é coletado de seus símbolos.",
        "blocks": [
          {
            "p": "Se múltiplos símbolos forem encontrados, reunimos seus significados auspiciosos e cautelosos para determinar o tom geral do sonho. Se apenas símbolos positivos aparecerem, é um bom sonho; se apenas símbolos cautelosos aparecerem, é um sonho cauteloso; se **mistos, discutiremos como mistos.**"
          },
          {
            "p": "Não forçamos uma interpretação mista em um único lado. Na realidade, os sonhos que as pessoas têm são principalmente mistos, e resumi-los como \"um bom sonho\" não é nem preciso nem útil."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palavras não ditas",
        "blocks": [
          {
            "p": "Não fazemos declarações definitivas sobre o que acontecerá, quando acontecerá, ou sobre saúde e riqueza. Traduzir os significados de símbolos tradicionais é diferente de prever o futuro."
          }
        ]
      },
      {
        "title": "Quando sonhos cautelosos aparecem",
        "blocks": [
          {
            "p": "Mesmo que um símbolo interpretado como cauteloso apareça, isso não significa necessariamente más notícias. Na interpretação tradicional de sonhos, sonhos ominosos têm sido geralmente usados para indicar **a situação que precisa ser examinada agora.** Se um símbolo interpretado como uma disputa aparece, pode ser lido como uma sugestão para manter a boca fechada."
          },
          {
            "p": "Pelo mesmo motivo, este serviço não vende talismãs ou amuletos. As únicas coisas vendidas são [dois métodos para manter seus sonhos](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sonhos de concepção",
    "title": "Como distinguir sonhos de concepção",
    "summary": "Como determinamos os {conceptionSymbolTotal} símbolos de sonho de concepção, por que nem todos os sonhos com porcos são sonhos de concepção, e o princípio de que não determinamos gravidez ou gênero.",
    "backLabel": "Base da interpretação",
    "sections": [
      {
        "title": "Primeiro, vamos esclarecer.",
        "blocks": [
          {
            "p": "**Dreams-Link não determina o estado de gravidez. Também não afirmamos o gênero da criança.** Isso não é algo que pode ser conhecido através de sonhos, nem é algo que podemos fazer."
          },
          {
            "p": "O que podemos transmitir é limitado a isso — **o fato de que um símbolo tradicionalmente interpretado como um sonho de concepção apareceu neste sonho.** Como esse símbolo foi interpretado pelos antigos é tudo o que podemos fornecer."
          }
        ]
      },
      {
        "title": "Existem {conceptionSymbolTotal} símbolos interpretados como sonhos de concepção.",
        "blocks": [
          {
            "p": "Dos {symbolTotal} símbolos no dicionário, **{conceptionSymbolTotal}** são marcados como sonhos de concepção. Muitos são animais como dragões, porcos e tigres, bem como frutas como pêssegos, caquis e jujubas, e também incluem o sol e a lua."
          },
          {
            "p": "No entanto, **só porque esse símbolo apareceu não significa imediatamente que é um sonho de concepção.** É aqui que este serviço fez um esforço significativo."
          }
        ]
      },
      {
        "title": "Determinamos com base no significado escolhido, não no símbolo.",
        "blocks": [
          {
            "p": "O porco é um símbolo de sonhos de concepção, mas também é **o representante de sonhos de riqueza.** Se declararmos que é um sonho de concepção apenas porque o símbolo apareceu, então todos que sonham com porcos estariam tendo sonhos de concepção. Na realidade, a maioria foi interpretada como sonhos de riqueza."
          },
          {
            "p": "Portanto, olhamos para **o significado realmente escolhido daquele símbolo, não apenas o símbolo em si.** Marcamos como um sonho de concepção apenas quando o significado inclinado para a concepção é escolhido com base na situação que você forneceu. Mesmo com o mesmo porco, a interpretação pode diferir com base na frase."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se você mencionar gravidez, olharemos para isso primeiro.",
        "blocks": [
          {
            "p": "Se sua escrita incluir termos como gravidez, sonhos de concepção ou parto, priorizaremos o significado de concepção entre os significados que esse símbolo possui. Mesmo o mesmo sonho pode ser interpretado de maneira diferente com base na situação atual."
          }
        ]
      },
      {
        "title": "A razão para ter um relatório separado de sonhos de concepção.",
        "blocks": [
          {
            "p": "Sonhos de concepção servem a um propósito diferente de outros sonhos. Eles são frequentemente discutidos muito tempo depois que a criança nasce e compartilhados entre membros da família. Portanto, em vez de apenas visualizá-lo na tela, criamos um **documento que pode ser mantido.**"
          },
          {
            "p": "O que está incluído é descrito em [dois métodos para manter seus sonhos](/guide/reports). Você pode visualizar todas as interpretações sem comprá-las."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Como Usar",
    "title": "Como Escrever um Sonho",
    "summary": "Se você anotar o que viu e fez, será interpretado bem. Explicamos por que um único verbo decide o significado e por que também perguntamos como você se sentiu e se o sonho se repete.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Por favor, escreva o que você viu e fez",
        "blocks": [
          {
            "p": "Não há um formato específico. Duas ou três frases, como você falaria normalmente, são suficientes. No entanto, o que é bem interpretado é determinado — **o que você viu** e **o que aconteceu**."
          },
          {
            "ul": [
              "Bem interpretado — 「Uma grande cobra se enrolou em mim」, 「Eu vi água clara fluindo」, 「Meu dente caiu sozinho」",
              "Não interpretado — 「Eu fiquei com medo」, 「Eu me senti estranho」, 「Parecia que alguém me odiava」"
            ]
          },
          {
            "p": "Se você escrever apenas seus sentimentos, não haverá símbolos a serem encontrados. A interpretação de sonhos tradicional fala sobre [objetos e ações](/guide/categories), não emoções."
          }
        ]
      },
      {
        "title": "Escrever o que você fez torna mais preciso",
        "blocks": [
          {
            "p": "Mesmo o mesmo símbolo pode ter significados diferentes dependendo da situação, com {contextSplitSymbolTotal} casos. O nascer e o pôr do sol foram tradicionalmente interpretados de maneiras opostas."
          },
          {
            "p": "Portanto, 「Eu vi um porco」 é menos preciso do que 「O porco entrou na casa」, e 「Havia água」 é menos preciso do que 「Eu bebi água clara」. **Um único verbo determina o significado.**"
          }
        ]
      },
      {
        "title": "A razão para perguntar sobre sentimentos e recorrência",
        "blocks": [
          {
            "p": "Abaixo do conteúdo do sonho, há um lugar para escolher **como você se sentiu ao acordar** e **se você tem sonhos recorrentes**. Você não precisa selecionar ambos para que os resultados sejam fornecidos."
          },
          {
            "p": "Esses valores não são usados para encontrar símbolos. Eles são referenciados ao decidir **qual significado escolher** do mesmo símbolo e como transmitir os resultados. Sonhos recorrentes foram tradicionalmente vistos de maneira diferente de um sonho que foi tido uma vez."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nos casos que mencionam gravidez",
        "blocks": [
          {
            "p": "Se o texto incluir palavras como gravidez, sonho de concepção, ou parto, olhamos primeiro para o significado do sonho de concepção desse símbolo. Mesmo o mesmo sonho de porco foi interpretado de maneira diferente pelos antigos dependendo da situação — [como distinguir 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Não há necessidade de escrever muito",
        "blocks": [
          {
            "p": "Um comprimento maior não significa que mais símbolos serão encontrados. Na verdade, se palavras não relacionadas forem misturadas de forma longa, há uma maior chance de que palavras irrelevantes sejam interpretadas como símbolos. Por favor, escreva apenas as **cenas memoráveis**."
          },
          {
            "p": "O texto que você escreve não será salvo em lugar nenhum. A razão pela qual você pode escrever livremente é explicada em [o método de não salvar](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base do Serviço",
    "title": "Critérios Divididos em Oito Categorias",
    "summary": "Oito categorias — de objetos, ações e animais até o corpo e cores — com quantos símbolos cada uma contém, e por que não há categoria para emoções.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Dividido em oito categorias do que aparece nos sonhos",
        "blocks": [
          {
            "p": "Agrupamos {symbolTotal} símbolos em oito categorias por seu caráter. A pergunta divisória é **como aparece no sonho** — uma besta, um objeto, ou algo que você fez."
          },
          {
            "ul": [
              "**Objetos {categoryThing}** — itens tangíveis como dinheiro, espelhos e facas. Esta é a categoria mais espessa.",
              "**Ações {categoryAction}** — coisas feitas ou experienciadas no sonho, como tomar banho, festejar, ou ser espancado.",
              "**Animais {categoryAnimal}** — dragões, porcos, cobras e vacas. Muitos destes foram vistos como 태몽.",
              "**Natureza {categoryNature}** — coisas grandes e antigas como água, fogo, sol e lua.",
              "**Pessoas {categoryPerson}** — pessoas que aparecem nos sonhos, como reis, ladrões e indivíduos falecidos.",
              "**Lugares {categoryPlace}** — locais onde os sonhos ocorrem, como casas, poços e sepulturas.",
              "**Corpo {categoryBody}** — dentes, cabelo, sangue. O significado varia dependendo de onde no corpo está.",
              "**Cores {categoryColor}** — não têm bom ou mau inerente e são interpretadas com base no que estão associadas."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "A razão para não ter categorias numéricas",
        "blocks": [
          {
            "p": "Não criamos uma categoria para números como 「três」 ou 「sete」. **Nenhum dos dois textos originais estabelece um número como entrada.** Para abrir essa categoria e preenchê-la, teríamos que escrever algo que não aparece em nenhum dos textos."
          }
        ]
      },
      {
        "title": "Por que não há categoria emocional",
        "blocks": [
          {
            "p": "Não criamos uma categoria para sentimentos como 「ansiedade」 ou 「saudade」. **Isso porque os textos antigos de interpretação de sonhos não mencionam emoções.** Ambos os textos originais falam sobre o que é visto e o que acontece, não os sentimentos do sonhador como um assunto de interpretação."
          },
          {
            "p": "Uma vez tentamos construir uma categoria para emoções, e o que saiu foram termos como 「perda de afeto」 e 「estabilidade emocional」. Estes não são **formas** que aparecem nos sonhos, mas vocabulário da psicologia moderna. Esse é um tipo diferente de serviço e não é o que este dicionário pretende fazer."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Então, quando você escreve",
        "blocks": [
          {
            "p": "Por favor, escreva **o que você viu e fez** em vez de sentimentos, pois será muito melhor interpretado. No entanto, perguntamos separadamente como você se sentiu ao acordar — isso é referenciado em situações onde os significados podem variar mesmo para o mesmo símbolo."
          }
        ]
      },
      {
        "title": "Cores não são usadas sozinhas",
        "blocks": [
          {
            "p": "Cores {categoryColor} não têm bom ou mau inerente. Assim como cobras azuis e cobras vermelhas foram interpretadas de maneira diferente, seus significados mudam com base em **o que estão associadas**. Portanto, esta categoria é considerada como valores lidos quando aparecem com outros símbolos."
          },
          {
            "p": "A lista completa por categoria está disponível no [Dicionário de Símbolos](/dream/symbols). Quando você abre um símbolo, o significado transmitido, a categoria e os símbolos relacionados serão fornecidos."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Como Usar",
    "title": "Quando um Símbolo Não é Encontrado",
    "summary": "Se nada for encontrado, dizemos isso. Cobrimos por que isso acontece, o que mostramos naquela tela em vez disso, e como o dicionário é expandido.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Quando não encontramos nada, dizemos que não encontramos nada",
        "blocks": [
          {
            "p": "Se não conseguimos encontrar um único símbolo no texto que você escreveu, nós **dizemos que não encontramos nada.** Não forçamos um símbolo semelhante sobre isso, ou escrevemos uma frase plausível para preencher a lacuna."
          },
          {
            "p": "Esta é a questão mais preocupante para este serviço. No momento em que você preenche a lacuna, a interpretação que vem através e o que realmente foi feito divergem."
          }
        ]
      },
      {
        "title": "Por que não pode ser encontrado?",
        "blocks": [
          {
            "p": "Normalmente, é uma das seguintes."
          },
          {
            "ul": [
              "**É um símbolo que ainda não está no dicionário.** Atualmente, há {symbolTotal} símbolos listados, mas há muitos mais que poderiam aparecer nos sonhos.",
              "**Você apenas escreveu seus sentimentos.** Se você só tem emoções como \"eu estava com medo\" ou \"eu me senti estranho\", não há símbolos que possam ser identificados. A interpretação de sonhos tradicional refere-se a **objetos e ações visíveis**, não a emoções.",
              "**É muito curto.** É melhor escrever em frases em vez de apenas uma ou duas palavras."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quando você tentar escrever novamente",
        "blocks": [
          {
            "p": "Por favor, inclua **o que você viu e o que você fez** no sonho. Dizer \"eu estava ansioso\" é menos eficaz do que dizer \"meus dentes caíram sozinhos\", e \"eu gostei\" é menos eficaz do que dizer \"eu vi água clara fluindo.\""
          }
        ]
      },
      {
        "title": "Nós não deixamos uma tela em branco",
        "blocks": [
          {
            "p": "Quando algo não pode ser encontrado, também mostramos **{popularSymbolCount} símbolos frequentemente pesquisados** nessa tela. Estes são selecionados entre os mais representativos do dicionário, o que pode ajudá-lo a se lembrar se um deles estava em seu sonho."
          },
          {
            "p": "Se você quiser navegar por tudo, pode encontrar {symbolTotal} símbolos organizados por categoria no [dicionário de símbolos](/dream/symbols). Cada símbolo inclui seu significado transmitido e símbolos relacionados."
          }
        ]
      },
      {
        "title": "Como o dicionário se expandirá no futuro?",
        "blocks": [
          {
            "p": "Em vez de aumentar os números, estamos primeiro focando em **identificar com precisão o que já está lá**. Incluímos {aliasTotal} nomes alternativos para os mesmos símbolos, e garantimos que palavras com sufixos que mudam suas formas também possam ser identificadas."
          },
          {
            "p": "Ao expandir os próprios símbolos, incluímos apenas **o que está escrito no texto original**. Se um significado não tiver uma frase original correspondente, uma entrada não será criada — simplesmente aumentar números sem base torna-se criação, não um dicionário. As razões para essa tentativa e seus resultados estão documentados em [por que não usamos modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base do Serviço",
    "title": "Razões para não usar inteligência artificial na interpretação de sonhos",
    "summary": "Não há código que chama um modelo para criar interpretações. Este é o resultado de tentar expandir o dicionário usando um modelo e o que foi ganho e o que foi sacrificado como resultado.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "Inteligência artificial não é usada na interpretação de sonhos",
        "blocks": [
          {
            "p": "Muitos serviços atuais de interpretação de sonhos mostram escritos gerados ao inserir histórias de sonhos em modelos generativos. Dreams-Link não faz isso. **Não há código que chama um modelo para criar interpretações.**"
          },
          {
            "p": "O que fazemos é simples. Encontramos os símbolos no texto que você fornece e selecionamos os significados que o dicionário escreveu sobre esses símbolos. Não há espaço para frases que não estão no dicionário."
          },
          {
            "p": "O dicionário em si não é criado por um modelo. Cada significado é acompanhado por **qual passagem do texto original de interpretação de sonhos ele vem**, e essa passagem é comparada palavra por palavra com o arquivo original."
          }
        ]
      },
      {
        "title": "Por que essa decisão foi tomada?",
        "blocks": [
          {
            "p": "**Modelos não dizem que não sabem o que não sabem.** Quando questionados sobre símbolos sem base transmitida, eles fabricam origens plausíveis. E se é fabricado ou não é algo que o leitor não pode discernir. Se a criação for inserida no lugar da transmissão da tradição, a premissa do serviço desmorona."
          },
          {
            "p": "Tentamos deixar um modelo criar símbolos para expandir o dicionário. De sessenta e seis exemplos selecionados como dignos de adoção, **cinquenta e cinco não puderam fornecer nenhuma base transmitida**, e também houve exemplos como metrô e rodovia que não podem existir na interpretação de sonhos tradicional. Portanto, **nenhum foi incluído.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "O mesmo foi verdade mesmo com um modelo maior",
        "blocks": [
          {
            "p": "Quando executamos a mesma coisa em um modelo melhor, um de dezenove passou, e esse um era apenas uma repetição da mesma palavra com a mesma base. Um modelo maior apenas fala **mais plausivelmente** sobre o que não sabe."
          }
        ]
      },
      {
        "title": "Os benefícios de não usar um modelo",
        "blocks": [
          {
            "ul": [
              "**Se é o mesmo sonho, a mesma interpretação sairá.** As palavras não mudam toda vez que você olha para isso.",
              "**É rápido.** Não há espera pela resposta do modelo, então os resultados estão imediatamente disponíveis.",
              "**O sonho que você escreveu não sai.** Não há necessidade de enviá-lo para o servidor de uma empresa externa — por favor, leia isso junto com [o método que não salva](/guide/no-storage).",
              "**Pode ser oferecido gratuitamente.** Sonhos são algo que temos todos os dias, então há muitas consultas. Se um modelo for chamado para cada consulta, o custo deve ser coberto de algum lugar."
            ]
          }
        ]
      },
      {
        "title": "Em vez disso, o que foi sacrificado",
        "blocks": [
          {
            "p": "Não podemos interpretar o que não está no dicionário. Se tivéssemos usado um modelo, haveria uma resposta plausível para tudo o que você escreveu. Escolhemos **dizer que não conseguimos encontrar quando não conseguimos encontrar.** O que mostramos nesse momento está documentado em [quando um símbolo não pode ser encontrado](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produtos Pagos",
    "title": "Duas Maneiras de Manter Seus Sonhos",
    "summary": "A interpretação em si não gera uma taxa. Ela explica quais são as duas opções pagas, o que elas contêm e por que não são interpretações melhores.",
    "backLabel": "Base da Interpretação",
    "sections": [
      {
        "title": "A interpretação em si não gera uma taxa",
        "blocks": [
          {
            "p": "Escrever seu sonho e ver quais símbolos estão incluídos **não custa dinheiro e não requer associação.** Como as pessoas sonham todos os dias, julgamos que este espaço deve ser oferecido gratuitamente."
          },
          {
            "p": "**As duas opções pagas não são interpretações melhores.** Elas são **duas maneiras de manter a mesma interpretação.** O conteúdo que você vê na tela não muda após o pagamento."
          }
        ]
      },
      {
        "title": "Cartão de Sonho — Uma Imagem",
        "blocks": [
          {
            "p": "Fornecemos os símbolos encontrados em seu sonho e seus significados em **uma imagem.** É um arquivo de imagem, não um PDF, então você pode salvá-lo como está ou enviá-lo para outras pessoas."
          },
          {
            "p": "Isso é para aqueles que sentem arrependimento quando um bom sonho desaparece após fechar a tela. Como não salvamos sonhos, esta é a única maneira de mantê-los se você quiser preservá-los."
          }
        ]
      },
      {
        "title": "Relatório de Sonho de Concepção — Documento de {conceptionPages} páginas",
        "blocks": [
          {
            "p": "Criamos um **documento de {conceptionPages} páginas** sobre sonhos que mostram símbolos indicando um sonho de concepção. Inclui quais símbolos apareceram, como esses símbolos foram tradicionalmente interpretados e um espaço para registrar essas informações."
          },
          {
            "p": "Sonhos de concepção são frequentemente discutidos e compartilhados entre membros da família mesmo após o nascimento da criança, então criamos um documento separado para sonhos que são valiosos demais para serem vistos apenas na tela."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palavras não usadas aqui também",
        "blocks": [
          {
            "p": "Não fazemos julgamentos sobre o estado da gravidez ou o gênero da criança. Tais declarações não estão incluídas no documento. Para mais detalhes, consulte [como os sonhos de concepção são filtrados](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Por que não há mais documento?",
        "blocks": [
          {
            "p": "O serviço irmão produz um relatório de nove páginas. Isso ocorre porque o motor de saju extrai muitos valores de uma única data de nascimento. A interpretação de sonhos na tradição coreana não funciona dessa maneira."
          },
          {
            "p": "O dicionário contém {symbolTotal} símbolos e {meaningTotal} significados, mas **apenas alguns poucos símbolos realmente se aplicam a um único sonho**. Para expandir isso em nove páginas, seria necessário escrever coisas que não são encontradas em nenhum texto original, e isso é precisamente o que este serviço escolheu não fazer. Portanto, o documento é tão longo quanto os materiais honestamente permitem, e não mais."
          }
        ]
      },
      {
        "title": "Valores e Disponibilidade",
        "blocks": [
          {
            "p": "Os preços estão disponíveis no [guia de preços](/pricing). A razão pela qual este documento não lista valores é intencional — para evitar situações em que o documento de orientação permaneça com valores desatualizados quando os valores mudam. A tela e os termos leem todos os valores do mesmo lugar."
          },
          {
            "p": "O documento pelo qual você pagou pode **ser recebido novamente com o mesmo pedido.** No entanto, como não armazenamos arquivos, ele não pode ser recriado uma vez que você saia da tela de resultados — por favor, mantenha o arquivo que você recebeu."
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
  "intro": "Mudanças em seus termos de uso — preços, políticas — são postadas aqui antes de entrarem em vigor. Melhorias internas, como a tela ficando mais rápida, não são postadas aqui: o que aparece aqui é o que você precisa saber.",
  "empty": {
    "title": "Nenhum aviso postado",
    "body": "Se houver alguma mudança para informar, ela será postada aqui."
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
        "Histórias de sonhos são os valores mais privados que este serviço recebe. Portanto, não são registradas em nenhuma tabela. A entrada é apenas transportada no endereço de resultado para cálculo, e uma vez que a janela é fechada, desaparece.",
        "Decidimos não criar uma funcionalidade que colete sonhos e mostre o fluxo (diário de sonhos). É uma funcionalidade útil, mas para isso, os escritos mais privados devem ser continuamente armazenados.",
        "Quando você envia o link do resultado para outras pessoas, ele contém o conteúdo do sonho. Por favor, tenha cuidado ao compartilhar."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Os resultados incluem o dicionário de símbolos e critérios de cálculo.",
      "body": [
        "A base para a interpretação é o dicionário de símbolos de interpretação de sonhos tradicional. Os resultados e documentos incluirão a versão desse dicionário (por exemplo, 1.2.0) e a versão das regras de correspondência (por exemplo, dream-1.0.0). O mesmo sonho sempre resultará no mesmo símbolo com base nos mesmos critérios.",
        "Se adicionarmos símbolos ao dicionário ou mudarmos significados de uma forma que possa alterar resultados, esse fato será apresentado aqui. Isso porque os resultados que você recebeu anteriormente podem mudar.",
        "Não criamos significados tradicionais que não estão no dicionário. Se nenhum símbolo for encontrado, simplesmente afirmamos que nenhum foi encontrado e concluímos."
      ]
    },
    "2026-08-06-conception": {
      "title": "Apenas informamos sobre um a conception dream (sonho de concepção) e não fazemos julgamentos.",
      "body": [
        "Se símbolos tradicionalmente vistos como um a conception dream (sonho de concepção) aparecerem no sonho, informaremos esse fato. No entanto, não determinamos o estado de gravidez ou o gênero da criança — tais afirmações não têm base, e julgamentos médicos são responsabilidade das instituições médicas.",
        "A menção de filhos e filhas em narrativas tradicionais é um reflexo de costumes que foram transmitidos, e isso não significa que estamos prevendo corretamente."
      ]
    }
  }
} satisfies NoticeCopy;
