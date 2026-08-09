import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Português — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PT_DOCS = {
  "about": {
    "eyebrow": "Sobre",
    "title": "Sobre Inyeon-Link",
    "summary": "Comparamos dois gráficos de nascimento na tradição coreana de saju. Aqui está o que calculamos e o que nos recusamos a afirmar.",
    "backLabel": "Início",
    "sections": [
      {
        "title": "O que fazemos",
        "blocks": [
          {
            "p": "Inyeon-Link constrói dois gráficos de nascimento a partir das datas e horários de nascimento e mostra **como os dois conjuntos de energias se encontram.** Você também pode ler seu próprio gráfico sozinho e ver quais temperamentos tendem a lhe agradar."
          },
          {
            "p": "A leitura na tela é **gratuita e não precisa de conta.** Os itens pagos são relatórios em PDF que contêm figuras que a tela nunca mostra — forças dos elementos, combinações dos dez deuses e as relações entre os quatro pilares."
          }
        ]
      },
      {
        "title": "O que calculamos",
        "blocks": [
          {
            "p": "Os gráficos são construídos a partir do **calendário lunissolar coreano**, e o horário de nascimento é corrigido para **horário solar verdadeiro** para o local de nascimento — o mesmo horário do relógio significa uma posição do sol diferente dependendo de onde você nasceu."
          },
          {
            "p": "As pontuações vêm apenas de regras fixas. Conceitos tradicionais — dez deuses, relações de ramos, o elemento de apoio — são expressos como regras, então **a mesma entrada sempre dá o mesmo resultado.** Quando uma regra muda, executamos um teste de regressão para garantir que leituras mais antigas não foram alteradas."
          },
          {
            "p": "**Nenhuma IA está envolvida.** Cada frase na tela é texto fixo anexado a um resultado calculado."
          }
        ]
      },
      {
        "title": "O que não afirmaremos",
        "blocks": [
          {
            "ul": [
              "**Não contamos fortunes.** Nada aqui diz para você perseguir ou evitar alguém. É uma referência extraída de uma tradição.",
              "**Não armazenamos o que você insere.** Os detalhes de nascimento são usados apenas no momento do cálculo e nunca são anotados; os links dos resultados vivem na parte da URL que um navegador não envia para um servidor.",
              "**Uma pontuação não é um veredicto sobre uma pessoa.** Um número baixo não invalida um relacionamento."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "O método é descrito em detalhes nos [guias](/guide). Os detalhes da empresa e como nos contatar estão na [página de contato](/contact)."
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
    "title": "Nenhum aviso ainda",
    "body": "Quando algo mudar, aparecerá aqui."
  },
  "effective": "Entra em vigor {date}",
  "pager": {
    "label": "Páginas de aviso",
    "newer": "← Mais novo",
    "older": "Mais antigo →"
  },
  "items": {}
} satisfies NoticeCopy;
