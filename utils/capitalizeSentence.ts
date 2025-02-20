export const capitalizeSentence = (val: string) => {
  const lowercased = val.toLowerCase().trim();

  return lowercased.replace(
    /(^|[.!?]\s+)([a-z])/g,
    (_match, before, letter) => before + letter.toUpperCase(),
  );
};
