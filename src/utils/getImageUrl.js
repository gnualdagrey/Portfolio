export const getImageUrl = (path) => {
  if (!path) {
    console.error("❌ getImageUrl called without a valid path!");
    return "";
  }
  console.log(new URL(`../assets/${path}`, import.meta.url).href)

  // ✅ Use `new URL` relative to this file
  return new URL(`../assets/${path}`, import.meta.url).href;
};
