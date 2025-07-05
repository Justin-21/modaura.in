"use client";

import Image from "next/image";
import logo from "@/public/logo-color.svg";
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoClose } from "react-icons/io5";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const categoryList = [
  {
    name: "rings",
    link: "/productByCategory/rings",
  },
  {
    name: "necklaces",
    link: "/productByCategory/necklaces",
  },
  {
    name: "bracelets",
    link: "/productByCategory/bracelets",
  },
  {
    name: "earrings",
    link: "/productByCategory/earrings",
  },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const ScrollIntoView = (id: string) => {
    window.scrollTo({
      top: document.getElementById(id)!.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full py-2 bg-darkTeal text-center text-ivory text-xs lg:text-base font-dmSans border-b border-neutral-400">
        New Offers Of The Day!!!
      </div>

      <nav className="flex justify-between items-center px-4 py-4 sticky top-0 z-10 bg-ivory">
        <div className="w-1/3 relative flex items-center justify-start">
          <Drawer direction="left" open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
              <IoIosMenu className="size-4.5 text-darkTeal" />
            </DrawerTrigger>
            <DrawerContent className="bg-darkTeal text-ivory">
              <DrawerClose className="flex items-end justify-end pt-5 pr-5">
                <IoClose size={24} />
              </DrawerClose>
              <DrawerHeader className="font-urbanist gap-2 *:text-lg *:font-normal *:text-ivory">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="px-0">
                    <AccordionTrigger className="text-lg py-0 font-normal *:stroke-ivory justify-start items-center *:translate-0 gap-1">
                      Categories
                    </AccordionTrigger>

                    {categoryList.map((category, _) => (
                      <AccordionContent
                        key={_}
                        className="py-1 pl-3"
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          className="text-lg capitalize"
                          href={category.link}
                        >
                          {category.name}
                        </Link>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>

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
              <DrawerFooter>
                <ul className="flex **:size-5 gap-3 **:stroke-1 **:fill-ivory">
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                </ul>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="w-1/3 flex items-center justify-center">
          <Link href="/">
            <Image src={logo} alt="logo" className="h-full" />
          </Link>
        </div>

        <div className="w-1/3 flex items-center justify-end">
          <ul className="flex gap-3 text-black-1 items-center justify-center *:cursor-pointer">
            <li>
              <Link href="/cart">
                <LiaShoppingBagSolid className="size-4.5 text-darkTeal" />
              </Link>
            </li>
            <li>
              <HiUser className="size-4.5 text-darkTeal" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
