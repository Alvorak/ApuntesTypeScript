//Dia 1:
console.clear();
const numeritos: number[] = [1,2,3,4,5,6,7,8,9,10];

//Porque son importantes las funciones que vienen con array???
//Porque permiten recorrer, transformar o trabajar con los elementos de un array de forma más sencilla.

const booleano = true;

/*
For each:
    - Recibe => Array, funcion(un solo parametro de tipo de cada elemento del array y no devuelve nada) 
    - Hace => Ejecuta la función una vez por cada elemento del array.
    - Devuelve => undefined. No crea un array nuevo.
*/

numeritos.forEach((x) =>{
    if(booleano){
        console.log(x);
    }
});

//Tarea: Hacer print de todas las pelis del dia 0 con for each
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

const peliculas: PeliculaT[] = [
    peli1,
    peli2,
    peli3
];

console.clear();

peliculas.forEach((x) => {
    console.log(`Peli: ${x.titulo}, released: ${x.released}.`)
});

console.clear();

//Map => recibe array, para crear un array del mismo tamaño del original?
//Sí. Recorre el array y devuelve un NUEVO array del mismo tamaño,
//transformando cada elemento según lo que retorne la función.

const listaRaritaFiba = numeritos.map((val) =>{
    if(val%2 == 0){
        return "El nº de esta posición es par";
    }

    return {
        msg: "Era nº impar",
        num: val
    };
});

console.log(listaRaritaFiba);

//Tarea: Lista de palabras y devolver una lista en la que el objeto sea name=palabra, lengthWord = numeroLetras
console.clear();

const listaPalabras = ["Crotolamo", "Permatrago", "Trujo"];

const nuevaLista = listaPalabras.map((val) =>{
    return {
        palabra: val,
        numeroLetras: val.length
    }
});

console.log(nuevaLista);
