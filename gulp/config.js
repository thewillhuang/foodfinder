'use strict';

var dest = '../public';
var src = '../app';
var gulp = './gulp';
var neat = require('node-neat').includePaths;
// var compression = require('compression');

module.exports = {
  browserSync: {
    proxy: 'http://localhost:5000',
    port: 8080
    // server: {
    //   // Serve up our build folder
    //   baseDir: dest,
    //   middleware: [compression()]
    // },
  },
  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/sass/',
    settings: {
      sourcemap: true,
      sourceComments: 'map',
      imagePath: '/images', // Used by the imlpage-url helper
      includePaths: ['styles'].concat(neat)
    },
    sourcemap: {
      loadMaps: true
    }
  },
  copy: {
    src: [
      src + '/**/*',
      '!' + src + '/images/**/*',
      '!' + src + '/sass/**/*.{sass,scss}',
      '!' + src + '/**/*.html'
    ], // '!' must be a string
    // '!' + src + '/{js,js/**/*}',
    //'!' + src + '/{plugins,plugins/**/*}',
    dest: dest,
    base: {base: src}
  },
  changed: {
    src: src
  },
  gulp: {
    src: gulp + '/**/*'
  },
  images: {
    src: src + '/images/**/*',
    dest: dest + '/images/'
  },
  markup: {
    src: src + '/**/*.html',
    dest: dest
  },
  nodemon:{
    // nodemon our expressjs server
    script: '../server.js',
    // watch core server file(s) that require server restart on change
    watch: ['../server.js', '../server/**/*'],
    env: { 'NODE_ENV': 'development', 'PORT': 5000 }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      // {
      //   entries: src + '/javascript/global.coffee',
      //   dest: dest,
      //   outputName: 'global.js',
      //   // Additional file extentions to make optional
      //   extensions: ['.coffee', '.hbs'],
      //   // list of modules to make require-able externally
      //   require: ['jquery', 'underscore']
      // },
      // {
      //   entries: src + '/javascript/page.js',
      //   dest: dest,
      //   outputName: 'page.js'
      //   // list of externally available modules to exclude from the bundle
      //   // external: ['jquery', 'underscore']
      // },
      {
        entries: src + '/javascript/app.js',
        dest: dest + '/javascript/',
        outputName: 'app.bundle.js'
      }]
  },
  production: {
    cssSrc: dest + '/sass/**/*.css',
    jsSrc: [
      dest + '/**/*.bundle.js'
      // dest + '/js/**/*.js',
      // '!' + dest + '/js/components/**/*',
      // '!' + dest + '/js/test/**/*',
      // '!' + dest + '/js/vendor/**/*',
      // '!' + dest + '/js/cors/**/*',
      // '!' + dest + '/plugins/**/*.js'
      ],
    cssDest: dest + '/sass/',
    dest: dest,
    cssOpt: {
      keepSpecialComments: 0
    }
  },
  minifyHtml: {
    opts: {
      spare: true
    },
    src: src + '/htdocs/**/*.html',
    dest: dest
  }
};
