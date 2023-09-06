import React from 'react';
import { StitchStats } from '../types/types';
import { deriveStats } from '../functions/deriveStats';

type Props = {
  stats: StitchStats;
};

function DerivedStatsDisplay({ stats }: Props) {
  const derivedStats = deriveStats(stats);

  return (
    <section>
      <p>
        The stitched area will be {derivedStats.stitchedWidth || 0} inches wide
        by {derivedStats.stitchedHeight || 0} inches high.
      </p>
      <p>
        The total area of fabric should be at least{' '}
        {derivedStats.totalWidth || 0} inches wide by{' '}
        {derivedStats.totalHeight || 0} inches high.
      </p>
    </section>
  );
}

export default DerivedStatsDisplay;
