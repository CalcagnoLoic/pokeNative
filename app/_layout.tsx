import { Stack } from "expo-router";
import "@/assets/style/global.css";
import { FontLoader } from "@/lib/fontLoader";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <FontLoader>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="pokemon/[id]" options={{ headerShown: false }} />
        </Stack>
      </FontLoader>
    </NativeBaseProvider>
  );
}
