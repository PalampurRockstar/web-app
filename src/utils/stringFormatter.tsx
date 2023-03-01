export const titleCase = (camelCase) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match: any) => match.toUpperCase())
    .trim();

export const initCap = (str: string) => {
  if (str === undefined || null) return "";
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
};
export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");
