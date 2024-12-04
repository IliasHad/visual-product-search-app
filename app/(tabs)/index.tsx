import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ShopSearchBar } from "@/components/SearchBar";
import { useState } from "react";
import { ProductsList } from "@/components/ProductsList";
import { useColorScheme } from "react-native";
import { useImageSearch } from "@/hooks/useImageSearch";
import { QueryProvider } from "@/components/QueryProvider";
import { SearchResults } from "@/components/SearchResults";
import { SelectedImagePreview } from "@/components/SelectedImagePreview";
import { viewStyles } from "@/styles";

export default function HomeScreen() {
  const colorSchema = useColorScheme();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const {
    clearImageSearch,
    setSelectedImage,
    state: { searchProducts, searching, selectedImage },
  } = useImageSearch();

  const clearResults = () => {
    setSearchQuery(null);
    clearImageSearch();
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={viewStyles(colorSchema).view}>
        <QueryProvider>
          <ShopSearchBar
            setSelectedImage={setSelectedImage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {selectedImage && (
            <SelectedImagePreview base64Image={selectedImage} />
          )}
          <SearchResults
            searchProducts={searchProducts}
            searching={searching}
            searchQuery={searchQuery}
            clearResults={clearResults}
            selectedImage={selectedImage}
          />
          {!searching && !searchProducts && !selectedImage && !searchQuery && (
            <ProductsList />
          )}
        </QueryProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
