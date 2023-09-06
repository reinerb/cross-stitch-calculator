import { ChangeEvent, useState } from 'react';

type StitchStats = {
  width: number;
  height: number;
  threadCount: number;
  threadCoverage: number;
  borderSize: number;
  finishingSize: number;
};

type DerivedStitchStats = {
  stitchedWidth: number;
  stitchedHeight: number;
  totalWidth: number;
  totalHeight: number;
};

function roundToEighth(n: number): number {
  return Number((Math.round(n * 8) / 8).toFixed(3));
}

function deriveStats({
  width,
  height,
  threadCount,
  threadCoverage,
  borderSize,
  finishingSize,
}: StitchStats): DerivedStitchStats {
  const stitchedWidth = roundToEighth(width / (threadCount / threadCoverage));
  const stitchedHeight = roundToEighth(height / (threadCount / threadCoverage));
  const totalWidth = stitchedWidth + borderSize + finishingSize;
  const totalHeight = stitchedHeight + borderSize + finishingSize;

  return {
    stitchedWidth,
    stitchedHeight,
    totalWidth,
    totalHeight,
  };
}

export default function CrossStitchCalculator() {
  const defaultStats: StitchStats = {
    width: 100,
    height: 100,
    threadCount: 18,
    threadCoverage: 1,
    borderSize: 1,
    finishingSize: 1,
  };

  const [stats, setStats] = useState<StitchStats>(defaultStats);
  const derivedStats = deriveStats(stats);

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
      <form>
        <div className=''>
          <label htmlFor='width'>Width</label>
          <input
            type='number'
            name='width'
            id='width'
            value={stats.width}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <label htmlFor='height'>Height</label>
          <input
            type='number'
            name='height'
            id='height'
            value={stats.height}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <label htmlFor='threadCount'>Fabric thread count</label>
          <input
            type='number'
            name='threadCount'
            id='threadCount'
            value={stats.threadCount}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <label htmlFor='threadCoverage'>Threads covered by each cross</label>
          <input
            type='number'
            name='threadCoverage'
            id='threadCoverage'
            value={stats.threadCoverage}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <label htmlFor='borderSize'>Extra fabric for border</label>
          <input
            type='number'
            name='borderSize'
            id='borderSize'
            value={stats.borderSize}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <label htmlFor='finishingSize'>Extra fabric for finishing</label>
          <input
            type='number'
            name='finishingSize'
            id='finishingSize'
            value={stats.finishingSize}
            onChange={handleChange}
          />
        </div>
      </form>
      <section>
        <p>
          The stitched area will be {derivedStats.stitchedWidth} inches wide by{' '}
          {derivedStats.stitchedHeight} inches high.
        </p>
        <p>
          The total area of fabric should be at least {derivedStats.totalWidth}{' '}
          inches wide by {derivedStats.totalHeight} inches high.
        </p>
      </section>
    </div>
  );
}
