import { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Background from "@/components/Background";
import icons from "@/constants/ICONS";
import SearchInput from "@/components/SearchInput";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="bg-zircon h-full">
      <Background img={icons.search} otherStyle="grayscale" />
      <View className="border-b relative z-10 bg-zircon">
        <View className="px-8 pt-4 flex justify-between flex-row mb-4">
          <Text className="font-mExtrabold text-lg self-center text-riverBed">
            PokeNative
          </Text>
        </View>
      </View>

      <View className="px-8">
        <SearchInput initialQuery={searchQuery} onChangeText={setSearchQuery} />

        <Text className="mt-4 font-kregular">
          Result for: <Text className="italic">{searchQuery}</Text>
        </Text>
        <StatusBar backgroundColor="#F0F4FF" barStyle={"dark-content"} />
      </View>
    </SafeAreaView>
  );
};
export default Search;
{
  /*             */
}
