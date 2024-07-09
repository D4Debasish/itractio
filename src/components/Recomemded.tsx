import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const contents = [
  {
    image: "/assets/re1.png",
    quest: "5 quests",
    title: "Exploring Scroll",
    desc: "Scroll seamlessly extends Ethereum’s capabilities through zero knowledge tech and EVM...",
    xps: "🪙 390 XPs",
  },
  {
    image: "/assets/re2.png",
    quest: "3 quests",
    title: "Exploring Base",
    desc: "Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users...",
    xps: "🪙 170 XPs",
  },
  {
    image: "/assets/re3.jpg",
    quest: "4 quests",
    title: "Exploring social Fi Drops",
    desc: "Explore SocialFi drops. SocialFi drops fuse finance with social media, empowering creators",
    xps: "🪙 280 XPs",
  },
  {
    image: "/assets/re4.png",
    quest: "2 quests",
    title: "Get onboarded on Bitcoin",
    desc: "Bitcoin: the first decentralized digital currency, enabling direct transactions on a peer-to-peer...",
    xps: "🪙 180 XPs",
  },
  {
    image: "/assets/re5.png",
    quest: "4 quests",
    title: "Trending",
    desc: "Explore the Latest Trends: Discover Projects on the Verge of Mainnet Launch or with Exciting...",
    xps: "🪙 280 XPs",
  },
  {
    image: "/assets/re6.png",
    quest: "5 quests",
    title: "Exploring Solana",
    desc: "Solana: A blazing-fast blockchain with speeds up to 65,000 transactions per second, surpassing...",
    xps: "🪙 480 XPs",
  },
];

const Recomemded = () => {
  return (
    <div className="main p-6 text-white">
      <h1 className="text-xl font-bold mb-8 mx-10 mt-10">
        Recommended Narratives
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {contents.map((item, key) => (
          <div
            className="flex flex-col xl:flex-row gap-5 items-center cursor-pointer p-4 bg-custombg hover:bg-customhover opacity-80 rounded-3xl w-[100%] xl:w-[45%] m-2"
            key={key}
          >
            <div
              className="relative flex-shrink-0 xl:h-[200px] xl:w-[200px] w-[400px] h-[200px] mx-auto md:mx-0 "
              style={{ border: "solid #605e5e", borderRadius: "13px" }}
            >
              <Image
                src={item.image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-t-md md:rounded-md"
              />
              <div className="absolute bottom-4 right-10 w-[90px]  flex justify-center bg-gray-800 opacity-70 rounded-xl backdrop-blur-md py-2 ">
                <h1 className="text-white">{item.quest}</h1>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start mt-5 md:mt-0 md:ml-5">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-sm text-white/60">{item.desc}</p>
              <div className="h-0.5 w-full bg-gray-200 my-2"></div>
              <Button className="bg-gray-900 w-[100px] h-[30px] text-white rounded-xl cursor-pointer">
                {item.xps}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomemded;
