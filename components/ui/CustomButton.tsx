import { Button } from "@/definition";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  buttonStyle,
  isPictured,
  alt,
}: Button) => {
  return (
    <TouchableOpacity onPress={handlePress} className={`${containerStyles}`}>
      <View className={`${buttonStyle} flex flex-row justify-center items-center gap-5`}>
        {isPictured && (
          <Image source={alt} resizeMode="contain" className="w-5 h-5" />
        )}
        <Text className="text-center text-biskay font-rRegular">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CustomButton;
