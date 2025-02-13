import { Text } from "react-native";

const TextBox = ({ title }: { title: string }) => {
  return <Text className="text-center border p-3 w-fit my-3 rounded-xl">{title}</Text>;
};

export default TextBox;
