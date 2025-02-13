import { router } from "expo-router";
import { TouchableOpacity, View, Image, Text } from "react-native";

const RenderItem = ({ item }: { item: any }) => (
  <TouchableOpacity
    onPress={() => router.push(`/pokemon/${item.name}`)}
    className="block mx-auto p-2"
  >
    <View className="border justify-center rounded-xl p-2">
      <Image
        source={{ uri: item.sprite }}
        className="w-20 h-20 self-center p-3"
        resizeMode="contain"
      />
      <Text className="font-kregular capitalize self-center">{item.name}</Text>
    </View>
  </TouchableOpacity>
);

export default RenderItem;
