interface Model {
    id: number;
    created_at: number; //quando foi criado
    updated_at: number; // quando foi alterado
}


interface Pessoa extends Model {
    nome: string;    
    idade?: number;

}

interface Usuario extends Pessoa {
    
    email: string;
    senha: string;
    
}

const joao: Usuario = {
    email: "joao@gmail.com",
    id: 1,
    nome: "Joao Rangel",
    senha: "123456",
    idade: 30,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
}

