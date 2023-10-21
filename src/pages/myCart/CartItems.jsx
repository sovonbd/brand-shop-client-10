import { Rating } from "@smastrom/react-rating";
import { RxCross1 } from "react-icons/rx";

import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const CartItems = ({ item, items, setItems }) => {
  const {
    _id,
    itemName,
    price,
    brand,
    rating,
    photo,
  } = item;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://foodie-server-black.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", `${itemName} has been deleted.`, "success");
              const remainingItems = items.filter(
                (itemId) => itemId._id !== _id
              );
              setItems(remainingItems);
            }
          });
      }
    });
  };

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
            <p className="text-sm">
              {brand === "pizzahut"
                ? "Pizza Hut"
                : brand === "burgerking"
                ? "Burger King"
                : brand === "kfc"
                ? "KFC"
                : brand === "mcdonalds"
                ? "McDonald's"
                : brand === "subway"
                ? "Subway"
                : brand === "starbucks"
                ? "Starbucks"
                : ""}
            </p>
            <Rating
              style={{ maxWidth: 90 }}
              readOnly
              orientation="horizontal"
              value={rating}></Rating>
          </div>
        </div>
        <button
          className="tooltip tooltip-left"
          data-tip="Remove"
          onClick={() => handleDelete(_id)}>
          <RxCross1 className="text-xl hover:text-[#F36527] active:text-sm"></RxCross1>
        </button>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
};
export default CartItems;
