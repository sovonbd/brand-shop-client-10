import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleMenuPage from "./SingleMenuPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const FoodMenuPage = () => {
  // const data = useLoaderData();

  const [items, setItems] = useState([]);
  const [noData, setNoData] = useState("");

  const { path } = useParams();
  // console.log(path);

  useEffect(() => {
    fetch(`https://foodie-server-black.vercel.app/products/brand/${path}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setItems(data);
        } else {
          setNoData("No Data Found");
        }
      });
  }, [path]);

  const location = useLocation();
  // console.log(items, noData);

  let itemsPhoto;

  if (location.pathname === "/pizzahut") {
    itemsPhoto = [
      "https://i.imgur.com/vwrRz6Q.jpg",
      "https://i.imgur.com/OdCUaRe.jpg",
      "https://i.imgur.com/SihzeXD.jpg",
    ];
  } else if (location.pathname === "/burgerking") {
    itemsPhoto = [
      "https://i.imgur.com/Xzj2FwH.jpg",
      "https://i.imgur.com/orO2Jlq.jpg",
      "https://i.imgur.com/Xzj2FwH.jpg",
    ];
  } else if (location.pathname === "/kfc") {
    itemsPhoto = [
      "https://i.imgur.com/CMS2hga.jpg",
      "https://i.imgur.com/OCEHsnI.jpg",
      "https://i.imgur.com/BPS6Oet.jpg",
    ];
  } else if (location.pathname === "/mcdonalds") {
    itemsPhoto = [
      "https://i.imgur.com/aLI6Vs4.jpg",
      "https://i.imgur.com/MW87qLI.jpg",
      "https://i.imgur.com/ZsfJ866.jpg",
    ];
  } else if (location.pathname === "/subway") {
    itemsPhoto = [
      "https://i.imgur.com/VEtBftB.jpg",
      "https://i.imgur.com/FBdk1u5.jpg",
      "https://i.imgur.com/Ob94x6A.jpg",
    ];
  }

  return (
    <div>
      {noData ? (
        <p className="flex justify-center items-center h-[60vh]">{noData}</p>
      ) : (
        <div>
          <div className="bg-slate-100 shadow-2xl bg-blend-hard-light">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}>
              <SwiperSlide>
                <img
                  src={itemsPhoto[0]}
                  className="object-none object-center w-full h-[200px] md:h-[350px] lg:h-[400px]"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={itemsPhoto[1]}
                  className="object-none object-center w-full h-[200px] md:h-[350px] lg:h-[400px]"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={itemsPhoto[2]}
                  className="object-none object-center w-full h-[200px] md:h-[350px] lg:h-[400px] "
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 p-12 lg:p-16">
            {items.map((item) => (
              <SingleMenuPage key={item._id} item={item}></SingleMenuPage>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenuPage;
