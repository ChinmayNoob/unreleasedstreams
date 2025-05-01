'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { TextScramble } from './ui/text-scramble';


interface HeaderProps {
  title?: string;
}


const Header: React.FC<HeaderProps> = ({ title = "[unreleased streams]" }) => {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <header className="py-6 mb-2 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">

            <Link href='/' className="text-5xl font-courier font-bold tracking-tighter">
              <TextScramble
                as='span'
                speed={0.01}
                trigger={isTrigger}
                onHoverStart={() => setIsTrigger(true)}
                onScrambleComplete={() => setIsTrigger(false)}
              >
              {title}
              </TextScramble>
            </Link>
          </div>
          <nav className="space-x-6 font-courier text-sm font-bold">
            <Link href="https://github.com/ChinmayNoob" target='_blank'>
              [chinmay]
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;