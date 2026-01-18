import type { Project, ProjectDetailContent } from '../../types';

// Individual project imports
export { ballpangProject, ballpangDetails } from './ballpang';
export { recyclerProject, recyclerDetails } from './recycler';
export { upworkProject, upworkDetails } from './upwork';
export { atlanticProject, atlanticDetails } from './atlantic';
export { AIToDoProject, AIToDoDetails } from './ai-todo';
export { uberProject, uberDetails } from './uber';
export { calvinKleinProject, calvinKleinDetails } from './calvin-klein';
export { pitchProject, pitchDetails } from './pitch';
export { headspaceProject, headspaceDetails } from './headspace';

// Re-import for aggregation
import { ballpangProject, ballpangDetails } from './ballpang';
import { recyclerProject, recyclerDetails } from './recycler';
import { upworkDetails } from './upwork';
import { atlanticDetails } from './atlantic';
import { AIToDoProject, AIToDoDetails } from './ai-todo';
import { uberDetails } from './uber';
import { calvinKleinDetails } from './calvin-klein';
import { pitchDetails } from './pitch';
import { headspaceDetails } from './headspace';

// Aggregated exports
export const PROJECTS: Project[] = [
    AIToDoProject,
    ballpangProject,
    recyclerProject,
    // upworkProject,
    // atlanticProject,
    // uberProject,
    // calvinKleinProject,
    // pitchProject,
    // headspaceProject,
];

export const PROJECT_DETAILS: Record<string, ProjectDetailContent> = {
    'ballpang': ballpangDetails,
    'recycler': recyclerDetails,
    '3': upworkDetails,
    '4': atlanticDetails,
    '5': AIToDoDetails,
    '6': uberDetails,
    '7': calvinKleinDetails,
    '8': pitchDetails,
    '9': headspaceDetails,
};

export const DEFAULT_PROJECT: Project = {
    id: 'default',
    name: 'Westone',
    client: 'Agency',
    description: 'Building software that scales',
    year: '2025',
    tags: ['Agency', 'Showcase'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    color: '#3B2F63'
};