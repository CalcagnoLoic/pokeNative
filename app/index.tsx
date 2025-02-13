import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import images from "@/constants/images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-snuff">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex flex-col h-full mb-14">
          <Header />

          <View className="mt-12 justify-center items-center px-8 ">
            <Text className="text-4xl font-mBold text-biskay mt-12 text-center">
              Welcome on PokeNative !
            </Text>
            <Image
              source={images.homepage}
              resizeMode="contain"
              className="w-full max-w-[300px] h-[180px] my-8"
            />
            
            <Text className="font-rRegular text-center text-biskay">
              Here you can find information about your favorite pokémons 😊
            </Text>

            <CustomButton
              title="Your Pokémon quest is about to begin!"
              handlePress={() => router.push("/pokemon")}
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
