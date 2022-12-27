// ELEMENTOS DOM
const indices = document.querySelectorAll("#indice ul li");
const materiales = document.querySelector("#indice1");
const paso1 = document.querySelector("#indice2");
const paso2 = document.querySelector("#indice3");
const paso3 = document.querySelector("#indice4");
const seccionMateriales = document.querySelector("#materiales");
const seccionPaso1 = document.querySelector("#paso1");
const seccionPaso2 = document.querySelector("#paso2");
const seccionPaso3 = document.querySelector("#paso3");
let resolucion = window.innerWidth;
let target = null;
let topDistance = null;

// FUNCIONALIDADES (lleva al usuario a la sección clickeada)
function AsignarEventos(){
    indices.forEach(element => {
        element.addEventListener("click", getTarget);
    });
}

function getTarget(item) {
    target = item.target;
    desplazar();
}

function desplazar(){
    // resolucion movil
    switch (target) {
        case materiales:
            window.scrollTo({
                top: seccionMateriales.offsetTop - 50,
                behavior: "smooth"
            });
            break;

        case paso1:
            window.scrollTo({
                top: seccionPaso1.offsetTop - 50,
                behavior: "smooth"
            });
            break;

        case paso2:
            window.scrollTo({
                top: seccionPaso2.offsetTop - 50,
                behavior: "smooth"
            });
            break;

        case paso3:
            window.scrollTo({
                top: seccionPaso3.offsetTop - 50,
                behavior: "smooth"
            });
            break;

        default:
            window.scrollTo(0,0);
            break;
    }
    
}

AsignarEventos();