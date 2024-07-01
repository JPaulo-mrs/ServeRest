# HTTP
## Status code

O primeiro dígito do código de status indica a família de resposta. Por exemplo, um código de status que começa com "1" indica uma resposta informativa, enquanto um código de status que começa com "4" indica um erro do cliente.

| Família Status Code | Código | Exemplos |
|---|---|---|
| **INFORMATIVA** | 1XX | `100 Continuar:` O cliente deve continuar enviando a solicitação. `101 Mudando de Protocolos:` O servidor está mudando para um protocolo diferente.|
| **SUCESSO** | 2XX | `200 OK:` A solicitação foi bem-sucedida. `201 Criado:` Um novo recurso foi criado com sucesso. `204 Sem Conteúdo:` A solicitação foi bem-sucedida, mas não há conteúdo para retornar. |
| **REDIRECIONAMENTO** | 3XX | `301 Movido Permanentemente:` O recurso foi movido permanentemente para um novo URL. `302 Encontrado:` O recurso foi encontrado temporariamente em um novo URL. `307 Redirecionamento Temporário:` O recurso foi redirecionado temporariamente para um novo URL. |
| **ERRO DE CLIENTE** | 4XX | `400 Solicitação Inválida:` A solicitação do cliente está com formato incorreto ou não pode ser processada. `401 Não Autorizado:` O cliente não está autorizado a acessar o recurso. `403 Proibido:` O cliente não tem permissão para acessar o recurso. |
| **ERRO DE SERVIDOR** | 5XX | `500 Erro Interno do Servidor:` O servidor encontrou um erro interno que o impede de concluir a solicitação. `502 Bad Gateway:` O servidor atuou como um gateway ou proxy e recebeu uma resposta inválida de um servidor upstream. `503 Serviço Indisponível:` O servidor está indisponível temporariamente. |

## Verbos HTTP

São usados para especificar a ação que o cliente deseja que o servidor execute em um recurso. Os verbos HTTP mais comuns são:

| Verbo | Descrição |
|---|---|
| **GET** | Recupera um recurso do servidor |
| **POST** | Cria um novo recurso no servidor |
| **PUT** |  Atualiza um recurso existente no servidor |
| **DELETE** | Exclui um recurso do servidor |
| **HEAD** | Recupera os cabeçalhos de resposta de um recurso sem recuperar o corpo do recurso. |
| **OPTIONS** | Obtém as opções de comunicação disponíveis para um recurso |
| **TRACE** | Repete a solicitação de volta ao cliente, juntamente com a resposta do servidor |
| **CONNECT** | Estabelece um túnel TCP para um servidor proxy |



