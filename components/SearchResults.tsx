import { SearchImagesResults } from "@/components/ProductImageSearch";
import { NotFound } from "@/components/NotFound";
import { LoadingResults } from "@/components/LoadingResults";
import { ProductTextSearch } from "@/components/ProductTextSearch";

export const SearchResults = ({
  searching,
  searchQuery,
  searchProducts,
  clearResults,
  selectedImage,
}: {
  searching: boolean;
  searchQuery: string | null;
  searchProducts: any;
  clearResults: () => void;
  selectedImage: string | null;
}) => {
  return (
    <>
      {searching && <LoadingResults />}
      {!searching && searchQuery && !selectedImage && (
        <ProductTextSearch searchQuery={searchQuery} />
      )}
      {!searching && searchProducts && searchProducts.length > 0 && (
        <SearchImagesResults
          searchProducts={searchProducts}
          clearResults={clearResults}
        />
      )}
      {!searching && searchProducts && searchProducts.length === 0 && (
        <NotFound clearResults={clearResults} />
      )}
    </>
  );
};
