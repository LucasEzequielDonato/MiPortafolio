// Clase con todo lo que debe tener un proyecto.
class Proyecto {
    constructor (titulo, foto, enlaceRepo, enlacePag) {
        this.titulo = titulo;
        this.foto = foto;
        this.enlaceRepo = enlaceRepo;
        this.enlacePag = enlacePag;
    }
}

// Funcion para cargar todos los proyectos dentro del carousel del sitio web.
function visualizarProyectos () {
    const contenedorProyectos = document.getElementById("carousel");
    proyectos.forEach((proyecto) => {
        let contenedorProyecto = document.createElement("div");
        contenedorProyecto.classList.add("proyecto");
        contenedorProyecto.innerHTML = `
        <div class="contenedorProyecto">
            <div class="proyectoContenedor">
                <img src="${proyecto.foto}" alt="Foto del proyecto" class="proyectoImagen">
                <div class="contenedorDescripcion">
                    <h5>${proyecto.titulo}</h5>
                </div>
            </div>
            <div class="proyectoBotones">
                <a href="${proyecto.enlaceRepo}" target="_blank" rel="noopener"><button class="btnDemo"><ion-icon name="file-tray-full-outline"></ion-icon><p>REPO</p></button></a>
                <a href="${proyecto.enlacePag}" target="_blank" rel="noopener"><button class="btnGitHub"><ion-icon name="logo-github"></ion-icon><p>GITHUB</p></button></a>
            </div>
        </div>
        `;
        contenedorProyectos.appendChild(contenedorProyecto);
    })
    crearCarousel();
}
const proyectos = [];
const proyecto1 = new Proyecto ("Sitio web para una inmobiliaria", "./multimedia/Proyecto1.webp", "https://lucasezequieldonato.github.io/NestorDonato", "https://github.com/LucasEzequielDonato/NestorDonato");
const proyecto2 = new Proyecto ("Sitio web para un local de pestañas", "./multimedia/Proyecto2.webp", "https://lucasezequieldonato.github.io/MG", "https://github.com/LucasEzequielDonato/MG");
const proyecto3 = new Proyecto ("Sitio web para un local de porcelana", "./multimedia/Proyecto3.webp", "https://lucasezequieldonato.github.io/PorcelanaRo", "https://github.com/LucasEzequielDonato/PorcelanaRo");
const proyecto4 = new Proyecto ("Este sitio web", "./multimedia/Proyecto4.webp", "https://lucasezequieldonato.github.io/MiPortafolio", "https://github.com/LucasEzequielDonato/MiPortafolio");
proyectos.push(proyecto1, proyecto2, proyecto3, proyecto4);
visualizarProyectos(crearCarousel);
