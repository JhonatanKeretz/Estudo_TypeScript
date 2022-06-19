"use strict";
class Banco {
    constructor() {
        this.cofreQtd = 10000;
    }
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "O cofre não possui a quantidade requisitada";
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nubank = new Banco();
nubank.sacarDoCaixaEletronico(50);
const banco24horas = new Banco24Horas();
banco24horas.sacar(120);
//# sourceMappingURL=classe_private.js.map