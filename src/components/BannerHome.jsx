import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function BannerHome() {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [bannerData, imageURL]);

  return (
    <section className="w-full h-[95vh] overflow-hidden relative">
      {/* اسلاید‌ها */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {bannerData.map((data, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={imageURL + data.backdrop_path}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* دکمه‌ها */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 z-10">
        <button
          onClick={handlePrev}
          disabled={currentImage === 0}
          className="bg-white text-black text-2xl p-2 rounded-full shadow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentImage === bannerData.length - 1}
          className="bg-white text-black text-2xl p-2 rounded-full shadow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
}

export default BannerHome;
