import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { groupByGeneration } from "@/lib/groupBy";
import { useGetAllPokemons } from "@/hooks/useGetAllPokemons";
import Header from "@/components/Header";
import icons from "@/constants/icons";
import { router } from "expo-router";

const Pokemon = () => {
  const { data, isLoading } = useGetAllPokemons();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const sections = groupByGeneration(data);

  const toggleVisibility = useCallback((sectionTitle: string) => {
    setVisibleSections((prevState) =>
      prevState.includes(sectionTitle)
        ? prevState.filter((title) => title !== sectionTitle)
        : [...prevState, sectionTitle],
    );
  }, []);

  if (isLoading) return <ActivityIndicator size="large" />;

  const RenderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => router.push(`/pokemon/${item.name}`)}>
      <View className="mx-5" >
        <View className="flex flex-row gap-2 h-28 justify-center" style={{ overflow: 'visible' }}>
          <Image
            source={{ uri: item.sprite }}
            className="w-20 h-20"
            resizeMode="contain"
          />
          <Text className="top-1/2 absolute font-kregular capitalize my-4 leading-6">
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const RenderSection = ({ section }: { section: any }) => {
    const isVisible = visibleSections.includes(section.title);
    return (
      <View>
        <TouchableOpacity onPress={() => toggleVisibility(section.title)}>
          <View className="bg-periglacialBlue p-4 border border-midGray mx-8 mb-5 rounded-lg flex-row justify-center">
            <Text className="text-xl font-kbold text-center">
              {isVisible ? `Hide ${section.title}` : `Show ${section.title}`}
            </Text>
            <Image
              source={isVisible ? icons.hide : icons.show}
              className="w-5 h-5 self-center"
            />
          </View>
        </TouchableOpacity>
        {isVisible && (
          <FlatList
            data={section.data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <RenderItem item={item} />}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-snuff h-full">
      <FlatList
        data={sections}
        keyExtractor={(section) => section.title}
        renderItem={({ item }) => <RenderSection section={item} />}
        ListHeaderComponent={
          <View>
            <Header />
            <View className="my-14 justify-center px-4">
              <Text className="text-center font-kbold text-2xl underline">
                The complete list of Pokemon
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Pokemon;
