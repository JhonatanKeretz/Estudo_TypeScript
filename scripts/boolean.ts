let admin: boolean = true;

//se for valor 0 é falso e se for 1 ou mais é verdadeiro

//admin = Boolean(undefined);


admin = Boolean("1");

//admin = false; 

let senha = "1234";
let senhaSegura: boolean;

senhaSegura = senha.length > 8
console.log(senhaSegura);

console.log(admin);