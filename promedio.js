const lista1= [
    100,
    200,
    300,
    500,
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
}
