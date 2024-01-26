import { Circulo } from 'Circulo';
import { Cuadrado } from 'Cuadrado';
import { Triangulo } from 'Triangulo';

const triangulo = new Triangulo(3, 4);

const circulo = new Circulo(3);

const cuadrado = new Cuadrado(6);

triangulo;

console.log('Hola mundo');
console.log(
  'El area de un triangulo de altura 3 y de base 4 es: ' + triangulo.area
);
console.log('El area de un circulo de radio 3 es: ' + circulo.calcularArea());
console.log(Circulo.calcularAreaGenerica(3));
console.log('El area de un cuadrado de lado 6 es: ' + cuadrado.area);
