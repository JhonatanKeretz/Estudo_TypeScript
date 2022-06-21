import { IBancoDeDados } from "../interfaces/IBancoDeDados";

export class BancoDeDados {

    static LOCAL = "127.0.0.1";
    static LOCAL1 = "localhost";
    static TIPO_MYSQL = "MySQL";
    static TIPO_MYSQLSERVER = "MySQL Server";

    constructor(private ip: string,
         private user: string, 
         private password: string, 
         private tipoBanco: string) {

         }

         static factory(parametros: IBancoDeDados) {

            if(![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_MYSQLSERVER].includes(parametros.tipoBanco)) {
                throw new Error("Tipo de banco incorreto")
            }

            return new BancoDeDados(
            parametros.ip,
            parametros.user,
            parametros.password,
            parametros.tipoBanco

            )}

}