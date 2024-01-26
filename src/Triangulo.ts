import { Figura } from 'Figura';

export class Triangulo extends Figura {
  private _area: number;
  private _altura: number;
  private _base: number;

  constructor(altura: number, base: number) {
    super();
    this._altura = altura;
    this._base = base;
    this._area = this.calcularArea();
  }

  protected calcularArea(): number {
    return (this._altura * this._base) / 2;
  }

  get area(): number {
    return this._area;
  }
}
