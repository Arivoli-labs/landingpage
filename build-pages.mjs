import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import {ventureMarkup} from './src/content.mjs';
await mkdir('_site',{recursive:true});
const template=await readFile('src/index.html','utf8');
const ventures=JSON.parse(await readFile('data/ventures.json','utf8'));
if(!Array.isArray(ventures))throw Error('ventures.json must contain a list of ventures.');
for(const v of ventures){for(const key of ['id','title','status','summary','audience','note'])if(typeof v[key]!=='string')throw Error('Invalid venture field: '+key);if(!Array.isArray(v.steps)||v.steps.some(s=>typeof s.title!=='string'||typeof s.detail!=='string'))throw Error('Invalid venture steps.');}
await writeFile('_site/index.html',template.replace('__VENTURES__',ventureMarkup(ventures)));
await copyFile('public/logo.webp','_site/logo.webp');await writeFile('_site/.nojekyll','');
console.log('GitHub Pages output ready in _site.');
