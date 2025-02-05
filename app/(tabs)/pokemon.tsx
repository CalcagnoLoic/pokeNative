import Header from "@/components/Header";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Pokemon = () => {
  return (
    <SafeAreaView className="bg-snuff h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex flex-col h-full">
          <Header />

          <View className="my-14 justify-center px-4">
            <Text className="text-center font-kbold text-2xl underline">
              Here is the complete list of pokemons{" "}
              <Text className="text-base">(only 151 at the moment)</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Pokemon;
