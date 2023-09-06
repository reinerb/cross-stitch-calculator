import { ChangeEvent, useState } from "react";
import { StitchStats } from "./utils/types/types";
import StatsForm from "./utils/components/StatsForm";
import DerivedStatsDisplay from "./utils/components/DerivedStatsDisplay";

export default function CrossStitchCalculator() {
  const defaultStats: StitchStats = {
    width: 0,
    height: 0,
    threadCount: 0,
    threadCoverage: 0,
    borderSize: 0,
    finishingSize: 0,
  };

  const [stats, setStats] = useState<StitchStats>(defaultStats);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setStats((prev) => {
      return {
        ...prev,
        [e.target.name]: Number(e.target.value),
      };
    });
  };

  return (
    <div className="grid min-h-screen place-items-center bg-primary-100">
      <main className="grid-rows-primary grid max-w-md items-center gap-4 rounded-lg bg-primary-300 p-6 shadow-lg">
        <h1 className="text-center text-xl font-bold">
          Cross Stitch Fabric Size Calculator
        </h1>
        <StatsForm
          stats={stats}
          onChange={handleChange}
          className="row-span-2"
        />
        <DerivedStatsDisplay stats={stats} />
      </main>
    </div>
  );
}
