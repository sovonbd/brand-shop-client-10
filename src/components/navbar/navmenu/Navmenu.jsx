import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

const Navmenu = () => {
  const menu = (
    <div className="flex flex-col md:flex-row gap-8 lg:text-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-b-[#F36527] md:font-medium md:text-xl" : ""
        }>
        Home
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-b-[#F36527] md:font-medium md:text-xl" : ""
        }>
        Add Product
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-b-[#F36527] md:font-medium md:text-xl" : ""
        }>
        My Cart
      </NavLink>
    </div>
  );
  return (
    <div className="py-2 lg:py-4 text-white">
      <div className="navbar justify-between items-center">
        <div className="navbar-start w-auto md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black backdrop-blur-sm w-40">
              {menu}
            </ul>
          </div>
        </div>
        <a className="btn btn-ghost normal-case text-xl relative bottom-2 lg:bottom-4">
          <Logo></Logo>
        </a>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end w-auto">
          <a className="btn bg-[#F36527] text-lg text-white normal-case border-[#F36527] hover:bg-transparent hover:border-[#F36527] hover:border-2">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
