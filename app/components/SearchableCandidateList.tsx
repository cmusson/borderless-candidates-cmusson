"use client";
import React, { useState } from "react";
import Candidate from "./Candidate";
import Search from "./Search";
import Filter from "./Filter";
import { ICandidate } from "../constants/interfaces";

interface ISCDProps {
  candidates: ICandidate[];
  search: (search: string) => Promise<ICandidate[]>;
}

const SearchableCandidateList = ({ candidates, search }: ISCDProps) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchResults, setSearchResults] = useState(candidates);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    setSearchResults(await search(e.target.value));
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div
        style={{ width: "fit-content" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <div className="col-span-full flex justify-end gap-2 mt-4">
          <Search handleChange={handleChange} searchStr={searchStr} />
          <Filter />
        </div>
        {searchResults.length ? (
          searchResults.map((candidate, idx) => (
            <Candidate key={idx} candidate={candidate} />
          ))
        ) : (
          <div>No candidates matching that criteria...</div>
        )}
      </div>
    </div>
  );
};

export default SearchableCandidateList;
