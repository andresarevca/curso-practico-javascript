const lista1= [
    100,
    200,
    300,
    500,
];

let sumaLista1= 0;

function calcularPromedio(array) {
    for (let i = 0; i < array.length; i++) {
        sumaLista1 = sumaLista1+array[i];
    };
    
    const promedio=sumaLista1/lista1.length;

    return promedio;
}