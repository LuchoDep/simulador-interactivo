alert("Hola! Bienvenido a Maxikiosco Nombre Pendiente, está semana tenemos las siguientes promos en bebidas con envío gratis: \n 1. 1 Fernet Branca 750cc + 2 botellas Coca Cola 2,25lt: $2900. \n 2. 1 Gancia Americano 950ml + 2 botellas 7UP 2,25lt: $1700. \n 3. Pack x6 Cerveza Patagonia 27.7 Ipa lata: $2300")

let promo = prompt("Indica cual promo es la queres (fernet, gancia o cerveza)")
let precioPromo = Number

switch(promo){
    case "fernet":
        precioPromo = 2900
        console.log(precioPromo)
        break;
    case "gancia":
        precioPromo = 1700
        console.log(precioPromo)
        break;
    case "fernet":
        precioPromo = 2300
        console.log(precioPromo)
        break;
    default:
        break;
}

alert ("¿Cómo queres realizar el pago? \n Con tarjeta tenes 1 o 3 cuotas sin interés. \n En efectivo tenes un 10% de descuento.")

let pago = prompt("¿Cómo queres realizar el pago?")
let tarjeta = "Tarjeta" || "tarjeta"
let efectivo = "Efectivo" || "efectivo"
let pagoFinal = Number

let descuento = (n1) => {return resultado = n1 - (n1 * 0.1) }
let cuota1 = (n1, n2) => {return resultado = n1 / n2}
let cuota3 = (n1, n2) => {return resultado = n1 / n2}

if (tarjeta == pago){
    let cuotas = prompt("¿En cuántas cuotas queres realizar el pago? 1 o 3")
    switch (cuotas){

        case "1":
            pagoFinal = cuota1(precioPromo, 1)
            alert("El monto a pagar es de $" + precioPromo + ", en un solo pago.")
            console.log(pagoFinal)
            break;

        case "3":
            pagoFinal = cuota3(precioPromo ,3)
            alert("El monto a pagar es de $" + precioPromo + ", en 3 pagos de $" + pagoFinal)
            console.log(pagoFinal)
            break;

        default:
            break;
    }
} else if (efectivo == pago){
    pagoFinal = descuento(precioPromo)
    alert("El total de tu compra es de $" + pagoFinal)

}

let nombre = prompt("Decinos tu nombre y apellido")
let direccion = prompt("¿A qué dirección debemos enviar tu compra?")
alert("¡Muchas gracias por tu compra! Tu pedido a nombre de " + nombre + " y dirección " + direccion + " , llegará en breve.")
