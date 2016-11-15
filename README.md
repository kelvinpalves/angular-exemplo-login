# Exemplo de Login Utilizando AngularJS

Existem dois modos de verificação de autenticidade no módulo auth. 

Uma das verificações é feita através de um interceptor HTTP, ou seja, toda e qualquer requisição HTTP realizada através do serviço [$http](https://docs.angularjs.org/api/ng/service/$http) do AngularJS, vai injetar no cabeçalho da requisição o parâmetro de Authorization, e informar o Token atual do usuário.

No interceptor, vai ter também o tratamento do HTTP Response, sendo possível tratar os códigos de retorno 401 e 403.

A outra verificação será efetuada nas rotas da aplicação, através da propriedade "notSecured".
Caso a rota não esteja assinada como não segura, a presença do Token será verificada e em caso de ausência redirecionada para a view de login.

### Back-End:

Todos os tratamentos de geração e validade do JSON Web Token, são realizados no Back-End.
O sistema utilizado para este exemplo encontra-se no repositório abaixo:

([Repositório Projeto Ticket](https://github.com/cgoettert/tickets))