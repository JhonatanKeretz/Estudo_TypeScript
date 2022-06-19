class Pessoa {

    nome: string;
    idade: number;
    altura: number;


    constructor(nome: string, idade: number, altura: number) {

        this.nome = nome;
        this.idade = idade;
        this.altura = altura;

    }

    toString(): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura`
    }

}

const ronaldo = new Pessoa("Ronaldo", 28, 1.79);
const marcus = new Pessoa("Marcus", 18, 2);


ronaldo.nome = "Ronaldo de souza"

console.log(ronaldo.nome);
console.log(marcus.nome);

console.log(ronaldo);
console.log(marcus);

console.log("Pessoa:" + ronaldo);
console.log("Pessoa:" + marcus);

