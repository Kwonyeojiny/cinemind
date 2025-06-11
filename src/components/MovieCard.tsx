const baseUrl = 'https://image.tmdb.org/t/p/w500';

type MovieCardProps = {
  title: string;
  poster_path: string;
  vote_average: number;
};

const MovieCard = ({ title, poster_path, vote_average }: MovieCardProps) => {
  return (
    <div>
      <img src={`${baseUrl}${poster_path}`} alt={title} className="w-80" />
      <h2>{title}</h2>
      <p>Rating: {vote_average.toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;
