import { Outlet, useLocation } from "react-router-dom";
import Navmenu from "../components/navbar/navmenu/Navmenu";
import Footer from "../components/footer/Footer";


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

      {location.pathname === "/" ? "" : <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
