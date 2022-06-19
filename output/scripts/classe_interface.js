"use strict";
class NotificacaoV2 {
}
class EmailV2 extends NotificacaoV2 {
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando email para o usuario: ${this.email} ...`);
        return true;
    }
}
class SMSV2 extends NotificacaoV2 {
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
        console.log(`Enviando SMS para o usuario: ${this.numero} ...`);
        return true;
    }
}
new EmailV2({ nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453" }).enviar();
new SMSV2({ nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453" }).enviar();
//# sourceMappingURL=classe_interface.js.map