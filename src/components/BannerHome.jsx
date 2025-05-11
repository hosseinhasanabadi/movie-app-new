import React from "react";
import { useSelector, useDispatch } from "react-redux";
function BannerHome() {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  console.log("banner home", bannerData);

  return (
    <section className=" w-full h-full">
      <div className="flex min-h-full max-h-[95vh]">
        {bannerData.map((data, index) => {
          return (
            <div
              className="relative min-w-full min-h-[450px] lg:min-h-full
            overflow-hidden"
            >
              <div className=" w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  alt=""
                  className="w-full h h-full object-cover"
                />
              </div>
              <div className=" absolute top-0  w-full
              h-full bg-gradient-to-t from-neutral-900 
              to-transparent">

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BannerHome;
