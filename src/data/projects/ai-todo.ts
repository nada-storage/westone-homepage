import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const AIToDoProject: Project = {
    id: '5',
    name: 'AI ToDo',
    client: '자체 프로젝트',
    description: `AI 기반 자연어 입력을 지원하는
스마트 할일 관리 데스크톱 앱`,
    year: '2025',
    tags: ['Desktop App', 'AI/LLM', 'Electron'],
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1000',
    color: '#FFFFFF',
    bgImage: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?q=80&w=800&auto=format&fit=crop',
    foregroundType: 'desktop',
    theme: 'light',
    accentColor: '#6366F1',
    layoutConfig: {
        titleStyles: 'absolute top-[20%] left-[18%] text-left z-10',
        descriptionStyles: 'absolute bottom-[25%] left-[18%] text-left max-w-xs',
        imageWrapperStyles: 'absolute top-1/2 -translate-y-1/2 right-[10%] w-[320px] md:w-[380px] rotate-[-6deg]',
        enterAnimation: 'converge',
    }
};

export const AIToDoDetails: ProjectDetailContent = {
    id: '5',

    media: {
        hero: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop'
    },

    hero: {
        title: 'AI ToDo',
        type: 'AI Desktop App',
        stage: 'Launch',
        deliverables: 'Desktop App, AI Integration, UX Design'
    },

    intro: {
        text: '"내일 3시에 팀 미팅" 한 문장이면,\n할일을 자동으로 분류하고\n알림까지 설정해주는\nAI 기반 스마트 투두 앱.'
    },

    vision: {
        heading: 'Type naturally, organize automatically.',
        text: '복잡한 입력 폼 대신 자연스러운 한국어 문장 하나로 할일을 등록하세요. AI가 제목, 카테고리, 마감일, 알림 시간을 자동으로 추출하고 분류합니다. "30분 후 약 먹기", "다음 주 금요일까지 보고서 제출" 같은 상대적 시간 표현도 완벽하게 이해합니다.',
        image1Title: 'Smart Parser',
        image1Subtitle: 'AI Input',
        image3HoverText: 'Organize'
    },

    marquee: 'Natural Language • Auto Categorize • Smart Alerts • Dark Mode • Cross Platform • ',

    aura: {
        subheading: 'Intelligent Task Management',
        heading: 'From chaos to clarity.',
        text: 'Work, Study, Health, Schedule 등 6개 카테고리로 자동 분류되고, 우선순위와 예상 소요 시간까지 AI가 분석합니다. 시스템 트레이 상주와 글로벌 단축키(Ctrl+Shift+T)로 언제든 빠르게 접근할 수 있습니다.',
        bigText: 'Focus.',
        card2Text: '"Just type,<br />AI handles the rest."'
    },

    feature: {
        subheading: 'AI Integration',
        heading: '한국어 자연어 처리의 정교함',
        text: '"11시 반"을 "11:30"으로, "모레 오후"를 정확한 날짜로 변환합니다. 위치 기반 필터링("[장소]에서" 패턴), 학교 관련 단어의 맥락별 분류 등 한국어 특화 로직으로 높은 정확도를 제공합니다.'
    },

    discovery: {
        heading: 'Every feature, designed for productivity.',
        items: [
            { img: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2070&auto=format&fit=crop", title: "자연어 입력" },
            { img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop", title: "자동 분류" },
            { img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop", title: "스마트 알림" },
            { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop", title: "다크 모드" }
        ]
    },

    stats: {
        stat1: { value: '6', label: 'Auto Categories' },
        stat2: { value: '3', label: 'Platforms Supported' },
        stat3: { value: 'AI', label: 'AI Model' }
    }
};
