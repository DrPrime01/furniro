import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export {};

declare global {
  type SlugType = { current: string; _type: "slug" };

  interface ProductCard {
    slug: SlugType;
    img: string;
    name: string;
    desc: string;
    originalPrice: number;
    discount?: number;
    isNew?: boolean;
  }

  interface InputProps {
    label: string;
    id: string;
    placeholder?: string;
  }

  interface BlogPreviewProps {
    slug: string;
    shortDesc: string;
    author: {
      name: string;
      profileImg?: string;
    };
    date: string;
    category: string;
    coverImg: string;
    title: string;
  }

  interface RecentPostsPreviewProps {
    img: string;
    title: string;
    date: string;
    slug: string;
  }

  interface SidebarCartProps {
    closeModal: () => void;
    openModal: boolean;
  }

  interface CategoryProps {
    _id: string;
    name: string;
    slug: SlugType;
    _createdAt: string;
    coverImage: SanityImageSource[];
    products: unknown[];
  }

  interface ProductProps {
    images: SanityImageSource[];
    description: string;
    summary: string;
    category: CategoryProps[];
    slug: SlugType;
    price: number;
    name: string;
    _id: string;
  }
}
