const path = require('path');
const moment = require('moment');
const _ = require('lodash');
const fs = require('fs-extra');
const YAML = require('yamljs');
const toMarkdown = require('to-markdown');

const PUBLIC = path.join(__dirname, 'public');
const OLD_POSTS = path.join(PUBLIC, '_oldposts');
const NEW_POSTS = path.join(PUBLIC, '_posts');
const META_OMIT = ['layout', 'keywords'];
const MARKDOWN_OPTS = {
  gfm: true,
  converters: [
    {
      filter: 'snippet',
      replacement(content, node) {
        const lang = node.getAttribute('id');
        return `\`\`\` ${lang}\n ${content}\n\`\`\``;
      }
    },
    {
      filter: 'figcaption',
      replacement() {
        return '';
      }
    },
    {
      filter: 'line',
      replacement(content, node) {
        const spaces = node.getAttribute('spaces');
        return `${_.repeat(' ', spaces)}${_.unescape(content)}\n`;
      }
    }
  ]
};

console.log('Migrating UDGWebDev posts...');

fs.emptyDirSync(NEW_POSTS);

const postDataJson = {};

_.eachRight(fs.readdirSync(OLD_POSTS), (postFile) => {
  const oldPostData = fs.readFileSync(path.join(OLD_POSTS, postFile), 'utf8');
  const postSlugTitle = postFile.replace(/[\d]{4}-[\d]{2}-[\d]{2}-/, '').replace('.html', '');
  const postPubDateArray = _.take(postFile.split('-'), 3);
  postPubDateArray[1] = +(postPubDateArray[1]) - 1;
  const postPubDate = moment(postPubDateArray).format('DD/MM/YYYY');
  const postSplitPoint = oldPostData.replace(/(---\r\n|---)/g, '---\n').split('---\n');
  const postDataSplitted = _.takeRight(postSplitPoint, 2);
  try {
    const postMetaDataObj = YAML.parse(postDataSplitted[0]);
    const tags = _.isArray(postMetaDataObj.tags) ? postMetaDataObj.tags : [postMetaDataObj.tags];
    const postMetaData = _.extend(_.omit(postMetaDataObj, META_OMIT), {
      slug: postSlugTitle, created_at: postPubDate, tags
    });
    if (!postMetaDataObj.alias_url && !postMetaDataObj.alias) {
      const postContentArray = postDataSplitted[1]
        .replace(/\{%\shighlight\s([a-z]*)\s%\}/g, '<snippet id="$1">')
        .replace(/\{% endhighlight %\}/g, '</snippet>')
        .replace(/\{% (raw|endraw) %\}/g, '')
        .replace(/<figure class="post-image">/g, '')
        .replace(/<div class="post-content">/g, '')
        .replace(/\{\{\ssite.url\s\}\}\//g, '../')
        .replace(/\{%\sinclude\scontent-ads\.ext\s%\}/g, '')
        .split('\n')
      ;
      let isCode = false;
      const postContentData = _.map(postContentArray, (content) => {
        if (_.includes(content, '<snippet id')) { isCode = true; return content; }
        if (_.includes(content, '</snippet>')) { isCode = false; return content; }
        if (isCode) {
          let spaces = 0;
          const contentArray = content.split('');
          while (contentArray[spaces] === ' ') {
            spaces += 1;
          }
          return `<line spaces="${spaces}">${_.escape(content)}</line>`;
        }
        return content;
      }).join('\n');
      const postMarkdownData = `# ${postMetaData.title}\n\n${toMarkdown(postContentData, MARKDOWN_OPTS)}`;
      fs.outputFileSync(path.join(NEW_POSTS, postFile.replace('.html', '.md')), postMarkdownData);
    }
    if (!postMetaDataObj.alias) {
      postDataJson[postMetaData.slug] = postMetaData;
    }
  } catch (e) {
    console.error(`Error processing: ${postFile}`);
    console.error(postDataSplitted);
  }
});

fs.outputJsonSync(path.join(PUBLIC, '_data.json'), postDataJson);

console.log('Migration is done!');
