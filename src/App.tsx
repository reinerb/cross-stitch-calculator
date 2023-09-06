import { ChangeEvent, useState } from "react";
import StatsForm from "./utils/components/StatsForm";
import DerivedStatsDisplay from "./utils/components/DerivedStatsDisplay";
import { useDarkMode } from "usehooks-ts";
import type { StitchStats } from "./utils/types/types";
import Footer from "./utils/components/Footer";
import DarkModeSwitcher from "./utils/components/DarkModeSwitcher";

export default function CrossStitchCalculator() {
  const defaultStats: StitchStats = {
    width: "",
    height: "",
    threadCount: "",
    threadCoverage: "",
    borderSize: "",
    finishingSize: "",
  };

  const [stats, setStats] = useState<StitchStats>(defaultStats);
  const { isDarkMode, toggle } = useDarkMode();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setStats((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div
        className={
          "relative grid min-h-screen place-items-center bg-primary-300 text-slate-950 dark:bg-primary-900 dark:text-slate-50 sm:bg-primary-100 dark:sm:bg-primary-700"
        }
      >
        <main className="grid-rows-primary relative grid max-w-lg items-center gap-4 rounded-lg bg-primary-300 p-6 dark:bg-primary-900 sm:shadow-lg">
          <h1 className="text-center text-lg font-bold sm:text-xl">
            Cross Stitch Fabric Size Calculator
          </h1>
          <StatsForm
            stats={stats}
            onChange={handleChange}
            className="row-span-2"
          />
          <DerivedStatsDisplay stats={stats} />
          <DarkModeSwitcher
            darkMode={isDarkMode}
            toggle={toggle}
            className="absolute bottom-2 right-3 sm:bottom-auto sm:top-3"
          />
        </main>
        <Footer className="sm:absolute sm:bottom-3 sm:right-3" />
      </div>
    </div>
  );
}
