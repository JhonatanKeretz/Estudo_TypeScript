class Empresa {

    prestarServico(){
        return "Empresa prestando Serviço";
    }

}

class Padaria extends Empresa {

    prestarServico(){
        return "Vendendo Pão";

    }

}

class Mercearia extends Empresa {

    prestarServico(){
        return "Vendendo alimentos e bebidas";
    }

}

console.log(new Empresa().prestarServico())
console.log(new Padaria().prestarServico())
console.log(new Mercearia().prestarServico())