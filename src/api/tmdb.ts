import axios from 'axios';
import type { MovieListItem } from '../types/movie';

const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'ko-KR',
    include_adult: false,
  },
  headers: {
    accept: 'application/json',
  },
});

export const fetchPopularMovies = async (page = 1): Promise<MovieListItem[]> => {
  try {
    const response = await tmdbApi.get('/movie/popular', {
      params: {
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('영화 리스트 요청 실패: ', error);
    return [];
  }
};

export const fetchMovieDetail = async (movieId: number) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('영화 상세 정보 요청 실패: ', error);
    return null;
  }
};

export const fetchSearchMovies = async (query: string): Promise<MovieListItem[]> => {
  try {
    const response = await tmdbApi.get('/search/movie', {
      params: {
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('영화 검색 요청 실패: ', error);
    return [];
  }
};
