/**
 * This folder contains all modules that compile to JavaScript. This could
 * include syntaxes like TypeScript, CoffeeScript, ES6, ES7 and so on.
 */

module.exports = function(gulp, config){
  'use strict';

  require('./stylus')(gulp, config);
  require('./sass')(gulp, config);
  require('./postcss')(gulp, config);
  require('./merge')(gulp, config);
  require('../clean/tmp')(gulp, config);

  var tasks = ['styles-postcss', 'styles-merge'];

  // Compile stylus if configured
  if(config.styles.preprocessors.indexOf('stylus') > -1){
    tasks.unshift('styles-stylus');
  }

  // Compile sass if configured
  if(config.styles.preprocessors.indexOf('sass') > -1){
    tasks.unshift('styles-sass');
  }

  gulp.task('styles', tasks);
};