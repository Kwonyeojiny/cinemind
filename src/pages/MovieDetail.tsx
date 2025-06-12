import { baseUrl } from '../constants/api';
import movieDetailDate from '../data/movieDetailData.json';

const MovieDetail = () => {
  return (
    <div className="flex flex-row justify-center h-160 p-4">
      <img
        className="flex justify-center items-center w-120 p-4 bg-yellow-500"
        src={`${baseUrl}${movieDetailDate.poster_path}`}
      />
      <div className="flex flex-col gap-4 w-120 p-4 bg-red-500">
        <div className="flex flex-row bg-green-500">
          <div className="flex justify-center items-center grow p-2">{movieDetailDate.title}</div>
          <div className="p-2 bg-violet-400">{movieDetailDate.vote_average.toFixed(1)}</div>
        </div>
        <div className="flex justify-center items-center p-2 bg-blue-500">
          {movieDetailDate.genres.map((genre: { id: number; name: string }) => (
            <span key={genre.id} className="px-1">
              {genre.name}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center grow p-2 bg-cyan-100">
          {movieDetailDate.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
