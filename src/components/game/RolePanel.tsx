import ProgressBar from '../ui/ProgressBar';
import type { RoleSnapshot } from '../../engine/types';

interface RolePanelProps {
  roles: RoleSnapshot;
}

const roleInfo = [
  { key: 'ceo' as const, label: 'CEO', icon: '🎯' },
  { key: 'employee' as const, label: '员工', icon: '🔧' },
  { key: 'sales' as const, label: '销售', icon: '📞' },
];

export default function RolePanel({ roles }: RolePanelProps) {
  return (
    <div className="px-4 py-2 space-y-1 border-b border-dark-border bg-dark-bg/50">
      <div className="text-xs text-text-muted mb-1">角色状态</div>
      <div className="grid grid-cols-3 gap-3">
        {roleInfo.map(({ key, label, icon }) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className="text-sm flex-shrink-0">{icon}</span>
            <div className="flex-1 min-w-0">
              <ProgressBar
                value={roles[key]}
                color={
                  key === 'ceo'
                    ? 'var(--color-resource-reputation)'
                    : key === 'employee'
                    ? 'var(--color-resource-energy)'
                    : 'var(--color-resource-money)'
                }
                label={label}
                showValue={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
