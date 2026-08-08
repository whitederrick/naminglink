import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Sobre",
    "title": "Sobre o Naming-Link",
    "summary": "Somos um serviço que ajuda você a escolher e entender nomes coreanos. Aqui está o que usamos como base para nossos resultados e o que deliberadamente não fazemos.",
    "backLabel": "Início",
    "sections": [
      {
        "title": "O que fazemos",
        "blocks": [
          {
            "p": "Naming-Link ajuda você a **escolher e entender nomes coreanos** — o hanja por trás do nome de uma criança, um nome coreano para usar no exterior, uma grafia em Hangul do seu próprio nome, e recordações como um selo ou um relatório impresso."
          },
          {
            "p": "Ver seus resultados é **gratuito e não precisa de conta.** Itens pagos nunca revendem o que a tela já mostrou: eles abrem mais candidatos, adicionam análise escrita ou transformam o resultado em algo que você pode guardar."
          }
        ]
      },
      {
        "title": "Com base em que nossas respostas são",
        "blocks": [
          {
            "p": "Os hanja vêm da **tabela oficial de hanja do Supremo Tribunal da Coreia.** Cada caractere tem uma leitura fixa para uso em nomes, e caracteres fora da tabela não podem ser registrados. Não adicionamos a essa lista nem escolhemos favoritos."
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
              "**Não fazemos previsões.** Nada aqui promete sorte, riqueza ou proteção.",
              "**Não armazenamos seu nome.** Resultados gratuitos nunca são escritos em nossos servidores, e documentos pagos são entregues sem manter uma cópia do arquivo.",
              "**Pagar não compra uma resposta melhor.** Desbloquear com um anúncio e desbloquear com um pagamento oferecem exatamente o mesmo conteúdo."
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
            "p": "A tabela de hanja de nomes não decide apenas quais caracteres podem ser usados. **Ela também fixa como cada caractere é lido quando aparece em um nome.** Essa leitura fixa é a que serve para o registro."
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
            "p": "Por melhor que um significado seja, um caractere cuja leitura não corresponda não pode ser usado para esse nome. Também nunca mudamos o som de um nome para se adequar a um caractere — um nome é falado por toda a vida, e o som é fixado primeiro, com o hanja seguindo."
          }
        ]
      },
      {
        "title": "Os sobrenomes estão fora desta tabela",
        "blocks": [
          {
            "p": "Isso é frequentemente mal interpretado. **A tabela rege o nome dado, não o sobrenome.** Um sobrenome segue o que já está no registro familiar, então algumas pessoas realmente usam caracteres que não estão na tabela de hanja de nomes."
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
            "p": "Este serviço escreve **seu nome** em Hangul. Não lhe dá um nome coreano. Michael se torna 마이클 — o mesmo nome, escrito para que os coreanos possam ler e dizer. Não o trocamos por um nome coreano que por acaso signifique algo semelhante."
          },
          {
            "p": "Se um nome coreano é o que você quer, **esse é um serviço diferente.** Um mantém seu nome e muda apenas o script; o outro propõe um novo nome."
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
            "p": "Não há uma única resposta certa. A grafia mais próxima do som original, a que é mais comumente usada na Coreia, e a que é mais fácil de escrever costumam ser três coisas diferentes. Então, mostramos todas juntas e dizemos o que as separa."
          },
          {
            "p": "Se nenhuma delas parecer certa, você pode adicionar uma dica sobre o som que deseja e rodar novamente — por exemplo, que uma sílaba específica deve ser escrita de forma diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nenhum hanja aqui",
        "blocks": [
          {
            "p": "Não anexamos hanja a uma transliteração. Hanja carregam significado, e este fluxo é sobre som. Combinar caracteres apenas com som pode resultar em um significado que você nunca pediu."
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
            "p": "Se seu próprio sobrenome coincidir com um sobrenome coreano real por som — Wang com 왕, Ye com 예 — colocamos esse primeiro. Manter um vínculo com seu nome original vale mais do que um sobrenome escolhido aleatoriamente."
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
        "title": "Perguntamos para que o nome é",
        "blocks": [
          {
            "p": "Um nome para papelada universitária não é o mesmo que um nome que amigos gritarão de um lado a outro de uma sala, ou um nome que você usará online. Perguntamos como você planeja usá-lo e levamos isso em conta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Este não é uma transliteração",
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
            "p": "Escreva para **{email}**. Respondemos dentro de dois dias úteis. Para qualquer coisa relacionada a um pedido — pagamento, reembolso, um arquivo que você não recebeu — por favor inclua seu **número do pedido ou o e-mail com o qual pagou**."
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
              "**Número de registro de vendas por correspondência** — {mailOrderNumber}",
              "**Endereço** — {address}",
              "**Serviço ao cliente** — {customerCenter}",
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
  "effective": "Vigora a partir de {date}",
  "pager": {
    "label": "Páginas de notificações",
    "newer": "← Mais novas",
    "older": "Mais antigas →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "As páginas de Contato e Sobre agora estão abertas",
      "body": [
        "Perguntas, reembolsos, solicitações de privacidade e relatórios de erros agora têm um único lugar para ir. A página de contato no rodapé lista nosso e-mail e detalhes da empresa.",
        "O que nossas respostas são baseadas e o que deliberadamente não fazemos está escrito na página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Relatórios em PDF são emitidos em inglês para árabe e khmer",
      "body": [
        "Se você estiver usando o serviço em árabe ou khmer, o PDF que você compra é produzido em inglês. A ferramenta que organiza nossos documentos ainda não pode definir parágrafos nesses dois scripts.",
        "A tela permanece no seu idioma, e seu nome é impresso em seu próprio script dentro do documento.",
        "A mesma nota aparece antes do pagamento. Quando a ferramenta suportar esses scripts, diremos isso aqui."
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
