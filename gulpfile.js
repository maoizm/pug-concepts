'use strict'

const gulp= require('gulp');
const pug = require('gulp-pug');

function buildHTML() {
  return gulp.src('bootstrap.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('.'))
}

gulp.task('default', buildHTML);

