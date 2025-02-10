import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export const getAllPokemons = async () => {
  const pokemons = await api.listPokemons(0, 1025);
  return pokemons;
};

export const getDetailsPokemons = async (pokemonName: string) => {
  try {
    const pokemon = await api.getPokemonByName(pokemonName);

    

    return {
      ...pokemon,

    };
  } catch (error) {
    console.log(error);
  }
};
