import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import { toCurrency } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <div className="h-[316px] relative bg-[url('/images/shop-hero.png')] bg-no-repeat flex flex-col items-center justify-center gap-0.5">
        <h2 className="font-medium text-5xl leading-[4rem] text-black">Shop</h2>
        <div className="flex items-center gap-x-1.5">
          <Link href="/" className="text-black font-medium">
            Home
          </Link>
          &gt;
          <p className="text-black font-light">Shop</p>
        </div>
      </div>
      <div className="py-6 bg-cream-1">
        <div className="container flex items-center justify-between">
          <div className="flex items-center divide-x gap-x-8">
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/icons/filter.svg"
                  alt="filter"
                  width={25}
                  height={25}
                />
                <p className="text-black">Filter</p>
              </div>
              <Image
                src="/icons/layout.svg"
                alt="filter"
                width={25}
                height={25}
              />
              <Image
                src="/icons/view-list.svg"
                alt="filter"
                width={25}
                height={25}
              />
            </div>
            <div className="pl-8">
              <p className="text-sm">Showing 1-10 of 32 results</p>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-4">
              <p>Show</p>
              <input
                type="text"
                className="outline-none bg-white py-3 px-4.5 rounded-sm max-w-14 text-gray-3"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <p>Sort by</p>
              <select className="bg-white py-3 px-4.5 rounded-sm w-[188px] outline-none text-gray-3">
                <option defaultValue="default">Default</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-12 flex flex-col gap-y-16">
        <ProductList />
        <div className="self-center">
          <Pagination />
        </div>
      </div>
      <div className="py-[100px] px-14 flex flex-wrap justify-center lg:grid lg:grid-cols-4 max-lg:gap-14 bg-cream-3">
        <div className="flex gap-2.5">
          <Image src="/icons/trophy.svg" alt="trophy" width={60} height={60} />
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-xl text-gray-dark">
              High Quality
            </h3>
            <p className="text-gray-2 font-medium text-lg">
              Crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <Image
            src="/icons/guarantee.svg"
            alt="guarantee"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-xl text-gray-dark">
              Warranty Protection
            </h3>
            <p className="text-gray-2 font-medium text-lg">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <Image
            src="/icons/shipping.svg"
            alt="shipping"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-xl text-gray-dark">
              Free Shipping
            </h3>
            <p className="text-gray-2 font-medium text-lg">
              For orders over {toCurrency(150000)}
            </p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <Image
            src="/icons/customer-support.svg"
            alt="customer-support"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-xl text-gray-dark">
              24/7 Support
            </h3>
            <p className="text-gray-2 font-medium text-lg">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
