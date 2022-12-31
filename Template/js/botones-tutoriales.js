// ELEMENTOS DOM
const botonCompletado = document.querySelector("#completado");
const estrellas = document.querySelectorAll(".estrellas");
const contenedorBotones = document.querySelector("#botones");
let clasificado = false;

// FUNCION BOTONES CLASIFICACION (mensaje de agradecimiento despues de calificar):
estrellas.forEach(estrella => {
    estrella.addEventListener("click", function(){
        if (clasificado == false){
            let mensaje = `<p id='mensaje'> Gracias por calificar!</p>`;
            contenedorBotones.insertAdjacentHTML("beforeend", mensaje);
            clasificado = true;
        }
    })
});

// FUNCION BOTON COMPLETADO (el fondo queda en verde al hacer click)
botonCompletado.addEventListener("click", function(){
    botonCompletado.style.background = "rgb(0, 187, 66)";
    botonCompletado.style.color = "white";
})