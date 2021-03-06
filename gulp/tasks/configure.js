'use strict';

const gulp = require('gulp');
const sequence = require('run-sequence');

gulp.task('configure', cb => {
  sequence('configure:sandbox', 'configure:cron', 'configure:webtasks', cb);
});
