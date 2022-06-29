const BASE_URL = 'http://pokeapi.co/api/v2/';
const $image = document.querySelector('#image');
const $name = document.querySelector('#name');

function renderError(status){
    $name.textContent = `${status} Pokemon no encontrado`   
}

function renderPokemon(pokemon){
    $name.textContent = pokemon.name;
    $image.setAttribute('src',pokemon.sprites.front_default);
}



function ajax({url, method = 'GET',async = true, done = () => {}},error = () => {}, responseType = 'json'){
    function status(readyState){
        switch(readyState){
            case 0: return 'uninitilized'
            case 1: return 'loading'
            case 2: return 'loaded'
            case 3: return 'interactive'
            case 4: return 'completed'
            
        }
    }

    const request = new XMLHttpRequest();
    request.responseType = responseType
    console.log(status(request.readyState))
    
    request.onreadystatechange = (event) => {
        console.log(status(request.readyState));
        if (request.readyState === 4){
            if(request.status === 200){
                done(request.response)
            }else{
                error(request.status)
            }
        }
    }
    request.open(method,url,async);
    request.send(null);
    return request.response
}

ajax({
    url: `${BASE_URL}pokemon/25`,
    // method: 'GET'
    // async: true,
    // responseType : 'json'
    done: renderPokemon,
    error: renderError,

})