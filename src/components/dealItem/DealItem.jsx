const DealItem = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center lg:w-3/4 mx-auto justify-between px-4 lg:px-0 py-10 lg:py-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl lg:text-5xl font-semibold w-max mx-auto md:mx-0">
          Peperoni Pizza
        </h1>
        <p className="py-4 text-sm">
          Discover the joy of classic Pepperoni Pizza at Foodie. With quality
          ingredients, a secret sauce, and generous pepperoni, each slice is a
          savory delight. Embrace the timeless taste of tradition.
        </p>
        <button className="btn px-12 bg-[#F36527] text-white normal-case text-xl hover:bg-transparent hover:border-[#F36527] hover:text-[#1F2937]">
          Order Now
        </button>
      </div>
      <div className="flex-1 relative">
        <img
          src="https://i.imgur.com/dQ2DCTF.png"
          className="-rotate-12"
          alt=""
        />

        <p className="absolute -top-20 md:-top-28 lg:-top-16 lg:right-[420px] flex flex-col items-center -rotate-12">
          <span
            className="font-londrina text-6xl md:text-8xl text-[#F36527] font-bold"
            style={{ textShadow: "0px 2px 5px #F36527" }}>
            30%
          </span>
          <span className="text-3xl font-bold bg-[#F36527] text-white px-4">
            Discount
          </span>
        </p>
      </div>
    </div>
  );
};

export default DealItem;
