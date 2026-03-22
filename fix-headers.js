import fs from 'fs';

const content = fs.readFileSync('src/data/knowledgeArticles.ts', 'utf-8');

const fixed = content.replace(/content:\s*`([^`]*)`/gs, (match, content) => {
  // Remove # symbols and their following newline
  let clean = content
    .replace(/^#\s+[^\n]*\n+/gm, '')
    .replace(/^##\s+[^\n]*\n+/gm, '')
    .replace(/^###\s+[^\n]*\n+/gm, '')
    .replace(/^####\s+[^\n]*\n+/gm, '')
    .replace(/^#####\s+[^\n]*\n+/gm, '');
  
  return 'content: `' + clean + '`';
});

fs.writeFileSync('src/data/knowledgeArticles.ts', fixed, 'utf-8');
console.log('Fixed successfully!');
