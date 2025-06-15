import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import { fetchSearchMovies } from '../api/tmdb';
import MovieCard from './MovieCard';
import type { MovieListItem } from '../types/movie';

const Navbar = () => {
  const [input, setInput] = useState<string>('');
  const [preview, setPreview] = useState<MovieListItem[]>([]);
  const debounced = useDebounce(input, 500);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      if (debounced.trim()) {
        const result = await fetchSearchMovies(debounced);
        setPreview(result.slice(0, 5)); // 미리보기용 상위 5개
      } else {
        setPreview([]);
      }
    };

    fetch();
  }, [debounced]);

  const handleSearch = () => {
    if (input.trim()) {
      navigate(`/?query=${encodeURIComponent(input.trim())}`);
      setPreview([]);
    }
  };

  return (
    <nav className="flex flex-col gap-2 px-8 py-4 bg-white relative">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Movie
        </Link>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="영화 검색"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="p-2 border border-gray-500"
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-gray-800 text-white">
            🔍
          </button>
        </div>
        <div className="flex gap-4">
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </div>

      {/* ▼ 미리보기 리스트 */}
      {preview.length > 0 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 mt-2 z-10 w-[400px] max-h-[300px] overflow-x-auto border rounded">
          <h4 className="text-sm font-bold mb-2">검색 결과 미리보기</h4>
          <div className="flex flex-row gap-4">
            {preview.map(movie => (
              <Link
                to={`/details/${movie.id}`}
                key={movie.id}
                onClick={() => {
                  setInput('');
                  setPreview([]);
                }}
                className="block mb-2"
              >
                <MovieCard
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
