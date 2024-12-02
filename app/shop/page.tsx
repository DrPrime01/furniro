import Banner from "@/components/Banner";
import HeroBanner from "@/components/HeroBanner";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import { client } from "@/lib/client";

import Image from "next/image";

async function page() {
  const prodQuery = `*[_type=="product"]`;
  const products = await client.fetch(prodQuery);
  return (
    <div className="flex flex-col">
      <HeroBanner name="Shop" />
      <div className="py-6 bg-cream-1 hidden lg:block">
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
              <p className="text-sm">
                Showing 1-{products?.length > 12 ? 12 : products?.length} of{" "}
                {products?.length} results
              </p>
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
        <ProductList products={products} />
        <div className="self-center">
          <Pagination />
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default page;
