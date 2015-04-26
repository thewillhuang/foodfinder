'use strict';
var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['copy', 'images', 'minifyCss', 'uglifyJs', 'minifyHtml']);
