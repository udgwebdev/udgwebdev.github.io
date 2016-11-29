const path = require('path');
const _ = require('lodash');
const moment = require('moment');
const fs = require('fs-extra');
const posts = require('./public/_data.json');

const PUBLIC_DIR = path.join(__dirname, 'public');
const POSTS_DIR = path.join(PUBLIC_DIR, '_posts');

console.log('Preparing posts...');

_.forIn(posts, (postData, postKey) => {
  const postPath = path.join(PUBLIC_DIR, postKey);
  console.log(`Post: ${postKey}`);
  fs.emptyDirSync(postPath);
  fs.outputJsonSync(path.join(postPath, '_data.json'), { index: postData });
  if (!postData.alias_url) {
    const postFileToCopy = `${moment(postData.created_at, 'DD/MM/YYYY').format('YYYY-MM-DD')}-${postKey}.md`;
    fs.copySync(path.join(POSTS_DIR, postFileToCopy), path.join(postPath, 'index.md'));
  }
});

console.log('Posts is successfully done!');
