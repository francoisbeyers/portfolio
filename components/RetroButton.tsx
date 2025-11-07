'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface RetroButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'win95';
  className?: string;
}

export default function RetroButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: RetroButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 font-bold text-center transition-all duration-200 border-4';

  const variants = {
    primary: 'bg-retro-cyan text-retro-black border-retro-blue hover:bg-retro-yellow hover:border-retro-red shadow-retro hover:shadow-retro-hover active:translate-x-1 active:translate-y-1',
    secondary: 'bg-retro-magenta text-white border-retro-purple hover:bg-retro-purple hover:border-retro-magenta shadow-retro hover:shadow-retro-hover active:translate-x-1 active:translate-y-1',
    win95: 'bg-win95-silver text-black border-gray-400 shadow-win95 hover:bg-gray-300 active:shadow-none',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
