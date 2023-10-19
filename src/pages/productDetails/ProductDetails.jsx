import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();
  // console.log(id, path);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [id]);

  const { itemName, restaurant, price, type, description, rating, photo } =
    items;

  return (
    <div className="py-10 px-32">
      <div className="flex flex-col justify-center md:flex-row gap-4">
        <img src={photo} className="w-1/3 mx-auto rounded-lg" alt="" />
        <div>
          <h1 className="text-5xl">{itemName}</h1>
          <Rating
            style={{ maxWidth: 100 }}
            readOnly
            orientation="horizontal"
            value={rating}></Rating>
          <p className="text-3xl text-[#F36527] py-3 font-bold">${price}</p>
          <div className="">
            <h3 className="font-semibold">Product Description</h3>
            <hr className=" border-[#F36527]" />
            <p className="text-justify text-sm text-gray-600">{description}</p>
          </div>
          <input
            type="submit"
            value="Add to Cart"
            className="btn mt-2 w-full md:col-span-2 normal-case bg-[#F36527] border-white border-[2px] hover:text-[#1F2937] hover:border-[#F36527] hover:bg-transparent text-xl text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
