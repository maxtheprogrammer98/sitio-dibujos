// ELEMENTOS DOM:
const botonesSecciones = document.querySelectorAll("#cambiar_pagina p");
const botonMateriales = document.querySelector("#materiales_boton");
botonMateriales.style.filter = "opacity(100%)";
const secciones = document.querySelectorAll(".secciones");
const imagenPortada = document.querySelector("#imagen_main");
const seccionMateriales = document.querySelector("#materiales");
const seccionPaso1 = document.querySelector("#paso1");
const seccionPaso2 = document.querySelector("#paso2");
const seccionPaso3 = document.querySelector("#paso3");
const seccionVideo = document.querySelector("#video");
let botonSeleccionado = null;

// FUNCIONALIDADES:
function crearEventos(){
    botonesSecciones.forEach(element => {
        element.addEventListener("click", cambiarDisplay);
    });
}

function cambiarDisplay(boton){
    // muestra la seccion seleccionada ocultando las otras
    // (cambiando la prop. display):
    botonSeleccionado = boton.target.id;
    let botonSeleccionadoDOM = boton.target;
    // resalta el boton de la seccion seleccionada:
    botonesSecciones.forEach(element => {
        if (element == botonSeleccionadoDOM){
            element.style.filter = "opacity(100%)";
        } else {
            element.style.filter = "opacity(70%)";
        }
    });

    switch (botonSeleccionado){
        case "materiales_boton":
                imagenPortada.src = "../Imagenes/tutorial-3.jpg";
                seccionMateriales.style.display = "flex";
                seccionPaso1.style.display = "none";
                seccionPaso2.style.display = "none";
                seccionPaso3.style.display = "none";
                seccionVideo.style.display = "none";
            break;
        
        case "paso1_boton":
                imagenPortada.src = "../Imagenes/paso1-retratos.jpg";
                seccionMateriales.style.display = "none";
                seccionPaso1.style.display = "flex";
                seccionPaso2.style.display = "none";
                seccionPaso3.style.display = "none";
                seccionVideo.style.display = "none";
            break;

        case "paso2_boton":
                imagenPortada.src = "../Imagenes/paso2-retratos.jpg";
                seccionMateriales.style.display = "none";
                seccionPaso1.style.display = "none";
                seccionPaso2.style.display = "flex";
                seccionPaso3.style.display = "none";
                seccionVideo.style.display = "none";
            break;

        case "paso3_boton":
                imagenPortada.src = "../Imagenes/tutorial-3.jpg";
                seccionMateriales.style.display = "none";
                seccionPaso1.style.display = "none";
                seccionPaso2.style.display = "none";
                seccionPaso3.style.display = "flex";
                seccionVideo.style.display = "none";
            break;

        case "video_boton":
            //imagenPortada.style.display = "none";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "flex";
            break;
        
        default:
            imagenPortada.src = "../Imagenes/tutorial-3.jpg";
            seccionMateriales.style.display = "flex";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "none";
            break;
    }
}

crearEventos();