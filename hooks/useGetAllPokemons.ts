import { getAllPokemons } from "@/lib/fetchData";
import { useEffect, useState } from "react";

export const useGetAllPokemons = () => {
  const [data, setData] = useState<{ name: string; sprite: string }[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setIsLoading(true);
        const response = await getAllPokemons();
        const pokemonsWithSprites = response.results.map((pokemon, index) => ({
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));

        setData(pokemonsWithSprites);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPokemons();
  }, []);

  return { data, error, isLoading };
};
