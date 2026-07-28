import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Português (Brasil). Tradução do texto coreano em ko.ts, que é a versão com efeito legal.
// **Não altere condições, prazos ou exceções aqui** — corrija primeiro ko.ts e depois todos os idiomas.

export const pt: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Informações do produto",
    info: [
      ["Fornecedor", "Naming-Link"],
      ["Formato", "Conteúdo digital (resultado na tela ou documento PDF). Entregue imediatamente após o pagamento."],
      ["Requisitos", "Um navegador de internet ou qualquer aparelho que abra PDF. Não é preciso instalar nada."],
      ["Prazo de uso", "Sem limite. O arquivo baixado fica guardado com você."],
      ["Arrependimento", "Reembolso integral antes de a entrega começar. Depois de iniciada, o arrependimento por simples mudança de ideia fica restrito (art. 17, § 2º, da Lei de Comércio Eletrônico da Coreia)."],
      ["Custos de troca ou devolução", "Nenhum. Por ser conteúdo digital, não há envio."],
    ],
    consent:
      "Confirmo que este é um conteúdo digital entregue imediatamente após o pagamento e que **o direito de arrependimento por simples mudança de ideia fica restrito assim que a entrega começa**.",
    required: "É preciso concordar com as restrições ao direito de arrependimento para poder pagar.",
    refund:
      "Para reembolsos ou dúvidas, procure a central de atendimento ou o e-mail no rodapé. Se uma falha do sistema impedir a entrega do produto, ou se o valor cobrado for diferente do pedido, devolvemos o valor integral.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Informações do produto",
    info: [
      ["Fornecedor", "Naming-Link"],
      ["Formato", "Carimbo físico (dojang) produzido individualmente, com o texto do seu pedido gravado nele"],
      ["Como é feito", "Depois de recebido o pedido, confirmamos o texto e a tipografia e damos início à gravação."],
      ["Envio", "Despachado após a conclusão da produção. Na Coreia, por transportadora; para o exterior, por envio internacional."],
      ["Arrependimento", "**Antes de a produção começar**, reembolso integral. Depois de iniciada, o direito de arrependimento fica restrito — trata-se de um bem produzido individualmente conforme o pedido e que não pode ser revendido (art. 17, § 2º, da Lei de Comércio Eletrônico da Coreia)."],
      ["Troca e devolução", "Em caso de dano, gravação errada ou produto diferente do pedido, refazemos sem custo ou devolvemos o valor integral."],
      ["Custos de devolução", "Gratuito nos casos acima. A simples mudança de ideia só permite cancelamento antes de a produção começar."],
    ],
    consent:
      "Confirmo que este carimbo é um **produto feito sob encomenda, gravado com o texto que forneci, e que o direito de arrependimento por simples mudança de ideia fica restrito assim que a produção começa**.",
    required: "É preciso concordar com as restrições ao direito de arrependimento para poder pagar.",
    refund:
      "Para reembolsos ou dúvidas, procure a central de atendimento ou o e-mail no rodapé. Casos de dano, gravação errada ou produto diferente do pedido são resolvidos com nova produção sem custo ou reembolso integral.",
  },
};
