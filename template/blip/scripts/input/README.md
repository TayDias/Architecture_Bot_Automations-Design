# Input

<p>Usa-se o script em cada etapa do fluxograma em que é esperado uma entrada de usuário, sendo executado logo após recebê-la.</p>

## Function run

<p>A função run é, por padrão do BLiP, o ponto de início da execução dos comandos contidos no script.</p>

<p>Nesse caso o objetivo é interpretar a escolha feita pelo usuário. Na forma padrão do script caso não seja escolhida nenhuma das opções de menu disponíveis e também caso o usuário não solicitar atendimento humano ou interrupção do fluxo atual será incrementado o número de tentativas feitas até que chegue ao limite estabelecido.</p>

## Function wantsToGetOut

<p>Usa-se para verificar se o conteúdo digitado pelo usuário corresponde a expressão regular que identifica a solicitação de encerramento da ação atual ou da conversa.</p>

## Function wantsHuman

<p>Usa-se para verificar se o conteúdo digitado pelo usuário corresponde a expressão regular que identifica a solicitação de atendimento humano.</p>