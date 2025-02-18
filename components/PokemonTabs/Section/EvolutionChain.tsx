import { getEvolutionDetails } from "@/utils/getEvolutionDetails";
import { PokemonDetailsAPI } from "@/definition";
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

import icons from "@/constants/ICONS";

const EvolutionChain = ({ data }: { data: PokemonDetailsAPI }) => {
  return (
    <View className="gap-5">
      {data.evolutionDetails &&
        data.evolutionDetails.map((evolution, index) => (
          <View
            className="flex-row items-center rounded-2xl"
            style={{ overflow: "visible", backgroundColor: "rgba(0,0,0,0.25)" }}
            key={index}
          >
            <TouchableOpacity
              key={evolution.name}
              onPress={() => router.replace(`/pokemon/${evolution.name}`)}
              className="flex-col items-center"
            >
              <View>
                <Image
                  source={icons.ballBackground}
                  className="w-16 h-16 absolute top-[45%] left-[38%] -translate-x-[45%] -translate-y-[40%] "
                  resizeMode="contain"
                />

                <Image
                  source={{ uri: evolution.sprite }}
                  className="w-24 h-24"
                  resizeMode="contain"
                />
              </View>

              <Text className="capitalize w-28 text-center leading-6 text-white font-rRegular pb-4">
                {evolution.name}
              </Text>
            </TouchableOpacity>

            <Text
              className="flex-1 pl-2 text-center leading-6 text-white font-rItalic text-base"
              numberOfLines={5}
            >
              {getEvolutionDetails(evolution.trigger, evolution)}
            </Text>
          </View>
        ))}
    </View>
  );
};

export default EvolutionChain;
