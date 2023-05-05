const validarBtn = document.getElementById('validar');
const enviarBtn = document.querySelector('input[type="submit"]');
const edadInput = document.getElementById('edad');

validarBtn.addEventListener('click', () => {
  const edad = parseInt(edadInput.value);
  if (edad < 18) {
    alert("Lo siento, no puede solicitar una licencia de conducir. Debe tener al menos 18 años.");
  } else {
    const tieneLicencia = parseInt(prompt("¿Ya tiene alguna licencia de conducir? (1 para sí, 0 para no)"));
    if (tieneLicencia === 0) {
      alert("Felicidades, puede solicitar una licencia para cualquier vehículo");
    } else {
      const tipoLicenciaActual = parseInt(prompt("¿Qué tipo de licencia tiene actualmente? (1 para A, 2 para B, 3 para C)"));
      const tipoLicenciaDeseada = parseInt(prompt("¿Qué tipo de licencia desea? (1 para A, 2 para B, 3 para C)"));
      if (tipoLicenciaActual >= tipoLicenciaDeseada) {
        alert("Felicidades, puede solicitar una renovación");
      } else {
        alert("Puede solicitar una licencia");
      }
    }
  }
});