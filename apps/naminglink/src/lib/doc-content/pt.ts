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
            "p": "Ver seus resultados é **gratuito e não precisa de conta.** Itens pagos nunca revendem o que a tela já mostrou: eles abrem mais candidatos, adicionam análise escrita ou transformam o resultado em algo que você pode guardar."
          }
        ]
      },
      {
        "title": "Em que nossas respostas se baseiam",
        "blocks": [
          {
            "p": "Hanja vêm da **tabela oficial de hanja para nomes da Suprema Corte da Coreia.** Cada caractere tem uma leitura fixa para uso em nomes, e caracteres fora da tabela não podem ser registrados. Não adicionamos a essa lista nem escolhemos favoritos."
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
              "**Não contamos fortunes.** Nada aqui promete sorte, riqueza ou proteção.",
              "**Não armazenamos seu nome.** Resultados gratuitos nunca são gravados em nossos servidores, e documentos pagos são entregues sem manter uma cópia do arquivo.",
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
            "p": "Detalhes da empresa e como nos contatar estão na [página de contato](/contact), incluindo reembolsos, solicitações de privacidade e relatórios de erros."
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
            "p": "Por mais bom que um significado seja, um caractere cuja leitura não corresponda não pode ser usado para esse nome. Também nunca mudamos o som de um nome para se adequar a um caractere — um nome é falado por toda a vida, e o som é definido primeiro, com o hanja seguindo."
          }
        ]
      },
      {
        "title": "Sobrenomes estão fora desta tabela",
        "blocks": [
          {
            "p": "Isso é frequentemente mal interpretado. **A tabela governa o nome dado, não o sobrenome.** Um sobrenome segue o que já está no registro familiar, então algumas pessoas usam caracteres que não estão na tabela de hanja para nomes."
          },
          {
            "p": "É por isso que o Naming-Link trata o hanja do sobrenome de forma diferente. Nós apenas ajudamos você a encontrar um sobrenome, e deixamos um campo para inserir um diretamente, para pessoas cujo caractere está fora da tabela. Sobrenomes de duas sílabas, como Namgung e Seonwoo, são inseridos da mesma forma."
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
            "p": "Cada língua tem sons que o coreano não possui — f, v, z, th e distinções vocálicas que o coreano não faz. Para esses, escrevemos o que **um falante de coreano realmente diz** quando lê seu nome em voz alta, em vez de transcrever a fonética original símbolo por símbolo. O objetivo é a grafia que será usada, não a mais tecnicamente fiel."
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
        "title": "Nenhum hanja aqui",
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
            "p": "Na Coreia, o sobrenome vem primeiro, e ao contrário dos nomes dados, não é livremente inventado — você o herda. Portanto, sugerimos apenas sobrenomes que as pessoas coreanas realmente têm. Nosso pool padrão é os **20 sobrenomes mais comuns**, que juntos cobrem cerca de 80% da população."
          },
          {
            "p": "Se seu próprio sobrenome coincidir com um real coreano por som — Wang com 왕, Ye com 예 — colocamos esse primeiro. Manter um vínculo com seu nome original vale mais do que um sobrenome escolhido aleatoriamente."
          },
          {
            "p": "Você pode escolher um sobrenome você mesmo ou deixar que recomendemos um. De qualquer forma, será **um sobrenome que existe**."
          }
        ]
      },
      {
        "title": "Fácil de dizer, fácil de escrever",
        "blocks": [
          {
            "p": "Este é um nome que as pessoas na Coreia realmente chamarão você, então a primeira coisa que verificamos é se um coreano pode ouvi-lo uma vez e escrevê-lo. Um nome que precisa ser soletrado toda vez é um fardo que você carrega, não nós."
          },
          {
            "p": "O significado também importa. Nomes dados coreanos geralmente carregam um, então dizemos como o nome é lido e por que o escolhemos — não apenas o nome em si."
          }
        ]
      },
      {
        "title": "Perguntamos para que o nome serve",
        "blocks": [
          {
            "p": "Um nome para papelada universitária não é o mesmo que um nome que amigos gritarão através de uma sala, ou um apelido que você usará online. Perguntamos como você planeja usá-lo e levamos isso em conta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Isso não é uma transliteração",
        "blocks": [
          {
            "p": "Aqui propomos um **novo nome coreano**. Se você deseja que seu nome existente seja escrito em Hangul — Michael como 마이클 — veja o [guia de grafia em Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notificações",
    "title": "Notificações",
    "summary": "Onde anunciamos mudanças que afetam como você usa o serviço.",
    "backLabel": "Início",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contato",
    "title": "Entre em contato conosco",
    "summary": "Como nos contatar para perguntas, reembolsos, solicitações de privacidade e relatórios de erros, com nossos detalhes da empresa.",
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
              "**Correções** — se um significado, leitura ou cálculo de hanja parecer errado, nos avise. Mencionar qual tela e o que você inseriu ajuda muito.",
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
              "**Fornecedor de hospedagem** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Você não precisa incluir um nome ou data de nascimento em sua mensagem. Resultados gratuitos nunca são armazenados em nossos servidores, então não podemos procurá-los novamente — um número de pedido é suficiente."
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
            "p": "O pensamento subjacente é que **\"significado excessivo é realmente indesejável.\"** Isso inclui caracteres que são considerados muito preciosos (珍·寶), caracteres vistos como tendo uma presença muito forte (王·帝), e aqueles considerados muito grandiosos para uma pessoa incorporar, como céu ou deuses. Isso reflete um antigo senso de contenção, acreditando que um nome pode ofuscar a pessoa."
          },
          {
            "p": "**No entanto, esses caracteres não são inutilizáveis.** Não é uma proibição legal, mas um costume, e os costumes variam por região, família e geração, e podem mudar com o tempo."
          },
          {
            "p": "Na verdade, entre os {avoidTotal} caracteres que compilamos, {avoidCommonlyUsed} ainda são comumente usados em nomes. O fato de serem conhecidos como evitados, mas ainda amplamente utilizados, indica que esse costume não é absoluto."
          }
        ]
      },
      {
        "title": "Quais Categorias Existem?",
        "blocks": [
          {
            "p": "Os caracteres atualmente compilados são divididos em sete categorias."
          },
          {
            "ul": [
              "**Tesouros e Objetos** — Caracteres que se referem diretamente à riqueza ou itens",
              "**Céu e Natureza** — Coisas como o sol, a lua e o céu que são consideradas muito grandiosas para uma pessoa incorporar",
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
            "p": "Não excluímos esses caracteres arbitrariamente. **Fornecemos duas opções na tela de entrada para o nomeador escolher como lidar com eles.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opções Disponíveis na Tela de Entrada",
        "blocks": [
          {
            "p": "**Excluir Caracteres Evitados dos Candidatos** — Se ativado, eles são completamente excluídos. Se desativado, permanecem nos resultados com um rótulo de \"Tradicionalmente Evitados\" e a razão anexada."
          },
          {
            "p": "**Excluir Mesmo Caracteres Comumente Usados** — Isso exclui caracteres que estão na lista de evitação, mas que são realmente amplamente utilizados (圭·琳·玲·元·太·星·海, etc.). Se ativado, os candidatos serão significativamente reduzidos."
          },
          {
            "p": "O padrão é **não excluir, mas apenas exibi-los.** Se forem removidos silenciosamente da lista, pode parecer para aqueles que desejam usar aquele caractere que ele não existe."
          }
        ]
      },
      {
        "title": "Garantindo Que Opções Não Desapareçam",
        "blocks": [
          {
            "p": "Se não houver caracteres utilizáveis restantes para aquela sílaba, levantaremos a exclusão para aquela sílaba e mostraremos candidatos. Acreditamos que isso é melhor do que não ter opções."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base do Serviço",
    "title": "Qual é a Base para a Conversão de Nomes Globais?",
    "summary": "Fornecemos candidatos de cinco perspectivas, mantendo os sistemas de escrita de cada língua e usando apenas nomes existentes.",
    "backLabel": "Guia de Uso",
    "sections": [
      {
        "title": "Candidatos São Fornecidos de Cinco Perspectivas",
        "blocks": [
          {
            "p": "Não há apenas uma maneira de traduzir um nome para outra língua. Dependendo de preservar o som ou o significado, escolher um nome natural no contexto local ou priorizar a individualidade, as respostas diferem. Portanto, em vez de apresentar uma opção, fornecemos **uma de cada uma das cinco perspectivas diferentes**."
          },
          {
            "ul": [
              "**Opção de Preservação do Som** — Preserva o som do nome original o máximo possível",
              "**Opção de Tradução do Significado** — Traduz o significado contido no nome para o nome daquela língua",
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
        "title": "Cada Língua Tem Regras Diferentes de Sistema de Escrita",
        "blocks": [
          {
            "p": "Ao traduzir para uma língua que não usa letras romanas, deve ser escrito no script daquela língua. Para o japonês, seria kana e kanji; para o russo, mongol e cazaque, seria cirílico; para o árabe, seria script árabe; e para o tailandês, khmer e hindi, seria seus respectivos scripts. Se você escrevê-lo em letras romanas e chama de \"nome japonês\", não pode ser usado naquele país."
          },
          {
            "p": "Portanto, temos regras separadas para o sistema de escrita de cada língua, e o servidor verifica mais uma vez para garantir que os resultados estejam naquele sistema de escrita. Erros como omitir sobrenomes ou misturar Hangul são filtrados aqui."
          }
        ]
      },
      {
        "title": "Usamos Nomes Que São Realmente Usados",
        "blocks": [
          {
            "p": "Para evitar criar nomes que soem plausíveis, mas não existam naquele país, baseamos nossas opções em nomes existentes. Nomes são usados em documentos e apresentações, então se uma pessoa local pensa \"não existe tal nome\", não pode ser usado."
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
        "title": "Por Que Isso Foi Mudado?",
        "blocks": [
          {
            "p": "Inicialmente, criamos as cinco perspectivas separadamente. Era mais rápido, mas **o número de candidatos variava a cada vez.** À medida que cada pessoa selecionava candidatos, havia sobreposições ou discrepâncias, e se um falhasse, aquele candidato desapareceria completamente, resultando em apenas dois ou três em vez de cinco."
          },
          {
            "p": "Agora, como determinamos o conjunto de candidatos e a distribuição de perspectivas de uma vez, **o número é fixo.** Mesmo que uma descrição falhe, os candidatos permanecem e são apresentados com informações breves. Acreditamos que é melhor ter sempre o mesmo número, mesmo que leve um pouco mais de tempo."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Base do Serviço",
    "title": "Qual é a base para combinar significados de hanja?",
    "summary": "Primeiro, os sons são fixos, e apenas hanja que podem ser registrados com esse som são reunidos, e o significado é visto como uma combinação em vez de um único caractere.",
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
            "caption": "Esta é a ordem em que os candidatos são reduzidos. Não se trata de escolher hanja primeiro e combinar os sons, mas sim que os sons vêm primeiro, e apenas caracteres designados para serem lidos com esse som se tornam candidatos."
          }
        ]
      },
      {
        "title": "Reunir apenas hanja que podem ser registrados com esse som",
        "blocks": [
          {
            "p": "A tabela oficial de hanja para nomes tem uma leitura designada para cada caractere quando usado em nomes. Apenas caracteres designados para serem lidos como **지** e **은** se tornam candidatos. Não importa quão bom o significado seja, se a leitura não corresponder, não pode ser o hanja para esse nome."
          },
          {
            "p": "O alcance para selecionar candidatos é os {characterTotal} caracteres da tabela da Suprema Corte. Caracteres que não estão nesta tabela não são apresentados de forma alguma — mesmo que mostrados, não podem ser registrados."
          },
          {
            "p": "O número de caracteres na tabela publicada pela Suprema Corte é ligeiramente maior que isso. A tabela também inclui **caracteres sem códigos de caracteres padrão**, que não podem ser exibidos corretamente em telas e documentos, então esses caracteres foram excluídos dos candidatos. Você deve verificar com a autoridade relevante se pode registrar com esses caracteres."
          }
        ]
      },
      {
        "title": "O significado é visto como uma combinação, não um único caractere",
        "blocks": [
          {
            "p": "O significado de cada caractere individual ser bom e o significado lido quando dois caracteres são combinados ser bom são diferentes. Nomes são lidos como combinações, então olhamos para as combinações juntas. Se você tiver significados específicos que deseja incluir ou evitar, esses são levados em conta."
          },
          {
            "p": "Se você estiver usando um caractere de geração, esse caractere é fixo, e combinações são buscadas a partir das posições restantes. O sobrenome (성) não é restrito pela tabela oficial de hanja para nomes, então é tratado separadamente."
          }
        ]
      },
      {
        "title": "Indicamos costumes de evitação sem removê-los",
        "blocks": [
          {
            "p": "Se um caractere tradicionalmente considerado evitado estiver incluído nos candidatos, não o removemos, mas mostramos a razão junto com ele. Isso é uma questão de costume, não de lei, e você pode optar por excluí-lo completamente da tela de entrada. Para mais detalhes, veja [Hanja Tradicionalmente Evitados](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Também informamos as razões para exclusão",
        "blocks": [
          {
            "p": "Mostramos por que certos caracteres foram excluídos dos candidatos. Se mostrarmos apenas o que foi escolhido, você não pode saber \"por que este?\" Se não houver caracteres utilizáveis restantes para aquela sílaba, levantaremos a exclusão para aquela sílaba e mostraremos os candidatos."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Como ler os resultados",
        "blocks": [
          {
            "p": "Candidatos são **perspectivas, não classificações**. O primeiro não significa que é o melhor nome; eles são selecionados de diferentes perspectivas. Aqueles que priorizam a combinação de significados, aqueles que escolhem caracteres incomuns e aqueles que enfatizam a neutralidade são apresentados lado a lado. A resposta varia dependendo de qual perspectiva você valoriza."
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
            "p": "**Segundo, esses cálculos dependem de contagens de traços.** No entanto, os dados da Suprema Corte não incluem contagens de traços. Além disso, as contagens de traços podem variar dependendo de serem contadas como caracteres regulares ou simplificados e como os radicais são contados. Como os números fundamentais não estão definitivamente estabelecidos, as pontuações construídas sobre eles não podem ser definitivas."
          },
          {
            "p": "**Terceiro, números parecem mais sólidos do que a realidade.** Quando diz \"87 pontos\", parece um valor medido em vez de uma interpretação convencional. Aqueles que nomeiam podem se sentir pressionados por esse número, afastando-se do que é realmente importante (É agradável de chamar? O significado se encaixa? Contém os desejos desejados?)."
          },
          {
            "p": "**Quarto, não há como verificar.** A relação entre um nome e a vida de uma pessoa não pode ser verificada. Converter algo que não pode ser dito como certo ou errado em uma pontuação resulta em um número que não pode ser confirmado, mesmo que não possa estar errado."
          },
          {
            "p": "Usamos apenas o que pode ser **substanciado.** A tabela oficial de hanja da Suprema Corte, as leituras designadas para cada caractere e os significados listados na tabela. Em vez disso, fornecemos razões para por que este candidato foi selecionado e por que certos caracteres foram excluídos, mostrando **razões em vez de pontuações**."
          }
        ]
      },
      {
        "title": "Não usamos contagens de traços",
        "blocks": [
          {
            "p": "Os dados oficiais de hanja para nomes fornecidos pela Suprema Corte não incluem contagens de traços. Entre os {characterTotal} caracteres que recebemos, **nenhum caractere tem contagens de traços.**"
          },
          {
            "p": "Para usar contagens de traços, precisaríamos obter números de algum lugar, mas se não pudermos esclarecer de onde esses números vieram e quais critérios foram usados para contá-los, significaria julgar nomes com base em números infundados. Decidimos não avaliar nomes com base em valores que não podem ser substanciados."
          }
        ]
      },
      {
        "title": "Usamos os cinco elementos apenas como referência",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "As relações entre os cinco elementos. Mover ao longo do círculo representa geração mútua (相生), enquanto pular um e pressionar para baixo representa restrição mútua (相剋). Usamos essa relação apenas como um eixo suplementar para comparar candidatos."
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
  }
} satisfies Record<DocKey, DocPage>;

export const PT_NOTICES = {
  "kindLabels": {
    "service": "Serviço",
    "product": "Produtos",
    "policy": "Política",
    "support": "Suporte"
  },
  "intro": "Mudanças em seus termos de uso — preços, políticas — são postadas aqui antes de entrarem em vigor. Melhorias internas não são listadas: o que aparece aqui é o que você precisa saber.",
  "empty": {
    "title": "Nenhuma notificação ainda",
    "body": "Quando algo mudar, aparecerá aqui."
  },
  "effective": "Entra em vigor {date}",
  "pager": {
    "label": "Páginas de notificação",
    "newer": "← Mais novas",
    "older": "Mais antigas →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Páginas de Contato e Sobre agora estão abertas",
      "body": [
        "Perguntas, reembolsos, solicitações de privacidade e relatórios de erros agora têm um lugar para ir. A página de contato no rodapé lista nosso e-mail e detalhes da empresa.",
        "O que nossas respostas se baseiam e o que deliberadamente não fazemos está escrito na página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Relatórios em PDF são emitidos em inglês para árabe e khmer",
      "body": [
        "Se você estiver usando o serviço em árabe ou khmer, o PDF que você compra é produzido em inglês. A ferramenta que organiza nossos documentos ainda não consegue definir parágrafos nesses dois scripts.",
        "A tela permanece em seu idioma, e seu nome é impresso em seu próprio script dentro do documento.",
        "A mesma nota aparece antes do pagamento. Quando a ferramenta suportar esses scripts, diremos isso aqui."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pagamentos ainda não estão abertos",
      "body": [
        "Criar um nome e ler o resultado é gratuito hoje, e nenhuma conta é necessária.",
        "Itens pagos ainda não estão à venda. Os valores mostrados na página de preços são os que se aplicarão uma vez que as vendas forem abertas."
      ]
    }
  }
} satisfies NoticeCopy;
