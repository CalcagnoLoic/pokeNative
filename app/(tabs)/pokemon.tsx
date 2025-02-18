import { convertIntoGeneration } from "@/utils/convertIntoGeneration";
import { groupByGeneration } from "@/utils/groupBy";
import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import { useGetAllPokemons } from "@/hooks/useGetAllPokemons";

import Background from "@/components/Background";
import EmptyState from "@/components/EmptyState";
import icons from "@/constants/ICONS";
import LoadingState from "@/components/LoadingState";
import RenderSection from "@/components/PokemonTabs/RenderSection";

const Pokemon = () => {
  const { data, isLoading, error } = useGetAllPokemons();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleVisibility = useCallback((sectionTitle: string) => {
    setVisibleSections((prevState) =>
      prevState.includes(sectionTitle)
        ? prevState.filter((title) => title !== sectionTitle)
        : [...prevState, sectionTitle],
    );
  }, []);

  const toggleClear = () => {
    setSelected([]);
    setVisibleSections([]);
  };

  const toggleFiltering = () => {
    setIsFiltering((prevValue) => !prevValue);
  };

  const toggleSelection = (generationTitle: string) => {
    setSelected(
      (prevState) =>
        prevState.includes(generationTitle)
          ? prevState.filter((title) => title !== generationTitle) // Désélectionner
          : [...prevState, generationTitle], // Sélectionner
    );
  };

  const filteredSection = selected.length
    ? groupByGeneration(data).filter((section) =>
        selected.includes(section.title),
      )
    : groupByGeneration(data);

  if (isLoading) return <LoadingState />;

  if (error) return <EmptyState error={error} />;

  return (
    <SafeAreaView className="bg-zircon h-full">
      <Background img={icons.pokemon} />

      <View className="border-b relative z-10 bg-zircon">
        <View className="px-8 pt-4 flex justify-between flex-row mb-4">
          <Text className="font-mExtrabold text-lg self-center text-riverBed">
            PokeNative
          </Text>
          <TouchableOpacity onPress={toggleFiltering}>
            <Image
              source={isFiltering ? icons.closeFilter : icons.filter}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <StatusBar backgroundColor="#F0F4FF" barStyle={"dark-content"} />
        </View>

        {isFiltering && (
          <View className="px-8 relative z-20">
            <View className="flex flex-row flex-wrap justify-center gap-5 mb-5 px-8">
              {groupByGeneration(data).map((title) => (
                <TouchableOpacity
                  key={title.title}
                  onPress={() => toggleSelection(title.title)}
                  className={`p-2 rounded-full shadow-lg font-rBoldi shadow-black border text-biskay border-riverBed ${
                    selected.includes(title.title)
                      ? "bg-macaroniAndCheese "
                      : "bg-geyser"
                  }`}
                >
                  <Text className={`font-rBoldi text-biskay`}>
                    {convertIntoGeneration(title.title)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              className="w-1/2 block mx-auto"
              onPress={toggleClear}
            >
              <Text className="border bg-macaroniAndCheese text-biskay p-3 font-mExtrabold rounded-3xl text-center mb-3">
                Clear All
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <FlatList
        data={filteredSection}
        keyExtractor={(section) => section.title}
        renderItem={({ item }) => (
          <RenderSection
            section={item}
            visibleSections={visibleSections}
            toggleVisibility={toggleVisibility}
          />
        )}
        ListEmptyComponent={<EmptyState error={error} />}
      />
    </SafeAreaView>
  );
};

export default Pokemon;
