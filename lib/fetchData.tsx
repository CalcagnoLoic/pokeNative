import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export const getAllPokemons = async () => {
  const pokemons = await api.listPokemons(0, 1025);
  return pokemons;
};

export const getDetailsPokemons = async (pokemonName: string) => {
  try {
    const pokemon = await api.getPokemonByName(pokemonName);

    const abilitiesDetails = await Promise.all(
      pokemon.abilities.map(async (ability) => {
        // Récupère les données de l'URL de l'ability
        const response = await fetch(ability.ability.url);
        const data = await response.json();

        // Cherche l'entrée en anglais dans effect_entries
        const filteredAbility = data.effect_entries.find(
          (entry: any) => entry.language.name === "en"
        );

        // Si l'effet est trouvé, retourne l'effet complet avec l'ability
        const effect = filteredAbility ? filteredAbility.effect : null;

        return {
          ability: ability.ability.name,
          is_hidden: ability.is_hidden,
          effect: effect,
        };
      })
    );

    return {
      ...pokemon, abilitiesDetails
    };
  } catch (error) {
    console.log(error);
  }
};
