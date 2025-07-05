import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: {
    necklace: [],
    earrings: [],
    rings: [],
    bracelets: [],
  },
  setNecklace: (items) =>
    set((state) => ({ products: { ...state.products, necklace: items } })),
  setEarrings: (items) =>
    set((state) => ({ products: { ...state.products, earrings: items } })),
  setRings: (items) =>
    set((state) => ({ products: { ...state.products, rings: items } })),
  setBracelets: (items) =>
    set((state) => ({ products: { ...state.products, bracelets: items } })),
  resetProducts: () =>
    set({
      products: {
        necklace: [],
        earrings: [],
        rings: [],
        bracelets: [],
      },
    }),
}))

export default useProductStore
