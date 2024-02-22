import Header from "./components/Header";
import CandidateList from "./components/CandidateList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen pt-4 px-12">
      <Header />
      <Suspense fallback={<div className="p-4">Loading Candidates...</div>}>
        <CandidateList />
      </Suspense>
    </main>
  );
}
