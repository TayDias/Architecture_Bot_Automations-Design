# Message.js

<p>Usa-se em cada etapa do fluxograma que necessita carregar uma mensagem em tela para exibir informações e/ou solicitar uma decisão de ação ao usuário.</p>


# Menu_options.js

<p>Retorna um arquivo no formato JSON que contém a lista de opções disponíveis para escolha do usuário na etapa em questão.</p>

<p>Usa-se logo antes da criação de um menu dinâmico (antes do arquivo "menu.js") quando há mais de um menu no mesmo fluxo, para não ser incorretamente sobrescrito. Quando houver somente um menu pode ser inserido no início do fluxo, após o arquivo "config.js".</p>


# Menu.js

<p>Usa-se sempre que for necessário exibir ao usuário um menu de opções no chatbot.</p>

<p>O componente do BLiP será sempre um conteúdo dinâmico, pois o layout do menu é variado dependendo do que é suportado por cada canal de comunicação.</p>

## Function run

<p>A função run é, por padrão do BLiP, o ponto de início da execução dos comandos contidos no script.</p>

<p>Nesse caso o objetivo é criar o enunciado e o corpo do menu numérico de acordo com os parâmetros do contexto.</p>


## Function buildMenu

<p>Usa-se para criar o menu de opções de forma apenas textual e numérica.</p>

## Function buildChatMenu

<p>Usa-se para criar o menu de opções com o layout de menu web do BLiP, formato em há um botão para cada opção disponível.</p>

## Function buildDynamicWhatsAppMenu

<p>Usa-se para criar o menu de opções com o layout de lista de segmentos do WhatsApp, formato da plataforma em que é possível escolher a opção desejada ao clicar no seletor mostrado na conversa.</p>

## Function buildWhatsAppMenu

<p>Usa-se para criar o menu de opções de forma textual, numérica e com ênfases em negrito. Formato alternativo usado para o canal de WhatsApp quando não é suportado o menu de segmentos.</p>


# Warning.js

<p>Usa-se quando necessário exibir ao usuário uma mensagem de tratativa de erro devido a alguma condição não atendida na solicitação prévia feita pelo chatbot.</p>
