"use client";

import Bracelets from "@/components/layout/Bracelets";
import Earrings from "@/components/layout/Earrings";
import Hero from "@/components/layout/Hero";
import Latest from "@/components/layout/Latest";
import Necklaces from "@/components/layout/Necklaces";
import Popular from "@/components/layout/Popular";
import Rings from "@/components/layout/Rings";
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
      <Rings />
      <Necklaces />
      <Bracelets />
      <Earrings />
    </>
  );
}
