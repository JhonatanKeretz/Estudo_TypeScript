function somarRenda(mes1: number, mes2: number, mes3: number): number {
    
    return mes1 + mes2 + mes3;

}
// com rest_parameters

console.log(somarRenda(250, 780, 695));

function somarRendas(...meses: number[]): number {
    
    return meses.reduce((rendaTotal:number, rendaAtual:number) => rendaTotal + rendaAtual, 0);

}

console.log(somarRendas(250, 780, 695, 2000, 6580));


//exemplos

//function somarRendas(...meses: string | number[]): number {
    
 //   return meses.reduce((rendaTotal:number, rendaAtual:number) => rendaTotal + rendaAtual, 0);

//}

//console.log(somarRendas("250", "780", "695", "2000", "6580"));