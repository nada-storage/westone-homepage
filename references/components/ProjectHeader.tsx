import React from 'react';

interface ProjectHeaderProps {
  isRevealed: boolean;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ isRevealed }) => {
  return (
    <div 
      className={`
        grid transition-[grid-template-rows] duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        ${isRevealed ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
      `}
    >
      <div className="overflow-hidden bg-black text-white">
        <div 
          className={`
            px-6 md:px-10 pb-12 md:pb-20 pt-32 flex flex-col justify-end min-h-[50vh] md:min-h-[60vh]
            transition-all duration-1000 delay-300 transform
            ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}
        >
          {/* Main Title */}
          <h1 className="text-[6rem] md:text-[10rem] lg:text-[12rem] leading-[0.85] font-serif-display mb-16 md:mb-24">
            Uber
          </h1>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 border-t border-white/20 pt-8">
            <div>
              <h3 className="text-lg font-semibold mb-1">Project Type</h3>
              <p className="text-white/60 font-light">Product</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Stage</h3>
              <p className="text-white/60 font-light">Leader</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Deliverables</h3>
              <p className="text-white/60 font-light">Strategy & Research, Product Design, Frontend Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};