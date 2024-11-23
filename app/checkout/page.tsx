import Banner from "@/components/Banner";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import HeroBanner from "@/components/HeroBanner";
import { toCurrency } from "@/utils/helpers";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <HeroBanner name="Checkout" />
      <form className="py-16 container flex flex-col md:flex-row gap-6">
        <div className="flex flex-col py-9 px-18 w-full gap-y-9">
          <h2 className="font-semibold text-4xl">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-9">
            <Input label="First name" id="first_name" placeholder="John" />
            <Input label="Last name" id="last_name" placeholder="Doe" />
          </div>
          <Input label="Email address" id="email" placeholder="john@doe.com" />
          <Input
            label="Company name (optional)"
            id="company_name"
            placeholder="John Industries"
          />
          <Input label="Street address" id="street" placeholder="" />
          <Input label="Town / City" id="town_city" placeholder="" />
          <Input label="ZIP code" id="zip" placeholder="" />
          <Input label="Phone" id="phone" placeholder="+(82) 456-3692" />
          <Textarea
            label="Additional information"
            id="additional_info"
            placeholder="Hi! Can you add...?"
          />
        </div>
        <div className="w-full px-9 py-[88px] flex flex-col">
          <div className="flex flex-col gap-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium">Product</h3>
              <h3 className="text-xl font-medium">Subtotal</h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-3">Asgaard sofa x 1</p>
              <p className="text-sm">{toCurrency(250000)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">{toCurrency(250000)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Total</p>
              <p className="text-primary font-bold">{toCurrency(250000)}</p>
            </div>
          </div>
          <hr className="mt-10 mb-5" />
          <div className="flex flex-col gap-y-5">
            <div>
              <div className="flex items-center gap-x-4 mb-2.5">
                <div className="bg-black size-3 rounded-full" />
                <p>Direct Bank Transfer</p>
              </div>
              <p className="text-gray-3 font-light">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="flex flex-col gap-y-2.5">
              <label
                htmlFor="direct_bank_transfer"
                className="flex items-center gap-x-4"
              >
                <input
                  type="radio"
                  className="outline-none size-3"
                  id="direct_bank_transfer"
                  name="transfer_type"
                />
                <p className="text-sm font-medium text-gray-3">
                  Direct Bank Transfer
                </p>
              </label>
              <label
                htmlFor="cash_on_delivery"
                className="flex items-center gap-x-4"
              >
                <input
                  type="radio"
                  className="outline-none size-3"
                  id="cash_on_delivery"
                  name="transfer_type"
                />
                <p className="text-sm font-medium text-gray-3">
                  Cash On Delivery
                </p>
              </label>
            </div>
            <div className="flex flex-col gap-y-10">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <Link href="#privaycy-policy" className="font-semibold">
                  privacy policy
                </Link>
                .
              </p>
              <button className="self-center py-4 px-24 border border-black rounded-[10px]">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
      <Banner />
    </div>
  );
}

export default page;
