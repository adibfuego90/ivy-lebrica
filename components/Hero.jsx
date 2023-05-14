import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero grid wrapper h-[85vh]">
      <div className="left-slider bg-gray-900">
        <h1>This is our first slide</h1>
      </div>
      <div className="top-slider bg-red-500">upper slide</div>
      <div className="slider-title text-[3.15rem]">
        Discover the latest trends and styles in women's clothing, shoes &
        accessories.
      </div>
      <div className="bottom-slider bg-yellow-500">lower slide</div>
      <div className="hero-paragraph">
        <p className="text-justify">
          Whether you're looking for chic and elegant pieces or trendy and edgy
          styles, our shop has something for every modern woman for every
          occasion - from casual wear to formal events.
        </p>
      </div>
      <div className="hero-button text-5xl bg-rose-300 text-center pt-7 text-gray-600">
        Shop Now !
      </div>
      <div className="slider-buttons-l relative">
        <FaArrowLeft className="text-5xl left-5 absolute" />
      </div>
      <div className="slider-buttons-r relative">
        <FaArrowRight className="text-5xl right-5 absolute" />
      </div>
    </div>
  );
};

export default Hero;
