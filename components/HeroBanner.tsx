import Link from "next/link";
import Image from "next/image";

function HeroBanner({ name }: { name: string }) {
  return (
    <div className="h-[316px] relative bg-[url('/images/shop-hero.png')] bg-no-repeat flex flex-col items-center justify-center gap-0.5">
      <Image src="/icons/logo.svg" alt="logo" width={77} height={77} />
      <h2 className="font-medium text-5xl leading-[4rem] text-black">{name}</h2>
      <div className="flex items-center gap-x-1.5">
        <Link href="/" className="text-black font-medium">
          Home
        </Link>
        &gt;
        <p className="text-black font-light">{name}</p>
      </div>
    </div>
  );
}

export default HeroBanner;
