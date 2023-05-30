// Invocar el HTML

tablero();
Partidas();

document.addEventListener('DOMContentLoaded', function () {

    const piezas = document.getElementsByClassName('piezas');
    const Casillas2 = document.getElementsByClassName('casilla');

    //Create events


    //Itero sobre la lista para poder agregar un EventListener a cada objeto
    for (let i = 0; i < piezas.length; i++) {

        piezas[i].addEventListener('click', function () {
            // Selecciono el div por la clase
            console.log('Te tengo...');

            /*
            
            La idea es que el div seleccionado se añide a la casilla seleccionada por el valor de su clase.
            Pero pimba, un asadito, toy todo sucio asi que me wua a bañar y a teneder la cama jeje.
            PD: Ifier si ves esto sos tremendo puto que nunca se mete al proyecto y tas re deja tirado como el Lock
            
            */

        });

    };

    for (let j = 0; j < Casillas2.length; j++) {

        Casillas2[j].addEventListener('click', function () {

            const ccNumeros = Casillas2[j].classList[1];
            const ccLetras = Casillas2[j].classList[2];





            console.log(ccNumeros + ccLetras);

        });
    };

});

//Funciones


//Create table
function tablero() {

    const Tablero = document.querySelector('.chess');
    let i;

    for ( i = 1; i <= 8; i++) { // Numeros

        if (i <= 1) {

            for (let a = 1; a <= 8; a++) { // Letras
                //Color of table
                Casillas(i, a);

            };

        } else if (i <= 2) {

            for (let a = 1; a <= 8; a++) { // Letras
                
                Casillas(i, a);

            };

        } else if (i <= 3) {

            for (let a = 1; a <= 8; a++) { // Letras
                
                Casillas(i, a);
                
            };

        } else if (i <= 4) {

            for (let a = 1; a <= 8; a++) { // Letras
                
                Casillas(i, a);

            };

        } else if (i <= 5) {

            for (let a = 1; a <= 8; a++) { // Letras
                
                Casillas(i, a);
                
            };

        } else if (i <= 6) {

            for (let a = 1; a <= 8; a++) { // Letras
                
                Casillas(i ,a);
                
            };

        } else if (i <= 7) {

            for (let a = 1; a <= 8; a++) { // Letras
                
                Casillas(i, a);

            };

        } else if (i <= 8) {

            for (let a = 1; a <= 8; a++) { // Letras
                
                Casillas(i, a);

            };

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



