import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import movieListData from '../data/movieListData.json';

const MovieList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {movieListData.results.map(movie => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
