import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CursorProvider } from './context/cursor-context';
import { UIProvider, useUI } from './context/ui-context';
import { FluidBackground, NeuralNoiseBackground } from '@/components/backgrounds';
import { ShowcaseBackground } from '@/components/showcase';
import { CustomCursor } from '@/components/interactive/cursor';
import { WhatWeDo } from '@/components/sections/services';
import { ContactSection } from '@/components/sections/contact';
import { NewsSection } from '@/components/sections/news';
import { Navbar } from '@/components/layout';
import { HomePage, ProjectDetailPage, MenuPage } from '@/pages';
import { PROJECTS, DEFAULT_PROJECT } from './data/projects';
import { useProjectNavigation, useHoverProject } from '@/hooks';

const AppContent: React.FC = () => {
  const {
    isScrolled,
    setIsScrolled,
    isDesktop,
    isTouchDevice,
    hoveredProjectId,
    isHomePage,
    isMenuPage,
    isFullScreenPage,
  } = useUI();

  const {
    goToHome,
    goToMenu,
    goToContact,
    goBack,
  } = useProjectNavigation();

  const activeProject = useHoverProject(hoveredProjectId);

  // Toggle menu: go to menu or go back
  const toggleMenu = () => {
    if (isMenuPage) {
      goBack();
    } else {
      goToMenu();
    }
  };

  const menuDisplayProject = activeProject || DEFAULT_PROJECT;

  // Determine background based on route
  const showMenuBackground = isMenuPage;
  const showShowcaseBackground = isHomePage && !isMenuPage && isDesktop;

  return (
    <div className={`relative w-full ${isFullScreenPage ? 'h-screen overflow-hidden' : 'min-h-screen'} font-sans transition-colors duration-700 ${isMenuPage ? 'text-black' : 'text-white'}`}>

      {!isTouchDevice && <CustomCursor />}

      {/* Z-Layer 0: Background - Fixed */}
      <div className={`${isFullScreenPage ? 'fixed' : 'absolute'} inset-0 z-0 bg-black`}>
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${showMenuBackground ? 'opacity-100' : 'opacity-0'}`}>
          <FluidBackground mode="light" />
        </div>

        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${showMenuBackground || (hoveredProjectId && isDesktop) ? 'opacity-0' : 'opacity-100'}`}>
          <NeuralNoiseBackground />
        </div>

        {showShowcaseBackground && (
          <ShowcaseBackground projects={PROJECTS} activeId={hoveredProjectId} />
        )}

        <AnimatePresence>
          {isMenuPage && (
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

      {/* Navbar - Fixed */}
      <Navbar
        isMenuOpen={isMenuPage}
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
        onOpenContact={goToContact}
        onLogoClick={goToHome}
      />

      {/* Main Content */}
      <div className={`relative z-10 ${isFullScreenPage ? 'h-screen' : 'min-h-screen'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/work/:projectId" element={<ProjectDetailPage onScroll={setIsScrolled} />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
        </Routes>
      </div>

    </div>
  );
};

const App: React.FC = () => {
  return (
    <CursorProvider>
      <Router>
        <UIProvider>
          <AppContent />
        </UIProvider>
      </Router>
    </CursorProvider>
  );
};

export default App;
