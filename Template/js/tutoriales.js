// ----------------- DOM ---------------------//
let d = {
    tutoriales: document.querySelectorAll(".tutoriales_item"),
    buscador: document.querySelector("#campo_buscar"),
    botonBuscar: document.querySelector("#boton_buscar")
}
// ----------------- FUNCIONES ---------------------//
let f = {
    definirEvento:function(){
        d.botonBuscar.addEventListener("click", f.getValue);
    },

    getValue:function(){
        let valor = d.buscador.value.toLowerCase();
        d.tutoriales.forEach(element => {
            if (element.id.includes(valor)){
                element.style.display = "grid";
            
            } else{
                element.style.display = "none";
            }
        });
    }
}

f.definirEvento();