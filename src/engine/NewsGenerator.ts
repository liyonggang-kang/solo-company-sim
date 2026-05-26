// ============================================================
// 新闻生成器 — 从新闻池中选取相关新闻
// ============================================================
import type { NewsItem, IndustryId } from './types';
import { NEWS_POOL } from './data/news';

export function generateNewsItems(
  turn: number,
  industryId: IndustryId | null,
  seenNews: string[],
  count = 3
): NewsItem[] {
  const candidates = NEWS_POOL.filter((news) => {
    if (seenNews.includes(news.id)) return false;
    if (news.minTurn && turn < news.minTurn) return false;
    return true;
  });

  // 优先选择行业相关的
  const industryNews = candidates.filter((n) => n.industryHint === industryId);
  const generalNews = candidates.filter((n) => !n.industryHint || n.industryHint !== industryId);

  const selected: NewsItem[] = [];

  // 至少加入一条相关新闻
  if (industryNews.length > 0) {
    const idx = Math.floor(Math.random() * industryNews.length);
    selected.push(industryNews[idx]);
    industryNews.splice(idx, 1);
  }

  // 用通用新闻补足
  const remaining = [...industryNews, ...generalNews];
  while (selected.length < count && remaining.length > 0) {
    const idx = Math.floor(Math.random() * remaining.length);
    selected.push(remaining[idx]);
    remaining.splice(idx, 1);
  }

  // 如果还不够，从全池中补
  if (selected.length < count) {
    const allCandidates = NEWS_POOL.filter((n) => !selected.includes(n));
    while (selected.length < count && allCandidates.length > 0) {
      const idx = Math.floor(Math.random() * allCandidates.length);
      selected.push(allCandidates[idx]);
      allCandidates.splice(idx, 1);
    }
  }

  return selected;
}

// Fix the circular import in news.ts
delete (NEWS_POOL as any).NewsGenerator;
