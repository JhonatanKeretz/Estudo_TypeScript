import MeuUsuario from "../interface/MeuUsuario";

export default abstract class Notificacao {

    abstract enviar(usuario: MeuUsuario): boolean;
 
 }