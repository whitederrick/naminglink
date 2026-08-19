import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Data de vigência",
    referenceDate: "Data de referência",
    login: "Entrar",
    close: "Fechar",
  },
  documents: {
    terms: {
      title: "Termos de Serviço",
      description: `Estes termos descrevem as condições de uso e o escopo do serviço ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Natureza do Serviço",
          paragraphs: [
            "Naming-Link é um estúdio de nomeação baseado em IA que oferece os seguintes quatro serviços: ① Correspondência de significados de caracteres chineses para nomes em coreano ② Conversão de nomes em coreano para nomes globais ③ Conversão de nomes estrangeiros para nomes coreanos ④ Transcrição de nomes globais em coreano de acordo com a pronúncia.",
            "Os resultados são materiais de referência que ajudam na nomeação e interpretação, e não garantem a possibilidade de registro oficial, como registro de relações familiares, passaportes, vistos, marcas registradas, documentos legais, etc.",
          ],
        },
        {
          title: "2. Uso de Membros e Não Membros",
          paragraphs: [
            "A análise de nomes e a visualização de candidatos com recompensa publicitária podem ser utilizadas por não membros. O registro ou login é solicitado apenas para funções que requerem conta, como pedidos de produtos e verificação do histórico de pedidos.",
          ],
        },
        {
          title: "3. Resultados de IA e Responsabilidade de Revisão",
          paragraphs: [
            "Os resultados recomendados pela IA incluem referências linguísticas, culturais e tradicionais. Os usuários devem verificar a adequação por meio de instituições relevantes, especialistas, usuários locais e revisões legais e de marcas antes da escolha final do nome.",
          ],
        },
        {
          title: "4. Serviços Pagos",
          paragraphs: [
            "Os detalhes do serviço de correspondência de significados de Hanja são os seguintes. ① Máximo de 5 candidatos, descrição detalhada e resumo de Hanja: ₩2,900 ② Máximo de 10 candidatos, descrição detalhada expandida, resumo de Hanja e PDF para download: ₩4,900 ③ Máximo de 10 candidatos, descrição detalhada, resumo de Hanja, análise de Saju e os cinco elementos e PDF para download: ₩9,900.",
            "No serviço de conversão de nomes globais, conversão de nomes coreanos e transcrição fonética em Hangul, pode ser oferecido um produto que revela todos os candidatos restantes de uma só vez, sem anúncios (pagamento nacional ₩990, pagamento internacional US$1.99). Antes da ativação da função de pagamento, apenas a visualização compensada por anúncios será disponibilizada.",
            "Para usuários globais, os produtos digitais incluem ④ Relatório completo em PDF de nomes em Hangul (US$9.99): arte do nome em fonte recomendada, interpretação de significados e referência de Saju dos cinco elementos ⑤ Arte em PDF de conversão de pronúncia em Hangul (US$2.99): arte do nome em fonte escolhida e guia de pronúncia ⑥ Pacote de arte de nome em PDF (US$1.99): fornecido como arte em fontes escolhidas para um nome selecionado. Os preços de cada produto e o número de fontes aplicáveis seguem os valores informados na tela.",
            "Os relatórios detalhados pagos e os resultados da análise, em arquivos PDF, podem ser visualizados e baixados novamente dentro de 24 horas após a conclusão do pagamento, e serão excluídos automaticamente após o período de armazenamento.",
            "Os preços de pagamento nacional para produtos físicos, como carimbos de nome, são ₩39,000 / ₩59,000 / ₩79,000 e são fornecidos com condições específicas para cada produto.",
            "Os preços de pagamento internacional para os mesmos produtos físicos são US$39.90 / US$59.90 / US$79.90, incluindo o custo de envio internacional.",
            "Todos os produtos pagos exibem na tela o conteúdo do produto, preço, método de fornecimento e condições de reembolso antes do pagamento.",
          ],
        },
        {
          title: "5. Serviço de Recompensa Publicitária",
          paragraphs: [
            "O desbloqueio de candidatos por meio da visualização de anúncios só se aplica quando a verificação de recompensa normal do fornecedor de anúncios foi concluída. A reprodução automatizada de anúncios, manipulação de recompensas e solicitações repetidas anormais podem ser limitadas.",
          ],
        },
        {
          title: "6. Atos Proibidos",
          paragraphs: [
            "É proibido inserir informações pessoais de terceiros sem autorização, gerar nomes com o objetivo de discriminação, ódio ou falsificação, fazer solicitações excessivas automatizadas, causar interrupções no serviço e exibir certificações oficiais falsas dos resultados.",
          ],
        },
        {
          title: "7. Limitação de Responsabilidade",
          paragraphs: [
            "A empresa não será responsável por danos indiretos, perda de lucros esperados, recusa de registro oficial ou disputas de terceiros decorrentes do uso dos resultados recomendados pela IA, a menos que haja dolo ou negligência grave.",
          ],
        },
        {
          title: "8. Contato",
          paragraphs: [
            `Consultas sobre serviços: ${companyInfo.email}`,
          ],
        },
      ],
    },
    privacy: {
      title: "Política de Privacidade",
      description: `Esta política descreve como o ${companyInfo.serviceName} trata os dados pessoais.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Itens de Dados Pessoais Processados",
          paragraphs: [
            "Ao utilizar o serviço de nome para não-membros, o nome, data de nascimento, hora de nascimento, país, idioma, finalidade de uso e dicas de pronúncia são processados temporariamente durante o processo de geração de resultados de análise, mas o conteúdo inserido e os resultados gerados não são armazenados no banco de dados do serviço.",
            "Durante o registro e login de membros, o endereço de e-mail e o histórico de login (histórico de autenticação) são processados.",
            "Ao pagar por relatórios detalhados pagos, as informações de identificação do pedido, status de pagamento e os dados de entrada e resultados de análise necessários para a geração do relatório são processados durante o período de retenção (24 horas após o pagamento). As informações do meio de pagamento, como número do cartão, são processadas diretamente pela empresa de processamento de pagamentos, e a empresa não as armazena.",
            "Somente ao utilizar a função de pedido de mercadorias, o nome do comprador, e-mail, contato, endereço de entrega, status de pagamento e informações de processamento do pedido podem ser processados adicionalmente.",
            "Para garantir a estabilidade do serviço e prevenir abusos, hashes de visitantes não identificáveis que mudam diariamente, hora do pedido, tipo de serviço, número de usos gratuitos, tempo de resposta do AI, status de processamento e eventos de recompensa publicitária podem ser processados como logs operacionais mínimos.",
          ],
        },
        {
          title: "2. Finalidade do Processamento de Dados Pessoais",
          paragraphs: [
            "Os dados pessoais são processados para recomendações de nomes baseadas em valores de entrada, análise de pronúncia, análise de idiomas e culturas por país, limitação de uso gratuito, verificação de recompensas publicitárias, atendimento ao cliente, processamento de pagamentos e entregas, e prevenção de uso indevido.",
          ],
        },
        {
          title: "3. Armazenamento e Destruição",
          paragraphs: [
            "As entradas de análise e resultados são armazenados na conta apenas se o membro logado optar explicitamente por salvar os resultados, e serão destruídos se o membro os excluir ou se o propósito de armazenamento for encerrado. As entradas e resultados de não-membros e de membros que não optaram por salvar não são armazenados.",
            "As entradas, resultados de análise e arquivos PDF de relatórios detalhados pagos serão automaticamente excluídos após 24 horas da conclusão do pagamento. Os registros de transações de pagamento e pedidos são armazenados separadamente de acordo com o período legal de retenção estabelecido pela legislação aplicável.",
            "As informações detalhadas sobre a entrega do pedido de mercadorias (nome do solicitante, e-mail, contato, endereço de entrega, solicitações, texto a ser gravado no selo) serão destruídas 90 dias após a conclusão da entrega ou a data de cancelamento do pedido. As informações inseridas de pedidos que foram interrompidos antes da finalização do pagamento serão destruídas 24 horas após a interrupção. Mesmo após a destruição, os registros de transações de pagamento e pedidos permanecerão de acordo com o período de retenção legal estabelecido pela legislação aplicável.",
          ],
        },
        {
          title: "4. Fornecimento a Terceiros e Subcontratação de Processamento",
          paragraphs: [
            "Para a operação do serviço, informações necessárias podem ser processadas ou subcontratadas para Supabase (banco de dados e autenticação), Vercel (hospedagem), OpenAI API (análise de IA), redes de publicidade, empresas de processamento de pagamentos (PortOne) e parceiros de entrega e produção.",
          ],
        },
        {
          title: "5. Cookies e Anúncios",
          paragraphs: [
            "O serviço em si não utiliza cookies para identificar ou rastrear os usuários. As informações inseridas na análise de nomes não são transmitidas a anunciantes.",
            "Este serviço exibe anúncios através do Google AdSense. Nesse processo, fornecedores terceiros, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário, e o Google utiliza cookies com base no histórico de visitas a este e a vários outros sites para exibir anúncios.",
            "Os mesmos cookies são utilizados ao utilizar anúncios remunerados e ofertas. O serviço apenas verifica se o anúncio foi visualizado até o final e a consequente confirmação de pagamento, não recebendo informações que possam identificar o usuário por parte do anunciante.",
            "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo após a desativação, os anúncios continuarão a ser exibidos, mas a relevância para o usuário será reduzida. Anúncios personalizados de fornecedores terceiros podem ser desativados de uma só vez em aboutads.info/choices, e também é possível bloquear cookies nas configurações do navegador.",
            "Para usuários da Área Econômica Europeia, Reino Unido e Suíça, é solicitado consentimento através de uma mensagem de consentimento do Google antes de usar cookies de anúncios.",
          ],
        },
        {
          title: "6. Transferência Internacional de Dados Pessoais",
          paragraphs: [
            "A empresa transfere (subcontrata o processamento) dados pessoais para o exterior conforme descrito abaixo para fornecer o serviço. A transferência é realizada por meio de transmissão através de redes de comunicação.",
            "① OpenAI, L.L.C. (Estados Unidos) — Itens transferidos: nome, data de nascimento e hora de nascimento, gênero, país, idioma e outros valores de entrada para análise — Finalidade da transferência: análise de nomes, pronúncias e significados baseados em IA — Período de retenção e uso: durante o período de fornecimento do serviço (os dados de entrada não são utilizados para treinamento de modelos de acordo com a política da OpenAI e são excluídos após um máximo de 30 dias para fins de monitoramento de abusos).",
            "② Supabase, Inc. (Estados Unidos) — Itens transferidos: informações sobre status de pedidos e pagamentos, e-mail de membros, entradas e resultados de relatórios pagos (24 horas após o pagamento), nome do comprador, contato e endereço de entrega ao fazer pedidos de mercadorias — Finalidade da transferência: banco de dados, autenticação e armazenamento — Período de retenção e uso: durante o período de fornecimento do serviço ou até o período de retenção de cada item.",
            "③ Vercel, Inc. (Estados Unidos) — Itens transferidos: informações de acesso e solicitação transmitidas durante o uso do serviço — Finalidade da transferência: hospedagem de aplicativos — Período de retenção e uso: durante o período de fornecimento do serviço.",
            "Os usuários podem recusar o consentimento para a transferência internacional de dados pessoais, mas como esse processamento é essencial para a prestação do serviço, a recusa pode resultar em restrições ao uso do serviço.",
          ],
        },
        {
          title: "7. Direitos dos Usuários",
          paragraphs: [
            "Os usuários podem solicitar acesso, correção, exclusão, suspensão do processamento e revogação do consentimento dos dados pessoais. As solicitações devem ser enviadas por e-mail para o atendimento ao cliente e serão processadas após verificação da identidade.",
          ],
        },
        {
          title: "8. Responsável pela Proteção de Dados Pessoais",
          paragraphs: [
            `Responsável: ${romanize(companyInfo.privacyOfficer)}`,
            `E-mail: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Política de Reembolso e Cancelamento",
      description:
        "Esta política descreve os critérios de cancelamento e reembolso de produtos digitais e produtos personalizados sob encomenda.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Princípios Comuns",
          paragraphs: [
            "Quando a funcionalidade de pagamento é ativada, o escopo de reembolso pode variar de acordo com a forma de fornecimento de cada produto, o momento de início da produção e a possibilidade de download. As condições específicas serão informadas na tela do produto antes do pagamento.",
          ],
        },
        {
          title: "2. Relatório Detalhado de Hanja",
          paragraphs: [
            "O preço de pagamento nacional para o Relatório Detalhado de Hanja é ₩2,900 / ₩4,900 / ₩9,900.",
            "O cancelamento é possível antes do início da geração da análise detalhada após o pagamento. Após a conclusão da geração da análise, quando a visualização ou download estiver disponível, o reembolso por simples mudança de ideia pode ser restrito.",
            "Em caso de erro de conteúdo, falha de sistema que resulte em falha na geração, ou discrepância no valor do pagamento, será tratado como reemissão ou reembolso. O término do período de armazenamento (24 horas após o pagamento) não é considerado motivo para reembolso.",
          ],
        },
        {
          title: "3. Divulgação Total de Candidatos",
          paragraphs: [
            "O preço de pagamento nacional para a divulgação total de candidatos é ₩990.",
            "O preço de pagamento internacional para o mesmo produto é US$1.99.",
            "A divulgação total de candidatos para o serviço de conversão de nomes globais, conversão de nomes coreanos e transcrição fonética em Hangul é um conteúdo digital fornecido imediatamente após o pagamento. O cancelamento é possível antes do início da visualização dos candidatos, e após a visualização, o reembolso por arrependimento pode ser limitado.",
            "Caso ocorra um erro no sistema e os candidatos não sejam divulgados corretamente, será oferecida uma nova divulgação ou reembolso.",
          ],
        },
        {
          title: "4. Produto Digital PDF Global",
          paragraphs: [
            "Relatório completo de nomes em Hangul (US$9.99), Arte de conversão de pronúncia em Hangul (US$2.99), Pacote de arte de nomes (US$1.99) são conteúdos digitais gerados após o pagamento. O cancelamento é possível antes do início da geração do PDF, e uma vez que a geração esteja concluída e o download disponível, reembolsos por simples mudança de ideia podem ser restritos.",
            "Em caso de falha na geração, erro de conteúdo ou discrepância no valor do pagamento, será tratado como reemissão ou reembolso. O término do período de armazenamento (24 horas após o pagamento) não é considerado motivo para reembolso.",
          ],
        },
        {
          title: "5. Produtos personalizados (carimbo de nome, etc.)",
          paragraphs: [
            "O preço de pagamento nacional para produtos personalizados, como carimbos de nome, é de ₩39,000 / ₩59,000 / ₩79,000.",
            "O preço de pagamento internacional para os mesmos produtos é de US$39.90 / US$59.90 / US$79.90, incluindo o custo de envio internacional.",
            "Produtos personalizados podem ser cancelados até o início da produção. Após o início da produção, como a frase gravada é confirmada como personalizada, o reembolso por mudança de ideia pode ser restrito, e erros de digitação, danos, produção incorreta ou problemas de entrega serão tratados de forma adequada por meio de troca, reedição ou reembolso após verificação.",
          ],
        },
        {
          title: "6. Desbloqueio por Anúncios",
          paragraphs: [
            "Os benefícios de visualização de anúncios não são produtos pagos. Em caso de falha na rede de anúncios que resulte na não concessão de recompensas, será tratado como nova tentativa dentro do serviço ou consulta ao atendimento ao cliente.",
          ],
        },
        {
          title: "7. Contato",
          paragraphs: [
            `Consultas sobre reembolso: ${companyInfo.email}`,
          ],
        },
      ],
    },
    pricing: {
      title: "Guia de Preços",
      description:
        "Este guia descreve o escopo dos serviços gratuitos e os preços dos produtos pagos.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Análise Básica (Gratuita)",
          paragraphs: [
            "A análise básica dos quatro serviços de correspondência de significados em Hanja, conversão de nomes globais, conversão de nomes coreanos e transcrição fonética em Hangul é oferecida gratuitamente para não-membros, podendo haver limites de uso diário. Abaixo, apenas os produtos que podem ser pagos agora são exibidos com os valores, e os produtos que ainda não foram abertos não são mostrados.",
          ],
        },
        {
          title: "Uso com Recompensa Publicitária",
          paragraphs: [
            "A liberação de candidatos após a visualização de anúncios é um benefício publicitário oferecido sem pagamento adicional. Um candidato é desbloqueado por cada anúncio assistido. A disponibilidade pode variar de acordo com o estoque de anúncios, país, dispositivo ou políticas do fornecedor de anúncios. Durante os períodos em que não há anúncios exibidos, o candidato correspondente será disponibilizado gratuitamente sem esta barreira.",
          ],
        },
        {
          title: "Produto Detalhado de Correspondência de Significados de Caracteres Chineses",
          paragraphs: [
            "Descrição detalhada de até 5 candidatos e resumo abrangente de caracteres chineses: ₩2,900",
            "Descrição detalhada expandida de até 10 candidatos, resumo abrangente de caracteres chineses e PDF para download: ₩4,900",
            "Detalhes de até 10 candidatos, resumo abrangente de caracteres chineses, análise de quatro pilares e cinco elementos e PDF para download: ₩9,900",
            "Relatórios pagos e PDFs podem ser visualizados e baixados novamente por 24 horas após o pagamento, sendo automaticamente excluídos após esse período.",
          ],
        },
        {
          title: "Divulgação Total de Candidatos",
          paragraphs: [
            "Conversão de nomes globais, conversão de nomes coreanos, serviço de transcrição fonética em Hangul, divulgação total de todos os candidatos restantes sem anúncios (pagamento nacional): ₩990",
            "Preço para pagamento no exterior do mesmo produto: US$1.99",
          ],
        },
        {
          title: "Produto Digital PDF Global",
          paragraphs: [
            "Relatório Completo de Nomes em Hangul PDF (Arte e interpretação dos significados de todos os nomes recomendados, referência aos cinco elementos e ao destino): US$9.99",
            "Arte de Conversão de Pronúncia em Hangul PDF (Arte do nome da fonte selecionada e guia de pronúncia): US$2.99",
            "Pacote de Arte de Nomes PDF (Fornecido como arte em diferentes fontes para um nome selecionado): US$1.99",
            "Os preços e o número de fontes aplicáveis seguem os valores informados na tela, e o PDF pode ser baixado novamente por 24 horas após o pagamento, sendo automaticamente excluído após esse período.",
          ],
        },
        {
          title: "Produtos com Nomes em Hangul",
          paragraphs: [
            "Nome do carimbo (pagamento nacional): ₩39,000 / ₩59,000 / ₩79,000",
            "Nome do carimbo (pagamento internacional): US$39.90 / US$59.90 / US$79.90 (frete internacional incluído)",
            "Outros produtos físicos terão preços, frete e prazos de produção informados separadamente.",
          ],
        },
        {
          title: "Orientação sobre Valores",
          paragraphs: [
            "O valor do pagamento, o custo de envio, o prazo de produção e as condições de reembolso serão novamente informados na tela do produto antes do pagamento, e, caso haja discrepância entre os valores deste documento e os valores na tela do produto, o valor na tela do produto será o que prevalece.",
          ],
        },
      ],
    },
  },
};

export default content;
