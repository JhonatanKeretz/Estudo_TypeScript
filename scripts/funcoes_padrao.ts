function enviarEmail(para:string, assunto:string = "Sem assunto", remetente?:string): void{
    console.log({
        para,
        assunto,
        remetente
    });   
}
enviarEmail("jhonatan@gmail.com");

enviarEmail("jhonatan@gmail.com", "Typescript");

enviarEmail("jhonatan@gmail.com", "Typescript", "teste"); 