import { useContext } from 'react';
import MainDragDrop from '../components/drag-drop/MainDragDrop';
import MainSound from '../components/sound-effects/MainSound';
import { ScoreContext } from '../store/contexts/ScoreContextProvider';

function App() {

  const { score, setScore, getScore, truTien } = useContext(ScoreContext)
  return (
    <main className="app">
      <div>Score: {score} $ </div>
      <button onClick={() => {truTien(200)}}>Seed 🌱 200$</button>
      {/* <MainDragDrop /> */}
      {/* <MainSound /> */}
    </main>
  );
}

export default App;
