import {
  SEARCH_QUERY,
  ShopifyClient,
  flattenImagesEdges,
  flattenProductEdges,
} from "@/lib/shopify";
import { useQuery } from "@tanstack/react-query";

export const useProductSearch = ({
  query,
  first = 5,
}: {
  query: string | null;
  first?: number;
}) => {
  const { isPending, error, data, refetch, isRefetching } = useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      const { data, errors } = await ShopifyClient.request(SEARCH_QUERY, {
        variables: { query, first },
      });
      if (errors) {
        throw new Error("Failed to fetch products");
      }
      return data;
    },
    enabled: !!query,
  });

  const searchResults = data
    ? flattenProductEdges(data.search.edges).map((product) => {
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
    searchResults,
    loading: isPending || isRefetching,
    fetchProducts: refetch,
    error,
  };
};
