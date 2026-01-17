import type { Project, ProjectDetailContent } from '../../types';
import mainHomeImg from '../../assets/Recycler/main_home.jpg';
import mainCategoryImg from '../../assets/Recycler/main_category.jpg';
import heroImg from '../../assets/recycler/hero.avif';
import cameraCaptureImg from '../../assets/recycler/camera_capture.jpg';
import classificationResultImg from '../../assets/recycler/classification_result.jpg';
import logoImg from '../../assets/recycler/Logo.png';
import attendanceImg from '../../assets/recycler/attendance.jpg';
import pointImg from '../../assets/recycler/point.jpg';
import quizImg from '../../assets/recycler/quiz.jpg';
import categoryGuideImg from '../../assets/recycler/category_guide.jpg';
import accuracyGraphImg from '../../assets/recycler/accuracy-graph.png';
import communityShareImg from '../../assets/recycler/community_share.jpg';

export const recyclerProject: Project = {
    id: 'recycler',
    name: 'Recycler',
    client: '캡스톤 디자인',
    description: 'AI 이미지 인식으로 분리배출 방법을 안내하고 참여형 기능으로 실천을 습관화하는 모바일 앱',
    year: '2025',
    tags: ['AI', 'Mobile App', 'Environment', 'Image Classification'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    color: '#1B3D1F',
    bgImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: mainHomeImg,
    secondaryImage: mainCategoryImg,
    foregroundType: 'mobile',
    theme: 'dark',
    accentColor: '#000000',
    layoutConfig: {
        titleStyles: 'absolute bottom-[25%] left-[25%] text-left font-serif z-20 mix-blend-overlay opacity-90',
        descriptionStyles: 'absolute top-[15%] right-[40%] text-right max-w-xs',
        imageWrapperStyles: 'absolute top-[10%] right-[15%] w-[200px] md:w-[280px] aspect-[3/4] rotate-[6deg] shadow-2xl',
        enterAnimation: 'fade-up',
    }
};

export const recyclerDetails: ProjectDetailContent = {
    id: 'recycler',
    media: {
        hero: heroImg,
        visionMain: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop',
        visionToggle1: cameraCaptureImg,
        visionToggle2: classificationResultImg,
        visionGrid1: logoImg,
        visionGrid2: attendanceImg,
        auraBento: mainCategoryImg,
        auraCard: accuracyGraphImg,
        featureInit: categoryGuideImg,
        featureResult: categoryGuideImg,
        widgetImages: [
            attendanceImg,
            pointImg,
            quizImg
        ]
    },
    hero: {
        title: 'Recycler',
        type: 'AI Mobile Application',
        stage: 'Launch',
        deliverables: 'Mobile App, AI Model'
    },
    intro: {
        text: `분리수Go는 AI 이미지
인식으로 분리배출
방법을 안내하고
다양한 기능을 통해 사용자의
지속적인 환경 실천을 유도하는
친환경 모바일 서비스입니다`
    },
    vision: {
        heading: 'Correct recycling, made effortless.',
        text: '복잡한 분리배출 기준 때문에 생기는 혼란을 AI로 줄이고, 퀴즈/출석 같은 참여형 기능을 통해 일상 속에서 자연스럽게 환경 보호 습관을 만들 수 있도록 설계했습니다.',
        image1Title: 'AI Recognition',
        image1Subtitle: 'Camera → Instant Classification',
        image3HoverText: 'Daily Engagement'
    },
    marquee: 'AI • Recycling • Community • Quiz • Attendance • Points • Sustainability • Mobile • ',
    aura: {
        subheading: 'Eco-friendly AI Service',
        heading: 'From camera to correct disposal.',
        text: '사진 한 장으로 쓰레기 종류를 분류하고 분리수거 방법을 안내해 바로 실천하도록 돕습니다. 포인트 보상으로 참여 동기도 강화했습니다.',
        bigText: 'Recycle.',
        card2Text: '"찍고, 확인하고,<br>바로 분리배출"'
    },
    feature: {
        subheading: 'Built with fast.ai',
        heading: 'Recognize waste. Guide disposal.',
        text: '카메라로 촬영한 이미지를 fast.ai 기반 이미지 분류 모델로 분석해 재질(플라스틱/캔/종이/스티로폼/비닐)을 예측하고, 결과에 맞는 분리배출 가이드를 제공합니다.'
    },
    discovery: {
        heading: 'Designed for everyday recycling.',
        items: [
            { img: classificationResultImg, title: "AI 촬영기반 분류" },
            { img: quizImg, title: "퀴즈와 포인트" },
            { img: categoryGuideImg, title: "카테고리별 분리배출 안내" },
            { img: communityShareImg, title: "커뮤니티 나눔" }
        ]
    },
    stats: {
        stat1: { value: '85%+', label: 'AI Classification Accuracy' },
        stat2: { value: '5', label: 'Categories Supported' },
        stat3: { value: '9,999+', label: 'Training Images' }
    }
};
