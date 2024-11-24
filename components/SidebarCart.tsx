"use client";
import Image from "next/image";
import CloseCartIcon from "./vectors/close-cart-icon";
import { toCurrency } from "@/utils/helpers";
import CloseIcon from "./vectors/close-icon";
import Link from "next/link";

function SidebarCart({ closeModal, openModal }: SidebarCartProps) {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && closeModal()}
      className={`fixed inset-0 bg-black/30 ${
        openModal ? "flex opacity-100 z-50" : "opacity-0 z-0 hidden"
      } items-start justify-end transition-opacity ease-out cursor-pointer backdrop-blur-[2.5px]`}
    >
      <div className="flex flex-col max-w-[417px] w-full bg-white h-[746px]">
        <div className="flex flex-col p-7 pr-10">
          <div className="flex items-center justify-between pb-6 border-b mb-10">
            <h3 className="font-semibold text-2xl">Shopping Cart</h3>
            <button onClick={closeModal}>
              <CloseCartIcon />
            </button>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center">
              <Image
                src="/images/preview1.jpg"
                alt="cart-img-prev"
                width={105}
                height={108}
                className="object-cover rounded-[10px] h-[108px] w-[105px] mr-8"
              />
              <div className="flex flex-col gap-y-2 mr-auto">
                <p className="text-sm">Asgaard sofa</p>
                <p className="text-sm text-primary">1 x {toCurrency(250000)}</p>
              </div>
              <button>
                <CloseIcon />
              </button>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/preview2.jpg"
                alt="cart-img-prev"
                width={105}
                height={108}
                className="object-cover rounded-[10px] h-[108px] w-[105px] mr-8"
              />
              <div className="flex flex-col gap-y-2 mr-auto">
                <p className="text-sm">Cullingham wood</p>
                <p className="text-sm text-primary">1 x {toCurrency(275000)}</p>
              </div>
              <button>
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-y-6">
          <div className="flex items-center justify-between p-7 pr-10">
            <p>Subtotal</p>
            <p className="font-semibold text-primary">{toCurrency(525000)}</p>
          </div>
          <hr />
          <div className="flex items-center gap-x-6 w-full px-7 pb-7">
            <Link
              href="/cart"
              className="py-1.5 text-sm rounded-[50px] border border-gray-3 w-full text-center"
            >
              Cart
            </Link>
            <Link
              href="/checkout"
              className="py-1.5 text-sm rounded-[50px] border border-gray-3 w-full text-center"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCart;
