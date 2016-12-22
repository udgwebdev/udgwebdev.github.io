const url = require('url');
const path = require('path');
const RSS = require('rss');
const moment = require('moment');
const _ = require('lodash');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const blog = require('./harp.json').globals;
const posts = require('./public/_data.json');

const ROOT_URL = blog.root_url.production;
const WWW_DIR = path.join(__dirname, 'www');
const MAX_FEED = 20;

const feed = new RSS({
  title: blog.blog_name,
  description: blog.description,
  site_url: ROOT_URL,
  feed_url: url.resolve(ROOT_URL, 'atom.xml'),
  image_url: url.resolve(ROOT_URL, 'images/udgwebdev-logo.png'),
  pubDate: new Date(),
  managingEditor: blog.author,
  webMaster: blog.author,
  ttl: 60
});

console.log('Generating Feed...');

_.chain(posts)
  .orderBy(post => moment(post.created_at, 'DD/MM/YYY').valueOf(), 'desc')
  .take(MAX_FEED)
  .each((post) => {
    if (post.type === 'post') {
      const postFile = path.join(WWW_DIR, `${post.slug}/index.html`);
      const postContent = fs.readFileSync(postFile, 'utf8');
      const $ = cheerio.load(postContent);
      const content = $(`div[data-article="${post.slug}"]`).html();
      post.description = content;
    }
    feed.item({
      title: post.title,
      description: post.description,
      url: url.resolve(ROOT_URL, post.slug),
      categories: post.tags,
      author: blog.author,
      date: moment(post.created_at, 'DD/MM/YYY').toDate()
    });
  })
  .value()
;

const outputFile = path.join(WWW_DIR, 'atom.xml');
fs.outputFileSync(outputFile, feed.xml());
console.log(`Feed created ${outputFile}`);
