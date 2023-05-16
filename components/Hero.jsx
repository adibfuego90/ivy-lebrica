"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CldImage } from "next-cloudinary";

const imageData = [
  {
    id: 1,
    name: "winter fashion",
    image: "v1684081289/winter-fashion_rezfrs.jpg",
    title: "Discover the latest winter collections",
  },
  {
    id: 2,
    name: "15% off on all sale",
    image: "v1684081283/15_off_lbcnls.jpg",
    title: "Enjoy 15% off on all sale for this week",
  },
  {
    id: 3,
    name: "Buy one get one",
    image: "v1684081281/Buy_1_get_1_e06dvr.jpg",
    title: "Buy 1 from ladies fashion and get 1 free",
  },
];

const Hero = () => {
  const [value, setValue] = useState(0);

  const Increment = function () {
    value === 2 ? setValue(0) : setValue(value + 1);
  };

  const Decrease = function () {
    value === 0 ? setValue(2) : setValue(value - 1);
  };

  return (
    <div className="hero grid wrapper h-[85vh]">
      <div className="left-slider bg-gray-900 relative">
        <CldImage
          src={imageData[value].image}
          alt={imageData[value].name}
          fill
        />
      </div>
      <div className="top-slider bg-red-500 relative">
        <CldImage
          src={imageData[value].image}
          alt={imageData[value].name}
          fill
        />
      </div>
      <div className="slider-title text-[3.15rem]">
        {imageData[value].title}
      </div>
      <div className="bottom-slider bg-yellow-500 relative">
        <CldImage
          src={imageData[value].image}
          alt={imageData[value].name}
          fill
        />
      </div>
      <div className="hero-paragraph">
        <p className="text-justify">
          Whether you're looking for chic and elegant pieces or trendy and edgy
          styles, our shop has something for every modern woman for every
          occasion - from casual wear to formal events.
        </p>
      </div>
      <button className="hero-button text-5xl bg-rose-300 text-center text-gray-600 hover:bg-rose-400 hover:text-rose-100 duration-300">
        Shop Now !
      </button>
      <button
        className="slider-buttons-l relative"
        type="button"
        onClick={() => Decrease()}
      >
        <FaArrowLeft className="text-5xl left-5 absolute" />
      </button>
      <button
        className="slider-buttons-r relative"
        type="button"
        onClick={() => Increment()}
      >
        <FaArrowRight className="text-5xl right-5 absolute" />
      </button>
    </div>
  );
};

export default Hero;
