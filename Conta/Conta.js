// Criando uma classe abstrata, servindo como base para todos os tipos de conta
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Não se deve instanciar um objeto do tipo Conta, pois a mesma é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // Geters and setters 
    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error("O método Sacar da classe Contna é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this.saldoInicial -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

} // fecha classe
