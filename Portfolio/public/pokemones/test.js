document.addEventListener("DOMContentLoaded", function () {
  var images = [
    //Array de objetos (cartas de cada pokemon)
    {
      //Cada elemento entre llaves es cada pokemon
      name: "Pikachu",
      link: "pokemones-fotos/pikachu.webp",
      classColor: "pikachu",
      tipo: "Electrico",
      alt: "",
    },
    {
      name: "Charmander",
      link: "pokemones-fotos/Charmander.webp",
      classColor: "charmander",
      tipo: "Fuego",
      alt: "",
    },
    {
      name: "Eevee",
      link: "pokemones-fotos/Eevee.webp",
      classColor: "eevee",
      tipo: "Normal",
      alt: "",
    },
    {
      name: "Sylveon",
      link: "pokemones-fotos/Sylveon.webp",
      classColor: "sylveon",
      tipo: "Hada",
      alt: "",
    },
    {
      name: "Cresselia",
      link: "pokemones-fotos/Cresselia.webp",
      classColor: "cresselia",
      tipo: "Psiquico",
      alt: "",
    },
    {
      name: "Butterfree",
      link: "pokemones-fotos/Butterfree.webp",
      classColor: "butterfree",
      tipo: "Bicho",
      alt: "",
    },
    {
      name: "Snorlax",
      link: "pokemones-fotos/Snorlax.webp",
      classColor: "snorlax",
      tipo: "Normal",
      alt: "",
    },
    {
      name: "Lapras",
      link: "pokemones-fotos/Lapras.webp",
      classColor: "lapras",
      tipo: "Hielo Agua",
      alt: "",
    },
    {
      name: "Oshawott",
      link: "pokemones-fotos/Oshawott.webp",
      classColor: "oshawott",
      tipo: "Agua",
      alt: "",
    },
  ];

  var gridContainer = document.getElementById("grid-container"); //Seleccionamos por id la etiqueta requerida

  for (var i = 0; i < 9; i++) {
    var gridItem = document.createElement("div"); //
    gridItem.classList.add("alineamientoFoto", images[i].classColor); // En la posicion i de images agregamos la propiedad classColor
    var h2 = document.createElement("h2"); //Crea el item entre ()
    h2.textContent = images[i].name; //  Asigna el valor del texto
    gridItem.appendChild(h2); // Agrega al elemento hijo al padre(grilla) la etiqueta con el valor correspondiente
    gridItem.classList.add("centrado"); // Le agrega una clase al item
    var image = document.createElement("img");
    image.src = images[i].link;
    image.classList.add("fotoDinamica");
    gridItem.appendChild(image);
    gridContainer.appendChild(gridItem);
    var h3 = document.createElement("h3");
    h3.textContent = images[i].tipo;
    gridItem.appendChild(h3);
    gridItem.classList.add("centrado");
  }
});
