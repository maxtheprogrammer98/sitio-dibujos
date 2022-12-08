// ------------------ OBJETO ATRIBUTOS ------------------//
let at = {
    body: document.querySelector("body"),
    imagenes: document.querySelectorAll(".item_galeria img"),
    target: null,
    lightbox: null,
    modal: null,
    ID: null,
    wrapperCerrar:null,
    iconoCerrar: null
}

// ------------------ OBJETO METODOS ------------------//
let me = {
    asignarEventos:function(){
        let contador = 0;
        at.imagenes.forEach(element => {
            // variable de referencia:
            contador += 1;
            // a cada elemento se le asigna un evento click:
            element.addEventListener("click", me.getTarget);
            // se asigna un ID para cada imagen:
            element.id = `i${contador}`;
        });
    },

    getTarget:function(img){
        at.target = img.target;
        at.ID = img.target.id;
        me.crearLightbox();
    },

    crearLightbox:function(img){
        at.body.appendChild(document.createElement("div")).setAttribute("id","lightbox");
        at.lightbox = document.querySelector("#lightbox");

        me.crearModal(at.lightbox);
    },

    crearModal:function(elem){
        //variables con elementos DOM a agregar:
        let icono = "<img src='../Imagenes/cerrar-icon.png' alt='cerrar' id='icono_cerrar' >";

        elem.appendChild(document.createElement("div")).setAttribute("id", "modal");
        at.modal = document.querySelector("#modal");

        at.modal.appendChild(document.createElement("div")).setAttribute("id","wrapper_cerrar");
        at.wrapperCerrar = document.querySelector("#wrapper_cerrar");

        at.wrapperCerrar.insertAdjacentHTML("afterbegin", icono);
        at.iconoCerrar = document.querySelector("#icono_cerrar");
        
    }
}

me.asignarEventos();