const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/dashboard/category/[name]/category-page-content.tsx',
  'src/app/dashboard/dashboard-empty-state.tsx',
  'src/components/landing/cyber-background.tsx',
  'src/components/landing/glass-effects.tsx',
  'src/app/dashboard/layout.tsx',
  'src/components/navbar.tsx',
  'src/components/landing/landing-page-content.tsx',
  'src/app/dashboard/(settings)/account-settings/settings-page-content.tsx',
  'src/components/landing/neo-button.tsx',
  'src/components/landing/index.ts'
];

for (const file of filesToUpdate) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/neo-divider/g, 'modern-divider');
    content = content.replace(/neo-bg-pattern/g, 'modern-bg-pattern');
    content = content.replace(/neo-card/g, 'modern-card');
    content = content.replace(/neo-btn/g, 'modern-btn');
    content = content.replace(/NeoButton/g, 'ModernButton');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
