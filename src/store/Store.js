import { create } from "zustand";

export const useStore = create((set) => ({
  entities: [],
  page: 1,

  fetchEntities: async (page = 1) => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=10`);
    const data = await res.json();
    set({ entities: data, page });
  },
}));