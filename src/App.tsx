import { ChangeEvent, useState } from "react";
import StatsForm from "./utils/components/StatsForm";
import DerivedStatsDisplay from "./utils/components/DerivedStatsDisplay";
import { useDarkMode, useLocalStorage } from "usehooks-ts";
import type { StitchStats } from "./utils/types/types";
import Footer from "./utils/components/Footer";
import DarkModeSwitcher from "./utils/components/DarkModeSwitcher";
import MetricToggle from "./utils/components/MetricToggle";

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
  const [metric, setMetric] = useLocalStorage<boolean>("metric", false);
  const { isDarkMode, toggle } = useDarkMode();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setStats((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const toggleMetric = () => {
    if (metric) {
      setStats((prev) => {
        return {
          ...prev,
          borderSize: String(Number(prev.borderSize) / 2.5),
          finishingSize: String(Number(prev.finishingSize) / 2.5),
        };
      });
    } else {
      setStats((prev) => {
        return {
          ...prev,
          borderSize: String(Number(prev.borderSize) * 2.5),
          finishingSize: String(Number(prev.finishingSize) * 2.5),
        };
      });
    }
    setMetric((prev) => !prev);
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
            metric={metric}
            className="row-span-2"
          />
          <DerivedStatsDisplay stats={stats} metric={metric} />
          <MetricToggle
            metric={metric}
            toggle={toggleMetric}
            className="absolute bottom-3 right-3 sm:bottom-auto sm:top-3"
          />
        </main>
        <DarkModeSwitcher
          darkMode={isDarkMode}
          toggle={toggle}
          className="absolute right-5 top-5 text-2xl"
        />
        <Footer className="sm:absolute sm:bottom-3 sm:right-3" />
      </div>
    </div>
  );
}
