import { DerivedStitchStats, StitchStats } from "../types/types";

function roundToEighth(n: number): number {
  return Number((Math.round(n * 8) / 8).toFixed(3));
}

export function deriveStats({
  width,
  height,
  threadCount,
  threadCoverage,
  borderSize,
  finishingSize,
}: StitchStats): DerivedStitchStats {
  const stitchedWidth = roundToEighth(width / (threadCount / threadCoverage));
  const stitchedHeight = roundToEighth(height / (threadCount / threadCoverage));
  const totalWidth = stitchedWidth + borderSize * 2 + finishingSize * 2;
  const totalHeight = stitchedHeight + borderSize * 2 + finishingSize * 2;

  return {
    stitchedWidth,
    stitchedHeight,
    totalWidth,
    totalHeight,
  };
}
