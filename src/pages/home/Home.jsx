import Banner from "../../components/banner/Banner";
import DealItem from "../../components/dealItem/DealItem";
import FoodMenu from "../../components/foodMenu/FoodMenu";
import Navmenu from "../../components/navbar/navmenu/Navmenu";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative z-10">
          <Navmenu></Navmenu>
        </div>
        <div className="absolute w-full top-0 z-0">
          <Banner></Banner>
          <FoodMenu></FoodMenu>
          <DealItem></DealItem>
        </div>
      </div>
    </div>
  );
};

export default Home;
