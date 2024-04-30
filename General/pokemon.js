// Afegeix aquí el codi de JS per a la pàgina pokemon.html
// Primero tenemos que poner el endpoint que vamos a usar para trabajar que en nuestro caso es pokemon
const BASE_URL = 'https://pokeapi.co/api/v2/';

async function listPokemons(id) {
        return fetch(`${BASE_URL}pokemon/${id}/`)
        .then((res => res.json())
        .then((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities,
            sprites: pokemon.sprites,
        }))
        .catch((error) => console.error(error))
    }