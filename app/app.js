const contadorElemento = document.getElementById("contador");
const incrementarBoton = document.getElementById("incrementar");
const borrarBoton = document.getElementById("borrar");

// Obtener el contador actual del almacenamiento local
let contador = parseInt(localStorage.getItem("contadorBesos")) || 0;
contadorElemento.textContent = contador;

// Actualizar el contador y almacenarlo en el almacenamiento local
incrementarBoton.addEventListener("click", () => {
    contador++;
    contadorElemento.textContent = contador;
    localStorage.setItem("contadorBesos", contador.toString());
});

// Borrar el contador y actualizar la página
borrarBoton.addEventListener("click", () => {
    contador = 0;
    contadorElemento.textContent = contador;
    localStorage.removeItem("contadorBesos");
});