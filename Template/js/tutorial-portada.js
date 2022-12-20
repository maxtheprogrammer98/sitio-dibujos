// ELEMTOS DOM:
let botonAnterior = document.querySelector("#img_previa");
let botonSiguiente = document.querySelector("#img_siguiente");
let portada = document.querySelector("#portada");
let contador = 0;

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