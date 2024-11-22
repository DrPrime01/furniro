import React from "react";
import ShareIcon from "./vectors/share-icon";
import CompareIcon from "./vectors/compare-icon";
import LikeIcon from "./vectors/like-icon";
import Image from "next/image";
import { toCurrency } from "@/utils/helpers";
import Link from "next/link";

function ProductCard(props: ProductCard) {
  const { name, img, desc, discount, originalPrice, isNew, slug } = props;
  const discountedPrice =
    discount && Math.floor((discount / 100) * originalPrice);
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gray-1 flex flex-col justify-center gap-6 px-4 z-10 opacity-0 hover:opacity-[72%] transition-opacity duration-150 ease-linear cursor-pointer">
        <button className="self-center w-[202px] py-3 font-semibold text-primary bg-white">
          Add to cart
        </button>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-x-0.5 text-white font-semibold">
            <ShareIcon />
            Share
          </button>
          <Link
            href={`/shop/${slug}`}
            className="flex items-center gap-x-0.5 text-white font-semibold"
          >
            <CompareIcon />
            View
          </Link>
          <button className="flex items-center gap-x-0.5 text-white font-semibold">
            <LikeIcon />
            Like
          </button>
        </div>
      </div>
      <div className=" bg-white flex flex-col relative">
        <Image
          src={img}
          alt={name}
          width={285}
          height={301}
          className="object-cover"
        />
        <div className="bg-gray-6 p-4 pb-7 flex flex-col gap-y-2">
          <h4 className="font-semibold text-2xl text-gray-1">{name}</h4>
          <p className="font-medium text-gray-2">{desc}</p>
          <div className="flex items-center justify-between gap-x-4">
            <p className="text-xl font-semibold text-gray-1">
              {Boolean(discount)
                ? toCurrency(discountedPrice!)
                : toCurrency(originalPrice)}
            </p>
            <p className="text-gray-7 line-through">
              {discount && toCurrency(originalPrice)}
            </p>
          </div>
        </div>
        {(discount || isNew) && (
          <div
            className={`absolute top-6 right-6 rounded-full text-white size-12 flex items-center justify-center ${
              isNew ? "bg-green-new" : "bg-red-discount"
            }`}
          >
            {isNew ? "New" : `-${discount}%`}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
