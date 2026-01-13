import { useEffect } from 'react';
import { SITE_CONFIG } from '@/config';

interface UseScrollDetectionProps {
  onScroll: (isScrolled: boolean) => void;
  threshold?: number;
}

export const useScrollDetection = ({
  onScroll,
  threshold = SITE_CONFIG.ui.scrollThreshold
}: UseScrollDetectionProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      onScroll(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScroll, threshold]);
};
