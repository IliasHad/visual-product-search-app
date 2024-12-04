import { Card } from "./Card";
import { Text } from "./Text";
import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { ScrollView, RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native";
import theme from "@/theme";
import { Grid } from "./Grid";

export const ProductsList = () => {
  const { products, loading, fetchProducts, error } = useProducts();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchProducts} />
      }
    >
      <Card marginTop="m">
        <Text variant="header">Featured Products</Text>
        <Text variant="body" marginTop="s">
          Our top picks for you
        </Text>
      </Card>
      {error && (
        <Card marginTop="m">
          <Text variant="header">Something went wrong</Text>
          <Text variant="body" marginTop="s">
            {error.message}
          </Text>
        </Card>
      )}
      {loading && (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      )}
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </ScrollView>
  );
};
