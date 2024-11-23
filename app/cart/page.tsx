import Banner from "@/components/Banner";
import HeroBanner from "@/components/HeroBanner";
import TrashIcon from "@/components/vectors/trash-icon";
import { toCurrency } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <HeroBanner name="Cart" />
      <div className="container py-18 flex flex-col lg:flex-row items-start gap-[30px]">
        <div className="flex flex-col lg:w-2/3">
          <table className="w-full border-collapse">
            <thead className="py-4 bg-cream-1">
              <tr>
                <th className="p-2 font-medium text-center">Product</th>
                <th className="p-2 font-medium text-center">Price</th>
                <th className="p-2 font-medium text-center">Quantity</th>
                <th className="p-2 font-medium text-center">Subtotal</th>
                <th className="p-2 font-medium"></th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="h-[56px]"></tr>
              <tr className="">
                <td className="p-2 text-center">
                  <div className="flex items-center gap-x-6">
                    <Image
                      src="/images/thumbnail1.png"
                      alt="thumbnail"
                      width={105}
                      height={105}
                      className="object-contain bg-cream-1 size-[105px] rounded-[10px]"
                    />
                    <p className="text-sm text-gray-3">Asgaard sofa</p>
                  </div>
                </td>
                <td className="text-sm text-gray-3 p-2 text-center">
                  {toCurrency(250000)}
                </td>
                <td className="text-sm text-gray-3 p-2 text-center">
                  <div className="size-8 rounded-[5px] self-center flex items-center justify-center border">
                    1
                  </div>
                </td>
                <td className="text-sm text-black font-medium p-2 text-center">
                  {toCurrency(250000)}
                </td>
                <td className="p-2 text-center">
                  <button>
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col lg:w-1/3 bg-cream-1 px-18 pt-4 pb-20">
          <h4 className="text-[2rem] font-semibold text-center mb-15">
            Cart Totals
          </h4>
          <div className="flex flex-col gap-y-8 mb-10">
            <div className="flex items-center justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="text-gray-3 text-sm">{toCurrency(250000)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Total</p>
              <p className="text-gray-3 text-sm">{toCurrency(250000)}</p>
            </div>
          </div>
          <button className="py-4 px-14 border border-black rounded-2xl">
            Checkout
          </button>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default page;
