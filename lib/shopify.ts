import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { ProductEdges, ImageEdges } from "@/types/shopify";
if (
  !process.env.EXPO_PUBLIC_SHOPIFY_DOMAIN ||
  !process.env.EXPO_PUBLIC_SHOPIFY_API_SECRET
) {
  throw new Error("Missing Shopify environment variables");
}

const ShopifyClient = createStorefrontApiClient({
  storeDomain: process.env.EXPO_PUBLIC_SHOPIFY_DOMAIN,
  publicAccessToken: process.env.EXPO_PUBLIC_SHOPIFY_API_SECRET,
  apiVersion: "2024-10",
});

const flattenEdges = (edges: ProductEdges | ImageEdges) => {
  return edges.map((edge) => edge.node);
};

export const fetchAllProducts = async () => {
  const productQuery = `
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
  const { data, errors } = await ShopifyClient.request(productQuery);
  if (errors) {
    console.error(errors);
  }
  return flattenEdges(data.products.edges).map((product) => {
    if ("images" in product) {
      return {
        ...product,
        images: flattenEdges(product.images.edges),
      };
    }
    return product;
  });
};

export const getProductById = async (id: string) => {
  const productQuery = `
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
  const { data, errors } = await ShopifyClient.request(productQuery, {
    variables: { id },
  });
  if (errors) {
    console.error(errors);
  }
  return {
    ...data.product,
    images: flattenEdges(data.product.images.edges),
  };
};

export const searchProductsByText = async (query: string) => {
  const SEARCH_QUERY = `
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

  const { data, errors } = await ShopifyClient.request(SEARCH_QUERY, {
    variables: { query, first: 5 },
  });
  if (errors) {
    console.error(errors);
  }
  return flattenEdges(data.search.edges).map((product) => ({
    ...product,
    images: flattenEdges(product.images.edges),
  }));
};
