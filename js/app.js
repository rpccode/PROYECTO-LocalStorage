//variables 
const formulario =document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//eventos
formulario.addEventListener('submit', agregarForm);

//funciones
function agregarForm(e) {
    e.preventDefault();

        console.log('agregar');

}