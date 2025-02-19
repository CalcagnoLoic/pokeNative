import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import ICONS from "@/constants/ICONS";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsReady(true);
      await SplashScreen.hideAsync();
    };

    loadApp();
  }, []);

  if (isReady) {
    return <Redirect href="/pokemon" />;
  }

  return (
    <View className="flex-1 items-center justify-center bg-zircon">
      <Text className="text-biskay text-4xl font-mExtrabold my-5">
        PokeNative
      </Text>
      <Image
        source={ICONS.splashscreen}
        resizeMode="contain"
        className="w-56 h-56 my-5"
      />
      <Text className="mt-5 text-xl font-mRegular text-biskay text-center">
        Your data will arrive in a few seconds 😊
      </Text>
      <ActivityIndicator size="large" color="#FFBE76" className="mt-4" />
    </View>
  );
}
