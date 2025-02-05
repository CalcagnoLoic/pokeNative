import { ImageSourcePropType } from "react-native";

export type Button = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  buttonStyle?: string;
};

export type Tabs = {
  icon: ImageSourcePropType;
  color: string;
  title: string;
  focused: boolean;
  iconSize: string;
};

export type Pokedex = {
  nameArea: string;
  countPokedex: number;
};
