import { Text } from "react-native";

const TextBox = ({ title, style }: { title: string; style?: string }) => {
  return (
    <Text className={`text-center p-3  my-3 rounded-xl ${style}`}>
      {title}
    </Text>
  );
};

export default TextBox;
