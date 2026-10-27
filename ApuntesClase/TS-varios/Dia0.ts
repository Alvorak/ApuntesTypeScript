/*
==================================================
CLASE 01 - INTRODUCCIÓN A TYPESCRIPT
Arquitectura y Programación de Sistemas en Internet
==================================================

IDEAS PRINCIPALES:

- Siempre intentamos TIPAR las variables.
- La mayoría de variables serán constantes -> const.
- Para objetos más complejos creamos nuestros propios tipos.
- Los tipos personalizados los nombramos terminando en "T".
  Ejemplo: AlumnoT, PeliculaT.
*/


// ==================================================
// LIMPIAR LA CONSOLA
// ==================================================

// Borra todo lo que haya anteriormente en la consola.
console.clear();


// ==================================================
// VARIABLES Y ARRAYS
// ==================================================

/*
En TypeScript podemos indicar explícitamente el tipo
de una variable después de los ":".

const nombreVariable: tipo = valor;
*/

// Array de strings.
const papa: string[] = ["12", "323", "3434"];

// Array de números.
const papa2: number[] = [1, 2, 3, 4, 5, 6];


// ==================================================
// CONSOLE.LOG
// ==================================================

/*
console.log() sirve para mostrar información
por consola.
*/

console.log(papa2);

// Podemos acceder a una posición concreta de un array.
// Los arrays empiezan en la posición 0.

console.log(papa2[0]);

// Resultado:
// 1
/*
También podemos imprimir varias cosas en el mismo log.
*/

console.log("Array papa2:", papa2);

/*
Este código:

Object.keys({ papa2 })[0]

obtiene el nombre de la propiedad del objeto.

{ papa2 }

equivale aproximadamente a:

{
    papa2: papa2
}

Por tanto Object.keys() devuelve:

["papa2"]

y [0] obtiene:

"papa2"
*/

console.log(Object.keys({ papa2 })[0], papa2); //Cosa mia por trastear

// Resultado aproximado:
// papa2 [1, 2, 3, 4, 5, 6]


// También podemos imprimir cualquier string.

console.log("(╯°□°）╯︵ ┻━┻"); //Prueba con ASCII


// ==================================================
// TIPOS PERSONALIZADOS
// ==================================================

/*
Cuando tenemos objetos más complejos es mejor
crear un tipo.

Usamos:

type NombreT = {
    propiedad: tipo
}

Por convenio en clase añadimos una "T" al final
para identificar fácilmente que se trata de un tipo.
*/

type AlumnoT = {
    nombre: string,
    apellidos: string,
    edad: number
};


/*
Ahora podemos crear un objeto y obligar a que
cumpla la estructura de AlumnoT.
*/

const alvaro: AlumnoT = {
    nombre: "Alvaro",
    apellidos: "Potter",
    edad: 222
};

console.log(alvaro);


/*
Si intentáramos poner algo incorrecto, TypeScript
nos avisaría.

Por ejemplo:

const alumnoIncorrecto: AlumnoT = {
    nombre: "Alvaro",
    apellidos: "Potter",
    edad: "43"       // ERROR: debería ser number
};

Esto es una de las ventajas principales de TypeScript:
detectar errores de tipos antes de ejecutar el programa.
*/


// ==================================================
// OTRO TIPO: PELÍCULA
// ==================================================

type PeliculaT = {
    titulo: string,
    director: string,
    released: number
};


const peli1: PeliculaT = {
    titulo: "Fight Club",
    director: "Tarantella",
    released: 1111
};

const peli2: PeliculaT = {
    titulo: "Fight Club",
    director: "Palanycuck",
    released: 1111
};

const peli3: PeliculaT = {
    titulo: "Fight Club",
    director: "asdads",
    released: 1111
};


// Podemos crear arrays que solamente acepten PeliculaT.

const peliculas: PeliculaT[] = [
    peli1,
    peli2,
    peli3
];


// Acceder a una película concreta.

console.log(peliculas[1]);


// Acceder a una propiedad concreta.

console.log(peliculas[1].director);


// ==================================================
// STRINGS CON FORMATO - TEMPLATE LITERALS
// ==================================================

/*
Podemos concatenar strings de la forma clásica:

"Hola " + nombre

Pero en TypeScript / JavaScript es muy habitual
utilizar TEMPLATE LITERALS.

Se escriben usando backticks:

`texto`

Dentro podemos introducir variables utilizando:

${variable}
*/

const nombre: string = "Alvaro";

console.log(`Hola ${nombre}`);


/*
Esto resulta especialmente útil cuando queremos
crear mensajes largos.
*/

console.log(
    `La película ${peli1.titulo} salió en el año ${peli1.released}.`
);


// ==================================================
// FUNCIONES
// ==================================================

/*
Una función tiene principalmente:

INPUT (IN)
    Información que entra en la función.

OUTPUT (OUT)
    Información que devuelve la función.


Ejemplo:

const funcion = (input: tipo): tipoSalida => {

};
*/


// ==================================================
// FUNCIÓN SIN OUTPUT
// ==================================================

/*
Esta función recibe como INPUT una película.

inPelicula: PeliculaT

Esto significa que solo podemos pasarle objetos
que sean del tipo PeliculaT.


Después tenemos:

: void

"void" significa que la función NO devuelve ningún valor.

Por tanto:

IN  -> PeliculaT
OUT -> void
*/

const imprimirPelicula = (inPelicula: PeliculaT): void => {

    console.log(
        `La película está titulada ${inPelicula.titulo}, ` +
        `que salió en el año ${inPelicula.released}.`
    );

};


// Llamamos a la función pasando una PeliculaT.

imprimirPelicula(peli3);


// ==================================================
// EJEMPLO DE FUNCIÓN CON OUTPUT
// ==================================================

/*
También podemos crear una función que DEVUELVA algo.

Aquí:

IN  -> number
OUT -> number
*/

const duplicarNumero = (numero: number): number => {

    return numero * 2;

};


const resultado: number = duplicarNumero(5);

console.log(`El resultado es ${resultado}`);

// Resultado:
// El resultado es 10
