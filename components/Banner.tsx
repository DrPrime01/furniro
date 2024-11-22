import { toCurrency } from "@/utils/helpers";
import Image from "next/image";

function Banner() {
  return (
    <div className="py-[100px] px-14 flex flex-wrap justify-center lg:grid lg:grid-cols-4 max-lg:gap-14 bg-cream-3">
      <div className="flex gap-2.5">
        <Image src="/icons/trophy.svg" alt="trophy" width={60} height={60} />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-xl text-gray-dark">High Quality</h3>
          <p className="text-gray-2 font-medium text-lg">
            Crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <Image
          src="/icons/guarantee.svg"
          alt="guarantee"
          width={60}
          height={60}
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-xl text-gray-dark">
            Warranty Protection
          </h3>
          <p className="text-gray-2 font-medium text-lg">Over 2 years</p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <Image
          src="/icons/shipping.svg"
          alt="shipping"
          width={60}
          height={60}
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-xl text-gray-dark">
            Free Shipping
          </h3>
          <p className="text-gray-2 font-medium text-lg">
            For orders over {toCurrency(150000)}
          </p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <Image
          src="/icons/customer-support.svg"
          alt="customer-support"
          width={60}
          height={60}
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-xl text-gray-dark">24/7 Support</h3>
          <p className="text-gray-2 font-medium text-lg">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
