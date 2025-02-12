export const groupByGeneration = (data: string | any[]) => {
  return [
    {
      title: "Generation 1 (1 - 151)",
      data: data.slice(0, 151),
    },
    {
      title: "Generation 2 (152 - 251)",
      data: data.slice(151, 251),
    },
    {
      title: "Generation 3 (252 - 386)",
      data: data.slice(251, 386),
    },
    {
      title: "Generation 4 (387 - 493)",
      data: data.slice(386, 493),
    },
    {
      title: "Generation 5 (494 - 649)",
      data: data.slice(493, 649),
    },
    {
      title: "Generation 6 (650 - 721)",
      data: data.slice(649, 721),
    },
    {
      title: "Generation 7 (722 - 809)",
      data: data.slice(721, 809),
    },
    {
      title: "Generation 8 (810 - 905)",
      data: data.slice(809, 905),
    },
    {
      title: "Generation 9 (906 - 1025)",
      data: data.slice(905, 1025),
    },
  ];
};
