import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="bg-snuff h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex flex-col h-full">
          <Header />

          <View className="my-14 justify-center px-4">
            <Text className="text-center font-kbold text-2xl underline">
              Looking for something in particular?
            </Text>

            <SearchInput initialQuery={searchQuery} onChangeText={setSearchQuery} />

            <Text className="mt-4 font-kregular">
              Result for: <Text className="italic">{searchQuery}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Search;
