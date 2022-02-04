lista1=[
    1,
    2,
    3,
    2,
    4,
    4,
    2,
    5,
];

const listaCount={};



function contarElementos(array) {
    array.map(
        function (elemento) {

            if (listaCount[elemento]) {
                listaCount[elemento]+=1;
            }else{
                listaCount[elemento]=1;
            };

        }
    );
};

function calcularModa(array) {

    contarElementos(array);

    const listaArray=Object.entries(listaCount).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1]-nuevoValor[1];
        }
    );

    return listaArray.pop();
}
