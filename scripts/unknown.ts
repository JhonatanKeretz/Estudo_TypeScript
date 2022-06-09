//serve quando você não saber o tipo que vai receber
// voce usa o unknown

let resultado: unknown;

resultado = {
    sucesso: true,
};

resultado = "Deu tudo certo"

resultado = 200;

console.log("=================");

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;

const primeiroNumero: number = informacao
const segundoNumero: number = informacaoDesconhecida