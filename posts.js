const path = require('path');
const _ = require('lodash');
const colors = require('colors');
const moment = require('moment');
const fs = require('fs-extra');
const posts = require('./public/_data.json');

const PUBLIC_DIR = path.join(__dirname, 'public');
const POSTS_DIR = path.join(PUBLIC_DIR, '_posts');

console.log('Preparing posts...');

_.forIn(posts, (postData, postKey) => {
  if (postData.published) {
    const postPath = path.join(PUBLIC_DIR, postKey);
    console.log(colors.green(`Published: ${postKey}`));
    fs.emptyDirSync(postPath);
    fs.outputJsonSync(path.join(postPath, '_data.json'), { index: postData });
    if (postData.type === 'redirect') {
      fs.outputFileSync(path.join(postPath, 'index.jade'), '!= partial("../_shared/redirect")');
    } else {
      const postFileToCopy = `${moment(postData.created_at, 'DD/MM/YYYY').format('YYYY-MM-DD')}-${postKey}.md`;
      fs.copySync(path.join(POSTS_DIR, postFileToCopy), path.join(postPath, 'index.md'));
    }
  } else {
    console.log(colors.red(`Not published: ${postKey}`));
  }
});

console.log('Preparing menu page...');

const duplicatedPosts = _.chain(posts)
  .filter(p => p.tags.length > 1)
  .map((p) => {
    const tags = _.clone(p.tags);
    const duplicatedPost = _.map(tags, (tag) => {
      const post = _.clone(p);
      post.tags = [tag];
      return post;
    });
    return duplicatedPost;
  })
  .value()
;

const menu = _.chain(posts)
  .reject(p => p.tags.length > 1)
  .concat(_.flatten(duplicatedPosts))
  .groupBy('tags')
  .map((post, t) => {
    const orderedPosts = _.sortBy(post, p => moment(p.created_at, 'DD/MM/YYYY').toDate());
    return { title: t, posts: orderedPosts.reverse(), total: orderedPosts.length };
  })
  .orderBy('title', 'asc')
  .value()
;

const tags = menu.map((m) => {
  return { title: m.title, total: m.total };
});

const menuData = {
  index: {
    title: 'Menu dos posts',
    description: 'Menu com todos os artigos do blog organizado por tags',
    tags,
    menu
  }
};

fs.outputJsonSync(path.join(PUBLIC_DIR, 'menu/_data.json'), menuData);

console.log('Posts is successfully done!');
