import { PokemonDetailsAPI } from "@/definition";
import { View } from "react-native";

import icons from "@/constants/ICONS";
import OtherSpritesSection from "../OtherSpritesSection";

const AlternativeForms = ({ data }: { data: PokemonDetailsAPI }) => {
  return (
    <View className="gap-5">
      <OtherSpritesSection
        title="Difference between male and female"
        sprite1={data.sprites.front_default as string}
        label1={icons.male}
        sprite2={
          (data.sprites.front_female || data.sprites.front_default) as string
        }
        label2={icons.female}
      />

      <OtherSpritesSection
        title="Difference between normal and shiny"
        sprite1={data.sprites.front_default as string}
        sprite2={
          (data.sprites.front_shiny || data.sprites.front_default) as string
        }
        label2={icons.shiny}
      />
    </View>
  );
};

export default AlternativeForms;
