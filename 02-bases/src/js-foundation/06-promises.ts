const { http } = require('../plugins');

export const getPokemonById = async (id: string|number) : Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);


    return pokemon.name;

    // return fetch(url)
    //     .then((response) => response.json())
    //     .then((pokemon) => pokemon.name);

}