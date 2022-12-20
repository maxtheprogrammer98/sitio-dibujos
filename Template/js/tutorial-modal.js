// ELEMTOS DOM
let dom = {
    imagenes: document.querySelectorAll(".referencia"),
    body: document.querySelector("body"),
    target: null,
    lightbox: null,
    modal: null,
    distanciaY: null
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
        modal.crearLightbox();
    },

    crearLightbox:function(){
        dom.body.appendChild(document.createElement("div")).setAttribute("id","lightbox");
        dom.lightbox = document.querySelector("#lightbox");
        modal.crearModal(dom.lightbox);
    },

    crearModal:function(contenedor){
        contenedor.appendChild(document.createElement("div")).setAttribute("id","modal");
        dom.modal = document.querySelector("#modal");

        
    },


}

modal.imagenesEventos();