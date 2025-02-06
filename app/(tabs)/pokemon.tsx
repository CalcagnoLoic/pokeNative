import Header from "@/components/Header";
import { useGetAllPokemons } from "@/hooks/useGetAllPokemons";
import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Pokemon = () => {
  const { data } = useGetAllPokemons();

  const RenderItem = ({ item }: { item: any }) => (
    <View>
      <Image
        source={{ uri: item.sprite }}
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
      />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-snuff h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.name.toString()}
        ListHeaderComponent={
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="w-full flex flex-col h-full">
              <Header />

              <View className="my-14 justify-center px-4">
                <Text className="text-center font-kbold text-2xl underline">
                  Here is the complete list of pokemons
                </Text>
              </View>
            </View>
          </ScrollView>
        }
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </SafeAreaView>
  );
};
export default Pokemon;
