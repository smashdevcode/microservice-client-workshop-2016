var gulp = require("gulp"),
    rimraf = require("rimraf"),
    config = require('../config');

    gulp.task("clean_js", function (cb) {
        rimraf(config.paths.js + 'index.js', cb);
    });