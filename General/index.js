import pokemon from './pokemon.js';

async function main() {
    try{
        const prova = await pokemon.listPokemons('2');
        console.log(prova);
    }catch (error) {
        console.error(error);
    }
}
main ();

export default main;