//----------- ATRIBUTOS (ELEMTOS DOM)------------------//
let a = {
    nav: document.querySelector("#nav"),
    botonMenu: document.querySelector("#menu"),
    login: document.querySelector("#login"),
    miCuenta: document.querySelector("#mi_cuenta"),
    estado: false
}
//---------- METODOS (funcionalidades)----------------//
let m = {
    eventoBoton:function(){
        a.botonMenu.addEventListener("click", m.modificarMenu);
    },

    modificarMenu:function(){
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
    },

    abrirMenu:function(){
        a.estado = false;
        a.nav.style.transition = "0.3s"
        a.nav.classList.remove("nav_vertical_hidden");
        a.nav.classList.add("nav_vertical_visible");
        a.botonMenu.textContent = "Cerrar Menu";
    }

}

m.eventoBoton();
