import Image from "next/image";
import React, { useState } from "react";

interface ISearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchStr: string;
}

// pass through server-side search function to filter on the server
const Search = ({ handleChange, searchStr }: ISearchProps) => {
  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Search"
        className="bg-white border border-gray-200 rounded p-1 text-gray-500 pl-8"
        value={searchStr}
        onChange={handleChange}
      />
      <Image
        className="absolute top-2 left-2 text-gray-500"
        src="/seach-icon.svg"
        alt={"search"}
        width={20}
        height={20}
      />
    </div>
  );
};

export default Search;
