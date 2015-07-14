var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  var options = {node: true};
  return gulp.src(['./gulpfile.js', './js/*.js'])
    .pipe(jshint(options))
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint']);
