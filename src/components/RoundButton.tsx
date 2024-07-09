import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const RoundButton = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="new" style={{ borderRadius: "80px" }}>
          ※
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black p-3">
        <SheetHeader className="flex flex-col gap-3 text-white">
          <SheetTitle className="text-md text-white/60">Alpha Feed</SheetTitle>
          <p className="text-2xl italic ">Todays Happenings</p>
          <div className="relative w-full h-72">
            <Image
              src="/assets/sheet11.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={80}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-xl">
              Penumbra Airdrop Update: $UM 🪂
            </h1>
            <p className="text-white/60 text-sm">
              You can now view your allocation for the Penumbrazone airdrop! Our
              detailed guide is available, featuring simple steps to claim your
              tokens.
            </p>
            <hr className="border-gray-600" />
            <h1 className="text-white cursor-pointer hover:text-white/60">
              Know more
            </h1>
          </div>
          <div className="flex gap-4">
            <Button
              className="bg-white/10 rounded-xl  text-white px-12 py-2  transition-colors duration-300 cursor-not-allowed "
              disabled
            >
              Previous
            </Button>
            <Button className="bg-white/10 rounded-xl cursor-pointer text-white px-14 py-2  hover:bg-white/20 transition-colors duration-300">
              Next
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default RoundButton;
