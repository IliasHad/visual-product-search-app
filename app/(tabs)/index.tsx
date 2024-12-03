import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ShopSearchBar from "@/components/SearchBar";
import { useProducts } from "@/hooks/useProducts";
import {
  Image,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  View
} from "react-native";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import { searchByImage } from "@/lib/search";
import { ProductsList } from "@/components/ProductsList";
import { Button } from "@/components/Button";
import theme from "@/theme";
import { useColorScheme } from "react-native";
import { getProductById, searchProductsByText } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/shopify";

export default function HomeScreen() {
  const { products, loading, fetchProducts } = useProducts();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<string[] | null>(null);
  const [searchProducts, setSearchProducts] = useState<Product[] | null>(null);
  const colorSchema = useColorScheme();

  const handleImageSearch = async () => {
    if (selectedImage) {
      const results = await searchByImage(selectedImage);
      setSearching(false);
      setSearchResults(results);
    }
  };
  useEffect(() => {
    if (selectedImage) {
      handleImageSearch();
    }
  }, [selectedImage]);
  useEffect(() => {
    const fetchProductsById = async (ids: string[]) => {
      const products = await Promise.all(
        ids.map(async (id) => await getProductById(id))
      );

      setSearchProducts(products);
    };
    if (searchResults) {
      const productIds = searchResults.map((productId) => productId);
      fetchProductsById(productIds);
    }
  }, [searchResults]);
  const handleTextSearch = async (query: string) => {
    setSearching(true);
    const results = await searchProductsByText(query);
    setSearchProducts(results);
    setSearching(false);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          backgroundColor: colorSchema === "dark" ? "black" : "white",
          flex: 1,
        }}
      >
        <ShopSearchBar
          onSearch={handleTextSearch}
          setSelectedImage={setSelectedImage}
          setSearching={setSearching}
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={fetchProducts} />
          }
        >
          {selectedImage && (
            <Card marginTop="m">
              <Image
                source={{ uri: `data:image/png;base64,${selectedImage}` }}
                style={{ width: "auto", height: 250, objectFit: "contain" }}
              />
            </Card>
          )}
          {searching && (
            <Card marginTop="m">
              <Text variant="header">Searching...</Text>
              <Text variant="body" marginTop="s">
                Please wait while we search for similar products
              </Text>
              <Card marginTop="s">
                <ActivityIndicator size="large" color={theme.colors.primary} />
              </Card>
            </Card>
          )}
          {!searching && searchProducts && searchProducts.length > 0 && (
            <Card marginTop="m">
              <Card marginTop="s">
                <Text variant="header">Results</Text>
                <Text variant="body" marginTop="s">
                  Here are some products that match your image
                </Text>
              </Card>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {searchProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </View>
              <Card>
                <Button
                  tone="primary"
                  label="Clear"
                  onPress={() => {
                    setSelectedImage(null);
                    setSearchResults(null);
                    setSearchProducts(null);
                  }}
                />
              </Card>
            </Card>
          )}
          {!searching && searchProducts && searchProducts.length === 0 && (
            <Card marginTop="m">
              <Card marginTop="s">
                <Text variant="header">No Results</Text>
                <Text variant="body" marginTop="s">
                  Please try with another image :(
                </Text>
              </Card>
              <Card>
                <Button
                  tone="primary"
                  label="Clear"
                  onPress={() => {
                    setSelectedImage(null);
                    setSearchResults(null);
                    setSearchProducts(null);
                  }}
                />
              </Card>
            </Card>
          )}
          {!searching && !searchProducts && (
            <ProductsList products={products} />
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
