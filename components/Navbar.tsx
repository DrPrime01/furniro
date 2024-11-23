"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-7 flex items-center justify-between bg-white">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-x-[5px]">
        <Image src="/icons/logo.svg" alt="logo" width={50} height={32} />
        <p className="font-bold text-[2rem] text-black">Furniro</p>
      </Link>
      {/* NAVLINKS */}
      <nav className="hidden lg:flex items-center gap-x-16">
        <Link
          href="/"
          className={`font-medium text-black hover:text-primary px-4 py-2 rounded-md ${
            pathname === "/" ? "text-primary" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/shop"
          className={`font-medium text-black hover:text-primary px-4 py-2 rounded-md ${
            pathname === "/shop" ? "text-primary" : ""
          }`}
        >
          Shop
        </Link>
        <Link
          href="/blog"
          className={`font-medium text-black hover:text-primary px-4 py-2 rounded-md ${
            pathname === "/blog" ? "text-primary" : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`font-medium text-black hover:text-primary px-4 py-2 rounded-md ${
            pathname === "/contact" ? "text-primary" : ""
          }`}
        >
          Contact
        </Link>
      </nav>
      {/* NAVICONS */}
      <div className="hidden lg:flex items-center gap-x-10">
        <button className="p-1">
          <Image
            src="/icons/profile.svg"
            alt="profile"
            width={24}
            height={24}
          />
        </button>
        <button className="p-1">
          <Image src="/icons/search.svg" alt="search" width={24} height={24} />
        </button>
        <button className="p-1" onClick={() => router.push("/wishlist")}>
          <Image
            src="/icons/wishlist.svg"
            alt="wishlist"
            width={24}
            height={24}
          />
        </button>
        <button className="p-1">
          <Image src="/icons/cart.svg" alt="cart" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
