import React from "react";

function Input({ label, id, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <label className="text-sm sm:text-base" htmlFor={id}>
        {label}
      </label>
      <input
        name={id}
        id={id}
        placeholder={placeholder}
        className="outline-none w-full max-w-[528.75px] text-gray-3 placeholder:text-gray-3 text-sm px-[30px] py-6 rounded-[10px] border border-gray-3"
      />
    </div>
  );
}

export default Input;
