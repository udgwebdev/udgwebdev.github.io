const path = require('path');
const _ = require('lodash');
const fs = require('fs-extra');

const PUBLIC = path.join(__dirname, 'public');
const POSTS_DIR = path.join(PUBLIC, '_posts');
const METADATA_DIR = path.join(PUBLIC, '_metadata');

console.log('Preparing posts...');


// TODO REFAZER PEGANDO DADOS DO public/_data.json
_.each(fs.readdirSync(POSTS_DIR), (postFile) => {
  const postKey = postFile.replace(/(.md)+$/, '').replace(/^[\d]{4}-[\d]{2}-[\d]{2}-/, '');
  const postDir = path.join(PUBLIC, postKey);
  console.log(`Post: ${postDir}`);
  fs.emptyDirSync(postDir);
  fs.copySync(path.join(POSTS_DIR, postFile), path.join(postDir, 'index.md'));
});

_.each(fs.readdirSync(METADATA_DIR), (metaFile) => {
  const metaKey = metaFile.replace(/(.json)+$/, '').replace(/^[\d]{4}-[\d]{2}-[\d]{2}-/, '');
  const metaDir = path.join(PUBLIC, metaKey);
  fs.copySync(path.join(METADATA_DIR, metaFile), path.join(metaDir, '_data.json'));
});

console.log('Posts is successfully done!');
