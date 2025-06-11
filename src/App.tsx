import './App.css';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';

function App() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {movieListData.results.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}

export default App;
