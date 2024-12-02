import React from "react";
import ProductCard from "./ProductCard";
import { urlFor } from "@/lib/client";

function ProductList({
  products,
  end,
}: {
  products: ProductProps[];
  end?: number;
}) {
  const details = products?.map((product, i) => ({
    img: product?.images && urlFor(product?.images[0]).url(),
    name: product?.name,
    desc: product?.summary,
    originalPrice: product?.price,
    discount: i % 2 === 0 ? 0 : 30,
    isNew: i % 2 === 0 ? false : true,
    slug: product?.slug,
  }));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
      {details
        ?.slice(0, end || details?.length)
        ?.map((detail) => <ProductCard key={detail.name} {...detail} />)}
    </div>
  );
}

export default ProductList;
