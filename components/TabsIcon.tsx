import { View, Text, Image } from "react-native";

const TabsIcon = ({ icon, color, title, focused, iconSize }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        className={`self-center ${focused ? "mt-10" : "mt-16"}  z-20 ${iconSize}`}
        tintColor={color}
      />
      <Text
        className={`text-center w-full  text-snuff z-20 ${focused ? "font-kbold text-base" : "font-kregular text-sm"}`}
      >
        {title}
      </Text>

      {focused && (
        <View className="w-20 h-20 rounded-full bg-biskay z-10 -top-1 absolute border-t-2 border-t-periglacialBlue"></View>
      )}
    </View>
  );
};
export default TabsIcon;
