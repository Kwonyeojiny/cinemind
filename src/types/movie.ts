export type MovieListItem = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
  backdrop_path: string;
  adult: boolean;
  overview: string;
};
