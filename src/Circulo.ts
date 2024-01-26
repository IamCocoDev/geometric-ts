import { Figura } from 'Figura';

export class Circulo extends Figura {
  private _radio: number;

  constructor(radio: number) {
    super();
    this._radio = radio;
  }

  public calcularArea(): number {
    return this._radio * Math.PI ** 2;
  }

  static calcularAreaGenerica(radio: number): number {
    return radio * Math.PI ** 2;
  }
}
