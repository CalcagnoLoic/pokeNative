import { PokemonDetailsAPI } from "@/definition";
import { View } from "react-native";
import OtherSpritesSection from "../OtherSpritesSection";

const AlternativeForms = ({ data }: { data: PokemonDetailsAPI }) => {
  return (
    <View className="gap-5">
      <OtherSpritesSection
        title="Difference between male and female"
        sprite1={data.sprites.front_default as string}
        label1="Male"
        sprite2={
          (data.sprites.front_female || data.sprites.front_default) as string
        }
        label2="Female"
        types={data.types}
      />

      <OtherSpritesSection
        title="Difference between Shiny and Unshiny"
        sprite1={data.sprites.front_default as string}
        label1="Unshiny"
        sprite2={
          (data.sprites.front_shiny || data.sprites.front_default) as string
        }
        label2="Shiny"
        types={data.types}
      />
    </View>
  );
};

export default AlternativeForms;
