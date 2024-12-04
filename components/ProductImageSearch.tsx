import { ScrollView } from "react-native";
import { Card } from "./Card";
import { Text } from "./Text";
import { ProductCard } from "./ProductCard";
import { Product } from "../types/shopify";
import { Button } from "./Button";
import { Grid } from "./Grid";

export const SearchImagesResults = ({
  searchProducts,
  clearResults,
}: {
  searchProducts: Product[];
  clearResults: () => void;
}) => (
  <ScrollView>
    <Card marginTop="s">
      <Text variant="header">Results</Text>
      <Text variant="body" marginTop="s">
        Here are some products that match your image
      </Text>
    </Card>
    <Grid>
      {searchProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
    <Card>
      <Button tone="primary" label="Clear" onPress={clearResults} />
    </Card>
  </ScrollView>
);
