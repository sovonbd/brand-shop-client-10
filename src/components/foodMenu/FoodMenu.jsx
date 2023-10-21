import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("foodMenu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  // console.log(menu);
  // console.log(menu);
  return (
    <div className="py-10 text-center space-y-4 w-3/4 mx-auto">
      <h1 className="text-2xl lg:text-5xl font-bold">Our Food Menu</h1>
      <p className="lg:w-3/5 mx-auto text-sm">
        A symphony of flavors, curated to elevate your dining experience. Savor
        culinary masterpieces and indulge in exquisite cuisine.
      </p>
      <div className="grid grid-cols-1 items-center justify-between md:grid-cols-3 lg:grid-cols-6 gap-4 py-6">
        {menu.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="flex flex-col gap-4 items-center border rounded-md p-8 hover:shadow-xl hover:border-[#F36527] hover:font-bold hover:text-[#F36527]">
            <img src={item.photo} className="w-20 h-20" alt="" />
            <caption className="">{item.name}</caption>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
