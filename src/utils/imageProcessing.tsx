export const getImageSize = (
  url: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = function () {
      const width = (this as HTMLImageElement).naturalWidth;
      const height = (this as HTMLImageElement).naturalHeight;
      resolve({ width, height });
    };

    img.onerror = function () {
      reject(new Error("Failed to load image"));
    };

    img.src = url;
  });
};
