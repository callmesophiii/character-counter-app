import React, { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';

const calculateStats = (text: string): TextStats => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return {
    characterCount: text.length,
    wordCount: words.length,
    readingTime: Math.ceil(words.length / 200),
  };
};

const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = Infinity,
  targetReadingTime,
}) => {
  const [textStats, setTextStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const handleTextChange = (text: string) => {
    setTextStats(calculateStats(text));
  };

  return (
    <div className="character-counter-container">
      <h2>Character Counter</h2>
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={textStats} showReadingTime={!!targetReadingTime} />
      {minWords > 0 && (
        <p className="word-progress">
          Word Progress: {textStats.wordCount}/{
            maxWords !== Infinity ? maxWords : '∞'
          } words
        </p>
      )}
    </div>
  );
};

export default CharacterCounter;
