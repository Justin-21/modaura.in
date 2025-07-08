"use client";

import Hero from "@/components/layout/Hero";
import HomePageSection from "@/components/layout/HomePageSections";
import Latest from "@/components/layout/Latest";
import Popular from "@/components/layout/Popular";
import { homePageSections } from "@/constants/data";
import { useEffect } from "react";
import useProductStore from "./stores/useProductStore";

export default function Home() {
  const { setProducts } = useProductStore();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`/api/products?all=true`);
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [setProducts]);

  return (
    <>
      <Hero />
      <Popular />
      <Latest />

      {homePageSections.map((item, index) => (
        <HomePageSection
          key={index}
          section={item.section}
          sectionId={item.sectionId}
        />
      ))}
    </>
  );
}
