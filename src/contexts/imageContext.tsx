import React, { createContext, ReactNode, useContext } from "react";

type ImageSource = string | { default: string };

interface ImageContextType {
  imageSources: ImageSource[];
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

interface ImageProviderProps {
  children: ReactNode;
  imageSources: ImageSource[];
}

export const ImageProvider: React.FC<ImageProviderProps> = ({
  children,
  imageSources,
}) => {
  return (
    <ImageContext.Provider value={{ imageSources }}>
      {children}
    </ImageContext.Provider>
  );
};
