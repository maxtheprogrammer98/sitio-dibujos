//----------- ATRIBUTOS (ELEMTOS DOM)------------------//
let a = {
    nav: document.querySelector("#nav"),
    botonMenu: document.querySelector("#menu"),
    login: document.querySelector("#login"),
    miCuenta: document.querySelector("#mi_cuenta"),
    estado: false,
    toggleEffect: false,
    mobileView: false,
    sticky: nav.offsetTop
}
//---------- METODOS (funcionalidades)----------------//
// metodo para cerrar / abrir menu (vista movil)
let m = {
    eventoBoton:function(){
        a.botonMenu.addEventListener("click", m.modificarMenu);
    },

    modificarMenu:function(){
        // menu para dispositivos moviles:
        if (a.estado == false){
            //significa que el menu esta abierto
            m.cerrarMenu();
        
        } else {
            //significa que el menu esta cerrado
            m.abrirMenu();
        }
    },

    cerrarMenu:function(){
        a.estado = true;
        a.nav.style.transition = "0.3s"
        a.nav.classList.remove("nav_vertical_visible");
        a.nav.classList.add("nav_vertical_hidden");
        a.botonMenu.textContent = "Abrir Menu";
        a.botonMenu.style.cursor = "pointer";
    },

    abrirMenu:function(){
        a.estado = false;
        a.nav.style.transition = "0.3s"
        a.nav.classList.remove("nav_vertical_hidden");
        a.nav.classList.add("nav_vertical_visible");
        a.botonMenu.textContent = "Cerrar Menu";
        a.botonMenu.style.cursor = "pointer";
    },

}

// funcion para crear efecto sticky:
window.onscroll = function() {
    efectoSticky();
}

function efectoSticky() {
    if(window.pageYOffset >= a.sticky){
        // cuando se scrolea hacia abajo
        a.nav.style.position = "fixed";
        console.log("fixed");
    
    } else {
        // cuando se vuelve a la posicion inicial
        a.nav.style.position = "relative";
        console.log("relative");
    }
}


m.eventoBoton();
