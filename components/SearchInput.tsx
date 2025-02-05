import icons from "@/constants/icons";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const SearchInput = ({ initialQuery, onChangeText }) => {
  return (
    <View className="bg-periglacialBlue mt-6 px-4 py-2 border border-midGray rounded-lg flex-row items-center">
      <TextInput
        placeholder="Search about pokemon or berries.."
        className="font-kregular text-sm flex-1 text-biskay"
        value={initialQuery}
        onChangeText={(e) => onChangeText(e)}
      />

      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
