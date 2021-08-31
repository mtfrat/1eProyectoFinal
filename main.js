// Clase para la manipulación de produtos

class producto {
    constructor(nombre,codigo,precio){
        this.nombre = nombre
        this.codigo = codigo
        this.precio = precio
    }

    precioProducto(){
        return this.precio
    }

    busquedaCodigo(codigoIngresado){

    }
}


// Ingreso productos
let televisor = new producto("televisor","0001",10000)
let computadora = new producto("computadora","0002",50000)
let heladera = new producto("heladera","0003",70000)

// Creo array para mostrar al final
let compra = []

// Funcion que solo imprime mensajes en pantalla
function mensajeBienvenida() {
    console.log("Bienvenido a Fabrega!")
    console.log("Ingrese código de artículo a comprar: ")
    console.log("0001-Televisor\n0002-Computadora\n0003-Heladera")
}

// Funcion que pide un código al usuario y lo devuelve para luego reutilizarlo 
function ingresoCodigo() {
    var codigo = prompt("Código:")
    if (codigo == "0001") {
        console.log("Usted va a comprar un televisor\nUsted ingresó:", codigo)
        compra.push("televisor")
    } else if (codigo == "0002") {
        console.log("Usted va a comprar una computadora\nUsted ingresó:", codigo)
        compra.push("computadora")
    } else if (codigo == "0003") {
        console.log("Usted va a comprar una heladera\nUsted ingresó:", codigo)
        compra.push("heladera")
    } else{
        console.log("Código incorrecto, vuelva a ingresar el código:")
        ingresoCodigo()
    }
    compra.push(codigo)
    return codigo
}

//Función que muestra el precio del producto ingresado
function precioProducto(codigo) {
    let precio
    if (codigo == "0001"){
        console.log("El precio es:$",televisor.precioProducto(),"\nSeleccione método de pago mediante número correspondiente:")
        precio = televisor.precioProducto()
    } else if (codigo == "0002"){
        console.log("El precio es:$",computadora.precioProducto(),"\nSeleccione método de pago mediante número correspondiente:")
        precio = computadora.precioProducto()
    }   else if (codigo == "0003"){
        console.log("El precio es:$",heladera.precioProducto(),"\nSeleccione método de pago mediante número correspondiente:")
        precio = heladera.precioProducto()
    }
    compra.push(precio)
    return precio
}

// Función para ingresar metodo de pago
function pagoProducto(){
    let metodo = prompt("1-Tarjeta Crédito\n2-Tarjeta Débito\n3-Efectivo en sucursal")
    if (metodo == "1" || metodo == "2" || metodo == "3") {
        return metodo
    } else{
        console.log("Método incorrecto, vuelva a ingresar método de pago:")
        pagoProducto()
    }
    
}

// Función para elegir la cantidad de cuotas en caso de haber elegido tarjeta de credito 
function elegirCuotas() {
    let cuotas = prompt("Elija cantidad de cuotas (3,6 o 12): ")
    if (cuotas == "3" || cuotas == "6" || cuotas == "12") {
        return cuotas
    } else{
        console.log("Cantidad de cuotas errónea, vuelva a intentar")
        elegirCuotas()
    }
}

// Función que calcula el precio de cada cuota
function valorCuotas(precio){
    precioPorCuota = precioFinal / precio
    return precioPorCuota
}

// Función que agrega metodo de pago al array
function imprimirMetodo(metodo) {
    if (metodo == "1"){
        compra.push("tarjeta de crédito")
    } else if (metodo == "2"){
        compra.push("tarjeta de débito")
    } else if (metodo == "3"){
        compra.push("efectivo en sucursal")
    }
}

mensajeBienvenida()
let codigoValido = ingresoCodigo()
let precioFinal = precioProducto(codigoValido)
let metodoDePago = pagoProducto()
imprimirMetodo(metodoDePago)

if(metodoDePago == "1"){
    let cantidadCuotas = elegirCuotas()
    let precioCuotas = valorCuotas(cantidadCuotas)
    compra.push(cantidadCuotas,precioCuotas.toFixed(2))
}

console.log("....::::Resumen de compra::::....")
console.log("Producto seleccionado: ", compra[0])
console.log("Código de artículo: ", compra[1])
console.log("Precio: $",compra[2])
console.log("Forma de pago:",compra[3])
if(compra[4] !== undefined && compra[5] !== undefined){
    console.log("Cantidad de cuotas:",compra[4])
    console.log("A un precio de $",compra[5], "por cuota")
}
