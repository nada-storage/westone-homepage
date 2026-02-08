import type { NewsItem } from '../../types';

import polarisSifImg from '../../assets/news/polaris-sif-2026.jpg';
import namumiPilotImg from '../../assets/news/namumi-pilot.jpg';

export const NEWS_ITEMS: NewsItem[] = [
    {
        id: 'namumi-pilot',
        date: 'Feb 3, 2026',
        title: 'FreeKiosk 파일럿 매장 첫 도입',
        category: 'Milestone',
        image: namumiPilotImg
    },
    {
        id: 'polaris-sif-2026',
        date: 'Jan 29, 2026',
        title: 'Polaris SIF 차세대반도체 축제\n기술지원작품 장려상 수상',
        category: 'Award',
        image: polarisSifImg
    },
];