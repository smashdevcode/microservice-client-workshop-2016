var gulp = require('gulp'),
    config = require('../config');

gulp.task("watch", function () {
    gulp.watch(config.paths.appSource, ['default']);
});