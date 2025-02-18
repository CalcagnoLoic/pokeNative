import { OtherSprite } from "@/definition";
import { View, Text, Image } from "react-native";
import TextBox from "../TextBox";

const OtherSpritesSection = ({
  title,
  sprite1,
  sprite2,
  label1,
  label2,
  types,
}: OtherSprite) => {
  const isElectricType = types?.some(
    (pokeType: any) => pokeType.type.name === "electric",
  );

  return (
    <View>
      <TextBox title={title} />

      <View className="flex flex-row justify-around">
        <View>
          <Image
            source={{ uri: sprite1 }}
            resizeMode="contain"
            className="w-40 h-40"
          />
          <Text
            className={`text-center font-rRegular ${isElectricType ? "text-midGray" : "text-white"}`}
          >
            {label1}
          </Text>
        </View>

        <View>
          <Image
            source={{ uri: sprite2 }}
            resizeMode="contain"
            className="w-40 h-40"
          />
          <Text
            className={`text-center font-rRegular ${isElectricType ? "text-midGray" : "text-white"}`}
          >
            {label2}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OtherSpritesSection;
