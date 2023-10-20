import { useLoaderData } from "react-router-dom";
import CartItems from "./CartItems";
import { useState } from "react";

const MyCart = () => {
  const data = useLoaderData();
  const [items, setItems] = useState(data);
  console.log(data);

  return (
    <div>
      <div className="bg-[#F4F3F0] mx-4 my-10 md:w-4/5 lg:w-1/2 md:mx-auto shadow-xl py-10">
        <h1 className="text-left font-bold text-4xl px-3 lg:px-10">MY BAG</h1>
        {items.map((item) => (
          <CartItems
            key={item._id}
            item={item}
            items={items}
            setItems={setItems}></CartItems>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
