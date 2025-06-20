# Character Counter App

This project is a React + TypeScript character counter component library with example usage.

## Features

- Live character count
- Word count with min/max validation
- Estimated reading time (words per 200 wpm)
- Text input area with styled UI

## Components

### CharacterCounter

Props:
- `minWords` (number) — minimum number of words required (default: 0)
- `maxWords` (number) — maximum number of words allowed (default: Infinity)
- `targetReadingTime` (number) — target reading time in minutes (optional)

### TextInput

Props:
- `onTextChange` (function) — callback when text changes, returns current text
- `placeholder` (string) — input placeholder text (optional)
- `initialValue` (string) — initial textarea value (optional)

### StatsDisplay

Props:
- `stats` (object) — contains characterCount, wordCount, readingTime
- `showReadingTime` (boolean) — whether to show reading time (default: true)

## How To Run
Clone the repository:
- git clone https://github.com/callmesophiii/character-counter-app.git
- cd character-counter

Install dependencies:
- npm install

Start the development server:
- npm run dev

## Example Usage

```tsx
import React from 'react';
import CharacterCounter from './components/CharacterCounter/CharacterCounter';
import './App.css';

function App() {
  return (
    <div>
      <h1>Example Usage of CharacterCounter</h1>
      <CharacterCounter minWords={100} maxWords={500} targetReadingTime={3} />
    </div>
  );
}

export default App;
