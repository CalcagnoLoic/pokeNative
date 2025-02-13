import Header from "@/components/Header";
import PokedexArea from "@/components/PokemonTabs/PokedexArea";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Items = () => {
  return (
    <SafeAreaView className="bg-snuff h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex flex-col h-full">
          <Header />

          <View className="my-14 justify-center px-4"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Items;
