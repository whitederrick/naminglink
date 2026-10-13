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
            "p": "Saju-Link establece el **gráfico de saju (cuatro pilares) basado en tu fecha y hora de nacimiento y muestra lo que significan los ocho caracteres**. Lee la fuerza de los cinco elementos y la fuerza del pilar del día, y también examina la fortuna de hoy basada en el tallo del día."
          },
          {
            "p": "Lo que ves en la pantalla es **gratis y no requiere membresía.** El producto de pago es un documento PDF que contiene valores no mostrados en la pantalla — la base para distinguir entre un pilar del día fuerte y uno débil, Wang Sang Hyu Su Sa, y los detalles de corrección para el tiempo solar verdadero."
          }
        ]
      },
      {
        "title": "¿Qué calculamos?",
        "blocks": [
          {
            "p": "El saju se establece utilizando el **manseyeok (almanac lunisolar coreano)**. La hora de nacimiento se corrige al **tiempo solar verdadero** del lugar de nacimiento — porque la posición real del sol varía según la región, incluso si el reloj muestra la misma hora."
          },
          {
            "p": "Las puntuaciones se dan solo de acuerdo con reglas establecidas. Conceptos de la tradicional myeongri (estudio del destino coreano) como los Diez Dioses, relaciones de ramas terrestres, y elementos de equilibrio se traducen en reglas para el cálculo, y **la misma entrada siempre dará el mismo valor**. Cuando se cambian las reglas, se realiza una prueba de regresión para asegurar que los resultados anteriores permanezcan sin cambios."
          },
          {
            "p": "**No se utiliza IA en las oraciones en la pantalla.** Las explicaciones que aparecen en la pantalla gratuita son frases fijas adjuntas a los resultados de cálculo. **Solo las interpretaciones en los informes de pago** utilizan IA generativa, y aun así, la IA no crea puntuaciones — solo escribe oraciones basadas en los valores proporcionados por el motor."
          }
        ]
      },
      {
        "title": "¿Qué no decimos?",
        "blocks": [
          {
            "ul": [
              "**No proporcionamos adivinación.** No escribimos que debas conocer o evitar a alguien. Este es un material de referencia que resume las perspectivas de la tradicional myeongri.",
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
            "p": "Los métodos de cálculo detallados están escritos en la [Guía del Usuario](/guide). La información comercial y los detalles de contacto se pueden encontrar en [Contáctenos](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Base de Cálculo",
    "title": "¿Cuál es la base para los cálculos?",
    "summary": "Divulgamos todas las reglas utilizadas por Saju-Link. Puedes verificar de dónde provienen los números mostrados en la pantalla, incluidos los ajustes para la fortuna de hoy, las puntuaciones de la tabla de relaciones de ramas terrestres, y los valores límite que distinguen entre un pilar del día fuerte y uno débil.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "blocks": [
          {
            "p": "El saju anota el año, el mes, el día y la hora de tu nacimiento con dos caracteres chinos cada uno, ocho caracteres en total. El carácter superior de cada par se llama **tronco celestial**, el inferior **rama terrestre**, y los dos caracteres de tu día de nacimiento se llaman **pilar del día**. Si estas palabras te resultan nuevas, empieza por [Troncos celestiales, ramas terrestres y pilar del día: cómo leer los caracteres](/guide/saju-letters)."
          },
          {
            "ul": [
              "**Troncos celestiales** — los diez caracteres superiores del saju. Cada uno tiene un elemento y una polaridad fijos, y el tronco de tu día de nacimiento es el tronco del día que te señala a ti.",
              "**Ramas terrestres** — los doce caracteres inferiores del saju, los mismos que los animales del zodiaco. Cada rama guarda troncos ocultos en su interior.",
              "**Pilares del día** — la pareja formada por el tronco y la rama de tu día de nacimiento. Hay 60, de 甲子 a 癸亥, y cada una tiene su propia entrada. Las encontrarás en las listas plegadas de abajo."
            ]
          }
        ]
      },
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
    "title": "gráfico natal — ¿De dónde provienen los ocho caracteres?",
    "summary": "Explica cómo el año, mes, día y hora de nacimiento se convierten en los cuatro pilares y ocho caracteres, e identifica qué carácter te señala. También discute por qué se puede ver incluso sin conocer la hora exacta de nacimiento.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Cuatro Pilares, Ocho Caracteres",
        "blocks": [
          {
            "p": "Saju (四柱) significa literalmente **cuatro pilares**. Cada uno del año, mes, día y hora de nacimiento se establece como un pilar, y se escriben dos caracteres para cada pilar. Así, hay un total de ocho caracteres, que se refiere como **el gráfico natal**."
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
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilar del Mes (月柱)",
                  "Mes de nacimiento",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilar del Día (日柱)",
                  "Día de nacimiento",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilar del Tiempo (時柱)",
                  "Hora de nacimiento",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "Los caracteres superiores se llaman heavenly stems (天干), y los caracteres inferiores se llaman earthly branches (地支). Hay diez heavenly stems y doce earthly branches. Las doce earthly branches se conocen comúnmente como **signos del zodiaco**."
          }
        ]
      },
      {
        "title": "Entre ellos, un carácter me señala.",
        "blocks": [
          {
            "p": "No todos los ocho caracteres tienen el mismo peso. El **tallo celestial del día de nacimiento**, específicamente el carácter superior del pilar del día, señala **mi persona**. Esto se llama **tallo del día (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "El saju consiste en ocho caracteres establecidos utilizando dos caracteres cada uno para el año, mes, día y hora de nacimiento, representados por los heavenly stems y earthly branches. Aquí, el prominente tallo del día (日干) es el carácter que me señala.",
            "labels": {
              "year": "Pilar del Año",
              "yearNote": "Raíz · Signo del Zodiaco",
              "month": "Pilar del Mes",
              "monthNote": "Temporada · Fuerza",
              "day": "Pilar del Día",
              "dayNote": "Palacio del Yo · Palacio del Cónyuge",
              "hour": "Pilar de la Hora",
              "hourNote": "Años Posteriores · Uso",
              "stem": "Rama Celestial",
              "stemNote": "Rama del Día = Yo",
              "branch": "Rama Terrestre",
              "branchNote": "Rama del Día = Palacio del Cónyuge"
            }
          },
          {
            "p": "Lo que este servicio muestra proviene principalmente de este único carácter: la interpretación de tendencias, la fuerza de los cinco elementos, la energía actualmente necesaria y la fortuna de hoy se miden en función de la Rama del Día. Los siete caracteres restantes indican 'en qué entorno se encuentra la Rama del Día'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "¿Por qué el Día de Nacimiento?",
        "blocks": [
          {
            "p": "La Rama del Año es la misma para todos los nacidos en ese año, y la Rama del Mes es la misma para todos los nacidos en ese mes. La Rama del Día cambia cuando cambia el día, y la adivinación tradicional ha considerado esta posición como el Yo desde la Dinastía Song. Si se incluye la Rama de la Hora, se diferencia incluso entre aquellos nacidos el mismo día."
          }
        ]
      },
      {
        "title": "Dividido por Términos Solares, No por Año Calendario",
        "blocks": [
          {
            "p": "Un año de saju no cambia el 1 de enero, sino en **Ipchun (alrededor del 4 de febrero)**. El mes también se divide en función de los términos solares."
          },
          {
            "p": "Así, aquellos nacidos en **enero y principios de febrero reciben la Rama del Año del año anterior**. Aquí es donde surge la confusión común sobre los signos zodiacales. Lo mismo se aplica si introduces una fecha de nacimiento lunar: se convierte de nuevo a solar y luego se divide por términos solares."
          }
        ]
      },
      {
        "title": "Puedes Leerlo Incluso Sin Conocer la Hora de Nacimiento",
        "blocks": [
          {
            "p": "Si no introduces la hora, la lectura se basará en los tres pilares y seis caracteres, excluyendo el Pilar de la Hora. No adivinamos valores faltantes: asignar arbitrariamente un Pilar de la Hora puede alterar la fuerza de los cinco elementos, llevando a conclusiones incorrectas en lugar de potencialmente precisas."
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
            "p": "El método de contar los ocho caracteres como cinco elementos para evaluar la fuerza se continúa en [Fuerza de los Cinco Elementos y Pilar del Día Fuerte/Débil](/guide/five-elements), mientras que el método de leer los caracteres restantes en función de la Rama del Día se continúa en [Diez Dioses](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Cinco Elementos",
    "title": "Fuerza de los Cinco Elementos y Pilar del Día Fuerte/Débil",
    "summary": "Contamos los ocho caracteres como cinco elementos para ver qué energía es fuerte y cuál es débil. Revelamos los valores umbral (45%·35%) que determinan la fuerza de la Rama del Día.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Contando Ocho Caracteres como Cinco Energías",
        "blocks": [
          {
            "p": "Los diez Ramos Celestiales y las doce Ramas Terrestres pertenecen cada uno a uno de los **Cinco Elementos (五行)** — Madera (木), Fuego (火), Tierra (土), Metal (金), Agua (水). Al contar los caracteres en la carta natal según sus respectivos elementos, podemos determinar qué energía es fuerte y cuál es débil."
          },
          {
            "p": "Sin embargo, no solo contamos los números. También consideramos **si el mes de nacimiento apoya esa energía**. Incluso el mismo carácter puede tener diferentes fuerzas dependiendo de si se encuentra en su estación. Esto se llama Signo del Mes (月令), y se divide en cinco etapas: Wang (旺), Sang (相), Hyu (休), Su (囚), y Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dónde Difieren Pantalla e Informe",
        "blocks": [
          {
            "p": "La pantalla gratuita solo muestra la **fuerza después de reflejar el Signo del Mes**. Los valores antes del Signo del Mes y la tabla de Wang, Sang, Hyu, Su y Sa están incluidos en el informe de pago — esto se proporciona para que puedas verificar directamente dónde divergió la evaluación."
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
            "p": "Las energías alineadas con la Rama del Día son **Recurso y Compañero** — las energías que me dan vida y aquellas que son similares a mí. Dado que hay dos de cinco, si no hay sesgo, estará alrededor de {evenAllyRatio}. Tratamos el área alrededor de esa cifra como equilibrada, y leemos por encima y por debajo como fuerte o débil."
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
                  "Pilar del Día Fuerte (身强)",
                  "Las energías que apoyan la Rama del Día son abundantes."
                ],
                [
                  "{weakThreshold} o más y menos de {strongThreshold}",
                  "Equilibrado (中和)",
                  "Es difícil concluir en ninguna dirección."
                ],
                [
                  "Menos de {weakThreshold}",
                  "Pilar del Día Débil (身弱)",
                  "Las energías que apoyan la Rama del Día son débiles."
                ]
              ]
            }
          },
          {
            "p": "Los números en esta tabla no se transcriben del texto, sino que son **leídos directamente del motor**. Si las reglas cambian, este documento también cambiará."
          }
        ]
      },
      {
        "title": "La Fuerza No es Buena ni Mala",
        "blocks": [
          {
            "p": "Ser fuerte no significa bueno, y ser débil no significa malo. Si es fuerte, hay poder para avanzar, pero es fácil inclinarse hacia un lado; si es débil, es más fácil aprovechar la fuerza de otros, pero uno puede cansarse fácilmente al soportar solo. **Las energías necesarias difieren en cada caso.**"
          },
          {
            "p": "Determinar esa 'energía necesaria' es el elemento equilibrante, y continúa en [Elemento Equilibrante](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Cómo se establecen los ocho caracteres está en [carta natal](/guide/natal-chart). Cómo interactúa el Pilar del Día de hoy con esta fuerza se cubre en [la fortuna de hoy](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Elemento Equilibrante",
    "title": "Elemento Equilibrante — La Energía Necesaria Ahora",
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
            "p": "Un saju que está distribuido de manera uniforme no siempre es cómodo, ni un saju que está sesgado es siempre difícil. La dirección del sesgo y si hay un elemento para aliviarlo es el cruce de caminos."
          }
        ]
      },
      {
        "title": "Elemento de Equilibrio — Reducir Si Es Excesivo, Añadir Si Falta",
        "blocks": [
          {
            "p": "El elemento de equilibrio (用神) es **la energía que actualmente necesita esta persona**. Hay varios métodos para determinarlo (suprimir y apoyar, equilibrio estacional, aflicción, mediación), y el que puede expresarse como reglas — y es el más utilizado — es **suprimir y apoyar (抑扶)**. Si el pilar del día es fuerte, se cree que se necesita una energía para reducir; si es débil, se requiere una energía para añadir."
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
                  "Pilar del Día Fuerte (身强)",
                  "Energía para drenar — Salida, Riqueza y Oficial",
                  "Tres"
                ],
                [
                  "Pilar del Día Débil (身弱)",
                  "Energía para Añadir — Recurso, Compañero",
                  "Dos"
                ],
                [
                  "Equilibrado (中和)",
                  "No se puede decidir por suprimir y apoyar, así que las energías más delgadas",
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
            "p": "El lado del pilar del día es **Recurso y Compañero** — la energía que me da vida y la energía que es como yo. Dado que dos de cinco están involucrados, el equilibrio completo será {evenAllyRatio}. El ancho se establece por encima y por debajo de este {evenAllyRatio}."
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
                  "Pilar del Día Fuerte"
                ],
                [
                  "{weakThreshold} o más y menos de {strongThreshold}",
                  "Equilibrado"
                ],
                [
                  "Menos de {weakThreshold}",
                  "Pilar del Día Débil"
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
            "p": "Equilibrado significa que suprimir y apoyar no puede decidirlo. En este momento, las dos energías más delgadas se consideran simplemente necesarias. En la pantalla de resultados, se anota como 'posición actualmente delgada' en lugar de una declaración definitiva."
          }
        ]
      },
      {
        "title": "La Fuerza No Es el Número de Caracteres",
        "blocks": [
          {
            "p": "Al contar la fuerza de los cinco elementos, los ocho caracteres no se cuentan tal como aparecen. Los valores reflejan los tallos celestiales ocultos (地藏干) dentro de las ramas terrenales y la temporada de la energía del mes (月令) en la que uno nació."
          },
          {
            "p": "Contar solo los caracteres superficiales omite el hecho de que incluso los mismos caracteres 木 pueden tener fuerzas completamente diferentes dependiendo de la temporada. El 木 de la primavera y el 木 del otoño, aunque son el mismo carácter, tienen diferentes fuerzas."
          }
        ]
      },
      {
        "title": "Dónde Usar el Elemento de Equilibrio",
        "blocks": [
          {
            "p": "El elemento de equilibrio determinado se utiliza en dos lugares. Uno es la pantalla de resultados **'energía actualmente necesaria'**, y el otro es [la fortuna de hoy](/guide/today-fortune) — si la energía de hoy corresponde al elemento de equilibrio es el ítem que más mueve la puntuación ese día."
          }
        ]
      },
      {
        "title": "Este Es un Juicio Simple",
        "blocks": [
          {
            "p": "El análisis real del destino considera la formación y las condiciones estacionales (el calor y la humedad de la temporada) para determinar el elemento de equilibrio, y las conclusiones pueden variar dependiendo del método. Saju-Link solo utiliza **reducción que puede medirse por valores de fuerza**. Esto se debe al principio de usar solo lo que puede convertirse en reglas, por lo que la misma entrada siempre dará la misma respuesta."
          },
          {
            "p": "En cambio, la pantalla de resultados también presenta el pilar del día fuerte y débil junto con la energía actualmente necesaria como **material de lectura**. Esto es para evitar ocultar la base de la puntuación."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Troncos celestiales",
    "title": "Madera Yang (甲) — Madera Yang",
    "summary": "El elemento y la polaridad del tronco celestial 甲, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Madera Yang (甲) es el primero de los diez troncos celestiales",
        "blocks": [
          {
            "p": "甲 es el primero de los diez troncos celestiales. Su elemento es Madera y su polaridad es Yang. Saju-Link llama «Madera Yang (甲)» a la persona cuyo tronco del día es 甲."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 甲 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 甲 lee al otro tronco, y cuando el otro tronco lee a 甲 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Madera Yang (甲) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Compañero (比肩)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Rival (劫財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Expresión (食神)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Riqueza estable (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Retador (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Autoridad (正官)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Sostén (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 甲 como tronco del día, la Riqueza estable es 己 y la Autoridad es 辛. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 甲",
        "blocks": [
          {
            "p": "Aquí es donde 甲 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 甲."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 甲",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "principal (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Conejo",
                  "residual (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Cerdo",
                  "intermedio (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Troncos celestiales",
    "title": "Madera Yin (乙) — Madera Yin",
    "summary": "El elemento y la polaridad del tronco celestial 乙, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Madera Yin (乙) es el segundo de los diez troncos celestiales",
        "blocks": [
          {
            "p": "乙 es el segundo de los diez troncos celestiales. Su elemento es Madera y su polaridad es Yin. Saju-Link llama «Madera Yin (乙)» a la persona cuyo tronco del día es 乙."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 乙 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 乙 lee al otro tronco, y cuando el otro tronco lee a 乙 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Madera Yin (乙) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Rival (劫財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Compañero (比肩)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Riqueza estable (正財)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Autoridad (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Retador (偏官)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Sostén (正印)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 乙 como tronco del día, la Riqueza estable es 戊 y la Autoridad es 庚. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 乙",
        "blocks": [
          {
            "p": "Aquí es donde 乙 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 乙."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 乙",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "卯",
                  "Conejo",
                  "principal (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Dragón",
                  "residual (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Oveja",
                  "intermedio (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Troncos celestiales",
    "title": "Fuego Yang (丙) — Fuego Yang",
    "summary": "El elemento y la polaridad del tronco celestial 丙, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Fuego Yang (丙) es el tercero de los diez troncos celestiales",
        "blocks": [
          {
            "p": "丙 es el tercero de los diez troncos celestiales. Su elemento es Fuego y su polaridad es Yang. Saju-Link llama «Fuego Yang (丙)» a la persona cuyo tronco del día es 丙."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 丙 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 丙 lee al otro tronco, y cuando el otro tronco lee a 丙 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Fuego Yang (丙) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Sostén (正印)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Compañero (比肩)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Rival (劫財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Riqueza estable (正財)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Retador (偏官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Autoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丙 como tronco del día, la Riqueza estable es 辛 y la Autoridad es 癸. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 丙",
        "blocks": [
          {
            "p": "Aquí es donde 丙 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 丙."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 丙",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "intermedio (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Serpiente",
                  "principal (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Caballo",
                  "residual (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Troncos celestiales",
    "title": "Fuego Yin (丁) — Fuego Yin",
    "summary": "El elemento y la polaridad del tronco celestial 丁, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Fuego Yin (丁) es el cuarto de los diez troncos celestiales",
        "blocks": [
          {
            "p": "丁 es el cuarto de los diez troncos celestiales. Su elemento es Fuego y su polaridad es Yin. Saju-Link llama «Fuego Yin (丁)» a la persona cuyo tronco del día es 丁."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 丁 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 丁 lee al otro tronco, y cuando el otro tronco lee a 丁 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Fuego Yin (丁) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Sostén (正印)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Rival (劫財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Expresión (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Riqueza estable (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Autoridad (正官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丁 como tronco del día, la Riqueza estable es 庚 y la Autoridad es 壬. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 丁",
        "blocks": [
          {
            "p": "Aquí es donde 丁 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 丁."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 丁",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "午",
                  "Caballo",
                  "principal (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Oveja",
                  "residual (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Perro",
                  "intermedio (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Troncos celestiales",
    "title": "Tierra Yang (戊) — Tierra Yang",
    "summary": "El elemento y la polaridad del tronco celestial 戊, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Tierra Yang (戊) es el quinto de los diez troncos celestiales",
        "blocks": [
          {
            "p": "戊 es el quinto de los diez troncos celestiales. Su elemento es Tierra y su polaridad es Yang. Saju-Link llama «Tierra Yang (戊)» a la persona cuyo tronco del día es 戊."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 戊 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 戊 lee al otro tronco, y cuando el otro tronco lee a 戊 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Tierra Yang (戊) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Retador (偏官)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Autoridad (正官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Sostén (正印)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Expresión (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Riqueza estable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 戊 como tronco del día, la Riqueza estable es 癸 y la Autoridad es 乙. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 戊",
        "blocks": [
          {
            "p": "Aquí es donde 戊 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 戊."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 戊",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "residual (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Dragón",
                  "principal (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Serpiente",
                  "residual (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Mono",
                  "residual (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Perro",
                  "principal (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Cerdo",
                  "residual (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Troncos celestiales",
    "title": "Tierra Yin (己) — Tierra Yin",
    "summary": "El elemento y la polaridad del tronco celestial 己, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Tierra Yin (己) es el sexto de los diez troncos celestiales",
        "blocks": [
          {
            "p": "己 es el sexto de los diez troncos celestiales. Su elemento es Tierra y su polaridad es Yin. Saju-Link llama «Tierra Yin (己)» a la persona cuyo tronco del día es 己."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 己 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 己 lee al otro tronco, y cuando el otro tronco lee a 己 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Tierra Yin (己) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Autoridad (正官)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Retador (偏官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Sostén (正印)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Rival (劫財)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Compañero (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Expresión (食神)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Riqueza estable (正財)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 己 como tronco del día, la Riqueza estable es 壬 y la Autoridad es 甲. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 己",
        "blocks": [
          {
            "p": "Aquí es donde 己 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 己."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 己",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "丑",
                  "Buey",
                  "principal (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Caballo",
                  "intermedio (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Oveja",
                  "principal (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Troncos celestiales",
    "title": "Metal Yang (庚) — Metal Yang",
    "summary": "El elemento y la polaridad del tronco celestial 庚, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Metal Yang (庚) es el séptimo de los diez troncos celestiales",
        "blocks": [
          {
            "p": "庚 es el séptimo de los diez troncos celestiales. Su elemento es Metal y su polaridad es Yang. Saju-Link llama «Metal Yang (庚)» a la persona cuyo tronco del día es 庚."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 庚 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 庚 lee al otro tronco, y cuando el otro tronco lee a 庚 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Metal Yang (庚) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Retador (偏官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Autoridad (正官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Sostén (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Compañero (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Rival (劫財)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Expresión (食神)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 庚 como tronco del día, la Riqueza estable es 乙 y la Autoridad es 丁. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 庚",
        "blocks": [
          {
            "p": "Aquí es donde 庚 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 庚."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 庚",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "巳",
                  "Serpiente",
                  "intermedio (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Mono",
                  "principal (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Gallo",
                  "residual (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Troncos celestiales",
    "title": "Metal Yin (辛) — Metal Yin",
    "summary": "El elemento y la polaridad del tronco celestial 辛, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Metal Yin (辛) es el octavo de los diez troncos celestiales",
        "blocks": [
          {
            "p": "辛 es el octavo de los diez troncos celestiales. Su elemento es Metal y su polaridad es Yin. Saju-Link llama «Metal Yin (辛)» a la persona cuyo tronco del día es 辛."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 辛 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 辛 lee al otro tronco, y cuando el otro tronco lee a 辛 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Metal Yin (辛) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Riqueza estable (正財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Autoridad (正官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Retador (偏官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Sostén (正印)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Compañero (比肩)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 辛 como tronco del día, la Riqueza estable es 甲 y la Autoridad es 丙. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 辛",
        "blocks": [
          {
            "p": "Aquí es donde 辛 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 辛."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 辛",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "丑",
                  "Buey",
                  "intermedio (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Gallo",
                  "principal (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Perro",
                  "residual (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Agua Yang (壬)](/guide/stem-im) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Troncos celestiales",
    "title": "Agua Yang (壬) — Agua Yang",
    "summary": "El elemento y la polaridad del tronco celestial 壬, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Agua Yang (壬) es el noveno de los diez troncos celestiales",
        "blocks": [
          {
            "p": "壬 es el noveno de los diez troncos celestiales. Su elemento es Agua y su polaridad es Yang. Saju-Link llama «Agua Yang (壬)» a la persona cuyo tronco del día es 壬."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 壬 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 壬 lee al otro tronco, y cuando el otro tronco lee a 壬 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Agua Yang (壬) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Expresión (食神)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Riqueza estable (正財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Retador (偏官)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Autoridad (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Sostén (正印)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Compañero (比肩)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 壬 como tronco del día, la Riqueza estable es 丁 y la Autoridad es 己. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 壬",
        "blocks": [
          {
            "p": "Aquí es donde 壬 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 壬."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 壬",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "子",
                  "Rata",
                  "residual (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Mono",
                  "intermedio (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Cerdo",
                  "principal (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Troncos celestiales",
    "title": "Agua Yin (癸) — Agua Yin",
    "summary": "El elemento y la polaridad del tronco celestial 癸, cómo lee a los otros nueve troncos (los Diez Dioses) y qué ramas terrestres lo contienen — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "Agua Yin (癸) es el décimo de los diez troncos celestiales",
        "blocks": [
          {
            "p": "癸 es el décimo de los diez troncos celestiales. Su elemento es Agua y su polaridad es Yin. Saju-Link llama «Agua Yin (癸)» a la persona cuyo tronco del día es 癸."
          },
          {
            "p": "La línea que la pantalla de resultados muestra para este tronco del día es: \"Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras.\" Esta línea no tiene nada que ver con la tabla ni con las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Cómo lee a los otros troncos (los Diez Dioses)",
        "blocks": [
          {
            "p": "Con 癸 como tronco del día, cada uno de los diez troncos se lee así. La lectura tiene una dirección: así es como 癸 lee al otro tronco, y cuando el otro tronco lee a 癸 puede salir un nombre distinto."
          },
          {
            "table": {
              "caption": "Diez Dioses con Agua Yin (癸) como tronco del día",
              "head": [
                "Otro tronco",
                "Elemento y polaridad",
                "Nombre (Diez Dioses)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "Perturbador (傷官)"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "Expresión (食神)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "Autoridad (正官)"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "Retador (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Sostén (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "Rival (劫財)"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los troncos que se leen como la posición del cónyuge",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 癸 como tronco del día, la Riqueza estable es 丙 y la Autoridad es 戊. Si no indicas tu género, esta posición no se lee."
          }
        ]
      },
      {
        "title": "Las ramas que contienen 癸",
        "blocks": [
          {
            "p": "Aquí es donde 癸 se oculta dentro de las ramas terrestres (los troncos ocultos). La proporción es la parte de los treinta días de esa rama que ocupa 癸."
          },
          {
            "table": {
              "caption": "Las ramas que contienen 癸",
              "head": [
                "Rama",
                "Animal",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "子",
                  "Rata",
                  "principal (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Buey",
                  "residual (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Dragón",
                  "intermedio (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo tronco no define a una persona. Un saju se lee a partir de cómo se relacionan sus ocho caracteres.",
              "Los Diez Dioses son un juicio que se hace desde el tronco del día. Los mismos dos caracteres reciben un nombre distinto según cuál de ellos sea el tronco del día."
            ]
          },
          {
            "p": "Los Diez Dioses completos están en [la guía de los Diez Dioses](/guide/ten-gods), y la fuerza de los elementos y la rama del mes están en [la guía de los cinco elementos](/guide/five-elements). Otros troncos: [Madera Yang (甲)](/guide/stem-gap) · [Madera Yin (乙)](/guide/stem-eul) · [Fuego Yang (丙)](/guide/stem-byeong) · [Fuego Yin (丁)](/guide/stem-jeong) · [Tierra Yang (戊)](/guide/stem-mu) · [Tierra Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Agua Yang (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Ramas terrestres",
    "title": "子 — la rama de la Rata",
    "summary": "Los troncos que contiene la rama terrestre 子 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "子 es la primera de las doce ramas terrestres",
        "blocks": [
          {
            "p": "子 es la primera de las doce ramas terrestres y pertenece a la Rata. Cuando la rama del mes de nacimiento es 子, la estación es invierno y el elemento que rige la estación es Agua."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 子, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 子",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "residual (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "principal (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 子",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 子, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 子 (invierno)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fuego",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tierra",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Agua",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 子 se convierten en Diez Dioses distintos según el tronco del día. Cuando 子 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 子 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Agua Yang (壬) — residual (餘氣)",
                "Agua Yin (癸) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Apoyo poco convencional (偏印)",
                  "Sostén (正印)"
                ],
                [
                  "Madera Yin (乙)",
                  "Sostén (正印)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Retador (偏官)",
                  "Autoridad (正官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Autoridad (正官)",
                  "Retador (偏官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Fortuna inesperada (偏財)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Tierra Yin (己)",
                  "Riqueza estable (正財)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Expresión (食神)",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Perturbador (傷官)",
                  "Expresión (食神)"
                ],
                [
                  "Agua Yang (壬)",
                  "Compañero (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Agua Yin (癸)",
                  "Rival (劫財)",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Ramas terrestres",
    "title": "丑 — la rama del Buey",
    "summary": "Los troncos que contiene la rama terrestre 丑 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丑 es la segunda de las doce ramas terrestres",
        "blocks": [
          {
            "p": "丑 es la segunda de las doce ramas terrestres y pertenece al Buey. Cuando la rama del mes de nacimiento es 丑, la estación es invierno y el elemento que rige la estación es Agua. Es un mes de transición (辰未戌丑), por lo que la Tierra también se cuenta en el estado Wang."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 丑, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 丑",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "residual (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "intermedio (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "principal (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 丑",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 丑, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 丑 (invierno (mes de transición))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fuego",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tierra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Agua",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 丑 se convierten en Diez Dioses distintos según el tronco del día. Cuando 丑 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 丑 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Agua Yin (癸) — residual (餘氣)",
                "Metal Yin (辛) — intermedio (中氣)",
                "Tierra Yin (己) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Sostén (正印)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Tierra Yin (己)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)",
                  "Compañero (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Sostén (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Expresión (食神)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Agua Yang (壬)",
                  "Rival (劫財)",
                  "Sostén (正印)",
                  "Autoridad (正官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Ramas terrestres",
    "title": "寅 — la rama del Tigre",
    "summary": "Los troncos que contiene la rama terrestre 寅 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "寅 es la tercera de las doce ramas terrestres",
        "blocks": [
          {
            "p": "寅 es la tercera de las doce ramas terrestres y pertenece al Tigre. Cuando la rama del mes de nacimiento es 寅, la estación es primavera y el elemento que rige la estación es Madera."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 寅, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 寅",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "residual (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "intermedio (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "principal (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 寅",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 寅, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 寅 (primavera)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fuego",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tierra",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Agua",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 寅 se convierten en Diez Dioses distintos según el tronco del día. Cuando 寅 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 寅 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Tierra Yang (戊) — residual (餘氣)",
                "Fuego Yang (丙) — intermedio (中氣)",
                "Madera Yang (甲) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)",
                  "Compañero (比肩)"
                ],
                [
                  "Madera Yin (乙)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Expresión (食神)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Sostén (正印)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)"
                ],
                [
                  "Tierra Yin (己)",
                  "Rival (劫財)",
                  "Sostén (正印)",
                  "Autoridad (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Sostén (正印)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Agua Yang (壬)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)"
                ],
                [
                  "Agua Yin (癸)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Ramas terrestres",
    "title": "卯 — la rama del Conejo",
    "summary": "Los troncos que contiene la rama terrestre 卯 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "卯 es la cuarta de las doce ramas terrestres",
        "blocks": [
          {
            "p": "卯 es la cuarta de las doce ramas terrestres y pertenece al Conejo. Cuando la rama del mes de nacimiento es 卯, la estación es primavera y el elemento que rige la estación es Madera."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 卯, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 卯",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "residual (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "principal (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 卯",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 卯, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 卯 (primavera)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fuego",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tierra",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Agua",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 卯 se convierten en Diez Dioses distintos según el tronco del día. Cuando 卯 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 卯 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Madera Yang (甲) — residual (餘氣)",
                "Madera Yin (乙) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Compañero (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Rival (劫財)",
                  "Compañero (比肩)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Apoyo poco convencional (偏印)",
                  "Sostén (正印)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Sostén (正印)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Retador (偏官)",
                  "Autoridad (正官)"
                ],
                [
                  "Tierra Yin (己)",
                  "Autoridad (正官)",
                  "Retador (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Fortuna inesperada (偏財)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Riqueza estable (正財)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Agua Yang (壬)",
                  "Expresión (食神)",
                  "Perturbador (傷官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Perturbador (傷官)",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Ramas terrestres",
    "title": "辰 — la rama del Dragón",
    "summary": "Los troncos que contiene la rama terrestre 辰 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "辰 es la quinta de las doce ramas terrestres",
        "blocks": [
          {
            "p": "辰 es la quinta de las doce ramas terrestres y pertenece al Dragón. Cuando la rama del mes de nacimiento es 辰, la estación es primavera y el elemento que rige la estación es Madera. Es un mes de transición (辰未戌丑), por lo que la Tierra también se cuenta en el estado Wang."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 辰, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 辰",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "residual (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin",
                  "intermedio (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "principal (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 辰",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 辰, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 辰 (primavera (mes de transición))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fuego",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tierra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Agua",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 辰 se convierten en Diez Dioses distintos según el tronco del día. Cuando 辰 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 辰 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Madera Yin (乙) — residual (餘氣)",
                "Agua Yin (癸) — intermedio (中氣)",
                "Tierra Yang (戊) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Rival (劫財)",
                  "Sostén (正印)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Sostén (正印)",
                  "Autoridad (正官)",
                  "Expresión (食神)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)",
                  "Perturbador (傷官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yin (己)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)",
                  "Sostén (正印)"
                ],
                [
                  "Agua Yang (壬)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Retador (偏官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Expresión (食神)",
                  "Compañero (比肩)",
                  "Autoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Ramas terrestres",
    "title": "巳 — la rama de la Serpiente",
    "summary": "Los troncos que contiene la rama terrestre 巳 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "巳 es la sexta de las doce ramas terrestres",
        "blocks": [
          {
            "p": "巳 es la sexta de las doce ramas terrestres y pertenece a la Serpiente. Cuando la rama del mes de nacimiento es 巳, la estación es verano y el elemento que rige la estación es Fuego."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 巳, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 巳",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "residual (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "intermedio (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "principal (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 巳",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 巳, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 巳 (verano)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fuego",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tierra",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Agua",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 巳 se convierten en Diez Dioses distintos según el tronco del día. Cuando 巳 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 巳 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Tierra Yang (戊) — residual (餘氣)",
                "Metal Yang (庚) — intermedio (中氣)",
                "Fuego Yang (丙) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Fortuna inesperada (偏財)",
                  "Retador (偏官)",
                  "Expresión (食神)"
                ],
                [
                  "Madera Yin (乙)",
                  "Riqueza estable (正財)",
                  "Autoridad (正官)",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Expresión (食神)",
                  "Fortuna inesperada (偏財)",
                  "Compañero (比肩)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Perturbador (傷官)",
                  "Riqueza estable (正財)",
                  "Rival (劫財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Compañero (比肩)",
                  "Expresión (食神)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Tierra Yin (己)",
                  "Rival (劫財)",
                  "Perturbador (傷官)",
                  "Sostén (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoyo poco convencional (偏印)",
                  "Compañero (比肩)",
                  "Retador (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Sostén (正印)",
                  "Rival (劫財)",
                  "Autoridad (正官)"
                ],
                [
                  "Agua Yang (壬)",
                  "Retador (偏官)",
                  "Apoyo poco convencional (偏印)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Agua Yin (癸)",
                  "Autoridad (正官)",
                  "Sostén (正印)",
                  "Riqueza estable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Ramas terrestres",
    "title": "午 — la rama del Caballo",
    "summary": "Los troncos que contiene la rama terrestre 午 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "午 es la séptima de las doce ramas terrestres",
        "blocks": [
          {
            "p": "午 es la séptima de las doce ramas terrestres y pertenece al Caballo. Cuando la rama del mes de nacimiento es 午, la estación es verano y el elemento que rige la estación es Fuego."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 午, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 午",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang",
                  "residual (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "intermedio (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "principal (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 午",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 午, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 午 (verano)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fuego",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tierra",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Agua",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 午 se convierten en Diez Dioses distintos según el tronco del día. Cuando 午 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 午 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Fuego Yang (丙) — residual (餘氣)",
                "Tierra Yin (己) — intermedio (中氣)",
                "Fuego Yin (丁) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Expresión (食神)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Madera Yin (乙)",
                  "Perturbador (傷官)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Compañero (比肩)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Rival (劫財)",
                  "Expresión (食神)",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Apoyo poco convencional (偏印)",
                  "Rival (劫財)",
                  "Sostén (正印)"
                ],
                [
                  "Tierra Yin (己)",
                  "Sostén (正印)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Retador (偏官)",
                  "Sostén (正印)",
                  "Autoridad (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Autoridad (正官)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)"
                ],
                [
                  "Agua Yang (壬)",
                  "Fortuna inesperada (偏財)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Agua Yin (癸)",
                  "Riqueza estable (正財)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Ramas terrestres",
    "title": "未 — la rama de la Oveja",
    "summary": "Los troncos que contiene la rama terrestre 未 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "未 es la octava de las doce ramas terrestres",
        "blocks": [
          {
            "p": "未 es la octava de las doce ramas terrestres y pertenece a la Oveja. Cuando la rama del mes de nacimiento es 未, la estación es verano y el elemento que rige la estación es Fuego. Es un mes de transición (辰未戌丑), por lo que la Tierra también se cuenta en el estado Wang."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 未, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 未",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "residual (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin",
                  "intermedio (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin",
                  "principal (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 未",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 未, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 未 (verano (mes de transición))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fuego",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tierra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Agua",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 未 se convierten en Diez Dioses distintos según el tronco del día. Cuando 未 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 未 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Fuego Yin (丁) — residual (餘氣)",
                "Madera Yin (乙) — intermedio (中氣)",
                "Tierra Yin (己) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Perturbador (傷官)",
                  "Rival (劫財)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Expresión (食神)",
                  "Compañero (比肩)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Rival (劫財)",
                  "Sostén (正印)",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Sostén (正印)",
                  "Autoridad (正官)",
                  "Rival (劫財)"
                ],
                [
                  "Tierra Yin (己)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)",
                  "Compañero (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)",
                  "Sostén (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Agua Yang (壬)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)",
                  "Autoridad (正官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Ramas terrestres",
    "title": "申 — la rama del Mono",
    "summary": "Los troncos que contiene la rama terrestre 申 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "申 es la novena de las doce ramas terrestres",
        "blocks": [
          {
            "p": "申 es la novena de las doce ramas terrestres y pertenece al Mono. Cuando la rama del mes de nacimiento es 申, la estación es otoño y el elemento que rige la estación es Metal."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 申, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 申",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "residual (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "intermedio (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "principal (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 申",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 申, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 申 (otoño)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fuego",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tierra",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Agua",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 申 se convierten en Diez Dioses distintos según el tronco del día. Cuando 申 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 申 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Tierra Yang (戊) — residual (餘氣)",
                "Agua Yang (壬) — intermedio (中氣)",
                "Metal Yang (庚) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Fortuna inesperada (偏財)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)"
                ],
                [
                  "Madera Yin (乙)",
                  "Riqueza estable (正財)",
                  "Sostén (正印)",
                  "Autoridad (正官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Expresión (食神)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Perturbador (傷官)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Compañero (比肩)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yin (己)",
                  "Rival (劫財)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoyo poco convencional (偏印)",
                  "Expresión (食神)",
                  "Compañero (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "Sostén (正印)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Agua Yang (壬)",
                  "Retador (偏官)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Agua Yin (癸)",
                  "Autoridad (正官)",
                  "Rival (劫財)",
                  "Sostén (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Ramas terrestres",
    "title": "酉 — la rama del Gallo",
    "summary": "Los troncos que contiene la rama terrestre 酉 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "酉 es la décima de las doce ramas terrestres",
        "blocks": [
          {
            "p": "酉 es la décima de las doce ramas terrestres y pertenece al Gallo. Cuando la rama del mes de nacimiento es 酉, la estación es otoño y el elemento que rige la estación es Metal."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 酉, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 酉",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "residual (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "principal (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 酉",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 酉, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 酉 (otoño)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fuego",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tierra",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Agua",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 酉 se convierten en Diez Dioses distintos según el tronco del día. Cuando 酉 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 酉 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Metal Yang (庚) — residual (餘氣)",
                "Metal Yin (辛) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Retador (偏官)",
                  "Autoridad (正官)"
                ],
                [
                  "Madera Yin (乙)",
                  "Autoridad (正官)",
                  "Retador (偏官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fortuna inesperada (偏財)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Riqueza estable (正財)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Expresión (食神)",
                  "Perturbador (傷官)"
                ],
                [
                  "Tierra Yin (己)",
                  "Perturbador (傷官)",
                  "Expresión (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "Compañero (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Rival (劫財)",
                  "Compañero (比肩)"
                ],
                [
                  "Agua Yang (壬)",
                  "Apoyo poco convencional (偏印)",
                  "Sostén (正印)"
                ],
                [
                  "Agua Yin (癸)",
                  "Sostén (正印)",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [戌 (Perro)](/guide/branch-sul) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Ramas terrestres",
    "title": "戌 — la rama del Perro",
    "summary": "Los troncos que contiene la rama terrestre 戌 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "戌 es la undécima de las doce ramas terrestres",
        "blocks": [
          {
            "p": "戌 es la undécima de las doce ramas terrestres y pertenece al Perro. Cuando la rama del mes de nacimiento es 戌, la estación es otoño y el elemento que rige la estación es Metal. Es un mes de transición (辰未戌丑), por lo que la Tierra también se cuenta en el estado Wang."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 戌, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 戌",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "residual (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin",
                  "intermedio (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "principal (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 戌",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 戌, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 戌 (otoño (mes de transición))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fuego",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tierra",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Agua",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 戌 se convierten en Diez Dioses distintos según el tronco del día. Cuando 戌 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 戌 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Metal Yin (辛) — residual (餘氣)",
                "Fuego Yin (丁) — intermedio (中氣)",
                "Tierra Yang (戊) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Autoridad (正官)",
                  "Perturbador (傷官)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Madera Yin (乙)",
                  "Retador (偏官)",
                  "Expresión (食神)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Riqueza estable (正財)",
                  "Rival (劫財)",
                  "Expresión (食神)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fortuna inesperada (偏財)",
                  "Compañero (比肩)",
                  "Perturbador (傷官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Perturbador (傷官)",
                  "Sostén (正印)",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yin (己)",
                  "Expresión (食神)",
                  "Apoyo poco convencional (偏印)",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Rival (劫財)",
                  "Autoridad (正官)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Compañero (比肩)",
                  "Retador (偏官)",
                  "Sostén (正印)"
                ],
                [
                  "Agua Yang (壬)",
                  "Sostén (正印)",
                  "Riqueza estable (正財)",
                  "Retador (偏官)"
                ],
                [
                  "Agua Yin (癸)",
                  "Apoyo poco convencional (偏印)",
                  "Fortuna inesperada (偏財)",
                  "Autoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [亥 (Cerdo)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Ramas terrestres",
    "title": "亥 — la rama del Cerdo",
    "summary": "Los troncos que contiene la rama terrestre 亥 (los troncos ocultos), la fuerza de los cinco elementos cuando es la rama del mes y los Diez Dioses que se leen para cada tronco del día — expuesto exactamente como lo establecen las reglas de cálculo de Saju-Link.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "亥 es la duodécima de las doce ramas terrestres",
        "blocks": [
          {
            "p": "亥 es la duodécima de las doce ramas terrestres y pertenece al Cerdo. Cuando la rama del mes de nacimiento es 亥, la estación es invierno y el elemento que rige la estación es Agua."
          },
          {
            "p": "Cuando la rama del día de nacimiento es 亥, este carácter es la posición del cónyuge. Abajo puedes ver qué troncos contiene esta rama y qué son para el tronco del día."
          }
        ]
      },
      {
        "title": "Los troncos que contiene esta rama (troncos ocultos)",
        "blocks": [
          {
            "p": "Una rama es un carácter visible, pero contiene troncos en su interior. La proporción indica cómo se reparten los treinta días de la rama entre los troncos, y el tronco principal es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de 亥",
              "head": [
                "Tronco",
                "Elemento y polaridad",
                "Posición",
                "Proporción"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang",
                  "residual (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Madera Yang (甲)",
                  "Madera Yang",
                  "intermedio (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang",
                  "principal (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La fuerza de los cinco elementos cuando la rama del mes es 亥",
        "blocks": [
          {
            "p": "Cuando la rama del mes de nacimiento es 亥, cada elemento recibe un estado (Wang, Sang, Hyu, Su, Sa), y ese estado se convierte en el multiplicador que se aplica a su fuerza."
          },
          {
            "table": {
              "caption": "Los estados de los elementos para la rama del mes 亥 (invierno)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplicador"
              ],
              "rows": [
                [
                  "Madera",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fuego",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tierra",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Agua",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Los Diez Dioses según el tronco del día",
        "blocks": [
          {
            "p": "Los mismos troncos ocultos de 亥 se convierten en Diez Dioses distintos según el tronco del día. Cuando 亥 es la rama del día, esta tabla es la lectura de la posición del cónyuge."
          },
          {
            "table": {
              "caption": "Qué son los troncos ocultos de 亥 para cada tronco del día",
              "head": [
                "Tronco del día",
                "Tierra Yang (戊) — residual (餘氣)",
                "Madera Yang (甲) — intermedio (中氣)",
                "Agua Yang (壬) — principal (本氣)"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Fortuna inesperada (偏財)",
                  "Compañero (比肩)",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Madera Yin (乙)",
                  "Riqueza estable (正財)",
                  "Rival (劫財)",
                  "Sostén (正印)"
                ],
                [
                  "Fuego Yang (丙)",
                  "Expresión (食神)",
                  "Apoyo poco convencional (偏印)",
                  "Retador (偏官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "Perturbador (傷官)",
                  "Sostén (正印)",
                  "Autoridad (正官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "Compañero (比肩)",
                  "Retador (偏官)",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Tierra Yin (己)",
                  "Rival (劫財)",
                  "Autoridad (正官)",
                  "Riqueza estable (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Apoyo poco convencional (偏印)",
                  "Fortuna inesperada (偏財)",
                  "Expresión (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "Sostén (正印)",
                  "Riqueza estable (正財)",
                  "Perturbador (傷官)"
                ],
                [
                  "Agua Yang (壬)",
                  "Retador (偏官)",
                  "Expresión (食神)",
                  "Compañero (比肩)"
                ],
                [
                  "Agua Yin (癸)",
                  "Autoridad (正官)",
                  "Perturbador (傷官)",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Una sola rama no define a una persona. La misma rama se lee de forma distinta según el tronco del día y la rama del mes.",
              "Aquí no se tratan las relaciones entre ramas, como la armonía, el choque y la discordia."
            ]
          },
          {
            "p": "Las relaciones entre ramas están en [la tabla de las doce ramas](/guide/branches), y su significado como animal del zodiaco está en [dónde se sitúa el zodiaco en un saju](/guide/zodiac). Otras ramas: [子 (Rata)](/guide/branch-ja) · [丑 (Buey)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Conejo)](/guide/branch-myo) · [辰 (Dragón)](/guide/branch-jin) · [巳 (Serpiente)](/guide/branch-sa) · [午 (Caballo)](/guide/branch-o) · [未 (Oveja)](/guide/branch-mi) · [申 (Mono)](/guide/branch-sin) · [酉 (Gallo)](/guide/branch-yu) · [戌 (Perro)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 甲子",
    "summary": "Cómo lee Saju-Link el pilar del día 甲子 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "甲子 es el pilar del día número 1 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 甲子, el tronco del día es 甲 (Madera Yang) y la rama del día es 子 (la Rata). En el ciclo sexagenario es la combinación número 1."
          },
          {
            "p": "Saju-Link llama «Madera Yang (甲)» a la persona cuyo tronco del día es 甲, y la línea que muestra la pantalla de resultados es: \"Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 子",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 甲, los troncos que contiene 子 son los siguientes. El tronco principal (癸) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 甲子",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 甲"
              ],
              "rows": [
                [
                  "Agua Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Agua Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Sostén (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 甲 como tronco del día, la Riqueza estable es 己 y la Autoridad es 辛."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 己. 己 no está contenido en 子."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 辛. 辛 no está contenido en 子."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [癸亥](/guide/pillar-gye-hae) y el siguiente es [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Está formado por [Madera Yang (甲)](/guide/stem-gap) y [子 (Rata)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 乙丑",
    "summary": "Cómo lee Saju-Link el pilar del día 乙丑 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "乙丑 es el pilar del día número 2 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 乙丑, el tronco del día es 乙 (Madera Yin) y la rama del día es 丑 (el Buey). En el ciclo sexagenario es la combinación número 2."
          },
          {
            "p": "Saju-Link llama «Madera Yin (乙)» a la persona cuyo tronco del día es 乙, y la línea que muestra la pantalla de resultados es: \"Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 丑",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 乙, los troncos que contiene 丑 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 乙丑",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 乙"
              ],
              "rows": [
                [
                  "Agua Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Retador (偏官)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 乙 como tronco del día, la Riqueza estable es 戊 y la Autoridad es 庚."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 戊. 戊 no está contenido en 丑."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 庚. 庚 no está contenido en 丑."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [甲子](/guide/pillar-gap-ja) y el siguiente es [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Está formado por [Madera Yin (乙)](/guide/stem-eul) y [丑 (Buey)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丙寅",
    "summary": "Cómo lee Saju-Link el pilar del día 丙寅 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丙寅 es el pilar del día número 3 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丙寅, el tronco del día es 丙 (Fuego Yang) y la rama del día es 寅 (el Tigre). En el ciclo sexagenario es la combinación número 3."
          },
          {
            "p": "Saju-Link llama «Fuego Yang (丙)» a la persona cuyo tronco del día es 丙, y la línea que muestra la pantalla de resultados es: \"El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 寅",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丙, los troncos que contiene 寅 son los siguientes. El tronco principal (甲) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丙寅",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丙"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Expresión (食神)"
                ],
                [
                  "Fuego Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Compañero (比肩)"
                ],
                [
                  "Madera Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丙 como tronco del día, la Riqueza estable es 辛 y la Autoridad es 癸."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 辛. 辛 no está contenido en 寅."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 癸. 癸 no está contenido en 寅."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [乙丑](/guide/pillar-eul-chuk) y el siguiente es [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Está formado por [Fuego Yang (丙)](/guide/stem-byeong) y [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丁卯",
    "summary": "Cómo lee Saju-Link el pilar del día 丁卯 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丁卯 es el pilar del día número 4 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丁卯, el tronco del día es 丁 (Fuego Yin) y la rama del día es 卯 (el Conejo). En el ciclo sexagenario es la combinación número 4."
          },
          {
            "p": "Saju-Link llama «Fuego Yin (丁)» a la persona cuyo tronco del día es 丁, y la línea que muestra la pantalla de resultados es: \"Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 卯",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丁, los troncos que contiene 卯 son los siguientes. El tronco principal (乙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丁卯",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丁"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Sostén (正印)"
                ],
                [
                  "Madera Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丁 como tronco del día, la Riqueza estable es 庚 y la Autoridad es 壬."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 庚. 庚 no está contenido en 卯."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 壬. 壬 no está contenido en 卯."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丙寅](/guide/pillar-byeong-in) y el siguiente es [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Está formado por [Fuego Yin (丁)](/guide/stem-jeong) y [卯 (Conejo)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 戊辰",
    "summary": "Cómo lee Saju-Link el pilar del día 戊辰 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "戊辰 es el pilar del día número 5 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 戊辰, el tronco del día es 戊 (Tierra Yang) y la rama del día es 辰 (el Dragón). En el ciclo sexagenario es la combinación número 5."
          },
          {
            "p": "Saju-Link llama «Tierra Yang (戊)» a la persona cuyo tronco del día es 戊, y la línea que muestra la pantalla de resultados es: \"Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 辰",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 戊, los troncos que contiene 辰 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 戊辰",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 戊"
              ],
              "rows": [
                [
                  "Madera Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Autoridad (正官)"
                ],
                [
                  "Agua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 戊 como tronco del día, la Riqueza estable es 癸 y la Autoridad es 乙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 癸. 癸 está contenido en 辰 (intermedio (中氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 乙. 乙 está contenido en 辰 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丁卯](/guide/pillar-jeong-myo) y el siguiente es [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Está formado por [Tierra Yang (戊)](/guide/stem-mu) y [辰 (Dragón)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 己巳",
    "summary": "Cómo lee Saju-Link el pilar del día 己巳 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "己巳 es el pilar del día número 6 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 己巳, el tronco del día es 己 (Tierra Yin) y la rama del día es 巳 (la Serpiente). En el ciclo sexagenario es la combinación número 6."
          },
          {
            "p": "Saju-Link llama «Tierra Yin (己)» a la persona cuyo tronco del día es 己, y la línea que muestra la pantalla de resultados es: \"Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 巳",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 己, los troncos que contiene 巳 son los siguientes. El tronco principal (丙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 己巳",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 己"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Sostén (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 己 como tronco del día, la Riqueza estable es 壬 y la Autoridad es 甲."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 壬. 壬 no está contenido en 巳."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 甲. 甲 no está contenido en 巳."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [戊辰](/guide/pillar-mu-jin) y el siguiente es [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Está formado por [Tierra Yin (己)](/guide/stem-gi) y [巳 (Serpiente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 庚午",
    "summary": "Cómo lee Saju-Link el pilar del día 庚午 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "庚午 es el pilar del día número 7 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 庚午, el tronco del día es 庚 (Metal Yang) y la rama del día es 午 (el Caballo). En el ciclo sexagenario es la combinación número 7."
          },
          {
            "p": "Saju-Link llama «Metal Yang (庚)» a la persona cuyo tronco del día es 庚, y la línea que muestra la pantalla de resultados es: \"Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 午",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 庚, los troncos que contiene 午 son los siguientes. El tronco principal (丁) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 庚午",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 庚"
              ],
              "rows": [
                [
                  "Fuego Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Retador (偏官)"
                ],
                [
                  "Tierra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Sostén (正印)"
                ],
                [
                  "Fuego Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Autoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 庚 como tronco del día, la Riqueza estable es 乙 y la Autoridad es 丁."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 乙. 乙 no está contenido en 午."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丁. 丁 está contenido en 午 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [己巳](/guide/pillar-gi-sa) y el siguiente es [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Está formado por [Metal Yang (庚)](/guide/stem-gyeong) y [午 (Caballo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 辛未",
    "summary": "Cómo lee Saju-Link el pilar del día 辛未 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "辛未 es el pilar del día número 8 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 辛未, el tronco del día es 辛 (Metal Yin) y la rama del día es 未 (la Oveja). En el ciclo sexagenario es la combinación número 8."
          },
          {
            "p": "Saju-Link llama «Metal Yin (辛)» a la persona cuyo tronco del día es 辛, y la línea que muestra la pantalla de resultados es: \"Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 未",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 辛, los troncos que contiene 未 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 辛未",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 辛"
              ],
              "rows": [
                [
                  "Fuego Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Retador (偏官)"
                ],
                [
                  "Madera Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 辛 como tronco del día, la Riqueza estable es 甲 y la Autoridad es 丙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 甲. 甲 no está contenido en 未."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丙. 丙 no está contenido en 未."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [庚午](/guide/pillar-gyeong-o) y el siguiente es [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Está formado por [Metal Yin (辛)](/guide/stem-sin) y [未 (Oveja)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 壬申",
    "summary": "Cómo lee Saju-Link el pilar del día 壬申 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "壬申 es el pilar del día número 9 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 壬申, el tronco del día es 壬 (Agua Yang) y la rama del día es 申 (el Mono). En el ciclo sexagenario es la combinación número 9."
          },
          {
            "p": "Saju-Link llama «Agua Yang (壬)» a la persona cuyo tronco del día es 壬, y la línea que muestra la pantalla de resultados es: \"Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 申",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 壬, los troncos que contiene 申 son los siguientes. El tronco principal (庚) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 壬申",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 壬"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Retador (偏官)"
                ],
                [
                  "Agua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Compañero (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 壬 como tronco del día, la Riqueza estable es 丁 y la Autoridad es 己."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丁. 丁 no está contenido en 申."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 己. 己 no está contenido en 申."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [辛未](/guide/pillar-sin-mi) y el siguiente es [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Está formado por [Agua Yang (壬)](/guide/stem-im) y [申 (Mono)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 癸酉",
    "summary": "Cómo lee Saju-Link el pilar del día 癸酉 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "癸酉 es el pilar del día número 10 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 癸酉, el tronco del día es 癸 (Agua Yin) y la rama del día es 酉 (el Gallo). En el ciclo sexagenario es la combinación número 10."
          },
          {
            "p": "Saju-Link llama «Agua Yin (癸)» a la persona cuyo tronco del día es 癸, y la línea que muestra la pantalla de resultados es: \"Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 酉",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 癸, los troncos que contiene 酉 son los siguientes. El tronco principal (辛) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 癸酉",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 癸"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Sostén (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 癸 como tronco del día, la Riqueza estable es 丙 y la Autoridad es 戊."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丙. 丙 no está contenido en 酉."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 戊. 戊 no está contenido en 酉."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [壬申](/guide/pillar-im-sin) y el siguiente es [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Está formado por [Agua Yin (癸)](/guide/stem-gye) y [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 甲戌",
    "summary": "Cómo lee Saju-Link el pilar del día 甲戌 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "甲戌 es el pilar del día número 11 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 甲戌, el tronco del día es 甲 (Madera Yang) y la rama del día es 戌 (el Perro). En el ciclo sexagenario es la combinación número 11."
          },
          {
            "p": "Saju-Link llama «Madera Yang (甲)» a la persona cuyo tronco del día es 甲, y la línea que muestra la pantalla de resultados es: \"Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 戌",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 甲, los troncos que contiene 戌 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 甲戌",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 甲"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Autoridad (正官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 甲 como tronco del día, la Riqueza estable es 己 y la Autoridad es 辛."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 己. 己 no está contenido en 戌."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 辛. 辛 está contenido en 戌 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [癸酉](/guide/pillar-gye-yu) y el siguiente es [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Está formado por [Madera Yang (甲)](/guide/stem-gap) y [戌 (Perro)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 乙亥",
    "summary": "Cómo lee Saju-Link el pilar del día 乙亥 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "乙亥 es el pilar del día número 12 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 乙亥, el tronco del día es 乙 (Madera Yin) y la rama del día es 亥 (el Cerdo). En el ciclo sexagenario es la combinación número 12."
          },
          {
            "p": "Saju-Link llama «Madera Yin (乙)» a la persona cuyo tronco del día es 乙, y la línea que muestra la pantalla de resultados es: \"Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 亥",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 乙, los troncos que contiene 亥 son los siguientes. El tronco principal (壬) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 乙亥",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 乙"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Madera Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Rival (劫財)"
                ],
                [
                  "Agua Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Sostén (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 乙 como tronco del día, la Riqueza estable es 戊 y la Autoridad es 庚."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 戊. 戊 está contenido en 亥 (residual (餘氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 庚. 庚 no está contenido en 亥."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [甲戌](/guide/pillar-gap-sul) y el siguiente es [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Está formado por [Madera Yin (乙)](/guide/stem-eul) y [亥 (Cerdo)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丙子",
    "summary": "Cómo lee Saju-Link el pilar del día 丙子 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丙子 es el pilar del día número 13 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丙子, el tronco del día es 丙 (Fuego Yang) y la rama del día es 子 (la Rata). En el ciclo sexagenario es la combinación número 13."
          },
          {
            "p": "Saju-Link llama «Fuego Yang (丙)» a la persona cuyo tronco del día es 丙, y la línea que muestra la pantalla de resultados es: \"El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 子",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丙, los troncos que contiene 子 son los siguientes. El tronco principal (癸) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丙子",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丙"
              ],
              "rows": [
                [
                  "Agua Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Retador (偏官)"
                ],
                [
                  "Agua Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Autoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丙 como tronco del día, la Riqueza estable es 辛 y la Autoridad es 癸."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 辛. 辛 no está contenido en 子."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 癸. 癸 está contenido en 子 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [乙亥](/guide/pillar-eul-hae) y el siguiente es [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Está formado por [Fuego Yang (丙)](/guide/stem-byeong) y [子 (Rata)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丁丑",
    "summary": "Cómo lee Saju-Link el pilar del día 丁丑 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丁丑 es el pilar del día número 14 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丁丑, el tronco del día es 丁 (Fuego Yin) y la rama del día es 丑 (el Buey). En el ciclo sexagenario es la combinación número 14."
          },
          {
            "p": "Saju-Link llama «Fuego Yin (丁)» a la persona cuyo tronco del día es 丁, y la línea que muestra la pantalla de resultados es: \"Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 丑",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丁, los troncos que contiene 丑 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丁丑",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丁"
              ],
              "rows": [
                [
                  "Agua Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Retador (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丁 como tronco del día, la Riqueza estable es 庚 y la Autoridad es 壬."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 庚. 庚 no está contenido en 丑."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 壬. 壬 no está contenido en 丑."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丙子](/guide/pillar-byeong-ja) y el siguiente es [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Está formado por [Fuego Yin (丁)](/guide/stem-jeong) y [丑 (Buey)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 戊寅",
    "summary": "Cómo lee Saju-Link el pilar del día 戊寅 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "戊寅 es el pilar del día número 15 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 戊寅, el tronco del día es 戊 (Tierra Yang) y la rama del día es 寅 (el Tigre). En el ciclo sexagenario es la combinación número 15."
          },
          {
            "p": "Saju-Link llama «Tierra Yang (戊)» a la persona cuyo tronco del día es 戊, y la línea que muestra la pantalla de resultados es: \"Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 寅",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 戊, los troncos que contiene 寅 son los siguientes. El tronco principal (甲) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 戊寅",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 戊"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Compañero (比肩)"
                ],
                [
                  "Fuego Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Madera Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 戊 como tronco del día, la Riqueza estable es 癸 y la Autoridad es 乙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 癸. 癸 no está contenido en 寅."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 乙. 乙 no está contenido en 寅."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丁丑](/guide/pillar-jeong-chuk) y el siguiente es [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Está formado por [Tierra Yang (戊)](/guide/stem-mu) y [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 己卯",
    "summary": "Cómo lee Saju-Link el pilar del día 己卯 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "己卯 es el pilar del día número 16 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 己卯, el tronco del día es 己 (Tierra Yin) y la rama del día es 卯 (el Conejo). En el ciclo sexagenario es la combinación número 16."
          },
          {
            "p": "Saju-Link llama «Tierra Yin (己)» a la persona cuyo tronco del día es 己, y la línea que muestra la pantalla de resultados es: \"Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 卯",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 己, los troncos que contiene 卯 son los siguientes. El tronco principal (乙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 己卯",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 己"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Autoridad (正官)"
                ],
                [
                  "Madera Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 己 como tronco del día, la Riqueza estable es 壬 y la Autoridad es 甲."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 壬. 壬 no está contenido en 卯."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 甲. 甲 está contenido en 卯 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [戊寅](/guide/pillar-mu-in) y el siguiente es [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Está formado por [Tierra Yin (己)](/guide/stem-gi) y [卯 (Conejo)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 庚辰",
    "summary": "Cómo lee Saju-Link el pilar del día 庚辰 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "庚辰 es el pilar del día número 17 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 庚辰, el tronco del día es 庚 (Metal Yang) y la rama del día es 辰 (el Dragón). En el ciclo sexagenario es la combinación número 17."
          },
          {
            "p": "Saju-Link llama «Metal Yang (庚)» a la persona cuyo tronco del día es 庚, y la línea que muestra la pantalla de resultados es: \"Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 辰",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 庚, los troncos que contiene 辰 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 庚辰",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 庚"
              ],
              "rows": [
                [
                  "Madera Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Agua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 庚 como tronco del día, la Riqueza estable es 乙 y la Autoridad es 丁."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 乙. 乙 está contenido en 辰 (residual (餘氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丁. 丁 no está contenido en 辰."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [己卯](/guide/pillar-gi-myo) y el siguiente es [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Está formado por [Metal Yang (庚)](/guide/stem-gyeong) y [辰 (Dragón)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 辛巳",
    "summary": "Cómo lee Saju-Link el pilar del día 辛巳 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "辛巳 es el pilar del día número 18 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 辛巳, el tronco del día es 辛 (Metal Yin) y la rama del día es 巳 (la Serpiente). En el ciclo sexagenario es la combinación número 18."
          },
          {
            "p": "Saju-Link llama «Metal Yin (辛)» a la persona cuyo tronco del día es 辛, y la línea que muestra la pantalla de resultados es: \"Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 巳",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 辛, los troncos que contiene 巳 son los siguientes. El tronco principal (丙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 辛巳",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 辛"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Sostén (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Rival (劫財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Autoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 辛 como tronco del día, la Riqueza estable es 甲 y la Autoridad es 丙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 甲. 甲 no está contenido en 巳."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丙. 丙 está contenido en 巳 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [庚辰](/guide/pillar-gyeong-jin) y el siguiente es [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Está formado por [Metal Yin (辛)](/guide/stem-sin) y [巳 (Serpiente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 壬午",
    "summary": "Cómo lee Saju-Link el pilar del día 壬午 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "壬午 es el pilar del día número 19 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 壬午, el tronco del día es 壬 (Agua Yang) y la rama del día es 午 (el Caballo). En el ciclo sexagenario es la combinación número 19."
          },
          {
            "p": "Saju-Link llama «Agua Yang (壬)» a la persona cuyo tronco del día es 壬, y la línea que muestra la pantalla de resultados es: \"Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 午",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 壬, los troncos que contiene 午 son los siguientes. El tronco principal (丁) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 壬午",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 壬"
              ],
              "rows": [
                [
                  "Fuego Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Tierra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Autoridad (正官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Riqueza estable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 壬 como tronco del día, la Riqueza estable es 丁 y la Autoridad es 己."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丁. 丁 está contenido en 午 (principal (本氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 己. 己 está contenido en 午 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [辛巳](/guide/pillar-sin-sa) y el siguiente es [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Está formado por [Agua Yang (壬)](/guide/stem-im) y [午 (Caballo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 癸未",
    "summary": "Cómo lee Saju-Link el pilar del día 癸未 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "癸未 es el pilar del día número 20 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 癸未, el tronco del día es 癸 (Agua Yin) y la rama del día es 未 (la Oveja). En el ciclo sexagenario es la combinación número 20."
          },
          {
            "p": "Saju-Link llama «Agua Yin (癸)» a la persona cuyo tronco del día es 癸, y la línea que muestra la pantalla de resultados es: \"Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 未",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 癸, los troncos que contiene 未 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 癸未",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 癸"
              ],
              "rows": [
                [
                  "Fuego Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Madera Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 癸 como tronco del día, la Riqueza estable es 丙 y la Autoridad es 戊."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丙. 丙 no está contenido en 未."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 戊. 戊 no está contenido en 未."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [壬午](/guide/pillar-im-o) y el siguiente es [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Está formado por [Agua Yin (癸)](/guide/stem-gye) y [未 (Oveja)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 甲申",
    "summary": "Cómo lee Saju-Link el pilar del día 甲申 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "甲申 es el pilar del día número 21 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 甲申, el tronco del día es 甲 (Madera Yang) y la rama del día es 申 (el Mono). En el ciclo sexagenario es la combinación número 21."
          },
          {
            "p": "Saju-Link llama «Madera Yang (甲)» a la persona cuyo tronco del día es 甲, y la línea que muestra la pantalla de resultados es: \"Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 申",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 甲, los troncos que contiene 申 son los siguientes. El tronco principal (庚) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 甲申",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 甲"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Agua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 甲 como tronco del día, la Riqueza estable es 己 y la Autoridad es 辛."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 己. 己 no está contenido en 申."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 辛. 辛 no está contenido en 申."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [癸未](/guide/pillar-gye-mi) y el siguiente es [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Está formado por [Madera Yang (甲)](/guide/stem-gap) y [申 (Mono)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 乙酉",
    "summary": "Cómo lee Saju-Link el pilar del día 乙酉 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "乙酉 es el pilar del día número 22 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 乙酉, el tronco del día es 乙 (Madera Yin) y la rama del día es 酉 (el Gallo). En el ciclo sexagenario es la combinación número 22."
          },
          {
            "p": "Saju-Link llama «Madera Yin (乙)» a la persona cuyo tronco del día es 乙, y la línea que muestra la pantalla de resultados es: \"Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 酉",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 乙, los troncos que contiene 酉 son los siguientes. El tronco principal (辛) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 乙酉",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 乙"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Autoridad (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 乙 como tronco del día, la Riqueza estable es 戊 y la Autoridad es 庚."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 戊. 戊 no está contenido en 酉."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 庚. 庚 está contenido en 酉 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [甲申](/guide/pillar-gap-sin) y el siguiente es [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Está formado por [Madera Yin (乙)](/guide/stem-eul) y [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丙戌",
    "summary": "Cómo lee Saju-Link el pilar del día 丙戌 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丙戌 es el pilar del día número 23 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丙戌, el tronco del día es 丙 (Fuego Yang) y la rama del día es 戌 (el Perro). En el ciclo sexagenario es la combinación número 23."
          },
          {
            "p": "Saju-Link llama «Fuego Yang (丙)» a la persona cuyo tronco del día es 丙, y la línea que muestra la pantalla de resultados es: \"El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 戌",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丙, los troncos que contiene 戌 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丙戌",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丙"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Rival (劫財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丙 como tronco del día, la Riqueza estable es 辛 y la Autoridad es 癸."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 辛. 辛 está contenido en 戌 (residual (餘氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 癸. 癸 no está contenido en 戌."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [乙酉](/guide/pillar-eul-yu) y el siguiente es [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Está formado por [Fuego Yang (丙)](/guide/stem-byeong) y [戌 (Perro)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丁亥",
    "summary": "Cómo lee Saju-Link el pilar del día 丁亥 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丁亥 es el pilar del día número 24 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丁亥, el tronco del día es 丁 (Fuego Yin) y la rama del día es 亥 (el Cerdo). En el ciclo sexagenario es la combinación número 24."
          },
          {
            "p": "Saju-Link llama «Fuego Yin (丁)» a la persona cuyo tronco del día es 丁, y la línea que muestra la pantalla de resultados es: \"Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 亥",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丁, los troncos que contiene 亥 son los siguientes. El tronco principal (壬) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丁亥",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丁"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Madera Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Sostén (正印)"
                ],
                [
                  "Agua Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Autoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丁 como tronco del día, la Riqueza estable es 庚 y la Autoridad es 壬."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 庚. 庚 no está contenido en 亥."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 壬. 壬 está contenido en 亥 (principal (本氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丙戌](/guide/pillar-byeong-sul) y el siguiente es [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Está formado por [Fuego Yin (丁)](/guide/stem-jeong) y [亥 (Cerdo)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 戊子",
    "summary": "Cómo lee Saju-Link el pilar del día 戊子 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "戊子 es el pilar del día número 25 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 戊子, el tronco del día es 戊 (Tierra Yang) y la rama del día es 子 (la Rata). En el ciclo sexagenario es la combinación número 25."
          },
          {
            "p": "Saju-Link llama «Tierra Yang (戊)» a la persona cuyo tronco del día es 戊, y la línea que muestra la pantalla de resultados es: \"Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 子",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 戊, los troncos que contiene 子 son los siguientes. El tronco principal (癸) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 戊子",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 戊"
              ],
              "rows": [
                [
                  "Agua Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Agua Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Riqueza estable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 戊 como tronco del día, la Riqueza estable es 癸 y la Autoridad es 乙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 癸. 癸 está contenido en 子 (principal (本氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 乙. 乙 no está contenido en 子."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丁亥](/guide/pillar-jeong-hae) y el siguiente es [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Está formado por [Tierra Yang (戊)](/guide/stem-mu) y [子 (Rata)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 己丑",
    "summary": "Cómo lee Saju-Link el pilar del día 己丑 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "己丑 es el pilar del día número 26 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 己丑, el tronco del día es 己 (Tierra Yin) y la rama del día es 丑 (el Buey). En el ciclo sexagenario es la combinación número 26."
          },
          {
            "p": "Saju-Link llama «Tierra Yin (己)» a la persona cuyo tronco del día es 己, y la línea que muestra la pantalla de resultados es: \"Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 丑",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 己, los troncos que contiene 丑 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 己丑",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 己"
              ],
              "rows": [
                [
                  "Agua Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 己 como tronco del día, la Riqueza estable es 壬 y la Autoridad es 甲."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 壬. 壬 no está contenido en 丑."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 甲. 甲 no está contenido en 丑."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [戊子](/guide/pillar-mu-ja) y el siguiente es [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Está formado por [Tierra Yin (己)](/guide/stem-gi) y [丑 (Buey)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 庚寅",
    "summary": "Cómo lee Saju-Link el pilar del día 庚寅 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "庚寅 es el pilar del día número 27 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 庚寅, el tronco del día es 庚 (Metal Yang) y la rama del día es 寅 (el Tigre). En el ciclo sexagenario es la combinación número 27."
          },
          {
            "p": "Saju-Link llama «Metal Yang (庚)» a la persona cuyo tronco del día es 庚, y la línea que muestra la pantalla de resultados es: \"Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 寅",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 庚, los troncos que contiene 寅 son los siguientes. El tronco principal (甲) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 庚寅",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 庚"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Fuego Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Retador (偏官)"
                ],
                [
                  "Madera Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 庚 como tronco del día, la Riqueza estable es 乙 y la Autoridad es 丁."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 乙. 乙 no está contenido en 寅."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丁. 丁 no está contenido en 寅."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [己丑](/guide/pillar-gi-chuk) y el siguiente es [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Está formado por [Metal Yang (庚)](/guide/stem-gyeong) y [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 辛卯",
    "summary": "Cómo lee Saju-Link el pilar del día 辛卯 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "辛卯 es el pilar del día número 28 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 辛卯, el tronco del día es 辛 (Metal Yin) y la rama del día es 卯 (el Conejo). En el ciclo sexagenario es la combinación número 28."
          },
          {
            "p": "Saju-Link llama «Metal Yin (辛)» a la persona cuyo tronco del día es 辛, y la línea que muestra la pantalla de resultados es: \"Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 卯",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 辛, los troncos que contiene 卯 son los siguientes. El tronco principal (乙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 辛卯",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 辛"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Madera Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 辛 como tronco del día, la Riqueza estable es 甲 y la Autoridad es 丙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 甲. 甲 está contenido en 卯 (residual (餘氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丙. 丙 no está contenido en 卯."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [庚寅](/guide/pillar-gyeong-in) y el siguiente es [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Está formado por [Metal Yin (辛)](/guide/stem-sin) y [卯 (Conejo)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 壬辰",
    "summary": "Cómo lee Saju-Link el pilar del día 壬辰 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "壬辰 es el pilar del día número 29 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 壬辰, el tronco del día es 壬 (Agua Yang) y la rama del día es 辰 (el Dragón). En el ciclo sexagenario es la combinación número 29."
          },
          {
            "p": "Saju-Link llama «Agua Yang (壬)» a la persona cuyo tronco del día es 壬, y la línea que muestra la pantalla de resultados es: \"Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 辰",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 壬, los troncos que contiene 辰 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 壬辰",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 壬"
              ],
              "rows": [
                [
                  "Madera Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Agua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Rival (劫財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 壬 como tronco del día, la Riqueza estable es 丁 y la Autoridad es 己."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丁. 丁 no está contenido en 辰."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 己. 己 no está contenido en 辰."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [辛卯](/guide/pillar-sin-myo) y el siguiente es [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Está formado por [Agua Yang (壬)](/guide/stem-im) y [辰 (Dragón)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 癸巳",
    "summary": "Cómo lee Saju-Link el pilar del día 癸巳 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "癸巳 es el pilar del día número 30 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 癸巳, el tronco del día es 癸 (Agua Yin) y la rama del día es 巳 (la Serpiente). En el ciclo sexagenario es la combinación número 30."
          },
          {
            "p": "Saju-Link llama «Agua Yin (癸)» a la persona cuyo tronco del día es 癸, y la línea que muestra la pantalla de resultados es: \"Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 巳",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 癸, los troncos que contiene 巳 son los siguientes. El tronco principal (丙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 癸巳",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 癸"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Autoridad (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Sostén (正印)"
                ],
                [
                  "Fuego Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Riqueza estable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 癸 como tronco del día, la Riqueza estable es 丙 y la Autoridad es 戊."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丙. 丙 está contenido en 巳 (principal (本氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 戊. 戊 está contenido en 巳 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [壬辰](/guide/pillar-im-jin) y el siguiente es [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Está formado por [Agua Yin (癸)](/guide/stem-gye) y [巳 (Serpiente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 甲午",
    "summary": "Cómo lee Saju-Link el pilar del día 甲午 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "甲午 es el pilar del día número 31 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 甲午, el tronco del día es 甲 (Madera Yang) y la rama del día es 午 (el Caballo). En el ciclo sexagenario es la combinación número 31."
          },
          {
            "p": "Saju-Link llama «Madera Yang (甲)» a la persona cuyo tronco del día es 甲, y la línea que muestra la pantalla de resultados es: \"Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 午",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 甲, los troncos que contiene 午 son los siguientes. El tronco principal (丁) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 甲午",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 甲"
              ],
              "rows": [
                [
                  "Fuego Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Expresión (食神)"
                ],
                [
                  "Tierra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 甲 como tronco del día, la Riqueza estable es 己 y la Autoridad es 辛."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 己. 己 está contenido en 午 (intermedio (中氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 辛. 辛 no está contenido en 午."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [癸巳](/guide/pillar-gye-sa) y el siguiente es [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Está formado por [Madera Yang (甲)](/guide/stem-gap) y [午 (Caballo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 乙未",
    "summary": "Cómo lee Saju-Link el pilar del día 乙未 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "乙未 es el pilar del día número 32 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 乙未, el tronco del día es 乙 (Madera Yin) y la rama del día es 未 (la Oveja). En el ciclo sexagenario es la combinación número 32."
          },
          {
            "p": "Saju-Link llama «Madera Yin (乙)» a la persona cuyo tronco del día es 乙, y la línea que muestra la pantalla de resultados es: \"Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 未",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 乙, los troncos que contiene 未 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 乙未",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 乙"
              ],
              "rows": [
                [
                  "Fuego Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Expresión (食神)"
                ],
                [
                  "Madera Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 乙 como tronco del día, la Riqueza estable es 戊 y la Autoridad es 庚."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 戊. 戊 no está contenido en 未."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 庚. 庚 no está contenido en 未."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [甲午](/guide/pillar-gap-o) y el siguiente es [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Está formado por [Madera Yin (乙)](/guide/stem-eul) y [未 (Oveja)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丙申",
    "summary": "Cómo lee Saju-Link el pilar del día 丙申 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丙申 es el pilar del día número 33 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丙申, el tronco del día es 丙 (Fuego Yang) y la rama del día es 申 (el Mono). En el ciclo sexagenario es la combinación número 33."
          },
          {
            "p": "Saju-Link llama «Fuego Yang (丙)» a la persona cuyo tronco del día es 丙, y la línea que muestra la pantalla de resultados es: \"El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 申",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丙, los troncos que contiene 申 son los siguientes. El tronco principal (庚) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丙申",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丙"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Expresión (食神)"
                ],
                [
                  "Agua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Retador (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丙 como tronco del día, la Riqueza estable es 辛 y la Autoridad es 癸."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 辛. 辛 no está contenido en 申."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 癸. 癸 no está contenido en 申."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [乙未](/guide/pillar-eul-mi) y el siguiente es [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Está formado por [Fuego Yang (丙)](/guide/stem-byeong) y [申 (Mono)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丁酉",
    "summary": "Cómo lee Saju-Link el pilar del día 丁酉 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丁酉 es el pilar del día número 34 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丁酉, el tronco del día es 丁 (Fuego Yin) y la rama del día es 酉 (el Gallo). En el ciclo sexagenario es la combinación número 34."
          },
          {
            "p": "Saju-Link llama «Fuego Yin (丁)» a la persona cuyo tronco del día es 丁, y la línea que muestra la pantalla de resultados es: \"Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 酉",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丁, los troncos que contiene 酉 son los siguientes. El tronco principal (辛) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丁酉",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丁"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丁 como tronco del día, la Riqueza estable es 庚 y la Autoridad es 壬."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 庚. 庚 está contenido en 酉 (residual (餘氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 壬. 壬 no está contenido en 酉."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丙申](/guide/pillar-byeong-sin) y el siguiente es [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Está formado por [Fuego Yin (丁)](/guide/stem-jeong) y [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 戊戌",
    "summary": "Cómo lee Saju-Link el pilar del día 戊戌 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "戊戌 es el pilar del día número 35 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 戊戌, el tronco del día es 戊 (Tierra Yang) y la rama del día es 戌 (el Perro). En el ciclo sexagenario es la combinación número 35."
          },
          {
            "p": "Saju-Link llama «Tierra Yang (戊)» a la persona cuyo tronco del día es 戊, y la línea que muestra la pantalla de resultados es: \"Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 戌",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 戊, los troncos que contiene 戌 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 戊戌",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 戊"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Sostén (正印)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 戊 como tronco del día, la Riqueza estable es 癸 y la Autoridad es 乙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 癸. 癸 no está contenido en 戌."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 乙. 乙 no está contenido en 戌."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丁酉](/guide/pillar-jeong-yu) y el siguiente es [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Está formado por [Tierra Yang (戊)](/guide/stem-mu) y [戌 (Perro)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 己亥",
    "summary": "Cómo lee Saju-Link el pilar del día 己亥 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "己亥 es el pilar del día número 36 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 己亥, el tronco del día es 己 (Tierra Yin) y la rama del día es 亥 (el Cerdo). En el ciclo sexagenario es la combinación número 36."
          },
          {
            "p": "Saju-Link llama «Tierra Yin (己)» a la persona cuyo tronco del día es 己, y la línea que muestra la pantalla de resultados es: \"Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 亥",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 己, los troncos que contiene 亥 son los siguientes. El tronco principal (壬) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 己亥",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 己"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Madera Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Autoridad (正官)"
                ],
                [
                  "Agua Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Riqueza estable (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 己 como tronco del día, la Riqueza estable es 壬 y la Autoridad es 甲."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 壬. 壬 está contenido en 亥 (principal (本氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 甲. 甲 está contenido en 亥 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [戊戌](/guide/pillar-mu-sul) y el siguiente es [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Está formado por [Tierra Yin (己)](/guide/stem-gi) y [亥 (Cerdo)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 庚子",
    "summary": "Cómo lee Saju-Link el pilar del día 庚子 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "庚子 es el pilar del día número 37 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 庚子, el tronco del día es 庚 (Metal Yang) y la rama del día es 子 (la Rata). En el ciclo sexagenario es la combinación número 37."
          },
          {
            "p": "Saju-Link llama «Metal Yang (庚)» a la persona cuyo tronco del día es 庚, y la línea que muestra la pantalla de resultados es: \"Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 子",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 庚, los troncos que contiene 子 son los siguientes. El tronco principal (癸) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 庚子",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 庚"
              ],
              "rows": [
                [
                  "Agua Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Expresión (食神)"
                ],
                [
                  "Agua Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 庚 como tronco del día, la Riqueza estable es 乙 y la Autoridad es 丁."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 乙. 乙 no está contenido en 子."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丁. 丁 no está contenido en 子."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [己亥](/guide/pillar-gi-hae) y el siguiente es [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Está formado por [Metal Yang (庚)](/guide/stem-gyeong) y [子 (Rata)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 辛丑",
    "summary": "Cómo lee Saju-Link el pilar del día 辛丑 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "辛丑 es el pilar del día número 38 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 辛丑, el tronco del día es 辛 (Metal Yin) y la rama del día es 丑 (el Buey). En el ciclo sexagenario es la combinación número 38."
          },
          {
            "p": "Saju-Link llama «Metal Yin (辛)» a la persona cuyo tronco del día es 辛, y la línea que muestra la pantalla de resultados es: \"Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 丑",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 辛, los troncos que contiene 丑 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 辛丑",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 辛"
              ],
              "rows": [
                [
                  "Agua Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Expresión (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 辛 como tronco del día, la Riqueza estable es 甲 y la Autoridad es 丙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 甲. 甲 no está contenido en 丑."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丙. 丙 no está contenido en 丑."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [庚子](/guide/pillar-gyeong-ja) y el siguiente es [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Está formado por [Metal Yin (辛)](/guide/stem-sin) y [丑 (Buey)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 壬寅",
    "summary": "Cómo lee Saju-Link el pilar del día 壬寅 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "壬寅 es el pilar del día número 39 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 壬寅, el tronco del día es 壬 (Agua Yang) y la rama del día es 寅 (el Tigre). En el ciclo sexagenario es la combinación número 39."
          },
          {
            "p": "Saju-Link llama «Agua Yang (壬)» a la persona cuyo tronco del día es 壬, y la línea que muestra la pantalla de resultados es: \"Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 寅",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 壬, los troncos que contiene 寅 son los siguientes. El tronco principal (甲) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 壬寅",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 壬"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Retador (偏官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Madera Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 壬 como tronco del día, la Riqueza estable es 丁 y la Autoridad es 己."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丁. 丁 no está contenido en 寅."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 己. 己 no está contenido en 寅."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [辛丑](/guide/pillar-sin-chuk) y el siguiente es [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Está formado por [Agua Yang (壬)](/guide/stem-im) y [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 癸卯",
    "summary": "Cómo lee Saju-Link el pilar del día 癸卯 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "癸卯 es el pilar del día número 40 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 癸卯, el tronco del día es 癸 (Agua Yin) y la rama del día es 卯 (el Conejo). En el ciclo sexagenario es la combinación número 40."
          },
          {
            "p": "Saju-Link llama «Agua Yin (癸)» a la persona cuyo tronco del día es 癸, y la línea que muestra la pantalla de resultados es: \"Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 卯",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 癸, los troncos que contiene 卯 son los siguientes. El tronco principal (乙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 癸卯",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 癸"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Madera Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 癸 como tronco del día, la Riqueza estable es 丙 y la Autoridad es 戊."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丙. 丙 no está contenido en 卯."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 戊. 戊 no está contenido en 卯."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [壬寅](/guide/pillar-im-in) y el siguiente es [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Está formado por [Agua Yin (癸)](/guide/stem-gye) y [卯 (Conejo)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 甲辰",
    "summary": "Cómo lee Saju-Link el pilar del día 甲辰 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "甲辰 es el pilar del día número 41 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 甲辰, el tronco del día es 甲 (Madera Yang) y la rama del día es 辰 (el Dragón). En el ciclo sexagenario es la combinación número 41."
          },
          {
            "p": "Saju-Link llama «Madera Yang (甲)» a la persona cuyo tronco del día es 甲, y la línea que muestra la pantalla de resultados es: \"Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 辰",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 甲, los troncos que contiene 辰 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 甲辰",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 甲"
              ],
              "rows": [
                [
                  "Madera Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Agua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Sostén (正印)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Fortuna inesperada (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 甲 como tronco del día, la Riqueza estable es 己 y la Autoridad es 辛."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 己. 己 no está contenido en 辰."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 辛. 辛 no está contenido en 辰."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [癸卯](/guide/pillar-gye-myo) y el siguiente es [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Está formado por [Madera Yang (甲)](/guide/stem-gap) y [辰 (Dragón)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 乙巳",
    "summary": "Cómo lee Saju-Link el pilar del día 乙巳 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "乙巳 es el pilar del día número 42 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 乙巳, el tronco del día es 乙 (Madera Yin) y la rama del día es 巳 (la Serpiente). En el ciclo sexagenario es la combinación número 42."
          },
          {
            "p": "Saju-Link llama «Madera Yin (乙)» a la persona cuyo tronco del día es 乙, y la línea que muestra la pantalla de resultados es: \"Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 巳",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 乙, los troncos que contiene 巳 son los siguientes. El tronco principal (丙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 乙巳",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 乙"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Autoridad (正官)"
                ],
                [
                  "Fuego Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 乙 como tronco del día, la Riqueza estable es 戊 y la Autoridad es 庚."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 戊. 戊 está contenido en 巳 (residual (餘氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 庚. 庚 está contenido en 巳 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [甲辰](/guide/pillar-gap-jin) y el siguiente es [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Está formado por [Madera Yin (乙)](/guide/stem-eul) y [巳 (Serpiente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丙午",
    "summary": "Cómo lee Saju-Link el pilar del día 丙午 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丙午 es el pilar del día número 43 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丙午, el tronco del día es 丙 (Fuego Yang) y la rama del día es 午 (el Caballo). En el ciclo sexagenario es la combinación número 43."
          },
          {
            "p": "Saju-Link llama «Fuego Yang (丙)» a la persona cuyo tronco del día es 丙, y la línea que muestra la pantalla de resultados es: \"El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 午",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丙, los troncos que contiene 午 son los siguientes. El tronco principal (丁) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丙午",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丙"
              ],
              "rows": [
                [
                  "Fuego Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Compañero (比肩)"
                ],
                [
                  "Tierra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Fuego Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丙 como tronco del día, la Riqueza estable es 辛 y la Autoridad es 癸."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 辛. 辛 no está contenido en 午."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 癸. 癸 no está contenido en 午."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [乙巳](/guide/pillar-eul-sa) y el siguiente es [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Está formado por [Fuego Yang (丙)](/guide/stem-byeong) y [午 (Caballo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丁未",
    "summary": "Cómo lee Saju-Link el pilar del día 丁未 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丁未 es el pilar del día número 44 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丁未, el tronco del día es 丁 (Fuego Yin) y la rama del día es 未 (la Oveja). En el ciclo sexagenario es la combinación número 44."
          },
          {
            "p": "Saju-Link llama «Fuego Yin (丁)» a la persona cuyo tronco del día es 丁, y la línea que muestra la pantalla de resultados es: \"Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 未",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丁, los troncos que contiene 未 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丁未",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丁"
              ],
              "rows": [
                [
                  "Fuego Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Compañero (比肩)"
                ],
                [
                  "Madera Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丁 como tronco del día, la Riqueza estable es 庚 y la Autoridad es 壬."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 庚. 庚 no está contenido en 未."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 壬. 壬 no está contenido en 未."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丙午](/guide/pillar-byeong-o) y el siguiente es [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Está formado por [Fuego Yin (丁)](/guide/stem-jeong) y [未 (Oveja)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 戊申",
    "summary": "Cómo lee Saju-Link el pilar del día 戊申 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "戊申 es el pilar del día número 45 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 戊申, el tronco del día es 戊 (Tierra Yang) y la rama del día es 申 (el Mono). En el ciclo sexagenario es la combinación número 45."
          },
          {
            "p": "Saju-Link llama «Tierra Yang (戊)» a la persona cuyo tronco del día es 戊, y la línea que muestra la pantalla de resultados es: \"Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 申",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 戊, los troncos que contiene 申 son los siguientes. El tronco principal (庚) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 戊申",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 戊"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Compañero (比肩)"
                ],
                [
                  "Agua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 戊 como tronco del día, la Riqueza estable es 癸 y la Autoridad es 乙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 癸. 癸 no está contenido en 申."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 乙. 乙 no está contenido en 申."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丁未](/guide/pillar-jeong-mi) y el siguiente es [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Está formado por [Tierra Yang (戊)](/guide/stem-mu) y [申 (Mono)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 己酉",
    "summary": "Cómo lee Saju-Link el pilar del día 己酉 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "己酉 es el pilar del día número 46 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 己酉, el tronco del día es 己 (Tierra Yin) y la rama del día es 酉 (el Gallo). En el ciclo sexagenario es la combinación número 46."
          },
          {
            "p": "Saju-Link llama «Tierra Yin (己)» a la persona cuyo tronco del día es 己, y la línea que muestra la pantalla de resultados es: \"Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 酉",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 己, los troncos que contiene 酉 son los siguientes. El tronco principal (辛) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 己酉",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 己"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 己 como tronco del día, la Riqueza estable es 壬 y la Autoridad es 甲."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 壬. 壬 no está contenido en 酉."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 甲. 甲 no está contenido en 酉."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [戊申](/guide/pillar-mu-sin) y el siguiente es [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Está formado por [Tierra Yin (己)](/guide/stem-gi) y [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 庚戌",
    "summary": "Cómo lee Saju-Link el pilar del día 庚戌 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "庚戌 es el pilar del día número 47 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 庚戌, el tronco del día es 庚 (Metal Yang) y la rama del día es 戌 (el Perro). En el ciclo sexagenario es la combinación número 47."
          },
          {
            "p": "Saju-Link llama «Metal Yang (庚)» a la persona cuyo tronco del día es 庚, y la línea que muestra la pantalla de resultados es: \"Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 戌",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 庚, los troncos que contiene 戌 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 庚戌",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 庚"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Autoridad (正官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Apoyo poco convencional (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 庚 como tronco del día, la Riqueza estable es 乙 y la Autoridad es 丁."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 乙. 乙 no está contenido en 戌."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丁. 丁 está contenido en 戌 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [己酉](/guide/pillar-gi-yu) y el siguiente es [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Está formado por [Metal Yang (庚)](/guide/stem-gyeong) y [戌 (Perro)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 辛亥",
    "summary": "Cómo lee Saju-Link el pilar del día 辛亥 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "辛亥 es el pilar del día número 48 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 辛亥, el tronco del día es 辛 (Metal Yin) y la rama del día es 亥 (el Cerdo). En el ciclo sexagenario es la combinación número 48."
          },
          {
            "p": "Saju-Link llama «Metal Yin (辛)» a la persona cuyo tronco del día es 辛, y la línea que muestra la pantalla de resultados es: \"Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 亥",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 辛, los troncos que contiene 亥 son los siguientes. El tronco principal (壬) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 辛亥",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 辛"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Sostén (正印)"
                ],
                [
                  "Madera Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Agua Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Perturbador (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 辛 como tronco del día, la Riqueza estable es 甲 y la Autoridad es 丙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 甲. 甲 está contenido en 亥 (intermedio (中氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丙. 丙 no está contenido en 亥."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [庚戌](/guide/pillar-gyeong-sul) y el siguiente es [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Está formado por [Metal Yin (辛)](/guide/stem-sin) y [亥 (Cerdo)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 壬子",
    "summary": "Cómo lee Saju-Link el pilar del día 壬子 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "壬子 es el pilar del día número 49 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 壬子, el tronco del día es 壬 (Agua Yang) y la rama del día es 子 (la Rata). En el ciclo sexagenario es la combinación número 49."
          },
          {
            "p": "Saju-Link llama «Agua Yang (壬)» a la persona cuyo tronco del día es 壬, y la línea que muestra la pantalla de resultados es: \"Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 子",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 壬, los troncos que contiene 子 son los siguientes. El tronco principal (癸) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 壬子",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 壬"
              ],
              "rows": [
                [
                  "Agua Yang (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Compañero (比肩)"
                ],
                [
                  "Agua Yin (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 壬 como tronco del día, la Riqueza estable es 丁 y la Autoridad es 己."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丁. 丁 no está contenido en 子."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 己. 己 no está contenido en 子."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [辛亥](/guide/pillar-sin-hae) y el siguiente es [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Está formado por [Agua Yang (壬)](/guide/stem-im) y [子 (Rata)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 癸丑",
    "summary": "Cómo lee Saju-Link el pilar del día 癸丑 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "癸丑 es el pilar del día número 50 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 癸丑, el tronco del día es 癸 (Agua Yin) y la rama del día es 丑 (el Buey). En el ciclo sexagenario es la combinación número 50."
          },
          {
            "p": "Saju-Link llama «Agua Yin (癸)» a la persona cuyo tronco del día es 癸, y la línea que muestra la pantalla de resultados es: \"Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 丑",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 癸, los troncos que contiene 丑 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 癸丑",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 癸"
              ],
              "rows": [
                [
                  "Agua Yin (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Compañero (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "intermedio (中氣)",
                  "{hidChukJung}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 癸 como tronco del día, la Riqueza estable es 丙 y la Autoridad es 戊."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丙. 丙 no está contenido en 丑."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 戊. 戊 no está contenido en 丑."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [壬子](/guide/pillar-im-ja) y el siguiente es [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Está formado por [Agua Yin (癸)](/guide/stem-gye) y [丑 (Buey)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 甲寅",
    "summary": "Cómo lee Saju-Link el pilar del día 甲寅 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "甲寅 es el pilar del día número 51 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 甲寅, el tronco del día es 甲 (Madera Yang) y la rama del día es 寅 (el Tigre). En el ciclo sexagenario es la combinación número 51."
          },
          {
            "p": "Saju-Link llama «Madera Yang (甲)» a la persona cuyo tronco del día es 甲, y la línea que muestra la pantalla de resultados es: \"Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 寅",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 甲, los troncos que contiene 寅 son los siguientes. El tronco principal (甲) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 甲寅",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 甲"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Fortuna inesperada (偏財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "intermedio (中氣)",
                  "{hidInJung}",
                  "Expresión (食神)"
                ],
                [
                  "Madera Yang (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 甲 como tronco del día, la Riqueza estable es 己 y la Autoridad es 辛."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 己. 己 no está contenido en 寅."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 辛. 辛 no está contenido en 寅."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [癸丑](/guide/pillar-gye-chuk) y el siguiente es [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Está formado por [Madera Yang (甲)](/guide/stem-gap) y [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 乙卯",
    "summary": "Cómo lee Saju-Link el pilar del día 乙卯 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "乙卯 es el pilar del día número 52 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 乙卯, el tronco del día es 乙 (Madera Yin) y la rama del día es 卯 (el Conejo). En el ciclo sexagenario es la combinación número 52."
          },
          {
            "p": "Saju-Link llama «Madera Yin (乙)» a la persona cuyo tronco del día es 乙, y la línea que muestra la pantalla de resultados es: \"Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 卯",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 乙, los troncos que contiene 卯 son los siguientes. El tronco principal (乙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 乙卯",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 乙"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Madera Yin (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 乙 como tronco del día, la Riqueza estable es 戊 y la Autoridad es 庚."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 戊. 戊 no está contenido en 卯."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 庚. 庚 no está contenido en 卯."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [甲寅](/guide/pillar-gap-in) y el siguiente es [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Está formado por [Madera Yin (乙)](/guide/stem-eul) y [卯 (Conejo)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丙辰",
    "summary": "Cómo lee Saju-Link el pilar del día 丙辰 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丙辰 es el pilar del día número 53 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丙辰, el tronco del día es 丙 (Fuego Yang) y la rama del día es 辰 (el Dragón). En el ciclo sexagenario es la combinación número 53."
          },
          {
            "p": "Saju-Link llama «Fuego Yang (丙)» a la persona cuyo tronco del día es 丙, y la línea que muestra la pantalla de resultados es: \"El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 辰",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丙, los troncos que contiene 辰 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丙辰",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丙"
              ],
              "rows": [
                [
                  "Madera Yin (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Sostén (正印)"
                ],
                [
                  "Agua Yin (癸)",
                  "intermedio (中氣)",
                  "{hidJinJung}",
                  "Autoridad (正官)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Expresión (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丙 como tronco del día, la Riqueza estable es 辛 y la Autoridad es 癸."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 辛. 辛 no está contenido en 辰."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 癸. 癸 está contenido en 辰 (intermedio (中氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [乙卯](/guide/pillar-eul-myo) y el siguiente es [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Está formado por [Fuego Yang (丙)](/guide/stem-byeong) y [辰 (Dragón)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 丁巳",
    "summary": "Cómo lee Saju-Link el pilar del día 丁巳 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "丁巳 es el pilar del día número 54 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 丁巳, el tronco del día es 丁 (Fuego Yin) y la rama del día es 巳 (la Serpiente). En el ciclo sexagenario es la combinación número 54."
          },
          {
            "p": "Saju-Link llama «Fuego Yin (丁)» a la persona cuyo tronco del día es 丁, y la línea que muestra la pantalla de resultados es: \"Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 巳",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 丁, los troncos que contiene 巳 son los siguientes. El tronco principal (丙) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 丁巳",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 丁"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Perturbador (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "intermedio (中氣)",
                  "{hidSaJung}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Fuego Yang (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 丁 como tronco del día, la Riqueza estable es 庚 y la Autoridad es 壬."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 庚. 庚 está contenido en 巳 (intermedio (中氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 壬. 壬 no está contenido en 巳."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丙辰](/guide/pillar-byeong-jin) y el siguiente es [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Está formado por [Fuego Yin (丁)](/guide/stem-jeong) y [巳 (Serpiente)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 戊午",
    "summary": "Cómo lee Saju-Link el pilar del día 戊午 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "戊午 es el pilar del día número 55 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 戊午, el tronco del día es 戊 (Tierra Yang) y la rama del día es 午 (el Caballo). En el ciclo sexagenario es la combinación número 55."
          },
          {
            "p": "Saju-Link llama «Tierra Yang (戊)» a la persona cuyo tronco del día es 戊, y la línea que muestra la pantalla de resultados es: \"Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 午",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 戊, los troncos que contiene 午 son los siguientes. El tronco principal (丁) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 戊午",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 戊"
              ],
              "rows": [
                [
                  "Fuego Yang (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Tierra Yin (己)",
                  "intermedio (中氣)",
                  "{hidOJung}",
                  "Rival (劫財)"
                ],
                [
                  "Fuego Yin (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Sostén (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 戊 como tronco del día, la Riqueza estable es 癸 y la Autoridad es 乙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 癸. 癸 no está contenido en 午."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 乙. 乙 no está contenido en 午."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [丁巳](/guide/pillar-jeong-sa) y el siguiente es [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Está formado por [Tierra Yang (戊)](/guide/stem-mu) y [午 (Caballo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 己未",
    "summary": "Cómo lee Saju-Link el pilar del día 己未 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "己未 es el pilar del día número 56 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 己未, el tronco del día es 己 (Tierra Yin) y la rama del día es 未 (la Oveja). En el ciclo sexagenario es la combinación número 56."
          },
          {
            "p": "Saju-Link llama «Tierra Yin (己)» a la persona cuyo tronco del día es 己, y la línea que muestra la pantalla de resultados es: \"Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 未",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 己, los troncos que contiene 未 son los siguientes. El tronco principal (己) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 己未",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 己"
              ],
              "rows": [
                [
                  "Fuego Yin (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Madera Yin (乙)",
                  "intermedio (中氣)",
                  "{hidMiJung}",
                  "Retador (偏官)"
                ],
                [
                  "Tierra Yin (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 己 como tronco del día, la Riqueza estable es 壬 y la Autoridad es 甲."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 壬. 壬 no está contenido en 未."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 甲. 甲 no está contenido en 未."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [戊午](/guide/pillar-mu-o) y el siguiente es [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Está formado por [Tierra Yin (己)](/guide/stem-gi) y [未 (Oveja)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 庚申",
    "summary": "Cómo lee Saju-Link el pilar del día 庚申 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "庚申 es el pilar del día número 57 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 庚申, el tronco del día es 庚 (Metal Yang) y la rama del día es 申 (el Mono). En el ciclo sexagenario es la combinación número 57."
          },
          {
            "p": "Saju-Link llama «Metal Yang (庚)» a la persona cuyo tronco del día es 庚, y la línea que muestra la pantalla de resultados es: \"Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 申",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 庚, los troncos que contiene 申 son los siguientes. El tronco principal (庚) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 庚申",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 庚"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Apoyo poco convencional (偏印)"
                ],
                [
                  "Agua Yang (壬)",
                  "intermedio (中氣)",
                  "{hidSinJung}",
                  "Expresión (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 庚 como tronco del día, la Riqueza estable es 乙 y la Autoridad es 丁."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 乙. 乙 no está contenido en 申."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丁. 丁 no está contenido en 申."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [己未](/guide/pillar-gi-mi) y el siguiente es [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Está formado por [Metal Yang (庚)](/guide/stem-gyeong) y [申 (Mono)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 辛酉",
    "summary": "Cómo lee Saju-Link el pilar del día 辛酉 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "辛酉 es el pilar del día número 58 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 辛酉, el tronco del día es 辛 (Metal Yin) y la rama del día es 酉 (el Gallo). En el ciclo sexagenario es la combinación número 58."
          },
          {
            "p": "Saju-Link llama «Metal Yin (辛)» a la persona cuyo tronco del día es 辛, y la línea que muestra la pantalla de resultados es: \"Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 酉",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 辛, los troncos que contiene 酉 son los siguientes. El tronco principal (辛) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 辛酉",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 辛"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Compañero (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 辛 como tronco del día, la Riqueza estable es 甲 y la Autoridad es 丙."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 甲. 甲 no está contenido en 酉."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 丙. 丙 no está contenido en 酉."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [庚申](/guide/pillar-gyeong-sin) y el siguiente es [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Está formado por [Metal Yin (辛)](/guide/stem-sin) y [酉 (Gallo)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 壬戌",
    "summary": "Cómo lee Saju-Link el pilar del día 壬戌 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "壬戌 es el pilar del día número 59 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 壬戌, el tronco del día es 壬 (Agua Yang) y la rama del día es 戌 (el Perro). En el ciclo sexagenario es la combinación número 59."
          },
          {
            "p": "Saju-Link llama «Agua Yang (壬)» a la persona cuyo tronco del día es 壬, y la línea que muestra la pantalla de resultados es: \"Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 戌",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 壬, los troncos que contiene 戌 son los siguientes. El tronco principal (戊) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 壬戌",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 壬"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Sostén (正印)"
                ],
                [
                  "Fuego Yin (丁)",
                  "intermedio (中氣)",
                  "{hidSulJung}",
                  "Riqueza estable (正財)"
                ],
                [
                  "Tierra Yang (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Retador (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 壬 como tronco del día, la Riqueza estable es 丁 y la Autoridad es 己."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丁. 丁 está contenido en 戌 (intermedio (中氣))."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 己. 己 no está contenido en 戌."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [辛酉](/guide/pillar-sin-yu) y el siguiente es [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Está formado por [Agua Yang (壬)](/guide/stem-im) y [戌 (Perro)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Pilares del día",
    "title": "El pilar del día 癸亥",
    "summary": "Cómo lee Saju-Link el pilar del día 癸亥 — qué son los troncos que contiene la rama del día para el tronco del día — expuesto exactamente como lo establecen sus reglas de cálculo.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "癸亥 es el pilar del día número 60 del ciclo sexagenario",
        "blocks": [
          {
            "p": "Cuando el par tronco-rama del día de nacimiento es 癸亥, el tronco del día es 癸 (Agua Yin) y la rama del día es 亥 (el Cerdo). En el ciclo sexagenario es la combinación número 60."
          },
          {
            "p": "Saju-Link llama «Agua Yin (癸)» a la persona cuyo tronco del día es 癸, y la línea que muestra la pantalla de resultados es: \"Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras.\" Esta línea no tiene nada que ver con la lectura de abajo ni con las puntuaciones."
          }
        ]
      },
      {
        "title": "Qué son para el tronco del día los troncos que contiene la rama del día 亥",
        "blocks": [
          {
            "p": "La rama del día es la posición del cónyuge. Leídos desde el tronco del día 癸, los troncos que contiene 亥 son los siguientes. El tronco principal (壬) es la energía representativa de la rama."
          },
          {
            "table": {
              "caption": "Los troncos ocultos de la rama del día de 癸亥",
              "head": [
                "Tronco oculto",
                "Posición",
                "Proporción",
                "Para el tronco del día 癸"
              ],
              "rows": [
                [
                  "Tierra Yang (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Autoridad (正官)"
                ],
                [
                  "Madera Yang (甲)",
                  "intermedio (中氣)",
                  "{hidHaeJung}",
                  "Perturbador (傷官)"
                ],
                [
                  "Agua Yang (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "La posición del cónyuge y este pilar del día",
        "blocks": [
          {
            "p": "La myeongri tradicional lee la posición del cónyuge como Riqueza estable (正財) para los hombres y Autoridad (正官) para las mujeres. Con 癸 como tronco del día, la Riqueza estable es 丙 y la Autoridad es 戊."
          },
          {
            "p": "Para los hombres, la posición del cónyuge (Riqueza estable) es 丙. 丙 no está contenido en 亥."
          },
          {
            "p": "Para las mujeres, la posición del cónyuge (Autoridad) es 戊. 戊 está contenido en 亥 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "Los pilares del día contiguos y los caracteres que componen este pilar",
        "blocks": [
          {
            "p": "En el ciclo sexagenario, el pilar del día anterior es [壬戌](/guide/pillar-im-sul) y el siguiente es [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Está formado por [Agua Yin (癸)](/guide/stem-gye) y [亥 (Cerdo)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo pilar del día no define a una persona ni a una relación. Un saju se lee a partir de cómo se relacionan los ocho caracteres de los cuatro pilares.",
              "La lectura de la posición del cónyuge traslada una regla de la myeongri tradicional, y si no indicas tu género esta posición no se lee."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Para empezar",
    "title": "Troncos celestiales, ramas terrestres y pilar del día: cómo leer los caracteres",
    "summary": "Qué son los ocho caracteres de un saju y qué significan los troncos celestiales, las ramas terrestres y el pilar del día, explicado de forma sencilla con dos tablas.",
    "backLabel": "Base del cálculo",
    "sections": [
      {
        "title": "El saju se escribe con dos tipos de caracteres",
        "blocks": [
          {
            "p": "Los ocho caracteres de un saju se dividen en caracteres superiores e inferiores. El carácter superior es uno de los diez **troncos celestiales (天干)**, y el carácter inferior es una de las doce **ramas terrestres (地支)**."
          },
          {
            "p": "Piensa en el tronco como una etiqueta para un tipo de energía y en la rama como una etiqueta para un momento y un lugar. No necesitas memorizarlos, igual que no memorizas los nombres de los días de la semana; basta con buscarlos en las tablas de abajo. Cómo los cuatro pilares se convierten en ocho caracteres se explica en la [guía de la carta natal](/guide/natal-chart)."
          }
        ]
      },
      {
        "title": "Los diez troncos celestiales",
        "blocks": [
          {
            "p": "Hay diez troncos celestiales. Cada uno de los cinco elementos (Madera, Fuego, Tierra, Metal, Agua) toma dos troncos, y dentro de cada pareja el primero es Yang (陽) y el segundo es Yin (陰)."
          },
          {
            "table": {
              "caption": "Los diez troncos celestiales con su elemento y polaridad",
              "head": [
                "Tronco celestial",
                "Elemento y polaridad"
              ],
              "rows": [
                [
                  "Madera Yang (甲)",
                  "Madera Yang"
                ],
                [
                  "Madera Yin (乙)",
                  "Madera Yin"
                ],
                [
                  "Fuego Yang (丙)",
                  "Fuego Yang"
                ],
                [
                  "Fuego Yin (丁)",
                  "Fuego Yin"
                ],
                [
                  "Tierra Yang (戊)",
                  "Tierra Yang"
                ],
                [
                  "Tierra Yin (己)",
                  "Tierra Yin"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin"
                ],
                [
                  "Agua Yang (壬)",
                  "Agua Yang"
                ],
                [
                  "Agua Yin (癸)",
                  "Agua Yin"
                ]
              ]
            }
          },
          {
            "p": "El tronco del día en que naciste se llama **tronco del día (日干)**, y es el carácter que te señala a ti."
          }
        ]
      },
      {
        "title": "Las doce ramas terrestres",
        "blocks": [
          {
            "p": "Hay doce ramas terrestres, y cada una tiene asociado un animal del zodiaco. Así que las doce ramas son los signos del zodiaco."
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
          },
          {
            "p": "Una rama parece un solo carácter, pero guarda troncos en su interior. Se llaman **troncos ocultos (支藏干)**. Qué troncos contiene una rama y en qué proporción se detalla en la entrada del diccionario de cada rama. Para saber cómo se determina el animal del zodiaco, consulta la [guía del zodiaco](/guide/zodiac)."
          }
        ]
      },
      {
        "title": "El pilar del día: un tronco y una rama emparejados",
        "blocks": [
          {
            "p": "Cada pilar de un saju son dos caracteres: un tronco emparejado con una rama. El pilar del día en que naciste es el **pilar del día (日柱)**."
          },
          {
            "p": "Si se emparejan los troncos y las ramas en orden, se obtienen **sesenta** combinaciones, desde 甲子 y 乙丑 y 丙寅 hasta 癸亥. Este ciclo se llama ciclo sexagenario. Son sesenta y no 10 × 12 = 120 porque un tronco Yang solo se empareja con una rama Yang, y un tronco Yin solo con una rama Yin."
          },
          {
            "p": "El carácter superior del pilar del día es el tronco del día que vimos arriba. Las entradas que explican cada pilar una por una están en los diccionarios de troncos, ramas y pilares del día, al final de la [lista de guías](/guide)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Los Diez Dioses",
    "title": "Los Diez Dioses — Las Diez Posiciones Dentro de Mi Saju",
    "summary": "Basado en el pilar del día, los caracteres restantes se dividen en diez nombres. Se discuten las razones para distinguir entre riqueza regular y riqueza secundaria, incluso si son el mismo elemento de riqueza.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El Pilar del Día Es la Persona Misma",
        "blocks": [
          {
            "p": "Entre los ocho caracteres del saju, el **pilar del día** (el tallo celestial del día de nacimiento) se refiere a la persona misma. Los siete caracteres restantes se leen como el entorno en el que existe ese pilar del día."
          },
          {
            "p": "**Los Diez Dioses** (十神) son las diez divisiones de cómo el pilar del día percibe los otros caracteres. La energía que me nutre es Recurso, la energía que es como yo es Compañero, la energía que doy a luz es Comida y Riqueza, la energía que me suprime es Posición Oficial, y la energía que yo suprimo es Riqueza — estas cinco categorías se dividen aún más en yin y yang, formando diez."
          }
        ]
      },
      {
        "title": "Lo Que Los Siete Caracteres Restantes Significan Para Mí",
        "blocks": [
          {
            "p": "Una vez que se determina el pilar del día, los caracteres restantes en la carta natal reciben cada uno un nombre. La energía que me da vida, la energía que es como yo, la energía que doy a luz, la energía que me suprime, y la energía que yo suprimo — estas cinco ramas se dividen aún más en **diez** a través de yin y yang. Esto son los Diez Dioses."
          },
          {
            "p": "Así, los Diez Dioses no se refieren a relaciones con otros, sino a **las posiciones dentro de mí mismo**. Qué posiciones son gruesas o delgadas indican mis tendencias y la forma en que vivo."
          }
        ]
      },
      {
        "title": "Por Qué Leemos Esto A Través de los Diez Dioses en Lugar de Tres Relaciones Elementales",
        "blocks": [
          {
            "p": "También hay un método para ver la relación del día stem únicamente a través de los tres aspectos de los cinco elementos (apoyo, mismo y opuesto). Es simple, pero **el yin y el yang desaparecen.** 甲 (madera yang) y 乙 (madera yin) se convierten en lo mismo que 甲, que es una representación de 'similaridad', y la relación opuesta se agrupa en una sola puntuación sin dirección ni yin y yang."
          },
          {
            "p": "La posición del cónyuge debe evaluarse de acuerdo con los Diez Dioses en términos de yin y yang. Si los elementos vistos a través de los cinco elementos se mezclan con los vistos a través de los Diez Dioses en un mismo motor, habrá dos estándares para los mismos dos caracteres. Por lo tanto, lo unificamos bajo los Diez Dioses."
          }
        ]
      },
      {
        "title": "La posición del cónyuge es Riqueza Correcta y Oficial Correcto",
        "blocks": [
          {
            "p": "La adivinación tradicional ve la posición del cónyuge de manera diferente según el género. Para los hombres, es **Riqueza Correcta (正財)**, y para las mujeres, es **Oficial Correcto (正官)**. Incluso si son el mismo elemento de riqueza, solo la Riqueza Correcta que está desalineada en yin y yang se considera la posición del cónyuge, mientras que la Riqueza Indirecta se lee no como un cónyuge, sino en términos de actividad y riqueza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si no especificas género, esta posición se omite",
        "blocks": [
          {
            "p": "Esto se debe a que no se puede determinar qué lado, Riqueza Correcta u Oficial Correcto, considerar como la posición del cónyuge. En lugar de adivinar para llenar un valor faltante, leemos los elementos restantes sin ese."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "La fortuna de hoy",
    "title": "¿Cómo resulta la fortuna de hoy?",
    "summary": "El día stem de hoy se compara con la carta natal para puntuar. Se revelan completamente trece relaciones de suprimir y apoyar y siete relaciones de ramas terrestres, junto con todos los veinte elementos y sus respectivas adiciones y sustracciones.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Hoy, también lo establecemos de la misma manera que los ocho caracteres",
        "blocks": [
          {
            "p": "Cada día tiene su propio **el pilar del día (日辰)**. Usando el mismo método que se establece el pilar del día de la carta natal, hoy también tiene un heavenly stem y un earthly branch adjuntos. La fortuna de hoy trata sobre comparar esos dos caracteres con la carta natal."
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
            "p": "Esta es la posición más significativa. Verificamos si la energía de hoy corresponde a la 'energía necesaria en este momento' determinada por [el elemento equilibrante](/guide/yongsin)."
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
                  "Presiona más sobre el lado que ya está desbordado",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "No consideres el elemento adverso como 'todo excepto el elemento equilibrante'",
        "blocks": [
          {
            "p": "Si haces eso, tanto la energía que genera el elemento equilibrante como la energía que suprime el elemento equilibrante se vuelven malas, y las últimas dos filas en la tabla anterior se vuelven indistinguibles. Solo la energía que **empuja más en la dirección opuesta** de acuerdo con el significado de suprimir y apoyar se ve como el elemento adverso."
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
                  "Yo suprimí hoy",
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
        "title": "③ La rama terrestre de hoy se encuentra con las ramas terrestres de la carta natal",
        "blocks": [
          {
            "p": "La rama terrestre de hoy se compara con las ramas terrestres de la carta natal. La tabla de relaciones en sí está en [relaciones de ramas terrestres](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relación",
                "Adición/Sustracción"
              ],
              "rows": [
                [
                  "triada (三合)",
                  "{branchSamhap}"
                ],
                [
                  "seis armonía (六合)",
                  "{branchYukhap}"
                ],
                [
                  "media triada (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discordia silenciosa (怨嗔)",
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
            "p": "Incluso con la misma energía, el significado difiere para un pilar de día fuerte y un pilar de día débil. Por lo tanto, hacemos un último ajuste."
          },
          {
            "table": {
              "head": [
                "Situación",
                "Ajuste"
              ],
              "rows": [
                [
                  "Pilar de día débil pero hoy los apoya",
                  "{weakTodayHelps}"
                ],
                [
                  "Pilar de día fuerte pero hoy reduce apropiadamente la carga",
                  "{strongTodayDrains}"
                ],
                [
                  "Pilar de día fuerte pero hoy refuerza el apoyo",
                  "{strongTodayHelps}"
                ],
                [
                  "Pilar de día débil pero hoy añade a la carga",
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
            "p": "Las cuatro áreas de riqueza, amor, carrera y salud heredan {overallShare} de la puntuación total, mientras que el resto se divide de acuerdo con los Diez Dioses y las relaciones de ramas terrestres relevantes para esas áreas. Por lo tanto, incluso si la puntuación total es la misma, los números por área difieren de persona a persona."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Los números anteriores se leen todos desde la configuración del motor. Si las reglas cambian, este documento también cambiará, y cualquier cambio en la puntuación se publicará primero en el [Aviso](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabla de Relaciones",
    "title": "Relaciones de Ramas Terrestres — Combinación, Choque y Discordia",
    "summary": "Esta es una tabla de relaciones que muestra cómo el pilar de día de hoy interactúa con la carta natal. Revela qué es cada combinación, choque y discordia y cuántos puntos tienen.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Las Ramas Terrestres son Doce Caracteres",
        "blocks": [
          {
            "p": "Las doce ramas terrestres (十二支) son 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Los signos zodiacales comúnmente conocidos — Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Cabra, Mono, Gallo, Perro, Cerdo — están cada uno adjuntos a uno de estos doce caracteres."
          },
          {
            "figure": "branch-wheel",
            "caption": "Cuando los doce caracteres se disponen en un círculo, las relaciones son claramente visibles. El choque (沖) siempre se enfrenta entre sí, mientras que la seis armonía y discordia son pares más cercanos. Estas líneas no están escritas en el texto, sino que se derivan directamente de las reglas de cálculo.",
            "labels": {
              "alt": "Un diagrama que muestra las doce ramas terrestres dispuestas en un círculo con líneas que conectan seis armonía, choque y discordia.",
              "yukhap": "seis armonía",
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
            "p": "En saju, cada uno de los cuatro pilares tiene una rama terrestre. **La lectura de hoy** se determina al emparejar **la rama del día** con las cuatro ramas de la carta natal utilizando la tabla de relaciones a continuación."
          }
        ]
      },
      {
        "title": "Tabla de Relaciones General",
        "blocks": [
          {
            "table": {
              "caption": "En orden de mayor puntuación. Estos son los valores utilizados por Saju-Link.",
              "head": [
                "Relación",
                "Par Correspondiente",
                "Significado",
                "Puntuación"
              ],
              "rows": [
                [
                  "triada (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Cuando los tres caracteres se juntan, forman una formación elemental completa (局). Esta se considera la combinación más fuerte.",
                  "{scoreSamhap}"
                ],
                [
                  "seis armonía (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pares que se atraen entre sí. Esta es la combinación más común ya que consiste en solo dos caracteres.",
                  "{scoreYukhap}"
                ],
                [
                  "media triada (半合)",
                  "Dos caracteres que incluyen uno de los caracteres reales (子·酉·午·卯) de la triada",
                  "Una media triada que incluye un carácter que es central para la formación. No forma una formación elemental completa con solo dos caracteres, lo que la hace inferior a la triada.",
                  "{scoreBanhap}"
                ],
                [
                  "Misma Rama",
                  "子子 · 丑丑 …",
                  "Caracteres que son iguales. Esto significa que se parecen entre sí, pero no implica atracción, por lo que se colocan en el medio.",
                  "{scoreSame}"
                ],
                [
                  "Sin Relación",
                  "Pares que no pertenecen a ninguna de las categorías anteriores o posteriores",
                  "Combinaciones que no tienen una relación especial. Esto sirve como un punto de referencia.",
                  "{scoreNeutral}"
                ],
                [
                  "discordia tranquila (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pares que no pueden separarse a pesar de su desagrado. Parecen tranquilos en la superficie, pero se considera que duran mucho tiempo.",
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
        "title": "triadas y media triadas",
        "blocks": [
          {
            "p": "Una triada requiere que los tres caracteres estén presentes. Dado que hay cuatro ramas terrestres en la carta natal, es posible que la rama del día se combine con ellas, resultando en una triada — en ese momento, recibe una puntuación de {scoreSamhap}. Si solo están involucrados dos caracteres, es una media triada."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Las medias triadas requieren caracteres reales para ser reconocidas",
        "blocks": [
          {
            "p": "También hay un método que cuenta como una media triada si ambos caracteres pertenecen al mismo grupo de triada. Esto permite combinaciones como 申辰, que son difíciles de llamar combinación, a recibir altas puntuaciones. Por lo tanto, este servicio reconoce una media triada solo cuando incluye caracteres reales (子·酉·午·卯), y no considera combinaciones como 申辰·巳丑·寅戌·亥未 como válidas."
          }
        ]
      },
      {
        "title": "Razón para Separar la discordia tranquila",
        "blocks": [
          {
            "p": "Los seis pares de discordia tranquila se ven tan frecuentemente como los choques. Si uno contara solo combinaciones y choques, estos seis pares quedarían todos enterrados bajo la puntuación de sin relación de {scoreNeutral}, por lo que se colocan por separado."
          },
          {
            "p": "Si los choques son pares que colisionan de frente y se muestran prominentemente, la discordia tranquila está sutilmente desalineada. Por lo tanto, se coloca en una puntuación de {scoreWonjin}, que es más alta que los choques ({scoreChung}) pero definitivamente más baja que sin relación ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Las puntuaciones también se asignan para los choques",
        "blocks": [
          {
            "p": "La puntuación de choque más baja es {scoreChung}. Es intencional no dar un valor cercano a 0. En el myeongri tradicional, un choque no es un 'fin' sino una 'colisión', y dar una puntuación cercana al mínimo significaría que el servicio está haciendo una declaración definitiva sobre la relación."
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
    "summary": "El signo zodiacal es la rama terrestre del año en que naciste. Esto explica por qué se extrae del año de saju en lugar del año calendario, y por qué aquellos nacidos a principios de enero o febrero tienen el signo zodiacal del año anterior.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El signo zodiacal es la rama terrestre del año en que naciste.",
        "blocks": [
          {
            "p": "Saju consiste en cuatro pilares: año, mes, día y hora, con cada pilar teniendo un tallo celestial y una rama terrestre. Entre ellos, la **rama terrestre del año**, o rama del año, es el animal al que nos referimos como el signo zodiacal."
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
        "title": "Usamos el año de saju, no el año calendario.",
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
            "p": "Por eso solo pedimos la fecha de nacimiento sin seleccionar el signo zodiacal en la pantalla de entrada. Cuando el motor de saju calcula el año, se alinea automáticamente con el límite de Ipchun. Si se selecciona directamente, alguien nacido a principios de febrero elegiría un signo zodiacal que no coincide con su signo real."
          }
        ]
      },
      {
        "title": "El signo zodiacal es un carácter en saju.",
        "blocks": [
          {
            "p": "Entre los ocho caracteres, el que corresponde al signo zodiacal es **una rama del año**. Los otros siete caracteres —especialmente el tallo del día que se refiere a uno mismo— no tienen relación con el signo zodiacal."
          },
          {
            "p": "Las personas nacidas en el mismo año comparten el mismo signo zodiacal. Por lo tanto, lo que se puede conocer a partir del signo zodiacal es solo tanto como uno de los ocho caracteres. Esta es la razón por la que este servicio no **trata el signo zodiacal por separado o de manera significativa** — la rama del año se calcula para la fuerza y el pilar del día de hoy del juicio del día, al igual que cualquier otra rama terrestre."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aún así, la razón por la que mostramos el signo zodiacal.",
        "blocks": [
          {
            "p": "Es la única posición donde el significado se entiende incluso si no conoces la terminología del myeongri. Si el signo zodiacal se anota junto a la rama del año en la pantalla de la carta natal, se convierte en una pista para leer los otros siete caracteres."
          }
        ]
      },
      {
        "title": "La rama del año permanece igual incluso si no conoces la hora de nacimiento.",
        "blocks": [
          {
            "p": "Si no ingresas la hora, el pilar de la hora se omite y la fuerza de los cinco elementos cambia. Sin embargo, la **rama del año permanece igual** — se determina únicamente por el año en que naciste."
          },
          {
            "p": "Por lo tanto, la historia derivada de la rama del año no cambia incluso para aquellos que no conocen la hora. Inversamente, esto significa que lo que se puede decir basándose únicamente en el signo zodiacal es limitado, independientemente de si se incluye la hora o no."
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
            "p": "El pilar de la hora del saju (時柱) se determina por la posición del sol. Sin embargo, el reloj que vemos utiliza un tiempo estándar único para todo el país, lo que desajusta la posición real del sol."
          },
          {
            "p": "La hora estándar de Corea se basa en la longitud 135° este. La longitud de Seúl es de aproximadamente 127°, por lo que está aproximadamente 8° al oeste, lo que provoca que el sol alcance su cenit más tarde: cuando es mediodía en el reloj, el sol en Seúl aún está antes de su cenit. Esta diferencia es de aproximadamente **32 minutos**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutos cambian el pilar de la hora por una posición",
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
            "p": "Si la longitud es diferente, la cantidad de ajuste también diferirá. Si aplicas el ajuste basado en Seúl a alguien nacido en el extranjero, el pilar de la hora estará significativamente desajustado. Por lo tanto, la pantalla de entrada te pide que selecciones tu lugar de nacimiento, y los cálculos se realizan en función de la longitud y la hora estándar de esa ciudad. Actualmente, hay {cityCount} lugares en la lista."
          },
          {
            "p": "Incluso dentro del mismo país, lugares con longitudes significativamente diferentes (como Estados Unidos, Rusia, Indonesia, etc.) se han dividido en ciudades. **15° de longitud equivalen a un pilar de la hora**."
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
            "p": "Hay una razón por la cual el ajuste no puede calcularse simplemente como \"diferencia de longitud ÷ 15° × 60 minutos.\" La hora estándar en sí ha variado a lo largo de diferentes eras."
          },
          {
            "table": {
              "caption": "Cambios en la hora estándar de Corea — aquellos nacidos en este período estarán desajustados con cálculos simples",
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
            "p": "Dado que el ajuste es de -32 minutos, aquellos nacidos entre las 00:00 y las 00:32 en el reloj estarán a **las 11 PM del día anterior** en el tiempo solar verdadero. Si solo se ajusta la hora hacia atrás y la fecha permanece igual, se escribirá el pilar del día (日柱) como \"11 PM del día anterior.\""
          },
          {
            "p": "Saju-Link también ajustará la fecha en este caso. El carácter sobre el pilar del día se refiere al tallo del día (日干), que indica a mí mismo, por lo que si esto está desajustado, casi todos los elementos en la interpretación estarán desajustados."
          }
        ]
      },
      {
        "title": "No necesitas saber la hora",
        "blocks": [
          {
            "p": "La hora de nacimiento es opcional. Si no la conoces, los cálculos se realizarán sin el pilar de la hora, y este hecho se mostrará en la pantalla de resultados. Dado que esto significa que faltan dos de los ocho caracteres, afectará la evaluación de la fuerza y debilidad de los cinco elementos, por lo que si lo sabes, es más preciso incluirlo."
          },
          {
            "p": "El ramal del año (el animal del zodiaco) es siempre el mismo independientemente de la hora — [porque solo miramos el ramal del año](/guide/zodiac)."
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
            "p": "Una vez que el cálculo se completa, la dirección se ve así."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Lo que sigue **#** son los valores de entrada. Esta parte se llama **fragmento**, que es una sección que **el navegador no envía al servidor**. Este es un comportamiento web estándar y no una regla que creamos — fue diseñado originalmente para indicar una posición dentro de un documento, por lo que el servidor no tiene necesidad de verlo."
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
            "p": "El cálculo en sí se realiza en el servidor. La tabla del almanaque lunar-solar es necesaria para generar el saju, y esa tabla es demasiado grande para enviarse al navegador. Sin embargo, **después de procesar la solicitud, no usamos ese valor en ningún lugar.** No hay código para insertarlo en una base de datos."
          },
          {
            "p": "Los registros mínimos necesarios para la operación se mantienen: un contador para evitar que la misma persona envíe demasiadas solicitudes en poco tiempo. Esto no incluye la fecha de nacimiento, y la IP de acceso no se retiene. Solo se cuenta un valor hash con la fecha, y ese valor cambia cuando cambia el día."
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
              "**Los mismos valores serán recalculados.** No hay caché. Sin embargo, dado que todas las reglas son determinísticas, [la misma entrada siempre dará el mismo valor](/guide/natal-chart).",
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
            "p": "Para más detalles, consulta nuestra [Política de Privacidad](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Productos de pago",
    "title": "Qué incluye el informe de pago",
    "summary": "Aclara lo que se ha añadido al PDF mientras mantiene la pantalla sin cambios. Los valores y contenidos se recuperan de la configuración real del producto.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Mantuvo la pantalla sin cambios, solo se añadió al PDF",
        "blocks": [
          {
            "p": "El cálculo de saju y la consulta de resultados son **gratuitos**. Puedes ver todo en la pantalla, incluyendo la carta natal, los cinco elementos, la fortuna de hoy y su base, ya que nada ha sido omitido al crear el informe de pago."
          },
          {
            "p": "El papel del informe es **agregar capas que no están presentes en la pantalla**. Estas capas no son fabricadas; son valores que ya fueron calculados durante el proceso de puntuación pero que no se utilizaron en la pantalla."
          }
        ]
      },
      {
        "title": "Informe de saju de por vida y fortuna de este año PDF — {priceDomestic}",
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
            "p": "El índice se lee directamente de la descripción del producto. **El número de páginas es el mismo que el documento real** — no se infla ya que es el valor indicado en el aviso de información del producto."
          }
        ]
      },
      {
        "title": "Qué no está en la pantalla",
        "blocks": [
          {
            "p": "La pantalla gratuita muestra la carta natal, los cinco elementos y la fortuna de hoy. Hay tres valores que se produjeron durante el proceso de cálculo pero que no se muestran en la pantalla, y estas son las partes del informe de pago."
          },
          {
            "ul": [
              "**Proporción de los aliados del día del tronco** — Muestra numéricamente dónde se hizo el juicio de un pilar del día fuerte o débil. El nombre del juicio por sí solo no indica si estaba en el borde o era amplio.",
              "**Wang Sang Hyu Su Sa** — Cuánto ha elevado cada energía el mes de nacimiento. Si la barra de poder indica 'cuánto hay', esta tabla indica '¿está en temporada?'.",
              "**Detalles de corrección del tiempo solar verdadero** — El concepto está en el documento de orientación, pero **'cuántos minutos se desplazaron en tu caso'** es un valor diferente para cada persona, por lo que solo se incluye en el informe."
            ]
          }
        ]
      },
      {
        "title": "Lo que debes saber antes de comprar",
        "blocks": [
          {
            "p": "**El servidor no almacena archivos.** Una vez que se aprueba el pago, el documento se crea y se envía de inmediato, sin dejar nada en el servidor. El principio de este servicio de no guardar valores de entrada se mantiene incluso en el flujo de pago."
          },
          {
            "p": "Por lo tanto, **por favor guarda el archivo inmediatamente después del pago.** Puedes recibirlo hasta cinco veces con el mismo pedido, pero si sales de la pantalla de resultados y los valores de entrada desaparecen, no se puede recrear."
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
            "p": "Por favor envía consultas a **{email}**. Responderemos dentro de 2 días hábiles. Para consultas sobre pagos y reembolsos, incluye **el número de pedido o el correo electrónico utilizado para el pago** para una confirmación más rápida."
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
              "**Informe de error de cálculo** — Si la carta natal de saju o las puntuaciones parecen extrañas, háznoslo saber. Si incluyes cuándo ingresaste la fecha y hora de nacimiento, podemos recalcular con los mismos valores."
            ]
          }
        ]
      },
      {
        "title": "Información comercial",
        "blocks": [
          {
            "ul": [
              "**Nombre de la empresa** — {companyName}",
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
  "intro": "Los cambios que afectan las condiciones de uso, como precios y términos, se publicarán aquí antes de su implementación. Las mejoras internas, como que la pantalla se vuelva más rápida, no se publican aquí: lo que aparece aquí es solo lo que necesitas saber.",
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
      "title": "Se ha abierto la ventana de consulta y la página de introducción del servicio.",
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
        "Si las reglas para interpretar myeongri cambian y las puntuaciones pueden diferir, primero publicaremos ese hecho y la fecha de vigencia aquí. Esto se debe a que los números en los enlaces de resultados que recibiste anteriormente pueden cambiar.",
        "Los criterios actuales son v10, y el pago aún está en preparación."
      ]
    }
  }
} satisfies NoticeCopy;
