// ELEMTOS DOM
let dom = {
    imagenes: document.querySelectorAll(".referencia"),
    body: document.querySelector("body"),
    target: null,
    lightbox: null,
    modal: null,
    topDistanceY: 0,
    iconoCerrar: null
}

// FUNCIONALIDADES ELEMENTO MODAL:
let modal = {
    imagenesEventos:function(){
        dom.imagenes.forEach(element => {
            element.addEventListener("click", modal.getTarget);
        });
    
    },

    getTarget:function(img){
        dom.target = img.target;
        dom.topDistanceY = window.scrollY;
        modal.crearLightbox();
    },

    crearLightbox:function(){
        dom.body.appendChild(document.createElement("div")).setAttribute("id","lightbox");
        dom.lightbox = document.querySelector("#lightbox");
        dom.lightbox.style.paddingTop = `${dom.topDistanceY}px`;
        modal.crearModal(dom.lightbox);
        
    },

    crearModal:function(contenedor){
        // se agrega el contenedor padre via "appendchild"
        contenedor.appendChild(document.createElement("div")).setAttribute("id","modal");
        dom.modal = document.querySelector("#modal");
        // variables para agregar el contenido via "insertadjacentHTML"
        let cerrar_wrapper = `<div id="wrapper_cerrar">
                                <img src='../Imagenes/close-icon.png' alt='cerrar' id='icono_cerrar' >
                              </div>`;
        let contenido = `<div id="contenedor_modal">
                             ${dom.target.outerHTML}
                        </div>`;

        dom.modal.insertAdjacentHTML("afterbegin", cerrar_wrapper);
        dom.modal.insertAdjacentHTML("beforeend", contenido);
        
        //evento para cerrar el modal
        dom.iconoCerrar = document.querySelector("#icono_cerrar");
        dom.iconoCerrar.addEventListener("click",modal.cerrrarModal);
    },

    cerrrarModal:function(){
        dom.body.removeChild(dom.lightbox);
    }


}

modal.imagenesEventos();