// ELEMENTOS DOM:
const cuerpo = document.querySelector("body");
const botonesSecciones = document.querySelectorAll("#cambiar_pagina #paginas img");
const botonesFlechas = document.querySelectorAll(".flechas");
const botonMateriales = document.querySelector("#materiales_boton");
botonMateriales.style.filter = "opacity(100%)";
const secciones = document.querySelectorAll(".secciones");
const imagenPortada = document.querySelector("#imagen_main");
const seccionMateriales = document.querySelector("#materiales");
const seccionPaso1 = document.querySelector("#paso1");
const seccionPaso2 = document.querySelector("#paso2");
const seccionPaso3 = document.querySelector("#paso3");
const seccionVideo = document.querySelector("#video");
const resMovil = window.matchMedia("(max-width: 768px)")
let botonSeleccionado = null;
let contador = 1;
let flechaSeleccionada = null;

// FUNCIONALIDADES:
function cambiarIndice(botones,seleccion){
    botones.forEach(element => {
        if (element.id == seleccion) {
            element.style.filter = "grayscale(0%) opacity(100%)";
        } else {
            element.style.filter = "grayscale(100%) opacity(70%)";
        }
    });
}

function crearEventos(){
    botonesSecciones.forEach(element => {
        element.addEventListener("click", cambiarDisplay);
    });

    botonesFlechas.forEach(element => {
        element.addEventListener("click", cambiarContador);
    });
}

function cambiarContador(boton){
    // se identifica cual de los 2 botones se selecciono
    flechaSeleccionada = boton.target.id;
    if (flechaSeleccionada == "prev_seccion" && contador >= 1){
        contador -= 1;
    } else if (flechaSeleccionada == "next_seccion" && contador <= 5){
        contador += 1;
    }
    // se cambia la seccion en base al valor del contador
    switch (contador) {
        // materiales
        case 1:
            imagenPortada.src = "../Imagenes/tutorial-3.jpg";
            seccionMateriales.style.display = "flex";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "none";
            cambiarIndice(botonesSecciones, "materiales_boton");
            break;
        // paso 1
        case 2:
            imagenPortada.src = "../Imagenes/paso1-retratos.jpg";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "flex";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "none";
            cambiarIndice(botonesSecciones, "paso1_boton");
            break;
        // paso 2
        case 3:
            imagenPortada.src = "../Imagenes/paso2-retratos.jpg";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "flex";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "none";
            cambiarIndice(botonesSecciones, "paso2_boton");
            break;
        // paso 3
        case 4:
            imagenPortada.src = "../Imagenes/tutorial-3.jpg";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "flex";
            seccionVideo.style.display = "none";
            cambiarIndice(botonesSecciones, "paso3_boton");
            break;
        // video
        case 5:
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "flex";
            cambiarIndice(botonesSecciones, "video_boton");
            break;
        // portada incial
        default:
            imagenPortada.src = "../Imagenes/tutorial-3.jpg";
            seccionMateriales.style.display = "flex";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "none";
            cambiarIndice(botonesSecciones, "materiales_boton");
            break;
    }
}

function cambiarDisplay(boton){
    //regresa al tope superior de la pagina (solo en disp. moviles)
    if(resMovil.matches){
        window.scrollTo({
            top: 50,
            behavior: "smooth"
        });
    }
    // muestra la seccion seleccionada ocultando las otras
    // (cambiando la prop. display):
    botonSeleccionado = boton.target.id;
    let botonSeleccionadoDOM = boton.target;
    // resalta el boton de la seccion seleccionada:
    botonesSecciones.forEach(element => {
        if (element == botonSeleccionadoDOM){
            element.style.filter = "grayscale(0%) opacity(100%)";
        } else {
            element.style.filter = "grayscale(100%) opacity(70%)";
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
            contador = 1;
            break;
        
        case "paso1_boton":
            imagenPortada.src = "../Imagenes/paso1-retratos.jpg";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "flex";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "none";
            contador = 2;
            break;

        case "paso2_boton":
            imagenPortada.src = "../Imagenes/paso2-retratos.jpg";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "flex";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "none";
            contador = 3;
            break;

        case "paso3_boton":
            imagenPortada.src = "../Imagenes/tutorial-3.jpg";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "flex";
            seccionVideo.style.display = "none";
            contador = 4;
            break;

        case "video_boton":
            imagenPortada.src = "../Imagenes/tutorial-3.jpg";
            seccionMateriales.style.display = "none";
            seccionPaso1.style.display = "none";
            seccionPaso2.style.display = "none";
            seccionPaso3.style.display = "none";
            seccionVideo.style.display = "flex";
            contador = 5;
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

function cambiarIndice(botones,seleccion){
    botones.forEach(element => {
        if (element.id == seleccion) {
            element.style.filter = "grayscale(0%) opacity(100%)";
        } else {
            element.style.filter = "grayscale(100%) opacity(70%)";
        }
    });
}

crearEventos();