"use client";

import logo from "@/public/ModAura_logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const ScrollIntoView = (id: string) => {
    window.scrollTo({
      top: document.getElementById(id)!.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return width > 768 ? (
    <div className="w-full font-satoshi bg-ivory">
      <div className="bg-linear-to-r from-darkTeal to-teal-500 py-2 text-center text-ivory">
        New Offers Of The Day!!!
      </div>

      <div className="flex justify-center items-center px-12 py-4">
        <div className="w-1/3">
          <ul className="flex space-x-5 text-black-1 capitalize *:cursor-pointer *:font-medium">
            <li onClick={() => ScrollIntoView("categories-section")}>
              categories
            </li>
            <li onClick={() => ScrollIntoView("latest-section")}>latest</li>
            <li onClick={() => ScrollIntoView("popular-section")}>popular</li>
          </ul>
        </div>

        <div className="w-1/3 flex items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            className="h-8"
          />
        </div>

        <div className="w-1/3 flex items-center justify-end">
          <ul className="flex space-x-5 text-black-1 items-center justify-center *:cursor-pointer">
            <li>
              <LiaShoppingBagSolid size={22} />
            </li>
            <li>
              <HiUser size={22} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <MobileNav />
  );
};

export default Navbar;
