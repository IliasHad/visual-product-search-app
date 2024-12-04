import { SearchImageResults } from "@/components/SearchImageResults";
import { NotFound } from "@/components/NotFound";
import { LoadingResults } from "@/components/LoadingResults";
import { SearchTextResults } from "@/components/SearchTextResults";
import { type HomeViewState } from "@/hooks/useHomeViewState";

export const SearchResults = ({
  searchQuery,
  searchProducts,
  clearResults,
  viewState,
}: {
  searchQuery: string | null;
  searchProducts: any;
  clearResults: () => void;
  viewState: HomeViewState;
  }) => {
  if (viewState === "searching") {
    return <LoadingResults />;
  }
  if (viewState === "textSearch") {
    return <SearchTextResults searchQuery={searchQuery} />;
  }
  if (viewState === "imageSearch") {
    return (
      <SearchImageResults
        searchProducts={searchProducts}
        clearResults={clearResults}
      />
    );
  }
  if (viewState === "noResults") {
    return <NotFound clearResults={clearResults} />;
  }
  return null;
};
