import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ShowcaseDisplay } from '@/components/showcase';
import { HeroSection } from '@/components/sections/hero';
import { Sidebar } from '@/components/layout/sidebar';
import { MobileHome } from '@/components/mobile';
import { useUI } from '@/context/ui-context';
import { useProjectNavigation, useHoverProject } from '@/hooks';

export const HomePage: React.FC = () => {
  const { isDesktop, hoveredProjectId, setHoveredProjectId } = useUI();
  const { openProject } = useProjectNavigation();
  const activeProject = useHoverProject(hoveredProjectId);

  if (!isDesktop) {
    return <MobileHome />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {hoveredProjectId && isDesktop && activeProject ? (
          <ShowcaseDisplay key="showcase" activeProject={activeProject} />
        ) : (
          <HeroSection
            key="hero"
            activeProject={activeProject}
            onOpenProject={openProject}
          />
        )}
      </AnimatePresence>

      <Sidebar
        onHoverProject={setHoveredProjectId}
        onOpenProject={openProject}
      />
    </>
  );
};
