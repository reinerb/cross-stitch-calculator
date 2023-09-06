import { DerivedStitchStats, StitchStats, VerifiedStats } from "../types/types";

function roundToEighth(n: number): number {
  return Number((Math.ceil(n * 8) / 8).toFixed(3));
}

export function verifyStats(stats: StitchStats): VerifiedStats {
  const verifiedStats = Object();

  Object.keys(stats).forEach((key: string) => {
    verifiedStats[key] = isNaN(Number(stats[key as keyof typeof stats]))
      ? 0
      : Number(stats[key as keyof typeof stats]);
  });

  return verifiedStats as VerifiedStats;
}

export function deriveStats(
  stats: StitchStats,
  metric: boolean,
): DerivedStitchStats {
  const {
    width,
    height,
    threadCount,
    threadCoverage,
    borderSize,
    finishingSize,
  } = verifyStats(stats);

  const stitchedWidth = roundToEighth(
    (width / (threadCount / threadCoverage)) * (metric ? 2.54 : 1),
  );
  const stitchedHeight = roundToEighth(
    (height / (threadCount / threadCoverage)) * (metric ? 2.54 : 1),
  );
  const totalWidth = stitchedWidth + borderSize * 2 + finishingSize * 2;
  const totalHeight = stitchedHeight + borderSize * 2 + finishingSize * 2;

  return {
    stitchedWidth,
    stitchedHeight,
    totalWidth,
    totalHeight,
  };
}
