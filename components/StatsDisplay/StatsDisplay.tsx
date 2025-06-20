import React from 'react';
import type { StatsDisplayProps } from '../../types';

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
  const isWordCountInvalid = stats.wordCount < 25 || stats.wordCount > 100;

console.log('showReadingTime:', showReadingTime);
console.log('readingTime:', stats.readingTime);



  return (
    <div className="stats-container">
      <div className="stat-block">
        <p className="label">Characters</p>
        <p className="value">{stats.characterCount}</p>
      </div>

      <div className="stat-block">
        <p className="label">Words</p>
        <p className={`value ${isWordCountInvalid ? 'word-count-invalid' : ''}`}>
          {stats.wordCount}
        </p>
        <p className="label">Min: 25 | Max: 100</p>
      </div>

      {showReadingTime && (
        <div className="stat-block">
          <p className="label">Reading Time</p>
          <p className="reading-time">{stats.readingTime}</p>
        </div>
      )}
    </div>
  );
};

export default StatsDisplay;
