/* eslint-disable @typescript-eslint/no-explicit-any */
import { productTypes } from "@/models/Product";
import { create } from "zustand";

interface ProductStateTypes {
  products: Array<productTypes>;
  setProducts: (items: Array<productTypes>) => void;
  addProduct: (product: productTypes) => void;
  removeProduct: (productId: string) => void;
  clearProducts: () => void;
}

const useProductStore = create<ProductStateTypes>((set) => ({
  products: [],

  // Set all products at once
  setProducts: (items) => set({ products: items }),

  // Add a single product
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  // Remove a product by ID
  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((item: any) => item.id !== productId),
    })),

  // Clear all products
  clearProducts: () => set({ products: [] }),
}));

export default useProductStore;
