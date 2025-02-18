import { FontLoader } from "@/lib/fontLoader";
import { Stack } from "expo-router";

import "@/assets/style/global.css";

export default function RootLayout() {
  return (
    <FontLoader>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="pokemon/[id]" options={{ headerShown: false }} />
      </Stack>
    </FontLoader>
  );
}
