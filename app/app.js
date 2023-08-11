const deudaElemento = document.getElementById("deuda");
const sumarBoton = document.getElementById("sumar");
const restarBoton = document.getElementById("restar");
const borrarDeudaBoton = document.getElementById("borrarDeuda");
const cantidadInput = document.getElementById("cantidad");

// Obtener la deuda actual del almacenamiento local
let deuda = parseInt(localStorage.getItem("deudaBesos")) || 0;
deudaElemento.textContent = deuda;

// Función para actualizar la deuda y almacenarla en el almacenamiento local
function actualizarDeuda(valor) {
    deuda += valor;
    deudaElemento.textContent = deuda;
    localStorage.setItem("deudaBesos", deuda.toString());
}

// Evento para procesar la acción de sumar 1 a la deuda
sumarBoton.addEventListener("click", () => {
    actualizarDeuda(1);
    cantidadInput.value = "";
});

// Evento para procesar la acción de restar 1 de la deuda
restarBoton.addEventListener("click", () => {
    if (deuda > 0) {
        actualizarDeuda(-1);
    }
    cantidadInput.value = "";
});

// Evento para sumar la deuda al presionar "Enter"
cantidadInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const cantidad = parseInt(cantidadInput.value) || 0;
        if (cantidad > 0) {
            actualizarDeuda(cantidad);
            cantidadInput.value = "";
        }
    }
});

// Botón para borrar la deuda
borrarDeudaBoton.addEventListener("click", () => {
    deuda = 0;
    deudaElemento.textContent = deuda;
    localStorage.removeItem("deudaBesos");
});