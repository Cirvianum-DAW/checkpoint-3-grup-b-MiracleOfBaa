// Afegeix aquí el codi de JS per a la pàgina pokemon.html
// Primero tenemos que poner el endpoint que vamos a usar para trabajar que en nuestro caso es pokemon

//Pokemons
async function pokemons() {
    const pokemons = await
fetch("https://pokeapi.co/api/v2/pokemon/")
    const pokemon = await pokemons.json();
console.log(pokemon);
}

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
    const objecte = await getPokemon(pokemonValue);
        pokemonName.textContent = objecte.name;
        pokemonHeight.textContent=objecte.height;
        pokemonWeight.textContent = objecte.weight;
}

// selectors
const buscarButton = document.getElementById("buscar");
const pokemonInput = document.getElementById("pokemonId");
const pokemonName = document.getElementById("name");
const pokemonHeight = document.getElementById("height");
const pokemonWeight = document.getElementById("weight");

// addEventListener botó click
buscarButton.addEventListener("click", ficarPokemon)
