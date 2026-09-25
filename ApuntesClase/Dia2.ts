// Día 2
// Written and Directed By Alvorak
console.clear();

const numeritos: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const pares = numeritos.filter((x) => { return x % 2 === 0 });

console.log(pares);


// ============================================================
// EJERCICIO DE CLASE: PELÍCULAS
// ============================================================

/*
Creamos un tipo PeliculaT para representar una película.

Cada película tendrá:
- name: nombre de la película.
- recomendAge: edad mínima recomendada.
- runTime: duración de la película en minutos.

Ejercicio:
1. Crear un array con varias películas.
2. Usar filter() para filtrar películas según unas condiciones.
3. Usar map() sobre el resultado para obtener únicamente
   un array de strings con los nombres de las películas.

Ejemplo de condición propuesta en clase:
- Películas recomendadas para mayores de edad.
- Películas cuya duración cumpla una determinada condición.
*/

type PeliculaT = {
    name: string,
    recomendAge: number,
    runTime: number
};

const peli1: PeliculaT = {
    name: "Rubber",
    recomendAge: 18,
    runTime: 120
};

const peli2: PeliculaT = {
    name: "Sharknado",
    recomendAge: 18,
    runTime: 80
};

const peli3: PeliculaT = {
    name: "Toy Story",
    recomendAge: 0,
    runTime: 120
};

const peli4: PeliculaT = {
    name: "Treasure Planet",
    recomendAge: 0,
    runTime: 190
};

const peli5: PeliculaT = {
    name: "Shaun Of The Dead",
    recomendAge: 18,
    runTime: 190
};

const peli6: PeliculaT = {
    name: "Shaun Of The Dead",
    recomendAge: 18,
    runTime: 190
};

const peliculas: PeliculaT[] = [peli1, peli2, peli3, peli4, peli5];


// filter() recorre el array y mantiene únicamente los elementos
// que cumplen la condición indicada.
//
// Después, map() transforma esas películas y devuelve únicamente
// su propiedad "name", por lo que el resultado será un string[].
//
// En este código se seleccionan las películas con:
// - Edad recomendada mayor o igual a 18.
// - Duración mayor o igual a 90 minutos.
const peliculasFiltradas = peliculas.filter((x) => {
    return x.recomendAge >= 18 && x.runTime >= 90
}).map((val) => {
    return val.name
});

console.log(peliculasFiltradas);


// find() busca el PRIMER elemento del array que cumple una condición.
// Si encuentra uno, devuelve ese elemento.
// Si no encuentra ninguno, devuelve undefined.
console.log(peliculas.find((x) => x.name == "Rubber"));

const peliculabuscada = peliculas.find((x) => x.recomendAge >= 18 && x.runTime >= 90);


// El operador ?. se llama "optional chaining".
// Permite acceder a "name" solamente si find() ha encontrado
// una película. Si devuelve undefined, no provoca un error.
console.log(peliculas.find((x) => x.recomendAge >= 18 && x.runTime >= 90)?.name);


// ============================================================
// NULL Y UNDEFINED
// ============================================================

/*
null y undefined representan la ausencia de un valor,
pero normalmente se utilizan con significados diferentes.

NULL:
Se suele utilizar de manera intencionada para indicar que
queremos que una variable o propiedad no tenga ningún valor.

Ejemplo:
let usuario = null;

Es como decir:
"Sabemos que aquí podría haber algo, pero ahora mismo
queremos indicar expresamente que no hay nada."


UNDEFINED:
Significa que un valor todavía no está definido o que
JavaScript ha intentado obtener algo que no existe.

Por ejemplo, find() devuelve undefined cuando no encuentra
ningún elemento que cumpla la condición.

Ejemplo:
const resultado = peliculas.find((x) => x.name === "No existe");

En este caso resultado será undefined.


IMPORTANTE:

null == undefined
→ true

null === undefined
→ false

Con == JavaScript realiza conversión de tipos.
Con === también compara el tipo, por lo que null y undefined
se consideran valores diferentes.

En general, es recomendable utilizar === y !==.
*/


// ============================================================
// REDUCE
// ============================================================

/*
reduce() sirve para recorrer un array y reducir todos sus
elementos a UN ÚNICO resultado.

Ese resultado no tiene por qué ser un número.
Puede ser:
- Un número.
- Un string.
- Un array.
- Un objeto.
- Cualquier otro tipo de dato.

La estructura básica es:

array.reduce((acumulador, elementoActual) => {
    return nuevoValorDelAcumulador;
}, valorInicial);


ACCUMULADOR (acc):
Guarda el resultado que vamos construyendo mientras recorremos
el array.

ELEMENTO ACTUAL (num, elem, etc.):
Es el elemento del array que se está procesando en ese momento.

VALOR INICIAL:
Es el valor con el que empieza el acumulador.

En el siguiente ejemplo el acumulador empieza en 0
y vamos sumándole cada número del array.
*/

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma: number = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // Resultado: 55


// Aquí hacemos exactamente la misma suma, pero mostrando
// en cada vuelta cuánto vale el acumulador y cuál es
// el número que estamos procesando.
const resultado = numeros.reduce((acc, num) => {
    console.log(`Acc actual => ${acc} y num es ${num}`)
    return acc + num;
}, 0);

console.log(resultado);


type ResultT = {
    amountEven: number,
    amountOdd: number,
    totalAmount: number
};


// reduce() también puede utilizar un OBJETO como acumulador.
//
// En este caso queremos obtener un único objeto con:
// - amountEven: cantidad de números pares.
// - amountOdd: cantidad de números impares.
// - totalAmount: cantidad total de números.
const superTotal = numeros.reduce((acc, elem): ResultT => {
    if (elem % 2 == 0) {
        return {
            ...acc, // Spread: copiamos todas las propiedades actuales de acc y modificamos únicamente las que necesitamos.
            amountEven: acc.amountEven + 1,
            totalAmount: acc.totalAmount + 1
        }
    } else {
        return {
            amountEven: acc.amountEven, // Sin spread: escribimos manualmente las propiedades que queremos conservar.
            amountOdd: acc.amountOdd + 1,
            totalAmount: acc.totalAmount + 1
        }
    }
}, {
    amountEven: 0,
    amountOdd: 0,
    totalAmount: 0
} as ResultT);

console.log(superTotal);


// ============================================================
// SPREAD (...) Y DESTRUCTURING
// ============================================================

/*
IMPORTANTE:
El operador ... puede aparecer en distintas situaciones.

En este ejercicio estamos utilizando principalmente SPREAD.

SPREAD significa "expandir" o "desplegar" los elementos
de un objeto o de un array.


1. SPREAD CON OBJETOS

Ejemplo:

const persona = {
    nombre: "Alvorak",
    edad: 25
};

const copiaPersona = {
    ...persona
};

...persona copia dentro del nuevo objeto todas las propiedades
que había en persona.

También podemos copiar el objeto y modificar únicamente
una propiedad:

const copiaPersona = {
    ...persona,
    edad: 26
};


2. SPREAD CON ARRAYS

Ejemplo:

const numeros = [1, 2, 3];

const nuevosNumeros = [...numeros, 4];

El resultado sería:

[1, 2, 3, 4]

Es decir, ...numeros introduce los elementos del array original
dentro del nuevo array.


3. DESTRUCTURING

Destructuring es algo diferente.

Sirve para EXTRAER valores de un objeto o de un array
y guardarlos directamente en variables.

Objeto:

const persona = {
    nombre: "Alvorak",
    edad: 25
};

const { nombre, edad } = persona;


Array:

const numeros = [10, 20, 30];

const [primero, segundo] = numeros;

primero → 10
segundo → 20


RESUMEN:

Spread:
    [...array]
    {...objeto}

→ Expande/copia elementos.


Destructuring:
    const [a, b] = array;
    const { nombre, edad } = objeto;

→ Extrae elementos y los guarda en variables.
*/


// ============================================================
// EJERCICIO CON REDUCE Y PeliculaT
// ============================================================

/*
Partiendo del array de películas, utilizar reduce() para
construir UN ÚNICO objeto que contenga:

- tituloPeliculas:
  Array de strings con los títulos de todas las películas.

- listaCompletaPelis:
  Array con todas las películas completas (PeliculaT).

- pelisParaMenores:
  Array únicamente con las películas recomendadas
  para menores de 18 años.

- duracionTotalPelis:
  Suma de la duración de todas las películas.

Aquí podemos ver que reduce() no solo sirve para sumar números.
También podemos utilizarlo para construir objetos complejos
mientras recorremos un array.
*/

type PeliculasReturnT = {
    tituloPeliculas: string[],
    listaCompletaPelis: PeliculaT[],
    pelisParaMenores: PeliculaT[],
    duracionTotalPelis: number
}

const superTotal2 = peliculas.reduce((acc, elem): PeliculasReturnT => {
    return {
        // Copiamos las películas acumuladas anteriormente
        // y añadimos la película actual.
        listaCompletaPelis: [...acc.listaCompletaPelis, elem],

        // Sumamos la duración de la película actual
        // a la duración que ya teníamos acumulada.
        duracionTotalPelis: acc.duracionTotalPelis + elem.runTime,

        // Copiamos los títulos anteriores y añadimos
        // el nombre de la película actual.
        tituloPeliculas: [...acc.tituloPeliculas, elem.name],

        // Si la película es para menores de 18 años,
        // la añadimos al array.
        // Si no lo es, mantenemos el array tal y como estaba.
        pelisParaMenores: elem.recomendAge < 18 ? [...acc.pelisParaMenores, elem] : acc.pelisParaMenores
    }
}, {
    // Estado inicial del acumulador.
    // Los arrays empiezan vacíos y la duración total empieza en 0.
    tituloPeliculas: [],
    listaCompletaPelis: [],
    pelisParaMenores: [],
    duracionTotalPelis: 0

} as PeliculasReturnT);


console.log(superTotal2);
