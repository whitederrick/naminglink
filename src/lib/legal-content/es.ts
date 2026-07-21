import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Fecha de entrada en vigor",
    referenceDate: "Fecha de referencia",
    login: "Iniciar sesión",
  },
  documents: {
    terms: {
      title: "Términos de servicio",
      description: `Estos términos describen las condiciones de uso y el alcance del servicio ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Naturaleza del servicio",
          paragraphs: [
            "Naming-Link es un estudio de creación de nombres basado en IA que ofrece cuatro servicios: (1) asociación de nombres coreanos con hanja (caracteres chinos) de significado adecuado, (2) conversión de nombres coreanos en nombres globales, (3) conversión de nombres extranjeros en nombres coreanos y (4) transcripción de nombres globales en hangul coreano según su pronunciación.",
            "Los resultados son material de referencia para apoyar la elección e interpretación de nombres. No garantizan la posibilidad de registro oficial, como registros civiles y familiares, pasaportes, visados, marcas comerciales o documentos legales.",
          ],
        },
        {
          title: "2. Uso por miembros y no miembros",
          paragraphs: [
            "El análisis de nombres y el desbloqueo de candidatos mediante anuncios con recompensa están disponibles sin cuenta. El registro o el inicio de sesión solo se solicitan para funciones que requieren una cuenta, como pedir artículos de merchandising o consultar el historial de pedidos.",
          ],
        },
        {
          title: "3. Resultados de IA y responsabilidad de revisión",
          paragraphs: [
            "Las recomendaciones de la IA incluyen referencias lingüísticas, culturales y tradicionales. Antes de elegir un nombre definitivo, el usuario debe confirmar su idoneidad a través de las autoridades competentes, expertos, hablantes locales y revisiones legales o de marcas comerciales.",
          ],
        },
        {
          title: "4. Servicios de pago",
          paragraphs: [
            "El servicio de asociación de significados de hanja ofrece los siguientes productos detallados: (1) explicaciones detalladas de hasta 5 candidatos más un análisis integral de hanja: ₩2,900 (KRW); (2) explicaciones detalladas ampliadas de hasta 10 candidatos, análisis integral de hanja y PDF de colección: ₩4,900; (3) detalles de hasta 10 candidatos, análisis integral de hanja, análisis de saju (Cuatro Pilares) y los Cinco Elementos, y PDF de colección: ₩9,900.",
            "En los servicios de conversión a nombres globales, conversión a nombres coreanos y transcripción de pronunciación en hangul puede ofrecerse un producto que desbloquea de una sola vez todos los candidatos restantes sin anuncios (₩990). Hasta que se active la función de pago, solo se ofrece el desbloqueo mediante anuncios con recompensa.",
            "Los informes detallados de pago, los resultados de análisis y los archivos PDF pueden volver a consultarse y descargarse durante las 24 horas posteriores al pago; transcurrido el periodo de conservación, se eliminan automáticamente.",
            "Los productos físicos, como los artículos de merchandising con nombres coreanos, pueden ofrecerse con precios y condiciones independientes. Para todos los productos de pago, el contenido del producto, el precio, la forma de entrega y las condiciones de reembolso se comunican en pantalla antes del pago.",
          ],
        },
        {
          title: "5. Servicios con anuncios con recompensa",
          paragraphs: [
            "El desbloqueo de candidatos mediante la visualización de anuncios solo se aplica cuando el proveedor de anuncios confirma correctamente la recompensa. La reproducción automatizada de anuncios, la manipulación de recompensas y las solicitudes repetidas anómalas pueden ser restringidas.",
          ],
        },
        {
          title: "6. Conductas prohibidas",
          paragraphs: [
            "Quedan prohibidas las siguientes conductas: introducir sin autorización datos personales de terceros, generar nombres con fines discriminatorios, de odio o de suplantación de identidad, realizar solicitudes automatizadas excesivas, provocar interrupciones del servicio y presentar los resultados como certificados oficialmente de forma falsa.",
          ],
        },
        {
          title: "7. Limitación de responsabilidad",
          paragraphs: [
            "Salvo en casos de dolo o negligencia grave, la empresa no se hace responsable de los daños indirectos, la pérdida de beneficios esperados, el rechazo de registros oficiales ni las disputas con terceros derivados del uso de las recomendaciones de la IA.",
          ],
        },
        {
          title: "8. Contacto",
          paragraphs: [`Consultas sobre el servicio: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Política de privacidad",
      description: `Esta política describe cómo ${companyInfo.serviceName} trata los datos personales.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Datos personales que se tratan",
          paragraphs: [
            "Al utilizar los servicios de nombres como no miembro, el nombre, la fecha y hora de nacimiento, el país, el idioma, el propósito de uso y las indicaciones de pronunciación se tratan de forma temporal durante la generación de los resultados del análisis, pero ni los datos introducidos ni los resultados generados se almacenan en la base de datos del servicio.",
            "Al pagar un informe detallado, se tratan los identificadores del pedido, el estado del pago y los datos de entrada y resultados de análisis necesarios para generar el informe durante el periodo de conservación (24 horas después del pago). Los datos del medio de pago, como el número de tarjeta, son tratados directamente por la pasarela de pago; la empresa no los almacena.",
            "Solo cuando se utiliza la función de pedido de artículos de merchandising pueden tratarse adicionalmente el nombre del comprador, el correo electrónico, el número de contacto, la dirección de envío, el estado del pago y la información de gestión del pedido.",
            "Para la estabilidad del servicio y la prevención de abusos, podemos tratar como registros operativos mínimos: un hash de visitante no identificable que cambia diariamente, la hora de la solicitud, el tipo de servicio, el número de usos gratuitos, los tokens de IA, el tiempo de respuesta, el estado de procesamiento y los eventos de impresión de anuncios y de recompensa.",
          ],
        },
        {
          title: "2. Finalidades del tratamiento",
          paragraphs: [
            "Los datos personales se tratan para ofrecer recomendaciones de nombres basadas en los datos introducidos, análisis de pronunciación, análisis lingüístico y cultural por país, limitación del uso gratuito, verificación de recompensas publicitarias, atención de consultas de clientes, gestión de pagos y envíos, y prevención del uso fraudulento.",
          ],
        },
        {
          title: "3. Conservación y eliminación",
          paragraphs: [
            "Los datos de entrada y los resultados del análisis solo se conservan en la cuenta cuando un miembro con sesión iniciada elige expresamente guardarlos, y se eliminan cuando el miembro los borra o finaliza la finalidad de su conservación. No se almacenan los datos ni los resultados de los no miembros, ni de los miembros que no eligen guardarlos.",
            "Los datos de entrada, los resultados de análisis y los archivos PDF de los informes detallados de pago se eliminan automáticamente 24 horas después del pago. Los registros de transacciones de pagos y pedidos se conservan por separado durante los plazos legales establecidos por la normativa aplicable.",
            "Los datos de envío se eliminan o se anonimizan una vez transcurrido el periodo necesario para la gestión del pedido, las devoluciones y la resolución de disputas.",
          ],
        },
        {
          title: "4. Comunicación a terceros y encargados del tratamiento",
          paragraphs: [
            "Para operar el servicio, la información necesaria puede ser tratada por, o encomendada a, Supabase (base de datos y autenticación), Vercel (alojamiento), la OpenAI API (análisis de IA), redes publicitarias, la pasarela de pago (PortOne) y socios de envío y producción.",
          ],
        },
        {
          title: "5. Posibles transferencias internacionales",
          paragraphs: [
            "En algunos procesos, como el alojamiento en la nube, la autenticación, las llamadas a la API de IA, la publicidad y el envío de correos electrónicos, los datos personales pueden tratarse en servidores situados en el extranjero. Los países de destino, los encargados, las finalidades y los periodos de conservación se comunicarán en detalle una vez confirmados los proveedores de servicios.",
          ],
        },
        {
          title: "6. Derechos de los usuarios",
          paragraphs: [
            "Los usuarios pueden solicitar el acceso, la rectificación, la eliminación y la suspensión del tratamiento de sus datos personales, así como retirar su consentimiento. Las solicitudes se reciben por correo electrónico en el centro de atención al cliente y se tramitan tras la verificación de identidad.",
          ],
        },
        {
          title: "7. Responsable de protección de datos",
          paragraphs: [
            `Responsable: ${companyInfo.privacyOfficer}`,
            `Correo electrónico: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Política de reembolso y cancelación",
      description:
        "Esta política describe los criterios de cancelación y reembolso de los productos digitales y de los artículos de merchandising de fabricación personalizada.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Principios generales",
          paragraphs: [
            "Cuando se active la función de pago, el alcance del reembolso podrá variar según la forma de entrega de cada producto, el momento de inicio de la producción y el estado de descarga. Las condiciones concretas se comunican en la pantalla del producto antes del pago.",
          ],
        },
        {
          title: "2. Informes detallados de hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Tras el pago, la cancelación es posible antes de que comience la generación del análisis detallado por IA. Una vez completada la generación y disponible para consulta o descarga, el reembolso por simple cambio de opinión puede estar limitado.",
            "Si se confirman errores de contenido, fallos de generación por averías del sistema o discrepancias en el importe cobrado, se procederá a la reemisión del informe o al reembolso. La expiración del periodo de conservación (24 horas después del pago) no constituye motivo de reembolso.",
          ],
        },
        {
          title: "3. Desbloqueo de todos los candidatos (₩990)",
          paragraphs: [
            "El desbloqueo de todos los candidatos en los servicios de conversión a nombres globales, conversión a nombres coreanos y transcripción de pronunciación en hangul es un contenido digital que se entrega inmediatamente tras el pago. La cancelación es posible antes de que comience la consulta de los candidatos; tras la consulta, el reembolso por simple cambio de opinión puede estar limitado.",
            "Si los candidatos no se desbloquean correctamente debido a un error del sistema, se procederá a una nueva entrega o al reembolso.",
          ],
        },
        {
          title: "4. Artículos de merchandising de fabricación personalizada",
          paragraphs: [
            "Los artículos personalizados pueden cancelarse hasta el inicio de la producción. Una vez iniciada la producción, el reembolso por simple cambio de opinión puede estar limitado; los errores tipográficos, los daños, los defectos de fabricación o los problemas de envío se resuelven, previa verificación, mediante cambio, refabricación o reembolso, según corresponda.",
          ],
        },
        {
          title: "5. Desbloqueo mediante anuncios",
          paragraphs: [
            "Los beneficios obtenidos por ver anuncios no son productos de pago. Si la recompensa no se otorga debido a un error de la red publicitaria, puede reintentarse dentro del servicio o contactarse con el centro de atención al cliente.",
          ],
        },
        {
          title: "6. Contacto",
          paragraphs: [`Consultas sobre reembolsos: ${companyInfo.email}`],
        },
      ],
    },
    pricing: {
      title: "Guía de precios",
      description:
        "Esta guía describe el alcance de los servicios gratuitos y los precios de los productos de pago.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Análisis básico (gratuito)",
          paragraphs: [
            "El análisis básico de los cuatro servicios — asociación de significados de hanja (caracteres chinos), conversión a nombres globales, conversión a nombres coreanos y transcripción de pronunciación en hangul — es gratuito para los no miembros, y pueden aplicarse límites de uso diario.",
          ],
        },
        {
          title: "Uso con anuncios con recompensa",
          paragraphs: [
            "El desbloqueo de candidatos tras ver un anuncio es un beneficio publicitario que se ofrece sin pago adicional. Cada anuncio desbloquea el siguiente candidato. La disponibilidad puede variar según el inventario de anuncios, el país, el dispositivo o la política del proveedor de anuncios.",
          ],
        },
        {
          title: "Productos detallados de asociación de significados de hanja",
          paragraphs: [
            "Explicaciones detalladas de hasta 5 candidatos más un análisis integral de hanja: ₩2,900 (KRW)",
            "Explicaciones detalladas ampliadas de hasta 10 candidatos, análisis integral de hanja y PDF de colección: ₩4,900",
            "Detalles de hasta 10 candidatos, análisis integral de hanja, análisis de saju (Cuatro Pilares) y los Cinco Elementos, y PDF de colección: ₩9,900",
            "Los informes de pago y los PDF pueden volver a consultarse y descargarse durante las 24 horas posteriores al pago; después se eliminan automáticamente.",
          ],
        },
        {
          title: "Desbloqueo de todos los candidatos",
          paragraphs: [
            "Desbloqueo de una sola vez, sin anuncios, de todos los candidatos restantes en los servicios de conversión a nombres globales, conversión a nombres coreanos y transcripción de pronunciación en hangul: ₩990 (función de pago en preparación)",
          ],
        },
        {
          title: "Artículos de merchandising con nombres coreanos",
          paragraphs: [
            "Para los artículos físicos, como el sello de nombre, el precio por producto, los gastos de envío y el plazo de fabricación se comunican por separado.",
          ],
        },
        {
          title: "Aviso previo al lanzamiento del pago",
          paragraphs: [
            "Una vez confirmados la revisión de la pasarela de pago, el registro como empresa de venta a distancia y las condiciones de colaboración con los fabricantes, el importe real del pago, los gastos de envío, el plazo de fabricación y las condiciones de reembolso se comunicarán de nuevo en la pantalla de cada producto.",
          ],
        },
      ],
    },
  },
};

export default content;
