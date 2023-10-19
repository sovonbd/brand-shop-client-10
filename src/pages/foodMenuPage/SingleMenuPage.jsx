import { Rating, ThinStar  } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const SingleMenuPage = ({ item }) => {
  const { itemName, restaurant, price, type, description, rating, photo } =
    item;
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="card bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={photo}
              className="w-96 h-60 rounded-lg rounded-b-none"
              alt="Shoes"
            />
          </figure>
          <div className="space-y-2 px-2 py-4 items-center text-center">
            <div className="flex justify-between">
              <p className="border rounded-lg px-4 text-sm border-[#F36527]">
                {restaurant}
              </p>
              <p className="border rounded-lg px-4 text-sm border-[#F36527]">
                {type}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
              <h2 className="card-title text-xl">{itemName}</h2>
              <Rating
                style={{ maxWidth: 100 }}
                readOnly
                orientation="horizontal"
                value={rating}></Rating>
              <p className="text-2xl font-bold pt-3">${price}</p>
            </div>

            <div className="">
              <button className="btn btn-sm mx-auto rounded-r-none border-r-0 bg-transparent border-[#F36527] hover:bg-transparent hover:border-[#F36527] normal-case">
                Details
              </button>
              <button className="btn btn-sm mx-auto rounded-l-none border-[#F36527] bg-[#F36527] text-white hover:bg-[#F36527] hover:text-white hover:border-[#F36527] normal-case">
                Update
              </button>
            </div>
          </div>
        </div>
        {/* <img src={photo} className="w-80 rounded-lg" alt="" />
        <div>
          <h3>{itemName}</h3>
          <p>{restaurant}</p>
          <p>{type}</p>
          <p>{rating}</p>
          <p>${price}</p>
        </div> */}
      </div>
    </div>
  );
};

export default SingleMenuPage;
