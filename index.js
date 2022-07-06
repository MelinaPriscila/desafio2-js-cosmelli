let nombre = prompt("Ingresar un nombre");
while(nombre != "ESC"){
    switch (nombre){
        case "Melina":
            alert("Hola Melina");
            break;
        case "Priscila":
            alert("Hola Priscila");
            break;
        default:
            alert("¿Quién sos?")
            break;
    }
    nombre = prompt("Ingresar un nombre");
}

function saludar() {
    crossOriginIsolated.log("¡Bienvenido!");
}

let edad = prompt("Ingresar edad");
while(edad != "ESC"){
    alert("El usuario ingresó "+ edad);
   edad = prompt("Ingresar edad");
}

let altura = prompt("Ingresar altura");
while(altura != "ESC"){
    alert("El usuario ingresó "+ altura);
    altura = prompt("Ingresar altura");
}

let peso = prompt("Ingresar peso");
while(peso != "ESC"){
    alert("El usuario ingresó "+ peso);
    peso = prompt("Ingresar peso");
}


function sumar(edad, altura, peso){
    let resultado = 21 + 156 + 58
    return resultado // 234
}



