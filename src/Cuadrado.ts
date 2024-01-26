import { Figura } from 'Figura';

export class Cuadrado extends Figura {
  private _area: number;
  private _lado: number;

  constructor(lado: number) {
    super();
    this._lado = lado;
    this._area = this.calcularArea();
  }

  public calcularArea(): number {
    return this._lado * this._lado;
  }

  get area(): number {
    return this._area;
  }
}
