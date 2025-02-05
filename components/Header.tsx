import React from "react";
import { View, Text } from "react-native";

const Header = () => {
  return (
    <>
      <View className="bg-crimson h-[150px]  justify-center items-center border-b-2 border-b-periglacialBlue">
        <Text className="text-3xl font-sregular color-supernova">
          PokeNative
        </Text>
      </View>

      <View className="w-20 h-20 rounded-full bg-white absolute top-[115px] left-1/2 -translate-x-1/2 border-2 border-periglacialBlue"></View>
      <View className="w-8 h-8 rounded-full bg-midGray absolute top-[135px] left-1/2 -translate-x-1/2 "></View>
    </>
  );
};
export default Header;
