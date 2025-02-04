import { Stack } from "expo-router";
import "@/assets/style/global.css";
import { FontLoader } from "@/lib/fontLoader";

export default function RootLayout() {
  return (
    <FontLoader>
      <Stack />
    </FontLoader>
  );
}
