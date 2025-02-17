import { Text } from "react-native";

const TextBox = ({ title }: { title: string }) => {
  return (
    <Text
      className="p-3 font-mExtrabold text-white rounded-3xl text-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      {title}
    </Text>
  );
};

export default TextBox;
