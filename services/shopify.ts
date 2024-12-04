import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import {
  ProductEdges,
  ImageEdges,
  Product,
  Image,
  ProductWithImageEdges,
} from "@/types/shopify";
if (
  !process.env.EXPO_PUBLIC_SHOPIFY_DOMAIN ||
  !process.env.EXPO_PUBLIC_SHOPIFY_API_SECRET
) {
  throw new Error("Missing Shopify environment variables");
}

export const ShopifyClient = createStorefrontApiClient({
  storeDomain: process.env.EXPO_PUBLIC_SHOPIFY_DOMAIN,
  publicAccessToken: process.env.EXPO_PUBLIC_SHOPIFY_API_SECRET,
  apiVersion: "2024-10",
});

export const flattenProductEdges = (edges: ProductEdges) => {
  return edges.map((edge) => edge.node);
};

export const flattenImagesEdges = (edges: ImageEdges): Image[] => {
  return edges.map((edge) => edge.node);
};
export const GET_ALL_PRODUCTS = `
{
  products(first: 5, sortKey: CREATED_AT, reverse: true) {
    edges {
      node {
        id
        title
        vendor
        publishedAt
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        compareAtPriceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            cursor
            node {
              id
              src: url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_BY_ID = `
query GET_PRODUCT_BY_ID($id: ID!) {
  product(id: $id) {
    id
    title
    vendor
    publishedAt
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      edges {
        cursor
        node {
          id
          src: url
          altText
          width
          height
        }
      }
    }
  }
}
    `;

export const getProductById = async (id: string) => {
  const { data, errors } = await ShopifyClient.request(GET_PRODUCT_BY_ID, {
    variables: { id },
  });
  if (errors) {
    console.error(errors);
  }
  return {
    ...data.product,
    images: flattenImagesEdges(data.product.images.edges),
  };
};
export const SEARCH_QUERY = `
query searchProducts($query: String!, $first: Int) {
  search(query: $query, first: $first, types: PRODUCT) {
    edges {
      node {
        ... on Product {
          id
          title
          vendor
          publishedAt
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              cursor
              node {
                id
                src: url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
}`;

export const fetchProducts = async (): Promise<Product[]> => {
  const { data, errors } = await ShopifyClient.request(GET_ALL_PRODUCTS);
  if (errors) {
    throw new Error("Failed to fetch products");
  }
  return flattenProductEdges(data.products.edges).map((product) => {
    if ("images" in product) {
      return {
        ...product,
        images: flattenImagesEdges(product.images.edges),
      };
    }
    return product;
  });
};
