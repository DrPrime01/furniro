import React from "react";

function Hero() {
  return (
    <div className="min-h-[calc(100vh_-_100px)] bg-[url('/images/hero.png')] bg-cover bg-no-repeat flex items-center justify-end px-14">
      <div className="rounded-[10px] bg-cream-4 pt-16 pb-9 px-10 flex flex-col h-fit max-w-[643px]">
        <p className="mb-1 font-semibold text-gray-4 tracking-wide">
          New Arrival
        </p>
        <h1 className="font-bold leading-[4rem] text-5xl mb-4 text-primary">
          Discover Our New Collection
        </h1>
        <p className="text-gray-4 font-medium text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
          quos, nulla doloremque error.
        </p>
        <button className="mt-12 py-6 px-[4.5rem] text-white font-bold uppercase bg-primary w-fit">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
