import { useParams } from 'react-router-dom';
import { baseUrl } from '../constants/api';
import { useEffect, useState } from 'react';
import type { MovieDetailItem } from '../types/movie';
import { fetchMovieDetail } from '../api/tmdb';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailItem | null>(null);

  useEffect(() => {
    if (!id) return;
    const getMovieDetail = async () => {
      const data = await fetchMovieDetail(Number(id));
      setMovie(data);
    };
    getMovieDetail();
  }, [id]);

  if (!movie) {
    return <div>로딩 중 ...</div>;
  }

  return (
    <div className="flex flex-row justify-center h-160 p-4">
      <img
        className="flex justify-center items-center w-120 p-4 bg-yellow-500"
        src={`${baseUrl}${movie.poster_path}`}
      />
      <div className="flex flex-col gap-4 w-120 p-4 bg-red-500">
        <div className="flex flex-row bg-green-500">
          <div className="flex justify-center items-center grow p-2">{movie.title}</div>
          <div className="p-2 bg-violet-400">{movie.vote_average.toFixed(1)}</div>
        </div>
        <div className="flex justify-center items-center p-2 bg-blue-500">
          {movie.genres.map((genre: { id: number; name: string }) => (
            <span key={genre.id} className="px-1">
              {genre.name}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center grow p-2 bg-cyan-100">
          {movie.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
