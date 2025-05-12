"use client";

import Image from "next/image";
import logo from "@/public/ModAura_logo.svg";
import React, { useState } from "react";
import { HiUser } from "react-icons/hi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosMenu } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoClose } from "react-icons/io5";
import { Separator } from "../ui/separator";
import Link from "next/link";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const ScrollIntoView = (id: string) => {
    window.scrollTo({
      top: document.getElementById(id)!.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full font-urbanist bg-ivory">
      <div className="bg-linear-to-r from-darkTeal to-teal-500 py-2 text-center text-ivory text-xs lg:text-base">
        New Offers Of The Day!!!
      </div>

      <div className="flex justify-between items-center px-4 py-3">
        <div className="w-1/3 relative flex items-center justify-start">
          {/* <IoIosMenu
            size={24}
            onClick={() => setActive(true)}
          /> */}

          <Drawer
            direction="left"
            open={open}
            onOpenChange={setOpen}
          >
            <DrawerTrigger>
              <IoIosMenu size={22} />
            </DrawerTrigger>
            <DrawerContent className="font-urbanist bg-darkTeal text-ivory">
              <DrawerClose className="flex items-end justify-end pt-5 pr-5">
                <IoClose size={24} />
              </DrawerClose>
              <DrawerHeader className="font-urbanist gap-2 *:text-lg *:font-normal *:text-ivory">
                <DrawerTitle
                  onClick={() => {
                    setOpen(false);
                    ScrollIntoView("categories-section");
                  }}
                >
                  Categories
                </DrawerTitle>
                <Separator />

                <DrawerTitle
                  onClick={() => {
                    setOpen(false);
                    ScrollIntoView("popular-section");
                  }}
                >
                  Popular
                </DrawerTitle>
                <Separator />

                <DrawerTitle
                  onClick={() => {
                    setOpen(false);
                    ScrollIntoView("latest-section");
                  }}
                >
                  Latest
                </DrawerTitle>
                <Separator />

                <DrawerTitle
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link href="/product/1">Combo-Packs</Link>
                </DrawerTitle>
                <Separator />
              </DrawerHeader>
              <DrawerFooter>Social Links</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="w-1/3 flex items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            className="h-full"
          />
        </div>

        <div className="w-1/3 flex items-center justify-end">
          <ul className="flex space-x-3 text-black-1 items-center justify-center *:cursor-pointer">
            <li>
              <LiaShoppingBagSolid size={20} />
            </li>
            <li>
              <HiUser size={20} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
