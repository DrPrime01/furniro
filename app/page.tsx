import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import ArrowRight from "@/components/vectors/arrow-right";
import { ChevronRight2 } from "@/components/vectors/chevron-right";
import { client, urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";

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
      <section className="py-11 bg-cream-2 flex flex-col md:flex-row md:items-center md:gap-x-[42px]">
        <div className="md:basis-1/3 pl-[100px] flex flex-col">
          <h4 className="text-gray-1 font-bold text-[40px] leading-[120%] mb-[7px]">
            50+ Beautiful rooms inspiration
          </h4>
          <p className="font-medium leading-[150%] text-[#616161] mb-[37px]">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="font-semibold leading-[150%] text-white bg-primary py-3 px-9 max-w-[176px] hover:bg-primary/90 transition-all">
            Explore More
          </button>
        </div>
        <div className="md:basis-2/3 flex gap-x-6 overflow-hidden">
          <div className="relative h-fit shrink-0">
            <Image
              src="/images/inner-peace.png"
              alt="inner peace"
              width={404}
              height={582}
              className="object-cover relative"
            />
            <div className="absolute left-6 bottom-6 flex items-end">
              <div className="flex flex-col p-8 bg-white/70 blur-[30] gap-y-2">
                <p className="text-[#616161] font-medium">01 --- Bed Room</p>
                <p className="font-semibold text-[28px] leading-[120%] text-gray-1">
                  Inner Peace
                </p>
              </div>
              <button className="flex items-center justify-center size-12 bg-primary">
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-10 shrink-0 overflow-hidden">
            <div className="absolute z-10 top-1/2 -translate-y-1/2 left-[345px]">
              <button className="flex items-center justify-center size-12 bg-white rounded-full shadow-xl">
                <ChevronRight2 />
              </button>
            </div>
            <div className="relative overflow-x-hidden flex gap-x-6">
              <Image
                src="/images/inner-peace-2.png"
                alt="inner peace"
                width={372}
                height={486}
                className="object-cover relative"
              />
              <Image
                src="/images/inner-peace-2.png"
                alt="inner peace"
                width={372}
                height={486}
                className="object-cover relative"
              />
              <Image
                src="/images/inner-peace-2.png"
                alt="inner peace"
                width={372}
                height={486}
                className="object-cover relative"
              />
            </div>
            <div className="flex items-center gap-x-5 relative ml-2">
              <div className="rounded-full size-[11px] bg-primary before:content-[''] before:size-[27px] relative before:absolute before:-top-2 before:-left-2 before:flex before:items-center before:justify-center before:rounded-full before:border before:border-primary before:p-2" />
              <div className="rounded-full size-[11px] bg-[#D8D8D8]" />
              <div className="rounded-full size-[11px] bg-[#D8D8D8]" />
              <div className="rounded-full size-[11px] bg-[#D8D8D8]" />
            </div>
          </div>
        </div>
      </section>
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
