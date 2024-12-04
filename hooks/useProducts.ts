import {
  GET_ALL_PRODUCTS,
  ShopifyClient,
  flattenImagesEdges,
  flattenProductEdges,
} from "@/lib/shopify";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const { isPending, error, data, refetch, isRefetching } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, errors } = await ShopifyClient.request(GET_ALL_PRODUCTS);
      if (errors) {
        throw new Error("Failed to fetch products");
      }
      return data;
    },
  });

  const products = data
    ? flattenProductEdges(data.products.edges).map((product) => {
        if ("images" in product) {
          return {
            ...product,
            images: flattenImagesEdges(product.images.edges),
          };
        }
        return product;
      })
    : [];
  return {
    products,
    loading: isPending || isRefetching,
    fetchProducts: refetch,
    error,
  };
};
