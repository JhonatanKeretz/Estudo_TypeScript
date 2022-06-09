function mostrarMensagem(texto:string | number | object): boolean {

    console.log(texto);

    return true;
}

mostrarMensagem("Olá mundo")
console.log(mostrarMensagem("Olá mundo"));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem( {url: "www.google.com"}));


const show = (codigo: number): number => {
    return codigo;
}

const shows = (codigo: number): number | Date | object => {
    return new Date();
}