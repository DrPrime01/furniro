import Banner from "@/components/Banner";
import HeroBanner from "@/components/HeroBanner";
import ProductList from "@/components/ProductList";
import { client } from "@/lib/client";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const query = `
    *[_type == "categories" && slug == $slug][0]{
      name,
      "products": products[]->{
        _id,
        name,
        images,
        price,
        summary,
        slug
      }
    }
  `;
  const category = await client.fetch(query, { slug });

  return (
    <div className="flex flex-col">
      <HeroBanner name={category?.name} />
      <div className="container py-12">
        <ProductList products={category?.products} />
      </div>
      <Banner />
    </div>
  );
}

export default page;
