import { PokemonClient } from "pokenode-ts";

export const getAllPokemons = async () => {
  const api = new PokemonClient();
  const pokemons = await api.listPokemons(0, 1025);
  return pokemons;
};
