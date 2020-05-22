// This gulp asset pipeline supports linting of scss and js files along with
// compiling and bundling css and js files into static/assets/ directories to
// be used by Hugo.

// Bring in individual gulp configs
require('./config/gulp/flags');
require('./config/gulp/styles');
require('./config/gulp/scripts');
require('./config/gulp/images');
require('./config/gulp/fonts');
require('./config/gulp/data');
require('./config/gulp/deploy');
var build = require('./config/gulp/build');
var runSequence = require('run-sequence');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', function (done) {
  build.printPackageInfo(done);
  gutil.log('Available tasks');
  gutil.log('$', gutil.colors.magenta('gulp watch'));
  gutil.log('Watch for changes. Note: must run gulp website in new terminal to view changes');
  gutil.log('$', gutil.colors.magenta('gulp build'));
  gutil.log('Build the asset-pipeline with optional production and no-test flags');
  gutil.log('$', gutil.colors.magenta('gulp cleanAll'));
  gutil.log('Removes files and directories generated by gulp');
  gutil.log('$', gutil.colors.magenta('gulp website'));
  gutil.log('Runs the gulp watch and hugo serve');
  gutil.log('$', gutil.colors.magenta('gulp buildWebsite'));
  gutil.log('Build the asset-pipeline and the website using Hugo. Note: run hugo server to view site ');
  done();
});

gulp.task('test', gulp.series('eslint', 'scss-lint'), function (done) {
  build.printPackageInfo();
  done();
})
