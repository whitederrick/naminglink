import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Versión en español. Traducción del texto coreano original (ko.ts), que es el que
// tiene efecto legal. Si cambia el original, hay que revisar también este archivo.

export const es: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Información del producto",
    info: [
      ["Proveedor", "Naming-Link"],
      ["Formato", "Contenido digital (resultado en pantalla o documento PDF). Se entrega inmediatamente después del pago."],
      ["Requisitos", "Un navegador de internet o cualquier dispositivo que pueda abrir un PDF. No requiere instalación."],
      ["Periodo de uso", "Sin límite. El archivo descargado queda en poder del usuario."],
      ["Desistimiento", "Reembolso íntegro antes de que comience la entrega. Una vez iniciada, el desistimiento por simple cambio de opinión queda restringido (art. 17.2 de la Ley coreana de Comercio Electrónico)."],
      ["Gastos de cambio o devolución", "Ninguno. Al tratarse de contenido digital, no hay envío."],
    ],
    consent:
      "Confirmo que este producto es contenido digital que se entrega inmediatamente después del pago y que **una vez iniciada la entrega, el desistimiento por simple cambio de opinión queda restringido**.",
    required: "Para poder pagar, debe aceptar las condiciones de restricción del desistimiento.",
    refund:
      "Para reembolsos o consultas, diríjase al centro de atención al cliente o al correo electrónico que figura abajo. Si un error del sistema impidió la entrega del producto, o si el importe cobrado difiere del pedido, le reembolsaremos el importe íntegro.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Información del producto",
    info: [
      ["Proveedor", "Naming-Link"],
      ["Formato", "Sello físico (dojang) grabado de forma individual con el texto que usted encarga."],
      ["Proceso de fabricación", "Tras recibir el pedido, confirmamos el texto y la tipografía y comenzamos el grabado."],
      ["Envío", "Se expide una vez terminado el grabado. Mensajería nacional en Corea y envío internacional al extranjero."],
      ["Desistimiento", "**Antes de que comience el grabado**, reembolso íntegro. Una vez iniciado, el desistimiento queda restringido: se trata de un bien producido individualmente según su pedido y que no se puede revender (art. 17.2 de la Ley coreana de Comercio Electrónico)."],
      ["Cambios y devoluciones", "Si el artículo llega dañado, mal grabado o distinto del pedido, lo fabricamos de nuevo sin coste o le reembolsamos el importe íntegro."],
      ["Gastos de devolución", "Gratuitos en los casos anteriores. Por simple cambio de opinión solo es posible cancelar antes de que comience el grabado."],
    ],
    consent:
      "Confirmo que este producto es un **artículo fabricado por encargo, grabado con el texto que he indicado, y que una vez iniciado el grabado el desistimiento por simple cambio de opinión queda restringido**.",
    required: "Para poder pagar, debe aceptar las condiciones de restricción del desistimiento.",
    refund:
      "Para reembolsos o consultas, diríjase al centro de atención al cliente o al correo electrónico que figura abajo. Si el artículo está dañado, mal grabado o es distinto del pedido, lo fabricamos de nuevo sin coste o le reembolsamos el importe íntegro.",
  },
};
