import { View, Text, Image } from "react-native";
import { SpriteType } from "@/definition";
import icons from "@/constants/icons";

const SpriteSection = ({ name, spriteUri }: SpriteType) => {
  return (
    <View className="mb-3 mt-6">
      <View className="relative">
        <Image
          source={icons.pokemon}
          className="w-52 h-56 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
          resizeMode="contain"
          style={{ opacity: 0.25 }}
        />
        <Image
          source={{
            uri: spriteUri,
          }}
          className="w-full h-56"
          resizeMode="contain"
        />
      </View>
      <Text className="text-center font-mExtrabold text-xl capitalize text-biskay mt-5">
        {name}
      </Text>
    </View>
  );
};

export default SpriteSection;
