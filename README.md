# Exemplo de Login Utilizando AngularJS

### Fluxo de Funcionamento

![Imagem do fluxo de funcionamento](https://github.com/kelvinpalves/angular-exemplo-login/blob/master/doc/exemplo.png?raw=true)

Existem dois modos de verificação de autenticidade no módulo auth. 

Uma das verificações é feita através de um interceptor HTTP, ou seja, toda e qualquer requisição HTTP realizada através do serviço [$http](https://docs.angularjs.org/api/ng/service/$http) do AngularJS, vai injetar no cabeçalho da requisição o parâmetro de Authorization, e informar o Token atual do usuário.
No interceptor, vai ter também o tratamento do HTTP Response, sendo possível tratar os códigos de retorno 401 e 403.

A outra verificação será efetuada nas rotas da aplicação, através da propriedade "notSecured".
Caso a rota não esteja assinada como não segura, a presença do Token será verificada e em caso de ausência redirecionada para a view de login.

Abaixo dois fluxos para exemplificar os dois tipos de verificação:

#### HTTP Interceptor

![Fluxo do Interceptor HTTP](https://github.com/kelvinpalves/angular-exemplo-login/blob/master/doc/interceptor.png?raw=true)

#### Route

![Fluxo das Rotas](https://github.com/kelvinpalves/angular-exemplo-login/blob/master/doc/rota.png?raw=true)

### Back-End:

Todos os tratamentos de geração e validade do JSON Web Token, são realizados no Back-End.
O sistema utilizado para este exemplo encontra-se no repositório abaixo:

([Repositório Projeto Ticket](https://github.com/cgoettert/tickets))