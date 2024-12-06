import { productsQueryKey } from "@/constants/Query";
import { fetchProducts } from "@/services/shopify";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const { isPending, error, data, refetch, isRefetching } = useQuery({
    queryKey: productsQueryKey,
    queryFn: fetchProducts,
  });

  return {
    products: data || [],
    loading: isPending || isRefetching,
    refetch,
    error,
  };
};
