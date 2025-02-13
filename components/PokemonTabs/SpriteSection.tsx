import { View, Text, Image } from "react-native";
import { SpriteType } from "@/definition";

const SpriteSection = ({ name, spriteUri }: SpriteType) => {
  return (
    <View className="mt-14 px-4">

      <Image
        source={{
          uri: spriteUri,
        }}
        className="w-full h-56"
        resizeMode="contain"
      />
      <Text className="text-center font-kbold text-lg capitalize text-biskay my-7">
        {name}
      </Text>
    </View>
  );
};

export default SpriteSection;
