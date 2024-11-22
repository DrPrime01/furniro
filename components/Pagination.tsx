import React from "react";

function Pagination() {
  return (
    <div className="flex items-center gap-x-10">
      <button className="size-15 rounded-[10px] bg-cream-3 text-black flex items-center justify-center">
        1
      </button>
      <button className="size-15 rounded-[10px] bg-cream-3 text-black flex items-center justify-center">
        2
      </button>
      <button className="size-15 rounded-[10px] bg-cream-3 text-black flex items-center justify-center">
        3
      </button>
      <button className="py-[15px] px-7 rounded-[10px] bg-cream-3 text-black flex items-center justify-center">
        Next
      </button>
    </div>
  );
}

export default Pagination;
