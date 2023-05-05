const botonCalcular = document.getElementById('calcularBtn');
const salarioInput = document.getElementById('salario');
const diasTrabajadosInput = document.getElementById('dias_trabajados');
const salarioCalculadoSpan = document.getElementById('salario_calculado');
const deduccionAhorroSpan = document.getElementById('deduccion_ahorro');
const salarioAntesImpuestoSpan = document.getElementById('salario_antes_impuesto');
const deduccionImpuestoSpan = document.getElementById('deduccion_impuesto');
const salarioNetoSpan = document.getElementById('salario_neto');

botonCalcular.addEventListener('click', function(event) {
  console.log("click");
  document.getElementById('resultado').style.display = 'block';
  event.preventDefault();

  const salarioMensual = parseFloat(salarioInput.value);
  const diasTrabajados = parseInt(diasTrabajadosInput.value);

  const salarioCalculado = (salarioMensual / 30) * diasTrabajados;
  const deduccionAhorro = salarioCalculado * 0.15;

  let salarioAntesImpuesto = salarioCalculado - deduccionAhorro;
  let deduccionImpuesto = 0;

  if (salarioAntesImpuesto > 20000) {
    deduccionImpuesto = salarioAntesImpuesto * 0.2;
    salarioAntesImpuesto -= deduccionImpuesto;
  }

  const salarioNeto = salarioAntesImpuesto;

  salarioCalculadoSpan.textContent = salarioCalculado.toFixed(2);
  deduccionAhorroSpan.textContent = deduccionAhorro.toFixed(2);
  salarioAntesImpuestoSpan.textContent = salarioAntesImpuesto.toFixed(2);
  deduccionImpuestoSpan.textContent = deduccionImpuesto.toFixed(2);
  salarioNetoSpan.textContent = salarioNeto.toFixed(2);

  
});
