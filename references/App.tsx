import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectHeader } from './components/ProjectHeader';

const App: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Wait 0.85 second (850ms) before triggering the animation
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black w-full relative">
      <Navbar isRevealed={isRevealed} />

      {/* 
        Layout Strategy:
        1. Top: ProjectHeader (Initially height 0, expands to push content down)
        2. Bottom: Image Section (Initially full screen, pushed down by header)
      */}
      
      <main className="w-full relative z-0">
        <ProjectHeader isRevealed={isRevealed} />

        {/* Hero Image Section */}
        <div className="relative w-full h-[100vh] overflow-hidden">
          {/* 
            The image container needs to feel like it's sliding down.
            We add a slight parallax or scale effect for extra polish.
          */}
          <div 
            className={`
              w-full h-full relative transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]
              ${isRevealed ? 'scale-100' : 'scale-[1.02]'}
            `}
          >
            <img 
              src="https://images.unsplash.com/photo-1556656793-02715d8dd660?q=80&w=2800&auto=format&fit=crop" 
              alt="Hand holding phone with map app" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
            />
            
            {/* Overlay to simulate the Uber app UI on top of the phone (Simulated for visual match) */}
            {/* Note: In a real production app, the phone screen contents would likely be a separate layer or part of the image */}
            
            {/* Floating 'Interactive' Dots to match reference */}
            <div className={`
                absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 border border-blue-500/50 rounded-full flex items-center justify-center
                transition-opacity duration-700 delay-1000
                ${isRevealed ? 'opacity-0' : 'opacity-100'}
            `}>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            </div>

            {/* Visual Indicator of 'Scroll' state */}
            <div className={`
              absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500
              ${isRevealed ? 'opacity-0' : 'opacity-80'}
            `}>
               <div className="w-[1px] h-8 bg-white/50"></div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;