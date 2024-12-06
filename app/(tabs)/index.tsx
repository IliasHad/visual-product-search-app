import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ShopSearchBar } from "@/components/SearchBar";
import { useState } from "react";
import { ProductsList } from "@/components/ProductsList";
import { useColorScheme } from "react-native";
import { useImageSearch } from "@/hooks/useImageSearch";
import { client } from "@/components/QueryClient";
import { SearchResults } from "@/components/SearchResults";
import { SelectedImagePreview } from "@/components/SelectedImagePreview";
import { viewStyles } from "@/styles";
import { useHomeViewState } from "@/hooks/useHomeViewState";
import { QueryClientProvider } from "@tanstack/react-query";


export default function HomeScreen() {
  const colorSchema = useColorScheme();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const {
    clearImageSearch,
    setSelectedImage,
    state: { searchProducts, searching, selectedImage },
  } = useImageSearch();
  const viewState = useHomeViewState(
    searching,
    searchProducts,
    selectedImage,
    searchQuery
  );
  console.log("viewState", viewState);
  console.log("searchProducts", searchProducts);  
  console.log("searching", searching);
  

  const clearResults = () => {
    setSearchQuery(null);
    clearImageSearch();
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={viewStyles(colorSchema).view}>
        <QueryClientProvider client={client}>
          <ShopSearchBar
            setSelectedImage={setSelectedImage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {selectedImage && (
            <SelectedImagePreview base64Image={selectedImage} />
          )}
          {viewState === "browsing" ? (
            <ProductsList />
          ) : (
            <SearchResults
              searchProducts={searchProducts}
              searchQuery={searchQuery}
              clearResults={clearResults}
              viewState={viewState}
            />
          )}
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
