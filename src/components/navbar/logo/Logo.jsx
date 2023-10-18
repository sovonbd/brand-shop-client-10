import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="https://i.imgur.com/ZlVjCZf.png"
          className="w-16 lg:w-20"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
