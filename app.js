// creamos una variable en la cual vamos a almacenar todos los datos del formulario
const data = {
    name: '',
    cel: '',
    email: '',
    message: '',
}

// tambien creamos todas las variables para extraer los datos del DOM
const nombre = document.querySelector('#name');
const celu = document.querySelector('#cel');
const mail = document.querySelector('#email');
const msg = document.querySelector('#message');
const formulario = document.querySelector('.formulario');

// creamos los eventos para cada variable
nombre.addEventListener('input', scanField);
celu.addEventListener('input', scanField);
mail.addEventListener('input', scanField);
msg.addEventListener('input', scanField);

// añadimos todas las funciones

// funcion para leer el texto de las variables
function scanField(e) {
    data[e.target.id] = e.target.value;
    console.log(data);

}

// añadimos un evento cada que llenan el form
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // destructuramos el objeto data que contiene nuestras variables
    const { name, cel, email, message } = data;

    // validamos que este lleno todo el form antes de que se envie          
    if (name === '' || cel === '' || email === '' || message === '') {
        console.log('fill the fields');
        showError('all fields are obligated');
        return;
    }

    console.log('already is ok');
    showAlert('message send');
});

//añadimos las funciones para mostrar un error o un mensaje de exito
// ambas funciones crean un elemento en el html desde js
function showAlert(mensaje) {
    const alert = document.createElement('p');
    alert.textContent = mensaje;
    alert.classList.add('correcto');
    formulario.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function showError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alert.remove();
    }, 3000);
}



