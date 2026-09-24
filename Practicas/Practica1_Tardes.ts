//Written And Directed By Alvorak

console.clear();

const funcion = (x: number): number => {
    return x ** 2;
};

//∫₀⁴ x² dx
const inicio = 0;
const final = 4;
const numeroRectangulosConst = 500; // para la solución mas aprox


// ==================================================
// PARTE 1 - EJERCICIO PRINCIPAL
// ==================================================

//anchura = (final - inicio) / nºrectangulos
//área = anchura × altura

/*
Crea una función flecha llamada crearPuntos.

La función deberá recibir:

el inicio del intervalo;
el final del intervalo;
el número de rectángulos.

Y deberá devolver un array con los puntos que utilizaremos
para calcular las alturas.
*/

const crearPuntos = (
    inicio: number,
    final: number,
    numeroRectangulos: number
): number[] => {

    const puntos: number[] = []; //Array de puntos
    const anchura = (final - inicio) / numeroRectangulos;

    Array(numeroRectangulos).fill(0).forEach((valor, indice) => {
        puntos.push(inicio + indice * anchura);
    });

    return puntos;
};


const puntos = crearPuntos(
    inicio,
    final,
    numeroRectangulosConst
);

console.log("Puntos:", puntos);


/*
Una vez que tenemos los puntos, necesitamos calcular
cuánto vale la función en cada uno de ellos.

Para ello utilizaremos map().
*/

const alturas = puntos.map(
    punto => funcion(punto)
);

console.log("Alturas:", alturas);


/*
Ahora necesitamos calcular el área de cada rectángulo.

Primero debemos calcular la anchura:
*/

const numeroRectangulos = numeroRectangulosConst;

const anchura = (final - inicio) / numeroRectangulos;

console.log("Anchura:", anchura);


const calcularAreas = (
    alturas: number[],
    anchura: number
): number[] => {

    return alturas.map(
        altura => altura * anchura
    );
};


const areas = calcularAreas(
    alturas,
    anchura
);

console.log("Áreas:", areas);


/*
Ahora tenemos un array con las áreas de todos los rectángulos.

Crea una función flecha llamada sumarAreas:
*/

const sumarAreas = (areas: number[]): number => {

    let total = 0;

    areas.forEach((x) => {
        total += x;
    });

    return total;
};


const areaIzquierda = sumarAreas(areas);

console.log("------------");

console.log(
    "Área utilizando extremos izquierdos:",
    areaIzquierda
);


// ==================================================
// PARTE 2 - EXTRA
// RECTÁNGULOS UTILIZANDO EL EXTREMO DERECHO
// ==================================================

/*
En vez de utilizar el extremo izquierdo de cada rectángulo:

[0,1] -> 0
[1,2] -> 1
[2,3] -> 2
[3,4] -> 3

Vamos a utilizar el extremo derecho:

[0,1] -> 1
[1,2] -> 2
[2,3] -> 3
[3,4] -> 4
*/


const crearPuntosDerecha = (
    inicio: number,
    final: number,
    numeroRectangulos: number
): number[] => {

    const puntos: number[] = []; //Array de puntos
    const anchura = (final - inicio) / numeroRectangulos;

    Array(numeroRectangulos).fill(0).forEach((valor, indice) => {

        //Sumamos 1 al indice para usar el extremo derecho
        puntos.push(inicio + (indice + 1) * anchura);

    });

    return puntos;
};


const puntosDerecha = crearPuntosDerecha(
    inicio,
    final,
    numeroRectangulosConst
);

console.log("------------");

console.log("Puntos derecha:", puntosDerecha);


//Calculamos las alturas utilizando los puntos de la derecha

const alturasDerecha = puntosDerecha.map(
    punto => funcion(punto)
);

console.log("Alturas derecha:", alturasDerecha);


//Calculamos las áreas de los rectángulos de la derecha

const areasDerecha = calcularAreas(
    alturasDerecha,
    anchura
);

console.log("Áreas derecha:", areasDerecha);


//Sumamos todas las áreas

const areaDerecha = sumarAreas(
    areasDerecha
);


//Comparación final

console.log("------------");

console.log(
    "Área utilizando extremos izquierdos:",
    areaIzquierda
);

console.log(
    "Área utilizando extremos derechos:",
    areaDerecha
);

console.log(
    "Área exacta: 21.3333"
);


// ==================================================
// EXTRA - PROBAR DISTINTOS NÚMEROS DE RECTÁNGULOS
// ==================================================

console.log("------------");

console.log(
    "Pruebas con distintos nº de rectángulos:"
);


const pruebas = [
    1,
    2,
    4,
    8,
    16,
    32,
    100
];


pruebas.forEach((cantidadRectangulos) => {

    const anchuraPrueba =
        (final - inicio) / cantidadRectangulos;


    //Extremo izquierdo

    const puntosIzquierdaPrueba = crearPuntos(
        inicio,
        final,
        cantidadRectangulos
    );

    const alturasIzquierdaPrueba =
        puntosIzquierdaPrueba.map(
            punto => funcion(punto)
        );

    const areasIzquierdaPrueba = calcularAreas(
        alturasIzquierdaPrueba,
        anchuraPrueba
    );

    const totalIzquierda = sumarAreas(
        areasIzquierdaPrueba
    );


    //Extremo derecho

    const puntosDerechaPrueba = crearPuntosDerecha(
        inicio,
        final,
        cantidadRectangulos
    );

    const alturasDerechaPrueba =
        puntosDerechaPrueba.map(
            punto => funcion(punto)
        );

    const areasDerechaPrueba = calcularAreas(
        alturasDerechaPrueba,
        anchuraPrueba
    );

    const totalDerecha = sumarAreas(
        areasDerechaPrueba
    );


    console.log(
        `${cantidadRectangulos} rectángulos -> ` +
        `izquierda: ${totalIzquierda.toFixed(4)} | ` +
        `derecha: ${totalDerecha.toFixed(4)}`
    );

});
