export const limitArray = (arr: Array<any>, maxLength: number) => {
  if (maxLength <= 0) {
    console.warn("limitArray : Invalid maxLength");
  }
  const sliced = maxLength <= 0 ? [] : arr.slice(0, maxLength);
  const isSluced = maxLength <= 0 ? false : arr.length >= maxLength;
  return { isSluced, sliced };
};
