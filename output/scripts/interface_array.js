"use strict";
const frontEnd = {
    nome: "Front-End",
    id: 1
};
const BackEnd = {
    nome: "Back-End",
    id: 2
};
let menu = {
    categorias: [frontEnd, BackEnd]
};
let minhasTarefas;
minhasTarefas = [
    "Estudar TypeScript",
    "Estudar JavaScript",
    "Estudar PHP 8",
    20, true, frontEnd, {
        nome: "JavaScript",
        id: 3,
        categoriaPai: frontEnd
    }
];
console.log(minhasTarefas[0]);
//# sourceMappingURL=interface_array.js.map