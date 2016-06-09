/**
 * Thanks to Dan Tello from gulp-starter for the original code.
 * https://github.com/vigetlabs/gulp-starter/
 */

var gutil = require('gulp-util')
var prettifyTime = require('./prettifyTime')
var handleErrors = require('./handleErrors')

module.exports = function (err, stats) {
  'use strict'

  if (err) {
    throw new gutil.PluginError('webpack', err)
  }

  var statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow'

  if (stats.compilation.errors.length > 0) {
    stats.compilation.errors.forEach(function (error) {
      handleErrors(error)
      statColor = 'red'
    })
  } else {
    var compileTime = prettifyTime(stats.endTime - stats.startTime)
    gutil.log(gutil.colors[ statColor ](stats))
    gutil.log('Compiled with craffft in', gutil.colors.magenta(compileTime))
  }
};