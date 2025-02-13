import { Pokedex } from "@/definition";
import { View, Text } from "react-native";

const PokedexArea = ({ nameArea, countPokedex }: Pokedex) => {
  return (
    <View className="mt-6 flex justify-between px-5 py-7 border rounded-lg bg-periglacialBlue flex-row">
      <Text className="font-kbold text-lg self-center">
        Pokedex of {nameArea}
      </Text>
      <Text className="font-pregular text-sm self-center">
        0/<Text className="font-pregular">{countPokedex}</Text>
      </Text>
    </View>
  );
};
export default PokedexArea;
