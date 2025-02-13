import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { ReactNode, useEffect } from "react";
import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export const FontLoader = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "Montserrat-BoldItalic": require("../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf"),
    "Montserrat-ExtraBold": require("../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
    "Montserrat-Italic": require("../assets/fonts/Montserrat/Montserrat-Italic.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    "Roboto-ExtraBold": require("../assets/fonts/Roboto/Roboto-ExtraBold.ttf"),
    "Roboto-Italic": require("../assets/fonts/Roboto/Roboto-Italic.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
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
