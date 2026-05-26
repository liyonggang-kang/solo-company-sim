import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { getEndingDef } from '../engine/GameEngine';
import type { EndingId } from '../engine/types';
import { INDUSTRIES } from '../engine/data/industries';

export default function EndingPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const state = useGameStore();
  const ending = getEndingDef(id as EndingId);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (!ending) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-4">
          <p className="text-text-muted">未知结局</p>
          <button onClick={() => navigate('/')} className="text-accent">返回首页</button>
        </div>
      </div>
    );
  }

  const industryName = state.industryId ? INDUSTRIES[state.industryId]?.name : '未知';

  return (
    <div className="flex flex-col min-h-screen p-4 space-y-6">
      {/* Hidden canvas for share card */}
      <canvas ref={canvasRef} className="hidden" width={750} height={1334} />

      {/* Ending display */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="text-6xl">🎉</div>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-text-primary">{ending.name}</h1>
          <p className="text-lg text-accent">{ending.subtitle}</p>
          <span className="text-xs px-2 py-0.5 rounded-full bg-dark-border text-text-muted">
            {ending.rarity === 'common' ? '普通结局' : ending.rarity === 'rare' ? '稀有结局' : '隐藏结局'}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          <div className="p-3 rounded-xl bg-dark-card border border-dark-border text-center">
            <div className="text-xs text-text-muted">💵 资金</div>
            <div className="text-lg font-bold text-resource-money">{state.resources.money}</div>
          </div>
          <div className="p-3 rounded-xl bg-dark-card border border-dark-border text-center">
            <div className="text-xs text-text-muted">⚡ 精力</div>
            <div className="text-lg font-bold text-resource-energy">{state.resources.energy}</div>
          </div>
          <div className="p-3 rounded-xl bg-dark-card border border-dark-border text-center">
            <div className="text-xs text-text-muted">⭐ 声望</div>
            <div className="text-lg font-bold text-resource-reputation">{state.resources.reputation}</div>
          </div>
          <div className="p-3 rounded-xl bg-dark-card border border-dark-border text-center">
            <div className="text-xs text-text-muted">❤️ 健康</div>
            <div className="text-lg font-bold text-resource-health">{state.resources.health}</div>
          </div>
        </div>

        {/* Narrative */}
        <div className="w-full max-w-xs p-4 rounded-xl bg-dark-card border border-dark-border">
          <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
            {ending.narrative}
          </p>
        </div>

        {/* Quote */}
        <div className="w-full max-w-xs text-center">
          <p className="text-lg italic text-text-muted">"{ending.quote}"</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="space-y-2">
        <button
          onClick={() => navigate('/select')}
          className="w-full py-4 rounded-xl bg-accent text-dark-bg font-bold text-lg card-hover"
        >
          再来一局
        </button>
        <button
          onClick={() => navigate('/gallery')}
          className="w-full py-3 rounded-xl border border-dark-border text-text-secondary card-hover"
        >
          结局图鉴
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full py-3 rounded-xl border border-dark-border text-text-muted card-hover"
        >
          返回首页
        </button>
      </div>
    </div>
  );
}
