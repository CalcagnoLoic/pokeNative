import { Tabs } from "@/definition";
import { View, Text, Image } from "react-native";

const TabsIcon = ({ icon, color, title, focused, iconSize }: Tabs) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        className={`self-center ${focused ? "mt-6" : "mt-12"}  z-20 ${iconSize}`}
        tintColor={color}
      />
      <Text
        numberOfLines={1}
        className={`text-center w-full  text-snuff z-20 ${focused ? "font-rBold text-base" : "font-rRegular text-sm"}`}
      >
        {title}
      </Text>

      {focused && (
        <View
          className={`w-20 h-20 rounded-full bg-biskay z-10 -top-1 absolute border-none ${focused ? "-top-3" : "-top-1"}`}
        ></View>
      )}
    </View>
  );
};
export default TabsIcon;
