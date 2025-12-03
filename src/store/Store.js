import { create } from "zustand";

export const useStore = create((set) => ({
  entities: [],
  page: 1,

  fetchEntities: async (page = 1) => {
    const res = await fetch(
      `https://jikan.moe/api/v4/anime?limit=10&page=${page}`
    );
    const data = await res.json();

    set({ entities: data.data, page });
  },
}));
