import Header from "@/components/Header";
import { useGetAllPokemons } from "@/hooks/useGetAllPokemons";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { groupByGeneration } from "@/lib/groupBy";

const Pokemon = () => {
  const { data, isLoading } = useGetAllPokemons();
  const [visibleSection, setVisibleSection] = useState<{
    [key: string]: boolean;
  }>({
    "Generation 1 (1 - 151)": true,
  });

  const sections = groupByGeneration(data);

  const toogleVisibility = (sectionTitle: string) => {
    setVisibleSection((previousState) => ({
      ...previousState,
      [sectionTitle]: !previousState[sectionTitle],
    }));
  };

  if (isLoading) return <ActivityIndicator size="large" />;

  const RenderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(`i press pokemon ${item.name}`);
      }}
    >
      <View className=" mx-5">
        <View className="flex flex-row gap-2 h-28 justify-center">
          <Image
            source={{ uri: item.sprite }}
            className="w-20 h-20 "
            resizeMode="contain"
          />
          <Text
            className="self-center font-kregular capitalize my-4"
            numberOfLines={1}
          >
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-snuff h-full">
      <SectionList
        sections={sections}
        key={2}
        keyExtractor={(item) => item.name.toString()}
        ListHeaderComponent={
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="w-full flex h-full">
              <Header />

              <View className="my-14 justify-center px-4">
                <Text className="text-center font-kbold text-2xl underline">
                  Here is the complete list of pokemons
                </Text>
              </View>
            </View>
          </ScrollView>
        }
        renderSectionHeader={({ section: { title } }) => (
          <TouchableOpacity onPress={() => toogleVisibility(title)}>
            <View className="bg-periglacialBlue py-2 px-4">
              <Text className="text-xl font-kbold text-center">
                {visibleSection[title] ? title : `Show ${title}`}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        renderItem={({ item, section }) => {
          return visibleSection[section.title] ? (
            <RenderItem item={item} />
          ) : null;
        }}
      />
    </SafeAreaView>
  );
};
export default Pokemon;
