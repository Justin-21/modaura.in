"use client";

import React, { use } from "react";

const CategoryProduct = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <>
      <div>ProductByCategory Page {id}</div>
    </>
  );
};

export default CategoryProduct;
