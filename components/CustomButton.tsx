import { Button } from "@/definition";
import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  buttonStyle,
}: Button) => {
  return (
    <TouchableOpacity onPress={handlePress} className={`${containerStyles}`}>
      <View className={`${buttonStyle}`}>
        <Text className="text-xs text-biskay font-pregular text-center">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CustomButton;
