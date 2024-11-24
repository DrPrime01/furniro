import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecentPostsPreview({
  img,
  title,
  date,
  slug,
}: RecentPostsPreviewProps) {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src={img}
        alt="preview"
        width={80}
        height={80}
        className="object-cover size-20 rounded-[10px]"
      />
      <div className="flex flex-col gap-y-[5px]">
        <Link href={`/blog/${slug}`} className="text-sm">
          {title}
        </Link>
        <p className="text-xs text-gray-3">{date}</p>
      </div>
    </div>
  );
}

export default RecentPostsPreview;
