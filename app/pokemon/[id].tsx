import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { typeColor } from "@/utils/typeColor";
import { useState } from "react";
import { renderContent } from "@/lib/renderContent";

import icons from "@/constants/ICONS";
import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import SpriteSection from "@/components/PokemonTabs/SpriteSection";
import PokemonType from "@/components/PokemonTabs/PokemonType";

const PokemonDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, loading, error } = usePokemonDetails({
    id: Array.isArray(id) ? id[0] : id,
  });

  const [selectedTabs, setSelectedTabs] = useState<string>("Infos");

  if (loading) return <LoadingState />;

  if (error) return <EmptyState error={error} />;

  return (
    data && (
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="bg-zircon flex-1">
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
                  cries={data.cries?.latest as string}
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
                flex: 1,
                minHeight: "100%",
              }}
            >
              <View
                className="flex flex-row justify-between items-center px-8 mb-5 rounded-t-[32px] p-5"
                style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
              >
                {["Infos", "Evolution", "Stats", "Form"].map((tab, index) => (
                  <Pressable onPress={() => setSelectedTabs(tab)} key={index}>
                    <Text
                      className={` text-white ${
                        selectedTabs === tab
                          ? "text-xl font-mBold "
                          : " font-mRegular"
                      } `}
                    >
                      {tab}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <View className="flex-1">
                {renderContent({ state: selectedTabs, data })}
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  );
};

export default PokemonDetails;
