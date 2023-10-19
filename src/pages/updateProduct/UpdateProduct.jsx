
const UpdateProduct = () => {
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const itemName = form.itemName.value;
    const restaurant = form.restaurant.value;
    const price = form.price.value;
    const type = form.itemType.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const item = {
      itemName,
      restaurant,
      price,
      type,
      description,
      rating,
      photo,
    };
    console.log(item);
  };
  return (
    <div>
      <h1 className="pt-10 text-center text-3xl font-bold lg:text-5xl">
        Add a new product
      </h1>
      <div>
        <form
          onSubmit={handleUpdateProduct}
          className="bg-[#F4F3F0] w-5/6 md:grid md:grid-cols-2 gap-4 items-center mx-auto p-4 lg:p-10 mt-10">
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <label className="">
              <input
                type="text"
                name="itemName"
                placeholder="Enter item name"
                className="input input-bordered w-full"
                style={{ borderRadius: "0px" }}
              />
            </label>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Restaurant Name</span>
            </label>
            <label className="">
              <input
                type="text"
                name="restaurant"
                placeholder="Enter restaurant name"
                className="input input-bordered w-full"
                style={{ borderRadius: "0px" }}
              />
            </label>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Type</span>
            </label>
            <select
              name="itemType"
              className="select select-bordered w-full"
              style={{ borderRadius: "0px" }}>
              <option disabled selected>
                Choose the category?
              </option>
              <option>Pizza</option>
              <option>Burger</option>
              <option>Dessert</option>
              <option>Salad</option>
              <option>Breakfast</option>
              <option>Lunch</option>
            </select>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="">
              <input
                type="text"
                name="price"
                placeholder="Enter item price"
                className="input input-bordered w-full"
                style={{ borderRadius: "0px" }}
              />
            </label>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">
                Short Description
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="description"
                placeholder="Enter item description"
                className="input input-bordered w-full"
                style={{ borderRadius: "0px" }}
              />
            </label>
          </div>

          {/* ratings here */}
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <label className="">
              <input
                type="text"
                name="rating"
                placeholder="Enter item rating"
                className="input input-bordered w-full"
                style={{ borderRadius: "0px" }}
              />
            </label>
          </div>
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">Photo</span>
            </label>
            <label className="">
              <input
                type="text"
                name="photo"
                placeholder="Enter item photo url"
                className="input input-bordered w-full"
                style={{ borderRadius: "0px" }}
              />
            </label>
          </div>
          <div className="col-span-2 text-center mt-4 md:mt-0">
            <input
              type="submit"
              value="Update Product"
              className="btn md:col-span-2 normal-case bg-[#F36527] border-white border-[2px] hover:text-[#1F2937] hover:border-[#F36527] hover:bg-transparent text-xl text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
