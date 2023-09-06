<h1 align="center">Arquitetura Bot/Automações - Captação de leads de aluguel e venda</h1>

<p>Modelagem e ilustração de automação centrada na operação de em um chatbot integrado com um pipeline de uma ferramenta CRM, voltada para captação de leads.</p>


# Índice:

* [Status do projeto](#status-do-projeto)
* [Tecnologias](#Tecnologias)
* [Funcionalidades](#Funcionalidades)
  * [Gerais](##Gerais)
  * [Aluguel](##Aluguel)
  * [Vendas](##Vendas)
* [Arquitetura](#Arquitetura)
* [Modelos de PLN/NLP](#modelos-de-plnnlp)
* [Métricas](#Métricas)
* [Referências](#Arquitetura)


# Status do projeto

:page_with_curl: Concluído - Em documentação :page_with_curl:


# Tecnologias

* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Blip.ai](https://portal.blip.ai/application)
* [IBMWatson](https://www.ibm.com/br-pt/watson)
* [Integromat](https://www.integromat.com/en/help/docs)


# Funcionalidades
## Gerais

* Aceite de LGPD
* Cadastro
* Transbordo humano
* Pesquisa de Satisfação

## Aluguel

* Mensagem Ativa de WhatsApp (HSM)
* Buscar produtos
* Pré Agendamento (Conversão de lead)
* Consulta de Garantias
* Anunciar para Alugar

## Vendas

* Mensagem Ativa de WhatsApp (HSM)
* Buscar produtos
* Pré Agendamento (Conversão de lead)
* Anunciar para Venda


# Arquitetura

<img width="1001" alt="Arquitetura geral" src="https://github.com/TayDias/Architecture_Bot_Automations-Design/blob/d692082b75e3c832cc17acfbd1bb1064ce9407e3/images/arq.png">

<p>A estrutura é centrada no chatbot desenvolvido na plataforma BLiP e na comunicação com o pipeline de leads do módulo de CRM.</p>

<p>Os leads podem ser captados tanto pelo chatbot quanto pelos portais parceiros, dessa forma as ações do lead no chatbot e no CRM devem estar sincronizadas por um conjunto de integrações.</p>

<p>Quando o lead é captado pelo portal parceiro a automação desenvolvida no Integromat é responsável pelo envio da mensagem HSM pelo canal do WhatsApp.</p>

<p>Além do canal WhatsApp, o lead pode ser captado pelo canal Chat, que geralmente está disponível na página inicial do website do cliente em forma de Widget. O canal Default é reservado para testes dos desenvolvedores.</p>

<p>Durante o diálogo do lead com o chatbot, o modelo de NLP atua de forma a identificar as suas intenções e as características desejadas em um produto.</p>

<p>Ao necessitar de mais informações sobre um produto os dados são requisitados a um sistema de gestão de produtos do cliente.</p>


## Arquitetura BLiP Bot Structure

A estrutura é dividida em sub-bots para cada função, de forma a seguir os princípios do SOLID. 

<img width="1001" alt="Arquitetura do bot" src="https://github.com/TayDias/Architecture_Bot_Automations-Design/blob/d692082b75e3c832cc17acfbd1bb1064ce9407e3/images/arqBlip.png">

<p>Em módulos compostos, como o módulo de "Aluguel", há o direcionamento para fluxogramas automatizados e para o transbordo humano. Os fluxogramas do módulo de aluguel são a pesquisa de produtos com determinadas características, a consulta de garantias aceitas, a consulta de dados do produto e o agendamento de visita em dias e horários disponíveis.</p>

<p>Em módulos sem fluxogramas de automação, os leads são apenas direcionados diretamente à equipe mais adequada de transbordo humano.</p>

<p>A estrutura de "Mensagem ativa" é o ponto de destino do lead quando há o redirecionamento de contexto causado pelo recebimento de uma mensagem ativa, o HSM de WhatsApp.</p>

<p>O Cadastro e o aceite de LGPD são destinados à coleta de informações de forma consentida dos leads captados de forma receptiva (sem o recebimento de HSM).</p>

<p>A efetividade do chatbot e do atendimento é avaliada na estrutura de "Pesquisa de Satisfação", através de métodos como o NPS.</p>


# Modelos de PLN/NLP

<p>A interpretação de decisões e a contextualização de sua situação do usuário é feita com o processamento de linguagem natural (PLN) do IBM Watson a partir de um modelo de intenções e entidades personalizado. A taxa de confiabilidade deve ser igual ou superior a 70%.</p>

## Intenções

<table>
  <thead>
    <th>Nome da intenção</th>
    <th>Etapa ou Fluxograma associado</th>
  </thead>
  <body>
    <tr>
      <td>afirmacao</td>
      <td>Etapa: Confirmar a ação oferecida</td>
    </tr>
    <tr>
      <td>agradecimento</td>
      <td>Etapa: Dar um feedback positivo</td>
    </tr>
    <tr>
      <td>alugar</td>
      <td>Fluxograma: Menu de Aluguel</td>
    </tr>
    <tr>
      <td>alugar_com_imovel</td>
      <td>Fluxograma: Menu de Aluguel</td>
    </tr>
    <tr>
      <td>anunciar_aluguel</td>
      <td>Fluxograma: Anunciar para alugar</td>
    </tr>
    <tr>
      <td>atendimento_humano</td>
      <td>Fluxograma: Transbordo Humano</td>
    </tr>
    <tr>
      <td>finalizacao</td>
      <td>Etapa: Encerramento conversa</td>
    </tr>
    <tr>
      <td>garantias</td>
      <td>Fluxograma: Consultar Garantias</td>
    </tr>
    <tr>
      <td>informacao</td>
      <td>Fluxograma: Consultar Informações</td>
    </tr>
    <tr>
      <td>informacao_imovel</td>
      <td>Fluxograma: Consultar Informações</td>
    </tr>
    <tr>
      <td>negacao</td>
      <td>Etapa: Negar a ação oferecida</td>
    </tr>
    <tr>
      <td>insatisfacao</td>
      <td>Fluxograma: Transbordo Humano</td>
    </tr>
    <tr>
      <td>pesquisar_imoveis</td>
      <td>Fluxograma: Buscar produtos</td>
    </tr>
    <tr>
      <td>processo_locacao</td>
      <td>Fluxograma: Transbordo Humano</td>
    </tr>
    <tr>
      <td>saudacao</td>
      <td>Etapa: Iniciar ou retomar interação</td>
    </tr>
    <tr>
      <td>vender</td>
      <td>Fluxograma: Comprar/Vender</td>
    </tr>
    <tr>
      <td>visita_agendar</td>
      <td>Fluxograma: Agendar visita</td>
    </tr>
    <tr>
      <td>visita_alterar</td>
      <td>Fluxograma: Transbordo Humano</td>
    </tr>
    <tr>
      <td>voltar</td>
      <td>Etapa: Retornar a etapa anterior do processo</td>
    </tr>
  </body>
</table>

## Entidades

<table>
  <thead>
    <th>Nome da entidade</th>
    <th>Associação</th>
  </thead>
  <body>
    <tr>
      <td>imovel_tipo</td>
      <td>Utilizada no fluxograma "Buscar Produtos" para identificar os tipos de produtos desejados em uma lista fechada.</td>
    </tr>
    <tr>
      <td>imovel_cidade</td>
      <td>Utilizada no fluxograma "Buscar Produtos" para identificar a cidade em que o produto precisa estar disponível, necessariamente entre as cidades da lista em que o estabelecimento opera.</td>
    </tr>
    <tr>
      <td>imovel_bairros_cidade</td>
      <td>Utilizada no fluxograma "Buscar Produtos" para identificar os bairros relacionados ao produto, dentro da cidade desejada. Precisa estar entre os bairros da lista em que o estabelecimento opera.</td>
    </tr>
  </body>
</table>


# Métricas

<p>Através dos regitros de eventos posicionados em pontos estratégicos na estrutura do chatbot é possível saber as caracteristicas predominantes dos produtos procurados, rastrear possíveis falhas nos fluxogramas automatizados e avaliar a aprovação do chatbot pelo público. O BLiP oferece o recurso de criação de relatórios personalizados usando esses registros.</p>


## Exemplo de relatório personalizado - NPS

<img width="500" alt="Relatório 1 - NPS" src="https://github.com/TayDias/Architecture_Bot_Automations-Design/blob/d692082b75e3c832cc17acfbd1bb1064ce9407e3/images/nps.png">

<p>Os dados acima foram retirados de um ambiente de testes de desenvolvimento, logo são resultados de simulações.</p>


## Exemplos de registros de evento por período variável

* Número de novos contatos ativos
* Número de novos contatos ativos respondidos pelo cliente
* Portal de origem do novo contato ativo
* Tipo do produto do novo contato ativo
* Número de novos contatos receptivos
* Contatos que recusaram o aceite de LGPD
* Tipo do produto do anúncio para venda
* Tipo do produto da pesquisa de produtos
* Quantidade de dormitórios da pesquisa de produtos
* Quantidade de garagens da pesquisa de produtos
* Valor médio do aluguel desejado da pesquisa de produtos
* Número de atendimentos humanos iniciados
* Número de cadastros iniciados
* Número de cadastros finalizados
* Número de pesquisas de produtos iniciadas
* Número de pesquisas de produtos finalizadas
* Número de agendamentos de visita iniciados
* Número de agendamentos de visita finalizados
* Número de consultas das garantias do produto
* Número de consultas de informações de produtos
* Número de anúncios de produtos concluídos
* NPS Equipe Aluguel
* NPS Equipe Vendas
* NPS Chatbot


# Referências

Como escrever um README incrível no seu Github:
https://www.alura.com.br/artigos/escrever-bom-readme

Emoji-cheat-sheet:
https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md
