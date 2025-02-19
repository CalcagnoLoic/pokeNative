import { Input } from "@/definition";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

import ICONS from "@/constants/ICONS";

const SearchInput = ({ initialQuery, onChangeText }: Input) => {
  return (
    <View className="bg-periglacialBlue mt-6 px-4 py-2 border border-midGray rounded-lg flex-row items-center">
      <TextInput
        placeholder="Search..."
        className="font-kregular text-sm flex-1 text-biskay"
        value={initialQuery}
        onChangeText={(e) => onChangeText(e)}
      />

      <TouchableOpacity>
        <Image
          source={ICONS.search}
          className="w-5 h-5"
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
