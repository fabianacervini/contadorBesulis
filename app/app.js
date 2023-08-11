const contadorElemento = document.getElementById("contador");
const sumarBoton = document.getElementById("sumar");
const restarBoton = document.getElementById("restar");
const borrarBoton = document.getElementById("borrar");

// Obtener el contador actual del almacenamiento local
let contador = parseInt(localStorage.getItem("contadorBesos")) || 0;
contadorElemento.textContent = contador;

// Función para actualizar el contador y almacenarlo en el almacenamiento local
function actualizarContador(valor) {
    contador += valor;
    contadorElemento.textContent = contador;
    localStorage.setItem("contadorBesos", contador.toString());
}

// Botón para sumar un beso
sumarBoton.addEventListener("click", () => {
    actualizarContador(1);
});

// Botón para restar un beso
restarBoton.addEventListener("click", () => {
    if (contador > 0) {
        actualizarContador(-1);
    }
});

// Botón para borrar el contador
borrarBoton.addEventListener("click", () => {
    contador = 0;
    contadorElemento.textContent = contador;
    localStorage.removeItem("contadorBesos");
});