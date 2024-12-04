import { useProductSearch } from "@/hooks/useProductSearch";
import { Card } from "./Card";
import { Text } from "./Text";
import { ProductCard } from "./ProductCard";
import { Grid } from "./Grid";

import { ActivityIndicator, ScrollView } from "react-native";
import theme from "@/theme";
export const ProductTextSearch = ({ searchQuery }: { searchQuery: string }) => {
  const { searchResults, loading, error } = useProductSearch({
    query: searchQuery,
  });

  return (
    <Card marginTop="m">
      <Text variant="header" paddingBottom="m">Search Results</Text>
      {loading && (
        <Card marginTop="s">
          <Text variant="body" marginTop="s" marginBottom="s">
            Searching for products...
          </Text>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </Card>
      )}
      {error && (
        <Card marginTop="s">
          <Text variant="body" marginTop="s">
            {error.message}
          </Text>
        </Card>
      )}
      {!loading && !error && (
        <ScrollView>
          <Card marginTop="s">
            <Text variant="body" marginTop="s">
              {searchResults.length === 0
                ? "No results found"
                : `Found ${searchResults.length} products`}
            </Text>
            <Grid>
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          </Card>
        </ScrollView>
      )}
    </Card>
  );
};
