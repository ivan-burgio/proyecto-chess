// Invocar el HTML

tablero();
Partidas();
createParts(i)

const Chess = document.querySelector('.chess');
const Plays = document.querySelector('.plays');


//Funciones


//Create table
function tablero() {
    const Tablero = document.querySelector('.chess');

    for( var i = 1; i <= 8; i++ ) { // Numeros
        
        if( i <= 1 ) {

            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);
            };

        } else if( i <=  2) {
            
            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);
            };
        } else if( i <= 3 ) {

            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color2(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);
            };

        } else if( i <= 4 ) {

            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);
            };

        } else if( i <= 5 ) {

            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color2(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);
            };

        } else if( i <= 6 ) {

            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);
            };

        } else if( i <= 7) {

            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color2(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);
            };

        } else if( i <= 8) {

            for(let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);

            };

        };

    };               
    
};


function color1(x) {
    if(x % 2 === 0) {
        return 'negro'
    } else {
        return 'blanco'
    };
};   


function color2(y) {
    if(y % 2 === 0) {
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


//Create parts
function createParts(x) {

    if (x <= 2) {

        for (let j = 1; j <= 2; j++) {

            const tablero = document.getElementsByClassName('casilla');
                
                for(let h = 1; h <= 8; h++) {
                    const parts = document.createElement('DIV');
                    parts.classList.add('piezas');
                    tablero.appendChild(parts);
                };
            
        };

    }

    

};




//Create plays

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



