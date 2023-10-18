import { SigninForm, User, ValidateUserNameResponse } from "models/model";
import { useState, useEffect } from "react";
import { Photo } from "react-photo-album";
import CredService from "services/credentialService";
import { getImageSize } from "utils/imageProcessing";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48, 32, 21];
const useProcessImages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [processedImages, setProcessedImages] = useState<Photo[]>([]);
  const getSrcAndSize = async (url: string) => {
    if (url === "Add") {
      return { src: "Add", width: 50, height: 50 };
    }
    const { width, height } = await getImageSize(url);
    return {
      src: url,
      width,
      height,
    };
  };
  const processImages = async (images: string[]) => {
    if (images.length > 0) setLoading(true);
    const unprocessedPhotos = images.map(async (photo, i) => {
      const prop = await getSrcAndSize(photo);
      return {
        key: `${i}`,
        src: prop.src,
        width: prop.width,
        height: prop.height,
        srcSet: breakpoints.map((breakpoint) => {
          const height = Math.round((prop.height / prop.width) * breakpoint);
          return {
            src: prop.src,
            width: breakpoint,
            height,
          };
        }),
      };
    });
    Promise.all(unprocessedPhotos).then((ps) => {
      setLoading(false);
      setProcessedImages(ps);
    });
  };

  return { loading, processImages, processedImages };
};

export default useProcessImages;
