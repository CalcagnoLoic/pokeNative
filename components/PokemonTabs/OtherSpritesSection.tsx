import { OtherSprite } from "@/definition";
import { View, Text, Image } from "react-native";

const OtherSpritesSection = ({
  title,
  sprite1,
  sprite2,
  label1,
  label2,
}: OtherSprite) => {
  return (
    <View>
      <Text className="mt-7 text-center font-pregular mb-4 px-2 py-3 bg-azure rounded-xl text-white ">
        {title}
      </Text>

      <View className="flex flex-row justify-around">
        <View>
          <Image
            source={{ uri: sprite1 }}
            resizeMode="contain"
            className="w-40 h-40"
          />
          <Text className="text-center font-kmedium text-biskay">{label1}</Text>
        </View>
        <View>
          <Image
            source={{ uri: sprite2 }}
            resizeMode="contain"
            className="w-40 h-40"
          />
          <Text className="text-center font-kmedium text-biskay">{label2}</Text>
        </View>
      </View>
    </View>
  );
};

export default OtherSpritesSection;
