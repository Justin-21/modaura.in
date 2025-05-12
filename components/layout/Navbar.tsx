"use client";

import logo from "@/public/ModAura_logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import MobileNav from "./MobileNav";
import { IoIosArrowDown } from "react-icons/io";
import { Separator } from "../ui/separator";
import Link from "next/link";

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
    <div className="w-full font-urbanist bg-ivory">
      {/* Announcements */}
      <div className="bg-linear-to-r from-darkTeal to-teal-500 py-2 text-center text-ivory">
        New Offers Of The Day!!!
      </div>

      <div className="flex justify-center items-center px-28 py-3">
        <div className="w-1/3">
          <ul className="flex space-x-5 text-black-1 text-sm capitalize *:font-medium tracking-wide">
            <li
              onClick={() => ScrollIntoView("categories-section")}
              className="relative cursor-pointer"
            >
              <span className="flex items-center space-x-1 peer">
                <p>categories</p>
                <IoIosArrowDown />
              </span>

              <div className="absolute top-6 -left-3 text-center bg-ivory border px-5 py-4 rounded opacity-0 hover:opacity-100 peer-hover:opacity-100 invisible hover:visible peer-hover:visible transition-all duration-300 ease-in-out shadow-xl">
                <ul className="space-y-1 cursor-auto *:cursor-pointer *:text-neutral-400 *:hover:text-black-1 *:font-light *:hover:font-normal *:tracking-wide">
                  <li>rings</li>
                  <Separator className="bg-neutral-500" />
                  <li>necklaces</li>
                  <Separator className="bg-neutral-500" />
                  <li>bracelets</li>
                  <Separator className="bg-neutral-500" />
                  <li>earrings</li>
                </ul>
              </div>
            </li>

            <li
              className="cursor-pointer"
              onClick={() => ScrollIntoView("popular-section")}
            >
              popular
            </li>

            <li
              className="cursor-pointer"
              onClick={() => ScrollIntoView("latest-section")}
            >
              latest
            </li>

            <li className="cursor-pointer">
              <Link href="/product/1">Combo-Packs</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/3 flex items-center justify-center">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="h-8"
            />
          </Link>
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
