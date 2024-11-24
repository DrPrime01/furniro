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
}
