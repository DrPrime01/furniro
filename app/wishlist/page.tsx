import Banner from "@/components/Banner";
import HeroBanner from "@/components/HeroBanner";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";

function page() {
  return (
    <div className="flex flex-col">
      <HeroBanner name="My Wishlist" />
      <div className="container py-12 flex flex-col gap-y-16">
        <ProductList />
        <div className="self-center">
          <Pagination />
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default page;
