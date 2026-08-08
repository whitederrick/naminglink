import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Sobre",
    "title": "Sobre o Naming-Link",
    "summary": "Ajudamos você a escolher e entender nomes coreanos. Aqui está o que baseamos nossos resultados e o que deliberadamente não fazemos.",
    "backLabel": "Início",
    "sections": [
      {
        "title": "O que fazemos",
        "blocks": [
          {
            "p": "Naming-Link ajuda você a **escolher e entender nomes coreanos** — o hanja por trás do nome de uma criança, um nome coreano para usar no exterior, uma grafia em Hangul do seu próprio nome e lembranças como um selo ou um relatório impresso."
          },
          {
            "p": "Ver seus resultados é **grátis e não precisa de conta.** Itens pagos nunca revendem o que a tela já mostrou: eles abrem mais candidatos, adicionam análise escrita ou transformam o resultado em algo que você pode guardar."
          }
        ]
      },
      {
        "title": "Em que nossas respostas se baseiam",
        "blocks": [
          {
            "p": "Os hanja vêm da **tabela oficial de hanja para nomes do Supremo Tribunal da Coreia.** Cada caractere tem uma leitura fixa para uso em nomes, e caracteres fora da tabela não podem ser registrados. Não adicionamos a essa lista nem escolhemos favoritos."
          },
          {
            "p": "Saju e figuras dos cinco elementos são calculados a partir do **calendário lunissolar coreano**, com o horário de nascimento corrigido para o horário solar verdadeiro do local de nascimento. A leitura é uma referência tradicional, não uma previsão."
          },
          {
            "p": "As explicações escritas são produzidas por IA. Para evitar que ela **invente coisas**, o modelo recebe apenas sua entrada e nossos próprios dados de referência, e é instruído a permanecer dentro disso. Os guias explicam isso em detalhes."
          }
        ]
      },
      {
        "title": "O que não fazemos",
        "blocks": [
          {
            "ul": [
              "**Não contamos fortunas.** Nada aqui promete sorte, riqueza ou proteção.",
              "**Não armazenamos seu nome.** Resultados gratuitos nunca são escritos em nossos servidores, e documentos pagos são entregues sem manter uma cópia do arquivo.",
              "**Pagar não compra uma resposta melhor.** Desbloquear com um anúncio e desbloquear com um pagamento dão exatamente o mesmo conteúdo."
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
  "guide/reading": {
    "eyebrow": "Leituras",
    "title": "Leituras fixas — uma pronúncia por caractere",
    "summary": "A tabela oficial não lista apenas caracteres. Ela também fixa como cada um é lido quando usado em um nome.",
    "backLabel": "Guia",
    "sections": [
      {
        "title": "Uma leitura fixa para cada caractere",
        "blocks": [
          {
            "p": "A tabela de hanja para nomes não decide apenas quais caracteres podem ser usados. **Ela também fixa como cada caractere é lido quando aparece em um nome.** Essa leitura fixa é a que a registro segue."
          },
          {
            "p": "A maioria dos hanja tem várias leituras possíveis. Um nome, no entanto, é escrito em documentos e falado em voz alta, então precisa de exatamente uma. A tabela, portanto, atribui a cada caractere sua leitura para uso em nomes, e nenhuma outra leitura pode ser registrada."
          }
        ]
      },
      {
        "title": "Então o som vem primeiro",
        "blocks": [
          {
            "p": "É por isso que o Naming-Link fixa o som antes de procurar hanja. Se o nome é \"지은\", o significado só pode ser escolhido entre caracteres atribuídos à leitura **지** e caracteres atribuídos à leitura **은**."
          },
          {
            "p": "Por melhor que um significado seja, um caractere cuja leitura não corresponda não pode ser usado para esse nome. Também nunca mudamos o som de um nome para se adequar a um caractere — um nome é falado por toda a vida, e o som é definido primeiro, com o hanja seguindo."
          }
        ]
      },
      {
        "title": "Os sobrenomes estão fora desta tabela",
        "blocks": [
          {
            "p": "Isso é frequentemente mal interpretado. **A tabela governa o nome dado, não o sobrenome.** Um sobrenome segue o que já está no registro familiar, então algumas pessoas usam caracteres que não estão na tabela de hanja para nomes."
          },
          {
            "p": "É por isso que o Naming-Link trata os hanja de sobrenome de forma diferente. Nós apenas ajudamos você a encontrar um sobrenome, e deixamos um campo para inserir um diretamente, para pessoas cujo caractere está fora da tabela. Sobrenomes de duas sílabas, como Namgung e Seonwoo, são inseridos da mesma forma."
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
        "title": "Carregamos o som, não o significado",
        "blocks": [
          {
            "p": "Este serviço escreve **seu nome** em Hangul. Não lhe dá um nome coreano. Michael torna-se 마이클 — o mesmo nome, escrito para que os coreanos possam ler e dizer. Não o trocamos por um nome coreano que por acaso signifique algo semelhante."
          },
          {
            "p": "Se um nome coreano é o que você quer, **isso é um serviço diferente**. Um mantém seu nome e muda apenas o script; o outro propõe um novo nome."
          }
        ]
      },
      {
        "title": "Sons que o coreano não tem",
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
            "p": "Não há uma única resposta certa. A grafia mais próxima do som original, a mais comumente usada na Coreia e a mais fácil de escrever são frequentemente três coisas diferentes. Portanto, mostramos todas juntas e dizemos o que as separa."
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
            "p": "Não anexamos hanja a uma transliteração. Hanja carregam significado, e este fluxo é sobre som. Combinar caracteres apenas ao som pode resultar em um significado que você nunca pediu."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Como funciona",
    "title": "Como construímos um nome coreano",
    "summary": "Escolhemos entre sobrenomes que existem, avaliamos quão facilmente o nome é dito e escrito, e perguntamos para que o nome serve.",
    "backLabel": "Guia",
    "sections": [
      {
        "title": "Começamos com o sobrenome",
        "blocks": [
          {
            "p": "Na Coreia, o sobrenome vem primeiro e, ao contrário dos nomes próprios, não é livremente inventado — você o herda. Portanto, sugerimos apenas sobrenomes que as pessoas coreanas realmente têm. Nosso grupo padrão é os **20 sobrenomes mais comuns**, que juntos cobrem aproximadamente 80% da população."
          },
          {
            "p": "Se o seu próprio sobrenome coincidir com um sobrenome coreano real por som — Wang com 왕, Ye com 예 — colocamos esse primeiro. Manter um vínculo com seu nome original vale mais do que um sobrenome escolhido aleatoriamente."
          },
          {
            "p": "Você pode escolher um sobrenome por conta própria ou nos deixar recomendar um. De qualquer forma, será **um sobrenome que existe**."
          }
        ]
      },
      {
        "title": "Fácil de dizer, fácil de escrever",
        "blocks": [
          {
            "p": "Este é um nome que as pessoas na Coreia realmente usarão para chamá-lo, então a primeira coisa que verificamos é se um coreano pode ouvi-lo uma vez e escrevê-lo. Um nome que precisa ser soletrado toda vez é um fardo que você carrega, não nós."
          },
          {
            "p": "O significado também importa. Os nomes próprios coreanos geralmente carregam um, então dizemos como o nome é lido e por que o escolhemos — não apenas o nome em si."
          }
        ]
      },
      {
        "title": "Perguntamos para que o nome é",
        "blocks": [
          {
            "p": "Um nome para documentos universitários não é o mesmo que um nome que amigos gritarão através de uma sala, ou um apelido que você usará online. Perguntamos como você planeja usá-lo e levamos isso em conta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Isto não é uma transliteração",
        "blocks": [
          {
            "p": "Aqui propomos um **novo nome coreano**. Se você quiser que seu nome existente seja escrito em Hangul — Michael como 마이클 — veja o [guia de ortografia em Hangul](/guide/how-hangul-transliteration)."
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
            "p": "Escreva para **{email}**. Respondemos dentro de dois dias úteis. Para qualquer coisa relacionada a um pedido — pagamento, reembolso, um arquivo que você não recebeu — por favor, inclua seu **número do pedido ou o e-mail com o qual você pagou**."
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
              "**Correções** — se um significado de hanja, leitura ou cálculo parecer errado, nos avise. Mencionar qual tela e o que você inseriu ajuda bastante.",
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
              "**E-mail** — {email}",
              "**Responsável pela privacidade** — {privacyOfficer}",
              "**Provedor de hospedagem** — {hostingProvider}"
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
  "guide/avoid": {
    "eyebrow": "Costumes",
    "title": "Caracteres Tradicionalmente Evitados",
    "summary": "Não é proibido por lei, mas é um costume. Escrevemos sobre o que foi evitado e por quê, e como lidamos com isso.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "Caracteres Que São Legalmente Aceitáveis",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} caracteres",
                "label": "Caracteres Evitados Compilados"
              },
              {
                "value": "{avoidCommonlyUsed} caracteres",
                "label": "Entre eles, caracteres ainda comumente usados"
              }
            ]
          },
          {
            "p": "Existem caracteres que estão incluídos na lista de caracteres para nomes pessoais e **são legalmente aceitáveis**, mas são considerados inadequados para nomes."
          },
          {
            "p": "O pensamento subjacente é que **\"um significado excessivo é na verdade indesejável.\"** Isso inclui caracteres que são considerados preciosos demais (珍 tesouro, 寶 joia), caracteres vistos como tendo uma presença forte demais (王 rei, 帝 imperador), e aqueles considerados grandiosos demais para uma pessoa incorporar, como o céu ou deidades. Isso reflete um antigo senso de contenção, acreditando que um nome pode ofuscar a pessoa."
          },
          {
            "p": "**No entanto, esses caracteres não são inutilizáveis.** Não é uma proibição legal, mas um costume, e os costumes variam por região, família e geração, e podem mudar ao longo do tempo."
          },
          {
            "p": "Na verdade, entre os {avoidTotal} caracteres que compilamos, {avoidCommonlyUsed} ainda são comumente usados em nomes. O fato de serem conhecidos como a evitar, mas ainda amplamente utilizados, indica que esse costume não é absoluto."
          }
        ]
      },
      {
        "title": "Quais Categorias Existem?",
        "blocks": [
          {
            "p": "Os caracteres atualmente compilados estão divididos em sete categorias."
          },
          {
            "ul": [
              "**Tesouros e Objetos** — Caracteres que se referem diretamente à riqueza ou itens",
              "**Céu e Natureza** — Coisas como o sol, a lua e o céu que são consideradas grandiosas demais para uma pessoa incorporar",
              "**Reis e Nobreza** — Caracteres que significam status, como rei ou imperador",
              "**Seres Divinos** — Caracteres que se referem a reinos sagrados, como deuses ou espíritos",
              "**Estações e Outros** — Caracteres ligados a tempos ou estados específicos",
              "**Animais** — Animais considerados como tendo uma energia forte, como dragões ou tigres",
              "**Excessividade** — Caracteres vistos como tendo significados excessivamente grandes ou transbordantes"
            ]
          }
        ]
      },
      {
        "title": "Você Pode Adicionar ou Remover Caracteres Você Mesmo",
        "blocks": [
          {
            "p": "Não excluímos arbitrariamente esses caracteres. **Fornecemos duas opções na tela de entrada para que o nomeador escolha como lidar com eles.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opções Disponíveis na Tela de Entrada",
        "blocks": [
          {
            "p": "**Excluir Caracteres Evitados dos Candidatos** — Se ativado, eles são completamente excluídos. Se desativado, permanecem nos resultados com um rótulo de \"Tradicionalmente Evitado\" e a razão anexada."
          },
          {
            "p": "**Excluir Mesmo Caracteres Comumente Usados** — Isso exclui caracteres que estão na lista de evitação, mas que são realmente amplamente utilizados (圭·琳·玲·元·太·星·海, etc.). Se ativado, os candidatos serão significativamente reduzidos."
          },
          {
            "p": "O padrão é **não excluir, mas apenas exibir**. Se forem removidos silenciosamente da lista, pode parecer para aqueles que desejam usar aquele caráter que ele não existe."
          }
        ]
      },
      {
        "title": "Garantindo que as Opções Não Desapareçam",
        "blocks": [
          {
            "p": "Se não houver caracteres utilizáveis restantes para aquela sílaba, levantaremos a exclusão para aquela sílaba e mostraremos candidatos. Acreditamos que é melhor do que não ter opções."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base do Serviço",
    "title": "Qual é a Base para a Conversão de Nomes Globais?",
    "summary": "Fornecemos candidatos de cinco perspectivas, mantendo os sistemas de escrita de cada idioma e usando apenas nomes existentes.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "Candidatos São Fornecidos de Cinco Perspectivas",
        "blocks": [
          {
            "p": "Não há apenas uma maneira de traduzir um nome para outro idioma. Dependendo de preservar o som ou o significado, escolher um nome natural no contexto local ou priorizar a individualidade, as respostas diferem. Portanto, em vez de apresentar uma opção, fornecemos **uma de cada uma das cinco diferentes perspectivas**."
          },
          {
            "ul": [
              "**Opção de Preservação do Som** — Preserva o som original do nome tanto quanto possível",
              "**Opção de Tradução de Significado** — Traduz o significado contido no nome para o nome daquele idioma",
              "**Opção de Compromisso entre Som e Significado** — Toma metade de cada um",
              "**Opção Autêntica Local** — Escolhe nomes que são realmente comumente usados naquele contexto cultural",
              "**Opção de Individualidade e Branding** — Prioriza nomes que são memoráveis e distintos"
            ]
          },
          {
            "p": "Cinco opções são garantidas para serem fornecidas. Como as preferências variam de pessoa para pessoa, acreditamos que é melhor permitir escolhas em vez de apresentar uma como a resposta correta."
          }
        ]
      },
      {
        "title": "Cada Idioma Tem Regras Diferentes de Sistema de Escrita",
        "blocks": [
          {
            "p": "Ao traduzir para um idioma que não usa letras romanas, deve ser escrito no script daquele idioma. Para o japonês, seria kana e kanji; para o russo, mongol e cazaque, seria cirílico; para o árabe, seria o script árabe; e para o tailandês, khmer e hindi, seria seus respectivos scripts. Se você escrevê-lo em letras romanas e o chama de \"nome japonês\", não pode ser usado naquele país."
          },
          {
            "p": "Portanto, temos regras separadas para o sistema de escrita de cada idioma, e o servidor verifica mais uma vez para garantir que os resultados estejam naquele sistema de escrita. Erros como omitir sobrenomes ou misturar Hangul são filtrados aqui."
          }
        ]
      },
      {
        "title": "Usamos Nomes que São Realmente Usados",
        "blocks": [
          {
            "p": "Para evitar criar nomes que soem plausíveis, mas não existam naquele país, baseamos nossas opções em nomes existentes. Nomes são usados em documentos e apresentações, então, se uma pessoa local pensa \"não existe tal nome\", não pode ser usado."
          }
        ]
      },
      {
        "title": "Separar Seleção e Descrição",
        "blocks": [
          {
            "p": "Tratamos a tarefa de determinar cinco candidatos separadamente da tarefa de descrever cada candidato em detalhes. Como a descrição leva muito tempo, separamos essa parte para criá-la simultaneamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por que Isso Foi Mudado?",
        "blocks": [
          {
            "p": "Inicialmente, criamos as cinco perspectivas separadamente. Era mais rápido, mas **o número de candidatos variava a cada vez.** À medida que cada pessoa selecionava candidatos, havia sobreposições ou discrepâncias, e se um falhasse, aquele candidato desapareceria completamente, resultando em apenas dois ou três em vez de cinco."
          },
          {
            "p": "Agora, como determinamos o conjunto de candidatos e a distribuição de perspectivas de uma só vez, **o número é fixo.** Mesmo que uma descrição falhe, os candidatos permanecem e são apresentados com informações breves. Acreditamos que é melhor ter sempre o mesmo número, mesmo que leve um pouco mais de tempo."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Base do Serviço",
    "title": "Qual é a base para combinar significados de hanja?",
    "summary": "Primeiro, os sons são fixos, e apenas hanja que podem ser registrados com aquele som são reunidos, e o significado é visto como uma combinação em vez de um único caráter.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "Primeiro, fixe os sons",
        "blocks": [
          {
            "p": "Se você decidiu por \"지은\", então **지** e **은** não mudam. Não alteramos o som do nome para combinar com o hanja. Um nome é algo que é chamado por toda a vida, e acreditamos que a ordem é que o som é fixado primeiro, seguido pelo hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Fixar o som",
              "soundNote": "Nunca mudamos para se adequar a um caráter",
              "tableStep": "② Filtrar pela tabela oficial",
              "tableBody": "apenas caracteres atribuídos a essa leitura",
              "tableNote": "de todos os {total} caracteres na tabela",
              "tableNoteNoCount": "apenas caracteres que estão na tabela",
              "combineStep": "③ Leia os dois juntos",
              "combineNote": "o significado é como o par é lido, não cada caractere isoladamente"
            },
            "caption": "Esta é a ordem na qual os candidatos são reduzidos. Não se trata de escolher hanja primeiro e combinar os sons, mas sim que os sons vêm primeiro, e apenas caracteres designados para serem lidos com esse som se tornam candidatos."
          }
        ]
      },
      {
        "title": "Reúna apenas hanja que podem ser registrados com esse som",
        "blocks": [
          {
            "p": "A tabela oficial de hanja para nomes tem uma leitura designada para cada caractere quando usado em nomes. Apenas caracteres designados para serem lidos como **지** e **은** se tornam candidatos. Não importa quão bom seja o significado, se a leitura não corresponder, não pode ser o hanja para esse nome."
          },
          {
            "p": "O intervalo para selecionar candidatos é de {characterTotal} caracteres da tabela do Supremo Tribunal. Caracteres que não estão nesta tabela não são apresentados de forma alguma — mesmo que apareçam, não podem ser registrados."
          },
          {
            "p": "O número de caracteres na tabela publicada pelo Supremo Tribunal é ligeiramente maior do que isso. A tabela também inclui **caracteres sem códigos de caracteres padrão**, que não podem ser exibidos corretamente em telas e documentos, então esses caracteres foram excluídos dos candidatos. Você deve verificar com a autoridade relevante se pode registrar com esses caracteres."
          }
        ]
      },
      {
        "title": "O significado é visto como uma combinação, não um único caractere",
        "blocks": [
          {
            "p": "O significado de cada caractere individual ser bom e o significado lido quando dois caracteres são combinados ser bom são diferentes. Nomes são lidos como combinações, então olhamos para as combinações juntas. Se você tiver significados específicos que deseja incluir ou evitar, isso é levado em conta."
          },
          {
            "p": "Se você estiver usando um caractere geracional, esse caractere é fixo, e combinações são buscadas nas posições restantes. O sobrenome (성) não é restrito pela tabela oficial de hanja para nomes, então é tratado separadamente."
          }
        ]
      },
      {
        "title": "Indicamos costumes de evitação sem removê-los",
        "blocks": [
          {
            "p": "Se um caractere tradicionalmente considerado a ser evitado estiver incluído nos candidatos, não o removemos, mas mostramos a razão junto com ele. Isso é uma questão de costume, não de lei, e você pode optar por excluí-lo completamente da tela de entrada. Para mais detalhes, veja [Hanja Tradicionalmente Evitados](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Também informamos os motivos da exclusão",
        "blocks": [
          {
            "p": "Mostramos por que certos caracteres foram excluídos dos candidatos. Se mostrarmos apenas o que foi escolhido, você não poderá saber \"por que este?\" Se não houver caracteres utilizáveis restantes para essa sílaba, levantaremos a exclusão para essa sílaba e mostraremos os candidatos."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Como ler os resultados",
        "blocks": [
          {
            "p": "Os candidatos são **perspectivas, não classificações**. O primeiro não significa que é o melhor nome; eles são selecionados a partir de diferentes perspectivas. Aqueles que priorizam a combinação de significados, aqueles que escolhem caracteres incomuns e aqueles que enfatizam a neutralidade são apresentados lado a lado. A resposta varia dependendo de qual perspectiva você valoriza."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nossos Padrões",
    "title": "O Que Não Usamos",
    "summary": "Não atribuímos fortuna total ou pontuações numéricas, nem usamos contagens de traços. Os cinco elementos são usados apenas como um eixo suplementar. Aqui estão os motivos.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "Razões para não atribuir fortuna total ou pontuações numéricas",
        "blocks": [
          {
            "p": "Existem métodos que atribuem fortuna total ou pontuações numéricas a nomes para classificá-los. O Naming-Link não fornece esses números. As razões são quatro."
          },
          {
            "p": "**Primeiro, não há apenas um padrão.** Os métodos para calcular fortuna variam de escola para escola, e o mesmo nome pode ser avaliado positivamente por um padrão e negativamente por outro. Não temos base para decidir qual é o correto. É desonesto apresentar um como se fosse a resposta."
          },
          {
            "p": "**Segundo, esses cálculos dependem de contagens de traços.** No entanto, os dados do Supremo Tribunal não incluem contagens de traços. Além disso, as contagens de traços podem variar dependendo de serem contadas como caracteres regulares ou simplificados e como os radicais são contados. Como os números fundamentais não estão definitivamente estabelecidos, as pontuações construídas sobre eles não podem ser definitivas."
          },
          {
            "p": "**Terceiro, números parecem mais sólidos do que a realidade.** Quando diz \"87 pontos\", soa como um valor medido em vez de uma interpretação convencional. Aqueles que nomeiam podem se sentir pressionados por esse número, deixando de lado o que é realmente importante (É agradável de chamar? O significado se encaixa? Contém os desejos desejados?)."
          },
          {
            "p": "**Quarto, não há como verificar.** A relação entre um nome e a vida de uma pessoa não pode ser verificada. Converter algo que não pode ser dito como certo ou errado em uma pontuação resulta em um número que não pode ser confirmado, mesmo que não possa estar errado."
          },
          {
            "p": "Usamos apenas o que pode ser **substanciado.** A tabela oficial de hanja para nomes do Supremo Tribunal, as leituras designadas para cada caractere e os significados listados na tabela. Em vez disso, fornecemos razões para por que este candidato foi selecionado e por que certos caracteres foram excluídos, mostrando **razões em vez de pontuações**."
          }
        ]
      },
      {
        "title": "Não usamos contagens de traços",
        "blocks": [
          {
            "p": "Os dados oficiais de hanja para nomes fornecidos pelo Supremo Tribunal não incluem contagens de traços. Entre os {characterTotal} caracteres que recebemos, **nenhum caractere tem contagens de traços.**"
          },
          {
            "p": "Para usar contagens de traços, precisaríamos obter números de algum lugar, mas se não pudermos esclarecer de onde esses números vieram e quais critérios foram usados para contá-los, isso significaria julgar nomes com base em números infundados. Decidimos não avaliar nomes com base em valores que não podem ser substanciados."
          }
        ]
      },
      {
        "title": "Usamos os cinco elementos apenas como referência",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Os cinco elementos dispostos em um círculo: a geração corre entre vizinhos, o controle pula um",
              "wood": "madeira",
              "fire": "fogo",
              "earth": "terra",
              "metal": "metal",
              "water": "água",
              "saeng": "Geração — cada um dá origem ao seu vizinho",
              "geuk": "Controle — cada um restringe aquele que pula"
            },
            "caption": "As relações entre os cinco elementos. Mover ao longo do círculo representa geração mútua (相生), enquanto pular um e pressionar para baixo representa restrição mútua (相剋). Usamos essa relação apenas como um eixo suplementar para comparar candidatos."
          },
          {
            "p": "Se você inseriu seu mês de nascimento, usamos uma referência simplificada dos cinco elementos com base nesse mês como um eixo suplementar para comparar candidatos. No entanto, isso não é uma análise precisa de saju, e **não afirmamos que os nomes determinam o destino ou caráter de uma pessoa.**"
          },
          {
            "p": "Na seleção final, o que priorizamos são sons, combinações de significados, os valores que a família deseja transmitir e se pode realmente ser registrado. Se você não inseriu seu mês de nascimento, excluímos completamente a referência dos cinco elementos da análise — não fazemos suposições arbitrárias sobre informações desconhecidas."
          },
          {
            "p": "Se você deseja uma análise precisa baseada em saju, cobrimos isso em um relatório detalhado separado. A razão pela qual não priorizamos os cinco elementos na combinação livre de hanja é que não queremos apresentar julgamentos baseados nos cinco elementos derivados de uma data e hora de nascimento incompletas como se fossem definitivos."
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
            "p": "Criar um nome e visualizar os resultados é **gratuito**. Nenhum registro de membro é necessário. Você pode ver os significados correspondentes dos hanja, criar nomes coreanos, conversão de nomes globais e notação de pronúncia em Hangul, juntamente com resultados recomendados e suas justificativas na tela."
          },
          {
            "p": "Os produtos pagos não **revendem o que já foi mostrado na tela.** Eles abrem mais candidatos, adicionam mais explicações ou criam um formato que pode ser armazenado ou transmitido."
          }
        ]
      },
      {
        "title": "Divulgação completa de todos os candidatos — {priceUnlock}",
        "blocks": [
          {
            "p": "Os resultados recomendados são estruturados para abrir candidatos um por um. Ao visualizar anúncios, um é aberto de cada vez, enquanto este produto **abre todos os candidatos restantes de uma vez**."
          },
          {
            "p": "Se você não estiver com pressa, não precisa comprar. Os **resultados da abertura via anúncios e os resultados do pagamento são completamente os mesmos** — é apenas uma questão de esperar, e pagar não gera candidatos melhores."
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
              "**Máximo de 10 candidatos de hanja com relatório abrangente de saju e os cinco elementos** — {priceTenSaju}. Além do acima, inclui o gráfico de saju derivado da data de nascimento e as forças dos cinco elementos, examinando por que um determinado hanja se adequa a esse nome sob a perspectiva dos cinco elementos."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "O Hanja em si é informação pública",
        "blocks": [
          {
            "p": "Os hanja utilizáveis e seus significados vêm da tabela oficial de hanja para nomes estabelecida pela Suprema Corte da Coreia, e todos estão disponíveis publicamente nos documentos de orientação do serviço. O que os produtos pagos vendem não é informação de hanja, mas **o ato de selecionar e explicar de acordo com o nome**."
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
              "**Relatório Premium de Nome Coreano** — 3 páginas. Inclui uma capa de caligrafia, o significado do nome e a razão para escolhê-lo, e interpretação de saju e os cinco elementos.",
              "**Arte do Nome em Hangul** — 2 páginas. Inclui uma capa de caligrafia e guia de pronúncia. Contém como escrever o nome em Hangul e como pronunciá-lo."
            ]
          }
        ]
      },
      {
        "title": "Carimbo de Nome",
        "blocks": [
          {
            "p": "Gravamos o nome criado na tela em um carimbo físico e o enviamos para você. Os preços variam por modelo — selo redondo {priceStampRound}, selo quadrado {priceStampSquare}, selo de ébano {priceStampEbony}. O envio internacional também está disponível."
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
            "p": "**Produtos digitais são fornecidos imediatamente após o pagamento.** Você pode cancelar e receber um reembolso total a qualquer momento antes do início do download, mas uma vez que o download esteja completo, a retirada devido a simples mudança de ideia é restrita (Artigo 17, Parágrafo 2 da Lei de Comércio Eletrônico). Esta condição é acordada separadamente na tela de pagamento."
          },
          {
            "p": "**Reclamações sobre o conteúdo dos resultados não são motivo para reembolso.** No entanto, se o documento não foi criado, o arquivo não pode ser aberto, ou o valor do pagamento difere do pedido, será processado como uma reemissão ou reembolso total."
          },
          {
            "p": "As condições detalhadas estão descritas na [Política de Reembolso](/refund-policy) e [Guia de Preços](/pricing). Este texto serve como um guia do que está incluído, e as condições legais são priorizadas nesses dois documentos."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistema",
    "title": "O que é o hanja oficial para nomes?",
    "summary": "Os hanja que podem ser usados para nomes de crianças foram estabelecidos pela Suprema Corte em uma tabela. Isso resume o que é a tabela e por que foi criada.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "O que é o hanja oficial para nomes?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} caracteres",
                "label": "Hanja oficial"
              },
              {
                "value": "{syllableCount} sílabas",
                "label": "Sílabas em Hangul incluídas"
              },
              {
                "value": "{effectiveDate}",
                "label": "Data de referência da tabela"
              }
            ]
          },
          {
            "p": "Você não pode usar qualquer caractere para o nome de uma criança. **Os hanja que podem ser usados para registro de nascimento foram estabelecidos pela Suprema Corte em uma tabela, e apenas os caracteres dessa tabela podem ser registrados como hanja para nomes.** Isso é chamado de hanja oficial."
          }
        ]
      },
      {
        "title": "Por que foi estabelecido?",
        "blocks": [
          {
            "p": "Existem dezenas de milhares de hanja. Entre eles, alguns têm significados desagradáveis, alguns não são mais usados e não têm leituras conhecidas, e alguns não podem ser exibidos em computadores. Se tais caracteres forem incluídos em um nome, a pessoa que acaba arcando com o ônus é aquela que usará esse nome por toda a vida. Nomes podem ser quebrados ou lidos de maneira diferente em vários lugares, como registro de residente, passaportes, bancos e escolas, exigindo que o indivíduo explique seu próprio nome."
          },
          {
            "p": "Portanto, foi escolhida uma metodologia para pré-definir o alcance dos hanja que podem ser usados em nomes. Em vez de ser uma regulamentação restritiva, é mais um mecanismo para garantir que os nomes possam ser usados sem problemas ao longo da vida de uma pessoa."
          }
        ]
      },
      {
        "title": "Qual é a base para as definições?",
        "blocks": [
          {
            "p": "A Suprema Corte estabelece a tabela oficial de hanja, que é revisada conforme necessário, e caracteres são adicionados."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Materiais usados nesta tela",
        "blocks": [
          {
            "p": "{publisher} dados oficiais de hanja · A partir de {effectiveDate}"
          },
          {
            "p": "{characterTotal} caracteres cobrem {syllableCount} sílabas em Hangul. O valor hash do arquivo original também é armazenado, então se a tabela mudar, pode-se verificar quando e o que mudou."
          }
        ]
      },
      {
        "title": "O número de caracteres anunciado pela Suprema Corte difere do que mostramos",
        "blocks": [
          {
            "p": "**O hanja oficial anunciado pela Suprema Corte é {announcedTotal} caracteres, enquanto o que apresentamos como candidatos é {characterTotal} caracteres.** Não há razão para esconder essa diferença, então afirmamos claramente."
          },
          {
            "p": "Se você verificar os dados de consulta da Suprema Corte, eles contêm {listedTotal} caracteres. Entre eles, **{excludedNoStandardCode} caracteres** são **caracteres que não têm um lugar no código de caracteres comum global (Unicode).** O sistema da Suprema Corte trata tais caracteres com números que funcionam apenas dentro de seu próprio sistema, e eles são exibidos como **imagens** em vez de caracteres na tela."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Adicionar mais fontes não resolverá o problema",
        "blocks": [
          {
            "p": "Para que um caractere apareça na tela, ele deve ter um **número acordado pelo mundo**, e a fonte contém a imagem correspondente a esse número. Caracteres que não têm um número não podem ser incluídos em nenhuma fonte. Não importa quantas fontes adicionemos, esses caracteres aparecerão como quadrados vazios."
          }
        ]
      },
      {
        "title": "Portanto, eles foram removidos dos candidatos",
        "blocks": [
          {
            "p": "**Preencher a lista com caracteres que não podem ser exibidos não é útil.** A maioria dos significados desses caracteres também está vazia em nossos dados, o que não se alinha com o método do serviço de escolher nomes com base em significados."
          },
          {
            "p": "**A razão mais importante está na pessoa que usará o nome.** Um nome é um valor que será inserido em vários lugares ao longo da vida de uma pessoa. Caracteres sem códigos de caracteres podem não ser inseridos ou impressos em sistemas de bancos, escolas, hospitais ou passaportes, mesmo após a conclusão do registro de nascimento. Portanto, não podemos recomendar tais caracteres."
          },
          {
            "p": "No entanto, **não determinamos se esses caracteres podem ser usados ou não.** Como são caracteres na tabela do Supremo Tribunal, o registro em si pode ser possível. Se você realmente quiser usar esse caractere, verifique diretamente no sistema eletrônico de registro de relações familiares do Supremo Tribunal e **pergunte à autoridade relevante sobre a usabilidade real.**"
          }
        ]
      },
      {
        "title": "Se você quiser usar hanja que não está na tabela",
        "blocks": [
          {
            "p": "Você não pode usá-los. Para ser preciso, esses caracteres não serão registrados como hanja para o nome, e o nome será registrado apenas em Hangul. Se você quiser usar hanja junto, deve escolher a partir da tabela."
          },
          {
            "p": "Portanto, não apresentamos caracteres que não estão na tabela como candidatos. Todos os hanja visíveis na tela são caracteres que podem realmente ser usados para registro de nascimento. A lista completa está disponível na [Lista Completa de Hanja de Nomes Oficiais](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Lista",
    "title": "Lista Completa de Hanja de Nomes Oficiais",
    "summary": "Organizamos os hanja que podem ser usados para registro de nascimento por consoante inicial. Você pode ver a leitura designada e o significado de cada caractere quando usado em nomes.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "Pesquisar por Consoante Inicial",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Isto inclui todos os {characterTotal} caracteres da tabela oficial de hanja do Supremo Tribunal. Cada caractere inclui a **leitura quando usado em nomes** e seu significado. Caracteres não incluídos na tabela não podem ser registrados como hanja de nome, então você deve escolher entre os caracteres listados aqui."
          },
          {
            "p": "Os dois números no botão abaixo representam o **número de caracteres com essa consoante inicial** e o **número de sílabas cobertas**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se o caractere que você está procurando não está na lista",
        "blocks": [
          {
            "p": "O número de caracteres anunciados pelo Supremo Tribunal é {announcedTotal}, mas esta lista contém {characterTotal} caracteres. **A diferença de {excludedNoStandardCode} caracteres são aqueles que não podem ser exibidos em nenhuma fonte devido à falta de um lugar no código de caracteres universal.** O sistema do Supremo Tribunal mostra esses caracteres como imagens."
          },
          {
            "p": "Detalhamos as razões para isso e por que não recomendamos esses caracteres em [O que é Hanja de Nome Oficial?](/guide/hanja-basics). Você deve verificar com a autoridade relevante a usabilidade real desses caracteres."
          }
        ]
      },
      {
        "title": "Consoantes Iniciais com Poucos Caracteres",
        "slot": "tiny",
        "blocks": [
          {
            "p": "As consoantes iniciais abaixo têm muito poucos hanja de nome oficial, então as exibimos aqui sem uma página separada."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Como Ler Esta Lista",
        "blocks": [
          {
            "p": "Para **伽 · 가 · 절**, ao usar \"伽\" em um nome, ele é lido como **가** e significa \"templo\". Mesmo para o mesmo hanja, a leitura quando usado em nomes é fixa pela tabela, e não pode ser usada de outra forma."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PT_NOTICES = {
  "kindLabels": {
    "service": "Serviço",
    "product": "Produtos",
    "policy": "Política",
    "support": "Suporte"
  },
  "intro": "Mudanças em seus termos de uso — preços, políticas — são publicadas aqui antes de entrarem em vigor. Melhorias internas não estão listadas: o que aparece aqui é o que você precisa saber.",
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
        "Dúvidas, reembolsos, solicitações de privacidade e relatórios de erros agora têm um lugar único para ir. A página de contato no rodapé lista nosso e-mail e detalhes da empresa.",
        "O que nossas respostas se baseiam, e o que deliberadamente não fazemos, está escrito na página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Relatórios em PDF são emitidos em inglês para árabe e khmer",
      "body": [
        "Se você estiver usando o serviço em árabe ou khmer, o PDF que você compra é produzido em inglês. A ferramenta que organiza nossos documentos ainda não consegue definir parágrafos nesses dois scripts.",
        "A tela permanece em seu idioma, e seu nome é impresso em seu próprio script dentro do documento.",
        "A mesma nota aparece antes do pagamento. Quando a ferramenta suportar esses scripts, informaremos aqui."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pagamentos ainda não estão abertos",
      "body": [
        "Criar um nome e ler o resultado é gratuito hoje, e nenhuma conta é necessária.",
        "Itens pagos ainda não estão à venda. Os valores mostrados na página de preços são os que se aplicarão uma vez que as vendas sejam abertas."
      ]
    }
  }
} satisfies NoticeCopy;
