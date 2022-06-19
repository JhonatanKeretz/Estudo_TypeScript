class Pedidos {

    id: string = "";

    constructor(private produto: string, protected valorTotal: number, public previsaoDeEntrega: Date) {

       
    }

}

const meuPedido = new Pedidos("TV 64 polegadas", 7850, new Date("2022-07-07"));

console.log(meuPedido);

