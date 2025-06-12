import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-4">
      <Link to="/">Movie</Link>
      <div>검색창</div>
      <div className="flex gap-4">
        <div>로그인</div>
        <div>회원가입</div>
      </div>
    </nav>
  );
};

export default Navbar;
