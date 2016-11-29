const path = require('path');
const _ = require('lodash');
const fs = require('fs-extra');

const PUBLIC = path.join(__dirname, 'public');
const POSTS_DIR = path.join(PUBLIC, '_posts');

console.log('Preparing posts...');

_.each(fs.readdirSync(POSTS_DIR), (postFile) => {
  const postKey = postFile.replace(/(.md)+$/, '').replace(/^[\d]{4}-[\d]{2}-[\d]{2}-/, '');
  const postDir = path.join(PUBLIC, postKey);
  console.log(`Post: ${postDir}`);
  fs.emptyDirSync(postDir);
  fs.copySync(path.join(POSTS_DIR, postFile), path.join(postDir, 'index.md'));
});

console.log('Posts is successfully done!');
