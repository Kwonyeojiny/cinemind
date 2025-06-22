import { Link, useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SwiperSlider from '../components/SwiperSlider';
import { useEffect, useState } from 'react';
import type { MovieListItem } from '../types/movie';
import { fetchPopularMovies, fetchSearchMovies } from '../api/tmdb';

const MovieList = () => {
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const getMovies = async () => {
      const data = query ? await fetchSearchMovies(query) : await fetchPopularMovies();
      setMovies(data);
    };

    getMovies();
  }, [query]);

  return (
    <main>
      {!query && <SwiperSlider />}
      {query && <div>'{query}'에 관한 검색 결과입니다.</div>}
      {query && movies.length === 0 && <div className="text-center">검색 결과가 없습니다.</div>}
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
