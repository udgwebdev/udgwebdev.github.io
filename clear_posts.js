const path = require('path');
const _ = require('lodash');
const fs = require('fs-extra');
const posts = require('./public/_data.json');

const PUBLIC_DIR = path.join(__dirname, 'public');

console.log('Cleaning public posts...');

_.forIn(posts, (values, post) => {
  const postPath = path.join(PUBLIC_DIR, post);
  console.log(`Removing: ${postPath}`);
  fs.removeSync(postPath);
});

console.log('Cleaning is done!');
