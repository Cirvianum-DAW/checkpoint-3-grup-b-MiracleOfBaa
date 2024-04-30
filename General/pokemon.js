// Afegeix aquí el codi de JS per a la pàgina pokemon.html
// Primero tenemos que poner el endpoint que vamos a usar para trabajar que en nuestro caso es pokemon

//Pokemons
async function listPokemons(id) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
    const pokemons= await response.json();
    console.log(pokemons);
    //Creem el objecte
    const pokemon = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        habilitats: pokemon.abilities,
        sprites: pokemon.sprites
    }
    //retornem el objecte
    return pokemon;
}

async function mostrarInformacion(id){
    const response 
}

export default {
    listPokemons
}


