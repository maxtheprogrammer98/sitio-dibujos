// ELEMTOS DOM:
const botonAnterior = document.querySelector("#img_previa");
const botonSiguiente = document.querySelector("#img_siguiente");
const portada = document.querySelector("#portada");
const botonCompletado = document.querySelector("#completado");
const estrellas = document.querySelectorAll(".estrellas");
const contenedorBotones = document.querySelector("#botones");
let contador = 0;
let clasificado = false;

// FUNCIONES PORTADA:
botonAnterior.addEventListener("click",function(){
    if (contador == 0){
        portada.style.backgroundPosition = "left center";
        portada.style.transition = "0.5s";
        contador -= 1;
    
    } else if(contador > 0){
        portada.style.backgroundPosition = "center center";
        portada.style.transition = "0.5s";
        contador -= 1;
    }
})

botonSiguiente.addEventListener("click",function(){
    if (contador == 0){
        portada.style.backgroundPosition = "right center";
        portada.style.transition = "0.5s";
        contador += 1;
    
    } else if(contador < 0){
        portada.style.backgroundPosition = "center center";
        portada.style.transition = "0.5s";
        contador += 1;
    }
})

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