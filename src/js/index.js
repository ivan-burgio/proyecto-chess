// Invocar el HTML

tablero();

const Chess = document.querySelector('.chess');
const Plays = document.querySelector('.plays');


//Funciones

function tablero() {
    const Tablero = document.querySelector('.chess');

    for(let i = 1; i <= 8; i++) { // Numeros

        for(let a = 1; a <= 8; a++) { // Letras
            const Casillas = document.createElement('DIV');
            Casillas.classList.add('casilla', i, numeroLetra(a));
            Tablero.appendChild(Casillas);
        }
    };
};

function colorCasilla1(i) {
    const casilla = document.querySelector('.' + i);
    if((i % 2) === 0) {
        casilla.classList.add('blanco');
    } else {
        casilla.classList.add('negro');
    }
}

function colorCasilla2(i) {
    const casilla = document.querySelector('.' + i);
    if((i % 2) !== 0) {
        casilla.classList.add('negro');
    } else {
        casilla.classList.add('blanco');
    }
}

function numeroLetra(y) {
    const Letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    
    if (y >= 1 && y <= 8) {
        return Letras[y - 1];
    }
};