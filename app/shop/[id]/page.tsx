import ProductList from "@/components/ProductList";
import ChevronRight from "@/components/vectors/chevron-right";
import StarIcon from "@/components/vectors/star-icon";
import { client, urlFor } from "@/lib/client";
import { toCurrency } from "@/utils/helpers";

import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const query = `*[_type == "product" && slug == $slug][0]`;
  const catQuery = `
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
  const product = await client.fetch(query, { slug: id });
  const category = await client.fetch(catQuery, {
    slug: product?.categorySlug,
  });

  const categoryProducts = category?.products?.filter(
    (prod: ProductProps) => prod?._id !== product?._id
  );

  return (
    <div className="flex flex-col">
      <div className="py-8 bg-cream-1">
        <div className="container flex items-center gap-x-6 divide-x">
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-3.5">
              <Link href="/" className="text-gray-3">
                Home
              </Link>
              <ChevronRight />
            </div>
            <div className="flex items-center gap-x-3.5">
              <Link href="/shop" className="text-gray-3">
                Shop
              </Link>
              <ChevronRight />
            </div>
          </div>
          <div className="pl-6">
            <p className="text-black">{product?.name}</p>
          </div>
        </div>
      </div>
      <div className="container pt-9 pb-14 flex flex-col lg:flex-row gap-y-10 lg:gap-x-16 xl:gap-x-20">
        <div className="lg:w-1/2 flex gap-x-6 lg:gap-x-8">
          <div className="flex flex-col gap-y-8">
            <Image
              src={product?.images[0] && urlFor(product?.images[0]).url()}
              alt="thumbnail"
              width={76}
              height={80}
              className="object-cover bg-cream-1 rounded-[10px] w-[76px] h-20"
            />

            {product?.images[1] && (
              <Image
                src={urlFor(product?.images[1]).url()}
                alt="thumbnail"
                width={76}
                height={80}
                className="object-cover bg-cream-1 rounded-[10px] w-[76px] h-20"
              />
            )}
            {product?.images[2] && (
              <Image
                src={urlFor(product?.images[2]).url()}
                alt="thumbnail"
                width={76}
                height={80}
                className="object-cover bg-cream-1 rounded-[10px] w-[76px] h-20"
              />
            )}
            {product?.images[3] && (
              <Image
                src={urlFor(product?.images[3]).url()}
                alt="thumbnail"
                width={76}
                height={80}
                className="object-cover bg-cream-1 rounded-[10px] w-[76px] h-20"
              />
            )}
          </div>
          <Image
            src={product?.images && urlFor(product?.images[0]).url()}
            alt="main"
            width={423}
            height={500}
            className="object-cover bg-cream-1 rounded-[10px] w-[423px] h-[500px]"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <h2 className="text-[42px] text-black">{product?.name}</h2>
          <p className="font-medium text-2xl text-gray-3 mb-4">
            {toCurrency(product?.price)}
          </p>
          <div className="flex items-center gap-x-4.5 divide-x mb-4.5">
            <div className="flex items-center gap-x-1.5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="pl-4.5">
              <p className="text-sm text-gray-3">5 Customers Reviews</p>
            </div>
          </div>
          <p className="text-sm mb-5.5">{product?.description}</p>
          <div className="flex flex-col gap-y-3 mb-4.5">
            <h5 className="text-gray-3">Size</h5>
            <div className="flex items-center gap-x-4">
              <button className="bg-primary text-white text-xs rounded-[5px] size-[30px] flex items-center justify-center">
                L
              </button>
              <button className="bg-cream-1 text-black text-xs rounded-[5px] size-[30px] flex items-center justify-center">
                XL
              </button>
              <button className="bg-cream-1 text-black text-xs rounded-[5px] size-[30px] flex items-center justify-center">
                XS
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 mb-8">
            <h5 className="text-gray-3">Color</h5>
            <div className="flex items-center gap-x-4">
              <button className="size-[30px] rounded-full bg-purple"></button>
              <button className="size-[30px] rounded-full bg-black"></button>
              <button className="size-[30px] rounded-full bg-primary"></button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[123px] flex items-center justify-between border rounded-[10px]">
              <button className="py-5 px-4">-</button>
              <span className="text-sm py-5 px-4">1</span>
              <button className="py-5 px-4">+</button>
            </div>
            <button className="py-5 px-10 border rounded-[10px]">
              Add To Cart
            </button>
          </div>
          <hr className="mt-15 mb-10" />
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <p className="w-[75px] text-sm text-gray-3">SKU</p>
              <p>:</p>
              <p className="text-sm text-gray-3">SS002</p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="w-[75px] text-sm text-gray-3">Category</p>
              <p>:</p>
              <Link href={`/category/${product?.categorySlug}`}>
                <p className="text-sm text-gray-3">{product?.categoryName}</p>
              </Link>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="w-[75px] text-sm text-gray-3">Features</p>
              <p>:</p>
              <p className="text-sm text-gray-3">{product?.summary}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="w-[75px] text-sm text-gray-3">Share</p>
              <p>:</p>
              <div className="flex items-center gap-x-6">
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
                <Image src="/icons/x.svg" alt="x" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-12 pb-16 container flex flex-col">
        <div className="self-center flex items-center gap-x-14 mb-9">
          <h3 className="text-2xl text-black font-medium">Description</h3>
          <h3 className="text-2xl text-gray-3 font-medium">
            Additional Information
          </h3>
          <h3 className="text-2xl text-gray-3 font-medium">Reviews [5]</h3>
        </div>
        <div className="flex flex-col gap-y-7">
          <p className="text-gray-3">{product?.description}</p>
          {product?.description2 && (
            <p className="text-gray-3">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 mt-9">
          {product?.images[1] && (
            <Image
              src={urlFor(product?.images[1]).url()}
              alt="chair"
              height={348}
              width={605}
              className="object-cover bg-cream-1 h-[348px] rounded-[10px]"
            />
          )}
          {product?.images[2] && (
            <Image
              src={urlFor(product?.images[2]).url()}
              alt="chair"
              height={348}
              width={605}
              className="object-cover bg-cream-1 h-[348px] rounded-[10px]"
            />
          )}
        </div>
      </div>
      <hr />
      <div className="container py-14 pb-20 flex flex-col">
        <h2 className="text-gray-4 text-[2rem] font-bold text-center self-center mb-6">
          Related Products
        </h2>
        {categoryProducts.length > 0 ? (
          <ProductList products={categoryProducts} end={4} />
        ) : (
          <p className="text-lg md:text-xl font-semibold">
            No similar products available
          </p>
        )}
        <div className="flex justify-center mt-11">
          <Link
            href="/shop"
            className="w-[245px] text-center border border-primary text-primary py-3"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
