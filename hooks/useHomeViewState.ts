export type HomeViewState =
  | "browsing"
  | "searching"
  | "noResults"
  | "imageSearch"
  | "textSearch";

export const useHomeViewState = (
  searching: boolean,
  searchProducts: any,
  selectedImage: string | null,
  searchQuery: string | null
): HomeViewState => {
  if (searching) return "searching";
  if (searchProducts && searchProducts.length === 0) return "noResults";
  if (selectedImage && !searchQuery && searchProducts.length > 0)
    return "imageSearch";
  if (selectedImage || searchQuery) return "searching";
  if (searchQuery && searchProducts && searchProducts.length > 0)
    return "textSearch";
  return "browsing";
};
