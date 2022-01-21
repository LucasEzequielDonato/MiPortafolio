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

function NoRepetir () {
    console.log("Me llamaron a no repetir")
    repetir = false;
    console.log(repetir);
};

function Repetir () {
    console.log("Me llamaron a repetir")
    repetir = true;
    console.log(repetir);
};

const botonDerecho = document.querySelector("#botonDerecho");
const botonIzquierdo = document.querySelector("#botonIzquierdo");
botonIzquierdo.addEventListener('click', function(){
    NoRepetir();
    Siguiente();
    setTimeout(Repetir, 5000);
});
botonDerecho.addEventListener("click", function(){
    NoRepetir();
    Anterior();
    setTimeout(Repetir, 5000);
});
let repetir = true;

setTimeout(function(){
    const carousel = document.querySelector("#carousel");
    let carouselSeleccion = document.querySelectorAll(".proyecto");
    let carouselSeleccionUltima = carouselSeleccion[carouselSeleccion.length -1];
    carousel.insertAdjacentElement("afterbegin", carouselSeleccionUltima);
    const proyectos = document.querySelectorAll(".contenedorProyecto");
    for (let index = 0; index < proyectos.length; index++) {
        proyectos[index].addEventListener("mouseenter", NoRepetir);
        proyectos[index].addEventListener("mouseleave", Repetir);
    };
    setInterval(function(){
        if (repetir == true) {
            Siguiente();
        }
    }, 5000);
}, 10);