import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
