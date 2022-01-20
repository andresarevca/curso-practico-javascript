// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado=5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado=ladoCuadrado*4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm.");

const areaCuadrado=ladoCuadrado**2;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2.");
console.groupEnd();

// Código del triángulo
console.group("Triangulo");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1+ "cm., " + ladoTriangulo2 +"cm., "+ baseTriangulo+ "cm.");

const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm.");

const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2.");
console.groupEnd();

// Código del círculo
console.group("Círculo");
const radioCirculo=5;
const diametroCirculo=radioCirculo*2;
const pi=Math.PI

console.log("El radio del  círculo  mide: " +radioCirculo+"cm.");

console.log("El diámetro del  círculo  mide: " +diametroCirculo+"cm.");

const perimetroCirculo=2*pi*radioCirculo;
console.log("El perimetro del  círculo  mide: " +perimetroCirculo+"cm.");

const areaCirculo=pi*radioCirculo*radioCirculo;
console.log("El área del  círculo  mide: " +areaCirculo+"cm.");

console.groupEnd();


