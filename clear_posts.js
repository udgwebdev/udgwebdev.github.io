const path = require('path');
const _ = require('lodash');
const fs = require('fs-extra');

const PUBLIC_DIR = path.join(__dirname, 'public');
const POSTS_DIR = path.join(PUBLIC_DIR, '_posts');

console.log('Cleaning public posts...');

_.each(fs.readdirSync(POSTS_DIR), (postFile) => {
  const key = postFile.replace(/(.md)+$/, '').replace(/^[\d]{4}-[\d]{2}-[\d]{2}-/, '');
  const postFilePath = path.join(PUBLIC_DIR, key);
  console.log(`Removing: ${postFilePath}`);
  fs.removeSync(postFilePath);
});

console.log('Cleaning is done!');
