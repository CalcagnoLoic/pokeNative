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
  | "fairy"
  | string;

export type typeStat =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed"
  | string;

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
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Mfe[];
  species: {
    name: string;
    url: string;
  };
  sprites: Sprites;
  cries?: {
    latest: string;
    legacy: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: typeStat;
      url: string;
    };
  }[];
  types: TypesPokemon[];
  past_types: PastType[];
  abilitiesDetails?: {
    ability: string;
    effect: string;
    is_hidden: boolean;
  }[];
  evolutionDetails?: EvolutionDetail[];
}

export interface TypesPokemon {
  slot: number;
  type: {
    name: typeNature;
    url: string;
  };
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    effect?: string;
  };
}

interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
}

interface Mfe {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    version_group: {
      name: string;
      url: string;
    };
    move_learn_method: {
      name: string;
      url: string;
    };
  }[];
}

interface Sprites {
  back_default: ImageSourcePropType | null | string;
  back_female: ImageSourcePropType | null | string;
  back_shiny: ImageSourcePropType | null | string;
  back_shiny_female: ImageSourcePropType | null | string;
  front_default: ImageSourcePropType | null | string;
  front_female: ImageSourcePropType | null | string;
  front_shiny: ImageSourcePropType | null | string;
  front_shiny_female: ImageSourcePropType | null | string;
  other?: {
    dream_world: {
      front_default: ImageSourcePropType | null | string;
      front_female: ImageSourcePropType | null | string;
    };
    home: {
      front_default: ImageSourcePropType | null | string;
      front_female: ImageSourcePropType | null | string;
      front_shiny: ImageSourcePropType | null | string;
      front_shiny_female: ImageSourcePropType | null | string;
    };
    "official-artwork": {
      front_default: ImageSourcePropType | null | string;
      front_shiny?: ImageSourcePropType | null | string;
    };
    showdown?: {
      back_default: ImageSourcePropType | null | string;
      back_female: ImageSourcePropType | null | string;
      back_shiny: ImageSourcePropType | null | string;
      back_shiny_female: ImageSourcePropType | null | string;
      front_default: ImageSourcePropType | null | string;
      front_female: ImageSourcePropType | null | string;
      front_shiny: ImageSourcePropType | null | string;
      front_shiny_female: ImageSourcePropType | null | string;
    };
  };
  versions: {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": GenerationVi;
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
  };
}

interface GenerationI {
  "red-blue": {
    back_default: ImageSourcePropType | null | string;
    back_gray: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_gray: ImageSourcePropType | null | string;
  };
  yellow: {
    back_default: ImageSourcePropType | null | string;
    back_gray: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_gray: ImageSourcePropType | null | string;
  };
}

interface GenerationIi {
  crystal: {
    back_default: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
  };
  gold: {
    back_default: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
  };
  silver: {
    back_default: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
  };
}

interface GenerationIii {
  emerald: {
    front_default: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
  };
  "firered-leafgreen": {
    back_default: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
  };
  "ruby-sapphire": {
    back_default: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
  };
}

interface GenerationIv {
  "diamond-pearl": {
    back_default: ImageSourcePropType | null | string;
    back_female: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    back_shiny_female: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
    front_shiny_female: ImageSourcePropType | null | string;
  };
  "heartgold-soulsilver": {
    back_default: ImageSourcePropType | null | string;
    back_female: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    back_shiny_female: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
    front_shiny_female: ImageSourcePropType | null | string;
  };
  platinum: {
    back_default: ImageSourcePropType | null | string;
    back_female: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    back_shiny_female: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
    front_shiny_female: ImageSourcePropType | null | string;
  };
}

interface GenerationV {
  "black-white": {
    animated: {
      back_default: ImageSourcePropType | null | string;
      back_female: ImageSourcePropType | null | string;
      back_shiny: ImageSourcePropType | null | string;
      back_shiny_female: ImageSourcePropType | null | string;
      front_default: ImageSourcePropType | null | string;
      front_female: ImageSourcePropType | null | string;
      front_shiny: ImageSourcePropType | null | string;
      front_shiny_female: ImageSourcePropType | null | string;
    };
    back_default: ImageSourcePropType | null | string;
    back_female: ImageSourcePropType | null | string;
    back_shiny: ImageSourcePropType | null | string;
    back_shiny_female: ImageSourcePropType | null | string;
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
    front_shiny_female: ImageSourcePropType | null | string;
  };
}

interface GenerationVi {
  "omegaruby-alphasapphire": {
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
    front_shiny_female: ImageSourcePropType | null | string;
  };
  "x-y": {
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
    front_shiny_female: ImageSourcePropType | null | string;
  };
}

interface GenerationVii {
  icons: {
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
  };
  "ultra-sun-ultra-moon": {
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
    front_shiny: ImageSourcePropType | null | string;
    front_shiny_female: ImageSourcePropType | null | string;
  };
}

interface GenerationViii {
  icons: {
    front_default: ImageSourcePropType | null | string;
    front_female: ImageSourcePropType | null | string;
  };
}

interface PastType {
  generation: {
    name: string;
    url: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export type EvolutionDetail = {
  name: string;
  level: string | number;
  sprite: string;
  trigger: string;
  item: string;
  happiness: number;
  affection: number;
  beauty: number;
  timeOfDay: string;
  location: string;
  needsRain: boolean;
  knownMove: string;
};

export type Input = {
  initialQuery: string;
  onChangeText: (newValue: string) => void;
};

export type SpriteType = {
  name: string;
  spriteUri: string;
};

export type OtherSprite = {
  title: string;
  sprite1: string;
  sprite2: string;
  label1: string;
  label2: string;
};

export type Types = {
  types: TypesPokemon[]
}