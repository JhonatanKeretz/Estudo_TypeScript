/// <reference path="./autenticacao/index.ts" />

const novoRegistro = new Autenticacao.LoginRegistro();

const resultadoDoRegistro = novoRegistro.registro({
    nome: "Djalma" ,
    email: "djmail@gmail.com",
    senha: "123456",
    dataDeNascimento: new Date ("2001-01-01")
})

console.log(resultadoDoRegistro)