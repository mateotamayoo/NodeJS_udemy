import { httpClientPlugin as http } from "../plugins/http-client";

export const getPokemonById = async (id: string | number): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
        const pokemon = await http.get(url);

        return pokemon.name;
    } catch (error) {
        throw `Pokemon not found with id ${id}`;
    }



    // return fetch(url)
    //     .then((response) => response.json())
    //     .then((pokemon) => pokemon.name);

}