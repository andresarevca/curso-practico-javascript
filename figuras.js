// Código del cuadrado
console.group("Cuadrado");
/* const ladoCuadrado=5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm."); */

function perimetroCuadrado(lado){
    return lado*4;
};
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado(5) + "cm.");

function areaCuadrado(lado){
    return lado**2;
};
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2.");
console.groupEnd();

// Código del triángulo
console.group("Triangulo");
/* const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5; */
// console.log("Los lados del triángulo miden: " + ladoTriangulo1+ "cm., " + ladoTriangulo2 +"cm., "+ baseTriangulo+ "cm.");

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
};

function areaTriangulo(base,altura){
    return (base*altura)/2;
};
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2.");
console.groupEnd();

// Código del círculo
console.group("Círculo");
/* const radioCirculo=5;
const diametroCirculo=radioCirculo*2; */
const pi=Math.PI

// console.log("El radio del  círculo  mide: " +radioCirculo+"cm.");

// console.log("El diámetro del  círculo  mide: " +diametroCirculo+"cm.");

function perimetroCirculo(pi,radio){
    return 2*pi*radio;
};
    
// console.log("El perimetro del  círculo  mide: " +perimetroCirculo+"cm.");

function areaCirculo(pi,radio){
    return pi*radio*radio;
};
// console.log("El área del  círculo  mide: " +areaCirculo+"cm.");

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
};

function alturaTriangulo(lado1,lado2,base){
    if(lado1===lado2){
        const h=Math.sqrt( (lado2**2) - ( (base/2)**2 ) );
        return(h);
    }else{
        const h="No es un triangulo isosceles!";
        return(h);
    };
};

function CalcularAlturaTriangulo(){
    const input1=document.getElementById("InputTrianguloLado1");
    const value1=input1.value;

    const input2=document.getElementById("InputTrianguloLado2");
    const value2=input2.value;

    const input3=document.getElementById("InputTrianguloBase");
    const value3=input3.value;

    const altura=alturaTriangulo(value1,value2,value3);
    alert(altura);
};