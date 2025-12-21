import type { Project, ProjectDetailContent } from '../../types';

// Individual project imports
export { roProject, roDetails } from './ro';
export { atomsProject, atomsDetails } from './atoms';
export { upworkProject, upworkDetails } from './upwork';
export { atlanticProject, atlanticDetails } from './atlantic';
export { sunoProject, sunoDetails } from './suno';
export { uberProject, uberDetails } from './uber';
export { calvinKleinProject, calvinKleinDetails } from './calvin-klein';
export { pitchProject, pitchDetails } from './pitch';
export { headspaceProject, headspaceDetails } from './headspace';

// Re-import for aggregation
import { roProject, roDetails } from './ro';
import { atomsProject, atomsDetails } from './atoms';
import { upworkProject, upworkDetails } from './upwork';
import { atlanticProject, atlanticDetails } from './atlantic';
import { sunoProject, sunoDetails } from './suno';
import { uberProject, uberDetails } from './uber';
import { calvinKleinProject, calvinKleinDetails } from './calvin-klein';
import { pitchProject, pitchDetails } from './pitch';
import { headspaceProject, headspaceDetails } from './headspace';

// Aggregated exports
export const PROJECTS: Project[] = [
    roProject,
    atomsProject,
    upworkProject,
    atlanticProject,
    sunoProject,
    uberProject,
    calvinKleinProject,
    pitchProject,
    headspaceProject,
];

export const PROJECT_DETAILS: Record<string, ProjectDetailContent> = {
    '1': roDetails,
    '2': atomsDetails,
    '3': upworkDetails,
    '4': atlanticDetails,
    '5': sunoDetails,
    '6': uberDetails,
    '7': calvinKleinDetails,
    '8': pitchDetails,
    '9': headspaceDetails,
};

export const DEFAULT_PROJECT: Project = {
    id: 'default',
    name: 'MetaDev',
    client: 'Agency',
    description: 'Designing the future of digital interaction.',
    year: '2025',
    tags: ['Agency', 'Showcase'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    color: '#3B2F63'
};