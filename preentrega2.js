let nombreUsuario = prompt("Ingrese el nombre");
let apellidoUsuario = prompt("Ingrese el apellido");

if (nombreUsuario != " " && apellidoUsuario != " "){
    alert("Bienvenido a Tecnorojo "+nombreUsuario + " "+apellidoUsuario)
} else{
    alert("Error al ingresar datos")
}

let marca = prompt(`Elija una marca de dispositivos:
1:Apple
2:Samsung
3:Motorola
4:Xiaomi
`);

switch (marca){
    case "1":
        console.log("Apple")
        break;
    case "2":
        console.log("Samsung");
        break;
    case "3":
        console.log("Motorola");
        break;
    case "4":
        console.log("Xiaomi");
        break;
    default:
        console.log("Otra")
        break;
}

for (let i = 6; i <= 14; i++){
    if (i > 14){
        break; 
    }
    alert(`Que linea de iPhone buscas: ${i}`);
}


function calculadora (valorDolar, precioProducto, operacion){
    switch (operacion){
        case "+":
            return valorDolar + precioProducto;
            break;
        case "-": 
            return valorDolar - precioProducto;
            break;
        case "*":
            return valorDolar * precioProducto;
            break;
        case "/":
            return valorDolar / precioProducto;
            break;
        case "%":
            return valorDolar % precioProducto;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(316, 900, "*")); // El valor del dolar (316 pesos) por el valor del producto (900 dolares)

function producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto1 = new producto("iPhone 14 Pro", 1500);
const producto2 = new producto("iPhone 11", 800);
const producto3 = new producto("iPhone Xs", 650);
const producto4 = new producto("iPhone 8 Plus", 400);

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

let nuevosIngresos = ["📱", "⌚", "📺"];
let accesorios = ["🔌", "🎙️"];

let allproducts = accesorios.concat(nuevosIngresos);

nuevosIngresos.push("🎧");
nuevosIngresos.reverse();

console.log(allproducts.join("-"));