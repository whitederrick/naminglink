import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Acerca de",
    "title": "Acerca de Inyeon-Link",
    "summary": "Comparamos dos cartas natales en la tradición del Saju coreano. Aquí está lo que calculamos y lo que nos negamos a afirmar.",
    "backLabel": "Inicio",
    "sections": [
      {
        "title": "Lo que hacemos",
        "blocks": [
          {
            "p": "Inyeon-Link construye dos cartas natales a partir de las fechas y horas de nacimiento y muestra **cómo se encuentran los dos conjuntos de energías.** También puedes leer tu propia carta por separado y ver qué temperamentos tienden a adaptarse a ti."
          },
          {
            "p": "La lectura en pantalla es **gratuita y no necesita cuenta.** Los elementos de pago son informes en PDF que contienen cifras que la pantalla nunca muestra: fortalezas de elementos, emparejamientos de diez dioses y las relaciones a través de los cuatro pilares."
          }
        ]
      },
      {
        "title": "Lo que calculamos",
        "blocks": [
          {
            "p": "Las cartas se construyen a partir del **calendario lunisolar coreano**, y la hora de nacimiento se corrige a **tiempo solar verdadero** para el lugar de nacimiento: la misma hora del reloj significa una posición del sol diferente dependiendo de dónde naciste."
          },
          {
            "p": "Las puntuaciones provienen únicamente de reglas fijas. Los conceptos tradicionales — diez dioses, relaciones de ramas, el elemento de apoyo — se expresan como reglas, por lo que **la misma entrada siempre da el mismo resultado.** Cuando una regla cambia, ejecutamos un arnés de regresión para asegurarnos de que las lecturas anteriores no se hayan movido."
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
              "**No hacemos predicciones.** Nada aquí te dice que persigas o evites a alguien. Es una referencia extraída de una tradición.",
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
  },
  "guide": {
    "eyebrow": "Base de Cálculo",
    "title": "¿Cuál es la Base para el Cálculo?",
    "summary": "Inyeon-Link revela todas las reglas que utiliza. Puedes verificar los elementos y sus pesos, las puntuaciones de la tabla de relaciones de ramas terrestres, y los valores umbral que distinguen entre un día maestro fuerte y un día maestro débil: puedes ver de dónde provienen los números en la pantalla.",
    "backLabel": "Volver al Inicio",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Los valores escritos aquí son todos **leídos directamente del código de cálculo**. Dado que no se transcriben manualmente en el texto, si las reglas cambian, los números en este documento también cambiarán."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Base del Servicio",
    "title": "¿Qué Considera la Compatibilidad del Saju?",
    "summary": "Aclara cuatro elementos y sus respectivos pesos, y explica por qué se eligen esos cuatro. También aborda por qué se pueden hacer cálculos incluso sin conocer la hora de nacimiento.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Calculando y Combinando Dos Ejes",
        "blocks": [
          {
            "p": "La tasa de coincidencia proviene de dos ramas. **La compatibilidad del Saju** observa toda la carta original del saju de ambos individuos, mientras que **la compatibilidad zodiacal** solo considera una rama terrestre del año de nacimiento. El valor final se obtiene promediando ponderadamente los dos."
          },
          {
            "table": {
              "head": [
                "Eje",
                "Lo que se Considera",
                "Peso"
              ],
              "rows": [
                [
                  "Compatibilidad del Saju",
                  "Día maestro, rama del día y los cinco elementos — cuatro elementos",
                  "{weightSaju}"
                ],
                [
                  "Compatibilidad Zodiacal",
                  "La relación entre las ramas del año",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "El lado del saju es mucho más pesado porque la cantidad de información utilizada es diferente. El saju considera los cuatro pilares, mientras que el zodiaco solo observa un carácter. Sin embargo, el zodiaco no se excluye por dos razones: es el elemento más intuitivamente comprensible y es el **único eje cuyo valor no fluctúa incluso sin conocer la hora de nacimiento**."
          }
        ]
      },
      {
        "title": "Los Cuatro Elementos de la Compatibilidad del Saju",
        "blocks": [
          {
            "p": "El lado del saju se divide aún más en cuatro. Cada elemento se elige para asegurar que lo que consideran no se superponga."
          },
          {
            "figure": "four-pillars",
            "caption": "El saju consiste en ocho caracteres formados por los tallos celestiales y las ramas terrestres del año, mes, día y hora de nacimiento. El tallo del día y la rama del día mencionados a continuación son los dos caracteres en el pilar del día.",
            "labels": {
              "year": "Pilar del Año",
              "yearNote": "Raíz · Zodiaco",
              "month": "Pilar del Mes",
              "monthNote": "Temporada · Poder",
              "day": "Pilar del Día",
              "dayNote": "Yo · Palacio de la Pareja",
              "hour": "Pilar de la Hora",
              "hourNote": "Años Posteriores · Uso",
              "stem": "Tallo Celestial",
              "stemNote": "Tallo del Día = Yo",
              "branch": "Rama Terrestre",
              "branchNote": "Rama del Día = Palacio del Cónyuge"
            }
          },
          {
            "table": {
              "head": [
                "Elemento",
                "Lo que se Considera",
                "Peso"
              ],
              "rows": [
                [
                  "Relación del Día Stem",
                  "Lo que los day stems (日干) de las dos personas son entre sí — visto a través de los Diez Dioses",
                  "{weightDayMaster}"
                ],
                [
                  "Complementación de los Cinco Elementos",
                  "¿El compañero tiene la energía que necesito — visto a través del elemento de apoyo que actualmente necesita la carta?",
                  "{weightElementSupply}"
                ],
                [
                  "Estrella del Cónyuge",
                  "¿El day stem del compañero corresponde a mi posición de cónyuge?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relación de la Rama del Día",
                  "¿Son las ramas del día (日支) de las dos personas una combinación o un choque?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "La rama del día se lee porque la tradición la trata como el **palacio del cónyuge**. De los cuatro pilares, es el que apunta al compañero, lo que la convierte en el primer lugar que la compatibilidad examina."
          }
        ]
      },
      {
        "title": "Si no se revela el género, se omite el elemento del cónyuge",
        "blocks": [
          {
            "p": "El elemento del cónyuge requiere conocimiento del género para el cálculo. La tradición lee la posición que apunta a un cónyuge de manera diferente dependiendo del género. Si no se revela, este ítem será **excluido** y los pesos de los otros tres ítems serán renormalizados."
          }
        ]
      },
      {
        "kind": "note",
        "title": "No se tratará como 0 puntos",
        "blocks": [
          {
            "p": "Si las posiciones faltantes se tratan como 0 puntos, la puntuación se reducirá injustamente simplemente porque no se reveló el género. La renormalización de los pesos previene este problema."
          }
        ]
      },
      {
        "title": "Los cálculos se pueden hacer sin conocer la hora de nacimiento",
        "blocks": [
          {
            "p": "La hora de nacimiento se utiliza para determinar el pilar de la hora. Si se desconoce, los cálculos se realizarán sin el pilar de la hora, y este hecho se indicará en la pantalla de resultados. Dado que no hay una entrada directa para el pilar de la hora entre los cuatro ítems de compatibilidad, los valores no fluctuarán significativamente, pero sí afecta el equilibrio de los cinco elementos."
          },
          {
            "p": "Si conoces la hora, por favor selecciona también el lugar de nacimiento. Si el tiempo estándar difiere de la posición solar real, usarlo tal cual puede desalinear el pilar de la hora [(corrección del tiempo solar verdadero)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "La misma entrada siempre dará el mismo valor",
        "blocks": [
          {
            "p": "Todas las puntuaciones se determinan por reglas. No se utiliza inteligencia artificial, ni se emplean números aleatorios. Por lo tanto, ingresar las mismas dos fechas de nacimiento múltiples veces no dará resultados diferentes. Como un servicio que no almacena datos, no se pueden recuperar resultados anteriores, pero **el determinismo** compensa eso."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cambiar las reglas elevará la versión",
        "blocks": [
          {
            "p": "Cada vez que se cambian las reglas de puntuación, se actualiza la versión del motor. La versión se anota en la parte inferior de la pantalla de resultados, permitiéndote distinguir qué reglas se utilizaron para calcular los números que estás viendo actualmente."
          }
        ]
      },
      {
        "title": "Lo que este resultado no es",
        "blocks": [
          {
            "p": "Este es un **material de referencia** calculado a partir de reglas construidas desde la perspectiva de la tradición. No es una predicción científica, ni es una declaración definitiva sobre la relación entre las dos personas. El rango de puntuación se establece en un mínimo de alrededor de 45 puntos por esta razón — ninguna combinación dará un valor cercano a 0 puntos."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabla de Relaciones",
    "title": "Doce Ramas Terrestres — Combinación, Choque, Discordia",
    "summary": "Esta es una tabla de relaciones utilizada tanto para la compatibilidad de ramas del día como para la compatibilidad zodiacal. Revela completamente lo que significa cada combinación, choque y discordia y sus respectivas puntuaciones.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "Las ramas terrestres constan de doce caracteres",
        "blocks": [
          {
            "p": "Las doce ramas terrestres (十二支) son 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Los signos zodiacales comúnmente conocidos están asociados con cada uno de estos doce caracteres."
          },
          {
            "figure": "branch-wheel",
            "caption": "Organizar los doce caracteres en un círculo proporciona una vista clara de las relaciones. Un choque siempre se sienta directamente opuesto, mientras que un par de seis armonías y una discordia tranquila son vecinos más cercanos. Estas líneas se derivan directamente de las reglas de cálculo, no están escritas en el texto.",
            "labels": {
              "alt": "Un diagrama que muestra las doce ramas terrestres organizadas en un círculo con líneas que conectan seis armonías, choque y discordia.",
              "yukhap": "Seis-Armonías",
              "chung": "Choque",
              "wonjin": "Discordia",
              "rat": "Rata",
              "ox": "Buey",
              "tiger": "Tigre",
              "rabbit": "Conejo",
              "dragon": "Dragón",
              "snake": "Serpiente",
              "horse": "Caballo",
              "goat": "Cabra",
              "monkey": "Mono",
              "rooster": "Gallo",
              "dog": "Perro",
              "pig": "Cerdo"
            }
          },
          {
            "p": "En saju, cada uno de los cuatro pilares tiene una rama terrestre. Inyeon-Link utiliza la **rama del día** (el palacio del cónyuge) y la **rama del año** (el animal zodiacal) entre ellas. Ambas posiciones se evalúan utilizando la tabla de relaciones a continuación."
          }
        ]
      },
      {
        "title": "Tabla de Relaciones Completa",
        "blocks": [
          {
            "table": {
              "caption": "Ordenado por la puntuación más alta. Estos son los valores realmente utilizados por Inyeon-Link.",
              "head": [
                "Relación",
                "Par Correspondiente",
                "Significado",
                "Puntuación"
              ],
              "rows": [
                [
                  "Combinación (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Cuando los tres caracteres se reúnen, forman una formación elemental completa — un **guk** (局). Esta se considera la combinación más fuerte.",
                  "{scoreSamhap}"
                ],
                [
                  "Seis-Harmonía (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pares que se atraen entre sí. Esta es la combinación más común en compatibilidad, ya que consiste en solo dos caracteres.",
                  "{scoreYukhap}"
                ],
                [
                  "Triada media (半合)",
                  "Dos caracteres que incluyen una rama real (王地) de la triada (子·酉·午·卯)",
                  "Una combinación media que incluye el carácter en el centro de la formación. No puede formar una combinación completa con solo dos caracteres, lo que la hace inferior a una triada completa.",
                  "{scoreBanhap}"
                ],
                [
                  "Misma rama terrestre",
                  "子子 · 丑丑 …",
                  "Caracteres que son iguales. Esto significa que se parecen entre sí, pero no implica atracción, por lo que se coloca en el medio.",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "Pares que no pertenecen a ningún lugar arriba o abajo",
                  "Una combinación sin relación especial. Este es el punto de referencia.",
                  "{scoreNeutral}"
                ],
                [
                  "Discordia silenciosa (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pares que no pueden separarse a pesar de albergar resentimiento. Parecen tranquilos en la superficie, pero se consideran duraderos.",
                  "{scoreWonjin}"
                ],
                [
                  "Choque (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pares que chocan de frente. Estos son seis pares enfrentados entre sí.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Las triadas completas no aparecen en este servicio",
        "blocks": [
          {
            "p": "Una triada completa requiere tres caracteres para formarse. Sin embargo, la compatibilidad se estructura emparejando las ramas terrestres de dos personas **una por una**, resultando en solo dos caracteres. Por lo tanto, lo que aparece aquí es siempre una triada media, y los puntos de triada completa {scoreSamhap} se reservan para cuando se examinan las formaciones dentro de cada saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Las triadas medias deben incluir una rama real",
        "blocks": [
          {
            "p": "También hay un método que cuenta como una triada media si ambos caracteres pertenecen al mismo grupo de triada. Esto puede llevar a altas puntuaciones incluso para combinaciones que son difíciles de llamar triada, como 申辰. Por lo tanto, este servicio reconoce una triada media solo para pares que incluyen una rama real (王地) (子·酉·午·卯), y combinaciones como 申辰·巳丑·寅戌·亥未 sin una rama real no se cuentan como triadas."
          }
        ]
      },
      {
        "title": "La razón para separar la discordia silenciosa",
        "blocks": [
          {
            "p": "Los seis pares de discordia silenciosa se ven con frecuencia en compatibilidad, al igual que los choques. Si contamos combinaciones como pares y choques, estos seis pares quedarían todos enterrados bajo puntos neutrales {scoreNeutral}, por lo que se colocan por separado."
          },
          {
            "p": "Mientras que los choques son evidentes y llamativos, la discordia silenciosa está sutilmente desalineada. Por lo tanto, se coloca en una puntuación de {scoreWonjin}, que es más alta que los choques ({scoreChung}) pero definitivamente más baja que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Las puntuaciones también se asignan a los choques",
        "blocks": [
          {
            "p": "La puntuación de choque más baja es {scoreChung}. La intención no es asignar un valor cercano a 0. En la tradición, un choque no es un 'fin' sino una 'colisión', y asignar una puntuación baja implicaría que el servicio está haciendo una declaración definitiva sobre la relación."
          },
          {
            "p": "Con un mínimo de {scoreChung} y un máximo de {scoreSamhap}, el rango es claro, pero no hace una conclusión definitiva."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiac",
    "title": "¿Por qué la compatibilidad zodiacal considera el año de la rama terrestre?",
    "summary": "El zodiaco es la rama terrestre del año de nacimiento. Esto explica por qué se deriva del pilar del año del saju en lugar del año calendario, y aclara la importancia de la compatibilidad zodiacal.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El zodiaco es la rama terrestre del año de nacimiento",
        "blocks": [
          {
            "p": "El saju consiste en cuatro pilares: año, mes, día y hora, con cada pilar conteniendo un heavenly stem (heavenly stem) y un earthly branch (earthly branch). El **año de la rama** es el que lleva el animal que llamamos signo zodiacal."
          },
          {
            "table": {
              "caption": "Las Doce Ramas Terrestres y el Zodiaco",
              "head": [
                "Rama Terrestre",
                "Zodiaco"
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
                  "Oveja"
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
        "title": "Usamos el año del saju, no el año calendario",
        "blocks": [
          {
            "p": "El punto en el que cambia el zodiaco no es el 1 de enero del calendario solar ni el Año Nuevo Lunar. El estándar para cambiar el año en el saju es **Ipchun**. Por lo tanto, aquellos nacidos en enero o principios de febrero pueden tener un año zodiacal diferente al del calendario."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La razón por la que no preguntamos directamente sobre el zodiaco",
        "blocks": [
          {
            "p": "Por eso solo recopilamos la fecha de nacimiento sin preguntar por el zodiaco en la pantalla de entrada. Cuando el motor de saju calcula la rama del año, el límite de Ipchun se ajusta automáticamente. Si lo seleccionas directamente, alguien nacido a principios de febrero puede elegir un zodiaco que no coincida con el suyo real."
          }
        ]
      },
      {
        "title": "La compatibilidad zodiacal solo considera una relación",
        "blocks": [
          {
            "p": "El cálculo de la compatibilidad zodiacal es simple. Compara las ramas del año de dos personas para determinar si la relación es armoniosa, un choque o una discordia silenciosa, y utiliza esa puntuación tal cual. Dado que solo hay un ítem, no es necesario distribuir pesos."
          },
          {
            "p": "Las puntuaciones para cada relación están todas listadas en la [Tabla de Relaciones de las Doce Ramas](/guide/branches). La compatibilidad de la rama del día utiliza la misma tabla."
          }
        ]
      },
      {
        "title": "La razón para determinar el peso",
        "blocks": [
          {
            "p": "La compatibilidad zodiacal representa {weightZodiac} de la tasa final de coincidencia. Mientras que la compatibilidad del saju considera los cuatro pilares, el zodiaco solo toma en cuenta un carácter, por lo que no pueden tener el mismo peso."
          },
          {
            "p": "Sin embargo, hay dos razones por las que no se excluye."
          },
          {
            "ul": [
              "**Es el ítem más intuitivamente comprensible**. Incluso sin conocer el vocabulario de la tradición, 'el tigre y el mono chocan' tiene sentido.",
              "**Es el único eje que no fluctúa incluso si se desconoce la hora de nacimiento**. Si no conoces la hora, el pilar de la hora falta y la fuerza de los cinco elementos cambia, pero la rama del año permanece igual."
            ]
          }
        ]
      },
      {
        "title": "También puedes ver la compatibilidad zodiacal por separado",
        "blocks": [
          {
            "p": "En la pantalla de resultados, mostramos las puntuaciones tanto de la compatibilidad del saju como de la compatibilidad zodiacal por separado. Si solo se presenta la tasa final de coincidencia, no está claro de dónde proviene ese número. Si los dos valores son significativamente diferentes, eso en sí mismo vale la pena señalar."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Diez Dioses",
    "title": "Diez Dioses y Posición de la Pareja",
    "summary": "Vemos qué es cada pilar del día para cada persona a través de los Diez Dioses. Explicamos por qué la riqueza directa y la riqueza indirecta se leen de manera diferente a pesar de que ambas son riqueza.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El día del tronco es la persona misma",
        "blocks": [
          {
            "p": "Entre los ocho caracteres del saju, el **tronco del día** (el tronco celestial del día de nacimiento) se refiere a la persona misma. Los siete caracteres restantes se leen como el entorno en el que se encuentra ese tronco del día."
          },
          {
            "p": "Los **Diez Dioses** (十神) dividen cómo el tronco del día percibe otros caracteres en diez categorías. Lo que me nutre es **recurso**, lo que es igual a mí es **compañero**, lo que produzco es **salida**, lo que controlo es **riqueza**, y lo que me controla es **autoridad** — cada uno de los cinco se divide luego por polaridad, haciendo diez."
          }
        ]
      },
      {
        "title": "Lo que el tronco del día de cada persona es para los demás",
        "blocks": [
          {
            "p": "Este es el primer elemento en la compatibilidad. Una vez que se determina cómo el tronco del día de A percibe el tronco del día de B, también se determina la percepción de B sobre A, por lo que **solo hay seis posibilidades**."
          },
          {
            "table": {
              "caption": "En orden de mayor puntuación",
              "head": [
                "Par",
                "Yin/Yang",
                "Nombre",
                "Significado"
              ],
              "rows": [
                [
                  "Riqueza Directa ↔ Autoridad Directa",
                  "Polaridad opuesta",
                  "Vínculo cálido (有情)",
                  "Este es el par que tradicionalmente se ve como la posición del cónyuge. El yin y el yang están desajustados, atrayéndose mutuamente."
                ],
                [
                  "Oficial Dañino ↔ Recurso Directo",
                  "Polaridad opuesta",
                  "Oficial Dañino con el Sello (傷官佩印)",
                  "Un lado envuelve la intensa energía del otro lado."
                ],
                [
                  "Amigo ↔ Amigo",
                  "Misma polaridad",
                  "Igual",
                  "Se parecen entre sí y son iguales, pero no se empujan mutuamente."
                ],
                [
                  "Rival ↔ Rival",
                  "Polaridad opuesta",
                  "Competencia",
                  "Se sienten atraídos entre sí pero compiten por la misma posición."
                ],
                [
                  "Riqueza Indirecta ↔ Autoridad Indirecta",
                  "Misma polaridad",
                  "Vínculo frío (無情)",
                  "La estimulación es grande, pero la carga también es pesada."
                ],
                [
                  "Dios Comedor ↔ Recurso Indirecto",
                  "Misma polaridad",
                  "La estrella búho roba la comida (梟神奪食)",
                  "La energía dada es tomada por la contraparte, bloqueando el flujo."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin y Yang están en una encrucijada",
        "blocks": [
          {
            "p": "El lado donde el yin y el yang están desalineados (Riqueza Adecuada, Oficial Adecuado, Compañero Adecuado) es emocional, mientras que el mismo lado (Recurso, Oficial, Compañero) es no emocional, que es el principio que distingue el adecuado y el lado de los Diez Dioses."
          }
        ]
      },
      {
        "title": "La razón para ver con los Diez Dioses en lugar de tres elementos",
        "blocks": [
          {
            "p": "Hay un método para ver la relación del tronco del día con los tres elementos (generación mutua, igualdad, superación mutua). Es simple, pero **el yin y el yang desaparecen.** 甲 (madera yang) y 乙 (madera yin) se convierten en la misma 'igualdad' como 甲 y 甲, y la superación mutua se aplasta en una sola puntuación sin dirección o yin y yang."
          },
          {
            "p": "La posición del cónyuge debe evaluarse en términos de los Diez Dioses. Si los elementos vistos por los cinco elementos y los elementos vistos por los Diez Dioses se mezclan en un solo motor, habrá dos estándares para los mismos dos caracteres. Por lo tanto, nos unificamos con los Diez Dioses."
          }
        ]
      },
      {
        "title": "La posición del cónyuge es Riqueza Adecuada y Oficial Adecuado",
        "blocks": [
          {
            "p": "En la tradición, cuál de los Diez Dioses representa a un cónyuge difiere según el género."
          },
          {
            "table": {
              "head": [
                "Género",
                "Posición del Cónyuge",
                "Posición Correspondiente"
              ],
              "rows": [
                [
                  "Masculino",
                  "Riqueza Directa (正財)",
                  "Riqueza Indirecta (偏財)"
                ],
                [
                  "Femenino",
                  "Autoridad Directa (正官)",
                  "Autoridad Indirecta (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Incluso si son el mismo recurso, solo la **Riqueza Proper** emocional se considera la posición del cónyuge, mientras que el Recurso se lee como la naturaleza de la actividad y la riqueza. Por lo tanto, la Riqueza Proper y el Oficial Proper cuentan como 2 puntos, mientras que el Recurso y el Oficial cuentan como 1 punto, y ambas direcciones se suman — si ambas se ven como posiciones de cónyuge, es la más alta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si no se revela el género, omita este ítem",
        "blocks": [
          {
            "p": "Si un ítem indecidible se establece en 0 puntos, resulta en una puntuación injustamente baja. El peso restante después de omitir el ítem se normaliza nuevamente [(ítem y peso)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "También mostramos la forma de la relación",
        "blocks": [
          {
            "p": "Aparte de la puntuación, describimos **qué forma** tiene el par de tallos del día en la pantalla de resultados. Si son posiciones similares, si un lado apoya al otro, o si un lado está reprimido — si es una relación de apoyo o represión, aclaramos qué lado sostiene esa posición."
          },
          {
            "p": "Si solo se presenta una puntuación, deja la pregunta '¿y qué?'. La forma no es una puntuación, sino algo que leer, y incluso los pares con puntuaciones bajas tienen algo que interpretar."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Los cinco elementos",
    "title": "Elemento de Apoyo — La energía necesaria ahora",
    "summary": "Vemos los cinco elementos no como '¿eligieron dos?' sino como '¿tiene la contraparte lo que necesito?'. También revelamos el valor límite que distingue a un día maestro fuerte de uno débil.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Si los cinco elementos están 'equilibrados' no es una cuestión de compatibilidad",
        "blocks": [
          {
            "p": "Hay un método para medir si las cinco energías están distribuidas uniformemente combinando los cinco elementos de las dos personas. Sin embargo, la cuestión de la compatibilidad no es esa. **¿Tiene la contraparte lo que necesito?**"
          },
          {
            "p": "El grado de equilibrio es simétrico, pero la complementariedad es inherentemente asimétrica. Esto se debe a que lo que A necesita es diferente de lo que B necesita. Por lo tanto, medimos cada lado por separado y promediamos — dado que es un promedio, la puntuación total permanece simétrica."
          }
        ]
      },
      {
        "title": "Elemento de Apoyo — Reducir si es excesivo, añadir si es insuficiente",
        "blocks": [
          {
            "p": "El Elemento de Apoyo (用神) es 'la energía que esta persona necesita en este momento'. Hay varios métodos para determinarlo (suprimir, apoyar, enfermedad y comunicación), pero se puede traducir en reglas, y el más utilizado es **suprimir (抑扶)**. Si el día maestro es fuerte, se considera que se necesita energía para reducir, y si es débil, se necesita energía para añadir."
          },
          {
            "table": {
              "head": [
                "Juicio",
                "Lo que se necesita",
                "Cuánto"
              ],
              "rows": [
                [
                  "Día maestro fuerte (身强)",
                  "Energía decreciente — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tres"
                ],
                [
                  "Día maestro débil (身弱)",
                  "Energía creciente — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Dos"
                ],
                [
                  "Equilibrado (中和)",
                  "No puede ser cubierto por el elemento de apoyo, por lo que es la energía más delgada",
                  "Dos"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Valores umbrales para fuerza y debilidad",
        "blocks": [
          {
            "p": "El lado del tallo del día es **印星 y 比劫** — la energía que me da vida y la energía que es como yo. Dado que dos de cinco, si la energía está completamente equilibrada, se convierte en {evenAllyRatio}. Se establece un rango por encima y por debajo de ese valor."
          },
          {
            "table": {
              "caption": "La proporción de aliados (印星 + 比劫) en el poder total",
              "head": [
                "Proporción",
                "Juicio"
              ],
              "rows": [
                [
                  "{strongThreshold} o más",
                  "Día maestro fuerte"
                ],
                [
                  "{weakThreshold} o más y menos de {strongThreshold}",
                  "Equilibrado"
                ],
                [
                  "Menos de {weakThreshold}",
                  "Día maestro débil"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "El equilibrio es un 'juicio menos certero'",
        "blocks": [
          {
            "p": "El equilibrio significa que no puede ser cubierto por el elemento de apoyo. En este momento, simplemente vemos las dos energías más delgadas como necesarias. En la pantalla de resultados, se anota como 'actualmente en una posición delgada' en lugar de una declaración definitiva."
          }
        ]
      },
      {
        "title": "El poder no es el número de caracteres",
        "blocks": [
          {
            "p": "Al contar el poder de los cinco elementos, no simplemente contamos los ocho caracteres como aparecen. Usamos un valor que refleja los tallos celestiales ocultos (地藏干) dentro de las ramas terrestres y la temporada de la energía del mes (月令) en el que uno nació."
          },
          {
            "p": "Si solo contamos los caracteres superficiales, perdemos el hecho de que incluso dos caracteres de 木 pueden tener fuerzas completamente diferentes dependiendo de la temporada. El 木 de la primavera y el 木 del otoño, aunque son el mismo carácter, tienen diferentes poderes."
          }
        ]
      },
      {
        "title": "Puntuación del grado de llenado",
        "blocks": [
          {
            "p": "Observamos la proporción de mi elemento de apoyo en el poder del oponente. Sin embargo, no usamos esa proporción directamente sino **dividimos la expectativa por el tamaño del elemento de apoyo.** Cuando es fuerte, el elemento de apoyo es tres (expectativa 60%), y cuando es débil, es dos (expectativa 40%), por lo que usar la proporción directamente significaría que una persona fuerte siempre recibe una puntuación más alta."
          },
          {
            "p": "Si se llena al nivel esperado, se obtiene una puntuación cercana a 78 puntos, y si se llena mucho más, alcanza 100 puntos, mientras que si falta significativamente, se acerca a 55 puntos. Aquí, también, el mínimo no se establece en 0."
          }
        ]
      },
      {
        "title": "Este es un juicio preliminar",
        "blocks": [
          {
            "p": "El análisis real de saju considera la formación y el clima estacional (el calor y la humedad de la temporada) para determinar el elemento de apoyo, y las conclusiones pueden variar dependiendo del método utilizado. Inyeon-Link solo utiliza los elementos de apoyo que se pueden medir por **valores de poder.** Esto se debe al principio de usar solo lo que se puede traducir en reglas, por lo que la misma entrada siempre dará la misma respuesta."
          },
          {
            "p": "En cambio, la pantalla de resultados también presenta la fuerza y debilidad de cada persona junto con la energía actualmente necesaria como **material de lectura**. Esto es para evitar ocultar la base de la puntuación."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Nuestros estándares",
    "title": "Inyeon’s Match — La razón por la que no se proporciona una puntuación total",
    "summary": "Solo tomamos los datos de una persona mientras dejamos vacía la posición del oponente y sustituimos todos los valores posibles en esa posición. Explicamos la razón por la que no se adjunta una puntuación total al tipo obtenido de esta manera.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Los cálculos se realizan dejando vacía la posición del oponente",
        "blocks": [
          {
            "p": "Las puntuaciones de compatibilidad se calculan emparejando a dos personas. **Inyeon’s Match** solo toma los datos de una persona mientras deja vacía la posición del oponente y prueba todos los valores posibles que podrían entrar en esa posición. Es como ejecutar el motor de compatibilidad al revés."
          },
          {
            "p": "Por lo tanto, no es necesario conocer la fecha de nacimiento del oponente. Aún podemos decir, '¿Qué tipo de perfil de coincidencia es adecuado para mí?' sobre alguien que aún no hemos conocido."
          }
        ]
      },
      {
        "title": "No ejecutamos millones de combinaciones",
        "blocks": [
          {
            "p": "La puntuación de compatibilidad en saju consiste en cuatro elementos, y **cada elemento no se superpone en lo que examina.**"
          },
          {
            "table": {
              "head": [
                "Elemento",
                "¿Cuál es el eje de examen?",
                "Número de casos"
              ],
              "rows": [
                [
                  "Relación del día stem · Naturaleza conyugal",
                  "Los day stems de ambas personas — heavenly stems",
                  "10"
                ],
                [
                  "Complemento de los cinco elementos",
                  "Mi elemento de apoyo y el poder de los cinco elementos del oponente",
                  "5"
                ],
                [
                  "Relación del día branch",
                  "los day branches de las dos personas",
                  "12"
                ],
                [
                  "Relación zodiacal",
                  "los year branches de las dos personas",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Dado que los valores no se intercambian entre elementos, **encontrar el punto más alto para cada branch será el punto más alto general**. No es necesario verificar todas las combinaciones de fechas de nacimiento: solo establecer los diez heavenly stems, doce earthly branches y cinco elementos es suficiente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Las mismas reglas se aplican",
        "blocks": [
          {
            "p": "Las puntuaciones escritas aquí se extraen directamente del motor de compatibilidad. Dado que no se han creado nuevas reglas, el tipo que aparece en la parte superior aquí también tendrá la puntuación más alta para ese elemento en la compatibilidad real. Si se cambian las reglas de compatibilidad, esta pantalla seguirá el mismo patrón."
          }
        ]
      },
      {
        "title": "No se proporciona puntuación total",
        "blocks": [
          {
            "p": "Esta es la decisión más importante en esta pantalla. Recoger las puntuaciones más altas para cada branch puede parecer que produce una 'coincidencia perfecta', pero esa persona puede **no existir realmente.**"
          },
          {
            "p": "En las personas reales, el day master y los cinco elementos no operan por separado. Una persona con 甲木 generalmente tiene una fuerte energía de 木 también. Este método de contar los branches por separado ignora esa correlación, por lo que el valor obtenido al conectar las puntuaciones más altas para cada branch se convierte en una combinación que no existe en la realidad."
          },
          {
            "p": "Por lo tanto, la pantalla solo muestra **puntuaciones de elementos** y no proporciona una puntuación total. La puntuación total se calculará al recibir la fecha de nacimiento de la otra persona para [saju compatibility](/compatibility)."
          }
        ]
      },
      {
        "title": "Cómo leer 'tipos de coincidencia'",
        "blocks": [
          {
            "p": "El resultado significa 'si conoces a una persona de este tipo, este elemento tendrá una puntuación alta'. No es un criterio para elegir a una persona, sino más bien una forma de leerlo desde una perspectiva de autoconocimiento."
          },
          {
            "p": "Las razones por las que ciertos tipos obtuvieron puntuaciones altas también se anotan elemento por elemento — si el day master está en una posición favorable, o si esa persona posee la energía que actualmente necesito."
          }
        ]
      },
      {
        "title": "Herramienta de confirmación",
        "blocks": [
          {
            "p": "Puede que te preguntes si la persona que tienes en mente corresponde a ese tipo. Al ingresar su fecha de nacimiento en la herramienta de confirmación en la pantalla de resultados, se te informará sobre su day master, day branch y year branch. Los valores ingresados no se guardan en este momento [(no guardados)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Hora",
    "title": "Convertir la hora de nacimiento a la hora solar verdadera",
    "summary": "La hora estándar y la posición real del sol difieren. La hora debe corregirse según la longitud del lugar de nacimiento para abordar por qué el pilar de tiempo es preciso.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La hora en el reloj y la hora del sol son diferentes",
        "blocks": [
          {
            "p": "El pilar de tiempo (時柱) del saju se determina por la posición del sol. Sin embargo, el reloj que vemos utiliza una única hora estándar para todo el país, lo que causa una discrepancia con la posición real del sol."
          },
          {
            "p": "La hora estándar de Corea se basa en 135° de longitud este. Dado que la longitud de Seúl es de aproximadamente 127°, está aproximadamente 8° al oeste, lo que hace que el sol alcance su cenit más tarde: cuando es mediodía en el reloj, el sol en Seúl aún no ha alcanzado su cenit. Esta diferencia es de aproximadamente **32 minutos**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutos cambian el pilar de tiempo por una posición",
        "blocks": [
          {
            "p": "El tiempo en saju se divide en unidades de dos horas. Aquellos nacidos cerca de la frontera tendrán su pilar de tiempo completamente cambiado por una diferencia de 32 minutos: esta corrección es necesaria debido a aquellos que caen exactamente en esta frontera."
          }
        ]
      },
      {
        "title": "Por qué pedimos el lugar de nacimiento",
        "blocks": [
          {
            "p": "Si la longitud es diferente, la cantidad de corrección también diferirá. Aplicar la corrección basada en Seúl a alguien nacido en el extranjero resultará en una discrepancia significativa en el pilar de tiempo. Por lo tanto, la pantalla de entrada requiere que selecciones tu lugar de nacimiento, y el cálculo se basa en la longitud y la hora estándar de esa ciudad. Actualmente, hay {cityCount} lugares en la lista."
          },
          {
            "p": "En lugares donde la longitud varía mucho incluso dentro del mismo país (como EE. UU., Rusia, Indonesia, etc.), las ciudades han sido divididas. **15° de longitud equivale a una posición de pilar de tiempo**."
          },
          {
            "p": "Si no seleccionas, el cálculo se basará en Seúl. Dado que la mayoría de los nacimientos son nacionales, esto reduce la posibilidad de error, pero si naciste en el extranjero, asegúrate de seleccionar."
          }
        ]
      },
      {
        "title": "La hora estándar ha cambiado varias veces en el pasado",
        "blocks": [
          {
            "p": "Hay una razón por la que la corrección no se puede calcular simplemente como 'diferencia de longitud ÷ 15° × 60 minutos'. La hora estándar en sí ha variado a lo largo de diferentes épocas."
          },
          {
            "table": {
              "caption": "Cambios en la hora estándar de Corea — aquellos nacidos en este período tendrán discrepancias con cálculos simples",
              "head": [
                "Período",
                "Qué era diferente"
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
            "p": "Inyeon-Link no utiliza un valor fijo para el meridiano estándar, sino que calcula la hora estándar que se utilizó realmente en ese momento basado en la información de **zona horaria IANA** del lugar de nacimiento. El horario de verano y las horas estándar pasadas se reflejan automáticamente."
          }
        ]
      },
      {
        "title": "Los nacimientos justo después de la medianoche también consideran la fecha",
        "blocks": [
          {
            "p": "Dado que la corrección es de -32 minutos, aquellos nacidos entre 00:00 y 00:32 según el reloj serán **23:00 del día anterior** en el tiempo solar verdadero. Si solo se revierte la hora y se deja la fecha sin cambios, se escribirá el pilar del día como '23:00 del día anterior'."
          },
          {
            "p": "Inyeon-Link también revertirá la fecha en este caso. El pilar del día indica a la persona misma en saju, por lo que si esto es incorrecto, casi todos los elementos de compatibilidad serán incorrectos."
          }
        ]
      },
      {
        "title": "No necesitas saber la hora",
        "blocks": [
          {
            "p": "La hora de nacimiento es opcional. Si no la conoces, el cálculo se realizará sin el pilar de tiempo, y este hecho se mostrará en la pantalla de resultados. No hay elementos en la compatibilidad que requieran que el pilar de tiempo se escriba directamente, pero sí influye en los cinco elementos, así que si lo sabes, es más preciso incluirlo."
          },
          {
            "p": "La compatibilidad zodiacal siempre es el mismo valor independientemente de la hora — [porque solo mira el año de la rama](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Información Personal",
    "title": "Método para no almacenar la información ingresada",
    "summary": "Esto explica lo que significa técnicamente que tu fecha de nacimiento no se registre en ninguna parte y qué se incluye en el enlace de resultados.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "No se requiere membresía",
        "blocks": [
          {
            "p": "Inyeon-Link no crea cuentas. No recopila nombres, correos electrónicos ni números de teléfono. La única información recopilada es la fecha de nacimiento y (opcionalmente) la hora de nacimiento, lugar de nacimiento y género, y ni siquiera eso permanece después de que se completa el cálculo."
          },
          {
            "p": "Hay un campo para ingresar un título que se mostrará en la pantalla de resultados, pero eso es **solo para fines de visualización** y no se utiliza en el cálculo. No necesitas ingresar tu nombre real."
          }
        ]
      },
      {
        "title": "¿Qué se incluye en el enlace de resultados?",
        "blocks": [
          {
            "p": "Una vez que se completa el cálculo, la dirección se ve así."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Lo que sigue **#** son los valores de entrada. Esta parte se llama **fragmento**, que es una **sección que el navegador no envía al servidor**. Este es un comportamiento web estándar y no una regla que creamos — originalmente se diseñó para indicar una ubicación dentro de un documento, por lo que el servidor no tiene necesidad de verlo."
          },
          {
            "p": "En otras palabras, cuando abres el enlace de resultados, el navegador lee ese valor para solicitar el cálculo, y nuestro servidor recibe los valores necesarios para el cálculo, devuelve la respuesta y luego lo olvida."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por favor, ten cuidado al enviar enlaces a otros",
        "blocks": [
          {
            "p": "El hecho de que no se almacene en el servidor y que el enlace sea seguro no son lo mismo. El enlace de resultados contiene ambas fechas de nacimiento, por lo que la persona que recibe ese enlace puede ver el mismo resultado."
          }
        ]
      },
      {
        "title": "¿Por qué se realiza el cálculo en el servidor pero no se almacena?",
        "blocks": [
          {
            "p": "El cálculo en sí se realiza en el servidor. Se necesita el almanaque lunisolar coreano para generar el saju, y esa tabla es demasiado grande para enviarse al navegador. Sin embargo, **después de procesar la solicitud, ese valor no se utiliza en ninguna parte.** No hay código para almacenarlo en una base de datos."
          },
          {
            "p": "Se mantiene un registro mínimo necesario para la operación — un contador para evitar que la misma persona envíe demasiadas solicitudes en poco tiempo. Esto no incluye la fecha de nacimiento, y la IP de acceso tampoco se retiene. Solo se cuenta un valor, hash con la fecha, y ese valor cambia cuando cambia el día."
          }
        ]
      },
      {
        "title": "Cosas que no se pueden hacer porque la información no se almacena",
        "blocks": [
          {
            "p": "Para ser honesto, hay cosas que hemos renunciado porque no almacenamos información."
          },
          {
            "ul": [
              "**No puedes recuperar resultados pasados.** Necesitas tener el enlace para verlos nuevamente.",
              "**Los mismos valores se recalcularán.** No hay caché. Sin embargo, dado que todas las reglas son deterministas, [la misma entrada siempre dará el mismo valor](/guide/how-compatibility).",
              "**Actualizar traerá de vuelta la puerta de anuncios.** Esto se debe a que no hay lugar para mantener registros de visualización."
            ]
          }
        ]
      },
      {
        "title": "En caso de compra",
        "blocks": [
          {
            "p": "Si compras un informe, se mantendrá un registro de la transacción en ese momento. La ley especifica un período de retención para los pagos, y sin un historial de pedidos, no se pueden procesar reembolsos. Sin embargo, incluso entonces, **la fecha de nacimiento utilizada para los cálculos de compatibilidad no se adjunta al pedido** — se recopila nuevamente al crear el PDF después de la confirmación del pago."
          },
          {
            "p": "Los detalles se describen en la [Política de Privacidad](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Productos de Pago",
    "title": "¿Qué se incluye en el informe de pago?",
    "summary": "Esto explica lo que se ha añadido al PDF mientras se mantiene la pantalla sin cambios, ítem por ítem. Los valores y contenidos se leen de la configuración real del producto.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "La pantalla permanece sin cambios, solo se añade al PDF",
        "blocks": [
          {
            "p": "Los cálculos de compatibilidad y las consultas de resultados son **gratuitos**. Las tasas de coincidencia, puntuaciones y pesos de los ítems, los gráficos originales de saju de ambos individuos y la forma de la relación se pueden ver en la pantalla. Nada se ha eliminado de la pantalla mientras se crea el informe de pago."
          },
          {
            "p": "El propósito del informe es **agregar capas que no están en la pantalla**. Y esa capa no es fabricada; consiste en valores que ya se calcularon durante el proceso de puntuación pero que no se utilizaron en la pantalla."
          }
        ]
      },
      {
        "title": "Informe de Compatibilidad Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Pago nacional {priceGunghapDomestic} (incluido IVA), pago internacional {priceGunghapGlobal}. A4 {pagesGunghap} páginas."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Las páginas 1-3 están organizadas para mantener lo que está en la pantalla** y **a partir de la página 4 es contenido que no está en la pantalla**. A continuación, se explica por qué ciertas cosas no se mostraron en la pantalla."
          }
        ]
      },
      {
        "title": "Página 4 — La dirección de las dos energías",
        "blocks": [
          {
            "p": "Los elementos de los cinco elementos en la pantalla se presentan como una única puntuación. Sin embargo, esa única puntuación es el **promedio de las dos direcciones** — midiendo cuánto me llena el otro y cuánto yo lleno al otro, y promediando esos valores."
          },
          {
            "p": "La complementariedad es inherentemente **asimétrica**. Esto se debe a que las energías que necesito y las energías que necesita el otro son diferentes. Si solo miras el promedio, una relación donde un lado llena significativamente al otro y una relación donde ambos se llenan mutuamente de manera uniforme aparecerán como el mismo número. El informe separa esos dos."
          },
          {
            "p": "También se incluye en la misma sección el **gráfico de relaciones de los cuatro pilares**. El único que entra en la tasa de coincidencia es el día rama (日支) — porque es la posición del cónyuge — pero las otras ramas de año, mes y hora también se pueden leer con el mismo gráfico de relaciones."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Las puntuaciones en esta tabla no entran en la tasa de coincidencia",
        "blocks": [
          {
            "p": "Si se incluyera, la puntuación total cambiaría y no coincidiría con el enlace de resultado ya enviado. Por lo tanto, se incluye solo como material de lectura, y ese hecho se señala debajo de la tabla."
          }
        ]
      },
      {
        "title": "Página 5 — Un vistazo más cercano al saju de cada persona",
        "blocks": [
          {
            "p": "Las barras de los cinco elementos en la pantalla muestran **cuánto está presente**. El informe añade **si el mes de nacimiento apoya esa energía**. Incluso con la misma cantidad, la energía que es fuerte (旺) y la energía que está muerta (死) tienen diferentes fortalezas."
          },
          {
            "p": "Puedes ver las fuerzas antes y después de multiplicar por la energía del mes lado a lado, mostrando cuánto la temporada lo ha impulsado. La **proporción de aliados** que distingue entre un día maestro fuerte y un día maestro débil también se señala — la pantalla solo muestra el juicio, pero el informe muestra dónde se hizo ese juicio."
          }
        ]
      },
      {
        "title": "Página 6 — Lo que los cuatro pilares de la otra persona significan para mí",
        "blocks": [
          {
            "p": "La tasa de coincidencia solo compara los **días ramas** de ambos individuos. Sin embargo, los otros tres pilares de la otra persona también se determinan por los Diez Dioses utilizando las mismas reglas. Si bien puedes entender **lo que esta persona significa para mí** mirando solo el día rama, no puedes saber **qué posición de esa persona significa para mí**."
          },
          {
            "p": "Dado que hay direcciones, ambos lados se presentan por separado. Lo que veo y lo que ve el otro son diferentes."
          }
        ]
      },
      {
        "title": "Página 7 — Cómo se calculó este saju",
        "blocks": [
          {
            "p": "Se indica cuánto se ajustó la hora de nacimiento al tiempo solar verdadero, si la corrección causó un cambio de fecha, y cuáles fueron las fechas solares y lunares cuando se generó el saju. El concepto se explica en el documento [Ajustando la hora de nacimiento al tiempo solar verdadero](/guide/true-solar-time), pero **el valor de cuántos minutos se ajustaron en tu caso** varía de persona a persona, por lo que solo se incluye en el informe."
          }
        ]
      },
      {
        "title": "Informe de perfil de coincidencia Inyeon PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Pago nacional {priceAffinityDomestic} (incluido IVA), pago internacional {priceAffinityGlobal}. {pagesAffinity} páginas A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Esta sección es la **tabla de clasificación general**. La pantalla solo muestra los conjuntos que coinciden bien, pero el informe clasifica todos los diez tallos celestiales y las doce ramas terrestres **completamente**. Si solo miras los conjuntos superiores, no sabrás 'quién viene después' y 'cuál es el menos compatible'."
          }
        ]
      },
      {
        "title": "Cosas a saber antes de comprar",
        "blocks": [
          {
            "p": "**El servidor no almacena archivos.** Una vez que se aprueba el pago, el documento se genera y se envía inmediatamente, sin dejar nada en el servidor. El principio de este servicio de no guardar valores de entrada se mantiene incluso en el flujo de pago."
          },
          {
            "p": "Así que, **por favor, guarda el archivo inmediatamente después del pago.** Puedes recibir el mismo pedido hasta cinco veces, pero si sales de la pantalla de resultados y los valores de entrada desaparecen, no podrás recrearlo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Los informes también son materiales de referencia",
        "blocks": [
          {
            "p": "Solo porque la longitud haya aumentado no significa que la conclusión sea más cierta. Lo que el informe contiene más es **la base del mismo cálculo**, no una afirmación más fuerte. La lectura del destino es un campo donde las conclusiones pueden variar dependiendo del practicante, y este servicio solo calcula lo que puede ser traducido en reglas."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Aviso",
    "title": "Anuncios",
    "summary": "Este es un lugar para informar cambios que afectan el uso.",
    "backLabel": "Volver a Inicio",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contacto",
    "title": "Consultas",
    "summary": "Este es el canal para consultas sobre uso, reembolsos, solicitudes de información personal e informes de errores, junto con información comercial.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "title": "Contacto por Correo Electrónico",
        "blocks": [
          {
            "p": "Por favor envía consultas a **{email}**. Responderemos dentro de 2 días hábiles. Para consultas sobre pagos y reembolsos, incluye **el número de pedido o el correo electrónico utilizado para el pago** para una confirmación más rápida."
          },
          {
            "p": "Las consultas telefónicas se pueden hacer al {customerCenter}."
          }
        ]
      },
      {
        "title": "¿Qué se puede enviar a este canal?",
        "blocks": [
          {
            "ul": [
              "**Pago y Reembolso** — Si el documento no se creó o el monto del pago difiere del pedido, se proporcionará un reembolso completo. Las condiciones están en la [política de reembolso](/refund-policy).",
              "**Información Personal** — Aceptamos solicitudes de visualización, corrección y eliminación. La política de procesamiento está en la [política de privacidad](/privacy).",
              "**Informe de Error de Cálculo** — Si el gráfico original del saju o la puntuación parecen extraños, háznoslo saber. Si incluyes cuándo ingresaste la fecha y la hora, podemos recalcular con los mismos valores."
            ]
          }
        ]
      },
      {
        "title": "Información Comercial",
        "blocks": [
          {
            "ul": [
              "**Nombre de la Empresa** — {companyName}",
              "**Representante** — {representative}",
              "**Número de Registro Comercial** — {businessNumber}",
              "**Número de Registro de Negocios por Correo** — {mailOrderNumber}",
              "**Dirección** — {address}",
              "**Centro de Atención al Cliente** — {customerCenter}",
              "**Correo Electrónico** — {email}",
              "**Oficial de Protección de Información Personal** — {privacyOfficer}",
              "**Proveedor de Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "No necesitas incluir tu fecha y hora de nacimiento en el correo de consulta. No guardamos entradas, por lo que no podemos recuperarlas, y el número de pedido es suficiente para la confirmación. Por favor, inclúyelo solo si es necesario para un informe de error de cálculo."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ES_NOTICES = {
  "kindLabels": {
    "service": "Servicio",
    "product": "Informes",
    "engine": "Cálculo",
    "support": "Soporte"
  },
  "intro": "Los cambios en sus términos de uso — precios, políticas — se publican aquí antes de que entren en vigor. Las mejoras internas no están listadas: lo que aparece aquí es lo que necesita saber.",
  "empty": {
    "title": "Aún no hay avisos",
    "body": "Cuando algo cambie, aparecerá aquí."
  },
  "effective": "Entra en vigor el {date}",
  "pager": {
    "label": "Páginas de avisos",
    "newer": "← Más nuevo",
    "older": "Más antiguo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Las páginas de Contacto y Acerca de ya están abiertas",
      "body": [
        "Preguntas, reembolsos, solicitudes de privacidad e informes de errores de cálculo ahora tienen un lugar al que ir — consulte la página de contacto en el pie de página.",
        "Si algo parece mal calculado, incluya los detalles de nacimiento que lo produjeron. No almacenamos lo que ingresa, por lo que sin ellos no podemos reproducir la lectura."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Los informes se emiten en inglés para árabe y jemer",
      "body": [
        "Si está leyendo en árabe o jemer, el informe PDF que compra se produce en inglés. La herramienta que organiza nuestros documentos aún no puede establecer párrafos en esos guiones.",
        "La pantalla permanece en su idioma, y su nombre se imprime en su propio guion dentro del informe.",
        "La misma nota aparece antes del pago. Cuando la herramienta soporte estos guiones, lo diremos aquí."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Cada lectura lleva la versión de las reglas utilizadas",
      "body": [
        "Cada lectura e informe lleva el conjunto de reglas utilizado para producirlo (por ejemplo inyeonlink-match-v10). La misma entrada en el mismo conjunto de reglas siempre da los mismos números.",
        "Si cambiamos las reglas de interpretación de una manera que pueda mover un puntaje, lo publicamos aquí primero, con la fecha en que entra en vigor — porque un enlace de resultado que ya tiene se leería de manera diferente.",
        "El conjunto de reglas actual es v10. Los pagos aún no están abiertos."
      ]
    }
  }
} satisfies NoticeCopy;
