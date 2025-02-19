import { View, Text } from "react-native";

const NotFoundFilter = () => (
  <View className="px-8 mt-36">
    <Text
      className="text-biskay text-center text-lg font-mBold"
      numberOfLines={2}
    >
      The pokemon that you're looking for doesn't exist..
    </Text>
    <Text
      className="text-biskay text-center text-lg font-mBold"
      numberOfLines={2}
    >
      Try another research or refresh the page :)
    </Text>
  </View>
);

export default NotFoundFilter;
