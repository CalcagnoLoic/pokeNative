import typeIcons from "@/constants/typeIcons";
import { Types } from "@/definition";
import { typeColor } from "@/utils/typeColor";
import { View, Text, Image } from "react-native";

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
            className={`px-6 py-3 flex-row items-center justify-center rounded-xl border ${
              typeName === "electric" ? "text-midGray" : "text-periglacialBlue"
            }`}
          >
            <Image
              source={typeIcons[typeName]}
              className="w-5 h-5 mr-2"
              resizeMode="contain"
            />
            <Text className="capitalize">{typeName}</Text>
          </View>
        );
      })}
    </View>
  );
};


export default PokemonType;
