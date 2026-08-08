import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Sobre",
    "title": "Sobre Naming-Link",
    "summary": "Nós ajudamos você a escolher e entender nomes coreanos. Aqui está o que usamos como base para nossos resultados e o que deliberadamente não fazemos.",
    "backLabel": "Início",
    "sections": [
      {
        "title": "O que fazemos",
        "blocks": [
          {
            "p": "Naming-Link ajuda você a **escolher e entender nomes coreanos** — o hanja por trás do nome de uma criança, um nome coreano para usar no exterior, uma grafia em Hangul do seu próprio nome, e recordações como um selo ou um relatório impresso."
          },
          {
            "p": "Ver seus resultados é **gratuito e não requer conta.** Itens pagos nunca revendem o que a tela já mostrou: eles abrem mais candidatos, adicionam análise escrita ou transformam o resultado em algo que você pode guardar."
          }
        ]
      },
      {
        "title": "Com base em que nossas respostas",
        "blocks": [
          {
            "p": "O hanja vem da **tabela oficial de hanja do Supremo Tribunal da Coreia.** Cada caractere tem uma leitura fixa para uso em nomes, e caracteres fora da tabela não podem ser registrados. Nós não adicionamos a essa lista ou escolhemos favoritos."
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
              "**Não armazenamos seu nome.** Resultados gratuitos nunca são gravados em nossos servidores, e documentos pagos são entregues sem manter uma cópia do arquivo.",
              "**Pagar não compra uma resposta melhor.** Desbloquear com um anúncio e desbloquear com um pagamento oferecem exatamente o mesmo conteúdo."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "O serviço está disponível em 23 idiomas. PDFs pagos são emitidos em inglês para árabe e khmer — o renderizador de PDF não suporta esses scripts — e informamos isso na tela antes de você pagar."
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
            "p": "Escreva para **{email}**. Respondemos dentro de dois dias úteis. Para qualquer coisa relacionada a um pedido — pagamento, reembolso, um arquivo que você não recebeu — por favor inclua seu **número do pedido ou o e-mail que você usou para pagar**."
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
              "**Número de registro da empresa** — {businessNumber}",
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
  "intro": "Mudanças nos seus termos de uso — preços, políticas — são postadas aqui antes de entrarem em vigor. Melhorias internas não são listadas: o que aparece aqui é o que você precisa saber.",
  "empty": {
    "title": "Nenhuma notificação ainda",
    "body": "Quando algo mudar, aparecerá aqui."
  },
  "effective": "Entra em vigor {date}",
  "pager": {
    "label": "Páginas de notificações",
    "newer": "← Mais recente",
    "older": "Mais antigo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Páginas de Contato e Sobre agora estão abertas",
      "body": [
        "Consultas, reembolsos, solicitações de privacidade e relatórios de erros agora têm um único lugar para ir. A página de contato no rodapé lista nosso e-mail e detalhes da empresa.",
        "O que nossas respostas são baseadas e o que deliberadamente não fazemos está escrito na página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Relatórios em PDF são emitidos em inglês para árabe e khmer",
      "body": [
        "Se você estiver usando o serviço em árabe ou khmer, o PDF que você compra é produzido em inglês. A ferramenta que organiza nossos documentos ainda não consegue formatar parágrafos nesses dois scripts.",
        "A tela permanece no seu idioma, e seu nome é impresso no seu próprio script dentro do documento.",
        "A mesma nota aparece antes do pagamento. Quando a ferramenta suportar esses scripts, informaremos aqui."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pagamentos ainda não estão abertos",
      "body": [
        "Criar um nome e ler o resultado é gratuito hoje, e nenhuma conta é necessária.",
        "Itens pagos ainda não estão à venda. Os valores mostrados na página de preços são os que se aplicarão assim que as vendas forem abertas."
      ]
    }
  }
} satisfies NoticeCopy;
