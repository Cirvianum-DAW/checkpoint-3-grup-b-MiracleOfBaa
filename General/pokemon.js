// Afegeix aquí el codi de JS per a la pàgina pokemon.html
// Primero tenemos que poner el endpoint que vamos a usar para trabajar que en nuestro caso es pokemon

//Pokemons
async function getPokemon(id){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
    const pokemon=await response.json();
    console.log(pokemon);
    const objecte = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        habilitats: pokemon.abilities,
        sprites: pokemon.sprites
    }
    return objecte;
}

async function ficarPokemon(){
    const pokemonValue = pokemonInput.value;
    // Obtenir pokemon de la API
    const objecte = await getPokemon(pokemonValue);
    // Comprobar resposta valida
    if(objecte == null){
        alert("Aquest pokémon no existeix.");
    }
    // Ficar valors del pokemon obtingut de la API
    pokemonName.textContent = objecte.name;
    pokemonHeight.textContent=objecte.height;
    pokemonWeight.textContent = objecte.weight;
    // Afegir habilitats
    for(const habilitatPokemon of objecte.habilitats){
        console.log(habilitatPokemon)
        const ability = habilitatPokemon.ability
        const habilitat = document.createElement("li");
        habilitat.textContent =ability.name;
        // afegir a la llista de habilitats
        abilities.appendChild(habilitat);
    }
    // Ficar imatge
    const sprites = objecte.sprites;
    sprite.src = sprites.front_default;
}

// selectors
const buscarButton = document.getElementById("buscar");
const pokemonInput = document.getElementById("pokemonId");
const pokemonName = document.getElementById("name");
const pokemonHeight = document.getElementById("height");
const pokemonWeight = document.getElementById("weight");
const abilities = document.getElementById("llista-abilities");
const sprite = document.getElementById("sprite");


// addEventListener botó click
buscarButton.addEventListener("click", ficarPokemon)
