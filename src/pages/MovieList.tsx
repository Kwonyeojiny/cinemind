import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SwiperSlider from '../components/SwiperSlider';
import { useEffect, useState } from 'react';
import type { MovieListItem } from '../types/movie';
import { fetchPopularMovies } from '../api/tmdb';

const MovieList = () => {
  const [movies, setMovies] = useState<MovieListItem[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };

    getMovies();
  }, []);

  return (
    <main>
      <SwiperSlider />
      <div className="flex flex-wrap justify-center items-center gap-8">
        {movies.map(movie => (
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <MovieCard
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MovieList;
