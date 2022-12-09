// ------------------ OBJETO ATRIBUTOS ------------------//
let at = {
    body: document.querySelector("body"),
    imagenes: document.querySelectorAll(".item_galeria img"),
    target: null,
    lightbox: null,
    modal: null,
    ID: null,
    wrapperCerrar:null,
    iconoCerrar: null,
    botonAnt: null,
    botonSig: null,
    contador: null
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
        console.log(at.target.id);
        //variables con elementos DOM a agregar:
        let imagen = at.target.outerHTML;
        let icono = "<img src='../Imagenes/cerrar-icon.png' alt='cerrar' id='icono_cerrar' >";
        let contenido = `<div id="contenedor_modal"> ${imagen} </div>`;
        let botones = `<div id='botones_modal'>
                        <img src='../Imagenes/anterior-icono.png' alt='boton' id='boton_ant'>
                        <img src='../Imagenes/sig-icono.png' alt='boton' id='boton_sig'>
                       </div>`
        
        elem.appendChild(document.createElement("div")).setAttribute("id", "modal");
        at.modal = document.querySelector("#modal");

        at.modal.appendChild(document.createElement("div")).setAttribute("id","wrapper_cerrar");
        at.wrapperCerrar = document.querySelector("#wrapper_cerrar");

        at.wrapperCerrar.insertAdjacentHTML("afterbegin", icono);
        at.iconoCerrar = document.querySelector("#icono_cerrar");
        
        at.modal.insertAdjacentHTML("beforeend",contenido);

        at.modal.insertAdjacentHTML("beforeend", botones);
        at.botonAnt = document.querySelector("#boton_ant");
        at.botonSig = document.querySelector("#boton_sig");

        at.botonAnt.addEventListener("click", me.imagenAnterior);
        at.botonSig.addEventListener("click", me.imagenSiguiente);

        at.iconoCerrar.addEventListener("click", me.cerrarModal);

        
    },

    cerrarModal:function(){
        at.body.removeChild(at.lightbox);
    },

    imagenAnterior:function(){
        // contador = parseInt(at.ID.replace("i",""));
        // contador -= 1
        // at.imagenes.forEach(element => {
        //     if (element.id == `i${contador}`){
        //         at.target = element;
        //     }
        // });
    }
}

me.asignarEventos();