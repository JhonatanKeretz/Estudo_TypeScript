"use strict";
function enviarEmail(para, assunto = "Sem assunto", remetente) {
    console.log({
        para,
        assunto,
        remetente
    });
}
enviarEmail("jhonatan@gmail.com");
enviarEmail("jhonatan@gmail.com", "Typescript");
enviarEmail("jhonatan@gmail.com", "Typescript", "teste");
//# sourceMappingURL=funcoes_padrao.js.map