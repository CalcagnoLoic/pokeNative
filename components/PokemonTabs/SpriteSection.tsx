import { View, Text, Image } from "react-native";
import { SpriteType } from "@/definition";

const SpriteSection = ({ name, spriteUri }: SpriteType) => {
  return (
    <View className="mb-3 mt-6">
      <Image
        source={{
          uri: spriteUri,
        }}
        className="w-full h-56"
        resizeMode="contain"
      />
      <Text className="text-center font-mExtrabold text-xl capitalize text-biskay mt-5">
        {name}
      </Text>
    </View>
  );
};

export default SpriteSection;
