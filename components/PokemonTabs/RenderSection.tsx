import { RenderingSectionPokemons } from "@/definition";
import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";

import icons from "@/constants/ICONS";
import RenderItem from "./RenderItem";

const RenderSection = ({
  section,
  visibleSections,
  toggleVisibility,
}: RenderingSectionPokemons) => {
  const isVisible = visibleSections.includes(section.title);
  return (
    <View className="mt-5 relative z-20">
      <TouchableOpacity onPress={() => toggleVisibility(section.title)}>
        <View className="bg-tropicalBlue p-4 border border-riverBed  mx-8 mb-5 rounded-lg flex-row justify-center">
          <Text className="text-lg font-mItalic text-center text-biskay mr-3">
            {isVisible ? `Hide ${section.title}` : `Show ${section.title}`}
          </Text>
          <Image
            source={isVisible ? icons.hide : icons.show}
            className="w-5 h-5 self-center"
          />
        </View>
      </TouchableOpacity>
      {isVisible && (
        <FlatList
          data={section.data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <RenderItem item={item} />}
          numColumns={3}
        />
      )}
    </View>
  );
};

export default RenderSection;
