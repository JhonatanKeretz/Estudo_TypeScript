var Autenticacao;
(function (Autenticacao) {
    var LoginRegistro = /** @class */ (function () {
        function LoginRegistro() {
        }
        LoginRegistro.prototype.login = function (usuario) {
            return usuario;
        };
        LoginRegistro.prototype.registro = function (novoUsuario) {
            return novoUsuario;
        };
        return LoginRegistro;
    }());
    Autenticacao.LoginRegistro = LoginRegistro;
    var Recuperacao = /** @class */ (function () {
        function Recuperacao() {
        }
        Recuperacao.prototype.recuperarSenha = function () {
            return "Enviando e-mail para recuperação de Senha";
        };
        Recuperacao.prototype.recuperarUsuario = function () {
            return "Enviando e-mail para recuperação de nome de Usuário";
        };
        return Recuperacao;
    }());
    Autenticacao.Recuperacao = Recuperacao;
})(Autenticacao || (Autenticacao = {}));
