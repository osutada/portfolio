export function preloadImages(imagePaths: string[]): Promise<void[]> {
  const loadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  };

  return Promise.all(imagePaths.map(loadImage));
}
