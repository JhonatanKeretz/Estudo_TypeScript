"use strict";
const filmesCategorias = ["Comédia", "Drama", "Romance", "Aventura"];
//const filmesCategorias: (string | number)[] = 
//["Comédia", "Drama","Romance","Aventura"];
//filmesCategorias.push("Rom");
//filmesCategorias.push("1234");
const filmesAno = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAno.push(ano);
}
;
console.log(filmesAno);
//# sourceMappingURL=array.js.map