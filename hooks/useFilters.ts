import { FilteringHook } from "@/definition";
import { groupByGeneration } from "@/utils/groupBy";
import { useState } from "react";

export const useFilters = ({data, setVisibleSections}: FilteringHook) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleClear = () => {
    setSelected([]);
    setVisibleSections([]);
    setSearchQuery("");
  };

  const toggleSelection = (generationTitle: string) => {
    setSelected(
      (prevState) =>
        prevState.includes(generationTitle)
          ? prevState.filter((title) => title !== generationTitle) // Désélectionner
          : [...prevState, generationTitle], // Sélectionner
    );
  };

  const filteredSection = selected.length
    ? groupByGeneration(data || []).filter((section) =>
        selected.includes(section.title),
      )
    : groupByGeneration(data || []);

  const researchedSectionPokemon = filteredSection.reduce<
    { title: string; data: any[] }[]
  >((acc, section) => {
    const filteredData = section.data.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );

    if (filteredData.length > 0) acc.push({ ...section, data: filteredData });

    return acc;
  }, []);

  return {
    selected,
    setSelected,
    searchQuery,
    setSearchQuery,
    toggleClear,
    toggleSelection,
    researchedSectionPokemon,
  };
};
