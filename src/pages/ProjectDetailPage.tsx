import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectDetail } from '@/components/showcase';
import { PROJECT_DETAILS } from '@/data/projects';
import { useScrollDetection, useProjectNavigation } from '@/hooks';

interface ProjectDetailPageProps {
  onScroll: (isScrolled: boolean) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onScroll }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const { getNextProject, goToNextProject, goToHome } = useProjectNavigation();

  useScrollDetection({ onScroll, threshold: 50 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!projectId || !PROJECT_DETAILS[projectId]) {
    goToHome();
    return null;
  }

  const handleNextProject = () => {
    if (!projectId) return;
    goToNextProject(projectId);
  };

  return (
    <ProjectDetail
      details={PROJECT_DETAILS[projectId]}
      nextProject={getNextProject(projectId)}
      onNextProject={handleNextProject}
    />
  );
};
