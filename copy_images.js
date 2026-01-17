const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'project-reference');
const destDir = path.join(__dirname, 'public', 'images', 'ballpang');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const map = {
    '1. 히어로 이미지.png': 'hero.png',
    '2. 비전 섹션 메인 이미지.png': 'vision-main.png',
    '3. 비전 그리드 작은 이미지 1.png': 'vision-grid-1.png',
    '4. 비전 그리드 작은 이미지 2.png': 'vision-grid-2.png',
    '5. 아우라 벤토 이미지.png': 'aura-bento.png',
    '6. 아우라 카드 이미지.png': 'aura-card.png',
    '7. 기능 Before 이미지.png': 'feature-before.png',
    '8. 기능 After 이미지.png': 'feature-after.png'
};

for (const [src, dest] of Object.entries(map)) {
    const srcPath = path.join(srcDir, src);
    const destPath = path.join(destDir, dest);
    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${src} to ${dest}`);
        } else {
            console.error(`Source file not found: ${srcPath}`);
        }
    } catch (e) {
        console.error(`Failed to copy ${src}: ${e.message}`);
    }
}
