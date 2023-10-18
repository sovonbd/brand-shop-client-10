const Banner = () => {
  return (
    <div
      className="hero md:h-screen"
      style={{
        backgroundImage: "url(https://i.imgur.com/OdCUaRe.jpg)",
        backgroundPosition: "bottom",
      }}>
      <div className="hero-overlay bg-gradient-to-r from-black/50 bg-opacity-5"></div>
      <div className="hero-content text-center text-white pt-28 lg:pt-0 ">
        <div className="text-center relative">
          <h1 className="mb-5 text-3xl lg:text-6xl font-bold z-0 font-londrina">
            Enjoy Healthy And Fresh Food Any Time
          </h1>
          <p
            className="mb-5 md:w-3/5 text-lg lg:text-2xl mx-auto"
            style={{ textShadow: "1px 0px 10px black" }}>
            Celebrate culinary excellence with our curated masterpieces that
            delight your taste buds and create unforgettable dining experiences.
          </p>
          <button className="btn px-8 text-lg bg-[#F36527] border-white border-2 text-white normal-case hover:bg-transparent hover:border-[#F36527]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
