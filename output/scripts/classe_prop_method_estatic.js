"use strict";
class BancoDeDados {
    constructor(ip, user, password, tipoBanco) {
        this.ip = ip;
        this.user = user;
        this.password = password;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametros) {
        if (![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_MYSQLSERVER].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDeDados(parametros.ip, parametros.user, parametros.password, parametros.tipoBanco);
    }
}
BancoDeDados.LOCAL = "127.0.0.1";
BancoDeDados.LOCAL1 = "localhost";
BancoDeDados.TIPO_MYSQL = "MySQL";
BancoDeDados.TIPO_MYSQLSERVER = "MySQL Server";
const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    password: "root",
    user: "root",
    ip: BancoDeDados.LOCAL,
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_method_estatic.js.map