import Banner from "@/components/Banner";
import HeroBanner from "@/components/HeroBanner";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <HeroBanner name="Checkout" />
      <div className="py-16 container flex flex-col md:flex-row gap-6"></div>
      <Banner />
    </div>
  );
}

export default page;
