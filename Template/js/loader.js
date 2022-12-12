//------------------- ATRIBUTOS -----------------------//
let atrib = {
    body: document.querySelector("body"),
    lightbox: null,
    loader: null,
};

//------------------- METODOS -----------------------//

let metod = {
    crearLoader:function(){
        // 1 - se crean los componentes de la animacion:
        atrib.body.appendChild(document.createElement("div")).setAttribute("id","lightbox_loader");
        atrib.lightbox = document.querySelector("#lightbox_loader");

        atrib.lightbox.appendChild(document.createElement("div")).setAttribute("id","loader");
        atrib.loader = document.querySelector("#loader");

        //se agregan los estilos via SCSS
        atrib.lightbox.classList.add("lightbox_loader");
        atrib.loader.classList.add("loader");
    },

    finLoader:function(){
        // 2 - una vez que la pagina esta cargada el loader se detiene
        atrib.body.removeChild(atrib.lightbox);
    }
};

metod.crearLoader();