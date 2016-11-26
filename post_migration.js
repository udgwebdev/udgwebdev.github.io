const path = require('path');
const moment = require('moment');
const _ = require('lodash');
const fs = require('fs-extra');
const YAML = require('yamljs');
const toMarkdown = require('to-markdown');

const OLD_POSTS = path.join(__dirname, 'public/_oldposts');
const NEW_POSTS = path.join(__dirname, 'public/_posts');
const META_OMIT = ['layout', 'keywords'];

console.log('Migrating UDGWebDev posts...');

fs.emptyDirSync(NEW_POSTS);

_.each(fs.readdirSync(OLD_POSTS), (postFile) => {
  const oldPostData = fs.readFileSync(path.join(OLD_POSTS, postFile), 'utf8');
  const postSlugTitle = postFile.replace(/[\d]{4}-[\d]{2}-[\d]{2}-/, '').replace('.html', '');
  const postPubDate = moment(_.take(postFile.split('-'), 3)).subtract(1, 'month').format('DD/MM/YYYY');
  const postDataSplitted = _.takeRight(oldPostData.split('---\n'), 2);
  const postMetaDataObj = YAML.parse(postDataSplitted[0]);
  const postMetaData = _.extend(_.omit(postMetaDataObj, META_OMIT), { created_at: postPubDate });
  const postContentData = postDataSplitted[1]
    .replace(/\{%\shighlight\s([a-z]*)\s%\}/g, '``` $1')
    .replace(/\{% endhighlight %\}/g, '```')
    .replace(/\{% (raw|endraw) %\}/g, '')
  ;
  const postMarkdownData = toMarkdown(postContentData, { gfm: true });
  console.log(postContentData);
  console.log(postSlugTitle);
  fs.outputFileSync(path.join(NEW_POSTS, postFile.replace('.html', '.md')), postMarkdownData);
  fs.outputJsonSync(path.join(NEW_POSTS, postFile.replace('.html', '.json')), postMetaData);
});
