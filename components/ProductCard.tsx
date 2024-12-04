import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import { Image, View } from "react-native";
import { Product } from "@/types/shopify";
import { styles } from "@/styles";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <View style={styles.container}>
      <Card variant="elevated" margin="s" padding="s" gap="s">
        {product.images.length > 0 && (
          <Image
            source={{ uri: product.images[0].src }}
            style={styles.image}
          />
        )}
        <Text variant="title">{product.title}</Text>
        <Text variant="body">
          {product.priceRange.minVariantPrice.amount}{" "}
          {product.priceRange.minVariantPrice.currencyCode}
        </Text>
      </Card>
    </View>
  );
};
