"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const links = [
  {
    names: "Compass →",
    link: "/Compass",
  },
  {
    names: "Explore →",
    link: "/Explore",
  },
  {
    names: "Academy →",
    link: "/",
  },
  {
    names: "NFTs →",
    link: "/Nfts",
  },
  {
    names: "For Projects →",
    link: "/Projectss",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="relative">
      <Drawer>
        <div className="flex justify-between">
          <DrawerTrigger>
            <GiHamburgerMenu className="text-white" />
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <DrawerClose className=" absolute right-10 top-4">
            <ImCross className="text-white" />
          </DrawerClose>
          <DrawerHeader>
            <div className="flex">
              <ul className="flex flex-col gap-4 px-3 text-md font-bold">
                {links.map((item, key) => {
                  return (
                    <Link href={item.link} key={key}>
                      <h1 className="text-xl text-white hover:text-gray-100 transition-all active:text-white font-bold">
                        {item.names}
                      </h1>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
