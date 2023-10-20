import { Rating } from "@smastrom/react-rating";
import { RxCross1 } from "react-icons/rx";

import "@smastrom/react-rating/style.css";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const CartItems = ({ item, items, setItems }) => {
  const { _id, itemName, restaurant, price, type, description, rating, photo } =
    item;

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
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
            <p className="text-sm">{type}</p>
            <Rating
              style={{ maxWidth: 90 }}
              readOnly
              orientation="horizontal"
              value={rating}></Rating>
          </div>
        </div>
        <button onClick={() => handleDelete(_id)}>
          <RxCross1 className="text-xl hover:text-[#F36527] active:text-sm"></RxCross1>
        </button>
      </div>
    </div>
  );
};

export default CartItems;