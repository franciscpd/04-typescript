interface IConta {
  agencia: string;
  numero: string;

  depositar: Function;
  retirar: Function;
  consultarSaldo: Function;
}

class Conta implements IConta {
  constructor(
    public agencia: string,
    public numero: string,
    protected saldo: number = 0
  ) {}

  depositar(valor: number) {
    this.saldo += valor;
  }

  retirar(valor: number) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }

  consultarSaldo() {
    return this.saldo;
  }
}

class ContaCorrente extends Conta {
  constructor(
    public agencia: string,
    public numero: string,
    protected saldo: number = 0,
    private juros: number,
    private pacote: string,
    private credito: number
  ) {
    super(agencia, numero, saldo);
  }
}

class ContaPoupanca extends Conta {
  constructor(
    public agencia: string,
    public numero: string,
    protected saldo: number = 0,
    private rendimento: number
  ) {
    super(agencia, numero, saldo);
  }

  render() {
    super.depositar(this.saldo * this.rendimento);
  }
}

const contaPoupancaDoFrancis = new ContaPoupanca("123", "456", 1000, 0.09);
contaPoupancaDoFrancis.depositar(1500);
contaPoupancaDoFrancis.render();

console.log(contaPoupancaDoFrancis.consultarSaldo());

const contaDoFrancis = new ContaCorrente(
  "1",
  "123",
  100.0,
  0.1,
  "essencial",
  0.0
);

contaDoFrancis.depositar(1000);
contaDoFrancis.retirar(2000);
console.log(contaDoFrancis.consultarSaldo());
