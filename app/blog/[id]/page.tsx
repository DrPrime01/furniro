import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col container py-16 gap-y-8">
        <Link href="/blog" className="font-medium underline">
          Back
        </Link>
        <Image
          src="/images/blog-cover1.png"
          alt="blog-cover"
          width={1440}
          height={600}
          className="w-full h-[600px] object-cover rounded-2xl"
        />
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-2.5">
            <Image
              src="/icons/profile-icon.svg"
              width={20}
              height={20}
              alt="profile"
            />
            <p className="text-sm text-gray-3">Author</p>
          </div>
          <div className="flex items-center gap-x-2.5">
            <Image
              src="/icons/calendar-icon.svg"
              width={20}
              height={20}
              alt="profile"
            />
            <p className="text-sm text-gray-3">14 Oct 2024</p>
          </div>
          <div className="flex items-center gap-x-2.5">
            <Image
              src="/icons/category-icon.svg"
              width={20}
              height={20}
              alt="profile"
            />
            <p className="text-sm text-gray-3">Wood</p>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Exploring New Ways Of Decorating
        </h2>
        <div className="flex flex-col gap-y-8 py-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
            neque alias, delectus perspiciatis pariatur expedita odio adipisci
            voluptas quibusdam maiores laboriosam eum laborum iusto distinctio
            qui explicabo dolorem? Doloribus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae sunt, neque alias, delectus
            perspiciatis pariatur expedita odio adipisci voluptas quibusdam
            maiores laboriosam eum laborum iusto distinctio qui explicabo
            dolorem? Doloribus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae sunt, neque alias, delectus perspiciatis
            pariatur expedita odio adipisci voluptas quibusdam maiores
            laboriosam eum laborum iusto distinctio qui explicabo dolorem?
            Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae sunt, neque alias, delectus perspiciatis pariatur expedita
            odio adipisci voluptas quibusdam maiores laboriosam eum laborum
            iusto distinctio qui explicabo dolorem? Doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
            neque alias, delectus perspiciatis pariatur expedita odio adipisci
            voluptas quibusdam maiores laboriosam eum laborum iusto distinctio
            qui explicabo dolorem? Doloribus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae sunt, neque alias, delectus
            perspiciatis pariatur expedita odio adipisci voluptas quibusdam
            maiores laboriosam eum laborum iusto distinctio qui explicabo
            dolorem? Doloribus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae sunt, neque alias, delectus perspiciatis
            pariatur expedita odio adipisci voluptas quibusdam maiores
            laboriosam eum laborum iusto distinctio qui explicabo dolorem?
            Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae sunt, neque alias, delectus perspiciatis pariatur expedita
            odio adipisci voluptas quibusdam maiores laboriosam eum laborum
            iusto distinctio qui explicabo dolorem? Doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
            neque alias, delectus perspiciatis pariatur expedita odio adipisci
            voluptas quibusdam maiores laboriosam eum laborum iusto distinctio
            qui explicabo dolorem? Doloribus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae sunt, neque alias, delectus
            perspiciatis pariatur expedita odio adipisci voluptas quibusdam
            maiores laboriosam eum laborum iusto distinctio qui explicabo
            dolorem? Doloribus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae sunt, neque alias, delectus perspiciatis
            pariatur expedita odio adipisci voluptas quibusdam maiores
            laboriosam eum laborum iusto distinctio qui explicabo dolorem?
            Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae sunt, neque alias, delectus perspiciatis pariatur expedita
            odio adipisci voluptas quibusdam maiores laboriosam eum laborum
            iusto distinctio qui explicabo dolorem? Doloribus.
          </p>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default page;
