import React, { ChangeEvent } from 'react';
import { StitchStats } from '../types/types';

type Props = {
  stats: StitchStats;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function StatsForm({ stats, onChange }: Props) {
  return (
    <form>
      <div className=''>
        <label htmlFor='width'>Width</label>
        <input
          type='number'
          name='width'
          id='width'
          value={stats.width}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className=''>
        <label htmlFor='height'>Height</label>
        <input
          type='number'
          name='height'
          id='height'
          value={stats.height}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className=''>
        <label htmlFor='threadCount'>Fabric thread count</label>
        <input
          type='number'
          name='threadCount'
          id='threadCount'
          value={stats.threadCount}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className=''>
        <label htmlFor='threadCoverage'>Threads covered by each cross</label>
        <input
          type='number'
          name='threadCoverage'
          id='threadCoverage'
          value={stats.threadCoverage}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className=''>
        <label htmlFor='borderSize'>Extra fabric for border</label>
        <input
          type='number'
          name='borderSize'
          id='borderSize'
          value={stats.borderSize}
          onChange={onChange}
          min={0}
        />
      </div>
      <div className=''>
        <label htmlFor='finishingSize'>Extra fabric for finishing</label>
        <input
          type='number'
          name='finishingSize'
          id='finishingSize'
          value={stats.finishingSize}
          onChange={onChange}
          min={0}
        />
      </div>
    </form>
  );
}

export default StatsForm;
