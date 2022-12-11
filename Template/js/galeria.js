// ------------------ OBJETO ATRIBUTOS ------------------//
let at = {
    // elementos DOM:
    body: document.querySelector("body"),
    imagenes: document.querySelectorAll(".item_galeria img"),
    // atributos abstractos:
    target: null,
    lightbox: null,
    modal: null,
    ID: null,
    wrapperCerrar:null,
    iconoCerrar: null,
    botonAnt: null,
    botonSig: null,
    contador: 0,
    // propiedades para configurar ubicacion:
    topScrollPosition: null,
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
        at.contador = parseInt(at.ID.replace("i",""));
        at.topScrollPosition = window.pageYOffset
        me.crearLightbox();
    },

    crearLightbox:function(img){
        // Se crea lightbox (fondo semi-transparente)
        at.body.appendChild(document.createElement("div")).setAttribute("id","lightbox");
        at.lightbox = document.querySelector("#lightbox");

        // se especifica la ubicacion en la que se mostrara el elemento modal
        at.topScrollPosition += 50;
        at.lightbox.style.paddingTop = `${at.topScrollPosition}px`;

        me.crearModal(at.lightbox);
    },

    crearModal:function(elem){
        //variables con elementos DOM a agregar:
        let imagen = at.target.outerHTML;
        let icono = "<img src='../Imagenes/cerrar-icon.png' alt='cerrar' id='icono_cerrar' >";
        let contenido = `<div id="contenedor_modal"> ${imagen} </div>`;
        let botones = `<div id='botones_modal'>
                        <img src='../Imagenes/anterior-icono.png' alt='boton' id='boton_ant'>
                        <img src='../Imagenes/sig-icono.png' alt='boton' id='boton_sig'>
                       </div>`
        
        // se agrega modal via appendchild:
        elem.appendChild(document.createElement("div")).setAttribute("id", "modal");
        at.modal = document.querySelector("#modal");

        //se define como se mostrara el elemento modal dependiendo de la 
        //resolucion del dispositivo:


        at.modal.appendChild(document.createElement("div")).setAttribute("id","wrapper_cerrar");
        at.wrapperCerrar = document.querySelector("#wrapper_cerrar");

        at.wrapperCerrar.insertAdjacentHTML("afterbegin", icono);
        at.iconoCerrar = document.querySelector("#icono_cerrar");
        
        at.modal.insertAdjacentHTML("beforeend",contenido);
        at.contenedorImagen = document.querySelector("#contenedor_modal");

        at.modal.insertAdjacentHTML("beforeend", botones);
        at.botonAnt = document.querySelector("#boton_ant");
        at.botonSig = document.querySelector("#boton_sig");

        // FUNCIONALIDA PARA CAMBIAR DE IMAGEN (siguiente / anterior)
        at.botonAnt.addEventListener("click", function imagenAnterior(){
            if (at.contador > 0){
                at.contador --;
                at.target = document.querySelector(`#i${at.contador}`);
                contenido = `<div id="contenedor_modal"> ${at.target.outerHTML} </div>`;
                at.modal.insertAdjacentHTML("beforeend",contenido);
                console.log(at.contador);
            }
        });

        at.botonSig.addEventListener("click", function imagenSiguiente(){
            if (at.contador < at.imagenes.length){
                at.contador ++;
                at.target = document.querySelector(`#i${at.contador}`);
                contenido = `<div id="contenedor_modal"> ${at.target.outerHTML} </div>`;
                at.modal.insertAdjacentHTML("beforeend",contenido);
                console.log(at.contador);
            }
    
        });

        at.iconoCerrar.addEventListener("click", me.cerrarModal);
        

        
    },

    cerrarModal:function(){
        // cierra la ventana modal
        at.body.removeChild(at.lightbox);
        // se reseta el contador
        at.contador = 0;
    }
}

me.asignarEventos();