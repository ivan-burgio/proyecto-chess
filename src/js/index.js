// Invocar el HTML

tablero();
Partidas();

const piezas = document.getElementsByClassName('piezas');

//Create events


//Itero sobre la lista para poder agregar un EventListener a cada objeto
for( let i = 0; i < piezas.length; i++ ) {
    
    piezas[i].addEventListener("click", function() {
        //Selecciono el div por la clase
        console.log('Te tengo...');
        /*
        
        La idea es que el div seleccionado se añide a la casilla seleccionada por el valor de su clase.
        Pero pimba, un asadito, toy todo sucio asi que me wua a bañar y a teneder la cama jeje.
        PD: Ifier si ves esto sos tremendo puto que nunca se mete al proyecto y tas re deja tirado como el Lock
        
        */

    });

};



//Funciones


//Create table
function tablero() {
    const Tablero = document.querySelector('.chess');

    for (var i = 1; i <= 8; i++) { // Numeros

        if (i <= 1) {

            for (let a = 1; a <= 8; a++) { // Letras
                //Color of table
                const Casillas = document.createElement('DIV');
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);
                
                //Create parts

                const piezas2 = document.createElement('DIV');
                piezas2.classList.add('piezas', 'white');
                Casillas.appendChild(piezas2);

            };

        } else if (i <= 2) {

            for (let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);
                
                //Create parts

                const piezas2 = document.createElement('DIV');
                piezas2.classList.add('piezas', 'white', 'peones');
                Casillas.appendChild(piezas2);

            };

        } else if (i <= 3) {

            for (let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color2(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);
            };

        } else if (i <= 4) {

            for (let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);
            };

        } else if (i <= 5) {

            for (let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color2(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);
            };

        } else if (i <= 6) {

            for (let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);
            };

        } else if (i <= 7) {

            for (let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color2(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color1(a));
                Tablero.appendChild(Casillas);

                //Create parts

                const piezas2 = document.createElement('DIV');
                piezas2.classList.add('piezas', 'black', 'peones');
                Casillas.appendChild(piezas2);
            };

        } else if (i <= 8) {

            for (let a = 1; a <= 8; a++) { // Letras
                const Casillas = document.createElement('DIV');
                Casillas.classList.remove(color1(a));
                Casillas.classList.add('casilla', i, numeroLetra(a), color2(a));
                Tablero.appendChild(Casillas);

                //Create parts

                const piezas2 = document.createElement('DIV');
                piezas2.classList.add('piezas', 'black');
                Casillas.appendChild(piezas2);

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

//Function for pieces 


