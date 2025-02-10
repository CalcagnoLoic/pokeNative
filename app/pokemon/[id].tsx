import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Header from "@/components/Header";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import CustomButton from "@/components/CustomButton";
import icons from "@/constants/icons";
import { typeColor } from "@/lib/typeColor";

const PokemonDetails = () => {
  const { id } = useLocalSearchParams();
  const { data } = usePokemonDetails({ id: Array.isArray(id) ? id[0] : id });

  return (
    data && (
      <>
        <Header />
        <ScrollView>
          <View className="px-8 bg-snuff z-0 ">
            <View className="mt-14 justify-center px-4">
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
                {data.types.map((type, index) => (
                  <Text
                    key={index}
                    style={{ backgroundColor: typeColor(type.type.name) }}
                    className="mr-12 text-center font-kregular text-lg p-4 rounded-xl mb-3 w-full capitalize text-periglacialBlue"
                  >
                    {type.type.name}
                  </Text>
                ))}
              </View>

              <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
                General informations
              </Text>

              <View className="flex flex-row justify-between">
                <View className="self-center">
                  <View className="flex flex-row h-12">
                    <Text className="font-kextrabold underline text-biskay text-lg">
                      Weight:
                    </Text>
                    <Text className="font-kregular text-biskay ">
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
                <View key={index}>
                  <Text className="flex-col underline font-kextrabold h-6 capitalize text-biskay">
                    {index + 1}. {ability.ability}:
                  </Text>
                  <Text className="font-kregular mb-4 text-biskay">
                    {ability.effect ? ability.effect : "No effect available"}
                  </Text>
                </View>
              ))}

              <Text className="font-kmedium pb-2 text-biskay">
                Held items:{" "}
                {data.held_items.map((held, index) => (
                  <Text key={index}>
                    {held.item.name.length ? held.item.name : "Not items"}
                  </Text>
                ))}
              </Text>
            </View>

            <View>
              <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
                Statistics
              </Text>
              <Text>Faire des barres de progression</Text>
              {data.stats.map((stat, index) => (
                <Text key={index}>
                  {stat.stat.name} - {stat.base_stat}
                </Text>
              ))}
            </View>

            <View>
              <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
                Evolution
              </Text>
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
