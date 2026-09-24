//Written and Directed By Alvorak
const funcion = (x: number): number => {
    return x ** 2; //f(x) = x^2
};

const inicio = 0;
const final = 4;

// Crear puntos utilizando el extremo izquierdo
//area = anchura × altura
const crearPuntos = (
    inicio: number,
    final: number,
    numeroRectangulos: number
): number[] => {
    const puntos: number[] = []; //Array de puntos
    const anchura = (final - inicio) / numeroRectangulos; //Formula de anchura => anchura = (Final - incio) / nº rectangulos

    for (let i = 0; i < numeroRectangulos; i++) { //for para crear los puntos donde vamos a calcular la altura de cada rect
        puntos.push(inicio + i * anchura);
    }

    return puntos;
};


// Crear puntos utilizando el extremo derecho
//área = anchura × altura
const crearPuntosDerecha = (
    inicio: number,
    final: number,
    numeroRectangulos: number
): number[] => {
    const puntos: number[] = []; //Array de puntos
    const anchura = (final - inicio) / numeroRectangulos; //Formula de anchura => anchura = (Final - incio) / nº rectangulos

    for (let i = 1; i <= numeroRectangulos; i++) { //for para crear los puntos usando el extremo derecho de cada rect
        puntos.push(inicio + i * anchura); //Añadimos al array el punto correspondiente al extremo derecho
    }

    return puntos; //Devolvemos el array con todos los puntos
};

// Calcular las áreas de los rectángulos
const calcularAreas = (
    alturas: number[],
    anchura: number
): number[] => { //Devolveos array de number
    return alturas.map(altura => altura * anchura); //Formula basica de altura => con map devolvemos nuevo alturas
};


// Sumar las áreas
const sumarAreas = (areas: number[]): number => {
    
    let total = 0;

    areas.forEach(area => {
        total += area; //Sumamos areas
    });

    return total;
};


// Sooolucion:
const numeroRectangulos = 4;
const anchura = (final - inicio) / numeroRectangulos;


// Extremos izquierdos
const puntosIzquierda = crearPuntos(
    inicio,
    final,
    numeroRectangulos
);

const alturasIzquierda = puntosIzquierda.map(
    punto => funcion(punto)
);

const areasIzquierda = calcularAreas(
    alturasIzquierda,
    anchura
);

const areaIzquierda = sumarAreas(
    areasIzquierda
);


// Extremos derechos
const puntosDerecha = crearPuntosDerecha(
    inicio,
    final,
    numeroRectangulos
);

const alturasDerecha = puntosDerecha.map(
    punto => funcion(punto)
);

const areasDerecha = calcularAreas(
    alturasDerecha,
    anchura
);

const areaDerecha = sumarAreas(
    areasDerecha
);


// Logs de resultados
console.clear(); //Limpito todo primero
console.log(`Nº de rectangulos: ${numeroRectangulos}`);
console.log(`Anchura: ${anchura}`);

console.log("------------");

console.log("Puntos izquierda:", puntosIzquierda);
console.log("Alturas izquierda:", alturasIzquierda);
console.log("Areas izquierda:", areasIzquierda);

console.log("------------");

console.log("Puntos derecha:", puntosDerecha);
console.log("Alturas derecha:", alturasDerecha);
console.log("Areas derecha:", areasDerecha);

console.log("------------");

console.log(
    `Area utilizando extremos izquierdos: ${areaIzquierda}`
);

console.log(
    `Area utilizando extremos derechos: ${areaDerecha}`
);

console.log("Area exacta: 21.3333");


// Pruebas con otros datos:
console.log("------------");
console.log("Pruebas con distintos nº de rects:");
const pruebas = [1, 2, 4, 8, 16, 32, 100];

pruebas.forEach(cantidadRectangulos => {

    const anchuraPrueba =
        (final - inicio) / cantidadRectangulos;
    
    // Izquierda
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

    const totalIzquierda =
        sumarAreas(areasIzquierdaPrueba);


    // Derecha
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

    const totalDerecha =
        sumarAreas(areasDerechaPrueba);

    console.log(
        `${cantidadRectangulos} rectángulos -> ` +
        `izquierda: ${totalIzquierda.toFixed(4)} | ` +
        `derecha: ${totalDerecha.toFixed(4)}`
    );
});
