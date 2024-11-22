import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <p className="text-xl text-gray-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-7">
            <div className="relative w-[370px] h-[480px]">
              <Image
                src="/images/dining1.png"
                alt="dining"
                fill
                sizes="30%"
                className="z-10 hover:opacity-0 transition-opacity duration-150 ease-linear rounded-[10px] cursor-pointer"
              />
              <Image
                src="/images/dining2.png"
                alt="dining"
                fill
                sizes="30%"
                className="rounded-[10px]"
              />
            </div>
            <Link
              href="/category/dining"
              className="text-center text-2xl font-semibold text-gray-4"
            >
              Dining
            </Link>
          </div>
          <div className="flex flex-col gap-7">
            <div className="relative w-[370px] h-[480px]">
              <Image
                src="/images/living1.png"
                alt="living"
                fill
                sizes="30%"
                className="z-10 hover:opacity-0 transition-opacity duration-150 ease-linear rounded-[10px] cursor-pointer"
              />
              <Image
                src="/images/living2.png"
                alt="dining"
                fill
                sizes="30%"
                className="rounded-[10px]"
              />
            </div>
            <Link
              href="/category/living"
              className="text-center text-2xl font-semibold text-gray-4"
            >
              Living
            </Link>
          </div>
          <div className="flex flex-col gap-7">
            <div className="relative w-[370px] h-[480px]">
              <Image
                src="/images/bedroom1.png"
                alt="bedroom"
                fill
                sizes="30%"
                className="z-10 hover:opacity-0 transition-opacity duration-150 ease-linear rounded-[10px] cursor-pointer"
              />
              <Image
                src="/images/bedroom2.png"
                alt="dining"
                fill
                sizes="30%"
                className="rounded-[10px]"
              />
            </div>
            <Link
              href="/category/bedroom"
              className="text-center text-2xl font-semibold text-gray-4"
            >
              Bedroom
            </Link>
          </div>
        </div>
      </section>
      <section className="container py-14 flex flex-col gap-y-8">
        <h2 className="text-gray-4 text-[2rem] font-bold text-center self-center">
          Our Products
        </h2>
        <ProductList />
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="w-[245px] text-center border border-primary text-primary py-3"
          >
            Show More
          </Link>
        </div>
      </section>
    </main>
  );
}
