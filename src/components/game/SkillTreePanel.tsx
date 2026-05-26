import type { SkillId, SkillBranch } from '../../engine/types';
import { SKILL_TREE, canUnlockSkill, getAvailableSkills } from '../../engine/SkillTree';
import { useGameStore } from '../../store/gameStore';
import { sfxSkillUnlock } from '../../utils/audio';

interface SkillTreePanelProps {
  unlockedSkills: SkillId[];
  skillPoints: number;
}

const BRANCH_LABELS: Record<SkillBranch, string> = {
  business: '💼 商业思维',
  tech: '💻 技术极客',
  network: '🤝 关系网络',
  spirit: '🧘 精神力量',
  generalist: '🔄 全能通才',
};

const BRANCH_COLORS: Record<SkillBranch, string> = {
  business: '#f0c040',
  tech: '#5b9bd5',
  network: '#c084fc',
  spirit: '#4caf84',
  generalist: '#e8e8f0',
};

export default function SkillTreePanel({ unlockedSkills, skillPoints }: SkillTreePanelProps) {
  const branches = ['business', 'tech', 'network', 'spirit', 'generalist'] as SkillBranch[];

  const handleUnlock = (skillId: SkillId) => {
    const store = useGameStore.getState();
    const node = SKILL_TREE.find((s) => s.id === skillId);
    if (!node) return;
    sfxSkillUnlock();
    useGameStore.setState({
      unlockedSkills: [...store.unlockedSkills, skillId],
      skillPoints: store.skillPoints - node.cost,
    });
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-text-primary">技能树</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-dark-border text-accent">
          {skillPoints} 技能点可用
        </span>
      </div>

      <div className="space-y-4">
        {branches.map((branch) => {
          const branchNodes = SKILL_TREE.filter((s) => s.branch === branch);
          const available = getAvailableSkills(unlockedSkills, skillPoints);
          const branchAvailable = available.filter((s) => s.branch === branch);

          return (
            <div key={branch} className="space-y-1.5">
              <div className="text-xs font-medium" style={{ color: BRANCH_COLORS[branch] }}>
                {BRANCH_LABELS[branch]}
                {branchAvailable.length > 0 && (
                  <span className="ml-1 text-xs text-accent">
                    ({branchAvailable.length} 可解锁)
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {branchNodes.map((node) => {
                  const isUnlocked = unlockedSkills.includes(node.id);
                  const canUnlock = canUnlockSkill(node.id, unlockedSkills, skillPoints);

                  return (
                    <button
                      key={node.id}
                      onClick={() => canUnlock && handleUnlock(node.id)}
                      disabled={!canUnlock || isUnlocked}
                      className={`px-2.5 py-1.5 rounded-lg text-xs text-left transition-all ${
                        isUnlocked
                          ? 'bg-dark-card-hover border border-accent-dim text-text-primary'
                          : canUnlock
                          ? 'bg-dark-card border border-dark-border text-text-secondary card-hover'
                          : 'bg-dark-bg/30 border border-dark-border text-text-muted opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <div className="font-medium">{node.name}</div>
                      <div className="text-text-muted scale-75 origin-left">
                        {isUnlocked ? '✓ 已解锁' : `点${node.cost}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
