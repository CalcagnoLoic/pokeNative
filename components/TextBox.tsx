import { Text } from "react-native";

const TextBox = ({ title, style }: { title: string; style?: string }) => {
  return (
    <Text
      className={`p-3 font-mExtrabold text-white rounded-3xl text-center ${style}`}
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
    >
      {title}
    </Text>
  );
};

export default TextBox;
