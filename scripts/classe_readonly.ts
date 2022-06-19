class Usuario {

    readonly id: string = "123";
    name: string = "João";
    private password: string = "123456";
    readonly dataCadastro: Date = new Date("2021-01-01");

}

const usuario = new Usuario();

//usuario.id = "1234";

console.log(usuario.id);