let nombre = prompt("¿Cómo te llamas?")
alert(`Bienvenido a la calculadora, ${nombre}`)
let operacion = prompt("Ingrese la operación (Suma, Resta, Multiplicación o División)")

while(operacion.toLowerCase() != "suma" && operacion.toLowerCase() != "resta" 
        && operacion.toLowerCase() != "multiplicación" && operacion.toLowerCase() != "multiplicacion" 
        && operacion.toLowerCase() != "división" && operacion.toLowerCase() != "division"){
            alert("No es una operación válida");
            operacion = prompt("Ingrese la operación (Suma, Resta, Multiplicación o División)");
}

while(operacion.toLowerCase() === "suma"){
    let numero1 = parseFloat(prompt("Ingrese el primer sumando"))
    if (numero1 == null || /\D/.test(numero1) || numero1 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }

    let numero2 = parseFloat(prompt("Ingrese el segundo sumando"))
    if (numero2 == null || /\D/.test(numero2) || numero2 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }
    
    alert (`La suma total es ${numero1 + numero2}`);
    break
}

while(operacion.toLowerCase() === "resta"){
    let numero1 = parseFloat(prompt("Ingrese el minuendo"))
    if (numero1 == null || /\D/.test(numero1) || numero1 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }

    let numero2 = parseFloat(prompt("Ingrese el sustraendo"))
    if (numero2 == null || /\D/.test(numero2) || numero2 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }
    
    alert (`El resto total es ${numero1 - numero2}`);
    break
}

while(operacion.toLowerCase() === "multiplicación" || operacion.toLowerCase() === "multiplicacion"){
    let numero1 = parseFloat(prompt("Ingrese el multiplicando"))
    if (numero1 == null || /\D/.test(numero1) || numero1 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }

    let numero2 = parseFloat(prompt("Ingrese el multiplicador"))
    if (numero2 == null || /\D/.test(numero2) || numero2 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }
    
    alert (`El producto total es ${numero1 * numero2}`);
    break
}

while(operacion.toLowerCase() === "división" || operacion.toLowerCase() === "division"){
    let numero1 = parseFloat(prompt("Ingrese el dividendo"))
    if (numero1 == null || /\D/.test(numero1) || numero1 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }

    let numero2 = parseFloat(prompt("Ingrese el divisor"))
    if (numero2 == null || /\D/.test(numero2) || numero2 == "") {
        alert("No has introducido un número válido, recarga e intenta de nuevo.");
        break
    }
    
    alert (`El resultado total es ${numero1 / numero2}`);
    break
}