function tablero(){const e=document.querySelector(".chess");let t;for(t=1;t<=8;t++)if(t<=1)for(let e=1;e<=8;e++)n(t,e);else if(t<=2)for(let e=1;e<=8;e++)n(t,e);else if(t<=3)for(let e=1;e<=8;e++)n(t,e);else if(t<=4)for(let e=1;e<=8;e++)n(t,e);else if(t<=5)for(let e=1;e<=8;e++)n(t,e);else if(t<=6)for(let e=1;e<=8;e++)n(t,e);else if(t<=7)for(let e=1;e<=8;e++)n(t,e);else if(t<=8)for(let e=1;e<=8;e++)n(t,e);function n(n,o){const l=document.createElement("DIV");if(t%2==0?l.classList.add("casilla",n,color1(o),numeroLetra(o)):l.classList.add("casilla",n,color2(o),numeroLetra(o)),e.appendChild(l),t<=2||t>=7){!function(){const e=document.createElement("DIV");t<=2?e.classList.add("piezas","black"):e.classList.add("piezas","white");l.appendChild(e)}()}}}function color1(e){return e%2==0?"negro":"blanco"}function color2(e){return e%2==0?"blanco":"negro"}function numeroLetra(e){if(e>=1&&e<=8)return["a","b","c","d","e","f","g","h"][e-1]}function Partidas(){const e=document.querySelector(".plays"),t=document.createElement("DIV");t.classList.add("party"),e.appendChild(t);const n=document.createElement("H2");n.innerHTML="Jugadas chetas",t.appendChild(n)}tablero(),Partidas(),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementsByClassName("piezas"),t=document.getElementsByClassName("casilla");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){console.log("Te tengo...")}));for(let e=0;e<t.length;e++)t[e].addEventListener("click",(function(){const n=t[e].classList[1],o=t[e].classList[2];console.log(n+o)}))}));