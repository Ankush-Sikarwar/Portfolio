export const getImageUrl = (path) => {
  // Assuming assets are in the public/assets/ folder
  return new URL(`/assets/${path}`, window.location.origin).href;
};
