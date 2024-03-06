//Ejemplo de arreglos
let comidas=[
    "pato a la naranja",
    "Pan 7 granos con aceite extra virgen",
    "Focaccia",
    "Malta con chocorramo",
    "Beef chorizo",
    "Salmon al papillon",
    "Risoto con tinta de calamar",
    "Pasta carbonara",
    "Changua",
    "Frijoles con coles"
]

//Ejemplo de objeto

let pedido={
    numero:123456,
    entradas:["ceviche de chicharron","arepita con hogao"],
    platosFuertes:["Frisoles con coles","Salmon al papillon"],
    bebidas:["Botella lambrusco"],
    postres:["chessecake de frutos rojos","pie de limon"],
    otros:["BonFiest"],
    costos:[50000,15000,40000,80000,1400000]
}

let pedidoDos={
    numero:12345,
    entradas:["arepita de mote","sopita de caracol"],
    platosFuertes:["sancocho de bagre","ensalada de camarones"],
    bebidas:["costeñita sin alcohol"],
    postres:["cocada","dulce de papaya"],
    otros:null,
    costos:[15000,22000,40000,35000,10000,8000,30000]
}

let pedidosDia=Array(pedido,pedidoDos)

//NORMALMENTE LOS ARRELGOS SE DEBEN RECORRER
//QUE ES RECORRER?
//RECORRER ES ACCEDER A LA INFORMACIÓN DEL ARREGLO DE FORMA INDIVIDUAL
pedidosDia.forEach(function(pedido){
    console.log(pedido)
})