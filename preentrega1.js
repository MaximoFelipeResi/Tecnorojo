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