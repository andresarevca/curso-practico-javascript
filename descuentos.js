/* const precioOriginal=120;
const descuento=18; */

var cupones=[
    '123a',
    '345b',
    '567c',
    '789d',
];


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*(porcentajePrecioConDescuento))/100;

    return precioConDescuento;
};

function onClickButtonPriceDiscount(){

    let descuento;
    let precioConDescuento;

    const inputPrice=document.getElementById("inputPrice");
    const priceValue=inputPrice.value;

    const inputDiscount=document.getElementById("inputDiscount");
    if (inputDiscount.value!=''){
        descuento=inputDiscount.value;
    }
    

    const inputCupon=document.getElementById("inputCupon");
    const cuponValue=inputCupon.value;

    const resultPrice=document.getElementById("resultPrice")



    

    switch(cuponValue){
        case cupones[0]:
            descuento = 15;
            precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);
            resultPrice.innerText="El precio con descuento es de: $" + precioConDescuento;
            break;
        case cupones[1]:
            descuento = 30;
            precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);
            resultPrice.innerText="El precio con descuento es de: $" + precioConDescuento;
            break;
        case cupones[2]:
            descuento = 45;
            precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);
            resultPrice.innerText="El precio con descuento es de: $" + precioConDescuento;
            break;
        case cupones[3]:
            descuento = 60;
            precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);
            resultPrice.innerText="El precio con descuento es de: $" + precioConDescuento;
            break;
        case '':
            precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);
            resultPrice.innerText="El precio con descuento es de: $" + precioConDescuento;
            break;
        default:
            resultPrice.innerText="Cupon no valido";
    };

}; 

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}) */