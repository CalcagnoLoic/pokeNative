import { Audio } from "expo-av";
import { Alert } from "react-native";

export const PlaySound = async ({ uriSound }: { uriSound?: string }) => {
  if (!uriSound) {
    Alert.alert("Error", "Sound cannot be played at the moment");
    return;
  }

  const { sound } = await Audio.Sound.createAsync({ uri: uriSound as string });

  try {
    await sound.playAsync();
    await new Promise((resolve) => sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        resolve(null);
      }
    }));
  } catch (error) {
    console.error("Error playing sound:", error);
  } finally {
    await sound.unloadAsync(); 
  }
};
