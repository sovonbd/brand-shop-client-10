import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    fetch(`http://localhost:5000/products/type/${path}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setItems(data);
        } else {
          setNoData("No Data Found");
        }
      });
  }, [path]);

  const itemsPhoto = items.map((item) => item.photo);
  console.log(itemsPhoto[0]);

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
                  src={itemsPhoto[2]}
                  className="object-none object-center w-full h-[200px] md:h-[350px] lg:h-[400px]"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={itemsPhoto[3]}
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
