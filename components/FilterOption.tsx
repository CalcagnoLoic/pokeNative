import { View, Text, TouchableOpacity } from "react-native";
import { groupByGeneration } from "@/utils/groupBy";
import { convertIntoGeneration } from "@/utils/convertIntoGeneration";
import { Filter } from "@/definition";

import SearchInput from "./ui/SearchInput";

const FilterOption = ({
  data,
  queryState,
  selectionState,
  updateQuery,
  updateSelection,
  clearData,
}: Filter) => {
  return (
    <View>
      <View className="px-4 relative z-20 mb-7">
        <SearchInput initialQuery={queryState} onChangeText={updateQuery} />
      </View>

      <View className="px-4 relative z-20">
        <View className="flex flex-row flex-wrap justify-center gap-5 mb-5 px-8">
          {groupByGeneration(data).map((title) => (
            <TouchableOpacity
              key={title.title}
              onPress={() => updateSelection(title.title)}
              className={`p-2 rounded-full shadow-lg font-rBoldi shadow-black border text-biskay border-riverBed ${
                selectionState.includes(title.title)
                  ? "bg-macaroniAndCheese "
                  : "bg-geyser"
              }`}
            >
              <Text className={`font-rBoldi text-biskay`}>
                {convertIntoGeneration(title.title)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity className="w-1/2 block mx-auto" onPress={clearData}>
          <Text className="border bg-macaroniAndCheese text-biskay p-3 font-mExtrabold rounded-3xl text-center mb-3">
            Clear All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterOption;
