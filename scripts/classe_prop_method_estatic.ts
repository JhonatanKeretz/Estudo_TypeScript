import { BancoDeDados } from "./classes/BancoDeDados";


const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    password: "root",
    user: "root",
    ip: BancoDeDados.LOCAL,

});

console.log(conexaoBanco)