"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

function FilterComponent() {
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    const params = new URLSearchParams(window.location.search);
    params.set("sortBy", selectedSort);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
  };
  return (
    <div className="py-3 md:py-6 bg-cream-1">
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
              className="hidden md:block"
            />
            <Image
              src="/icons/view-list.svg"
              alt="filter"
              width={25}
              height={25}
              className="hidden md:block"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-4">
            <p className="hidden md:block">Sort by</p>
            <select
              onChange={handleChange}
              className="bg-white py-3 px-4.5 rounded-sm w-[188px] outline-none text-gray-3"
            >
              <option defaultValue="default">Default</option>
              <option value="priceLowToHigh">Price (low to high)</option>
              <option value="priceHighToLow">Price (high to low)</option>
              <option value="dateOldest">Oldest</option>
              <option value="dateNewest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
