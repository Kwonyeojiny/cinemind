import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
