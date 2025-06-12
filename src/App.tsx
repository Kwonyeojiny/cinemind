import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
