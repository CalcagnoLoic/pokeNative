import TextBox from "@/components/TextBox";
import icons from "@/constants/icons";
import { PokemonDetailsAPI } from "@/definition";
import { PlaySound } from "@/utils/playSound";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import PlayerAudio from "../PlayerAudio";

const Informations = ({ data }: { data: PokemonDetailsAPI }) => {
  const isElectricType = data.types.some(
    (type) => type.type.name === "electric",
  );

  const [selectedAbility, setSelectedAbility] = useState(
    data.abilitiesDetails ? data.abilitiesDetails[0].ability : null,
  );

  useEffect(() => {
    if (
      data.abilitiesDetails &&
      !selectedAbility &&
      data.abilitiesDetails.length > 0
    ) {
      setSelectedAbility(data.abilitiesDetails[0].ability);
    }
  }, [data, selectedAbility]);

  return (
    <View>
      <Text
        className={`text-center px-4 text-lg ${isElectricType ? "text-midGray" : "text-white"}`}
      >
        {data.evolutionDetails?.[0]?.flavorText
          ? `"${data.evolutionDetails[0].flavorText.replace(/\n/g, " ")}"`
          : "No flavor text avalaible"}
      </Text>

      {/* <PlayerAudio data={data} /> */}

      {/* <View className="flex flex-row justify-between">
        <TouchableOpacity
          onPress={() => PlaySound({ uriSound: data.cries?.latest })}
        >
          <Image
            source={icons.audio}
            resizeMode="contain"
            className="w-20 h-20 ml-12"
          />
        </TouchableOpacity>
      </View> */}

      <View
        className="flex-row p-3 justify-around rounded-3xl mt-5"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        <View>
          <Image
            source={icons.poids}
            className="w-20 h-20"
            resizeMode="contain"
            style={{ tintColor: "white" }}
          />
          <Text className="text-center text-white font-rBoldi">
            {data.weight} lbs
          </Text>
        </View>
        <View>
          <Image
            source={icons.taille}
            className="w-20 h-20"
            resizeMode="contain"
            style={{ tintColor: "white" }}
          />
          <Text className="text-center text-white font-rBoldi">
            {data.height} ft
          </Text>
        </View>
      </View>

      <View className="mt-5">
        <TextBox title="Ability" />

        <View className="flex flex-row mt-4 gap-7 justify-center">
          {data.abilitiesDetails &&
            data.abilitiesDetails.map((ability) => (
              <View key={ability.ability}>
                <TouchableOpacity
                  onPress={() => setSelectedAbility(ability.ability)}
                  className="rounded-3xl"
                >
                  <Text
                    className={`mt-3 capitalize flex-row rounded-3xl px-4 py-2 ${selectedAbility === ability.ability ? "text-white" : "text-midGray"} `}
                    style={{
                      backgroundColor:
                        selectedAbility === ability.ability
                          ? "rgba(0,0,0,0.55)"
                          : "rgba(0,0,0,0.25)",
                    }}
                  >
                    {ability.ability}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>

        {data.abilitiesDetails &&
          data.abilitiesDetails.map((ability) => (
            <>
              {selectedAbility === ability.ability && (
                <View key={ability.effect} className="mt-4 px-4">
                  <Text
                    className={`font-rRegular mb-4 ${isElectricType ? "text-midGray" : "text-white"} `}
                  >
                    {ability.effect
                      ? ability.effect.replace(/\n/g, " ")
                      : "No effect available"}
                  </Text>
                </View>
              )}
            </>
          ))}
      </View>

      <View className="mt-5">
        <TextBox title="Held items" />

        <Text className="font-kmedium pb-2 text-biskay underline">
          {data.held_items.map((held) => (
            <Text key={held.item.name}>
              {held.item.name === "" ? held.item.name : "No items held"}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
};

export default Informations;
