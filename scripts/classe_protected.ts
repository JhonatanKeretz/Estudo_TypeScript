class Domicilio {

    public cor: string;
    public endereco: object;

    constructor(cor: string, endereco: object) {

    this.cor = cor;
    this.endereco = endereco;

    }
    public tocarInterfone(): string {

        return "Interfone tocado!";

    }
}

class Casa extends Domicilio {

    public entrarNaCasa(){
       return this.atenderInterfone("Oi, quem é?");
    }

    protected atenderInterfone(mensagem: string): string {
        
        return mensagem;
    }

}

const casaDoHomer = new Casa("Azul", {cidade:"Springfield"});

console.log(casaDoHomer.tocarInterfone());

console.log(casaDoHomer.entrarNaCasa());