import CustomButton from "@/components/CustomButton";
import images from "@/constants/images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-snuff">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex flex-col h-full">
          <View className="bg-crimson h-[150px]  justify-center items-center border-b-2 border-b-periglacialBlue">
            <Text className="text-3xl font-sregular color-supernova">
              PokeNative
            </Text>
          </View>

          <View className="w-20 h-20 rounded-full bg-white absolute top-[115px] left-1/2 -translate-x-1/2 border-2 border-periglacialBlue"></View>
          <View className="w-8 h-8 rounded-full bg-midGray absolute top-[135px] left-1/2 -translate-x-1/2 "></View>

          <View className="mt-12 justify-center items-center px-8 ">
            <Text className="text-4xl font-kbold text-biskay mt-12 text-center">
              Welcome on PokeNative !
            </Text>
            <Image
              source={images.homepage}
              resizeMode="contain"
              className="w-[450px] h-[180px] my-8"
            />
            
            <Text className="font-kregular text-center text-biskay">
              Here you can find information about your favorite pokémons 😊
            </Text>

            <CustomButton
              title="Your Pokémon quest is about to begin!"
              handlePress={() => router.push("/")}
              containerStyles="mt-8 text-biskay"
              buttonStyle="border-2 p-7 rounded-lg bg-periglacialBlue"
            />
          </View>
        </View>

        <StatusBar backgroundColor="#D9303C" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
