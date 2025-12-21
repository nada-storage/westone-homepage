import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CursorProvider } from './context/cursor-context';
import { FluidBackground } from '@/components/backgrounds';
import { NeuralNoiseBackground } from '@/components/backgrounds';
import { ShowcaseBackground, ShowcaseDisplay, ProjectDetail } from '@/components/showcase';
import { CustomCursor } from '@/components/interactive/cursor';
import { WhatWeDo } from '@/components/sections';
import { ContactSection } from '@/components/sections';
import { NewsSection } from '@/components/sections';
import { PROJECTS, DEFAULT_PROJECT, PROJECT_DETAILS } from './data/projects';
import { MENU_ITEMS } from './data/constants/menu';
import { NEWS_ITEMS } from './data/constants/news';
import { Navbar } from '@/components/layout';
import type { Project, MenuItem, NewsItem } from './types';

// Icons
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [detailProjectId, setDetailProjectId] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [returnToMenu, setReturnToMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isScrolled, setIsScrolled] = useState(false);

  // Reset scroll state when navigating
  useEffect(() => {
    if (!detailProjectId && !isContactOpen && !isNewsOpen && !isWhatWeDoOpen) {
      setIsScrolled(false);
    }
  }, [detailProjectId, isContactOpen, isNewsOpen, isWhatWeDoOpen]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update active project details when ID changes
  useEffect(() => {
    if (hoveredProjectId) {
      const project = PROJECTS.find((p: Project) => p.id === hoveredProjectId);
      setActiveProject(project || null);
    }
    else if (!isMenuOpen) {
      setActiveProject(null);
    }
  }, [hoveredProjectId, isMenuOpen]);

  const toggleMenu = () => {
    if (detailProjectId || isContactOpen || isNewsOpen || isWhatWeDoOpen) {
      handleBack();
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleOpenProject = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (PROJECT_DETAILS[id]) {
      setReturnToMenu(isMenuOpen);
      setDetailProjectId(id);
      setIsMenuOpen(false);
    }
  };

  const handleBack = () => {
    setDetailProjectId(null);
    setIsContactOpen(false);
    setIsNewsOpen(false);
    setIsWhatWeDoOpen(false);
    if (returnToMenu) {
      setIsMenuOpen(true);
    }
  };

  const handleOpenContact = () => {
    setReturnToMenu(true);
    setIsContactOpen(true);
    setIsMenuOpen(false);
  };

  const handleOpenNews = () => {
    setReturnToMenu(true);
    setIsNewsOpen(true);
    setIsMenuOpen(false);
  };

  const handleOpenWhatWeDo = () => {
    setReturnToMenu(true);
    setIsWhatWeDoOpen(true);
    setIsMenuOpen(false);
  };

  const handleNextProject = () => {
    if (!detailProjectId) return;
    const currentIndex = PROJECTS.findIndex((p: Project) => p.id === detailProjectId);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    const nextProject = PROJECTS[nextIndex];
    setDetailProjectId(nextProject.id);
    window.scrollTo(0, 0);
  };

  const getNextProject = (currentId: string) => {
    const currentIndex = PROJECTS.findIndex((p: Project) => p.id === currentId);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    return PROJECTS[nextIndex];
  };

  const handleLogoClick = () => {
    setDetailProjectId(null);
    setIsContactOpen(false);
    setIsNewsOpen(false);
    setIsWhatWeDoOpen(false);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const menuDisplayProject = activeProject || DEFAULT_PROJECT;

  return (
    <CursorProvider>
      <div className={`relative w-full h-screen overflow-hidden font-sans transition-colors duration-700 ${isMenuOpen ? 'text-black' : 'text-white'}`}>

        <CustomCursor />

        {/* Z-Layer 0: Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <FluidBackground mode="light" />
          </div>

          <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isMenuOpen || (hoveredProjectId && isDesktop) ? 'opacity-0' : 'opacity-100'}`}>
            <NeuralNoiseBackground />
          </div>

          {!isMenuOpen && isDesktop && (
            <ShowcaseBackground projects={PROJECTS} activeId={hoveredProjectId} />
          )}

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="menu-bg-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1, backgroundColor: menuDisplayProject.color }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0 mix-blend-multiply pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isScrolled={isScrolled}
          onOpenContact={handleOpenContact}
          onLogoClick={handleLogoClick}
        />

        <AnimatePresence mode="wait">
          {!isMenuOpen ? (
            isContactOpen ? (
              <ContactSection key="contact" />
            ) : isNewsOpen ? (
              <NewsSection key="news" />
            ) : isWhatWeDoOpen ? (
              <WhatWeDo key="what-we-do" />
            ) : detailProjectId && PROJECT_DETAILS[detailProjectId] ? (
              <ProjectDetail
                key={detailProjectId}
                onBack={handleBack}
                details={PROJECT_DETAILS[detailProjectId]}
                nextProject={getNextProject(detailProjectId)}
                onNextProject={handleNextProject}
                onScroll={setIsScrolled}
              />
            ) : hoveredProjectId && isDesktop && activeProject ? (
              <ShowcaseDisplay key="showcase" activeProject={activeProject} />
            ) : (
              <HeroSection key="hero" activeProject={activeProject} onOpenProject={handleOpenProject} />
            )
          ) : (
            <MenuSection
              key="menu"
              displayProject={menuDisplayProject}
              onProjectHover={setHoveredProjectId}
              onOpenProject={handleOpenProject}
              onOpenContact={handleOpenContact}
              onOpenNews={handleOpenNews}
              onOpenWhatWeDo={handleOpenWhatWeDo}
            />
          )}
        </AnimatePresence>

        <div className={`transition-opacity duration-500 ${isMenuOpen || detailProjectId || isContactOpen || isNewsOpen || isWhatWeDoOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <SidebarProjects
            onHoverProject={(id) => setHoveredProjectId(id)}
            onOpenProject={handleOpenProject}
          />
        </div>

      </div>
    </CursorProvider>
  );
};

// Sub-Components
interface HeroSectionProps {
  activeProject: Project | null;
  onOpenProject: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeProject, onOpenProject }) => {
  return (
    <motion.main
      className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {activeProject ? (
          <motion.div
            key="project-preview"
            className="relative w-[60vw] h-[60vh] md:w-[50vw] md:h-[65vh] pointer-events-auto cursor-pointer"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onOpenProject(activeProject.id)}
          >
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl relative group" data-hover="true">
              <img
                src={activeProject.image}
                alt={activeProject.name}
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-6xl font-serif italic mb-2">{activeProject.name}</h2>
                <p className="text-xl opacity-90">{activeProject.description}</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="default-hero"
            className="max-w-4xl text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p className="text-lg md:text-xl text-white/70 mb-6 max-w-lg mx-auto">
              Since 2018, we've helped the most innovative startups and reputable brands design, build, and ship products worth talking about.
            </motion.p>
            <motion.h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight text-white mix-blend-overlay">
              We make <br />
              <span className="italic">interfaces</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

interface MenuSectionProps {
  displayProject: Project;
  onProjectHover: (id: string | null) => void;
  onOpenProject: (id: string) => void;
  onOpenContact: () => void;
  onOpenNews: () => void;
  onOpenWhatWeDo: () => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ displayProject, onProjectHover, onOpenProject, onOpenContact, onOpenNews, onOpenWhatWeDo }) => {
  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col pt-24 pb-8 px-6 md:px-12 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-center">

        <div className="md:col-span-3 flex flex-col h-full overflow-hidden justify-center">
          <div className="flex flex-col space-y-0 mb-6 shrink-0">
            {MENU_ITEMS.map((item: MenuItem, index: number) => (
              <MenuLink key={item.label} item={item} index={index} onOpenContact={onOpenContact} onOpenNews={onOpenNews} onOpenWhatWeDo={onOpenWhatWeDo} />
            ))}
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar mask-gradient-b max-h-[50vh]">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-3 block pl-1">Case Studies</span>
            <div className="flex flex-col items-start gap-1 pl-1 pb-4">
              {PROJECTS.map((project: Project, i: number) => (
                <MenuProjectPill
                  key={project.id}
                  project={project}
                  index={i}
                  onHover={onProjectHover}
                  onClick={() => onOpenProject(project.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-6 flex items-center justify-center p-2 relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayProject.id}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="w-auto h-full max-h-[70vh] aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative"
            >
              <img src={displayProject.image} alt={displayProject.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-serif text-4xl italic mb-1">{displayProject.name}</h3>
                <p className="text-xs opacity-90 max-w-xs">{displayProject.description}</p>
                <div className="flex gap-2 mt-3">
                  {displayProject.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded border border-white/20 text-[10px] uppercase tracking-wide bg-white/10 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="md:col-span-3 flex flex-col h-full pl-2 justify-center overflow-hidden relative">
          <div className="flex justify-between items-center mb-4 px-4 py-3 bg-gray-100/80 backdrop-blur-md rounded-xl border border-gray-200/50 shrink-0 z-10 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Latest News</span>
            <span className="text-[10px] text-gray-400">Scroll ↓</span>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pr-2 max-h-[75vh]">
            {NEWS_ITEMS.map((news: NewsItem, i: number) => (
              <motion.div
                key={news.id}
                className="group relative bg-white border border-gray-100 shadow-sm rounded-xl p-4 cursor-pointer hover:shadow-md hover:border-gray-200 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + (i * 0.05) }}
                data-hover="true"
              >
                <div className="absolute top-4 right-4 text-gray-300 group-hover:text-black transition-colors">
                  <ArrowRightIcon />
                </div>

                {news.image && (
                  <div className="w-full h-24 rounded-lg overflow-hidden mb-4 bg-gray-100">
                    <img src={news.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase text-meta-purple/60">{news.category}</span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-[10px] text-gray-400">{news.date}</span>
                  </div>
                  <h4 className="text-sm font-serif font-medium leading-snug text-gray-900 group-hover:text-meta-purple transition-colors">{news.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 mt-auto border-t border-gray-100 shrink-0">
            <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-400">
              <span>© 2025 MetaDev</span>
              <div className="flex gap-4">
                <span className="cursor-pointer hover:text-black transition-colors" data-hover="true">Instagram</span>
                <span className="cursor-pointer hover:text-black transition-colors" data-hover="true">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const MenuLink: React.FC<{ item: MenuItem, index: number, onOpenContact: () => void, onOpenNews: () => void, onOpenWhatWeDo: () => void }> = ({ item, index, onOpenContact, onOpenNews, onOpenWhatWeDo }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (item.href === '#contact') {
      e.preventDefault();
      onOpenContact();
    } else if (item.href === '#news') {
      e.preventDefault();
      onOpenNews();
    } else if (item.href === '#what-we-do') {
      e.preventDefault();
      onOpenWhatWeDo();
    }
  };

  return (
    <motion.a
      href={item.href}
      onClick={handleClick}
      className="block group relative py-0 w-fit whitespace-nowrap"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index }}
      data-hover="true"
    >
      <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900 group-hover:text-black group-hover:italic transition-all duration-300">
        {item.label}
      </span>
    </motion.a>
  )
}

const MenuProjectPill: React.FC<{ project: Project; index: number; onHover: (id: string | null) => void; onClick: () => void }> = ({ project, index, onHover, onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + (index * 0.05) }}
      onMouseEnter={() => onHover(project.id)}
      onClick={onClick}
      onMouseLeave={() => onHover(null)}
      className="group flex items-center gap-3 px-3 py-2 rounded-full bg-gray-50 hover:bg-black transition-colors duration-300 w-full max-w-[200px]"
      data-hover="true"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-green-400 transition-colors" />
      <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">{project.name}</span>
      <span className="text-[10px] text-gray-300 ml-auto group-hover:text-gray-500 transition-colors opacity-0 group-hover:opacity-100">{project.year}</span>
    </motion.button>
  )
}

interface SidebarProjectsProps {
  onHoverProject: (id: string | null) => void;
  onOpenProject: (id: string, e?: React.MouseEvent) => void;
}

const SidebarProjects: React.FC<SidebarProjectsProps> = ({ onHoverProject, onOpenProject }) => {
  return (
    <div className={`fixed left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className={`text-[10px] uppercase tracking-widest mb-4 ml-1 transition-colors text-white/50`}
      >
        Selected Work
      </motion.span>

      {PROJECTS.map((project: Project, index: number) => (
        <ProjectPill
          key={project.id}
          project={project}
          index={index}
          onHover={onHoverProject}
          onClick={(e) => onOpenProject(project.id, e)}
        />
      ))}
    </div>
  )
}

const ProjectPill: React.FC<{ project: Project; index: number; onHover: (id: string | null) => void; onClick: (e?: React.MouseEvent) => void }> = ({ project, index, onHover, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(project.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(null);
  };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button
        type="button"
        data-hover="true"
        onClick={onClick}
        className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center justify-between gap-4 group relative overflow-hidden bg-white/20 backdrop-blur-md border-white/10 text-white/80 hover:bg-white/30 hover:border-white/20 hover:text-white"
        style={{
          width: isHovered ? 'auto' : undefined,
        }}
      >
        <span className="relative z-10">{project.name}</span>
      </button>
    </motion.div>
  );
}

export default App;