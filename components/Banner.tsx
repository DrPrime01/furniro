import { toCurrency } from "@/utils/helpers";
import Image from "next/image";

function Banner() {
  return (
    <div className="py-20 px-14 flex flex-col sm:flex-row sm:flex-wrap justify-center lg:grid lg:grid-cols-4 max-lg:gap-14 bg-cream-3">
      <div className="flex gap-2.5">
        <Image src="/icons/trophy.svg" alt="trophy" width={48} height={48} />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg text-gray-dark">High Quality</h3>
          <p className="text-gray-2 font-medium text-base">
            Crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <Image
          src="/icons/guarantee.svg"
          alt="guarantee"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg text-gray-dark">
            Warranty Protection
          </h3>
          <p className="text-gray-2 font-medium text-base">Over 2 years</p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <Image
          src="/icons/shipping.svg"
          alt="shipping"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg text-gray-dark">
            Free Shipping
          </h3>
          <p className="text-gray-2 font-medium text-base">
            For orders over {toCurrency(150000)}
          </p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <Image
          src="/icons/customer-support.svg"
          alt="customer-support"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg text-gray-dark">24/7 Support</h3>
          <p className="text-gray-2 font-medium text-base">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
