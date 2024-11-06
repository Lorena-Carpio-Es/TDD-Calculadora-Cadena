import sumar from "./sumador.js";

document.getElementById("sumar-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = document.getElementById("cadena").value;
  const resultado = sumar(cadena);

  document.getElementById("resultado-div").textContent = `Resultado: ${resultado}`;
});
