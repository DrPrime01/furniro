import Banner from "@/components/Banner";
import HeroBanner from "@/components/HeroBanner";
import { client, urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";

async function page() {
  const catQuery = `*[_type=="categories"]`;
  const categories = await client.fetch(
    catQuery,
    {},
    { next: { revalidate: 60 } }
  );

  return (
    <div className="flex flex-col">
      <HeroBanner name="Categories" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 container py-12">
        {categories?.map((category: CategoryProps) => (
          <div key={category?._id} className="flex flex-col gap-7">
            <div className="relative xl:min-w-[370px] h-[480px]">
              <Image
                src={
                  category?.coverImage && urlFor(category?.coverImage[0]).url()
                }
                alt="dining"
                fill
                sizes="30%"
                className="z-10 hover:opacity-0 transition-opacity duration-150 ease-linear rounded-[10px] cursor-pointer"
              />
              <Image
                src={
                  category?.coverImage && urlFor(category?.coverImage[1]).url()
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
      <Banner />
    </div>
  );
}

export default page;
