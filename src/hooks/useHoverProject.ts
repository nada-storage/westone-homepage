import { useState, useEffect } from 'react';
import { PROJECTS } from '@/data/projects';
import type { Project } from '@/types';

export const useHoverProject = (hoveredProjectId: string | null) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (hoveredProjectId) {
      const project = PROJECTS.find((p: Project) => p.id === hoveredProjectId);
      setActiveProject(project || null);
    } else {
      setActiveProject(null);
    }
  }, [hoveredProjectId]);

  return activeProject;
};
