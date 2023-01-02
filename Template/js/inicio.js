// ELEMENTOS DOM:
let botonAnterior = document.querySelector("#presentacion #img_anterior");
let botonSiguiente = document.querySelector("#presentacion #img_siguiente");
let portada = document.querySelector("#presentacion");
let contador = 50; //valor por default (posicion central)

// FUNCIONES PORTADA:
botonAnterior.addEventListener("click",()=>{
    if (contador > 10) {
        contador -= 20;
        portada.style.backgroundPosition = `${contador}%`;
        portada.style.transition = "0.5s";
    }
})

botonSiguiente.addEventListener("click",()=>{
    if (contador < 90) {
        contador += 20;
        portada.style.backgroundPosition = `${contador}%`;
        portada.style.transition = "0.5s";
    }
})


