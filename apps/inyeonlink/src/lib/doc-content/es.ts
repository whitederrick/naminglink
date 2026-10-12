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
            "p": "Las cartas se construyen a partir del **almanaque lunisolar coreano**, y la hora de nacimiento se corrige a **tiempo solar verdadero** para el lugar de nacimiento: la misma hora del reloj significa una posición del sol diferente dependiendo de dónde naciste."
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
                  "Tallo del día, rama del día y los cinco elementos — cuatro elementos",
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
              "dayNote": "Yo · Palacio del Cónyuge",
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
                  "Relación de los Tallos del Día",
                  "Lo que los tallos del día (日干) de las dos personas son entre sí — visto a través de los Diez Dioses",
                  "{weightDayMaster}"
                ],
                [
                  "Complementación de los Cinco Elementos",
                  "¿El compañero tiene la energía que necesito — visto a través del elemento de apoyo que actualmente necesita la carta?",
                  "{weightElementSupply}"
                ],
                [
                  "Estrella del Cónyuge",
                  "¿El tallo del día del compañero corresponde a mi posición de cónyuge?",
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
    "eyebrow": "Tabla de relaciones",
    "title": "Cómo se encuentran los animales del zodiaco y las ramas del día — La tabla de las doce ramas",
    "summary": "La tabla de relaciones que se usa cuando los animales del zodiaco y las ramas del día de dos personas se colocan lado a lado. Muestra, para cada uno de los doce, con qué animales forma una armonía, un choque o una discordia, y revela la puntuación de cada relación.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Los animales del zodiaco y las ramas del día usan la misma tabla",
        "blocks": [
          {
            "p": "Inyeon-Link coloca las ramas terrestres de dos personas lado a lado en dos lugares: la **compatibilidad zodiacal**, que observa la rama del año de nacimiento, y la **compatibilidad de la rama del día** (el palacio del cónyuge), que observa la rama del día de nacimiento. Ambas se juzgan con la tabla de abajo; la única diferencia es el peso que cada una tiene en la puntuación final."
          },
          {
            "figure": "branch-wheel",
            "caption": "Disponer los doce caracteres en un círculo deja las relaciones claras de un vistazo. Un choque siempre queda directamente opuesto, mientras que un par de seis armonías y una discordia tranquila son vecinos más cercanos. Estas líneas no se escriben a mano; se dibujan directamente a partir de las reglas de cálculo.",
            "labels": {
              "alt": "Un diagrama que muestra las doce ramas terrestres dispuestas en un círculo, con líneas que conectan pares de seis armonías, choque y discordia.",
              "yukhap": "Seis armonías",
              "chung": "Choque",
              "wonjin": "Discordia",
              "rat": "Rata",
              "ox": "Buey",
              "tiger": "Tigre",
              "rabbit": "Conejo",
              "dragon": "Dragón",
              "snake": "Serpiente",
              "horse": "Caballo",
              "goat": "Oveja",
              "monkey": "Mono",
              "rooster": "Gallo",
              "dog": "Perro",
              "pig": "Cerdo"
            }
          }
        ]
      },
      {
        "title": "Las relaciones de cada uno de los doce animales del zodiaco",
        "blocks": [
          {
            "p": "Para cada animal, la tabla enumera con qué animales forma cada relación. Solo se enumeran los pares que este servicio reconoce como armonías, de modo que un animal que no aparece en una fila no tiene ninguna relación particular con ella: es **neutral**."
          },
          {
            "table": {
              "caption": "Cuatro tipos de relación vistos desde un animal",
              "head": [
                "Tu animal",
                "Par que se atrae (seis armonías)",
                "Triada media",
                "Discordia silenciosa (discordia)",
                "Choque frontal (choque)"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Buey",
                  "Mono · Dragón",
                  "Oveja",
                  "Caballo"
                ],
                [
                  "Buey (丑)",
                  "Rata",
                  "Gallo",
                  "Caballo",
                  "Oveja"
                ],
                [
                  "Tigre (寅)",
                  "Cerdo",
                  "Caballo",
                  "Gallo",
                  "Mono"
                ],
                [
                  "Conejo (卯)",
                  "Perro",
                  "Cerdo · Oveja",
                  "Mono",
                  "Gallo"
                ],
                [
                  "Dragón (辰)",
                  "Gallo",
                  "Rata",
                  "Cerdo",
                  "Perro"
                ],
                [
                  "Serpiente (巳)",
                  "Mono",
                  "Gallo",
                  "Perro",
                  "Cerdo"
                ],
                [
                  "Caballo (午)",
                  "Oveja",
                  "Tigre · Perro",
                  "Buey",
                  "Rata"
                ],
                [
                  "Oveja (未)",
                  "Caballo",
                  "Conejo",
                  "Rata",
                  "Buey"
                ],
                [
                  "Mono (申)",
                  "Serpiente",
                  "Rata",
                  "Conejo",
                  "Tigre"
                ],
                [
                  "Gallo (酉)",
                  "Dragón",
                  "Serpiente · Buey",
                  "Tigre",
                  "Conejo"
                ],
                [
                  "Perro (戌)",
                  "Conejo",
                  "Caballo",
                  "Serpiente",
                  "Dragón"
                ],
                [
                  "Cerdo (亥)",
                  "Tigre",
                  "Conejo",
                  "Dragón",
                  "Serpiente"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuando dos personas se encuentran en la tabla",
        "blocks": [
          {
            "p": "Leer la tabla significa encontrar los dos animales en una misma fila. Aquí tienes algunos pares como ejemplo."
          },
          {
            "ul": [
              "**Rata y Buey** — una relación de seis armonías. Solo necesita dos caracteres, por lo que es la armonía que aparece con más frecuencia en la compatibilidad, y una buena.",
              "**Rata y Dragón** — una triada media: dos de los tres caracteres 申子辰, incluido el del medio (子).",
              "**Rata y Tigre** — no está en la tabla, así que es neutral: ni armonía ni choque, solo el punto de partida.",
              "**Rata y Oveja** — una discordia. Parece tranquila en la superficie, pero se cree que el desajuste perdura.",
              "**Tigre y Mono** — un choque. Están directamente opuestos y se consideran en colisión frontal."
            ]
          }
        ]
      },
      {
        "title": "Cuántos puntos recibe cada relación",
        "blocks": [
          {
            "table": {
              "caption": "De mayor a menor. Estos son los valores que Inyeon-Link usa realmente.",
              "head": [
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Choque",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "La misma rama (dos personas del mismo animal) significa parecido, no atracción, por lo que queda justo por encima de neutral. Ya sea compatibilidad zodiacal o de la rama del día, el valor de esta tabla pasa directamente a la puntuación final."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por qué las triadas completas no están en la tabla",
        "blocks": [
          {
            "p": "Una triada completa (申子辰, 巳酉丑, 寅午戌, 亥卯未) necesita los tres caracteres. Al colocar a dos personas lado a lado solo hay dos, por lo que en la compatibilidad no puede darse una triada completa y solo aparecen triadas medias. La puntuación de {scoreSamhap} de la triada completa se conserva para el caso en que tres caracteres coinciden dentro de la propia carta de una persona."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 y 亥未 no cuentan como armonías",
        "blocks": [
          {
            "p": "Algunos métodos cuentan cualquier par de caracteres del mismo grupo de triada como una triada media. Inyeon-Link no lo hace: como muestra la columna de triada media de arriba, solo acepta los pares que incluyen la **rama real** en el centro del grupo (子, 午, 卯, 酉). Un par sin ella no tiene un centro alrededor del cual se reúna la formación, por lo que se trata como neutral."
          }
        ]
      },
      {
        "title": "La discordia y el choque no están en el suelo",
        "blocks": [
          {
            "p": "Si solo se contaran armonías y choques, los seis pares de discordia quedarían enterrados en lo neutral. Por eso la discordia tiene un lugar propio: más alto que el choque frontal y más bajo que lo neutral, con {scoreWonjin} puntos."
          },
          {
            "p": "Incluso un choque conserva {scoreChung} puntos. En el myeongri tradicional un choque es una colisión, no el fin de una relación. Un valor cercano a cero haría que el servicio pronunciara un veredicto sobre dos personas, así que el rango se mantiene lo bastante amplio para mostrar la diferencia sin dictar sentencia."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiaco",
    "title": "¿Por qué la compatibilidad zodiacal considera la rama del año?",
    "summary": "El zodiaco es la rama terrestre del año de nacimiento. Esto explica por qué se deriva del pilar del año del saju en lugar del año calendario, y aclara la importancia de la compatibilidad zodiacal.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El zodiaco es la rama terrestre del año de nacimiento",
        "blocks": [
          {
            "p": "El saju consiste en cuatro pilares: año, mes, día y hora, con cada pilar conteniendo un tallo celestial y una rama terrestre. La **rama del año** es la que lleva el animal que llamamos signo zodiacal."
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
  "guide/zodiac-rat": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra la Rata con los doce animales del zodiaco",
    "summary": "Qué relación tiene la Rata (子) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Rata es la primera de las doce ramas",
        "blocks": [
          {
            "p": "La Rata es quien tiene la rama del año de nacimiento **子**. 子 es la primera de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 午 (el Caballo)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Rata es: «Rápida en darse cuenta y rápida en asegurar lo que importa. La primera en moverse en una crisis.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con la Rata. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "La Rata y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Buey (丑)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Conejo (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragón (辰)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Serpiente (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Caballo (午)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Oveja (未)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Mono (申)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Gallo (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Perro (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Cerdo (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Buey — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "子 y 丑 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y la Rata y el Buey puntúan {scoreYukhap}, el máximo que la Rata puede obtener."
          }
        ]
      },
      {
        "title": "Dragón y Mono — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "申子辰 es un grupo de triada (el grupo del agua), y 子 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que la Rata forma una triada media ({scoreBanhap}) tanto con el Dragón como con el Mono."
          },
          {
            "p": "**El Mono y el Dragón juntos**, en cambio, carecen del carácter central 子, por lo que no se cuentan como armonía y se tratan como neutral. Incluso dentro de un grupo de triada, es la Rata quien forma la triada media."
          }
        ]
      },
      {
        "title": "Caballo — el choque frontal (choque)",
        "blocks": [
          {
            "p": "子 y 午 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que la Rata puede recibir."
          }
        ]
      },
      {
        "title": "Oveja — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "子 y 未 están justo al lado de 午 (el Caballo), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 6 animales, y la Rata con otra Rata",
        "blocks": [
          {
            "p": "El Tigre, el Conejo, la Serpiente, el Gallo, el Perro y el Cerdo no son ni una armonía, ni un choque, ni una discordia con la Rata: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Rata puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Rata conoce a una persona Caballo, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Buey es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Rata cuyas ramas del día son 子 y 午 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Buey con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Buey (丑) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Buey es la segunda de las doce ramas",
        "blocks": [
          {
            "p": "El Buey es quien tiene la rama del año de nacimiento **丑**. 丑 es la segunda de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 未 (la Oveja)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Buey es: «Parece lento, pero llega hasta el final. Lo que asume, no lo suelta.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Buey. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Buey y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Buey (丑)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Conejo (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragón (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Serpiente (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Caballo (午)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Oveja (未)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Mono (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Perro (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Cerdo (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Rata — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "丑 y 子 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Buey y la Rata puntúan {scoreYukhap}, el máximo que el Buey puede obtener."
          }
        ]
      },
      {
        "title": "Gallo — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "巳酉丑 es un grupo de triada (el grupo del metal), y 酉 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Buey forma una triada media ({scoreBanhap}) solo con el Gallo."
          },
          {
            "p": "Con la Serpiente (巳) del mismo grupo falta el carácter central 酉, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Oveja — el choque frontal (choque)",
        "blocks": [
          {
            "p": "丑 y 未 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Buey puede recibir."
          }
        ]
      },
      {
        "title": "Caballo — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "丑 y 午 están justo al lado de 未 (la Oveja), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y el Buey con otro Buey",
        "blocks": [
          {
            "p": "El Tigre, el Conejo, el Dragón, la Serpiente, el Mono, el Perro y el Cerdo no son ni una armonía, ni un choque, ni una discordia con el Buey: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Buey puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Buey conoce a una persona Oveja, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Rata es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Buey cuyas ramas del día son 丑 y 未 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Tigre con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Tigre (寅) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Tigre es la tercera de las doce ramas",
        "blocks": [
          {
            "p": "El Tigre es quien tiene la rama del año de nacimiento **寅**. 寅 es la tercera de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 申 (el Mono)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Tigre es: «Sin miedo y siempre al frente. No puede dejar pasar una injusticia.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Tigre. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Tigre y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Buey (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Conejo (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragón (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Serpiente (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Caballo (午)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Oveja (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Mono (申)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Gallo (酉)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Perro (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Cerdo (亥)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cerdo — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "寅 y 亥 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Tigre y el Cerdo puntúan {scoreYukhap}, el máximo que el Tigre puede obtener."
          }
        ]
      },
      {
        "title": "Caballo — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "寅午戌 es un grupo de triada (el grupo del fuego), y 午 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Tigre forma una triada media ({scoreBanhap}) solo con el Caballo."
          },
          {
            "p": "Con el Perro (戌) del mismo grupo falta el carácter central 午, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Mono — el choque frontal (choque)",
        "blocks": [
          {
            "p": "寅 y 申 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Tigre puede recibir."
          }
        ]
      },
      {
        "title": "Gallo — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "寅 y 酉 están justo al lado de 申 (el Mono), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y el Tigre con otro Tigre",
        "blocks": [
          {
            "p": "La Rata, el Buey, el Conejo, el Dragón, la Serpiente, la Oveja y el Perro no son ni una armonía, ni un choque, ni una discordia con el Tigre: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Tigre puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Tigre conoce a una persona Mono, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Cerdo es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Tigre cuyas ramas del día son 寅 y 申 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Conejo con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Conejo (卯) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Conejo es la cuarta de las doce ramas",
        "blocks": [
          {
            "p": "El Conejo es quien tiene la rama del año de nacimiento **卯**. 卯 es la cuarta de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 酉 (el Gallo)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Conejo es: «Suave y perceptivo. Sabe rodear en lugar de chocar.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Conejo. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Conejo y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Buey (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Conejo (卯)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Dragón (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Serpiente (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Caballo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Oveja (未)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Mono (申)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Gallo (酉)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Perro (戌)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Cerdo (亥)",
                  "Triada media",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Perro — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "卯 y 戌 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Conejo y el Perro puntúan {scoreYukhap}, el máximo que el Conejo puede obtener."
          }
        ]
      },
      {
        "title": "Oveja y Cerdo — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "亥卯未 es un grupo de triada (el grupo de la madera), y 卯 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Conejo forma una triada media ({scoreBanhap}) tanto con la Oveja como con el Cerdo."
          },
          {
            "p": "**El Cerdo y la Oveja juntos**, en cambio, carecen del carácter central 卯, por lo que no se cuentan como armonía y se tratan como neutral. Incluso dentro de un grupo de triada, es el Conejo quien forma la triada media."
          }
        ]
      },
      {
        "title": "Gallo — el choque frontal (choque)",
        "blocks": [
          {
            "p": "卯 y 酉 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Conejo puede recibir."
          }
        ]
      },
      {
        "title": "Mono — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "卯 y 申 están justo al lado de 酉 (el Gallo), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 6 animales, y el Conejo con otro Conejo",
        "blocks": [
          {
            "p": "La Rata, el Buey, el Tigre, el Dragón, la Serpiente y el Caballo no son ni una armonía, ni un choque, ni una discordia con el Conejo: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Conejo puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Conejo conoce a una persona Gallo, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Perro es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Conejo cuyas ramas del día son 卯 y 酉 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Dragón con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Dragón (辰) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Dragón es la quinta de las doce ramas",
        "blocks": [
          {
            "p": "El Dragón es quien tiene la rama del año de nacimiento **辰**. 辰 es la quinta de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 戌 (el Perro)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Dragón es: «De corazón grande e ideales altos. Rara vez se conforma con lo corriente.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Dragón. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Dragón y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Buey (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Conejo (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragón (辰)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Serpiente (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Caballo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Oveja (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Mono (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Perro (戌)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Cerdo (亥)",
                  "Discordia",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gallo — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "辰 y 酉 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Dragón y el Gallo puntúan {scoreYukhap}, el máximo que el Dragón puede obtener."
          }
        ]
      },
      {
        "title": "Rata — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "申子辰 es un grupo de triada (el grupo del agua), y 子 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Dragón forma una triada media ({scoreBanhap}) solo con la Rata."
          },
          {
            "p": "Con el Mono (申) del mismo grupo falta el carácter central 子, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Perro — el choque frontal (choque)",
        "blocks": [
          {
            "p": "辰 y 戌 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Dragón puede recibir."
          }
        ]
      },
      {
        "title": "Cerdo — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "辰 y 亥 están justo al lado de 戌 (el Perro), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y el Dragón con otro Dragón",
        "blocks": [
          {
            "p": "El Buey, el Tigre, el Conejo, la Serpiente, el Caballo, la Oveja y el Mono no son ni una armonía, ni un choque, ni una discordia con el Dragón: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Dragón puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Dragón conoce a una persona Perro, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Gallo es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Dragón cuyas ramas del día son 辰 y 戌 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra la Serpiente con los doce animales del zodiaco",
    "summary": "Qué relación tiene la Serpiente (巳) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Serpiente es la sexta de las doce ramas",
        "blocks": [
          {
            "p": "La Serpiente es quien tiene la rama del año de nacimiento **巳**. 巳 es la sexta de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 亥 (el Cerdo)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Serpiente es: «Se guarda sus cosas y piensa hondo. Juzga con acierto.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con la Serpiente. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "La Serpiente y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Buey (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Conejo (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragón (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Serpiente (巳)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Caballo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Oveja (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Mono (申)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Gallo (酉)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Perro (戌)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Cerdo (亥)",
                  "Choque",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mono — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "巳 y 申 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y la Serpiente y el Mono puntúan {scoreYukhap}, el máximo que la Serpiente puede obtener."
          }
        ]
      },
      {
        "title": "Gallo — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "巳酉丑 es un grupo de triada (el grupo del metal), y 酉 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que la Serpiente forma una triada media ({scoreBanhap}) solo con el Gallo."
          },
          {
            "p": "Con el Buey (丑) del mismo grupo falta el carácter central 酉, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Cerdo — el choque frontal (choque)",
        "blocks": [
          {
            "p": "巳 y 亥 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que la Serpiente puede recibir."
          }
        ]
      },
      {
        "title": "Perro — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "巳 y 戌 están justo al lado de 亥 (el Cerdo), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y la Serpiente con otra Serpiente",
        "blocks": [
          {
            "p": "La Rata, el Buey, el Tigre, el Conejo, el Dragón, el Caballo y la Oveja no son ni una armonía, ni un choque, ni una discordia con la Serpiente: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Serpiente puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Serpiente conoce a una persona Cerdo, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Mono es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Serpiente cuyas ramas del día son 巳 y 亥 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Caballo con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Caballo (午) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Caballo es la séptima de las doce ramas",
        "blocks": [
          {
            "p": "El Caballo es quien tiene la rama del año de nacimiento **午**. 午 es la séptima de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 子 (la Rata)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Caballo es: «Alegre e inquieto. Lo que peor lleva es estar encerrado.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Caballo. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Caballo y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Buey (丑)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Tigre (寅)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Conejo (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragón (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Serpiente (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Caballo (午)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Oveja (未)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Mono (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Perro (戌)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Cerdo (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Oveja — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "午 y 未 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Caballo y la Oveja puntúan {scoreYukhap}, el máximo que el Caballo puede obtener."
          }
        ]
      },
      {
        "title": "Tigre y Perro — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "寅午戌 es un grupo de triada (el grupo del fuego), y 午 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Caballo forma una triada media ({scoreBanhap}) tanto con el Tigre como con el Perro."
          },
          {
            "p": "**El Tigre y el Perro juntos**, en cambio, carecen del carácter central 午, por lo que no se cuentan como armonía y se tratan como neutral. Incluso dentro de un grupo de triada, es el Caballo quien forma la triada media."
          }
        ]
      },
      {
        "title": "Rata — el choque frontal (choque)",
        "blocks": [
          {
            "p": "午 y 子 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Caballo puede recibir."
          }
        ]
      },
      {
        "title": "Buey — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "午 y 丑 están justo al lado de 子 (la Rata), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 6 animales, y el Caballo con otro Caballo",
        "blocks": [
          {
            "p": "El Conejo, el Dragón, la Serpiente, el Mono, el Gallo y el Cerdo no son ni una armonía, ni un choque, ni una discordia con el Caballo: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Caballo puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Caballo conoce a una persona Rata, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Oveja es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Caballo cuyas ramas del día son 午 y 子 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra la Oveja con los doce animales del zodiaco",
    "summary": "Qué relación tiene la Oveja (未) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Oveja es la octava de las doce ramas",
        "blocks": [
          {
            "p": "La Oveja es quien tiene la rama del año de nacimiento **未**. 未 es la octava de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 丑 (el Buey)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Oveja es: «Cálida y considerada. Guarda mucho tiempo las palabras duras.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con la Oveja. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "La Oveja y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Buey (丑)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Conejo (卯)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Dragón (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Serpiente (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Caballo (午)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Oveja (未)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Mono (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Perro (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Cerdo (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Caballo — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "未 y 午 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y la Oveja y el Caballo puntúan {scoreYukhap}, el máximo que la Oveja puede obtener."
          }
        ]
      },
      {
        "title": "Conejo — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "亥卯未 es un grupo de triada (el grupo de la madera), y 卯 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que la Oveja forma una triada media ({scoreBanhap}) solo con el Conejo."
          },
          {
            "p": "Con el Cerdo (亥) del mismo grupo falta el carácter central 卯, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Buey — el choque frontal (choque)",
        "blocks": [
          {
            "p": "未 y 丑 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que la Oveja puede recibir."
          }
        ]
      },
      {
        "title": "Rata — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "未 y 子 están justo al lado de 丑 (el Buey), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y la Oveja con otra Oveja",
        "blocks": [
          {
            "p": "El Tigre, el Dragón, la Serpiente, el Mono, el Gallo, el Perro y el Cerdo no son ni una armonía, ni un choque, ni una discordia con la Oveja: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Oveja puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Oveja conoce a una persona Buey, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Caballo es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Oveja cuyas ramas del día son 未 y 丑 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Mono con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Mono (申) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Mono es la novena de las doce ramas",
        "blocks": [
          {
            "p": "El Mono es quien tiene la rama del año de nacimiento **申**. 申 es la novena de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 寅 (el Tigre)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Mono es: «Ingenioso y rápido para adaptarse. La repetición le aburre.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Mono. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Mono y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Buey (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Conejo (卯)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Dragón (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Serpiente (巳)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Caballo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Oveja (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Mono (申)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Gallo (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Perro (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Cerdo (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Serpiente — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "申 y 巳 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Mono y la Serpiente puntúan {scoreYukhap}, el máximo que el Mono puede obtener."
          }
        ]
      },
      {
        "title": "Rata — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "申子辰 es un grupo de triada (el grupo del agua), y 子 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Mono forma una triada media ({scoreBanhap}) solo con la Rata."
          },
          {
            "p": "Con el Dragón (辰) del mismo grupo falta el carácter central 子, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Tigre — el choque frontal (choque)",
        "blocks": [
          {
            "p": "申 y 寅 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Mono puede recibir."
          }
        ]
      },
      {
        "title": "Conejo — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "申 y 卯 están justo al lado de 寅 (el Tigre), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y el Mono con otro Mono",
        "blocks": [
          {
            "p": "El Buey, el Dragón, el Caballo, la Oveja, el Gallo, el Perro y el Cerdo no son ni una armonía, ni un choque, ni una discordia con el Mono: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Mono puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Mono conoce a una persona Tigre, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Serpiente es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Mono cuyas ramas del día son 申 y 寅 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Gallo con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Gallo (酉) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Gallo es la décima de las doce ramas",
        "blocks": [
          {
            "p": "El Gallo es quien tiene la rama del año de nacimiento **酉**. 酉 es la décima de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 卯 (el Conejo)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Gallo es: «Diligente y meticuloso. No puede dejar nada fuera de sitio.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Gallo. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Gallo y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Buey (丑)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Tigre (寅)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Conejo (卯)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Dragón (辰)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Serpiente (巳)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Caballo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Oveja (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Mono (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Perro (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Cerdo (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dragón — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "酉 y 辰 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Gallo y el Dragón puntúan {scoreYukhap}, el máximo que el Gallo puede obtener."
          }
        ]
      },
      {
        "title": "Buey y Serpiente — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "巳酉丑 es un grupo de triada (el grupo del metal), y 酉 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Gallo forma una triada media ({scoreBanhap}) tanto con el Buey como con la Serpiente."
          },
          {
            "p": "**La Serpiente y el Buey juntos**, en cambio, carecen del carácter central 酉, por lo que no se cuentan como armonía y se tratan como neutral. Incluso dentro de un grupo de triada, es el Gallo quien forma la triada media."
          }
        ]
      },
      {
        "title": "Conejo — el choque frontal (choque)",
        "blocks": [
          {
            "p": "酉 y 卯 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Gallo puede recibir."
          }
        ]
      },
      {
        "title": "Tigre — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "酉 y 寅 están justo al lado de 卯 (el Conejo), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 6 animales, y el Gallo con otro Gallo",
        "blocks": [
          {
            "p": "La Rata, el Caballo, la Oveja, el Mono, el Perro y el Cerdo no son ni una armonía, ni un choque, ni una discordia con el Gallo: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Gallo puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Gallo conoce a una persona Conejo, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Dragón es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Gallo cuyas ramas del día son 酉 y 卯 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Perro](/guide/zodiac-dog) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Perro con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Perro (戌) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Perro es la undécima de las doce ramas",
        "blocks": [
          {
            "p": "El Perro es quien tiene la rama del año de nacimiento **戌**. 戌 es la undécima de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 辰 (el Dragón)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Perro es: «Leal hasta el final una vez que da su confianza. La traición le duele especialmente.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Perro. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Perro y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Buey (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Conejo (卯)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Dragón (辰)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Serpiente (巳)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Caballo (午)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Oveja (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Mono (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Perro (戌)",
                  "Misma rama",
                  "{scoreSame}"
                ],
                [
                  "Cerdo (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Conejo — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "戌 y 卯 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Perro y el Conejo puntúan {scoreYukhap}, el máximo que el Perro puede obtener."
          }
        ]
      },
      {
        "title": "Caballo — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "寅午戌 es un grupo de triada (el grupo del fuego), y 午 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Perro forma una triada media ({scoreBanhap}) solo con el Caballo."
          },
          {
            "p": "Con el Tigre (寅) del mismo grupo falta el carácter central 午, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Dragón — el choque frontal (choque)",
        "blocks": [
          {
            "p": "戌 y 辰 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Perro puede recibir."
          }
        ]
      },
      {
        "title": "Serpiente — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "戌 y 巳 están justo al lado de 辰 (el Dragón), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y el Perro con otro Perro",
        "blocks": [
          {
            "p": "La Rata, el Buey, el Tigre, la Oveja, el Mono, el Gallo y el Cerdo no son ni una armonía, ni un choque, ni una discordia con el Perro: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Perro puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Perro conoce a una persona Dragón, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Conejo es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Perro cuyas ramas del día son 戌 y 辰 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Cerdo](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Por animal",
    "title": "Cómo se encuentra el Cerdo con los doce animales del zodiaco",
    "summary": "Qué relación tiene el Cerdo (亥) con cada uno de los doce animales del zodiaco, qué puntuación recibe cada una y qué parte de la puntuación final ocupa esa puntuación — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Cerdo es la duodécima de las doce ramas",
        "blocks": [
          {
            "p": "El Cerdo es quien tiene la rama del año de nacimiento **亥**. 亥 es la duodécima de las doce ramas terrestres, y cuando los doce caracteres se disponen en círculo queda justo enfrente de 巳 (la Serpiente)."
          },
          {
            "p": "La línea que el resultado de compatibilidad muestra para una persona Cerdo es: «Generoso y franco. Confía con facilidad, a veces a un precio.» Esta línea no tiene nada que ver con las puntuaciones de las relaciones y no afecta a las puntuaciones de abajo."
          }
        ]
      },
      {
        "title": "Los doce animales del zodiaco de un vistazo",
        "blocks": [
          {
            "p": "Cada uno de los demás animales se enfrenta por turno con el Cerdo. Solo los pares que este servicio reconoce como armonías se describen como relaciones; todo lo demás es neutral."
          },
          {
            "table": {
              "caption": "El Cerdo y los doce animales del zodiaco",
              "head": [
                "Otro animal",
                "Relación",
                "Puntuación"
              ],
              "rows": [
                [
                  "Rata (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Buey (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Seis armonías",
                  "{scoreYukhap}"
                ],
                [
                  "Conejo (卯)",
                  "Triada media",
                  "{scoreBanhap}"
                ],
                [
                  "Dragón (辰)",
                  "Discordia",
                  "{scoreWonjin}"
                ],
                [
                  "Serpiente (巳)",
                  "Choque",
                  "{scoreChung}"
                ],
                [
                  "Caballo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Oveja (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Mono (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Gallo (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Perro (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Cerdo (亥)",
                  "Misma rama",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tigre — el par que se atrae (seis armonías)",
        "blocks": [
          {
            "p": "亥 y 寅 forman una armonía con solo dos caracteres. Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y el Cerdo y el Tigre puntúan {scoreYukhap}, el máximo que el Cerdo puede obtener."
          }
        ]
      },
      {
        "title": "Conejo — una triada media que incluye la rama real",
        "blocks": [
          {
            "p": "亥卯未 es un grupo de triada (el grupo de la madera), y 卯 es la **rama real** en su centro. Inyeon-Link solo acepta pares que incluyan la rama real, así que el Cerdo forma una triada media ({scoreBanhap}) solo con el Conejo."
          },
          {
            "p": "Con la Oveja (未) del mismo grupo falta el carácter central 卯, por lo que no se cuenta como armonía y se trata como neutral ({scoreNeutral}). Pertenecer al mismo grupo no convierte a todos los pares en una armonía."
          }
        ]
      },
      {
        "title": "Serpiente — el choque frontal (choque)",
        "blocks": [
          {
            "p": "亥 y 巳 están directamente opuestos en el círculo. Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas. Aun así, es la puntuación más baja que el Cerdo puede recibir."
          }
        ]
      },
      {
        "title": "Dragón — la discordia silenciosa (discordia)",
        "blocks": [
          {
            "p": "亥 y 辰 están justo al lado de 巳 (la Serpiente), la posición del choque, y tradicionalmente se ven como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Los otros 7 animales, y el Cerdo con otro Cerdo",
        "blocks": [
          {
            "p": "La Rata, el Buey, el Caballo, la Oveja, el Mono, el Gallo y el Perro no son ni una armonía, ni un choque, ni una discordia con el Cerdo: son **neutrales** y puntúan {scoreNeutral}. Son la base de referencia, ni buena ni mala."
          },
          {
            "p": "Dos personas Cerdo puntúan {scoreSame}. Significa que se parecen, no que se atraen, por lo que queda justo por encima de neutral."
          }
        ]
      },
      {
        "title": "Qué parte de la puntuación final ocupa esta puntuación",
        "blocks": [
          {
            "p": "Hay dos lugares en los que se colocan lado a lado las ramas de dos personas."
          },
          {
            "ul": [
              "La **compatibilidad zodiacal** observa la rama del año de nacimiento. Ocupa {weightZodiac} de la puntuación final.",
              "La **compatibilidad de la rama del día** observa la rama del día de nacimiento. Ocupa {weightDayBranch} de la compatibilidad de saju ({weightSaju}), que es {weightDayBranchTotal} de la puntuación final."
            ]
          },
          {
            "p": "Por ejemplo, cuando una persona Cerdo conoce a una persona Serpiente, la compatibilidad zodiacal da un choque. Si todo lo demás es igual, la puntuación final sale {swingZodiacChung} puntos más baja que con un par neutral. Con una persona Tigre es una relación de seis armonías, y la puntuación sale {swingZodiacYukhap} puntos más alta."
          },
          {
            "p": "Las ramas del año y del día pueden diferir. Dos personas Cerdo cuyas ramas del día son 亥 y 巳 obtienen la misma rama ({scoreSame}) en la compatibilidad zodiacal y un choque ({scoreChung}) en la compatibilidad de la rama del día."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas.",
              "La tabla completa de qué puntuación recibe cada relación está en la [tabla de las doce ramas](/guide/branches), y por qué el zodiaco se lee a partir de la rama del año se explica en [Por qué la compatibilidad zodiacal considera la rama del año](/guide/zodiac)."
            ]
          },
          {
            "p": "Los demás animales se presentan de la misma manera. [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Conejo](/guide/zodiac-rabbit) · [Dragón](/guide/zodiac-dragon) · [Serpiente](/guide/zodiac-snake) · [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat) · [Mono](/guide/zodiac-monkey) · [Gallo](/guide/zodiac-rooster) · [Perro](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-rat": {
    "eyebrow": "Por par",
    "title": "La Rata y la Rata — Misma rama",
    "summary": "Qué relación tienen dos personas Rata, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Rata comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Rata comparten la misma rama (子 y 子). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "子 es la primera de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Rata",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de la Rata",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Rata** — Seis armonías [Buey](/guide/zodiac-pair-rat-ox) · Triada media [Dragón](/guide/zodiac-pair-rat-dragon), [Mono](/guide/zodiac-pair-rat-monkey) · Discordia [Oveja](/guide/zodiac-pair-rat-goat) · Choque [Caballo](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Rata](/guide/zodiac-rat), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-ox": {
    "eyebrow": "Por par",
    "title": "La Rata y el Buey — Seis armonías",
    "summary": "Qué relación tienen la Rata y el Buey, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Rata y el Buey forman una relación de seis armonías",
        "blocks": [
          {
            "p": "La Rata y el Buey forman una relación de seis armonías. 子 y 丑 forman una armonía con solo dos caracteres."
          },
          {
            "p": "Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y con {scoreYukhap} es el máximo que cualquiera de los dos animales puede obtener."
          },
          {
            "p": "En el círculo, 子 está en el primer lugar y 丑 en el segundo, y los dos caracteres están a un paso de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Rata y el Buey",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Seis armonías"
                ],
                [
                  "Puntuación",
                  "{scoreYukhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacYukhap} puntos en la compatibilidad zodiacal y {swingDayBranchYukhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Rata** — Seis armonías [Buey](/guide/zodiac-pair-rat-ox) · Triada media [Dragón](/guide/zodiac-pair-rat-dragon), [Mono](/guide/zodiac-pair-rat-monkey) · Discordia [Oveja](/guide/zodiac-pair-rat-goat) · Choque [Caballo](/guide/zodiac-pair-rat-horse)",
              "Los socios especiales **del Buey** — Seis armonías [Rata](/guide/zodiac-pair-rat-ox) · Triada media [Gallo](/guide/zodiac-pair-ox-rooster) · Discordia [Caballo](/guide/zodiac-pair-ox-horse) · Choque [Oveja](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Rata](/guide/zodiac-rat) · [Buey](/guide/zodiac-ox), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-dragon": {
    "eyebrow": "Por par",
    "title": "La Rata y el Dragón — Triada media",
    "summary": "Qué relación tienen la Rata y el Dragón, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Rata y el Dragón forman una triada media",
        "blocks": [
          {
            "p": "La Rata y el Dragón forman una triada media. 申子辰 es un grupo de triada (el grupo del agua), y 子 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "El Mono (申) y el Dragón (辰) del mismo grupo carecen del carácter central 子, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 子 está en el primer lugar y 辰 en el quinto, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Rata y el Dragón",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Rata** — Seis armonías [Buey](/guide/zodiac-pair-rat-ox) · Triada media [Dragón](/guide/zodiac-pair-rat-dragon), [Mono](/guide/zodiac-pair-rat-monkey) · Discordia [Oveja](/guide/zodiac-pair-rat-goat) · Choque [Caballo](/guide/zodiac-pair-rat-horse)",
              "Los socios especiales **del Dragón** — Seis armonías [Gallo](/guide/zodiac-pair-dragon-rooster) · Triada media [Rata](/guide/zodiac-pair-rat-dragon) · Discordia [Cerdo](/guide/zodiac-pair-dragon-pig) · Choque [Perro](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Rata](/guide/zodiac-rat) · [Dragón](/guide/zodiac-dragon), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-horse": {
    "eyebrow": "Por par",
    "title": "La Rata y el Caballo — Choque",
    "summary": "Qué relación tienen la Rata y el Caballo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Rata y el Caballo forman un choque",
        "blocks": [
          {
            "p": "La Rata y el Caballo forman un choque. 子 y 午 están directamente opuestos en el círculo."
          },
          {
            "p": "Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas."
          },
          {
            "p": "En el círculo, 子 está en el primer lugar y 午 en el séptimo, y los dos caracteres están a seis pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Rata y el Caballo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Choque"
                ],
                [
                  "Puntuación",
                  "{scoreChung}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacChung} puntos en la compatibilidad zodiacal y {swingDayBranchChung} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Rata** — Seis armonías [Buey](/guide/zodiac-pair-rat-ox) · Triada media [Dragón](/guide/zodiac-pair-rat-dragon), [Mono](/guide/zodiac-pair-rat-monkey) · Discordia [Oveja](/guide/zodiac-pair-rat-goat) · Choque [Caballo](/guide/zodiac-pair-rat-horse)",
              "Los socios especiales **del Caballo** — Seis armonías [Oveja](/guide/zodiac-pair-horse-goat) · Triada media [Tigre](/guide/zodiac-pair-tiger-horse), [Perro](/guide/zodiac-pair-horse-dog) · Discordia [Buey](/guide/zodiac-pair-ox-horse) · Choque [Rata](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Rata](/guide/zodiac-rat) · [Caballo](/guide/zodiac-horse), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-goat": {
    "eyebrow": "Por par",
    "title": "La Rata y la Oveja — Discordia",
    "summary": "Qué relación tienen la Rata y la Oveja, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Rata y la Oveja forman una discordia",
        "blocks": [
          {
            "p": "La Rata y la Oveja forman una discordia. La posición del choque de 子 es 午 (el Caballo), y 未 está justo al lado; justo al lado de 丑 (el Buey), la posición del choque de 未, está 子."
          },
          {
            "p": "Tradicionalmente se ve como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          },
          {
            "p": "En el círculo, 子 está en el primer lugar y 未 en el octavo, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Rata y la Oveja",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Discordia"
                ],
                [
                  "Puntuación",
                  "{scoreWonjin}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacWonjin} puntos en la compatibilidad zodiacal y {swingDayBranchWonjin} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Rata** — Seis armonías [Buey](/guide/zodiac-pair-rat-ox) · Triada media [Dragón](/guide/zodiac-pair-rat-dragon), [Mono](/guide/zodiac-pair-rat-monkey) · Discordia [Oveja](/guide/zodiac-pair-rat-goat) · Choque [Caballo](/guide/zodiac-pair-rat-horse)",
              "Los socios especiales **de la Oveja** — Seis armonías [Caballo](/guide/zodiac-pair-horse-goat) · Triada media [Conejo](/guide/zodiac-pair-rabbit-goat) · Discordia [Rata](/guide/zodiac-pair-rat-goat) · Choque [Buey](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Rata](/guide/zodiac-rat) · [Oveja](/guide/zodiac-goat), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-monkey": {
    "eyebrow": "Por par",
    "title": "La Rata y el Mono — Triada media",
    "summary": "Qué relación tienen la Rata y el Mono, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Rata y el Mono forman una triada media",
        "blocks": [
          {
            "p": "La Rata y el Mono forman una triada media. 申子辰 es un grupo de triada (el grupo del agua), y 子 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "El Dragón (辰) y el Mono (申) del mismo grupo carecen del carácter central 子, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 子 está en el primer lugar y 申 en el noveno, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Rata y el Mono",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Rata** — Seis armonías [Buey](/guide/zodiac-pair-rat-ox) · Triada media [Dragón](/guide/zodiac-pair-rat-dragon), [Mono](/guide/zodiac-pair-rat-monkey) · Discordia [Oveja](/guide/zodiac-pair-rat-goat) · Choque [Caballo](/guide/zodiac-pair-rat-horse)",
              "Los socios especiales **del Mono** — Seis armonías [Serpiente](/guide/zodiac-pair-snake-monkey) · Triada media [Rata](/guide/zodiac-pair-rat-monkey) · Discordia [Conejo](/guide/zodiac-pair-rabbit-monkey) · Choque [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Rata](/guide/zodiac-rat) · [Mono](/guide/zodiac-monkey), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-ox": {
    "eyebrow": "Por par",
    "title": "El Buey y el Buey — Misma rama",
    "summary": "Qué relación tienen dos personas Buey, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Buey comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Buey comparten la misma rama (丑 y 丑). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "丑 es la segunda de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Buey",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Buey",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Buey** — Seis armonías [Rata](/guide/zodiac-pair-rat-ox) · Triada media [Gallo](/guide/zodiac-pair-ox-rooster) · Discordia [Caballo](/guide/zodiac-pair-ox-horse) · Choque [Oveja](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Buey](/guide/zodiac-ox), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-horse": {
    "eyebrow": "Por par",
    "title": "El Buey y el Caballo — Discordia",
    "summary": "Qué relación tienen el Buey y el Caballo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Buey y el Caballo forman una discordia",
        "blocks": [
          {
            "p": "El Buey y el Caballo forman una discordia. La posición del choque de 丑 es 未 (la Oveja), y 午 está justo al lado; justo al lado de 子 (la Rata), la posición del choque de 午, está 丑."
          },
          {
            "p": "Tradicionalmente se ve como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          },
          {
            "p": "En el círculo, 丑 está en el segundo lugar y 午 en el séptimo, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Buey y el Caballo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Discordia"
                ],
                [
                  "Puntuación",
                  "{scoreWonjin}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacWonjin} puntos en la compatibilidad zodiacal y {swingDayBranchWonjin} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Buey** — Seis armonías [Rata](/guide/zodiac-pair-rat-ox) · Triada media [Gallo](/guide/zodiac-pair-ox-rooster) · Discordia [Caballo](/guide/zodiac-pair-ox-horse) · Choque [Oveja](/guide/zodiac-pair-ox-goat)",
              "Los socios especiales **del Caballo** — Seis armonías [Oveja](/guide/zodiac-pair-horse-goat) · Triada media [Tigre](/guide/zodiac-pair-tiger-horse), [Perro](/guide/zodiac-pair-horse-dog) · Discordia [Buey](/guide/zodiac-pair-ox-horse) · Choque [Rata](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Buey](/guide/zodiac-ox) · [Caballo](/guide/zodiac-horse), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-goat": {
    "eyebrow": "Por par",
    "title": "El Buey y la Oveja — Choque",
    "summary": "Qué relación tienen el Buey y la Oveja, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Buey y la Oveja forman un choque",
        "blocks": [
          {
            "p": "El Buey y la Oveja forman un choque. 丑 y 未 están directamente opuestos en el círculo."
          },
          {
            "p": "Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas."
          },
          {
            "p": "En el círculo, 丑 está en el segundo lugar y 未 en el octavo, y los dos caracteres están a seis pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Buey y la Oveja",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Choque"
                ],
                [
                  "Puntuación",
                  "{scoreChung}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacChung} puntos en la compatibilidad zodiacal y {swingDayBranchChung} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Buey** — Seis armonías [Rata](/guide/zodiac-pair-rat-ox) · Triada media [Gallo](/guide/zodiac-pair-ox-rooster) · Discordia [Caballo](/guide/zodiac-pair-ox-horse) · Choque [Oveja](/guide/zodiac-pair-ox-goat)",
              "Los socios especiales **de la Oveja** — Seis armonías [Caballo](/guide/zodiac-pair-horse-goat) · Triada media [Conejo](/guide/zodiac-pair-rabbit-goat) · Discordia [Rata](/guide/zodiac-pair-rat-goat) · Choque [Buey](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Buey](/guide/zodiac-ox) · [Oveja](/guide/zodiac-goat), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-rooster": {
    "eyebrow": "Por par",
    "title": "El Buey y el Gallo — Triada media",
    "summary": "Qué relación tienen el Buey y el Gallo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Buey y el Gallo forman una triada media",
        "blocks": [
          {
            "p": "El Buey y el Gallo forman una triada media. 巳酉丑 es un grupo de triada (el grupo del metal), y 酉 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "La Serpiente (巳) y el Buey (丑) del mismo grupo carecen del carácter central 酉, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 丑 está en el segundo lugar y 酉 en el décimo, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Buey y el Gallo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Buey** — Seis armonías [Rata](/guide/zodiac-pair-rat-ox) · Triada media [Gallo](/guide/zodiac-pair-ox-rooster) · Discordia [Caballo](/guide/zodiac-pair-ox-horse) · Choque [Oveja](/guide/zodiac-pair-ox-goat)",
              "Los socios especiales **del Gallo** — Seis armonías [Dragón](/guide/zodiac-pair-dragon-rooster) · Triada media [Buey](/guide/zodiac-pair-ox-rooster), [Serpiente](/guide/zodiac-pair-snake-rooster) · Discordia [Tigre](/guide/zodiac-pair-tiger-rooster) · Choque [Conejo](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Buey](/guide/zodiac-ox) · [Gallo](/guide/zodiac-rooster), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-tiger": {
    "eyebrow": "Por par",
    "title": "El Tigre y el Tigre — Misma rama",
    "summary": "Qué relación tienen dos personas Tigre, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Tigre comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Tigre comparten la misma rama (寅 y 寅). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "寅 es la tercera de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Tigre",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Tigre",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Tigre** — Seis armonías [Cerdo](/guide/zodiac-pair-tiger-pig) · Triada media [Caballo](/guide/zodiac-pair-tiger-horse) · Discordia [Gallo](/guide/zodiac-pair-tiger-rooster) · Choque [Mono](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Tigre](/guide/zodiac-tiger), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-horse": {
    "eyebrow": "Por par",
    "title": "El Tigre y el Caballo — Triada media",
    "summary": "Qué relación tienen el Tigre y el Caballo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Tigre y el Caballo forman una triada media",
        "blocks": [
          {
            "p": "El Tigre y el Caballo forman una triada media. 寅午戌 es un grupo de triada (el grupo del fuego), y 午 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "El Perro (戌) y el Tigre (寅) del mismo grupo carecen del carácter central 午, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 寅 está en el tercer lugar y 午 en el séptimo, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Tigre y el Caballo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Tigre** — Seis armonías [Cerdo](/guide/zodiac-pair-tiger-pig) · Triada media [Caballo](/guide/zodiac-pair-tiger-horse) · Discordia [Gallo](/guide/zodiac-pair-tiger-rooster) · Choque [Mono](/guide/zodiac-pair-tiger-monkey)",
              "Los socios especiales **del Caballo** — Seis armonías [Oveja](/guide/zodiac-pair-horse-goat) · Triada media [Tigre](/guide/zodiac-pair-tiger-horse), [Perro](/guide/zodiac-pair-horse-dog) · Discordia [Buey](/guide/zodiac-pair-ox-horse) · Choque [Rata](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Tigre](/guide/zodiac-tiger) · [Caballo](/guide/zodiac-horse), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-monkey": {
    "eyebrow": "Por par",
    "title": "El Tigre y el Mono — Choque",
    "summary": "Qué relación tienen el Tigre y el Mono, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Tigre y el Mono forman un choque",
        "blocks": [
          {
            "p": "El Tigre y el Mono forman un choque. 寅 y 申 están directamente opuestos en el círculo."
          },
          {
            "p": "Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas."
          },
          {
            "p": "En el círculo, 寅 está en el tercer lugar y 申 en el noveno, y los dos caracteres están a seis pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Tigre y el Mono",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Choque"
                ],
                [
                  "Puntuación",
                  "{scoreChung}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacChung} puntos en la compatibilidad zodiacal y {swingDayBranchChung} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Tigre** — Seis armonías [Cerdo](/guide/zodiac-pair-tiger-pig) · Triada media [Caballo](/guide/zodiac-pair-tiger-horse) · Discordia [Gallo](/guide/zodiac-pair-tiger-rooster) · Choque [Mono](/guide/zodiac-pair-tiger-monkey)",
              "Los socios especiales **del Mono** — Seis armonías [Serpiente](/guide/zodiac-pair-snake-monkey) · Triada media [Rata](/guide/zodiac-pair-rat-monkey) · Discordia [Conejo](/guide/zodiac-pair-rabbit-monkey) · Choque [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Tigre](/guide/zodiac-tiger) · [Mono](/guide/zodiac-monkey), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-rooster": {
    "eyebrow": "Por par",
    "title": "El Tigre y el Gallo — Discordia",
    "summary": "Qué relación tienen el Tigre y el Gallo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Tigre y el Gallo forman una discordia",
        "blocks": [
          {
            "p": "El Tigre y el Gallo forman una discordia. La posición del choque de 寅 es 申 (el Mono), y 酉 está justo al lado; justo al lado de 卯 (el Conejo), la posición del choque de 酉, está 寅."
          },
          {
            "p": "Tradicionalmente se ve como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          },
          {
            "p": "En el círculo, 寅 está en el tercer lugar y 酉 en el décimo, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Tigre y el Gallo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Discordia"
                ],
                [
                  "Puntuación",
                  "{scoreWonjin}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacWonjin} puntos en la compatibilidad zodiacal y {swingDayBranchWonjin} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Tigre** — Seis armonías [Cerdo](/guide/zodiac-pair-tiger-pig) · Triada media [Caballo](/guide/zodiac-pair-tiger-horse) · Discordia [Gallo](/guide/zodiac-pair-tiger-rooster) · Choque [Mono](/guide/zodiac-pair-tiger-monkey)",
              "Los socios especiales **del Gallo** — Seis armonías [Dragón](/guide/zodiac-pair-dragon-rooster) · Triada media [Buey](/guide/zodiac-pair-ox-rooster), [Serpiente](/guide/zodiac-pair-snake-rooster) · Discordia [Tigre](/guide/zodiac-pair-tiger-rooster) · Choque [Conejo](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Tigre](/guide/zodiac-tiger) · [Gallo](/guide/zodiac-rooster), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-pig": {
    "eyebrow": "Por par",
    "title": "El Tigre y el Cerdo — Seis armonías",
    "summary": "Qué relación tienen el Tigre y el Cerdo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Tigre y el Cerdo forman una relación de seis armonías",
        "blocks": [
          {
            "p": "El Tigre y el Cerdo forman una relación de seis armonías. 寅 y 亥 forman una armonía con solo dos caracteres."
          },
          {
            "p": "Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y con {scoreYukhap} es el máximo que cualquiera de los dos animales puede obtener."
          },
          {
            "p": "En el círculo, 寅 está en el tercer lugar y 亥 en el duodécimo, y los dos caracteres están a tres pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Tigre y el Cerdo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Seis armonías"
                ],
                [
                  "Puntuación",
                  "{scoreYukhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacYukhap} puntos en la compatibilidad zodiacal y {swingDayBranchYukhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Tigre** — Seis armonías [Cerdo](/guide/zodiac-pair-tiger-pig) · Triada media [Caballo](/guide/zodiac-pair-tiger-horse) · Discordia [Gallo](/guide/zodiac-pair-tiger-rooster) · Choque [Mono](/guide/zodiac-pair-tiger-monkey)",
              "Los socios especiales **del Cerdo** — Seis armonías [Tigre](/guide/zodiac-pair-tiger-pig) · Triada media [Conejo](/guide/zodiac-pair-rabbit-pig) · Discordia [Dragón](/guide/zodiac-pair-dragon-pig) · Choque [Serpiente](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Tigre](/guide/zodiac-tiger) · [Cerdo](/guide/zodiac-pig), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rabbit": {
    "eyebrow": "Por par",
    "title": "El Conejo y el Conejo — Misma rama",
    "summary": "Qué relación tienen dos personas Conejo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Conejo comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Conejo comparten la misma rama (卯 y 卯). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "卯 es la cuarta de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Conejo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Conejo",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Conejo** — Seis armonías [Perro](/guide/zodiac-pair-rabbit-dog) · Triada media [Oveja](/guide/zodiac-pair-rabbit-goat), [Cerdo](/guide/zodiac-pair-rabbit-pig) · Discordia [Mono](/guide/zodiac-pair-rabbit-monkey) · Choque [Gallo](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Conejo](/guide/zodiac-rabbit), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-goat": {
    "eyebrow": "Por par",
    "title": "El Conejo y la Oveja — Triada media",
    "summary": "Qué relación tienen el Conejo y la Oveja, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Conejo y la Oveja forman una triada media",
        "blocks": [
          {
            "p": "El Conejo y la Oveja forman una triada media. 亥卯未 es un grupo de triada (el grupo de la madera), y 卯 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "El Cerdo (亥) y la Oveja (未) del mismo grupo carecen del carácter central 卯, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 卯 está en el cuarto lugar y 未 en el octavo, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Conejo y la Oveja",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Conejo** — Seis armonías [Perro](/guide/zodiac-pair-rabbit-dog) · Triada media [Oveja](/guide/zodiac-pair-rabbit-goat), [Cerdo](/guide/zodiac-pair-rabbit-pig) · Discordia [Mono](/guide/zodiac-pair-rabbit-monkey) · Choque [Gallo](/guide/zodiac-pair-rabbit-rooster)",
              "Los socios especiales **de la Oveja** — Seis armonías [Caballo](/guide/zodiac-pair-horse-goat) · Triada media [Conejo](/guide/zodiac-pair-rabbit-goat) · Discordia [Rata](/guide/zodiac-pair-rat-goat) · Choque [Buey](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Conejo](/guide/zodiac-rabbit) · [Oveja](/guide/zodiac-goat), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-monkey": {
    "eyebrow": "Por par",
    "title": "El Conejo y el Mono — Discordia",
    "summary": "Qué relación tienen el Conejo y el Mono, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Conejo y el Mono forman una discordia",
        "blocks": [
          {
            "p": "El Conejo y el Mono forman una discordia. La posición del choque de 卯 es 酉 (el Gallo), y 申 está justo al lado; justo al lado de 寅 (el Tigre), la posición del choque de 申, está 卯."
          },
          {
            "p": "Tradicionalmente se ve como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          },
          {
            "p": "En el círculo, 卯 está en el cuarto lugar y 申 en el noveno, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Conejo y el Mono",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Discordia"
                ],
                [
                  "Puntuación",
                  "{scoreWonjin}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacWonjin} puntos en la compatibilidad zodiacal y {swingDayBranchWonjin} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Conejo** — Seis armonías [Perro](/guide/zodiac-pair-rabbit-dog) · Triada media [Oveja](/guide/zodiac-pair-rabbit-goat), [Cerdo](/guide/zodiac-pair-rabbit-pig) · Discordia [Mono](/guide/zodiac-pair-rabbit-monkey) · Choque [Gallo](/guide/zodiac-pair-rabbit-rooster)",
              "Los socios especiales **del Mono** — Seis armonías [Serpiente](/guide/zodiac-pair-snake-monkey) · Triada media [Rata](/guide/zodiac-pair-rat-monkey) · Discordia [Conejo](/guide/zodiac-pair-rabbit-monkey) · Choque [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Conejo](/guide/zodiac-rabbit) · [Mono](/guide/zodiac-monkey), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rooster": {
    "eyebrow": "Por par",
    "title": "El Conejo y el Gallo — Choque",
    "summary": "Qué relación tienen el Conejo y el Gallo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Conejo y el Gallo forman un choque",
        "blocks": [
          {
            "p": "El Conejo y el Gallo forman un choque. 卯 y 酉 están directamente opuestos en el círculo."
          },
          {
            "p": "Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas."
          },
          {
            "p": "En el círculo, 卯 está en el cuarto lugar y 酉 en el décimo, y los dos caracteres están a seis pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Conejo y el Gallo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Choque"
                ],
                [
                  "Puntuación",
                  "{scoreChung}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacChung} puntos en la compatibilidad zodiacal y {swingDayBranchChung} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Conejo** — Seis armonías [Perro](/guide/zodiac-pair-rabbit-dog) · Triada media [Oveja](/guide/zodiac-pair-rabbit-goat), [Cerdo](/guide/zodiac-pair-rabbit-pig) · Discordia [Mono](/guide/zodiac-pair-rabbit-monkey) · Choque [Gallo](/guide/zodiac-pair-rabbit-rooster)",
              "Los socios especiales **del Gallo** — Seis armonías [Dragón](/guide/zodiac-pair-dragon-rooster) · Triada media [Buey](/guide/zodiac-pair-ox-rooster), [Serpiente](/guide/zodiac-pair-snake-rooster) · Discordia [Tigre](/guide/zodiac-pair-tiger-rooster) · Choque [Conejo](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Conejo](/guide/zodiac-rabbit) · [Gallo](/guide/zodiac-rooster), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-dog": {
    "eyebrow": "Por par",
    "title": "El Conejo y el Perro — Seis armonías",
    "summary": "Qué relación tienen el Conejo y el Perro, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Conejo y el Perro forman una relación de seis armonías",
        "blocks": [
          {
            "p": "El Conejo y el Perro forman una relación de seis armonías. 卯 y 戌 forman una armonía con solo dos caracteres."
          },
          {
            "p": "Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y con {scoreYukhap} es el máximo que cualquiera de los dos animales puede obtener."
          },
          {
            "p": "En el círculo, 卯 está en el cuarto lugar y 戌 en el undécimo, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Conejo y el Perro",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Seis armonías"
                ],
                [
                  "Puntuación",
                  "{scoreYukhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacYukhap} puntos en la compatibilidad zodiacal y {swingDayBranchYukhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Conejo** — Seis armonías [Perro](/guide/zodiac-pair-rabbit-dog) · Triada media [Oveja](/guide/zodiac-pair-rabbit-goat), [Cerdo](/guide/zodiac-pair-rabbit-pig) · Discordia [Mono](/guide/zodiac-pair-rabbit-monkey) · Choque [Gallo](/guide/zodiac-pair-rabbit-rooster)",
              "Los socios especiales **del Perro** — Seis armonías [Conejo](/guide/zodiac-pair-rabbit-dog) · Triada media [Caballo](/guide/zodiac-pair-horse-dog) · Discordia [Serpiente](/guide/zodiac-pair-snake-dog) · Choque [Dragón](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Conejo](/guide/zodiac-rabbit) · [Perro](/guide/zodiac-dog), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-pig": {
    "eyebrow": "Por par",
    "title": "El Conejo y el Cerdo — Triada media",
    "summary": "Qué relación tienen el Conejo y el Cerdo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Conejo y el Cerdo forman una triada media",
        "blocks": [
          {
            "p": "El Conejo y el Cerdo forman una triada media. 亥卯未 es un grupo de triada (el grupo de la madera), y 卯 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "La Oveja (未) y el Cerdo (亥) del mismo grupo carecen del carácter central 卯, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 卯 está en el cuarto lugar y 亥 en el duodécimo, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Conejo y el Cerdo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Conejo** — Seis armonías [Perro](/guide/zodiac-pair-rabbit-dog) · Triada media [Oveja](/guide/zodiac-pair-rabbit-goat), [Cerdo](/guide/zodiac-pair-rabbit-pig) · Discordia [Mono](/guide/zodiac-pair-rabbit-monkey) · Choque [Gallo](/guide/zodiac-pair-rabbit-rooster)",
              "Los socios especiales **del Cerdo** — Seis armonías [Tigre](/guide/zodiac-pair-tiger-pig) · Triada media [Conejo](/guide/zodiac-pair-rabbit-pig) · Discordia [Dragón](/guide/zodiac-pair-dragon-pig) · Choque [Serpiente](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Conejo](/guide/zodiac-rabbit) · [Cerdo](/guide/zodiac-pig), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dragon": {
    "eyebrow": "Por par",
    "title": "El Dragón y el Dragón — Misma rama",
    "summary": "Qué relación tienen dos personas Dragón, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Dragón comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Dragón comparten la misma rama (辰 y 辰). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "辰 es la quinta de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Dragón",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Dragón",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Dragón** — Seis armonías [Gallo](/guide/zodiac-pair-dragon-rooster) · Triada media [Rata](/guide/zodiac-pair-rat-dragon) · Discordia [Cerdo](/guide/zodiac-pair-dragon-pig) · Choque [Perro](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Dragón](/guide/zodiac-dragon), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-rooster": {
    "eyebrow": "Por par",
    "title": "El Dragón y el Gallo — Seis armonías",
    "summary": "Qué relación tienen el Dragón y el Gallo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Dragón y el Gallo forman una relación de seis armonías",
        "blocks": [
          {
            "p": "El Dragón y el Gallo forman una relación de seis armonías. 辰 y 酉 forman una armonía con solo dos caracteres."
          },
          {
            "p": "Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y con {scoreYukhap} es el máximo que cualquiera de los dos animales puede obtener."
          },
          {
            "p": "En el círculo, 辰 está en el quinto lugar y 酉 en el décimo, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Dragón y el Gallo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Seis armonías"
                ],
                [
                  "Puntuación",
                  "{scoreYukhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacYukhap} puntos en la compatibilidad zodiacal y {swingDayBranchYukhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Dragón** — Seis armonías [Gallo](/guide/zodiac-pair-dragon-rooster) · Triada media [Rata](/guide/zodiac-pair-rat-dragon) · Discordia [Cerdo](/guide/zodiac-pair-dragon-pig) · Choque [Perro](/guide/zodiac-pair-dragon-dog)",
              "Los socios especiales **del Gallo** — Seis armonías [Dragón](/guide/zodiac-pair-dragon-rooster) · Triada media [Buey](/guide/zodiac-pair-ox-rooster), [Serpiente](/guide/zodiac-pair-snake-rooster) · Discordia [Tigre](/guide/zodiac-pair-tiger-rooster) · Choque [Conejo](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Dragón](/guide/zodiac-dragon) · [Gallo](/guide/zodiac-rooster), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dog": {
    "eyebrow": "Por par",
    "title": "El Dragón y el Perro — Choque",
    "summary": "Qué relación tienen el Dragón y el Perro, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Dragón y el Perro forman un choque",
        "blocks": [
          {
            "p": "El Dragón y el Perro forman un choque. 辰 y 戌 están directamente opuestos en el círculo."
          },
          {
            "p": "Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas."
          },
          {
            "p": "En el círculo, 辰 está en el quinto lugar y 戌 en el undécimo, y los dos caracteres están a seis pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Dragón y el Perro",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Choque"
                ],
                [
                  "Puntuación",
                  "{scoreChung}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacChung} puntos en la compatibilidad zodiacal y {swingDayBranchChung} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Dragón** — Seis armonías [Gallo](/guide/zodiac-pair-dragon-rooster) · Triada media [Rata](/guide/zodiac-pair-rat-dragon) · Discordia [Cerdo](/guide/zodiac-pair-dragon-pig) · Choque [Perro](/guide/zodiac-pair-dragon-dog)",
              "Los socios especiales **del Perro** — Seis armonías [Conejo](/guide/zodiac-pair-rabbit-dog) · Triada media [Caballo](/guide/zodiac-pair-horse-dog) · Discordia [Serpiente](/guide/zodiac-pair-snake-dog) · Choque [Dragón](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Dragón](/guide/zodiac-dragon) · [Perro](/guide/zodiac-dog), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-pig": {
    "eyebrow": "Por par",
    "title": "El Dragón y el Cerdo — Discordia",
    "summary": "Qué relación tienen el Dragón y el Cerdo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Dragón y el Cerdo forman una discordia",
        "blocks": [
          {
            "p": "El Dragón y el Cerdo forman una discordia. La posición del choque de 辰 es 戌 (el Perro), y 亥 está justo al lado; justo al lado de 巳 (la Serpiente), la posición del choque de 亥, está 辰."
          },
          {
            "p": "Tradicionalmente se ve como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          },
          {
            "p": "En el círculo, 辰 está en el quinto lugar y 亥 en el duodécimo, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Dragón y el Cerdo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Discordia"
                ],
                [
                  "Puntuación",
                  "{scoreWonjin}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacWonjin} puntos en la compatibilidad zodiacal y {swingDayBranchWonjin} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Dragón** — Seis armonías [Gallo](/guide/zodiac-pair-dragon-rooster) · Triada media [Rata](/guide/zodiac-pair-rat-dragon) · Discordia [Cerdo](/guide/zodiac-pair-dragon-pig) · Choque [Perro](/guide/zodiac-pair-dragon-dog)",
              "Los socios especiales **del Cerdo** — Seis armonías [Tigre](/guide/zodiac-pair-tiger-pig) · Triada media [Conejo](/guide/zodiac-pair-rabbit-pig) · Discordia [Dragón](/guide/zodiac-pair-dragon-pig) · Choque [Serpiente](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Dragón](/guide/zodiac-dragon) · [Cerdo](/guide/zodiac-pig), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-snake": {
    "eyebrow": "Por par",
    "title": "La Serpiente y la Serpiente — Misma rama",
    "summary": "Qué relación tienen dos personas Serpiente, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Serpiente comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Serpiente comparten la misma rama (巳 y 巳). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "巳 es la sexta de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Serpiente",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de la Serpiente",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Serpiente** — Seis armonías [Mono](/guide/zodiac-pair-snake-monkey) · Triada media [Gallo](/guide/zodiac-pair-snake-rooster) · Discordia [Perro](/guide/zodiac-pair-snake-dog) · Choque [Cerdo](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Serpiente](/guide/zodiac-snake), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-monkey": {
    "eyebrow": "Por par",
    "title": "La Serpiente y el Mono — Seis armonías",
    "summary": "Qué relación tienen la Serpiente y el Mono, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Serpiente y el Mono forman una relación de seis armonías",
        "blocks": [
          {
            "p": "La Serpiente y el Mono forman una relación de seis armonías. 巳 y 申 forman una armonía con solo dos caracteres."
          },
          {
            "p": "Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y con {scoreYukhap} es el máximo que cualquiera de los dos animales puede obtener."
          },
          {
            "p": "En el círculo, 巳 está en el sexto lugar y 申 en el noveno, y los dos caracteres están a tres pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Serpiente y el Mono",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Seis armonías"
                ],
                [
                  "Puntuación",
                  "{scoreYukhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacYukhap} puntos en la compatibilidad zodiacal y {swingDayBranchYukhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Serpiente** — Seis armonías [Mono](/guide/zodiac-pair-snake-monkey) · Triada media [Gallo](/guide/zodiac-pair-snake-rooster) · Discordia [Perro](/guide/zodiac-pair-snake-dog) · Choque [Cerdo](/guide/zodiac-pair-snake-pig)",
              "Los socios especiales **del Mono** — Seis armonías [Serpiente](/guide/zodiac-pair-snake-monkey) · Triada media [Rata](/guide/zodiac-pair-rat-monkey) · Discordia [Conejo](/guide/zodiac-pair-rabbit-monkey) · Choque [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Serpiente](/guide/zodiac-snake) · [Mono](/guide/zodiac-monkey), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-rooster": {
    "eyebrow": "Por par",
    "title": "La Serpiente y el Gallo — Triada media",
    "summary": "Qué relación tienen la Serpiente y el Gallo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Serpiente y el Gallo forman una triada media",
        "blocks": [
          {
            "p": "La Serpiente y el Gallo forman una triada media. 巳酉丑 es un grupo de triada (el grupo del metal), y 酉 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "El Buey (丑) y la Serpiente (巳) del mismo grupo carecen del carácter central 酉, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 巳 está en el sexto lugar y 酉 en el décimo, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Serpiente y el Gallo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Serpiente** — Seis armonías [Mono](/guide/zodiac-pair-snake-monkey) · Triada media [Gallo](/guide/zodiac-pair-snake-rooster) · Discordia [Perro](/guide/zodiac-pair-snake-dog) · Choque [Cerdo](/guide/zodiac-pair-snake-pig)",
              "Los socios especiales **del Gallo** — Seis armonías [Dragón](/guide/zodiac-pair-dragon-rooster) · Triada media [Buey](/guide/zodiac-pair-ox-rooster), [Serpiente](/guide/zodiac-pair-snake-rooster) · Discordia [Tigre](/guide/zodiac-pair-tiger-rooster) · Choque [Conejo](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Serpiente](/guide/zodiac-snake) · [Gallo](/guide/zodiac-rooster), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-dog": {
    "eyebrow": "Por par",
    "title": "La Serpiente y el Perro — Discordia",
    "summary": "Qué relación tienen la Serpiente y el Perro, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Serpiente y el Perro forman una discordia",
        "blocks": [
          {
            "p": "La Serpiente y el Perro forman una discordia. La posición del choque de 巳 es 亥 (el Cerdo), y 戌 está justo al lado; justo al lado de 辰 (el Dragón), la posición del choque de 戌, está 巳."
          },
          {
            "p": "Tradicionalmente se ve como un par que se guarda rencor pero no puede separarse. Parece tranquilo en la superficie, pero se cree que el desajuste perdura, así que recibe {scoreWonjin} — más que un choque ({scoreChung}) y menos que neutral ({scoreNeutral})."
          },
          {
            "p": "En el círculo, 巳 está en el sexto lugar y 戌 en el undécimo, y los dos caracteres están a cinco pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Serpiente y el Perro",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Discordia"
                ],
                [
                  "Puntuación",
                  "{scoreWonjin}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacWonjin} puntos en la compatibilidad zodiacal y {swingDayBranchWonjin} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Serpiente** — Seis armonías [Mono](/guide/zodiac-pair-snake-monkey) · Triada media [Gallo](/guide/zodiac-pair-snake-rooster) · Discordia [Perro](/guide/zodiac-pair-snake-dog) · Choque [Cerdo](/guide/zodiac-pair-snake-pig)",
              "Los socios especiales **del Perro** — Seis armonías [Conejo](/guide/zodiac-pair-rabbit-dog) · Triada media [Caballo](/guide/zodiac-pair-horse-dog) · Discordia [Serpiente](/guide/zodiac-pair-snake-dog) · Choque [Dragón](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Serpiente](/guide/zodiac-snake) · [Perro](/guide/zodiac-dog), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-pig": {
    "eyebrow": "Por par",
    "title": "La Serpiente y el Cerdo — Choque",
    "summary": "Qué relación tienen la Serpiente y el Cerdo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "La Serpiente y el Cerdo forman un choque",
        "blocks": [
          {
            "p": "La Serpiente y el Cerdo forman un choque. 巳 y 亥 están directamente opuestos en el círculo."
          },
          {
            "p": "Este servicio mantiene {scoreChung} puntos incluso en un choque. En el myeongri tradicional un choque es una colisión, no el fin de una relación, y dar una puntuación cercana al mínimo equivaldría a pronunciar un veredicto sobre dos personas."
          },
          {
            "p": "En el círculo, 巳 está en el sexto lugar y 亥 en el duodécimo, y los dos caracteres están a seis pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "La Serpiente y el Cerdo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Choque"
                ],
                [
                  "Puntuación",
                  "{scoreChung}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par baja la puntuación final {swingZodiacChung} puntos en la compatibilidad zodiacal y {swingDayBranchChung} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Serpiente** — Seis armonías [Mono](/guide/zodiac-pair-snake-monkey) · Triada media [Gallo](/guide/zodiac-pair-snake-rooster) · Discordia [Perro](/guide/zodiac-pair-snake-dog) · Choque [Cerdo](/guide/zodiac-pair-snake-pig)",
              "Los socios especiales **del Cerdo** — Seis armonías [Tigre](/guide/zodiac-pair-tiger-pig) · Triada media [Conejo](/guide/zodiac-pair-rabbit-pig) · Discordia [Dragón](/guide/zodiac-pair-dragon-pig) · Choque [Serpiente](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Serpiente](/guide/zodiac-snake) · [Cerdo](/guide/zodiac-pig), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-horse": {
    "eyebrow": "Por par",
    "title": "El Caballo y el Caballo — Misma rama",
    "summary": "Qué relación tienen dos personas Caballo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Caballo comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Caballo comparten la misma rama (午 y 午). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "午 es la séptima de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Caballo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Caballo",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Caballo** — Seis armonías [Oveja](/guide/zodiac-pair-horse-goat) · Triada media [Tigre](/guide/zodiac-pair-tiger-horse), [Perro](/guide/zodiac-pair-horse-dog) · Discordia [Buey](/guide/zodiac-pair-ox-horse) · Choque [Rata](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Caballo](/guide/zodiac-horse), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-goat": {
    "eyebrow": "Por par",
    "title": "El Caballo y la Oveja — Seis armonías",
    "summary": "Qué relación tienen el Caballo y la Oveja, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Caballo y la Oveja forman una relación de seis armonías",
        "blocks": [
          {
            "p": "El Caballo y la Oveja forman una relación de seis armonías. 午 y 未 forman una armonía con solo dos caracteres."
          },
          {
            "p": "Una relación de seis armonías es la buena relación que aparece con más frecuencia en la compatibilidad, y con {scoreYukhap} es el máximo que cualquiera de los dos animales puede obtener."
          },
          {
            "p": "En el círculo, 午 está en el séptimo lugar y 未 en el octavo, y los dos caracteres están a un paso de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Caballo y la Oveja",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Seis armonías"
                ],
                [
                  "Puntuación",
                  "{scoreYukhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacYukhap} puntos en la compatibilidad zodiacal y {swingDayBranchYukhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Caballo** — Seis armonías [Oveja](/guide/zodiac-pair-horse-goat) · Triada media [Tigre](/guide/zodiac-pair-tiger-horse), [Perro](/guide/zodiac-pair-horse-dog) · Discordia [Buey](/guide/zodiac-pair-ox-horse) · Choque [Rata](/guide/zodiac-pair-rat-horse)",
              "Los socios especiales **de la Oveja** — Seis armonías [Caballo](/guide/zodiac-pair-horse-goat) · Triada media [Conejo](/guide/zodiac-pair-rabbit-goat) · Discordia [Rata](/guide/zodiac-pair-rat-goat) · Choque [Buey](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Caballo](/guide/zodiac-horse) · [Oveja](/guide/zodiac-goat), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-dog": {
    "eyebrow": "Por par",
    "title": "El Caballo y el Perro — Triada media",
    "summary": "Qué relación tienen el Caballo y el Perro, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El Caballo y el Perro forman una triada media",
        "blocks": [
          {
            "p": "El Caballo y el Perro forman una triada media. 寅午戌 es un grupo de triada (el grupo del fuego), y 午 es la **rama real** en su centro."
          },
          {
            "p": "Inyeon-Link solo acepta pares que incluyan la rama real, así que este par es una triada media ({scoreBanhap})."
          },
          {
            "p": "El Tigre (寅) y el Perro (戌) del mismo grupo carecen del carácter central 午, por lo que no se cuentan como armonía y se tratan como neutral."
          },
          {
            "p": "En el círculo, 午 está en el séptimo lugar y 戌 en el undécimo, y los dos caracteres están a cuatro pasos de distancia."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "El Caballo y el Perro",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Triada media"
                ],
                [
                  "Puntuación",
                  "{scoreBanhap}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacBanhap} puntos en la compatibilidad zodiacal y {swingDayBranchBanhap} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de cada animal",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Caballo** — Seis armonías [Oveja](/guide/zodiac-pair-horse-goat) · Triada media [Tigre](/guide/zodiac-pair-tiger-horse), [Perro](/guide/zodiac-pair-horse-dog) · Discordia [Buey](/guide/zodiac-pair-ox-horse) · Choque [Rata](/guide/zodiac-pair-rat-horse)",
              "Los socios especiales **del Perro** — Seis armonías [Conejo](/guide/zodiac-pair-rabbit-dog) · Triada media [Caballo](/guide/zodiac-pair-horse-dog) · Discordia [Serpiente](/guide/zodiac-pair-snake-dog) · Choque [Dragón](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Caballo](/guide/zodiac-horse) · [Perro](/guide/zodiac-dog), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-goat-goat": {
    "eyebrow": "Por par",
    "title": "La Oveja y la Oveja — Misma rama",
    "summary": "Qué relación tienen dos personas Oveja, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Oveja comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Oveja comparten la misma rama (未 y 未). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "未 es la octava de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Oveja",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales de la Oveja",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **de la Oveja** — Seis armonías [Caballo](/guide/zodiac-pair-horse-goat) · Triada media [Conejo](/guide/zodiac-pair-rabbit-goat) · Discordia [Rata](/guide/zodiac-pair-rat-goat) · Choque [Buey](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Oveja](/guide/zodiac-goat), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-monkey-monkey": {
    "eyebrow": "Por par",
    "title": "El Mono y el Mono — Misma rama",
    "summary": "Qué relación tienen dos personas Mono, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Mono comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Mono comparten la misma rama (申 y 申). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "申 es la novena de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Mono",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Mono",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Mono** — Seis armonías [Serpiente](/guide/zodiac-pair-snake-monkey) · Triada media [Rata](/guide/zodiac-pair-rat-monkey) · Discordia [Conejo](/guide/zodiac-pair-rabbit-monkey) · Choque [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Mono](/guide/zodiac-monkey), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rooster-rooster": {
    "eyebrow": "Por par",
    "title": "El Gallo y el Gallo — Misma rama",
    "summary": "Qué relación tienen dos personas Gallo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Gallo comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Gallo comparten la misma rama (酉 y 酉). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "酉 es la décima de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Gallo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Gallo",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Gallo** — Seis armonías [Dragón](/guide/zodiac-pair-dragon-rooster) · Triada media [Buey](/guide/zodiac-pair-ox-rooster), [Serpiente](/guide/zodiac-pair-snake-rooster) · Discordia [Tigre](/guide/zodiac-pair-tiger-rooster) · Choque [Conejo](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Gallo](/guide/zodiac-rooster), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dog-dog": {
    "eyebrow": "Por par",
    "title": "El Perro y el Perro — Misma rama",
    "summary": "Qué relación tienen dos personas Perro, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Perro comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Perro comparten la misma rama (戌 y 戌). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "戌 es la undécima de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Perro",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Perro",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Perro** — Seis armonías [Conejo](/guide/zodiac-pair-rabbit-dog) · Triada media [Caballo](/guide/zodiac-pair-horse-dog) · Discordia [Serpiente](/guide/zodiac-pair-snake-dog) · Choque [Dragón](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Perro](/guide/zodiac-dog), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-pig-pig": {
    "eyebrow": "Por par",
    "title": "El Cerdo y el Cerdo — Misma rama",
    "summary": "Qué relación tienen dos personas Cerdo, qué puntuación recibe y hasta qué punto esa puntuación modifica la puntuación final — expuesto tal como lo recogen las reglas de cálculo de Inyeon-Link.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Dos personas Cerdo comparten la misma rama",
        "blocks": [
          {
            "p": "Dos personas Cerdo comparten la misma rama (亥 y 亥). Significa que se parecen, no que se atraen."
          },
          {
            "p": "Por eso puntúa {scoreSame}, justo por encima de neutral ({scoreNeutral}): no es una armonía, un choque ni una discordia, solo está ligeramente elevado."
          },
          {
            "p": "亥 es la duodécima de las doce ramas terrestres."
          }
        ]
      },
      {
        "title": "Las cifras de este par",
        "blocks": [
          {
            "table": {
              "caption": "Dos personas Cerdo",
              "head": [
                "Elemento",
                "Valor"
              ],
              "rows": [
                [
                  "Relación",
                  "Misma rama"
                ],
                [
                  "Puntuación",
                  "{scoreSame}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad zodiacal",
                  "{weightZodiac}"
                ],
                [
                  "Parte de la puntuación final en la compatibilidad de la rama del día",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cuánto mueve la puntuación final",
        "blocks": [
          {
            "p": "Si todo lo demás es igual, este par sube la puntuación final {swingZodiacSame} puntos en la compatibilidad zodiacal y {swingDayBranchSame} puntos en la compatibilidad de la rama del día, en comparación con un par neutral."
          },
          {
            "p": "La compatibilidad zodiacal pone lado a lado las ramas de los años de nacimiento, y la compatibilidad de la rama del día las de los días de nacimiento. Las dos pueden ser ramas distintas, de modo que las mismas dos personas pueden mostrar relaciones diferentes en cada una."
          }
        ]
      },
      {
        "title": "Las demás relaciones especiales del Cerdo",
        "blocks": [
          {
            "ul": [
              "Los socios especiales **del Cerdo** — Seis armonías [Tigre](/guide/zodiac-pair-tiger-pig) · Triada media [Conejo](/guide/zodiac-pair-rabbit-pig) · Discordia [Dragón](/guide/zodiac-pair-dragon-pig) · Choque [Serpiente](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo que esta guía no dice",
        "blocks": [
          {
            "ul": [
              "Un solo animal no decide una relación entre dos personas. {weightSaju} de la puntuación final lo decide la compatibilidad de saju.",
              "Los cambios de puntos anteriores suponen que todo lo demás es igual; el resultado real lo fija el saju completo de ambas personas."
            ]
          },
          {
            "p": "La guía completa de cada animal está en [Cerdo](/guide/zodiac-pig), y la tabla completa, en la [tabla de las doce ramas](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Diez Dioses",
    "title": "Diez Dioses y Posición del Cónyuge",
    "summary": "Vemos qué es el tallo del día de cada persona respecto al de la otra a través de los Diez Dioses. Explicamos por qué la riqueza directa y la riqueza indirecta se leen de manera diferente a pesar de que ambas son riqueza.",
    "backLabel": "Base de Cálculo",
    "sections": [
      {
        "title": "El tallo del día es la persona misma",
        "blocks": [
          {
            "p": "Entre los ocho caracteres del saju, el **tallo del día** (el tallo celestial del día de nacimiento) se refiere a la persona misma. Los siete caracteres restantes se leen como el entorno en el que se encuentra ese tallo del día."
          },
          {
            "p": "Los **Diez Dioses** (十神) dividen cómo el tallo del día percibe otros caracteres en diez categorías. Lo que me nutre es **recurso**, lo que es igual a mí es **compañero**, lo que produzco es **salida**, lo que controlo es **riqueza**, y lo que me controla es **autoridad** — cada uno de los cinco se divide luego por polaridad, haciendo diez."
          }
        ]
      },
      {
        "title": "Lo que el tallo del día de cada persona es para los demás",
        "blocks": [
          {
            "p": "Este es el primer elemento en la compatibilidad. Una vez que se determina cómo el tallo del día de A percibe el tallo del día de B, también se determina la percepción de B sobre A, por lo que **solo hay seis posibilidades**."
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
            "p": "Hay un método para ver la relación del tallo del día con los tres elementos (generación mutua, igualdad, superación mutua). Es simple, pero **el yin y el yang desaparecen.** 甲 (madera yang) y 乙 (madera yin) se convierten en la misma 'igualdad' como 甲 y 甲, y la superación mutua se aplasta en una sola puntuación sin dirección o yin y yang."
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
            "p": "Incluso si son el mismo recurso, solo la **Riqueza Adecuada** emocional se considera la posición del cónyuge, mientras que el Recurso se lee como la naturaleza de la actividad y la riqueza. Por lo tanto, la Riqueza Adecuada y el Oficial Adecuado cuentan como 2 puntos, mientras que el Recurso y el Oficial cuentan como 1 punto, y ambas direcciones se suman — si ambas se ven como posiciones de cónyuge, es la más alta."
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
                  "Relación del tallo del día · Naturaleza conyugal",
                  "Los tallos del día de ambas personas — tallos celestiales",
                  "10"
                ],
                [
                  "Complemento de los cinco elementos",
                  "Mi elemento de apoyo y el poder de los cinco elementos del oponente",
                  "5"
                ],
                [
                  "Relación de la rama del día",
                  "las ramas del día de las dos personas",
                  "12"
                ],
                [
                  "Relación zodiacal",
                  "las ramas del año de las dos personas",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Dado que los valores no se intercambian entre elementos, **encontrar el punto más alto para cada rama será el punto más alto general**. No es necesario verificar todas las combinaciones de fechas de nacimiento: solo establecer los diez tallos celestiales, doce ramas terrestres y cinco elementos es suficiente."
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
            "p": "Esta es la decisión más importante en esta pantalla. Recoger las puntuaciones más altas para cada rama puede parecer que produce una 'coincidencia perfecta', pero esa persona puede **no existir realmente.**"
          },
          {
            "p": "En las personas reales, el día maestro y los cinco elementos no operan por separado. Una persona con 甲木 generalmente tiene una fuerte energía de 木 también. Este método de contar las ramas por separado ignora esa correlación, por lo que el valor obtenido al conectar las puntuaciones más altas para cada rama se convierte en una combinación que no existe en la realidad."
          },
          {
            "p": "Por lo tanto, la pantalla solo muestra **puntuaciones de elementos** y no proporciona una puntuación total. La puntuación total se calculará al recibir la fecha de nacimiento de la otra persona para [compatibilidad del saju](/compatibility)."
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
            "p": "Las razones por las que ciertos tipos obtuvieron puntuaciones altas también se anotan elemento por elemento — si el día maestro está en una posición favorable, o si esa persona posee la energía que actualmente necesito."
          }
        ]
      },
      {
        "title": "Herramienta de confirmación",
        "blocks": [
          {
            "p": "Puede que te preguntes si la persona que tienes en mente corresponde a ese tipo. Al ingresar su fecha de nacimiento en la herramienta de confirmación en la pantalla de resultados, se te informará sobre su día maestro, rama del día y rama del año. Los valores ingresados no se guardan en este momento [(no guardados)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Hora",
    "title": "La hora de nacimiento de cada persona se corrige por separado",
    "summary": "La compatibilidad calcula las horas de las dos personas por separado. Aquí se explica cómo se aplica la corrección cuando difieren los lugares de nacimiento y las épocas, y qué cambia cuando solo una de ellas no conoce su hora.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "El reloj y el sol no coinciden",
        "blocks": [
          {
            "p": "En el saju, la hora de nacimiento se lee a partir de la posición del sol, no del reloj. Pero todo un país mantiene una sola hora estándar, así que el reloj y el sol de cualquier lugar se van separando."
          },
          {
            "p": "La hora estándar de Corea se basa en 135° E, mientras que Seúl está a unos 127° E. El sol de Seúl alcanza su punto más alto más tarde de lo que indica el reloj, unos **32 minutos**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutos pueden mover el pilar de la hora un paso",
        "blocks": [
          {
            "p": "Quien nació en Seúl a las 11:40 según el reloj nació a las 11:08 en tiempo solar verdadero, que aún está dentro de la hora del Caballo (午, 11:00–13:00). Quien nació a las 11:20 según el reloj nació a las 10:48, que cae en la hora de la Serpiente (巳, 9:00–11:00). La corrección existe para las personas que se encuentran justo en un límite como este."
          }
        ]
      },
      {
        "title": "La corrección se aplica a cada persona por separado",
        "blocks": [
          {
            "p": "La compatibilidad construye la carta de cada persona por sí sola. Por eso la pantalla de entrada pide el lugar de nacimiento **de cada persona**. Si una persona nació en Seúl y la otra en el extranjero, sus horas se corrigen por separado, con distintas longitudes y zonas horarias."
          },
          {
            "p": "La lista de ciudades contiene actualmente {cityCount} lugares. En los países cuya longitud varía mucho, las ciudades se dividen, porque **15° de longitud mueven el pilar de la hora un paso**."
          },
          {
            "p": "Si no eliges, se usa Seúl. Si solo una persona nació en el extranjero y ambas se dejan en Seúl, solo el pilar de la hora de la persona nacida en el extranjero queda desviado; los valores de la otra persona no se ven afectados, porque la corrección se aplica persona por persona."
          }
        ]
      },
      {
        "title": "Épocas distintas usaron horas estándar distintas",
        "blocks": [
          {
            "p": "Dos personas de edades distintas vivieron bajo la hora estándar de períodos diferentes. Por eso la diferencia de longitud por sí sola no basta."
          },
          {
            "ul": [
              "**Antes de 1912** — Corea no tenía una hora estándar unificada (hora media local).",
              "**1954–1961** — la hora estándar era UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — estuvo en vigor el horario de verano."
            ]
          },
          {
            "p": "Inyeon-Link no fija un meridiano estándar de forma fija. Consulta la **zona horaria IANA** del lugar de nacimiento para hallar la hora estándar realmente vigente en ese momento, de modo que se aplica la época propia de cada persona aunque sus años de nacimiento difieran."
          }
        ]
      },
      {
        "title": "Justo después de la medianoche, cambia el tallo del día",
        "blocks": [
          {
            "p": "La corrección es de −32 minutos, así que quien nació entre las 00:00 y las 00:32 según el reloj nació en la **hora de las 23:00 del día anterior** en tiempo solar verdadero. La fecha se retrocede con ella."
          },
          {
            "p": "En la compatibilidad esto importa mucho. Cuando el pilar del día retrocede un día, cambian tanto el tallo del día como la rama del día, así que la relación de los tallos del día, la Estrella del Cónyuge y la relación de las ramas del día se recalculan con caracteres distintos, y las fuerzas de los cinco elementos se mueven con ellos."
          }
        ]
      },
      {
        "title": "No pasa nada si solo una persona desconoce su hora",
        "blocks": [
          {
            "p": "La hora de nacimiento es opcional, y la compatibilidad se calcula igualmente aunque solo una de las dos no conozca la suya. Solo la persona que no la conoce se calcula sin pilar de la hora, y la pantalla de resultados lo indica. Los valores de la otra persona permanecen igual."
          },
          {
            "p": "Ninguno de los cuatro ítems de compatibilidad usa directamente el pilar de la hora, pero sí afecta a las fuerzas de los cinco elementos, por lo que es más preciso introducirla si la conoces. La compatibilidad zodiacal da el mismo valor con o sin hora — [solo mira la rama del año](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Privacidad",
    "title": "Cómo evitamos guardar los datos de dos personas",
    "summary": "La compatibilidad te pide introducir también la fecha de nacimiento de otra persona. Aquí se explica, en términos técnicos, qué significa que los datos de ninguna de las dos personas se registren en ningún sitio, y qué viaja con un enlace de resultado.",
    "backLabel": "Base de cálculo",
    "sections": [
      {
        "title": "Estás introduciendo la información de otra persona",
        "blocks": [
          {
            "p": "La pantalla de compatibilidad recibe tu fecha de nacimiento y la de la otra persona juntas. La fecha de nacimiento de la otra persona es información personal suya, por eso explicamos por separado cómo trata Inyeon-Link ambas."
          },
          {
            "p": "No hay cuenta y no pedimos nombre, correo electrónico ni número de teléfono. Solo recibimos las dos fechas de nacimiento y, opcionalmente, la hora de nacimiento, el lugar de nacimiento y el género, y nada de ello permanece una vez terminado el cálculo."
          },
          {
            "p": "Hay un campo para un nombre que se muestra en la pantalla de resultados, pero es solo para mostrar y no se usa en el cálculo. No necesitas introducir un nombre real."
          }
        ]
      },
      {
        "title": "Un enlace de resultado contiene ambas fechas de nacimiento",
        "blocks": [
          {
            "p": "Cuando termina el cálculo, la dirección tiene este aspecto."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "La parte posterior al **#** contiene los datos de entrada de las dos personas. Se llama fragmento y, según el comportamiento estándar de la web, **el navegador no lo envía al servidor**. Fue diseñado para señalar una posición dentro de un documento, así que el servidor nunca lo ve."
          },
          {
            "p": "Cuando abres un enlace de resultado, el navegador lee ese valor y solicita un cálculo; el servidor recibe los valores que necesita, devuelve la respuesta y los olvida."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Antes de enviar el enlace a la otra persona",
        "blocks": [
          {
            "p": "No estar guardado en un servidor no es lo mismo que ser un enlace secreto. Quien reciba el enlace puede ver ambas fechas de nacimiento tal cual, y un enlace dejado en un chat permanece en ese chat con independencia de nuestro servidor. Envíalo recordando que contiene los datos de la otra persona."
          }
        ]
      },
      {
        "title": "Por qué no queda nada aunque el cálculo se ejecute en un servidor",
        "blocks": [
          {
            "p": "Para establecer una carta de saju necesitamos una tabla de almanaque, demasiado grande para enviarla al navegador, así que el cálculo se ejecuta en el servidor. Pero **una vez tramitada la solicitud, los valores no se usan en ningún otro sitio.** No hay código que los escriba en una base de datos."
          },
          {
            "p": "El único registro que queda es un contador que impide que una misma persona envíe demasiadas solicitudes en poco tiempo. No contiene ninguna fecha de nacimiento y no conserva la dirección IP tal cual; cuenta un único valor, calculado con un hash junto con la fecha, y ese valor cambia cuando cambia el día."
          }
        ]
      },
      {
        "title": "A qué renunciamos al no guardar",
        "blocks": [
          {
            "p": "Como no se guarda nada, hemos renunciado a algunas cosas."
          },
          {
            "ul": [
              "**No puedes recuperar un resultado de compatibilidad anterior.** Necesitas conservar el enlace para volver a verlo.",
              "**Las mismas dos personas se recalculan cada vez.** No hay caché. Pero todas las reglas son deterministas, así que [la misma entrada siempre da el mismo valor](/guide/how-compatibility).",
              "**Al actualizar vuelve la barrera publicitaria.** No hay dónde guardar el registro de que ya la viste."
            ]
          }
        ]
      },
      {
        "title": "Si compras un informe",
        "blocks": [
          {
            "p": "Si compras un informe, en ese momento se conserva un registro de la transacción: los registros de pago tienen un período de conservación exigido por ley, y sin un historial de pedidos no se puede tramitar un reembolso. Aun así, **las dos fechas de nacimiento no se adjuntan al pedido**; se piden de nuevo cuando se crea el PDF tras la confirmación del pago y se usan solo en ese momento."
          },
          {
            "p": "Los detalles están en la [política de privacidad](/privacy)."
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
            "p": "También se incluye en la misma sección el **gráfico de relaciones de los cuatro pilares**. La única que entra en la tasa de coincidencia es la rama del día (日支) — porque es la posición del cónyuge — pero las otras ramas de año, mes y hora también se pueden leer con el mismo gráfico de relaciones."
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
            "p": "La tasa de coincidencia solo compara los **tallos del día** de ambos individuos. Sin embargo, los otros tres pilares de la otra persona también se determinan por los Diez Dioses utilizando las mismas reglas. Si bien puedes entender **lo que esta persona significa para mí** mirando solo el tallo del día, no puedes saber **qué posición de esa persona significa para mí**."
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
