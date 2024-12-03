import { View } from "react-native";
import { Card } from "./Card";
import { Text } from "./Text";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types/shopify";

export const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Card marginTop="m">
        <Text variant="header">Featured Products</Text>
        <Text variant="body" marginTop="s">
          Our top picks for you
        </Text>
      </Card>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </>
  );
};
