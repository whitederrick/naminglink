import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Dreams-Link no almacena información necesaria para la interpretación de sueños. Esta política describe qué información se recibe, qué no se conserva y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las historias de sueños que usted escribe para la interpretación, cómo se siente al despertar y si repite el mismo sueño **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica.",
        "Las historias de sueños son el valor más privado que este servicio recibe. Por lo tanto, no hay una función para volver a ver resultados anteriores (diario de sueños) — esa función requeriría conservar el texto que usted ha escrito."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si envía el enlace de resultados a otra persona, esa persona también podrá ver el mismo resultado. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
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
        "Actualmente no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la ley. **En ese momento, tampoco se almacenarán los sueños que usted ha escrito ni los archivos generados**, y no se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — De acuerdo con el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no se proporciona información personal a terceros.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se subcontratarán a Toss Payments, y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, también será procesada directamente por estos proveedores, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no hay a quién solicitar la revisión, corrección o eliminación.",
        "El usuario puede eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si tiene alguna consulta relacionada con el uso del servicio, comuníquese a través de los siguientes contactos."
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
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como la publicación de anuncios o el inicio de la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d1 = {
  "title": "Términos de Uso",
  "intro": "Estos términos establecen las condiciones de uso del servicio Dreams-Link (en adelante, “servicio”). Al utilizar el servicio, se considera que acepta estos términos.",
  "sections": [
    {
      "heading": "1. Naturaleza del Servicio",
      "paragraphs": [
        "El servicio busca los símbolos de interpretación de sueños tradicionales en los sueños escritos por el usuario y presenta su significado como material de referencia. Se indica que no se pueden encontrar símbolos que no estén en el diccionario, y no se inventan significados inexistentes.",
        "Los símbolos y las interpretaciones presentadas son **material de referencia desde la perspectiva de la interpretación tradicional, y no constituyen predicciones sobre el futuro ni asesoramiento médico, financiero o legal.** No se garantiza que un buen sueño implique que algo sucederá, ni que un mal sueño implique que algo está predeterminado.",
        "**Los resultados relacionados con los sueños de concepción no determinan el estado de embarazo ni el sexo del feto.** Solo se informa sobre la aparición de símbolos que tradicionalmente se consideran sueños de concepción y su contexto."
      ]
    },
    {
      "heading": "2. Tarifas de Uso",
      "paragraphs": [
        "Actualmente, el servicio se ofrece de forma gratuita y no se requiere registro.",
        "Cuando se inicie la venta de productos de pago (imagen de tarjeta de sueño, informe de sueño de concepción en PDF), se aplicarán las condiciones del artículo 3 a continuación. Se notificará nuevamente estos términos antes del inicio de la venta."
      ]
    },
    {
      "heading": "3. Productos de Pago y Reembolsos",
      "paragraphs": [
        "Los productos de pago que se venden son **dos tipos**. La interpretación de sueños gratuita se puede utilizar sin pago, y los siguientes dos productos se crean en una forma que permite conservar los resultados.",
        "**Tarjeta de Sueño** — Es un archivo de imagen. Se crea una imagen que conserva y permite compartir los símbolos y significados tradicionales del sueño de ese día. **No es un documento (PDF).** Pago nacional {priceCardDomestic} (incluido IVA), pago internacional {priceCardGlobal}.",
        "**Informe de Sueño de Concepción en PDF** — 4 páginas. Se documentan los significados tradicionales de los símbolos y su contexto. **No determina el estado de embarazo** — solo se informa sobre la aparición de símbolos que tradicionalmente se consideran sueños de concepción. Pago nacional {priceConceptionDomestic} (incluido IVA), pago internacional {priceConceptionGlobal}.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito/débito y métodos de pago simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El servicio no almacena los datos ingresados por el usuario ni los archivos PDF generados.** Una vez que se aprueba el pago, se genera y se envía el documento de inmediato, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se pierde la entrada fuera de la pantalla de resultados, no se podrá volver a crear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga después del pago,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Después de que se complete la descarga,** se limita la cancelación por simple cambio de opinión. Se trata de contenido digital que se proporciona de inmediato y cuya restauración no es posible, lo que se considera una razón de limitación de cancelación según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**En caso de que no se genere el documento debido a un error del sistema, el archivo no se abra, o el monto del pago sea diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido de los resultados** no constituyen una razón para el reembolso. Los resultados de la interpretación son material de referencia desde la perspectiva de la interpretación tradicional, y se informa sobre esta naturaleza antes del pago (ver artículo 1 anterior).",
        "Las solicitudes de reemisión después de haber utilizado las 5 veces permitidas no constituyen una razón para el reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el menor o su representante legal pueden cancelar dicho pago. Si se informa a través de los contactos a continuación, se procederá al reembolso."
      ]
    },
    {
      "heading": "4. Sobre los Resultados de la Interpretación",
      "paragraphs": [
        "Las reglas para encontrar símbolos siguen un diccionario público y un procedimiento establecido, por lo que si se escribe el mismo texto, siempre aparecerán los mismos símbolos.",
        "Cuanto más breve sea el texto, menos símbolos se encontrarán. No se pueden encontrar símbolos que no estén en el diccionario, y en ese caso, se dejará el resultado vacío.",
        "El diccionario de símbolos es una recopilación de literatura de interpretación de sueños y tradiciones orales, y las interpretaciones pueden variar según la región y la época."
      ]
    },
    {
      "heading": "5. Responsabilidad del Usuario",
      "paragraphs": [
        "El usuario puede escribir sobre los sueños de otras personas, pero no debe utilizar los resultados de manera que perjudiquen a otros.",
        "No utilice los resultados del servicio como base para decisiones que afecten los derechos o intereses de las personas, como embarazo, salud, inversiones o contratación. El servicio no fue creado para tales fines."
      ]
    },
    {
      "heading": "6. Conductas Prohibidas",
      "paragraphs": [
        "Las siguientes conductas no están permitidas."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interrumpan la operación del servicio",
        "Presentar los resultados del servicio como hechos o como resultados de evaluaciones de expertos",
        "Duplicar o modificar el servicio para ofrecer el mismo servicio"
      ]
    },
    {
      "heading": "7. Exención de Responsabilidad",
      "paragraphs": [
        "El servicio solo proporciona material de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No se asume responsabilidad por daños causados por la interrupción del servicio debido a causas fuera de control, como desastres naturales o fallas de proveedores de infraestructura."
      ]
    },
    {
      "heading": "8. Derechos de Propiedad Intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del servicio, el texto y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales de apreciación."
      ]
    },
    {
      "heading": "9. Modificación de Términos y Ley Aplicable",
      "paragraphs": [
        "En caso de modificar los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del servicio se resolverá de acuerdo con los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d2 = {
  "title": "Política de reembolso y cancelación",
  "intro": "Criterios para la cancelación y reembolso de productos de pago. Se ha recopilado información similar a la cláusula 3.",
  "sections": [
    {
      "heading": "1. Naturaleza del producto",
      "paragraphs": [
        "Los productos que se venden son **tarjeta de sueño (꿈 카드)** (una imagen) y **informe de sueño de concepción (태몽 리포트)** en PDF, ambos son contenidos digitales que se generan y se envían de inmediato una vez que se aprueba el pago.",
        "**El servicio no almacena ni el sueño que usted ha escrito ni el archivo generado.** Por lo tanto, el archivo descargado debe ser guardado por el usuario."
      ],
      "bullets": []
    },
    {
      "heading": "2. Derecho de desistimiento",
      "paragraphs": [
        "Se rige por los criterios establecidos en la Ley de Comercio Electrónico."
      ],
      "bullets": [
        "**Antes de que comience la descarga,** puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Después de que se complete la descarga,** se limita el derecho de desistimiento por simple cambio de opinión. Se trata de un contenido digital que se proporciona inmediatamente tras el pago y cuya restauración no es posible, lo que se encuentra dentro de las razones de restricción establecidas en el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico. Se informa de este hecho y se obtiene el consentimiento en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Casos de reembolso completo",
      "paragraphs": [
        "En los siguientes casos, se procesará un reembolso completo o una reemisión tras verificar la razón."
      ],
      "bullets": [
        "Si no se generó el archivo debido a un error del sistema.",
        "Si el archivo descargado no se puede abrir.",
        "Si el monto del pago es diferente al de la orden.",
        "**Si un menor realizó el pago sin el consentimiento de su representante legal** — El propio menor o su representante legal pueden solicitar la cancelación."
      ]
    },
    {
      "heading": "4. Casos que no son motivo de reembolso",
      "paragraphs": [],
      "bullets": [
        "**Insatisfacción con el contenido del resultado.** Los resultados de la interpretación de sueños son materiales de referencia desde la perspectiva de la interpretación tradicional, y se informa de su naturaleza antes del pago. Esto también se aplica a los casos en que no se encuentran símbolos preexistentes en el sueño, ya que no se inventan significados inexistentes.",
        "Solicitudes de reemisión después de haber utilizado las 5 reemisiones permitidas."
      ]
    },
    {
      "heading": "5. Método de recepción",
      "paragraphs": [
        "Las solicitudes de reembolso o consultas deben enviarse al centro de atención al cliente ({customerCenter}) o por correo electrónico ({email}). Proporcione el número de pedido para una verificación más rápida.",
        "Los reembolsos se realizarán mediante el método de pago utilizado, y dependiendo de la tarjeta o el proveedor de pago, puede tardar de 3 a 7 días hábiles en reflejarse."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d3 = {
  "title": "Información de tarifas",
  "intro": "Se informa sobre el alcance de los servicios gratuitos y los precios de los productos de pago.",
  "sections": [
    {
      "heading": "1. Gratuito",
      "paragraphs": [
        "**La consulta de sueños y la visualización de resultados son gratuitas.** No es necesario registrarse como miembro.",
        "Puede ver en pantalla los símbolos encontrados en el sueño, su significado y lo que estos símbolos indican en conjunto. Dado que los sueños son algo que se tiene a diario, este servicio no tiene limitaciones en las consultas."
      ]
    },
    {
      "heading": "2. Tarjeta de sueño (pago)",
      "paragraphs": [
        "Pago nacional {priceCardDomestic} (incluido IVA) · Pago internacional {priceCardGlobal}",
        "Le proporcionamos el resultado en **una sola imagen**. Es una forma fácil de guardar o enviar, y **no es un documento PDF.**",
        "Puede descargarlo nuevamente **hasta 5 veces** con el mismo pedido. Sin embargo, si se pierde la pantalla de resultados y se borran los valores ingresados, no podrá volver a crearlo, así que guarde el archivo inmediatamente después del pago."
      ]
    },
    {
      "heading": "3. Informe de sueño de concepción PDF (pago)",
      "paragraphs": [
        "Pago nacional {priceConceptionDomestic} (incluido IVA) · Pago internacional {priceConceptionGlobal}",
        "Cuando se presentan símbolos que tradicionalmente se consideran sueños de concepción, organizamos el significado de esos símbolos y el contexto que los acompaña en un PDF de 4 páginas. **No se determina el estado de embarazo ni el sexo del feto.**",
        "Las condiciones de reemisión son las mismas que para la tarjeta de sueño."
      ]
    },
    {
      "heading": "4. Métodos de pago",
      "paragraphs": [
        "**Nacional** — Puede utilizar tarjetas de crédito/débito y pagos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.) a través de Toss Payments.",
        "**Internacional** — Puede pagar a través de PayPal utilizando PortOne.",
        "El monto final del pago se basa en el monto que se muestra en la pantalla de pago."
      ]
    },
    {
      "heading": "5. Cambios de precios",
      "paragraphs": [
        "Si se realizan cambios en los precios, se publicarán primero en esta página. Los pedidos que ya han sido pagados no se verán afectados por los precios cambiados."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d4 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Dreams-Link no almacena información necesaria para la interpretación de sueños. Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información no almacenada",
      "paragraphs": [
        "Las historias de sueños que usted escribe para la interpretación, cómo se siente al despertar y si tiene sueños repetidos **no se almacenan en ningún lugar.** Se utilizan solo en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica.",
        "Las historias de sueños son la información más privada que este servicio recibe. Por lo tanto, no se cuenta con una función para volver a ver resultados anteriores (diario de sueños), ya que esa función requeriría almacenar los textos que usted ha escrito."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si envía el enlace de resultados a otra persona, esa persona también podrá ver el mismo resultado. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza solo para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. Las historias de sueños que usted escribe no se transmiten a los anunciantes.",
        "Este servicio publica anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Proveedores de terceros, incluido Google, pueden almacenar o leer cookies en el navegador del usuario.",
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
        "Actualmente no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la legislación. **En ese momento, tampoco se almacenarán los sueños que usted ha escrito ni los archivos creados, y no se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección.**"
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
      "heading": "6. Provisión a terceros y delegación de procesamiento",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no se proporciona información personal a terceros.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se delegarán a Toss Payments y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, será procesada directamente por estos proveedores en ese momento, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no hay a quién solicitar la revisión, corrección o eliminación.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si tiene preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
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
        "Si se realizan cambios en esta política, se publicarán la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará previamente sobre el cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d5 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Dreams-Link no almacena información necesaria para la interpretación de sueños. Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las historias de sueños que usted escribe, cómo se siente al despertar y si repite el mismo sueño **no se almacenan en ningún lugar.** Se utilizan solo en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los datos ingresados no se vinculan a ninguna persona específica.",
        "Las historias de sueños son el valor más privado que este servicio recibe. Por lo tanto, no se ofrece una función para volver a ver resultados anteriores (diario de sueños) — esa función requeriría que se mantuvieran los textos que usted ha escrito."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si envía el enlace de resultados a otra persona, esa persona también podrá ver el mismo resultado. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
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
        "Actualmente, no se publican anuncios en este servicio. Si en el futuro se publican anuncios, el proveedor de anuncios (por ejemplo, Google) puede utilizar cookies para la publicación de anuncios. En ese caso, se modificará primero esta cláusula para aclarar qué cambiará antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (tarjeta de sueño, informe de sueño de concepción), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la ley.",
        "**Los sueños que usted ha escrito y los archivos generados no se almacenan, incluso si se ha realizado el pago.** El principio del punto 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional, internacional)",
        "Período de conservación — De acuerdo con el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no se proporciona información personal a terceros. El procesamiento de pagos se subcontrata a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que los sueños que usted ha escrito no se almacenan, no hay un destinatario para solicitudes de acceso, corrección o eliminación. Los registros de pedidos restantes tras el pago están obligados a conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y después de ese período, se destruirán.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si tiene alguna pregunta relacionada con el uso del servicio, comuníquese a través de los siguientes contactos."
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
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como la publicación de anuncios o la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d6 = {
  "title": "Términos de Uso",
  "intro": "Estos términos establecen las condiciones de uso del servicio Dreams-Link (en adelante, “servicio”). Al utilizar el servicio, se considera que acepta estos términos.",
  "effectiveLabel": "Fecha de entrada en vigor",
  "sections": [
    {
      "heading": "1. Naturaleza del servicio",
      "paragraphs": [
        "El servicio busca símbolos de interpretación tradicional en los sueños que los usuarios han escrito y presenta su significado como material de referencia. Se indica que no se pueden encontrar símbolos que no estén en el diccionario y no se inventan significados inexistentes.",
        "Los símbolos y las interpretaciones presentadas son **material de referencia desde la perspectiva de la interpretación tradicional y no constituyen predicciones sobre el futuro ni asesoramiento médico, financiero o legal.** Un buen sueño no garantiza que ocurra algo positivo, y un mal sueño no implica que algo negativo esté destinado a suceder.",
        "**Los resultados relacionados con los sueños de concepción (태몽) no determinan el estado de embarazo ni el sexo del feto.** Solo se informa sobre la aparición de símbolos que tradicionalmente se han considerado como sueños de concepción y su contexto."
      ]
    },
    {
      "heading": "2. Tarifas de uso",
      "paragraphs": [
        "La consulta de sueños y la visualización de resultados son gratuitas y no se requiere registro.",
        "Recibir los resultados en una tarjeta de sueño (꿈 카드) (imagen) o en un informe de sueño de concepción (태몽 리포트) (PDF) es de pago. Los precios y condiciones se indican en la sección 3 a continuación y en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Productos de pago y reembolsos",
      "paragraphs": [
        "Los productos de pago que ofrecemos son **dos tipos**. La interpretación de sueños gratuita se puede utilizar sin pago, y los dos productos a continuación se crean en una forma que permite conservar los resultados.",
        "**Tarjeta de sueño** — Es un archivo de imagen. Se crea una imagen que conserva y permite compartir los símbolos y significados tradicionales del sueño de ese día. **No es un documento (PDF).** Pago nacional {priceCardDomestic} (incluido IVA), pago internacional {priceCardGlobal}.",
        "**Informe de sueño de concepción (태몽) PDF** — 4 páginas. Se documentan los significados tradicionales de los símbolos y su contexto. **No determina el estado de embarazo** — solo informa que los símbolos tradicionalmente considerados como sueños de concepción aparecieron en el sueño. Pago nacional {priceConceptionDomestic} (incluido IVA), pago internacional {priceConceptionGlobal}.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito/débito y métodos de pago simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El servicio no almacena los datos ingresados por el usuario ni los archivos PDF generados.** Una vez que se aprueba el pago, se genera y se envía el documento en ese momento, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se sale de la pantalla de resultados y se pierden los datos ingresados, no se podrá volver a crear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga tras el pago,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Una vez completada la descarga,** se limita la revocación del pedido por simple cambio de opinión. Se trata de contenido digital que se proporciona inmediatamente y cuya restauración no es posible, lo que corresponde a las razones de limitación de revocación de pedidos establecidas en el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**En caso de que no se genere el documento debido a un error del sistema, el archivo no se abra o el monto del pago sea diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido del resultado** no son motivo de reembolso. Los resultados de la interpretación son materiales de referencia desde la perspectiva de la interpretación tradicional, y su naturaleza se informa antes del pago (ver párrafo 1 anterior).",
        "Las solicitudes de reembolso después de haber utilizado las 5 reemisiones no son motivo de reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el menor o su representante legal puede cancelar dicho pago. Si nos informan a través de los contactos a continuación, se procederá con el reembolso."
      ]
    },
    {
      "heading": "4. Resultados de la interpretación de sueños",
      "paragraphs": [
        "Las reglas para encontrar símbolos siguen un diccionario público y un procedimiento establecido, por lo que si se escribe el mismo texto, siempre aparecerán los mismos símbolos.",
        "Cuanto más breve sea la escritura, menos símbolos se encontrarán. No se pueden encontrar símbolos que no estén en el diccionario, y en ese caso, se dejará el resultado en blanco.",
        "El diccionario de símbolos es una recopilación de la literatura de interpretación de sueños transmitida y de la tradición oral, y existen interpretaciones que varían según la región y la época."
      ]
    },
    {
      "heading": "5. Responsabilidad del usuario",
      "paragraphs": [
        "El usuario puede registrar los sueños de otras personas, pero no debe utilizar los resultados de manera que perjudiquen a terceros.",
        "No utilice los resultados del servicio como base para decisiones que afecten los derechos o intereses de las personas, como el embarazo, la salud, la inversión o la contratación. El servicio no fue creado para tales fines."
      ]
    },
    {
      "heading": "6. Actos prohibidos",
      "paragraphs": [
        "Los siguientes actos no están permitidos."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interfieran con la operación del servicio",
        "Presentar los resultados del servicio como hechos o como si fueran el resultado de la evaluación de un experto",
        "Duplicar o modificar el servicio para ofrecer un servicio idéntico"
      ]
    },
    {
      "heading": "7. Exención de responsabilidad",
      "paragraphs": [
        "El servicio solo proporciona materiales de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y de las consecuencias de dichas decisiones.",
        "No se asume responsabilidad por daños resultantes de la interrupción del servicio debido a causas fuera de nuestro control, como desastres naturales o fallos de los proveedores de infraestructura."
      ]
    },
    {
      "heading": "8. Derechos de propiedad intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del servicio, los textos y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales de apreciación."
      ]
    },
    {
      "heading": "9. Modificación de los términos y ley aplicable",
      "paragraphs": [
        "En caso de modificar los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del servicio se llevará a cabo de acuerdo con los procedimientos establecidos por la legislación aplicable."
      ]
    }
  ]
};

const d7 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Dreams-Link no almacena información necesaria para la interpretación de sueños. Esta política explica qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las historias de sueños que usted escribe, cómo se siente al despertar y si tiene sueños recurrentes **no se almacenan en ningún lugar.** Se utilizan solo en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los datos ingresados no se vinculan a ninguna persona específica.",
        "Las historias de sueños son el valor más privado que recibe este servicio. Por lo tanto, no se ha implementado una función para volver a ver resultados anteriores (diario de sueños), ya que esa función requeriría mantener los textos que usted ha escrito."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si envía el enlace de resultados a otra persona, esa persona también podrá ver el mismo resultado. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
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
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. Las historias de sueños que usted escribe no se transmiten a los anunciantes.",
        "Este servicio publica anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Proveedores de terceros, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero serán menos relevantes para el usuario.",
        "Los anuncios personalizados de todos los proveedores de terceros se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero su consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (tarjeta de sueño, informe de sueño de concepción), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la ley.",
        "**Las historias de sueños que usted ha escrito y los archivos generados no se almacenan, incluso si se ha realizado el pago.** El principio del punto 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional, internacional)",
        "Período de conservación — Según el artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación del procesamiento",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no se proporciona información personal a terceros. El procesamiento de pagos se subcontrata a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que las historias de sueños que usted escribe no se almacenan, no hay un destinatario al que solicitar la revisión, corrección o eliminación. Los registros de pedidos restantes por pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y se destruirán una vez transcurrido el período.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si tiene alguna pregunta relacionada con el uso del servicio, comuníquese a través de los siguientes contactos."
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
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero el hecho del cambio."
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
