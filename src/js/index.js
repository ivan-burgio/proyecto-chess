// Invocar el HTML

tablero();
Partidas();

document.addEventListener('DOMContentLoaded', function () {

    const piezas = document.getElementsByClassName('piezas');
    const Casillas2 = document.getElementsByClassName('casilla');

    let piece = [];
    let casilla = [];

    //Itero sobre la lista para poder agregar un EventListener a cada objeto6655
    for (let i = 0; i < piezas.length; i++) {

        piezas[i].addEventListener('click', function () {
            // Selecciono el div por la clase
            const pieza = piezas[i].classList[2];

            //Formatear el array
            ClearArray()

            piece.push(pieza);

            console.log(piece);

        });

    };

    for (let j = 0; j < Casillas2.length; j++) {

        Casillas2[j].addEventListener('click', function () {

            const ccNumeros = Casillas2[j].classList[1];
            const ccLetras = Casillas2[j].classList[3];

            //Formatear el array
            ClearArray()

            casilla.push(ccNumeros);
            casilla.push(ccLetras);

            console.log(casilla);
            
        });
    };

    //Limpiar el Array
    function ClearArray() {
    
        piece = [];
        casilla = [];
    
    };
    
});

//Funciones

//Create table
function tablero() {

    const Tablero = document.querySelector('.chess');
    let i;

    for ( i = 1; i <= 8; i++) { // Numeros

        for (let a = 1; a <= 8; a++) { // Letras
           
            //Color of table
            Casillas(i, a);

        };

    };

    function Casillas(f, a) {

        const casillas1 = document.createElement('DIV');

        if( i % 2 === 0 ) {

            casillas1.classList.add('casilla', f, color1(a), numeroLetra(a));

        } else {

            casillas1.classList.add('casilla', f, color2(a), numeroLetra(a));

        };
        
        Tablero.appendChild(casillas1);
        
        if(i <= 2 || i >= 7) {
            piezas1();    
            
            function piezas1() {

                const piezas = document.createElement('DIV');
                if(i <= 2) {
                    piezas.classList.add('piezas', 'black');
                } else {
                    piezas.classList.add('piezas', 'white');
                };
                
                casillas1.appendChild(piezas);

            };

            for(let u = 0; u <= 4; u++) {

                console.log(u);

            };

        };
    
    };   

};

function color1(x) {
    
    if (x % 2 === 0) {
        return 'negro'
    } else {
        return 'blanco'
    };
};

function color2(y) {
    
    if (y % 2 === 0) {
        return 'blanco'
    } else {
        return 'negro'
    };
};

function numeroLetra(y) {
    
    const Letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    if (y >= 1 && y <= 8) {
        return Letras[y - 1];
    }
};

function Partidas() {
    
    //Insertar DIV
    const Historial = document.querySelector('.plays');
    const Jugadas = document.createElement('DIV');
    Jugadas.classList.add('party');
    Historial.appendChild(Jugadas);

    //Creo el titulo
    const Titulo = document.createElement('H2');
    Titulo.innerHTML = `Jugadas chetas`;
    Jugadas.appendChild(Titulo);

};


