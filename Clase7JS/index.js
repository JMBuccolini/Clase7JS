const d = document,
  $section = d.createElement("section"),
  $fragment = d.createDocumentFragment();

const $miEvento = document.getElementById('eventoSecreto')
console.log($miEvento);

$miEvento.onclick= function(){
  alert('Funciona el onclick')
}

const botonEv = document.querySelector('.objevent')
botonEv.addEventListener('click',(e)=>console.log(e));

document.addEventListener("click", function (e) {
  console.log("Hiciste click en", e.target);

  if (e.target.matches(".enlace")) {
      alert("A dónde crees que vas?");
      e.preventDefault()
  }
});

const $evento = document.getElementById("evento")

function holaMundo(nombre= 'usuario') {
    alert(`Hola ${nombre}`)
}
function adiosMundo() {
    alert('Adios Mundo')
}
$evento.addEventListener("click", function(){
  holaMundo()
})

function cambiarColor(nuevoColor) {
  var element = document.getElementById("numen");
  console.log(element);
  element.style.color = nuevoColor;
}

function borrarTodosDivs() {
  console.log("Se borran todos los divs");
  let $divs = document.querySelectorAll("div");
  $divs.forEach((element) => {
    element.remove();
  });
}

function textoHTML() {
  const $articulo = document.getElementById("articulo");
  let texto = `
  <p>
  Lorem ipsum dolor <b>sit amet</b> consectetur
  <mark>adipisicing elit</mark>. Quisquam, nemo.
  </p>
  `;
  $articulo.outerHTML = texto;
  console.log($articulo);
}

function crearElementos() {
  const $cards = document.querySelector(".cards");
  const $figure = document.createElement("figure");
  const $img = document.createElement("img");
  const $figcaption = document.createElement("figcaption");
  const $figcaptionText = document.createTextNode("FullStacker tu serás");

  $cards.appendChild($figure);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);
  $img.setAttribute(
    "src",
    "http://pm1.narvii.com/6378/71077675a874957c38a660206fe3ca672b1569f4_00.jpg"
  );
  $img.setAttribute("alt", "yoda");
  $img.setAttribute("width", "150");
  $figcaption.appendChild($figcaptionText);
}

function estaciones() {
  const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"]

  let $ul = document.createElement("ul");
  let $fragment = document.createDocumentFragment();
  let $h3 = document.createElement("h3");

  document.body.appendChild($h3);
  $h3.textContent = "Estaciones del año";
  $ul.appendChild($fragment);
  document.body.appendChild($ul);
  
  estaciones.forEach((el) => {
    let $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
  });
}



