import { View, Image, ImageSourcePropType } from "react-native";

const Background = ({
  img,
  otherStyle,
}: {
  img: ImageSourcePropType;
  otherStyle?: string;
}) => {
  return (
    <View className={`absolute top-0 right-0 z-1`}>
      <Image
        source={img}
        resizeMode="contain"
        className={`w-72 h-72 mt-8 opacity-25 ${otherStyle}`}
        style={{ opacity: 0.3 }}
      />
    </View>
  );
};

export default Background;
