"use client";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStore = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light', // Default theme
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme-storage', // Key in localStorage
      getStorage: () => localStorage, // Default storage mechanism
    }
  )
);
