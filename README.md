# Exemplo de Login Utilizando AngularJS

#### Como Funciona:

Todas as requisições HTTP são interceptadas pelo arquivo ([auth-interceptor.factory.js](https://github.com/kelvinpalves/angular-exemplo-login/blob/master/src/app/core/auth/auth-interceptor.factory.js)).

Antes de efetuar a requisição, a factory verifica se existe o Token gerado pelo Back-End (JWT) e o adiciona ao header da requisição, caso contrário, redireciona para a tela de login.

Nos casos onde a requisição busca somente templates abstratos, a verificação da existência do Token é feita através dos eventos de alteração de rota.

Foi criado uma flag no $routeProvider para verificar ou não a presença do Token.

#### Exemplo:

Quando existe a flag "notSecured: true", não é necessário a existência do Token.

#### Back-End:

Todos os tratamentos de geração e validade do JSON Web Token, são realizados no Back-End.
O sistema utilizado para este exemplo encontra-se no repositório abaixo:

([Repositório Projeto Ticket](https://github.com/cgoettert/tickets))