import { Types } from "@/definition";
import { typeColor } from "@/utils/typeColor";
import { View, Text } from "react-native";

const PokemonType = ({ types }: Types) => {
  return (
    <View className="flex flex-row gap-5">
      {types.map((type: any) => (
        <Text
          key={type.type.name}
          style={{
            backgroundColor: typeColor(
              type.type.name as keyof typeof typeColor,
            ),
          }}
          className={`px-6 py-3 capitalize w-1/2 rounded-xl text-center border ${type.type.name === "electric" ? "text-midGray" : "text-periglacialBlue"} `}
        >
          {type.type.name}
        </Text>
      ))}
    </View>
  );
};

export default PokemonType;
