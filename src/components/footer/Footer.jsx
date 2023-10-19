import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer footer-center gap-3 p-10 bg-[#F36527] text-primary-content">
        <aside>
          <Link to="/">
            <img
              src="https://i.imgur.com/ZlVjCZf.png"
              className="w-16 lg:w-20"
              alt=""
            />
          </Link>
          <p className="font-bold">
            Foodie Industries Ltd. <br />
            Providing the best dishes since 2000
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a href="https://www.facebook.com/">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube></FaYoutube>
            </a>
            <a href="https://twitter.com/?lang=en">
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
