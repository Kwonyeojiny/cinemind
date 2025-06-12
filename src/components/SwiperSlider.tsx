import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import movieListData from '../data/movieListData.json';
import { baseUrl } from '../constants/api';
import 'swiper/css';

const SwiperSlider = () => {
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
      {movieListData.results.map((movie, index) => (
        <SwiperSlide key={movie.id}>
          <div>
            <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} className="w-80" />
            Add commentMore actions
            <h1>
              Top <span>{index + 1}</span>
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SwiperSlider;
