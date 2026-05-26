import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaveStore } from '../store/saveStore';
import { generateNewsItems } from '../engine/NewsGenerator';
import { sfxSelect, startMusic } from '../utils/audio';

export default function HomePage() {
  const navigate = useNavigate();
  const hasSaveData = useSaveStore((s) => s.hasSaveData);
  const [newsIndex, setNewsIndex] = useState(0);
  const [headlines] = useState(() => generateNewsItems(1, null, [], 5).map((n) => n.headline));

  useEffect(() => {
    const timer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [headlines.length]);

  const hasSave = hasSaveData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="text-6xl mb-4">🏢</div>
        <h1 className="text-3xl font-bold text-text-primary">一人公司</h1>
        <p className="text-text-secondary text-sm">Solo Company Sim</p>
        <p className="text-text-muted text-xs">职场模拟经营 · 你的每个选择都是一条人生路径</p>
      </div>

      {/* Menu buttons */}
      <div className="w-full max-w-xs space-y-3">
        <button
          onClick={() => { sfxSelect(); startMusic(); navigate('/select'); }}
          className="w-full py-4 rounded-xl bg-accent text-dark-bg font-bold text-lg card-hover"
        >
          新游戏
        </button>
        {hasSave && (
          <button
            onClick={() => navigate('/game?load=0')}
            className="w-full py-3 rounded-xl border border-accent-dim text-accent font-medium card-hover"
          >
            继续游戏
          </button>
        )}
        <button
          onClick={() => navigate('/gallery')}
          className="w-full py-3 rounded-xl border border-dark-border text-text-secondary card-hover"
        >
          结局图鉴
        </button>
      </div>

      {/* News ticker */}
      <div className="w-full max-w-xs mt-8">
        <div className="bg-dark-card border border-dark-border rounded-xl p-3">
          <p className="text-xs text-text-muted mb-1">📰 职场财经快讯</p>
          <p className="text-xs text-text-secondary leading-relaxed animate-pulse">
            {headlines[newsIndex]}
          </p>
        </div>
      </div>

      <p className="text-xs text-text-muted mt-auto pt-8">
        v2.1 · 致敬所有一人公司的创业者
      </p>
    </div>
  );
}
