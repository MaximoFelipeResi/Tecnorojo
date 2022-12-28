const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});

const inJson = '{"nombre":"iPhone 13 mini", "software":"ios", "memoria": "256gb", "chipset": "A14 Bionic"}'

const obj = JSON.parse(inJson);

console.log(inJson)
console.log(obj);


localStorage.setItem("Apple", "iPhone 13 Mini")


let contenedor = document.querySelector(".Apple");
contenedor.remove();

console.log(contenedor);

let add = document.createElement("p");

add.innerHTML = "Productos Apple en falta, nuevos ingresos pronto!"
document.body.appendChild(add);
