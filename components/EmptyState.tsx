import { router } from "expo-router";
import { View, Image, Text } from "react-native";

import CustomButton from "./ui/CustomButton";
import IMAGES from "@/constants/IMAGES";

const EmptyState = ({ error }: { error: string | null | unknown }) => {
  return (
    <View className="flex-1 justify-center items-center bg-zircon px-8">
      <Image source={IMAGES.error} resizeMode="contain" className="w-72 h-72" />
      <Text className="mt-5 text-xl font-mExtrabold text-biskay text-center">
        There seems to be a problem... but it's not you, it's us!
      </Text>
      <Text className="mt-5 text-sm font-rRegular text-biskay text-center">
        Technical detail: {error as string}
      </Text>

      <CustomButton
        title="Go to homepage"
        handlePress={() => router.push("/")}
        containerStyles="mt-8 w-full"
        buttonStyle="p-4 bg-periglacialBlue border rounded-xl"
      />
    </View>
  );
};

export default EmptyState;
