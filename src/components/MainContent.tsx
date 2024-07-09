"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Countdown from "./Countdown";
const scrolls = [
  {
    image: "/assets/p1.png",
    desc: "#1: But what is crypto and...",
    subdesc: "11 tasks",
  },
  {
    image: "/assets/p2.jpg",
    desc: "#2: Setting up your own web3",
    subdesc: "8 tasks",
  },
  {
    image: "/assets/p3.jpg",
    desc: "#3: What the heck is a",
    subdesc: "11 tasks",
  },
  {
    image: "/assets/p4.jpg",
    desc: "#4: Swapping and bridging?...",
    subdesc: "8 tasks",
  },
  {
    image: "/assets/p5.jpg",
    desc: "#5: NFTs and why they’re...",
    subdesc: "10 tasks",
  },
  {
    image: "/assets/p6.jpg",
    desc: "#6: Doing quests and winni...",
    subdesc: "6 tasks",
  },
];
const scroll2 = [
  {
    image: "/assets/s1.jpg",
    desc: "#1: What are Airdopes and...",
    subdesc: "7 tasks",
  },
  {
    image: "/assets/s2.jpg",
    desc: "#2: Types of Airdopes...",
    subdesc: "10 tasks",
  },
  {
    image: "/assets/s3.png",
    desc: "#3: How to earn huge $$$...",
    subdesc: "11 tasks",
  },
  {
    image: "/assets/s4.jpg",
    desc: "#4: Things to keep in mind...",
    subdesc: "7 tasks",
  },
];

const MainContent = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<Boolean>(false);
  const [secDrop, setSecDrop] = useState<Boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const sectoggleDropdown = () => {
    setSecDrop(!secDrop);
  };

  return (
    <div className="main mb-10 xl:mb-5 flex flex-col gap-20 xl:gap-[600px] ">
      <div className="1st flex flex-col justify-center xl:justify-normal xl:flex-row gap-20 xl:gap-48 xl:relative ">
        <div
          className="select w-[400px] xl:w-[520px] py-10  xl:absolute xl:right-[100px] bg-custombg hover:bg-customhover opacity-70 backdrop-blur-[70px] "
          style={{
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
          }}
        >
          <div
            className="dropdown flex gap-5 items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <div
              className="relative flex-shrink-0 mx-5 h-[170px] items-center"
              style={{ border: "solid #605e5e", borderRadius: "13px" }}
            >
              <Image
                src="/assets/photo1.png"
                alt=""
                width={200}
                height={500}
                className="w-[150px] h-[150px] mx-2 mt-2"
              />
              <div
                className="absolute bottom-4 right-10 w-[90px]  flex justify-center bg-transparent backdrop-blur-sm"
                style={{ border: "solid #605e5e", borderRadius: "10px" }}
              >
                {scrolls.length} Quests
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h1 className="text-2xl font-bold">Basics of crypto</h1>
              <p className="text-sm text-white/60">
                The safest and easiest place to start your crypto journey!
              </p>
              <div className="h-0.5 w-full bg-white/60"></div>
              <Button className="bg-gray-900 w-[100px] h-[30px] text-white rounded-xl cursor-pointer">
                🪙 1490 XPs
              </Button>
            </div>
          </div>

          {isDropdownVisible && (
            <ul
              className="dropdown-menu flex flex-col mt-2 shadow-md rounded-md w-full items-center bg-black "
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {scrolls.map((items, key) => {
                return (
                  <li
                    key={key}
                    className="flex flex-row gap-5 bg-custombg hover:bg-customhover p-4 my-2 rounded-md w-[90%]  py-5 "
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="image">
                      <Image
                        src={items.image}
                        alt=""
                        width={200}
                        height={500}
                        className="w-[100px] h-[60px] mt-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-xl font-medium">{items.desc}</h1>
                      <h1 className="text-white/60">
                        -------------------------
                      </h1>
                      <div className="flex gap-4 items-center">
                        <p className="text-sm text-white/60">{items.subdesc}</p>
                        <Progress
                          value={0}
                          className="text-sm"
                          style={{ border: "solid #605e5e " }}
                        />
                        <Checkbox disabled />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="card w-[180px] items-center flex justify-center xl:absolute xl:top-[100px] xl:left-[300px] xl:translate-x-[50%]">
          <Card>
            <CardContent className="flex flex-col gap-4 mt-3">
              <div
                className="w-[170px] h-[140px] flex justify-center"
                style={{ border: "solid #605e5e", borderRadius: "13px" }}
              >
                <Image
                  src="/assets/c1.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[150px] h-[120px] mt-2"
                  style={{ borderRadius: "15px" }}
                />
              </div>
              <div className="desc">
                <h1 className="text-xl">Intract Certified: Learner NFT</h1>
                <p className="text-sm text-white/60">
                  Your crypto black-belt certificate
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-white/10 text-white px-16 rounded-md hover:bg-white/20 transition-colors duration-300"
                style={{ borderRadius: "10px" }}
              >
                Claim
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* 2nd cards */}
      <div className="1st flex flex-col justify-center xl:justify-normal xl:flex-row gap-20 xl:gap-48 xl:relative ">
        <div
          className="select w-[400px] xl:w-[520px] py-10  xl:absolute xl:left-[50px] bg-custombg opacity-70 hover:bg-customhover backdrop-blur-[70px] "
          style={{
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
          }}
        >
          <div
            className="dropdown flex gap-5 items-center cursor-pointer"
            onClick={sectoggleDropdown}
          >
            <div
              className="relative flex-shrink-0 mx-5 h-[170px] items-center"
              style={{ border: "solid #605e5e", borderRadius: "13px" }}
            >
              <Image
                src="/assets/bg1.png"
                alt=""
                width={200}
                height={500}
                className="w-[150px] h-[150px] mx-2 mt-2"
              />
              <div
                className="absolute bottom-4 right-10 w-[90px]  flex justify-center bg-transparent backdrop-blur-sm"
                style={{ border: "solid #605e5e", borderRadius: "10px" }}
              >
                {scroll2.length} Quests
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h1 className="text-2xl font-bold">Introduction to Airdrops</h1>
              <p className="text-sm text-white/60">
                Your best bet to make it big in crypto!
              </p>
              <div className="h-0.5 w-full bg-white/60"></div>
              <Button className="bg-gray-900 w-[100px] h-[30px] text-white rounded-xl cursor-pointer">
                🪙 1040 XPs
              </Button>
            </div>
          </div>

          {secDrop && (
            <ul
              className="dropdown-menu flex flex-col mt-2 shadow-md rounded-md w-full items-center bg-black "
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {scroll2.map((items, key) => {
                return (
                  <li
                    key={key}
                    className="flex flex-row gap-5 bg-custombg hover:bg-customhover p-4 my-2 rounded-md w-[90%]  py-5 "
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="image">
                      <Image
                        src={items.image}
                        alt=""
                        width={200}
                        height={500}
                        className="w-[100px] h-[60px] mt-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-xl font-medium">{items.desc}</h1>
                      <h1 className="text-white/60">
                        -------------------------
                      </h1>
                      <div className="flex gap-4 items-center">
                        <p className="text-sm text-white/60">{items.subdesc}</p>
                        <Progress
                          value={0}
                          className="text-sm"
                          style={{ border: "solid #605e5e " }}
                        />
                        <Checkbox disabled />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="card w-[180px] items-center flex justify-center xl:absolute xl:top-[120px] xl:right-[600px] xl:translate-x-[50%]">
          <Card>
            <CardContent className="flex flex-col gap-4 mt-3">
              <div
                className="w-[170px] h-[140px] flex justify-center"
                style={{ border: "solid #605e5e", borderRadius: "13px" }}
              >
                <Image
                  src="/assets/cat2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[150px] h-[120px] mt-2"
                  style={{ borderRadius: "15px" }}
                />
              </div>
              <div className="desc">
                <h1 className="text-xl">Intract Certified: Earner NFT</h1>
                <p className="text-sm text-white/60">
                  Your proof of airdrop expertise
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-white/10 rounded-xl cursor-pointer text-white px-16 hover:bg-white/20 transition-colors duration-300">
                Claim
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* counter and card */}
      <div className="cards w-[280px] items-center flex justify-center mx-14 xl:mx-0 ">
        <Card>
          <Countdown />
          <CardContent className="flex flex-col gap-4 mt-4">
            <div
              className="w-[250px] h-[220px] flex justify-center "
              style={{ border: "solid #605e5e", borderRadius: "13px" }}
            >
              <Image
                src="/assets/p7.gif"
                alt=""
                width={100}
                height={100}
                className="w-[250px] h-[200px] mt-2"
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="desc flex flex-col">
              <div className="line1 flex justify-between">
                <h1 className="text-md text-white/60">Exclusive community</h1>
                <h1 className="text-md text-white">Earndrop</h1>
              </div>
              <h1 className="text-white/60">
                ---------------------------------
              </h1>
              <div className="line2">
                <h1 className="text-sm text-white/60">
                  Complete all Essential quests
                </h1>
              </div>
              <div className="line3">
                <h1 className="text-sm text-white/60">
                  Complete Alpha Hub quest today
                </h1>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-white/10 text-white px-20 hover:bg-white/20 transition-colors duration-300 rounded-xl cursor-pointer">
              Claim Now →
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MainContent;
