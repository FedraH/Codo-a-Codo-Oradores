var Form = document.getElementById("myForm");
var Nombre = document.getElementById("Nombre");
var Apellido = document.getElementById("Apellido");
var Correo = document.getElementById("Correo");
var Cantidad = document.getElementById('Cantidad');
var Categoria = document.getElementById('Categoria');
var totalApagar = document.getElementById('Total');

const btnCompra = document.getElementById('comprar-btn');
btnCompra.addEventListener("click",validarFormulario);

const btnReset = document.getElementById('reset-btn');
btnReset.addEventListener("click",resetearFormulario);

function ValidarCorreo(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function contieneNumeros(input) {
  var numberRegex = /\d/;
  return numberRegex.test(input);
}

function ValidarCantidad(cant) {
  var cantidadRegex = /^[1-9]\d*$/;
  return cantidadRegex.test(cant);
}

function actualizarMontoTotal() {
  var cant = Cantidad.value;
  var categoria = Categoria.value;
  var precioUnitario = 200;
  var descuento = 0;

  if (categoria === 'estudiante') {
    descuento = 0.2; 
  } else if (categoria === 'trainee') {
    descuento = 0.5; 
  } else {
    descuento = 0.85;
  }
  
  var total = precioUnitario * descuento * cant;
  totalApagar.textContent = `Total a Pagar \$: ${total}`;
}

function validarFormulario(){

  if (contieneNumeros(Nombre.value)) {
    alert("El nombre no debe contener números");
    Nombre.focus();
    return false;
  } else if (contieneNumeros(Apellido.value)) {
    alert("El apellido no debe contener números");
    Apellido.focus();
    return false;
  }

  if (!ValidarCorreo(Correo.value)) {
    alert("Debe ingresar una dirección de correo válida");
    Correo.focus();
    return false;
  }

  if (!ValidarCantidad(Cantidad.value)) {
    alert("Debe seleccionar una cantidad de tickets a comprar válida");
    Cantidad.focus();
    return false;
  }

  actualizarMontoTotal();
  return true;
}

function resetearFormulario() {
  document.getElementById("formulario").reset();
  totalApagar.textContent = 'Total a Pagar $: '; 
}