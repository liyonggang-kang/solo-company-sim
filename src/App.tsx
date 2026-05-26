import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './routes/HomePage';
import IndustrySelectPage from './routes/IndustrySelectPage';
import GamePage from './routes/GamePage';
import EndingPage from './routes/EndingPage';
import EndingGalleryPage from './routes/EndingGalleryPage';
import type { EndingId } from './engine/types';

function EndingTracker() {
  const location = useLocation();

  useEffect(() => {
    const match = location.pathname.match(/\/ending\/(.+)/);
    if (match) {
      const endingId = match[1] as EndingId;
      try {
        const raw = localStorage.getItem('solo_company_sim_unlocked_endings');
        const list: EndingId[] = raw ? JSON.parse(raw) : [];
        if (!list.includes(endingId)) {
          list.push(endingId);
          localStorage.setItem('solo_company_sim_unlocked_endings', JSON.stringify(list));
        }
      } catch { /* ignore */ }
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <EndingTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select" element={<IndustrySelectPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/ending/:id" element={<EndingPage />} />
        <Route path="/gallery" element={<EndingGalleryPage />} />
      </Routes>
    </HashRouter>
  );
}
