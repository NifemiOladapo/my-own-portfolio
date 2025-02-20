"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          className="cursor-pointer background"
          alt="hambuger-menu"
          height={35}
          width={35}
          
          src={"/icons/hamburger.svg"}
        />
      </SheetTrigger>

      <SheetContent side={"left"} className="bg-neutral flex flex-col gap-10">
        <h1 className="text-2xl">Remart</h1>

        <ul className="flex flex-col justify-center gap-10 ">
          <li className="text-lg font-medium border-b-[1.7px] border-accent cursor-pointer">
            Home
          </li>
          <li className="text-lg font-medium border-b-[1.7px] border-accent cursor-pointer">
            About Us
          </li>
          <li className="text-lg font-medium border-b-[1.7px] border-accent cursor-pointer">
            Faq
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
