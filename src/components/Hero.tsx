"use client";
import React from "react";
import IntractAcademy from "./IntractAcademy";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://www.intract.io/assets/intract-academy-background-5547a705.png")',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="flex flex-col">
          <div className="text-white text-center">
            <IntractAcademy />
          </div>
          <div className=" mt-4 flex flex-col items-center">
            <h1 className="text-center text-sm xl:text-xl flex flex-col items-center">
              <span>
                Intract users{" "}
                <span className="text-white/50">
                  have together made more than
                </span>{" "}
                $100 million <span className="text-white/50">in web3.</span>
              </span>
              <span>
                {" "}
                <span className="text-white/50">Join them and</span> learn how
                to earn crypto!
              </span>
            </h1>
            <div className=" items-center mt-9">
              <Button variant="snd" size="sm" className="rounded-xl">
                <span className="text-md text-white/60 font-bold inline-block transform transition-transform duration-300 hover:translate-x-1">
                  Get Started {"  "} →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
