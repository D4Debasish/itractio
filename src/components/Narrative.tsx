import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const card1 = [
  {
    id: "1",
    image: "/assets/n1.png",
    logo: "/assets/lg1.webp",
    title: "Base",
    desc: "$DEGEN Meets Orbit",
    tasks: "4 tasks",
    xps: "70 XPs",
  },
  {
    id: "2",
    image: "/assets/n2.png",
    logo: "/assets/x2.png",
    title: "OP Mainnet",
    desc: "Introduction to farcaster",
    tasks: "4 tasks",
    xps: "70 XPs",
  },
  {
    id: "3",
    image: "/assets/n3.png",
    logo: "/assets/x2.png",
    title: "OP mainnet",
    desc: "Follow people on warpa",
    tasks: "4 tasks",
    xps: "70 XPs",
  },
];
const card2 = [
  {
    id: "1",
    image: "/assets/d1.png",
    logo: "/assets/eth1.png",
    title: "Etherium",
    desc: "Intro to lens protocol",
    tasks: "3 tasks",
    xps: "30 XPs",
  },
  {
    id: "2",
    image: "/assets/d2.png",
    logo: "/assets/eth2.png",
    title: "Polygon Mainnet",
    desc: "Exploring Dapps - Len...",
    tasks: "2 tasks",
    xps: "20 XPs",
  },
  {
    id: "3",
    image: "/assets/d3.png",
    logo: "/assets/eth2.png",
    title: "OP mainnet",
    desc: "Exploring Dapps - Len...",
    tasks: "2 tasks",
    xps: "20 XPs",
  },
];

const card3 = [
  {
    id: "1",
    image: "/assets/g1.png",
    logo: "",
    title: "",
    desc: "Intro to lens protocol",
    tasks: "2 tasks",
    xps: "40 XPs",
  },
];

const Narrative = () => {
  return (
    <div className="flex flex-col gap-20 xl:gap-8 items-center justify-center xl:justify-normal ">
      <h1 className="xl:text-3xl font-bold mx-20 text-xl xl:mx-0">
        Popular Naratives
      </h1>
      <div className="flex flex-col xl:gap-2 sm:flex-col xl:flex-row items-center justify-center xl:justify-normal">
        <div
          className="w-[368px] h-[400px] bg-custombg bg-opacity-70 hover:bg-customhover xl:items-start items-center justify-center rounded-lg shadow-lg cursor-pointer"
          style={{ borderRadius: "10px" }}
        >
          <div className="mx-7 flex flex-col xl:flex-col gap-3">
            <h1 className="mt-10 text-2xl text-white">Exploring Farcaster</h1>
            <p className="text-md text-white/60">
              Farcaster is a decentralized social network built on OP, enabling
              users to own their identity and data. Users can share updates,
              follow others, engage in...
            </p>
            <div className="mini">
              <div className="bg-gray-800 cursor-pointer hover:bg-gray-700 px-2 py-1 w-[100px] items-center flex justify-center rounded-xl">
                4 quests
              </div>
            </div>
            <h1 className="text-white/30">
              --------------------------------------
            </h1>
            <div className="bg-gray-800 cursor-pointer hover:bg-gray-700 px-2 py-1 w-[100px] items-center flex justify-center text-md rounded-xl">
              🪙 230 xp
            </div>
            <Button className="bg-purple-700 text-white border rounded-3xl mt-5">
              Start Here
            </Button>
          </div>
        </div>
        <div className="bg-gray-900  w-full xl:w-[800px] h-[400px] border rounded-3xl overflow-hidden mt-5 xl:mt-0 xl:ml-[-10px]">
          <div className="flex gap-1 items-center overflow-x-auto">
            {card1.map((item, key) => (
              <div key={key} className="p-4">
                <Card className="h-[350px] w-[250px] mt-5 border rounded-2xl bg-customhover hover:bg-custombg">
                  <CardContent>
                    <div className="content flex flex-col gap-3">
                      <div
                        className={`${
                          item.id === "1"
                            ? "bg-green-600"
                            : item.id === "2"
                            ? "bg-blue-600"
                            : item.id === "3"
                            ? "bg-orange-600"
                            : ""
                        } mt-4 w-[200px] h-[170px] items-center flex justify-center rounded-2xl`}
                        style={{
                          backgroundImage:
                            'url("https://www.intract.io/assets/grid-trending-779d3c45.png")',
                        }}
                      >
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={260}
                          height={380}
                          className="object-cover w-[170px] h-[100px]"
                        />
                      </div>
                      <div className="title flex flex-row items-center gap-2">
                        {/* item.logo could be added here if needed */}
                        <h1>
                          <Image
                            src={item.logo}
                            alt={item.title}
                            width={15}
                            height={30}
                            className="object-cover rounded-full"
                          />
                        </h1>
                        <h1>{item.title}</h1>
                      </div>
                      <div className="desc">
                        <h1 className="text-[17px] font-semibold">
                          {item.desc}
                        </h1>
                      </div>
                      <div className="bg-white/20 h-px w-full"></div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-2">
                      <div className="bg-gray-800 px-2 py-1 items-center flex justify-center rounded-xl cursor-pointer hover:bg-gray-700">
                        {item.tasks}
                      </div>
                      <div className="bg-gray-800 px-3 py-1 items-center flex gap-1 justify-center rounded-xl cursor-pointer hover:bg-gray-700">
                        <h1> 🪙</h1>
                        {item.xps}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* second */}

      <div className="flex flex-col xl:gap-2 sm:flex-col xl:flex-row items-center justify-center xl:justify-normal">
        <div
          className="w-[368px] h-[400px] bg-custombg bg-opacity-70 hover:bg-customhover xl:items-start items-center justify-center rounded-lg shadow-lg cursor-pointer"
          style={{ borderRadius: "10px" }}
        >
          <div className="mx-7 flex flex-col xl:flex-col gap-3">
            <h1 className="mt-10 text-2xl text-white">
              Exploring Lens Protocol
            </h1>
            <p className="text-md text-white/60">
              Lens Protocol is a decentralized social graph that empowers
              developers to create social media applications on the blockchain.
              It ensures data ownership,...
            </p>
            <div className="mini">
              <div className="bg-gray-800 cursor-pointer hover:bg-gray-700 px-2 py-1 w-[100px] items-center flex justify-center rounded-xl">
                3 quests
              </div>
            </div>
            <h1 className="text-white/30">
              --------------------------------------
            </h1>
            <div className="bg-gray-800 cursor-pointer hover:bg-gray-700 px-2 py-1 w-[100px] items-center flex justify-center text-md rounded-xl">
              🪙 70 xp
            </div>
            <Button className="bg-purple-700 text-white border rounded-3xl mt-5">
              Start Here
            </Button>
          </div>
        </div>
        <div className="bg-gray-900 w-full xl:w-[800px] h-[400px] border rounded-3xl overflow-hidden mt-5 xl:mt-0 xl:ml-[-10px]">
          <div className="flex gap-1 items-center overflow-x-auto">
            {card2.map((item, key) => (
              <div key={key} className="p-4">
                <Card className="h-[350px] w-[250px] mt-5 border rounded-2xl bg-customhover hover:bg-custombg">
                  <CardContent>
                    <div className="content flex flex-col gap-3">
                      <div
                        className={`${
                          item.id === "1"
                            ? "bg-green-600"
                            : item.id === "2"
                            ? "bg-blue-600"
                            : item.id === "3"
                            ? "bg-orange-600"
                            : ""
                        } mt-4 w-[200px] h-[170px] items-center flex justify-center rounded-2xl`}
                        style={{
                          backgroundImage:
                            'url("https://www.intract.io/assets/grid-trending-779d3c45.png")',
                        }}
                      >
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={260}
                          height={380}
                          className="object-cover w-[170px] h-[100px]"
                        />
                      </div>
                      <div className="title flex flex-row items-center gap-2">
                        {/* item.logo could be added here if needed */}
                        <h1>
                          <Image
                            src={item.logo}
                            alt={item.title}
                            width={15}
                            height={30}
                            className="object-cover rounded-full"
                          />
                        </h1>
                        <h1>{item.title}</h1>
                      </div>
                      <div className="desc">
                        <h1 className="text-[17px] font-semibold">
                          {item.desc}
                        </h1>
                      </div>
                      <div className="bg-white/20 h-px w-full"></div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-2">
                      <div className="bg-gray-800 px-2 py-1 items-center flex justify-center rounded-xl cursor-pointer hover:bg-gray-700">
                        {item.tasks}
                      </div>
                      <div className="bg-gray-800 px-3 py-1 items-center flex gap-1 justify-center rounded-xl cursor-pointer hover:bg-gray-700">
                        <h1> 🪙</h1>
                        {item.xps}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third */}

      <div className="flex flex-col xl:gap-2 sm:flex-col xl:flex-row items-center justify-center xl:justify-normal">
        <div
          className="w-[368px] h-[400px] bg-custombg bg-opacity-70 hover:bg-customhover xl:items-start items-center justify-center rounded-lg shadow-lg cursor-pointer"
          style={{ borderRadius: "10px" }}
        >
          <div className="mx-7 flex flex-col xl:flex-col gap-3">
            <h1 className="mt-10 text-2xl text-white">Exploring Grass</h1>
            <p className="text-md text-white/60">
              Grass is a network of over 2 million people who are rewarded for
              helping AI developers access the internet. Its goal is to prevent
              the concentration of AI b...
            </p>
            <div className="mini">
              <div className="bg-gray-800 cursor-pointer hover:bg-gray-700 px-2 py-1 w-[100px] items-center flex justify-center rounded-xl">
                1 quests
              </div>
            </div>
            <h1 className="text-white/30">
              --------------------------------------
            </h1>
            <div className="bg-gray-800 cursor-pointer hover:bg-gray-700 px-2 py-1 w-[100px] items-center flex justify-center text-md rounded-xl">
              🪙 40 xp
            </div>
            <Button className="bg-purple-700 text-white border rounded-3xl mt-5">
              Start Here
            </Button>
          </div>
        </div>
        <div className="bg-gray-900 w-full xl:w-[800px] h-[400px] border rounded-3xl overflow-hidden mt-5 xl:mt-0 xl:ml-[-10px]">
          <div className="flex gap-1 xl:justify-normal overflow-x-auto justify-center items-center">
            {card3.map((item, key) => (
              <div key={key} className="p-4">
                <Card className="h-[350px] w-[250px] mt-5 border rounded-2xl bg-customhover hover:bg-custombg">
                  <CardContent>
                    <div className="content flex flex-col gap-3">
                      <div
                        className={`${
                          item.id === "1"
                            ? "bg-green-600"
                            : item.id === "2"
                            ? "bg-blue-600"
                            : item.id === "3"
                            ? "bg-orange-600"
                            : ""
                        } mt-4 w-[200px] h-[170px] items-center flex justify-center rounded-2xl`}
                        style={{
                          backgroundImage:
                            'url("https://www.intract.io/assets/grid-trending-779d3c45.png")',
                        }}
                      >
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={260}
                          height={380}
                          className="object-cover w-[170px] h-[100px]"
                        />
                      </div>
                      <div className="title flex flex-row items-center gap-2">
                        {/* item.logo could be added here if needed */}
                        <h1>
                          <Image
                            src={item.logo}
                            alt={item.title}
                            width={15}
                            height={30}
                            className="object-cover rounded-full"
                          />
                        </h1>
                        <h1>{item.title}</h1>
                      </div>
                      <div className="desc">
                        <h1 className="text-[17px] font-semibold">
                          {item.desc}
                        </h1>
                      </div>
                      <div className="bg-white/20 h-px w-full"></div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-2">
                      <div className="bg-gray-800 px-2 py-1 items-center flex justify-center rounded-xl cursor-pointer hover:bg-gray-700">
                        {item.tasks}
                      </div>
                      <div className="bg-gray-800 px-3 py-1 items-center flex gap-1 justify-center rounded-xl cursor-pointer hover:bg-gray-700">
                        <h1> 🪙</h1>
                        {item.xps}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narrative;
