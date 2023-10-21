import Footer from "../footer/Footer";

const Services = () => {
  return (
    <div>
      <div className="py-10 relative">
        <div className="hidden lg:grid lg:grid-cols-4 relative">
          <img src="https://i.imgur.com/XHU3Cmb.jpg" className="h-80" alt="" />
          <img src="https://i.imgur.com/2xZkcvj.jpg" className="h-80" alt="" />
          <img src="https://i.imgur.com/CoS5XHn.jpg" className="h-80" alt="" />
          <img src="https://i.imgur.com/yI1vs0O.jpg" className="h-80" alt="" />
          <div className="bg-black absolute w-full h-full opacity-70"></div>
        </div>

        <div className="grid grid-cols-2 lg:hidden relative">
          <img src="https://i.imgur.com/2xZkcvj.jpg" className="" alt="" />
          <img
            src="https://i.imgur.com/yI1vs0O.jpg"
            className="bg-cover"
            alt=""
          />
          <div className="bg-black absolute w-full h-full opacity-70"></div>
        </div>
        <div className="absolute top-20 text-white text-center w-full">
          <p className="text-[#F36527]">How delivery works</p>
          <h1 className="text-3xl lg:text-5xl">Simple Process</h1>
          <div className="bg-white flex flex-col md:flex-row lg:gap-10 w-11/12 mx-auto py-2 lg:px-6 lg:py-10 mt-10 md:shadow-xl relative top-2 md:top-0">
            <div className="lg:text-left border-b md:border-b-0 md:border-r pb-4 md:pb-0 space-y-2 text-center px-2">
              <img
                src="https://i.imgur.com/Dq2xTVf.png"
                className="w-32 mx-auto lg:mx-0"
                alt=""
              />
              <h1 className="text-black text-2xl lg:text-3xl font-bold lg:pl-4">
                Your Order
              </h1>
              <p className="text-black/50 lg:pl-4">
                Thank you for being valued customer. We are so grateful to
                serving for the honored be clients pleasure of serving hope we
                meets.
              </p>
            </div>
            <div className="lg:text-left border-b md:border-b-0 md:border-r pb-4 md:pb-0 space-y-2 text-center px-2">
              <img
                src="https://i.imgur.com/3NjlZnl.png"
                className="w-32 mx-auto lg:mx-0"
                alt=""
              />
              <h1 className="text-black text-2xl lg:text-3xl font-bold lg:pl-4">
                Complete Payment
              </h1>
              <p className="text-black/50 lg:pl-4">
                Online food Delivery for ordering Foodie. We appreciate your
                business, and we’ll do best to continue to give you the new
                kind.
              </p>
            </div>
            <div className="lg:text-left space-y-2 text-center px-2">
              <img
                src="https://i.imgur.com/JOPM30q.png"
                className="w-32 mx-auto lg:mx-0"
                alt=""
              />
              <h1 className="text-black text-2xl lg:text-3xl font-bold lg:pl-4">
                Receive Order
              </h1>
              <p className="text-black/50 lg:pl-4">
                We at truly appreciate your business and we’re grateful for the
                trust you’ve placed in us. We sincerely hope you are satisfied .
              </p>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Services;
