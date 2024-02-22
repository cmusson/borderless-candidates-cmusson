import React from "react";
import SearchableCandidateList from "./SearchableCandidateList";
import getCandidates from "../api";

const CandidateList = async () => {
  const candidates = await getCandidates();

  const search = async (search: string) => {
    "use server";
    const candidates = await getCandidates();

    return candidates.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        candidate.role.toLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  return <SearchableCandidateList candidates={candidates} search={search} />;
};

export default CandidateList;
