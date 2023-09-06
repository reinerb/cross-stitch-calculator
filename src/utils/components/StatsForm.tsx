import { ChangeEvent } from "react";
import { StitchStats } from "../types/types";
import { twMerge } from "tailwind-merge";

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
        <label htmlFor="width">Width</label>
        <input
          type="number"
          name="width"
          id="width"
          value={stats.width}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className="form-group">
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          id="height"
          value={stats.height}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className="form-group">
        <label htmlFor="threadCount">Fabric thread count</label>
        <input
          type="number"
          name="threadCount"
          id="threadCount"
          value={stats.threadCount}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className="form-group">
        <label htmlFor="threadCoverage">Threads covered by each cross</label>
        <input
          type="number"
          name="threadCoverage"
          id="threadCoverage"
          value={stats.threadCoverage}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className="form-group">
        <label htmlFor="borderSize">Extra fabric for border</label>
        <input
          type="number"
          name="borderSize"
          id="borderSize"
          value={stats.borderSize}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className="form-group">
        <label htmlFor="finishingSize">Extra fabric for finishing</label>
        <input
          type="number"
          name="finishingSize"
          id="finishingSize"
          value={stats.finishingSize}
          onChange={onChange}
          min={0}
        />
      </div>
    </form>
  );
}

export default StatsForm;
