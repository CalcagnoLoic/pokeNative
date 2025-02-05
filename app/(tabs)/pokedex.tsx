import Header from "@/components/Header";
import PokedexArea from "@/components/PokedexArea";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Pokedex = () => {
  return (
    <SafeAreaView className="bg-snuff h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex flex-col h-full">
          <Header />

          <View className="my-14 justify-center px-4">
            <Text className="text-center font-kbold text-2xl underline">
              Where are you with your Pokédex? Let's see, let's see...
            </Text>

            <PokedexArea nameArea="Kanto" countPokedex={151} />
            <PokedexArea nameArea="Johto" countPokedex={100} />
            <PokedexArea nameArea="Hoenn" countPokedex={135} />
            <PokedexArea nameArea="Sinnoh" countPokedex={107} />
            <PokedexArea nameArea="Unys" countPokedex={156} />
            <PokedexArea nameArea="Kalos" countPokedex={72} />
            <PokedexArea nameArea="Alola" countPokedex={88} />
            <PokedexArea nameArea="Galar" countPokedex={89} />
            <PokedexArea nameArea="Paldea" countPokedex={120} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Pokedex;
