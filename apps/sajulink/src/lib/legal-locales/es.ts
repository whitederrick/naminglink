import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación de saju (사주). Esta política explica qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "La fecha de nacimiento, la hora de nacimiento, el lugar de nacimiento, el género y el nombre proporcionados para la interpretación de saju **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, aunque se abra el enlace de resultados, solo quedará en el registro de acceso del servidor la ruta de la dirección.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios del servicio. Sin embargo, se registran automáticamente los mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para rastrear a los usuarios.",
        "Actualmente, no se muestran anuncios en este servicio. Si en el futuro se comienzan a mostrar anuncios, el proveedor de anuncios (por ejemplo, Google) podrá utilizar cookies para la publicación de anuncios. En ese momento, se modificará esta cláusula para aclarar qué ha cambiado antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Actualmente, no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la legislación. **En ese momento, tampoco se almacenarán los valores ingresados para la interpretación de saju y el PDF generado**, ni se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional, internacional)",
        "Período de conservación — De acuerdo con el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros relacionados con el pago y el suministro de bienes se conservarán durante 5 años, y los registros sobre quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no se proporciona información personal a terceros.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se delegarán a Toss Payments, y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, también será procesada directamente por estos proveedores, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no hay a quién solicitar la revisión, corrección o eliminación.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Información personal de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila información personal de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del tratamiento, como la publicación de anuncios o el inicio de la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d1 = {
  "title": "Términos de servicio",
  "intro": "Estos términos establecen las condiciones de uso del servicio Saju-Link (en adelante, \"servicio\"). Al utilizar el servicio, se considera que usted acepta estos términos.",
  "effectiveLabel": "Fecha de entrada en vigor",
  "sections": [
    {
      "heading": "1. Naturaleza del servicio",
      "paragraphs": [
        "El servicio aplica las reglas de la astrología tradicional (saju) basándose en la fecha de nacimiento y la hora de nacimiento ingresadas, y muestra como material de referencia el natal chart (원국) del saju, el balance de los cinco elementos (오행), la fuerza y debilidad del día (일간), así como la posición donde se encuentran el día y el natal chart.",
        "Las puntuaciones y explicaciones presentadas son **material de referencia desde la perspectiva de la astrología tradicional, y no constituyen predicciones científicas ni afirmaciones sobre el futuro, la salud o la riqueza de una persona.** Una puntuación baja no significa que el día sea malo, y una puntuación alta no garantiza nada.",
        "**Las oraciones de interpretación de los informes de pago son redactadas por inteligencia artificial generativa.** Sin embargo, todos los valores, como puntuaciones, signos y fuerzas de los cinco elementos, son calculados por el motor de reglas del servicio, y la inteligencia artificial no modifica ni crea esos valores. En caso de que no se pueda generar una interpretación, se utilizará una descripción basada en los valores calculados por el motor en el mismo lugar, y la cantidad de páginas del documento y los elementos incluidos son exactamente los que se indican en el punto 3 a continuación."
      ]
    },
    {
      "heading": "2. Tarifas de uso",
      "paragraphs": [
        "El servicio actual se ofrece de forma gratuita y no se requiere registro.",
        "Al comenzar la venta de productos de pago (un informe PDF), se aplicarán las condiciones del artículo 3 a continuación. Se notificará nuevamente estos términos antes del inicio de la venta."
      ]
    },
    {
      "heading": "3. Productos de pago y reembolsos",
      "paragraphs": [
        "Los productos de pago que se venden son **un PDF de \"informe de lectura de vida de saju (사주) y fortuna del año\"**. Se elabora un documento con los resultados de la pantalla, y se incluye contenido que no aparece en la pantalla.",
        "**A4 9 páginas** — portada y resumen, inclinaciones y fortalezas innatas, aspectos a tener en cuenta, los ocho caracteres del natal chart (원국) y el poder de los cinco elementos, la fuerza y debilidad del día (일간) y la energía necesaria en este momento (용신), los diez dioses de las cuatro columnas (네 기둥의 십신) y las posiciones destacadas en este saju (사주), las cuatro áreas de la vida vistas desde el natal chart (재물·애정·직업·건강) y sus fundamentos, detalles de la corrección de la hora verdadera (진태양시), y la fortuna de este año. Pago nacional {priceDomestic} (incluido el IVA), pago internacional {priceGlobal}.",
        "**La fortuna del día no se incluye en este documento.** Es un valor que cambia diariamente y se ofrece de forma gratuita en la pantalla; este documento se compone de la interpretación del natal chart (원국) que no cambia a lo largo de la vida y de la fortuna de este año.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito, tarjetas de débito y métodos de pago simplificados (como Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en la cantidad que se muestra en la pantalla de pago.",
        "**El servicio no almacena ni los datos ingresados por el usuario ni el archivo PDF generado.** Una vez que se aprueba el pago, se crea y se descarga el documento en ese momento, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado directamente por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se sale de la pantalla de resultados y se pierden los valores de entrada, no se podrá recrear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga después del pago** puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Una vez completada la descarga** se restringe la revocación del contrato por simple cambio de opinión. Se trata de contenido digital que se proporciona inmediatamente tras el pago y cuya restitución no es posible, lo que se encuentra dentro de las razones para la restricción de la revocación del contrato establecidas en el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**En caso de que el documento no se haya creado debido a un error del sistema, el archivo no se abra, o el monto del pago sea diferente al de la orden** se procederá a la reemisión o al reembolso total.",
        "**Las quejas sobre el contenido de los resultados** no son motivo para un reembolso. La interpretación del saju (사주) es un material de referencia desde la perspectiva de la astrología tradicional, y su naturaleza se informa antes del pago (punto 1 anterior).",
        "La solicitud de reemisión después de haber utilizado las 5 reemisiones no será motivo de reembolso.",
        "**En caso de que un menor realice un pago sin el consentimiento de su representante legal** el propio menor o su representante legal pueden cancelar dicho pago. Si nos informa a través de los datos de contacto a continuación, procederemos a realizar el reembolso."
      ]
    },
    {
      "heading": "4. Sobre los resultados del cálculo",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con las reglas publicadas, por lo que si se ingresan los mismos valores, siempre se obtendrá el mismo resultado.",
        "Si no se ingresa la hora de nacimiento, se calculará sin el pilar horario (時柱), por lo que los resultados pueden variar. Cuanto más preciso sea el lugar de nacimiento seleccionado, más exacto será el cálculo del pilar horario.",
        "El cálculo del saju (사주) se realiza utilizando bibliotecas de cálculo públicas, y los resultados pueden variar según el manejo de los términos solares y las zonas horarias."
      ]
    },
    {
      "heading": "5. Responsabilidad del usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otra persona, pero no debe utilizar los resultados de manera que perjudiquen a esa persona.",
        "No utilice los resultados del servicio como base para juicios que afecten los derechos de terceros, como el matrimonio, el divorcio, la contratación o las transacciones. El servicio no fue creado para tales propósitos."
      ]
    },
    {
      "heading": "6. Actos prohibidos",
      "paragraphs": [
        "Las siguientes acciones no están permitidas."
      ],
      "bullets": [
        "El acto de enviar solicitudes excesivas mediante herramientas automatizadas que interrumpen la operación del servicio.",
        "El acto de presentar los resultados del servicio como si fueran hechos o resultados de la evaluación de un experto.",
        "la acción de duplicar o modificar el servicio para proporcionar un servicio idéntico"
      ]
    },
    {
      "heading": "7. Exención de responsabilidad",
      "paragraphs": [
        "El servicio solo proporciona materiales de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No seremos responsables por daños derivados de la interrupción del servicio debido a causas fuera de nuestro control, como desastres naturales o fallas en la infraestructura del proveedor de servicios."
      ]
    },
    {
      "heading": "8. Derechos de propiedad intelectual",
      "paragraphs": [
        "Los derechos sobre la implementación de la pantalla del servicio, el texto y las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales."
      ]
    },
    {
      "heading": "9. Modificación de los términos y ley aplicable",
      "paragraphs": [
        "En caso de modificar los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de Corea del Sur, y cualquier disputa relacionada con el uso del servicio se llevará a cabo de acuerdo con los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ]
};

const d2 = {
  "title": "Política de reembolso y cancelación",
  "intro": "Esta es la base para la cancelación y reembolso del informe de lectura de vida saju (사주) en formato PDF. Hemos recopilado información similar a la sección 3 de los términos y condiciones.",
  "sections": [
    {
      "heading": "1. Naturaleza del producto",
      "paragraphs": [
        "El producto que se vende es **un informe de vida saju (사주) y pronóstico del año en formato PDF (A4 9 páginas)**, y una vez que el pago es aprobado, se genera el documento y se envía de inmediato como contenido digital.",
        "**El servicio no almacena los datos ingresados por el usuario ni el archivo PDF generado.** Por lo tanto, el archivo descargado debe ser guardado por el usuario."
      ],
      "bullets": []
    },
    {
      "heading": "2. Derecho de desistimiento",
      "paragraphs": [
        "Se rige por los criterios establecidos en la Ley de Comercio Electrónico."
      ],
      "bullets": [
        "**Antes de que comience la descarga,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Una vez completada la descarga,** se limita el derecho de desistimiento por simple cambio de opinión. Se trata de contenido digital que se proporciona inmediatamente tras el pago y cuya restauración no es posible, lo que se considera una razón de restricción según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico. Esta información se comunica y se obtiene el consentimiento en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Casos de reembolso completo",
      "paragraphs": [
        "En los siguientes casos, se verificará la razón y se procesará un reembolso completo o una reemisión."
      ],
      "bullets": [
        "Si, debido a un error del sistema, no se generó el documento.",
        "Si el archivo descargado no se puede abrir.",
        "Si el monto del pago es diferente al de la orden.",
        "**Si un menor realiza el pago sin el consentimiento del representante legal** — El propio menor o su representante legal pueden solicitar la cancelación."
      ]
    },
    {
      "heading": "4. Casos que no son motivo de reembolso",
      "paragraphs": [],
      "bullets": [
        "**Insatisfacción con el contenido del resultado.** La interpretación del saju (사주) es un material de referencia desde la perspectiva de la astrología tradicional, y su naturaleza se informa antes del pago.",
        "Solicitudes de reemisión después de haber utilizado las 5 reemisiones permitidas."
      ]
    },
    {
      "heading": "5. Método de recepción",
      "paragraphs": [
        "Las solicitudes de reembolso o consultas deben enviarse al centro de atención al cliente ({customerCenter}) o por correo electrónico ({email}). Si proporciona el número de pedido, la verificación será más rápida.",
        "Los reembolsos se realizarán a través del método de pago utilizado, y dependiendo de la tarjeta o el proveedor de pago, puede tardar de 3 a 7 días hábiles en reflejarse."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d3 = {
  "title": "Información de precios",
  "intro": "Se proporciona información sobre el alcance gratuito y los precios de los productos de pago.",
  "sections": [
    {
      "heading": "1. Gratis",
      "paragraphs": [
        "**La lectura de saju (사주) y la consulta de la fortuna del día son gratuitas.** No se requiere registro.",
        "Puede ver en pantalla los ocho caracteres del natal chart (원국), el equilibrio de los cinco elementos, la fuerza y debilidad del día, la energía necesaria en este momento, la puntuación y clasificación de la fortuna de hoy, así como la puntuación en las cuatro áreas de la vida."
      ]
    },
    {
      "heading": "2. Informe de lectura de vida de saju (사주) y fortuna de este año PDF (de pago)",
      "paragraphs": [
        "Pago nacional {priceDomestic} (incluido IVA) · Pago internacional {priceGlobal}",
        "Le proporcionamos un documento PDF de **9 páginas A4** con los resultados en pantalla. Incluye información que no aparece en pantalla — la fuerza y debilidad del día, la energía necesaria en este momento, los diez dioses de los cuatro pilares, las posiciones destacadas en este saju (사주), el análisis de Wang Sang Hyu Su Sa, las cuatro áreas de la vida vistas en el natal chart (원국) y sus números de referencia, los detalles de corrección de Jin Tae Yang Si, y la fortuna de este año — todo esto se incluye.",
        "Puede descargarlo nuevamente **hasta 5 veces** con el mismo pedido. Sin embargo, si los valores de entrada se pierden fuera de la pantalla de resultados, no podrá volver a crearlo, así que guarde el archivo inmediatamente después del pago."
      ]
    },
    {
      "heading": "4. Métodos de pago",
      "paragraphs": [
        "**Nacional** — Puede utilizar tarjetas de crédito/débito y pagos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.) a través de Toss Payments.",
        "**Internacional** — Puede pagar a través de PayPal mediante PortOne.",
        "El monto final del pago se basa en la cantidad mostrada en la pantalla de pago."
      ]
    },
    {
      "heading": "5. Cambios de precio",
      "paragraphs": [
        "Si se realizan cambios en los precios, se publicarán primero en esta página. Los pedidos que ya han sido pagados no se verán afectados por los precios cambiados."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d4 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación de saju (사주). Esta política explica qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "La fecha de nacimiento, la hora de nacimiento, el lugar de nacimiento, el género y el nombre proporcionados para la interpretación de saju no se **almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda la ruta de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada para la interpretación de saju no se transmite a los anunciantes.",
        "Este servicio muestra anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Los proveedores de terceros, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero su relevancia para el usuario disminuirá.",
        "Los anuncios personalizados de todos los proveedores de terceros se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero el consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar pagos",
      "paragraphs": [
        "Actualmente no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la ley. **En ese momento, tampoco se almacenarán los valores ingresados para la interpretación de saju ni se recibirán información que identifique al usuario, como nombre, contacto o dirección.**"
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, fecha y hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y delegación de procesamiento",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no se proporciona información personal a terceros.",
        "Para la operación del servicio, se utiliza la infraestructura de alojamiento de {hostingProvider}, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se delegarán a Toss Payments y los pagos internacionales a PortOne (PayPal). La información del medio de pago, como el número de tarjeta o el número de cuenta, también será procesada directamente por estos proveedores, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no hay destinatarios a los que se pueda solicitar acceso, corrección o eliminación.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Información personal de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila información personal de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d5 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación de saju (사주). Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "La fecha de nacimiento, la hora de nacimiento, el lugar de nacimiento, el género y el nombre proporcionados para la interpretación de saju **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados en forma codificada. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda la ruta de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo corresponde al usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para rastrear a los usuarios.",
        "Actualmente, no se publican anuncios en este servicio. Si en el futuro se publican anuncios, el proveedor de anuncios (por ejemplo, Google) puede utilizar cookies para la publicación de anuncios. En ese caso, se modificará esta cláusula para aclarar qué ha cambiado antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (informe PDF), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la legislación.",
        "**Los valores ingresados para la interpretación de saju y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del párrafo 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación del procesamiento",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no se proporciona información personal a terceros. El procesamiento de pagos se subcontrata a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y durante este proceso, los registros de acceso del párrafo 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados para la interpretación de saju, no hay un destinatario para solicitudes de acceso, corrección o eliminación. Los registros de pedidos restantes tras el pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y se destruirán una vez transcurrido el período.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay alguna consulta relacionada con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Información personal de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila información personal de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d6 = {
  "title": "Términos de servicio",
  "intro": "Estos términos establecen las condiciones de uso del servicio Saju-Link (en adelante, \"servicio\"). Al utilizar el servicio, se considera que usted acepta estos términos.",
  "effectiveLabel": "Fecha de entrada en vigor",
  "sections": [
    {
      "heading": "1. Naturaleza del servicio",
      "paragraphs": [
        "El servicio aplica las reglas de la astrología tradicional (saju) basándose en la fecha de nacimiento y la hora de nacimiento ingresadas, y muestra como material de referencia el natal chart (원국) del saju, el balance de los cinco elementos (오행), la fuerza y debilidad del día (일간), así como la posición donde se encuentran el día y el natal chart.",
        "Las puntuaciones y explicaciones presentadas son **material de referencia desde la perspectiva de la astrología tradicional, y no constituyen predicciones científicas ni afirmaciones sobre el futuro, la salud o la riqueza de una persona.** Una puntuación baja no significa que el día sea malo, y una puntuación alta no garantiza nada.",
        "**Las oraciones de interpretación de los informes de pago son redactadas por inteligencia artificial generativa.** Sin embargo, todos los valores, como puntuaciones, signos y fuerzas de los cinco elementos, son calculados por el motor de reglas del servicio, y la inteligencia artificial no modifica ni crea esos valores. En caso de que no se pueda generar una interpretación, se utilizará una descripción basada en los valores calculados por el motor en el mismo lugar, y la cantidad de páginas del documento y los elementos incluidos son exactamente los que se indican en el punto 3 a continuación."
      ]
    },
    {
      "heading": "2. Tarifas de uso",
      "paragraphs": [
        "La lectura de saju (사주) y la consulta de la fortuna diaria son gratuitas y no requieren registro como miembro.",
        "Recibir los resultados en un informe PDF es un servicio de pago. Los precios y condiciones se indican en el artículo 3 a continuación y en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Productos de pago y reembolsos",
      "paragraphs": [
        "Los productos de pago que se venden son **un PDF de \"informe de lectura de vida de saju (사주) y fortuna del año\"**. Se elabora un documento con los resultados de la pantalla, y se incluye contenido que no aparece en la pantalla.",
        "**A4 9 páginas** — portada y resumen, inclinaciones y fortalezas innatas, aspectos a tener en cuenta, los ocho caracteres del natal chart (원국) y el poder de los cinco elementos, la fuerza y debilidad del día (일간) y la energía necesaria en este momento (용신), los diez dioses de las cuatro columnas (네 기둥의 십신) y las posiciones destacadas en este saju (사주), las cuatro áreas de la vida vistas desde el natal chart (재물·애정·직업·건강) y sus fundamentos, detalles de la corrección de la hora verdadera (진태양시), y la fortuna de este año. Pago nacional {priceDomestic} (incluido el IVA), pago internacional {priceGlobal}.",
        "**La fortuna del día no se incluye en este documento.** Es un valor que cambia diariamente y se ofrece de forma gratuita en la pantalla; este documento se compone de la interpretación del natal chart (원국) que no cambia a lo largo de la vida y de la fortuna de este año.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito, tarjetas de débito y métodos de pago simplificados (como Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en la cantidad que se muestra en la pantalla de pago.",
        "**El servicio no almacena ni los datos ingresados por el usuario ni el archivo PDF generado.** Una vez que se aprueba el pago, se crea y se descarga el documento en ese momento, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado directamente por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se sale de la pantalla de resultados y se pierden los valores de entrada, no se podrá recrear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga después del pago** puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Una vez completada la descarga** se restringe la revocación del contrato por simple cambio de opinión. Se trata de contenido digital que se proporciona inmediatamente tras el pago y cuya restitución no es posible, lo que se encuentra dentro de las razones para la restricción de la revocación del contrato establecidas en el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**En caso de que el documento no se haya creado debido a un error del sistema, el archivo no se abra, o el monto del pago sea diferente al de la orden** se procederá a la reemisión o al reembolso total.",
        "**Las quejas sobre el contenido de los resultados** no son motivo para un reembolso. La interpretación del saju (사주) es un material de referencia desde la perspectiva de la astrología tradicional, y su naturaleza se informa antes del pago (punto 1 anterior).",
        "La solicitud de reemisión después de haber utilizado las 5 reemisiones no será motivo de reembolso.",
        "**En caso de que un menor realice un pago sin el consentimiento de su representante legal** el propio menor o su representante legal pueden cancelar dicho pago. Si nos informa a través de los datos de contacto a continuación, procederemos a realizar el reembolso."
      ]
    },
    {
      "heading": "4. Sobre los resultados del cálculo",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con las reglas publicadas, por lo que si se ingresan los mismos valores, siempre se obtendrá el mismo resultado.",
        "Si no se ingresa la hora de nacimiento, se calculará sin el pilar horario (時柱), por lo que los resultados pueden variar. Cuanto más preciso sea el lugar de nacimiento seleccionado, más exacto será el cálculo del pilar horario.",
        "El cálculo del saju (사주) se realiza utilizando bibliotecas de cálculo públicas, y los resultados pueden variar según el manejo de los términos solares y las zonas horarias."
      ]
    },
    {
      "heading": "5. Responsabilidad del usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otra persona, pero no debe utilizar los resultados de manera que perjudiquen a esa persona.",
        "No utilice los resultados del servicio como base para juicios que afecten los derechos de terceros, como el matrimonio, el divorcio, la contratación o las transacciones. El servicio no fue creado para tales propósitos."
      ]
    },
    {
      "heading": "6. Actos prohibidos",
      "paragraphs": [
        "Las siguientes acciones no están permitidas."
      ],
      "bullets": [
        "El acto de enviar solicitudes excesivas mediante herramientas automatizadas que interrumpen la operación del servicio.",
        "El acto de presentar los resultados del servicio como si fueran hechos o resultados de la evaluación de un experto.",
        "la acción de duplicar o modificar el servicio para proporcionar un servicio idéntico"
      ]
    },
    {
      "heading": "7. Exención de responsabilidad",
      "paragraphs": [
        "El servicio solo proporciona materiales de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No seremos responsables por daños derivados de la interrupción del servicio debido a causas fuera de nuestro control, como desastres naturales o fallas en la infraestructura del proveedor de servicios."
      ]
    },
    {
      "heading": "8. Derechos de propiedad intelectual",
      "paragraphs": [
        "Los derechos sobre la implementación de la pantalla del servicio, el texto y las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales."
      ]
    },
    {
      "heading": "9. Modificación de los términos y ley aplicable",
      "paragraphs": [
        "En caso de modificar los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de Corea del Sur, y cualquier disputa relacionada con el uso del servicio se llevará a cabo de acuerdo con los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ]
};

const d7 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación de saju (사주). Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "La fecha de nacimiento, la hora de nacimiento, el lugar de nacimiento, el género y el nombre proporcionados para la interpretación de saju **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda la ruta de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo corresponde al usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada en la interpretación de saju no se transmite a los anunciantes.",
        "Este servicio muestra anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Los proveedores de terceros, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero su relevancia para el usuario disminuirá.",
        "Los anuncios personalizados de todos los proveedores de terceros se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero su consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (informe PDF), se almacena la información del pedido para el procesamiento del pago y la conservación de registros de transacciones según la ley.",
        "**Los valores ingresados en la interpretación de saju y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del párrafo 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, fecha y hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación del procesamiento",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no hay datos personales proporcionados a terceros. El procesamiento de pagos se subcontrata a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del párrafo 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados en la interpretación de saju, no hay un destinatario para solicitudes de acceso, corrección o eliminación. Los registros de pedidos restantes tras el pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y serán destruidos una vez transcurrido el período.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Datos personales de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila datos personales de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los detalles de los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

export const es: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
