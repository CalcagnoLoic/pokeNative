import { View, Text, Image } from "react-native";
import { Types } from "@/definition";
import { typeColor } from "@/utils/typeColor";

import typeIcons from "@/constants/TYPESICONS";


const PokemonType = ({ types }: Types) => {
  return (
    <View className="gap-5 flex-row mx-auto">
      {types.map((type: any) => {
        const typeName = type.type.name as keyof typeof typeIcons;

        if (!typeIcons[typeName]) {
          return null;
        }

        return (
          <View
            key={typeName}
            style={{
              backgroundColor: typeColor(typeName),
            }}
            className={`px-6 py-3 flex-row items-center justify-center rounded-xl `}
          >
            <Image
              source={typeIcons[typeName]}
              className="w-5 h-5 mr-2"
              resizeMode="contain"
            />
            <Text
              className={`capitalize ${
                typeName === "electric" ? "text-midGray" : "text-white"
              }`}
            >
              {typeName}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default PokemonType;
