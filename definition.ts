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

export type typeStat =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

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
  cries: {
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
  types: {
    slot: number;
    type: {
      name: typeNature;
      url: string;
    };
  }[];
  past_types: PastType[];
  abilitiesDetails: {
    ability: string;
    effect: string;
    is_hidden: boolean;
  }[];
  evolutionDetails: {
    name: string;
    level: string | number;
    sprite: ImageSourcePropType;
    trigger: string;
    item: string;
    happiness: string;
    affection: string;
    beauty: string;
    timeOfDay: string;
    location: string;
    needRain: boolean;
    knownMove: string;
  }[];
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    effect: string;
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
  back_default: ImageSourcePropType;
  back_female: ImageSourcePropType;
  back_shiny: ImageSourcePropType;
  back_shiny_female: ImageSourcePropType;
  front_default: ImageSourcePropType;
  front_female: ImageSourcePropType;
  front_shiny: ImageSourcePropType;
  front_shiny_female: ImageSourcePropType;
  other: {
    dream_world: {
      front_default: ImageSourcePropType;
      front_female: ImageSourcePropType;
    };
    home: {
      front_default: ImageSourcePropType;
      front_female: ImageSourcePropType;
      front_shiny: ImageSourcePropType;
      front_shiny_female: ImageSourcePropType;
    };
    official_artwork: {
      front_default: ImageSourcePropType;
      front_shiny: ImageSourcePropType;
    };
    showdown: {
      back_default: ImageSourcePropType;
      back_female: ImageSourcePropType;
      back_shiny: ImageSourcePropType;
      back_shiny_female: ImageSourcePropType;
      front_default: ImageSourcePropType;
      front_female: ImageSourcePropType;
      front_shiny: ImageSourcePropType;
      front_shiny_female: ImageSourcePropType;
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
    back_default: ImageSourcePropType;
    back_gray: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_gray: ImageSourcePropType;
  };
  yellow: {
    back_default: ImageSourcePropType;
    back_gray: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_gray: ImageSourcePropType;
  };
}

interface GenerationIi {
  crystal: {
    back_default: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
  };
  gold: {
    back_default: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
  };
  silver: {
    back_default: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
  };
}

interface GenerationIii {
  emerald: {
    front_default: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
  };
  "firered-leafgreen": {
    back_default: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
  };
  "ruby-sapphire": {
    back_default: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
  };
}

interface GenerationIv {
  "diamond-pearl": {
    back_default: ImageSourcePropType;
    back_female: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    back_shiny_female: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
    front_shiny_female: ImageSourcePropType;
  };
  "heartgold-soulsilver": {
    back_default: ImageSourcePropType;
    back_female: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    back_shiny_female: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
    front_shiny_female: ImageSourcePropType;
  };
  platinum: {
    back_default: ImageSourcePropType;
    back_female: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    back_shiny_female: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
    front_shiny_female: ImageSourcePropType;
  };
}

interface GenerationV {
  "black-white": {
    animated: {
      back_default: ImageSourcePropType;
      back_female: ImageSourcePropType;
      back_shiny: ImageSourcePropType;
      back_shiny_female: ImageSourcePropType;
      front_default: ImageSourcePropType;
      front_female: ImageSourcePropType;
      front_shiny: ImageSourcePropType;
      front_shiny_female: ImageSourcePropType;
    };
    back_default: ImageSourcePropType;
    back_female: ImageSourcePropType;
    back_shiny: ImageSourcePropType;
    back_shiny_female: ImageSourcePropType;
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
    front_shiny_female: ImageSourcePropType;
  };
}

interface GenerationVi {
  "omegaruby-alphasapphire": {
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
    front_shiny_female: ImageSourcePropType;
  };
  "x-y": {
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
    front_shiny_female: ImageSourcePropType;
  };
}

interface GenerationVii {
  icons: {
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
  };
  "ultra-sun-ultra-moon": {
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
    front_shiny: ImageSourcePropType;
    front_shiny_female: ImageSourcePropType;
  };
}

interface GenerationViii {
  icons: {
    front_default: ImageSourcePropType;
    front_female: ImageSourcePropType;
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
