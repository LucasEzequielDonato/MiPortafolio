const carouselConocimientos = document.querySelector("#carouselConocimientos");
let carousel2Seleccion = document.querySelectorAll(".conocimiento");
let carousel2SeleccionUltima = carousel2Seleccion[carousel2Seleccion.length -1];
let anchoCarouselConocimientos = (25 * carousel2Seleccion.length) + "%";
carouselConocimientos.style.width = anchoCarouselConocimientos;

carouselConocimientos.insertAdjacentElement("afterbegin", carousel2SeleccionUltima);

function Siguiente2() {
    let carousel2SeleccionPrimera = document.querySelectorAll(".conocimiento")[0];
    carouselConocimientos.style.marginLeft = "-50%";
    carouselConocimientos.style.transition = "all 0.5s";
    setTimeout(function(){
        carouselConocimientos.style.transition = "none";
        carouselConocimientos.insertAdjacentElement("beforeend", carousel2SeleccionPrimera);
        carouselConocimientos.style.marginLeft = "-25%";
    }, 500);
}

setInterval(function(){
    Siguiente2();
}, 5000);