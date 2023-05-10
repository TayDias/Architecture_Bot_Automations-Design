# Config.js

<p>Usa-se em todos os sub-bots como o primeiro script executado pelo fluxograma. Usado para definir os parâmetros base para o funcionamento de toda a estrutura do builder.</p>

## Function run

<p>A função run é, por padrão do BLiP, o ponto de início da execução dos comandos contidos no script. Nesse script o objetivo é montar um objeto com as variáveis de base para funcionamento do fluxograma em diferentes canais e ambientes.</p>


## Function getUrls

<p>Usa-se para retornar a URL da API de cada sistema para uso em requisições de dados externos.</p>


## Function getTokens

<p>Usa-se para retornar a chave do bot roteador de acordo com o ambiente local, para uso em requisições á API do BLiP.</p>


## Function setOriginator

<p>Usa-se para armazenar o valor da variável de sistema "tunnel.owner", que é o id do bot roteador conectado ao fluxograma, ou do parâmetro de testes usado quando fora do ambiente do BLiP.</p>


## Function getEnvironment

<p>Usa-se para identificar o ambiente de execução de acordo com a nomenclatura/id do bot roteador conectado."</p>


## Function getChannel

<p>Usa-se para identificar o canal de origem de cada contato com base na variável de sistema "tunnel.originator", que contém essa informação presente no código de identificação do usuário.</p>


## Function getApplicationType

<p>Usa-se para definir o tipo de componente solicitado ao BLiP nos conteúdos dinâmicos de mensagens entre as diferentes formas de ilustração, de acordo com o que é suportado por cada canal e o que é preferência comprovada dos usuários.</p>


## Function getMarkups

<p>Usa-se para padronizar os atalhos de inserção de ênfase nos textos, pois cada canal demanda um padrão específico. As formas gráficas de destaque usadas são o negrito e o itálico.</p>


## Function getRegex

<p>Usa-se para definir funções para as principais decisões de continuidade do fluxograma. Contém expressões regulares(regex) com os principais termos usados e validados em desenvolvimentos prévios.</p>
