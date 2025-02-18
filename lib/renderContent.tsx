import AlternativeForms from "@/components/PokemonTabs/Section/AlternativeForms";
import EvolutionChain from "@/components/PokemonTabs/Section/EvolutionChain";
import Informations from "@/components/PokemonTabs/Section/Informations";
import Stats from "@/components/PokemonTabs/Section/Stats";
import { renderingContent } from "@/definition";

export const renderContent = ({ state, data }: renderingContent) => {
  switch (state) {
    case "Infos":
      return <Informations data={data} />;

    case "Evolution":
      return <EvolutionChain data={data} />;

    case "Stats":
      return <Stats data={data} />;

    case "Form":
      return <AlternativeForms data={data} />;

    default:
      return <Informations data={data} />;
  }
};
