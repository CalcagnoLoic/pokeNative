import Header from "@/components/Header";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Berry = () => {
  return (
    <SafeAreaView className="bg-snuff h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex flex-col h-full">
          <Header />

          <View className="my-14 justify-center px-4">
            <Text className="text-center font-kbold text-2xl underline">
              Here is the complete list of berries available in the different
              generations
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Berry;
