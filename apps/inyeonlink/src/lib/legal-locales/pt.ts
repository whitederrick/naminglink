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
        "As datas de nascimento, horários de nascimento, locais de nascimento, gêneros e nomes fornecidos para o cálculo de compatibilidade **não são armazenados em nenhum lugar.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem junto com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esse valor está localizado após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
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
        "Atualmente, não há anúncios exibidos neste serviço. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para a exibição de anúncios. Nesse caso, esta cláusula será alterada para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando começarmos a vender, os seguintes itens serão armazenados para processamento de pagamento e preservação de registros de transações conforme a legislação. **Mesmo assim, os valores inseridos para o cálculo de compatibilidade e o PDF gerado não serão armazenados**, e não coletamos informações que identifiquem o usuário, como nome, contato e endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional, internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores serão destruídos após 3 anos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para operar o serviço, e, nesse processo, os registros de acesso mencionados na seção 3 são processados de acordo com a política desse provedor.",
        "Quando começarmos a vender produtos pagos, os pagamentos nacionais serão delegados à Toss Payments, e os pagamentos internacionais à PortOne (PayPal). Informações de pagamento, como números de cartão e conta, serão processadas diretamente por esses provedores, e o serviço não as receberá."
      ]
    },
    {
      "heading": "7. Direitos do usuário",
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
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d1 = {
  "title": "Termos de Uso",
  "intro": "Este termo estabelece as condições de uso do InyeonLink (doravante denominado \"Serviço\"). Ao utilizar o Serviço, você concorda com estes termos.",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O Serviço apresenta, com base na data de nascimento inserida, as regras de relacionamento entre a tradicional astrologia coreana (saju) e o zodíaco coreano (십이지), mostrando uma referência sobre a relação entre duas pessoas.",
        "A taxa de compatibilidade e a interpretação apresentadas são **materiais de referência sob a perspectiva da interpretação tradicional e não constituem previsões científicas ou afirmações sobre o relacionamento.** Uma pontuação baixa não significa que o relacionamento é ruim, e uma pontuação alta não garante que o relacionamento será bem-sucedido."
      ]
    },
    {
      "heading": "2. Taxa de Uso",
      "paragraphs": [
        "Atualmente, o Serviço é oferecido gratuitamente e não requer registro.",
        "Quando começarmos a vender produtos pagos (dois tipos de relatórios PDF), as condições do item 3 abaixo se aplicarão. Este termo será notificado novamente antes do início das vendas."
      ]
    },
    {
      "heading": "3. Produtos Pagos e Reembolso",
      "paragraphs": [
        "Os produtos pagos que estão à venda são **dois tipos de relatórios PDF**. Ambos transformam os resultados exibidos na tela em documentos, incluindo informações que não estão na tela.",
        "**Relatório de Compatibilidade Saju PDF** — 7 páginas. Inclui a direção das energias que se cruzam, uma tabela que examina mais a fundo os saju de cada um, o local onde os quatro pilares se encontram e as bases de cálculo. Pagamento nacional {priceDomestic} (incluindo IVA), pagamento internacional {priceGlobal}.",
        "**Relatório de Conexão PDF** — 4 páginas. Inclui uma tabela completa de classificação dos dez troncos celestiais e dos doze signos do zodíaco que não estão na tela. Pagamento nacional {priceAffinityDomestic} (incluindo IVA), pagamento internacional {priceAffinityGlobal}.",
        "Os pagamentos nacionais podem ser feitos através do Toss Payments usando cartões de crédito, cartões de débito e pagamentos simplificados (como Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), enquanto os pagamentos internacionais são feitos via PayPal através do PortOne. O valor final será o que aparece na tela de pagamento.",
        "**O Serviço não armazena os dados inseridos pelo usuário nem os arquivos PDF gerados.** Assim que o pagamento for aprovado, o documento é gerado e enviado, e nada é mantido no servidor. Portanto, o arquivo baixado deve ser armazenado pelo usuário.",
        "Para o caso de interrupção do download ou perda do arquivo, é possível baixar novamente **até 5 vezes** com o mesmo pedido. No entanto, se os dados inseridos forem perdidos ao sair da tela de resultados, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes do início do download após o pagamento, você pode cancelar a qualquer momento e receber um reembolso total.**",
        "**Após a conclusão do download, o cancelamento por arrependimento é restrito.** Este é um conteúdo digital que é fornecido imediatamente e não pode ser restaurado, o que se enquadra nas razões para restrição de cancelamento conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas.",
        "**Se o documento não for gerado devido a erro do sistema, o arquivo não abrir ou o valor pago for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Reclamações sobre o conteúdo dos resultados** não são motivos para reembolso. Os resultados de compatibilidade são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento (veja o item 1 acima).",
        "Solicitações de reemissão após o uso de todas as 5 reemissões não são motivos para reembolso.",
        "**Se um menor efetuar um pagamento sem o consentimento do responsável legal,** ele ou o responsável legal podem cancelar esse pagamento. Informe-nos através dos contatos abaixo para que possamos processar o reembolso."
      ]
    },
    {
      "heading": "4. Sobre os Resultados dos Cálculos",
      "paragraphs": [
        "Todas as pontuações são calculadas de acordo com regras publicadas, portanto, se os mesmos valores forem inseridos, sempre resultarão nos mesmos resultados.",
        "Se a hora de nascimento não for inserida, o cálculo será feito excluindo o pilar do tempo (시주), o que pode resultar em resultados diferentes. Quanto mais preciso for a escolha do local de nascimento, mais exato será o cálculo do pilar do tempo.",
        "O cálculo do calendário lunar utiliza uma biblioteca de cálculo pública, e os resultados podem variar dependendo do tratamento de períodos e fusos horários."
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
        "As seguintes ações não são permitidas."
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
        "Se os termos forem alterados, serão publicados nesta página com a data de entrada em vigor.",
        "Estes termos são regidos pela lei da República da Coreia, e disputas relacionadas ao uso do Serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d2 = {
  "title": "Política de Reembolso e Cancelamento",
  "intro": "Esta é a base para cancelamento e reembolso do relatório de compatibilidade PDF. Reunimos informações semelhantes ao item 3 dos termos e condições.",
  "sections": [
    {
      "heading": "1. Natureza do Produto",
      "paragraphs": [
        "O produto vendido é um único **relatório de compatibilidade PDF**, que é um conteúdo digital gerado e enviado imediatamente após a aprovação do pagamento.",
        "**O serviço não armazena os dados inseridos pelo usuário, nem o arquivo PDF gerado.** Portanto, o arquivo baixado deve ser mantido pelo usuário."
      ],
      "bullets": []
    },
    {
      "heading": "2. Direito de Arrependimento",
      "paragraphs": [
        "Segue os critérios estabelecidos pela Lei de Comércio Eletrônico."
      ],
      "bullets": [
        "**Antes do início do download,** é possível cancelar a qualquer momento e receber o reembolso total.",
        "**Após a conclusão do download,** o direito de arrependimento por simples mudança de ideia é restrito. Trata-se de um conteúdo digital fornecido imediatamente após o pagamento, tornando impossível a restauração ao estado original, o que se enquadra nas razões de restrição estabelecidas no Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas. Esta informação é previamente comunicada e a concordância é obtida na tela de pagamento."
      ]
    },
    {
      "heading": "3. Casos de Reembolso Total",
      "paragraphs": [
        "Nos seguintes casos, após a verificação da razão, será feito o reenvio ou reembolso total."
      ],
      "bullets": [
        "Caso o documento não tenha sido gerado devido a erro do sistema",
        "Caso o arquivo baixado não abra",
        "Caso o valor pago seja diferente do pedido",
        "**Se um menor de idade realizar o pagamento sem o consentimento do responsável legal** — O próprio menor ou o responsável legal pode solicitar o cancelamento."
      ]
    },
    {
      "heading": "4. Casos que Não São Motivos para Reembolso",
      "paragraphs": [],
      "bullets": [
        "**Insatisfação com o conteúdo do resultado.** Os resultados de compatibilidade são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento.",
        "Solicitação de reenvio após o uso de todas as 5 tentativas."
      ]
    },
    {
      "heading": "5. Método de Solicitação",
      "paragraphs": [
        "Para reembolsos e consultas, entre em contato com o centro de atendimento ao cliente ({customerCenter}) ou pelo e-mail ({email}). Informar o número do pedido ajudará na rápida confirmação.",
        "Os reembolsos serão feitos pelo meio de pagamento utilizado, e, dependendo da política da operadora de cartão ou do prestador de serviços de pagamento, pode levar de 3 a 7 dias úteis para ser refletido."
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
        "Você pode visualizar a taxa de correspondência, as pontuações por item, os pilares saju (사주) de ambas as pessoas e a força dos cinco elementos, além da forma do relacionamento, tudo na tela."
      ]
    },
    {
      "heading": "2. Relatório de Compatibilidade PDF (pago)",
      "paragraphs": [
        "Pagamento nacional {priceDomestic} (incluindo imposto sobre valor agregado) · Pagamento internacional {priceGlobal}",
        "Transformamos os resultados da tela em um documento PDF de 7 páginas. Ele contém informações sobre a direção das energias que se cruzam, uma tabela que examina mais a fundo os pilares saju (사주) de cada um, o local onde os quatro pilares se encontram e a base dos cálculos, além de conteúdos que não estão na tela.",
        "Com o mesmo pedido, você pode baixar novamente **até 5 vezes**. No entanto, se você sair da tela de resultados e os valores de entrada forem perdidos, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ]
    },
    {
      "heading": "3. Relatório de Conexão PDF (pago)",
      "paragraphs": [
        "Pagamento nacional {priceAffinityDomestic} (incluindo imposto sobre valor agregado) · Pagamento internacional {priceAffinityGlobal}",
        "Transformamos os resultados da tela em um documento PDF de 4 páginas. A tela mostra apenas os resultados de compatibilidade, mas o PDF contém uma tabela completa com as dez troncos celestiais e as doze divisões do zodíaco.",
        "As condições para reemissão são as mesmas do relatório de compatibilidade."
      ]
    },
    {
      "heading": "4. Métodos de Pagamento",
      "paragraphs": [
        "**Nacional** — Você pode usar cartões de crédito e débito e pagamentos simplificados (Toss Payments, KakaoPay, NaverPay, Payco, etc.) através da Toss Payments.",
        "**Internacional** — Você pode pagar via PayPal através da PortOne.",
        "O valor final do pagamento é o que é exibido na tela de pagamento."
      ]
    },
    {
      "heading": "5. Alteração de Preços",
      "paragraphs": [
        "Caso haja alteração de preços, isso será publicado primeiro nesta página. Os pedidos que já foram pagos não terão o preço alterado aplicado."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d4 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "InyeonLink não armazena informações necessárias para o cálculo de compatibilidade. Esta política descreve o que o serviço coleta, o que não deixa rastros e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As datas de nascimento, hora de nascimento, local de nascimento, gênero e nome fornecidos para o cálculo de compatibilidade **não são armazenados em lugar algum.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem junto com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esse valor está localizado após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece no registro de acesso do servidor.",
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
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, ocorrem as seguintes ações."
      ],
      "bullets": [
        "Fornecedores terceiros, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base no histórico de visitas a este e a outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo desativando, os anúncios continuarão a ser exibidos, mas a relevância para o usuário diminuirá.",
        "Os anúncios personalizados de todos os fornecedores terceiros podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também a opção de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça serão solicitados a consentir antes do uso de cookies de publicidade."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando começarmos a vender, os seguintes itens serão armazenados para processamento de pagamentos e preservação de registros de transações conforme a legislação. **Mesmo assim, os valores inseridos no cálculo de compatibilidade e o PDF gerado não serão armazenados**, e não coletamos informações que identifiquem o usuário, como nome, contato ou endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para operar o serviço, e, nesse processo, os registros de acesso mencionados na seção 3 são processados de acordo com a política desse provedor.",
        "Quando começarmos a vender produtos pagos, os pagamentos nacionais serão delegados à Toss Payments, e os pagamentos internacionais à PortOne (PayPal). Informações sobre métodos de pagamento, como números de cartão e conta, serão processadas diretamente por esses provedores, e o serviço não receberá essas informações."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há destinatários para solicitações de acesso, correção ou exclusão.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos seguintes meios."
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
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d5 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "InyeonLink não armazena informações necessárias para o cálculo de compatibilidade. Esta política descreve o que o serviço coleta, o que não é retido e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As datas de nascimento, horários de nascimento, locais de nascimento, gêneros e nomes fornecidos para o cálculo de compatibilidade **não são armazenados em nenhum lugar.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esse valor está localizado após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas para identificar o usuário. No entanto, registros mínimos necessários para a operação do serviço são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para rastrear usuários.",
        "Atualmente, este serviço não exibe anúncios. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para exibir anúncios. Nesse caso, esta cláusula será alterada primeiro para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao pagar por produtos pagos (relatório PDF), as informações do pedido são armazenadas para processamento do pagamento e para a preservação de registros de transações conforme a legislação.",
        "**Os valores inseridos para o cálculo de compatibilidade e o PDF gerado não são armazenados, mesmo após o pagamento.** O princípio do item 1 permanece inalterado, independentemente do pagamento. Os itens armazenados são os seguintes, e informações que identificam o usuário, como nome, contato e endereço, não estão incluídas."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Comércio Eletrônico, os registros de pagamento e fornecimento de bens são mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores são mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não armazenamos dados pessoais que identificam o usuário, não há dados pessoais fornecidos a terceiros. O processamento de pagamentos é delegado aos seguintes prestadores de serviços.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e durante esse processo, os registros de acesso do item 3 são processados de acordo com a política desse prestador.",
        "Os pagamentos nacionais são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através da PortOne. Informações sobre métodos de pagamento, como números de cartão e contas, são processadas diretamente por esses prestadores, e o serviço não recebe nem armazena essas informações."
      ]
    },
    {
      "heading": "7. Direitos do usuário",
      "paragraphs": [
        "Como os valores inseridos para o cálculo de compatibilidade não são armazenados, não há destinatário para solicitações de consulta, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela legislação, e não podem ser excluídos durante esse período; após o término do período, serão destruídos.",
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
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se o conteúdo do processamento realmente mudar, como a exibição de anúncios ou a venda de produtos pagos, informaremos primeiro sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d6 = {
  "title": "Termos de Uso",
  "intro": "Este termo estabelece as condições de uso do InyeonLink (doravante denominado \"Serviço\"). Ao utilizar o Serviço, você concorda com estes termos.",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O Serviço apresenta, com base na data de nascimento inserida, as regras de relacionamento entre a tradicional astrologia coreana (saju) e o zodíaco coreano (십이지), mostrando a relação entre duas pessoas como material de referência.",
        "As taxas de compatibilidade e as interpretações apresentadas são **materiais de referência sob a perspectiva da interpretação tradicional e não constituem previsões científicas ou afirmações sobre o relacionamento.** Uma pontuação baixa não significa que o relacionamento é ruim, e uma pontuação alta não garante que o relacionamento seja bom."
      ]
    },
    {
      "heading": "2. Taxas de Uso",
      "paragraphs": [
        "O cálculo da compatibilidade e a consulta de resultados são gratuitos e não requerem registro.",
        "Receber os resultados em um relatório PDF é pago. Os preços e condições são exibidos na seção 3 abaixo e na tela de pagamento."
      ]
    },
    {
      "heading": "3. Produtos Pagos e Reembolso",
      "paragraphs": [
        "Os produtos pagos vendidos são **dois tipos de relatórios PDF**. Ambos transformam os resultados exibidos na tela em documentos, incluindo informações que não estão na tela.",
        "**Relatório PDF de Compatibilidade Saju** — 7 páginas. Inclui a direção das energias, uma tabela que examina mais a fundo os saju de cada um, o local onde os quatro pilares se encontram e a base dos cálculos. Pagamento nacional {priceDomestic} (incluindo IVA), pagamento internacional {priceGlobal}.",
        "**Relatório de Conexão de Destinos PDF** — 4 páginas. Inclui uma tabela de classificação completa dos dez troncos celestiais e dos doze signos do zodíaco que não estão na tela. Pagamento nacional {priceAffinityDomestic} (incluindo IVA), pagamento internacional {priceAffinityGlobal}.",
        "Os pagamentos nacionais podem ser feitos através do Toss Payments usando cartões de crédito, cartões de débito e pagamentos simplificados (como Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), enquanto os pagamentos internacionais são feitos via PayPal através do PortOne. O valor final é o que é exibido na tela de pagamento.",
        "**O Serviço não armazena os dados inseridos pelo usuário nem os arquivos PDF gerados.** Após a aprovação do pagamento, o documento é gerado e enviado imediatamente, sem deixar nada no servidor. Portanto, o arquivo baixado deve ser armazenado pelo usuário.",
        "Em caso de interrupção do download ou perda do arquivo, é possível baixar novamente até **5 vezes** com o mesmo pedido. No entanto, se os dados de entrada forem perdidos ao sair da tela de resultados, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes que o download comece após o pagamento, você pode cancelar a qualquer momento e receber um reembolso total.**",
        "**Após a conclusão do download, o cancelamento por arrependimento é restrito.** O conteúdo digital é fornecido imediatamente e não pode ser restaurado, o que se enquadra nas razões de restrição de cancelamento conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas.",
        "**Se o documento não for gerado devido a erro do sistema, o arquivo não abrir ou o valor do pagamento for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Insatisfações com o conteúdo dos resultados** não são motivos para reembolso. Os resultados da compatibilidade são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento (veja a seção 1 acima).",
        "Solicitações de reemissão após o uso de todas as 5 vezes não são motivos para reembolso.",
        "**Se um menor realizar um pagamento sem o consentimento do responsável legal,** ele ou o responsável legal podem cancelar esse pagamento. Informe-nos através dos contatos abaixo para que possamos reembolsá-lo."
      ]
    },
    {
      "heading": "4. Sobre os Resultados dos Cálculos",
      "paragraphs": [
        "Todas as pontuações são calculadas de acordo com regras públicas, portanto, se os mesmos valores forem inseridos, os mesmos resultados sempre aparecerão.",
        "Se a hora de nascimento não for inserida, o cálculo será feito excluindo o pilar do tempo (시주), o que pode resultar em resultados diferentes. Quanto mais preciso for a escolha do local de nascimento, mais exato será o cálculo do pilar do tempo.",
        "O cálculo do calendário lunar utiliza uma biblioteca de cálculo pública, e os resultados podem variar de acordo com o tratamento de períodos e fusos horários."
      ]
    },
    {
      "heading": "5. Responsabilidade do Usuário",
      "paragraphs": [
        "O usuário pode inserir a data de nascimento de outra pessoa, mas não deve usar os resultados de forma a prejudicar essa pessoa.",
        "Não utilize os resultados do Serviço como base para decisões que afetem os direitos de terceiros, como casamento, divórcio, contratação ou transações. O Serviço não foi criado para tais fins."
      ]
    },
    {
      "heading": "6. Atos Proibidos",
      "paragraphs": [
        "As seguintes ações não são permitidas."
      ],
      "bullets": [
        "Enviar solicitações excessivas usando ferramentas automatizadas que interfiram na operação do Serviço",
        "Apresentar os resultados do Serviço como se fossem fatos ou resultados de avaliações de especialistas",
        "Duplicar ou modificar o Serviço para oferecer um serviço idêntico"
      ]
    },
    {
      "heading": "7. Isenção de Responsabilidade",
      "paragraphs": [
        "O Serviço fornece apenas materiais de referência e não se responsabiliza pelas decisões tomadas pelo usuário com base nos resultados e suas consequências.",
        "Em caso de interrupção do Serviço devido a razões fora de controle, como desastres naturais ou falhas do provedor de infraestrutura, não nos responsabilizamos por danos decorrentes."
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
        "Caso os termos sejam alterados, serão publicados nesta página com a data de entrada em vigor.",
        "Estes termos são regidos pela legislação da República da Coreia, e disputas relacionadas ao uso do Serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d7 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "InyeonLink não armazena informações necessárias para o cálculo de compatibilidade. Esta política descreve o que o serviço coleta, o que não deixa rastros e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As datas de nascimento, horários de nascimento, locais de nascimento, gêneros e nomes fornecidos para o cálculo de compatibilidade **não são armazenados em nenhum lugar.** Eles são utilizados apenas na memória do servidor durante o processamento do pedido e desaparecem junto com a resposta.",
        "Não são registrados em banco de dados, nem mantidos em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e, segundo os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
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
        "O serviço em si não utiliza cookies para identificar ou rastrear usuários. As informações inseridas no cálculo de compatibilidade não são transmitidas a anunciantes.",
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, as seguintes ações ocorrem."
      ],
      "bullets": [
        "Fornecedores terceirizados, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base no histórico de visitas a este e outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo que desativados, os anúncios continuarão a ser exibidos, mas sua relevância para o usuário será reduzida.",
        "Os anúncios personalizados de todos os fornecedores terceirizados podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também uma maneira de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça serão questionados sobre o consentimento para o uso de cookies de publicidade antes de sua utilização."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao pagar por produtos pagos (compatibility report PDF), as informações do pedido são armazenadas para processamento do pagamento e para a preservação dos registros de transações conforme a legislação.",
        "**Os valores inseridos no cálculo de compatibilidade e o PDF gerado não são armazenados, mesmo após o pagamento.** O princípio do item 1 permanece inalterado, independentemente do pagamento. Os itens armazenados são os seguintes, e informações que identificam o usuário, como nome, contato e endereço, não estão incluídas."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (doméstica ou internacional)",
        "Período de retenção — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não armazenamos informações pessoais que identificam os usuários, também não fornecemos informações pessoais a terceiros. O processamento de pagamentos é delegado aos seguintes fornecedores.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e durante esse processo, os registros de acesso do item 3 são processados de acordo com a política desse fornecedor.",
        "Os pagamentos domésticos são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através do PortOne. Informações sobre métodos de pagamento, como números de cartão e contas, são processadas diretamente por esses fornecedores, e o serviço não as recebe nem as armazena."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como não armazenamos os valores inseridos no cálculo de compatibilidade, não há destinatário para solicitações de consulta, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela legislação, e não podem ser excluídos durante esse período; após o término do período, serão destruídos.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos seguintes meios."
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
        "Caso esta política seja alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como o início da exibição de anúncios ou a venda de produtos pagos, informaremos previamente sobre a alteração."
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
