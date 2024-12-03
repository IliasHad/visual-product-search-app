export type Image = {
  id: string;
  src: string;
  altText: string;
  width: number;
  height: number;
};
export type Product = {
  id: string;
  title: string;
  vendor: string;
  publishedAt: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: Image[];
};


export type ProductWithImageEdges = {
  id: string;
  title: string;
  vendor: string;
  publishedAt: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: { edges: ImageEdges[] };
};
export type ProductEdges = {
  node: {
    id: string;
    title: string;
    vendor: string;
    publishedAt: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    compareAtPriceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: ImageEdges;
    };
  };
}[];
export type ImageEdges = {
  cursor: string;
  node: Image;
}[];
