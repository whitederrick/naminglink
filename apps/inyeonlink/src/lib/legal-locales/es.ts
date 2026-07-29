import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué se recibe del servicio, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información no almacenada",
      "paragraphs": [
        "La fecha de nacimiento, hora de nacimiento, lugar de nacimiento, género y nombre que se ingresan para el cálculo de compatibilidad **no se almacenan en ninguna parte.** Se utilizan solo en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a personas específicas."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
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
        "Actualmente, no se publican anuncios en este servicio. Si en el futuro se publican anuncios, el proveedor de anuncios (por ejemplo, Google) puede utilizar cookies para la publicación de anuncios. En ese caso, se modificará esta cláusula para aclarar qué cambia antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar pagos",
      "paragraphs": [
        "Actualmente, no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la legislación. **En ese momento, tampoco se almacenarán los valores ingresados para el cálculo de compatibilidad ni el PDF generado,** y no se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección."
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
        "No hay información personal almacenada, por lo que no se proporciona información personal a terceros.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se subcontratarán a Toss Payments y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, será procesada directamente por estos proveedores y no será recibida por el servicio."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no hay destinatarios para solicitudes de acceso, corrección o eliminación.",
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
        "Responsable de la protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como la publicación de anuncios o el inicio de la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d1 = {
  "title": "Términos de Uso",
  "intro": "Estos términos establecen las condiciones de uso del servicio InyeonLink (en adelante, “Servicio”). Al utilizar el servicio, se considera que acepta estos términos.",
  "sections": [
    {
      "heading": "1. Naturaleza del Servicio",
      "paragraphs": [
        "El servicio muestra, como material de referencia, la relación entre dos personas aplicando las reglas de compatibilidad de la tradicional astrología coreana (saju) y el zodiaco de los doce animales (십이지).",
        "La tasa de coincidencia y la interpretación proporcionadas son **material de referencia desde la perspectiva de la interpretación tradicional, y no son predicciones científicas ni afirmaciones sobre la relación.** Un puntaje bajo no significa que la relación sea mala, y un puntaje alto no garantiza la relación."
      ]
    },
    {
      "heading": "2. Tarifas de Uso",
      "paragraphs": [
        "Actualmente, el servicio se ofrece de forma gratuita y no se requiere registro.",
        "Cuando se inicie la venta de productos de pago (informe de compatibilidad en PDF), se aplicarán las condiciones del artículo 3 a continuación. Se notificará nuevamente estos términos antes del inicio de la venta."
      ]
    },
    {
      "heading": "3. Productos de Pago y Reembolsos",
      "paragraphs": [
        "El único producto de pago que se vende es el **informe de compatibilidad en PDF**. Se generará un documento PDF de 3 páginas con los resultados de la pantalla, que incluirá también los valores de las fuerzas de los cinco elementos que no se muestran en la pantalla.",
        "El precio es {priceDomestic} para pagos nacionales (incluido el IVA) y {priceGlobal} para pagos internacionales. Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito/débito y métodos de pago simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El servicio no almacena los valores ingresados por el usuario ni el archivo PDF generado.** Una vez que se aprueba el pago, se genera y se envía el documento en ese momento, y no se deja nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se sale de la pantalla de resultados y se pierden los valores ingresados, no se podrá volver a generar, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga después del pago,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Después de que se complete la descarga,** se limita la cancelación por simple arrepentimiento. Se trata de contenido digital que se proporciona inmediatamente y cuya restauración no es posible, lo que se considera una razón de limitación de cancelación según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**Si el documento no se genera debido a un error del sistema, el archivo no se abre o el monto del pago es diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido de los resultados** no son motivo de reembolso. Los resultados de compatibilidad son material de referencia desde la perspectiva de la interpretación tradicional, y se informa de esta naturaleza antes del pago (ver artículo 1 anterior).",
        "Las solicitudes de reemisión después de haber utilizado las 5 reemisiones no son motivo de reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el propio menor o su representante legal puede cancelar ese pago. Si se informa a través de los contactos a continuación, se procederá con el reembolso."
      ]
    },
    {
      "heading": "4. Sobre los Resultados de Cálculo",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con las reglas publicadas, por lo que si se ingresan los mismos valores, siempre se obtendrán los mismos resultados.",
        "Si no se ingresa la hora de nacimiento, el cálculo se realizará excluyendo el pilar de tiempo (時柱), por lo que los resultados pueden variar. Cuanto más preciso sea el lugar de nacimiento seleccionado, más preciso será el cálculo del pilar de tiempo.",
        "El cálculo del calendario de cuatro pilares utiliza una biblioteca de cálculo pública, y los resultados pueden diferir según el manejo de los términos solares y las zonas horarias."
      ]
    },
    {
      "heading": "5. Responsabilidad del Usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otra persona, pero no debe utilizar los resultados de manera que perjudiquen a esa persona.",
        "No utilice los resultados del servicio como base para decisiones que afecten los derechos de otros, como matrimonio, divorcio, contratación o transacciones. El servicio no fue creado para tales fines."
      ]
    },
    {
      "heading": "6. Conductas Prohibidas",
      "paragraphs": [
        "Las siguientes conductas no están permitidas."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interfieran con la operación del servicio",
        "Presentar los resultados del servicio como hechos o como resultados de evaluaciones de expertos",
        "Duplicar o modificar el servicio para ofrecer el mismo servicio"
      ]
    },
    {
      "heading": "7. Exención de Responsabilidad",
      "paragraphs": [
        "El servicio solo proporciona material de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No se asume responsabilidad por daños causados por la interrupción del servicio debido a causas fuera de control, como desastres naturales o fallos de proveedores de infraestructura."
      ]
    },
    {
      "heading": "8. Derechos de Propiedad Intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del servicio, el texto y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales."
      ]
    },
    {
      "heading": "9. Cambios en los Términos y Ley Aplicable",
      "paragraphs": [
        "En caso de cambios en los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del servicio se llevará a cabo de acuerdo con los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Fecha de Entrada en Vigencia"
};

const d2 = {
  "title": "Política de reembolso y cancelación",
  "intro": "Esta es la base para la cancelación y reembolso del informe de compatibilidad en PDF. Se ha recopilado información similar a la cláusula 3 de los términos y condiciones.",
  "sections": [
    {
      "heading": "1. Naturaleza del producto",
      "paragraphs": [
        "El producto que se vende es un **informe de compatibilidad en PDF** y, una vez que se aprueba el pago, se genera el documento y se envía de inmediato como contenido digital.",
        "**El servicio no almacena ni los datos ingresados por el usuario ni el archivo PDF generado.** Por lo tanto, el archivo descargado debe ser guardado por el usuario."
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
        "**Una vez completada la descarga,** el derecho de desistimiento por simple cambio de opinión está restringido. Se trata de un contenido digital que se proporciona inmediatamente tras el pago y cuya restauración no es posible, lo que se considera una razón de restricción según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico. Esta información se comunica y se obtiene el consentimiento en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Casos de reembolso completo",
      "paragraphs": [
        "En los siguientes casos, se verificará la razón y se procederá a la reemisión o reembolso completo."
      ],
      "bullets": [
        "En caso de que un error del sistema impida la creación del documento.",
        "Si el archivo descargado no se abre.",
        "Si el monto del pago es diferente al de la orden.",
        "**Si un menor realiza el pago sin el consentimiento del representante legal** — El propio menor o su representante legal pueden solicitar la cancelación."
      ]
    },
    {
      "heading": "4. Casos que no son motivo de reembolso",
      "paragraphs": [],
      "bullets": [
        "**Insatisfacción con el contenido del resultado.** Los resultados de compatibilidad son materiales de referencia desde la perspectiva de la interpretación tradicional y se informa de su naturaleza antes del pago.",
        "Solicitud de reemisión después de haber utilizado las 5 reemisiones permitidas."
      ]
    },
    {
      "heading": "5. Método de recepción",
      "paragraphs": [
        "Las solicitudes de reembolso o consultas deben enviarse al centro de atención al cliente ({customerCenter}) o por correo electrónico ({email}). Si proporciona el número de pedido, la verificación será más rápida.",
        "Los reembolsos se realizarán mediante el método de pago utilizado, y dependiendo de la situación de la compañía de tarjetas o del proveedor de pagos, puede tardar de 3 a 7 días hábiles en reflejarse."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d3 = {
  "title": "Información de precios",
  "intro": "Se informa sobre el alcance de los servicios gratuitos y los precios de los productos de pago.",
  "sections": [
    {
      "heading": "1. Gratis",
      "paragraphs": [
        "**El cálculo de compatibilidad y la consulta de resultados son gratuitos.** No se requiere registro.",
        "Puede ver la tasa de coincidencia, las puntuaciones por ítem, las cartas natales de las dos personas y la fuerza de los cinco elementos, así como la forma de la relación, todo en la pantalla."
      ]
    },
    {
      "heading": "2. Informe de compatibilidad PDF (de pago)",
      "paragraphs": [
        "Pago nacional {priceDomestic} (incluido IVA) · Pago internacional {priceGlobal}",
        "Se le proporcionará un documento PDF de 3 páginas con los resultados de la pantalla. También se incluirán los valores de la fuerza de los cinco elementos que no se muestran en la pantalla.",
        "Puede descargarlo nuevamente **hasta 5 veces** con el mismo pedido. Sin embargo, si se pierde la pantalla de resultados y se borran los valores de entrada, no podrá volver a crearlo, así que guarde el archivo inmediatamente después del pago."
      ]
    },
    {
      "heading": "3. Métodos de pago",
      "paragraphs": [
        "**Nacional** — Puede utilizar tarjetas de crédito/débito y pagos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.) a través de Toss Payments.",
        "**Internacional** — Puede pagar a través de PayPal mediante PortOne.",
        "El monto final del pago se basa en el monto que se muestra en la pantalla de pago."
      ]
    },
    {
      "heading": "4. Cambios de precios",
      "paragraphs": [
        "Si se realizan cambios en los precios, se publicarán primero en esta página. Los pedidos que ya han sido pagados no se verán afectados por los precios cambiados."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d4 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué se recibe del servicio, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "La fecha de nacimiento, hora de nacimiento, lugar de nacimiento, género y nombre proporcionados para el cálculo de compatibilidad **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios del servicio. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada para el cálculo de compatibilidad no se transmite a los anunciantes.",
        "Este servicio publica anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Proveedores externos, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero su relevancia para el usuario disminuirá.",
        "Los anuncios personalizados de proveedores externos se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios del Espacio Económico Europeo, Reino Unido y Suiza se les solicita primero el consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Actualmente no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la ley. **En ese momento, tampoco se almacenarán los valores ingresados para el cálculo de compatibilidad ni se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección.**"
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
      "heading": "6. Provisión a terceros y subcontratación",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no se proporciona información personal a terceros.",
        "Para la operación del servicio, se utiliza la infraestructura de alojamiento de {hostingProvider}, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se delegarán a Toss Payments y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, también será procesada directamente por estos proveedores, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no hay a quién solicitar acceso, corrección o eliminación.",
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
        "Si se realizan cambios en esta política, se publicarán la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d5 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué se recibe del servicio, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las fechas de nacimiento, horas de nacimiento, lugares de nacimiento, géneros y nombres ingresados para el cálculo de compatibilidad **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios del servicio. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
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
        "Actualmente, no se publican anuncios en este servicio. Si en el futuro se publican anuncios, el proveedor de anuncios (por ejemplo, Google) puede utilizar cookies para la publicación de anuncios. En ese caso, se modificará primero esta cláusula para aclarar qué cambia antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (informe de compatibilidad en PDF), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la ley.",
        "**Los valores ingresados para el cálculo de compatibilidad y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del párrafo 1 se mantiene sin cambios, independientemente de si se realiza el pago o no. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
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
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del párrafo 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados para el cálculo de compatibilidad, no hay un destinatario para solicitar la revisión, corrección o eliminación. Los registros de pedidos restantes tras el pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y se destruirán una vez transcurrido el período.",
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
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si se inicia la publicación de anuncios o la venta de productos de pago, se informará primero sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d6 = {
  "title": "Términos de Uso",
  "intro": "Estos términos establecen las condiciones de uso del servicio InyeonLink (en adelante, “Servicio”). Al utilizar el servicio, se considera que acepta estos términos.",
  "sections": [
    {
      "heading": "1. Naturaleza del Servicio",
      "paragraphs": [
        "El servicio muestra, como material de referencia, la relación entre dos personas aplicando las reglas de compatibilidad basadas en la fecha de nacimiento ingresada, utilizando la tradicional astrología coreana (saju) y el zodiaco coreano (donde se basa en los 12 signos).",
        "La tasa de coincidencia y la interpretación presentada son **material de referencia desde la perspectiva de la interpretación tradicional, y no son predicciones científicas ni afirmaciones sobre la relación.** Un puntaje bajo no significa que la relación sea mala, y un puntaje alto no garantiza la relación."
      ]
    },
    {
      "heading": "2. Tarifas de Uso",
      "paragraphs": [
        "El cálculo de compatibilidad y la consulta de resultados son gratuitos y no requieren registro.",
        "Recibir los resultados en un informe PDF es un servicio de pago. Los precios y condiciones se muestran en el artículo 3 a continuación y en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Productos de Pago y Reembolsos",
      "paragraphs": [
        "El único producto de pago que se vende es el **informe de compatibilidad en PDF**. Se genera un documento PDF de 3 páginas con los resultados de la pantalla, incluyendo los valores de los cinco elementos que no se muestran en la pantalla.",
        "El precio es {priceDomestic} para pagos nacionales (incluido el IVA) y {priceGlobal} para pagos internacionales. Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito/débito y métodos de pago simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El servicio no almacena los valores ingresados por el usuario ni el archivo PDF generado.** Una vez que se aprueba el pago, se genera y se envía el documento de inmediato, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se sale de la pantalla de resultados y se pierden los valores ingresados, no se podrá volver a crear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga tras el pago,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Una vez completada la descarga,** se limita la revocación de la solicitud por simple cambio de opinión. Se trata de contenido digital que se proporciona de inmediato y cuya restauración no es posible, lo que se considera una razón para la limitación de revocación de acuerdo con el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**Si el documento no se genera debido a un error del sistema, el archivo no se abre o el monto del pago es diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido de los resultados** no son motivo de reembolso. Los resultados de compatibilidad son material de referencia desde la perspectiva de la interpretación tradicional, y se informa sobre esta naturaleza antes del pago (ver artículo 1 anterior).",
        "Las solicitudes de reemisión después de haber utilizado las 5 reemisiones se consideran motivo de reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el propio menor o su representante legal puede cancelar dicho pago. Si se notifica a través de los contactos a continuación, se procederá al reembolso."
      ]
    },
    {
      "heading": "4. Sobre los Resultados de Cálculo",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con las reglas publicadas, por lo que si se ingresan los mismos valores, siempre se obtendrá el mismo resultado.",
        "Si no se ingresa la hora de nacimiento, el cálculo se realiza excluyendo el pilar de tiempo (時柱), por lo que los resultados pueden variar. Cuanto más preciso sea el lugar de nacimiento seleccionado, más exacto será el cálculo del pilar de tiempo.",
        "El cálculo del calendario de cuatro pilares utiliza una biblioteca de cálculo pública, y los resultados pueden variar según el manejo de los términos y zonas horarias."
      ]
    },
    {
      "heading": "5. Responsabilidad del Usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otras personas, pero no debe utilizar los resultados de manera que perjudiquen a otros.",
        "No utilice los resultados del servicio como base para decisiones que afecten los derechos de otros, como matrimonio, divorcio, contratación o transacciones. El servicio no fue creado para tales fines."
      ]
    },
    {
      "heading": "6. Conductas Prohibidas",
      "paragraphs": [
        "Las siguientes conductas no están permitidas."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interfieran con la operación del servicio",
        "Presentar los resultados del servicio como hechos o como resultados de la evaluación de expertos",
        "Duplicar o modificar el servicio para ofrecer un servicio idéntico"
      ]
    },
    {
      "heading": "7. Exención de Responsabilidad",
      "paragraphs": [
        "El servicio solo proporciona material de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No se asume responsabilidad por daños causados por la interrupción del servicio debido a razones fuera de control, como desastres naturales o fallas en la infraestructura del proveedor."
      ]
    },
    {
      "heading": "8. Derechos de Propiedad Intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del servicio, el texto y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales."
      ]
    },
    {
      "heading": "9. Cambios en los Términos y Ley Aplicable",
      "paragraphs": [
        "Cualquier cambio en los términos se publicará en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del servicio se resolverá de acuerdo con los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d7 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las fechas de nacimiento, horas de nacimiento, lugares de nacimiento, géneros y nombres ingresados para el cálculo de compatibilidad **no se almacenan en ninguna parte.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de miembros, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver el mismo resultado. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
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
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada para el cálculo de compatibilidad no se transmite a los anunciantes.",
        "Este servicio publica anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Proveedores de terceros, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero su relevancia para el usuario disminuirá.",
        "Los anuncios personalizados de todos los proveedores de terceros se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero el consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (informe de compatibilidad en PDF), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la legislación.",
        "**Los valores ingresados para el cálculo de compatibilidad y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del párrafo 1 se mantiene sin cambios, independientemente de si se realiza el pago o no. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
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
      "heading": "6. Provisión a terceros y delegación de procesamiento",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no se proporciona información personal a terceros. El procesamiento de pagos se delega a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del párrafo 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados para el cálculo de compatibilidad, no hay a quién solicitar la revisión, corrección o eliminación. Los registros de pedidos restantes por pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y se destruirán una vez transcurrido el período.",
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
        "En caso de cambiar esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como el inicio de la publicación de anuncios o la venta de productos de pago, se informará primero sobre el hecho del cambio."
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
