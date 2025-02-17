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
import { LinearGradient } from "expo-linear-gradient";
import { typeColor } from "@/utils/typeColor";
import Informations from "@/components/PokemonTabs/Section/Informations";

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
          <View className=" bg-zircon  ">
            <View className="p-5">
              <TouchableOpacity onPress={() => router.push("/pokemon")}>
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  className="w-12 h-12"
                />
              </TouchableOpacity>

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
            </View>

            <LinearGradient
              colors={[
                data.types[1]
                  ? typeColor(data.types[1].type.name as keyof typeof typeColor)
                  : typeColor(
                      data.types[0].type.name as keyof typeof typeColor,
                    ),
                typeColor(data.types[0].type.name as keyof typeof typeColor),
              ]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 1 }}
              style={{
                padding: 12,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                backgroundColor: "transparent",
              }}
            >
              <Informations data={data} />

{/*               <View>
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

 */}
            </LinearGradient>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  );
};

export default PokemonDetails;
