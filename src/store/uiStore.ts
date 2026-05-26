// ============================================================
// UI 状态管理 — 临时 UI 状态，不持久化
// ============================================================
import { create } from 'zustand';

interface UIState {
  activeTab: number;
  modal: 'none' | 'outcome' | 'social' | 'menu';
  setActiveTab: (tab: number) => void;
  openModal: (modal: 'none' | 'outcome' | 'social' | 'menu') => void;
  closeModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeTab: 0,
  modal: 'none',

  setActiveTab: (tab: number) => set({ activeTab: tab }),

  openModal: (modal: 'none' | 'outcome' | 'social' | 'menu') => set({ modal }),

  closeModal: () => set({ modal: 'none' }),
}));
