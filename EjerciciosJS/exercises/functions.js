console.log("6. Funciones");
/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador. */


/* b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado. */


/* c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero. */

/* function validateInteger(number) {
    return Number.isInteger(number);
  }
  
let num = parseFloat(prompt("Ingrese un número:"));
let esEntero = validateInteger(num);
  
  
console.log("El número ingresado es entero? : " + esEntero);
  

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado). */

/*
//a. Función que suma dos valores numéricos
function suma(a, b) {
    return a + b;
}

// d.Función que suma dos valores numéricos con validación de enteros
function sumaConValidacion(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Uno de los parámetros no es un número.");
        return NaN;
    }

    if (!Number.isInteger(a)) {
        alert("El primer número no es un entero. Será redondeado.");
        a = Math.round(a);
    }

    if (!Number.isInteger(b)) {
        alert("El segundo número no es un entero. Será redondeado.");
        b = Math.round(b);
    }

    return a + b;
}


let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// a. Llamar a la función suma con los números ingresados
let resultadoSuma = suma(numero1, numero2);
console.log("El resultado de la suma es: " + resultadoSuma);

// b. Llamar a la función sumaConValidacion con los números ingresados
let resultadoSumaConValidacion = sumaConValidacion(numero1, numero2);
console.log("Resultado de la suma con validación: " + resultadoSumaConValidacion); */


/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual. */

// Función para validar si un número es entero y redondearlo si no lo es
function validarEntero(num) {
    if (!Number.isInteger(num)) {
        alert("El número no es un entero. Será redondeado.");
        return Math.round(num);
    }
    return num;
}

// Función que suma dos valores numéricos con validación de enteros
function sumaConValidacion(a, b) {
    // Función para validar si un valor es un número
    function validarNumero(num) {
        if (isNaN(num)) {
            alert("El valor ingresado no es un número. Se asumirá como 0.");
            return 0;
        }
        return num;
    }

    a = validarNumero(a);
    b = validarNumero(b);

    a = validarEntero(a);
    b = validarEntero(b);

    return a + b;
}

let entero1 = parseFloat(prompt("Ingrese el primer número:"));
let entero2 = parseFloat(prompt("Ingrese el segundo número:"));


let resultadoSumaConValidacion = sumaConValidacion(entero1, entero2);
console.log("Resultado de la suma con validación: " + resultadoSumaConValidacion);


console.log("---------------------------------------");