import React from "react";
import SearchIcon from "../vectors/search-icon";

function Searchbar() {
  return (
    <div className="flex items-center gap-x-2 border border-gray-3 p-4 rounded-[10px] w-full">
      <input type="text" className="outline-none flex-1 border-none" />
      <button className="shrink-0">
        <SearchIcon />
      </button>
    </div>
  );
}

export default Searchbar;
