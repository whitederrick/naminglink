import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Introducción",
    "title": "Introducción a Saju-Link",
    "summary": "Este es un servicio que establece un saju (lectura de cuatro pilares) basado en tu fecha y hora de nacimiento y explica lo que significan los ocho caracteres. Aclara qué se calcula y qué no.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "title": "¿Qué hacemos?",
        "blocks": [
          {
            "p": "Saju-Link establece el **gráfico de saju (cuatro pilares) basado en tu fecha y hora de nacimiento y muestra lo que significan los ocho caracteres**. Lee la fuerza de los cinco elementos y la fuerza del maestro del día, y también examina la fortuna de hoy basada en el tallo del día."
          },
          {
            "p": "Lo que ves en la pantalla es **gratis y no requiere membresía.** El producto de pago es un documento PDF que contiene valores no mostrados en la pantalla — la base para distinguir entre un maestro del día fuerte y un maestro del día débil, Wang Sang Hyu Su Sa, y los detalles de corrección para el tiempo solar verdadero."
          }
        ]
      },
      {
        "title": "¿Qué calculamos?",
        "blocks": [
          {
            "p": "El saju se establece utilizando el **manseyeok (almanaque lunisolar coreano)**. La hora de nacimiento se corrige al **tiempo solar verdadero** del lugar de nacimiento — porque la posición real del sol varía según la región, incluso si el reloj muestra la misma hora."
          },
          {
            "p": "Las puntuaciones se dan solo de acuerdo con las reglas establecidas. Conceptos de la tradicional 명리 (myeongri, el estudio del destino) como los Diez Dioses, relaciones de ramas terrestres, y elementos de apoyo se traducen en reglas para el cálculo, y **la misma entrada siempre dará el mismo valor**. Cuando se cambian las reglas, se realiza una prueba de regresión para asegurar que los resultados anteriores permanezcan sin cambios."
          },
          {
            "p": "**No se utiliza IA en las oraciones de la pantalla.** Las explicaciones que aparecen en la pantalla gratuita son frases fijas adjuntas a los resultados del cálculo. **Solo las interpretaciones en los informes de pago** utilizan IA generativa, y aun así, la IA no crea puntuaciones — solo escribe oraciones basadas en los valores proporcionados por el motor."
          }
        ]
      },
      {
        "title": "¿Qué no decimos?",
        "blocks": [
          {
            "ul": [
              "**No proporcionamos adivinaciones.** No escribimos que debas conocer o evitar a alguien. Este es un material de referencia que resume las perspectivas de la tradicional 명리.",
              "**No guardamos entradas.** La fecha y hora de nacimiento se utilizan solo en el momento del cálculo y no se retienen en el servidor. El enlace del resultado también se almacena en un lugar que el navegador no envía al servidor.",
              "**Las puntuaciones no se consideran valores humanos.** Solo porque la fortuna de hoy sea baja no significa que debas rendirte en ese día."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Los métodos de cálculo detallados están escritos en la [Guía del Usuario](/guide). La información comercial y los detalles de contacto se pueden encontrar en [Contáctanos](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base de Cálculo",
    "title": "¿Cuál es la base para los cálculos?",
    "summary": "Divulgamos todas las reglas utilizadas por Saju-Link. Puedes verificar de dónde provienen los números mostrados en la pantalla, incluidos los ajustes para la fortuna de hoy, las puntuaciones de la tabla de relaciones de ramas terrestres, y los valores límite que distinguen entre un maestro del día fuerte y un maestro del día débil.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Los valores escritos aquí son todos **leídos directamente del código de cálculo**. Dado que no se transcriben manualmente en el texto, si se cambian las reglas, los números en este documento también cambiarán en consecuencia."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Base del Servicio",
    "title": "Gráfico de Saju — ¿De dónde provienen los ocho caracteres?",
    "summary": "Explica cómo el año, mes, día y hora de nacimiento se convierten en los cuatro pilares y ocho caracteres, e identifica qué carácter te señala. También discute por qué se puede ver incluso sin conocer la hora exacta de nacimiento.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Cuatro Pilares, Ocho Caracteres",
        "blocks": [
          {
            "p": "Saju (四柱) literalmente significa **cuatro pilares**. Cada uno de los año, mes, día y hora de nacimiento se establece como un pilar, y se escriben dos caracteres para cada pilar. Así, hay un total de ocho caracteres, que se refiere como **원국 (won-guk)**."
          },
          {
            "table": {
              "head": [
                "Pilar",
                "¿De dónde proviene?",
                "Dos Caracteres"
              ],
              "rows": [
                [
                  "Pilar del Año (年柱)",
                  "Año de nacimiento",
                  "Tallo Celestial + Rama Terrestre"
                ],
                [
                  "Pilar del Mes (月柱)",
                  "Mes de nacimiento",
                  "Tallo Celestial + Rama Terrestre"
                ],
                [
                  "Pilar del Día (日柱)",
                  "Día de nacimiento",
                  "Tallo Celestial + Rama Terrestre"
                ],
                [
                  "Pilar de la Hora (時柱)",
                  "Hora de nacimiento",
                  "Tallo Celestial + Rama Terrestre"
                ]
              ]
            }
          },
          {
            "p": "Los caracteres superiores se llaman tallos celestiales (天干), y los caracteres inferiores se llaman ramas terrestres (地支). Hay diez tallos celestiales y doce ramas terrestres. Las doce ramas terrestres se conocen comúnmente como **signos del zodiaco**."
          }
        ]
      },
      {
        "title": "Entre ellos, un carácter me señala.",
        "blocks": [
          {
            "p": "No todos los ocho caracteres tienen el mismo peso. El **tallo celestial del día de nacimiento**, específicamente el carácter superior del pilar del día, señala **mi mismo**. Esto se llama el **tallo del día (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "El saju consiste en ocho caracteres establecidos utilizando dos caracteres cada uno para el año, mes, día y hora de nacimiento, representados por los tallos celestiales y las ramas terrestres. Aquí, el prominente tallo del día (日干) es el carácter que me señala.",
            "labels": {
              "year": "Pilar del Año",
              "yearNote": "Raíz · Signo del Zodiaco",
              "month": "Pilar del Mes",
              "monthNote": "Estación · Fuerza",
              "day": "Maestro del Día",
              "dayNote": "Yo · Palacio del Cónyuge",
              "hour": "Maestro de la Hora",
              "hourNote": "Años Posteriores · Uso",
              "stem": "Rama Celestial",
              "stemNote": "Rama del Día = Yo",
              "branch": "Rama Terrestre",
              "branchNote": "Rama del Día = Palacio del Cónyuge"
            }
          },
          {
            "p": "Lo que este servicio muestra proviene principalmente de este único carácter: la interpretación de tendencias, la fuerza de los cinco elementos, la energía actualmente necesaria y la lectura de hoy se miden en base a la Rama del Día. Los siete caracteres restantes indican 'en qué entorno se encuentra la Rama del Día'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "¿Por qué el Día de Nacimiento?",
        "blocks": [
          {
            "p": "La Rama Celestial es la misma para todos los nacidos en ese año, y la Rama del Mes es la misma para todos los nacidos en ese mes. La Rama del Día cambia cuando cambia el día, y la adivinación tradicional ha considerado esta posición como el Yo desde la Dinastía Song. Si se incluye la Rama de la Hora, se diferencia incluso entre aquellos nacidos el mismo día."
          }
        ]
      },
      {
        "title": "Dividido por Términos Solares, No por Año Calendario",
        "blocks": [
          {
            "p": "Un año de saju no cambia el 1 de enero, sino en **Ipchun (alrededor del 4 de febrero)**. El mes también se divide según los términos solares."
          },
          {
            "p": "Por lo tanto, aquellos nacidos en **enero y principios de febrero reciben la Rama Celestial del año anterior**. Aquí es donde surge la confusión común sobre los signos zodiacales. Lo mismo se aplica si ingresas una fecha de nacimiento lunar: se convierte de nuevo a solar y luego se divide por términos solares."
          }
        ]
      },
      {
        "title": "Puedes Leerlo Incluso Sin Saber la Hora de Nacimiento",
        "blocks": [
          {
            "p": "Si no ingresas la hora, la lectura se basará en los tres pilares y seis caracteres, excluyendo al Maestro de la Hora. No adivinamos valores faltantes: asignar arbitrariamente un Maestro de la Hora puede alterar la fuerza de los cinco elementos, llevando a conclusiones incorrectas en lugar de potencialmente precisas."
          },
          {
            "p": "Si conoces la hora, es mejor incluirla. Dado que se añaden dos caracteres entre los ocho, la fuerza y la evaluación de los cinco elementos pueden cambiar. Sin embargo, no usamos la hora del reloj directamente, sino que utilizamos [Tiempo Solar Verdadero](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "El método de contar los ocho caracteres como cinco elementos para evaluar la fuerza se continúa en [Fuerza de los Cinco Elementos y Maestro del Día Fuerte/Débil](/guide/five-elements), mientras que el método de leer los caracteres restantes en base a la Rama del Día se continúa en [Diez Dioses](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Cinco Elementos",
    "title": "Fuerza de los Cinco Elementos y Maestro del Día Fuerte/Débil",
    "summary": "Contamos los ocho caracteres como cinco elementos para ver qué energía es fuerte y cuál es débil. Revelamos los valores umbral (45%·35%) que determinan la fuerza de la Rama del Día.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Contando Ocho Caracteres como Cinco Energías",
        "blocks": [
          {
            "p": "Los diez Ramos Celestiales y las doce Ramas Terrestres pertenecen cada uno a uno de los **Cinco Elementos (五行)** — Madera (木), Fuego (火), Tierra (土), Metal (金), Agua (水). Al contar los caracteres en el gráfico original según sus respectivos elementos, podemos determinar qué energía es fuerte y cuál es débil."
          },
          {
            "p": "Sin embargo, no solo contamos los números. También consideramos **si el mes de nacimiento apoya esa energía**. Incluso el mismo carácter puede tener diferentes fuerzas dependiendo de si se encuentra en su temporada. Esto se llama el Signo del Mes (月令), y se divide en cinco etapas: Wang (旺), Sang (相), Hyu (休), Su (囚), y Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dónde Difieren Pantalla e Informe",
        "blocks": [
          {
            "p": "La pantalla gratuita solo muestra la **fuerza después de reflejar el Signo del Mes**. Los valores antes del Signo del Mes y la tabla de Wang, Sang, Hyu, Su y Sa están incluidos en el informe de pago — esto se proporciona para que puedas verificar directamente dónde diverge la evaluación."
          }
        ]
      },
      {
        "title": "Fuerza de la Rama del Día — Fuerte y Débil",
        "blocks": [
          {
            "p": "Después de contar las fuerzas de los cinco elementos, evaluamos si la **Rama del Día es fuerte o débil**. El criterio es la proporción de energías alineadas con la Rama del Día."
          },
          {
            "p": "Las energías alineadas con la Rama del Día son **Humanidad y Compañero** — las energías que me dan vida y aquellas que son similares a mí. Dado que hay dos de cinco, si no hay sesgo, estará alrededor de {evenAllyRatio}. Evaluamos por encima y por debajo de este límite como equilibrado."
          },
          {
            "table": {
              "head": [
                "Proporción de Energías Alineadas con la Rama del Día",
                "Evaluación",
                "¿Qué Significa?"
              ],
              "rows": [
                [
                  "{strongThreshold} o más",
                  "Maestro del Día Fuerte (身强)",
                  "Las energías que apoyan la Rama del Día son abundantes."
                ],
                [
                  "{weakThreshold} o más y menos de {strongThreshold}",
                  "Equilibrado (中和)",
                  "Es difícil concluir en ninguna dirección."
                ],
                [
                  "Menos de {weakThreshold}",
                  "Maestro del Día Débil (身弱)",
                  "Las energías que apoyan la Rama del Día son débiles."
                ]
              ]
            }
          },
          {
            "p": "Los números en esta tabla no se transcriben del texto, sino que se **leen directamente del motor**. Si las reglas cambian, este documento también cambiará."
          }
        ]
      },
      {
        "title": "La Fuerza No es Buena ni Mala",
        "blocks": [
          {
            "p": "Ser fuerte no significa ser bueno, y ser débil no significa ser malo. Si es fuerte, hay poder para avanzar, pero es fácil inclinarse hacia un lado; si es débil, es más fácil aprovechar la fuerza de otros, pero uno puede cansarse fácilmente al soportar solo. **Las energías necesarias difieren en ambos casos.**"
          },
          {
            "p": "Determinar esa 'energía necesaria' es el elemento de apoyo, y continúa en [Elemento de Apoyo](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Cómo se establecen los ocho caracteres está en [Gráfico Original de Saju](/guide/natal-chart). Cómo interactúa el Maestro del Día de hoy con esta fuerza se cubre en [Lectura de Hoy](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Elemento de Apoyo",
    "title": "Elemento de Apoyo — La Energía Necesaria Ahora",
    "summary": "Si la Rama del Día es fuerte, consideramos la energía a reducir; si es débil, consideramos la energía a apoyar como necesaria. Esto explica cómo elegir esa energía y cómo manejarla cuando está equilibrada.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Los Cinco Elementos Solos No Son Suficientes",
        "blocks": [
          {
            "p": "Existen formas de medir si los cinco elementos están distribuidos de manera uniforme. Sin embargo, lo que realmente se necesita es **lo que falta y lo que es excesivo en este saju**."
          },
          {
            "p": "Un saju que está distribuido de manera uniforme no siempre es cómodo, ni un saju que está sesgado siempre es difícil. La dirección del sesgo y si hay un elemento para aliviarlo es el cruce de caminos."
          }
        ]
      },
      {
        "title": "Elemento de Apoyo — Reducir Si Es Excesivo, Añadir Si Falta",
        "blocks": [
          {
            "p": "El elemento de apoyo (用神) es **la energía que actualmente necesita esta persona**. Hay varios métodos para determinarlo (reducir, añadir, enfermedad y armonía), pero el más utilizado es **reducir (抑扶)**. Si el día maestro es fuerte, se cree que se necesita una energía para reducir; si es débil, se requiere una energía para añadir."
          },
          {
            "table": {
              "head": [
                "Juicio",
                "Lo Que Se Necesita",
                "Número de Tipos"
              ],
              "rows": [
                [
                  "Día Maestro Fuerte (身强)",
                  "Energía para Reducir — Comida y Riqueza, Posición Oficial",
                  "Tres"
                ],
                [
                  "Día Maestro Débil (身弱)",
                  "Energía para Añadir — Recurso, Compañero",
                  "Dos"
                ],
                [
                  "Equilibrado (中和)",
                  "No se puede cubrir reduciendo, por lo tanto, la energía más delgada",
                  "Dos"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Umbral para Fuerza y Debilidad",
        "blocks": [
          {
            "p": "El lado del día maestro es **Recurso y Compañero** — la energía que me da vida y la energía que es como yo. Dado que dos de cinco están involucrados, el equilibrio completo será {evenAllyRatio}. El ancho se establece por encima y por debajo de este {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "La Proporción de Aliados (Recurso + Compañero) en la Fuerza General",
              "head": [
                "Proporción",
                "Juicio"
              ],
              "rows": [
                [
                  "{strongThreshold} o más",
                  "Día Maestro Fuerte"
                ],
                [
                  "{weakThreshold} o más y menos de {strongThreshold}",
                  "Equilibrado"
                ],
                [
                  "Menos de {weakThreshold}",
                  "Día Maestro Débil"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Equilibrado Es un 'Juicio Menos Cierto'",
        "blocks": [
          {
            "p": "Equilibrado significa que no se puede cubrir reduciendo. En este momento, las dos energías más delgadas se consideran simplemente necesarias. En la pantalla de resultados, se anota como 'posición actualmente delgada' en lugar de una declaración definitiva."
          }
        ]
      },
      {
        "title": "La Fuerza No Es el Número de Caracteres",
        "blocks": [
          {
            "p": "Al contar la fuerza de los cinco elementos, los ocho caracteres no se cuentan tal como aparecen. Los valores reflejan los tallos celestiales ocultos (地藏干) dentro de las ramas terrenales y la estación de la energía del mes (月令) en la que uno nació."
          },
          {
            "p": "Contar solo los caracteres superficiales omite el hecho de que incluso los mismos caracteres 木 pueden tener fuerzas completamente diferentes dependiendo de la estación. El 木 de la primavera y el 木 del otoño, aunque son el mismo carácter, tienen diferentes fuerzas."
          }
        ]
      },
      {
        "title": "Dónde Usar el Elemento de Apoyo",
        "blocks": [
          {
            "p": "El elemento de apoyo determinado se utiliza en dos lugares. Uno es la pantalla de resultados **'energía actualmente necesaria'**, y el otro es [la fortuna de hoy](/guide/today-fortune) — si la energía de hoy corresponde al elemento de apoyo es el ítem que más mueve la puntuación ese día."
          }
        ]
      },
      {
        "title": "Este Es un Juicio Simple",
        "blocks": [
          {
            "p": "El análisis del destino real considera la formación y las condiciones estacionales (el calor y la humedad de la estación) para determinar el elemento de apoyo, y las conclusiones pueden variar dependiendo del método. Saju-Link solo utiliza **reducción que puede ser medida por valores de fuerza**. Esto se debe al principio de usar solo lo que puede ser convertido en reglas, por lo que la misma entrada siempre dará la misma respuesta."
          },
          {
            "p": "En cambio, la pantalla de resultados también presenta el día maestro fuerte y débil junto con la energía actualmente necesaria como **material de lectura**. Esto es para evitar ocultar la base de la puntuación."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Los Diez Dioses",
    "title": "Los Diez Dioses — Las Diez Posiciones Dentro de Mi Saju",
    "summary": "Basado en el día maestro, los caracteres restantes se dividen en diez nombres. Se discuten las razones para distinguir entre riqueza regular y riqueza secundaria, incluso si son el mismo elemento de riqueza.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El Día Maestro Es la Persona Misma",
        "blocks": [
          {
            "p": "Entre los ocho caracteres del saju, el **día maestro** (el tallo celestial del día de nacimiento) se refiere a la persona misma. Los siete caracteres restantes se leen como el entorno en el que existe ese día maestro."
          },
          {
            "p": "**Los Diez Dioses** (十神) son las diez divisiones de cómo el día maestro percibe los otros caracteres. La energía que me nutre es Recurso, la energía que es como yo es Compañero, la energía que doy vida es Comida y Riqueza, la energía que me suprime es Posición Oficial, y la energía que yo suprimo es Riqueza — estas cinco ramas se dividen aún más en yin y yang, formando diez."
          }
        ]
      },
      {
        "title": "Lo Que Los Siete Caracteres Restantes Significan Para Mí",
        "blocks": [
          {
            "p": "Una vez que se determina el día maestro, los caracteres restantes en el gráfico original cada uno reciben un nombre. La energía que me da vida, la energía que es como yo, la energía que doy vida, la energía que me suprime y la energía que yo suprimo — estas cinco ramas se dividen aún más en **diez** a través de yin y yang. Esto son los Diez Dioses."
          },
          {
            "p": "Así, los Diez Dioses se refieren no a relaciones con otros, sino a **las posiciones dentro de mí mismo**. Qué posiciones son gruesas o delgadas indican mis tendencias y la forma en que vivo."
          }
        ]
      },
      {
        "title": "La Razón para Ver Como los Diez Dioses en Lugar de Tres Elementos",
        "blocks": [
          {
            "p": "También hay un método para ver la relación del día stem únicamente a través de los tres aspectos de los cinco elementos (apoyo, mismo y opuesto). Es simple, pero **el yin y el yang desaparecen.** 甲 (madera yang) y 乙 (madera yin) se convierten en lo mismo que 甲, que es una representación de 'igualdad', y la relación opuesta se agrupa en una sola puntuación sin dirección ni yin y yang."
          },
          {
            "p": "La posición del cónyuge debe evaluarse de acuerdo con los Diez Dioses en términos de yin y yang. Si los elementos vistos a través de los cinco elementos se mezclan con aquellos vistos a través de los Diez Dioses en un mismo motor, habrá dos estándares para los mismos dos caracteres. Por lo tanto, lo unificamos bajo los Diez Dioses."
          }
        ]
      },
      {
        "title": "La posición del cónyuge es 정재 y 정관",
        "blocks": [
          {
            "p": "La adivinación tradicional ve la posición del cónyuge de manera diferente según el género. Para los hombres, es **정재 (正財)**, y para las mujeres, es **정관 (正官)**. Incluso si son el mismo elemento de riqueza, solo el 정재 que está desalineado en yin y yang se considera la posición del cónyuge, mientras que 편재 se lee no como un cónyuge sino en términos de actividad y riqueza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si no especificas género, esta posición se omite",
        "blocks": [
          {
            "p": "Esto se debe a que no se puede determinar qué lado, 정재 o 정관, considerar como la posición del cónyuge. En lugar de adivinar para llenar un valor faltante, leemos los elementos restantes sin ese."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "La fortuna de hoy",
    "title": "¿Cómo sale la fortuna de hoy?",
    "summary": "El día stem de hoy se compara con el gráfico original para puntuar. Las doce relaciones de los elementos de apoyo y las siete relaciones de las earthly branches, junto con todos los veinte elementos y sus respectivas adiciones y sustracciones, se divulgan completamente.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Hoy, también lo establecemos de la misma manera que los ocho caracteres",
        "blocks": [
          {
            "p": "Cada día tiene su propio **일진 (日辰)**. Usando el mismo método que establece el ciclo diario del gráfico original, hoy también tiene un heavenly stem y un earthly branch adjuntos. La fortuna de hoy trata sobre comparar esos dos caracteres con el gráfico original."
          },
          {
            "p": "La puntuación base es **{baseScore} puntos**. Los elementos a continuación se suman y restan, y finalmente, se confina entre {clampLow} puntos y {clampHigh} puntos — no mencionamos 0 puntos ni 100 puntos."
          }
        ]
      },
      {
        "title": "① ¿La energía de hoy es lo que necesito?",
        "blocks": [
          {
            "p": "Esta es la posición más significativa. Verificamos si la energía de hoy corresponde a la 'energía necesaria en este momento' determinada por [억부용신](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "La energía de hoy es",
                "Adición/Sustracción"
              ],
              "rows": [
                [
                  "La energía necesaria en este momento",
                  "{todayIsYongsin}"
                ],
                [
                  "Genera la energía necesaria",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Suprime la energía necesaria",
                  "{todayControlsYongsin}"
                ],
                [
                  "Presiona más sobre el lado ya desbordante",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "No consideres el 기신 como 'todo excepto el 용신'",
        "blocks": [
          {
            "p": "Si haces eso, tanto la energía que genera el 용신 como la energía que suprime el 용신 se vuelven malas, y las últimas dos filas en la tabla anterior se vuelven indistinguibles. Solo la energía que **empuja más en la dirección opuesta** según el significado de 억부 se ve como 기신."
          }
        ]
      },
      {
        "title": "② La relación entre el heavenly stem de hoy y el día stem",
        "blocks": [
          {
            "p": "Las relaciones de apoyo y oposición de los cinco elementos se aplican directamente entre el día stem y el heavenly stem de hoy."
          },
          {
            "table": {
              "head": [
                "Relación",
                "Adición/Sustracción"
              ],
              "rows": [
                [
                  "Hoy me genera",
                  "{generatesSelf}"
                ],
                [
                  "Hoy y yo somos la misma energía",
                  "{sameElement}"
                ],
                [
                  "Yo suprimo hoy",
                  "{selfControls}"
                ],
                [
                  "Yo fluyo con hoy",
                  "{selfGenerates}"
                ],
                [
                  "Hoy me suprime",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ La earthly branch de hoy se encuentra con las earthly branches del gráfico original",
        "blocks": [
          {
            "p": "La earthly branch de hoy se compara con las earthly branches del gráfico original. La tabla de relaciones en sí está en [십이지 관계](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relación",
                "Adición/Sustracción"
              ],
              "rows": [
                [
                  "triada completa (三合)",
                  "{branchSamhap}"
                ],
                [
                  "par de seis armonías (六合)",
                  "{branchYukhap}"
                ],
                [
                  "triada a medio (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discordia silenciosa y duradera (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "choque (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Cuando hay múltiples pilares, surgen múltiples relaciones. Todas se suman, pero este ítem entero está limitado a **±{branchMaxAbs} puntos** — esto es para evitar que una sola relación de rama terrestre determine todo el día."
          }
        ]
      },
      {
        "title": "④ Corrección Basada en la Fuerza",
        "blocks": [
          {
            "p": "Incluso con la misma energía, el significado difiere para un día maestro fuerte y un día maestro débil. Por lo tanto, hacemos un último ajuste."
          },
          {
            "table": {
              "head": [
                "Situación",
                "Ajuste"
              ],
              "rows": [
                [
                  "Día maestro débil pero hoy los apoya",
                  "{weakTodayHelps}"
                ],
                [
                  "Día maestro fuerte pero hoy reduce apropiadamente la carga",
                  "{strongTodayDrains}"
                ],
                [
                  "Día maestro fuerte pero hoy espesa el apoyo",
                  "{strongTodayHelps}"
                ],
                [
                  "Día maestro débil pero hoy añade a la carga",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Puntuaciones por Grado y Área",
        "blocks": [
          {
            "p": "La puntuación total se divide en cinco grados."
          },
          {
            "table": {
              "head": [
                "Puntuación",
                "Grado"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} puntos o más",
                  "Gran Suerte (大吉)"
                ],
                [
                  "{gradeGilMin} puntos o más",
                  "Suerte (吉)"
                ],
                [
                  "{gradePyeongMin} puntos o más",
                  "Promedio (平)"
                ],
                [
                  "{gradeJuuiMin} puntos o más",
                  "Precaución (注意)"
                ],
                [
                  "{gradeJosimMin} puntos o más",
                  "Ten Cuidado (操心)"
                ]
              ]
            }
          },
          {
            "p": "Las cuatro áreas de riqueza, amor, carrera y salud heredan una puntuación total de {overallShare}, mientras que el resto se divide según los Diez Dioses y las relaciones de ramas terrestres relevantes para esas áreas. Por lo tanto, incluso si la puntuación total es la misma, los números por área difieren de persona a persona."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Los números anteriores se leen todos desde la configuración del motor. Si se cambian las reglas, este documento también cambiará, y cualquier cambio en la puntuación se publicará primero en el [Aviso](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabla de Relaciones",
    "title": "Relaciones de Ramas Terrestres — Combinación, Choque y Discordia",
    "summary": "Esta es una tabla de relaciones que muestra cómo el día maestro de hoy interactúa con la carta natal. Revela qué es cada combinación, choque y discordia y cuántos puntos tienen.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Las Ramas Terrestres son Doce Caracteres",
        "blocks": [
          {
            "p": "Las doce ramas terrestres (十二支) son 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Los signos zodiacales comúnmente conocidos — Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Oveja, Mono, Gallo, Perro, Cerdo — están cada uno adjuntos a uno de estos doce caracteres."
          },
          {
            "figure": "branch-wheel",
            "caption": "Cuando los doce caracteres se organizan en un círculo, las relaciones son claramente visibles. El choque (沖) siempre se enfrenta entre sí, mientras que la seis-armonía y la discordia son pares más cercanos. Estas líneas no están escritas en el texto, sino que se derivan directamente de las reglas de cálculo.",
            "labels": {
              "alt": "Un diagrama que muestra las doce ramas terrestres organizadas en un círculo con líneas que conectan seis-armonía, choque y discordia.",
              "yukhap": "Seis-Armonía",
              "chung": "Choque",
              "wonjin": "Discordia",
              "rat": "Rata",
              "ox": "Buey",
              "tiger": "Tigre",
              "rabbit": "Conejo",
              "dragon": "Dragón",
              "snake": "serpiente",
              "horse": "caballo",
              "goat": "cabra",
              "monkey": "mono",
              "rooster": "gallo",
              "dog": "perro",
              "pig": "cerdo"
            }
          },
          {
            "p": "En saju, cada uno de los cuatro pilares tiene una rama terrestre. **La lectura de hoy** se determina al emparejar **la rama del día** con las cuatro ramas del gráfico original utilizando la tabla de relaciones a continuación."
          }
        ]
      },
      {
        "title": "Tabla de Relaciones General",
        "blocks": [
          {
            "table": {
              "caption": "En orden de puntuación más alta. Estos son los valores utilizados por Saju-Link.",
              "head": [
                "Relación",
                "Par Correspondiente",
                "Significado",
                "Puntuación"
              ],
              "rows": [
                [
                  "Triada (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Cuando los tres caracteres se juntan, forman una formación elemental completa (局). Esta se considera la combinación más fuerte.",
                  "{scoreSamhap}"
                ],
                [
                  "Seis Armonías (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pares que se atraen entre sí. Esta es la combinación más común ya que consiste en solo dos caracteres.",
                  "{scoreYukhap}"
                ],
                [
                  "Media Triada (半合)",
                  "Dos caracteres que incluyen uno de los caracteres reales (子·酉·午·卯) de la triada",
                  "Una combinación media que incluye un carácter que es central para la formación. No forma una formación elemental completa con solo dos caracteres, lo que la hace inferior a la triada.",
                  "{scoreBanhap}"
                ],
                [
                  "Misma Rama",
                  "子子 · 丑丑 …",
                  "Caracteres que son iguales. Esto significa que se parecen entre sí pero no implica atracción, por lo que se colocan en el medio.",
                  "{scoreSame}"
                ],
                [
                  "Sin Relación",
                  "Pares que no pertenecen a ninguna de las categorías anteriores o posteriores",
                  "Combinaciones que no tienen una relación especial. Esto sirve como un punto de referencia.",
                  "{scoreNeutral}"
                ],
                [
                  "Discordia Silenciosa (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pares que no pueden separarse a pesar de su desagrado. Aparecen tranquilos en la superficie pero se consideran duraderos.",
                  "{scoreWonjin}"
                ],
                [
                  "Choque (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pares que chocan de frente. Estos son seis pares que se enfrentan entre sí.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triadas y Media Triadas",
        "blocks": [
          {
            "p": "Una triada requiere que los tres caracteres estén presentes. Dado que hay cuatro ramas terrestres en el gráfico original, es posible que la rama del día se combine con ellas, resultando en una triada; en ese momento, recibe una puntuación de {scoreSamhap}. Si solo están involucrados dos caracteres, es una media triada."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Las Media Triadas Requieren Caracteres Reales para ser Reconocidas",
        "blocks": [
          {
            "p": "También hay un método que cuenta como una media triada si ambos caracteres pertenecen al mismo grupo de triada. Esto permite combinaciones como 申辰, que son difíciles de llamar combinación, para recibir altas puntuaciones. Por lo tanto, este servicio reconoce una media triada solo cuando incluye caracteres reales (子·酉·午·卯), y no considera combinaciones como 申辰·巳丑·寅戌·亥未 como válidas."
          }
        ]
      },
      {
        "title": "Razón para Separar la Discordia Silenciosa",
        "blocks": [
          {
            "p": "Los seis pares de discordia silenciosa se ven tan frecuentemente como los choques. Si contamos combinaciones de ambos choques y combinaciones, estos seis pares quedarían todos enterrados bajo la puntuación de sin relación de {scoreNeutral}, por lo que se colocan por separado."
          },
          {
            "p": "Si los choques son pares que colisionan de frente y se muestran prominentemente, la discordia silenciosa está sutilmente desalineada. Por lo tanto, se coloca en una puntuación de {scoreWonjin}, que es más alta que los choques ({scoreChung}) pero definitivamente más baja que sin relación ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Las puntuaciones también se asignan para los choques",
        "blocks": [
          {
            "p": "La puntuación de choque más baja es {scoreChung}. Es intencional no dar un valor cercano a 0. En la tradicional 명리 (myeongri), un choque no es un 'fin' sino una 'colisión', y dar una puntuación cercana al mínimo significaría que el servicio está haciendo una declaración definitiva sobre la relación."
          },
          {
            "p": "Con un mínimo de {scoreChung} y un máximo de {scoreSamhap}, la diferencia es claramente visible pero no definitiva."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Signo Zodiacal",
    "title": "¿Dónde está el Signo Zodiacal en Saju?",
    "summary": "El signo zodiacal es la rama terrestre del año en que naciste. Esto explica por qué se extrae del año saju en lugar del año calendario, y por qué aquellos nacidos a principios de enero o febrero tienen el signo zodiacal del año anterior.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El signo zodiacal es la rama terrestre del año en que naciste.",
        "blocks": [
          {
            "p": "Saju consiste en cuatro pilares: año, mes, día y hora, con cada pilar teniendo un tallo celestial y una rama terrestre. Entre ellos, la **rama terrestre del año**, o 연지 (rama del año), es el animal que referimos como el signo zodiacal."
          },
          {
            "table": {
              "caption": "Las Doce Ramas Terrestres y Signos Zodiacales",
              "head": [
                "Rama Terrestre",
                "Signo Zodiacal"
              ],
              "rows": [
                [
                  "子",
                  "Rata"
                ],
                [
                  "丑",
                  "Buey"
                ],
                [
                  "寅",
                  "Tigre"
                ],
                [
                  "卯",
                  "Conejo"
                ],
                [
                  "辰",
                  "Dragón"
                ],
                [
                  "巳",
                  "Serpiente"
                ],
                [
                  "午",
                  "Caballo"
                ],
                [
                  "未",
                  "Cabra"
                ],
                [
                  "申",
                  "Mono"
                ],
                [
                  "酉",
                  "Gallo"
                ],
                [
                  "戌",
                  "Perro"
                ],
                [
                  "亥",
                  "Cerdo"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Usamos el año saju, no el año calendario.",
        "blocks": [
          {
            "p": "El punto en el que cambia el signo zodiacal no es el 1 de enero del calendario solar ni el Año Nuevo Lunar. El estándar para cambiar el año en saju es **Ipchun**. Por lo tanto, aquellos nacidos a principios de enero o febrero pueden tener un signo zodiacal diferente al que indica el calendario."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La razón por la que no preguntamos directamente por el signo zodiacal.",
        "blocks": [
          {
            "p": "Por eso solo pedimos la fecha de nacimiento sin seleccionar el signo zodiacal en la pantalla de entrada. Cuando el motor saju calcula el año, se alinea automáticamente con el límite de Ipchun. Si se selecciona directamente, alguien nacido a principios de febrero elegiría un signo zodiacal que no coincide con su signo real."
          }
        ]
      },
      {
        "title": "El signo zodiacal es un carácter en saju.",
        "blocks": [
          {
            "p": "Entre los ocho caracteres, el que corresponde al signo zodiacal es **una 연지 (rama del año)**. Los otros siete caracteres —especialmente el tallo del día que se refiere a uno mismo— no tienen relación con el signo zodiacal."
          },
          {
            "p": "Las personas nacidas en el mismo año comparten el mismo signo zodiacal. Por lo tanto, lo que se puede conocer a partir del signo zodiacal es solo tanto como uno de los ocho caracteres. Esta es la razón por la que este servicio no **trata el signo zodiacal por separado o de manera significativa** — la 연지 (rama del año) se calcula para la fuerza y el juicio del 일진 (fortuna diaria) de hoy al igual que cualquier otra rama terrestre."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aún así, la razón por la que mostramos el signo zodiacal.",
        "blocks": [
          {
            "p": "Es la única posición donde el significado se entiende incluso si no conoces la terminología de 명리 (myeongri). Si el signo zodiacal se anota junto a la 연지 (rama del año) en la pantalla original del gráfico, se convierte en una pista para leer los otros siete caracteres."
          }
        ]
      },
      {
        "title": "La rama del año permanece igual incluso si no conoces la hora de nacimiento.",
        "blocks": [
          {
            "p": "Si no ingresas la hora, el pilar de la hora se omite y la fuerza de los 오행 (cinco elementos) cambia. Sin embargo, la **rama del año permanece igual** — se determina únicamente por el año en que naciste."
          },
          {
            "p": "Por lo tanto, la historia derivada de la rama del año no cambia incluso para aquellos que no conocen la hora. Inversamente, esto significa que lo que se puede decir basado únicamente en el signo zodiacal es limitado, independientemente de si se incluye la hora o no."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Hora",
    "title": "Convertimos la hora de nacimiento a la hora solar verdadera.",
    "summary": "La hora estándar y la posición real del sol difieren. Esto aborda por qué la hora debe ajustarse de acuerdo con la longitud del lugar de nacimiento para asegurar que el pilar de la hora sea correcto.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La hora en el reloj y la hora solar son diferentes",
        "blocks": [
          {
            "p": "El pilar de la hora del saju (時柱) se determina por la posición del sol. Sin embargo, el reloj que vemos utiliza un tiempo estándar único para todo el país, lo que desalinean con la posición real del sol."
          },
          {
            "p": "La hora estándar de Corea se basa en la longitud 135° este. La longitud de Seúl es de aproximadamente 127°, por lo que está aproximadamente 8° al oeste, lo que provoca que el sol alcance su cenit más tarde: cuando es mediodía en el reloj, el sol en Seúl aún está antes de su cenit. Esta diferencia es de aproximadamente **32 minutos**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutos cambian el pilar de la hora por un slot",
        "blocks": [
          {
            "p": "El tiempo en el saju se divide en unidades de dos horas. Aquellos nacidos cerca del límite tendrán su pilar de la hora completamente cambiado por una diferencia de 32 minutos: los ajustes son necesarios precisamente por aquellos que caen justo en este límite."
          }
        ]
      },
      {
        "title": "La razón para preguntar dónde naciste",
        "blocks": [
          {
            "p": "Si la longitud es diferente, la cantidad de ajuste también diferirá. Si aplicas el ajuste basado en Seúl a alguien nacido en el extranjero, el pilar de la hora estará significativamente desalineado. Por lo tanto, la pantalla de entrada te pide que selecciones tu lugar de nacimiento, y los cálculos se realizan en base a la longitud y la hora estándar de esa ciudad. Actualmente, hay {cityCount} lugares en la lista."
          },
          {
            "p": "Incluso dentro del mismo país, lugares con longitudes significativamente diferentes (como Estados Unidos, Rusia, Indonesia, etc.) han sido divididos en ciudades. **15° de longitud equivale a un pilar de la hora**."
          },
          {
            "p": "Si no seleccionas, los cálculos se realizarán en base a Seúl. La mayoría de los nacimientos son nacionales, por lo que esto es menos propenso a errores, pero si naciste en el extranjero, asegúrate de seleccionar."
          }
        ]
      },
      {
        "title": "La hora estándar ha cambiado varias veces en el pasado",
        "blocks": [
          {
            "p": "Hay una razón por la cual el ajuste no puede calcularse simplemente como \"diferencia de longitud ÷ 15° × 60 minutos.\" La hora estándar en sí ha variado a lo largo de diferentes épocas."
          },
          {
            "table": {
              "caption": "Cambios en la hora estándar de Corea — aquellos nacidos en este período estarán desalineados con cálculos simples",
              "head": [
                "Período",
                "¿Qué era diferente?"
              ],
              "rows": [
                [
                  "Antes de 1912",
                  "No había hora estándar (hora media local)"
                ],
                [
                  "1954 – 1961",
                  "La hora estándar era UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Se implementó el horario de verano"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link no fija el meridiano estándar como un valor constante, sino que calcula la hora estándar real utilizada en ese momento basada en la información de **zona horaria IANA** del lugar de nacimiento. El horario de verano y las horas estándar pasadas se reflejan automáticamente."
          }
        ]
      },
      {
        "title": "El nacimiento justo después de la medianoche también considera la fecha",
        "blocks": [
          {
            "p": "Dado que el ajuste es de -32 minutos, aquellos nacidos entre las 00:00 y las 00:32 en el reloj estarán a las **11 PM del día anterior** en el tiempo solar verdadero. Si solo se ajusta la hora hacia atrás y la fecha permanece igual, se escribirá el pilar del día (日柱) como \"11 PM del día anterior.\""
          },
          {
            "p": "Saju-Link también ajustará la fecha en este caso. El carácter sobre el pilar del día se refiere al tallo del día (日干), que indica a mí mismo, por lo que si esto está desalineado, casi todos los elementos en la interpretación estarán desalineados."
          }
        ]
      },
      {
        "title": "No necesitas saber la hora",
        "blocks": [
          {
            "p": "La hora de nacimiento es opcional. Si no la conoces, los cálculos se realizarán sin el pilar de la hora, y este hecho se mostrará en la pantalla de resultados. Dado que esto significa que faltan dos de los ocho caracteres, afectará la evaluación de la fuerza y debilidad de los cinco elementos, así que si lo sabes, es más preciso incluirlo."
          },
          {
            "p": "El pilar del año (띠) es siempre el mismo independientemente de la hora — [porque solo miramos el pilar del año](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Información Personal",
    "title": "Un método que no almacena la información ingresada",
    "summary": "Aclara lo que significa técnicamente que la fecha de nacimiento no se registre en ningún lugar y lo que contiene el enlace de resultados.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "No hay registro de membresía",
        "blocks": [
          {
            "p": "Saju-Link no crea cuentas. No recopila nombres, correos electrónicos ni números de teléfono. La única información recopilada es la fecha de nacimiento y (opcionalmente) la hora de nacimiento, el lugar de nacimiento y el género, y esa información no permanece después de que se completa el cálculo."
          },
          {
            "p": "Hay un campo para ingresar un título que se mostrará en la pantalla de resultados, pero eso es **solo para fines de visualización** y no se utiliza en los cálculos. No necesitas ingresar tu nombre real."
          }
        ]
      },
      {
        "title": "¿Qué contiene el enlace de resultados?",
        "blocks": [
          {
            "p": "Una vez que se completa el cálculo, la dirección se ve así."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Lo que sigue a **#** son los valores de entrada. Esta parte se llama **fragmento**, que es una sección que **el navegador no envía al servidor**. Este es un comportamiento web estándar y no una regla que creamos — fue diseñado originalmente para indicar una posición dentro de un documento, por lo que el servidor no tiene necesidad de verlo."
          },
          {
            "p": "En otras palabras, cuando abres el enlace de resultados, el navegador lee ese valor para solicitar el cálculo, y nuestro servidor recibe los valores para usar en el cálculo, devuelve la respuesta y luego lo olvida."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por favor, ten cuidado al enviar el enlace a otros",
        "blocks": [
          {
            "p": "El hecho de que no se almacene en el servidor no significa que el enlace sea seguro. El enlace de resultados contiene las fechas de nacimiento de dos individuos, por lo que la persona que recibe ese enlace puede ver el mismo resultado."
          }
        ]
      },
      {
        "title": "¿Por qué se realiza el cálculo en el servidor pero no se almacena?",
        "blocks": [
          {
            "p": "El cálculo en sí se realiza en el servidor. La tabla del almanaque lunar-solar es necesaria para generar el saju, y esa tabla es demasiado grande para ser enviada al navegador. Sin embargo, **después de procesar la solicitud, no usamos ese valor en ningún lugar.** No hay código para insertarlo en una base de datos."
          },
          {
            "p": "Se mantienen los registros mínimos necesarios para la operación: un contador para evitar que la misma persona envíe demasiadas solicitudes en poco tiempo. Esto no incluye la fecha de nacimiento, y la IP de acceso no se retiene. Solo se cuenta un valor hash con la fecha, y ese valor cambia cuando cambia el día."
          }
        ]
      },
      {
        "title": "Cosas que no se pueden hacer porque la información no se almacena",
        "blocks": [
          {
            "p": "Para ser honesto, hay cosas que se han dejado de lado porque no almacenamos información."
          },
          {
            "ul": [
              "**No puedes recuperar resultados pasados.** Necesitas tener el enlace para verlos nuevamente.",
              "**Los mismos valores se recalcularán.** No hay caché. Sin embargo, dado que todas las reglas son deterministas, [la misma entrada siempre dará el mismo valor](/guide/natal-chart).",
              "**Actualizar traerá de vuelta la puerta de anuncios.** Esto se debe a que no hay lugar para dejar un historial de visualización."
            ]
          }
        ]
      },
      {
        "title": "Si realizas una compra",
        "blocks": [
          {
            "p": "Cuando compras un informe, se mantendrá un registro de la transacción. El pago está sujeto a períodos de retención legal, y sin un historial de pedidos, no se pueden procesar reembolsos. Sin embargo, en este momento, **la fecha de nacimiento utilizada para el cálculo de saju no se adjuntará al pedido** — se solicitará nuevamente al crear el PDF después de la confirmación del pago."
          },
          {
            "p": "Para más detalles, por favor consulta nuestra [Política de Privacidad](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Productos pagados",
    "title": "Qué incluye el informe pagado",
    "summary": "Aclara lo que se ha añadido al PDF mientras mantiene la pantalla sin cambios. Los valores y contenidos se recuperan de la configuración real del producto.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Mantuvo la pantalla sin cambios, solo se añadió al PDF",
        "blocks": [
          {
            "p": "El cálculo de saju y la consulta de resultados son **gratuitos**. Puedes ver todo en la pantalla, incluyendo el gráfico original, los cinco elementos, la suerte de hoy y su base, ya que nada ha sido omitido al crear el informe pagado."
          },
          {
            "p": "El papel del informe es **añadir capas que no están presentes en la pantalla**. Estas capas no son fabricadas; son valores que ya fueron calculados durante el proceso de puntuación pero que no se utilizaron en la pantalla."
          }
        ]
      },
      {
        "title": "Informe PDF de saju vitalicio y suerte de este año — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Pago nacional {priceDomestic} (incluido IVA), pago internacional {priceGlobal}. Consiste en {pageCount} páginas A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "El índice se lee directamente de la descripción del producto. **El número de páginas es el mismo que el documento real** — no se infló ya que es el valor indicado en el aviso de información del producto."
          }
        ]
      },
      {
        "title": "Qué no está en la pantalla",
        "blocks": [
          {
            "p": "La pantalla gratuita muestra el gráfico original, los cinco elementos y la suerte de hoy. Hay tres valores que se produjeron durante el proceso de cálculo pero que no se muestran en la pantalla, y estas son las partes del informe pagado."
          },
          {
            "ul": [
              "**Razón de conveniencia del día maestro** — Muestra numéricamente dónde se hizo el juicio de un día maestro fuerte o débil. El nombre del juicio por sí solo no indica si estaba al borde o era amplio.",
              "**Wang Sang Hyu Su Sa** — Cuánto ha elevado cada energía el mes de nacimiento. Si la barra de poder indica 'cuánto hay', esta tabla indica '¿está en temporada?'.",
              "**Detalles de corrección del tiempo solar verdadero** — El concepto está en el documento de orientación, pero **'cuántos minutos se desplazaron en tu caso'** es un valor diferente para cada persona, por lo que se incluye solo en el informe."
            ]
          }
        ]
      },
      {
        "title": "Lo que debes saber antes de comprar",
        "blocks": [
          {
            "p": "**El servidor no almacena archivos.** Una vez que se aprueba el pago, el documento se crea y se envía de inmediato, sin dejar nada en el servidor. El principio de este servicio de no guardar valores de entrada se mantiene incluso en el flujo pagado."
          },
          {
            "p": "Por lo tanto, **por favor guarda el archivo inmediatamente después del pago.** Puedes recibirlo hasta cinco veces con el mismo pedido, pero si dejas la pantalla de resultados y los valores de entrada desaparecen, no se puede recrear."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Los informes también son materiales de referencia",
        "blocks": [
          {
            "p": "Solo porque el número de páginas haya aumentado no significa que las conclusiones sean más ciertas. Lo que el informe añade es **la base del mismo cálculo**, no una afirmación más fuerte. El destino es un campo donde las conclusiones pueden variar dependiendo del practicante, y este servicio solo calcula lo que se puede traducir en reglas."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Aviso",
    "title": "Anuncios",
    "summary": "Este es un lugar para informar cambios que pueden afectar el uso.",
    "backLabel": "Volver al principio",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contacto",
    "title": "Consultas",
    "summary": "Este es el canal para consultas sobre uso, reembolsos, solicitudes de información personal e informes de errores, junto con información comercial.",
    "backLabel": "Volver al principio",
    "sections": [
      {
        "title": "Contacto por correo electrónico",
        "blocks": [
          {
            "p": "Por favor envía consultas a **{email}**. Responderemos dentro de 2 días hábiles. Para consultas sobre pagos y reembolsos, por favor incluye **el número de pedido o el correo electrónico utilizado para el pago** para una confirmación más rápida."
          },
          {
            "p": "Las consultas telefónicas se reciben en {customerCenter}."
          }
        ]
      },
      {
        "title": "Qué se puede enviar a este canal",
        "blocks": [
          {
            "ul": [
              "**Pago y reembolso** — Si el documento no ha sido creado o el monto del pago difiere del pedido, se proporcionará un reembolso completo. Las condiciones están en la [Política de Reembolso](/refund-policy).",
              "**Información personal** — Aceptamos solicitudes de visualización, corrección y eliminación. La política de procesamiento está en la [Política de Privacidad](/privacy).",
              "**Informe de error de cálculo** — Si el gráfico original de saju o las puntuaciones parecen extrañas, por favor háznoslo saber. Si incluyes cuándo ingresaste la fecha y hora de nacimiento, podemos recalcular con los mismos valores."
            ]
          }
        ]
      },
      {
        "title": "Información comercial",
        "blocks": [
          {
            "ul": [
              "**Nombre comercial** — {companyName}",
              "**Representante** — {representative}",
              "**Número de registro comercial** — {businessNumber}",
              "**Número de registro de negocio por correo** — {mailOrderNumber}",
              "**Dirección** — {address}",
              "**Centro de atención al cliente** — {customerCenter}",
              "**Correo electrónico** — {email}",
              "**Oficial de protección de información personal** — {privacyOfficer}",
              "**Proveedor de hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "No es necesario incluir tu fecha y hora de nacimiento en el correo de consulta. No guardamos entradas, por lo que no podemos recuperarlas más tarde, y lo que necesita confirmación es suficiente con el número de pedido. Por favor, inclúyelo solo cuando los valores sean absolutamente necesarios, como en un informe de error de cálculo."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ES_NOTICES = {
  "kindLabels": {
    "service": "Servicio",
    "product": "Informe",
    "engine": "Criterios de cálculo",
    "support": "Consulta"
  },
  "intro": "Los cambios que afectan las condiciones de uso, como precios y términos, se publicarán aquí antes de su implementación. Hay muchas mejoras internas, como que la pantalla se vuelva más rápida; solo se anotará aquí lo que necesitas saber.",
  "empty": {
    "title": "No se han publicado avisos.",
    "body": "Si hay algún cambio que informarte, se publicará aquí."
  },
  "effective": "Vigente desde {date}",
  "pager": {
    "label": "Página de avisos",
    "newer": "← Más reciente",
    "older": "Avisos anteriores →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Se ha abierto la ventana de consultas y la página de introducción del servicio.",
      "body": [
        "Hemos reunido una única ventana para consultas, reembolsos, solicitudes de información personal y reportes de errores de cálculo. Puedes verificarlo en la parte inferior de la pantalla bajo 'Consultar'.",
        "Cuando nos informes de algo que parezca un error de cálculo, por favor incluye la fecha y hora de nacimiento que ingresaste. No guardamos la entrada, así que sin ese valor, no podemos recalcular."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "En las pantallas en árabe y jemer, el informe se generará en inglés.",
      "body": [
        "Si estás viendo la pantalla en árabe o jemer, el informe PDF que compres se creará en inglés. Esto se debe a que la herramienta aún no ha podido formatear estos dos guiones en párrafos.",
        "Aún puedes ver la pantalla tal como está, y el nombre escrito en el informe será exactamente como lo ingresaste.",
        "La misma información también se proporciona por adelantado en la pantalla de pago. Te notificaremos aquí cuando la herramienta soporte estos guiones."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Los criterios de cálculo se incluirán con los resultados.",
      "body": [
        "Debajo de la pantalla de resultados e informe, se indican los criterios de cálculo (por ejemplo, sajulink-natal-v1). Si la entrada es la misma, el mismo valor siempre saldrá bajo los mismos criterios.",
        "Si las reglas para interpretar 명리 (myeongri) cambian y las puntuaciones pueden diferir, primero publicaremos ese hecho y la fecha de vigencia aquí. Esto se debe a que los números en los enlaces de resultados que recibiste anteriormente pueden cambiar.",
        "Los criterios actuales son v10, y el pago aún está en preparación."
      ]
    }
  }
} satisfies NoticeCopy;
