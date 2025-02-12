import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { SpriteType } from "@/definition";

const SpriteSection = ({ name, spriteUri }: SpriteType) => {
  return (
    <View className="mt-14 px-4">
      <CustomButton
        title="Go back to the list"
        handlePress={() => router.push("/(tabs)/pokemon")}
        buttonStyle="bg-periglacialBlue p-4 rounded-lg border mb-8"
        isPictured
        alt={icons.goBack}
      />

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
