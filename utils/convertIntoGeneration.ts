export const convertIntoGeneration = (title: string) => {
  const match = title.match(/^Generation (\d)/);
  return match ? `${match[1]}G` : "x";
};
