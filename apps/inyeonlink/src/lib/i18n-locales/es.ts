// 인연링크(사주 궁합·인연의 결) 화면 문구의 스페인어(es) 사전.
// `src/lib/i18n.ts`의 `en` 사전을 기준으로 옮기고, 영어가 모호한 자리는 같은 파일의 `ko` 원문을
// 대조해 뜻을 맞췄다. 언어 선택기 3개 키와 footer 13개 키는 naminglink의 es 문구를 그대로 가져왔다.

import type { Dictionary } from "@/lib/i18n";

export const es: Dictionary = {
  brand: "InyeonLink",
  tagline: "Compatibilidad leída a través del Saju y los signos del zodiaco",
  currentLanguage: "Idioma actual",
  moreLanguages: "Más",
  closeLanguages: "Cerrar",
  landing: {
    title: "Descubre cómo encajan\ndos personas",
    subtitle:
      "Solo necesitas una fecha de nacimiento.\nCombinamos la compatibilidad del Saju (Cuatro Pilares) con la del zodiaco y la mostramos como índice de compatibilidad.",
    cta: "Ver la compatibilidad Saju",
    howTitle: "Cómo funciona",
    steps: [
      "Introduce ambas fechas de nacimiento. La hora de nacimiento es opcional.",
      "La compatibilidad Saju sale de los elementos del maestro del día, del equilibrio elemental y de la rama del día; la del zodiaco, de la rama del año.",
      "Las dos puntuaciones se combinan en un índice de compatibilidad ponderado.",
    ],
    privacyTitle: "Nada de lo que introduces se guarda",
    privacyBody:
      "Las fechas de nacimiento se usan solo mientras se calcula el resultado y nunca se registran. No hace falta ninguna cuenta. Nada de lo que lleva un enlace de resultado se envía al servidor.",
    disclaimer:
      "Es una lectura tradicional del Saju ofrecida como referencia. No es una predicción científica ni un veredicto sobre ninguna relación.",
  },
  form: {
    title: "Ambas fechas de nacimiento",
    description:
      "Conocer la hora de nacimiento afina la lectura, pero no es obligatorio.",
    personA: "Primera persona",
    personB: "Segunda persona",
    nickname: "Cómo llamarle",
    nicknamePlaceholder: "p. ej. Yo",
    nicknameHint: "Solo se muestra en la pantalla de resultados. No se usa en el cálculo.",
    gender: "Género",
    male: "Hombre",
    female: "Mujer",
    genderUnspecified: "Prefiero no decirlo",
    genderHint:
      "El Saju tradicional lee la posición del cónyuge de forma distinta según el género. Si lo omites, ese factor queda fuera del cálculo.",
    birthplace: "Lugar de nacimiento",
    birthplaceHint:
      "El pilar de la hora se calcula con la hora solar verdadera de tu lugar de nacimiento, incluidos el horario de verano y los cambios históricos de huso horario. Si tu lugar de nacimiento no aparece, elige la ciudad más cercana: cuanto más cerca esté, más preciso será el pilar de la hora.",
    calendar: "Calendario",
    solar: "Solar",
    lunar: "Lunar",
    leapMonth: "Mes bisiesto",
    birthDate: "Fecha de nacimiento",
    year: "Año",
    month: "Mes",
    day: "Día",
    birthTime: "Hora de nacimiento",
    unknownTime: "No sé la hora",
    hour: "Hora",
    minute: "Minuto",
    submit: "Calcular la compatibilidad",
    submitting: "Calculando…",
    errorInvalidDate:
      "Comprueba la fecha de nacimiento. Si es lunar, comprueba también si cae en un mes bisiesto.",
    errorGeneric: "El cálculo ha fallado. Inténtalo de nuevo en un momento.",
  },
  reading: {
    chartTitle: "Ambas cartas",
    chartHint:
      "El Saju representa el año, el mes, el día y la hora de nacimiento con dos caracteres cada uno. Todas las puntuaciones de abajo salen de estos ocho caracteres.",
    pillarYear: "Año",
    pillarMonth: "Mes",
    pillarDay: "Día",
    pillarHour: "Hora",
    pillarHourUnknown: "Sin hora de nacimiento",
    dayMasterLabel: "Maestro del día",
    animalLabel: "Zodiaco",
    seasonLabel: "Estación de nacimiento",
    elementsTitle: "Fuerza de los elementos",
    strongest: "El más fuerte",
    scarcest: "El más escaso",
    strengthTitle: "Lo que juega a favor de esta pareja",
    cautionTitle: "A qué prestar atención",
    bodyStrengthTitle: "Fuerza del maestro del día",
    favorableLabel: "Lo que necesitas ahora",
  },
  bodyStrength: {
    STRONG: {
      name: "Maestro del día fuerte",
      body: "Los elementos que sostienen tu maestro del día están llenos. Eso te da impulso propio, pero también se inclina fácilmente hacia un lado: sueles asentarte cuando algo drena ese exceso.",
    },
    BALANCED: {
      name: "Maestro del día equilibrado",
      body: "Lo que sostiene tu maestro del día y lo que toma de él están casi igualados. Demasiado parejo para decantarse, así que aquí leemos como necesidad aquello que esté más fino.",
    },
    WEAK: {
      name: "Maestro del día débil",
      body: "Los elementos que sostienen tu maestro del día están finos. Tomas bien fuerza de tu entorno, pero te desgastas al resistir en solitario: te creces cuando algo te respalda.",
    },
  },
  relation: {
    title: "Cómo encajan los dos",
    hint: "El Saju nombra con diez términos la manera en que dos maestros del día se ven entre sí. La lectura tiene dirección: cómo ves a la otra persona y cómo te ve ella pueden diferir.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Semejantes",
        body: "Los maestros del día llevan la misma energía. Mucho se da por sobreentendido y los gustos coinciden. El inconveniente es que ambos son fuertes y débiles en los mismos puntos, así que la dificultad tiende a frenarlos a la vez en el mismo lugar.",
      },
      NURTURING: {
        name: "Uno nutre, el otro florece",
        body: "La energía fluye en un solo sentido. Quien recibe se siente a gusto y le nacen más ganas de hacer cosas; quien da encuentra satisfacción en que al otro le vaya bien. Como el flujo es unidireccional, algo tiene que volver o quien da acabará agotándose.",
      },
      TENSION: {
        name: "Uno sujeta al otro",
        body: "Uno de los dos ocupa la posición que refrena al otro. La tensión impide que ambos se aflojen y suele dar resultados cuando trabajan juntos. Quien es refrenado puede sentirse evaluado sin descanso, así que el reconocimiento debe llegar antes que la corrección.",
      },
    },
    leadNote: {
      NURTURING: "Aquí **{lead}** es quien entrega la energía.",
      TENSION: "Aquí **{lead}** es quien marca el ritmo.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Compañero (比肩)",
      body: "Alguien que está hombro con hombro. Fácil de tratar y cómodo de tener cerca, pero cuesta ceder cuando ambos quieren lo mismo.",
    },
    GEOPJAE: {
      name: "Rival (劫財)",
      body: "Parecidos, pero con maneras distintas. Formidables cuando empujan en la misma dirección; afilados con las cuentas en cuanto hay algo que repartir.",
    },
    SIKSIN: {
      name: "Expresión (食神)",
      body: "Alguien que saca a la luz lo que llevas dentro. A su lado hablas más y te nacen más ganas de hacer cosas. Una de las posiciones más cómodas que existen.",
    },
    SANGGWAN: {
      name: "Perturbador (傷官)",
      body: "Alguien que sacude tu marco. Interesante y estimulante, pero cuando las palabras se afilan entre los dos, el corte dura.",
    },
    PYEONJAE: {
      name: "Fortuna inesperada (偏財)",
      body: "Alguien a quien te dan ganas de cuidar. Hay mucha diversión espontánea, aunque el peso de la relación puede quedarse ligero.",
    },
    JEONGJAE: {
      name: "Riqueza estable (正財)",
      body: "Tradicionalmente, la posición del cónyuge para un hombre. El cuidado llega de forma constante y la relación se asienta en la vida cotidiana más que en los picos.",
    },
    PYEONGWAN: {
      name: "Retador (偏官)",
      body: "Alguien que te mantiene en tensión. La atracción es fuerte y cuesta apartar la mirada, pero la cercanía sostenida puede empezar a sentirse como presión.",
    },
    JEONGGWAN: {
      name: "Autoridad (正官)",
      body: "Tradicionalmente, la posición del cónyuge para una mujer. Te pone en tu sitio y aporta orden y estabilidad a la relación.",
    },
    PYEONIN: {
      name: "Apoyo poco convencional (偏印)",
      body: "Alguien que te ayuda de una manera insólita. Hay momentos de verdadera hondura, aunque lleva tiempo entender el método del otro.",
    },
    JEONGIN: {
      name: "Sostén (正印)",
      body: "Alguien que te acoge y te cuida. Te dan ganas de apoyarte y la mente se serena. Pero si el apoyo va solo en un sentido, la relación se inclina.",
    },
  },
  dayMasters: {
    甲: { name: "Madera Yang (甲)", trait: "Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse." },
    乙: { name: "Madera Yin (乙)", trait: "Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra." },
    丙: { name: "Fuego Yang (丙)", trait: "El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural." },
    丁: { name: "Fuego Yin (丁)", trait: "Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos." },
    戊: { name: "Tierra Yang (戊)", trait: "Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada." },
    己: { name: "Tierra Yin (己)", trait: "Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe." },
    庚: { name: "Metal Yang (庚)", trait: "Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso." },
    辛: { name: "Metal Yin (辛)", trait: "Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza." },
    壬: { name: "Agua Yang (壬)", trait: "Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas." },
    癸: { name: "Agua Yin (癸)", trait: "Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras." },
  },
  dayMasterSigns: {
    甲: [
      "Dice lo que piensa incluso en un primer encuentro.",
      "Rara vez cambia un plan o una promesa una vez fijados.",
      "Rechaza sin rodeos, lo que puede sonar brusco.",
    ],
    乙: [
      "Esquiva la confrontación y toma otro camino.",
      "Parece blando y, aun así, acaba donde quería llegar.",
      "Tantea el ambiente antes de sumarse a un grupo.",
    ],
    丙: [
      "Habla primero con la gente que acaba de conocer.",
      "Lo que le gusta y lo que no se le nota en la cara.",
      "Acaba en el centro de una reunión sin proponérselo.",
    ],
    丁: [
      "Callado al principio, atento cuando hay confianza.",
      "Prefiere una charla larga con una o dos personas antes que una multitud.",
      "Recuerda un comentario de pasada y lo saca más tarde.",
    ],
    戊: [
      "Habla poco; su voz rara vez sube aunque haya urgencia.",
      "Es quien lo zanja al final mientras los demás aplazan la decisión.",
      "Un no, una vez dicho, sigue siendo no durante mucho tiempo.",
    ],
    己: [
      "Escucha más tiempo del que habla.",
      "Le cuesta negarse, así que el trabajo se le acumula.",
      "Lo que resolvió en silencio solo sale a la luz después.",
    ],
    庚: [
      "Decide rápido y lo dice en el acto.",
      "No suaviza las cosas, lo que puede leerse como frialdad.",
      "Se le nota la inquietud cuando algo se alarga.",
    ],
    辛: [
      "Tiene criterios claros sobre la ropa y las cosas que elige.",
      "No puede dejar pasar un trabajo a medias sin señalarlo.",
      "Escatima los elogios, pero cuando los da van en serio.",
    ],
    壬: [
      "Se mezcla con facilidad con toda clase de gente.",
      "Saca lo que vendrá después antes que lo que tiene delante.",
      "Le incomoda estar atado mucho tiempo a un solo lugar.",
    ],
    癸: [
      "Habla poco, pero ha leído la situación con exactitud.",
      "Es el primero en notar que cambia el ambiente.",
      "Guarda su mundo interior, así que lleva tiempo conocerle.",
    ],
  },
  animalTraits: {
    rat: "Rápida en darse cuenta y rápida en asegurar lo que importa. La primera en moverse en una crisis.",
    ox: "Parece lento, pero llega hasta el final. Lo que asume, no lo suelta.",
    tiger: "Sin miedo y siempre al frente. No puede dejar pasar una injusticia.",
    rabbit: "Suave y perceptivo. Sabe rodear en lugar de chocar.",
    dragon: "De corazón grande e ideales altos. Rara vez se conforma con lo corriente.",
    snake: "Se guarda sus cosas y piensa hondo. Juzga con acierto.",
    horse: "Alegre e inquieto. Lo que peor lleva es estar encerrado.",
    goat: "Cálida y considerada. Guarda mucho tiempo las palabras duras.",
    monkey: "Ingenioso y rápido para adaptarse. La repetición le aburre.",
    rooster: "Diligente y meticuloso. No puede dejar nada fuera de sitio.",
    dog: "Leal hasta el final una vez que da su confianza. La traición le duele especialmente.",
    pig: "Generoso y franco. Confía con facilidad, a veces a un precio.",
  },
  affinity: {
    menu: "Tu perfil de afinidad",
    formTitle: "Qué tipo de persona te conviene",
    formDescription:
      "Basta con una fecha de nacimiento. Puedes leer esto sin saber el cumpleaños de nadie, o sin tener aún a nadie en mente.",
    meLegend: "Tú",
    genderHint:
      "El Saju tradicional lee la posición del cónyuge de forma distinta según el género. Si lo dejas sin indicar, ese factor se descarta en vez de suponerse.",
    seekingLabel: "Busco",
    seekingHint:
      "La posición del cónyuge (Jeongjae / Jeonggwan) solo puede juzgarse cuando se conocen ambos géneros.",
    seekingAny: "Sin especificar",
    submit: "Ver mi perfil de afinidad",
    submitting: "Leyendo…",

    resultTitle: "Tu perfil de afinidad",
    intro:
      "Esta es la veta de persona hacia la que se inclina tu carta. **Puedes reconocer estos tipos por el temperamento,** mucho antes de conocer una fecha de nacimiento.",
    scoreCaption:
      "Son las mismas puntuaciones por factor que usa el motor de compatibilidad, no un índice de compatibilidad combinado.",
    meTitle: "Dónde estás tú",
    meBody: "Eres {dayMaster} y ahora mismo eres {strength}.",
    meHint:
      "El Saju escribe tu año, mes, día y hora de nacimiento con ocho caracteres. **El primer carácter del día de nacimiento te representa a ti**: es lo que se llama el tronco del día. Todos los tipos de abajo están ordenados por ese único carácter.",
    bestTitle: "Vetas que te convienen",
    bestHint:
      "Este es el tronco del día de la otra persona, **la energía del día en que nació**, clasificado en diez clases, de las cuales estas tres engranan con la tuya. A menudo puedes adivinarlo por el comportamiento de abajo, mucho antes de conocer una fecha de nacimiento.",
    signsTitle: "Cómo se manifiesta",
    avoidTitle: "Vetas que dan trabajo",
    avoidHint:
      "No es una advertencia. Significa que la comodidad llega después, cuando ambos hayan puesto tiempo de por medio.",
    bondLabel: "Engranaje de temperamentos",
    spouseLabel: "Posición del cónyuge",
    spouseSkipped: "El género se dejó sin indicar, así que este factor se descartó",
    scoreHelp:
      "**Engranaje de temperamentos**: cómo se traban las energías de los días de nacimiento de ambos. Incluso una pareja de tira y afloja puntúa lo más alto cuando el yin y el yang quedan cruzados.\n**Posición del cónyuge**: el Saju tradicional reserva una posición para el cónyuge, Jeongjae para los hombres y Jeonggwan para las mujeres. Lo comprobamos **en ambos sentidos**: si esa persona ocupa esa posición para ti y si tú la ocupas para ella. Ambas a la vez es la combinación que la tradición valora más alto.",
    typeHeading: "Alguien como {name}",
    needTitle: "De qué andas escaso ahora mismo",
    needBody:
      "Si en la otra persona abunda {elements}, se llena el lugar que en ti está fino.",
    needHint:
      "No puedes leer los cinco elementos de alguien a simple vista. Pero en cuanto sepas su fecha de nacimiento, mira aquí primero.",
    zodiacTitle: "El zodiaco, como nota al margen",
    zodiacHint:
      "El zodiaco solo necesita un año de nacimiento, así que es lo más rápido de comprobar. También es uno de los cuatro pilares: tómalo como una pista.",
    zodiacGood: "Signos que te convienen",
    zodiacHard: "Signos que rozan",
    tableType: "Tipo",
    tableSign: "Signo",
    tableYears: "Años de nacimiento",
    bornYear: "nacido en {year}",
    younger: "{n} años menos",
    older: "{n} años más",
    sameAge: "misma edad",
    zodiacYearsCaution:
      "En el Saju el año cambia en Ipchun (hacia el 4 de febrero), no el 1 de enero. **Quien nace en enero o a principios de febrero pertenece al signo del año anterior**, así que en esas fechas conviene mirar el año de un lado y del otro.",
    dayBranchTitle: "¿Es esta la persona para mí?",
    dayBranchBody:
      "Basta una fecha de nacimiento para comprobar si alguien te conviene.\nPara la lectura completa, usa la compatibilidad Saju al final de esta página.",
    check: {
      button: "Comprobar el cumpleaños de alguien",
      title: "¿De qué veta es esta persona?",
      body: "Introduce una fecha de nacimiento y te diremos cuál de los diez tipos de arriba es. No se calcula ninguna puntuación de compatibilidad.",
      submit: "Comprobar",
      checking: "Comprobando…",
      rank: "tu n.º {rank}",
      heading: "Esta persona es {name}",
      caution:
        "Esto lee solo el día de nacimiento. **Si nació cerca de la medianoche**, el día puede caer a un lado o al otro, y los nacimientos de enero o principios de febrero pertenecen al signo del año anterior.",
      close: "Cerrar",
      another: "Comprobar a otra persona",
      error: "Comprueba la fecha: no existe o está fuera de rango.",
    },
    nextTitle: "¿Tienes a alguien en mente?",
    nextBody:
      "Introduce ambas fechas de nacimiento y obtendrás el índice de compatibilidad real, con todos los factores de arriba sumados.",
    nextButton: "Ver la compatibilidad Saju",
    recalculate: "Volver a leer",
    copyLink: "Copiar el enlace del resultado",
    copied: "Copiado",
    missingInput: "No hemos podido leer el resultado. Empieza de nuevo, por favor.",
    partialTime:
      "No se indicó la hora de nacimiento, así que se dejó fuera el pilar de la hora. Añadirla afina aquello de lo que andas escaso.",
    disclaimer:
      "Una referencia desde la perspectiva del Saju tradicional. No te está diciendo que busques ni que evites a ninguna persona en concreto.",
  },
  result: {
    title: "Resultado de compatibilidad",
    totalLabel: "Índice de compatibilidad",
    breakdown: "Puntuación por factor",
    recalculate: "Empezar de nuevo",
    copyLink: "Copiar el enlace del resultado",
    copied: "Copiado",
    missingInput: "No se ha podido leer este resultado. Introduce las fechas de nuevo.",
    partialTime:
      "No se indicó la hora de nacimiento, así que se dejó fuera el pilar de la hora. Añadirla hace la lectura más precisa.",
    engineVersion: "Calculado con",
    disclaimer:
      "Es una lectura tradicional del Saju ofrecida como referencia. No es una predicción científica ni un veredicto sobre ninguna relación.",
  },
  ads: { label: "Publicidad" },
  analyzing: {
    title: "Leyendo ambas cartas",
    quotes: [
      "A la persona adecuada no la encuentras tanto como la reconoces.",
      "Una buena pareja no es la que nunca discute, sino la que vuelve después de discutir.",
      "El Saju no es una respuesta fija. Es un lenguaje más para entenderse.",
      "Hay uniones fáciles porque las dos personas se parecen; otras enseñan precisamente porque no.",
      "Las relaciones que duran suelen ser aquellas en las que nada se quedó sin decir demasiado tiempo.",
      "Si su manera te resulta ajena, significa que tiene algo que tú no tienes.",
      "La compatibilidad es mitad lo que se trae de nacimiento y mitad lo que se construye.",
      "Una relación dura cuando apoyarse y dar se van turnando.",
      "Más importante que la puntuación es cómo se lee.",
      "Si cada uno vive una estación distinta, basta con contarle al otro cómo es la suya.",
    ],
    gateTitle: "Tu resultado está listo",
    gateBody:
      "Mira un anuncio breve para abrirlo. Los ingresos por publicidad son lo que mantiene gratuito este servicio.",
    watchButton: "Ver un anuncio y abrir el resultado",
    watching: "Viendo el anuncio",
    remaining: "Tu resultado se abre en {seconds} s",
  },
  report: {
    title: "Guarda esta lectura en PDF",
    body: "Convertimos este resultado en un PDF de tres páginas, incluidas las cifras de fuerza elemental que no se muestran en pantalla.",
    buyButton: "Pagar {price} y descargar",
    preparing: "Aún no disponible",
    ordering: "Creando tu pedido…",
    paying: "Procesando el pago…",
    issuing: "Preparando tu informe…",
    done: "Descargado. Usa el botón de abajo para descargarlo otra vez.",
    failed: "El pago o la descarga han fallado. Inténtalo de nuevo en un momento.",
    retry: "Descargar otra vez",
    contents: [
      "Página 1: índice de compatibilidad, lo que juega a favor de la pareja y a qué prestar atención",
      "Página 2: la forma de la relación, los diez dioses y las puntuaciones por factor",
      "Página 3: ambas cartas y la fuerza de los elementos",
    ],
    consentLabel:
      "Entiendo que se trata de contenido digital entregado de inmediato tras el pago y que **el desistimiento por simple cambio de opinión queda restringido una vez completada la descarga**.",
    consentRequired: "Confirma las condiciones de desistimiento antes de pagar.",
    productInfoTitle: "Información del producto",
    productInfo: [
      ["Proveedor", "Naming-Link"],
      ["Formato", "Un documento PDF (3 páginas), descargado en pantalla justo después del pago."],
      ["Requisitos", "Cualquier dispositivo que abra un PDF. No hace falta instalación ni cuenta."],
      ["Plazo de uso", "Sin límite. El archivo que descargas es tuyo."],
      ["Nueva descarga", "Hasta cinco veces con el mismo pedido. No guardamos ninguna copia, por lo que no puede volver a generarse una vez que sales de la pantalla de resultados."],
      ["Desistimiento", "Reembolso íntegro antes de que empiece la descarga. Una vez completada, el desistimiento por cambio de opinión queda restringido (art. 17.2 de la Ley coreana de comercio electrónico)."],
      ["Costes de devolución", "Ninguno: es contenido digital, no hay envío."],
    ],
    refundContact:
      "Para reembolsos o consultas, ponte en contacto con el centro de atención al cliente o el correo de abajo. Si el documento no pudo generarse, o el importe cobrado difiere del pedido, reembolsamos el total.",
  },
  affinityReport: {
    title: "Guarda tu perfil de afinidad en PDF",
    body: "Convertimos esta lectura en un PDF de cuatro páginas. Incluye **la clasificación completa que la pantalla no muestra**: la pantalla te da los tres primeros, el PDF lleva los diez tipos y los doce signos.",
    buyButton: "Pagar {price} y descargar",
    preparing: "En preparación",
    ordering: "Creando el pedido…",
    paying: "Procesando el pago…",
    issuing: "Generando tu informe…",
    done: "Descargado. Usa el botón de abajo para obtenerlo otra vez.",
    failed: "El pago o la descarga no se han completado. Inténtalo de nuevo en breve.",
    retry: "Descargar otra vez",
    contents: [
      "Página 1: dónde estás tú y de qué andas escaso",
      "Página 2: tres vetas que te convienen, con claves de comportamiento",
      "Página 3: la veta que da trabajo, más la clasificación completa de los troncos del día",
      "Página 4: clasificación completa de los doce signos, con años de nacimiento",
    ],
    consentLabel:
      "Se trata de contenido digital entregado de inmediato tras el pago. Entiendo que **una vez completada la descarga, el derecho de desistimiento por cambio de opinión queda limitado.**",
    consentRequired: "Acepta las condiciones de desistimiento antes de pagar.",
    productInfoTitle: "Información del producto",
    productInfo: [
      ["Proveedor", "Naming-Link"],
      ["Formato", "Un documento PDF (4 páginas), descargado en esta pantalla justo después del pago."],
      ["Requisitos", "Cualquier dispositivo que abra un PDF. Sin instalación ni cuenta."],
      ["Disponibilidad", "Sin límite de tiempo. El archivo descargado es tuyo para siempre."],
      ["Nueva descarga", "Hasta 5 veces con el mismo pedido. No almacenamos el archivo, por lo que no puede regenerarse una vez que sales de esta pantalla."],
      ["Desistimiento", "Reembolso íntegro antes de que la descarga se complete. Una vez completada, el desistimiento por cambio de opinión queda limitado."],
      ["Costes de devolución", "Ninguno. No hay nada que enviar."],
    ],
    refundContact:
      "Para reembolsos o consultas, ponte en contacto con el servicio de atención o el correo de abajo. Si el documento nunca llegó a generarse, o el importe cobrado difiere del pedido, reembolsamos el total.",
  },
  footer: {
    privacy: "Privacidad",
    terms: "Términos",
    refund: "Reembolsos",
    pricing: "Precios",
    legalEntity: "Empresa",
    representative: "Representante",
    businessNumber: "Registro",
    mailOrderNumber: "Venta online",
    address: "Dirección",
    customerCenter: "Atención al cliente",
    email: "Email",
    privacyOfficer: "Privacidad",
    hostingProvider: "Hosting",
    providedBy: "Proporcionado por",
    effective: "Vigente desde",
    backHome: "Volver al inicio",
  },
  bands: {
    EXCELLENT: "Una compatibilidad excepcional",
    GOOD: "Una compatibilidad sólida",
    FAIR: "Una compatibilidad viable",
    CHALLENGING: "Una compatibilidad que exige esfuerzo",
  },
  engines: {
    saju: {
      name: "Compatibilidad Saju",
      description:
        "Lee juntos los elementos del maestro del día, el equilibrio elemental y la rama del día.",
    },
    zodiac: {
      name: "Compatibilidad del zodiaco",
      description: "Lee la relación entre las ramas de los dos años de nacimiento.",
    },
  },
  factors: {
    dayMasterRelation: "Elementos del maestro del día",
    spouseStar: "Estrella del cónyuge",
    elementSupply: "Aporte elemental",
    dayBranchRelation: "Rama del día",
    branchRelation: "Signos del zodiaco",
  },
  notes: {
    "strength.dayMasterRelation":
      "Los temperamentos de ambos se sitúan en una posición que sirve al otro. Aunque la manera del otro resulte ajena, tiende a aportar lo que a uno le falta.",
    "strength.spouseStar":
      "Cada uno lleva el elemento que la tradición lee como posición del cónyuge. Si desde el principio todo resultó fácil sin motivo aparente, esta es probablemente la razón.",
    "strength.elementSupply":
      "Cada uno tiene lo que el otro necesita ahora mismo. Lo que costaba mover en solitario suele resultar más llevadero juntos.",
    "strength.dayBranchRelation":
      "La rama del día se lee tradicionalmente como el asiento del cónyuge. Las de ambos encajan bien, lo que suele hacer cómodo el tiempo compartido.",
    "strength.branchRelation":
      "Los signos del zodiaco encajan bien: el tipo de pareja que desde fuera parece natural y que en el primer encuentro se lee con facilidad.",
    "caution.dayMasterRelation":
      "Aquí es donde rozan los temperamentos. Ante la misma tarea, el ritmo y el método difieren, y es fácil leerlo como algo deliberado. Conviene acordar el proceso antes que la conclusión.",
    "caution.spouseStar":
      "Ninguno de los dos lleva lo que la tradición llama el elemento de la posición del cónyuge del otro. Puede que la atracción no sea inmediata; esta es más bien una pareja que se acumula con el tiempo.",
    "caution.elementSupply":
      "Lo que cada uno necesita también está fino en el otro. Aquello en lo que ambos son buenos, lo son mucho, pero los lugares donde a ambos les falta se quedan sin llenar. Mejor buscar eso fuera de la relación.",
    "caution.dayBranchRelation":
      "Es probable que haya fricción en la posición de la vida compartida. Suele aparecer en pequeños hábitos más que en asuntos grandes, así que acordar pronto unas cuantas normas básicas ayuda.",
    "caution.branchRelation":
      "Los signos del zodiaco quedan uno frente al otro. Cada uno ve las cosas de forma distinta, lo que causa fricción, y también significa que hay mucho que aprender del otro.",

    "spouseStar.MUTUAL":
      "Cada uno ocupa exactamente la posición del cónyuge del otro: la combinación que el Saju tradicional valora más alto.",
    "spouseStar.STRONG":
      "Uno de los dos ocupa exactamente la posición del cónyuge y el otro queda cerca. Lo que cada uno siente por el otro puede diferir un poco en intensidad.",
    "spouseStar.PARTIAL":
      "Solo uno de los dos ocupa la posición del cónyuge del otro. La atracción inicial suele ir en un solo sentido, así que conviene no aplazar el decirlo.",
    "spouseStar.SLIGHT":
      "Uno de los dos queda contiguo a la posición del cónyuge. Esto se acumula con el tiempo compartido en lugar de llegar como atracción inmediata.",
    "spouseStar.NONE":
      "Ninguno de los dos ocupa lo que la tradición llama la posición del cónyuge. Esta pareja se construye conviviendo, más que por atracción.",
    "dayMaster.CLASH_BONDED":
      "{elementA} y {elementB} se refrenan mutuamente, pero con polaridad opuesta. La tradición lo lee como la combinación conyugal: la fricción tiende a convertirse en apego.",
    "dayMaster.CLASH_HARSH":
      "{elementA} y {elementB} se refrenan mutuamente con la misma polaridad. La carga es fuerte, y también lo es el peso que cada uno pone sobre el otro.",
    "dayMaster.FLOW_GUARDED":
      "Uno entrega energía y el otro la contiene. El impulso más afilado queda templado por el otro: lo que la tradición llama una combinación resguardada.",
    "dayMaster.FLOW_BLOCKED":
      "Uno entrega energía y el otro se la lleva. Aquí quien da se cansa con facilidad, así que ayuda decir con claridad qué está dando y qué está recibiendo cada uno.",
    "dayMaster.PEER_EVEN":
      "Ambos llevan energía {elementA} con la misma polaridad. Eso lo hace parejo y cómodo, pero ninguno empuja al otro hacia delante.",
    "dayMaster.PEER_RIVAL":
      "Ambos llevan energía {elementA} con polaridad opuesta. La atracción es rápida, pero compiten por el mismo terreno.",
    "supply.AMPLE":
      "Cada uno tiene de sobra lo que el otro necesita. La primera persona necesita {needA} y la segunda necesita {needB}, y el otro se lo aporta.",
    "supply.ENOUGH":
      "Cada uno tiene una parte razonable de lo que el otro necesita: {needA} para la primera persona, {needB} para la segunda.",
    "supply.THIN":
      "Lo que cada uno necesita ({needA} para la primera persona, {needB} para la segunda) está fino en el otro.",
    "supply.SCARCE":
      "Ninguno puede aportar con facilidad lo que el otro necesita: {needA} para la primera persona, {needB} para la segunda, y ambos lugares están vacíos. Mejor buscar eso fuera de la relación.",
    "dayBranch.SAMHAP":
      "Las ramas del día forman una triple armonía: la combinación más fuerte en la posición del cónyuge.",
    "dayBranch.BANHAP":
      "Las ramas del día forman una media armonía en torno al eje de una triple. Una combinación bien avenida en la posición del cónyuge.",
    "dayBranch.YUKHAP": "Las ramas del día forman una armonía de seis. Se atraen mutuamente.",
    "dayBranch.SAME":
      "Las ramas del día son idénticas. Eso lo hace fácil, pero deja poca novedad.",
    "dayBranch.NEUTRAL": "Las ramas del día no guardan ninguna relación particular.",
    "dayBranch.WONJIN":
      "Las ramas del día quedan en un resentimiento callado. Poco estalla abiertamente, pero tienden a acumularse quejas difíciles de nombrar: mejor decirlas en el momento que dejarlas pasar.",
    "dayBranch.CHUNG":
      "Las ramas del día chocan. Esta posición es propensa a la fricción, así que importa cómo se hablan el uno al otro.",
    "zodiac.SAMHAP":
      "{animalA} y {animalB} forman una triple armonía: la mejor combinación del zodiaco.",
    "zodiac.BANHAP":
      "{animalA} y {animalB} forman una media armonía en torno al eje de una triple, así que se convienen.",
    "zodiac.YUKHAP": "{animalA} y {animalB} forman una armonía de seis. Encajan muy bien.",
    "zodiac.SAME": "Los dos nacieron bajo el signo {animalA}, así que sus temperamentos se hacen eco.",
    "zodiac.NEUTRAL": "{animalA} y {animalB} no guardan ninguna relación particular.",
    "zodiac.WONJIN":
      "{animalA} y {animalB} quedan en un resentimiento callado: rara vez una disputa abierta, pero sí un desajuste sutil que suele durar.",
    "zodiac.CHUNG":
      "{animalA} y {animalB} chocan. Difieren con fuerza, lo que también significa que hay mucho que aprender.",
  },
  animals: {
    rat: "Rata",
    ox: "Buey",
    tiger: "Tigre",
    rabbit: "Conejo",
    dragon: "Dragón",
    snake: "Serpiente",
    horse: "Caballo",
    goat: "Cabra",
    monkey: "Mono",
    rooster: "Gallo",
    dog: "Perro",
    pig: "Cerdo",
  },
  elements: {
    WOOD: "Madera",
    FIRE: "Fuego",
    EARTH: "Tierra",
    METAL: "Metal",
    WATER: "Agua",
  },
};
