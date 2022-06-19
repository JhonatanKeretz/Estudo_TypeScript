class Documento {

    private valor: string = "1236544789-01"; // TS
    #numero: number = 35; // ECMAScript

    mostrarDocumento(){
        return this.#numero
    }
    
}


class CNPJ extends Documento {

   // private valor: string = "235689715-01"; //
   #numero: number = 45; // ECMAScript

    mostrarCNPJ(){
        return this.#numero
    }
}

const rg = new Documento();

console.log(rg.mostrarDocumento());

const cnpj = new CNPJ();

console.log(cnpj.mostrarCNPJ());

console.log("RG: " + rg.valor);
