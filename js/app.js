//variables 
const formulario =document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//eventos
formulario.addEventListener('submit', agregarForm);

//funciones
function agregarForm(e) {
    e.preventDefault();

      
    const tweets = document.querySelector('#tweet').value;

    if (tweets === '') {
        mostrarError('El mensaje no puede ir vacio');
        return;
    }

    console.log('agregaste un tweet');

}

function mostrarError(error) {
        const errorMessage =document.createElement('p');
        errorMessage.textContent =error;
        errorMessage.classList.add('error');



        const contenido = document.querySelector('#contenido');

        contenido.appendChild(errorMessage);


        setTimeout(() => {
                errorMessage.remove();
        }, 1500);


}