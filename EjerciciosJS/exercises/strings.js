console.log("2. Strings");

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase). */

var stringA = "javascript";

var upperCaseString = stringA.toUpperCase();
console.log(upperCaseString);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring). */

var stringB = "Hola Mundo";

var firstFiveChars = stringB.substring(0, 5);
console.log(firstFiveChars); 

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var stringC = "Revolucionario";

var lastThreeChars = stringC.substring(stringC.length - 3);
console.log(lastThreeChars); 


/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +). */

var stringD = "desarrollamos";

var capitalizedString = stringD.substring(0, 1).toUpperCase() + stringD.substring(1).toLowerCase();
console.log(capitalizedString); 


/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf). */

var stringE = "Buen dia";

var firstSpacePosition = stringE.indexOf(" ");
console.log(firstSpacePosition); 

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +). */

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio)
var stringF = "bienVEnido iNVIERNO";

var spaceIndex = stringF.indexOf(" ");

var word1 = stringF.substring(0, spaceIndex);
var word2 = stringF.substring(spaceIndex + 1);
var formattedString = word1.substring(0, 1).toUpperCase() + word1.substring(1).toLowerCase() + " " +
                      word2.substring(0, 1).toUpperCase() + word2.substring(1).toLowerCase();
console.log(formattedString); // Salida: "Bienvenido Invierno"

console.log("---------------------------------------");
