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

export type MovieDetailItem = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  release_date: string;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  runtime: number;
  popularity: number;
  original_language: string;
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }[];
};
