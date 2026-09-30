import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean;
  isCollapsed: boolean;
  toggle: () => void;
  setOpen: (open: boolean) => void;
  toggleCollapse: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: true,
  isCollapsed: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (open) => set({ isOpen: open }),
  toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
