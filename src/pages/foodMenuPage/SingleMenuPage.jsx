import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleMenuPage = ({ item }) => {
  const { _id, itemName, productType, price, brand, rating, photo } = item;
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
                {productType}
              </p>
              <p className="border rounded-lg px-4 text-sm border-[#F36527]">
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
              <Link to={_id}>
                <button className="btn btn-sm mx-auto rounded-r-none border-r-0 bg-transparent border-[#F36527] hover:bg-transparent hover:border-[#F36527] normal-case">
                  Details
                </button>
              </Link>
              <Link to={`/updateProduct/${_id}`}>
                <button className="btn btn-sm mx-auto rounded-l-none border-[#F36527] bg-[#F36527] text-white hover:bg-[#F36527] hover:text-white hover:border-[#F36527] normal-case">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleMenuPage.propTypes = {
  item: PropTypes.object.isRequired,
};
export default SingleMenuPage;
