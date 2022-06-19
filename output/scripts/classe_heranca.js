"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const joaoEmilio = new Cliente("João Emilio", new Date("2011-02-12"), "joao@gmail.com", "Novaera");
console.log(joaoEmilio);
//# sourceMappingURL=classe_heranca.js.map