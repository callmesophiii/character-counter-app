import CharacterCounter from './components/CharacterCounter/CharacterCounter';
import './App.css';

function App() {
  return <CharacterCounter minWords={100} maxWords={500} targetReadingTime={3} />;
}

export default App;

