import { fetchAllProducts, } from "@/lib/shopify";
import { useEffect, useState } from "react";
import { Product } from "@/types/shopify";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const products = await fetchAllProducts();
      setProducts(products);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts, loading };
};
