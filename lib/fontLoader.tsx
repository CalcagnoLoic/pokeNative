import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { ReactNode, useEffect } from "react";
import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export const FontLoader = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded] = useFonts({
    "Kaisei-Bold": require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-Bold.ttf"),
    "Kaisei-ExtraBold": require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-ExtraBold.ttf"),
    "Kaisei-Medium": require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-Medium.ttf"),
    "Kaisei-Regular": require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-Regular.ttf"),
    "Press-Regular": require("../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf"),
    "Shojumaru-Regular": require("../assets/fonts/Shojumaru/Shojumaru-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Chargement des polices...</Text>;
  }

  return children;
};
