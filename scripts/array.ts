const filmesCategorias: string[] = 
["Comédia", "Drama","Romance","Aventura"];

//const filmesCategorias: (string | number)[] = 
//["Comédia", "Drama","Romance","Aventura"];

//filmesCategorias.push("Rom");
//filmesCategorias.push("1234");

const filmesAno: Array<number | string> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++){
    filmesAno.push(ano);
};

console.log(filmesAno)