import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "InyeonLink não armazena informações necessárias para o cálculo de compatibilidade. Esta política descreve o que o serviço coleta, o que não deixa registrado e o que é automaticamente gravado.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As datas de nascimento, horários de nascimento, locais de nascimento, gêneros e nomes fornecidos para o cálculo de compatibilidade **não são armazenados em lugar algum.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas pelo serviço para identificar os usuários. No entanto, os registros mínimos necessários para a operação do serviço são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para rastrear os usuários.",
        "Atualmente, não há anúncios exibidos neste serviço. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para exibir anúncios. Nesse caso, esta cláusula será alterada para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando começarmos a vender, os seguintes itens serão armazenados para processamento de pagamentos e preservação de registros de transações conforme a legislação. **Mesmo assim, os valores inseridos para o cálculo de compatibilidade e o PDF gerado não serão armazenados**, e não coletamos informações que identifiquem o usuário, como nome, contato e endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (doméstica ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei sobre Proteção do Consumidor em Transações de Comércio Eletrônico, os registros relacionados ao pagamento e fornecimento de bens serão mantidos por 5 anos, e os registros sobre reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e durante esse processo, os registros de acesso mencionados no item 3 são processados de acordo com a política do respectivo provedor.",
        "Quando começarmos a vender produtos pagos, os pagamentos nacionais serão delegados à Toss Payments, e os pagamentos internacionais serão delegados à PortOne (PayPal). Informações sobre métodos de pagamento, como números de cartão e contas, serão processadas diretamente por esses provedores, e o serviço não as receberá."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há destinatários para solicitações de acesso, correção ou exclusão.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos detalhes abaixo."
      ]
    },
    {
      "heading": "8. Dados pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta dados pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se o conteúdo do processamento realmente mudar, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos primeiro sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d1 = {
  "title": "Termos de Uso",
  "intro": "Este termo estabelece as condições de uso do InyeonLink (doravante denominado “Serviço”). Ao utilizar o Serviço, você concorda com estes termos.",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O Serviço aplica regras de relacionamento baseadas na data de nascimento inserida, mostrando uma referência sobre a relação entre duas pessoas com base na tradicional Myeongri (saju) e no Zodíaco (diz).",
        "A taxa de correspondência e as interpretações apresentadas são **materiais de referência sob a perspectiva da interpretação tradicional, e não previsões científicas ou afirmações sobre relacionamentos.** Uma pontuação baixa não significa que o relacionamento é ruim, e uma pontuação alta não garante que o relacionamento seja seguro."
      ]
    },
    {
      "heading": "2. Taxa de Uso",
      "paragraphs": [
        "Atualmente, o Serviço é oferecido gratuitamente e não requer registro.",
        "Quando começarmos a vender produtos pagos (relatório de compatibilidade em PDF), as condições do item 3 abaixo se aplicarão. Este termo será notificado novamente antes do início da venda."
      ]
    },
    {
      "heading": "3. Produtos Pagos e Reembolso",
      "paragraphs": [
        "O único produto pago que será vendido é o **relatório de compatibilidade em PDF**. Ele será gerado como um documento PDF de 3 páginas com os resultados exibidos na tela, incluindo os valores das forças dos cinco elementos que não são mostrados na tela.",
        "O preço é {priceDomestic} para pagamentos nacionais (incluindo IVA) e {priceGlobal} para pagamentos internacionais. Para pagamentos nacionais, você pode usar cartões de crédito/débito e pagamentos simplificados (Toss Payments, KakaoPay, NaverPay, Payco, etc.), e para pagamentos internacionais, o PayPal através do PortOne. O valor final é o que é exibido na tela de pagamento.",
        "**O Serviço não armazena os dados inseridos pelo usuário nem o arquivo PDF gerado.** Assim que o pagamento é aprovado, o documento é gerado e enviado imediatamente, sem deixar nada no servidor. Portanto, o arquivo baixado deve ser mantido pelo usuário.",
        "Para casos em que o download é interrompido ou o arquivo é perdido, você pode baixar novamente **até 5 vezes** com o mesmo pedido. No entanto, se os dados inseridos forem perdidos ao sair da tela de resultados, não será possível recriá-los, então, por favor, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes que o download comece após o pagamento, você pode cancelar a qualquer momento e receber um reembolso total.**",
        "**Após a conclusão do download, o cancelamento por arrependimento é restrito.** É um conteúdo digital que é fornecido imediatamente e não pode ser restaurado, o que se enquadra nas razões para restrição de cancelamento conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas.",
        "**Se o documento não for gerado devido a erro do sistema, o arquivo não abrir ou o valor pago for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Reclamações sobre o conteúdo dos resultados** não são motivos para reembolso. Os resultados de compatibilidade são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento (item 1 acima).",
        "Solicitações de reemissão após usar todas as 5 reemissões não são motivos para reembolso.",
        "**Se um menor efetuar um pagamento sem o consentimento do responsável legal,** ele ou o responsável legal podem cancelar esse pagamento. Informe-nos através do contato abaixo para que possamos reembolsá-lo."
      ]
    },
    {
      "heading": "4. Sobre os Resultados dos Cálculos",
      "paragraphs": [
        "Todos os pontos são calculados de acordo com regras públicas, portanto, se os mesmos valores forem inseridos, sempre resultarão nos mesmos resultados.",
        "Se a hora de nascimento não for inserida, o cálculo será feito excluindo o Si-Ju (時柱), o que pode resultar em resultados diferentes. Quanto mais preciso for a escolha do local de nascimento, mais preciso será o cálculo do Si-Ju.",
        "O cálculo do Myeongseong utiliza uma biblioteca de cálculo pública, e os resultados podem variar de acordo com o tratamento de períodos e fusos horários."
      ]
    },
    {
      "heading": "5. Responsabilidade do Usuário",
      "paragraphs": [
        "O usuário pode inserir a data de nascimento de outra pessoa, mas não deve usar os resultados de forma prejudicial a terceiros.",
        "Não utilize os resultados do Serviço como base para decisões que afetem os direitos de terceiros, como casamento, divórcio, contratação ou transações. O Serviço não foi criado para tais fins."
      ]
    },
    {
      "heading": "6. Atos Proibidos",
      "paragraphs": [
        "Os seguintes atos não são permitidos."
      ],
      "bullets": [
        "Enviar solicitações excessivas com ferramentas automatizadas que interfiram na operação do Serviço",
        "Apresentar os resultados do Serviço como se fossem fatos ou resultados de avaliações de especialistas",
        "Duplicar ou modificar o Serviço para oferecer um serviço idêntico"
      ]
    },
    {
      "heading": "7. Isenção de Responsabilidade",
      "paragraphs": [
        "O Serviço fornece apenas materiais de referência e não se responsabiliza pelas decisões tomadas pelo usuário com base nos resultados e suas consequências.",
        "Não nos responsabilizamos por danos decorrentes da interrupção do Serviço devido a causas fora de nosso controle, como desastres naturais ou falhas de provedores de infraestrutura."
      ]
    },
    {
      "heading": "8. Direitos de Propriedade Intelectual",
      "paragraphs": [
        "Os direitos sobre a tela do Serviço, frases e implementações das regras de cálculo pertencem ao operador. O usuário pode salvar ou compartilhar os resultados para fins pessoais."
      ]
    },
    {
      "heading": "9. Alterações nos Termos e Lei Aplicável",
      "paragraphs": [
        "Se os termos forem alterados, eles serão publicados nesta página com a data de entrada em vigor.",
        "Estes termos são regidos pela lei da República da Coreia, e disputas relacionadas ao uso do Serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d2 = {
  "title": "Política de Reembolso e Cancelamento",
  "intro": "Critérios de cancelamento e reembolso do relatório de compatibilidade em PDF. Reunimos separadamente o conteúdo do item 3 dos termos e condições.",
  "sections": [
    {
      "heading": "1. Natureza do Produto",
      "paragraphs": [
        "O produto vendido é um único **relatório de compatibilidade em PDF**, que é um conteúdo digital gerado e enviado imediatamente após a aprovação do pagamento.",
        "**O serviço não armazena os dados inseridos pelo usuário nem o arquivo PDF gerado.** Portanto, o arquivo baixado deve ser mantido pelo usuário."
      ],
      "bullets": []
    },
    {
      "heading": "2. Direito de Arrependimento",
      "paragraphs": [
        "Seguirá os critérios estabelecidos pela Lei de Comércio Eletrônico."
      ],
      "bullets": [
        "**Antes do início do download,** é possível cancelar a qualquer momento e receber o reembolso total.",
        "**Após a conclusão do download,** o direito de arrependimento por simples mudança de ideia é restrito. Trata-se de um conteúdo digital que é fornecido imediatamente após o pagamento e cuja recuperação não é possível, o que se enquadra nas razões de restrição estabelecidas no Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Comércio Eletrônico. Esta informação é previamente comunicada e o consentimento é obtido na tela de pagamento."
      ]
    },
    {
      "heading": "3. Casos de Reembolso Total",
      "paragraphs": [
        "Nos seguintes casos, o reembolso total ou a reemissão será processado após a verificação da razão."
      ],
      "bullets": [
        "Caso o documento não tenha sido gerado devido a um erro de sistema",
        "Caso o arquivo baixado não abra",
        "Caso o valor pago seja diferente do pedido",
        "**Se um menor de idade realizar o pagamento sem o consentimento do responsável legal** — O próprio menor ou o responsável legal pode solicitar o cancelamento."
      ]
    },
    {
      "heading": "4. Casos que Não São Motivos para Reembolso",
      "paragraphs": [],
      "bullets": [
        "**Insatisfação com o conteúdo dos resultados.** Os resultados de compatibilidade são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento.",
        "Solicitação de reemissão após o uso de todas as 5 reemissões."
      ]
    },
    {
      "heading": "5. Método de Solicitação",
      "paragraphs": [
        "Solicitações de reembolso ou consultas devem ser feitas ao centro de atendimento ao cliente ({customerCenter}) ou por e-mail ({email}). Informar o número do pedido ajudará na rápida verificação.",
        "Os reembolsos serão feitos pelo meio de pagamento utilizado, e, dependendo da situação da operadora de cartão ou do provedor de pagamento, pode levar de 3 a 7 dias úteis para ser refletido."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d3 = {
  "title": "Informações de Preços",
  "intro": "Apresentamos o escopo dos serviços gratuitos e os preços dos produtos pagos.",
  "sections": [
    {
      "heading": "1. Gratuito",
      "paragraphs": [
        "**O cálculo de compatibilidade e a consulta de resultados são gratuitos.** Não é necessário se registrar como membro.",
        "Você pode visualizar a taxa de correspondência, a pontuação por item, os pilares saju de duas pessoas e a força dos cinco elementos, além da forma do relacionamento, tudo na tela."
      ]
    },
    {
      "heading": "2. Relatório de Compatibilidade PDF (pago)",
      "paragraphs": [
        "Pagamento nacional {priceDomestic} (incluindo IVA) · Pagamento internacional {priceGlobal}",
        "Transformamos os resultados exibidos na tela em um documento PDF de 3 páginas. Inclui também os valores da força dos cinco elementos que não são exibidos na tela.",
        "Você pode baixar novamente **até 5 vezes** com o mesmo pedido. No entanto, se você sair da tela de resultados e os valores de entrada forem perdidos, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ]
    },
    {
      "heading": "3. Métodos de Pagamento",
      "paragraphs": [
        "**Nacional** — Você pode usar cartões de crédito e débito e pagamentos simplificados (Toss Payments, KakaoPay, NaverPay, Payco, etc.) através da Toss Payments.",
        "**Internacional** — Você pode pagar via PayPal através da PortOne.",
        "O valor final do pagamento é o que é exibido na tela de pagamento."
      ]
    },
    {
      "heading": "4. Alteração de Preços",
      "paragraphs": [
        "Se houver alteração de preços, isso será publicado primeiro nesta página. Os pedidos que já foram pagos não serão afetados pelo preço alterado."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d4 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "InyeonLink não armazena informações necessárias para o cálculo de compatibilidade. Esta política descreve o que o serviço recebe, o que não deixa, e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As datas de nascimento, hora de nascimento, local de nascimento, gênero e nome fornecidos para o cálculo de compatibilidade **não são armazenados em lugar algum.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membro, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas pelo serviço para identificar os usuários. No entanto, o provedor de infraestrutura automaticamente mantém o mínimo de registros necessários para a operação do serviço."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para identificar ou rastrear usuários. As informações inseridas no cálculo de compatibilidade não são transmitidas a anunciantes.",
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, as seguintes ações ocorrem."
      ],
      "bullets": [
        "Fornecedores terceirizados, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base no histórico de visitas a este e a vários outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo desativando, os anúncios continuarão a ser exibidos, mas a relevância para o usuário será reduzida.",
        "Os anúncios personalizados de todos os fornecedores terceirizados podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também maneiras de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça são questionados previamente sobre o consentimento para o uso de cookies de publicidade."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando começarmos a vender, os seguintes itens serão armazenados para processamento de pagamento e preservação de registros de transações conforme a legislação. **Mesmo assim, os valores inseridos no cálculo de compatibilidade e o PDF gerado não serão armazenados**, e não coletamos informações que identifiquem o usuário, como nome, contato ou endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Comércio Eletrônico, registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para operar o serviço, e durante esse processo, os registros de acesso mencionados no item 3 são processados de acordo com a política do provedor.",
        "Quando começarmos a vender produtos pagos, os pagamentos nacionais serão delegados à Toss Payments, e os pagamentos internacionais à PortOne (PayPal). Informações de métodos de pagamento, como números de cartão e contas, serão processadas diretamente por esses provedores, e o serviço não as receberá."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há solicitações de acesso, correção ou exclusão a serem feitas.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos detalhes abaixo."
      ]
    },
    {
      "heading": "8. Dados pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta dados pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Caso esta política seja alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d5 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "InyeonLink não armazena informações necessárias para o cálculo de compatibilidade. Esta política descreve o que o serviço coleta, o que não deixa registrado e o que é automaticamente gravado.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As datas de nascimento, horários de nascimento, locais de nascimento, gêneros e nomes fornecidos para o cálculo de compatibilidade **não são armazenados em lugar algum.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem junto com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas pelo serviço para identificar os usuários. No entanto, o provedor de infraestrutura automaticamente mantém o mínimo de registros necessários para a operação do serviço."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para rastrear os usuários.",
        "Atualmente, este serviço não exibe anúncios. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para exibir anúncios. Nesse caso, esta cláusula será alterada previamente para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao pagar por produtos pagos (relatório de compatibilidade em PDF), as informações do pedido são armazenadas para processamento do pagamento e para a preservação dos registros de transações conforme a legislação.",
        "**Os valores inseridos para o cálculo de compatibilidade e o PDF gerado não são armazenados, mesmo após o pagamento.** O princípio do item 1 permanece inalterado, independentemente do pagamento. Os itens armazenados são os seguintes, e informações que identificam o usuário, como nome, contato e endereço, não estão incluídas."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens são mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores são mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não armazenamos dados pessoais que identificam os usuários, também não fornecemos dados pessoais a terceiros. O processamento de pagamentos é delegado aos seguintes prestadores de serviços.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e durante esse processo, os registros de acesso do item 3 são processados de acordo com a política desse prestador.",
        "Os pagamentos nacionais são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através da PortOne. Informações sobre métodos de pagamento, como números de cartão e contas, são processadas diretamente por esses prestadores, e o serviço não recebe nem armazena essas informações."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como os valores inseridos para o cálculo de compatibilidade não são armazenados, não há destinatário para solicitações de acesso, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela legislação, e não podem ser excluídos durante esse período; após o término do período, serão destruídos.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos dados abaixo."
      ]
    },
    {
      "heading": "8. Dados pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta dados pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se o conteúdo do processamento realmente mudar, como a exibição de anúncios ou a venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d6 = {
  "title": "Termos de Uso",
  "intro": "Este termo estabelece as condições de uso do InyeonLink (doravante denominado “Serviço”). Ao utilizar o Serviço, considera-se que você concorda com este termo.",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O Serviço apresenta, com base na data de nascimento inserida, as regras de relacionamento entre a tradicional Myeongri (saju) e o Zodíaco (dizendo) como material de referência para o relacionamento entre duas pessoas.",
        "A taxa de correspondência e a interpretação apresentadas são **materiais de referência sob a perspectiva da interpretação tradicional e não constituem previsões científicas ou afirmações sobre o relacionamento.** Uma pontuação baixa não significa que o relacionamento é ruim, e uma pontuação alta não garante que o relacionamento seja seguro."
      ]
    },
    {
      "heading": "2. Taxa de Uso",
      "paragraphs": [
        "O cálculo de compatibilidade e a consulta de resultados são gratuitos e não requerem registro.",
        "Receber os resultados em um relatório PDF é pago. Os preços e condições são exibidos na seção 3 abaixo e na tela de pagamento."
      ]
    },
    {
      "heading": "3. Produtos Pagos e Reembolso",
      "paragraphs": [
        "O único produto pago disponível para venda é o **relatório de compatibilidade em PDF**. Ele cria um documento PDF de 3 páginas a partir dos resultados exibidos na tela, incluindo os valores de força dos cinco elementos que não são exibidos na tela.",
        "O preço para pagamentos nacionais é {priceDomestic} (incluindo IVA) e para pagamentos internacionais é {priceGlobal}. Para pagamentos nacionais, é possível utilizar cartões de crédito/débito e pagamentos simplificados (Toss Payments, KakaoPay, NaverPay, Payco, etc.) através do Toss Payments, enquanto para pagamentos internacionais, é através do PayPal via PortOne. O valor final é o que é exibido na tela de pagamento.",
        "**O Serviço não armazena os dados inseridos pelo usuário nem o arquivo PDF gerado.** Assim que o pagamento é aprovado, o documento é gerado e enviado imediatamente, sem deixar nada no servidor. Portanto, o arquivo baixado deve ser mantido pelo usuário.",
        "Em caso de interrupção do download ou perda do arquivo, é possível baixar novamente até **5 vezes** com o mesmo pedido. No entanto, se os dados de entrada forem perdidos ao sair da tela de resultados, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes que o download comece após o pagamento, você pode cancelar a qualquer momento e receber um reembolso total.**",
        "**Após a conclusão do download, o cancelamento por arrependimento é restrito.** É um conteúdo digital que é fornecido imediatamente e não pode ser restaurado, o que se enquadra nas razões para restrição de cancelamento conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas.",
        "**Se o documento não for gerado devido a erro do sistema, o arquivo não abrir ou o valor pago for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Reclamações sobre o conteúdo dos resultados** não são motivos para reembolso. Os resultados de compatibilidade são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento (conforme o item 1 acima).",
        "Solicitações de reemissão após o uso de todas as 5 reemissões não são motivos para reembolso.",
        "**Se um menor efetuar um pagamento sem o consentimento do responsável legal,** ele ou o responsável legal podem cancelar esse pagamento. Informe-nos através dos contatos abaixo para que possamos reembolsá-lo."
      ]
    },
    {
      "heading": "4. Sobre os Resultados do Cálculo",
      "paragraphs": [
        "Todas as pontuações são calculadas de acordo com regras públicas, portanto, se os mesmos valores forem inseridos, o mesmo resultado sempre será obtido.",
        "Se a hora de nascimento não for inserida, o cálculo será feito excluindo o Si-Ju (時柱), portanto, os resultados podem variar. Quanto mais precisamente o local de nascimento for selecionado, mais preciso será o cálculo do Si-Ju.",
        "O cálculo do Myeongseong utiliza uma biblioteca de cálculo pública, e os resultados podem variar dependendo do tratamento de termos e fusos horários."
      ]
    },
    {
      "heading": "5. Responsabilidade do Usuário",
      "paragraphs": [
        "Os usuários podem inserir a data de nascimento de outras pessoas, mas não devem usar os resultados de forma prejudicial a terceiros.",
        "Não utilize os resultados do Serviço como base para decisões que afetem os direitos de terceiros, como casamento, divórcio, contratação ou transações. O Serviço não foi criado para esses fins."
      ]
    },
    {
      "heading": "6. Atos Proibidos",
      "paragraphs": [
        "Os seguintes atos não são permitidos."
      ],
      "bullets": [
        "Enviar solicitações excessivas com ferramentas automatizadas que interfiram na operação do Serviço",
        "Apresentar os resultados do Serviço como se fossem fatos ou resultados de avaliações de especialistas",
        "Duplicar ou modificar o Serviço para fornecer um serviço idêntico"
      ]
    },
    {
      "heading": "7. Isenção de Responsabilidade",
      "paragraphs": [
        "O Serviço fornece apenas materiais de referência e não se responsabiliza por decisões tomadas pelo usuário com base nos resultados e suas consequências.",
        "Não nos responsabilizamos por danos decorrentes da interrupção do Serviço devido a razões fora de nosso controle, como desastres naturais ou falhas de provedores de infraestrutura."
      ]
    },
    {
      "heading": "8. Direitos de Propriedade Intelectual",
      "paragraphs": [
        "Os direitos sobre a tela do Serviço, frases e implementações das regras de cálculo pertencem ao operador. Os usuários podem salvar ou compartilhar os resultados para fins pessoais."
      ]
    },
    {
      "heading": "9. Alterações nos Termos e Lei Aplicável",
      "paragraphs": [
        "Se os termos forem alterados, serão publicados nesta página com a data de entrada em vigor.",
        "Estes termos são regidos pela lei da República da Coreia, e disputas relacionadas ao uso do Serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d7 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "InyeonLink não armazena informações necessárias para o cálculo de compatibilidade. Esta política descreve o que o serviço coleta, o que não deixa, e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As datas de nascimento, horários de nascimento, locais de nascimento, gêneros e nomes fornecidos para o cálculo de compatibilidade **não são armazenados em lugar algum.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem junto com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membros, os valores inseridos não são vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas pelo serviço para identificar os usuários. No entanto, registros mínimos necessários para a operação do serviço são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para identificar ou rastrear usuários. As informações inseridas no cálculo de compatibilidade não são transmitidas a anunciantes.",
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, as seguintes ações ocorrem."
      ],
      "bullets": [
        "Fornecedores terceiros, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base nos registros de visita a este e a vários outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo que desativados, os anúncios continuarão a ser exibidos, mas com menor relevância para o usuário.",
        "Os anúncios personalizados de todos os fornecedores terceiros podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também uma maneira de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça são questionados previamente sobre o consentimento para o uso de cookies de publicidade."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao efetuar o pagamento por produtos pagos (relatório de compatibilidade em PDF), as informações do pedido são armazenadas para processamento do pagamento e para a preservação de registros de transações conforme a legislação.",
        "**Os valores inseridos no cálculo de compatibilidade e o PDF gerado não são armazenados mesmo após o pagamento.** O princípio do item 1 permanece inalterado, independentemente do pagamento. Os itens armazenados são os seguintes, e informações que identificam o usuário, como nome, contato e endereço, não estão incluídas."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de retenção — De acordo com o Artigo 6 da Lei sobre a Proteção do Consumidor em Transações de Comércio Eletrônico, registros relacionados ao pagamento e fornecimento de bens são mantidos por 5 anos, e registros de reclamações ou disputas dos consumidores são mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não armazenamos informações pessoais que identificam os usuários, também não fornecemos informações pessoais a terceiros. O processamento de pagamentos é delegado aos seguintes prestadores de serviços.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e durante esse processo, os registros de acesso do item 3 são processados de acordo com a política desse prestador.",
        "Os pagamentos nacionais são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através da PortOne. Informações de métodos de pagamento, como números de cartão e contas, são processadas diretamente por esses prestadores, e o serviço não as recebe nem as armazena."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como não armazenamos os valores inseridos no cálculo de compatibilidade, não há destinatário para solicitações de consulta, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela legislação, e não podem ser excluídos durante esse período, sendo destruídos após o término do mesmo.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver questões relacionadas ao uso do serviço, entre em contato pelos seguintes meios."
      ]
    },
    {
      "heading": "8. Informações pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta informações pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como o início da exibição de anúncios ou venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

export const pt: LegalLocaleDocuments = {
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
