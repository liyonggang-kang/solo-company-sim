import { useNavigate } from 'react-router-dom';
import { ENDINGS } from '../engine/data/endings';
import type { EndingId } from '../engine/types';

const endings = Object.values(ENDINGS);

export default function EndingGalleryPage() {
  const navigate = useNavigate();

  // Track unlocked endings from localStorage
  const unlockedEndings = (() => {
    try {
      const raw = localStorage.getItem('solo_company_sim_unlocked_endings');
      return raw ? (JSON.parse(raw) as EndingId[]) : [];
    } catch {
      return [];
    }
  })();

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate('/')} className="text-text-muted text-lg">←</button>
        <h2 className="text-lg font-bold">结局图鉴</h2>
        <span className="text-xs text-text-muted ml-auto">
          已解锁: {unlockedEndings.length}/{endings.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto">
        {endings.map((ending) => {
          const unlocked = unlockedEndings.includes(ending.id);

          return (
            <div
              key={ending.id}
              className={`p-4 rounded-xl border ${
                unlocked
                  ? 'bg-dark-card border-accent-dim cursor-pointer card-hover'
                  : 'bg-dark-bg/30 border-dark-border opacity-40'
              }`}
              onClick={() => unlocked && navigate(`/ending/${ending.id}`)}
            >
              <div className="text-2xl mb-2">
                {unlocked ? '🏆' : '🔒'}
              </div>
              <div className="text-sm font-bold text-text-primary">
                {unlocked ? ending.name : '???'}
              </div>
              <div className="text-xs text-text-secondary mt-0.5">
                {unlocked ? ending.subtitle : '尚未解锁'}
              </div>
              <div className="text-xs text-text-muted mt-1">
                {ending.rarity === 'hidden' ? '隐藏' : ending.rarity === 'rare' ? '稀有' : '普通'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
