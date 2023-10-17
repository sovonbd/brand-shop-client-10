import { Outlet, useLocation } from "react-router-dom";
import Navmenu from "../components/navbar/navmenu/Navmenu";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? (
        ""
      ) : (
        <div className="bg-black/80">
          <Navmenu></Navmenu>
        </div>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
