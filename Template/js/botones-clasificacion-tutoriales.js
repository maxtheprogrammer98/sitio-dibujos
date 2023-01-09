// ELEMENTOS DOM
const labelCompletado = document.querySelector("#completado_label");
const botonCompletado = document.querySelector("#completado");
const estrellas = document.querySelectorAll(".estrellas");
const contenedorBotones = document.querySelector("#botones");
let clasificado = false;
let registrado = false;

// FUNCION BOTONES CLASIFICACION (mensaje de agradecimiento despues de calificar):
estrellas.forEach(estrella => {
    estrella.addEventListener("click", function(){
        // aviso usuario registrado
        if (registrado == true && clasificado == false){
            contenedorBotones.appendChild(document.createElement("p")).setAttribute("id","mensaje1");
            const mensaje1 = document.querySelector("#mensaje1");
            mensaje1.textContent = "gracias por clasificar!";
            clasificado = true;
        // aviso usuario no registrado
        }else if(registrado == false && clasificado == false){
            contenedorBotones.appendChild(document.createElement("p")).setAttribute("id","mensaje2");
            const mensaje2 = document.querySelector("#mensaje2");
            mensaje2.textContent = "debes estar registrado para poder calificar!";
            clasificado = true;
        }
    })
});

// FUNCION BOTON COMPLETADO (el fondo queda en verde al hacer click)
botonCompletado.addEventListener("click", function(){
    if (registrado == true) {
        botonCompletado.style.background = "rgb(0, 187, 66)";
        botonCompletado.style.color = "white";
    } else{
        labelCompletado.innerHTML = "¡debes estar registrado para acceder a esta funcion!";
    }
})