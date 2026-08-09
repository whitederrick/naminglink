import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Acerca de",
    "title": "Acerca de Inyeon-Link",
    "summary": "Comparamos dos cartas de nacimiento en la tradición del Saju coreano. Aquí está lo que calculamos y lo que nos negamos a afirmar.",
    "backLabel": "Inicio",
    "sections": [
      {
        "title": "Lo que hacemos",
        "blocks": [
          {
            "p": "Inyeon-Link construye dos cartas de nacimiento a partir de fechas y horas de nacimiento y muestra **cómo se encuentran los dos conjuntos de energías.** También puedes leer tu propia carta por separado y ver qué temperamentos tienden a adaptarse a ti."
          },
          {
            "p": "Leer en pantalla es **gratis y no necesita cuenta.** Los elementos de pago son informes en PDF que contienen cifras que la pantalla nunca muestra: fortalezas de elementos, emparejamientos de diez dioses y las relaciones a través de los cuatro pilares."
          }
        ]
      },
      {
        "title": "Lo que calculamos",
        "blocks": [
          {
            "p": "Las cartas se construyen a partir del **calendario lunisolar coreano**, y la hora de nacimiento se corrige a **hora solar verdadera** para el lugar de nacimiento: la misma hora del reloj significa una posición del sol diferente dependiendo de dónde naciste."
          },
          {
            "p": "Las puntuaciones provienen solo de reglas fijas. Los conceptos tradicionales — diez dioses, relaciones de ramas, el elemento de apoyo — se expresan como reglas, por lo que **la misma entrada siempre da el mismo resultado.** Cuando una regla cambia, ejecutamos un arnés de regresión para asegurarnos de que las lecturas anteriores no se hayan movido."
          },
          {
            "p": "**No se involucra IA.** Cada oración en pantalla es texto fijo adjunto a un resultado calculado."
          }
        ]
      },
      {
        "title": "Lo que no afirmaremos",
        "blocks": [
          {
            "ul": [
              "**No contamos fortunas.** Nada aquí te dice que persigas o evites a alguien. Es una referencia extraída de una tradición.",
              "**No almacenamos lo que ingresas.** Los detalles de nacimiento se utilizan en el momento del cálculo y nunca se escriben; los enlaces de resultados viven en la parte de la URL que un navegador no envía a un servidor.",
              "**Una puntuación no es un veredicto sobre una persona.** Un número bajo no invalida una relación."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "El método se describe en detalle en las [guías](/guide). Los detalles de la empresa y cómo contactarnos están en la [página de contacto](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ES_NOTICES = {
  "kindLabels": {
    "service": "Servicio",
    "product": "Productos",
    "policy": "Política",
    "support": "Soporte"
  },
  "intro": "Los cambios en tus términos de uso — precios, políticas — se publican aquí antes de que entren en vigor. Las mejoras internas no se enumeran: lo que aparece aquí es lo que necesitas saber.",
  "empty": {
    "title": "Sin avisos aún",
    "body": "Cuando algo cambie, aparecerá aquí."
  },
  "effective": "Entra en vigor el {date}",
  "pager": {
    "label": "Páginas de avisos",
    "newer": "← Más nuevo",
    "older": "Más antiguo →"
  },
  "items": {}
} satisfies NoticeCopy;
