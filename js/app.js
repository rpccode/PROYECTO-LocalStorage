//variables 
const formulario =document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//eventos
formulario.addEventListener('submit', agregarForm);

//funciones
function agregarForm(e) {
    e.preventDefault();

      
    const tweet = document.querySelector('#tweet').value;

    if (tweet === '') {
        mostrarError('El mensaje no puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //agregar los tweet a; arreglo
    tweets = [...tweets,tweetObj];

    //creamos el html para mostrar los tweets
    crearHTML();

    //reiniciar el html

    formulario.reset();

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

function crearHTML() {
    //limpiamos el html
    limpiarHTML();

        if (tweets.length > 0) {

            tweets.forEach((tweet) => {

                ///crear el  html

                const li = document.createElement('li');

                li.innerText = tweet.tweet;

                //agregarlo al HTML
                listaTweets.appendChild(li);

            });
            
        }
}

function limpiarHTML() {
            while ( listaTweets.firstChild) {

                listaTweets.removeChild(listaTweets.firstChild);
                
            }
}