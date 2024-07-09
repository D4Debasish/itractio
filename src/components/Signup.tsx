import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" size="lg" style={{ borderRadius: "8px" }}>
            SignUp
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-col gap-6 items-center mb-5">
              <div className="flex flex-col ">
                <h1 className="text-3xl font-bold text-white">
                  👋 Welcome to the campaign
                </h1>
                <p className="text-sm text-white/60 items-start mx-10">
                  Please select sign-in method
                </p>
                <p className="mt-4 text-sm text-white/60 mx-10">
                  By logging in, I accept the disclaimer and terms of use
                </p>
              </div>

              <div className="bg-white h-px w-full mb-3 "></div>
              <Button className="matemask w-[320px] flex justify-center py-2 rounded-xl cursor-pointer font-bold">
                <h1 className="text-xl">🦊</h1>Metamask
              </Button>

              <div className="flex justify-around gap-8 items-center mt-4">
                <Button className="bg-white text-black w-[140px] flex justify-center py-2 gap-3 rounded-xl cursor-pointer font-bold">
                  <FaDiscord className="text-green-500 text-md" /> Discord
                </Button>
                <Button className="bg-white text-black w-[140px] flex justify-center  gap-3 py-2 rounded-xl cursor-pointer font-bold">
                  <FaTwitter className="text-blue-600 text-md" /> Twitter
                </Button>
              </div>

              <div className="bg-white h-px w-full mb-3"></div>

              <div className="flex justify-around gap-8 items-center">
                <Button className="bg-white text-black w-[140px] flex justify-center py-2 rounded-xl cursor-pointer font-bold">
                  <h1 className="text-xl">🎡</h1>Bigwallet
                </Button>

                <Button className="bg-white text-black w-[140px] flex justify-center py-2 rounded-xl cursor-pointer font-bold">
                  <h1 className="text-xl">🛡️</h1> Trustwallet
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Signup;
