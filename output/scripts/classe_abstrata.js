"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando email para o usuario: ${usuario.email} ...`);
        return true;
    }
}
class SMS extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando SMS para o usuario: ${usuario.telefone} ...`);
        return true;
    }
}
class Android extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando mensagem para o usuario no Android: ${usuario.idAndroid} ...`);
        return true;
    }
}
new Email().enviar({
    nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453"
});
new SMS().enviar({
    nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453"
});
new Android().enviar({
    nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453",
    idAndroid: "teste para enviar via Android"
});
//# sourceMappingURL=classe_abstrata.js.map