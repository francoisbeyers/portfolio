'use client';

import { useState, useEffect } from 'react';

export default function RetroCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load count from localStorage
    const saved = localStorage.getItem('visitorCount');
    const initialCount = saved ? parseInt(saved) : Math.floor(Math.random() * 9000) + 1000;

    // Increment on each visit
    const newCount = initialCount + 1;
    setCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  const digits = count.toString().padStart(6, '0').split('');

  return (
    <div className="inline-flex items-center gap-2 bg-retro-black border-2 border-retro-gray p-2 shadow-retro">
      <span className="text-retro-lime text-xs font-mono">VISITORS:</span>
      <div className="flex gap-0.5">
        {digits.map((digit, i) => (
          <div
            key={i}
            className="bg-retro-red text-retro-yellow font-bold text-lg w-6 h-8 flex items-center justify-center border border-retro-darkgray font-mono"
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
}
