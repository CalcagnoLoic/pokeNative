import { OtherSprite } from "@/definition";
import { View, Image } from "react-native";

import TextBox from "../ui/TextBox";

const OtherSpritesSection = ({
  title,
  sprite1,
  sprite2,
  label1,
  label2,
}: OtherSprite) => {
  return (
    <View
      className="rounded-3xl"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
    >
      <TextBox title={title} />

      <View className="flex flex-row justify-around">
        <View>
          <Image
            source={{ uri: sprite1 }}
            resizeMode="contain"
            className="w-40 h-40"
          />
          <Image
            source={label1}
            resizeMode="contain"
            className="w-5 h-5 block mx-auto mb-5"
          />
        </View>

        <View>
          <Image
            source={{ uri: sprite2 }}
            resizeMode="contain"
            className="w-40 h-40"
          />
          <Image
            source={label2}
            resizeMode="contain"
            className="w-5 h-5 block mx-auto"
          />
        </View>
      </View>
    </View>
  );
};

export default OtherSpritesSection;
