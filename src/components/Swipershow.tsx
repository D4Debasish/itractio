"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "./ui/button";

const Swipershow = () => {
  const swiper = useSwiper();
  return (
    <div
      className="flex gap-2 absolute right-0 top-[100px] xl:top-[200px] xl:bottom-0 z-20 w-full justify-between 
              xl:w-full xl:justify-between xl:px-4"
    >
      <Button
        className="bg-transparent backdrop-blur-sm hover:bg-accent-hover text-primary text-[22px] w-[54px] h-[70px] flex justify-center rounded-1/2 
              items-center transition-all"
        onClick={() => swiper.slidePrev()}
        style={{ border: "groove gray" }}
      >
        <PiCaretLeftBold className="text-white font-bold" />
      </Button>
      <Button
        className=" bg-transparent backdrop-blur-none hover:bg-accent-hover text-primary text-[22px] w-[54px] h-[70px] flex justify-center rounded-1/2
              items-center transition-all"
        onClick={() => swiper.slideNext()}
        style={{ border: "groove gray" }}
      >
        <PiCaretRightBold className="text-white font-bold" />
      </Button>
    </div>
  );
};

export default Swipershow;
