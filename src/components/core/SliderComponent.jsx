import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const SliderComponent = () => {
  return (
    <div className="relative">
      <Slider {...sliderSettings}>
        <div className="h-screen bg-red-500">
          <div className="text-white absolute top-1/3 left-10">
            <h1 className="text-6xl font-bold">Bringing India Together with itel</h1>
            <p className="text-xl mt-4">Snag your itel smartphones starting at just ₹6,999/-</p>
            <a href="#" className="bg-white text-red-500 font-bold py-3 px-6 mt-6 inline-block rounded">
              Check Now
            </a>
          </div>
        </div>
        <div className="h-screen bg-blue-500">
          <div className="text-white absolute top-1/3 left-10">
            <h1 className="text-6xl font-bold">Discover Smart TV at itel</h1>
            <p className="text-xl mt-4">Get the best viewing experience at affordable prices</p>
            <a href="#" className="bg-white text-blue-500 font-bold py-3 px-6 mt-6 inline-block rounded">
              Explore Now
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
