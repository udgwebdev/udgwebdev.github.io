const harp = require('./harp.json');

module.exports = (grunt) => {
  const config = {
    // Clean folders =================================
    clean: {
      www: ['www']
    },
    // ENV vars ======================================
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      prod: {
        NODE_ENV: 'production'
      }
    },
    // Compress ======================================
    compress: {
      main: {
        options: {
          mode: 'gzip',
          level: 9,
          pretty: true
        },
        files: [
          { expand: true, flatten: true, src: ['www/js/*.js'], dest: 'www/js', ext: '.gz.js' },
          { expand: true, flatten: true, src: ['www/css/*.css'], dest: 'www/css', ext: '.gz.css' }
        ]
      }
    },
    // Image Optim ===================================
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'public/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/images'
        }]
      }
    },
    // Exec Feed Generator ===========================
    shell: {
      feed: {
        command: 'node feed.js'
      },
      posts: {
        command: 'node posts.js'
      }
    },
    // Sitemap =======================================
    sitemaps: {
      default: {
        options: {
          baseUrl: harp.globals.root_url.production,
          contentRoot: 'www/',
          dest: 'www/'
        },
        files: [{
          expand: true,
          cwd: 'www/',
          src: '**/*.html'
        }]
      }
    },
    // Manifest ======================================
    appcache: {
      options: {
        basePath: 'www',
        baseUrl: harp.globals.root_url.production
      },
      all: {
        dest: 'www/manifest.appcache',
        cache: 'www/**/*',
        network: '*'
      }
    },
    // SW PreCache ===================================
    'sw-precache': {
      options: {
        baseDir: 'www',
        cacheId: harp.globals.slug_name,
        workerFileName: 'sw.js',
        verbose: true,
        handleFetch: true
      },
      default: {
        staticFileGlobs: [
          'index.html',
          '404.html',
          'manifest.json',
          'robots.txt',
          'manifest.appcache',
          'favicon.ico',
          '**/*.{html,css,js,woff,ttf,svg,eot,gif,png,jpg,jpeg}'
        ]
      }
    },
    // Github Pages ==================================
    'gh-pages': {
      options: {
        base: 'www',
        repo: harp.globals.github_repo,
        message: `Deploying ${harp.globals.blog_name}`,
        branch: 'master'
      },
      src: '**/*'
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-appcache');
  grunt.loadNpmTasks('grunt-sitemaps');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sw-precache');

  grunt.registerTask('prebuild:dev', ['clean', 'env:dev', 'newer:imagemin', 'shell:posts']);
  grunt.registerTask('prebuild:prod', ['clean', 'env:prod', 'newer:imagemin', 'shell:posts']);
  grunt.registerTask('build:prod', ['appcache', 'sw-precache', 'compress', 'sitemaps', 'shell:feed']);
  grunt.registerTask('deploy:prod', ['gh-pages', 'clean']);
};
