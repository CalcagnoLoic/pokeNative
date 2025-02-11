import { useEffect, useState, useMemo } from "react";
import { getDetailsPokemons } from "@/lib/fetchData";
import { PokemonDetailsAPI } from "@/definition";

export const usePokemonDetails = ({ id }: { id: string }) => {
  const [data, setData] = useState<PokemonDetailsAPI>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cachedData = useMemo(() => {
    console.log("useMemo called, cachedData:");
    return data ? data : null;
  }, [data]);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await getDetailsPokemons(id);
        console.log("API call result");
        setData(res);
      } catch (error) {
        console.log("Captured error:", error); 
        setError(
          error instanceof Error
            ? error.message
            : "Une erreur inconnue est survenue.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (!cachedData) {
      fetchDetails();
    }
  }, [id, cachedData]); // Relance uniquement si `id` change ou s'il n'y a pas de `cachedData`

  return { data, loading, error };
};
