import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

interface NavbarProps {
  isRevealed: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isRevealed }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 조금이라도 발생하면(50px) Pill 형태로 변형
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 md:pt-8 pointer-events-none transition-all duration-500">
      <nav 
        className={`
          pointer-events-auto flex items-center justify-between transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] border
          ${isScrolled 
            ? 'w-[92%] md:w-[640px] bg-[#1a1a1a]/80 backdrop-blur-2xl rounded-full px-3 py-2 border-white/10 shadow-2xl translate-y-2' 
            : 'w-full px-6 md:px-10 bg-transparent border-transparent translate-y-0'
          }
        `}
      >
        {/* Left: Menu Button */}
        <div className="relative z-10 flex items-center">
          <button 
            className={`
              transition-all duration-500 ease-out px-5 py-2 rounded-full text-sm font-medium tracking-wide
              ${isScrolled 
                ? 'bg-transparent text-white/90 hover:text-white' 
                : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white'
              }
            `}
          >
            Menu
          </button>
        </div>

        {/* Center: Logo */}
        {/* Absolute positioning ensures it stays perfectly centered relative to the container/screen */}
        <div 
          className={`
            absolute left-1/2 transform -translate-x-1/2 font-semibold text-xl tracking-tight transition-all duration-500
            ${isScrolled ? 'text-white' : 'text-white mix-blend-difference'}
          `}
        >
          Metalab
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 z-10 pr-2">
          <div className="flex items-center space-x-1">
            <button className={`p-2 rounded-full transition-colors hover:bg-white/10`}>
              <Mail size={18} className="text-white" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};