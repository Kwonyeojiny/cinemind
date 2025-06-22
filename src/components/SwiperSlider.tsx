import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import type { MovieListItem } from '../types/movie';
import { fetchPopularMovies } from '../api/tmdb';
import { baseUrl } from '../constants/api';

const SwiperSlider = () => {
  const [movies, setMovies] = useState<MovieListItem[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={3}
      loop
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {movies.slice(0, 10).map((movie, index) => (
        <SwiperSlide key={movie.id}>
          <div>
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-80 aspect-[2/3]"
            />
            <h1>
              Top <span>{index + 1}: </span>
              {movie.title}
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SwiperSlider;
