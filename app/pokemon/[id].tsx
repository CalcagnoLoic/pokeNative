import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Header from "@/components/Header";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import CustomButton from "@/components/CustomButton";
import icons from "@/constants/icons";
import { typeColor } from "@/lib/typeColor";
import { refactorStats } from "@/lib/refactorStats";
import { getColorStats } from "@/lib/getColorStat";
import { getEvolutionDetails } from "@/lib/getEvolutionDetails";

const PokemonDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, loading, error } = usePokemonDetails({
    id: Array.isArray(id) ? id[0] : id,
  });

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-snuff">
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-snuff">
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    data && (
      <>
        <Header />
        <ScrollView>
          <View className="px-8 bg-snuff z-0 flex">
            <View className="mt-14 px-4">
              <CustomButton
                title="Go back to the list"
                handlePress={() => router.push("/(tabs)/pokemon")}
                buttonStyle="bg-periglacialBlue p-4 rounded-lg border mb-8"
                isPictured
                alt={icons.goBack}
              />
              <Text className="text-center font-kbold text-2xl underline capitalize text-biskay">
                {data.name}
              </Text>
              <Image
                source={{ uri: data.sprites.front_default }}
                className="w-full h-56"
                resizeMode="contain"
              />
            </View>

            <View>
              <View className="flex flex-1">
                {data.types.map((type) => (
                  <Text
                    key={type.type.name}
                    style={{ backgroundColor: typeColor(type.type.name) }}
                    className={`mr-12 text-center font-kbold text-xl p-4 rounded-xl mb-3 w-full capitalize ${type.type.name === "electric" ? "text-midGray" : "text-periglacialBlue"} `}
                  >
                    {type.type.name}
                  </Text>
                ))}
              </View>

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

                <TouchableOpacity>
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
              {data.abilitiesDetails.map((ability, index) => (
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
            </View>

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
                        {refactorStats(stat.stat.name)}: {stat.base_stat}
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
                {data.evolutionDetails.map((evolution) => (
                  <View className="flex-row items-center h-auto" style={{ overflow: 'visible' }}>
                    <TouchableOpacity
                      key={evolution.name}
                      onPress={() => router.push(`/pokemon/${evolution.name}`)}
                      className="flex-col items-center"
                    >
                      <Image
                        source={{ uri: evolution.sprite }}
                        className="w-24 h-24"
                        resizeMode="contain"
                      />
                      <Text className="font-kmedium capitalize w-24 text-center leading-6">
                        {evolution.name}
                      </Text>
                    </TouchableOpacity>

                    <Text
                      className="font-kregular flex-1 pl-2 text-center leading-6"
                      numberOfLines={5}
                    >
                      {getEvolutionDetails(evolution.trigger, evolution)}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View>
              <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
                Moves to learned
              </Text>
            </View>

            <View>
              <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
                Type affinities
              </Text>
            </View>

            <CustomButton
              title="Go back to the list"
              handlePress={() => router.push("/(tabs)/pokemon")}
              buttonStyle="bg-periglacialBlue p-4 rounded-lg border mb-8 mt-8"
              isPictured
              alt={icons.goBack}
            />
          </View>
        </ScrollView>
      </>
    )
  );
};
export default PokemonDetails;
