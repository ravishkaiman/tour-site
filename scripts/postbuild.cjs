// Generate 404.html (SPA fallback) and .nojekyll for GitHub Pages
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');
const noJekyllPath = path.join(distDir, '.nojekyll');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Copy index.html to 404.html for client-side routing
try {
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  fs.writeFileSync(notFoundPath, indexHtml, 'utf8');
  console.log('Created dist/404.html');
} catch (err) {
  console.error('Failed to create 404.html:', err);
  process.exit(1);
}

// Create .nojekyll to disable Jekyll processing
try {
  fs.writeFileSync(noJekyllPath, '', 'utf8');
  console.log('Created dist/.nojekyll');
} catch (err) {
  console.error('Failed to create .nojekyll:', err);
  process.exit(1);
}


