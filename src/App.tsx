import { ChangeEvent, useState } from "react";
import StatsForm from "./utils/components/StatsForm";
import DerivedStatsDisplay from "./utils/components/DerivedStatsDisplay";
import { useDarkMode } from "usehooks-ts";
import type { StitchStats } from "./utils/types/types";

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
  const { isDarkMode } = useDarkMode();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setStats((prev) => {
      return {
        ...prev,
        [e.target.name]: Number(e.target.value),
      };
    });
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div
        className={
          "grid min-h-screen place-items-center bg-primary-300 dark:bg-primary-900 sm:bg-primary-100 dark:sm:bg-primary-700"
        }
      >
        <main className="grid-rows-primary grid max-w-md items-center gap-4 rounded-lg bg-primary-300 p-6 text-slate-950 dark:bg-primary-900 dark:text-slate-50 sm:shadow-lg">
          <h1 className="text-center text-lg font-bold sm:text-xl">
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
    </div>
  );
}
