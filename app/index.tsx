import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) {
    return <Redirect href="/pokemon" />;
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#1B2C5E]">
      <Text className="text-white text-2xl font-bold">Pokédex</Text>
      <ActivityIndicator size="large" color="#FFCB05" className="mt-4" />
    </View>
  );
}
