let interval;
function crearCarousel(){    
    const carousel = document.querySelector("#carousel");
    let carouselSeleccion = document.querySelectorAll(".proyecto");
    let carouselSeleccionUltima = carouselSeleccion[carouselSeleccion.length -1];
    carousel.insertAdjacentElement("afterbegin", carouselSeleccionUltima);
    const proyectos = document.querySelectorAll(".contenedorProyecto");
    for (let index = 0; index < proyectos.length; index++) {
        proyectos[index].addEventListener("mouseenter", desactivarCarousel);
        proyectos[index].addEventListener("mouseleave", function(){
            Siguiente();
            activarCarousel();
        });
    };
    interval = setInterval(Siguiente, 5000);
}

function Siguiente() {
    let carouselSeleccionPrimera = document.querySelectorAll(".proyecto")[0];
    carousel.style.marginLeft = "-200%";
    carousel.style.transition = "all 0.5s";
    setTimeout(function(){
        carousel.style.transition = "none";
        carousel.insertAdjacentElement("beforeend", carouselSeleccionPrimera);
        carousel.style.marginLeft = "-100%";
    }, 500);
};

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
};

function desactivarCarousel () {
    clearInterval(interval)
};

function activarCarousel () {
    interval = setInterval(Siguiente, 5000);
};

const botonDerecho = document.querySelector("#botonDerecho");
const botonIzquierdo = document.querySelector("#botonIzquierdo");
botonIzquierdo.addEventListener('click', function(){
    desactivarCarousel();
    Siguiente();
    setTimeout(activarCarousel, 5000);
});
botonDerecho.addEventListener("click", function(){
    desactivarCarousel();
    Anterior();
    setTimeout(activarCarousel, 5000);
});