// ELEMENTOS DOM:
const body = document.querySelector("body");
const imagen = document.querySelector("#imagen_main");
let scrollDistance = null;
let lightbox = null;
let modal = null;
let iconoCerrar = null;
const resolucionMovil = window.matchMedia("(max-width: 768px)");
const resolucionGrande = window.matchMedia("(min-width: 768px)");

// FUNCIONALIDADES (para crear modal):
function agregandoEvento(){
    imagen.addEventListener("click", crearModal);
    scrollDistance = imagen.getBoundingClientRect();
}

function crearModal(){
    // 1ro se crea el "fondo" (lightbox)
    body.appendChild(document.createElement("div")).setAttribute("id","lightbox");
    lightbox = document.querySelector("#lightbox");
    if (resolucionMovil.matches) {
        lightbox.style.paddingTop = `${scrollDistance.top + 75}px`;
    } else if(resolucionGrande.matches){
        lightbox.style.paddingTop = `${scrollDistance.top - 200}px`;
    }
    
    // 2do se crea la ventana modal
    lightbox.appendChild(document.createElement("div")).setAttribute("id","modal");
    modal = document.querySelector("#modal");

    // 3ro se agregan los elementos de la ventana (imagen & icono cerrar)
    // estos elementos se insertan via "insertAdjacentHTML"
    let wrapperCerrar = `<div id="wrapper_cerrar">
                            <img src = "../Imagenes/close-icon.png" alt="cerrar" id="icono_cerrar">
                        </div>`;
    let imagenModal = `<div id="contenedor_modal">
                            ${imagen.outerHTML}
                        </div>`;

    modal.insertAdjacentHTML("afterbegin", wrapperCerrar);
    modal.insertAdjacentHTML("afterbegin", imagenModal);

    //funcion para cerrar ventana modal:
    iconoCerrar = document.querySelector("#icono_cerrar");
    iconoCerrar.addEventListener("click", ()=>{
        body.removeChild(lightbox);
    })
}

agregandoEvento();