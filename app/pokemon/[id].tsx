import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import CustomButton from "@/components/CustomButton";
import icons from "@/constants/icons";
import { refactorStats } from "@/utils/refactorStats";
import { getColorStats } from "@/utils/getColorStat";
import { getEvolutionDetails } from "@/utils/getEvolutionDetails";

import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import SpriteSection from "@/components/PokemonTabs/SpriteSection";
import { PlaySound } from "@/utils/playSound";
import OtherSpritesSection from "@/components/PokemonTabs/OtherSpritesSection";
import PokemonType from "@/components/PokemonTabs/PokemonType";
import { SafeAreaView } from "react-native-safe-area-context";

const PokemonDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, loading, error } = usePokemonDetails({
    id: Array.isArray(id) ? id[0] : id,
  });

  if (loading) return <LoadingState />;

  if (error) return <EmptyState error={error} />;

  return (
    data && (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className=" bg-snuff  flex">
            <View className="px-12 mt-5">
              <PokemonType types={data.types} />
              <SpriteSection
                name={data.name}
                spriteUri={
                  data.sprites.other?.["official-artwork"]
                    .front_default as string
                }
              />
            </View>
            <View className="bg-blue-700 rounded-t-3xl p-5">
              <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white  items-center">
                General informations
              </Text>

              <View className="flex flex-row justify-between">
                <View className="self-center">
                  <View className="flex flex-row h-12">
                    <Text className="font-kextrabold underline text-biskay text-lg">
                      Weight:
                    </Text>
                    <Text className="font-kregular text-biskay">
                      {" "}
                      {data.weight} lbs
                    </Text>
                  </View>
                  <View className="flex flex-row h-12">
                    <Text className="font-kextrabold underline text-biskay text-lg">
                      Height:
                    </Text>
                    <Text className="font-kregular text-biskay">
                      {" "}
                      {data.height} ft
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => PlaySound({ uriSound: data.cries?.latest })}
                >
                  <Image
                    source={icons.audio}
                    resizeMode="contain"
                    className="w-20 h-20 ml-12"
                  />
                </TouchableOpacity>
              </View>

              <Text className="pb-2 font-kextrabold underline h-8 text-biskay text-lg">
                Ability:{" "}
              </Text>
              {data.abilitiesDetails &&
                data.abilitiesDetails.map((ability, index) => (
                  <View key={ability.ability}>
                    <Text className="flex-col underline font-kextrabold h-6 capitalize text-biskay">
                      {index + 1}. {ability.ability}:
                    </Text>
                    <Text className="font-kregular mb-4 text-biskay">
                      {ability.effect ? ability.effect : "No effect available"}
                    </Text>
                  </View>
                ))}

              <Text className="font-kmedium pb-2 text-biskay underline">
                Held items:{" "}
                {data.held_items.map((held, index) => (
                  <Text key={held.item.name}>
                    {held.item.name.length !== 0 ? held.item.name : "Not items"}
                  </Text>
                ))}
              </Text>

              <View>
                <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
                  Statistics
                </Text>
                {(() => {
                  const maxOtherStat = Math.max(
                    ...data.stats
                      .filter((stat) => stat.stat.name !== "hp")
                      .map((stat) => stat.base_stat),
                  );

                  return data.stats.map((stat) => {
                    let percentage = 100;
                    const isHP = stat.stat.name === "hp";

                    if (stat.stat.name !== "hp") {
                      percentage = (stat.base_stat / maxOtherStat) * 100;
                    }

                    return (
                      <View>
                        <Text className="font-kregular text-center text-lg mb-2 mt-5">
                          {refactorStats(
                            stat.stat.name as keyof typeof refactorStats,
                          )}
                          : {stat.base_stat}
                        </Text>
                        <View className="bg-periglacialBlue h-8 w-full rounded-xl">
                          <View
                            className="h-8 rounded-xl"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: `${getColorStats(percentage, isHP)}`,
                            }}
                          ></View>
                        </View>
                      </View>
                    );
                  });
                })()}
              </View>

              <View>
                <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
                  Evolution Chain
                </Text>
                <View>
                  {data.evolutionDetails &&
                    data.evolutionDetails.map((evolution) => (
                      <View
                        className="flex-row items-center h-auto"
                        style={{ overflow: "visible" }}
                      >
                        <TouchableOpacity
                          key={evolution.name}
                          onPress={() =>
                            router.replace(`/pokemon/${evolution.name}`)
                          }
                          className="flex-col items-center"
                        >
                          <Image
                            source={{ uri: evolution.sprite }}
                            className="w-24 h-24"
                            resizeMode="contain"
                          />
                          <Text className="font-kmedium capitalize w-28 text-center leading-6 text-biskay">
                            {evolution.name}
                          </Text>
                        </TouchableOpacity>

                        <Text
                          className="font-kregular flex-1 pl-2 text-center leading-6 text-biskay"
                          numberOfLines={5}
                        >
                          {getEvolutionDetails(evolution.trigger, evolution)}
                        </Text>
                      </View>
                    ))}
                </View>
              </View>

              <OtherSpritesSection
                title="Difference between male and female"
                sprite1={data.sprites.front_default as string}
                label1="Male"
                sprite2={
                  (data.sprites.front_female ||
                    data.sprites.front_default) as string
                }
                label2="Female"
              />

              <OtherSpritesSection
                title="Difference between Shiny and Unshiny"
                sprite1={data.sprites.front_default as string}
                label1="Unshiny"
                sprite2={
                  (data.sprites.front_shiny ||
                    data.sprites.front_default) as string
                }
                label2="Shiny"
              />

              <CustomButton
                title="Go back to the list"
                handlePress={() => router.push("/(tabs)/pokemon")}
                buttonStyle="bg-periglacialBlue p-4 rounded-lg border mb-8 mt-8"
                isPictured
                alt={icons.goBack}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  );
};

export default PokemonDetails;
