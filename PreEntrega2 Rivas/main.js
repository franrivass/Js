let accion = prompt("Ingresa 1 si quieres usar la calculadora virtual, o ingresa 2 si quieres checar precios de nuestros modelos de calculadora")
if(accion == 1){
    let nombre = prompt("¿Cómo te llamas?")
    alert(`Hola ${nombre}, a continuación podrás seleccionar el modelo de calculadora que te interese`)
    let modelo = prompt("Modelo Simple:1 Modelo Normal:2 Modelo Avanzado:3 Modelo Completo:4")
    if(modelo == 1){
    alert(`El precio del modelo simple es 3$`);
    }else if(modelo == 2){
    alert(`El precio del modelo normal es 6$`);
    }else if(modelo == 3){
    alert(`El precio del modelo avanzado es 10$`);
        }else if(modelo == 4){
    alert(`El precio del modelo completo es 15$`);
    }else{
    alert("No es una calculadora presente en nuestro catálogo");
    }
}
else if(accion == 2){
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
}

else{
    alert("No es una acción válida.")
}