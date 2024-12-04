import { useReducer, useCallback } from "react";
import { getProductById } from "@/services/shopify";
import { searchByImage } from "@/services/search";
import { Product } from "@/types/shopify";

interface State {
  selectedImage: null | string;
  searching: boolean;
  searchProducts: null | Product[];
}

interface Action {
  type: "SET_SEARCHING" | "SET_SEARCH_RESULTS" | "SET_IMAGE" | "RESET";
  payload: any;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_SEARCHING":
      return { ...state, searching: action.payload };
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchProducts: action.payload.products,
        searching: false,
      };
    case "SET_IMAGE":
      return {
        ...state,
        selectedImage: action.payload,
      };
    case "RESET":
      return {
        selectedImage: null,
        searching: false,
        searchProducts: null,
      };
    default:
      return state;
  }
};
export const useImageSearch = () => {
  const [state, dispatch] = useReducer(reducer, {
    selectedImage: null,
    searching: false,
    searchProducts: null,
  });
  const handleImageSearch = useCallback(async (image: string) => {
    dispatch({ type: "SET_SEARCHING", payload: true });
    try {
      const results = await searchByImage(image);
      const products = await Promise.all(
        results.map((id: string) => getProductById(id))
      );
      dispatch({ type: "SET_SEARCH_RESULTS", payload: { products } });
    } catch (error) {
      dispatch({ type: "SET_SEARCH_RESULTS", payload: { products: [] } });
    } finally {
      dispatch({ type: "SET_SEARCHING", payload: false });
    }
  }, []);

  const clearImageSearch = () => {
    dispatch({ type: "RESET", payload: null });
  };
  const setSelectedImage = (image: string) => {
    dispatch({ type: "SET_IMAGE", payload: image });
    handleImageSearch(image);
  };

  return { state, clearImageSearch, setSelectedImage };
};
