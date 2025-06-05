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
    <>
      {/* Announcements */}
      <div className="flex items-center justify-center border-b border-neutral-400 py-3 text-center text-black-1 text-sm font-urbanist">
        New Offers Of The Day!!!
      </div>

      <nav className="h-[12dvh] flex justify-center items-center px-10 py-3 sticky top-0 z-10 bg-ivory font-urbanist">
        <div className="w-1/3">
          <ul className="flex space-x-5 text-black-1 text-sm capitalize *:font-medium *:hover:font-semibold tracking-wide">
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

        {/* Logo */}
        <div className="w-1/3 flex items-center justify-center">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="h-7"
            />
          </Link>
        </div>

        <div className="w-1/3 flex items-center justify-end">
          <ul className="flex space-x-3 text-black-1 items-center justify-center *:cursor-pointer">
            <li>
              <LiaShoppingBagSolid className="size-auto p-2 border rounded-full" />
            </li>
            <li>
              <HiUser className="size-auto p-2 border rounded-full" />
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
