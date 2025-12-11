const images = import.meta.glob('../assets/**/*', { eager: true, import: 'default' });

export const getImageUrl = (path) => {
  if (!path) {
    console.error("❌ getImageUrl called without a valid path!");
    return "";
  }

  const fullPath = `../assets/${path}`;
  const image = images[fullPath];

  if (!image) {
    console.error(`❌ Image not found: ${fullPath}`);
    return "";
  }

  return image;
};
