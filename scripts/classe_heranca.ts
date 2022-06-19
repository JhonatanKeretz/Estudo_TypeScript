class Cadastro {

    nome: string;
    nascimento: Date;
    
    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }


}

class Cliente extends Cadastro {

    email: string;
    empresa: string;

    constructor(nome: string, nascimento: Date, email: string, empresa: string) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }

}

const joaoEmilio = new Cliente("João Emilio", new Date("2011-02-12"), "joao@gmail.com", "Novaera");

console.log(joaoEmilio)