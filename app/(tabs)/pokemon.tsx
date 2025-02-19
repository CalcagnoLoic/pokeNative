import React, { useState, useCallback } from "react";
import { refresh } from "@/utils/refresh";
import { RefreshControl } from "react-native";
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

import { useFilters } from "@/hooks/useFilters";
import Background from "@/components/ui/Background";
import EmptyState from "@/components/EmptyState";
import FilterOption from "@/components/FilterOption";
import icons from "@/constants/ICONS";
import LoadingState from "@/components/LoadingState";
import RenderSection from "@/components/PokemonTabs/RenderSection";
import NotFoundFilter from "@/components/NotFoundFilter";

const Pokemon = () => {
  const { data, isLoading, error } = useGetAllPokemons();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {
    selected,
    searchQuery,
    setSearchQuery,
    toggleSelection,
    toggleClear,
    researchedSectionPokemon,
  } = useFilters({ data, setVisibleSections });

  const onRefresh = React.useCallback(() => {
    refresh({ setRefreshing, toggleClear, setIsOpenFilter });
  }, [setRefreshing, toggleClear, setIsOpenFilter]);

  const toggleVisibility = useCallback((sectionTitle: string) => {
    setVisibleSections((prevState) =>
      prevState.includes(sectionTitle)
        ? prevState.filter((title) => title !== sectionTitle)
        : [...prevState, sectionTitle],
    );
  }, []);

  const toogleView = () => {
    setIsOpenFilter((prevValue) => !prevValue);
  };

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
        data={researchedSectionPokemon}
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
