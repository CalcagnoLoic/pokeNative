import React, { useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { groupByGeneration } from "@/utils/groupBy";
import { useGetAllPokemons } from "@/hooks/useGetAllPokemons";
import icons from "@/constants/icons";
import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import { convertIntoGeneration } from "@/utils/convertIntoGeneration";
import RenderSection from "@/components/PokemonTabs/RenderSection";
import TextBox from "@/components/TextBox";

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
    <SafeAreaView className="bg-snuff h-full">
      <View>
        <View className="px-8 pt-10 flex justify-between flex-row mb-4">
          <Text className="font-mExtrabold text-lg self-center">
            PokeNative
          </Text>
          <TouchableOpacity onPress={toggleFiltering}>
            <Image
              source={icons.filter}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {isFiltering && (
          <View className="px-8">
            <View className="flex flex-row flex-wrap justify-center gap-5 mb-5 px-8">
              {groupByGeneration(data).map((title) => (
                <TouchableOpacity
                  key={title.title}
                  onPress={() => toggleSelection(title.title)}
                  className={`p-2 rounded-full shadow-lg font-rBoldi shadow-black border ${selected.includes(title.title) ? "bg-biskay border-periglacialBluebord" : "bg-periglacialBlue er-biskay"}`}
                >
                  <Text
                    className={`font-rBoldi ${selected.includes(title.title) ? "text-periglacialBlue" : "text-biskay"}`}
                  >
                    {convertIntoGeneration(title.title)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity className="w-1/2 block mx-auto">
              <TextBox title="Clear All" />
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
