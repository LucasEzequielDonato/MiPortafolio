const carousel = document.querySelector("#carousel");
let carouselSeleccion = document.querySelectorAll(".proyecto");
let carouselSeleccionUltima = carouselSeleccion[carouselSeleccion.length -1];

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

function NoRepetir () {
    repetir = false;
    console.log("Se paro el carousel");
}
function Repetir () {
    repetir = true;
    console.log("Sigue el carousel");
}

botonIzquierdo.addEventListener('click', function(){
    Siguiente();
});

botonDerecho.addEventListener("click", function(){
    Anterior();
});
const proyectos = document.querySelectorAll(".proyecto");
console.log(proyectos);
for (let index = 0; index < proyectos.length; index++) {
    console.log(proyectos[index]);
    proyectos[index].addEventListener("mouseover", NoRepetir);
    proyectos[index].addEventListener("mouseout", Repetir);
};
let repetir = true;
setInterval(function(){
    if (repetir == true) {
        Siguiente();
    }
}, 5000);