import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogPreview(props: BlogPreviewProps) {
  const { coverImg, author, date, category, title, shortDesc, slug } = props;
  return (
    <div className="flex flex-col gap-y-4">
      <Image
        src={coverImg}
        alt="cover-img"
        width={815}
        height={500}
        className="object-cover rounded-[10px]"
      />
      <div className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-2.5">
          <Image
            src="/icons/profile-icon.svg"
            width={20}
            height={20}
            alt="profile"
          />
          <p className="text-sm text-gray-3">{author.name}</p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <Image
            src="/icons/calendar-icon.svg"
            width={20}
            height={20}
            alt="profile"
          />
          <p className="text-sm text-gray-3">{date}</p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <Image
            src="/icons/category-icon.svg"
            width={20}
            height={20}
            alt="profile"
          />
          <p className="text-sm text-gray-3">{category}</p>
        </div>
      </div>
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-sm text-gray-3">{shortDesc}</p>
      <Link href={`/blog/${slug}`} className="text-sm underline">
        Read more
      </Link>
    </div>
  );
}

export default BlogPreview;
