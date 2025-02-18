import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StatusBar } from "react-native";

import Background from "@/components/Background";
import icons from "@/constants/ICONS";

const Berry = () => {
  return (
    <SafeAreaView className="bg-zircon h-full">
      <Background img={icons.berry} otherStyle="grayscale" />
      <View className="border-b relative z-10 bg-zircon">
        <View className="px-8 pt-4 flex justify-between flex-row mb-4">
          <Text className="font-mExtrabold text-lg self-center text-riverBed">
            PokeNative
          </Text>
        </View>
      </View>
      <StatusBar backgroundColor="#F0F4FF" barStyle={"dark-content"} />
    </SafeAreaView>
  );
};
export default Berry;
