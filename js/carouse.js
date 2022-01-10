const carousel = document.querySelector("#carousel");
let carouselSeleccion = document.querySelectorAll(".proyecto");
let carouselSeleccionUltima = carouselSeleccion[carouselSeleccion.length -1];
console.log(carousel);
const botonDerecho = document.querySelector("#botonDerecho");
const botonIzquierdo = document.querySelector("#botonIzquierdo");

let ancho = (100 * carouselSeleccion.length) + "%";
carousel.style.width = ancho;

carousel.insertAdjacentElement("afterbegin", carouselSeleccionUltima);

function Siguiente() {
    let carouselSeleccionPrimera = document.querySelectorAll(".proyecto")[0];
    carousel.style.marginLeft = "-200%";
    carousel.style.transition = "all 0.5s";
    setTimeout(function(){
        carousel.style.transition = "none";
        carousel.insertAdjacentElement("beforeend", carouselSeleccionPrimera);
        carousel.style.marginLeft = "-100%";
    }, 500);
}

function Anterior() {
    let carouselSeleccion = document.querySelectorAll(".proyecto");
    let carouselSeleccionPrimera = carouselSeleccion[carouselSeleccion.length -1];
    carousel.style.marginLeft = "0";
    carousel.style.transition = "all 0.5s";
    setTimeout(function(){
        carousel.style.transition = "none";
        carousel.insertAdjacentElement("afterbegin", carouselSeleccionPrimera);
        carousel.style.marginLeft = "-100%";
    }, 500);
}

botonIzquierdo.addEventListener('click', function(){
    Siguiente();
});

botonDerecho.addEventListener("click", function(){
    Anterior();
});

/*setInterval(function(){
    Siguiente();
}, 5000);*/