"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SidebarCart from "./SidebarCart";
import Cancel from "./vectors/cancel";
import Hamburger from "./vectors/hamburger-icon";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    setOpenModal(false);
    setOpenSidebar(false);
  }, [pathname]);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-7 flex items-center justify-between bg-white z-20">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-x-[5px]">
        <Image src="/icons/logo.svg" alt="logo" width={50} height={32} />
        <p className="font-bold text-[2rem] text-black">Furniro</p>
      </Link>
      <Hamburger
        className="md:hidden cursor-pointer"
        onClick={() => setOpenSidebar(true)}
      />
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
      {/* Mobile navbar */}
      <div
        className={`z-[100] h-screen w-screen fixed inset-0 lg:hidden ${
          openSidebar ? "flex" : "hidden"
        } justify-start bg-black/30`}
        onClick={(e) => e.target === e.currentTarget && setOpenSidebar(false)}
      >
        <div
          className={`w-[85%] md:w-1/3 bg-white py-64 px-6 items-center justify-between flex flex-col relative ${
            openSidebar ? "animate-slide-in-left" : "animate-slide-out-left"
          }`}
        >
          <Cancel
            className="absolute top-10 left-8 cursor-pointer"
            onClick={() => setOpenSidebar(false)}
            stroke="#121212"
          />
          <Link
            href="/"
            className={`text-xl font-medium text-neutral-4 pb-1 ${
              pathname === "/" && "!text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`text-xl font-medium text-neutral-4 pb-1 ${
              pathname === "/shop" && "!text-primary"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className={`text-xl font-medium text-neutral-4 pb-1 ${
              pathname === "/blog" && "!text-primary"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-xl font-medium text-neutral-4 pb-1 ${
              pathname === "/contact" && "!text-primary"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>

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
        <button className="p-1" onClick={() => setOpenModal(true)}>
          <Image src="/icons/cart.svg" alt="cart" width={24} height={24} />
        </button>
      </div>
      <SidebarCart
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </div>
  );
}

export default Navbar;
