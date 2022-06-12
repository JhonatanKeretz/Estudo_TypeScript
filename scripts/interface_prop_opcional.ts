interface IProduto {
    nome: string;
    preco: number;
    descricao?: string;
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 3500,
    descricao: "Meu notebook novo",
    dataValidade: new Date(2023, 11, 1)
}