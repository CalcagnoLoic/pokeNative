import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import RenderItem from "./RenderItem";
import icons from "@/constants/icons";
import { RenderingSectionPokemons } from "@/definition";

const RenderSection = ({
  section,
  visibleSections,
  toggleVisibility,
}: RenderingSectionPokemons) => {
  const isVisible = visibleSections.includes(section.title);
  return (
    <View>
      <TouchableOpacity onPress={() => toggleVisibility(section.title)}>
        <View className="bg-periglacialBlue p-4 border border-midGray mx-8 mb-5 rounded-lg flex-row justify-center ">
          <Text className="text-xl font-kbold text-center">
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
