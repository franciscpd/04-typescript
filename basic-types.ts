// Numérico
let age: number | null | undefined;
// Texto
let peopleName: string;
// Lógico
let active: boolean;
// Lista de string
let colors: Array<string>;
// Tupla
let people: [string, number, string];
// Objeto
let person: Object;
// Função
let fn: Function;
// Enumerado
enum StatusDelivery {
  wait = "Aguardando",
  done = "Finalizado",
}

function setStatusDelivery(status: StatusDelivery) {
  console.log(status);
}

setStatusDelivery(StatusDelivery.done);

// Nunca vai ter retorno
function error(error: string): never {
  throw new Error(error);
}
