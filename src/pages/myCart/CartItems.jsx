import { Rating } from "@smastrom/react-rating";
import { RxCross1 } from "react-icons/rx";

import "@smastrom/react-rating/style.css";
const CartItems = ({ item }) => {
  const { itemName, restaurant, price, type, description, rating, photo } =
    item;
  return (
    <div className="px-3 lg:px-10">
      <hr className=" border-[#F36527] my-6" />

      <div className="flex justify-between items-start">
        <div className="flex gap-2 md:gap-4">
          <img src={photo} className="w-40 md:w-60" alt="" />
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#F36527]">
              ${price}
            </p>
            <p className="font-semibold">{itemName}</p>
            <p className="text-sm">{type}</p>
            <Rating
              style={{ maxWidth: 90 }}
              readOnly
              orientation="horizontal"
              value={rating}></Rating>
          </div>
        </div>
        <button>
          <RxCross1 className="text-xl hover:text-[#F36527] active:text-sm"></RxCross1>
        </button>
      </div>
    </div>
  );
};

export default CartItems;
