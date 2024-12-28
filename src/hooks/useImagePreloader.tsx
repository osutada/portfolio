import { useEffect, useState } from "react";

type ImageSource = string | { default: string };

export const useImagePreloader = (imageSources: ImageSource[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedImages = 0;

    const preloadImage = (src: ImageSource) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = typeof src === "string" ? src : src.default;
        img.onload = () => {
          loadedImages++;
          setProgress((loadedImages / imageSources.length) * 100);
          resolve(img);
        };
        img.onerror = reject;
      });
    };

    Promise.all(imageSources.map(preloadImage))
      .then(() => setImagesPreloaded(true))
      .catch((err) => console.error("Failed to preload images", err));
  }, [imageSources]);

  return { imagesPreloaded, progress };
};
