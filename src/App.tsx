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
import { HeroSection } from '@/components/sections/hero/hero-section';
import { MenuSection } from '@/components/layout/menu/menu-section';
import { SidebarProjects } from '@/components/layout/sidebar/sidebar-projects';
import { PROJECTS, DEFAULT_PROJECT, PROJECT_DETAILS } from './data/projects';
import { Navbar } from '@/components/layout';
import type { Project } from './types';

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

export default App;