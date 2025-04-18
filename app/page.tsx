import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import ArrowRight from "@/components/vectors/arrow-right";
import { ChevronRight2 } from "@/components/vectors/chevron-right";
import { client, urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import RoomInspiration from "@/components/RoomInspiration";

export default async function Home() {
  const catQuery = `*[_type=="categories"]`;
  const prodQuery = `*[_type=="product"]`;

  const categories = await client.fetch(catQuery);
  const products = await client.fetch(prodQuery);

  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="container py-14 flex flex-col gap-y-16">
        <div className="flex flex-col self-center items-center">
          <h2 className="text-gray-4 text-[2rem] font-bold">
            Browse The Range
          </h2>
          <p className="text-xl text-gray-5 text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {categories?.map((category: CategoryProps) => (
            <div key={category?._id} className="flex flex-col gap-7">
              <div className="relative xl:min-w-[370px] h-[480px]">
                <Image
                  src={
                    category?.coverImage &&
                    urlFor(category?.coverImage[0]).url()
                  }
                  alt="dining"
                  fill
                  sizes="30%"
                  className="z-10 hover:opacity-0 transition-opacity duration-150 ease-linear rounded-[10px] cursor-pointer"
                />
                <Image
                  src={
                    category?.coverImage &&
                    urlFor(category?.coverImage[1]).url()
                  }
                  alt="dining"
                  fill
                  sizes="30%"
                  className="rounded-[10px]"
                />
              </div>
              <Link
                href={`/category/${category?.slug?.current}`}
                className="text-center text-2xl font-semibold text-gray-4"
              >
                {category?.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-14 flex flex-col gap-y-8">
        <h2 className="text-gray-4 text-[2rem] font-bold text-center self-center">
          Our Products
        </h2>
        <ProductList products={products} end={8} />
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="w-[245px] text-center border border-primary text-primary py-3"
          >
            Show More
          </Link>
        </div>
      </section>
      <RoomInspiration />
      <section className="bg-white pt-[67px] pb-[50px] flex flex-col">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold text-xl text-[#616161]">
            Share your setup with
          </p>
          <p className="text-gray-1 font-bold text-[40px] leading-[120%]">
            #FuniroFurniture
          </p>
        </div>
      </section>
    </main>
  );
}
