const gulp = require('gulp');
const paths = require('../paths');

const db = () => {
  return gulp
  .src(paths.src.db)
  .pipe(gulp.dest(paths.build.db));
};

module.exports = db;
