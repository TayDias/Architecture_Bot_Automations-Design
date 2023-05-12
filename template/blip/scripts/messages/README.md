# Messages.js

<p>Usa-se em todos os sub-bots que tem diálogo como o segundo script executado pelo fluxograma. Usado para montar um objeto com todas as mensagens que podem ser enviadas pelo chatbot ao usuário ao longo do fluxo, dependendo da necessidade.</p>

## Function run

<p>A função run é, por padrão do BLiP, o ponto de início da execução dos comandos contidos no script.</p>

<p>Nesse caso o objetivo é definir o conteúdo textual direcionado ao usuário que deve ser usado em cada contexto.</p>

## Function loadResources

<p>Usa-se para verificar se há recursos cadastrados (no bot roteador em "Conteúdos" -> "Recursos") com os nomes identificadores de cada variável e carregá-los no builder, caso sim.</p>