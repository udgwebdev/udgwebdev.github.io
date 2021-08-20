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
    // Concat =========================================
    concat: {
      options: {
        separator: ';'
      },
      main: {
        src: ['www/assets/js/plugins/*.js', 'www/assets/js/main.js'],
        dest: 'www/assets/js/main.js'
      }
    },
    // Uglify ========================================
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      main: {
        files: [{
          expand: true,
          cwd: 'www/assets/js',
          src: ['main.js'],
          dest: 'www/assets/js'
        }]
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
          { expand: true, flatten: true, src: ['www/assets/js/*'], dest: 'www/assets/js', ext: '.gz.js' },
          { expand: true, flatten: true, src: ['www/assets/css/*'], dest: 'www/assets/css', ext: '.gz.css' }
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
      },
      clear: {
        command: 'node clear_posts.js'
      }
    },
    // CSSMin =========================================
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'www/assets/css',
          src: ['main.css'],
          dest: 'www/assets/css',
          ext: '.css'
        }]
      }
    },
    // PurifyCSS =====================================
    purifycss: {
      target: {
        src: ['www/**/*.{html,js}'],
        css: ['www/assets/css/main.css'],
        dest: 'www/assets/css/main.css'
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-purifycss');

  grunt.registerTask('prebuild:dev', ['clean', 'env:dev', 'newer:imagemin', 'shell:posts']);
  grunt.registerTask('prebuild:prod', ['clean', 'env:prod', 'newer:imagemin', 'shell:posts']);
  grunt.registerTask('build:prod', ['concat', 'uglify', 'purifycss', 'cssmin', 'compress', 'shell:feed']);
  grunt.registerTask('deploy:prod', ['gh-pages', 'clean', 'shell:clear']);
};
