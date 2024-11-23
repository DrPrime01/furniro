import Banner from "@/components/Banner";
import BlogPreview from "@/components/BlogPreview";
import HeroBanner from "@/components/HeroBanner";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <HeroBanner name="Blog" />
      <div className="flex flex-col md:flex-row items-start py-20 container">
        <div className="md:w-3/4 flex flex-col gap-y-16">
          {sampleBlogs?.map((blog) => (
            <BlogPreview key={blog.slug} {...blog} />
          ))}
        </div>
        <div className="hidden md:w-1/4 md:flex flex-col"></div>
      </div>
      <Banner />
    </div>
  );
}

export default page;

const sampleBlogs = [
  {
    slug: "millenial-design",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    author: {
      name: "Admin",
      profileImg: "",
    },
    date: "14 Oct 2024",
    category: "Wood",
    coverImg: "/images/blog-cover1.png",
    title: "Going all-in with millennial design",
  },
  {
    slug: "exploring-new",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    author: {
      name: "Admin",
      profileImg: "",
    },
    date: "14 Oct 2024",
    category: "Handmade",
    coverImg: "/images/blog-cover2.png",
    title: "Exploring new ways of decorating",
  },
  {
    slug: "handmade-pieces",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    author: {
      name: "Admin",
      profileImg: "",
    },
    date: "14 Oct 2024",
    category: "Wood",
    coverImg: "/images/blog-cover1.png",
    title: "Handmade pieces that took time to make",
  },
];
