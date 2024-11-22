export {};

declare global {
  interface ProductCard {
    slug: string;
    img: string;
    name: string;
    desc: string;
    originalPrice: number;
    discount?: number;
    isNew?: boolean;
  }
}
