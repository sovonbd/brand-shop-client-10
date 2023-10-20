import { useLoaderData } from "react-router-dom";
import CartItems from "./CartItems";

const MyCart = () => {
  const data = useLoaderData();
  console.log(data);

  const { itemName, restaurant, price, type, description, rating, photo } =
    data;

  return (
    <div>
      <div className="bg-[#F4F3F0] mx-4 my-10 md:w-4/5 lg:w-1/2 md:mx-auto shadow-xl py-10">
        <h1 className="text-left font-bold text-4xl px-3 lg:px-10">MY BAG</h1>
        {data.map((item) => (
          <CartItems key={item._id} item={item}></CartItems>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
