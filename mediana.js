lista1=[
    100,
    400,
    200,
    150,
    800,
    250,
    // 420,
];

function calcularPromedio(array) {
    /*let sumaLista= 0;

     for (let i = 0; i < array.length; i++) {
        sumaLista1 = sumaLista1+array[i];
    }; */
    
    let sumaLista= array.reduce(
        function (valorAcumulado=0,nuevoElemento) {
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedio=sumaLista/lista1.length;

    return promedio;
};

const mitadLista1=parseInt(lista1.length/2);


function esPar(numero) {
    if (numero%2==0) {
        return true;
    } else {
        return false;
    };
};

let mediana;

function calcularMediana(array) {
    let arrayOrdenado=array.sort();

    if (esPar(arrayOrdenado.length)) {
        const elemento1=arrayOrdenado[mitadLista1-1];
        const elemento2=arrayOrdenado[mitadLista1];
    
        const promedio1y2=calcularPromedio([elemento1,elemento2]);
    
        mediana=promedio1y2;

        return mediana;
    }else{
        mediana=arrayOrdenado[mitadLista1];

        return mediana;
    };
};