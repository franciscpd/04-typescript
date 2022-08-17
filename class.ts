interface IMarca {
  marca: string;
}

interface IGeladeira extends IMarca {
  cor: string;
  abrirPorta: Function;
}

class Geladeira implements IGeladeira {
  // marca: string;
  // qtdPortas: number;
  // cor: string;

  // constructor(marca: string, qtdPortas: number = 1, cor: string) {
  // this.marca = marca;
  // this.qtdPortas = qtdPortas;
  // this.cor = cor;
  // }

  constructor(
    public marca: string,
    private qtdPortas: number = 1,
    public cor: string
  ) {}

  abrirPorta() {}
}

const consul = new Geladeira("Consul", undefined, "Branca");

const samsung = new Geladeira("Samsung", 2, "Inox");

console.table({
  consul,
  samsung,
});
