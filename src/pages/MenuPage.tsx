import React, { useState } from 'react';
import { MenuSection } from '@/components/layout/menu';
import { DEFAULT_PROJECT } from '@/data/projects';
import { useProjectNavigation, useHoverProject } from '@/hooks';

export const MenuPage: React.FC = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const activeProject = useHoverProject(hoveredProjectId);

  const {
    openProject,
    goToContact,
    goToNews,
    goToWhatWeDo,
  } = useProjectNavigation();

  const handleOpenProject = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    openProject(id);
  };

  const displayProject = activeProject || DEFAULT_PROJECT;

  return (
    <MenuSection
      displayProject={displayProject}
      onProjectHover={setHoveredProjectId}
      onOpenProject={handleOpenProject}
      onOpenContact={goToContact}
      onOpenNews={goToNews}
      onOpenWhatWeDo={goToWhatWeDo}
    />
  );
};
