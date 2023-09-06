import { StitchStats } from "../types/types";
import { deriveStats, verifyStats } from "../functions/deriveStats";
import DimensionsDisplay from "./DimensionsDisplay";

type Props = {
  stats: StitchStats;
};

function DerivedStatsDisplay({ stats }: Props) {
  const { width, height } = verifyStats(stats);
  const { stitchedWidth, stitchedHeight, totalWidth, totalHeight } =
    deriveStats(stats);

  return (
    <div className="grid items-center gap-4 sm:grid-cols-2">
      <section className="col-span-full flex flex-col items-center gap-2">
        <h2 className="text-center text-lg font-semibold">Total Stitches</h2>
        <p className="text-center text-xl font-bold">{width * height}</p>
      </section>
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
