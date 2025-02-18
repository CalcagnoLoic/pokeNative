import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { typeColor } from "@/utils/typeColor";

import icons from "@/constants/ICONS";

const RenderItem = ({ item }: { item: any }) => (
  <TouchableOpacity
    onPress={() => router.push(`/pokemon/${item.name}`)}
    className="block mx-auto p-2"
  >
    <LinearGradient
      colors={[
        item.types[1] ? typeColor(item.types[1]) : typeColor(item.types[0]), //type secondaire ou le même type pour les monotype
        typeColor(item.types[0]), // type principal
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 10,
        padding: 8,
        aspectRatio: 1,
        paddingHorizontal: 8,
      }}
    >
      <View className="relative">
        <Image
          source={icons.ballBackground}
          className="w-14 h-14 -translate-x-[50%] -translate-y-[50%] absolute top-[50%] left-[50%]"
          resizeMode="contain"
        />
        <Image
          source={{ uri: item.sprite }}
          className="w-20 h-20 self-center p-3"
          resizeMode="contain"
        />
      </View>
      <Text
        className="font-rRegular capitalize self-center text-white"
        numberOfLines={1}
      >
        {item.name}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default RenderItem;
