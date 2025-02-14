import { View, Text, ActivityIndicator } from "react-native";

const LoadingState = () => {
  return (
    <View className="flex-1 justify-center items-center bg-snuff px-8">
      <ActivityIndicator size="large" color="red" />
      <Text className="mt-5 text-xl font-mRegular text-biskay text-center">
        Your data will arrive in a few seconds 😊
      </Text>
    </View>
  );
};

export default LoadingState;
