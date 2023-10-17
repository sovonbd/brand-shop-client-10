import Banner from "../../components/banner/Banner";
import Navmenu from "../../components/navbar/navmenu/Navmenu";

const Home = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Navmenu></Navmenu>
      </div>
      <div className="absolute w-full top-0 z-0">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
