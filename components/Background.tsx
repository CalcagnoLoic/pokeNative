import { View, Image, ImageSourcePropType } from "react-native";

const Background = ({ img }: { img: ImageSourcePropType }) => {
  return (
    <View className="absolute right-0 z-1">
      <Image
        source={img}
        resizeMode="contain"
        className="w-72 h-72 mt-8 opacity-85"
      />
    </View>
  );
};

export default Background;
