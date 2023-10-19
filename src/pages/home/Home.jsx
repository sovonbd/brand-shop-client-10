import Banner from "../../components/banner/Banner";
import DealItem from "../../components/dealItem/DealItem";
import FoodMenu from "../../components/foodMenu/FoodMenu";
import Footer from "../../components/footer/Footer";
import Navmenu from "../../components/navbar/navmenu/Navmenu";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="relative z-10">
          <Navmenu></Navmenu>
        </div>
        <div className="absolute w-full top-0 z-0">
          <Banner></Banner>
          <FoodMenu></FoodMenu>
          <DealItem></DealItem>
          <Services></Services>
        </div>
      </div>
    </div>
  );
};

export default Home;
