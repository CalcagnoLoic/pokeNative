import { ImageSourcePropType } from "react-native";

export type typeNature =
  | "water"
  | "fire"
  | "grass"
  | "ground"
  | "rock"
  | "steel"
  | "ice"
  | "electric"
  | "dragon"
  | "ghost"
  | "psychic"
  | "normal"
  | "fighting"
  | "poison"
  | "bug"
  | "flying"
  | "dark"
  | "fairy";

export type Button = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  buttonStyle?: string;
  isPictured?: boolean;
  alt?: ImageSourcePropType;
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

export interface PokemonDetailsAPI {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: Index[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Mfe[];
  species: Species;
  sprites: Sprites;
  cries: Cries;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
  abilitiesDetails: {
    ability: string;
    effect: string;
    is_hidden: boolean;
  }[];
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Ability2;
}

export interface Ability2 {
  name: string;
  effect: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface Index {
  game_index: number;
  version: Version;
}

export interface Version {
  name: string;
  url: string;
}

export interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

export interface Item {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: Version2;
}

export interface Version2 {
  name: string;
  url: string;
}

export interface Mfe {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Move {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: VersionGroup;
  move_learn_method: MoveLearnMethod;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
  other: Other;
  versions: Versions;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  official_artwork: OfficialArtwork;
  showdown: Showdown;
}

export interface DreamWorld {
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
}

export interface Home {
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface OfficialArtwork {
  front_default: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
}

export interface Showdown {
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": GenerationVi;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow: Yellow;
}

export interface RedBlue {
  back_default: ImageSourcePropType;
  back_gray: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_gray: ImageSourcePropType;
}

export interface Yellow {
  back_default: ImageSourcePropType;
  back_gray: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_gray: ImageSourcePropType;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Crystal {
  back_default: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
}

export interface Gold {
  back_default: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
}

export interface Silver {
  back_default: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
}

export interface GenerationIii {
  emerald: Emerald;
  "firered-leafgreen": FireredLeafgreen;
  "ruby-sapphire": RubySapphire;
}

export interface Emerald {
  front_default: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
}

export interface FireredLeafgreen {
  back_default: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
}

export interface RubySapphire {
  back_default: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
}

export interface GenerationIv {
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface DiamondPearl {
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface HeartgoldSoulsilver {
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface Platinum {
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface GenerationV {
  "black-white": BlackWhite;
}

export interface BlackWhite {
  animated: Animated;
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface Animated {
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
  "x-y": XY;
}

export interface OmegarubyAlphasapphire {
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface XY {
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface GenerationVii {
  icons: Icons;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons {
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
}

export interface UltraSunUltraMoon {
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Icons2 {
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string | typeNature;
  url: string;
}

export interface PastType {
  generation: Generation;
  types: Type3[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface Type3 {
  slot: number;
  type: Type4;
}

export interface Type4 {
  name: string;
  url: string;
}
