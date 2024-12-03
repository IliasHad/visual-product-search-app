import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import { Image, View } from "react-native";
import { Product } from "@/types/shopify";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <View style={{ width: "50%" }}>
      <Card variant="elevated" margin="s" padding="s" gap="s">
        <Image
          source={{ uri: product.images[0].src }}
          style={{
            height: 200,
            objectFit: "contain",
          }}
        />
        <Text variant="title">{product.title}</Text>
        <Text variant="body">{product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}</Text>
      </Card>
    </View>
  );
};
