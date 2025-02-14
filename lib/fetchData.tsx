import { EvolutionDetail } from "@/definition";
import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export const getAllPokemons = async () => {
  const pokemons = await api.listPokemons(0, 1025);
  return pokemons;
};

export const getPokemonTypesMap = async () => {
  const allTypes = await Promise.all(
    Array.from({ length: 18 }, (_, index) => api.getTypeById(index + 1)),
  );

  const pokemonTypeMap = new Map<string, string[]>();

  allTypes.forEach((type) => {
    type.pokemon.forEach((p) => {
      const name = p.pokemon.name;
      if (!pokemonTypeMap.has(name)) pokemonTypeMap.set(name, []);

      pokemonTypeMap.get(name)?.push(type.name);
    });
  });

  return pokemonTypeMap;
};

export const getDetailsPokemons = async (pokemonName: string) => {
  try {
    const pokemon = await api.getPokemonByName(pokemonName);

    const abilitiesDetails = await Promise.all(
      pokemon.abilities.map(async (ability) => {
        const response = await fetch(ability.ability.url);
        const data = await response.json();

        const filteredAbility = data.effect_entries.find(
          (entry: any) => entry.language.name === "en",
        );

        const effect = filteredAbility ? filteredAbility.effect : null;

        return {
          ability: ability.ability.name,
          is_hidden: ability.is_hidden,
          effect: effect,
        };
      }),
    );

    // Récupérer la chaîne d'évolution
    const speciesResponse = await fetch(pokemon.species.url);
    const speciesData = await speciesResponse.json();
    const evolutionChainUrl = speciesData.evolution_chain.url;

    // Faire un appel pour récupérer les détails de la chaîne d'évolution
    const evolutionResponse = await fetch(evolutionChainUrl);
    const evolutionData = await evolutionResponse.json();

    // Fonction pour obtenir le sprite et les informations de chaque étape d'évolution
    const getEvolutionDetails = async (
      chain: any,
      evolutionDetails: EvolutionDetail[] = [],
    ) => {
      let currentChain = chain;

      // Tant qu'il y a une évolution à traiter
      while (currentChain) {
        // Récupération des informations de l'espèce
        const speciesResponse = await fetch(currentChain.species.url);
        const speciesData = await speciesResponse.json();

        // Vérifier si cette évolution a déjà été ajoutée
        const existingEvolution = evolutionDetails.find(
          (evolution) => evolution.name === speciesData.name,
        );

        if (!existingEvolution) {
          // Récupérer le sprite du Pokémon
          const spriteResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${speciesData.name}`,
          );
          const spriteData = await spriteResponse.json();

          // Ajouter les informations d'évolution de cette étape
          const evolutionDetailsItem = {
            name: speciesData.name,
            level: currentChain.evolution_details[0]?.min_level || " ",
            sprite: spriteData.sprites.front_default,
            trigger: currentChain.evolution_details[0]?.trigger?.name || " ",
            item: currentChain.evolution_details[0]?.item?.name || " ",
            happiness: currentChain.evolution_details[0]?.min_happiness || 0,
            affection: currentChain.evolution_details[0]?.min_affection || 0,
            beauty: currentChain.evolution_details[0]?.min_beauty || 0,
            timeOfDay: currentChain.evolution_details[0]?.time_of_day || " ",
            location: Array.isArray(currentChain.evolution_details[0]?.location)
              ? currentChain.evolution_details[0]?.location.map(
                  (loc: any) => loc.name,
                )
              : currentChain.evolution_details[0]?.location?.name || " ",
            needsRain:
              currentChain.evolution_details[0]?.needs_overworld_rain || false,
            knownMove: currentChain.evolution_details[0]?.known_move || " ",
          };

          evolutionDetails.push(evolutionDetailsItem);
        }

        // Si le Pokémon a plusieurs évolutions, traiter chaque possibilité dans 'evolves_to'
        if (currentChain.evolves_to && currentChain.evolves_to.length > 0) {
          // Parcourir toutes les évolutions possibles à ce niveau
          for (let evolveOption of currentChain.evolves_to) {
            // Appel récursif pour descendre dans la chaîne d'évolution
            await getEvolutionDetails(evolveOption, evolutionDetails);
          }
        }

        // Passer à l'évolution suivante
        currentChain =
          currentChain.evolves_to.length > 0
            ? currentChain.evolves_to[0]
            : null;
      }

      return evolutionDetails;
    };

    // Obtenir les détails d'évolution
    const evolutionDetails = await getEvolutionDetails(evolutionData.chain);

    return {
      ...pokemon,
      abilitiesDetails,
      evolutionDetails,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
