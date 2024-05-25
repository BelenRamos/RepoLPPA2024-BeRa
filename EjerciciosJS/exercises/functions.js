console.log("6. Funciones");
/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador. */

function sum(a, b) {
    return a + b;
}

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado. */

function validateInteger(num) {
    return Number.isInteger(num);
}

/* c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero. */

function sumaConValidacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }

    return a + b;
}

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado). */

function sumaConValidacion(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Uno o ambos números no son enteros. Se redondearán a enteros.");
        
        a = Math.round(a);
        b = Math.round(b);
    }

    return a + b;
}

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual. */

var resultado = sumaConValidacion(3.5, 4.2);
console.log(resultado); 


// Función para solicitar un número al usuario
function pedirNumero(mensaje) {
    var input = prompt(mensaje);
    return parseFloat(input); 
}

// Llamar a la función sumaConValidacion con números ingresados por el usuario
var num1 = pedirNumero("Ingrese el primer número:");
var num2 = pedirNumero("Ingrese el segundo número:");

var resultado = sumaConValidacion(num1, num2);
console.log("El resultado de la suma es:", resultado);


console.log("---------------------------------------");