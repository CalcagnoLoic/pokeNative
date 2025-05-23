import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Background from "@/components/ui/Background";
import ICONS from "@/constants/ICONS";

const Machine = () => {
  return (
    <SafeAreaView className="bg-zircon h-full">
      <Background img={ICONS.tm} otherStyle="" />
      <View className="border-b relative z-10 bg-zircon">
        <View className="px-8 pt-4 flex justify-between flex-row mb-4">
          <Text className="font-mExtrabold text-lg self-center text-riverBed">
            PokeNative
          </Text>
        </View>
      </View>

      <View className="px-8">
        <StatusBar backgroundColor="#F0F4FF" barStyle={"dark-content"} />
      </View>
    </SafeAreaView>
  );
};
export default Machine;
