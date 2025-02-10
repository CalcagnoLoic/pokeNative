import { View, Text, Image, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Header from "@/components/Header";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import CustomButton from "@/components/CustomButton";

const PokemonDetails = () => {
  const { id } = useLocalSearchParams();
  const { data } = usePokemonDetails({ id: Array.isArray(id) ? id[0] : id });

  return (
    data && (
      <ScrollView>
        <Header />
        <View className="px-8">
          <View className="mt-14 justify-center px-4">
            <CustomButton
              title="Back"
              handlePress={() => router.push("/(tabs)/pokemon")}
              buttonStyle="bg-periglacialBlue p-4 rounded-lg border mb-8"
            />
            <Text className="text-center font-kbold text-2xl underline capitalize">
              {data.name}
            </Text>
            <Image
              source={{ uri: data.sprites.front_default }}
              className="w-full h-56"
              resizeMode="cover"
            />
          </View>

          <View>
            <Text>
              {data.types.map((type, index) => (
                <Text
                  key={index}
                  className="mr-12 text-center font-kregular text-lg p-4 border rounded-xl mb-3"
                >
                  {type.type.name}
                </Text>
              ))}
            </Text>
            <Text className="mt-7 text-center font-pregular mb-4">
              Information
            </Text>
            <Text className="font-kmedium pb-2">Weight: {data.weight} lbs</Text>
            <Text className="font-kmedium pb-2">Height: {data.height} ft</Text>
            <Text className="font-kmedium pb-2">
              Ability:{" "}
              {data.abilities.map((ability, index) => (
                <Text key={index}>{ability.ability.name}</Text>
              ))}
            </Text>
            <Text className="font-kmedium pb-2">
              Held items:{" "}
              {data.held_items.map((held, index) => (
                <Text key={index}>
                  {held.item.name.length === 0 ? held.item.name : "Not items"}
                </Text>
              ))}
            </Text>
          </View>

          <View>
            <Text className="mt-7 text-center font-pregular mb-4">Stats</Text>
            {data.stats.map((stat, index) => (
              <Text key={index}>
                {stat.stat.name} - {stat.base_stat}
              </Text>
            ))}
          </View>

          <CustomButton
            title="Back"
            handlePress={() => router.push("/(tabs)/pokemon")}
            buttonStyle="bg-periglacialBlue p-4 rounded-lg border mb-8 mt-7"
          />
        </View>
      </ScrollView>
    )
  );
};
export default PokemonDetails;
