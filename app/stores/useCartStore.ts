import { productTypes } from "@/models/Product";
import mongoose, { ObjectId } from "mongoose";
import { create } from "zustand";

export interface CartProductTypes extends productTypes {
  quantity: number;
}

interface CartStateTypes {
  cart: Array<CartProductTypes>;
  // addToCart: (product: CartProductTypes) => void;
  addToCart: (_id: mongoose.Types.ObjectId) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const getProduct = async (_id: mongoose.Types.ObjectId) => {
  const res = await fetch(`/api/products?id=${_id}`);
  const product = await res.json();
  return product;
};

const useCartStore = create<CartStateTypes>((set) => ({
  cart: [],

  // addToCart: (product) =>
  //   set((state) => {
  //     const exists = state.cart.find((item) => item._id === product?._id);
  //     if (exists) {
  //       return {
  //         cart: state.cart.map((item) =>
  //           item._id === product?._id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         ),
  //       };
  //     } else {
  //       return { cart: [...state.cart, { ...product, quantity: 1 }] };
  //     }
  //   }),

  addToCart: (_id) => {
    getProduct(_id).then((product) => {
      set((state) => {
        const exists = state.cart.find((item) => item._id === product?._id);
        if (exists) {
          return {
            cart: state.cart.map((item) =>
              item._id === product?._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }
      });
    });
  },

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id.toString() !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id.toString() === productId ? { ...item, quantity } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
