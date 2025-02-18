import { PokemonDetailsAPI } from "@/definition";
import { getColorStats } from "@/utils/getColorStat";
import { refactorStats } from "@/utils/refactorStats";
import { View, Text } from "react-native";

const Stats = ({ data }: { data: PokemonDetailsAPI }) => {
  const isElectricType =
    data && data.types.some((type) => type.type.name === "electric");
    
  return (
    <View>
      {(() => {
        const maxOtherStat = Math.max(
          ...data.stats
            .filter((stat) => stat.stat.name !== "hp")
            .map((stat) => stat.base_stat),
        );

        return data.stats.map((stat) => {
          let percentage = 100;
          const isHP = stat.stat.name === "hp";

          if (stat.stat.name !== "hp") {
            percentage = (stat.base_stat / maxOtherStat) * 100;
          }

          return (
            <View>
              <Text
                className={`font-mBold text-center text-lg mb-2 mt-5 ${isElectricType ? "text-midGray" : "text-white"}`}
              >
                {refactorStats(stat.stat.name as keyof typeof refactorStats)}:{" "}
                {stat.base_stat}
              </Text>
              <View className="h-8 w-full rounded-xl">
                <View className="border-2 rounded-3xl bg-periglacialBlue ">
                  <View
                    className="h-8 rounded-3xl"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: `${getColorStats(percentage, isHP)}`,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          );
        });
      })()}
    </View>
  );
};

export default Stats;
