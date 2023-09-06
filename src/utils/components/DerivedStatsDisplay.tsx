import React from "react";
import { StitchStats } from "../types/types";
import { deriveStats } from "../functions/deriveStats";
import DimensionsDisplay from "./DimensionsDisplay";

type Props = {
  stats: StitchStats;
};

function DerivedStatsDisplay({ stats }: Props) {
  const { stitchedWidth, stitchedHeight, totalWidth, totalHeight } =
    deriveStats(stats);

  return (
    <div className="grid grid-cols-2 items-center">
      <DimensionsDisplay
        title="Stitched Dimensions"
        width={stitchedWidth || 0}
        height={stitchedHeight || 0}
      />
      <DimensionsDisplay
        title="Total Dimensions"
        width={totalWidth || 0}
        height={totalHeight || 0}
      />
    </div>
  );
}

export default DerivedStatsDisplay;
