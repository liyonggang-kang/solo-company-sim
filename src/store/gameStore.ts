// ============================================================
// 游戏状态管理 — Zustand Store
// ============================================================
import { create } from 'zustand';
import type { GameState, IndustryId, EventChoice, EndingId } from '../engine/types';
import {
  createInitialState,
  startNewGame,
  advanceTurn,
  resolveChoice,
} from '../engine/GameEngine';

interface GameStore extends GameState {
  // Actions
  initNewGame: (industryId: IndustryId) => void;
  makeChoice: (choice: EventChoice) => EndingId | null;
  nextTurn: () => EndingId | null;
  loadState: (state: GameState) => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  ...createInitialState(),

  initNewGame: (industryId: IndustryId) => {
    const newState = startNewGame(industryId);
    set({ ...newState });
  },

  makeChoice: (choice: EventChoice) => {
    const state = get();
    const { newState, ending } = resolveChoice(state, choice);
    set({ ...newState });
    return ending;
  },

  nextTurn: () => {
    const state = get();
    const newState = advanceTurn(state);
    set({ ...newState });
    if (newState.phase === 'ending') {
      return newState.endingTriggered;
    }
    return null;
  },

  loadState: (state: GameState) => {
    set({ ...state });
  },
}));
