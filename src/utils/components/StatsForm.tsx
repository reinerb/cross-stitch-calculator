import { ChangeEvent } from "react";
import { StitchStats } from "../types/types";
import { twMerge } from "tailwind-merge";
import NumberInput from "./NumberInput";

type Props = {
  stats: StitchStats;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function StatsForm({ stats, onChange, className }: Props) {
  return (
    <form
      className={twMerge("grid grid-cols-1 gap-2 sm:grid-cols-2", className)}
    >
      <div className="form-group">
        <label htmlFor="width">Width (stitches)</label>
        <NumberInput
          name="width"
          id="width"
          value={stats.width}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="height">Height (stitches)</label>
        <NumberInput
          name="height"
          id="height"
          value={stats.height}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="threadCount">Fabric thread count</label>
        <NumberInput
          name="threadCount"
          id="threadCount"
          value={stats.threadCount}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="threadCoverage">Threads covered by each cross</label>
        <NumberInput
          name="threadCoverage"
          id="threadCoverage"
          value={stats.threadCoverage}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="borderSize">Extra fabric for border (inches)</label>
        <NumberInput
          name="borderSize"
          id="borderSize"
          value={stats.borderSize}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="finishingSize">
          Extra fabric for finishing (inches)
        </label>
        <NumberInput
          name="finishingSize"
          id="finishingSize"
          value={stats.finishingSize}
          onChange={onChange}
        />
      </div>
    </form>
  );
}

export default StatsForm;
