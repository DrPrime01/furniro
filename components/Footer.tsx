import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col">
        <div className="py-12 flex flex-wrap justify-between">
          <div className="flex flex-col gap-y-12 basis-1 sm:basis-1/2 md:basis-1/3">
            <p className="font-bold text-2xl">Furniro.</p>
            <p className="text-gray-3">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>
          <div className="flex flex-col gap-y-12">
            <p className="text-gray-3">Links</p>
            <div className="flex flex-col gap-y-11">
              <Link href="/" className="text-black font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-black font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-black font-medium">
                About
              </Link>
              <Link href="/contact" className="text-black font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-12">
            <p className="text-gray-3">Help</p>
            <div className="flex flex-col gap-y-11">
              <Link href="#payment-options" className="text-black font-medium">
                Payment Options
              </Link>
              <Link href="#returns" className="text-black font-medium">
                Returns
              </Link>
              <Link href="#privacy-policies" className="text-black font-medium">
                Privacy Policies
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-12">
            <p className="text-gray-3">Newsletter</p>
            <div className="flex gap-2 w-full">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="outline-none placeholder:text-gray-3 text-sm border-b w-[173px]"
              />
              <button className="font-medium text-sm text-black uppercase underline">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="border-t py-10">
          <p className="text-black">
            {new Date().getFullYear()} Furniro. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
