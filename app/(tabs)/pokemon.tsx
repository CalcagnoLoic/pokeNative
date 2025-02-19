import { groupByGeneration } from "@/utils/groupBy";
import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  Pressable,
} from "react-native";
import { useGetAllPokemons } from "@/hooks/useGetAllPokemons";

import Background from "@/components/ui/Background";
import EmptyState from "@/components/EmptyState";
import FilterOption from "@/components/FilterOption";
import icons from "@/constants/ICONS";
import LoadingState from "@/components/LoadingState";
import RenderSection from "@/components/PokemonTabs/RenderSection";
import NotFoundFilter from "@/components/NotFoundFilter";
import { RefreshControl } from "react-native";

const Pokemon = () => {
  const { data, isLoading, error } = useGetAllPokemons();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      toggleClear();
      setIsOpenFilter(false);
    }, 1000);
  }, []);

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
    setSearchQuery("");
  };

  const toogleView = () => {
    setIsOpenFilter((prevValue) => !prevValue);
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

  const researchedSection = filteredSection
    .map((section) => ({
      ...section,
      data: section.data.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
      ),
    }))
    .filter((section) => section.data.length > 0);

  if (isLoading) return <LoadingState />;

  if (error) return <EmptyState error={error} />;

  return (
    <SafeAreaView className="bg-zircon h-full">
      <Background img={icons.pokemon} />

      <View className="border-b relative z-10 bg-zircon">
        <View className="px-8 pt-4 flex justify-between flex-col mb-4">
          <View className="flex flex-row justify-between">
            <Text className="font-mExtrabold text-lg self-center text-riverBed">
              PokeNative
            </Text>

            <View className="flex flex-row gap-5 items-center">
              <Pressable onPress={toogleView}>
                <Image
                  source={icons.filterOption}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </Pressable>
              {isOpenFilter && (
                <Pressable onPress={() => setIsOpenFilter(false)}>
                  <Image
                    source={icons.closeFilterOption}
                    className="w-8 h-8"
                    resizeMode="contain"
                    style={{ tintColor: "#D9303C" }}
                  />
                </Pressable>
              )}
            </View>
          </View>

          {isOpenFilter && (
            <FilterOption
              data={data}
              queryState={searchQuery}
              selectionState={selected}
              updateQuery={setSearchQuery}
              updateSelection={toggleSelection}
              clearData={toggleClear}
            />
          )}
          <StatusBar backgroundColor="#F0F4FF" barStyle={"dark-content"} />
        </View>
      </View>

      <FlatList
        data={researchedSection}
        keyExtractor={(section) => section.title}
        renderItem={({ item }) => (
          <RenderSection
            section={item}
            visibleSections={visibleSections}
            toggleVisibility={toggleVisibility}
          />
        )}
        ListEmptyComponent={<NotFoundFilter />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Pokemon;
