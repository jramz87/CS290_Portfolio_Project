import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation.jsx'

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();
  
  return (
    <div className="app">
        <Router>
          <header>
          <Navigation />
            <h1>Exercise Log</h1>
            <p>Achieve your fitness goals using our easy to use exercise tracker!</p>
          </header>

          <main>
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
            <Route path="/create-exercise" element={ <CreateExercisePage />}></Route>
            <Route path="/edit-exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit}/>}></Route>
          </Routes>
          </main>

          <footer>
            <p>&copy; 2025 Jessica Ramirez</p>
          </footer>
        </Router>
    </div>
  );
};

export default App;