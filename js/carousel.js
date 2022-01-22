// Se define esta variable para crear o parar el serInterval del carousel.
let interval;

// Funcion que crea todo lo necesario para el funcionamiento del carousel.
function crearCarousel(){    
    const carousel = document.querySelector("#carousel");
    let carouselSeleccion = document.querySelectorAll(".proyecto");
    let carouselSeleccionUltima = carouselSeleccion[carouselSeleccion.length -1];
    let ancho = 100 * carouselSeleccion.length;
    carousel.style.width = `${ancho}%`;
    carousel.insertAdjacentElement("afterbegin", carouselSeleccionUltima);
    const proyectos = document.querySelectorAll(".contenedorProyecto");
    for (let index = 0; index < proyectos.length; index++) {
        proyectos[index].addEventListener("mouseenter", desactivarCarousel);
        proyectos[index].addEventListener("mouseleave", function(){
            Siguiente();
            activarCarousel();
        });
    };
    const botonDerecho = document.querySelector("#botonDerecho");
    const botonIzquierdo = document.querySelector("#botonIzquierdo");
    botonIzquierdo.addEventListener("mouseenter", desactivarCarousel);
    botonIzquierdo.addEventListener("mouseleave", activarCarousel);
    botonIzquierdo.addEventListener('click', function(){
        desactivarCarousel();
        Siguiente();
        setTimeout(activarCarousel, 5000);
    });
    botonDerecho.addEventListener("mouseenter", desactivarCarousel);
    botonDerecho.addEventListener("mouseleave", activarCarousel);
    botonDerecho.addEventListener("click", function(){
        desactivarCarousel();
        Anterior();
        setTimeout(activarCarousel, 5000);
    });
    activarCarousel();
}

// Funcion para pasar al siguiente elemento del carousel.
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

// Funcion para volver al anterior elemento del carousel.
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

// Funcion para parar el carousel.
function desactivarCarousel () {
    clearInterval(interval)
};

// Funcion para activar el carousel.
function activarCarousel () {
    interval = setInterval(Siguiente, 5000);
};