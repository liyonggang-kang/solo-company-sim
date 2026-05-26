// ============================================================
// 资源计算器 — 纯函数，处理所有资源变化
// ============================================================
import type { ResourceSnapshot, RoleSnapshot, Effect, PassiveEffect } from './types';

export function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, value));
}

export function clampResources(r: ResourceSnapshot): ResourceSnapshot {
  return {
    money: clamp(r.money),
    energy: clamp(r.energy),
    reputation: clamp(r.reputation),
    health: clamp(r.health),
  };
}

export function clampRoles(r: RoleSnapshot): RoleSnapshot {
  return {
    ceo: clamp(r.ceo),
    employee: clamp(r.employee),
    sales: clamp(r.sales),
  };
}

function getModifiedValue(
  effect: Effect,
  passives: PassiveEffect[]
): number {
  let value = typeof effect.value === 'number' ? effect.value : 0;

  for (const p of passives) {
    if (p.type === 'resource_bonus' && p.target === effect.target) {
      value += p.value;
    }
    if (p.type === 'discount' && p.target === effect.target && value < 0) {
      value = Math.ceil(value * (1 - p.value));
    }
  }

  return value;
}

export function applyEffects(
  resources: ResourceSnapshot,
  roles: RoleSnapshot,
  effects: Effect[],
  passives: PassiveEffect[] = []
): { resources: ResourceSnapshot; roles: RoleSnapshot; newFlags: Record<string, boolean | number>; unlockedSkills: string[]; skillPointsGained: number; triggerSocial: boolean } {

  const newResources = { ...resources };
  const newRoles = { ...roles };
  const newFlags: Record<string, boolean | number> = {};
  const unlockedSkills: string[] = [];
  let skillPointsGained = 0;
  let triggerSocial = false;

  for (const effect of effects) {
    const value = getModifiedValue(effect, passives);

    switch (effect.type) {
      case 'resource':
        if (effect.target in newResources) {
          const key = effect.target as keyof ResourceSnapshot;
          switch (effect.operation) {
            case 'add': newResources[key] += value; break;
            case 'set': newResources[key] = value; break;
            case 'multiply': newResources[key] = Math.round(newResources[key] * value); break;
          }
        }
        break;

      case 'role':
        if (effect.target in newRoles) {
          const key = effect.target as keyof RoleSnapshot;
          switch (effect.operation) {
            case 'add': newRoles[key] += value; break;
            case 'set': newRoles[key] = value; break;
            case 'multiply': newRoles[key] = Math.round(newRoles[key] * value); break;
          }
        }
        break;

      case 'flag':
        if (effect.operation === 'toggle') {
          newFlags[effect.target] = !(effect.target as any);
        } else {
          newFlags[effect.target] = effect.value as number | boolean;
        }
        break;

      case 'skill_unlock':
        unlockedSkills.push(effect.target);
        break;

      case 'skill_point':
        skillPointsGained += value;
        break;

      case 'trigger_social':
        triggerSocial = true;
        break;
    }
  }

  return {
    resources: clampResources(newResources),
    roles: clampRoles(newRoles),
    newFlags,
    unlockedSkills,
    skillPointsGained,
    triggerSocial,
  };
}

export function getDelta(
  before: ResourceSnapshot,
  after: ResourceSnapshot
): ResourceSnapshot {
  return {
    money: after.money - before.money,
    energy: after.energy - before.energy,
    reputation: after.reputation - before.reputation,
    health: after.health - before.health,
  };
}
