import { ChangeEvent, useState } from 'react';
import { StitchStats } from './utils/types/types';
import StatsForm from './utils/components/StatsForm';
import DerivedStatsDisplay from './utils/components/DerivedStatsDisplay';

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
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <StatsForm
        stats={stats}
        onChange={handleChange}
      />
      <DerivedStatsDisplay stats={stats} />
    </div>
  );
}
