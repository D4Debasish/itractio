"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import RoundButton from "./RoundButton";
import Signup from "./Signup";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-transparent backdrop-blur-sm h-[72px]">
      <nav className="flex items-center xl:justify-around xl:gap-10 p-4 justify-between gap-20">
        <div className="logo">
          <Link href="/">
            <Image
              src="https://www.intract.io/logo/intract_text.svg"
              alt="Description of the image"
              width={100}
              height={10}
            />
          </Link>
        </div>
        <div className=" hidden xl:flex">
          <Nav />
        </div>
        <div className="flex gap-5">
          <div className="w-[500px] hidden xl:flex">
            <Input
              placeholder="Q search for ecosystems, trending quests and etc...."
              className="border rounded-lg"
              style={{
                border: "solid rgba(255, 255, 255, 0.2)",
                borderRadius: "18px",
              }}
            />
          </div>
          <div className="flex gap-4">
            <RoundButton />
            {/* round button */}

            {/* Signup dialog */}
            <Signup />
          </div>
          <div className="flex xl:hidden text-3xl mt-1 ">
            <MobileNav />
          </div>
        </div>
      </nav>
      <div className="h-px bg-white/20"></div>
    </div>
  );
};

export default Header;
