import Image from "next/image";
import logo from "@/public/modauraLogoDark.png";
import React from "react";
import { HiUser } from "react-icons/hi";
import { LiaShoppingBagSolid } from "react-icons/lia";

const MobileNav = () => {
  return (
    <div className="w-full font-satoshi bg-ivory">
      <div className="bg-black-1 py-2 text-center text-ivory text-sm lg:text-base">
        New Offers Of The Day!!!
      </div>

      <div className="flex justify-between items-center px-4 py-4">
        <div className="w-1/3 flex text-sm">Menu</div>

        <div className="w-1/3 flex items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            className="w-auto h-4"
          />
        </div>

        <div className="w-1/3 flex items-center justify-end">
          <ul className="flex space-x-3 text-black-1 items-center justify-center *:cursor-pointer">
            <li>
              <LiaShoppingBagSolid size={16} />
            </li>
            <li>
              <HiUser size={16} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
