// ============================================================
// 存档管理 — localStorage 持久化
// ============================================================
import { create } from 'zustand';
import type { GameState } from '../engine/types';

const SAVE_KEY = 'solo_company_sim_saves';

interface SaveMeta {
  id: number;
  label: string;
  timestamp: number;
  industryName: string;
  turn: number;
  money: number;
}

interface SaveStore {
  autoSave: (state: GameState, industryName: string) => void;
  saveSlot: (slot: number, state: GameState, industryName: string) => void;
  loadSlot: (slot: number) => GameState | null;
  getSlots: () => (SaveMeta | null)[];
  hasSaveData: () => boolean;
  deleteSlot: (slot: number) => void;
}

export const useSaveStore = create<SaveStore>(() => ({
  autoSave: (state: GameState, industryName: string) => {
    const data = loadAllSaves();
    data[0] = {
      id: 0,
      label: '自动存档',
      timestamp: Date.now(),
      industryName,
      turn: state.turn,
      money: state.resources.money,
    };
    localStorage.setItem(`${SAVE_KEY}_0`, JSON.stringify(state));
    localStorage.setItem(`${SAVE_KEY}_meta`, JSON.stringify(data));
  },

  saveSlot: (slot: number, state: GameState, industryName: string) => {
    const data = loadAllSaves();
    data[slot] = {
      id: slot,
      label: `存档 ${slot}`,
      timestamp: Date.now(),
      industryName,
      turn: state.turn,
      money: state.resources.money,
    };
    localStorage.setItem(`${SAVE_KEY}_${slot}`, JSON.stringify(state));
    localStorage.setItem(`${SAVE_KEY}_meta`, JSON.stringify(data));
  },

  loadSlot: (slot: number) => {
    const raw = localStorage.getItem(`${SAVE_KEY}_${slot}`);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as GameState;
    } catch {
      return null;
    }
  },

  getSlots: () => {
    const data = loadAllSaves();
    return Array.from({ length: 4 }, (_, i) => data[i] || null);
  },

  hasSaveData: () => {
    for (let i = 0; i < 4; i++) {
      if (localStorage.getItem(`${SAVE_KEY}_${i}`)) return true;
    }
    return false;
  },

  deleteSlot: (slot: number) => {
    localStorage.removeItem(`${SAVE_KEY}_${slot}`);
    const data = loadAllSaves();
    data[slot] = undefined as any;
    localStorage.setItem(`${SAVE_KEY}_meta`, JSON.stringify(data));
  },
}));

function loadAllSaves(): (SaveMeta | undefined)[] {
  try {
    const raw = localStorage.getItem(`${SAVE_KEY}_meta`);
    return raw ? JSON.parse(raw) : [undefined, undefined, undefined, undefined];
  } catch {
    return [undefined, undefined, undefined, undefined];
  }
}
