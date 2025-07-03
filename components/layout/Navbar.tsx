"use client";

import logo from "@/public/logo-color.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Separator } from "../ui/separator";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const hasWindow = typeof window !== "undefined";
  const [width, setWidth] = useState(hasWindow ? window.innerWidth : 768);

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
    <>
      {/* Announcements */}
      <div className="flex items-center justify-center border-b border-neutral-400 py-3 text-center text-ivory bg-darkTeal text-sm font-urbanist">
        New Offers Of The Day!!!
      </div>

      <nav className="h-[10dvh] flex justify-center items-center px-10 py-3 sticky top-0 z-10 bg-ivory font-urbanist">
        <div className="w-1/3">
          <ul className="flex space-x-5 text-black-1 text-base capitalize *:font-medium *:hover:font-semibold tracking-wide">
            <li className="relative cursor-pointer">
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

        {/* Logo */}
        <div className="w-1/3 flex items-center justify-center">
          <Link href="/">
            <Image src={logo} alt="logo" className="h-7" />
          </Link>
        </div>

        <div className="w-1/3 flex items-center justify-end">
          <ul className="flex space-x-3 text-black-1 items-center justify-center *:cursor-pointer">
            <li className="border rounded-full p-2 hover:bg-darkTeal hover:*:fill-ivory transition-all">
              <LiaShoppingBagSolid className="size-auto lg:size-5 fill-darkTeal" />
            </li>
            <li className="border rounded-full p-2 hover:bg-darkTeal hover:*:fill-ivory transition-all">
              <HiUser className="size-auto lg:size-5 fill-darkTeal" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  ) : (
    <MobileNav />
  );
};

export default Navbar;
