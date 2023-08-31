import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Settings } from './pages/Settings';

function App() {
  localStorage.setItem('theme', 'superheroes');
  localStorage.setItem('difficulty', 'easy');
  return (
    <BrowserRouter>
      <div className="container mx-auto h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
