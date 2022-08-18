interface Car {
  color: string;
  name: string;
  model: string;
  year: number;
}

export interface Gol extends Car {
  velocity: number;
}
