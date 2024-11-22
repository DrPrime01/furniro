import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ end }: { end?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {details?.slice(0, end || details?.length)?.map((detail) => (
        <ProductCard key={detail.name} {...detail} />
      ))}
    </div>
  );
}

export default ProductList;

const details = [
  {
    img: "/images/syltherine.png",
    name: "Syltherine",
    desc: "Stylish cafe chair",
    originalPrice: 3500,
    discount: 30,
    isNew: false,
    slug: "syltherine",
  },
  {
    img: "/images/leviosa.png",
    name: "Leviosa",
    desc: "Stylish cafe chair",
    originalPrice: 3500,
    slug: "leviosa",
  },
  {
    img: "/images/lolito.png",
    name: "Lolito",
    desc: "Luxury big sofa",
    originalPrice: 7000,
    discount: 50,
    isNew: false,
    slug: "lolito",
  },
  {
    img: "/images/respira.png",
    name: "Respira",
    desc: "Outdoor bar table and stool",
    originalPrice: 500,
    isNew: true,
    slug: "respira",
  },
  {
    img: "/images/griffo.png",
    name: "Griffo",
    desc: "Night lamp",
    originalPrice: 1500,
    slug: "griffo",
  },

  {
    img: "/images/muggo.png",
    name: "Muggo",
    desc: "Small mug",
    originalPrice: 150,
    isNew: true,
    slug: "muggo",
  },
  {
    img: "/images/pingky.png",
    name: "Pingky",
    desc: "Cute bed set",
    originalPrice: 14000,
    discount: 50,
    isNew: false,
    slug: "pingky",
  },
  {
    img: "/images/potty.png",
    name: "Potty",
    desc: "Minimalist flower pot",
    originalPrice: 5000,
    isNew: true,
    slug: "potty",
  },
];
