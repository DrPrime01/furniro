import Banner from "@/components/Banner";
import FilterComponent from "@/components/FilterComponent";
import HeroBanner from "@/components/HeroBanner";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import { client } from "@/lib/client";

async function page({
  searchParams,
}: {
  searchParams: {
    start?: string;
    end?: string;
    sortBy?: string;
  };
}) {
  const { start = "0", end = "12", sortBy = "name asc" } = searchParams;

  // Map of allowed sort options
  const sortOptions: { [key: string]: string } = {
    priceLowToHigh: "price asc",
    priceHighToLow: "price desc",
    dateOldest: "_createdAt asc",
    dateNewest: "_createdAt desc",
  };

  const sortQuery = sortOptions[sortBy] || sortOptions.nameAsc;

  const prodQuery = `*[_type=="product"] | order(${sortQuery})[$start...$end]`;
  const products = await client.fetch(
    prodQuery,
    { start: Number(start), end: Number(end) },
    { next: { revalidate: 60 } }
  );
  return (
    <div className="flex flex-col">
      <HeroBanner name="Shop" />
      <FilterComponent />
      <div className="container py-12 flex flex-col gap-y-16">
        <ProductList products={products} />
        <div className="self-center">
          <Pagination />
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default page;
