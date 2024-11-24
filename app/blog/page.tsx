import Banner from "@/components/Banner";
import BlogPreview from "@/components/BlogPreview";
import Searchbar from "@/components/form/Searchbar";
import HeroBanner from "@/components/HeroBanner";
import RecentPostsPreview from "@/components/RecentPostsPreview";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <HeroBanner name="Blog" />
      <div className="flex flex-col md:flex-row items-start py-20 container">
        <div className="md:basis-3/4 flex flex-col gap-y-16">
          {sampleBlogs?.map((blog) => (
            <BlogPreview key={blog.slug} {...blog} />
          ))}
        </div>
        <div className="hidden md:basis-1/4 md:flex flex-col">
          <Searchbar />
          <div className="mt-11 flex flex-col px-5 mb-24">
            <h3 className="text-2xl font-medium mb-8">Categories</h3>
            <div className="flex flex-col gap-y-9">
              <div className="flex items-center justify-between">
                <p className="text-gray-3">Crafts</p>
                <p className="text-gray-3">2</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-3">Design</p>
                <p className="text-gray-3">8</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-3">Handmade</p>
                <p className="text-gray-3">7</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-3">Interior</p>
                <p className="text-gray-3">1</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-3">Wood</p>
                <p className="text-gray-3">6</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-5">
            <h3 className="text-2xl font-medium mb-8">Recent Posts</h3>
            <div className="flex flex-col gap-y-9">
              {previews?.map((preview) => (
                <RecentPostsPreview key={preview?.slug} {...preview} />
              ))}
            </div>
          </div>
        </div>
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

const previews = [
  {
    img: "/images/preview1.jpg",
    title: "Going all-in with millennial design",
    date: "03 Aug 2024",
    slug: "going-all-in",
  },
  {
    img: "/images/preview2.jpg",
    title: "Exploring new ways of decorating",
    date: "03 Aug 2024",
    slug: "exploring-new-ways",
  },
  {
    img: "/images/preview3.jpg",
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2024",
    slug: "handmade-pieces",
  },
  {
    img: "/images/preview4.jpg",
    title: "Modern home in Milan",
    date: "03 Aug 2024",
    slug: "modern-home-in-milan",
  },
  {
    img: "/images/preview5.jpg",
    title: "Colorful office redesign",
    date: "03 Aug 2024",
    slug: "colorful-office-redesign",
  },
];
